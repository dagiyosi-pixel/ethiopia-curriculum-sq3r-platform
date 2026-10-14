const fs = require('fs');
const path = require('path');

const shellPath = path.join(__dirname, '..', 'src', 'template_shell.html');
let html = fs.readFileSync(shellPath, 'utf8');

// 1. Add print button to view-sq3r
const target1 = `<select id="subtopicSelector" onchange="changeSubtopic(this.value)" class="bg-space-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold rounded-xl px-3.5 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer w-full sm:w-72 truncate">
                  <!-- Dynamically populated with all subtopics -->
                </select>
              </div>`;

const replacement1 = target1 + `
              <button onclick="printCurrentUnitSummary()" class="w-full sm:w-72 px-3 py-1.5 rounded-xl bg-space-850 hover:bg-space-800 text-amber-300 border border-amber-500/30 text-xs font-black flex items-center justify-center gap-2 transition shadow-sm hover:shadow-amber-500/10 cursor-pointer">
                <span>🖨️</span> ማስታወሻ አትም (Print 1-Page Sheet)
              </button>`;

if (!html.includes('printCurrentUnitSummary()')) {
  if (html.includes(target1)) {
    html = html.replace(target1, replacement1);
    console.log('1. Print button added to view-sq3r.');
  } else {
    console.error('Target 1 not found!');
  }
} else {
  console.log('1. Print button already present.');
}

