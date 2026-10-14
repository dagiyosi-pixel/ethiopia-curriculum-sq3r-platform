const fs = require('fs');
const path = require('path');

console.log('Beginning Transformation to World-Class SQ3R Learning Platform...');

const rootDir = path.join(__dirname, '..');
const shellPath = path.join(rootDir, 'src', 'template_shell.html');
const logicPath = path.join(rootDir, 'src', 'app_logic.js');

let shell = fs.readFileSync(shellPath, 'utf8');
let logic = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// 1. UPDATE NAVIGATION IN template_shell.html
// =============================================================================
const oldNavBlock = `<button onclick="switchTab('sq3r')" id="tabBtn-sq3r" class="tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap">
            <span>📖</span> SQ3R የጥናት ስልት (Study Studio)
          </button>`;

const newNavBlock = `<button onclick="switchTab('dashboard')" id="tabBtn-dashboard" class="tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap cursor-pointer">
            <span>🏠</span> ዳሽቦርድ (Command Center)
          </button>
          <button onclick="switchTab('sq3r')" id="tabBtn-sq3r" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer">
            <span>📖</span> SQ3R የጥናት ስቱዲዮ (Study Studio)
          </button>`;

if (!shell.includes('id="tabBtn-dashboard"')) {
  shell = shell.replace(oldNavBlock, newNavBlock);
  console.log('1. Dashboard tab button inserted as primary navigation item.');
} else {
  console.log('1. Dashboard tab button already present.');
}

