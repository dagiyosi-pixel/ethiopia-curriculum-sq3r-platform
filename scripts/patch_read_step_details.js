const fs = require('fs');
const path = require('path');

console.log('Patching Read Step Baby-Steps & Dynamic Key Vocabulary Table...');

const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');
let logic = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// 1. REVISE renderReadStep
// =============================================================================
const oldReadStart = '    function renderReadStep(st, container) {';
const oldReadEnd = '    // =========================================================================\n    // STAGE 4: GIZMO-STYLE ACTIVE RECALL SUITE';

const pStart = logic.indexOf(oldReadStart);
const pEnd = logic.indexOf(oldReadEnd);

if (pStart === -1 || pEnd === -1) {
  console.error('Could not locate renderReadStep markers in app_logic.js!');
  process.exit(1);
}

const newReadSection = `    function renderReadStep(st, container) {
      const fontSizeClass = {
        'sm': 'text-xs',
        'md': 'text-sm',
        'lg': 'text-base'
      }[gState.activeFontSize || 'md'];

      const userNote = gState.userNotes[st.id] || '';
      const customQs = gState.customQuestions[st.id] || [];

      // Generate the 4 Exhaustive Baby Steps
      const steps = st.example.steps || [];
      const problemText = st.example.problem || '';
      const proTip = st.example.proTip || '';
      const formula = st.survey.keyFormulas || '';

      let babySteps = [];
      if (steps.length === 4) {
        babySteps = [
          {
            title: 'ደረጃ 1፦ የተሰጡ መረጃዎችንና የሚፈለገውን መለየት (Givens & Problem Setup)',
            sublabel: steps[0].label,
            body: steps[0].text,
            icon: '1'
          },
          {
            title: 'ደረጃ 2፦ የሚመለከተውን ቀመር ወይም ሕግ መምረጥ (Formula & Governing Principles)',
            sublabel: steps[1].label,
            body: steps[1].text,
            icon: '2'
          },
          {
            title: 'ደረጃ 3፦ ደረጃ በደረጃ የሂሳብና የሳይንስ ስሌት በዝርዝር (Baby-Step Calculation & Substitution)',
            sublabel: steps[2].label,
            body: steps[2].text,
            icon: '3'
          },
          {
            title: 'ደረጃ 4፦ የመጨረሻ መልስ ማረጋገጫና የወጥመዶች ትንተና (Verification & Trap Autopsy)',
            sublabel: steps[3].label,
            body: steps[3].text,
            icon: '4'
          }
        ];
      } else if (steps.length === 3) {
        babySteps = [
          {
            title: 'ደረጃ 1፦ የተሰጡ መረጃዎችንና የሚፈለገውን መለየት (Givens & Problem Setup)',
            sublabel: steps[0].label,
            body: steps[0].text,
            icon: '1'
          },
          {
            title: 'ደረጃ 2፦ የሚመለከተውን ቀመር ወይም ሕግ መምረጥ (Formula & Governing Principles)',
            sublabel: steps[1].label,
            body: steps[1].text + (formula ? \`<div class="mt-2 font-mono text-emerald-300 text-xs bg-space-950 p-2 rounded-xl border border-emerald-500/30">📐 ደንብ/ቀመር፦ \${formula}</div>\` : ''),
            icon: '2'
          },
          {
            title: 'ደረጃ 3፦ ደረጃ በደረጃ የሂሳብና የሳይንስ ስሌት በዝርዝር (Baby-Step Calculation & Substitution)',
            sublabel: steps[2].label,
            body: steps[2].text,
            icon: '3'
          },
          {
            title: 'ደረጃ 4፦ የመጨረሻ መልስ ማረጋገጫና የወጥመዶች ትንተና (Verification & Trap Autopsy)',
            sublabel: 'የውጤት ማረጋገጫና የወጥመዶች ትንታኔ (Verification)',
            body: 'የመጨረሻውን ውጤት ከጥያቄው መስፈርት ጋር ማመሳከር፤ የልኬት አሃዶች (Units) ትክክለኛነት ማረጋገጥ እና የተለመዱ ስህተቶችን መከላከል ነው።' + (proTip ? \`<div class="mt-2 text-amber-300 font-bold text-xs bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">⚠️ ወሳኝ ማስታወሻ፦ \${proTip}</div>\` : ''),
            icon: '4'
          }
        ];
      } else {
        babySteps = [
          {
            title: 'ደረጃ 1፦ የተሰጡ መረጃዎችንና የሚፈለገውን መለየት (Givens & Problem Setup)',
            sublabel: 'የጥያቄው መነሻና መስፈርት',
            body: \`በጥያቄው ውስጥ የተሰጡት ቁጥሮች፣ ሁኔታዎችና የሚፈለገው ዋና ግብ፦ <strong class="text-white">\${problemText}</strong>\`,
            icon: '1'
          },
          {
            title: 'ደረጃ 2፦ የሚመለከተውን ቀመር ወይም ሕግ መምረጥ (Formula & Governing Principles)',
            sublabel: steps[0] ? steps[0].label : 'መመሪያ',
            body: (steps[0] ? steps[0].text : '') + (formula ? \`<div class="mt-2 font-mono text-emerald-300 text-xs bg-space-950 p-2 rounded-xl border border-emerald-500/30">📐 ደንብ/ቀመር፦ \${formula}</div>\` : ''),
            icon: '2'
          },
          {
            title: 'ደረጃ 3፦ ደረጃ በደረጃ የሂሳብና የሳይንስ ስሌት በዝርዝር (Baby-Step Calculation & Substitution)',
            sublabel: steps[1] ? steps[1].label : 'ስሌት',
            body: steps[1] ? steps[1].text : '',
            icon: '3'
          },
          {
            title: 'ደረጃ 4፦ የመጨረሻ መልስ ማረጋገጫና የወጥመዶች ትንተና (Verification & Trap Autopsy)',
            sublabel: 'የውጤት ማረጋገጫና ጥንቃቄ',
            body: 'ውጤቱ ምክንያታዊ መሆኑንና አሃዱ (Unit/Notation) ትክክል መሆኑን ማረጋገጥ።' + (proTip ? \`<div class="mt-2 text-amber-300 font-bold text-xs bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">⚠️ ወሳኝ ማስታወሻ፦ \${proTip}</div>\` : ''),
            icon: '4'
          }
        ];
      }

      // Dynamic Key Vocabulary from flashcards & survey
      const vocabList = (st.reciteFlashcards || []).map((card, idx) => {
        let term = card.q.replace(/^(what is|what are|define|explain|state|give the definition of|what does the symbol)\\s+/i, '').replace(/[?]+$/, '').trim();
        if (!term) term = \`ጽንሰ-ሀሳብ \${idx + 1}\`;
        term = term.charAt(0).toUpperCase() + term.slice(1);
        return {
          term: term,
          def: card.a,
          fullQ: card.q
        };
      });

      container.innerHTML = \`
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-7 animate-fadeIn shadow-2xl">
          
          <!-- Top Typography Toolbar & Reading Controls -->
          <div class="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs uppercase font-black text-emerald-400 tracking-wider">ደረጃ 3 ከ 5 • ጥልቅ ንባብ እና ደረጃ-በደረጃ ምሳሌዎች (STAGE 3: READ)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">ዝርዝር ትንታኔ እና በደረጃ የተሰሉ ማብራሪያዎች</h3>
              <p class="text-xs sm:text-sm text-slate-300">በጥንቃቄ አንብብ፤ በእያንዳንዱ የሒሳብ ወይም የሳይንስ ስሌት ውስጥ የተከናወኑትን 4 ደረጃዎች አስተውል።</p>
            </div>

            <!-- Typography Controls -->
            <div class="shrink-0 flex items-center gap-2 bg-space-950 p-1.5 rounded-2xl border border-slate-800">
              <span class="text-[11px] font-bold text-slate-400 px-2">ፊደል (Font):</span>
              <button onclick="setReadingFontSize('sm')" class="px-2.5 py-1 rounded-xl text-xs font-black transition \${gState.activeFontSize === 'sm' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'} cursor-pointer">A-</button>
              <button onclick="setReadingFontSize('md')" class="px-2.5 py-1 rounded-xl text-xs font-black transition \${gState.activeFontSize === 'md' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'} cursor-pointer">A</button>
              <button onclick="setReadingFontSize('lg')" class="px-2.5 py-1 rounded-xl text-xs font-black transition \${gState.activeFontSize === 'lg' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'} cursor-pointer">A+</button>
            </div>
          </div>

          <!-- Main Reading Content & Side Companion Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <!-- Column 1 & 2: Core Notes, Vocabulary Table, and 4-Step Worked Example -->
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
                
                <div id="readingNotesBody" class="\${fontSizeClass} text-slate-200 leading-relaxed font-sans space-y-3">
                  \${st.coreNotes}
                </div>
              </div>

              <!-- DYNAMIC KEY VOCABULARY TABLE (የቁልፍ ቃላት ዝርዝርና ፍቺ) -->
              \${vocabList.length > 0 ? \`
                <div class="p-5 sm:p-6 rounded-2xl bg-space-950 border border-slate-800 space-y-4">
                  <div class="flex items-center justify-between border-b border-slate-850 pb-3 flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">📚</span>
                      <div>
                        <h4 class="text-xs sm:text-sm font-black text-emerald-300 font-display">
                          የቁልፍ ቃላት ዝርዝርና ፍቺ (KEY VOCABULARY & DEFINITIONS)
                        </h4>
                        <p class="text-[11px] text-slate-400">በዚህ ርዕስ ውስጥ ያሉ ወሳኝ ፅንሰ-ሀሳቦችና መደበኛ የትምህርት ሚኒስቴር ፍቺዎቻቸው</p>
                      </div>
                    </div>
                    <span class="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      MoE Standard Glossary
                    </span>
                  </div>

                  <div class="overflow-x-auto rounded-xl border border-slate-850">
                    <table class="w-full text-left text-xs text-slate-200">
                      <thead class="bg-space-900 text-slate-300 font-black uppercase text-[10px] tracking-wider border-b border-slate-800">
                        <tr>
                          <th class="px-3.5 py-2.5 w-1/3">ቁልፍ ቃል / ፅንሰ-ሀሳብ (Term)</th>
                          <th class="px-3.5 py-2.5 w-2/3">መደበኛ ፍቺ (MoE Definition)</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-850 font-sans">
                        \${vocabList.map(v => \`
                          <tr class="hover:bg-space-900/40 transition">
                            <td class="px-3.5 py-3 align-top font-bold text-emerald-300">
                              <span class="block">\${v.term}</span>
                              <span class="text-[10px] text-slate-400 font-normal">\${v.fullQ}</span>
                            </td>
                            <td class="px-3.5 py-3 align-top text-slate-300 leading-relaxed font-mono text-[11px] sm:text-xs">
                              \${v.def}
                            </td>
                          </tr>
                        \`).join('')}
                      </tbody>
                    </table>
                  </div>
                </div>
              \` : ''}

              <!-- EXTREMELY DETAILED 4-STEP BABY-STEP WORKED EXAMPLE -->
              <div class="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-space-950 via-space-900 to-space-950 border border-emerald-500/40 space-y-5 shadow-xl">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
                  <span class="text-xs sm:text-sm font-black text-emerald-300 flex items-center gap-2 font-display">
                    <span>💡</span> ደረጃ በደረጃ የተሰራ መደበኛ ምሳሌ (STEP-BY-STEP WORKED EXAMPLE)
                  </span>
                  <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Official Method • 4 Baby Steps
                  </span>
                </div>
                
                <h4 class="text-sm sm:text-base font-black text-white font-display">\${st.example.title}</h4>
                
                <!-- Problem Statement -->
                <div class="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                  <div class="text-[10px] font-black uppercase text-amber-400 tracking-wider">የተሰጠው የጥያቄ ፅንሰ-ሀሳብ (Problem):</div>
                  <p class="text-xs sm:text-sm text-slate-200 font-mono font-medium leading-relaxed">\${problemText}</p>
                </div>

                <!-- 4-Step Detailed Baby Step Breakdown -->
                <div class="space-y-3 pt-2">
                  \${babySteps.map((bStep) => \`
                    <div class="p-4 rounded-xl bg-space-900/80 border border-slate-800/80 space-y-2 hover:border-emerald-500/40 transition">
                      <div class="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-black gap-1">
                        <span class="text-emerald-300 flex items-center gap-2">
                          <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold border border-emerald-500/30 shrink-0">\${bStep.icon}</span>
                          <span>\${bStep.title}</span>
                        </span>
                        <span class="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 self-start sm:self-auto">\${bStep.sublabel}</span>
                      </div>
                      <div class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans pl-0 sm:pl-8">\${bStep.body}</div>
                    </div>
                  \`).join('')}
                </div>

                <!-- Pro-Tip Box -->
                \${proTip ? \`
                  <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-300 flex items-start gap-3">
                    <span class="text-xl shrink-0">⚠️</span>
                    <div class="space-y-0.5">
                      <strong class="font-black text-amber-200 uppercase tracking-wide">የፈተና ምክረ-ሀሳብ (Pro-Tip):</strong>
                      <p class="text-amber-300/90 leading-relaxed">\${proTip}</p>
                    </div>
                  </div>
                \` : ''}

                <!-- Check My Understanding Micro-Challenge -->
                <div class="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>🎯</span> ራስህን ፈትሽ (CHECK YOUR UNDERSTANDING)
                    </span>
                    <span class="text-[10px] text-slate-400">Micro-Check</span>
                  </div>
                  <p class="text-xs text-slate-200">
                    ከላይ በተሰራው ምሳሌ መሰረት፣ 4ቱን ደረጃዎች በሚገባ ተረድተሃል?
                  </p>
                  <div class="flex items-center gap-2 flex-wrap">
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
                  \${st.questions.map((q) => \`
                    <label class="flex items-start gap-2.5 p-2.5 rounded-xl bg-space-900/60 border border-slate-850 text-xs text-slate-300 cursor-pointer">
                      <input type="checkbox" class="mt-0.5 rounded text-emerald-500 focus:ring-0">
                      <span>\${q}</span>
                    </label>
                  \`).join('')}

                  \${customQs.map((q) => \`
                    <label class="flex items-start gap-2.5 p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200 cursor-pointer">
                      <input type="checkbox" class="mt-0.5 rounded text-amber-500 focus:ring-0">
                      <span>\${q}</span>
                    </label>
                  \`).join('')}
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
                <textarea id="lessonUserNotes" oninput="saveUserNotes(this.value)" placeholder="አስፈላጊ የሆኑ ነጥቦችን ወይም ቀመሮችን በራስህ አባባል እዚህ ጻፍ..." class="w-full bg-space-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none h-44 resize-none leading-relaxed">\${userNote}</textarea>
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
      \`;
    }

    function setReadingFontSize(size) {
      gState.activeFontSize = size;
      saveState();
      const el = document.getElementById('readingNotesBody');
      if (el) {
        el.className = \`\${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'} text-slate-200 leading-relaxed font-sans space-y-3\`;
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
        showToast('ምሳሌውን በድጋሚ ተመልከት ወይም የቀደሙትን ፅንሰ-ሀሳቦች ከላይ ከማብራሪያው ከልስ! 📚');
      }
    }
`;