// 2. Add view-exam-hall section before view-curriculum
const examHallHtml = `      <!-- =============================================================== -->
      <!-- VIEW 1.5: MINISTRY EXAM HALL SIMULATOR (የፈተና አዳራሽ)            -->
      <!-- =============================================================== -->
      <section id="view-exam-hall" class="tab-view hidden space-y-6">
        
        <!-- Mode 1: Exam Configuration & Lobby -->
        <div id="examHallLobby" class="space-y-6">
          <div class="glass-crest p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-amber-500/40 bg-gradient-to-br from-space-900 via-amber-950/20 to-space-950">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div class="space-y-2">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-3 py-0.5 rounded-full text-xs font-black uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">OFFICIAL SIMULATION</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 font-bold border border-slate-700">7ኛ እና 8ኛ ክፍል (Grade 7 & 8)</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">CBA & MoE CERTIFIED</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight font-display flex items-center gap-3">
                  <span>🏛️</span> የኢትዮጵያ ሚኒስቴር ፈተና አዳራሽ (Ministry Exam Hall Simulator)
                </h2>
                <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                  ከክልላዊ እና ብሔራዊ የትምህርት ሚኒስቴር ፈተናዎች ጋር 100% ተመሳሳይ የሆነ የፈተና አከባቢ። በጊዜ የተገደበ፣ የቀጥታ የጥያቄ መምረጫ ሰሌዳ፣ የፈተና ውጤት ትንተና እና የክብር የምስክር ወረቀት ያካተተ።
                </p>
              </div>

              <div class="shrink-0 flex flex-col items-center justify-center p-4 rounded-xl bg-space-950/80 border border-amber-500/30 text-center">
                <div class="text-3xl font-black text-amber-400 font-display" id="lobbyTotalBankCount">577</div>
                <div class="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-0.5">የተረጋገጡ ጥያቄዎች (Active Questions)</div>
              </div>
            </div>
          </div>

          <!-- Exam Parameter Setup Card -->
          <div class="glass-card p-6 sm:p-7 rounded-2xl space-y-6">
            <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2 font-display">
              <span>⚙️</span> የፈተናውን ቅንብሮች ምረጥ (Exam Configuration)
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- Subject Selector -->
              <div class="space-y-1.5">
                <label class="block text-xs font-black text-slate-300 uppercase tracking-wider">የትምህርት አይነት (Subject):</label>
                <select id="examSubjectSelect" class="w-full bg-space-900 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none">
                  <option value="all">🌟 ሁሉንም የትምህርት አይነቶች (Comprehensive Grand Mock)</option>
                  <option value="math" selected>📐 ሒሳብ (Mathematics)</option>
                  <option value="science">🔬 አጠቃላይ ሳይንስ (General Science)</option>
                  <option value="english">📖 እንግሊዝኛ (English)</option>
                  <option value="social">🌍 ኅብረተሰብ ጥናት (Social Studies)</option>
                  <option value="citizenship">⚖️ የዜግነት ትምህርት (Citizenship Education)</option>
                  <option value="it">💻 ኢንፎርሜሽን ቴክኖሎጂ (Information Technology)</option>
                </select>
              </div>

              <!-- Grade Selector -->
              <div class="space-y-1.5">
                <label class="block text-xs font-black text-slate-300 uppercase tracking-wider">ክፍል (Grade Level):</label>
                <select id="examGradeSelect" class="w-full bg-space-900 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none">
                  <option value="current" selected>የአሁኑ ክፍል (Current Selected Grade)</option>
                  <option value="7">7ኛ ክፍል ብቻ (Grade 7 Only)</option>
                  <option value="8">8ኛ ክፍል ብቻ (Grade 8 Only)</option>
                  <option value="both">ሁለቱም ክፍሎች (Both Grade 7 & 8 Combined)</option>
                </select>
              </div>

              <!-- Question Count Selector -->
              <div class="space-y-1.5">
                <label class="block text-xs font-black text-slate-300 uppercase tracking-wider">የጥያቄዎች ብዛት (Questions):</label>
                <select id="examCountSelect" class="w-full bg-space-900 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none">
                  <option value="10">10 ጥያቄዎች (Quick 10-Min Sprint)</option>
                  <option value="20" selected>20 ጥያቄዎች (Standard 20-Min Regional Mock)</option>
                  <option value="40">40 ጥያቄዎች (Full 40-Min Ministry Simulation)</option>
                  <option value="60">60 ጥያቄዎች (Grand Challenge 60-Min Mock)</option>
                </select>
              </div>

              <!-- Timer Setting -->
              <div class="space-y-1.5">
                <label class="block text-xs font-black text-slate-300 uppercase tracking-wider">የጊዜ ገደብ (Time Limit):</label>
                <select id="examTimerSelect" class="w-full bg-space-900 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none">
                  <option value="standard" selected>መደበኛ (1 ደቂቃ በአንድ ጥያቄ • 1 Min/Q)</option>
                  <option value="strict">ጥብቅ (45 ሰከንድ በአንድ ጥያቄ • Strict 45s/Q)</option>
                  <option value="relaxed">የተራዘመ (1.5 ደቂቃ በአንድ ጥያቄ • 1.5 Min/Q)</option>
                  <option value="untimed">ያለ ጊዜ ገደብ (Untimed Practice Mode)</option>
                </select>
              </div>
            </div>

            <!-- Exam Guidelines & Launch CTA -->
            <div class="pt-4 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div class="flex items-center gap-3 text-xs text-slate-400">
                <span class="text-amber-400 text-base">⚠️</span>
                <span>የማለፊያ ነጥብ 80% ነው። 80% እና ከዚያ በላይ ያገኙ ተማሪዎች ይፋዊ የክብር ምስክር ወረቀት (Honors Certificate) ወዲያውኑ ይሰጣቸዋል!</span>
              </div>
              <button onclick="launchExamHall()" class="w-full md:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer">
                <span>🚀</span> ፈተናውን ጀምር (Start Official Mock Exam)
              </button>
            </div>
          </div>
        </div>

        <!-- Mode 2: Live Active Exam Room (Hidden initially) -->
        <div id="examHallActive" class="hidden space-y-6">
          <!-- Top Sticky HUD -->
          <div class="glass-card p-4 rounded-2xl border border-amber-500/40 sticky top-14 z-20 shadow-xl bg-space-900/95 backdrop-blur-md">
            <div class="flex items-center justify-between gap-3 flex-wrap">
              <div class="flex items-center gap-3">
                <span class="text-xl">🏛️</span>
                <div>
                  <h3 id="examActiveTitle" class="text-xs sm:text-sm font-black text-white font-display">Ministry Mock Exam</h3>
                  <div class="text-[11px] text-slate-400 font-mono" id="examProgressTracker">Question 1 of 20</div>
                </div>
              </div>

              <!-- Live Countdown Clock -->
              <div class="flex items-center gap-3">
                <div id="examClockBadge" class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-space-950 border border-slate-700 text-amber-400 font-mono font-black text-sm">
                  <span>⏱️</span>
                  <span id="examClockDisplay">20:00</span>
                </div>
                <button onclick="toggleExamFlag()" id="examFlagBtn" class="px-3 py-1.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1 transition cursor-pointer">
                  <span id="examFlagIcon">🚩</span>
                  <span class="hidden sm:inline">ለይተህ እሰር (Flag)</span>
                </button>
                <button onclick="confirmSubmitExam()" class="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition shadow-md shadow-emerald-600/30 cursor-pointer">
                  ፈተናውን ጨርስ (Submit Exam)
                </button>
              </div>
            </div>

            <!-- Question Palette Navigator (1 to N) -->
            <div class="mt-3 pt-3 border-t border-slate-800">
              <div class="flex items-center justify-between text-[11px] text-slate-400 font-bold mb-1.5">
                <span>የጥያቄዎች መምረጫ ሰሌዳ (Question Navigator):</span>
                <span id="examAnsweredCountText">0 / 20 Answered</span>
              </div>
              <div id="examPaletteGrid" class="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                <!-- Dynamically populated buttons -->
              </div>
            </div>
          </div>

          <!-- Active Question Card -->
          <div id="examQuestionCard" class="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <!-- Dynamically populated question content -->
          </div>

          <!-- Question Controls -->
          <div class="flex items-center justify-between gap-4">
            <button onclick="navigateExamQuestion(-1)" id="examPrevBtn" class="px-5 py-2.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-2 cursor-pointer">
              <span>◀</span> ቀዳሚ ጥያቄ (Previous)
            </button>
            <button onclick="navigateExamQuestion(1)" id="examNextBtn" class="px-5 py-2.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-2 cursor-pointer">
              ቀጣይ ጥያቄ (Next) <span>▶</span>
            </button>
          </div>
        </div>

        <!-- Mode 3: Diagnostic Results View (Hidden initially) -->
        <div id="examHallResults" class="hidden space-y-6">
          <!-- Dynamically populated score card, diagnostic chapters, and derivations -->
        </div>

      </section>

`;

