const fs = require('fs');
const path = require('path');

console.log('Transforming Platform into Gizmo-Style Mobile-First Learning App (No AI)...');

const rootDir = path.join(__dirname, '..');
const shellPath = path.join(rootDir, 'src', 'template_shell.html');
const logicPath = path.join(rootDir, 'src', 'app_logic.js');

let shell = fs.readFileSync(shellPath, 'utf8');
let logic = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// 1. UPDATE template_shell.html: REMOVE AI ASSISTANT, ADD GIZMO BOTTOM NAV & STYLES
// =============================================================================

// Update <main> padding for mobile
shell = shell.replace(
  '<main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">',
  '<main class="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-6 py-4 sm:py-6 pb-28 md:pb-8">'
);

// Gizmo Mobile Bottom Navigation Bar
const gizmoBottomNavHtml = `
  <!-- ========================================================================= -->
  <!-- GIZMO-STYLE MOBILE BOTTOM NAVIGATION BAR (Thumb-Friendly on all devices)  -->
  <!-- ========================================================================= -->
  <nav id="gizmoBottomNav" class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-space-950/95 backdrop-blur-2xl border-t border-slate-800/90 px-3 py-2 flex items-center justify-around shadow-2xl">
    <button onclick="switchTab('dashboard')" id="bottomNav-dashboard" class="flex flex-col items-center gap-1 text-emerald-400 font-black transition cursor-pointer p-1">
      <span class="text-xl">🏠</span>
      <span class="text-[10px] tracking-tight">መነሻ</span>
    </button>
    <button onclick="switchTab('sq3r')" id="bottomNav-sq3r" class="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition cursor-pointer p-1">
      <span class="text-xl">📖</span>
      <span class="text-[10px] tracking-tight">SQ3R</span>
    </button>
    <button onclick="switchTab('exam-hall')" id="bottomNav-exam-hall" class="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition cursor-pointer p-1">
      <span class="text-xl">🏛️</span>
      <span class="text-[10px] tracking-tight">ፈተና</span>
    </button>
    <button onclick="switchTab('reference')" id="bottomNav-reference" class="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition cursor-pointer p-1">
      <span class="text-xl">📚</span>
      <span class="text-[10px] tracking-tight">ማጣቀሻ</span>
    </button>
    <button onclick="switchTab('rewards')" id="bottomNav-rewards" class="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition cursor-pointer p-1">
      <span class="text-xl">🏆</span>
      <span class="text-[10px] tracking-tight">ሽልማት</span>
    </button>
  </nav>
`;

// Add Gizmo custom styles
const gizmoStyles = `
    /* === GIZMO APP INTERACTION STYLES === */
    .gizmo-card {
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .gizmo-card:active {
      transform: scale(0.97);
    }
    .gizmo-match-tile {
      user-select: none;
      -webkit-user-select: none;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }
    .gizmo-match-tile:hover {
      transform: translateY(-2px);
    }
    .gizmo-match-tile.selected {
      border-color: #10b981;
      background: rgba(16, 185, 129, 0.2);
      box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
    }
    .gizmo-match-tile.matched {
      opacity: 0.15;
      pointer-events: none;
      transform: scale(0.95);
    }
    .pb-safe {
      padding-bottom: env(safe-area-inset-bottom, 0.5rem);
    }
`;

if (!shell.includes('GIZMO APP INTERACTION STYLES')) {
  shell = shell.replace('</style>', gizmoStyles + '\n  </style>');
}

// Remove studyAssistantFab & studyAssistantModal from shell
const fabMarkerStart = '  <!-- Floating Smart Study Assistant (Dr. Desta • AI Study Guide) -->';
const fabMarkerEnd = '  <!-- Complete Exhaustive Curriculum Database & Engine -->';

if (shell.includes(fabMarkerStart)) {
  const p1 = shell.indexOf(fabMarkerStart);
  const p2 = shell.indexOf(fabMarkerEnd);
  if (p1 !== -1 && p2 !== -1) {
    shell = shell.substring(0, p1) + gizmoBottomNavHtml + '\n' + shell.substring(p2);
    console.log('1. Removed AI assistant modal/fab and inserted Gizmo bottom nav bar.');
  }
} else if (!shell.includes('id="gizmoBottomNav"')) {
  shell = shell.replace(fabMarkerEnd, gizmoBottomNavHtml + '\n' + fabMarkerEnd);
  console.log('1. Inserted Gizmo bottom nav bar before script.');
}