logic = logic.slice(0, pStart) + newReadSection + logic.slice(pEnd);

// =============================================================================
// 2. UPGRADE GLOBAL SEARCH TO DUAL-GRADE (GRADE 7 & 8 TOGETHER)
// =============================================================================
const oldSearchStart = '    function performGlobalSearch(query) {';
const oldSearchEnd = '    function jumpToSubtopicFromSearch(grade, subjectId, stId) {';

const ps1 = logic.indexOf(oldSearchStart);
const ps2 = logic.indexOf(oldSearchEnd);

if (ps1 !== -1 && ps2 !== -1) {
  const newSearchFunction = `    function performGlobalSearch(query) {
      const q = query.trim().toLowerCase();
      const resultsContainer = document.getElementById('globalSearchResults');
      if (!resultsContainer) return;

      const matches = [];
      const gradesToSearch = ['7', '8'];

      gradesToSearch.forEach(gKey => {
        const subjects = GALACTIC_DATABASE[gKey];
        if (!subjects) return;

        Object.keys(subjects).forEach(sKey => {
          const sObj = subjects[sKey];
          const meta = SUBJECT_METADATA[sKey] || { am: '', name: sObj.name, icon: sObj.icon };

          sObj.units.forEach(u => {
            if (u.subtopics) {
              u.subtopics.forEach(st => {
                const textToSearch = \`\${gKey} \${meta.name} \${meta.am} \${u.number} \${u.title} \${st.code} \${st.title} \${st.survey.blueprint} \${st.survey.keyFormulas || ''}\`.toLowerCase();
                if (!q || textToSearch.includes(q)) {
                  matches.push({
                    grade: gKey,
                    subjectKey: sKey,
                    subjectMeta: meta,
                    unit: u,
                    subtopic: st
                  });
                }
              });
            }
          });
        });
      });

      if (matches.length === 0) {
        resultsContainer.innerHTML = \`
          <div class="text-xs text-slate-400 py-8 text-center space-y-1">
            <span class="text-2xl">🔍</span>
            <p>"<strong>\${query}</strong>" የሚል ርዕስ አልተገኘም። እባክዎ ፊደላቱን አስተካክለው ይሞክሩ።</p>
          </div>
        \`;
        return;
      }

      resultsContainer.innerHTML = matches.slice(0, 20).map(m => \`
        <div onclick="jumpToSubtopicFromSearch('\${m.grade}', '\${m.subjectKey}', '\${m.subtopic.id}')" class="p-3.5 rounded-2xl bg-space-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-space-850 cursor-pointer transition flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl p-2 rounded-xl bg-space-900 border border-slate-800">\${m.subjectMeta.icon}</span>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">\${m.grade}ኛ ክፍል</span>
                <span class="text-xs text-slate-400 font-bold">\${m.subjectMeta.name} (\${m.subjectMeta.am}) • \${m.unit.number}</span>
              </div>
              <h5 class="text-xs sm:text-sm font-black text-white mt-0.5">\${m.subtopic.code} \${m.subtopic.title}</h5>
              <p class="text-[11px] text-slate-400 line-clamp-1 mt-0.5">\${m.subtopic.survey.blueprint}</p>
            </div>
          </div>
          <span class="text-emerald-400 text-xs font-black shrink-0">መዝገብ 👉</span>
        </div>
      \`).join('');
    }

`;
  logic = logic.slice(0, ps1) + newSearchFunction + logic.slice(ps2);
  console.log('Dual-grade global search applied.');
}

