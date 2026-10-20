const fs = require('fs');
const path = require('path');

console.log('Patching Realistic Psychometric Score Predictor & Honest Readiness Engine...');

const templatePath = path.join(__dirname, '..', 'src', 'template_shell.html');
const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');

let html = fs.readFileSync(templatePath, 'utf8');
let js = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// 1. UPDATE TEMPLATE SHELL: REALISTIC DASHBOARD PREDICTOR CARD
// =============================================================================
const oldCardStart = '<div id="dashScorePredictorCard"';
const oldCardEnd = '<!-- 2-Column: Daily Missions & Weekly Study Activity Heatmap -->';

const pCard1 = html.indexOf(oldCardStart);
const pCard2 = html.indexOf(oldCardEnd);

if (pCard1 !== -1 && pCard2 !== -1) {
  const realisticCardHtml = `<div id="dashScorePredictorCard" class="glass-card p-6 sm:p-7 rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-space-900 via-space-950 to-space-900 shadow-2xl relative overflow-hidden">
          <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 relative z-10">
            
            <!-- Left: Predicted Score Radial & Official Classification -->
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div class="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" stroke="currentColor" stroke-width="8" class="text-slate-800" fill="transparent"/>
                  <circle id="dashScoreGaugeCircle" cx="50" cy="50" r="42" stroke="currentColor" stroke-width="8" class="text-emerald-400 transition-all duration-1000" stroke-dasharray="264" stroke-dashoffset="200" stroke-linecap="round" fill="transparent"/>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div class="flex items-baseline">
                    <span id="dashPredictedScoreValue" class="text-3xl sm:text-4xl font-black text-white font-display">25</span>
                    <span class="text-xs font-bold text-slate-400 ml-0.5">/100</span>
                  </div>
                  <span class="text-[9px] uppercase font-black tracking-widest text-emerald-400">እውነተኛ ትንበያ</span>
                </div>
              </div>

              <div class="space-y-2 text-center sm:text-left">
                <div class="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                    <span>🇪🇹</span> እውነተኛ የብሔራዊ ፈተና ውጤት ትንበያ
                  </span>
                  <span id="dashPredictedClassBadge" class="text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 text-slate-400 bg-slate-800/80 border border-slate-700">
                    <span>⏳</span> የመነሻ ደረጃ (Baseline Guessing)
                  </span>
                </div>
                
                <h3 class="text-lg sm:text-xl font-black text-white font-display">የ100 ጥያቄዎች ብሔራዊ ፈተና ትንበያ (Realistic Exam Projection)</h3>
                
                <p id="dashPredictedVerdict" class="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  ይህ ትንበያ ያለ ምንም ማጋነን በእውነተኛ የፈተና ስታንዳርድ የተሰላ ነው። እስካሁን የተማርከውን የትምህርት ሽፋንና ትክክለኛነት በትክክል ያሳያል።
                </p>

                <!-- Dual Transparency Chips: Tested Material Accuracy vs Full Syllabus Coverage -->
                <div class="flex items-center justify-center sm:justify-start gap-2 flex-wrap pt-1 text-xs">
                  <div class="px-3 py-1 rounded-xl bg-space-950 border border-slate-800 flex items-center gap-1.5">
                    <span class="text-emerald-400 font-bold">🎯 የተጠናው ክፍል ብቃት፦</span>
                    <strong class="text-white font-mono" id="dashTestedAccuracy">0%</strong>
                  </div>
                  <div class="px-3 py-1 rounded-xl bg-space-950 border border-slate-800 flex items-center gap-1.5">
                    <span class="text-amber-400 font-bold">📚 የሥርዓተ-ትምህርት ሽፋን፦</span>
                    <strong class="text-white font-mono" id="dashCoverageFraction">0 / 92 ርዕሶች (0%)</strong>
                  </div>
                </div>

                <div class="text-[11px] text-slate-400 flex items-center justify-center sm:justify-start gap-3 pt-0.5">
                  <span>ተማሪ፦ <strong class="text-white" id="dashPredictorStudentName">ዳግማዊ</strong></span>
                  <span>•</span>
                  <span>ክፍል፦ <strong class="text-amber-400" id="dashPredictorGrade">7ኛ ክፍል</strong></span>
                  <span>•</span>
                  <span id="dashPredictorLastAudited">ዛሬ የተሰላ</span>
                </div>
              </div>
            </div>

            <!-- Right: 4-Factor Breakdown & Action Buttons -->
            <div class="flex flex-col justify-between gap-4 lg:w-80 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6">
              
              <!-- 4-Factor Honest Meters -->
              <div class="space-y-2 text-xs">
                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>📚 የትምህርት ሽፋን (Syllabus Coverage)</span>
                    <strong class="text-emerald-400 font-mono" id="dashFactorCoverage">0 / 92 (0%)</strong>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div id="dashFactorCoverageBar" class="h-full bg-emerald-500 rounded-full transition-all duration-500" style="width: 0%;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>🎯 በተጠናው ላይ ያለህ ብቃት (Tested Accuracy)</span>
                    <strong class="text-cyan-400 font-mono" id="dashFactorAccuracy">0%</strong>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div id="dashFactorAccuracyBar" class="h-full bg-cyan-500 rounded-full transition-all duration-500" style="width: 0%;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>🧠 የማስታወስ ፅናት (SRS Retention Factor)</span>
                    <strong class="text-purple-400 font-mono" id="dashFactorRecall">100%</strong>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div id="dashFactorRecallBar" class="h-full bg-purple-500 rounded-full transition-all duration-500" style="width: 100%;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>🎲 ባልተጠናው ክፍል የመገመት እድል (Chance Expectation)</span>
                    <strong class="text-amber-400 font-mono" id="dashFactorConsistency">25% (A,B,C,D)</strong>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div id="dashFactorConsistencyBar" class="h-full bg-amber-500 rounded-full" style="width: 25%;"></div>
                  </div>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="flex items-center gap-2 pt-2">
                <button onclick="openPredictorModal()" class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 cursor-pointer">
                  <span>🔍</span> <span>የዝርዝር ብቃት ትንተና ፈትሽ</span>
                </button>
                <button onclick="openStudentProfileModal()" class="p-2.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-300 hover:text-white transition cursor-pointer" title="Manage Profile & Save Data">
                  <span>👤</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        `;
  html = html.slice(0, pCard1) + realisticCardHtml + html.slice(pCard2);
  console.log('Realistic Dashboard Score Predictor card updated.');
}