fs.writeFileSync(shellPath, shell, 'utf8');
console.log('template_shell.html patched successfully.');

// =============================================================================
// 2. UPDATE app_logic.js: REMOVE AI ASSISTANT, SYNC BOTTOM NAV, ADD GIZMO RECALL
// =============================================================================

// Remove assistant functions from app_logic.js
const assistMarker = '    // FLOATING SMART STUDY ASSISTANT (DR. DESTA';
if (logic.includes(assistMarker)) {
  const pAssist = logic.indexOf(assistMarker);
  const pNext = logic.indexOf("    window.addEventListener('DOMContentLoaded'", pAssist);
  if (pAssist !== -1 && pNext !== -1) {
    logic = logic.substring(0, pAssist) + logic.substring(pNext);
    console.log('2. Removed Dr. Desta AI assistant logic from app_logic.js.');
  }
}

// Update switchTab to highlight bottom navigation bar
const oldSwitchSync = `      ['tabBtn-dashboard', 'tabBtn-sq3r', 'tabBtn-exam-hall', 'tabBtn-curriculum', 'tabBtn-amt-exam', 'tabBtn-vault', 'tabBtn-reference', 'tabBtn-rewards', 'tabBtn-analytics'].forEach(bId => {
        const btn = document.getElementById(bId);
        if (btn) {
          if (bId === btnMap[tabId]) {
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap cursor-pointer';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer';
          }
        }
      });`;

const newSwitchSync = `      ['tabBtn-dashboard', 'tabBtn-sq3r', 'tabBtn-exam-hall', 'tabBtn-curriculum', 'tabBtn-amt-exam', 'tabBtn-vault', 'tabBtn-reference', 'tabBtn-rewards', 'tabBtn-analytics'].forEach(bId => {
        const btn = document.getElementById(bId);
        if (btn) {
          if (bId === btnMap[tabId]) {
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap cursor-pointer';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer';
          }
        }
      });

      // Synchronize Gizmo Mobile Bottom Navigation Bar
      const bottomNavMapping = {
        'dashboard': 'bottomNav-dashboard',
        'sq3r': 'bottomNav-sq3r',
        'exam-hall': 'bottomNav-exam-hall',
        'exam': 'bottomNav-exam-hall',
        'reference': 'bottomNav-reference',
        'ref': 'bottomNav-reference',
        'rewards': 'bottomNav-rewards'
      };

      ['dashboard', 'sq3r', 'exam-hall', 'reference', 'rewards'].forEach(navKey => {
        const bNavBtn = document.getElementById(\`bottomNav-\${navKey}\`);
        if (bNavBtn) {
          if (bottomNavMapping[tabId] === \`bottomNav-\${navKey}\`) {
            bNavBtn.className = 'flex flex-col items-center gap-1 text-emerald-400 font-black transition cursor-pointer p-1 scale-105';
          } else {
            bNavBtn.className = 'flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200 transition cursor-pointer p-1';
          }
        }
      });`;

if (logic.includes(oldSwitchSync)) {
  logic = logic.replace(oldSwitchSync, newSwitchSync);
  console.log('3. Enhanced switchTab to synchronize Gizmo bottom navigation.');
}

// Upgrade Stage 4 (Recite) with Gizmo Study Arena: Flashcard Flip, Type-in Recall, Speed Match, Free Recall
const oldReciteSectionStart = '    // STAGE 4: RECITE ENGINE';
const oldReciteSectionEnd = '    // =========================================================================\n    // STAGE 5: REVIEW ENGINE';

const pRecite1 = logic.indexOf(oldReciteSectionStart);
const pRecite2 = logic.indexOf(oldReciteSectionEnd);

