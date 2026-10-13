const fs = require('fs');
const path = require('path');

console.log('Building Final Master SQ3R Platform for Grade 7 & Grade 8...');

// 1. Load the compiled master database
const masterCurriculum = JSON.parse(fs.readFileSync(path.join(__dirname, 'master_curriculum.json'), 'utf8'));

// 2. Read the current index.html to preserve the styling, audio engine, and HTML framework
const existingHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Find insertion points
// We want to replace the database section and state/progression logic
const dbMarkerStart = existingHtml.indexOf('const GALACTIC_DATABASE =');
const logicMarkerStart = existingHtml.indexOf('const DEFAULT_GALACTIC_STATE =');

if (dbMarkerStart === -1 || logicMarkerStart === -1) {
  console.error('Could not locate markers in index.html!');
  process.exit(1);
}

// Prepare the new JavaScript database string
const dbJsString = `const GALACTIC_DATABASE = ${JSON.stringify(masterCurriculum, null, 2)};\n`;

// Prepare updated core state and progression logic
const stateAndLogicJsString = `
    const DEFAULT_GALACTIC_STATE = {
      grade: 7,
      activeSubject: 'math',
      activeUnitId: 'g7-m-u1',
      activeSubtopicId: 'g7-m-1.1',
      currentStep: 'survey',
      gateBypass: false,
      xp: 450,
      level: 2,
      gems: 150,
      streak: 5,
      avatar: '🦁',
      title: 'Galactic Adept',
      totalQuizzesDone: 12,
      totalCardsMastered: 38,
      unlockedBadges: ['pioneer', 'streak5', 'curious', 'amtSolver', 'mathTitan', 'scienceLab'],
      completedSteps: {
        'g7-m-1.1': ['survey']
      },
      masteredSubtopics: {
        // e.g. 'g7-m-1.1': { passed: true, score: 100, timestamp: Date.now() }
      }
    };

    let gState = JSON.parse(localStorage.getItem('sq3r_galactic_state')) || DEFAULT_GALACTIC_STATE;
    if (!gState.masteredSubtopics) gState.masteredSubtopics = {};

    function saveState() {
      localStorage.setItem('sq3r_galactic_state', JSON.stringify(gState));
      renderHeaderStats();
    }

    // =========================================================================
    // PROGRESSION ORDER & UNLOCK CHECKS (STRICT 80% GATE)
    // =========================================================================
    function getAllSubtopicsForSubject(grade, subjectId) {
      const subj = GALACTIC_DATABASE[grade][subjectId];
      if (!subj || !subj.units) return [];
      const list = [];
      subj.units.forEach(u => {
        if (u.subtopics) {
          u.subtopics.forEach(st => {
            list.push({ ...st, unitId: u.id, unitNumber: u.number, unitTitle: u.title });
          });
        }
      });
      return list;
    }

    function isSubtopicUnlocked(subtopicId, subjectId = null, grade = null) {
      if (gState.gateBypass) return true;
      const g = grade || gState.grade;
      const s = subjectId || gState.activeSubject;
      const allSubtopics = getAllSubtopicsForSubject(g, s);
      const idx = allSubtopics.findIndex(st => st.id === subtopicId);
      
      // The very first subtopic in a subject is always unlocked
      if (idx <= 0) return true;

      // Every subsequent subtopic requires the PREVIOUS subtopic to be passed with >= 80%
      const prevSubtopic = allSubtopics[idx - 1];
      const prevMastery = gState.masteredSubtopics && gState.masteredSubtopics[prevSubtopic.id];
      return !!(prevMastery && prevMastery.passed);
    }

    function isSubtopicMastered(subtopicId) {
      return !!(gState.masteredSubtopics && gState.masteredSubtopics[subtopicId]?.passed);
    }

    function getSubtopicScore(subtopicId) {
      return gState.masteredSubtopics && gState.masteredSubtopics[subtopicId]?.score || 0;
    }

    // =========================================================================
    // SOUND & XP LOGIC
    // =========================================================================
    function addXp(amount, reason = '') {
      gState.xp += amount;
      const nextLevelXp = gState.level * 250;
      if (gState.xp >= nextLevelXp) {
        gState.level++;
        gState.gems += 60;
        triggerConfetti();
        showToast(\`🎉 LEVEL UP! You reached Level \${gState.level}! (+60 💎)\`);
      } else {
        showToast(\`+\${amount} XP \${reason ? '• ' + reason : ''}\`);
      }
      saveState();
    }

    function addGems(amount) {
      gState.gems += amount;
      saveState();
      showToast(\`+\${amount} Gems! 💎\`);
    }

    function showToast(msg) {
      const c = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = 'glass-card px-4 py-3 rounded-xl border border-indigo-500/40 text-white font-bold text-xs shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto';
      toast.innerHTML = \`<span>⚡</span> <span>\${msg}</span>\`;
      c.appendChild(toast);
      setTimeout(() => toast.classList.remove('translate-y-4', 'opacity-0'), 10);
      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

    function toggleGateBypass(isChecked) {
      gState.gateBypass = isChecked;
      saveState();
      updateStageLockIcons();
      populateDropdowns();
      renderCurriculumMatrix();
      renderLevelMap();
      showToast(isChecked ? '🔓 Free-Roam Mode Activated (All Levels Unlocked)' : '🔒 Strict Mastery Gate Activated (Must Pass Current Level to Advance)');
    }

    // =========================================================================
    // GRADE & SUBJECT SWITCHERS
    // =========================================================================
    function setGrade(gradeNumber) {
      soundClick();
      gState.grade = gradeNumber;

      const g7Btn = document.getElementById('gradeToggle-7');
      const g8Btn = document.getElementById('gradeToggle-8');
      if (gradeNumber === 7) {
        g7Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-600/30';
        g8Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 text-slate-400 hover:text-white';
      } else {
        g8Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-600/30';
        g7Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 text-slate-400 hover:text-white';
      }

      document.getElementById('activeGradeLabel').innerText = \`Grade \${gradeNumber}\`;
      document.getElementById('activeGradeBadge').innerText = \`Grade \${gradeNumber}\`;
      document.getElementById('matrixGradePill').innerText = \`Grade \${gradeNumber}\`;

      const subjects = GALACTIC_DATABASE[gradeNumber];
      gState.activeSubject = 'math';
      const firstUnit = subjects.math.units[0];
      gState.activeUnitId = firstUnit.id;
      gState.activeSubtopicId = firstUnit.subtopics[0].id;
      gState.currentStep = 'survey';
      saveState();

      renderSubjectPills();
      populateDropdowns();
      renderActiveUnitView();
      renderCurriculumMatrix();
      renderVault();
      renderAmtExam();
      renderLevelMap();
      showToast(\`Switched to Grade \${gradeNumber} Curriculum! 🎒\`);
    }

    function renderSubjectPills() {
      const container = document.getElementById('subjectPillsContainer');
      const subjects = GALACTIC_DATABASE[gState.grade];
      container.innerHTML = '';

      Object.values(subjects).forEach(sub => {
        const isSelected = gState.activeSubject === sub.id;
        const btn = document.createElement('button');
        btn.onclick = () => selectSubject(sub.id);
        btn.className = \`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition whitespace-nowrap \${
          isSelected 
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
            : 'bg-space-900 border border-slate-800 text-slate-300 hover:bg-space-850 hover:text-white'
        }\`;
        btn.innerHTML = \`<span>\${sub.icon}</span> <span>\${sub.name}</span>\`;
        container.appendChild(btn);
      });
    }

    function selectSubject(subId) {
      soundClick();
      gState.activeSubject = subId;
      const sub = GALACTIC_DATABASE[gState.grade][subId];
      const firstUnit = sub.units[0];
      gState.activeUnitId = firstUnit.id;
      gState.activeSubtopicId = firstUnit.subtopics[0].id;
      gState.currentStep = 'survey';
      saveState();

      renderSubjectPills();
      populateDropdowns();
      renderActiveUnitView();
      renderCurriculumMatrix();
      renderVault();
      renderAmtExam();
      renderLevelMap();
    }

    function populateDropdowns() {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const unitSel = document.getElementById('unitSelector');
      unitSel.innerHTML = '';
      sub.units.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.id;
        opt.text = \`\${u.number}: \${u.title}\`;
        opt.selected = u.id === gState.activeUnitId;
        unitSel.appendChild(opt);
      });

      populateSubtopicDropdown();
    }

    function populateSubtopicDropdown() {
      const unit = getActiveUnit();
      const subSel = document.getElementById('subtopicSelector');
      subSel.innerHTML = '';
      unit.subtopics.forEach(st => {
        const opt = document.createElement('option');
        opt.value = st.id;
        const unlocked = isSubtopicUnlocked(st.id);
        const mastered = isSubtopicMastered(st.id);
        const prefix = mastered ? '⭐ ' : (unlocked ? '🔓 ' : '🔒 ');
        const suffix = mastered ? ' (Mastered)' : (!unlocked ? ' (Locked - Pass Level First)' : '');
        opt.text = \`\${prefix}\${st.code} \${st.title}\${suffix}\`;
        opt.selected = st.id === gState.activeSubtopicId;
        subSel.appendChild(opt);
      });
    }

    function changeUnit(unitId) {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const unit = sub.units.find(u => u.id === unitId) || sub.units[0];
      const firstSt = unit.subtopics[0];

      if (!isSubtopicUnlocked(firstSt.id)) {
        soundError();
        showToast(\`🔒 UNIT LOCKED: Pass previous topics first before entering \${unit.number}!\`);
        populateDropdowns();
        return;
      }

      soundClick();
      gState.activeUnitId = unitId;
      gState.activeSubtopicId = firstSt.id;
      gState.currentStep = 'survey';
      saveState();
      populateSubtopicDropdown();
      renderActiveUnitView();
      renderLevelMap();
    }

    function changeSubtopic(subtopicId) {
      if (!isSubtopicUnlocked(subtopicId)) {
        soundError();
        showToast('🔒 ACCESS LOCKED: You must score ≥80% on the prerequisite level test to unlock this mission!');
        populateSubtopicDropdown();
        return;
      }

      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      let parentUnit = null;
      for (const u of sub.units) {
        if (u.subtopics && u.subtopics.some(st => st.id === subtopicId)) {
          parentUnit = u;
          break;
        }
      }
      if (parentUnit) {
        gState.activeUnitId = parentUnit.id;
      }

      soundClick();
      gState.activeSubtopicId = subtopicId;
      gState.currentStep = 'survey';
      saveState();
      populateDropdowns();
      renderActiveUnitView();
      renderLevelMap();
    }

    function getActiveUnit() {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      // If activeSubtopicId belongs to a specific unit, make sure that unit is returned
      if (gState.activeSubtopicId) {
        for (const u of sub.units) {
          if (u.subtopics && u.subtopics.some(st => st.id === gState.activeSubtopicId)) {
            gState.activeUnitId = u.id;
            return u;
          }
        }
      }
      return sub.units.find(u => u.id === gState.activeUnitId) || sub.units[0];
    }

    function getActiveSubtopic() {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const unit = getActiveUnit();
      let st = unit.subtopics ? unit.subtopics.find(s => s.id === gState.activeSubtopicId) : null;
      if (st) return st;

      for (const u of sub.units) {
        if (u.subtopics) {
          st = u.subtopics.find(s => s.id === gState.activeSubtopicId);
          if (st) {
            gState.activeUnitId = u.id;
            return st;
          }
        }
      }
      return unit.subtopics[0];
    }

    function renderActiveUnitView() {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const unit = getActiveUnit();
      const st = getActiveSubtopic();

      document.getElementById('activeSubjectBadge').innerText = sub.name.toUpperCase();
      document.getElementById('activeUnitNumber').innerText = unit.number;
      document.getElementById('activeSubtopicBadge').innerText = \`Subtopic \${st.code}\`;
      document.getElementById('activeUnitTitle').innerText = \`\${unit.title} • \${st.code} \${st.title}\`;
      document.getElementById('activeUnitBigIdea').innerText = unit.bigIdea;

      // Update unit selector to match
      const unitSel = document.getElementById('unitSelector');
      if (unitSel) unitSel.value = unit.id;
      const subSel = document.getElementById('subtopicSelector');
      if (subSel) subSel.value = st.id;

      updateStageLockIcons();
      renderCurrentStep();
      renderLevelMap();
    }

    // =========================================================================
    // PROGRESSION GATE & STEP LOCK SYSTEM (SQ3R WITHIN A SUBTOPIC)
    // =========================================================================
    const STAGE_ORDER = ['survey', 'question', 'read', 'recite', 'review'];

    function isStepUnlocked(stepName) {
      // Intra-level study steps (Survey, Question, Read, Recite, Review) are ALWAYS accessible
      // so students can freely study notes, review worked examples, and practice recall!
      return true;
    }

    function updateStageLockIcons() {
      const stId = gState.activeSubtopicId;
      const completed = gState.completedSteps[stId] || [];

      STAGE_ORDER.forEach(s => {
        const isDone = completed.includes(s);
        const isUnlocked = isStepUnlocked(s);
        const indicator = document.getElementById(\`gateIndicator-\${s}\`);
        if (indicator) {
          if (isDone) {
            indicator.className = 'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-emerald-600 text-white shadow-sm';
            indicator.innerText = '✔';
          } else if (isUnlocked) {
            indicator.className = 'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-indigo-600 text-white shadow-sm';
            indicator.innerText = s.charAt(0).toUpperCase();
          } else {
            indicator.className = 'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-space-800 text-slate-500 border border-slate-700';
            indicator.innerText = '🔒';
          }
        }
      });

      const doneCount = completed.length;
      const pct = Math.round((doneCount / STAGE_ORDER.length) * 100);
      const isMastered = isSubtopicMastered(stId);
      document.getElementById('unitProgressPercent').innerText = isMastered 
        ? \`⭐ Level Mastered (\${getSubtopicScore(stId)}% Score)\`
        : \`Topic Mastery: \${pct}% Complete\`;
    }

    function markStepCompleted(stepName) {
      const stId = gState.activeSubtopicId;
      if (!gState.completedSteps[stId]) gState.completedSteps[stId] = [];
      if (!gState.completedSteps[stId].includes(stepName)) {
        gState.completedSteps[stId].push(stepName);
        saveState();
        updateStageLockIcons();
      }
    }

    function setSq3rStep(stepName) {
      if (!isStepUnlocked(stepName)) {
        soundError();
        showToast('🔒 Complete the previous SQ3R stage first to unlock this section!');
        return;
      }

      soundClick();
      gState.currentStep = stepName;
      saveState();

      // Update Tab Buttons UI
      STAGE_ORDER.forEach(s => {
        const btn = document.getElementById(\`sq3rBtn-\${s}\`);
        if (btn) {
          if (s === stepName) {
            btn.className = 'flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/30';
          } else {
            btn.className = 'flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition bg-space-900 border border-slate-800 text-slate-400 hover:bg-space-850 hover:text-white';
          }
        }
      });

      renderCurrentStep();
    }

    // =========================================================================
    // VISUAL GALACTIC EXPEDITION MAP (PROGRESSION PATH)
    // =========================================================================
    function renderLevelMap() {
      const mapContainer = document.getElementById('levelMapContainer');
      if (!mapContainer) return;

      const subtopics = getAllSubtopicsForSubject(gState.grade, gState.activeSubject);
      const curStId = gState.activeSubtopicId;

      let html = \`
        <div class="glass-card p-5 rounded-2xl border border-slate-800 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span class="text-[10px] font-black uppercase text-indigo-400 tracking-wider">EXPEDITION ROADMAP</span>
              <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>🌌</span> <span>Mission Path: \${GALACTIC_DATABASE[gState.grade][gState.activeSubject].name}</span>
              </h3>
            </div>
            <div class="text-xs font-mono text-cyan-400 font-bold bg-space-950 px-3 py-1.5 rounded-lg border border-slate-800">
              \${subtopics.filter(s => isSubtopicMastered(s.id)).length} / \${subtopics.length} Levels Conquered
            </div>
          </div>

          <div class="flex items-center gap-3 overflow-x-auto py-3 px-1 no-scrollbar">
      \`;

      subtopics.forEach((st, idx) => {
        const mastered = isSubtopicMastered(st.id);
        const unlocked = isSubtopicUnlocked(st.id);
        const isCurrent = st.id === curStId;
        const score = getSubtopicScore(st.id);

        let nodeColor = '';
        let nodeIcon = '';
        let nodeLabel = '';

        if (mastered) {
          nodeColor = 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-md shadow-amber-500/20';
          nodeIcon = '⭐';
          nodeLabel = \`Mastered (\${score}%)\`;
        } else if (isCurrent) {
          nodeColor = 'bg-indigo-950 border-cyan-400 text-cyan-300 ring-2 ring-cyan-500/50 animate-pulse';
          nodeIcon = '🚀';
          nodeLabel = 'Active Mission';
        } else if (unlocked) {
          nodeColor = 'bg-space-900 border-indigo-500 text-indigo-300';
          nodeIcon = '🔓';
          nodeLabel = 'Unlocked';
        } else {
          nodeColor = 'bg-space-950/60 border-slate-800 text-slate-600 opacity-60';
          nodeIcon = '🔒';
          nodeLabel = 'Locked';
        }

        html += \`
          <button onclick="changeSubtopic('\${st.id}')" class="shrink-0 p-3 rounded-xl border flex flex-col items-center text-center w-36 transition hover:scale-105 \${nodeColor}">
            <div class="text-xl mb-1">\${nodeIcon}</div>
            <div class="text-xs font-black truncate w-full">\${st.code} \${st.title}</div>
            <div class="text-[9px] uppercase tracking-wider mt-1 opacity-80">\${nodeLabel}</div>
          </button>
        \`;

        if (idx < subtopics.length - 1) {
          html += \`<div class="shrink-0 text-slate-700 text-xs font-bold">➔</div>\`;
        }
      });

      html += \`
          </div>
        </div>
      \`;

      mapContainer.innerHTML = html;
    }

    // =========================================================================
    // RENDER CURRENT SQ3R STEP
    // =========================================================================
    function renderCurrentStep() {
      const container = document.getElementById('stepContentContainer');
      const st = getActiveSubtopic();
      const s = gState.currentStep;

      // 1. SURVEY
      if (s === 'survey') {
        container.innerHTML = \`
          <div class="space-y-6 animate-fadeIn">
            <!-- Tactical Holo-Scanner HUD -->
            <div class="glass-holo p-6 rounded-2xl border border-indigo-500/40 relative overflow-hidden">
              <div class="scanner-sweep absolute inset-0 pointer-events-none opacity-30"></div>

              <div class="flex items-center justify-between flex-wrap gap-4 relative z-10 border-b border-indigo-500/30 pb-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-xl text-cyan-300 font-black">
                    🛰️
                  </div>
                  <div>
                    <span class="text-xs uppercase font-black text-cyan-400 tracking-wider">STAGE 1 OF 5 • TACTICAL RECONNAISSANCE</span>
                    <h3 class="text-lg sm:text-xl font-black text-white">Cosmic Holo-Scanner • Scout the Big Picture</h3>
                  </div>
                </div>

                <!-- 2-Minute Tactical Scout Countdown Timer -->
                <div class="flex items-center gap-2 bg-space-950 px-3.5 py-1.5 rounded-xl border border-cyan-500/30">
                  <span class="text-xs font-black text-slate-400">SCOUT TIMER:</span>
                  <span id="surveyTimerDisplay" class="font-mono text-xs font-bold text-cyan-400">02:00</span>
                  <button onclick="toggleSurveyTimer()" id="surveyTimerBtn" class="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold hover:bg-cyan-500/30 transition">Start</button>
                  <button onclick="resetSurveyTimer()" class="text-xs px-1.5 py-0.5 rounded text-slate-400 hover:text-white transition">↺</button>
                </div>
              </div>

              <!-- Blueprint & Big Idea -->
              <div class="mt-5 space-y-4 relative z-10">
                <div class="p-4 rounded-xl bg-space-900/90 border border-slate-800 space-y-2">
                  <div class="text-[10px] uppercase font-black text-indigo-400 tracking-widest flex items-center gap-1.5">
                    <span>📡</span> <span>HIGH-LEVEL ARCHITECTURAL BLUEPRINT</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    \${st.survey.blueprint}
                  </p>
                </div>

                \${st.survey.keyFormulas ? \`
                  <div class="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between gap-3 flex-wrap">
                    <div class="flex items-center gap-2">
                      <span class="text-sm">⚡</span>
                      <span class="text-xs font-black text-cyan-300">CORE THEOREM / FORMULA / LAW:</span>
                    </div>
                    <code class="font-mono text-xs font-bold text-amber-300 bg-space-950 px-2.5 py-1 rounded-lg border border-slate-800">
                      \${st.survey.keyFormulas}
                    </code>
                  </div>
                \` : ''}
              </div>

              <!-- 📖 Skimmable Textbook Overview Notes (Read & Skim in 2 Minutes) -->
              <div class="mt-6 pt-5 border-t border-slate-800/80 relative z-10 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-base">📖</span>
                    <h4 class="text-xs font-black text-amber-400 uppercase tracking-wider">SKIMMABLE TEXTBOOK OVERVIEW & KEY CONCEPTS:</h4>
                  </div>
                  <span class="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Active Skim Zone</span>
                </div>

                <div class="p-4 rounded-xl bg-space-950/80 border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  \${st.coreNotes}
                </div>

                <div class="pt-2 flex justify-between items-center flex-wrap gap-2 text-xs">
                  <span class="text-slate-400">Want the in-depth working examples & proofs?</span>
                  <button onclick="setSq3rStep('read')" class="px-3.5 py-1.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-cyan-300 font-bold text-xs transition flex items-center gap-1.5">
                    <span>Open Deep Read & Worked Examples (R1)</span> <span>➔</span>
                  </button>
                </div>
              </div>

              <!-- Interactive Recon Scout Checklist -->
              <div class="mt-6 pt-5 border-t border-slate-800/80 relative z-10 space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <span>🔭</span> <span>Mission Scouting Checklist (Verify all 3 objectives):</span>
                  </h4>
                  <span id="checklistProgressBadge" class="text-xs font-mono text-amber-400 font-bold">0 / \${st.survey.objectives.length} Verified</span>
                </div>

                <div class="space-y-2">
                  \${st.survey.objectives.map((obj, i) => \`
                    <label class="flex items-start gap-3 p-3 rounded-xl bg-space-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition">
                      <input type="checkbox" id="surveyCheck-\${i}" onchange="checkSurveyCompletion()" class="mt-0.5 rounded text-indigo-500 focus:ring-0">
                      <span class="text-xs text-slate-300 font-medium">\${obj}</span>
                    </label>
                  \`).join('')}
                </div>
              </div>

              <div class="mt-6 flex justify-end relative z-10">
                <button onclick="finishSurveyStep()" id="finishSurveyBtn" class="px-6 py-3 rounded-xl bg-space-800 text-slate-500 font-black text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2">
                  <span>Verify Checklist to Unlock Questions</span> <span>🔒</span>
                </button>
              </div>
            </div>
          </div>
        \`;
        initSurveyTimer();
        checkSurveyCompletion();
      }

      // 2. QUESTION
      else if (s === 'question') {
        container.innerHTML = \`
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-xs uppercase font-black text-cyan-400 tracking-wider">STAGE 2 OF 5 • INQUIRY & CURIOSITY TRIGGER (Q)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">Turn Topics into Burning Questions</h3>
              <p class="text-xs sm:text-sm text-slate-400">Curiosity primes the brain to retain knowledge like a magnet. Formulate your hypotheses before reading.</p>
            </div>

            <div class="space-y-4">
              \${st.questions.map((qText, qIdx) => \`
                <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-black text-indigo-400">
                    <span>❓</span> <span>KEY INQUIRY PROMPT \${qIdx+1}:</span>
                  </div>
                  <h4 class="text-xs sm:text-sm font-bold text-white leading-relaxed">\${qText}</h4>
                  <textarea placeholder="Type your prediction or notes here before reading the solution below..." class="w-full bg-space-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none h-16 resize-none"></textarea>
                </div>
              \`).join('')}
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
              <button onclick="setSq3rStep('survey')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Survey</button>
              <button onclick="finishQuestionStep()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Lock In Hypotheses & Deep Read (+35 XP)</span> <span>👉</span>
              </button>
            </div>
          </div>
        \`;
      }

      // 3. READ
      else if (s === 'read') {
        container.innerHTML = \`
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-xs uppercase font-black text-emerald-400 tracking-wider">STAGE 3 OF 5 • DEEP COMPREHENSION (R1)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">Deep Reading & Fully Worked Examples</h3>
              <p class="text-xs sm:text-sm text-slate-400">Read with laser focus to confirm or refute your hypotheses. Study each labeled step of the worked example.</p>
            </div>

            <!-- Core Textbook Notes -->
            <div class="space-y-4">
              <div class="text-xs uppercase font-black text-slate-400 tracking-wider flex items-center gap-2">
                <span>📖</span> <span>CURRICULUM EXPLANATION & DERIVATION</span>
              </div>
              \${st.coreNotes}
            </div>

            <!-- Detailed Working Example -->
            <div class="p-5 rounded-2xl bg-space-950 border border-indigo-500/30 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <span class="text-xs font-black text-indigo-400 flex items-center gap-2">
                  <span>💡</span> FULLY WORKED STEP-BY-STEP EXAMPLE
                </span>
                <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">Master Method</span>
              </div>
              
              <h4 class="text-xs sm:text-sm font-black text-white">\${st.example.title}</h4>
              <p class="text-xs text-slate-300 font-mono bg-space-900 p-3 rounded-xl border border-slate-800">\${st.example.problem}</p>

              <div class="space-y-2.5 pt-1">
                \${st.example.steps.map(step => \`
                  <div class="p-3 rounded-xl bg-space-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <span class="font-bold text-cyan-400">\${step.label}:</span>
                    <p class="text-slate-300">\${step.text}</p>
                  </div>
                \`).join('')}
              </div>

              \${st.example.proTip ? \`
                <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
                  <span class="text-sm">⚠️</span>
                  <span><strong>Pro-Tip:</strong> \${st.example.proTip}</span>
                </div>
              \` : ''}
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
              <button onclick="setSq3rStep('question')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Questions</button>
              <button onclick="finishReadStep()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Concepts Mastered! Proceed to Recite (+45 XP)</span> <span>👉</span>
              </button>
            </div>
          </div>
        \`;
      }

      // 4. RECITE
      else if (s === 'recite') {
        currentCardIndex = 0;
        isCardFlipped = false;
        container.innerHTML = \`
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-xs uppercase font-black text-violet-400 tracking-wider">STAGE 4 OF 5 • ACTIVE RECALL & RETRIEVAL (R2)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">Recite • Active Recall Flashcard Arena</h3>
              <p class="text-xs sm:text-sm text-slate-400">Do not look at the answer! Say the derivation or formula out loud, then tap to verify.</p>
            </div>

            <!-- Interactive 3D Flip Flashcard -->
            <div class="max-w-xl mx-auto py-2">
              <div onclick="flipFlashcard()" id="activeFlashcard" class="glass-holo h-56 sm:h-64 rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-violet-500/40 relative shadow-2xl transition hover:border-violet-400">
                <span id="flashcardSideLabel" class="text-[10px] uppercase font-bold text-indigo-400 tracking-widest absolute top-4 left-4">QUESTION</span>
                <span class="text-xs text-slate-500 absolute top-4 right-4">Tap to flip ↺</span>

                <div class="my-auto text-center">
                  <h4 id="flashcardContent" class="text-base sm:text-lg font-black text-white leading-relaxed">
                    \${st.reciteFlashcards[0].q}
                  </h4>
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400">
                  <span id="flashcardCounter">Card 1 of \${st.reciteFlashcards.length}</span>
                  <span class="text-violet-400 font-bold">Active Memory Challenge</span>
                </div>
              </div>

              <!-- Flashcard Navigation Controls -->
              <div class="flex items-center justify-center gap-3 mt-5">
                <button onclick="prevFlashcard()" class="px-4 py-2 rounded-xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white">← Previous</button>
                <button onclick="flipFlashcard()" class="px-4 py-2 rounded-xl bg-space-850 border border-violet-500/30 text-xs font-bold text-violet-300 hover:text-white">Flip Card ↺</button>
                <button onclick="markFlashcardMastered()" class="px-4 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300 hover:bg-emerald-600/30">Mastered ✔</button>
                <button onclick="nextFlashcard()" class="px-4 py-2 rounded-xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white">Next →</button>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
              <button onclick="setSq3rStep('read')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Read</button>
              <button onclick="finishReciteStep()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-violet-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Enter AMT Mastery Exam Stage (+45 XP)</span> <span>👉</span>
              </button>
            </div>
          </div>
        \`;
      }

      // 5. REVIEW / AMT EXAM (WITH STRICT 80% PASS GATE)
      else if (s === 'review') {
        currentQuizAnswers = {};
        const qList = st.amtQuiz || [];
        container.innerHTML = \`
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-xs uppercase font-black text-amber-400 tracking-wider">STAGE 5 OF 5 • REVIEW & AMT MASTERY GATE TEST (R3)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">⭐ AMT-Style Test • Hidden Step-by-Step Derivation</h3>
              <p class="text-xs sm:text-sm text-slate-400">Make your choice first! The full derivation, strategy, and pitfalls unlock after attempting. You must score <strong>at least 80%</strong> to pass this level and unlock the next mission!</p>
            </div>

            <div class="space-y-6" id="quizContainer">
              \${qList.map((item, qIdx) => \`
                <div class="p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-3" id="quizCard-\${qIdx}">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-black text-indigo-400">QUESTION \${qIdx+1} OF \${qList.length}</span>
                    <span id="quizStatus-\${qIdx}" class="text-xs font-bold text-slate-500">Unanswered</span>
                  </div>
                  <h4 class="text-xs sm:text-base font-bold text-white">\${item.q}</h4>
                  
                  <!-- Options Grid -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    \${item.options.map((opt, optIdx) => \`
                      <button onclick="answerAmtQuiz(\${qIdx}, \${optIdx})" id="optBtn-\${qIdx}-\${optIdx}" class="p-3 rounded-xl bg-space-950 border border-slate-800 text-left text-xs sm:text-sm text-slate-300 font-medium hover:border-indigo-500 hover:text-white transition flex items-center gap-2.5">
                        <span class="w-6 h-6 rounded-lg bg-space-850 text-slate-400 flex items-center justify-center font-bold text-xs shrink-0">\${['A','B','C','D'][optIdx]}</span>
                        <span>\${opt}</span>
                      </button>
                    \`).join('')}
                  </div>

                  <!-- Hidden Step-by-Step Explanation Accordion (AMT Style) -->
                  <div id="quizExplanation-\${qIdx}" class="hidden mt-3 p-4 rounded-xl border border-indigo-500/30 bg-space-950 space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                        <span>✔</span> STEP-BY-STEP DERIVATION UNLOCKED
                      </span>
                    </div>

                    <div class="text-xs text-slate-300 space-y-1.5">
                      <p><strong class="text-indigo-400">Way to Do It (Strategy):</strong> \${item.strategy}</p>
                      <p><strong class="text-cyan-400">Conceptual / Mathematical Derivation:</strong> \${item.derivation}</p>
                      <p><strong class="text-amber-400">Common Pitfall & Trap to Avoid:</strong> \${item.trap}</p>
                    </div>
                  </div>
                </div>
              \`).join('')}
            </div>

            <!-- Dynamic Mastery Evaluation Banner -->
            <div id="masteryEvaluationBanner" class="hidden pt-4 border-t border-slate-800">
              <!-- Dynamically injected passed or failed card -->
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center" id="reviewFooterActions">
              <button onclick="setSq3rStep('recite')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Recite</button>
              <div class="text-xs font-bold text-slate-500">Answer all questions to evaluate mastery</div>
            </div>
          </div>
        \`;
      }
    }

    // =========================================================================
    // SURVEY COUNTDOWN TIMER & CHECKLIST LOGIC
    // =========================================================================
    let surveyTimerInterval = null;
    let surveyTimerSeconds = 120;
    let isSurveyTimerRunning = false;

    function initSurveyTimer() {
      surveyTimerSeconds = 120;
      isSurveyTimerRunning = false;
      if (surveyTimerInterval) clearInterval(surveyTimerInterval);
      updateSurveyTimerDisplay();
    }

    function toggleSurveyTimer() {
      const btn = document.getElementById('surveyTimerBtn');
      if (isSurveyTimerRunning) {
        clearInterval(surveyTimerInterval);
        isSurveyTimerRunning = false;
        if (btn) btn.innerText = 'Resume';
      } else {
        isSurveyTimerRunning = true;
        if (btn) btn.innerText = 'Pause';
        surveyTimerInterval = setInterval(() => {
          if (surveyTimerSeconds > 0) {
            surveyTimerSeconds--;
            updateSurveyTimerDisplay();
          } else {
            clearInterval(surveyTimerInterval);
            isSurveyTimerRunning = false;
            soundSuccess();
            showToast('⏰ Scout Recon Timer Complete! Verify your objectives.');
            if (btn) btn.innerText = 'Done';
          }
        }, 1000);
      }
    }

    function resetSurveyTimer() {
      initSurveyTimer();
      const btn = document.getElementById('surveyTimerBtn');
      if (btn) btn.innerText = 'Start';
    }

    function updateSurveyTimerDisplay() {
      const el = document.getElementById('surveyTimerDisplay');
      if (!el) return;
      const m = Math.floor(surveyTimerSeconds / 60).toString().padStart(2, '0');
      const s = (surveyTimerSeconds % 60).toString().padStart(2, '0');
      el.innerText = \`\${m}:\${s}\`;
    }

    function checkSurveyCompletion() {
      const st = getActiveSubtopic();
      let checkedCount = 0;
      st.survey.objectives.forEach((_, i) => {
        const el = document.getElementById(\`surveyCheck-\${i}\`);
        if (el && el.checked) checkedCount++;
      });

      const badge = document.getElementById('checklistProgressBadge');
      if (badge) badge.innerText = \`\${checkedCount} / \${st.survey.objectives.length} Verified\`;

      const btn = document.getElementById('finishSurveyBtn');
      if (btn) {
        if (checkedCount === st.survey.objectives.length) {
          btn.className = 'px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2';
          btn.innerHTML = '<span>All 3 Verified! Advance to Questions (+35 XP)</span> <span>👉</span>';
        } else {
          btn.className = 'px-6 py-3 rounded-xl bg-space-800 text-slate-500 font-black text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2';
          btn.innerHTML = '<span>Verify All Objectives to Unlock</span> <span>🔒</span>';
        }
      }
    }

    function finishSurveyStep() {
      const st = getActiveSubtopic();
      let allChecked = true;
      st.survey.objectives.forEach((_, i) => {
        const el = document.getElementById(\`surveyCheck-\${i}\`);
        if (el && !el.checked) allChecked = false;
      });

      if (!allChecked && !gState.gateBypass) {
        soundError();
        showToast('🔒 Complete scouting all objectives before advancing!');
        return;
      }

      soundSuccess();
      markStepCompleted('survey');
      addXp(35, 'Tactical Survey Passed');
      setSq3rStep('question');
    }

    function finishQuestionStep() {
      soundSuccess();
      markStepCompleted('question');
      addXp(35, 'Inquiry Hypotheses Submitted');
      setSq3rStep('read');
    }

    function finishReadStep() {
      soundSuccess();
      markStepCompleted('read');
      addXp(45, 'Deep Reading & Examples Studied');
      setSq3rStep('recite');
    }

    function finishReciteStep() {
      soundSuccess();
      markStepCompleted('recite');
      addXp(45, 'Active Recall Flashcards Mastered');
      setSq3rStep('review');
    }

    // =========================================================================
    // FLASHCARDS
    // =========================================================================
    let currentCardIndex = 0;
    let isCardFlipped = false;

    function flipFlashcard() {
      soundFlip();
      const st = getActiveSubtopic();
      const card = st.reciteFlashcards[currentCardIndex];
      const el = document.getElementById('flashcardContent');
      const side = document.getElementById('flashcardSideLabel');

      isCardFlipped = !isCardFlipped;
      if (isCardFlipped) {
        side.innerText = 'ANSWER (ACTIVE RECALL)';
        side.className = 'text-[10px] uppercase font-bold text-emerald-400 tracking-widest absolute top-4 left-4';
        el.innerHTML = \`<span class="text-emerald-300">\${card.a}</span>\`;
      } else {
        side.innerText = 'QUESTION';
        side.className = 'text-[10px] uppercase font-bold text-indigo-400 tracking-widest absolute top-4 left-4';
        el.innerHTML = card.q;
      }
    }

    function nextFlashcard() {
      soundClick();
      const st = getActiveSubtopic();
      currentCardIndex = (currentCardIndex + 1) % st.reciteFlashcards.length;
      isCardFlipped = false;
      updateFlashcardView();
    }

    function prevFlashcard() {
      soundClick();
      const st = getActiveSubtopic();
      currentCardIndex = (currentCardIndex - 1 + st.reciteFlashcards.length) % st.reciteFlashcards.length;
      isCardFlipped = false;
      updateFlashcardView();
    }

    function markFlashcardMastered() {
      soundSuccess();
      addXp(15, 'Memory Retained');
      gState.totalCardsMastered++;
      saveState();
      nextFlashcard();
    }

    function updateFlashcardView() {
      const st = getActiveSubtopic();
      const card = st.reciteFlashcards[currentCardIndex];
      document.getElementById('flashcardSideLabel').innerText = 'QUESTION';
      document.getElementById('flashcardSideLabel').className = 'text-[10px] uppercase font-bold text-indigo-400 tracking-widest absolute top-4 left-4';
      document.getElementById('flashcardCounter').innerText = \`Card \${currentCardIndex + 1} of \${st.reciteFlashcards.length}\`;
      document.getElementById('flashcardContent').innerText = card.q;
    }

    // =========================================================================
    // AMT EXAM MODE: GRADING, HIDDEN DERIVATION REVEAL, AND 80% GATE
    // =========================================================================
    let currentQuizAnswers = {};

    function answerAmtQuiz(qIdx, optIdx) {
      const st = getActiveSubtopic();
      const item = st.amtQuiz[qIdx];
      const isCorrect = optIdx === item.correct;

      currentQuizAnswers[qIdx] = { selected: optIdx, isCorrect: isCorrect };

      item.options.forEach((_, i) => {
        const b = document.getElementById(\`optBtn-\${qIdx}-\${i}\`);
        if (b) {
          b.onclick = null;
          if (i === item.correct) {
            b.className = 'p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-left text-xs sm:text-sm text-emerald-200 font-bold flex items-center gap-2.5';
          } else if (i === optIdx && !isCorrect) {
            b.className = 'p-3 rounded-xl bg-rose-950/80 border border-rose-500 text-left text-xs sm:text-sm text-rose-300 font-bold flex items-center gap-2.5';
          } else {
            b.className = 'p-3 rounded-xl bg-space-950/40 border border-slate-800 text-left text-xs sm:text-sm text-slate-500 opacity-60 flex items-center gap-2.5';
          }
        }
      });

      // UNLOCK AND REVEAL THE HIDDEN STEP-BY-STEP EXPLANATION
      const exp = document.getElementById(\`quizExplanation-\${qIdx}\`);
      if (exp) exp.classList.remove('hidden');

      const statusEl = document.getElementById(\`quizStatus-\${qIdx}\`);
      if (isCorrect) {
        soundSuccess();
        addXp(25, 'Correct Answer');
        if (statusEl) {
          statusEl.innerText = 'Mastered ✔';
          statusEl.className = 'text-xs font-bold text-emerald-400';
        }
      } else {
        soundError();
        if (statusEl) {
          statusEl.innerText = 'Needs Review ✖';
          statusEl.className = 'text-xs font-bold text-rose-400';
        }
      }

      // Check if all questions in quiz are now answered
      const qList = st.amtQuiz || [];
      if (Object.keys(currentQuizAnswers).length === qList.length) {
        evaluateMasteryGate(qList);
      }
    }

    function evaluateMasteryGate(qList) {
      const correctCount = Object.values(currentQuizAnswers).filter(a => a.isCorrect).length;
      const scorePct = Math.round((correctCount / qList.length) * 100);
      const passed = scorePct >= 80;

      const banner = document.getElementById('masteryEvaluationBanner');
      const footerActions = document.getElementById('reviewFooterActions');

      if (!banner) return;
      banner.classList.remove('hidden');

      if (passed) {
        triggerConfetti();
        banner.innerHTML = \`
          <div class="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-space-900 border-2 border-emerald-500 space-y-4 text-center">
            <div class="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-3xl">
              🏆
            </div>
            <div class="space-y-1">
              <h3 class="text-xl sm:text-2xl font-black text-white font-display">🎉 LEVEL MASTERED WITH \${scorePct}%!</h3>
              <p class="text-xs sm:text-sm text-emerald-300 font-medium">
                You scored \${correctCount} out of \${qList.length} correct and passed the strict 80% mastery threshold.
              </p>
            </div>
            <div class="flex items-center justify-center gap-3 pt-2 flex-wrap">
              <button onclick="claimMasteryAndUnlockNext(\${scorePct})" class="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Unlock & Launch Next Mission (+50 XP, +40 💎)</span> <span>🚀</span>
              </button>
            </div>
          </div>
        \`;
      } else {
        soundError();
        banner.innerHTML = \`
          <div class="p-6 rounded-2xl bg-gradient-to-r from-rose-950/90 to-space-900 border-2 border-rose-500/70 space-y-4 text-center">
            <div class="w-14 h-14 mx-auto rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-3xl">
              ⚠️
            </div>
            <div class="space-y-1">
              <h3 class="text-xl sm:text-2xl font-black text-rose-400 font-display">MASTERY GATE LOCKED (\${scorePct}%)</h3>
              <p class="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                You got \${correctCount} of \${qList.length} correct. The national standard requires at least <strong>80% mastery</strong> before you are permitted to advance to the next level.
              </p>
              <p class="text-[11px] text-amber-300 pt-1">
                Carefully review the hidden step-by-step AMT strategies and pitfalls revealed above, then tap retry!
              </p>
            </div>
            <div class="flex items-center justify-center gap-3 pt-2">
              <button onclick="retryAmtQuiz()" class="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-rose-600/30 transition flex items-center gap-2">
                <span>🔄 Retry Mastery Test (Reset Answers)</span>
              </button>
            </div>
          </div>
        \`;
      }

      if (footerActions) footerActions.classList.add('hidden');
    }

    function retryAmtQuiz() {
      soundClick();
      currentQuizAnswers = {};
      renderCurrentStep();
      showToast('Mastery test reset. Give it your best attempt! 🎯');
    }

    function claimMasteryAndUnlockNext(score) {
      const stId = gState.activeSubtopicId;
      markStepCompleted('review');
      addXp(50, 'Level Mastery Achieved');
      addGems(40);
      gState.totalQuizzesDone++;

      // Record permanent mastery in state
      gState.masteredSubtopics[stId] = {
        passed: true,
        score: score,
        timestamp: Date.now()
      };
      saveState();

      // Find the next sequential subtopic
      const allSubtopics = getAllSubtopicsForSubject(gState.grade, gState.activeSubject);
      const curIdx = allSubtopics.findIndex(st => st.id === stId);

      if (curIdx >= 0 && curIdx < allSubtopics.length - 1) {
        const nextSubtopic = allSubtopics[curIdx + 1];
        showToast(\`🌟 Level Mastered! Advancing to \${nextSubtopic.code} \${nextSubtopic.title}!\`);
        setTimeout(() => {
          changeUnit(nextSubtopic.unitId);
          changeSubtopic(nextSubtopic.id);
        }, 600);
      } else {
        triggerConfetti();
        showToast(\`🏆 INCREDIBLE! You have fully conquered all levels in \${GALACTIC_DATABASE[gState.grade][gState.activeSubject].name}!\`);
        populateDropdowns();
        renderCurriculumMatrix();
        renderLevelMap();
      }
    }

    // =========================================================================
    // CURRICULUM SYLLABUS MATRIX VIEW (EXHAUSTIVE)
    // =========================================================================
    function renderCurriculumMatrix() {
      const container = document.getElementById('matrixUnitsContainer');
      if (!container) return;

      const subjects = GALACTIC_DATABASE[gState.grade];
      container.innerHTML = '';

      Object.values(subjects).forEach(sub => {
        const subCard = document.createElement('div');
        subCard.className = 'glass-card p-6 rounded-2xl border border-slate-800 space-y-4';

        let subtopicsHtml = '';
        sub.units.forEach(u => {
          subtopicsHtml += \`
            <div class="mt-4 pt-4 border-t border-slate-800/80">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-black text-indigo-400">\${u.number}: \${u.title}</span>
                <span class="text-[10px] text-slate-500">\${u.subtopics.length} Subtopics</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          \`;

          u.subtopics.forEach(st => {
            const mastered = isSubtopicMastered(st.id);
            const unlocked = isSubtopicUnlocked(st.id, sub.id, gState.grade);
            const isCurrent = st.id === gState.activeSubtopicId && sub.id === gState.activeSubject;
            const score = getSubtopicScore(st.id);

            let statusBadge = '';
            let cardBg = '';

            if (mastered) {
              statusBadge = \`<span class="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">⭐ Mastered (\${score}%)</span>\`;
              cardBg = 'bg-amber-950/20 border-amber-500/40 hover:border-amber-400';
            } else if (isCurrent) {
              statusBadge = \`<span class="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">🚀 In Progress</span>\`;
              cardBg = 'bg-indigo-950/40 border-cyan-500/50 hover:border-cyan-400';
            } else if (unlocked) {
              statusBadge = \`<span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">🔓 Ready</span>\`;
              cardBg = 'bg-space-900 border-slate-800 hover:border-indigo-500';
            } else {
              statusBadge = \`<span class="text-[10px] font-bold text-slate-500 bg-space-950 px-2 py-0.5 rounded border border-slate-800">🔒 Locked</span>\`;
              cardBg = 'bg-space-950/50 border-slate-850 opacity-60';
            }

            subtopicsHtml += \`
              <div onclick="jumpToSubtopic('\${sub.id}', '\${u.id}', '\${st.id}')" class="p-3 rounded-xl border \${cardBg} cursor-pointer transition space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="font-mono text-xs font-bold text-white">\${st.code}</span>
                  \${statusBadge}
                </div>
                <h5 class="text-xs font-medium text-slate-300 leading-snug">\${st.title}</h5>
              </div>
            \`;
          });

          subtopicsHtml += \`
              </div>
            </div>
          \`;
        });

        subCard.innerHTML = \`
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <span class="text-2xl">\${sub.icon}</span>
              <div>
                <h4 class="text-base sm:text-lg font-black text-white font-display">\${sub.name}</h4>
                <p class="text-xs text-slate-400">\${sub.units.length} Units • Complete Syllabus</p>
              </div>
            </div>
            <button onclick="selectSubject('\${sub.id}')" class="px-3.5 py-1.5 rounded-xl bg-space-850 border border-slate-700 text-xs font-bold text-indigo-300 hover:text-white transition">Study Subject →</button>
          </div>
          \${subtopicsHtml}
        \`;

        container.appendChild(subCard);
      });
    }

    function jumpToSubtopic(subId, unitId, stId) {
      if (!isSubtopicUnlocked(stId, subId, gState.grade)) {
        soundError();
        showToast('🔒 ACCESS LOCKED: Complete prerequisite levels first before entering this topic!');
        return;
      }

      soundClick();
      gState.activeSubject = subId;
      gState.activeUnitId = unitId;
      gState.activeSubtopicId = stId;
      gState.currentStep = 'survey';
      saveState();

      renderSubjectPills();
      populateDropdowns();
      renderActiveUnitView();
      switchTab('sq3r');
    }

    // =========================================================================
    // WORKED EXAMPLES VAULT
    // =========================================================================
    function renderVault(searchTerm = '') {
      const container = document.getElementById('vaultItemsContainer');
      if (!container) return;

      const subjects = GALACTIC_DATABASE[gState.grade];
      const allExamples = [];

      Object.values(subjects).forEach(sub => {
        sub.units.forEach(u => {
          u.subtopics.forEach(st => {
            if (st.example) {
              allExamples.push({
                subjectName: sub.name,
                subjectIcon: sub.icon,
                unitTitle: u.title,
                subCode: st.code,
                example: st.example,
                subtopicId: st.id,
                unitId: u.id,
                subjectId: sub.id
              });
            }
          });
        });
      });

      const filtered = allExamples.filter(item => {
        const term = searchTerm.toLowerCase();
        return item.subjectName.toLowerCase().includes(term) ||
               item.unitTitle.toLowerCase().includes(term) ||
               item.example.title.toLowerCase().includes(term) ||
               item.example.problem.toLowerCase().includes(term);
      });

      container.innerHTML = filtered.map(item => \`
        <div class="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-slate-700 transition">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
              \${item.subjectIcon} \${item.subjectName} • \${item.subCode} \${item.unitTitle}
            </span>
            <button onclick="jumpToSubtopic('\${item.subjectId}', '\${item.unitId}', '\${item.subtopicId}')" class="text-[11px] font-bold text-cyan-400 hover:underline">
              Go to SQ3R Topic →
            </button>
          </div>

          <h4 class="text-sm sm:text-base font-black text-white">\${item.example.title}</h4>
          <p class="text-xs font-mono text-slate-300 bg-space-950 p-3 rounded-xl border border-slate-800 leading-relaxed">\${item.example.problem}</p>

          <div class="space-y-2 pt-1">
            \${item.example.steps.map(step => \`
              <div class="p-3 rounded-xl bg-space-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                <span class="font-bold text-cyan-400">\${step.label}:</span>
                <p class="text-slate-300">\${step.text}</p>
              </div>
            \`).join('')}
          </div>

          \${item.example.proTip ? \`
            <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
              <span class="text-sm">⚠️</span>
              <span><strong>Pro-Tip:</strong> \${item.example.proTip}</span>
            </div>
          \` : ''}
        </div>
      \`).join('');
    }

    function filterVault(term) {
      renderVault(term);
    }

    // =========================================================================
    // AMT EXAM SIMULATOR TAB
    // =========================================================================
    function renderAmtExam() {
      const container = document.getElementById('amtSimulatorContainer');
      if (!container) return;

      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const allQuestions = [];

      sub.units.forEach(u => {
        u.subtopics.forEach(st => {
          if (st.amtQuiz) {
            st.amtQuiz.forEach(q => {
              allQuestions.push({
                ...q,
                unitNumber: u.number,
                subCode: st.code,
                topicTitle: st.title
              });
            });
          }
        });
      });

      container.innerHTML = \`
        <div class="p-5 sm:p-6 rounded-2xl glass-card border border-indigo-500/30 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span class="text-xs font-black text-indigo-400 uppercase tracking-wider">NATIONAL CURRICULUM AMT EXAM ENGINE</span>
              <h3 class="text-lg sm:text-xl font-black text-white">\${sub.name} Diagnostic & Preparation Arena</h3>
            </div>
            <span class="text-xs font-mono text-cyan-400 font-bold bg-space-950 px-3 py-1 rounded-lg border border-slate-800">
              \${allQuestions.length} Questions Bank
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300">
            Every question simulates national exam standards with instant step-by-step mathematical reasoning, traps, and shortcuts.
          </p>
        </div>

        <div class="space-y-4">
          \${allQuestions.map((qItem, idx) => \`
            <div class="p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-slate-400">\${qItem.unitNumber} • \${qItem.subCode} \${qItem.topicTitle}</span>
                <span class="text-xs font-black text-amber-400">AMT Question #\${idx+1}</span>
              </div>
              <h4 class="text-xs sm:text-base font-bold text-white">\${qItem.q}</h4>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                \${qItem.options.map((opt, optIdx) => \`
                  <button onclick="revealAmtSimAnswer(\${idx}, \${optIdx}, \${qItem.correct})" id="amtSimBtn-\${idx}-\${optIdx}" class="p-3 rounded-xl bg-space-950 border border-slate-800 text-left text-xs sm:text-sm text-slate-300 font-medium hover:border-indigo-500 transition flex items-center gap-2.5">
                    <span class="w-6 h-6 rounded-lg bg-space-850 text-slate-400 flex items-center justify-center font-bold text-xs shrink-0">\${['A','B','C','D'][optIdx]}</span>
                    <span>\${opt}</span>
                  </button>
                \`).join('')}
              </div>

              <div id="amtSimExp-\${idx}" class="hidden mt-3 p-4 rounded-xl border border-indigo-500/30 bg-space-950 space-y-2 text-xs text-slate-300">
                <div class="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                  <span>✔</span> <span>STEP-BY-STEP SOLUTION REVEALED:</span>
                </div>
                <p><strong class="text-indigo-400">Strategy:</strong> \${qItem.strategy}</p>
                <p><strong class="text-cyan-400">Derivation:</strong> \${qItem.derivation}</p>
                <p><strong class="text-amber-400">Trap:</strong> \${qItem.trap}</p>
              </div>
            </div>
          \`).join('')}
        </div>
      \`;
    }

    function revealAmtSimAnswer(qIdx, optIdx, correctIdx) {
      const exp = document.getElementById(\`amtSimExp-\${qIdx}\`);
      if (exp) exp.classList.remove('hidden');

      [0,1,2,3].forEach(i => {
        const b = document.getElementById(\`amtSimBtn-\${qIdx}-\${i}\`);
        if (b) {
          b.onclick = null;
          if (i === correctIdx) {
            b.className = 'p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-left text-xs sm:text-sm text-emerald-200 font-bold flex items-center gap-2.5';
          } else if (i === optIdx && optIdx !== correctIdx) {
            b.className = 'p-3 rounded-xl bg-rose-950/80 border border-rose-500 text-left text-xs sm:text-sm text-rose-300 font-bold flex items-center gap-2.5';
          } else {
            b.className = 'p-3 rounded-xl bg-space-950/40 border border-slate-800 text-left text-xs sm:text-sm text-slate-500 opacity-60 flex items-center gap-2.5';
          }
        }
      });

      if (optIdx === correctIdx) {
        soundSuccess();
        addXp(25, 'AMT Solver');
      } else {
        soundError();
      }
    }

    // =========================================================================
    // TROPHY ROOM & BADGES
    // =========================================================================
    const BADGES = [
      { id: 'pioneer', name: 'Curriculum Pioneer', icon: '🚀', desc: 'Started journey in Ethiopian National Curriculum.' },
      { id: 'streak5', name: '5-Day Hyperdrive', icon: '🔥', desc: 'Maintained a 5-day continuous learning streak.' },
      { id: 'curious', name: 'Inquiry Master', icon: '❓', desc: 'Formulated hypotheses across 10 subtopics in Q phase.' },
      { id: 'amtSolver', name: 'AMT Vanguard', icon: '🎯', desc: 'Conquered AMT hidden derivation questions with 100% precision.' },
      { id: 'mathTitan', name: 'Rational Numbers Titan', icon: '📐', desc: 'Mastered all Grade 7 & 8 operations on rational numbers.' },
      { id: 'scienceLab', name: 'Cosmic Biologist', icon: '🔬', desc: 'Dissected microscope optics and cellular organelles.' }
    ];

    function renderTrophyRoom() {
      const bContainer = document.getElementById('trophyBadgesContainer');
      if (bContainer) {
        bContainer.innerHTML = BADGES.map(b => {
          const isUnlocked = gState.unlockedBadges.includes(b.id);
          return \`
            <div class="p-4 rounded-2xl \${isUnlocked ? 'glass-holo border-indigo-500/40' : 'bg-space-950/60 border-slate-800 opacity-50'} border text-center space-y-2">
              <div class="text-3xl">\${b.icon}</div>
              <h5 class="text-xs font-black text-white">\${b.name}</h5>
              <p class="text-[11px] text-slate-400 leading-tight">\${b.desc}</p>
              <span class="inline-block text-[10px] font-bold px-2 py-0.5 rounded \${isUnlocked ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}">
                \${isUnlocked ? 'Unlocked ✔' : 'Locked 🔒'}
              </span>
            </div>
          \`;
        }).join('');
      }
    }

    function purchaseAvatar(icon, cost) {
      if (gState.gems < cost) {
        soundError();
        showToast('Not enough gems! Complete more SQ3R levels to earn diamonds 💎');
        return;
      }
      soundSuccess();
      gState.gems -= cost;
      gState.avatar = icon;
      saveState();
      showToast(\`Avatar updated to \${icon}!\`);
    }

    function purchaseTitle(titleStr, cost) {
      if (gState.gems < cost) {
        soundError();
        showToast('Not enough gems! Complete more SQ3R levels to earn diamonds 💎');
        return;
      }
      soundSuccess();
      gState.gems -= cost;
      gState.title = titleStr;
      saveState();
      showToast(\`Title updated to \${titleStr}!\`);
    }

    // =========================================================================
    // TAB NAVIGATION
    // =========================================================================
    function switchTab(tabId) {
      soundClick();
      const tabs = ['sq3r', 'matrix', 'amt', 'vault', 'rewards', 'analytics'];
      tabs.forEach(t => {
        const view = document.getElementById(\`view-\${t}\`);
        const btn = document.getElementById(\`tabBtn-\${t}\`);
        if (view) view.style.display = t === tabId ? 'block' : 'none';
        if (btn) {
          if (t === tabId) {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/30';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800';
          }
        }
      });

      if (tabId === 'matrix') renderCurriculumMatrix();
      if (tabId === 'vault') renderVault();
      if (tabId === 'amt') renderAmtExam();
      if (tabId === 'rewards') renderTrophyRoom();
      if (tabId === 'sq3r') renderLevelMap();
    }

    function exportStateData() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gState, null, 2));
      const dl = document.createElement('a');
      dl.setAttribute("href", dataStr);
      dl.setAttribute("download", "sq3r_galactic_mastery_state.json");
      dl.click();
    }

    function renderHeaderStats() {
      const nextLevelXp = gState.level * 250;
      const prevLevelXp = (gState.level - 1) * 250;
      const cur = gState.xp - prevLevelXp;
      const needed = nextLevelXp - prevLevelXp;
      const pct = Math.min(100, Math.round((cur / needed) * 100));

      document.getElementById('streakCount').innerText = gState.streak;
      document.getElementById('gemCount').innerText = gState.gems;
      document.getElementById('userAvatarIcon').innerText = gState.avatar;
      document.getElementById('levelTitle').innerText = \`Lvl \${gState.level} • \${gState.title}\`;
      document.getElementById('xpDisplay').innerText = \`\${gState.xp} / \${nextLevelXp} XP\`;
      document.getElementById('xpProgressBar').style.width = \`\${pct}%\`;

      if (document.getElementById('statTotalXp')) {
        document.getElementById('statTotalXp').innerText = gState.xp;
        document.getElementById('statStreak').innerText = \`\${gState.streak} Days\`;
        document.getElementById('statCardsMastered').innerText = gState.totalCardsMastered;
        document.getElementById('statQuizzesDone').innerText = gState.totalQuizzesDone;
        document.getElementById('trophyGems').innerText = \`\${gState.gems} 💎\`;
        document.getElementById('trophyAvatarBig').innerText = gState.avatar;
        document.getElementById('trophyTitleBig').innerText = \`\${gState.title} (Level \${gState.level})\`;
        document.getElementById('trophyBadgeCount').innerText = \`\${gState.unlockedBadges.length} / \${BADGES.length}\`;
      }
    }

    // =========================================================================
    // INITIALIZATION
    // =========================================================================
    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById('gateBypassToggle').checked = gState.gateBypass;
      setGrade(gState.grade);
      setSq3rStep(gState.currentStep);
      renderHeaderStats();
    });
  </script>
`;