// =============================================================================
// 2. UPDATE TEMPLATE SHELL: PREDICTOR AUDIT MODAL WITH WHAT-IF CALCULATOR
// =============================================================================
const pModStart = html.indexOf('id="predictorAuditModal"');
const pModEnd = html.indexOf('id="studentProfileModal"');

if (pModStart !== -1 && pModEnd !== -1) {
  const realisticModalHtml = `id="predictorAuditModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-space-950/85 backdrop-blur-md">
    <div class="glass-card max-w-3xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-7 rounded-3xl border border-emerald-500/40 space-y-6 relative bg-space-900 shadow-2xl animate-fadeIn">
      
      <!-- Modal Header -->
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center text-xl shrink-0">
            🎯
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white font-display">እውነተኛ የብሔራዊ ፈተና ውጤት ትንበያና የብቃት ዳሰሳ</h3>
            <p class="text-xs text-slate-400">100% Realistic Psychometric Exam Projection • No False Inflation</p>
          </div>
        </div>
        <button onclick="closePredictorModal()" class="w-8 h-8 rounded-full bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer">
          ✕
        </button>
      </div>

      <!-- Main Honest Score Hero -->
      <div class="p-6 rounded-2xl bg-gradient-to-r from-space-950 via-space-900 to-space-950 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-5">
          <div class="w-24 h-24 rounded-full bg-emerald-500/10 border-4 border-emerald-500 flex flex-col items-center justify-center shrink-0">
            <span id="modalPredictedScore" class="text-3xl font-black text-white font-display">25</span>
            <span class="text-[9px] uppercase tracking-wider text-emerald-400">ከ 100</span>
          </div>
          <div class="space-y-1.5">
            <div id="modalPredictedBadge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-slate-800 text-slate-300 border border-slate-700">
              <span>⏳</span> የመነሻ ደረጃ (Baseline Guessing)
            </div>
            <h4 class="text-sm sm:text-base font-bold text-white">የውጤቱ እውነተኛ የሳይንስ ስሌት (Honest Formula)</h4>
            <p class="text-xs text-slate-300 leading-relaxed max-w-md">
              የፈተና ውጤት = [የተጠናው ርዕስ ሽፋን × በፈተናዎች ያመጣኸው ትክክለኛነት] + [ያልተጠናው ርዕስ ሽፋን × 25% የእድል ግምት]። ያለ ምንም ውሸት ትክክለኛ የፈተና ዝግጁነትህን ያሳያል!
            </p>
          </div>
        </div>

        <button onclick="checkExamReadinessLive()" class="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs transition flex items-center gap-2 shrink-0 cursor-pointer shadow-lg shadow-emerald-600/30">
          <span>⚡</span> <span>ውጤቴን አሁን ገምግም (Re-Audit)</span>
        </button>
      </div>

      <!-- INTERACTIVE "WHAT-IF" TARGET CALCULATOR (የውጤት ማሳደጊያ አስሊ) -->
      <div class="p-5 rounded-2xl bg-space-950 border border-emerald-500/30 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2 flex-wrap gap-2">
          <div class="flex items-center gap-2">
            <span class="text-lg">🧮</span>
            <h4 class="text-xs sm:text-sm font-black text-emerald-300 font-display">የውጤት ማሳደጊያ አስሊ (What-If Goal Simulator)</h4>
          </div>
          <span class="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">Live Interactive</span>
        </div>
        
        <p class="text-xs text-slate-300">
          ስንት ተጨማሪ ርዕሶችን ብታጠና ውጤትህ ምን ያህል እንደሚያድግ ተመልከት፦
        </p>

        <div class="space-y-2">
          <div class="flex justify-between text-xs text-slate-300 font-bold">
            <span>ተጨማሪ የሚጠኑ ርዕሶች፦ <span id="simulatorAddTopicsLabel" class="text-amber-400 font-mono font-black text-sm">15 ርዕሶች</span></span>
            <span id="simulatorExpectedAccuracyLabel" class="text-cyan-400">በ85% አማካይ ትክክለኛነት</span>
          </div>
          
          <input type="range" id="simulatorTopicsSlider" min="1" max="92" value="15" oninput="simulateTargetScore(this.value)" class="w-full accent-emerald-500 cursor-pointer">
          
          <div class="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>+1 ርዕስ</span>
            <span>+30 ርዕሶች</span>
            <span>+60 ርዕሶች</span>
            <span>ሙሉ ሥርዓተ-ትምህርቱን (All 92)</span>
          </div>
        </div>

        <!-- Simulator Result Callout -->
        <div class="p-3.5 rounded-xl bg-space-900 border border-emerald-500/30 text-xs text-slate-200 flex items-center justify-between gap-3 flex-wrap">
          <div class="space-y-0.5">
            <span class="text-[11px] text-slate-400 block">የሚጠበቅ አዲስ የፈተና ውጤት፦</span>
            <div class="flex items-baseline gap-2">
              <span id="simulatorProjectedScore" class="text-2xl font-black text-emerald-400 font-display">42 / 100</span>
              <span id="simulatorProjectedGain" class="text-xs font-bold text-amber-300">(+17 ነጥብ ጭማሪ!)</span>
            </div>
          </div>
          <div id="simulatorTargetBadge" class="text-xs px-3 py-1.5 rounded-xl font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            🎯 ግብ፦ ወደ ማለፊያ (Pass 50+) ለመድረስ ገና 8 ርዕሶች ያስፈልጉሃል
          </div>
        </div>
      </div>

      <!-- Subject-by-Subject Forecast Breakdown -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            <span>📊</span> የትምህርት አይነቶች ዝርዝር ትንበያ (Subject Breakdown)
          </h4>
          <span class="text-[11px] text-slate-400">እያንዳንዱ ከ 100%</span>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" id="modalSubjectForecastGrid">
          <!-- Dynamically populated 6 subjects -->
        </div>
      </div>

      <!-- Top Weakest Areas & 1-Click Action Steps -->
      <div class="p-5 rounded-2xl bg-space-950 border border-amber-500/30 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <div class="flex items-center gap-2">
            <span class="text-lg">⚠️</span>
            <h4 class="text-xs sm:text-sm font-black text-amber-300">አስቸኳይ ክለሳ የሚያስፈልጋቸው ርዕሶች (Priority Targets)</h4>
          </div>
          <span class="text-[10px] text-amber-400 font-mono">Immediate Value</span>
        </div>
        <p class="text-xs text-slate-300">
          እነዚህን ርዕሶች በመከለስና የፈተና ጥያቄዎቻቸውን በመስራት የተገመተውን ውጤትህን በፍጥነት ማሳደግ ትችላለህ፦
        </p>
        <div class="space-y-2 pt-1" id="modalWeakTopicsContainer">
          <!-- Dynamically populated weak topics -->
        </div>
      </div>

      <!-- Real 10-Question Diagnostic Checkpoint Trigger -->
      <div class="p-4 rounded-2xl bg-space-950 border border-slate-800 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span class="text-xs font-black text-white flex items-center gap-1.5">
            <span>⏱️</span> የ10 ጥያቄዎች የቀጥታ ፈተና ፍተሻ (10-Question Diagnostic Checkpoint)
          </span>
          <p class="text-[11px] text-slate-400">እውነተኛ 10 የፈተና ጥያቄዎችን በመመለስ ውጤትህን በቀጥታ ፈትሽ።</p>
        </div>
        <button onclick="startReadinessDrill()" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition cursor-pointer">
          ፍተሻውን ጀምር (+100 XP) ➔
        </button>
      </div>

      <!-- Drill Playground Container (Hidden by default) -->
      <div id="readinessDrillContainer" class="hidden p-5 rounded-2xl bg-space-950 border border-emerald-500/50 space-y-4 animate-fadeIn">
        <!-- Rendered when drill is started -->
      </div>

      <!-- Modal Footer -->
      <div class="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400">
        <span>የውጤት ትንበያው በእውነተኛ የትምህርት ሚኒስቴር ስታንዳርድ የተሰላ ነው</span>
        <button onclick="closePredictorModal()" class="px-4 py-2 rounded-xl bg-space-850 hover:bg-space-800 text-slate-200 font-bold transition cursor-pointer">
          ዝጋ (Close)
        </button>
      </div>

    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- 4. STUDENT PROFILE, MULTI-ACCOUNT & PROGRESS BACKUP HUB                    -->
  <!-- ========================================================================= -->
  <div `;
  html = html.slice(0, pModStart) + realisticModalHtml + html.slice(pModEnd);
  console.log('Realistic Predictor Modal with What-If Simulator updated in template_shell.html');
}

