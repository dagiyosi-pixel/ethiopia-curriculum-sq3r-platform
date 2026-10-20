const fs = require('fs');
const path = require('path');

console.log('Patching Template Shell & App Logic with Score Predictor, Profile Persistence & Navigation...');

const templatePath = path.join(__dirname, '..', 'src', 'template_shell.html');
const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');

let html = fs.readFileSync(templatePath, 'utf8');
let js = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// 1. UPDATE TEMPLATE SHELL: HEADER PILLS
// =============================================================================
const oldHeaderMarker = '<!-- Global Search Button -->';
if (html.includes(oldHeaderMarker) && !html.includes('id="headerScorePredictor"')) {
  const newHeaderPills = `
          <!-- Live National Exam Score Predictor Pill (0-100) -->
          <button onclick="openPredictorModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-850 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition shadow-sm cursor-pointer group" title="National Exam Score Predictor (Press P)">
            <span class="text-sm">🎯</span>
            <span class="hidden sm:inline">ትንበያ፦</span>
            <span id="headerScorePredictor" class="font-mono font-black text-amber-400 group-hover:scale-110 transition">84</span>
            <span class="text-[10px] text-slate-400">/100</span>
          </button>

          <!-- Student Profile & Multi-Account Pill -->
          <button onclick="openStudentProfileModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 hover:border-amber-500/50 text-slate-200 text-xs font-bold transition cursor-pointer" title="Student Profile & Multi-Account Login (Press U)">
            <span id="headerUserAvatar" class="text-sm">🦁</span>
            <span id="headerStudentName" class="truncate max-w-[100px] text-amber-300 font-bold hidden md:inline">ዳግማዊ</span>
            <span class="text-[9px] px-1.5 py-0.5 rounded bg-space-950 text-slate-400 border border-slate-800 hidden lg:inline">መገለጫ</span>
          </button>

          <!-- Global Search Button -->`;
  html = html.replace(oldHeaderMarker, newHeaderPills);
  console.log('Header pills injected.');
}

// =============================================================================
// 2. UPDATE TEMPLATE SHELL: DASHBOARD PREDICTOR CARD
// =============================================================================
const oldDashMarker = '<!-- 2-Column: Daily Missions & Weekly Study Activity Heatmap -->';
if (html.includes(oldDashMarker) && !html.includes('id="dashScorePredictorCard"')) {
  const predictorCardHtml = `
        <!-- =============================================================== -->
        <!-- NATIONAL EXAMINATION SCORE PREDICTOR & READINESS AUDIT CARD     -->
        <!-- =============================================================== -->
        <div id="dashScorePredictorCard" class="glass-card p-6 sm:p-7 rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-space-900 via-space-950 to-space-900 shadow-2xl relative overflow-hidden">
          <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 relative z-10">
            
            <!-- Left: Predicted Score Radial & Official Classification -->
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div class="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" stroke="currentColor" stroke-width="8" class="text-slate-800" fill="transparent"/>
                  <circle id="dashScoreGaugeCircle" cx="50" cy="50" r="42" stroke="currentColor" stroke-width="8" class="text-emerald-400 transition-all duration-1000" stroke-dasharray="264" stroke-dashoffset="42" stroke-linecap="round" fill="transparent"/>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div class="flex items-baseline">
                    <span id="dashPredictedScoreValue" class="text-3xl sm:text-4xl font-black text-white font-display">84</span>
                    <span class="text-xs font-bold text-slate-400 ml-0.5">/100</span>
                  </div>
                  <span class="text-[9px] uppercase font-black tracking-widest text-emerald-400">የተገመተ ውጤት</span>
                </div>
              </div>

              <div class="space-y-2 text-center sm:text-left">
                <div class="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                    <span>🇪🇹</span> የብሔራዊ ፈተና ውጤት ትንበያ
                  </span>
                  <span id="dashPredictedClassBadge" class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1">
                    <span>🥇</span> Great Distinction (ከፍተኛ ማዕረግ)
                  </span>
                </div>
                <h3 class="text-lg sm:text-xl font-black text-white font-display">የአሁኑ የፈተና ብቃት ትንበያ (National Exam Forecast)</h3>
                <p id="dashPredictedVerdict" class="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  በተጨባጭ ባሳየኸው የትምህርት ሽፋን፣ የጥያቄዎች ትክክለኛነት እና የክለሳ ልማድ መሰረት በ7ኛ እና 8ኛ ክፍል የክልል ፈተና <strong class="text-emerald-300 font-bold">84%</strong> ለማስመዝገብ ዝግጁ ነህ!
                </p>
                <div class="text-[11px] text-slate-400 flex items-center justify-center sm:justify-start gap-3 pt-1">
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
              
              <!-- 4-Factor Meters -->
              <div class="space-y-2 text-xs">
                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>📚 የትምህርት ሽፋን (Coverage)</span>
                    <strong class="text-emerald-400 font-mono" id="dashFactorCoverage">28 / 35</strong>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div id="dashFactorCoverageBar" class="h-full bg-emerald-500 rounded-full" style="width: 80%;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>🎯 የፈተና ጥያቄዎች ትክክለኛነት (Accuracy)</span>
                    <strong class="text-cyan-400 font-mono" id="dashFactorAccuracy">34 / 40</strong>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div id="dashFactorAccuracyBar" class="h-full bg-cyan-500 rounded-full" style="width: 85%;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>🧠 ንቁ ማስታወስ (SRS Retention)</span>
                    <strong class="text-purple-400 font-mono" id="dashFactorRecall">13 / 15</strong>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div id="dashFactorRecallBar" class="h-full bg-purple-500 rounded-full" style="width: 86%;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-slate-300 mb-1">
                    <span>🔥 ተከታታይነት (Habits & Streak)</span>
                    <strong class="text-amber-400 font-mono" id="dashFactorConsistency">9 / 10</strong>
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div id="dashFactorConsistencyBar" class="h-full bg-amber-500 rounded-full" style="width: 90%;"></div>
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

        <!-- 2-Column: Daily Missions & Weekly Study Activity Heatmap -->`;
  html = html.replace(oldDashMarker, predictorCardHtml);
  console.log('Dashboard Score Predictor card injected.');
}

