const fs = require('fs');
const path = require('path');

console.log('Injecting Dashboard & AI Study Assistant Logic with Deep Amharic Interpretations...');

const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');
let code = fs.readFileSync(logicPath, 'utf8');

const targetAnchor = "    window.addEventListener('DOMContentLoaded', () => {";

const injectionCode = `
    // =========================================================================
    // HOME DASHBOARD: PERSONAL LEARNING COMMAND CENTER
    // =========================================================================
    function renderDashboard() {
      // 1. Welcome Greeting & Status Badges
      const nameEl = document.getElementById('dashStudentNameGreeting');
      if (nameEl) nameEl.innerText = gState.studentName || 'ዳግማዊ';

      const streakBadge = document.getElementById('dashStreakBadge');
      if (streakBadge) streakBadge.innerText = \`🔥 \${gState.streak || 5}-Day Active Streak\`;

      const rankBadge = document.getElementById('dashRankBadge');
      if (rankBadge) rankBadge.innerText = gState.title || 'Apprentice Scholar';

      const st = getActiveSubtopic();
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name };
      const topicPill = document.getElementById('dashActiveTopicPill');
      if (topicPill) topicPill.innerText = \`\${meta.name} (\${meta.am}) • \${st.code} \${st.title}\`;

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
      if (metricProgress) metricProgress.innerText = \`\${progressPct}%\`;

      const metricUnits = document.getElementById('dashMetricUnits');
      if (metricUnits) metricUnits.innerText = \`\${masteredCount} / \${totalSubtopicsCount} ርዕሶች ተጠናቀዋል\`;

      const metricMastered = document.getElementById('dashMetricMastered');
      if (metricMastered) metricMastered.innerText = String(masteredCount || 18);

      const metricAccuracy = document.getElementById('dashMetricAccuracy');
      if (metricAccuracy) metricAccuracy.innerText = '88%';

      const metricReviewDue = document.getElementById('dashMetricReviewDue');
      if (metricReviewDue) metricReviewDue.innerText = '6';

      // 3. Render 3 Daily Missions
      const missionsContainer = document.getElementById('dashMissionsContainer');
      if (missionsContainer) {
        missionsContainer.innerHTML = \`
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
                <h5 class="text-xs sm:text-sm font-bold text-white">ተልዕኮ 3፦ በAMT ፈተና ≥80% በማምጣት ማለፍ</h5>
                <p class="text-[11px] text-slate-400">Score ≥80% on an AMT Mastery Exam Gate (+80 XP)</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-24 h-2 bg-space-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-cyan-500" style="width: 0%"></div>
              </div>
              <span class="text-xs font-black text-slate-400">0 / 1</span>
            </div>
          </div>
        \`;
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
        heatmapContainer.innerHTML = intensities.map(item => \`
          <div class="h-9 rounded-xl \${item.bg} flex items-center justify-center text-[10px] font-black text-slate-950 shadow-sm cursor-pointer hover:scale-110 transition" title="\${item.day}: \${item.time} active study">
            \${item.time}
          </div>
        \`).join('');
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
          card.innerHTML = \`
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-3xl p-2.5 rounded-2xl bg-space-950 border border-slate-800">\${meta.icon}</span>
                <span class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-xl border border-amber-500/20">\${sObj.units.length} ምዕራፎች</span>
              </div>
              <div>
                <h4 class="text-base font-black text-white font-display">\${meta.name}</h4>
                <p class="text-xs text-slate-400 font-bold">\${meta.am} • \${gState.grade}ኛ ክፍል</p>
              </div>
              <div class="space-y-1.5 pt-1">
                <div class="flex items-center justify-between text-xs text-slate-400 font-bold">
                  <span>የትምህርት ሂደት:</span>
                  <span class="text-emerald-400 font-mono">\${subjPct}%</span>
                </div>
                <div class="w-full h-2 bg-space-950 rounded-full overflow-hidden border border-slate-800">
                  <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400" style="width: \${subjPct}%"></div>
                </div>
              </div>
            </div>

            <button onclick="selectSubjectFromDashboard('\${sKey}')" class="w-full py-2.5 rounded-xl bg-space-900 hover:bg-emerald-600 text-slate-200 hover:text-white font-black text-xs transition flex items-center justify-center gap-2 border border-slate-800 hover:border-emerald-500 cursor-pointer shadow-sm">
              <span>ትምህርቱን ጀምር (Study)</span> <span>➔</span>
            </button>
          \`;
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
      if (recTitle) recTitle.innerText = \`ቀጣይ የሚመከር ጥናት፦ \${st.code} \${st.title}\`;
      if (recDesc) recDesc.innerText = \`ይህንን ምዕራፍ በSQ3R ስልት በማጠናቀቅ የ\${meta.name} መሰረትህን አጠናክር። የተሟላ የቅኝት ራዳር፣ 3D ፍላሽ ካርዶች እና የፈተና ጥያቄዎች ተዘጋጅተዋል።\`;
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
        if (badge) badge.innerText = \`ዒላማ: \${meta.name} (\${meta.am}) • \${st.code} \${st.title}\`;
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
          answer = \`
            <strong class="text-emerald-300 font-bold">💡 ቀለል ያለ የአማርኛ ማብራሪያ፦</strong><br><br>
            ሰላም! የ\${st.title} ዋና ፅንሰ-ሀሳብ በቀላሉ ሲገለጽ፦ <em>\${st.survey.blueprint}</em> ማለት ነው።<br><br>
            ይህ ማለት ውስብስብ የሆኑ የፈተና ጥያቄዎች ቢመጡም፣ መሰረታዊ ህጉ አንድ ብቻ ነው። ይህንን ህግ አንዴ ከጨበጥክ የትኛውም ጥያቄ አያደናግርህም!
          \`;
        } else if (promptType === 'example') {
          answer = \`
            <strong class="text-amber-300 font-bold">🌍 የዕለት ተዕለት የኢትዮጵያ ነባራዊ ምሳሌ፦</strong><br><br>
            ይህንን ፅንሰ-ሀሳብ በዕለት ተዕለት ኑሮአችን ውስጥ በቀላሉ ለመረዳት፦<br>
            \${getCurriculumIntel(st, 'anchor')}
          \`;
        } else if (promptType === 'hint') {
          answer = \`
            <strong class="text-rose-300 font-bold">🎯 የሚኒስቴር ፈተና ወጥመድ ፍንጭ፦</strong><br><br>
            ተማሪዎች በዚህ ርዕስ ስር በብዛት የሚሳሳቱባቸው ነጥቦች፦<br>
            \${getCurriculumIntel(st, 'pitfall')}<br><br>
            <strong>ዶ/ር ደስታ የሚሰጥህ ምክር፦</strong> ጥያቄውን ስታነብ ሁልጊዜ የተሰጡትን መረጃዎች እና የሚጠየቀውን ጥያቄ በደብተርህ ላይ ለይተህ ጻፍ!
          \`;
        } else if (promptType === 'recap') {
          answer = \`
            <strong class="text-cyan-300 font-bold">📝 የትምህርቱ 3 ዋና ዋና ነጥቦች (3-Point Recap):</strong><br><br>
            <ol class="list-decimal list-inside space-y-1.5 text-slate-200">
              <li><strong>ዋና ሕግ፦</strong> \${st.survey.keyFormulas || st.survey.blueprint.substring(0, 70)}</li>
              <li><strong>የስሌት ወይም የትንታኔ ደረጃ፦</strong> \${st.example.title}</li>
              <li><strong>የፈተና ስልት፦</strong> በStage 5 የተሰጡትን 4 አማራጮች ደረጃ በደረጃ በመተንተን ትክክለኛውን መለየት።</li>
            </ol>
          \`;
        }

        resEl.innerHTML = answer;
        soundSuccess();
      }, 350);
    }
`;

// Replace DOMContentLoaded listener and prepend injectionCode
const oldDomListener = `    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById('gateBypassToggle').checked = gState.gateBypass;
      setGrade(gState.grade);
      setSq3rStep(gState.currentStep);
      renderHeaderStats();
      renderAnalytics();
    });`;

const newDomListener = `    window.addEventListener('DOMContentLoaded', () => {
      const bypass = document.getElementById('gateBypassToggle');
      if (bypass) bypass.checked = gState.gateBypass;

      setGrade(gState.grade);
      setSq3rStep(gState.currentStep);
      renderHeaderStats();
      renderAnalytics();
      renderDashboard();
      switchTab('dashboard');
    });`;

if (code.includes(targetAnchor)) {
  code = code.replace(oldDomListener, injectionCode + '\n\n' + newDomListener);
  console.log('Successfully injected Dashboard, Assistant, and updated DOMContentLoaded listener.');
} else {
  console.error('Could not find DOMContentLoaded targetAnchor in app_logic.js!');
  process.exit(1);
}

fs.writeFileSync(logicPath, code, 'utf8');
console.log('src/app_logic.js patched with Dashboard and Assistant!');