// =============================================================================
// 2. INSERT HOME DASHBOARD VIEW SECTION IN template_shell.html
// =============================================================================
const dashboardSectionHtml = `      <!-- =============================================================== -->
      <!-- VIEW 0: PERSONAL LEARNING COMMAND CENTER (HOME DASHBOARD)       -->
      <!-- =============================================================== -->
      <section id="view-dashboard" class="tab-view block space-y-6">
        
        <!-- Welcome Hero & Quick Resume Card -->
        <div class="glass-crest p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-emerald-500/40 bg-gradient-to-br from-space-900 via-emerald-950/30 to-space-950 shadow-2xl">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div class="space-y-3">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-3 py-1 rounded-full text-xs font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>PERSONAL COMMAND CENTER</span>
                </span>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                  <span id="dashStreakBadge">🔥 5-Day Active Streak</span>
                </span>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                  <span id="dashRankBadge">Apprentice Scholar</span>
                </span>
              </div>
              
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-display">
                እንኳን ደህና መጣህ፣ <span id="dashStudentNameGreeting" class="text-amber-400">ዳግማዊ</span>! 🌟
              </h2>
              
              <p class="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                የዛሬው የጥናት ግብህ ተዘጋጅቷል። በSQ3R ስልት ፅንሰ-ሀሳቦችን በጥልቀት በመመርመር፣ ጥያቄዎችን በመቅረፅ እና የአዕምሮ ማህደረ-ትውስታህን በማዳበር ወደ ላቀ የአካዳሚክ ደረጃ ተሸጋገር።
              </p>

              <!-- Current Focus Goal Pill -->
              <div class="pt-2 flex items-center gap-3 flex-wrap">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">የአሁኑ ንቁ ርዕስ (Target Topic):</span>
                <span id="dashActiveTopicPill" class="text-xs font-black text-emerald-300 bg-space-950 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                  ሒሳብ • ምዕራፍ 1: Rational Numbers
                </span>
              </div>
            </div>

            <!-- Primary Action Call to Action -->
            <div class="shrink-0 flex flex-col items-center sm:items-end justify-center gap-3">
              <button onclick="resumeLastActivity()" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center justify-center gap-3 cursor-pointer border border-emerald-400/40">
                <span>🚀</span>
                <span>ትምህርቱን ቀጥል (Continue Learning)</span>
                <span>➔</span>
              </button>
              <span class="text-[11px] text-slate-400 font-medium">ካቆምክበት ምዕራፍ በቀጥታ ይጀምራል (Resumes exact position)</span>
            </div>
          </div>
        </div>

        <!-- 4-Stat Metric Tiles Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="glass-card p-5 rounded-2xl border-l-4 border-emerald-500 space-y-1">
            <div class="text-xs text-slate-400 font-bold uppercase tracking-wider">የትምህርት ሽፋን (Progress)</div>
            <div class="text-2xl sm:text-3xl font-black text-white font-display" id="dashMetricProgress">24%</div>
            <div class="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <span>📚</span> <span id="dashMetricUnits">23 / 96 ምዕራፎች ተጠናቀዋል</span>
            </div>
          </div>

          <div class="glass-card p-5 rounded-2xl border-l-4 border-amber-500 space-y-1">
            <div class="text-xs text-slate-400 font-bold uppercase tracking-wider">የተካኑ ርዕሶች (Mastered)</div>
            <div class="text-2xl sm:text-3xl font-black text-amber-400 font-display" id="dashMetricMastered">18</div>
            <div class="text-[11px] text-amber-300/90 font-medium flex items-center gap-1">
              <span>⭐</span> <span>≥80% የማለፊያ ነጥብ የተመዘገበባቸው</span>
            </div>
          </div>

          <div class="glass-card p-5 rounded-2xl border-l-4 border-cyan-500 space-y-1">
            <div class="text-xs text-slate-400 font-bold uppercase tracking-wider">የፈተና ትክክለኛነት (Accuracy)</div>
            <div class="text-2xl sm:text-3xl font-black text-cyan-400 font-display" id="dashMetricAccuracy">88%</div>
            <div class="text-[11px] text-cyan-300/90 font-medium flex items-center gap-1">
              <span>🎯</span> <span>577 የAMT ጥያቄዎች ባንክ</span>
            </div>
          </div>

          <div class="glass-card p-5 rounded-2xl border-l-4 border-purple-500 space-y-1">
            <div class="text-xs text-slate-400 font-bold uppercase tracking-wider">የክለሳ ካርዶች (Due for Review)</div>
            <div class="text-2xl sm:text-3xl font-black text-purple-400 font-display" id="dashMetricReviewDue">6</div>
            <div class="text-[11px] text-purple-300/90 font-medium flex items-center gap-1">
              <span>🧠</span> <span>Spaced Repetition Active</span>
            </div>
          </div>
        </div>

        <!-- 2-Column: Daily Missions & Weekly Study Activity Heatmap -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- Column 1: Daily Quests Panel (2 spans on desktop) -->
          <div class="lg:col-span-2 glass-card p-6 sm:p-7 rounded-3xl space-y-5 border border-slate-800">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
              <div class="flex items-center gap-2.5">
                <span class="text-2xl">🎯</span>
                <div>
                  <h3 class="text-base sm:text-lg font-black text-white font-display">የዛሬው የጥናት ተልዕኮዎች (Daily Missions)</h3>
                  <p class="text-xs text-slate-400">3 achievable goals designed by learning science to build daily study habits.</p>
                </div>
              </div>
              <span class="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20" id="dashQuestsEarnedXp">+190 XP Available</span>
            </div>

            <!-- Daily Quests List -->
            <div class="space-y-3.5" id="dashMissionsContainer">
              <!-- Dynamically populated daily quests -->
            </div>
          </div>

          <!-- Column 2: Weekly Activity Heatmap & Consistency Radar -->
          <div class="glass-card p-6 rounded-3xl space-y-5 border border-slate-800 flex flex-col justify-between">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-xl">🔥</span>
                <h4 class="text-sm font-black text-white font-display">የሳምንቱ የጥናት እንቅስቃሴ (Weekly Study Radar)</h4>
              </div>
              <p class="text-xs text-slate-400">Daily consistency produces 3x higher exam retention.</p>
            </div>

            <!-- Visual 7-Day Heatmap Grid -->
            <div class="p-4 rounded-2xl bg-space-950 border border-slate-850 space-y-3">
              <div class="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-slate-400 font-mono">
                <div>ሰኞ<br>(Mon)</div>
                <div>ማክ<br>(Tue)</div>
                <div>ረቡ<br>(Wed)</div>
                <div>ሐሙ<br>(Thu)</div>
                <div>አርብ<br>(Fri)</div>
                <div>ቅዳ<br>(Sat)</div>
                <div>እሁድ<br>(Sun)</div>
              </div>
              <div class="grid grid-cols-7 gap-2" id="dashHeatmapTiles">
                <!-- 7 interactive colored tiles -->
              </div>
            </div>

            <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>ይህ ሳምንት (This Week): <strong class="text-emerald-400 font-bold" id="dashWeeklyStudyTime">4h 25m</strong></span>
              <span class="text-amber-400 font-bold flex items-center gap-1"><span>⚡</span> Streak: Active</span>
            </div>
          </div>

        </div>

        <!-- Subject Exploration Cards Matrix (Grade 7 & 8) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2 font-display">
                <span>📚</span> የትምህርት ክፍለ-ጊዜዎች (Syllabus Exploration)
              </h3>
              <p class="text-xs text-slate-400">Choose any subject to begin a guided SQ3R study mission.</p>
            </div>

            <!-- Grade Toggle Buttons on Dashboard -->
            <div class="flex items-center gap-2 bg-space-950 p-1 rounded-xl border border-slate-800">
              <button onclick="setGrade(7); renderDashboard();" id="dashGradeToggle-7" class="px-3 py-1 rounded-lg text-xs font-bold transition bg-emerald-600 text-white cursor-pointer">7ኛ ክፍል (Grade 7)</button>
              <button onclick="setGrade(8); renderDashboard();" id="dashGradeToggle-8" class="px-3 py-1 rounded-lg text-xs font-bold transition text-slate-400 hover:text-white cursor-pointer">8ኛ ክፍል (Grade 8)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="dashSubjectCardsContainer">
            <!-- Dynamically populated 6 subject cards with progress rings -->
          </div>
        </div>

        <!-- Intelligent Diagnostic Recommendation Banner ("Next Up For You") -->
        <div class="glass-card p-6 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-space-900 via-amber-950/20 to-space-950 flex flex-col md:flex-row items-center justify-between gap-5">
          <div class="space-y-1.5 text-center md:text-left">
            <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-300 font-black text-xs border border-amber-500/30">
              <span>💡</span> ብልህ የጥናት ምክረ-ሀሳብ (SMART STUDY RECOMMENDATION)
            </div>
            <h4 class="text-base sm:text-lg font-black text-white font-display" id="dashRecommendationTitle">
              ቀጣይ የሚመከር ጥናት፦ ምዕራፍ 1.2 Rational Numbers Operations
            </h4>
            <p class="text-xs text-slate-300 max-w-2xl" id="dashRecommendationDesc">
              ይህንን ምዕራፍ በማጠናቀቅ የክፍልህን የሒሳብ መሠረት አጠናክር። 3 የፍላሽ ካርዶች እና የፈተና ጥያቄዎች ተዘጋጅተዋል።
            </p>
          </div>
          <button onclick="resumeLastActivity()" class="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer">
            <span>አሁን አጥና (Study Now)</span> <span>➔</span>
          </button>
        </div>

      </section>

`;