// =============================================================================
// 3. KEYBOARD SHORTCUTS FOR NAVIGATION (Ctrl+K, Esc, Arrows)
// =============================================================================
if (!logic.includes('window.addEventListener(\'keydown\', handleGlobalShortcuts);')) {
  const shortcutHandler = `
    // GLOBAL KEYBOARD NAVIGATION SHORTCUTS
    function handleGlobalShortcuts(e) {
      const tag = (e.target.tagName || '').toLowerCase();
      const isInput = tag === 'input' || tag === 'textarea';

      // Ctrl+K or / opens Spotlight Search
      if ((e.ctrlKey && (e.key === 'k' || e.key === 'K')) || (!isInput && e.key === '/')) {
        e.preventDefault();
        openGlobalSearchModal();
        return;
      }

      // Esc closes modals
      if (e.key === 'Escape') {
        closeGlobalSearchModal();
        closeSyllabusDrawer();
        return;
      }

      // Arrow keys for previous/next subtopic when in SQ3R tab and not in an input
      if (!isInput && gState.activeTab === 'sq3r') {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToPrevSubtopic();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToNextSubtopic();
        }
      }
    }
    window.addEventListener('keydown', handleGlobalShortcuts);
`;
  logic += shortcutHandler;
  console.log('Global keyboard shortcuts hooked.');
}

fs.writeFileSync(logicPath, logic, 'utf8');
console.log('src/app_logic.js successfully patched with 4-step baby steps, vocabulary table, and navigation shortcuts!');