// Now let's inject a Level Map container in the HTML body above the stage buttons
const stageButtonsMarker = '<div class="flex items-center gap-2 overflow-x-auto pb-1">';
const levelMapHtml = `
        <!-- Visual Galactic Expedition Map -->
        <div id="levelMapContainer">
          <!-- Dynamically populated progression nodes -->
        </div>

        `;

let updatedHtml = existingHtml;

// 1. Add levelMapContainer above stage buttons if not present
if (!updatedHtml.includes('id="levelMapContainer"')) {
  updatedHtml = updatedHtml.replace(stageButtonsMarker, levelMapHtml + stageButtonsMarker);
}

// 2. Replace the old database and logic
const scriptTagStart = updatedHtml.indexOf('<!-- Complete Exhaustive Curriculum Database & Engine -->');
if (scriptTagStart !== -1) {
  const beforeScript = updatedHtml.slice(0, scriptTagStart);
  const newScriptContent = `<!-- Complete Exhaustive Curriculum Database & Engine -->
  <script>
    // =========================================================================
    // EXHAUSTIVE ETHIOPIAN GRADE 7 & GRADE 8 CURRICULUM SYLLABUS
    // =========================================================================
    ${dbJsString}
    ${stateAndLogicJsString}
</body>
</html>`;
  
  updatedHtml = beforeScript + newScriptContent;
} else {
  console.error('Could not find scriptTagStart marker!');
  process.exit(1);
}

// 3. Write updated index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), updatedHtml, 'utf8');
console.log('Successfully updated index.html with all 12 subjects and strict progression gate!');

// 4. Also copy to Desktop standalone files
const desktopPath1 = 'C:\\Users\\Dagi 3\\Desktop\\Grade_7_and_8_SQ3R_Master_Platform.html';
const desktopPath2 = 'C:\\Users\\Dagi 3\\Desktop\\Grade_7_SQ3R_Master_App.html';
fs.writeFileSync(desktopPath1, updatedHtml, 'utf8');
fs.writeFileSync(desktopPath2, updatedHtml, 'utf8');
console.log('Successfully synced standalone copy to Desktop: ' + desktopPath1);
console.log('Successfully synced standalone copy to Desktop: ' + desktopPath2);