if (pRecite1 !== -1 && pRecite2 !== -1) {
  const newGizmoReciteSuite = `    // STAGE 4: GIZMO-STYLE ACTIVE RECALL SUITE (NO AI - FAST, TACTILE & RESPONSIVE)
    // =========================================================================
    let activeReciteMode = 'flashcards'; // 'flashcards' | 'type' | 'match' | 'journal'
    let currentCardIndex = 0;
    let isCardFlipped = false;
    let matchSelectedTile = null;
    let matchPairsLeft = 0;

    function renderReciteStep(st, container) {
      currentCardIndex = 0;
      isCardFlipped = false;

      container.innerHTML = \`
        <div class="glass-card p-5 sm:p-8 rounded-3xl border border-slate-800 space-y-6 animate-fadeIn shadow-2xl">
          
          <!-- Recite Header & Gizmo Mode Selector -->
          <div class="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs uppercase font-black text-purple-400 tracking-wider">ደረጃ 4 ከ 5 • ንቁ ማስታወስ (STAGE 4: ACTIVE RECALL ARENA)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">GIZMO የጥናት ስልቶች (Study Modes)</h3>
              <p class="text-xs sm:text-sm text-slate-300">ካርዶችን በመገልበጥ፣ ጽፈህ በማረጋገጥ ወይም በማዛመድ እውቀትህን በቋሚነት በአዕምሮህ ቅረፅ።</p>
            </div>

            <!-- 4 Gizmo-Style Segmented Control Pills -->
            <div class="shrink-0 flex items-center gap-1 bg-space-950 p-1.5 rounded-2xl border border-slate-800 overflow-x-auto no-scrollbar">
              <button onclick="setReciteMode('flashcards')" id="reciteTab-flashcards" class="px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap \${activeReciteMode === 'flashcards' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'} cursor-pointer">
                🃏 ካርድ ገልብጥ (Flip)
              </button>
              <button onclick="setReciteMode('type')" id="reciteTab-type" class="px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap \${activeReciteMode === 'type' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'} cursor-pointer">
                ✍️ ጽፈህ መልስ (Type)
              </button>
              <button onclick="setReciteMode('match')" id="reciteTab-match" class="px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap \${activeReciteMode === 'match' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'} cursor-pointer">
                🧩 አዛምድ (Match)
              </button>
              <button onclick="setReciteMode('journal')" id="reciteTab-journal" class="px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap \${activeReciteMode === 'journal' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'} cursor-pointer">
                📝 የራስ አገላለጽ
              </button>
            </div>
          </div>

          <!-- GIZMO MODE 1: TACTILE 3D FLASHCARDS -->
          <div id="reciteMode-flashcards" class="\${activeReciteMode === 'flashcards' ? '' : 'hidden'} space-y-6">
            <div class="max-w-xl mx-auto py-2 space-y-4">
              
              <!-- Progress Indicator -->
              <div class="flex items-center justify-between text-xs text-slate-400 px-1">
                <span id="flashcardCounter" class="font-mono text-amber-400 font-bold">Card 1 of \${st.reciteFlashcards.length}</span>
                <span class="text-emerald-400 font-bold">Leitner Spaced Repetition</span>
              </div>

              <!-- Big Tactile Card -->
              <div onclick="flipFlashcard()" id="activeFlashcard" class="gizmo-card glass-crest h-64 sm:h-72 rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-emerald-500/40 relative shadow-2xl transition hover:border-emerald-400">
                <span id="flashcardSideLabel" class="text-[10px] uppercase font-black text-emerald-400 tracking-widest absolute top-4 left-4">QUESTION (ጥያቄ)</span>
                <span class="text-xs text-slate-400 absolute top-4 right-4 flex items-center gap-1">
                  <span>ካርዱን ግለጥ</span> <span>↺</span>
                </span>

                <div class="my-auto text-center px-2">
                  <h4 id="flashcardContent" class="text-base sm:text-xl font-black text-white leading-relaxed font-display">
                    \${st.reciteFlashcards[0].q}
                  </h4>
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 pt-3">
                  <span class="text-[11px] text-slate-500">Tap anywhere on card to flip</span>
                  <span class="text-emerald-400 font-bold flex items-center gap-1"><span>🧠</span> Active Recall</span>
                </div>
              </div>

              <!-- 4 Leitner Confidence Rating Buttons -->
              <div class="space-y-2 pt-2">
                <div class="text-[10px] font-black uppercase text-slate-400 text-center tracking-widest">
                  ምን ያህል አስታወስከው? (RATE YOUR CONFIDENCE):
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button onclick="rateFlashcardLeitner('again')" class="p-3 rounded-2xl bg-space-950 hover:bg-rose-950/60 border border-slate-800 hover:border-rose-500 text-xs font-bold text-rose-300 transition cursor-pointer flex flex-col items-center gap-0.5">
                    <span>🔴 እንደገና</span>
                    <span class="text-[9px] text-slate-500 font-mono">1 day</span>
                  </button>
                  <button onclick="rateFlashcardLeitner('hard')" class="p-3 rounded-2xl bg-space-950 hover:bg-amber-950/60 border border-slate-800 hover:border-amber-500 text-xs font-bold text-amber-300 transition cursor-pointer flex flex-col items-center gap-0.5">
                    <span>🟠 ከባድ</span>
                    <span class="text-[9px] text-slate-500 font-mono">3 days</span>
                  </button>
                  <button onclick="rateFlashcardLeitner('good')" class="p-3 rounded-2xl bg-space-950 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500 text-xs font-bold text-emerald-300 transition cursor-pointer flex flex-col items-center gap-0.5">
                    <span>🟢 ጥሩ</span>
                    <span class="text-[9px] text-slate-500 font-mono">7 days</span>
                  </button>
                  <button onclick="rateFlashcardLeitner('easy')" class="p-3 rounded-2xl bg-space-950 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500 text-xs font-bold text-cyan-300 transition cursor-pointer flex flex-col items-center gap-0.5">
                    <span>🔵 ቀላል</span>
                    <span class="text-[9px] text-slate-500 font-mono">14 days</span>
                  </button>
                </div>
              </div>

              <!-- Flashcard Navigation Controls -->
              <div class="flex items-center justify-center gap-3 pt-2 flex-wrap">
                <button onclick="prevFlashcard()" class="px-5 py-2.5 rounded-2xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white cursor-pointer transition">
                  ← የቀደመው (Prev)
                </button>
                <button onclick="flipFlashcard()" class="px-5 py-2.5 rounded-2xl bg-space-850 border border-emerald-500/30 text-xs font-bold text-emerald-300 hover:text-white cursor-pointer transition">
                  ግለጥ (Flip ↺)
                </button>
                <button onclick="nextFlashcard()" class="px-5 py-2.5 rounded-2xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white cursor-pointer transition">
                  ቀጣይ (Next →)
                </button>
              </div>

            </div>
          </div>

          <!-- GIZMO MODE 2: WRITE / TYPE RECALL -->
          <div id="reciteMode-type" class="\${activeReciteMode === 'type' ? '' : 'hidden'} space-y-6">
            <div class="max-w-xl mx-auto py-2 space-y-5">
              <div class="p-6 rounded-3xl bg-space-950 border border-slate-800 space-y-4">
                <div class="flex items-center justify-between text-xs text-slate-400">
                  <span class="text-purple-400 font-black uppercase tracking-wider">✍️ GIZMO TYPE-IN CHALLENGE</span>
                  <span id="typeRecallCardCounter" class="font-mono text-amber-400 font-bold">Question 1 of \${st.reciteFlashcards.length}</span>
                </div>

                <h4 id="typeRecallQuestion" class="text-base sm:text-lg font-black text-white leading-relaxed font-display">
                  \${st.reciteFlashcards[0].q}
                </h4>

                <div class="space-y-3 pt-2">
                  <input type="text" id="typeRecallInput" onkeydown="if(event.key==='Enter') checkTypeRecallAnswer()" placeholder="ትክክለኛውን ቃል ወይም መልስ እዚህ ጻፍ..." class="w-full bg-space-900 border border-slate-700 text-slate-100 text-sm rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                  
                  <div class="flex items-center justify-between gap-3">
                    <button onclick="checkTypeRecallAnswer()" class="flex-1 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-purple-600/30 transition cursor-pointer">
                      መልሴን አረጋግጥ (Check Answer) ➔
                    </button>
                    <button onclick="revealTypeRecallAnswer()" class="px-4 py-3 rounded-2xl bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white font-bold text-xs transition cursor-pointer">
                      መልሱን እይ
                    </button>
                  </div>
                </div>

                <!-- Type Recall Feedback Box -->
                <div id="typeRecallFeedback" class="hidden p-4 rounded-2xl border transition"></div>
              </div>
            </div>
          </div>

          <!-- GIZMO MODE 3: SPEED MATCH PAIRS GAME -->
          <div id="reciteMode-match" class="\${activeReciteMode === 'match' ? '' : 'hidden'} space-y-6">
            <div class="max-w-2xl mx-auto py-2 space-y-4">
              <div class="flex items-center justify-between flex-wrap gap-2 text-xs">
                <div>
                  <span class="text-emerald-400 font-black uppercase tracking-wider">🧩 GIZMO SPEED MATCH GAME</span>
                  <p class="text-slate-400">ጥያቄውን እና ትክክለኛ መልሱን ጠቅ በማድረግ አዛምድ!</p>
                </div>
                <div class="flex items-center gap-2">
                  <span id="matchGameScore" class="font-mono text-amber-400 font-bold bg-space-950 px-3 py-1 rounded-xl border border-slate-800">0 / 0 Matched</span>
                  <button onclick="initMatchGame()" class="px-3 py-1 rounded-xl bg-space-850 hover:bg-space-800 text-slate-300 text-xs font-bold transition cursor-pointer">↺ ዳግም ጀምር</button>
                </div>
              </div>

              <!-- Shuffled Grid of Match Tiles -->
              <div id="matchTilesGrid" class="grid grid-cols-2 gap-3 pt-2">
                <!-- Dynamically populated match tiles -->
              </div>

              <div id="matchVictoryBanner" class="hidden p-6 rounded-3xl bg-gradient-to-r from-emerald-950 via-space-900 to-emerald-950 border border-emerald-500/50 text-center space-y-2">
                <span class="text-3xl">🎉</span>
                <h4 class="text-lg font-black text-white font-display">ድንቅ ነው! ሁሉንም አዛምደሃል!</h4>
                <p class="text-xs text-emerald-300">+35 XP ተጨምሯል ✔</p>
              </div>
            </div>
          </div>

          <!-- GIZMO MODE 4: FREE RECALL JOURNAL -->
          <div id="reciteMode-journal" class="\${activeReciteMode === 'journal' ? '' : 'hidden'} space-y-5">
            <div class="p-5 sm:p-6 rounded-3xl bg-space-950 border border-slate-800 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-850 pb-3">
                <span class="text-xs sm:text-sm font-black text-white flex items-center gap-2 font-display">
                  <span>✍️</span> የራስ አገላለጽ ማህደር (FREE RECALL JOURNAL)
                </span>
                <span class="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                  Active Retrieval
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ያለ ምንም እርዳታ፣ የዚህን ርዕስ ዋና ዋና ነጥቦች፣ ቀመሮች እና ትርጓሜዎች በራስህ አባባል ጻፍ። ከጻፍክ በኋላ "ከመደበኛው ጋር አነጻጽር" የሚለውን በመንካት ትክክለኛነትህን አረጋግጥ!
              </p>
              <textarea id="freeRecallInput" placeholder="ያስታወስካቸውን ዋና ዋና ነጥቦች እዚህ ጻፍ..." class="w-full bg-space-900 border border-slate-800 rounded-2xl p-4 text-xs sm:text-sm text-slate-200 focus:ring-2 focus:ring-purple-500 focus:outline-none h-36 resize-none leading-relaxed"></textarea>
              
              <div class="flex items-center justify-between">
                <button onclick="compareFreeRecall()" class="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs transition flex items-center gap-2 cursor-pointer shadow-md shadow-purple-600/30">
                  <span>🔍 ከመደበኛው ማስታወሻ ጋር አነጻጽር (+25 XP)</span>
                </button>
              </div>

              <!-- Side-by-Side Comparison Drawer -->
              <div id="freeRecallComparisonDrawer" class="hidden p-5 rounded-2xl bg-space-900 border border-purple-500/30 space-y-3">
                <div class="text-xs font-black text-purple-300 uppercase tracking-wider">
                  የስርዓተ-ትምህርቱ መደበኛ መልስ (Official Ministry Standard):
                </div>
                <div class="text-xs sm:text-sm text-slate-200 bg-space-950 p-4 rounded-xl border border-slate-800 leading-relaxed">
                  \${st.survey.blueprint}
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
      \`;

      if (activeReciteMode === 'match') {
        initMatchGame();
      }
    }

    function setReciteMode(mode) {
      soundClick();
      activeReciteMode = mode;
      ['flashcards', 'type', 'match', 'journal'].forEach(m => {
        const el = document.getElementById(\`reciteMode-\${m}\`);
        const tab = document.getElementById(\`reciteTab-\${m}\`);
        if (el) {
          if (m === mode) el.classList.remove('hidden');
          else el.classList.add('hidden');
        }
        if (tab) {
          if (m === mode) tab.className = 'px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap bg-purple-600 text-white shadow-md cursor-pointer';
          else tab.className = 'px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap text-slate-400 hover:text-white cursor-pointer';
        }
      });

      if (mode === 'match') initMatchGame();
    }

    // --- Gizmo Type Recall Logic ---
    let currentTypeIndex = 0;

    function checkTypeRecallAnswer() {
      const input = document.getElementById('typeRecallInput');
      const feedback = document.getElementById('typeRecallFeedback');
      if (!input || !feedback) return;

      const userAns = input.value.trim().toLowerCase();
      const st = getActiveSubtopic();
      const card = st.reciteFlashcards[currentTypeIndex];
      const correctAns = card.a.trim().toLowerCase();

      // Check fuzzy matching or inclusion
      const isCorrect = userAns.length > 2 && (correctAns.includes(userAns) || userAns.includes(correctAns));

      feedback.classList.remove('hidden');
      if (isCorrect) {
        soundSuccess();
        triggerConfetti();
        addXp(20, 'Type-In Match Correct');
        feedback.className = 'p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/60 text-xs sm:text-sm text-emerald-200 font-bold space-y-1';
        feedback.innerHTML = \`
          <div class="flex items-center gap-2">
            <span>🎉</span> <span>ትክክል ነው! ድንቅ ማስታወስ!</span>
          </div>
          <div class="text-xs text-emerald-300/80 font-normal">መደበኛ መልስ፦ \${card.a}</div>
        \`;
        setTimeout(() => {
          currentTypeIndex = (currentTypeIndex + 1) % st.reciteFlashcards.length;
          updateTypeRecallView();
        }, 1800);
      } else {
        soundError();
        feedback.className = 'p-4 rounded-2xl bg-rose-950/80 border border-rose-500/60 text-xs sm:text-sm text-rose-200 font-bold space-y-1';
        feedback.innerHTML = \`
          <div class="flex items-center gap-2">
            <span>✖</span> <span>ትንሽ ተሳስተሃል፤ ትክክለኛው መልስ፦</span>
          </div>
          <div class="text-xs sm:text-sm text-white font-mono bg-space-950 p-2.5 rounded-xl border border-rose-500/30">\${card.a}</div>
        \`;
      }
    }

    function revealTypeRecallAnswer() {
      soundClick();
      const st = getActiveSubtopic();
      const card = st.reciteFlashcards[currentTypeIndex];
      const feedback = document.getElementById('typeRecallFeedback');
      if (feedback) {
        feedback.classList.remove('hidden');
        feedback.className = 'p-4 rounded-2xl bg-space-900 border border-amber-500/40 text-xs sm:text-sm text-amber-200 font-bold space-y-1';
        feedback.innerHTML = \`
          <div class="text-xs text-amber-400 uppercase font-black">ትክክለኛው መልስ፦</div>
          <div class="text-xs sm:text-sm text-white font-mono bg-space-950 p-2.5 rounded-xl border border-slate-800">\${card.a}</div>
        \`;
      }
    }

    function updateTypeRecallView() {
      const st = getActiveSubtopic();
      const card = st.reciteFlashcards[currentTypeIndex];
      const qEl = document.getElementById('typeRecallQuestion');
      const counterEl = document.getElementById('typeRecallCardCounter');
      const input = document.getElementById('typeRecallInput');
      const feedback = document.getElementById('typeRecallFeedback');

      if (qEl) qEl.innerText = card.q;
      if (counterEl) counterEl.innerText = \`Question \${currentTypeIndex + 1} of \${st.reciteFlashcards.length}\`;
      if (input) { input.value = ''; input.focus(); }
      if (feedback) feedback.classList.add('hidden');
    }

    // --- Gizmo Speed Match Game Logic ---
    function initMatchGame() {
      const st = getActiveSubtopic();
      const cards = st.reciteFlashcards.slice(0, 4); // Take up to 4 pairs
      matchPairsLeft = cards.length;
      matchSelectedTile = null;

      const scoreEl = document.getElementById('matchGameScore');
      if (scoreEl) scoreEl.innerText = \`0 / \${cards.length} Matched\`;

      const victoryBanner = document.getElementById('matchVictoryBanner');
      if (victoryBanner) victoryBanner.classList.add('hidden');

      const items = [];
      cards.forEach((c, idx) => {
        items.push({ id: \`q-\${idx}\`, pairId: idx, type: 'q', text: c.q });
        items.push({ id: \`a-\${idx}\`, pairId: idx, type: 'a', text: c.a.length > 80 ? c.a.substring(0, 77) + '...' : c.a });
      });

      // Fisher-Yates shuffle
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }

      const grid = document.getElementById('matchTilesGrid');
      if (!grid) return;

      grid.innerHTML = items.map(item => \`
        <div onclick="tapMatchTile(this, \${item.pairId})" id="tile-\${item.id}" class="gizmo-match-tile p-4 rounded-2xl bg-space-950 border border-slate-800 text-xs sm:text-sm text-slate-200 font-bold flex items-center justify-center text-center min-h-[72px] shadow-sm">
          <span>\${item.text}</span>
        </div>
      \`).join('');
    }

    function tapMatchTile(tileEl, pairId) {
      if (tileEl.classList.contains('matched') || tileEl === matchSelectedTile?.el) return;

      soundClick();

      if (!matchSelectedTile) {
        // First tile selected
        matchSelectedTile = { el: tileEl, pairId: pairId };
        tileEl.classList.add('selected');
      } else {
        // Second tile selected - check if they match!
        if (matchSelectedTile.pairId === pairId) {
          // MATCH!
          soundSuccess();
          tileEl.classList.add('matched');
          matchSelectedTile.el.classList.add('matched');
          matchSelectedTile.el.classList.remove('selected');
          matchSelectedTile = null;
          matchPairsLeft--;

          const st = getActiveSubtopic();
          const totalPairs = Math.min(4, st.reciteFlashcards.length);
          const scoreEl = document.getElementById('matchGameScore');
          if (scoreEl) scoreEl.innerText = \`\${totalPairs - matchPairsLeft} / \${totalPairs} Matched\`;

          if (matchPairsLeft <= 0) {
            triggerConfetti();
            addXp(35, 'Gizmo Speed Match Completed');
            const victoryBanner = document.getElementById('matchVictoryBanner');
            if (victoryBanner) victoryBanner.classList.remove('hidden');
          }
        } else {
          // MISMATCH!
          soundError();
          tileEl.classList.add('border-rose-500', 'bg-rose-950/40');
          matchSelectedTile.el.classList.add('border-rose-500', 'bg-rose-950/40');
          setTimeout(() => {
            tileEl.classList.remove('selected', 'border-rose-500', 'bg-rose-950/40');
            if (matchSelectedTile) {
              matchSelectedTile.el.classList.remove('selected', 'border-rose-500', 'bg-rose-950/40');
              matchSelectedTile = null;
            }
          }, 450);
        }
      }
    }
`;

  logic = logic.substring(0, pRecite1) + newGizmoReciteSuite + '\n' + logic.substring(pRecite2);
  console.log('4. Injected Gizmo-Style Active Recall Suite into app_logic.js.');
}

fs.writeFileSync(logicPath, logic, 'utf8');
console.log('src/app_logic.js patched successfully with Gizmo UI & interactions.');
`;

fs.writeFileSync(path.join(rootDir, 'scripts', 'patch_gizmo_ui.js'), patchScript, 'utf8');
console.log('scripts/patch_gizmo_ui.js created.');
