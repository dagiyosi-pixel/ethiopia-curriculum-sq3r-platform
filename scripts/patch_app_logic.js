const fs = require('fs');
const path = require('path');

const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');
let logic = fs.readFileSync(logicPath, 'utf8');

// 1. Update switchTab function to support 'exam-hall'
const oldSwitchTab = `    function switchTab(tabId) {
      soundClick();
      const tabMap = {
        'sq3r': 'view-sq3r',
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
        'curriculum': 'tabBtn-curriculum',
        'matrix': 'tabBtn-curriculum',
        'amt-exam': 'tabBtn-amt-exam',
        'amt': 'tabBtn-amt-exam',
        'vault': 'tabBtn-vault',
        'rewards': 'tabBtn-rewards',
        'analytics': 'tabBtn-analytics'
      };

      const activeViewId = tabMap[tabId] || 'view-sq3r';

      ['view-sq3r', 'view-curriculum', 'view-amt-exam', 'view-vault', 'view-rewards', 'view-analytics'].forEach(vId => {
        const el = document.getElementById(vId);
        if (el) el.style.display = vId === activeViewId ? 'block' : 'none';
      });

      ['tabBtn-sq3r', 'tabBtn-curriculum', 'tabBtn-amt-exam', 'tabBtn-vault', 'tabBtn-rewards', 'tabBtn-analytics'].forEach(bId => {
        const btn = document.getElementById(bId);
        if (btn) {
          if (bId === btnMap[tabId]) {
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap';
          }
        }
      });

      if (tabId === 'curriculum' || tabId === 'matrix') renderCurriculumMatrix();
      if (tabId === 'vault') renderVault();
      if (tabId === 'amt-exam' || tabId === 'amt') renderAmtExam();
      if (tabId === 'rewards') renderTrophyRoom();
      if (tabId === 'sq3r') renderLevelMap();
      if (tabId === 'analytics') renderAnalytics();
    }`;

const newSwitchTab = `    function switchTab(tabId) {
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
    }`;

if (logic.includes(oldSwitchTab)) {
  logic = logic.replace(oldSwitchTab, newSwitchTab);
  console.log('1. switchTab updated successfully.');
} else {
  console.log('1. switchTab replacement targeted alternative pattern or already updated.');
}