const targetSq3rSection = `      <!-- =============================================================== -->
      <!-- VIEW 1: SQ3R MASTERY STUDIO                                     -->
      <!-- =============================================================== -->
      <section id="view-sq3r" class="tab-view block space-y-6">`;

const replacementSq3rSection = `      <!-- =============================================================== -->
      <!-- VIEW 1: SQ3R MASTERY STUDIO                                     -->
      <!-- =============================================================== -->
      <section id="view-sq3r" class="tab-view hidden space-y-6">`;

if (!shell.includes('id="view-dashboard"')) {
  shell = shell.replace(targetSq3rSection, dashboardSectionHtml + replacementSq3rSection);
  console.log('2. Home Dashboard view inserted.');
} else {
  console.log('2. Home Dashboard view already present.');
}

// =============================================================================
// 3. ADD SMART STUDY ASSISTANT (DR. DESTA) MODAL & FLOATING FAB
// =============================================================================
const assistantHtml = `
  <!-- Floating Smart Study Assistant (Dr. Desta • AI Study Guide) -->
  <button id="studyAssistantFab" onclick="toggleStudyAssistant()" class="fixed bottom-6 left-6 z-40 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition flex items-center gap-2 border border-emerald-400/40 cursor-pointer">
    <span class="text-lg">🤖</span>
    <span>ዶ/ር ደስታ (AI Study Guide)</span>
  </button>

  <!-- Study Assistant Interactive Modal Drawer -->
  <div id="studyAssistantModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/80 backdrop-blur-md">
    <div class="glass-card max-w-xl w-full p-6 sm:p-7 rounded-3xl border border-emerald-500/40 space-y-5 relative bg-space-900 shadow-2xl">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl">
            🎓
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white font-display">ዶ/ር ደስታ • ብልህ የጥናት ረዳት (Curriculum Guide)</h3>
            <p class="text-xs text-slate-400">Contextual pedagogical explanation grounded strictly in the Ethiopian Curriculum.</p>
          </div>
        </div>
        <button onclick="toggleStudyAssistant()" class="w-8 h-8 rounded-full bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer">
          ✕
        </button>
      </div>

      <!-- Quick Action Prompt Chips -->
      <div class="space-y-1.5">
        <label class="block text-[11px] font-black text-slate-400 uppercase tracking-widest">ምን ማወቅ ትፈልጋለህ? (Choose Prompt):</label>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <button onclick="askAssistant('simpler')" class="p-2.5 rounded-xl bg-space-950 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/40 text-slate-200 font-bold transition text-left cursor-pointer">
            💡 ቀለል አድርገህ አስረዳ (Explain Simpler)
          </button>
          <button onclick="askAssistant('example')" class="p-2.5 rounded-xl bg-space-950 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/40 text-slate-200 font-bold transition text-left cursor-pointer">
            🌍 የዕለት ተዕለት ምሳሌ (Everyday Example)
          </button>
          <button onclick="askAssistant('hint')" class="p-2.5 rounded-xl bg-space-950 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/40 text-slate-200 font-bold transition text-left cursor-pointer">
            🎯 የፈተና ፍንጭ ስጠኝ (Exam Pitfall Hint)
          </button>
          <button onclick="askAssistant('recap')" class="p-2.5 rounded-xl bg-space-950 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/40 text-slate-200 font-bold transition text-left cursor-pointer">
            📝 ዋና ዋና ነጥቦች (3-Point Recap)
          </button>
        </div>
      </div>

      <!-- Dynamic Response Box -->
      <div class="p-4 rounded-2xl bg-space-950 border border-slate-800 space-y-2 min-h-[140px] max-h-[260px] overflow-y-auto">
        <div class="text-xs uppercase font-black text-emerald-400 tracking-wider flex items-center gap-1.5">
          <span>📖</span> <span id="assistantTopicBadge">Target: Active Lesson</span>
        </div>
        <div id="assistantResponseText" class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          ሰላም! እኔ ዶ/ር ደስታ ነኝ። ከላይ ካሉት አማራጮች አንዱን በመምረጥ የትምህርቱን ፅንሰ-ሀሳብ በቀላሉ መረዳት ትችላለህ።
        </div>
      </div>

      <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800">
        <span>Grounded in Ethiopian MoE Curriculum</span>
        <button onclick="toggleStudyAssistant()" class="px-4 py-1.5 rounded-lg bg-space-850 hover:bg-space-800 text-slate-300 font-bold transition cursor-pointer">ተመለስ (Close)</button>
      </div>
    </div>
  </div>
`;

if (!shell.includes('id="studyAssistantFab"')) {
  shell = shell.replace('</body>', assistantHtml + '\n</body>');
  console.log('3. Study Assistant modal and FAB added.');
} else {
  console.log('3. Study Assistant already present.');
}

fs.writeFileSync(shellPath, shell, 'utf8');
console.log('src/template_shell.html successfully updated with World-Class Dashboard & Assistant!');