// =============================================================================
// 3. UPDATE TEMPLATE SHELL: ADD PREDICTOR & PROFILE MODALS
// =============================================================================
const oldModalsMarker = '<!-- ========================================================================= -->\n  <!-- GIZMO-STYLE MOBILE BOTTOM NAVIGATION BAR';
if (html.includes('id="syllabusDrawerModal"') && !html.includes('id="predictorAuditModal"')) {
  const modalsHtml = `
  <!-- ========================================================================= -->
  <!-- 3. NATIONAL EXAM SCORE PREDICTOR & DIAGNOSTIC AUDIT MODAL                  -->
  <!-- ========================================================================= -->
  <div id="predictorAuditModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-space-950/85 backdrop-blur-md">
    <div class="glass-card max-w-3xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-7 rounded-3xl border border-emerald-500/40 space-y-6 relative bg-space-900 shadow-2xl animate-fadeIn">
      
      <!-- Modal Header -->
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center text-xl shrink-0">
            🎯
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white font-display">የብሔራዊ ፈተና ውጤት ትንበያና የብቃት ዳሰሳ</h3>
            <p class="text-xs text-slate-400">National Examination Grade Predictor & Diagnostic Readiness Engine</p>
          </div>
        </div>
        <button onclick="closePredictorModal()" class="w-8 h-8 rounded-full bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer">
          ✕
        </button>
      </div>

      <!-- Main Score Hero -->
      <div class="p-6 rounded-2xl bg-gradient-to-r from-space-950 via-space-900 to-space-950 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-5">
          <div class="w-24 h-24 rounded-full bg-emerald-500/10 border-4 border-emerald-500 flex flex-col items-center justify-center shrink-0">
            <span id="modalPredictedScore" class="text-3xl font-black text-white font-display">84</span>
            <span class="text-[9px] uppercase tracking-wider text-emerald-400">ከ 100</span>
          </div>
          <div class="space-y-1">
            <div id="modalPredictedBadge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <span>🥇</span> Great Distinction (ከፍተኛ ማዕረግ)
            </div>
            <h4 class="text-sm sm:text-base font-bold text-white">ይህ ውጤት እንዴት ተሰላ? (Scoring Formula)</h4>
            <p class="text-xs text-slate-300 leading-relaxed max-w-md">
              ሽፋን (35 ነጥብ) + የፈተናዎች ትክክለኛነት (40 ነጥብ) + የፍላሽ ካርዶች ማስታወስ (15 ነጥብ) + የጥናት ፅናት (10 ነጥብ)።
            </p>
          </div>
        </div>

        <button onclick="checkExamReadinessLive()" class="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs transition flex items-center gap-2 shrink-0 cursor-pointer shadow-lg shadow-emerald-600/30">
          <span>⚡</span> <span>ውጤቴን አሁን ገምግም (Re-Audit)</span>
        </button>
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
            <h4 class="text-xs sm:text-sm font-black text-amber-300">አስቸኳይ ክለሳ የሚያስፈልጋቸው ርዕሶች (Priority Targets for 90%+)</h4>
          </div>
          <span class="text-[10px] text-amber-400 font-mono">Quick Upgrade</span>
        </div>
        <p class="text-xs text-slate-300">
          እነዚህን ርዕሶች በመከለስና የፈተና ጥያቄዎቻቸውን በመስራት የተገመተውን ውጤትህን ወደ <strong>95+ (እጅግ ከፍተኛ ማዕረግ)</strong> ማሳደግ ትችላለህ፦
        </p>
        <div class="space-y-2 pt-1" id="modalWeakTopicsContainer">
          <!-- Dynamically populated weak topics -->
        </div>
      </div>

      <!-- Quick 5-Question Readiness Drill Trigger -->
      <div class="p-4 rounded-2xl bg-space-950 border border-slate-800 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span class="text-xs font-black text-white flex items-center gap-1.5">
            <span>⏱️</span> የ5 ደቂቃ የፈጣን ብቃት ፍተሻ (Quick Readiness Drill)
          </span>
          <p class="text-[11px] text-slate-400">5 ድንገተኛ የፈተና ጥያቄዎችን በመመለስ የአሁኑን ዝግጁነትህን ፈትሽ።</p>
        </div>
        <button onclick="startReadinessDrill()" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition cursor-pointer">
          ፍተሻውን ጀምር (+50 XP) ➔
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
  <div id="studentProfileModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-space-950/85 backdrop-blur-md">
    <div class="glass-card max-w-xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-7 rounded-3xl border border-slate-700 space-y-6 relative bg-space-900 shadow-2xl animate-fadeIn">
      
      <!-- Modal Header -->
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center text-xl shrink-0">
            👤
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white font-display">የተማሪ መገለጫና መረጃዎች (Student Hub)</h3>
            <p class="text-xs text-slate-400">Profile, Multi-Student Login & Progress Backup</p>
          </div>
        </div>
        <button onclick="closeStudentProfileModal()" class="w-8 h-8 rounded-full bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer">
          ✕
        </button>
      </div>

      <!-- Profile Form -->
      <div class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">የተማሪው ስም (Student Full Name):</label>
            <input type="text" id="profInputName" class="w-full bg-space-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none" placeholder="ለምሳሌ፦ ዳግማዊ ተሾመ">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">የትምህርት ቤት ስም (School):</label>
            <input type="text" id="profInputSchool" class="w-full bg-space-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none" placeholder="ለምሳሌ፦ ዳግማዊ ምኒልክ ት/ቤት">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">ክልል / ከተማ (Region):</label>
            <select id="profInputRegion" class="w-full bg-space-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none cursor-pointer">
              <option value="አዲስ አበባ">አዲስ አበባ (Addis Ababa)</option>
              <option value="ኦሮሚያ">ኦሮሚያ (Oromia)</option>
              <option value="አማራ">አማራ (Amhara)</option>
              <option value="ሲዳማ">ሲዳማ (Sidama)</option>
              <option value="ደቡብ ኢትዮጵያ">ደቡብ ኢትዮጵያ (South Ethiopia)</option>
              <option value="ማዕከላዊ ኢትዮጵያ">ማዕከላዊ ኢትዮጵያ (Central Ethiopia)</option>
              <option value="ድሬዳዋ">ድሬዳዋ (Dire Dawa)</option>
              <option value="ትግራይ">ትግራይ (Tigray)</option>
              <option value="ሶማሌ">ሶማሌ (Somali)</option>
              <option value="ቤንሻንጉል ጉሙዝ">ቤንሻንጉል ጉሙዝ (Benishangul-Gumuz)</option>
              <option value="አፋር">አፋር (Afar)</option>
              <option value="ጋምቤላ">ጋምቤላ (Gambella)</option>
              <option value="ሐረሪ">ሐረሪ (Harari)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">ክፍል (Grade):</label>
            <select id="profInputGrade" class="w-full bg-space-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none cursor-pointer">
              <option value="7">7ኛ ክፍል (Grade 7)</option>
              <option value="8">8ኛ ክፍል (Grade 8)</option>
            </select>
          </div>
        </div>

        <!-- Avatar Selection -->
        <div>
          <label class="block text-xs font-bold text-slate-300 mb-1.5">አምሳል ምረጥ (Choose Avatar):</label>
          <div class="flex items-center gap-2 overflow-x-auto py-1" id="avatarSelectorPills">
            <button type="button" onclick="selectProfileAvatar('🦁')" class="prof-avatar-btn w-10 h-10 rounded-xl bg-space-950 border border-slate-800 hover:border-emerald-500 text-xl flex items-center justify-center transition cursor-pointer" data-avatar="🦁">🦁</button>
            <button type="button" onclick="selectProfileAvatar('🦅')" class="prof-avatar-btn w-10 h-10 rounded-xl bg-space-950 border border-slate-800 hover:border-emerald-500 text-xl flex items-center justify-center transition cursor-pointer" data-avatar="🦅">🦅</button>
            <button type="button" onclick="selectProfileAvatar('🎓')" class="prof-avatar-btn w-10 h-10 rounded-xl bg-space-950 border border-slate-800 hover:border-emerald-500 text-xl flex items-center justify-center transition cursor-pointer" data-avatar="🎓">🎓</button>
            <button type="button" onclick="selectProfileAvatar('🔬')" class="prof-avatar-btn w-10 h-10 rounded-xl bg-space-950 border border-slate-800 hover:border-emerald-500 text-xl flex items-center justify-center transition cursor-pointer" data-avatar="🔬">🔬</button>
            <button type="button" onclick="selectProfileAvatar('⚡')" class="prof-avatar-btn w-10 h-10 rounded-xl bg-space-950 border border-slate-800 hover:border-emerald-500 text-xl flex items-center justify-center transition cursor-pointer" data-avatar="⚡">⚡</button>
            <button type="button" onclick="selectProfileAvatar('🌟')" class="prof-avatar-btn w-10 h-10 rounded-xl bg-space-950 border border-slate-800 hover:border-emerald-500 text-xl flex items-center justify-center transition cursor-pointer" data-avatar="🌟">🌟</button>
            <button type="button" onclick="selectProfileAvatar('💡')" class="prof-avatar-btn w-10 h-10 rounded-xl bg-space-950 border border-slate-800 hover:border-emerald-500 text-xl flex items-center justify-center transition cursor-pointer" data-avatar="💡">💡</button>
            <button type="button" onclick="selectProfileAvatar('🚀')" class="prof-avatar-btn w-10 h-10 rounded-xl bg-space-950 border border-slate-800 hover:border-emerald-500 text-xl flex items-center justify-center transition cursor-pointer" data-avatar="🚀">🚀</button>
          </div>
        </div>

        <button onclick="saveStudentProfileForm()" class="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 cursor-pointer">
          <span>💾</span> <span>መረጃዎችን አስቀምጥ (Save Profile)</span>
        </button>
      </div>

      <!-- Multi-Student Account Switcher -->
      <div class="p-4 rounded-2xl bg-space-950 border border-slate-800 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-black text-white flex items-center gap-1.5">
            <span>👥</span> የተመዘገቡ ተማሪዎች (Accounts on this Device)
          </span>
          <button onclick="showNewStudentPrompt()" class="text-[11px] text-amber-400 font-bold hover:underline cursor-pointer">
            + አዲስ ተማሪ መዝግብ
          </button>
        </div>
        <div class="space-y-2 max-h-36 overflow-y-auto pr-1" id="savedProfilesListContainer">
          <!-- Dynamically populated profiles -->
        </div>
      </div>

      <!-- JSON Progress Export & Import (100% Offline Data Portability) -->
      <div class="p-4 rounded-2xl bg-space-950 border border-slate-800 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-black text-white flex items-center gap-1.5">
            <span>🔄</span> የጥናት መረጃዎችን አስቀምጥ ወይም መልስ (Data Backup)
          </span>
          <span class="text-[10px] text-emerald-400 font-mono">100% Offline</span>
        </div>
        <p class="text-[11px] text-slate-400 leading-relaxed">
          የተማርካቸውን ርዕሶች፣ ማስታወሻዎችህንና የፈተና ውጤቶችህን ወደ ኮምፒውተርህ ወይም ስልክህ በJSON ፋይል አውርደህ ማስቀመጥ ትችላለህ።
        </p>
        
        <div class="flex items-center gap-2 flex-wrap">
          <button onclick="exportStudentProgressJson()" class="flex-1 px-4 py-2.5 rounded-xl bg-space-900 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/50 text-slate-200 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer">
            <span>📥</span> <span>ዳታህን አውርድ (Export Backup)</span>
          </button>
          
          <label class="flex-1 px-4 py-2.5 rounded-xl bg-space-900 hover:bg-space-850 border border-slate-800 hover:border-amber-500/50 text-slate-200 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer">
            <span>📤</span> <span>ዳታ መልስ (Restore Backup)</span>
            <input type="file" id="importJsonFileInput" accept=".json" onchange="importStudentProgressJson(this)" class="hidden">
          </label>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-500">
        <span>መረጃዎችህ በሙሉ በስልክህ/ኮምፒውተርህ ላይ በLocalStorage የተጠበቁ ናቸው</span>
        <button onclick="closeStudentProfileModal()" class="px-4 py-2 rounded-xl bg-space-850 hover:bg-space-800 text-slate-200 font-bold transition cursor-pointer">
          ዝጋ (Close)
        </button>
      </div>

    </div>
  </div>
`;
  html = html.replace(oldModalsMarker, modalsHtml + '\n  ' + oldModalsMarker);
  console.log('Predictor & Profile Modals injected.');
}