fs.writeFileSync(templatePath, html, 'utf8');
console.log('Template shell saved.');

// =============================================================================
// 3. UPDATE APP_LOGIC.JS: REALISTIC PSYCHOMETRIC SCORING & WHAT-IF SIMULATOR
// =============================================================================
const pLogicStart = js.indexOf('function computePredictedExamScore() {');
const pLogicEnd = js.indexOf('// STUDENT PROFILE, MULTI-ACCOUNT & LOCALSTORAGE PERSISTENCE HUB');

if (pLogicStart !== -1 && pLogicEnd !== -1) {
  const realisticLogic = `function computePredictedExamScore() {
      const grade = gState.grade || 7;
      const subjects = GALACTIC_DATABASE[grade];
      if (!subjects) {
        return {
          totalScore: 25,
          classification: 'የመነሻ ደረጃ (Baseline Guessing)',
          badgeIcon: '⏳',
          badgeColor: 'text-slate-400 bg-slate-800/80 border-slate-700',
          coveragePoints: 0,
          accuracyPoints: 0,
          guessingPoints: 25,
          recallFactor: 1.0,
          testedAccuracy: 0,
          coveragePct: 0,
          subjectScores: {},
          masteredCount: 0,
          totalCount: 92
        };
      }

      let totalSubtopics = 0;
      let masteredSubtopics = 0;
      let totalAttemptedScoreSum = 0;
      let totalAttemptedCount = 0;
      const subjectScores = {};

      Object.keys(subjects).forEach(sKey => {
        const sObj = subjects[sKey];
        let sTotal = 0;
        let sMastered = 0;
        let sQuizSum = 0;
        let sQuizCount = 0;

        if (sObj && sObj.units) {
          sObj.units.forEach(u => {
            if (u.subtopics) {
              u.subtopics.forEach(st => {
                sTotal++;
                totalSubtopics++;
                if (isSubtopicMastered(st.id)) {
                  sMastered++;
                  masteredSubtopics++;
                }
                if (gState.masteredSubtopics && gState.masteredSubtopics[st.id] !== undefined) {
                  const sc = Number(gState.masteredSubtopics[st.id]);
                  sQuizSum += sc;
                  sQuizCount++;
                  totalAttemptedScoreSum += sc;
                  totalAttemptedCount++;
                }
              });
            }
          });
        }

        // Realistic subject score:
        // Coverage of this subject × Average quiz on this subject + Uncovered × 25% (4-choice chance)
        const sCoverage = sTotal > 0 ? (sMastered / sTotal) : 0;
        const sAvgQuiz = sQuizCount > 0 ? (sQuizSum / sQuizCount) : 0;
        const sScore = sTotal > 0 
          ? Math.round((sCoverage * sAvgQuiz) + ((1 - sCoverage) * 25))
          : 25;

        subjectScores[sKey] = {
          score: Math.min(100, Math.max(25, sScore)),
          mastered: sMastered,
          total: sTotal,
          avgQuiz: Math.round(sAvgQuiz),
          coveragePct: Math.round(sCoverage * 100)
        };
      });

      // 100% REALISTIC HONEST STATISTICAL MODEL:
      // In a 100-question multiple-choice exam (4 choices: A, B, C, D):
      // - On topics the student has mastered, expected accuracy = verified quiz average
      // - On topics the student has NOT covered, expected accuracy = random chance (25%)
      const coverageRatio = totalSubtopics > 0 ? (masteredSubtopics / totalSubtopics) : 0;
      const testedAccuracy = totalAttemptedCount > 0 ? (totalAttemptedScoreSum / totalAttemptedCount) : 0;

      // SRS Flashcard Retention Multiplier (0.90 to 1.0)
      let overdueCount = 0;
      let totalCards = 0;
      if (gState.flashcardIntervals) {
        Object.values(gState.flashcardIntervals).forEach(inter => {
          totalCards++;
          if (inter < 3) overdueCount++;
        });
      }
      const retentionFactor = totalCards > 0 ? Math.max(0.90, 1.0 - (overdueCount / totalCards) * 0.1) : 1.0;

      // Streak Test-Stamina Bonus (up to 3 extra points for disciplined study habits)
      const habitBonus = Math.min(3, Math.round((gState.streak || 0) * 0.5));

      let rawPredicted = 25;
      if (totalAttemptedCount === 0 && masteredSubtopics === 0) {
        rawPredicted = 25; // Pure guessing baseline when nothing is studied
      } else {
        const coveredPoints = coverageRatio * (testedAccuracy * retentionFactor);
        const guessingPoints = (1 - coverageRatio) * 25;
        rawPredicted = coveredPoints + guessingPoints + habitBonus;
      }

      const totalScore = Math.min(100, Math.max(25, Math.round(rawPredicted)));

      let classification = 'የመነሻ ደረጃ (Baseline Guessing)';
      let badgeColor = 'text-slate-400 bg-slate-800/80 border-slate-700';
      let badgeIcon = '⏳';
      let verdict = 'እስካሁን ምንም ርዕስ አላጠናህም። ዛሬ ሙሉ ፈተናውን ብትወስድ በአጋጣሚ ግምት 25% ብቻ ነው የምታገኘው። ማለፊያ (50+) ለማግኘት ቢያንስ 32 ርዕሶችን ማጠናቀቅ አለብህ!';

      if (totalScore >= 90) {
        classification = 'Very Great Distinction (እጅግ ከፍተኛ ማዕረግ)';
        badgeColor = 'text-amber-400 bg-amber-500/20 border-amber-500/30';
        badgeIcon = '🏆';
        verdict = \`ድንቅ ውጤት! ሙሉውን ሥርዓተ-ትምህርት በሚገባ አጠናቅቀሃል፤ በ\${gState.grade}ኛ ክፍል ብሔራዊ ፈተና እጅግ ከፍተኛ ማዕረግ (\${totalScore}%) ለማምጣት ሙሉ በሙሉ ዝግጁ ነህ!\`;
      } else if (totalScore >= 80) {
        classification = 'Great Distinction (ከፍተኛ ማዕረግ)';
        badgeColor = 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
        badgeIcon = '🥇';
        verdict = \`በጣም ጥሩ የትምህርት ሽፋንና ትክክለኛነት አለህ! በአሁኑ ብቃትህ በ\${gState.grade}ኛ ክፍል ፈተና ከፍተኛ ማዕረግ (\${totalScore}%) ለማግኘት ተቃርበሃል።\`;
      } else if (totalScore >= 65) {
        classification = 'Distinction (ማዕረግ)';
        badgeColor = 'text-teal-400 bg-teal-500/20 border-teal-500/30';
        badgeIcon = '🥈';
        verdict = \`ጥሩ እድገት እያሳየህ ነው! የፈተና ውጤትህ \${totalScore}% ደርሷል፤ ጥቂት ተጨማሪ ምዕራፎችን በመጨረስ ወደ ከፍተኛ ማዕረግ (80+) ማደግ ትችላለህ።\`;
      } else if (totalScore >= 50) {
        classification = 'Pass (አጥጋቢ ማለፊያ)';
        badgeColor = 'text-blue-400 bg-blue-500/20 border-blue-500/30';
        badgeIcon = '🥉';
        verdict = \`በአሁኑ የትምህርት ሽፋንህና ውጤትህ ማለፊያውን (\${totalScore}%) ደፍረሃል! ነገር ግን ወደ ማዕረግ ለማደግ ያልሸፈንካቸውን ክፍሎች ማጠናቀቅ ይኖርብሃል።\`;
      } else {
        classification = 'Needs More Coverage (ያልተሟላ ሽፋን)';
        badgeColor = 'text-rose-400 bg-rose-500/20 border-rose-500/30';
        badgeIcon = '⚠️';
        verdict = \`ባጠናሃቸው ርዕሶች ላይ ጥሩ ጅምር ቢኖርህም፣ አብዛኛውን የትምህርት ካታሎግ ገና ስላልሸፈንክ አጠቃላይ የፈተና ውጤትህ \${totalScore}% (ከማለፊያ በታች) ነው። ማለፊያ (50+) ለመድረስ የቀሩትን ርዕሶች አጠናክር!\`;
      }

      return {
        totalScore,
        classification,
        badgeColor,
        badgeIcon,
        verdict,
        subjectScores,
        testedAccuracy: Math.round(testedAccuracy),
        coverageRatio,
        coveragePct: Math.round(coverageRatio * 100),
        masteredCount: masteredSubtopics,
        totalCount: totalSubtopics,
        retentionPct: Math.round(retentionFactor * 100)
      };
    }

    function renderScorePredictor() {
      const pred = computePredictedExamScore();

      // Header pill
      const headScore = document.getElementById('headerScorePredictor');
      if (headScore) headScore.innerText = pred.totalScore;

      // Dashboard radial gauge & texts
      const dashScore = document.getElementById('dashPredictedScoreValue');
      if (dashScore) dashScore.innerText = pred.totalScore;

      const gaugeCircle = document.getElementById('dashScoreGaugeCircle');
      if (gaugeCircle) {
        const c = 264;
        const offset = Math.max(0, c - (c * pred.totalScore / 100));
        gaugeCircle.style.strokeDashoffset = offset;
      }

      const badgeEl = document.getElementById('dashPredictedClassBadge');
      if (badgeEl) {
        badgeEl.className = 'text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ' + pred.badgeColor;
        badgeEl.innerHTML = \`<span>\${pred.badgeIcon}</span> \${pred.classification}\`;
      }

      const verdictEl = document.getElementById('dashPredictedVerdict');
      if (verdictEl) {
        verdictEl.innerText = pred.verdict;
      }

      const testedAccEl = document.getElementById('dashTestedAccuracy');
      if (testedAccEl) testedAccEl.innerText = \`\${pred.testedAccuracy}%\`;

      const covFracEl = document.getElementById('dashCoverageFraction');
      if (covFracEl) covFracEl.innerText = \`\${pred.masteredCount} / \${pred.totalCount} ርዕሶች (\${pred.coveragePct}%)\`;

      const stNameEl = document.getElementById('dashPredictorStudentName');
      if (stNameEl) stNameEl.innerText = gState.studentName || 'ዳግማዊ';

      const gradeEl = document.getElementById('dashPredictorGrade');
      if (gradeEl) gradeEl.innerText = \`\${gState.grade}ኛ ክፍል\`;

      // 4-Factors Realistic
      const fc = document.getElementById('dashFactorCoverage');
      if (fc) fc.innerText = \`\${pred.masteredCount} / \${pred.totalCount} (\${pred.coveragePct}%)\`;
      const fcb = document.getElementById('dashFactorCoverageBar');
      if (fcb) fcb.style.width = \`\${pred.coveragePct}%\`;

      const fa = document.getElementById('dashFactorAccuracy');
      if (fa) fa.innerText = \`\${pred.testedAccuracy}%\`;
      const fab = document.getElementById('dashFactorAccuracyBar');
      if (fab) fab.style.width = \`\${pred.testedAccuracy}%\`;

      const fr = document.getElementById('dashFactorRecall');
      if (fr) fr.innerText = \`\${pred.retentionPct}%\`;
      const frb = document.getElementById('dashFactorRecallBar');
      if (frb) frb.style.width = \`\${pred.retentionPct}%\`;
    }

    function openPredictorModal() {
      soundClick();
      const modal = document.getElementById('predictorAuditModal');
      if (!modal) return;
      modal.classList.remove('hidden');

      const pred = computePredictedExamScore();
      const mScore = document.getElementById('modalPredictedScore');
      if (mScore) mScore.innerText = pred.totalScore;

      const mBadge = document.getElementById('modalPredictedBadge');
      if (mBadge) {
        mBadge.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ' + pred.badgeColor;
        mBadge.innerHTML = \`<span>\${pred.badgeIcon}</span> \${pred.classification}\`;
      }

      // Populate Subjects Forecast
      const grid = document.getElementById('modalSubjectForecastGrid');
      const subjects = GALACTIC_DATABASE[gState.grade];
      if (grid && subjects) {
        grid.innerHTML = Object.keys(subjects).map(sKey => {
          const sObj = subjects[sKey];
          const meta = SUBJECT_METADATA[sKey] || { am: '', name: sObj.name, icon: sObj.icon };
          const sInfo = pred.subjectScores[sKey] || { score: 25, mastered: 0, total: 15, avgQuiz: 0, coveragePct: 0 };
          const barColor = sInfo.score >= 80 ? 'bg-emerald-500' : (sInfo.score >= 50 ? 'bg-cyan-500' : 'bg-amber-500');
          return \`
            <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>\${meta.icon}</span> <span>\${meta.name}</span>
                </span>
                <span class="text-xs font-mono font-black text-emerald-400">\${sInfo.score}%</span>
              </div>
              <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full \${barColor} rounded-full" style="width: \${sInfo.score}%"></div>
              </div>
              <div class="flex justify-between text-[10px] text-slate-400">
                <span>የተካኑ፦ \${sInfo.mastered}/\${sInfo.total} (\${sInfo.coveragePct}%)</span>
                <span>\${meta.am}</span>
              </div>
            </div>
          \`;
        }).join('');
      }

      // Populate Weak Topics Autopsy
      const weakContainer = document.getElementById('modalWeakTopicsContainer');
      if (weakContainer && subjects) {
        const weakList = [];
        Object.keys(subjects).forEach(sKey => {
          const sObj = subjects[sKey];
          sObj.units.forEach(u => {
            u.subtopics.forEach(st => {
              const mastered = isSubtopicMastered(st.id);
              const score = getSubtopicScore(st.id);
              if (!mastered || score < 80) {
                weakList.push({
                  grade: gState.grade,
                  subjectKey: sKey,
                  unit: u,
                  subtopic: st,
                  score: score || 0
                });
              }
            });
          });
        });

        if (weakList.length === 0) {
          weakContainer.innerHTML = \`
            <div class="p-3 rounded-xl bg-emerald-500/10 text-emerald-300 text-xs flex items-center gap-2">
              <span>🌟</span>
              <span>ድንቅ ነው! ሁሉንም ርዕሶች ከ80% በላይ በሆነ ከፍተኛ ውጤት አጠናቅቀሃል!</span>
            </div>
          \`;
        } else {
          weakContainer.innerHTML = weakList.slice(0, 3).map(w => \`
            <div class="p-3 rounded-xl bg-space-900 border border-slate-800 flex items-center justify-between gap-3 flex-wrap">
              <div>
                <span class="text-xs font-bold text-white">\${w.subtopic.code} \${w.subtopic.title}</span>
                <span class="text-[10px] text-slate-400 block">\${w.unit.number} • የአሁኑ ውጤት፦ <strong class="\${w.score > 0 ? 'text-rose-400' : 'text-slate-500'}">\${w.score > 0 ? w.score + '%' : 'ገና አልተጠናም'}</strong></span>
              </div>
              <button onclick="jumpToSubtopicFromSearch('\${w.grade}', '\${w.subjectKey}', '\${w.subtopic.id}'); closePredictorModal();" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition cursor-pointer">
                ይህን ርዕስ ጀምር ➔
              </button>
            </div>
          \`).join('');
        }
      }

      // Initialize What-If Simulator
      simulateTargetScore(15);
    }

    function closePredictorModal() {
      const modal = document.getElementById('predictorAuditModal');
      if (modal) modal.classList.add('hidden');
    }

    // Realistic What-If Goal Simulator
    function simulateTargetScore(additionalTopics) {
      const addCount = Number(additionalTopics) || 0;
      const pred = computePredictedExamScore();
      const totalCount = pred.totalCount || 92;
      const currentMastered = pred.masteredCount || 0;

      const simulatedMastered = Math.min(totalCount, currentMastered + addCount);
      const simulatedCoverage = simulatedMastered / totalCount;
      const targetAccuracy = pred.testedAccuracy > 50 ? pred.testedAccuracy : 85;

      const simulatedScore = Math.min(100, Math.round((simulatedCoverage * targetAccuracy) + ((1 - simulatedCoverage) * 25)));
      const gain = simulatedScore - pred.totalScore;

      const lbl = document.getElementById('simulatorAddTopicsLabel');
      if (lbl) lbl.innerText = \`+\${addCount} ርዕሶች\`;

      const pScore = document.getElementById('simulatorProjectedScore');
      if (pScore) pScore.innerText = \`\${simulatedScore} / 100\`;

      const pGain = document.getElementById('simulatorProjectedGain');
      if (pGain) pGain.innerText = gain >= 0 ? \`(+\${gain} ነጥብ ጭማሪ!)\` : '';

      const tBadge = document.getElementById('simulatorTargetBadge');
      if (tBadge) {
        if (simulatedScore >= 90) {
          tBadge.className = 'text-xs px-3 py-1.5 rounded-xl font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30';
          tBadge.innerText = '🏆 ግብ፦ እጅግ ከፍተኛ ማዕረግ (Very Great Distinction) ላይ ትደርሳለህ!';
        } else if (simulatedScore >= 80) {
          tBadge.className = 'text-xs px-3 py-1.5 rounded-xl font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
          tBadge.innerText = '🥇 ግብ፦ ከፍተኛ ማዕረግ (Great Distinction) ላይ ትደርሳለህ!';
        } else if (simulatedScore >= 65) {
          tBadge.className = 'text-xs px-3 py-1.5 rounded-xl font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30';
          tBadge.innerText = '🥈 ግብ፦ ማዕረግ (Distinction) ላይ ትደርሳለህ!';
        } else if (simulatedScore >= 50) {
          tBadge.className = 'text-xs px-3 py-1.5 rounded-xl font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30';
          tBadge.innerText = '🥉 ግብ፦ የፈተናውን ማለፊያ (Pass 50+) ትሻገራለህ!';
        } else {
          tBadge.className = 'text-xs px-3 py-1.5 rounded-xl font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30';
          const needed = Math.max(1, Math.round(((50 - 25) / (85 - 25)) * totalCount) - currentMastered);
          tBadge.innerText = \`⚠️ ማለፊያ (50+) ለመድረስ ቢያንስ \${needed} ተጨማሪ ርዕሶችን ማጠናቀቅ አለብህ\`;
        }
      }
    }

    function checkExamReadinessLive() {
      soundSuccess();
      renderScorePredictor();
      openPredictorModal();
      showToast('እውነተኛው የፈተና ዝግጁነት ዳሰሳ ተካሂዷል! 🎯');
    }

    // 10-Question Real Diagnostic Checkpoint
    let readinessDrillActive = false;
    let drillQuestions = [];
    let drillCurrentIdx = 0;
    let drillScore = 0;

    function startReadinessDrill() {
      soundClick();
      const container = document.getElementById('readinessDrillContainer');
      if (!container) return;
      container.classList.remove('hidden');

      const grade = gState.grade || 7;
      const subjects = GALACTIC_DATABASE[grade];
      const allQs = [];
      Object.keys(subjects).forEach(sKey => {
        subjects[sKey].units.forEach(u => {
          u.subtopics.forEach(st => {
            if (st.amtQuiz && st.amtQuiz.length > 0) {
              st.amtQuiz.forEach(q => {
                allQs.push({
                  subjectName: subjects[sKey].name,
                  subtopicCode: st.code,
                  subtopicTitle: st.title,
                  stId: st.id,
                  q: q
                });
              });
            }
          });
        });
      });

      allQs.sort(() => 0.5 - Math.random());
      drillQuestions = allQs.slice(0, 10);
      drillCurrentIdx = 0;
      drillScore = 0;
      readinessDrillActive = true;

      renderDrillQuestion();
    }

    function renderDrillQuestion() {
      const container = document.getElementById('readinessDrillContainer');
      if (!container) return;

      if (drillCurrentIdx >= drillQuestions.length) {
        soundCelebration();
        addXp(100, '10-Question Diagnostic Checkpoint');
        const pct = Math.round((drillScore / drillQuestions.length) * 100);
        
        // Record verified diagnostic performance into gState
        if (!gState.masteredSubtopics) gState.masteredSubtopics = {};
        drillQuestions.forEach(item => {
          if (!gState.masteredSubtopics[item.stId]) {
            gState.masteredSubtopics[item.stId] = pct;
          }
        });
        saveState();

        container.innerHTML = \`
          <div class="text-center py-4 space-y-3">
            <span class="text-3xl">🎉</span>
            <h4 class="text-base font-black text-white font-display">የቀጥታ ፍተሻው ተጠናቋል!</h4>
            <p class="text-xs text-slate-300">እውነተኛ ውጤት፦ <strong class="text-emerald-400 font-bold">\${drillScore} / \${drillQuestions.length} (\${pct}%)</strong></p>
            <p class="text-[11px] text-amber-300">+100 XP ተጨምሯል፤ የተገመተው ውጤትህ በእውነተኛው አፈጻጸምህ መሰረት ታድሷል!</p>
            <button onclick="document.getElementById('readinessDrillContainer').classList.add('hidden'); renderScorePredictor(); openPredictorModal();" class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer shadow-lg shadow-emerald-600/30">
              ውጤቴን መዝግብና ትንበያዬን ተመልከት ➔
            </button>
          </div>
        \`;
        return;
      }

      const item = drillQuestions[drillCurrentIdx];
      const q = item.q;

      container.innerHTML = \`
        <div class="space-y-3">
          <div class="flex items-center justify-between text-xs font-black">
            <span class="text-emerald-400">ጥያቄ \${drillCurrentIdx + 1} ከ \${drillQuestions.length} • \${item.subjectName}</span>
            <span class="text-amber-400 font-mono">\${item.subtopicCode}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-100 font-bold leading-relaxed">\${q.question}</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            \${q.options.map((opt, optIdx) => \`
              <button onclick="submitDrillAnswer(\${optIdx})" class="p-3 rounded-xl bg-space-900 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/50 text-left text-xs text-slate-200 transition cursor-pointer">
                <span class="font-bold text-emerald-400 mr-2">\${['A', 'B', 'C', 'D'][optIdx]}.</span>
                <span>\${opt}</span>
              </button>
            \`).join('')}
          </div>
        </div>
      \`;
    }

    function submitDrillAnswer(chosenIdx) {
      const item = drillQuestions[drillCurrentIdx];
      const isCorrect = chosenIdx === item.q.correctAnswer;
      if (isCorrect) {
        soundSuccess();
        drillScore++;
      } else {
        soundError();
      }
      drillCurrentIdx++;
      renderDrillQuestion();
    }

    `;

  js = js.slice(0, pLogicStart) + realisticLogic + js.slice(pLogicEnd);
  console.log('Realistic scoring logic and simulator injected into app_logic.js');
}

fs.writeFileSync(logicPath, js, 'utf8');
console.log('App logic saved.');
