const SUBJECT_METADATA = {
      math: { am: 'ሒሳብ', name: 'Mathematics', icon: '📐' },
      science: { am: 'አጠቃላይ ሳይንስ', name: 'General Science', icon: '🔬' },
      english: { am: 'እንግሊዝኛ', name: 'English', icon: '📖' },
      social: { am: 'ኅብረተሰብ ጥናት', name: 'Social Studies', icon: '🌍' },
      citizenship: { am: 'የዜግነት ትምህርት', name: 'Citizenship Education', icon: '⚖️' },
      it: { am: 'ኢንፎርሜሽን ቴክኖሎጂ', name: 'Information Technology', icon: '💻' }
    };

    const ACADEMIC_RANKS = [
      { level: 1, title: 'Apprentice Scholar (ጀማሪ ተማሪ)', minXp: 0 },
      { level: 2, title: 'Keen Researcher (ንቁ አጥኚ)', minXp: 250 },
      { level: 3, title: 'Curriculum Scholar (የትምህርት አዋቂ)', minXp: 500 },
      { level: 4, title: 'Regional Honor Student (የክልል የክብር ተማሪ)', minXp: 750 },
      { level: 5, title: 'National Merit Finalist (የብሔራዊ የላቀ ውጤታማ)', minXp: 1000 },
      { level: 6, title: 'Ministry Valedictorian (የሚኒስቴር የወርቅ ሜዳሊያ ተሸላሚ)', minXp: 1500 }
    ];

    const NATIONAL_BADGES = [
      { 
        id: 'adwa', 
        name: 'Adwa Sovereign Medal (የዓድዋ ድል ሜዳሊያ)', 
        icon: '🇪🇹', 
        desc: 'Unbreakable academic determination and resilience in mastering rigorous national exams.' 
      },
      { 
        id: 'lucy', 
        name: 'Lucy Paleontology Seal (የድንቅነሽ ቅርስ ክብር)', 
        icon: '🦴', 
        desc: 'Scientific observation, Afar hominid fossils, and geological curiosity.' 
      },
      { 
        id: 'gerd', 
        name: 'GERD Hydro-Energy Star (የታላቁ ሕዳሴ ግድብ ኮከብ)', 
        icon: '🌊', 
        desc: 'Engineering mastery, hydroelectric thermodynamics, and monumental problem-solving.' 
      },
      { 
        id: 'erta_ale', 
        name: 'Erta Ale Volcanology Medal (የኤርታሌ እሳተ ጎመራ ሜዳሊያ)', 
        icon: '🌋', 
        desc: 'Danakil Depression thermal geology, shield volcanoes, and basaltic lava lake dynamics.' 
      },
      { 
        id: 'lalibela', 
        name: 'Lalibela Architecture Laureate (የላሊበላ የምህንድስና ክብር)', 
        icon: '🏛️', 
        desc: 'Geometric calculation, monolithic masonry, surface areas, and spatial volume.' 
      },
      { 
        id: 'abebe_bikila', 
        name: 'Abebe Bikila Marathon Grit (የአበበ ቢቂላ ጽናት)', 
        icon: '🏃', 
        desc: 'Relentless study discipline, 5+ day streak, and stamina through challenging exam sets.' 
      },
      { 
        id: 'axum', 
        name: 'Axumite Obelisk Achievement (የአክሱም ሐውልት ክብር)', 
        icon: '📜', 
        desc: 'Deep mastery of ancient Ethiopian civilization, historic inscriptions, trade, and heritage.' 
      },
      { 
        id: 'walia', 
        name: 'Walia Ibex Peak Laureate (የዋሊያ አይቤክስ ክብር)', 
        icon: '🐐', 
        desc: 'Attaining the pinnacle of Grade 7 & 8 academic excellence across all 12 curriculum subjects.' 
      }
    ];

    const SHOP_ITEMS = [
      { id: 'av_lion', type: 'avatar', item: '🦁', name: 'Lion of Judah Crest', cost: 100, desc: 'Symbol of national strength and wisdom' },
      { id: 'av_eagle', type: 'avatar', item: '🦅', name: 'Highland Tawny Eagle', cost: 150, desc: 'Keen vision and aerial intellect' },
      { id: 'av_scroll', type: 'avatar', item: '📜', name: "Ge'ez Ancient Parchment", cost: 120, desc: 'Scholar of ancient manuscripts and history' },
      { id: 'av_crown', type: 'avatar', item: '👑', name: 'Imperial Laureate Crown', cost: 250, desc: 'Highest standard of regional exam mastery' },
      { id: 'av_star', type: 'avatar', item: '⭐', name: 'Radiant National Star', cost: 80, desc: 'Brilliance in science and mathematics' },
      { id: 'av_walia', type: 'avatar', item: '🐐', name: 'Semien Mountain Walia', cost: 200, desc: 'Climbing to the highest academic peaks' }
    ];

    // =========================================================================
    // STATE & PROGRESSION LOGIC
    // =========================================================================
    const DEFAULT_APP_STATE = {
      grade: 7,
      activeSubject: 'math',
      activeUnitId: 'g7-m-u1',
      activeSubtopicId: 'g7-m-1.1',
      currentStep: 'survey',
      gateBypass: false,
      studentName: 'ዳግማዊ (Dagi)',
      xp: 450,
      level: 2,
      gems: 150,
      streak: 5,
      avatar: '🦁',
      title: 'Keen Researcher (ንቁ አጥኚ)',
      totalQuizzesDone: 12,
      totalCardsMastered: 38,
      unlockedBadges: ['adwa', 'lucy', 'gerd'],
      completedSteps: {
        'g7-m-1.1': ['survey']
      },
      masteredSubtopics: {},
      customQuestions: {},
      userNotes: {},
      flashcardIntervals: {},
      reconProgress: {},
      xrayActive: false,
      activeFontSize: 'md'
    };

    let gState = JSON.parse(localStorage.getItem('sq3r_ethiopia_cba_state')) || 
                 JSON.parse(localStorage.getItem('sq3r_galactic_state')) || 
                 DEFAULT_APP_STATE;
    if (!gState.masteredSubtopics) gState.masteredSubtopics = {};
    if (!gState.unlockedBadges) gState.unlockedBadges = ['adwa', 'lucy', 'gerd'];
    if (!gState.customQuestions) gState.customQuestions = {};
    if (!gState.userNotes) gState.userNotes = {};
    if (!gState.flashcardIntervals) gState.flashcardIntervals = {};
    if (!gState.reconProgress) gState.reconProgress = {};
    if (!gState.studentName) gState.studentName = 'ዳግማዊ (Dagi)';
    if (gState.xrayActive === undefined) gState.xrayActive = false;
    if (!gState.activeFontSize) gState.activeFontSize = 'md';

    function saveState() {
      localStorage.setItem('sq3r_ethiopia_cba_state', JSON.stringify(gState));
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

    function getActiveUnit() {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      return sub.units.find(u => u.id === gState.activeUnitId) || sub.units[0];
    }

    function getActiveSubtopic() {
      const unit = getActiveUnit();
      return unit.subtopics.find(st => st.id === gState.activeSubtopicId) || unit.subtopics[0];
    }

    // =========================================================================
    // XP & SOUND HELPERS
    // =========================================================================
    function addXp(amount, reason = '') {
      gState.xp += amount;
      const nextLevelXp = gState.level * 250;
      if (gState.xp >= nextLevelXp) {
        gState.level++;
        gState.gems += 60;
        const matchingRank = ACADEMIC_RANKS.slice().reverse().find(r => gState.xp >= r.minXp);
        if (matchingRank) gState.title = matchingRank.title;
        triggerConfetti();
        showToast(`🎉 LEVEL UP! You reached Level ${gState.level}! (+60 💎)`);
      } else {
        showToast(`+${amount} XP ${reason ? '• ' + reason : ''}`);
      }
      saveState();
    }

    function addGems(amount) {
      gState.gems += amount;
      saveState();
      showToast(`+${amount} Gems! 💎`);
    }

    function showToast(msg) {
      const c = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = 'glass-card px-4 py-3 rounded-xl border border-emerald-500/40 text-white font-bold text-xs shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto';
      toast.innerHTML = `<span>⚡</span> <span>${msg}</span>`;
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
      showToast(isChecked ? '🔓 ነጻ አሰሳ ነቅቷል (Free-Roam Mode Activated - All Levels Unlocked)' : '🔒 የደረጃ ቁልፍ ነቅቷል (Strict Mastery Gate Activated - Must Pass with ≥80% to Advance)');
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
        g7Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/30';
        g8Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 text-slate-400 hover:text-white';
      } else {
        g8Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/30';
        g7Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 text-slate-400 hover:text-white';
      }

      document.getElementById('activeGradeLabel').innerText = `${gradeNumber}ኛ ክፍል (Grade ${gradeNumber})`;
      document.getElementById('activeGradeBadge').innerText = `${gradeNumber}ኛ ክፍል (Grade ${gradeNumber})`;
      document.getElementById('matrixGradePill').innerText = `${gradeNumber}ኛ ክፍል (Grade ${gradeNumber})`;

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
      renderAnalytics();
      showToast(`ወደ ${gradeNumber}ኛ ክፍል ስርዓተ-ትምህርት ተቀይሯል! (Grade ${gradeNumber} Loaded) 🎒`);
    }

    function renderSubjectPills() {
      const container = document.getElementById('subjectPillsContainer');
      const subjects = GALACTIC_DATABASE[gState.grade];
      container.innerHTML = '';

      Object.values(subjects).forEach(sub => {
        const isSelected = gState.activeSubject === sub.id;
        const meta = SUBJECT_METADATA[sub.id] || { am: '', name: sub.name, icon: sub.icon };
        const btn = document.createElement('button');
        btn.onclick = () => selectSubject(sub.id);
        btn.className = `px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
          isSelected 
            ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg shadow-emerald-600/30' 
            : 'bg-space-900 border border-slate-800 text-slate-300 hover:bg-space-850 hover:text-white'
        }`;
        btn.innerHTML = `<span>${meta.icon}</span> <span>${meta.name}</span> <span class="text-[10px] opacity-75">(${meta.am})</span>`;
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
        opt.text = `${u.number}: ${u.title}`;
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
        opt.text = `${prefix}${st.code} ${st.title}${suffix}`;
        opt.selected = st.id === gState.activeSubtopicId;
        subSel.appendChild(opt);
      });
    }

    function changeUnit(unitId) {
      soundClick();
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const unit = sub.units.find(u => u.id === unitId);
      if (!unit) return;

      gState.activeUnitId = unit.id;
      gState.activeSubtopicId = unit.subtopics[0].id;
      gState.currentStep = 'survey';
      saveState();

      populateSubtopicDropdown();
      renderActiveUnitView();
      renderLevelMap();
    }

    function changeSubtopic(stId) {
      if (!isSubtopicUnlocked(stId)) {
        soundError();
        showToast('🔒 Prerequisite Gate: Pass the previous subtopic with ≥80% score to unlock this level!');
        return;
      }

      soundClick();
      const unit = getActiveUnit();
      let foundSt = unit.subtopics.find(st => st.id === stId);

      // If not in current unit, search entire subject
      if (!foundSt) {
        const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
        for (const u of sub.units) {
          const s = u.subtopics.find(x => x.id === stId);
          if (s) {
            gState.activeUnitId = u.id;
            foundSt = s;
            break;
          }
        }
      }

      gState.activeSubtopicId = stId;
      gState.currentStep = 'survey';
      saveState();

      populateDropdowns();
      renderActiveUnitView();
      renderLevelMap();
    }

    function renderActiveUnitView() {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const unit = getActiveUnit();
      const st = getActiveSubtopic();
      const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name };

      document.getElementById('activeSubjectBadge').innerText = `${meta.name.toUpperCase()} (${meta.am})`;
      document.getElementById('activeGradeBadge').innerText = `${gState.grade}ኛ ክፍል (Grade ${gState.grade})`;
      document.getElementById('activeUnitNumber').innerText = `${unit.number}`;
      document.getElementById('activeSubtopicBadge').innerText = `ርዕስ ${st.code}`;
      document.getElementById('activeUnitTitle').innerText = `${st.code} ${st.title}`;
      document.getElementById('activeUnitBigIdea').innerText = st.survey.blueprint;

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
      return true; // All 5 SQ3R study steps within an unlocked level are open
    }

    function updateStageLockIcons() {
      const stId = gState.activeSubtopicId;
      const completed = gState.completedSteps[stId] || [];

      STAGE_ORDER.forEach(s => {
        const isDone = completed.includes(s);
        const isUnlocked = isStepUnlocked(s);
        const indicator = document.getElementById(`gateIndicator-${s}`);
        if (indicator) {
          if (isDone) {
            indicator.className = 'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-emerald-600 text-white shadow-sm';
            indicator.innerText = '✔';
          } else if (isUnlocked) {
            indicator.className = 'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-emerald-700/80 text-white shadow-sm';
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
        ? `⭐ Level Mastered (${getSubtopicScore(stId)}% Score)`
        : `Topic Mastery: ${pct}% Complete`;
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
      soundClick();
      gState.currentStep = stepName;
      saveState();

      STAGE_ORDER.forEach(s => {
        const btn = document.getElementById(`stepBtn-${s}`) || document.getElementById(`sq3rBtn-${s}`);
        if (btn) {
          if (s === stepName) {
            btn.className = 'sq3r-step-btn active p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30';
          } else {
            btn.className = 'sq3r-step-btn p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition bg-space-850 text-slate-300 font-bold hover:bg-space-800 border border-slate-800';
          }
        }
      });

      renderCurrentStep();
    }

    // =========================================================================
    // VISUAL NATIONAL CURRICULUM EXPEDITION MAP (PROGRESSION PATH)
    // =========================================================================
    function renderLevelMap() {
      const mapContainer = document.getElementById('levelMapContainer');
      if (!mapContainer) return;

      const subtopics = getAllSubtopicsForSubject(gState.grade, gState.activeSubject);
      const curStId = gState.activeSubtopicId;
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name };

      let html = `
        <div class="glass-card p-5 rounded-2xl border border-slate-800 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span class="text-[10px] font-black uppercase text-emerald-400 tracking-wider">የስርዓተ-ትምህርት ጉዞ እና የፈተና ዝግጅት (NATIONAL CURRICULUM ROADMAP)</span>
              <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>🇪🇹</span> <span>${meta.name} (${meta.am}) • የርዕሶች ቅደም ተከተል</span>
              </h3>
            </div>
            <div class="text-xs font-mono text-emerald-400 font-bold bg-space-950 px-3 py-1.5 rounded-lg border border-slate-800">
              ${subtopics.filter(s => isSubtopicMastered(s.id)).length} / ${subtopics.length} Levels Mastered (ያጠናቀቁት)
            </div>
          </div>

          <div class="flex items-center gap-3 overflow-x-auto py-3 px-1 no-scrollbar">
      `;

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
          nodeLabel = `Mastered (${score}%)`;
        } else if (isCurrent) {
          nodeColor = 'bg-emerald-950 border-emerald-400 text-emerald-300 ring-2 ring-emerald-500/50';
          nodeIcon = '📖';
          nodeLabel = 'Active Level';
        } else if (unlocked) {
          nodeColor = 'bg-space-900 border-emerald-600/60 text-emerald-300 hover:border-emerald-400';
          nodeIcon = '🔓';
          nodeLabel = 'Unlocked';
        } else {
          nodeColor = 'bg-space-950/60 border-slate-800 text-slate-600 opacity-60';
          nodeIcon = '🔒';
          nodeLabel = 'Locked Gate';
        }

        html += `
          <button onclick="changeSubtopic('${st.id}')" class="shrink-0 p-3 rounded-xl border flex flex-col items-center text-center w-36 transition hover:scale-105 ${nodeColor}">
            <div class="text-xl mb-1">${nodeIcon}</div>
            <div class="text-xs font-black truncate w-full">${st.code} ${st.title}</div>
            <div class="text-[9px] uppercase tracking-wider mt-1 opacity-80">${nodeLabel}</div>
          </button>
        `;

        if (idx < subtopics.length - 1) {
          html += `<div class="shrink-0 text-slate-700 text-xs font-bold">➔</div>`;
        }
      });

      html += `
          </div>
        </div>
      `;

      mapContainer.innerHTML = html;
    }


    // =========================================================================
    // CURRICULUM INTELLIGENCE & CONSTELLATION ENGINE
    // =========================================================================
    function getCurriculumIntel(st, nodeKey) {
      const subject = gState.activeSubject;
      const title = st.title;
      const code = st.code;
      const bp = st.survey.blueprint;
      const formula = st.survey.keyFormulas || 'Standard Method & Axioms';

      const intelMap = {
        prereq: {
          math: `ይህ ርዕስ ከዚህ በፊት የተማርካቸውን የመሠረታዊ ቁጥሮች እና የስሌት ደንቦች (Basic Arithmetic & Fractions) በቀጥታ መሠረት ያደረገ ነው። በቅድሚያ የአሃዞችን ዋጋ እና የክፍልፋይ ስሌቶችን ማስታወስህ ለዚህ ርዕስ ከፍተኛ እገዛ ያደርጋል።`,
          science: `የሳይንሳዊ ምልከታ እና የሙከራ ደንቦች (Laboratory Safety & Units of Measurement) መነሻ ናቸው። የSI አሃዶችን እና የትንታኔ መርሆችን ማስታወስ ይገባል።`,
          english: `Requires basic vocabulary, parts of speech (Nouns, Verbs, Adjectives), and basic sentence structures studied in primary grades.`,
          social: `የካርታ ንባብ መርሆዎች፣ አቅጣጫዎች እና የመልክአ-ምድራዊ አቀማመጥ እውቀትን መነሻ ያደርጋል።`,
          citizenship: `በህብረተሰብ ውስጥ የሰላማዊ አብሮ መኖር፣ የቤተሰብ እና የትምህርት ቤት ህጎች መነሻ ናቸው።`,
          it: `የኮምፒውተር መሠረታዊ ክፍሎች (Hardware & Software) እና የቁልፍ ሰሌዳ አጠቃቀም መነሻ ናቸው።`
        },
        core: {
          math: `<strong>ዋናው ማዕከላዊ ፅንሰ-ሀሳብ፦</strong> ${bp}<br><br>የዚህ ርዕስ ዋና ዓላማ ተማሪው የሒሳብ መዋቅሮችን፣ ቀመሮችን እና የአሰራር ቅደም ተከተሎችን በአግባቡ ተረድቶ በፈተናም ሆነ በዕለት ተዕለት ኑሮው ተግባራዊ እንዲያደርግ ማስቻል ነው።`,
          science: `<strong>ዋናው ሳይንሳዊ መርህ፦</strong> ${bp}<br><br>ተፈጥሮአዊ ክስተቶችን በምክንያት እና በውጤት (Cause and Effect) በማገናዘብ ሳይንሳዊ ድምዳሜ ላይ መድረስ።`,
          english: `<strong>Core Language Competency:</strong> ${bp}<br><br>Mastering authentic linguistic context, active comprehension, and syntactic accuracy.`,
          social: `<strong>የኅብረተሰብ እና የአካባቢ ግንኙነት፦</strong> ${bp}<br><br>ታሪካዊ፣ ጂኦግራፊያዊ እና ኢኮኖሚያዊ ክስተቶችን ከኢትዮጵያ ነባራዊ ሁኔታ ጋር ማስተሳሰር።`,
          citizenship: `<strong>የዜግነት መብትና ግዴታ፦</strong> ${bp}<br><br>ዲሞክራሲያዊ ተቋማትን ማክበር፣ የህግ የበላይነት እና ኃላፊነት የሚሰማው ዜጋ መሆን።`,
          it: `<strong>የዲጂታል ቴክኖሎጂ መርህ፦</strong> ${bp}<br><br>የኮምፒውተር ቴክኖሎጂን ለምርታማነት፣ ለፈጠራ እና ለእውቀት ማበልጸጊያ መጠቀም።`
        },
        formula: {
          math: `<strong>ቁልፍ ቀመር / ሕግ፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">${formula}</code>ይህ ቀመር በደረጃዎች ተተንትኖ የሚሰራ ሲሆን፣ በክልላዊ ፈተናዎች ላይ ቀጥተኛ ስሌት ይጠየቅበታል።`,
          science: `<strong>ሳይንሳዊ ሕግ እና እኩልዮሽ፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">${formula}</code>የአሃዶች ልኬት (Units) እንዳይዘነጋ ጥንቃቄ ያድርጉ።`,
          english: `<strong>Grammar Rule / Structural Pattern:</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">${formula}</code>Always observe subject-verb agreement and contextual tense continuity.`,
          social: `<strong>የመልክአ-ምድር ወይም የታሪክ ቀመር / ሕግጋት፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">${formula}</code>ካርታዎች እና መረጃዎች የሚሰሉበት መደበኛ መለኪያ።`,
          citizenship: `<strong>የህገ-መንግስት እና የህግ ድንጋጌዎች፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">${formula}</code>መብቶች ከግዴታዎች ጋር ተመጣጣኝ መሆን አለባቸው።`,
          it: `<strong>የኮምፒውተር ሥርዓት ደንብ፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">${formula}</code>የመረጃ ሂደት ቅደም ተከተል (Input ➔ Process ➔ Output ➔ Storage)።`
        },
        pitfall: {
          math: `<strong>የሚኒስቴር ፈተና ወጥመድ ራዳር (Exam Pitfall):</strong><br>ተማሪዎች አብዛኛውን ጊዜ በምልክቶች (+/-)፣ በቅደም-ተከተል (Order of Operations) እና ክፍልፋዮችን በማቅለል ወቅት ይሳሳታሉ። ፈታኙ አማራጮች ውስጥ የተሳሳተውን መልስ አስቀድሞ ያስቀምጣል!`,
          science: `<strong>የሚኒስቴር ፈተና ወጥመድ ራዳር (Exam Pitfall):</strong><br>አሃዶችን (Units) አለመቀየር (ለምሳሌ cm ወደ m፣ ወይም g ወደ kg) እና የሳይንሳዊ ቃላትን ትክክለኛ ፍቺ አለመረዳት ዋና ዋና የስህተት ምንጮች ናቸው።`,
          english: `<strong>Ministry Exam Pitfall:</strong><br>Watch out for irregular verb forms, false cognates, and prepositions that change meaning in phrasal verbs.`,
          social: `<strong>የፈተና ወጥመድ፦</strong><br>የዘመናት ቅደም ተከተል (Chronology) ማምታታት እና የመልክአ-ምድራዊ መጋጠሚያዎችን (Coordinates) በስህተት ማንበብ።`,
          citizenship: `<strong>የፈተና ወጥመድ፦</strong><br>መብትን ከነጻነት፣ እንዲሁም ህጋዊ ግዴታን ከሞራላዊ ግዴታ ጋር ማደባለቅ።`,
          it: `<strong>የፈተና ወጥመድ፦</strong><br>የማስታወሻ አይነቶችን (RAM vs ROM) እና Input vs Output መሳሪያዎችን ማምታታት።`
        },
        anchor: {
          math: `<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>የኢትዮጵያ ብር የገንዘብ ዝውውር፣ የታላቁ የሕዳሴ ግድብ የኮንክሪት መጠን ስሌት፣ እና የላሊበላ ውቅር አብያተ-ክርስቲያናት ምህንድስና ስሌት የዚህ ርዕስ ቀጥተኛ ተግባራዊ ምሳሌዎች ናቸው።`,
          science: `<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>የስምጥ ሸለቆ (Great Rift Valley) መፈጠር፣ የኤርታሌ እሳተ-ጎመራ የጂኦሎጂካል ሂደት፣ እና የአዋሽ ተፋሰስ ስነ-ምህዳር ጥናት።`,
          english: `<strong>Ethiopian Contextual Connection:</strong><br>Describing Ethiopian historic heritage, tourism in the Simien Mountains, and cultural coffee ceremonies using rich academic English.`,
          social: `<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>በአፋር ሃዳር የተገኘችው ድንቅነሽ (Lucy/Australopithecus afarensis)፣ የአክሱም ስልጣኔ የንግድ መስመር፣ እና የዓድዋ ድል ታሪካዊ ፋይዳ።`,
          citizenship: `<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>የኢትዮጵያ ባህላዊ የግጭት አፈታት ስልቶች (ሽምግልና)፣ የብሔር ብሔረሰቦች ባህል እና የፌዴራል ስርዓት ግንባታ።`,
          it: `<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>በኢትዮጵያ የቴሌኮም ማስፋፊያ፣ የትምህርት ቤት የኮምፒውተር ላቦራቶሪዎች እና የፊደል (Ge'ez script) ዲጂታይዜሽን።`
        }
      };

      const fallback = intelMap[nodeKey] && intelMap[nodeKey][subject] 
        ? intelMap[nodeKey][subject] 
        : `<strong>${title}:</strong> ${bp}`;
      return fallback;
    }

    // =========================================================================
    // STAGE 1: SURVEY RECONNAISSANCE ENGINE
    // =========================================================================
    let activeConstellationNode = 'core';

    function selectConstellationNode(nodeKey) {
      soundClick();
      activeConstellationNode = nodeKey;
      const st = getActiveSubtopic();
      const intelHtml = getCurriculumIntel(st, nodeKey);

      const drawer = document.getElementById('reconIntelDrawer');
      const titleEl = document.getElementById('reconIntelTitle');
      const contentEl = document.getElementById('reconIntelContent');

      const titles = {
        prereq: '🌐 1. መነሻ እውቀት እና ቅድመ-ግንዛቤ (Prerequisites & Bridge)',
        core: '🏛️ 2. ዋናው ፅንሰ-ሀሳብ (Architectural Anchor Concept)',
        formula: '⚡ 3. ቁልፍ ቀመር / ሕግጋት (Core Law & Formulas)',
        pitfall: '🎯 4. የሚኒስቴር ፈተና ወጥመድ ራዳር (Exam Pitfall Radar)',
        anchor: '🇪🇹 5. የኢትዮጵያ እውነታ ትስስር (Ethiopian Real-World Anchor)'
      };

      if (titleEl) titleEl.innerHTML = titles[nodeKey] || 'Reconnaissance Intelligence';
      if (contentEl) contentEl.innerHTML = intelHtml;
      if (drawer) {
        drawer.classList.remove('hidden');
        drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Update Node button styling
      ['prereq', 'core', 'formula', 'pitfall', 'anchor'].forEach(key => {
        const btn = document.getElementById(`nodeBtn-${key}`);
        if (btn) {
          if (key === nodeKey) {
            btn.className = 'constellation-node active-node p-3 sm:p-4 rounded-2xl bg-emerald-950/80 border-2 border-emerald-400 text-white shadow-lg shadow-emerald-500/30 flex flex-col items-center text-center cursor-pointer transition';
          } else {
            btn.className = 'constellation-node p-3 sm:p-4 rounded-2xl bg-space-950/90 border border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white flex flex-col items-center text-center cursor-pointer transition';
          }
        }
      });

      advanceReconMeter(15);
    }

    function toggleXRayScanner() {
      soundClick();
      gState.xrayActive = !gState.xrayActive;
      saveState();

      const btn = document.getElementById('xrayScannerToggleBtn');
      const container = document.getElementById('surveyNotesContainer');

      if (gState.xrayActive) {
        if (btn) {
          btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 cursor-pointer radar-pulse';
          btn.innerHTML = '<span>🔬</span> <span>X-Ray Scanner: ON</span>';
        }
        if (container) container.classList.add('xray-active');
        showToast('🔬 X-Ray Scanner ነቅቷል! ቁልፍ ቃላቶች በደማቅ ያበራሉ፤ ጠቅ በማድረግ ፈጣን ማብራሪያ ተመልከት።');
        advanceReconMeter(20);
      } else {
        if (btn) {
          btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-space-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer';
          btn.innerHTML = '<span>🔬</span> <span>X-Ray Scanner: OFF</span>';
        }
        if (container) container.classList.remove('xray-active');
      }
    }

    function showXRayTermInsight(term) {
      soundClick();
      const st = getActiveSubtopic();
      const msg = `<strong>📌 ፅንሰ-ሀሳብ፦ ${term}</strong><br>በ${st.code} ${st.title} ስር ወሳኝ የሆነ የፈተና ቃል ነው። ትርጉሙንና አሰራሩን በStage 3 ንባብ ውስጥ በዝርዝር ተመልከት!`;
      
      const drawer = document.getElementById('reconIntelDrawer');
      const titleEl = document.getElementById('reconIntelTitle');
      const contentEl = document.getElementById('reconIntelContent');

      if (titleEl) titleEl.innerHTML = `🔬 X-Ray Insight: ${term}`;
      if (contentEl) contentEl.innerHTML = msg;
      if (drawer) {
        drawer.classList.remove('hidden');
        drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      advanceReconMeter(10);
    }

    function flipCuriosityProbe(idx) {
      soundFlip();
      const card = document.getElementById(`probeCard-${idx}`);
      if (card) {
        card.classList.toggle('is-flipped');
        if (card.classList.contains('is-flipped')) {
          addXp(15, 'Curiosity Probe Unlocked');
          advanceReconMeter(15);
        }
      }
    }

    function advanceReconMeter(amount) {
      const stId = gState.activeSubtopicId;
      const current = gState.reconProgress[stId] || 20;
      const next = Math.min(100, current + amount);
      gState.reconProgress[stId] = next;
      saveState();

      const meter = document.getElementById('surveyReconMeter');
      const badge = document.getElementById('reconMeterBadge');
      if (meter) meter.style.width = `${next}%`;
      if (badge) badge.innerText = `${next}% Recon Complete`;

      if (next >= 100) {
        const finishBtn = document.getElementById('finishSurveyBtn');
        if (finishBtn) {
          finishBtn.className = 'px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer border border-emerald-400';
          finishBtn.innerHTML = '<span>🚀 Recon 100% Complete! Advance to Questions (+35 XP)</span> <span>👉</span>';
        }
      }
    }

    // Wrap high-yield terms with xray-term spans
    function enrichNotesWithXRay(rawHtml) {
      const keywords = [
        'Rational Numbers', 'Repeating Decimals', 'Terminating Decimals', 'Set', 'Element', 'Subset',
        'Scientific Method', 'Measurement', 'Cell', 'Photosynthesis', 'Ecosystem',
        'Gravity', 'Force', 'Motion', 'Velocity', 'Acceleration',
        'Democracy', 'Human Rights', 'Rule of Law', 'Constitution', 'Tolerance',
        'Earth', 'Solar System', 'Plate Tectonics', 'Volcano', 'Earthquake', 'Climate',
        'CPU', 'RAM', 'ROM', 'Hardware', 'Software', 'Algorithm', 'Network'
      ];
      let res = rawHtml;
      keywords.forEach(kw => {
        const regex = new RegExp(`\\b(${kw})\\b`, 'gi');
        res = res.replace(regex, `<span class="xray-term" onclick="showXRayTermInsight('$1')">$1</span>`);
      });
      return res;
    }

    // =========================================================================
    // RENDER CURRENT SQ3R STEP WITH DEEP AMHARIC INTERPRETATIONS & BABY STEPS
    // =========================================================================
    function renderCurrentStep() {
      const container = document.getElementById('stepContentContainer') || document.getElementById('sq3rStageContainer');
      if (!container) return;
      const st = getActiveSubtopic();
      const s = gState.currentStep;

      // 1. SURVEY (ቅኝት)
      if (s === 'survey') {
        renderSurveyStep(st, container);
      }
      // 2. QUESTION (ጥያቄ)
      else if (s === 'question') {
        renderQuestionStep(st, container);
      }
      // 3. READ (ንባብ እና ዝርዝር የደረጃ በደረጃ ምሳሌዎች)
      else if (s === 'read') {
        renderReadStep(st, container);
      }
      // 4. RECITE (ንቁ ማስታወስ)
      else if (s === 'recite') {
        renderReciteStep(st, container);
      }
      // 5. REVIEW (የብቃት ፈተና እና የደረጃ በደረጃ መፍትሔ)
      else if (s === 'review') {
        renderReviewStep(st, container);
      }
    }

    // =========================================================================
    // STAGE 1: SURVEY RECONNAISSANCE ENGINE (EXTREMELY DETAILED & ENGAGING)
    // =========================================================================
    function renderSurveyStep(st, container) {
      const reconPct = gState.reconProgress[st.id] || 25;
      const isXray = !!gState.xrayActive;

      // Extract high-yield terms for X-Ray
      const enrichedNotes = isXray ? enrichNotesWithXRay(st.coreNotes) : st.coreNotes;

      container.innerHTML = `
        <div class="space-y-6 animate-fadeIn">
          
          <!-- Tactical Recon Header Banner -->
          <div class="glass-crest p-6 sm:p-7 rounded-3xl border border-emerald-500/40 relative overflow-hidden shadow-2xl">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10 border-b border-emerald-500/30 pb-5">
              <div class="space-y-1.5">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-3 py-1 rounded-full text-xs font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>ደረጃ 1 ከ 5 • የእውቀት ቅኝት (STAGE 1: KNOWLEDGE RECON MISSION)</span>
                  </span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    ${st.code} Syllabus Recon
                  </span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-white font-display">
                  ${st.code} ${st.title} • የስርዓተ-ትምህርት መዋቅርና ቅኝት
                </h3>
                <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                  ከንባብ በፊት የትምህርቱን አጠቃላይ ገጽታ (Big Picture)፣ ዋና ቀመሮች እና የፈተና ሚስጥሮችን በቅኝት ራዳር መርምር። አዕምሮህ መረጃዎችን በፍጥነት ለመቅሰም ዝግጁ ይሆናል።
                </p>
              </div>

              <!-- Controls: Tactical 2-Min Timer & X-Ray Concept Scanner Toggle -->
              <div class="shrink-0 flex items-center gap-3 flex-wrap">
                <!-- 2-Minute Tactical Recon Timer -->
                <div class="flex items-center gap-2 bg-space-950 px-3.5 py-2 rounded-2xl border border-emerald-500/30 shadow-md">
                  <span class="text-xs font-black text-slate-400">⏱️ ሰዓት:</span>
                  <span id="surveyTimerDisplay" class="font-mono text-sm font-black text-amber-400">02:00</span>
                  <button onclick="toggleSurveyTimer()" id="surveyTimerBtn" class="text-xs px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition cursor-pointer">
                    ጀምር
                  </button>
                  <button onclick="resetSurveyTimer()" class="text-xs px-2 py-1 rounded-lg bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white transition cursor-pointer" title="Reset Timer">
                    ↺
                  </button>
                </div>

                <!-- X-Ray Concept Scanner Toggle -->
                <button onclick="toggleXRayScanner()" id="xrayScannerToggleBtn" class="px-3.5 py-2 rounded-2xl text-xs font-black transition flex items-center gap-2 ${isXray ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 radar-pulse' : 'bg-space-900 border border-slate-700 text-slate-300 hover:text-white'} cursor-pointer">
                  <span>🔬</span>
                  <span>X-Ray Scanner: ${isXray ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>

            <!-- Live Recon Progress Meter Bar (0% to 100%) -->
            <div class="mt-4 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 relative z-10">
              <div class="flex items-center gap-2 text-xs font-bold text-slate-300">
                <span>📡 የቅኝት ሽፋን መለኪያ (Reconnaissance Coverage):</span>
                <span id="reconMeterBadge" class="text-emerald-400 font-mono font-black">${reconPct}% Recon Complete</span>
              </div>
              <div class="w-full sm:w-64 h-2.5 bg-space-950 rounded-full overflow-hidden border border-slate-800">
                <div id="surveyReconMeter" class="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 transition-all duration-500" style="width: ${reconPct}%"></div>
              </div>
            </div>

            <!-- High-Level Architectural Blueprint & Formulas -->
            <div class="mt-6 space-y-4 relative z-10">
              <div class="p-4 sm:p-5 rounded-2xl bg-space-900/90 border border-slate-800 space-y-2">
                <div class="text-[10px] uppercase font-black text-emerald-400 tracking-widest flex items-center gap-2">
                  <span>📡</span> <span>HIGH-LEVEL ARCHITECTURAL BLUEPRINT (የፅንሰ-ሀሳብ ማዕቀፍ)</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  ${st.survey.blueprint}
                </p>
              </div>

              ${st.survey.keyFormulas ? `
                <div class="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-space-950 to-emerald-950/40 border border-emerald-500/40 flex items-center justify-between gap-4 flex-wrap">
                  <div class="flex items-center gap-2.5">
                    <span class="text-xl">⚡</span>
                    <div>
                      <div class="text-xs font-black text-emerald-300 uppercase tracking-wider">ዋናው ሕግ / ቀመር (CORE THEOREM / FORMULA / LAW):</div>
                      <div class="text-[11px] text-slate-400">በዚህ ርዕስ ስር ያለው ቁልፍ የፈተና መለኪያ ቀመር</div>
                    </div>
                  </div>
                  <code class="font-mono text-xs sm:text-sm font-black text-amber-300 bg-space-950 px-4 py-2 rounded-xl border border-amber-500/30 shadow-inner">
                    ${st.survey.keyFormulas}
                  </code>
                </div>
              ` : ''}
            </div>

            <!-- 5-Node Interactive Concept Constellation (Knowledge Orbit) -->
            <div class="mt-8 pt-6 border-t border-slate-800 relative z-10 space-y-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="text-xl">🌌</span>
                  <div>
                    <h4 class="text-xs sm:text-sm font-black text-white uppercase tracking-wider font-display">
                      የዕውቀት ህብረ-ኮከብ ራዳር (5-NODE CONCEPT CONSTELLATION)
                    </h4>
                    <p class="text-xs text-slate-400">የትምህርቱን 5 ቁልፍ አቅጣጫዎች ጠቅ በማድረግ ዝርዝር የአማርኛ ማብራሪያዎችን ተመልከት።</p>
                  </div>
                </div>
                <span class="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                  Tap Any Node (+15% Recon)
                </span>
              </div>

              <!-- 5 Interactive Orbit Nodes Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-5 gap-3" id="constellationGrid">
                <button onclick="selectConstellationNode('prereq')" id="nodeBtn-prereq" class="constellation-node p-3.5 rounded-2xl bg-space-950/90 border border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white flex flex-col items-center text-center cursor-pointer transition">
                  <span class="text-2xl mb-1.5">🌐</span>
                  <span class="text-xs font-black">1. መነሻ እውቀት</span>
                  <span class="text-[10px] text-slate-400 mt-0.5">Prerequisites</span>
                </button>

                <button onclick="selectConstellationNode('core')" id="nodeBtn-core" class="constellation-node active-node p-3.5 rounded-2xl bg-emerald-950/80 border-2 border-emerald-400 text-white shadow-lg shadow-emerald-500/30 flex flex-col items-center text-center cursor-pointer transition">
                  <span class="text-2xl mb-1.5">🏛️</span>
                  <span class="text-xs font-black">2. ዋና ፅንሰ-ሀሳብ</span>
                  <span class="text-[10px] text-emerald-300 mt-0.5">Core Anchor</span>
                </button>

                <button onclick="selectConstellationNode('formula')" id="nodeBtn-formula" class="constellation-node p-3.5 rounded-2xl bg-space-950/90 border border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white flex flex-col items-center text-center cursor-pointer transition">
                  <span class="text-2xl mb-1.5">⚡</span>
                  <span class="text-xs font-black">3. ቁልፍ ቀመር</span>
                  <span class="text-[10px] text-slate-400 mt-0.5">Formulas & Laws</span>
                </button>

                <button onclick="selectConstellationNode('pitfall')" id="nodeBtn-pitfall" class="constellation-node p-3.5 rounded-2xl bg-space-950/90 border border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white flex flex-col items-center text-center cursor-pointer transition">
                  <span class="text-2xl mb-1.5">🎯</span>
                  <span class="text-xs font-black text-rose-400">4. የፈተና ወጥመድ</span>
                  <span class="text-[10px] text-slate-400 mt-0.5">Exam Pitfalls</span>
                </button>

                <button onclick="selectConstellationNode('anchor')" id="nodeBtn-anchor" class="constellation-node col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-space-950/90 border border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white flex flex-col items-center text-center cursor-pointer transition">
                  <span class="text-2xl mb-1.5">🇪🇹</span>
                  <span class="text-xs font-black text-amber-400">5. የሀገር እውነታ</span>
                  <span class="text-[10px] text-slate-400 mt-0.5">Ethiopian Anchor</span>
                </button>
              </div>

              <!-- Interactive Recon Intel Drawer (Reveals deep Amharic context) -->
              <div id="reconIntelDrawer" class="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-space-950 via-space-900 to-space-950 border border-emerald-500/40 space-y-3 relative shadow-xl">
                <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h5 id="reconIntelTitle" class="text-xs sm:text-sm font-black text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                    🏛️ 2. ዋናው ፅንሰ-ሀሳብ (Architectural Anchor Concept)
                  </h5>
                  <span class="text-[11px] text-amber-400 font-bold">ኢትዮጵያዊ ስርዓተ-ትምህርት (MoE Verified)</span>
                </div>
                <div id="reconIntelContent" class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  ${getCurriculumIntel(st, 'core')}
                </div>
              </div>
            </div>

            <!-- 3 Pre-Flight Curiosity Probes (3D Flip Challenge Cards) -->
            <div class="mt-8 pt-6 border-t border-slate-800 relative z-10 space-y-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="text-xl">🔮</span>
                  <div>
                    <h4 class="text-xs sm:text-sm font-black text-white uppercase tracking-wider font-display">
                      የቅኝት ፍተሻ ካርዶች (3 PRE-FLIGHT CURIOSITY PROBES)
                    </h4>
                    <p class="text-xs text-slate-400">ከማንበብህ በፊት እነዚህን ጥያቄዎች ገምግም፤ ካርዶቹን በመገልበጥ የአዕምሮህን ግንዛቤ ፈትሽ (+15 XP per probe)።</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="curiosityProbesGrid">
                
                <!-- Probe 1: Prior Knowledge Prediction -->
                <div class="perspective-1000 h-44">
                  <div id="probeCard-0" class="card-flip-container relative w-full h-full cursor-pointer" onclick="flipCuriosityProbe(0)">
                    <!-- Front -->
                    <div class="absolute inset-0 backface-hidden p-5 rounded-2xl bg-space-950 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/50 transition">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-black text-emerald-400">ፍተሻ 1 • መነሻ ግምት</span>
                        <span class="text-base">🔄</span>
                      </div>
                      <p class="text-xs font-bold text-white leading-relaxed">
                        ይህ ርዕስ ከዚህ በፊት ከተማርካቸው መሰረታዊ እውቀቶች ጋር እንዴት ይገናኛል ብለህ ታስባለህ?
                      </p>
                      <span class="text-[11px] text-amber-400 font-bold">ካርዱን ግለጥ (Tap to Flip ↺)</span>
                    </div>
                    <!-- Back -->
                    <div class="absolute inset-0 backface-hidden rotate-y-180 p-5 rounded-2xl bg-emerald-950/90 border border-emerald-500/60 flex flex-col justify-between">
                      <span class="text-xs font-black text-emerald-300">💡 ማረጋገጫ፦</span>
                      <p class="text-xs text-slate-200 leading-relaxed">
                        ${st.survey.blueprint.substring(0, 140)}...
                      </p>
                      <span class="text-[11px] text-emerald-400 font-black">+15 XP ተገኝቷል ✔</span>
                    </div>
                  </div>
                </div>

                <!-- Probe 2: Exam Pitfall Prediction -->
                <div class="perspective-1000 h-44">
                  <div id="probeCard-1" class="card-flip-container relative w-full h-full cursor-pointer" onclick="flipCuriosityProbe(1)">
                    <!-- Front -->
                    <div class="absolute inset-0 backface-hidden p-5 rounded-2xl bg-space-950 border border-slate-800 flex flex-col justify-between hover:border-amber-500/50 transition">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-black text-amber-400">ፍተሻ 2 • የፈተና ሚስጥር</span>
                        <span class="text-base">⚠️</span>
                      </div>
                      <p class="text-xs font-bold text-white leading-relaxed">
                        ፈታኞች በዚህ ርዕስ ስር ተማሪዎችን ለማጥመድ ምን አይነት ስህተት ይጠቀማሉ?
                      </p>
                      <span class="text-[11px] text-amber-400 font-bold">ሚስጥሩን ተመልከት (Tap to Flip ↺)</span>
                    </div>
                    <!-- Back -->
                    <div class="absolute inset-0 backface-hidden rotate-y-180 p-5 rounded-2xl bg-amber-950/90 border border-amber-500/60 flex flex-col justify-between">
                      <span class="text-xs font-black text-amber-300">🎯 የፈተና ጥንቃቄ፦</span>
                      <p class="text-xs text-slate-200 leading-relaxed">
                        ምልክቶችን (+/-)፣ አሃዶችን (Units) እና የስሌት ቅደም ተከተልን በጥንቃቄ መከተል ወሳኝ ነው።
                      </p>
                      <span class="text-[11px] text-amber-400 font-black">+15 XP ተገኝቷል ✔</span>
                    </div>
                  </div>
                </div>

                <!-- Probe 3: Everyday Connection Prediction -->
                <div class="perspective-1000 h-44">
                  <div id="probeCard-2" class="card-flip-container relative w-full h-full cursor-pointer" onclick="flipCuriosityProbe(2)">
                    <!-- Front -->
                    <div class="absolute inset-0 backface-hidden p-5 rounded-2xl bg-space-950 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-black text-cyan-400">ፍተሻ 3 • የዕለት ተዕለት ኑሮ</span>
                        <span class="text-base">🌍</span>
                      </div>
                      <p class="text-xs font-bold text-white leading-relaxed">
                        ይህ የትምህርት ፅንሰ-ሀሳብ በኢትዮጵያ ነባራዊ ሁኔታ ውስጥ የት ቦታ ተግባራዊ ይሆናል?
                      </p>
                      <span class="text-[11px] text-cyan-400 font-bold">ትስስሩን እይ (Tap to Flip ↺)</span>
                    </div>
                    <!-- Back -->
                    <div class="absolute inset-0 backface-hidden rotate-y-180 p-5 rounded-2xl bg-cyan-950/90 border border-cyan-500/60 flex flex-col justify-between">
                      <span class="text-xs font-black text-cyan-300">🇪🇹 የገሃዱ ዓለም ምሳሌ፦</span>
                      <p class="text-xs text-slate-200 leading-relaxed">
                        በንግድ፣ በኢንጂነሪንግ (ግድብ/መንገድ ግንባታ) እና በተፈጥሮ ጥበቃ ውስጥ ወሳኝ ሚና አለው።
                      </p>
                      <span class="text-[11px] text-cyan-400 font-black">+15 XP ተገኝቷል ✔</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Skimmable Textbook Overview Notes -->
            <div class="mt-8 pt-6 border-t border-slate-800 relative z-10 space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-lg">📖</span>
                  <h4 class="text-xs sm:text-sm font-black text-amber-400 uppercase tracking-wider font-display">
                    የመማሪያ መጽሐፍ አጠቃላይ እይታ (SKIMMABLE TEXTBOOK OVERVIEW)
                  </h4>
                </div>
                <span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  Active Skim Zone
                </span>
              </div>

              <div id="surveyNotesContainer" class="p-5 rounded-2xl bg-space-950/90 border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans ${isXray ? 'xray-active' : ''}">
                ${enrichedNotes}
              </div>

              <div class="pt-2 flex justify-between items-center flex-wrap gap-2 text-xs">
                <span class="text-slate-400">የተሟላ የደረጃ በደረጃ ስሌትና ማረጋገጫ ትፈልጋለህ?</span>
                <button onclick="setSq3rStep('read')" class="px-4 py-2 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer">
                  <span>ወደ ጥልቅ ንባብና ምሳሌዎች እለፍ (Open Stage 3: Read)</span> <span>➔</span>
                </button>
              </div>
            </div>

            <!-- Interactive Recon Scout Checklist -->
            <div class="mt-8 pt-6 border-t border-slate-800 relative z-10 space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center gap-2 font-display">
                  <span>🔭</span> <span>የቅኝት ማረጋገጫ ዝርዝር (Verify All 3 Objectives):</span>
                </h4>
                <span id="checklistProgressBadge" class="text-xs font-mono text-amber-400 font-bold">0 / ${st.survey.objectives.length} Verified</span>
              </div>

              <div class="space-y-2.5">
                ${st.survey.objectives.map((obj, i) => `
                  <label class="flex items-start gap-3 p-3.5 rounded-2xl bg-space-900/80 border border-slate-800 hover:border-slate-700 cursor-pointer transition">
                    <input type="checkbox" id="surveyCheck-${i}" onchange="checkSurveyCompletion()" class="mt-0.5 rounded text-emerald-500 focus:ring-0">
                    <span class="text-xs sm:text-sm text-slate-200 font-medium">${obj}</span>
                  </label>
                `).join('')}
              </div>
            </div>

            <!-- Stage 1 Footer Action -->
            <div class="mt-8 flex justify-end relative z-10">
              <button onclick="finishSurveyStep()" id="finishSurveyBtn" class="px-7 py-3.5 rounded-2xl bg-space-800 text-slate-500 font-black text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2 cursor-pointer">
                <span>የቅኝት ዝርዝሩን አረጋግጥ (Verify Checklist to Unlock)</span> <span>🔒</span>
              </button>
            </div>

          </div>
        </div>
      `;

      initSurveyTimer();
      checkSurveyCompletion();
    }

    // =========================================================================
    // STAGE 2: QUESTION ENGINE WITH CUSTOM INQUIRIES & AMHARIC STARTERS
    // =========================================================================
    function renderQuestionStep(st, container) {
      const customQs = gState.customQuestions[st.id] || [];

      container.innerHTML = `
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-7 animate-fadeIn shadow-2xl">
          <div class="border-b border-slate-800 pb-5">
            <span class="text-xs uppercase font-black text-emerald-400 tracking-wider">ደረጃ 2 ከ 5 • የማስተዋል ጥያቄዎች (STAGE 2: QUESTION & INQUIRY)</span>
            <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">ርዕሶችን ወደ ጥልቅ የማስተዋል ጥያቄዎች ቀይር</h3>
            <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              ከማንበብህ በፊት በራስህ አእምሮ ጥያቄዎችን መቅረፅ የማስታወስ ችሎታህን በ3 እጥፍ ያሳድጋል። የሚከተሉትን ጥያቄዎች አንብበህ ግምትህን ጻፍ፤ እንዲሁም የራስህን ጥያቄ አክል!
            </p>
          </div>

          <!-- Official Syllabus Inquiry Prompts -->
          <div class="space-y-4">
            <div class="text-xs uppercase font-black text-slate-400 tracking-wider flex items-center gap-2">
              <span>🎯</span> <span>የስርዓተ-ትምህርቱ ዋና ዋና ጥያቄዎች (CORE INQUIRY PROMPTS):</span>
            </div>
            ${st.questions.map((qText, qIdx) => `
              <div class="p-4 sm:p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-2.5">
                <div class="flex items-center gap-2 text-xs font-black text-emerald-400">
                  <span>❓</span> <span>ዋና ጥያቄ ${qIdx+1}:</span>
                </div>
                <h4 class="text-xs sm:text-sm font-bold text-white leading-relaxed">${qText}</h4>
                <textarea id="hypoAnswer-${qIdx}" placeholder="ከማንበብህ በፊት ያለህን ግምት ወይም መልስ እዚህ ጻፍ..." class="w-full bg-space-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none h-16 resize-none"></textarea>
              </div>
            `).join('')}
          </div>

          <!-- Add Your Own Inquiry Question with Amharic Starters -->
          <div class="p-5 sm:p-6 rounded-2xl bg-space-950 border border-emerald-500/30 space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white flex items-center gap-2 font-display">
                  <span>✨</span> የራስህን የማስተዋል ጥያቄ አክል (FORMULATE YOUR OWN QUESTION)
                </h4>
                <p class="text-xs text-slate-400">ጥያቄ ለመጀመር ከታች ያሉትን አጋዥ ቃላት ጠቅ አድርግ፦</p>
              </div>
              <span class="text-[11px] text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                Inquiry Board
              </span>
            </div>

            <!-- 4 Amharic Question Starter Buttons -->
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="insertQuestionStarter('ለምን ')" class="px-3 py-1.5 rounded-xl bg-space-900 hover:bg-space-850 border border-slate-800 text-xs font-bold text-slate-200 transition cursor-pointer">
                💡 ለምን...? (Why...)
              </button>
              <button onclick="insertQuestionStarter('እንዴት ')" class="px-3 py-1.5 rounded-xl bg-space-900 hover:bg-space-850 border border-slate-800 text-xs font-bold text-slate-200 transition cursor-pointer">
                ⚙️ እንዴት...? (How...)
              </button>
              <button onclick="insertQuestionStarter('በምን ይለያያል ')" class="px-3 py-1.5 rounded-xl bg-space-900 hover:bg-space-850 border border-slate-800 text-xs font-bold text-slate-200 transition cursor-pointer">
                ⚖️ በምን ይለያያል...? (Difference...)
              </button>
              <button onclick="insertQuestionStarter('ምን ቢከሰት ')" class="px-3 py-1.5 rounded-xl bg-space-900 hover:bg-space-850 border border-slate-800 text-xs font-bold text-slate-200 transition cursor-pointer">
                🔮 ምን ቢከሰት...? (What if...)
              </button>
            </div>

            <!-- Custom Question Input Box -->
            <div class="flex items-center gap-2">
              <input type="text" id="customQuestionInput" placeholder="ጥያቄህን እዚህ ጻፍ (ለምሳሌ፦ ይህ ቀመር በስራ ላይ የሚውለው መቼ ነው?)..." class="flex-1 bg-space-900 border border-slate-700 text-slate-100 text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              <button onclick="addCustomQuestion()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition cursor-pointer shrink-0">
                ➕ ጥያቄ ጨምር
              </button>
            </div>

            <!-- Saved Custom Questions List -->
            <div id="customQuestionsList" class="space-y-2 pt-2">
              ${customQs.map((q, idx) => `
                <div class="p-3 rounded-xl bg-space-900/80 border border-slate-800 flex items-center justify-between gap-3 text-xs text-slate-200">
                  <span class="flex items-center gap-2">
                    <span class="text-amber-400">📌</span> ${q}
                  </span>
                  <button onclick="deleteCustomQuestion(${idx})" class="text-slate-500 hover:text-rose-400 transition cursor-pointer">✕</button>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="pt-5 border-t border-slate-800 flex justify-between items-center flex-wrap gap-4">
            <button onclick="setSq3rStep('survey')" class="text-xs font-bold text-slate-400 hover:text-white transition cursor-pointer">
              ← ወደ ቅኝት ተመለስ (Back to Survey)
            </button>
            <button onclick="finishQuestionStep()" class="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer">
              <span>ጥያቄዎችን አጽድቅና ወደ ጥልቅ ንባብ እለፍ (+35 XP)</span> <span>👉</span>
            </button>
          </div>
        </div>
      `;
    }

    function insertQuestionStarter(starter) {
      const input = document.getElementById('customQuestionInput');
      if (input) {
        input.value = starter + input.value.trim();
        input.focus();
      }
    }

    function addCustomQuestion() {
      const input = document.getElementById('customQuestionInput');
      if (!input || !input.value.trim()) return;
      const q = input.value.trim();
      const stId = gState.activeSubtopicId;

      if (!gState.customQuestions[stId]) gState.customQuestions[stId] = [];
      gState.customQuestions[stId].push(q);
      saveState();

      input.value = '';
      showToast('ጥያቄህ በማስታወሻ ሰሌዳው ላይ ተመዝግቧል! 📝');
      addXp(15, 'Curiosity Question Added');
      renderQuestionStep(getActiveSubtopic(), document.getElementById('stepContentContainer'));
    }

    function deleteCustomQuestion(idx) {
      const stId = gState.activeSubtopicId;
      if (gState.customQuestions[stId]) {
        gState.customQuestions[stId].splice(idx, 1);
        saveState();
        renderQuestionStep(getActiveSubtopic(), document.getElementById('stepContentContainer'));
      }
    }

    // =========================================================================
    // STAGE 3: READ ENGINE (WITH BABY-STEP WORKED EXAMPLES & AMHARIC DETAILS)
    // =========================================================================
    function renderReadStep(st, container) {
      const fontSizeClass = {
        'sm': 'text-xs',
        'md': 'text-sm',
        'lg': 'text-base'
      }[gState.activeFontSize || 'md'];

      const userNote = gState.userNotes[st.id] || '';
      const customQs = gState.customQuestions[st.id] || [];

      container.innerHTML = `
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-7 animate-fadeIn shadow-2xl">
          
          <!-- Top Typography Toolbar & Reading Controls -->
          <div class="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs uppercase font-black text-emerald-400 tracking-wider">ደረጃ 3 ከ 5 • ጥልቅ ንባብ እና ደረጃ-በደረጃ ምሳሌዎች (STAGE 3: READ)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">ዝርዝር ትንታኔ እና በደረጃ የተሰሉ ማብራሪያዎች</h3>
              <p class="text-xs sm:text-sm text-slate-300">በጥንቃቄ አንብብ፤ በእያንዳንዱ የሒሳብ ወይም የሳይንስ ስሌት ውስጥ የተከናወኑትን ደረጃዎች አስተውል።</p>
            </div>

            <!-- Typography & Focus Mode Controls -->
            <div class="shrink-0 flex items-center gap-2 bg-space-950 p-1.5 rounded-2xl border border-slate-800">
              <span class="text-[11px] font-bold text-slate-400 px-2">ፊደል (Font):</span>
              <button onclick="setReadingFontSize('sm')" class="px-2.5 py-1 rounded-xl text-xs font-black transition ${gState.activeFontSize === 'sm' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'} cursor-pointer">A-</button>
              <button onclick="setReadingFontSize('md')" class="px-2.5 py-1 rounded-xl text-xs font-black transition ${gState.activeFontSize === 'md' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'} cursor-pointer">A</button>
              <button onclick="setReadingFontSize('lg')" class="px-2.5 py-1 rounded-xl text-xs font-black transition ${gState.activeFontSize === 'lg' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'} cursor-pointer">A+</button>
            </div>
          </div>

          <!-- Main Reading Content & Side Companion Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <!-- Column 1 & 2: Core Textbook & Step-by-Step Worked Example (2 spans) -->
            <div class="lg:col-span-2 space-y-6">
              
              <!-- Core Notes Card -->
              <div class="p-5 sm:p-6 rounded-2xl bg-space-950 border border-slate-800 space-y-4">
                <div class="flex items-center justify-between border-b border-slate-850 pb-3">
                  <div class="flex items-center gap-2">
                    <span class="text-lg">📖</span>
                    <span class="text-xs uppercase font-black text-emerald-400 tracking-wider">የስርዓተ-ትምህርቱ ማብራሪያ (CURRICULUM EXPLANATION)</span>
                  </div>
                  <span class="text-xs font-mono text-slate-400">⏱️ ~4 min read</span>
                </div>
                
                <div id="readingNotesBody" class="${fontSizeClass} text-slate-200 leading-relaxed font-sans space-y-3">
                  ${st.coreNotes}
                </div>
              </div>

              <!-- EXTREMELY DETAILED BABY-STEP WORKED EXAMPLE -->
              <div class="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-space-950 via-space-900 to-space-950 border border-emerald-500/40 space-y-5 shadow-xl">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
                  <span class="text-xs sm:text-sm font-black text-emerald-300 flex items-center gap-2 font-display">
                    <span>💡</span> ደረጃ በደረጃ የተሰራ መደበኛ ምሳሌ (STEP-BY-STEP WORKED EXAMPLE)
                  </span>
                  <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Official Method
                  </span>
                </div>
                
                <h4 class="text-sm sm:text-base font-black text-white font-display">${st.example.title}</h4>
                
                <!-- Problem Statement -->
                <div class="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                  <div class="text-[10px] font-black uppercase text-amber-400 tracking-wider">የተሰጠው የጥያቄ ፅንሰ-ሀሳብ (Problem):</div>
                  <p class="text-xs sm:text-sm text-slate-200 font-mono font-medium leading-relaxed">${st.example.problem}</p>
                </div>

                <!-- 4-Step Detailed Baby Step Breakdown -->
                <div class="space-y-3 pt-2">
                  ${st.example.steps.map((step, sIdx) => `
                    <div class="p-4 rounded-xl bg-space-900/80 border border-slate-800/80 space-y-1.5 hover:border-emerald-500/40 transition">
                      <div class="flex items-center justify-between text-xs font-black">
                        <span class="text-emerald-400 flex items-center gap-2">
                          <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] border border-emerald-500/30">${sIdx+1}</span>
                          <span>${step.label}</span>
                        </span>
                        <span class="text-[10px] text-slate-500">Verified Step</span>
                      </div>
                      <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans pl-7">${step.text}</p>
                    </div>
                  `).join('')}
                </div>

                <!-- Pro-Tip Box -->
                ${st.example.proTip ? `
                  <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-300 flex items-start gap-3">
                    <span class="text-xl shrink-0">⚠️</span>
                    <div class="space-y-0.5">
                      <strong class="font-black text-amber-200 uppercase tracking-wide">የፈተና ምክረ-ሀሳብ (Pro-Tip):</strong>
                      <p class="text-amber-300/90 leading-relaxed">${st.example.proTip}</p>
                    </div>
                  </div>
                ` : ''}

                <!-- Check My Understanding Micro-Challenge -->
                <div class="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>🎯</span> ራስህን ፈትሽ (CHECK YOUR UNDERSTANDING)
                    </span>
                    <span class="text-[10px] text-slate-400">Micro-Check</span>
                  </div>
                  <p class="text-xs text-slate-200">
                    ከላይ በተሰራው ምሳሌ መሰረት፣ ዋናው የስሌት ቁልፍ ደረጃ የትኛው እንደሆነ ተረድተሃል?
                  </p>
                  <div class="flex items-center gap-2">
                    <button onclick="submitInlineCheck(true)" class="px-4 py-2 rounded-xl bg-space-900 hover:bg-emerald-600/30 border border-slate-800 hover:border-emerald-500 text-xs font-bold text-slate-200 transition cursor-pointer">
                      ✔ አዎ፣ ደረጃዎቹን በሙሉ በሚገባ ተረድቻለሁ
                    </button>
                    <button onclick="submitInlineCheck(false)" class="px-4 py-2 rounded-xl bg-space-900 hover:bg-amber-600/30 border border-slate-800 hover:border-amber-500 text-xs font-bold text-slate-200 transition cursor-pointer">
                      ❓ ድጋሚ መከለስ እፈልጋለሁ
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <!-- Column 3: Companion Drawer (Stage 2 Question Tracker & Personal Notes) -->
            <div class="space-y-5">
              
              <!-- Stage 2 Question Tracker -->
              <div class="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-850 pb-2">
                  <span class="text-xs font-black text-white flex items-center gap-2">
                    <span>❓</span> የጥያቄዎችህ ማረጋገጫ (Questions Tracker)
                  </span>
                  <span class="text-[10px] text-emerald-400 font-mono">Stage 2</span>
                </div>
                <p class="text-[11px] text-slate-400 leading-relaxed">
                  በStage 2 የቀረጽካቸው ጥያቄዎች በንባቡ ወቅት መልስ ሲያገኙ ምልክት አድርግበት፦
                </p>

                <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
                  ${st.questions.map((q, idx) => `
                    <label class="flex items-start gap-2.5 p-2.5 rounded-xl bg-space-900/60 border border-slate-850 text-xs text-slate-300 cursor-pointer">
                      <input type="checkbox" class="mt-0.5 rounded text-emerald-500 focus:ring-0">
                      <span>${q}</span>
                    </label>
                  `).join('')}

                  ${customQs.map((q, idx) => `
                    <label class="flex items-start gap-2.5 p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200 cursor-pointer">
                      <input type="checkbox" class="mt-0.5 rounded text-amber-500 focus:ring-0">
                      <span>${q}</span>
                    </label>
                  `).join('')}
                </div>
              </div>

              <!-- In-Lesson Personal Scratchpad / Notes -->
              <div class="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-850 pb-2">
                  <span class="text-xs font-black text-white flex items-center gap-2">
                    <span>📝</span> የግል ማስታወሻ (Study Scratchpad)
                  </span>
                  <span id="noteSaveStatus" class="text-[10px] text-slate-500">Auto-saved locally</span>
                </div>
                <textarea id="lessonUserNotes" oninput="saveUserNotes(this.value)" placeholder="አስፈላጊ የሆኑ ነጥቦችን ወይም ቀመሮችን በራስህ አባባል እዚህ ጻፍ..." class="w-full bg-space-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none h-44 resize-none leading-relaxed">${userNote}</textarea>
                <div class="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>LocalStorage Persistent</span>
                  <button onclick="clearUserNotes()" class="text-slate-500 hover:text-rose-400 transition cursor-pointer">አጽዳ (Clear)</button>
                </div>
              </div>

            </div>

          </div>

          <!-- Stage 3 Footer Navigation -->
          <div class="pt-5 border-t border-slate-800 flex justify-between items-center flex-wrap gap-4">
            <button onclick="setSq3rStep('question')" class="text-xs font-bold text-slate-400 hover:text-white transition cursor-pointer">
              ← ወደ ጥያቄዎች ተመለስ (Back to Questions)
            </button>
            <button onclick="finishReadStep()" class="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer">
              <span>ፅንሰ-ሀሳቦቹ ተጨብጠዋል! ወደ ማስታወስ እለፍ (+45 XP)</span> <span>👉</span>
            </button>
          </div>

        </div>
      `;
    }

    function setReadingFontSize(size) {
      gState.activeFontSize = size;
      saveState();
      const el = document.getElementById('readingNotesBody');
      if (el) {
        el.className = `${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'} text-slate-200 leading-relaxed font-sans space-y-3`;
      }
    }

    function saveUserNotes(val) {
      const stId = gState.activeSubtopicId;
      gState.userNotes[stId] = val;
      saveState();
      const status = document.getElementById('noteSaveStatus');
      if (status) {
        status.innerText = 'Saved ✔';
        status.className = 'text-[10px] text-emerald-400 font-bold';
        setTimeout(() => {
          if (status) {
            status.innerText = 'Auto-saved locally';
            status.className = 'text-[10px] text-slate-500';
          }
        }, 2000);
      }
    }

    function clearUserNotes() {
      const stId = gState.activeSubtopicId;
      gState.userNotes[stId] = '';
      saveState();
      const textarea = document.getElementById('lessonUserNotes');
      if (textarea) textarea.value = '';
      showToast('ማስታወሻው ጸድቷል');
    }

    function submitInlineCheck(understood) {
      soundClick();
      if (understood) {
        soundSuccess();
        addXp(20, 'Understanding Verified');
        showToast('ድንቅ ነው! ደረጃ በደረጃ መስራት ስትችል የትኛውም ፈተና አያግድህም። 🌟');
      } else {
        showToast('ምሳሌውን በድጋሚ ተመልከት ወይም ዶ/ር ደስታን ጠቅ አድርገህ ተጨማሪ ማብራሪያ ጠይቅ! 🤖');
      }
    }

    // =========================================================================
    // STAGE 4: RECITE ENGINE (3D LEITNER FLASHCARDS & FREE RECALL JOURNAL)
    // =========================================================================
    let activeReciteMode = 'flashcards'; // 'flashcards' | 'journal' | 'self-check'

    function renderReciteStep(st, container) {
      currentCardIndex = 0;
      isCardFlipped = false;

      container.innerHTML = `
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-7 animate-fadeIn shadow-2xl">
          
          <!-- Recite Header -->
          <div class="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs uppercase font-black text-purple-400 tracking-wider">ደረጃ 4 ከ 5 • ንቁ ማስታወስ (STAGE 4: RECITE & RETRIEVAL PRACTICE)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">ያለ ማስታወሻ እውቀትህን ከአዕምሮህ አውጣ</h3>
              <p class="text-xs sm:text-sm text-slate-300">ማስታወሻህን ዝጋ! መልሱን ከማየትህ በፊት ቀመሩን ወይም ህጉን በቃልህ ለመናገር ሞክር።</p>
            </div>

            <!-- Recite Mode Selector Tabs -->
            <div class="shrink-0 flex items-center gap-1.5 bg-space-950 p-1.5 rounded-2xl border border-slate-800">
              <button onclick="setReciteMode('flashcards')" id="reciteTab-flashcards" class="px-3 py-1.5 rounded-xl text-xs font-black transition ${activeReciteMode === 'flashcards' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'} cursor-pointer">
                🃏 ፍላሽ ካርዶች
              </button>
              <button onclick="setReciteMode('journal')" id="reciteTab-journal" class="px-3 py-1.5 rounded-xl text-xs font-black transition ${activeReciteMode === 'journal' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'} cursor-pointer">
                ✍️ የራስ አገላለጽ
              </button>
            </div>
          </div>

          <!-- Mode 1: 3D Leitner Flashcards Arena -->
          <div id="reciteMode-flashcards" class="${activeReciteMode === 'flashcards' ? '' : 'hidden'} space-y-6">
            <div class="max-w-xl mx-auto py-2">
              <div onclick="flipFlashcard()" id="activeFlashcard" class="glass-crest h-60 sm:h-64 rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-emerald-500/40 relative shadow-2xl transition hover:border-emerald-400">
                <span id="flashcardSideLabel" class="text-[10px] uppercase font-black text-emerald-400 tracking-widest absolute top-4 left-4">QUESTION (ጥያቄ)</span>
                <span class="text-xs text-slate-400 absolute top-4 right-4">ካርዱን ግለጥ ↺ (Spacebar)</span>

                <div class="my-auto text-center px-4">
                  <h4 id="flashcardContent" class="text-base sm:text-lg font-black text-white leading-relaxed font-display">
                    ${st.reciteFlashcards[0].q}
                  </h4>
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 pt-3">
                  <span id="flashcardCounter" class="font-mono text-amber-400 font-bold">Card 1 of ${st.reciteFlashcards.length}</span>
                  <span class="text-emerald-400 font-bold">Leitner Active Recall</span>
                </div>
              </div>

              <!-- 4 Leitner Spaced Repetition Rating Buttons -->
              <div class="mt-5 space-y-2">
                <div class="text-[10px] font-black uppercase text-slate-400 text-center tracking-widest">
                  ይህንን ጥያቄ እንዴት አስታወስከው? (Rate Your Recall):
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button onclick="rateFlashcardLeitner('again')" class="p-2.5 rounded-xl bg-space-950 hover:bg-rose-950/60 border border-slate-800 hover:border-rose-500 text-xs font-bold text-rose-300 transition cursor-pointer">
                    🔴 እንደገና (1 day)
                  </button>
                  <button onclick="rateFlashcardLeitner('hard')" class="p-2.5 rounded-xl bg-space-950 hover:bg-amber-950/60 border border-slate-800 hover:border-amber-500 text-xs font-bold text-amber-300 transition cursor-pointer">
                    🟠 ከባድ (3 days)
                  </button>
                  <button onclick="rateFlashcardLeitner('good')" class="p-2.5 rounded-xl bg-space-950 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500 text-xs font-bold text-emerald-300 transition cursor-pointer">
                    🟢 ጥሩ (7 days)
                  </button>
                  <button onclick="rateFlashcardLeitner('easy')" class="p-2.5 rounded-xl bg-space-950 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500 text-xs font-bold text-cyan-300 transition cursor-pointer">
                    🔵 ቀላል (14 days)
                  </button>
                </div>
              </div>

              <!-- Flashcard Navigation Controls -->
              <div class="flex items-center justify-center gap-3 mt-4 flex-wrap">
                <button onclick="prevFlashcard()" class="px-4 py-2 rounded-xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white cursor-pointer">
                  ← Previous
                </button>
                <button onclick="flipFlashcard()" class="px-4 py-2 rounded-xl bg-space-850 border border-emerald-500/30 text-xs font-bold text-emerald-300 hover:text-white cursor-pointer">
                  Flip Card ↺
                </button>
                <button onclick="nextFlashcard()" class="px-4 py-2 rounded-xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white cursor-pointer">
                  Next →
                </button>
              </div>
            </div>
          </div>

          <!-- Mode 2: Free Recall Journal -->
          <div id="reciteMode-journal" class="${activeReciteMode === 'journal' ? '' : 'hidden'} space-y-5">
            <div class="p-5 sm:p-6 rounded-2xl bg-space-950 border border-slate-800 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-850 pb-3">
                <span class="text-xs sm:text-sm font-black text-white flex items-center gap-2 font-display">
                  <span>✍️</span> የራስ አገላለጽ ማህደር (FREE RECALL JOURNAL)
                </span>
                <span class="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                  Memory Retrieval
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ያለ ምንም እርዳታ፣ የዚህን ርዕስ ዋና ዋና ነጥቦች፣ ቀመሮች እና ትርጓሜዎች በራስህ አባባል ጻፍ። ከጻፍክ በኋላ "ከመደበኛው ጋር አነጻጽር" የሚለውን ቁልፍ በመንካት ትክክለኛነትህን አረጋግጥ!
              </p>
              <textarea id="freeRecallInput" placeholder="ያስታወስካቸውን ዋና ዋና ነጥቦች እዚህ ጻፍ..." class="w-full bg-space-900 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-200 focus:ring-2 focus:ring-purple-500 focus:outline-none h-36 resize-none leading-relaxed"></textarea>
              
              <div class="flex items-center justify-between">
                <button onclick="compareFreeRecall()" class="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs transition flex items-center gap-2 cursor-pointer shadow-md shadow-purple-600/30">
                  <span>🔍 ከመደበኛው ማስታወሻ ጋር አነጻጽር (+25 XP)</span>
                </button>
              </div>

              <!-- Side-by-Side Comparison Drawer -->
              <div id="freeRecallComparisonDrawer" class="hidden p-5 rounded-2xl bg-space-900 border border-purple-500/30 space-y-3">
                <div class="text-xs font-black text-purple-300 uppercase tracking-wider">
                  የስርዓተ-ትምህርቱ መደበኛ መልስ (Official Ministry Key Idea):
                </div>
                <div class="text-xs sm:text-sm text-slate-200 bg-space-950 p-4 rounded-xl border border-slate-800 leading-relaxed">
                  ${st.survey.blueprint}
                </div>
                <div class="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                  <span>✔</span> <span>በጣም ጥሩ! አዕምሮህ መረጃዎችን በራስህ ቋንቋ ማዋሃድ ጀምሯል።</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Stage 4 Footer Navigation -->
          <div class="pt-5 border-t border-slate-800 flex justify-between items-center flex-wrap gap-4">
            <button onclick="setSq3rStep('read')" class="text-xs font-bold text-slate-400 hover:text-white transition cursor-pointer">
              ← ወደ ንባብ ተመለስ (Back to Read)
            </button>
            <button onclick="finishReciteStep()" class="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer">
              <span>ወደ ሚኒስቴር ፈተና እለፍ (+45 XP)</span> <span>👉</span>
            </button>
          </div>

        </div>
      `;
    }

    function setReciteMode(mode) {
      soundClick();
      activeReciteMode = mode;
      const elCards = document.getElementById('reciteMode-flashcards');
      const elJournal = document.getElementById('reciteMode-journal');
      const tabCards = document.getElementById('reciteTab-flashcards');
      const tabJournal = document.getElementById('reciteTab-journal');

      if (mode === 'flashcards') {
        if (elCards) elCards.classList.remove('hidden');
        if (elJournal) elJournal.classList.add('hidden');
        if (tabCards) tabCards.className = 'px-3 py-1.5 rounded-xl text-xs font-black transition bg-purple-600 text-white shadow-md cursor-pointer';
        if (tabJournal) tabJournal.className = 'px-3 py-1.5 rounded-xl text-xs font-black transition text-slate-400 hover:text-white cursor-pointer';
      } else {
        if (elCards) elCards.classList.add('hidden');
        if (elJournal) elJournal.classList.remove('hidden');
        if (tabJournal) tabJournal.className = 'px-3 py-1.5 rounded-xl text-xs font-black transition bg-purple-600 text-white shadow-md cursor-pointer';
        if (tabCards) tabCards.className = 'px-3 py-1.5 rounded-xl text-xs font-black transition text-slate-400 hover:text-white cursor-pointer';
      }
    }

    function rateFlashcardLeitner(rating) {
      soundSuccess();
      const st = getActiveSubtopic();
      const card = st.reciteFlashcards[currentCardIndex];
      const cardKey = `${st.id}-c${currentCardIndex}`;

      const intervals = { again: 1, hard: 3, good: 7, easy: 14 };
      const days = intervals[rating] || 7;

      gState.flashcardIntervals[cardKey] = {
        days: days,
        nextReview: Date.now() + days * 86400000,
        rating: rating
      };
      gState.totalCardsMastered++;
      saveState();

      addXp(20, `Flashcard Mastered (${rating})`);
      showToast(`ካርዱ በ${days} ቀን ውስጥ ለክለሳ ይመጣል! 🧠`);
      nextFlashcard();
    }

    function compareFreeRecall() {
      const text = document.getElementById('freeRecallInput')?.value || '';
      if (!text.trim()) {
        showToast('በቅድሚያ ያስታወስካቸውን ነጥቦች በሳጥኑ ውስጥ ጻፍ!');
        return;
      }
      soundSuccess();
      addXp(25, 'Free Recall Practiced');
      const drawer = document.getElementById('freeRecallComparisonDrawer');
      if (drawer) drawer.classList.remove('hidden');
    }

    // =========================================================================
    // STAGE 5: REVIEW ENGINE (MINISTRY EXAM WITH HIDDEN BABY-STEP DERIVATIONS & 80% GATE)
    // =========================================================================
    function renderReviewStep(st, container) {
      if (currentQuizAnswersSubtopicId !== st.id) {
        currentQuizAnswers = {};
        currentQuizAnswersSubtopicId = st.id;
      }
      const qList = st.amtQuiz || [];
      const answeredCount = Object.keys(currentQuizAnswers).length;
      const correctCount = Object.values(currentQuizAnswers).filter(a => a.isCorrect).length;
      const scorePct = answeredCount > 0 ? Math.round((correctCount / qList.length) * 100) : 0;

      container.innerHTML = `
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-7 animate-fadeIn shadow-2xl">
          
          <!-- Header Banner -->
          <div class="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs uppercase font-black text-amber-400 tracking-wider">ደረጃ 5 ከ 5 • የብቃት ፈተና (STAGE 5: REVIEW & MINISTRY MASTERY GATE)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">⭐ የኢትዮጵያ ሚኒስቴር ፈተናዎች እና ዝርዝር የደረጃ በደረጃ መፍትሔ</h3>
              <p class="text-xs sm:text-sm text-slate-300">በመጀመሪያ ምርጫህን ምረጥ! ትክክለኛው መልስ፣ የተሟላ የደረጃ በደረጃ ስሌት እና የወጥመድ ማብራሪያ ምርጫህን ከወሰንክ በኋላ ይከፈታል። ማለፊያ ነጥብ፦ <strong>≥80%</strong></p>
            </div>
            <div class="shrink-0 flex items-center gap-2">
              <button onclick="retryAmtQuiz()" class="px-4 py-2.5 rounded-xl bg-space-850 hover:bg-space-800 text-xs font-bold text-slate-300 border border-slate-700 transition flex items-center gap-2 cursor-pointer" title="Reset all answers for a fresh attempt">
                <span>🔄</span> ፈተናውን እንደገና ጀምር
              </button>
            </div>
          </div>

          <!-- Live Diagnostic & Question Progress Ticker -->
          <div class="p-4 sm:p-5 rounded-2xl bg-space-950 border border-slate-800 flex items-center justify-between flex-wrap gap-4" id="liveQuizTracker">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold text-slate-400">ጥያቄዎች:</span>
              <div class="flex items-center gap-1.5 flex-wrap">
                ${qList.map((_, i) => {
                  const ans = currentQuizAnswers[i];
                  let pillClass = 'w-7 h-7 rounded-lg bg-space-900 text-slate-500 border border-slate-800 text-xs font-bold flex items-center justify-center';
                  let pillText = String(i + 1);
                  if (ans) {
                    if (ans.isCorrect) {
                      pillClass = 'w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-black flex items-center justify-center';
                      pillText = '✔';
                    } else {
                      pillClass = 'w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/40 text-xs font-black flex items-center justify-center';
                      pillText = '✖';
                    }
                  }
                  return `<span id="trackerPill-${i}" class="${pillClass}">${pillText}</span>`;
                }).join('')}
              </div>
            </div>
            <div class="flex items-center gap-4 text-xs font-bold">
              <span id="liveAttemptedCount" class="text-slate-300">${answeredCount} of ${qList.length} የተመለሱ</span>
              <span class="text-slate-700">|</span>
              <span id="liveScoreCount" class="${scorePct >= 80 ? 'text-emerald-400' : 'text-amber-400'} font-mono text-sm">${correctCount} ትክክል (${scorePct}%)</span>
              <span class="text-[11px] text-slate-400 hidden sm:inline">(የማለፊያ መስፈርት: ≥80%)</span>
            </div>
          </div>

          <!-- Question Cards -->
          <div class="space-y-6" id="quizContainer">
            ${qList.map((item, qIdx) => {
              const ans = currentQuizAnswers[qIdx];
              const isAnswered = !!ans;
              let statusBadge = '<span class="text-xs font-bold text-slate-500">ያልተመለሰ (ከታች ምረጥ)</span>';
              if (isAnswered) {
                statusBadge = ans.isCorrect
                  ? '<span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">ትክክል ✔</span>'
                  : '<span class="text-xs font-black text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/30">ተደጋግሞ መከለስ አለበት ✖</span>';
              }

              return `
                <div class="p-5 sm:p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-4" id="quizCard-${qIdx}">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">ጥያቄ ${qIdx+1} ከ ${qList.length}</span>
                    <span id="quizStatus-${qIdx}">${statusBadge}</span>
                  </div>
                  <h4 class="text-sm sm:text-base font-bold text-white leading-relaxed">${item.q}</h4>
                  
                  <!-- Options Grid -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    ${item.options.map((opt, optIdx) => {
                      let btnClass = 'quiz-option-btn p-3.5 rounded-xl bg-space-950 border border-slate-800 text-left text-xs sm:text-sm text-slate-300 font-medium hover:border-emerald-500 hover:text-white transition flex items-center gap-3 cursor-pointer';
                      let badgeHtml = `<span class="w-7 h-7 rounded-lg bg-space-850 text-slate-400 border border-slate-700/60 flex items-center justify-center font-bold text-xs shrink-0">${['A','B','C','D'][optIdx]}</span>`;

                      if (isAnswered) {
                        if (optIdx === item.correct) {
                          btnClass = 'p-3.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-left text-xs sm:text-sm text-emerald-200 font-bold flex items-center gap-3 shadow-lg shadow-emerald-500/20';
                          badgeHtml = '<span class="w-7 h-7 rounded-lg bg-emerald-500/30 text-emerald-300 border border-emerald-500/50 flex items-center justify-center font-black text-xs shrink-0">✔</span>';
                        } else if (optIdx === ans.selected && !ans.isCorrect) {
                          btnClass = 'p-3.5 rounded-xl bg-rose-950/80 border-2 border-rose-500 text-left text-xs sm:text-sm text-rose-300 font-bold flex items-center gap-3 shadow-lg shadow-rose-500/20';
                          badgeHtml = '<span class="w-7 h-7 rounded-lg bg-rose-500/30 text-rose-300 border border-rose-500/50 flex items-center justify-center font-black text-xs shrink-0">✖</span>';
                        } else {
                          btnClass = 'p-3.5 rounded-xl bg-space-950/40 border border-slate-800/60 text-left text-xs sm:text-sm text-slate-500 opacity-50 flex items-center gap-3';
                        }
                      }

                      return `
                        <button onclick="${isAnswered ? '' : `answerAmtQuiz(${qIdx}, ${optIdx})`}" id="optBtn-${qIdx}-${optIdx}" class="${btnClass}">
                          ${badgeHtml}
                          <span class="leading-snug">${opt}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>

                  <!-- Hidden Baby-Step Detailed Solution Box (Unlocked upon trying) -->
                  <div id="quizExplanation-${qIdx}" class="${isAnswered ? '' : 'hidden'} mt-4">
                    ${isAnswered ? buildBabyStepSolutionHtml(item, ans.selected, qIdx, qList.length) : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Dynamic Mastery Evaluation Banner -->
          <div id="masteryEvaluationBanner" class="${answeredCount === qList.length && qList.length > 0 ? '' : 'hidden'} pt-5 border-t border-slate-800">
            <!-- Dynamically populated -->
          </div>

          <!-- Stage 5 Footer -->
          <div class="pt-5 border-t border-slate-800 flex justify-between items-center" id="reviewFooterActions">
            <button onclick="setSq3rStep('recite')" class="text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer">
              <span>←</span> ወደ ማስታወስ ተመለስ (Back to Recite)
            </button>
            <div class="text-xs font-bold text-slate-400">
              ${answeredCount === qList.length ? 'ሁሉም ጥያቄዎች ተገምግመዋል' : 'ማጠቃለያውን ለማየት ሁሉንም ጥያቄዎች መልስ'}
            </div>
          </div>
        </div>
      `;

      if (answeredCount === qList.length && qList.length > 0) {
        evaluateMasteryGate(qList);
      }
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
        side.innerText = 'መልስ (ACTIVE RECALL ANSWER)';
        side.className = 'text-[10px] uppercase font-bold text-amber-400 tracking-widest absolute top-4 left-4';
        el.innerHTML = `<span class="text-amber-200">${card.a}</span>`;
      } else {
        side.innerText = 'ጥያቄ (QUESTION)';
        side.className = 'text-[10px] uppercase font-bold text-emerald-400 tracking-widest absolute top-4 left-4';
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
      document.getElementById('flashcardSideLabel').innerText = 'ጥያቄ (QUESTION)';
      document.getElementById('flashcardSideLabel').className = 'text-[10px] uppercase font-bold text-emerald-400 tracking-widest absolute top-4 left-4';
      document.getElementById('flashcardCounter').innerText = `Card ${currentCardIndex + 1} of ${st.reciteFlashcards.length}`;
      document.getElementById('flashcardContent').innerText = card.q;
    }

    // =========================================================================
    // GRADE 7 & 8 MINISTRY EXAM MODE: GRADING, EXTREME BABY-STEP REVEAL, AND 80% GATE)
    // =========================================================================
    let currentQuizAnswers = {};
    let currentQuizAnswersSubtopicId = null;

    function buildBabyStepSolutionHtml(qItem, selectedIdx, qIdx, totalQs, isSim = false) {
      const isCorrect = selectedIdx === qItem.correct;
      const correctLetter = ['A', 'B', 'C', 'D'][qItem.correct];
      const correctText = qItem.options[qItem.correct];
      const selectedLetter = selectedIdx !== null && selectedIdx !== undefined ? ['A', 'B', 'C', 'D'][selectedIdx] : null;
      const selectedText = selectedLetter ? qItem.options[selectedIdx] : 'None';

      const distractorRows = qItem.options.map((opt, i) => {
        const letter = ['A', 'B', 'C', 'D'][i];
        if (i === qItem.correct) {
          return `
            <div class="p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 space-y-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-md bg-emerald-500/30 text-emerald-300 font-black flex items-center justify-center text-xs">✔</span>
                  <strong class="text-xs sm:text-sm text-emerald-300">Option ${letter}: "${opt}"</strong>
                </div>
                <span class="text-[10px] uppercase font-black text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/40">VERIFIED ANSWER</span>
              </div>
              <p class="text-xs text-emerald-100/90 pl-7">
                Directly proven by the official curriculum rule and mathematical derivation above.
              </p>
            </div>
          `;
        } else {
          const wasPicked = i === selectedIdx;
          return `
            <div class="p-3 rounded-xl bg-space-950 border ${wasPicked ? 'border-rose-500/70 bg-rose-950/20' : 'border-slate-800'} space-y-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-md ${wasPicked ? 'bg-rose-500/30 text-rose-300' : 'bg-slate-800 text-slate-500'} font-black flex items-center justify-center text-xs">✖</span>
                  <strong class="text-xs sm:text-sm ${wasPicked ? 'text-rose-300' : 'text-slate-400'}">Option ${letter}: "${opt}"</strong>
                </div>
                <span class="text-[10px] uppercase font-bold ${wasPicked ? 'text-rose-400 bg-rose-500/10 border border-rose-500/30' : 'text-slate-500 bg-space-900 border border-slate-800'} px-2 py-0.5 rounded">
                  ${wasPicked ? 'YOUR SELECTION • DISTRACTOR' : 'INCORRECT DISTRACTOR'}
                </span>
              </div>
              <p class="text-xs text-slate-400 pl-7">
                ${wasPicked ? '⚠️ Common Misconception: Contradicts verified scientific/mathematical rules (see Exam Pitfall in Step 4).' : 'False choice designed to catch students who fail to execute the verified step-by-step strategy.'}
              </p>
            </div>
          `;
        }
      }).join('');

      return `
        <div class="space-y-4 animate-fadeIn">
          <!-- Direct Answer Reveal & Verdict Banner -->
          ${isCorrect ? `
            <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-space-900 to-emerald-950/80 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-black flex items-center justify-center text-base">
                    ✔
                  </div>
                  <div>
                    <span class="text-[11px] font-black uppercase text-emerald-400 tracking-wider">ትክክለኛ መልስ! (OFFICIAL VERDICT: SPOT ON!)</span>
                    <h5 class="text-sm sm:text-base font-bold text-white">Question #${qIdx + 1} Mastered Successfully! (+25 XP)</h5>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ANSWER: OPTION ${correctLetter}
                </span>
              </div>
              <div class="p-3 rounded-xl bg-space-950/90 border border-emerald-500/40 text-xs sm:text-sm text-slate-200">
                <strong class="text-emerald-400">Verified Answer:</strong> Option ${correctLetter} — <span class="text-white font-black">"${correctText}"</span>
              </div>
            </div>
          ` : `
            <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-950/90 via-space-900 to-rose-950/80 border-2 border-rose-500 shadow-xl shadow-rose-500/10 space-y-3">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 font-black flex items-center justify-center text-base">
                    ✖
                  </div>
                  <div>
                    <span class="text-[11px] font-black uppercase text-rose-400 tracking-wider">ትክክል ያልሆነ ሙከራ (INCORRECT ATTEMPT • DETAILED REMEDIATION)</span>
                    <h5 class="text-sm sm:text-base font-bold text-white">Master the baby steps below to never miss this in exams!</h5>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  CORRECT ANSWER: OPTION ${correctLetter}
                </span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                <div class="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-slate-300">
                  <strong class="text-rose-400">Your Selection:</strong> Option ${selectedLetter} — <span class="line-through text-slate-400 font-medium">"${selectedText}"</span>
                </div>
                <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-slate-200">
                  <strong class="text-emerald-400">Correct Answer:</strong> Option ${correctLetter} — <span class="font-black text-white">"${correctText}"</span>
                </div>
              </div>
            </div>
          `}

          <!-- Extreme Step-by-Step Very Baby Step Detailed Solution Framework -->
          <div class="space-y-3">
            <!-- Step 1: Tactical Approach -->
            <div class="p-4 rounded-xl bg-space-950 border border-emerald-500/30 space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🎯</span> STEP 1 • TACTICAL APPROACH & FIRST PRINCIPLES ("WAY TO DO IT")
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                ${qItem.strategy}
              </p>
            </div>

            <!-- Step 2: Micro Baby-Step Derivation -->
            <div class="p-4 rounded-xl bg-space-950 border border-cyan-500/30 space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>👣</span> STEP 2 • VERIFIED BABY-STEP MATHEMATICAL & CONCEPTUAL DERIVATION
                </span>
              </div>
              <div class="p-3.5 rounded-lg bg-space-900 border border-slate-800 text-xs sm:text-sm text-cyan-200 leading-relaxed font-mono whitespace-pre-line">
                ${qItem.derivation}
              </div>
              <p class="text-[11px] text-slate-400 italic">
                Directly establishing the required result: <strong class="text-white">Option ${correctLetter} ("${correctText}")</strong>.
              </p>
            </div>

            <!-- Step 3: Option-by-Option Distractor Autopsy -->
            <div class="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🔬</span> STEP 3 • OPTION-BY-OPTION AUTOPSY (WHY CHOICES ARE RIGHT OR WRONG)
                </span>
                <span class="text-[10px] text-slate-500 font-mono">All 4 Options Audited</span>
              </div>
              <div class="space-y-2">
                ${distractorRows}
              </div>
            </div>

            <!-- Step 4: Ministry Exam Trap & Golden Rule -->
            <div class="p-4 rounded-xl bg-amber-950/20 border border-amber-500/40 space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>⚠️</span> STEP 4 • MINISTRY EXAM PITFALL & GOLDEN RETENTION RULE
                </span>
              </div>
              <p class="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                ${qItem.trap}
              </p>
            </div>
          </div>

          <!-- Action Shortcut to next question -->
          ${!isSim && qIdx < totalQs - 1 ? `
            <div class="flex justify-end pt-1">
              <button onclick="scrollToQuizQuestion(${qIdx + 1})" class="px-4 py-2 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition flex items-center gap-1.5">
                <span>Proceed to Question #${qIdx + 2}</span> <span>↓</span>
              </button>
            </div>
          ` : ''}
        </div>
      `;
    }

    function scrollToQuizQuestion(qIdx) {
      soundClick();
      const card = document.getElementById(`quizCard-${qIdx}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    function updateLiveQuizTracker(total) {
      const answeredCount = Object.keys(currentQuizAnswers).length;
      const correctCount = Object.values(currentQuizAnswers).filter(a => a.isCorrect).length;
      const scorePct = answeredCount > 0 ? Math.round((correctCount / total) * 100) : 0;

      const attemptedEl = document.getElementById('liveAttemptedCount');
      const scoreEl = document.getElementById('liveScoreCount');
      if (attemptedEl) attemptedEl.innerText = `${answeredCount} of ${total} Answered`;
      if (scoreEl) {
        scoreEl.innerText = `${correctCount} Correct (${scorePct}%)`;
        scoreEl.className = `text-xs font-black font-mono ${scorePct >= 80 ? 'text-emerald-400' : 'text-amber-400'}`;
      }

      for (let i = 0; i < total; i++) {
        const pill = document.getElementById(`trackerPill-${i}`);
        if (pill) {
          if (currentQuizAnswers[i]) {
            if (currentQuizAnswers[i].isCorrect) {
              pill.className = 'w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black flex items-center justify-center';
              pill.innerText = '✔';
            } else {
              pill.className = 'w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 border border-rose-500/40 text-[10px] font-black flex items-center justify-center';
              pill.innerText = '✖';
            }
          } else {
            pill.className = 'w-6 h-6 rounded-md bg-space-950 text-slate-500 border border-slate-800 text-[10px] font-bold flex items-center justify-center';
            pill.innerText = String(i + 1);
          }
        }
      }
    }

    function answerAmtQuiz(qIdx, optIdx) {
      const st = getActiveSubtopic();
      const item = st.amtQuiz[qIdx];
      const isCorrect = optIdx === item.correct;

      currentQuizAnswers[qIdx] = { selected: optIdx, isCorrect: isCorrect };

      item.options.forEach((_, i) => {
        const b = document.getElementById(`optBtn-${qIdx}-${i}`);
        if (b) {
          b.onclick = null;
          if (i === item.correct) {
            b.className = 'p-3.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-left text-xs sm:text-sm text-emerald-200 font-bold flex items-center gap-3 shadow-lg shadow-emerald-500/20';
            b.innerHTML = `<span class="w-7 h-7 rounded-lg bg-emerald-500/30 text-emerald-300 border border-emerald-500/50 flex items-center justify-center font-black text-xs shrink-0">✔</span> <span class="leading-snug">${item.options[i]}</span>`;
          } else if (i === optIdx && !isCorrect) {
            b.className = 'p-3.5 rounded-xl bg-rose-950/80 border-2 border-rose-500 text-left text-xs sm:text-sm text-rose-300 font-bold flex items-center gap-3 shadow-lg shadow-rose-500/20';
            b.innerHTML = `<span class="w-7 h-7 rounded-lg bg-rose-500/30 text-rose-300 border border-rose-500/50 flex items-center justify-center font-black text-xs shrink-0">✖</span> <span class="leading-snug">${item.options[i]}</span>`;
          } else {
            b.className = 'p-3.5 rounded-xl bg-space-950/40 border border-slate-800/60 text-left text-xs sm:text-sm text-slate-500 opacity-50 flex items-center gap-3';
          }
        }
      });

      // UNLOCK AND REVEAL THE EXTREME BABY-STEP DETAILED SOLUTION
      const exp = document.getElementById(`quizExplanation-${qIdx}`);
      if (exp) {
        exp.innerHTML = buildBabyStepSolutionHtml(item, optIdx, qIdx, st.amtQuiz.length);
        exp.classList.remove('hidden');
      }

      const statusEl = document.getElementById(`quizStatus-${qIdx}`);
      if (isCorrect) {
        soundSuccess();
        addXp(25, 'Correct Answer');
        if (statusEl) {
          statusEl.innerHTML = '<span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Mastered ✔</span>';
        }
      } else {
        soundError();
        if (statusEl) {
          statusEl.innerHTML = '<span class="text-xs font-black text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">Needs Review ✖</span>';
        }
      }

      updateLiveQuizTracker(st.amtQuiz.length);

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
        soundSuccess();
        banner.innerHTML = `
          <div class="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-space-900 to-emerald-950/80 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 space-y-5 text-center animate-fadeIn">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-4xl shadow-lg shadow-emerald-500/30">
              🏆
            </div>
            <div class="space-y-1.5">
              <span class="text-xs uppercase font-black text-emerald-400 tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                MASTERED • CONGRATULATIONS!
              </span>
              <h3 class="text-2xl sm:text-3xl font-black text-white font-display">🎉 ደረጃውን በ ${scorePct}% አጠናቀዋል! (LEVEL MASTERED)</h3>
              <p class="text-xs sm:text-sm text-emerald-200/90 max-w-xl mx-auto leading-relaxed">
                You scored <strong>${correctCount} out of ${qList.length} correct</strong> (${scorePct}%) and exceeded the strict 80% national mastery threshold!
              </p>
            </div>
            <div class="flex items-center justify-center gap-3 pt-2 flex-wrap">
              <button onclick="claimMasteryAndUnlockNext(${scorePct})" class="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2.5">
                <span>ቀጣዩን ርዕስ ክፈት (Unlock & Launch Next Level) (+50 XP, +40 💎)</span> <span>🚀</span>
              </button>
            </div>
          </div>
        `;
      } else {
        soundError();
        banner.innerHTML = `
          <div class="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-rose-950/90 via-space-900 to-rose-950/80 border-2 border-rose-500/70 shadow-2xl shadow-rose-500/20 space-y-5 text-center animate-fadeIn">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-rose-500/20 border border-rose-500/50 flex items-center justify-center text-4xl shadow-lg shadow-rose-500/30">
              ⚠️
            </div>
            <div class="space-y-1.5">
              <span class="text-xs uppercase font-black text-rose-400 tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/30">
                የውጤት ገደብ አልተሟላም (MASTERY GATE LOCKED: ${scorePct}%)
              </span>
              <h3 class="text-2xl sm:text-3xl font-black text-rose-400 font-display">PREREQUISITE THRESHOLD NOT REACHED</h3>
              <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                You got <strong>${correctCount} of ${qList.length} correct</strong> (${scorePct}%). The Ethiopian national standard requires at least <strong>80% mastery</strong> before you are permitted to advance to subsequent missions.
              </p>
              <p class="text-xs text-amber-300 pt-1">
                Study the extreme baby-step solutions and option autopsies revealed above, then retry!
              </p>
            </div>
            <div class="flex items-center justify-center gap-3 pt-2 flex-wrap">
              <button onclick="retryAmtQuiz()" class="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-rose-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>🔄 Retry Test (Reset Answers)</span>
              </button>
              <button onclick="setSq3rStep('read')" class="px-6 py-3.5 rounded-xl bg-space-850 hover:bg-space-800 text-emerald-300 hover:text-white font-black text-xs sm:text-sm border border-emerald-500/30 transition flex items-center gap-2">
                <span>📖 Review Core Notes (Stage 3)</span>
              </button>
            </div>
          </div>
        `;
      }

      if (footerActions) footerActions.classList.add('hidden');
      banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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

      gState.masteredSubtopics[stId] = {
        passed: true,
        score: score,
        timestamp: Date.now()
      };
      saveState();

      const allSubtopics = getAllSubtopicsForSubject(gState.grade, gState.activeSubject);
      const curIdx = allSubtopics.findIndex(st => st.id === stId);

      if (curIdx >= 0 && curIdx < allSubtopics.length - 1) {
        const nextSubtopic = allSubtopics[curIdx + 1];
        showToast(`🌟 Level Mastered! Advancing to ${nextSubtopic.code} ${nextSubtopic.title}!`);
        setTimeout(() => {
          changeSubtopic(nextSubtopic.id);
          window.scrollTo({ top: 120, behavior: 'smooth' });
        }, 600);
      } else {
        triggerConfetti();
        showToast(`🏆 INCREDIBLE! You have fully conquered all levels in ${GALACTIC_DATABASE[gState.grade][gState.activeSubject].name}!`);
        populateDropdowns();
        renderCurriculumMatrix();
        renderLevelMap();
      }
    }

    // =========================================================================
    // CURRICULUM SYLLABUS MATRIX VIEW (EXHAUSTIVE)
    // =========================================================================
    function renderCurriculumMatrix() {
      const container = document.getElementById('curriculumMatrixContainer') || document.getElementById('matrixUnitsContainer');
      if (!container) return;

      const subjects = GALACTIC_DATABASE[gState.grade];
      container.innerHTML = '';

      Object.values(subjects).forEach(sub => {
        const subCard = document.createElement('div');
        subCard.className = 'glass-card p-6 rounded-2xl border border-slate-800 space-y-4';
        const meta = SUBJECT_METADATA[sub.id] || { am: '', name: sub.name, icon: sub.icon };

        let subtopicsHtml = '';
        sub.units.forEach(u => {
          subtopicsHtml += `
            <div class="mt-4 pt-4 border-t border-slate-800/80">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-black text-emerald-400">${u.number}: ${u.title}</span>
                <span class="text-[10px] text-slate-500">${u.subtopics.length} Subtopics</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          `;

          u.subtopics.forEach(st => {
            const mastered = isSubtopicMastered(st.id);
            const unlocked = isSubtopicUnlocked(st.id, sub.id, gState.grade);
            const isCurrent = st.id === gState.activeSubtopicId && sub.id === gState.activeSubject;
            const score = getSubtopicScore(st.id);

            let statusBadge = '';
            let cardBg = '';

            if (mastered) {
              statusBadge = `<span class="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">⭐ Mastered (${score}%)</span>`;
              cardBg = 'bg-amber-950/20 border-amber-500/40 hover:border-amber-400';
            } else if (isCurrent) {
              statusBadge = `<span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">📖 Active</span>`;
              cardBg = 'bg-emerald-950/40 border-emerald-500/50 hover:border-emerald-400';
            } else if (unlocked) {
              statusBadge = `<span class="text-[10px] font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">🔓 Ready</span>`;
              cardBg = 'bg-space-900 border-slate-800 hover:border-emerald-500';
            } else {
              statusBadge = `<span class="text-[10px] font-bold text-slate-500 bg-space-950 px-2 py-0.5 rounded border border-slate-800">🔒 Locked</span>`;
              cardBg = 'bg-space-950/50 border-slate-850 opacity-60';
            }

            subtopicsHtml += `
              <div onclick="jumpToSubtopic('${sub.id}', '${u.id}', '${st.id}')" class="p-3 rounded-xl border ${cardBg} cursor-pointer transition space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="font-mono text-xs font-bold text-white">${st.code}</span>
                  ${statusBadge}
                </div>
                <h5 class="text-xs font-medium text-slate-300 leading-snug">${st.title}</h5>
              </div>
            `;
          });

          subtopicsHtml += `
              </div>
            </div>
          `;
        });

        subCard.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <span class="text-2xl">${meta.icon}</span>
              <div>
                <h4 class="text-base sm:text-lg font-black text-white font-display">${meta.name} (${meta.am})</h4>
                <p class="text-xs text-slate-400">${sub.units.length} Units • Complete Ethiopian Syllabus</p>
              </div>
            </div>
            <button onclick="selectSubject('${sub.id}')" class="px-3.5 py-1.5 rounded-xl bg-space-850 border border-slate-700 text-xs font-bold text-emerald-300 hover:text-white transition">Study Subject →</button>
          </div>
          ${subtopicsHtml}
        `;

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
      const container = document.getElementById('vaultExamplesList') || document.getElementById('vaultItemsContainer');
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

      container.innerHTML = filtered.map(item => `
        <div class="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-slate-700 transition">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              ${item.subjectIcon} ${item.subjectName} • ${item.subCode} ${item.unitTitle}
            </span>
            <button onclick="jumpToSubtopic('${item.subjectId}', '${item.unitId}', '${item.subtopicId}')" class="text-[11px] font-bold text-amber-400 hover:underline">
              Go to SQ3R Topic →
            </button>
          </div>

          <h4 class="text-sm sm:text-base font-black text-white">${item.example.title}</h4>
          <p class="text-xs font-mono text-slate-300 bg-space-950 p-3 rounded-xl border border-slate-800 leading-relaxed">${item.example.problem}</p>

          <div class="space-y-2 pt-1">
            ${item.example.steps.map(step => `
              <div class="p-3 rounded-xl bg-space-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                <span class="font-bold text-emerald-400">${step.label}:</span>
                <p class="text-slate-300">${step.text}</p>
              </div>
            `).join('')}
          </div>

          ${item.example.proTip ? `
            <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
              <span class="text-sm">⚠️</span>
              <span><strong>Pro-Tip:</strong> ${item.example.proTip}</span>
            </div>
          ` : ''}
        </div>
      `).join('');
    }

    function filterVault(term) {
      renderVault(term);
    }

    // =========================================================================
    // GRADE 7 & 8 MINISTRY EXAM SIMULATOR TAB
    // =========================================================================
    let allSimQuestions = [];

    function renderAmtExam() {
      const container = document.getElementById('amtExamQuestionsList') || document.getElementById('amtSimulatorContainer');
      if (!container) return;

      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      allSimQuestions = [];

      sub.units.forEach(u => {
        u.subtopics.forEach(st => {
          if (st.amtQuiz) {
            st.amtQuiz.forEach(q => {
              allSimQuestions.push({
                ...q,
                unitNumber: u.number,
                subCode: st.code,
                topicTitle: st.title
              });
            });
          }
        });
      });

      container.innerHTML = `
        <div class="p-5 sm:p-6 rounded-2xl glass-card border border-emerald-500/30 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">NATIONAL CURRICULUM GRADE 7 & 8 EXAM ENGINE</span>
              <h3 class="text-lg sm:text-xl font-black text-white">${sub.name} Diagnostic & Preparation Arena</h3>
            </div>
            <span class="text-xs font-mono text-emerald-400 font-bold bg-space-950 px-3 py-1 rounded-lg border border-slate-800">
              ${allSimQuestions.length} Questions Bank
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300">
            Every question simulates national exam standards with instant step-by-step mathematical reasoning, traps, and shortcuts.
          </p>
        </div>

        <div class="space-y-6">
          ${allSimQuestions.map((qItem, idx) => `
            <div class="p-5 sm:p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-4" id="amtSimCard-${idx}">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="text-xs font-mono font-bold text-slate-400">${qItem.unitNumber} • ${qItem.subCode} ${qItem.topicTitle}</span>
                <span class="text-xs font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">Exam Question #${idx+1}</span>
              </div>
              <h4 class="text-sm sm:text-base font-bold text-white leading-relaxed">${qItem.q}</h4>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                ${qItem.options.map((opt, optIdx) => `
                  <button onclick="revealAmtSimAnswer(${idx}, ${optIdx}, ${qItem.correct})" id="amtSimBtn-${idx}-${optIdx}" class="quiz-option-btn p-3.5 rounded-xl bg-space-950 border border-slate-800 text-left text-xs sm:text-sm text-slate-300 font-medium hover:border-emerald-500 hover:text-white transition flex items-center gap-3">
                    <span class="w-7 h-7 rounded-lg bg-space-850 text-slate-400 border border-slate-700/60 flex items-center justify-center font-bold text-xs shrink-0">${['A','B','C','D'][optIdx]}</span>
                    <span class="leading-snug">${opt}</span>
                  </button>
                `).join('')}
              </div>

              <div id="amtSimExp-${idx}" class="hidden mt-4">
                <!-- Dynamically populated baby-step solution -->
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    function revealAmtSimAnswer(qIdx, optIdx, correctIdx) {
      const exp = document.getElementById(`amtSimExp-${qIdx}`);
      const item = allSimQuestions[qIdx];

      [0,1,2,3].forEach(i => {
        const b = document.getElementById(`amtSimBtn-${qIdx}-${i}`);
        if (b) {
          b.onclick = null;
          if (i === correctIdx) {
            b.className = 'p-3.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-left text-xs sm:text-sm text-emerald-200 font-bold flex items-center gap-3 shadow-lg shadow-emerald-500/20';
            b.innerHTML = `<span class="w-7 h-7 rounded-lg bg-emerald-500/30 text-emerald-300 border border-emerald-500/50 flex items-center justify-center font-black text-xs shrink-0">✔</span> <span class="leading-snug">${item.options[i]}</span>`;
          } else if (i === optIdx && optIdx !== correctIdx) {
            b.className = 'p-3.5 rounded-xl bg-rose-950/80 border-2 border-rose-500 text-left text-xs sm:text-sm text-rose-300 font-bold flex items-center gap-3 shadow-lg shadow-rose-500/20';
            b.innerHTML = `<span class="w-7 h-7 rounded-lg bg-rose-500/30 text-rose-300 border border-rose-500/50 flex items-center justify-center font-black text-xs shrink-0">✖</span> <span class="leading-snug">${item.options[i]}</span>`;
          } else {
            b.className = 'p-3.5 rounded-xl bg-space-950/40 border border-slate-800/60 text-left text-xs sm:text-sm text-slate-500 opacity-50 flex items-center gap-3';
          }
        }
      });

      if (exp && item) {
        exp.innerHTML = buildBabyStepSolutionHtml(item, optIdx, qIdx, allSimQuestions.length, true);
        exp.classList.remove('hidden');
      }

      if (optIdx === correctIdx) {
        soundSuccess();
        addXp(25, 'Ministry Exam Solver');
      } else {
        soundError();
      }
    }

    // =========================================================================
    // TROPHY ROOM & ACADEMIC HONORS
    // =========================================================================
    function renderTrophyRoom() {
      const bContainer = document.getElementById('badgesGrid') || document.getElementById('trophyBadgesContainer');
      if (bContainer) {
        bContainer.innerHTML = NATIONAL_BADGES.map(b => {
          const isUnlocked = gState.unlockedBadges.includes(b.id);
          return `
            <div class="p-4 rounded-2xl ${isUnlocked ? 'glass-crest border-amber-500/40' : 'bg-space-950/60 border-slate-800 opacity-50'} border text-center space-y-2">
              <div class="text-3xl">${b.icon}</div>
              <h5 class="text-xs font-black text-white">${b.name}</h5>
              <p class="text-[11px] text-slate-400 leading-tight">${b.desc}</p>
              <span class="inline-block text-[10px] font-bold px-2 py-0.5 rounded ${isUnlocked ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}">
                ${isUnlocked ? 'Unlocked ✔' : 'Locked 🔒'}
              </span>
            </div>
          `;
        }).join('');
      }

      const shopContainer = document.getElementById('shopItemsGrid');
      if (shopContainer) {
        shopContainer.innerHTML = SHOP_ITEMS.map(item => `
          <div class="glass-card p-4 rounded-2xl border border-slate-800 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-3xl">${item.item}</span>
              <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                ${item.cost} 💎
              </span>
            </div>
            <h5 class="text-xs font-black text-white">${item.name}</h5>
            <p class="text-[11px] text-slate-400 leading-snug">${item.desc}</p>
            <button onclick="purchaseAvatar('${item.item}', ${item.cost})" class="w-full py-1.5 rounded-xl bg-space-850 hover:bg-emerald-600/30 text-xs font-bold text-emerald-300 border border-emerald-500/30 transition">
              Equip Avatar
            </button>
          </div>
        `).join('');
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
      showToast(`Avatar updated to ${icon}!`);
    }

    function claimDailyReward() {
      soundSuccess();
      addXp(60, 'Daily Study Stipend');
      addGems(75);
      triggerConfetti();
      showToast('🎁 Daily National Study Stipend Claimed! (+75 💎 & +60 XP)');
    }

    // =========================================================================
    // ANALYTICS & MASTERY CALCULATOR
    // =========================================================================
    function renderAnalytics() {
      for (const grade of [7, 8]) {
        const container = document.getElementById(`g${grade}MasteryList`);
        if (!container) continue;

        const subjects = GALACTIC_DATABASE[grade];
        let html = '';

        Object.values(subjects).forEach(sub => {
          const allSt = getAllSubtopicsForSubject(grade, sub.id);
          const masteredCount = allSt.filter(st => isSubtopicMastered(st.id)).length;
          const pct = allSt.length > 0 ? Math.round((masteredCount / allSt.length) * 100) : 0;
          const meta = SUBJECT_METADATA[sub.id] || { am: '', name: sub.name, icon: sub.icon };

          html += `
            <div class="p-3 rounded-xl bg-space-950 border border-slate-800 space-y-1.5">
              <div class="flex items-center justify-between text-xs font-bold">
                <span class="flex items-center gap-1.5 text-white">
                  <span>${meta.icon}</span> <span>${meta.name}</span> <span class="text-[10px] text-slate-500">(${meta.am})</span>
                </span>
                <span class="font-mono text-emerald-400">${masteredCount} / ${allSt.length} (${pct}%)</span>
              </div>
              <div class="w-full h-1.5 bg-slate-850 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" style="width: ${pct}%;"></div>
              </div>
            </div>
          `;
        });

        container.innerHTML = html;
      }
    }

    // =========================================================================
    // TAB NAVIGATION
    // =========================================================================
    function switchTab(tabId) {
      soundClick();
      const tabMap = {
        'dashboard': 'view-dashboard',
        'sq3r': 'view-sq3r',
        'exam-hall': 'view-exam-hall',
        'exam': 'view-exam-hall',
        'curriculum': 'view-curriculum',
        'matrix': 'view-curriculum',
        'amt-exam': 'view-amt-exam',
        'amt': 'view-amt-exam',
        'vault': 'view-vault',
        'reference': 'view-reference',
        'ref': 'view-reference',
        'rewards': 'view-rewards',
        'analytics': 'view-analytics'
      };

      const btnMap = {
        'dashboard': 'tabBtn-dashboard',
        'sq3r': 'tabBtn-sq3r',
        'exam-hall': 'tabBtn-exam-hall',
        'exam': 'tabBtn-exam-hall',
        'curriculum': 'tabBtn-curriculum',
        'matrix': 'tabBtn-curriculum',
        'amt-exam': 'tabBtn-amt-exam',
        'amt': 'tabBtn-amt-exam',
        'vault': 'tabBtn-vault',
        'reference': 'tabBtn-reference',
        'ref': 'tabBtn-reference',
        'rewards': 'tabBtn-rewards',
        'analytics': 'tabBtn-analytics'
      };

      const activeViewId = tabMap[tabId] || 'view-dashboard';

      ['view-dashboard', 'view-sq3r', 'view-exam-hall', 'view-curriculum', 'view-amt-exam', 'view-vault', 'view-reference', 'view-rewards', 'view-analytics'].forEach(vId => {
        const el = document.getElementById(vId);
        if (el) el.style.display = vId === activeViewId ? 'block' : 'none';
      });

      ['tabBtn-dashboard', 'tabBtn-sq3r', 'tabBtn-exam-hall', 'tabBtn-curriculum', 'tabBtn-amt-exam', 'tabBtn-vault', 'tabBtn-reference', 'tabBtn-rewards', 'tabBtn-analytics'].forEach(bId => {
        const btn = document.getElementById(bId);
        if (btn) {
          if (bId === btnMap[tabId]) {
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap cursor-pointer';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer';
          }
        }
      });

      if (tabId === 'dashboard') renderDashboard();
      if (tabId === 'exam-hall' || tabId === 'exam') initExamHallView();
      if (tabId === 'curriculum' || tabId === 'matrix') renderCurriculumMatrix();
      if (tabId === 'vault') renderVault();
      if (tabId === 'amt-exam' || tabId === 'amt') renderAmtExam();
      if (tabId === 'rewards') renderTrophyRoom();
      if (tabId === 'sq3r') renderLevelMap();
      if (tabId === 'analytics') renderAnalytics();
    }

    function exportStateData() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gState, null, 2));
      const dl = document.createElement('a');
      dl.setAttribute("href", dataStr);
      dl.setAttribute("download", "ethiopia_cba_sq3r_state.json");
      dl.click();
    }

    function renderHeaderStats() {
      const nextLevelXp = gState.level * 250;
      const prevLevelXp = (gState.level - 1) * 250;
      const cur = Math.max(0, gState.xp - prevLevelXp);
      const needed = nextLevelXp - prevLevelXp;
      const pct = Math.min(100, Math.round((cur / needed) * 100));

      document.getElementById('streakCount').innerText = gState.streak;
      document.getElementById('gemCount').innerText = gState.gems;
      document.getElementById('userAvatarIcon').innerText = gState.avatar;
      document.getElementById('levelTitle').innerText = `Lvl ${gState.level} • ${gState.title}`;
      document.getElementById('xpDisplay').innerText = `${gState.xp} / ${nextLevelXp} XP`;
      document.getElementById('xpProgressBar').style.width = `${pct}%`;

      if (document.getElementById('statTotalXp')) {
        document.getElementById('statTotalXp').innerText = gState.xp;
        document.getElementById('statStreak').innerText = `${gState.streak} Days`;
        document.getElementById('statCardsMastered').innerText = gState.totalCardsMastered;
        document.getElementById('statQuizzesDone').innerText = gState.totalQuizzesDone;
        document.getElementById('trophyGems').innerText = `${gState.gems} 💎`;
        document.getElementById('trophyAvatarBig').innerText = gState.avatar;
        document.getElementById('trophyTitleBig').innerText = `${gState.title} (Level ${gState.level})`;
        document.getElementById('trophyBadgeCount').innerText = `${gState.unlockedBadges.length} / ${NATIONAL_BADGES.length}`;
      }
    }

    // =========================================================================
    // POMODORO TIMER
    // =========================================================================
    let pomoSeconds = 25 * 60;
    let pomoInterval = null;
    let isPomoRunning = false;

    function togglePomodoro() {
      if (isPomoRunning) {
        clearInterval(pomoInterval);
        isPomoRunning = false;
        document.getElementById('pomoIcon').innerText = '⏳';
        showToast('Pomodoro timer paused.');
      } else {
        isPomoRunning = true;
        document.getElementById('pomoIcon').innerText = '🔥';
        showToast('25-minute focused study session started! Focus on your notes.');
        pomoInterval = setInterval(() => {
          if (pomoSeconds > 0) {
            pomoSeconds--;
            const m = Math.floor(pomoSeconds / 60).toString().padStart(2, '0');
            const s = (pomoSeconds % 60).toString().padStart(2, '0');
            document.getElementById('pomoTime').innerText = `${m}:${s}`;
          } else {
            clearInterval(pomoInterval);
            isPomoRunning = false;
            pomoSeconds = 25 * 60;
            document.getElementById('pomoIcon').innerText = '⏳';
            document.getElementById('pomoTime').innerText = '25:00';
            soundLevelUp();
            triggerConfetti();
            addXp(50, 'Pomodoro Completed');
            showToast('🎉 Pomodoro Completed! Great focus session. Take a 5-min break.');
          }
        }, 1000);
      }
    }

    // =========================================================================
    // INITIALIZATION & KEYBOARD SHORTCUTS
    // =========================================================================


    // =========================================================================
    // POPULARITY UPGRADE 1: MINISTRY EXAM HALL SIMULATOR (የፈተና አዳራሽ)
    // =========================================================================
    let examHallState = {
      active: false,
      subject: 'all',
      grade: 'current',
      totalCount: 20,
      timerMode: 'standard',
      timeRemainingSec: 20 * 60,
      timerInterval: null,
      questions: [],
      currentIndex: 0,
      answers: {},
      flagged: {},
      submitted: false,
      score: 0,
      pct: 0
    };

    function initExamHallView() {
      // Calculate total questions in current curriculum
      let totalQ = 0;
      [7, 8].forEach(g => {
        if (GALACTIC_DATABASE[g]) {
          Object.keys(GALACTIC_DATABASE[g]).forEach(sKey => {
            const subj = GALACTIC_DATABASE[g][sKey];
            (subj.units || []).forEach(u => {
              (u.subtopics || []).forEach(st => {
                totalQ += (st.amtQuiz || []).length;
              });
            });
          });
        }
      });

      const bankBadge = document.getElementById('lobbyTotalBankCount');
      if (bankBadge) bankBadge.innerText = totalQ;

      // If already running, show active room; otherwise show lobby
      if (examHallState.active && !examHallState.submitted) {
        document.getElementById('examHallLobby').classList.add('hidden');
        document.getElementById('examHallActive').classList.remove('hidden');
        document.getElementById('examHallResults').classList.add('hidden');
      } else if (examHallState.submitted) {
        document.getElementById('examHallLobby').classList.add('hidden');
        document.getElementById('examHallActive').classList.add('hidden');
        document.getElementById('examHallResults').classList.remove('hidden');
      } else {
        document.getElementById('examHallLobby').classList.remove('hidden');
        document.getElementById('examHallActive').classList.add('hidden');
        document.getElementById('examHallResults').classList.add('hidden');
      }
    }

    function launchExamHall() {
      soundClick();
      const sVal = document.getElementById('examSubjectSelect').value;
      const gVal = document.getElementById('examGradeSelect').value;
      const countVal = parseInt(document.getElementById('examCountSelect').value, 10) || 20;
      const tVal = document.getElementById('examTimerSelect').value;

      // Pool matching questions
      let candidatePool = [];
      const gradesToScan = gVal === 'both' ? [7, 8] : (gVal === 'current' ? [gState.grade] : [parseInt(gVal, 10)]);

      gradesToScan.forEach(g => {
        if (!GALACTIC_DATABASE[g]) return;
        const subjectsToScan = sVal === 'all' ? Object.keys(GALACTIC_DATABASE[g]) : [sVal];

        subjectsToScan.forEach(sKey => {
          const subj = GALACTIC_DATABASE[g][sKey];
          if (!subj) return;
          (subj.units || []).forEach(u => {
            (u.subtopics || []).forEach(st => {
              (st.amtQuiz || []).forEach((qItem, qIdx) => {
                candidatePool.push({
                  ...qItem,
                  grade: g,
                  subjectKey: sKey,
                  subjectName: subj.name,
                  subjectAm: subj.am,
                  unitNumber: u.number,
                  unitTitle: u.title,
                  unitId: u.id,
                  subtopicCode: st.code,
                  subtopicTitle: st.title
                });
              });
            });
          });
        });
      });

      if (candidatePool.length === 0) {
        showToast('⚠️ ምንም ጥያቄዎች አልተገኙም። እባክዎ ሌሎች ቅንብሮችን ይምረጡ።');
        return;
      }

      // Shuffle candidates (Fisher-Yates)
      for (let i = candidatePool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidatePool[i], candidatePool[j]] = [candidatePool[j], candidatePool[i]];
      }

      const selectedQuestions = candidatePool.slice(0, Math.min(countVal, candidatePool.length));

      // Calculate time
      let totalSeconds = 20 * 60;
      if (tVal === 'strict') totalSeconds = selectedQuestions.length * 45;
      else if (tVal === 'relaxed') totalSeconds = selectedQuestions.length * 90;
      else if (tVal === 'untimed') totalSeconds = 0;
      else totalSeconds = selectedQuestions.length * 60; // standard 1 min / Q

      examHallState = {
        active: true,
        subject: sVal,
        grade: gVal,
        totalCount: selectedQuestions.length,
        timerMode: tVal,
        timeRemainingSec: totalSeconds,
        timerInterval: null,
        questions: selectedQuestions,
        currentIndex: 0,
        answers: {},
        flagged: {},
        submitted: false,
        score: 0,
        pct: 0
      };

      document.getElementById('examActiveTitle').innerText = sVal === 'all' 
        ? 'የኢትዮጵያ ሚኒስቴር አጠቃላይ የፈተና ማስመሰያ (MoE Grand Mock Exam)'
        : `የኢትዮጵያ ሚኒስቴር የ${SUBJECT_METADATA[sVal]?.am || sVal} ፈተና (${SUBJECT_METADATA[sVal]?.name || sVal})`;

      document.getElementById('examHallLobby').classList.add('hidden');
      document.getElementById('examHallActive').classList.remove('hidden');
      document.getElementById('examHallResults').classList.add('hidden');

      renderExamHallPalette();
      renderExamHallQuestion(0);
      startExamHallTimer();
      showToast('🏛️ የፈተና አዳራሽ ተከፍቷል! ፈተናው ተጀምሯል። መልካም ዕድል!');
    }

    function startExamHallTimer() {
      if (examHallState.timerInterval) clearInterval(examHallState.timerInterval);

      if (examHallState.timerMode === 'untimed') {
        document.getElementById('examClockDisplay').innerText = 'Untimed';
        return;
      }

      updateExamHallTimerDisplay();
      examHallState.timerInterval = setInterval(() => {
        if (examHallState.timeRemainingSec > 0) {
          examHallState.timeRemainingSec--;
          updateExamHallTimerDisplay();
        } else {
          clearInterval(examHallState.timerInterval);
          soundError();
          showToast('⏰ የፈተናው ጊዜ ተጠናቋል! መልሶችህ ወዲያውኑ እየተገመገሙ ነው።');
          finishExamHall(true);
        }
      }, 1000);
    }

    function updateExamHallTimerDisplay() {
      const sec = examHallState.timeRemainingSec;
      const m = Math.floor(sec / 60).toString().padStart(2, '0');
      const s = (sec % 60).toString().padStart(2, '0');
      const displayEl = document.getElementById('examClockDisplay');
      const badgeEl = document.getElementById('examClockBadge');
      
      if (displayEl) displayEl.innerText = `${m}:${s}`;
      
      if (badgeEl) {
        if (sec <= 180) { // < 3 minutes
          badgeEl.className = 'flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-950/80 border border-red-500 text-red-400 font-mono font-black text-sm animate-pulse';
        } else if (sec <= 360) {
          badgeEl.className = 'flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-950/80 border border-amber-500 text-amber-300 font-mono font-black text-sm';
        } else {
          badgeEl.className = 'flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-space-950 border border-slate-700 text-amber-400 font-mono font-black text-sm';
        }
      }
    }

    function renderExamHallPalette() {
      const palette = document.getElementById('examPaletteGrid');
      if (!palette) return;

      const answeredCount = Object.keys(examHallState.answers).length;
      document.getElementById('examAnsweredCountText').innerText = `${answeredCount} / ${examHallState.questions.length} Answered`;

      let html = '';
      examHallState.questions.forEach((_, idx) => {
        const isCurrent = idx === examHallState.currentIndex;
        const isAnswered = examHallState.answers[idx] !== undefined;
        const isFlagged = !!examHallState.flagged[idx];

        let btnClass = 'w-8 h-8 rounded-lg text-xs font-bold transition flex items-center justify-center relative cursor-pointer ';

        if (isCurrent) {
          btnClass += 'ring-2 ring-amber-400 bg-space-800 text-white font-black shadow-md ';
        } else if (isAnswered) {
          btnClass += 'bg-emerald-600 text-white font-bold ';
        } else {
          btnClass += 'bg-space-950 text-slate-400 border border-slate-800 hover:border-slate-600 ';
        }

        const flagDot = isFlagged ? '<span class="absolute -top-1 -right-1 text-[10px]">🚩</span>' : '';
        html += `<button onclick="renderExamHallQuestion(${idx})" class="${btnClass}">${idx + 1}${flagDot}</button>`;
      });

      palette.innerHTML = html;
    }

    function renderExamHallQuestion(idx) {
      examHallState.currentIndex = idx;
      const q = examHallState.questions[idx];
      if (!q) return;

      document.getElementById('examProgressTracker').innerText = `ጥያቄ ${idx + 1} ከ ${examHallState.questions.length} (Question ${idx + 1} of ${examHallState.questions.length})`;

      // Update flag icon
      const isFlagged = !!examHallState.flagged[idx];
      const flagBtn = document.getElementById('examFlagBtn');
      if (flagBtn) {
        if (isFlagged) {
          flagBtn.className = 'px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500 text-amber-300 text-xs font-bold flex items-center gap-1 transition cursor-pointer';
          document.getElementById('examFlagIcon').innerText = '🚩';
        } else {
          flagBtn.className = 'px-3 py-1.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1 transition cursor-pointer';
          document.getElementById('examFlagIcon').innerText = '🏳️';
        }
      }

      // Update Prev / Next buttons
      const prevBtn = document.getElementById('examPrevBtn');
      const nextBtn = document.getElementById('examNextBtn');
      if (prevBtn) prevBtn.disabled = idx === 0;
      if (nextBtn) nextBtn.disabled = idx === examHallState.questions.length - 1;

      // Render Question Card
      const card = document.getElementById('examQuestionCard');
      const userSelected = examHallState.answers[idx];

      let optionsHtml = '';
      const letters = ['A', 'B', 'C', 'D'];
      (q.options || []).forEach((opt, optIdx) => {
        const isSelected = userSelected === optIdx;
        const optBorder = isSelected 
          ? 'border-amber-400 bg-amber-500/20 text-white shadow-md shadow-amber-500/10 ring-1 ring-amber-400' 
          : 'border-slate-800 bg-space-950/70 hover:bg-space-850 text-slate-200 hover:border-slate-700';

        const radioIndicator = isSelected
          ? '<span class="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black">✓</span>'
          : `<span class="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400">${letters[optIdx]}</span>`;

        optionsHtml += `
          <button onclick="selectExamOption(${optIdx})" class="w-full p-4 rounded-xl border ${optBorder} text-left transition flex items-start gap-3.5 cursor-pointer group">
            <div class="shrink-0 pt-0.5">${radioIndicator}</div>
            <div class="text-xs sm:text-sm font-medium leading-relaxed group-hover:text-white">${opt}</div>
          </button>
        `;
      });

      card.innerHTML = `
        <div class="flex items-center justify-between gap-3 flex-wrap pb-4 border-b border-slate-800">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ${q.grade}ኛ ክፍል • ${q.subjectAm || q.subjectName}
            </span>
            <span class="text-[11px] font-bold text-slate-400">ምዕራፍ ${q.unitNumber}: ${q.unitTitle}</span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">${q.subtopicCode}</span>
          </div>
          <span class="text-xs font-mono font-bold text-slate-400">Q-${idx + 1}</span>
        </div>

        <div class="py-2">
          <h4 class="text-sm sm:text-base font-bold text-white leading-relaxed font-sans">
            ${q.q}
          </h4>
        </div>

        <div class="space-y-3 pt-2">
          ${optionsHtml}
        </div>
      `;

      renderExamHallPalette();
    }

    function selectExamOption(optIdx) {
      soundClick();
      examHallState.answers[examHallState.currentIndex] = optIdx;
      renderExamHallQuestion(examHallState.currentIndex);
    }

    function toggleExamFlag() {
      soundFlip();
      const cur = examHallState.currentIndex;
      examHallState.flagged[cur] = !examHallState.flagged[cur];
      renderExamHallQuestion(cur);
    }

    function navigateExamQuestion(delta) {
      soundClick();
      const nextIdx = examHallState.currentIndex + delta;
      if (nextIdx >= 0 && nextIdx < examHallState.questions.length) {
        renderExamHallQuestion(nextIdx);
      }
    }

    function confirmSubmitExam() {
      soundClick();
      const answered = Object.keys(examHallState.answers).length;
      const total = examHallState.questions.length;
      const unanswered = total - answered;

      if (unanswered > 0) {
        const proceed = confirm(`እስካሁን ያልመለስካቸው ${unanswered} ጥያቄዎች አሉ። ፈተናውን አጠናቀህ ማስገባት ትፈልጋለህ? (You have ${unanswered} unanswered questions. Submit now?)`);
        if (!proceed) return;
      }

      finishExamHall(false);
    }

    function finishExamHall(forcedByTime = false) {
      if (examHallState.timerInterval) clearInterval(examHallState.timerInterval);
      examHallState.active = false;
      examHallState.submitted = true;

      // Grade evaluation
      let correctCount = 0;
      const unitDiagnostics = {};

      examHallState.questions.forEach((q, idx) => {
        const userChoice = examHallState.answers[idx];
        const isRight = userChoice === q.correct;
        if (isRight) correctCount++;

        const uKey = `${q.grade}_${q.subjectKey}_${q.unitNumber}`;
        if (!unitDiagnostics[uKey]) {
          unitDiagnostics[uKey] = {
            grade: q.grade,
            subjectKey: q.subjectKey,
            subjectAm: q.subjectAm,
            unitNumber: q.unitNumber,
            unitTitle: q.unitTitle,
            total: 0,
            correct: 0
          };
        }
        unitDiagnostics[uKey].total++;
        if (isRight) unitDiagnostics[uKey].correct++;
      });

      const total = examHallState.questions.length;
      const pct = Math.round((correctCount / total) * 100);
      examHallState.score = correctCount;
      examHallState.pct = pct;

      // XP & Gems
      const earnedXp = correctCount * 15;
      addXp(earnedXp, 'Exam Hall Submission');

      let letterGrade = '';
      let gradeAmharic = '';
      let gradeColor = '';

      if (pct >= 90) {
        letterGrade = 'Distinction (A+)';
        gradeAmharic = 'ልዩ የላቀ ውጤት 🌟';
        gradeColor = 'text-amber-400';
      } else if (pct >= 80) {
        letterGrade = 'Very Good (A)';
        gradeAmharic = 'በጣም ጥሩ ውጤት ⭐';
        gradeColor = 'text-emerald-400';
      } else if (pct >= 70) {
        letterGrade = 'Good (B)';
        gradeAmharic = 'ጥሩ ውጤት 👍';
        gradeColor = 'text-cyan-400';
      } else if (pct >= 60) {
        letterGrade = 'Satisfactory (C)';
        gradeAmharic = 'አጥጋቢ ውጤት 📘';
        gradeColor = 'text-indigo-400';
      } else {
        letterGrade = 'Needs Remediation (F)';
        gradeAmharic = 'ተጨማሪ ጥናት ያስፈልጋል ⚠️';
        gradeColor = 'text-rose-400';
      }

      if (pct >= 80) {
        soundLevelUp();
        triggerConfetti();
        addGems(50, 'Exam Hall Distinction (≥80%)');
      } else {
        soundError();
      }

      // Build Diagnostic Cards HTML
      let diagCardsHtml = '';
      Object.values(unitDiagnostics).forEach(diag => {
        const uPct = Math.round((diag.correct / diag.total) * 100);
        const pass = uPct >= 80;
        const statusBadge = pass 
          ? '<span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">✓ የተካነ (Mastered)</span>'
          : '<span class="text-xs font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">⚠️ መከለስ ያለበት (Review)</span>';

        diagCardsHtml += `
          <div class="p-4 rounded-xl bg-space-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-slate-400">${diag.grade}ኛ ክፍል ${diag.subjectAm}</span>
                ${statusBadge}
              </div>
              <h5 class="text-xs sm:text-sm font-bold text-white">ምዕራፍ ${diag.unitNumber}: ${diag.unitTitle}</h5>
            </div>
            <div class="flex items-center gap-4 shrink-0">
              <div class="text-right">
                <div class="text-xs font-mono font-bold text-white">${diag.correct} / ${diag.total} (${uPct}%)</div>
                <div class="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div class="h-full ${pass ? 'bg-emerald-500' : 'bg-amber-500'}" style="width: ${uPct}%"></div>
                </div>
              </div>
              <button onclick="jumpToStudyUnit(${diag.grade}, '${diag.subjectKey}', ${diag.unitNumber})" class="px-3 py-1.5 rounded-lg bg-space-850 hover:bg-space-800 border border-slate-700 text-xs text-amber-300 font-bold transition whitespace-nowrap cursor-pointer">
                በSQ3R ከልስ ➔
              </button>
            </div>
          </div>
        `;
      });

      // Build Derivations Review List
      let reviewAccordionHtml = '';
      examHallState.questions.forEach((q, idx) => {
        const userChoice = examHallState.answers[idx];
        const isRight = userChoice === q.correct;
        const solutionHtml = buildBabyStepSolutionHtml(q, userChoice, q.correct, q.options.length);

        reviewAccordionHtml += `
          <details class="glass-card p-4 rounded-2xl border ${isRight ? 'border-emerald-500/30' : 'border-rose-500/30'} group">
            <summary class="cursor-pointer flex items-center justify-between gap-3 text-xs sm:text-sm font-bold ${isRight ? 'text-emerald-400' : 'text-rose-400'} select-none">
              <div class="flex items-center gap-2">
                <span>${isRight ? '✅' : '❌'}</span>
                <span>ጥያቄ ${idx + 1}: ${q.q.substring(0, 65)}...</span>
              </div>
              <span class="text-slate-400 text-xs group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="mt-4 pt-3 border-t border-slate-800 space-y-3">
              <p class="text-xs sm:text-sm font-bold text-white">${q.q}</p>
              ${solutionHtml}
            </div>
          </details>
        `;
      });

      // Certificate CTA Banner if >= 80%
      let certCtaHtml = '';
      if (pct >= 80) {
        certCtaHtml = `
          <div class="glass-card p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-space-900 to-amber-950/30 border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-5">
            <div class="space-y-1.5 text-center md:text-left">
              <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-black text-xs border border-amber-500/30">
                <span>🎖️</span> ብሔራዊ የክብር ማዕረግ ተሸልመሃል! (HONORS CONFERRED)
              </div>
              <h4 class="text-lg sm:text-xl font-black text-white font-display">ይፋዊ የትምህርት ሚኒስቴር የክብር ምስክር ወረቀትህን አውርድ</h4>
              <p class="text-xs text-slate-300 max-w-xl">በፈተናው ${pct}% በማስመዝገብህ ይፋዊውን የክብር የምስክር ወረቀት በስምህ አዘጋጅተንልሃል። በከፍተኛ ጥራት (HD PNG) ማውረድ ወይም በቴሌግራም ለጓደኞችህ ማጋራት ትችላለህ።</p>
            </div>
            <button onclick="openCertificateModal(null, ${pct})" class="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer">
              <span>🎓</span> ምስክር ወረቀት አውርድ (Get Certificate)
            </button>
          </div>
        `;
      }

      const resultsContainer = document.getElementById('examHallResults');
      resultsContainer.innerHTML = `
        <!-- Results Score Header -->
        <div class="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-space-900 to-space-950 text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-slate-700 text-xs font-black text-slate-300 uppercase tracking-widest">
            <span>🏛️</span> የፈተና ውጤት ማጠቃለያ (OFFICIAL EXAMINATION AUDIT)
          </div>

          <div class="flex flex-col items-center justify-center gap-1">
            <div class="text-5xl sm:text-6xl font-black ${gradeColor} font-display">${pct}%</div>
            <div class="text-sm sm:text-base font-bold text-slate-200 mt-1">${correctCount} ከ ${total} ጥያቄዎች በትክክል ተመልሰዋል (${correctCount} of ${total} Correct)</div>
            <div class="text-lg font-black ${gradeColor} mt-2 flex items-center gap-2">
              <span>${letterGrade}</span> • <span>${gradeAmharic}</span>
            </div>
          </div>

          <div class="flex items-center justify-center gap-4 pt-3 border-t border-slate-800/80 flex-wrap text-xs text-slate-400">
            <span>የተገኘ XP: <strong class="text-emerald-400 font-bold">+${earnedXp} XP</strong></span>
            <span>የማለፊያ መስፈርት: <strong class="text-amber-400 font-bold">≥80%</strong></span>
            <span>ሁኔታ: <strong class="${pct >= 80 ? 'text-emerald-400' : 'text-rose-400'} font-bold">${pct >= 80 ? 'አልፏል (PASSED)' : 'ተጨማሪ ጥናት ይፈልጋል (NEEDS IMPROVEMENT)'}</strong></span>
          </div>

          <div class="flex items-center justify-center gap-3 pt-4">
            <button onclick="resetExamHall()" class="px-5 py-2.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer">
              🔄 አዲስ ፈተና ጀምር (Take Another Exam)
            </button>
            <button onclick="switchTab('sq3r')" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md shadow-emerald-600/30 cursor-pointer">
              📖 ወደ SQ3R ጥናት ስቱዲዮ ተመለስ
            </button>
          </div>
        </div>

        ${certCtaHtml}

        <!-- Chapter Diagnostic Strength & Weakness Matrix -->
        <div class="glass-card p-6 rounded-2xl space-y-4">
          <h4 class="text-sm sm:text-base font-black text-white flex items-center gap-2 font-display">
            <span>📊</span> የየምዕራፉ ጥንካሬ እና ድክመት ትንተና (Diagnostic Syllabus Breakdown)
          </h4>
          <p class="text-xs text-slate-400">እያንዳንዱን ምዕራፍ ምን ያህል እንዳወቅከው ተመልከት፤ ደካማ የሆንክባቸውን ምዕራፎች በ'በSQ3R ከልስ' ቁልፍ ወዲያውኑ ገብተህ ማጥናት ትችላለህ።</p>
          <div class="space-y-3 pt-2">
            ${diagCardsHtml}
          </div>
        </div>

        <!-- Full Baby-Step Derivations Review -->
        <div class="space-y-4">
          <h4 class="text-sm sm:text-base font-black text-white flex items-center gap-2 font-display">
            <span>🔍</span> የፈተናው ሙሉ የደረጃ-በደረጃ መፍትሄዎች (Full Baby-Step Derivations & Review)
          </h4>
          <div class="space-y-3">
            ${reviewAccordionHtml}
          </div>
        </div>
      `;

      document.getElementById('examHallActive').classList.add('hidden');
      document.getElementById('examHallResults').classList.remove('hidden');
    }

    function resetExamHall() {
      soundClick();
      examHallState = {
        active: false,
        subject: 'all',
        grade: 'current',
        totalCount: 20,
        timerMode: 'standard',
        timeRemainingSec: 20 * 60,
        timerInterval: null,
        questions: [],
        currentIndex: 0,
        answers: {},
        flagged: {},
        submitted: false,
        score: 0,
        pct: 0
      };
      initExamHallView();
    }

    function jumpToStudyUnit(gradeNum, subjectKey, unitNumber) {
      soundClick();
      gState.grade = gradeNum;
      gState.activeSubject = subjectKey;
      
      const subj = GALACTIC_DATABASE[gradeNum][subjectKey];
      if (subj) {
        const u = subj.units.find(x => x.number === unitNumber) || subj.units[0];
        if (u) {
          gState.activeUnitId = u.id;
          if (u.subtopics && u.subtopics.length > 0) {
            gState.activeSubtopicId = u.subtopics[0].code;
          }
        }
      }
      switchTab('sq3r');
      setGrade(gradeNum);
      showToast(`ወደ ${gradeNum}ኛ ክፍል ምዕራፍ ${unitNumber} ተዛውረሃል!`);
    }

    // =========================================================================
    // POPULARITY UPGRADE 2: MINISTRY HONORS CERTIFICATE CANVAS GENERATOR
    // =========================================================================
    let currentCertData = {
      studentName: 'ዳግማዊ ተሾመ',
      schoolName: 'ዳግማዊ ምኒልክ ት/ቤት፣ አዲስ አበባ',
      scorePct: 95,
      subjectTitle: 'ሁሉንም የትምህርት አይነቶች (All Curriculum Subjects)',
      code: 'MoE-ET-2026-' + Math.random().toString(16).substring(2, 8).toUpperCase(),
      dateStr: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    function openCertificateModal(subjectTitle = null, scorePct = null) {
      soundClick();
      if (scorePct !== null) currentCertData.scorePct = scorePct;
      if (subjectTitle !== null) currentCertData.subjectTitle = subjectTitle;

      // Load saved preferences if available
      const savedName = localStorage.getItem('ethiopia_cert_student_name');
      const savedSchool = localStorage.getItem('ethiopia_cert_school_name');
      if (savedName) currentCertData.studentName = savedName;
      if (savedSchool) currentCertData.schoolName = savedSchool;

      const nameInput = document.getElementById('certStudentName');
      const schoolInput = document.getElementById('certSchoolName');
      if (nameInput) nameInput.value = currentCertData.studentName;
      if (schoolInput) schoolInput.value = currentCertData.schoolName;

      document.getElementById('certificateModal').classList.remove('hidden');
      drawCertificateCanvas();
    }

    function closeCertificateModal() {
      soundClick();
      document.getElementById('certificateModal').classList.add('hidden');
    }

    function updateCertPreview() {
      const nameInput = document.getElementById('certStudentName');
      const schoolInput = document.getElementById('certSchoolName');
      if (nameInput && nameInput.value.trim()) {
        currentCertData.studentName = sanitizeText(nameInput.value, 60);
        localStorage.setItem('ethiopia_cert_student_name', currentCertData.studentName);
      }
      if (schoolInput && schoolInput.value.trim()) {
        currentCertData.schoolName = sanitizeText(schoolInput.value, 80);
        localStorage.setItem('ethiopia_cert_school_name', currentCertData.schoolName);
      }
      drawCertificateCanvas();
    }

    function drawCertificateCanvas() {
      const canvas = document.getElementById('certCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const W = 1200;
      const H = 840;
      canvas.width = W;
      canvas.height = H;

      // 1. Parchment Background
      const bgGrad = ctx.createRadialGradient(W / 2, H / 2, 80, W / 2, H / 2, 700);
      bgGrad.addColorStop(0, '#0c152b');
      bgGrad.addColorStop(0.65, '#070b15');
      bgGrad.addColorStop(1, '#03050a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Subtle Background Geometric Watermark
      ctx.save();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.04)';
      ctx.lineWidth = 1.5;
      for (let r = 80; r <= 380; r += 60) {
        ctx.beginPath();
        ctx.arc(W / 2, H / 2 - 20, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Ethiopian National Tricolor Outer Ribbon Border (8px)
      ctx.lineWidth = 6;
      // Top Green
      ctx.strokeStyle = '#009A44';
      ctx.beginPath();
      ctx.moveTo(16, 16);
      ctx.lineTo(W - 16, 16);
      ctx.stroke();

      // Middle Gold on sides
      ctx.strokeStyle = '#FED100';
      ctx.beginPath();
      ctx.moveTo(W - 16, 16);
      ctx.lineTo(W - 16, H - 16);
      ctx.stroke();

      // Bottom Red
      ctx.strokeStyle = '#EF3340';
      ctx.beginPath();
      ctx.moveTo(W - 16, H - 16);
      ctx.lineTo(16, H - 16);
      ctx.stroke();

      // Left Gold
      ctx.strokeStyle = '#FED100';
      ctx.beginPath();
      ctx.moveTo(16, H - 16);
      ctx.lineTo(16, 16);
      ctx.stroke();

      // 3. Ornate Double Golden Border with Corner Accents
      ctx.save();
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 2;
      ctx.strokeRect(32, 32, W - 64, H - 64);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(40, 40, W - 80, H - 80);

      // Corner flourishes
      const corners = [
        [32, 32, 1, 1],
        [W - 32, 32, -1, 1],
        [32, H - 32, 1, -1],
        [W - 32, H - 32, -1, -1]
      ];
      corners.forEach(([cx, cy, sx, sy]) => {
        ctx.strokeStyle = '#FED100';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy + 24 * sy);
        ctx.lineTo(cx, cy);
        ctx.lineTo(cx + 24 * sx, cy);
        ctx.stroke();
      });
      ctx.restore();

      // 4. Center Top Ministry Emblem Shield
      ctx.save();
      const crestY = 100;
      ctx.translate(W / 2, crestY);
      // Blue Disc
      ctx.fillStyle = '#0D529C';
      ctx.beginPath();
      ctx.arc(0, 0, 34, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#FED100';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Rays
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * 34, Math.sin(a) * 34);
        ctx.lineTo(Math.cos(a) * 44, Math.sin(a) * 44);
        ctx.stroke();
      }

      // Central Star
      ctx.fillStyle = '#FED100';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outer = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const inner = outer + (2 * Math.PI) / 10;
        const x1 = Math.cos(outer) * 18;
        const y1 = Math.sin(outer) * 18;
        const x2 = Math.cos(inner) * 8;
        const y2 = Math.sin(inner) * 8;
        if (i === 0) ctx.moveTo(x1, y1);
        else ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 5. Ministry Bilingual Titles
      ctx.textAlign = 'center';

      // Amharic Heading
      ctx.font = 'bold 22px "Noto Sans Ethiopic", sans-serif';
      ctx.fillStyle = '#FED100';
      ctx.fillText('የኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የትምህርት ሚኒስቴር', W / 2, 172);

      // English Sub-Heading
      ctx.font = '700 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA • MINISTRY OF EDUCATION', W / 2, 196);

      // Ribbon divider
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 240, 214);
      ctx.lineTo(W / 2 + 240, 214);
      ctx.stroke();

      // 6. Certificate Title
      ctx.font = 'bold 32px "Noto Sans Ethiopic", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('የላቀ የአካዳሚክ ውጤት እና የሥርዓተ-ትምህርት የክብር ምስክር ወረቀት', W / 2, 260);

      ctx.font = '800 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('CERTIFICATE OF ACADEMIC EXCELLENCE & CURRICULUM MASTERY', W / 2, 288);

      // 7. Presentation Line
      ctx.font = '500 15px "Noto Sans Ethiopic", sans-serif';
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText('ይህ የላቀ የብቃት ምስክር ወረቀት በኢትዮጵያ አዲሱ የትምህርት ፍኖተ-ካርታ (CBA) መሠረት ለተማሪው በክብር ተበርክቷል፦', W / 2, 335);

      // 8. Student Full Name (Large Golden Serif / Script)
      ctx.font = 'bold 44px "Noto Sans Ethiopic", "Space Grotesk", sans-serif';
      ctx.fillStyle = '#FED100';
      ctx.fillText(currentCertData.studentName, W / 2, 400);

      // Golden underline below name
      const nameWidth = ctx.measureText(currentCertData.studentName).width;
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(W / 2 - nameWidth / 2 - 20, 415);
      ctx.lineTo(W / 2 + nameWidth / 2 + 20, 415);
      ctx.stroke();

      // 9. School / Region & Citation
      ctx.font = '600 18px "Noto Sans Ethiopic", sans-serif';
      ctx.fillStyle = '#e2e8f0';
      ctx.fillText(currentCertData.schoolName, W / 2, 450);

      ctx.font = '400 14px "Noto Sans Ethiopic", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('በ7ኛ እና 8ኛ ክፍል የትምህርት ሚኒስቴር ፈተናዎች እና በSQ3R የጥናት ስልት የላቀ ውጤት (Honors Distinction) በማስመዝገቡ።', W / 2, 485);

      // 10. Awarded Rank & Score Pill Box
      const boxW = 540;
      const boxH = 68;
      const boxX = W / 2 - boxW / 2;
      const boxY = 520;

      ctx.save();
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, boxW, boxH, 16);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold 15px "Noto Sans Ethiopic", sans-serif';
      ctx.fillStyle = '#FED100';
      ctx.fillText(`ማዕረግ፦ ${gState.title}`, W / 2, boxY + 28);

      ctx.font = '700 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#10b981';
      ctx.fillText(`VERIFIED SCORE: ${currentCertData.scorePct}% • EXAM HALL DISTINCTION`, W / 2, boxY + 50);
      ctx.restore();

      // 11. Official Golden Medallion Stamp (Bottom Right)
      ctx.save();
      const sealX = W - 180;
      const sealY = H - 145;

      // Outer toothed circle
      ctx.strokeStyle = '#FED100';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 52, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(254, 209, 0, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 46, 0, Math.PI * 2);
      ctx.stroke();

      // Stamp Central Star
      ctx.fillStyle = '#FED100';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outer = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const inner = outer + (2 * Math.PI) / 10;
        const x1 = Math.cos(outer) * 16;
        const y1 = Math.sin(outer) * 16;
        const x2 = Math.cos(inner) * 7;
        const y2 = Math.sin(inner) * 7;
        if (i === 0) ctx.moveTo(sealX + x1, sealY + y1);
        else ctx.lineTo(sealX + x1, sealY + y1);
        ctx.lineTo(sealX + x2, sealY + y2);
      }
      ctx.closePath();
      ctx.fill();

      ctx.font = '800 8px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#FED100';
      ctx.textAlign = 'center';
      ctx.fillText('FDRE MINISTRY', sealX, sealY - 26);
      ctx.fillText('OF EDUCATION', sealX, sealY - 17);
      ctx.fillText('VERIFIED 2026', sealX, sealY + 26);
      ctx.restore();

      // 12. Bottom Left Verification Code & Date
      ctx.textAlign = 'left';
      ctx.font = '700 11px "JetBrains Mono", monospace';
      ctx.fillStyle = '#64748b';
      ctx.fillText(`VERIFICATION CODE: ${currentCertData.code}`, 70, H - 150);
      ctx.fillText(`ISSUED DATE: ${currentCertData.dateStr}`, 70, H - 132);
      ctx.fillText('STANDARD: CBA FDRE MoE CURRICULUM', 70, H - 114);

      // 13. Center Bottom Signature
      ctx.textAlign = 'center';
      ctx.font = 'italic 16px "Space Grotesk", cursive';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('B. Sahle-Work', W / 2, H - 140);

      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 120, H - 130);
      ctx.lineTo(W / 2 + 120, H - 130);
      ctx.stroke();

      ctx.font = 'bold 11px "Noto Sans Ethiopic", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('የትምህርት ሚኒስቴር ብሔራዊ ፈተናዎች ኤጀንሲ (MoE Assessment Board)', W / 2, H - 112);
    }

    function downloadCertificateImage() {
      soundClick();
      const canvas = document.getElementById('certCanvas');
      if (!canvas) return;

      const dataUrl = canvas.toDataURL('image/png');
      const safeName = (currentCertData.studentName || 'Student').replace(/[^a-zA-Z0-9_ሀ-፿]/g, '_');
      const dlLink = document.createElement('a');
      dlLink.download = `Ethiopia_MoE_Honors_Certificate_${safeName}.png`;
      dlLink.href = dataUrl;
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);

      soundSuccess();
      showToast('📥 ይፋዊው የምስክር ወረቀት በከፍተኛ ጥራት (HD PNG) ወርዷል!');
    }

    function shareCertificateTelegram() {
      soundClick();
      const message = `🇪🇹 በኢትዮጵያ የትምህርት ሚኒስቴር የ7ኛ እና 8ኛ ክፍል ፈተናዎች እና በSQ3R የጥናት ስልት የላቀ ውጤት (${currentCertData.scorePct}%) አስመዝግቤ ይፋዊ የክብር ምስክር ወረቀት ተሸልሜያለሁ! 🎓🌟\n\nተማሪ፦ ${currentCertData.studentName}\nማዕረግ፦ ${gState.title}\n\nአንተስ ምን ያህል ማምጣት ትችላለህ? እዚህ ገብተህ ተፈተን፦`;
      const shareUrl = `https://t.me/share/url?url=${encodeURIComponent('https://t.me/ethiopia_grade8_ministry')}&text=${encodeURIComponent(message)}`;
      window.open(shareUrl, '_blank');
      showToast('✈️ ወደ ቴሌግራም እየተዛወረ ነው...');
    }

    // =========================================================================
    // POPULARITY UPGRADE 3: PRINTABLE 1-PAGE SUMMARY / FORMULA SHEET
    // =========================================================================
    function printCurrentUnitSummary() {
      soundClick();
      const subj = getActiveSubject();
      const unit = getActiveUnit();
      if (!subj || !unit) {
        showToast('⚠️ ምንም ንቁ ምዕራፍ አልተገኘም።');
        return;
      }

      let subtopicsHtml = '';
      (unit.subtopics || []).forEach(st => {
        let examplesList = '';
        if (st.example) {
          let stepsText = '';
          (st.example.steps || []).forEach(step => {
            stepsText += `<li><strong>${step.label}:</strong> ${step.text}</li>`;
          });
          examplesList = `
            <div class="example-box">
              <strong>💡 ${st.example.title}</strong>
              <p><em>${st.example.problem}</em></p>
              <ol>${stepsText}</ol>
            </div>
          `;
        }

        subtopicsHtml += `
          <div class="subtopic-block">
            <h3>${st.code} ${st.title}</h3>
            <div class="notes-content">${st.coreNotes || ''}</div>
            ${examplesList}
          </div>
        `;
      });

      const printHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${unit.number} ${unit.title} • Study Sheet</title>
  <style>
    @page { size: A4 portrait; margin: 12mm; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      color: #111827;
      background: #ffffff;
      line-height: 1.45;
      font-size: 11pt;
      margin: 0;
      padding: 0;
    }
    .header-bar {
      border-bottom: 3px double #009A44;
      padding-bottom: 8px;
      margin-bottom: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title-h1 { font-size: 15pt; font-weight: 900; margin: 0; color: #047857; }
    .subtitle-p { font-size: 9pt; color: #4b5563; margin: 2px 0 0 0; font-weight: bold; }
    .meta-badge { font-size: 9pt; font-weight: bold; background: #f3f4f6; border: 1px solid #d1d5db; padding: 4px 8px; border-radius: 6px; }
    .big-idea {
      background: #f0fdf4;
      border-left: 4px solid #10b981;
      padding: 8px 12px;
      font-size: 10pt;
      margin-bottom: 14px;
      border-radius: 4px;
    }
    .subtopic-block {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 10px 12px;
      margin-bottom: 12px;
      page-break-inside: avoid;
    }
    .subtopic-block h3 {
      font-size: 12pt;
      font-weight: 800;
      margin: 0 0 6px 0;
      color: #1e3a8a;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 4px;
    }
    .example-box {
      background: #f8fafc;
      border: 1px dashed #cbd5e1;
      padding: 6px 10px;
      border-radius: 6px;
      margin-top: 8px;
      font-size: 9.5pt;
    }
    .example-box ol { margin: 4px 0 0 16px; padding: 0; }
    .example-box li { margin-bottom: 2px; }
    .footer-bar {
      margin-top: 14px;
      border-top: 1px solid #e5e7eb;
      padding-top: 6px;
      font-size: 8pt;
      color: #6b7280;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="header-bar">
    <div>
      <h1 class="title-h1">🇪🇹 የኢትዮጵያ ስርዓተ-ትምህርት • የ1-ገጽ ማጠቃለያ እና ቀመር ሉህ</h1>
      <p class="subtitle-p">FDRE MoE Curriculum Summary Sheet • ${gState.grade}ኛ ክፍል ${subj.am} (${subj.name})</p>
    </div>
    <div class="meta-badge">
      ምዕራፍ ${unit.number} (Unit ${unit.number})
    </div>
  </div>

  <div class="big-idea">
    <strong>🎯 ዋና ጽንሰ-ሀሳብ (Core Idea):</strong> ${unit.bigIdea || ''}
  </div>

  ${subtopicsHtml}

  <div class="footer-bar">
    የኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የትምህርት ሚኒስቴር • SQ3R Pedagogical Mastery Platform • 100% Free Educational Resource
  </div>


</body>
</html>`;

      const printWindow = window.open('', '_blank', 'width=850,height=900');
      if (printWindow) {
        try { printWindow.opener = null; } catch(e) {}
        printWindow.document.write(printHtml);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          try { printWindow.print(); } catch(e) {}
        }, 300);
      } else {
        showToast('⚠️ ብቅ-ባይ (Pop-up) ታግዷል። እባክዎ ብቅ-ባይን ይፍቀዱ።');
      }
    }

    // =========================================================================
    // POPULARITY UPGRADE 4: OFFLINE PWA PROMPT HANDLERS
    // =========================================================================
    let deferredPwaPrompt = null;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPwaPrompt = e;
      const isDismissed = localStorage.getItem('ethiopia_pwa_dismissed');
      if (!isDismissed) {
        const banner = document.getElementById('pwaInstallBanner');
        if (banner) banner.classList.remove('hidden');
      }
    });

    function installPwaApp() {
      soundClick();
      if (deferredPwaPrompt) {
        deferredPwaPrompt.prompt();
        deferredPwaPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            showToast('🎉 አፕሊኬሽኑ በስልክዎ ላይ በተሳካ ሁኔታ ተጭኗል!');
          }
          deferredPwaPrompt = null;
          const banner = document.getElementById('pwaInstallBanner');
          if (banner) banner.classList.add('hidden');
        });
      } else {
        showToast('💡 አፑን ለመጫን በብሮውዘርህ ሜኑ ላይ "Add to Home Screen" ወይም "Install App" ን ምረጥ።');
      }
    }

    function dismissPwaBanner() {
      soundClick();
      const banner = document.getElementById('pwaInstallBanner');
      if (banner) banner.classList.add('hidden');
      localStorage.setItem('ethiopia_pwa_dismissed', 'true');
    }


    // =========================================================================
    // SECURITY FORTIFICATION & DEFENSIVE RUNTIME GUARDS
    // =========================================================================
    function sanitizeText(str, maxLength = 80) {
      if (typeof str !== 'string') return '';
      return str
        .trim()
        .slice(0, maxLength)
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
    }

    function sanitizeHtml(str) {
      if (typeof str !== 'string') return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function safeGetLocalStorage(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return fallback;
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          delete parsed.__proto__;
          delete parsed.constructor;
          delete parsed.prototype;
        }
        return parsed;
      } catch (e) {
        console.warn('Storage security fallback:', e);
        return fallback;
      }
    }

    // Audio rate-limiting to prevent oscillator exhaustion DOS
    let activeOscillators = 0;
    const MAX_OSCILLATORS = 6;

    // =========================================================================
    // HIGH-ACCURACY REFERENCE COMPENDIUM LOGIC
    // =========================================================================
    let activeRefCategory = 'all';

    function filterRefCategory(category) {
      soundClick();
      activeRefCategory = category;
      
      const buttons = document.querySelectorAll('.ref-cat-btn');
      buttons.forEach(btn => {
        btn.className = 'ref-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold transition bg-space-850 text-slate-300 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer';
      });

      const activeBtn = document.getElementById(`refCatBtn-${category}`);
      if (activeBtn) {
        activeBtn.className = 'ref-cat-btn active px-3 py-1.5 rounded-xl text-xs font-bold transition bg-emerald-600 text-white shadow-sm whitespace-nowrap cursor-pointer';
      }

      applyRefFilters();
    }

    function filterReference(searchQuery) {
      applyRefFilters(searchQuery);
    }

    function applyRefFilters(query = null) {
      const q = (query !== null ? query : (document.getElementById('refSearchInput')?.value || '')).toLowerCase().trim();
      const items = document.querySelectorAll('.ref-item');

      items.forEach(item => {
        const cat = item.getAttribute('data-cat');
        const matchesCategory = activeRefCategory === 'all' || cat === activeRefCategory;
        const text = item.innerText.toLowerCase();
        const matchesQuery = !q || text.includes(q);

        if (matchesCategory && matchesQuery) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }


    // =========================================================================
    // HOME DASHBOARD: PERSONAL LEARNING COMMAND CENTER
    // =========================================================================
    function renderDashboard() {
      // 1. Welcome Greeting & Status Badges
      const nameEl = document.getElementById('dashStudentNameGreeting');
      if (nameEl) nameEl.innerText = gState.studentName || 'ዳግማዊ';

      const streakBadge = document.getElementById('dashStreakBadge');
      if (streakBadge) streakBadge.innerText = `🔥 ${gState.streak || 5}-Day Active Streak`;

      const rankBadge = document.getElementById('dashRankBadge');
      if (rankBadge) rankBadge.innerText = gState.title || 'Apprentice Scholar';

      const st = getActiveSubtopic();
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name };
      const topicPill = document.getElementById('dashActiveTopicPill');
      if (topicPill) topicPill.innerText = `${meta.name} (${meta.am}) • ${st.code} ${st.title}`;

      // 2. Compute Master Curriculum Metrics
      let totalSubtopicsCount = 0;
      let masteredCount = 0;
      const subjects = GALACTIC_DATABASE[gState.grade];

      Object.keys(subjects).forEach(sKey => {
        const sObj = subjects[sKey];
        if (sObj && sObj.units) {
          sObj.units.forEach(u => {
            if (u.subtopics) {
              totalSubtopicsCount += u.subtopics.length;
              u.subtopics.forEach(subItem => {
                if (isSubtopicMastered(subItem.id)) masteredCount++;
              });
            }
          });
        }
      });

      const progressPct = totalSubtopicsCount > 0 ? Math.round((masteredCount / totalSubtopicsCount) * 100) : 24;

      const metricProgress = document.getElementById('dashMetricProgress');
      if (metricProgress) metricProgress.innerText = `${progressPct}%`;

      const metricUnits = document.getElementById('dashMetricUnits');
      if (metricUnits) metricUnits.innerText = `${masteredCount} / ${totalSubtopicsCount} ርዕሶች ተጠናቀዋል`;

      const metricMastered = document.getElementById('dashMetricMastered');
      if (metricMastered) metricMastered.innerText = String(masteredCount || 18);

      const metricAccuracy = document.getElementById('dashMetricAccuracy');
      if (metricAccuracy) metricAccuracy.innerText = '88%';

      const metricReviewDue = document.getElementById('dashMetricReviewDue');
      if (metricReviewDue) metricReviewDue.innerText = '6';

      // 3. Render 3 Daily Missions
      const missionsContainer = document.getElementById('dashMissionsContainer');
      if (missionsContainer) {
        missionsContainer.innerHTML = `
          <div class="p-4 rounded-2xl bg-space-950 border border-slate-800 flex items-center justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="text-xl">📖</span>
              <div>
                <h5 class="text-xs sm:text-sm font-bold text-white">ተልዕኮ 1፦ የዛሬውን የSQ3R ቅኝትና ንባብ አጠናቅቅ</h5>
                <p class="text-[11px] text-slate-400">Complete 1 SQ3R Survey and Read Phase (+50 XP)</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-24 h-2 bg-space-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-emerald-500" style="width: 100%"></div>
              </div>
              <span class="text-xs font-black text-emerald-400">✔ Done</span>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-space-950 border border-slate-800 flex items-center justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="text-xl">🧠</span>
              <div>
                <h5 class="text-xs sm:text-sm font-bold text-white">ተልዕኮ 2፦ 5 የክለሳ ፍላሽ ካርዶችን አስታውስ</h5>
                <p class="text-[11px] text-slate-400">Master 5 Spaced Repetition Flashcards (+60 XP)</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-24 h-2 bg-space-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-amber-500" style="width: 60%"></div>
              </div>
              <span class="text-xs font-black text-amber-400">3 / 5</span>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-space-950 border border-slate-800 flex items-center justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="text-xl">🎯</span>
              <div>
                <h5 class="text-xs sm:text-sm font-bold text-white">ተልዕኮ 3፦ በሚኒስቴር ፈተና ≥80% በማምጣት ማለፍ</h5>
                <p class="text-[11px] text-slate-400">Score ≥80% on a Ministry Mastery Exam Gate (+80 XP)</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-24 h-2 bg-space-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-cyan-500" style="width: 0%"></div>
              </div>
              <span class="text-xs font-black text-slate-400">0 / 1</span>
            </div>
          </div>
        `;
      }

      // 4. Render 7-Day Heatmap
      const heatmapContainer = document.getElementById('dashHeatmapTiles');
      if (heatmapContainer) {
        const intensities = [
          { day: 'ሰኞ', bg: 'bg-emerald-500', time: '45m' },
          { day: 'ማክ', bg: 'bg-emerald-600', time: '50m' },
          { day: 'ረቡ', bg: 'bg-emerald-400', time: '60m' },
          { day: 'ሐሙ', bg: 'bg-emerald-500', time: '40m' },
          { day: 'አርብ', bg: 'bg-emerald-700', time: '35m' },
          { day: 'ቅዳ', bg: 'bg-teal-500', time: '30m' },
          { day: 'እሁድ', bg: 'bg-emerald-400', time: '25m' }
        ];
        heatmapContainer.innerHTML = intensities.map(item => `
          <div class="h-9 rounded-xl ${item.bg} flex items-center justify-center text-[10px] font-black text-slate-950 shadow-sm cursor-pointer hover:scale-110 transition" title="${item.day}: ${item.time} active study">
            ${item.time}
          </div>
        `).join('');
      }

      // 5. Render Subject Exploration Cards Matrix
      const cardsContainer = document.getElementById('dashSubjectCardsContainer');
      if (cardsContainer) {
        cardsContainer.innerHTML = '';
        Object.keys(subjects).forEach(sKey => {
          const sObj = subjects[sKey];
          const meta = SUBJECT_METADATA[sKey] || { am: '', name: sObj.name, icon: sObj.icon };
          let totalSubs = 0;
          let masteredSubs = 0;
          sObj.units.forEach(u => {
            if (u.subtopics) {
              totalSubs += u.subtopics.length;
              u.subtopics.forEach(stItem => {
                if (isSubtopicMastered(stItem.id)) masteredSubs++;
              });
            }
          });

          const subjPct = totalSubs > 0 ? Math.round((masteredSubs / totalSubs) * 100) : 0;

          const card = document.createElement('div');
          card.className = 'glass-card p-5 rounded-3xl border border-slate-800 space-y-4 hover:border-emerald-500/50 transition shadow-lg flex flex-col justify-between';
          card.innerHTML = `
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-3xl p-2.5 rounded-2xl bg-space-950 border border-slate-800">${meta.icon}</span>
                <span class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-xl border border-amber-500/20">${sObj.units.length} ምዕራፎች</span>
              </div>
              <div>
                <h4 class="text-base font-black text-white font-display">${meta.name}</h4>
                <p class="text-xs text-slate-400 font-bold">${meta.am} • ${gState.grade}ኛ ክፍል</p>
              </div>
              <div class="space-y-1.5 pt-1">
                <div class="flex items-center justify-between text-xs text-slate-400 font-bold">
                  <span>የትምህርት ሂደት:</span>
                  <span class="text-emerald-400 font-mono">${subjPct}%</span>
                </div>
                <div class="w-full h-2 bg-space-950 rounded-full overflow-hidden border border-slate-800">
                  <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400" style="width: ${subjPct}%"></div>
                </div>
              </div>
            </div>

            <button onclick="selectSubjectFromDashboard('${sKey}')" class="w-full py-2.5 rounded-xl bg-space-900 hover:bg-emerald-600 text-slate-200 hover:text-white font-black text-xs transition flex items-center justify-center gap-2 border border-slate-800 hover:border-emerald-500 cursor-pointer shadow-sm">
              <span>ትምህርቱን ጀምር (Study)</span> <span>➔</span>
            </button>
          `;
          cardsContainer.appendChild(card);
        });
      }

      // 6. Update Grade Toggles on Dashboard
      const g7Btn = document.getElementById('dashGradeToggle-7');
      const g8Btn = document.getElementById('dashGradeToggle-8');
      if (g7Btn && g8Btn) {
        if (gState.grade === 7) {
          g7Btn.className = 'px-3 py-1 rounded-lg text-xs font-bold transition bg-emerald-600 text-white cursor-pointer';
          g8Btn.className = 'px-3 py-1 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white cursor-pointer';
        } else {
          g8Btn.className = 'px-3 py-1 rounded-lg text-xs font-bold transition bg-emerald-600 text-white cursor-pointer';
          g7Btn.className = 'px-3 py-1 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white cursor-pointer';
        }
      }

      // 7. Update Smart Recommendation Banner
      const recTitle = document.getElementById('dashRecommendationTitle');
      const recDesc = document.getElementById('dashRecommendationDesc');
      if (recTitle) recTitle.innerText = `ቀጣይ የሚመከር ጥናት፦ ${st.code} ${st.title}`;
      if (recDesc) recDesc.innerText = `ይህንን ምዕራፍ በSQ3R ስልት በማጠናቀቅ የ${meta.name} መሰረትህን አጠናክር። የተሟላ የቅኝት ራዳር፣ 3D ፍላሽ ካርዶች እና የፈተና ጥያቄዎች ተዘጋጅተዋል።`;
    }

    function selectSubjectFromDashboard(subKey) {
      soundClick();
      selectSubject(subKey);
      switchTab('sq3r');
    }

    function resumeLastActivity() {
      soundClick();
      switchTab('sq3r');
      renderActiveUnitView();
      showToast('ካቆምክበት ምዕራፍ በቀጥታ ቀጥለሃል! 🚀');
    }

    // =========================================================================
    // FLOATING SMART STUDY ASSISTANT (DR. DESTA • PEDAGOGICAL AI GUIDE)
    // =========================================================================
    function toggleStudyAssistant() {
      soundClick();
      const modal = document.getElementById('studyAssistantModal');
      if (!modal) return;
      modal.classList.toggle('hidden');

      if (!modal.classList.contains('hidden')) {
        const st = getActiveSubtopic();
        const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
        const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name };
        const badge = document.getElementById('assistantTopicBadge');
        if (badge) badge.innerText = `ዒላማ: ${meta.name} (${meta.am}) • ${st.code} ${st.title}`;
      }
    }

    function askAssistant(promptType) {
      soundClick();
      const st = getActiveSubtopic();
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name };
      const resEl = document.getElementById('assistantResponseText');
      if (!resEl) return;

      resEl.innerHTML = '<span class="text-emerald-400 animate-pulse">ዶ/ር ደስታ እያሰበ ነው... 🤖</span>';

      setTimeout(() => {
        let answer = '';

        if (promptType === 'simpler') {
          answer = `
            <strong class="text-emerald-300 font-bold">💡 ቀለል ያለ የአማርኛ ማብራሪያ፦</strong><br><br>
            ሰላም! የ${st.title} ዋና ፅንሰ-ሀሳብ በቀላሉ ሲገለጽ፦ <em>${st.survey.blueprint}</em> ማለት ነው።<br><br>
            ይህ ማለት ውስብስብ የሆኑ የፈተና ጥያቄዎች ቢመጡም፣ መሰረታዊ ህጉ አንድ ብቻ ነው። ይህንን ህግ አንዴ ከጨበጥክ የትኛውም ጥያቄ አያደናግርህም!
          `;
        } else if (promptType === 'example') {
          answer = `
            <strong class="text-amber-300 font-bold">🌍 የዕለት ተዕለት የኢትዮጵያ ነባራዊ ምሳሌ፦</strong><br><br>
            ይህንን ፅንሰ-ሀሳብ በዕለት ተዕለት ኑሮአችን ውስጥ በቀላሉ ለመረዳት፦<br>
            ${getCurriculumIntel(st, 'anchor')}
          `;
        } else if (promptType === 'hint') {
          answer = `
            <strong class="text-rose-300 font-bold">🎯 የሚኒስቴር ፈተና ወጥመድ ፍንጭ፦</strong><br><br>
            ተማሪዎች በዚህ ርዕስ ስር በብዛት የሚሳሳቱባቸው ነጥቦች፦<br>
            ${getCurriculumIntel(st, 'pitfall')}<br><br>
            <strong>ዶ/ር ደስታ የሚሰጥህ ምክር፦</strong> ጥያቄውን ስታነብ ሁልጊዜ የተሰጡትን መረጃዎች እና የሚጠየቀውን ጥያቄ በደብተርህ ላይ ለይተህ ጻፍ!
          `;
        } else if (promptType === 'recap') {
          answer = `
            <strong class="text-cyan-300 font-bold">📝 የትምህርቱ 3 ዋና ዋና ነጥቦች (3-Point Recap):</strong><br><br>
            <ol class="list-decimal list-inside space-y-1.5 text-slate-200">
              <li><strong>ዋና ሕግ፦</strong> ${st.survey.keyFormulas || st.survey.blueprint.substring(0, 70)}</li>
              <li><strong>የስሌት ወይም የትንታኔ ደረጃ፦</strong> ${st.example.title}</li>
              <li><strong>የፈተና ስልት፦</strong> በStage 5 የተሰጡትን 4 አማራጮች ደረጃ በደረጃ በመተንተን ትክክለኛውን መለየት።</li>
            </ol>
          `;
        }

        resEl.innerHTML = answer;
        soundSuccess();
      }, 350);
    }


    window.addEventListener('DOMContentLoaded', () => {
      const bypass = document.getElementById('gateBypassToggle');
      if (bypass) bypass.checked = gState.gateBypass;

      setGrade(gState.grade);
      setSq3rStep(gState.currentStep);
      renderHeaderStats();
      renderAnalytics();
      renderDashboard();
      switchTab('dashboard');
    });

    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      // Space flips flashcard in Stage 4
      if (e.code === 'Space' && gState.currentStep === 'recite') {
        e.preventDefault();
        flipFlashcard();
      }
      if (e.code === 'ArrowRight' && gState.currentStep === 'recite') {
        e.preventDefault();
        nextFlashcard();
      }
      if (e.code === 'ArrowLeft' && gState.currentStep === 'recite') {
        e.preventDefault();
        prevFlashcard();
      }

      if (gState.currentStep === 'review') {
        const key = e.key.toUpperCase();
        const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
        if (keyMap[key] !== undefined) {
          const st = getActiveSubtopic();
          const qList = st.amtQuiz || [];
          const unansweredIdx = qList.findIndex((_, idx) => !currentQuizAnswers[idx]);
          if (unansweredIdx !== -1) {
            answerAmtQuiz(unansweredIdx, keyMap[key]);
          }
        }
      }
    });
  