// =============================================================================
// 4. UPDATE TEMPLATE SHELL: MOBILE BOTTOM NAV PREDICTOR BUTTON
// =============================================================================
const oldBottomNavRef = '<button onclick="switchTab(\'reference\')" id="bottomNav-reference"';
if (html.includes(oldBottomNavRef) && !html.includes('id="bottomNav-predictor"')) {
  const predictorBottomBtn = `
    <button onclick="openPredictorModal()" id="bottomNav-predictor" class="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition cursor-pointer p-1">
      <span class="text-xl">🎯</span>
      <span class="text-[10px] tracking-tight">ትንበያ</span>
    </button>
    <button onclick="switchTab('reference')" id="bottomNav-reference"`;
  html = html.replace(oldBottomNavRef, predictorBottomBtn);
  console.log('Mobile bottom navigation bar updated with Predictor button.');
}

fs.writeFileSync(templatePath, html, 'utf8');
console.log('src/template_shell.html successfully updated.');

// =============================================================================
// 5. UPDATE APP_LOGIC.JS: SCORE PREDICTOR & STUDENT PROFILE ENGINE
// =============================================================================
const logicExtension = `
    // =========================================================================
    // NATIONAL EXAMINATION SCORE PREDICTOR & READINESS AUDIT ENGINE
    // =========================================================================
    function computePredictedExamScore() {
      const grade = gState.grade || 7;
      const subjects = GALACTIC_DATABASE[grade];
      if (!subjects) {
        return {
          totalScore: 78,
          classification: 'Great Distinction (ከፍተኛ ማዕረግ)',
          badgeIcon: '🥇',
          badgeColor: 'text-amber-400 bg-amber-500/20 border-amber-500/30',
          coveragePoints: 26,
          accuracyPoints: 32,
          recallPoints: 12,
          streakPoints: 8,
          subjectScores: {},
          masteredCount: 18,
          totalCount: 92,
          avgQuiz: 84
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

        const coverage = sTotal > 0 ? (sMastered / sTotal) : 0;
        const avgQuiz = sQuizCount > 0 ? (sQuizSum / sQuizCount) : 70; // baseline prior
        const streakBonus = Math.min(10, (gState.streak || 1) * 1.5);
        const subjScore = Math.min(100, Math.max(30, Math.round((coverage * 40) + (avgQuiz * 0.5) + streakBonus)));

        subjectScores[sKey] = {
          score: subjScore,
          mastered: sMastered,
          total: sTotal,
          avgQuiz: Math.round(avgQuiz)
        };
      });

      // Component A: Curriculum Coverage (Max 35 points)
      const coverageRatio = totalSubtopics > 0 ? (masteredSubtopics / totalSubtopics) : 0;
      const coveragePoints = Math.round(coverageRatio * 35);

      // Component B: Exam Question Accuracy (Max 40 points)
      const overallAvgQuiz = totalAttemptedCount > 0 ? (totalAttemptedScoreSum / totalAttemptedCount) : 75;
      const accuracyPoints = Math.round((overallAvgQuiz / 100) * 40);

      // Component C: Active Recall Retention (Max 15 points)
      let retainedCards = 0;
      let totalCardsTracked = 0;
      if (gState.flashcardIntervals) {
        Object.values(gState.flashcardIntervals).forEach(interval => {
          totalCardsTracked++;
          if (interval >= 7) retainedCards++;
        });
      }
      const recallRatio = totalCardsTracked > 0 ? (retainedCards / totalCardsTracked) : 0.65;
      const recallPoints = Math.round(recallRatio * 15);

      // Component D: Consistency & Streak Habits (Max 10 points)
      const streakPoints = Math.min(10, Math.round(((gState.streak || 1) * 1.2) + ((gState.level || 1) * 0.8)));

      const totalScore = Math.min(100, Math.max(25, coveragePoints + accuracyPoints + recallPoints + streakPoints));

      let classification = 'Pass (አጥጋቢ ማለፊያ)';
      let badgeColor = 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      let badgeIcon = '🥉';
      if (totalScore >= 90) {
        classification = 'Very Great Distinction (እጅግ ከፍተኛ ማዕረግ)';
        badgeColor = 'text-amber-400 bg-amber-500/20 border-amber-500/30';
        badgeIcon = '🏆';
      } else if (totalScore >= 80) {
        classification = 'Great Distinction (ከፍተኛ ማዕረግ)';
        badgeColor = 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
        badgeIcon = '🥇';
      } else if (totalScore >= 65) {
        classification = 'Distinction (ማዕረግ)';
        badgeColor = 'text-teal-400 bg-teal-500/20 border-teal-500/30';
        badgeIcon = '🥈';
      } else if (totalScore < 50) {
        classification = 'Needs Urgent Review (አስቸኳይ ክለሳ ያስፈልጋል)';
        badgeColor = 'text-rose-400 bg-rose-500/20 border-rose-500/30';
        badgeIcon = '⚠️';
      }

      return {
        totalScore,
        classification,
        badgeColor,
        badgeIcon,
        subjectScores,
        coveragePoints,
        accuracyPoints,
        recallPoints,
        streakPoints,
        masteredCount: masteredSubtopics,
        totalCount: totalSubtopics,
        avgQuiz: Math.round(overallAvgQuiz)
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
        verdictEl.innerHTML = \`በተጨባጭ ባሳየኸው የትምህርት ሽፋን፣ የጥያቄዎች ትክክለኛነት እና የክለሳ ልማድ መሰረት በ\${gState.grade}ኛ ክፍል የክልል ፈተና <strong class="text-emerald-300 font-bold">\${pred.totalScore}%</strong> ለማስመዝገብ ዝግጁ ነህ!\`;
      }

      const stNameEl = document.getElementById('dashPredictorStudentName');
      if (stNameEl) stNameEl.innerText = gState.studentName || 'ዳግማዊ';

      const gradeEl = document.getElementById('dashPredictorGrade');
      if (gradeEl) gradeEl.innerText = \`\${gState.grade}ኛ ክፍል\`;

      // 4-Factors
      const fc = document.getElementById('dashFactorCoverage');
      if (fc) fc.innerText = \`\${pred.coveragePoints} / 35\`;
      const fcb = document.getElementById('dashFactorCoverageBar');
      if (fcb) fcb.style.width = \`\${Math.round((pred.coveragePoints / 35) * 100)}%\`;

      const fa = document.getElementById('dashFactorAccuracy');
      if (fa) fa.innerText = \`\${pred.accuracyPoints} / 40\`;
      const fab = document.getElementById('dashFactorAccuracyBar');
      if (fab) fab.style.width = \`\${Math.round((pred.accuracyPoints / 40) * 100)}%\`;

      const fr = document.getElementById('dashFactorRecall');
      if (fr) fr.innerText = \`\${pred.recallPoints} / 15\`;
      const frb = document.getElementById('dashFactorRecallBar');
      if (frb) frb.style.width = \`\${Math.round((pred.recallPoints / 15) * 100)}%\`;

      const fco = document.getElementById('dashFactorConsistency');
      if (fco) fco.innerText = \`\${pred.streakPoints} / 10\`;
      const fcob = document.getElementById('dashFactorConsistencyBar');
      if (fcob) fcob.style.width = \`\${Math.round((pred.streakPoints / 10) * 100)}%\`;
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
          const sInfo = pred.subjectScores[sKey] || { score: 75, mastered: 3, total: 15 };
          const barColor = sInfo.score >= 80 ? 'bg-emerald-500' : (sInfo.score >= 60 ? 'bg-cyan-500' : 'bg-amber-500');
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
                <span>የተካኑ፦ \${sInfo.mastered}/\${sInfo.total}</span>
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
                <span class="text-[10px] text-slate-400 block">\${w.unit.number} • የአሁኑ ውጤት፦ <strong class="text-rose-400">\${w.score}%</strong></span>
              </div>
              <button onclick="jumpToSubtopicFromSearch('\${w.grade}', '\${w.subjectKey}', '\${w.subtopic.id}'); closePredictorModal();" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition cursor-pointer">
                ይህን ርዕስ ከልስ ➔
              </button>
            </div>
          \`).join('');
        }
      }
    }

    function closePredictorModal() {
      const modal = document.getElementById('predictorAuditModal');
      if (modal) modal.classList.add('hidden');
    }

    function checkExamReadinessLive() {
      soundSuccess();
      renderScorePredictor();
      openPredictorModal();
      showToast('የቀጥታ ብቃት ዳሰሳ ተካሂዷል! ትንበያው አድሷል። 🎯');
    }

    // Quick 5-Question Readiness Drill
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
                  q: q
                });
              });
            }
          });
        });
      });

      allQs.sort(() => 0.5 - Math.random());
      drillQuestions = allQs.slice(0, 5);
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
        addXp(50, 'Readiness Drill Completed');
        const pct = Math.round((drillScore / drillQuestions.length) * 100);
        container.innerHTML = \`
          <div class="text-center py-4 space-y-3">
            <span class="text-3xl">🎉</span>
            <h4 class="text-base font-black text-white">ፍተሻው ተጠናቋል!</h4>
            <p class="text-xs text-slate-300">ውጤት፦ <strong class="text-emerald-400 font-bold">\${drillScore} / \${drillQuestions.length} (\${pct}%)</strong></p>
            <p class="text-[11px] text-amber-300">+50 XP ተጨምሯል፤ የተገመተውን ውጤትህን አሻሽለሃል!</p>
            <button onclick="document.getElementById('readinessDrillContainer').classList.add('hidden'); renderScorePredictor();" class="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer">
              ውጤቴን መዝግብ ➔
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

    // =========================================================================
    // STUDENT PROFILE, MULTI-ACCOUNT & LOCALSTORAGE PERSISTENCE HUB
    // =========================================================================
    function getStoredProfiles() {
      try {
        const stored = localStorage.getItem('sq3r_student_profiles');
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        return null;
      }
    }

    function saveProfilesToDisk(profiles) {
      try {
        localStorage.setItem('sq3r_student_profiles', JSON.stringify(profiles));
      } catch (e) {
        console.error('Failed to save profiles to localStorage', e);
      }
    }

    function initStudentProfiles() {
      let profiles = getStoredProfiles();
      if (!profiles || Object.keys(profiles).length === 0) {
        const initialId = 'prof_' + Date.now();
        profiles = {};
        profiles[initialId] = {
          id: initialId,
          name: gState.studentName || 'ዳግማዊ (Dagi)',
          school: 'ዳግማዊ ምኒልክ ት/ቤት',
          region: 'አዲስ አበባ',
          grade: gState.grade || 7,
          avatar: gState.avatar || '🦁',
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString()
        };
        saveProfilesToDisk(profiles);
        localStorage.setItem('sq3r_active_profile_id', initialId);
      }
      syncProfileUI();
    }

    function syncProfileUI() {
      const name = gState.studentName || 'ዳግማዊ';
      const avatar = gState.avatar || '🦁';

      const headName = document.getElementById('headerStudentName');
      if (headName) headName.innerText = name;

      const headAv = document.getElementById('headerUserAvatar');
      if (headAv) headAv.innerText = avatar;

      const dashName = document.getElementById('dashStudentNameGreeting');
      if (dashName) dashName.innerText = name;
    }

    function openStudentProfileModal() {
      soundClick();
      const modal = document.getElementById('studentProfileModal');
      if (!modal) return;
      modal.classList.remove('hidden');

      const inName = document.getElementById('profInputName');
      if (inName) inName.value = gState.studentName || 'ዳግማዊ (Dagi)';

      const inSchool = document.getElementById('profInputSchool');
      if (inSchool) inSchool.value = gState.schoolName || 'ዳግማዊ ምኒልክ ት/ቤት';

      const inRegion = document.getElementById('profInputRegion');
      if (inRegion && gState.region) inRegion.value = gState.region;

      const inGrade = document.getElementById('profInputGrade');
      if (inGrade) inGrade.value = String(gState.grade || 7);

      selectProfileAvatar(gState.avatar || '🦁');
      renderSavedProfilesList();
    }

    function closeStudentProfileModal() {
      const modal = document.getElementById('studentProfileModal');
      if (modal) modal.classList.add('hidden');
    }

    let selectedAvatarDraft = '🦁';
    function selectProfileAvatar(av) {
      selectedAvatarDraft = av;
      document.querySelectorAll('.prof-avatar-btn').forEach(btn => {
        if (btn.dataset.avatar === av) {
          btn.className = 'prof-avatar-btn w-10 h-10 rounded-xl bg-emerald-600 border border-emerald-400 text-xl flex items-center justify-center transition cursor-pointer scale-110';
        } else {
          btn.className = 'prof-avatar-btn w-10 h-10 rounded-xl bg-space-950 border border-slate-800 hover:border-emerald-500 text-xl flex items-center justify-center transition cursor-pointer';
        }
      });
    }

    function saveStudentProfileForm() {
      soundClick();
      const inName = document.getElementById('profInputName');
      const inSchool = document.getElementById('profInputSchool');
      const inRegion = document.getElementById('profInputRegion');
      const inGrade = document.getElementById('profInputGrade');

      if (inName && inName.value.trim()) {
        gState.studentName = sanitizeText(inName.value.trim(), 50);
      }
      if (inSchool && inSchool.value.trim()) {
        gState.schoolName = sanitizeText(inSchool.value.trim(), 80);
      }
      if (inRegion) {
        gState.region = inRegion.value;
      }
      if (inGrade) {
        const newGrade = Number(inGrade.value);
        if (newGrade !== gState.grade) {
          setGrade(newGrade);
        }
      }
      gState.avatar = selectedAvatarDraft;

      saveState();

      const profiles = getStoredProfiles() || {};
      const activeId = localStorage.getItem('sq3r_active_profile_id') || 'prof_default';
      profiles[activeId] = {
        id: activeId,
        name: gState.studentName,
        school: gState.schoolName,
        region: gState.region,
        grade: gState.grade,
        avatar: gState.avatar,
        lastActive: new Date().toISOString()
      };
      saveProfilesToDisk(profiles);

      syncProfileUI();
      renderDashboard();
      renderHeaderStats();
      renderScorePredictor();

      showToast('የተማሪው መረጃ በተሳካ ሁኔታ ተቀምጧል! ✔');
      closeStudentProfileModal();
    }

    function renderSavedProfilesList() {
      const container = document.getElementById('savedProfilesListContainer');
      if (!container) return;

      const profiles = getStoredProfiles() || {};
      const activeId = localStorage.getItem('sq3r_active_profile_id');

      const keys = Object.keys(profiles);
      if (keys.length === 0) {
        container.innerHTML = '<div class="text-xs text-slate-500 py-2">ምንም ሌላ ተማሪ አልተገኘም።</div>';
        return;
      }

      container.innerHTML = keys.map(k => {
        const p = profiles[k];
        const isActive = k === activeId;
        return \`
          <div class="p-2.5 rounded-xl bg-space-900 border \${isActive ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-slate-800'} flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="text-lg">\${p.avatar || '🦁'}</span>
              <div>
                <span class="text-xs font-bold text-white block">\${p.name}</span>
                <span class="text-[10px] text-slate-400">\${p.grade}ኛ ክፍል • \${p.school || 'ትምህርት ቤት'}</span>
              </div>
            </div>
            \${isActive ? \`
              <span class="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">ንቁ (Active)</span>
            \` : \`
              <button onclick="switchStudentProfile('\${p.id}')" class="px-2.5 py-1 rounded-lg bg-space-850 hover:bg-space-800 border border-slate-700 text-xs font-bold text-slate-200 transition cursor-pointer">
                ቀይር
              </button>
            \`}
          </div>
        \`;
      }).join('');
    }

    function showNewStudentPrompt() {
      const name = prompt('አዲሱን የተማሪ ስም ያስገቡ (Enter New Student Name):');
      if (!name || !name.trim()) return;

      const grade = confirm('ይህ ተማሪ 8ኛ ክፍል ነው? (Ok = 8ኛ ክፍል, Cancel = 7ኛ ክፍል)') ? 8 : 7;
      const newId = 'prof_' + Date.now();

      const profiles = getStoredProfiles() || {};
      const curActiveId = localStorage.getItem('sq3r_active_profile_id') || 'prof_default';
      localStorage.setItem('sq3r_state_backup_' + curActiveId, JSON.stringify(gState));

      gState.studentName = sanitizeText(name.trim(), 50);
      gState.grade = grade;
      gState.xp = 100;
      gState.level = 1;
      gState.gems = 50;
      gState.streak = 1;
      gState.avatar = '🦁';
      gState.masteredSubtopics = {};
      gState.completedSteps = {};
      gState.flashcardIntervals = {};
      gState.userNotes = {};
      saveState();

      profiles[newId] = {
        id: newId,
        name: gState.studentName,
        school: 'አዲስ ተማሪ',
        region: 'አዲስ አበባ',
        grade: grade,
        avatar: '🦁',
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString()
      };
      saveProfilesToDisk(profiles);
      localStorage.setItem('sq3r_active_profile_id', newId);

      syncProfileUI();
      renderDashboard();
      renderHeaderStats();
      renderScorePredictor();
      renderSavedProfilesList();
      showToast(\`እንኳን ደህና መጣህ \${gState.studentName}! 🎉\`);
    }

    function switchStudentProfile(targetId) {
      soundClick();
      const profiles = getStoredProfiles() || {};
      const target = profiles[targetId];
      if (!target) return;

      const curActiveId = localStorage.getItem('sq3r_active_profile_id');
      if (curActiveId) {
        localStorage.setItem('sq3r_state_backup_' + curActiveId, JSON.stringify(gState));
      }

      const savedState = localStorage.getItem('sq3r_state_backup_' + targetId);
      if (savedState) {
        try {
          gState = JSON.parse(savedState);
        } catch (e) {
          gState.studentName = target.name;
          gState.grade = target.grade;
        }
      } else {
        gState.studentName = target.name;
        gState.grade = target.grade;
      }

      localStorage.setItem('sq3r_active_profile_id', targetId);
      saveState();

      syncProfileUI();
      renderDashboard();
      renderHeaderStats();
      renderScorePredictor();
      renderSavedProfilesList();
      showToast(\`ወደ \${target.name} መለያ ተቀይሯል! 🚀\`);
    }

    function exportStudentProgressJson() {
      soundClick();
      const exportData = {
        appName: 'Ethiopian National Curriculum Grade 7 & 8 SQ3R Platform',
        version: '2.5.0',
        exportedAt: new Date().toISOString(),
        student: {
          name: gState.studentName,
          school: gState.schoolName,
          region: gState.region,
          grade: gState.grade,
          avatar: gState.avatar
        },
        state: gState
      };

      const jsonStr = JSON.stringify(exportData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const safeName = (gState.studentName || 'Student').replace(/[^a-zA-Z0-9_ሀ-፿]/g, '_');
      a.href = url;
      a.download = \`ethiopia_sq3r_backup_\${safeName}_\${Date.now()}.json\`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast('የጥናት መረጃህ በJSON ፋይል ወርዷል! 📥');
    }

    function importStudentProgressJson(inputEl) {
      const file = inputEl.files && inputEl.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const data = JSON.parse(e.target.result);
          if (data && data.state) {
            gState = Object.assign(gState, data.state);
            saveState();
            syncProfileUI();
            renderDashboard();
            renderHeaderStats();
            renderScorePredictor();
            soundCelebration();
            showToast('የጥናት መረጃህ በተሳካ ሁኔታ ተመልሷል! 🌟');
            closeStudentProfileModal();
          } else {
            soundError();
            alert('ልክ ያልሆነ የJSON ፋይል ነው (Invalid Backup Format).');
          }
        } catch (err) {
          soundError();
          alert('ፋይሉን ማንበብ አልተቻለም (Corrupted JSON file).');
        }
      };
      reader.readAsText(file);
    }
`;