const target2 = `      <!-- =============================================================== -->
      <!-- VIEW 2: COMPLETE SYLLABUS MATRIX (ALL UNITS & SUBTOPICS)        -->`;

if (!html.includes('id="view-exam-hall"')) {
  if (html.includes(target2)) {
    html = html.replace(target2, examHallHtml + target2);
    console.log('2. view-exam-hall section added.');
  } else {
    console.error('Target 2 not found!');
  }
} else {
  console.log('2. view-exam-hall already present.');
}

// 3. Update view-rewards to include Generate Certificate button
const target3 = `<button onclick="claimDailyReward()" id="dailyRewardBtn" class="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
            <span>🎁</span> Claim Daily Study Stipend (+75 💎 & +60 XP)
          </button>`;

const replacement3 = `<div class="flex flex-col sm:flex-row gap-2">
            <button onclick="openCertificateModal()" class="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2 border border-emerald-400/40 cursor-pointer">
              <span>🎓</span> የምስክር ወረቀት አውርድ (Generate Certificate)
            </button>
            <button onclick="claimDailyReward()" id="dailyRewardBtn" class="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer">
              <span>🎁</span> Claim Daily Stipend (+75 💎 & +60 XP)
            </button>
          </div>`;

if (!html.includes('openCertificateModal()')) {
  if (html.includes(target3)) {
    html = html.replace(target3, replacement3);
    console.log('3. Certificate button added to view-rewards.');
  } else {
    console.error('Target 3 not found!');
  }
} else {
  console.log('3. Certificate button already present in view-rewards.');
}