// 2. Prepare the new features module:
// - Exam Hall Simulator
// - Canvas Certificate Generator & Telegram Sharing
// - 1-Page Summary / Formula Sheet Printer
// - Offline PWA Install Prompt Handlers
const additionalFeaturesCode = `

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
        : \`የኢትዮጵያ ሚኒስቴር የ\${SUBJECT_METADATA[sVal]?.am || sVal} ፈተና (\${SUBJECT_METADATA[sVal]?.name || sVal})\`;

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
      
      if (displayEl) displayEl.innerText = \`\${m}:\${s}\`;
      
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
      document.getElementById('examAnsweredCountText').innerText = \`\${answeredCount} / \${examHallState.questions.length} Answered\`;

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

        const flagDot = isFlagged ? '<span class=\"absolute -top-1 -right-1 text-[10px]\">🚩</span>' : '';
        html += \`<button onclick=\"renderExamHallQuestion(\${idx})\" class=\"\${btnClass}\">\${idx + 1}\${flagDot}</button>\`;
      });

      palette.innerHTML = html;
    }

    function renderExamHallQuestion(idx) {
      examHallState.currentIndex = idx;
      const q = examHallState.questions[idx];
      if (!q) return;

      document.getElementById('examProgressTracker').innerText = \`ጥያቄ \${idx + 1} ከ \${examHallState.questions.length} (Question \${idx + 1} of \${examHallState.questions.length})\`;

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
          ? '<span class=\"w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black\">✓</span>'
          : \`<span class=\"w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400\">\${letters[optIdx]}</span>\`;

        optionsHtml += \`
          <button onclick=\"selectExamOption(\${optIdx})\" class=\"w-full p-4 rounded-xl border \${optBorder} text-left transition flex items-start gap-3.5 cursor-pointer group\">
            <div class=\"shrink-0 pt-0.5\">\${radioIndicator}</div>
            <div class=\"text-xs sm:text-sm font-medium leading-relaxed group-hover:text-white\">\${opt}</div>
          </button>
        \`;
      });

      card.innerHTML = \`
        <div class=\"flex items-center justify-between gap-3 flex-wrap pb-4 border-b border-slate-800\">
          <div class=\"flex items-center gap-2 flex-wrap\">
            <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30\">
              \${q.grade}ኛ ክፍል • \${q.subjectAm || q.subjectName}
            </span>
            <span class=\"text-[11px] font-bold text-slate-400\">ምዕራፍ \${q.unitNumber}: \${q.unitTitle}</span>
            <span class=\"text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20\">\${q.subtopicCode}</span>
          </div>
          <span class=\"text-xs font-mono font-bold text-slate-400\">Q-\${idx + 1}</span>
        </div>

        <div class=\"py-2\">
          <h4 class=\"text-sm sm:text-base font-bold text-white leading-relaxed font-sans\">
            \${q.q}
          </h4>
        </div>

        <div class=\"space-y-3 pt-2\">
          \${optionsHtml}
        </div>
      \`;

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
        const proceed = confirm(\`እስካሁን ያልመለስካቸው \${unanswered} ጥያቄዎች አሉ። ፈተናውን አጠናቀህ ማስገባት ትፈልጋለህ? (You have \${unanswered} unanswered questions. Submit now?)\`);
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

        const uKey = \`\${q.grade}_\${q.subjectKey}_\${q.unitNumber}\`;
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
          ? '<span class=\"text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30\">✓ የተካነ (Mastered)</span>'
          : '<span class=\"text-xs font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30\">⚠️ መከለስ ያለበት (Review)</span>';

        diagCardsHtml += \`
          <div class=\"p-4 rounded-xl bg-space-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3\">
            <div class=\"space-y-1\">
              <div class=\"flex items-center gap-2\">
                <span class=\"text-xs font-bold text-slate-400\">\${diag.grade}ኛ ክፍል \${diag.subjectAm}</span>
                \${statusBadge}
              </div>
              <h5 class=\"text-xs sm:text-sm font-bold text-white\">ምዕራፍ \${diag.unitNumber}: \${diag.unitTitle}</h5>
            </div>
            <div class=\"flex items-center gap-4 shrink-0\">
              <div class=\"text-right\">
                <div class=\"text-xs font-mono font-bold text-white\">\${diag.correct} / \${diag.total} (\${uPct}%)</div>
                <div class=\"w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1\">
                  <div class=\"h-full \${pass ? 'bg-emerald-500' : 'bg-amber-500'}\" style=\"width: \${uPct}%\"></div>
                </div>
              </div>
              <button onclick=\"jumpToStudyUnit(\${diag.grade}, '\${diag.subjectKey}', \${diag.unitNumber})\" class=\"px-3 py-1.5 rounded-lg bg-space-850 hover:bg-space-800 border border-slate-700 text-xs text-amber-300 font-bold transition whitespace-nowrap cursor-pointer\">
                በSQ3R ከልስ ➔
              </button>
            </div>
          </div>
        \`;
      });

      // Build Derivations Review List
      let reviewAccordionHtml = '';
      examHallState.questions.forEach((q, idx) => {
        const userChoice = examHallState.answers[idx];
        const isRight = userChoice === q.correct;
        const solutionHtml = buildBabyStepSolutionHtml(q, userChoice, q.correct, q.options.length);

        reviewAccordionHtml += \`
          <details class=\"glass-card p-4 rounded-2xl border \${isRight ? 'border-emerald-500/30' : 'border-rose-500/30'} group\">
            <summary class=\"cursor-pointer flex items-center justify-between gap-3 text-xs sm:text-sm font-bold \${isRight ? 'text-emerald-400' : 'text-rose-400'} select-none\">
              <div class=\"flex items-center gap-2\">
                <span>\${isRight ? '✅' : '❌'}</span>
                <span>ጥያቄ \${idx + 1}: \${q.q.substring(0, 65)}...</span>
              </div>
              <span class=\"text-slate-400 text-xs group-open:rotate-180 transition-transform\">▼</span>
            </summary>
            <div class=\"mt-4 pt-3 border-t border-slate-800 space-y-3\">
              <p class=\"text-xs sm:text-sm font-bold text-white\">\${q.q}</p>
              \${solutionHtml}
            </div>
          </details>
        \`;
      });

      // Certificate CTA Banner if >= 80%
      let certCtaHtml = '';
      if (pct >= 80) {
        certCtaHtml = \`
          <div class=\"glass-card p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-space-900 to-amber-950/30 border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-5\">
            <div class=\"space-y-1.5 text-center md:text-left\">
              <div class=\"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-black text-xs border border-amber-500/30\">
                <span>🎖️</span> ብሔራዊ የክብር ማዕረግ ተሸልመሃል! (HONORS CONFERRED)
              </div>
              <h4 class=\"text-lg sm:text-xl font-black text-white font-display\">ይፋዊ የትምህርት ሚኒስቴር የክብር ምስክር ወረቀትህን አውርድ</h4>
              <p class=\"text-xs text-slate-300 max-w-xl\">በፈተናው \${pct}% በማስመዝገብህ ይፋዊውን የክብር የምስክር ወረቀት በስምህ አዘጋጅተንልሃል። በከፍተኛ ጥራት (HD PNG) ማውረድ ወይም በቴሌግራም ለጓደኞችህ ማጋራት ትችላለህ።</p>
            </div>
            <button onclick=\"openCertificateModal(null, \${pct})\" class=\"shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer\">
              <span>🎓</span> ምስክር ወረቀት አውርድ (Get Certificate)
            </button>
          </div>
        \`;
      }

      const resultsContainer = document.getElementById('examHallResults');
      resultsContainer.innerHTML = \`
        <!-- Results Score Header -->
        <div class=\"glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-space-900 to-space-950 text-center space-y-4\">
          <div class=\"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-slate-700 text-xs font-black text-slate-300 uppercase tracking-widest\">
            <span>🏛️</span> የፈተና ውጤት ማጠቃለያ (OFFICIAL EXAMINATION AUDIT)
          </div>

          <div class=\"flex flex-col items-center justify-center gap-1\">
            <div class=\"text-5xl sm:text-6xl font-black \${gradeColor} font-display\">\${pct}%</div>
            <div class=\"text-sm sm:text-base font-bold text-slate-200 mt-1\">\${correctCount} ከ \${total} ጥያቄዎች በትክክል ተመልሰዋል (\${correctCount} of \${total} Correct)</div>
            <div class=\"text-lg font-black \${gradeColor} mt-2 flex items-center gap-2\">
              <span>\${letterGrade}</span> • <span>\${gradeAmharic}</span>
            </div>
          </div>

          <div class=\"flex items-center justify-center gap-4 pt-3 border-t border-slate-800/80 flex-wrap text-xs text-slate-400\">
            <span>የተገኘ XP: <strong class=\"text-emerald-400 font-bold\">+\${earnedXp} XP</strong></span>
            <span>የማለፊያ መስፈርት: <strong class=\"text-amber-400 font-bold\">≥80%</strong></span>
            <span>ሁኔታ: <strong class=\"\${pct >= 80 ? 'text-emerald-400' : 'text-rose-400'} font-bold\">\${pct >= 80 ? 'አልፏል (PASSED)' : 'ተጨማሪ ጥናት ይፈልጋል (NEEDS IMPROVEMENT)'}</strong></span>
          </div>

          <div class=\"flex items-center justify-center gap-3 pt-4\">
            <button onclick=\"resetExamHall()\" class=\"px-5 py-2.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer\">
              🔄 አዲስ ፈተና ጀምር (Take Another Exam)
            </button>
            <button onclick=\"switchTab('sq3r')\" class=\"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md shadow-emerald-600/30 cursor-pointer\">
              📖 ወደ SQ3R ጥናት ስቱዲዮ ተመለስ
            </button>
          </div>
        </div>

        \${certCtaHtml}

        <!-- Chapter Diagnostic Strength & Weakness Matrix -->
        <div class=\"glass-card p-6 rounded-2xl space-y-4\">
          <h4 class=\"text-sm sm:text-base font-black text-white flex items-center gap-2 font-display\">
            <span>📊</span> የየምዕራፉ ጥንካሬ እና ድክመት ትንተና (Diagnostic Syllabus Breakdown)
          </h4>
          <p class=\"text-xs text-slate-400\">እያንዳንዱን ምዕራፍ ምን ያህል እንዳወቅከው ተመልከት፤ ደካማ የሆንክባቸውን ምዕራፎች በ'በSQ3R ከልስ' ቁልፍ ወዲያውኑ ገብተህ ማጥናት ትችላለህ።</p>
          <div class=\"space-y-3 pt-2\">
            \${diagCardsHtml}
          </div>
        </div>

        <!-- Full Baby-Step Derivations Review -->
        <div class=\"space-y-4\">
          <h4 class=\"text-sm sm:text-base font-black text-white flex items-center gap-2 font-display\">
            <span>🔍</span> የፈተናው ሙሉ የደረጃ-በደረጃ መፍትሄዎች (Full Baby-Step Derivations & Review)
          </h4>
          <div class=\"space-y-3\">
            \${reviewAccordionHtml}
          </div>
        </div>
      \`;

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
      showToast(\`ወደ \${gradeNum}ኛ ክፍል ምዕራፍ \${unitNumber} ተዛውረሃል!\`);
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
      ctx.fillText(\`ማዕረግ፦ \${gState.title}\`, W / 2, boxY + 28);

      ctx.font = '700 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#10b981';
      ctx.fillText(\`VERIFIED SCORE: \${currentCertData.scorePct}% • EXAM HALL DISTINCTION\`, W / 2, boxY + 50);
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
      ctx.fillText(\`VERIFICATION CODE: \${currentCertData.code}\`, 70, H - 150);
      ctx.fillText(\`ISSUED DATE: \${currentCertData.dateStr}\`, 70, H - 132);
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
      const safeName = (currentCertData.studentName || 'Student').replace(/[^a-zA-Z0-9_\u1200-\u137F]/g, '_');
      const dlLink = document.createElement('a');
      dlLink.download = \`Ethiopia_MoE_Honors_Certificate_\${safeName}.png\`;
      dlLink.href = dataUrl;
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);

      soundSuccess();
      showToast('📥 ይፋዊው የምስክር ወረቀት በከፍተኛ ጥራት (HD PNG) ወርዷል!');
    }

    function shareCertificateTelegram() {
      soundClick();
      const message = \`🇪🇹 በኢትዮጵያ የትምህርት ሚኒስቴር የ7ኛ እና 8ኛ ክፍል ፈተናዎች እና በSQ3R የጥናት ስልት የላቀ ውጤት (\${currentCertData.scorePct}%) አስመዝግቤ ይፋዊ የክብር ምስክር ወረቀት ተሸልሜያለሁ! 🎓🌟\\n\\nተማሪ፦ \${currentCertData.studentName}\\nማዕረግ፦ \${gState.title}\\n\\nአንተስ ምን ያህል ማምጣት ትችላለህ? እዚህ ገብተህ ተፈተን፦\`;
      const shareUrl = \`https://t.me/share/url?url=\${encodeURIComponent('https://t.me/ethiopia_grade8_ministry')}&text=\${encodeURIComponent(message)}\`;
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
            stepsText += \`<li><strong>\${step.label}:</strong> \${step.text}</li>\`;
          });
          examplesList = \`
            <div class=\"example-box\">
              <strong>💡 \${st.example.title}</strong>
              <p><em>\${st.example.problem}</em></p>
              <ol>\${stepsText}</ol>
            </div>
          \`;
        }

        subtopicsHtml += \`
          <div class=\"subtopic-block\">
            <h3>\${st.code} \${st.title}</h3>
            <div class=\"notes-content\">\${st.coreNotes || ''}</div>
            \${examplesList}
          </div>
        \`;
      });

      const printHtml = \`<!DOCTYPE html>
<html>
<head>
  <meta charset=\"UTF-8\">
  <title>\${unit.number} \${unit.title} • Study Sheet</title>
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
  <div class=\"header-bar\">
    <div>
      <h1 class=\"title-h1\">🇪🇹 የኢትዮጵያ ስርዓተ-ትምህርት • የ1-ገጽ ማጠቃለያ እና ቀመር ሉህ</h1>
      <p class=\"subtitle-p\">FDRE MoE Curriculum Summary Sheet • \${gState.grade}ኛ ክፍል \${subj.am} (\${subj.name})</p>
    </div>
    <div class=\"meta-badge\">
      ምዕራፍ \${unit.number} (Unit \${unit.number})
    </div>
  </div>

  <div class=\"big-idea\">
    <strong>🎯 ዋና ጽንሰ-ሀሳብ (Core Idea):</strong> \${unit.bigIdea || ''}
  </div>

  \${subtopicsHtml}

  <div class=\"footer-bar\">
    የኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የትምህርት ሚኒስቴር • SQ3R Pedagogical Mastery Platform • 100% Free Educational Resource
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  </script>
</body>
</html>\`;

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
        showToast('💡 አፑን ለመጫን በብሮውዘርህ ሜኑ ላይ \"Add to Home Screen\" ወይም \"Install App\" ን ምረጥ።');
      }
    }

    function dismissPwaBanner() {
      soundClick();
      const banner = document.getElementById('pwaInstallBanner');
      if (banner) banner.classList.add('hidden');
      localStorage.setItem('ethiopia_pwa_dismissed', 'true');
    }
`;

// Insert the new features before window.addEventListener('DOMContentLoaded')
const domLoadedTarget = "    window.addEventListener('DOMContentLoaded', () => {";
if (logic.includes(domLoadedTarget)) {
  logic = logic.replace(domLoadedTarget, additionalFeaturesCode + "\n" + domLoadedTarget);
  console.log('2. Additional popularity features inserted before DOMContentLoaded.');
} else {
  logic += additionalFeaturesCode;
  console.log('2. Additional popularity features appended to end.');
}

fs.writeFileSync(logicPath, logic, 'utf8');
console.log('Successfully updated src/app_logic.js! Size:', (logic.length / 1024).toFixed(1), 'KB');
