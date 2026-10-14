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
      { id: 'av_scroll', type: 'avatar', item: '📜', name: 'Ge'ez Ancient Parchment', cost: 120, desc: 'Scholar of ancient manuscripts and history' },
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
      masteredSubtopics: {}
    };

    let gState = JSON.parse(localStorage.getItem('sq3r_ethiopia_cba_state')) || 
                 JSON.parse(localStorage.getItem('sq3r_galactic_state')) || 
                 DEFAULT_APP_STATE;
    if (!gState.masteredSubtopics) gState.masteredSubtopics = {};
    if (!gState.unlockedBadges) gState.unlockedBadges = ['adwa', 'lucy', 'gerd'];

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
    // RENDER CURRENT SQ3R STEP
    // =========================================================================
    function renderCurrentStep() {
      const container = document.getElementById('stepContentContainer') || document.getElementById('sq3rStageContainer');
      if (!container) return;
      const st = getActiveSubtopic();
      const s = gState.currentStep;

      // 1. SURVEY
      if (s === 'survey') {
        container.innerHTML = `
          <div class="space-y-6 animate-fadeIn">
            <div class="glass-crest p-6 rounded-2xl border border-emerald-500/40 relative overflow-hidden">
              <div class="flex items-center justify-between flex-wrap gap-4 relative z-10 border-b border-emerald-500/30 pb-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl text-emerald-300 font-black">
                    🔭
                  </div>
                  <div>
                    <span class="text-xs uppercase font-black text-amber-400 tracking-wider">ደረጃ 1 ከ 5 • የትምህርት ቅኝት (STAGE 1 OF 5: SURVEY)</span>
                    <h3 class="text-lg sm:text-xl font-black text-white">Syllabus Overview & Structural Blueprint</h3>
                  </div>
                </div>

                <!-- 2-Minute Countdown Timer -->
                <div class="flex items-center gap-2 bg-space-950 px-3.5 py-1.5 rounded-xl border border-emerald-500/30">
                  <span class="text-xs font-black text-slate-400">የቅኝት ሰዓት (TIMER):</span>
                  <span id="surveyTimerDisplay" class="font-mono text-xs font-bold text-amber-400">02:00</span>
                  <button onclick="toggleSurveyTimer()" id="surveyTimerBtn" class="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold hover:bg-emerald-500/30 transition">Start</button>
                  <button onclick="resetSurveyTimer()" class="text-xs px-1.5 py-0.5 rounded text-slate-400 hover:text-white transition">↺</button>
                </div>
              </div>

              <!-- Blueprint & Big Idea -->
              <div class="mt-5 space-y-4 relative z-10">
                <div class="p-4 rounded-xl bg-space-900/90 border border-slate-800 space-y-2">
                  <div class="text-[10px] uppercase font-black text-emerald-400 tracking-widest flex items-center gap-1.5">
                    <span>📡</span> <span>HIGH-LEVEL ARCHITECTURAL BLUEPRINT</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    ${st.survey.blueprint}
                  </p>
                </div>

                ${st.survey.keyFormulas ? `
                  <div class="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-3 flex-wrap">
                    <div class="flex items-center gap-2">
                      <span class="text-sm">⚡</span>
                      <span class="text-xs font-black text-emerald-300">CORE THEOREM / FORMULA / LAW:</span>
                    </div>
                    <code class="font-mono text-xs font-bold text-amber-300 bg-space-950 px-2.5 py-1 rounded-lg border border-slate-800">
                      ${st.survey.keyFormulas}
                    </code>
                  </div>
                ` : ''}
              </div>

              <!-- Skimmable Textbook Overview Notes -->
              <div class="mt-6 pt-5 border-t border-slate-800/80 relative z-10 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-base">📖</span>
                    <h4 class="text-xs font-black text-amber-400 uppercase tracking-wider">SKIMMABLE TEXTBOOK OVERVIEW & KEY CONCEPTS:</h4>
                  </div>
                  <span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active Skim Zone</span>
                </div>

                <div class="p-4 rounded-xl bg-space-950/80 border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  ${st.coreNotes}
                </div>

                <div class="pt-2 flex justify-between items-center flex-wrap gap-2 text-xs">
                  <span class="text-slate-400">Want the full working examples & proofs?</span>
                  <button onclick="setSq3rStep('read')" class="px-3.5 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 font-bold text-xs transition flex items-center gap-1.5">
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
                  <span id="checklistProgressBadge" class="text-xs font-mono text-amber-400 font-bold">0 / ${st.survey.objectives.length} Verified</span>
                </div>

                <div class="space-y-2">
                  ${st.survey.objectives.map((obj, i) => `
                    <label class="flex items-start gap-3 p-3 rounded-xl bg-space-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition">
                      <input type="checkbox" id="surveyCheck-${i}" onchange="checkSurveyCompletion()" class="mt-0.5 rounded text-emerald-500 focus:ring-0">
                      <span class="text-xs text-slate-300 font-medium">${obj}</span>
                    </label>
                  `).join('')}
                </div>
              </div>

              <div class="mt-6 flex justify-end relative z-10">
                <button onclick="finishSurveyStep()" id="finishSurveyBtn" class="px-6 py-3 rounded-xl bg-space-800 text-slate-500 font-black text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2">
                  <span>Verify Checklist to Unlock Questions</span> <span>🔒</span>
                </button>
              </div>
            </div>
          </div>
        `;
        initSurveyTimer();
        checkSurveyCompletion();
      }

      // 2. QUESTION
      else if (s === 'question') {
        container.innerHTML = `
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-xs uppercase font-black text-emerald-400 tracking-wider">ደረጃ 2 ከ 5 • የማስተዋል ጥያቄዎች (STAGE 2: QUESTION)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">Turn Topics into Focused Inquiry Questions</h3>
              <p class="text-xs sm:text-sm text-slate-400">Curiosity primes the brain to retain knowledge like a magnet. Formulate your hypotheses before reading.</p>
            </div>

            <div class="space-y-4">
              ${st.questions.map((qText, qIdx) => `
                <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-black text-emerald-400">
                    <span>❓</span> <span>KEY INQUIRY PROMPT ${qIdx+1}:</span>
                  </div>
                  <h4 class="text-xs sm:text-sm font-bold text-white leading-relaxed">${qText}</h4>
                  <textarea placeholder="Type your prediction or notes here before reading the solution below..." class="w-full bg-space-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none h-16 resize-none"></textarea>
                </div>
              `).join('')}
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
              <button onclick="setSq3rStep('survey')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Survey</button>
              <button onclick="finishQuestionStep()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Lock In Hypotheses & Deep Read (+35 XP)</span> <span>👉</span>
              </button>
            </div>
          </div>
        `;
      }

      // 3. READ
      else if (s === 'read') {
        container.innerHTML = `
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-xs uppercase font-black text-emerald-400 tracking-wider">ደረጃ 3 ከ 5 • ጥልቅ ንባብና ምሳሌዎች (STAGE 3: READ)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">Deep Reading & Verified Standard Examples</h3>
              <p class="text-xs sm:text-sm text-slate-400">Read with laser focus to verify your hypotheses. Study each step of the standard worked example.</p>
            </div>

            <!-- Core Textbook Notes -->
            <div class="space-y-4">
              <div class="text-xs uppercase font-black text-slate-400 tracking-wider flex items-center gap-2">
                <span>📖</span> <span>CURRICULUM EXPLANATION & DERIVATION</span>
              </div>
              ${st.coreNotes}
            </div>

            <!-- Detailed Working Example -->
            <div class="p-5 rounded-2xl bg-space-950 border border-emerald-500/30 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <span class="text-xs font-black text-emerald-400 flex items-center gap-2">
                  <span>💡</span> FULLY WORKED STEP-BY-STEP EXAMPLE
                </span>
                <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">Standard Method</span>
              </div>
              
              <h4 class="text-xs sm:text-sm font-black text-white">${st.example.title}</h4>
              <p class="text-xs text-slate-300 font-mono bg-space-900 p-3 rounded-xl border border-slate-800">${st.example.problem}</p>

              <div class="space-y-2.5 pt-1">
                ${st.example.steps.map(step => `
                  <div class="p-3 rounded-xl bg-space-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <span class="font-bold text-emerald-400">${step.label}:</span>
                    <p class="text-slate-300">${step.text}</p>
                  </div>
                `).join('')}
              </div>

              ${st.example.proTip ? `
                <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
                  <span class="text-sm">⚠️</span>
                  <span><strong>Pro-Tip:</strong> ${st.example.proTip}</span>
                </div>
              ` : ''}
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
              <button onclick="setSq3rStep('question')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Questions</button>
              <button onclick="finishReadStep()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Concepts Mastered! Proceed to Recite (+45 XP)</span> <span>👉</span>
              </button>
            </div>
          </div>
        `;
      }

      // 4. RECITE
      else if (s === 'recite') {
        currentCardIndex = 0;
        isCardFlipped = false;
        container.innerHTML = `
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-xs uppercase font-black text-purple-400 tracking-wider">ደረጃ 4 ከ 5 • ንቁ ማስታወስ (STAGE 4: RECITE)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">Active Recall Flashcard Arena</h3>
              <p class="text-xs sm:text-sm text-slate-400">Do not look at the answer! Say the derivation or formula out loud, then tap to verify.</p>
            </div>

            <!-- Interactive 3D Flip Flashcard -->
            <div class="max-w-xl mx-auto py-2">
              <div onclick="flipFlashcard()" id="activeFlashcard" class="glass-crest h-56 sm:h-64 rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-emerald-500/40 relative shadow-2xl transition hover:border-emerald-400">
                <span id="flashcardSideLabel" class="text-[10px] uppercase font-bold text-emerald-400 tracking-widest absolute top-4 left-4">QUESTION</span>
                <span class="text-xs text-slate-500 absolute top-4 right-4">Tap to flip ↺ (Spacebar)</span>

                <div class="my-auto text-center">
                  <h4 id="flashcardContent" class="text-base sm:text-lg font-black text-white leading-relaxed">
                    ${st.reciteFlashcards[0].q}
                  </h4>
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400">
                  <span id="flashcardCounter">Card 1 of ${st.reciteFlashcards.length}</span>
                  <span class="text-emerald-400 font-bold">Active Memory Verification</span>
                </div>
              </div>

              <!-- Flashcard Navigation Controls -->
              <div class="flex items-center justify-center gap-3 mt-5 flex-wrap">
                <button onclick="prevFlashcard()" class="px-4 py-2 rounded-xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white">← Previous</button>
                <button onclick="flipFlashcard()" class="px-4 py-2 rounded-xl bg-space-850 border border-emerald-500/30 text-xs font-bold text-emerald-300 hover:text-white">Flip Card ↺</button>
                <button onclick="markFlashcardMastered()" class="px-4 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300 hover:bg-emerald-600/30">Mastered ✔</button>
                <button onclick="nextFlashcard()" class="px-4 py-2 rounded-xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white">Next →</button>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
              <button onclick="setSq3rStep('read')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Read</button>
              <button onclick="finishReciteStep()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Enter AMT Mastery Exam Stage (+45 XP)</span> <span>👉</span>
              </button>
            </div>
          </div>
        `;
      }

      // 5. REVIEW / AMT EXAM (WITH STRICT 80% PASS GATE)
      else if (s === 'review') {
        if (currentQuizAnswersSubtopicId !== st.id) {
          currentQuizAnswers = {};
          currentQuizAnswersSubtopicId = st.id;
        }
        const qList = st.amtQuiz || [];
        const answeredCount = Object.keys(currentQuizAnswers).length;
        const correctCount = Object.values(currentQuizAnswers).filter(a => a.isCorrect).length;
        const scorePct = answeredCount > 0 ? Math.round((correctCount / qList.length) * 100) : 0;

        container.innerHTML = `
          <div class="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <!-- Header Banner -->
            <div class="border-b border-slate-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span class="text-xs uppercase font-black text-amber-400 tracking-wider">ደረጃ 5 ከ 5 • የብቃት ፈተና (STAGE 5: REVIEW & AMT MASTERY GATE)</span>
                <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">⭐ AMT Exam Engine • Hidden Step-by-Step Derivations</h3>
                <p class="text-xs sm:text-sm text-slate-400">Make your choice first! The official verdict, verified baby-step derivation, and option autopsy unlock after attempting. Score <strong>≥80%</strong> to conquer this level.</p>
              </div>
              <div class="shrink-0 flex items-center gap-2">
                <button onclick="retryAmtQuiz()" class="px-3.5 py-2 rounded-xl bg-space-850 hover:bg-space-800 text-xs font-bold text-slate-300 border border-slate-700 transition flex items-center gap-1.5" title="Reset all answers for a fresh attempt">
                  <span>🔄</span> Reset Test
                </button>
              </div>
            </div>

            <!-- Live Diagnostic & Question Progress Ticker -->
            <div class="p-4 rounded-xl bg-space-950 border border-slate-800 flex items-center justify-between flex-wrap gap-4" id="liveQuizTracker">
              <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-slate-400">ጥያቄዎች (Questions):</span>
                <div class="flex items-center gap-1.5 flex-wrap">
                  ${qList.map((_, i) => {
                    const ans = currentQuizAnswers[i];
                    let pillClass = 'w-6 h-6 rounded-md bg-space-900 text-slate-500 border border-slate-800 text-[10px] font-bold flex items-center justify-center';
                    let pillText = String(i + 1);
                    if (ans) {
                      if (ans.isCorrect) {
                        pillClass = 'w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black flex items-center justify-center';
                        pillText = '✔';
                      } else {
                        pillClass = 'w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 border border-rose-500/40 text-[10px] font-black flex items-center justify-center';
                        pillText = '✖';
                      }
                    }
                    return `<span id="trackerPill-${i}" class="${pillClass}">${pillText}</span>`;
                  }).join('')}
                </div>
              </div>
              <div class="flex items-center gap-4 text-xs font-bold">
                <span id="liveAttemptedCount" class="text-slate-300">${answeredCount} of ${qList.length} Answered</span>
                <span class="text-slate-700">|</span>
                <span id="liveScoreCount" class="${scorePct >= 80 ? 'text-emerald-400' : 'text-amber-400'} font-mono">${correctCount} Correct (${scorePct}%)</span>
                <span class="text-[10px] text-slate-500 font-normal hidden sm:inline">(Gate: ≥80%)</span>
              </div>
            </div>

            <!-- Question Cards -->
            <div class="space-y-6" id="quizContainer">
              ${qList.map((item, qIdx) => {
                const ans = currentQuizAnswers[qIdx];
                const isAnswered = !!ans;
                let statusBadge = '<span class="text-xs font-bold text-slate-500">Unanswered (Select an option below)</span>';
                if (isAnswered) {
                  statusBadge = ans.isCorrect
                    ? '<span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Mastered ✔</span>'
                    : '<span class="text-xs font-black text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">Needs Review ✖</span>';
                }

                return `
                  <div class="p-5 sm:p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-4" id="quizCard-${qIdx}">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">QUESTION ${qIdx+1} OF ${qList.length}</span>
                      <span id="quizStatus-${qIdx}">${statusBadge}</span>
                    </div>
                    <h4 class="text-sm sm:text-base font-bold text-white leading-relaxed">${item.q}</h4>
                    
                    <!-- Options Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      ${item.options.map((opt, optIdx) => {
                        let btnClass = 'quiz-option-btn p-3.5 rounded-xl bg-space-950 border border-slate-800 text-left text-xs sm:text-sm text-slate-300 font-medium hover:border-emerald-500 hover:text-white transition flex items-center gap-3';
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
            <div id="masteryEvaluationBanner" class="${answeredCount === qList.length && qList.length > 0 ? '' : 'hidden'} pt-4 border-t border-slate-800">
              <!-- Dynamically populated -->
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center" id="reviewFooterActions">
              <button onclick="setSq3rStep('recite')" class="text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5">
                <span>←</span> Back to Recite
              </button>
              <div class="text-xs font-bold text-slate-500">
                ${answeredCount === qList.length ? 'All questions evaluated' : 'Answer all questions to unlock final evaluation'}
              </div>
            </div>
          </div>
        `;

        if (answeredCount === qList.length && qList.length > 0) {
          evaluateMasteryGate(qList);
        }
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
      el.innerText = `${m}:${s}`;
    }

    function checkSurveyCompletion() {
      const st = getActiveSubtopic();
      let checkedCount = 0;
      st.survey.objectives.forEach((_, i) => {
        const el = document.getElementById(`surveyCheck-${i}`);
        if (el && el.checked) checkedCount++;
      });

      const badge = document.getElementById('checklistProgressBadge');
      if (badge) badge.innerText = `${checkedCount} / ${st.survey.objectives.length} Verified`;

      const btn = document.getElementById('finishSurveyBtn');
      if (btn) {
        if (checkedCount === st.survey.objectives.length) {
          btn.className = 'px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2';
          btn.innerHTML = '<span>All Objectives Verified! Advance to Questions (+35 XP)</span> <span>👉</span>';
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
        const el = document.getElementById(`surveyCheck-${i}`);
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
    // AMT EXAM MODE: GRADING, EXTREME BABY-STEP REVEAL, AND 80% GATE
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
    // AMT EXAM SIMULATOR TAB
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
              <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">NATIONAL CURRICULUM AMT EXAM ENGINE</span>
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
                <span class="text-xs font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">AMT Question #${idx+1}</span>
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
        addXp(25, 'AMT Solver');
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
        'sq3r': 'view-sq3r',
        'exam-hall': 'view-exam-hall',
        'exam': 'view-exam-hall',
        'curriculum': 'view-curriculum',
        'matrix': 'view-curriculum',
        'amt-exam': 'view-amt-exam',
        'amt': 'view-amt-exam',
        'vault': 'view-vault',
        'rewards': 'view-rewards',
        'analytics': 'view-analytics'
      };

      const btnMap = {
        'sq3r': 'tabBtn-sq3r',
        'exam-hall': 'tabBtn-exam-hall',
        'exam': 'tabBtn-exam-hall',
        'curriculum': 'tabBtn-curriculum',
        'matrix': 'tabBtn-curriculum',
        'amt-exam': 'tabBtn-amt-exam',
        'amt': 'tabBtn-amt-exam',
        'vault': 'tabBtn-vault',
        'rewards': 'tabBtn-rewards',
        'analytics': 'tabBtn-analytics'
      };

      const activeViewId = tabMap[tabId] || 'view-sq3r';

      ['view-sq3r', 'view-exam-hall', 'view-curriculum', 'view-amt-exam', 'view-vault', 'view-rewards', 'view-analytics'].forEach(vId => {
        const el = document.getElementById(vId);
        if (el) el.style.display = vId === activeViewId ? 'block' : 'none';
      });

      ['tabBtn-sq3r', 'tabBtn-exam-hall', 'tabBtn-curriculum', 'tabBtn-amt-exam', 'tabBtn-vault', 'tabBtn-rewards', 'tabBtn-analytics'].forEach(bId => {
        const btn = document.getElementById(bId);
        if (btn) {
          if (bId === btnMap[tabId]) {
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap';
          }
        }
      });

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
        currentCertData.studentName = nameInput.value.trim();
        localStorage.setItem('ethiopia_cert_student_name', currentCertData.studentName);
      }
      if (schoolInput && schoolInput.value.trim()) {
        currentCertData.schoolName = schoolInput.value.trim();
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

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  </script>
</body>
</html>`;

      const printWindow = window.open('', '_blank', 'width=850,height=900');
      if (printWindow) {
        printWindow.document.write(printHtml);
        printWindow.document.close();
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

    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById('gateBypassToggle').checked = gState.gateBypass;
      setGrade(gState.grade);
      setSq3rStep(gState.currentStep);
      renderHeaderStats();
      renderAnalytics();
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
  