// 4. Add certificateModal before audio engine
const certModalHtml = `  <!-- Shareable Ministry Honors Certificate Modal -->
  <div id="certificateModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/85 backdrop-blur-md overflow-y-auto">
    <div class="glass-card max-w-3xl w-full p-6 sm:p-7 rounded-3xl border border-amber-500/50 space-y-6 relative bg-space-900 shadow-2xl my-8">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <div class="flex items-center gap-2.5">
          <span class="text-2xl">🎓</span>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white font-display">የብሔራዊ የክብር ምስክር ወረቀት (Official Ministry Honors Certificate)</h3>
            <p class="text-xs text-slate-400">Generate an authentic, high-resolution certificate with your official ranking and MoE seal.</p>
          </div>
        </div>
        <button onclick="closeCertificateModal()" class="w-8 h-8 rounded-full bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer">
          ✕
        </button>
      </div>

      <!-- Live Canvas Preview Container -->
      <div class="w-full overflow-hidden rounded-2xl border border-amber-500/30 bg-space-950 flex items-center justify-center p-2 sm:p-4">
        <canvas id="certCanvas" width="1200" height="840" class="max-w-full h-auto rounded-xl shadow-2xl border border-amber-500/40"></canvas>
      </div>

      <!-- Student Customization Form Inputs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1">
          <label class="block text-xs font-black text-slate-300">የተማሪው ሙሉ ስም (Student Full Name):</label>
          <input type="text" id="certStudentName" oninput="updateCertPreview()" placeholder="ለምሳሌ፡ ዳግማዊ ተሾመ (e.g. Dagmawi Teshome)" class="w-full bg-space-950 border border-slate-700 text-white rounded-xl px-3.5 py-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none">
        </div>
        <div class="space-y-1">
          <label class="block text-xs font-black text-slate-300">የትምህርት ቤት / ክልል ስም (School / Region):</label>
          <input type="text" id="certSchoolName" oninput="updateCertPreview()" placeholder="ለምሳሌ፡ ዳግማዊ ምኒልክ ት/ቤት፣ አዲስ አበባ" class="w-full bg-space-950 border border-slate-700 text-white rounded-xl px-3.5 py-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none">
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-800 flex-wrap">
        <button onclick="closeCertificateModal()" class="px-4 py-2 rounded-xl bg-space-850 hover:bg-space-800 text-slate-300 text-xs font-bold transition cursor-pointer">
          ተመለስ (Close)
        </button>
        <button onclick="shareCertificateTelegram()" class="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-black transition flex items-center gap-2 shadow-lg shadow-sky-600/30 cursor-pointer">
          <span>✈️</span> በቴሌግራም አጋራ (Share on Telegram)
        </button>
        <button onclick="downloadCertificateImage()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 text-slate-950 text-xs font-black transition flex items-center gap-2 shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 cursor-pointer">
          <span>📥</span> ምስሉን አውርድ (Download HD PNG)
        </button>
      </div>
    </div>
  </div>

`;

const target4 = `  <!-- Zero-Dependency Synthesized Audio Engine -->`;
if (!html.includes('id="certificateModal"')) {
  if (html.includes(target4)) {
    html = html.replace(target4, certModalHtml + target4);
    console.log('4. certificateModal added.');
  } else {
    console.error('Target 4 not found!');
  }
} else {
  console.log('4. certificateModal already present.');
}

fs.writeFileSync(shellPath, html, 'utf8');
console.log('Successfully updated src/template_shell.html! Size:', (html.length / 1024).toFixed(1), 'KB');