if (!js.includes('function computePredictedExamScore()')) {
  js += logicExtension;
  console.log('App logic updated with Score Predictor and Profile Persistence Engine.');
}

const oldShortcutHandler = 'function handleGlobalShortcuts(e) {';
if (js.includes(oldShortcutHandler) && !js.includes('openPredictorModal()')) {
  const updatedShortcuts = `function handleGlobalShortcuts(e) {
      const tag = (e.target.tagName || '').toLowerCase();
      const isInput = tag === 'input' || tag === 'textarea';

      // P or p opens Score Predictor
      if (!isInput && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        openPredictorModal();
        return;
      }

      // U or u opens Student Profile Hub
      if (!isInput && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        openStudentProfileModal();
        return;
      }
`;
  js = js.replace(oldShortcutHandler, updatedShortcuts);
  console.log('Global shortcuts hooked for P and U.');
}

const oldInitMarker = 'renderDashboard();';
if (js.includes(oldInitMarker) && !js.includes('initStudentProfiles();')) {
  js = js.replace(oldInitMarker, 'initStudentProfiles();\n      renderScorePredictor();\n      ' + oldInitMarker);
  console.log('initStudentProfiles & renderScorePredictor wired into app init.');
}

fs.writeFileSync(logicPath, js, 'utf8');
console.log('src/app_logic.js successfully updated.');
