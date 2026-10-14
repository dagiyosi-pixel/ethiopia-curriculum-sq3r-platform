const fs = require('fs');
const path = require('path');

console.log('Writing World-Class SQ3R Learning Suite with Deep Amharic Interpretations & Baby-Step Details...');

const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');
let code = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// REPLACEMENT BLOCK: FROM renderCurrentStep DOWN TO FLASHCARDS
// =============================================================================
const startMarker = '    // RENDER CURRENT SQ3R STEP';
const endMarker = '    // =========================================================================\n    // FLASHCARDS';

const sIdx = code.indexOf(startMarker);
const eIdx = code.indexOf(endMarker);

if (sIdx === -1 || eIdx === -1) {
  console.error('Could not locate markers in app_logic.js! sIdx:', sIdx, 'eIdx:', eIdx);
  process.exit(1);
}

const replacementCode = `    // RENDER CURRENT SQ3R STEP WITH DEEP AMHARIC INTERPRETATIONS & BABY STEPS
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

      container.innerHTML = \`
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
                    \${st.code} Syllabus Recon
                  </span>
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-white font-display">
                  \${st.code} \${st.title} • የስርዓተ-ትምህርት መዋቅርና ቅኝት
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
                <button onclick="toggleXRayScanner()" id="xrayScannerToggleBtn" class="px-3.5 py-2 rounded-2xl text-xs font-black transition flex items-center gap-2 \${isXray ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 radar-pulse' : 'bg-space-900 border border-slate-700 text-slate-300 hover:text-white'} cursor-pointer">
                  <span>🔬</span>
                  <span>X-Ray Scanner: \${isXray ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>

            <!-- Live Recon Progress Meter Bar (0% to 100%) -->
            <div class="mt-4 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 relative z-10">
              <div class="flex items-center gap-2 text-xs font-bold text-slate-300">
                <span>📡 የቅኝት ሽፋን መለኪያ (Reconnaissance Coverage):</span>
                <span id="reconMeterBadge" class="text-emerald-400 font-mono font-black">\${reconPct}% Recon Complete</span>
              </div>
              <div class="w-full sm:w-64 h-2.5 bg-space-950 rounded-full overflow-hidden border border-slate-800">
                <div id="surveyReconMeter" class="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 transition-all duration-500" style="width: \${reconPct}%"></div>
              </div>
            </div>

            <!-- High-Level Architectural Blueprint & Formulas -->
            <div class="mt-6 space-y-4 relative z-10">
              <div class="p-4 sm:p-5 rounded-2xl bg-space-900/90 border border-slate-800 space-y-2">
                <div class="text-[10px] uppercase font-black text-emerald-400 tracking-widest flex items-center gap-2">
                  <span>📡</span> <span>HIGH-LEVEL ARCHITECTURAL BLUEPRINT (የፅንሰ-ሀሳብ ማዕቀፍ)</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  \${st.survey.blueprint}
                </p>
              </div>

              \${st.survey.keyFormulas ? \`
                <div class="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-space-950 to-emerald-950/40 border border-emerald-500/40 flex items-center justify-between gap-4 flex-wrap">
                  <div class="flex items-center gap-2.5">
                    <span class="text-xl">⚡</span>
                    <div>
                      <div class="text-xs font-black text-emerald-300 uppercase tracking-wider">ዋናው ሕግ / ቀመር (CORE THEOREM / FORMULA / LAW):</div>
                      <div class="text-[11px] text-slate-400">በዚህ ርዕስ ስር ያለው ቁልፍ የፈተና መለኪያ ቀመር</div>
                    </div>
                  </div>
                  <code class="font-mono text-xs sm:text-sm font-black text-amber-300 bg-space-950 px-4 py-2 rounded-xl border border-amber-500/30 shadow-inner">
                    \${st.survey.keyFormulas}
                  </code>
                </div>
              \` : ''}
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
                  \${getCurriculumIntel(st, 'core')}
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
                        \${st.survey.blueprint.substring(0, 140)}...
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

              <div id="surveyNotesContainer" class="p-5 rounded-2xl bg-space-950/90 border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans \${isXray ? 'xray-active' : ''}">
                \${enrichedNotes}
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
                <span id="checklistProgressBadge" class="text-xs font-mono text-amber-400 font-bold">0 / \${st.survey.objectives.length} Verified</span>
              </div>

              <div class="space-y-2.5">
                \${st.survey.objectives.map((obj, i) => \`
                  <label class="flex items-start gap-3 p-3.5 rounded-2xl bg-space-900/80 border border-slate-800 hover:border-slate-700 cursor-pointer transition">
                    <input type="checkbox" id="surveyCheck-\${i}" onchange="checkSurveyCompletion()" class="mt-0.5 rounded text-emerald-500 focus:ring-0">
                    <span class="text-xs sm:text-sm text-slate-200 font-medium">\${obj}</span>
                  </label>
                \`).join('')}
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
      \`;

      initSurveyTimer();
      checkSurveyCompletion();
    }

    // =========================================================================
    // STAGE 2: QUESTION ENGINE WITH CUSTOM INQUIRIES & AMHARIC STARTERS
    // =========================================================================
    function renderQuestionStep(st, container) {
      const customQs = gState.customQuestions[st.id] || [];

      container.innerHTML = \`
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
            \${st.questions.map((qText, qIdx) => \`
              <div class="p-4 sm:p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-2.5">
                <div class="flex items-center gap-2 text-xs font-black text-emerald-400">
                  <span>❓</span> <span>ዋና ጥያቄ \${qIdx+1}:</span>
                </div>
                <h4 class="text-xs sm:text-sm font-bold text-white leading-relaxed">\${qText}</h4>
                <textarea id="hypoAnswer-\${qIdx}" placeholder="ከማንበብህ በፊት ያለህን ግምት ወይም መልስ እዚህ ጻፍ..." class="w-full bg-space-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none h-16 resize-none"></textarea>
              </div>
            \`).join('')}
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
              \${customQs.map((q, idx) => \`
                <div class="p-3 rounded-xl bg-space-900/80 border border-slate-800 flex items-center justify-between gap-3 text-xs text-slate-200">
                  <span class="flex items-center gap-2">
                    <span class="text-amber-400">📌</span> \${q}
                  </span>
                  <button onclick="deleteCustomQuestion(\${idx})" class="text-slate-500 hover:text-rose-400 transition cursor-pointer">✕</button>
                </div>
              \`).join('')}
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
      \`;
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

      container.innerHTML = \`
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
              <button onclick="setReadingFontSize('sm')" class="px-2.5 py-1 rounded-xl text-xs font-black transition \${gState.activeFontSize === 'sm' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'} cursor-pointer">A-</button>
              <button onclick="setReadingFontSize('md')" class="px-2.5 py-1 rounded-xl text-xs font-black transition \${gState.activeFontSize === 'md' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'} cursor-pointer">A</button>
              <button onclick="setReadingFontSize('lg')" class="px-2.5 py-1 rounded-xl text-xs font-black transition \${gState.activeFontSize === 'lg' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'} cursor-pointer">A+</button>
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
                
                <div id="readingNotesBody" class="\${fontSizeClass} text-slate-200 leading-relaxed font-sans space-y-3">
                  \${st.coreNotes}
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
                
                <h4 class="text-sm sm:text-base font-black text-white font-display">\${st.example.title}</h4>
                
                <!-- Problem Statement -->
                <div class="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                  <div class="text-[10px] font-black uppercase text-amber-400 tracking-wider">የተሰጠው የጥያቄ ፅንሰ-ሀሳብ (Problem):</div>
                  <p class="text-xs sm:text-sm text-slate-200 font-mono font-medium leading-relaxed">\${st.example.problem}</p>
                </div>

                <!-- 4-Step Detailed Baby Step Breakdown -->
                <div class="space-y-3 pt-2">
                  \${st.example.steps.map((step, sIdx) => \`
                    <div class="p-4 rounded-xl bg-space-900/80 border border-slate-800/80 space-y-1.5 hover:border-emerald-500/40 transition">
                      <div class="flex items-center justify-between text-xs font-black">
                        <span class="text-emerald-400 flex items-center gap-2">
                          <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px] border border-emerald-500/30">\${sIdx+1}</span>
                          <span>\${step.label}</span>
                        </span>
                        <span class="text-[10px] text-slate-500">Verified Step</span>
                      </div>
                      <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans pl-7">\${step.text}</p>
                    </div>
                  \`).join('')}
                </div>

                <!-- Pro-Tip Box -->
                \${st.example.proTip ? \`
                  <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-300 flex items-start gap-3">
                    <span class="text-xl shrink-0">⚠️</span>
                    <div class="space-y-0.5">
                      <strong class="font-black text-amber-200 uppercase tracking-wide">የፈተና ምክረ-ሀሳብ (Pro-Tip):</strong>
                      <p class="text-amber-300/90 leading-relaxed">\${st.example.proTip}</p>
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
                  \${st.questions.map((q, idx) => \`
                    <label class="flex items-start gap-2.5 p-2.5 rounded-xl bg-space-900/60 border border-slate-850 text-xs text-slate-300 cursor-pointer">
                      <input type="checkbox" class="mt-0.5 rounded text-emerald-500 focus:ring-0">
                      <span>\${q}</span>
                    </label>
                  \`).join('')}

                  \${customQs.map((q, idx) => \`
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

      container.innerHTML = \`
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
              <button onclick="setReciteMode('flashcards')" id="reciteTab-flashcards" class="px-3 py-1.5 rounded-xl text-xs font-black transition \${activeReciteMode === 'flashcards' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'} cursor-pointer">
                🃏 ፍላሽ ካርዶች
              </button>
              <button onclick="setReciteMode('journal')" id="reciteTab-journal" class="px-3 py-1.5 rounded-xl text-xs font-black transition \${activeReciteMode === 'journal' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'} cursor-pointer">
                ✍️ የራስ አገላለጽ
              </button>
            </div>
          </div>

          <!-- Mode 1: 3D Leitner Flashcards Arena -->
          <div id="reciteMode-flashcards" class="\${activeReciteMode === 'flashcards' ? '' : 'hidden'} space-y-6">
            <div class="max-w-xl mx-auto py-2">
              <div onclick="flipFlashcard()" id="activeFlashcard" class="glass-crest h-60 sm:h-64 rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-emerald-500/40 relative shadow-2xl transition hover:border-emerald-400">
                <span id="flashcardSideLabel" class="text-[10px] uppercase font-black text-emerald-400 tracking-widest absolute top-4 left-4">QUESTION (ጥያቄ)</span>
                <span class="text-xs text-slate-400 absolute top-4 right-4">ካርዱን ግለጥ ↺ (Spacebar)</span>

                <div class="my-auto text-center px-4">
                  <h4 id="flashcardContent" class="text-base sm:text-lg font-black text-white leading-relaxed font-display">
                    \${st.reciteFlashcards[0].q}
                  </h4>
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 pt-3">
                  <span id="flashcardCounter" class="font-mono text-amber-400 font-bold">Card 1 of \${st.reciteFlashcards.length}</span>
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
          <div id="reciteMode-journal" class="\${activeReciteMode === 'journal' ? '' : 'hidden'} space-y-5">
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
              <span>ወደ AMT ብቃት ፈተና እለፍ (+45 XP)</span> <span>👉</span>
            </button>
          </div>

        </div>
      \`;
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
      const cardKey = \`\${st.id}-c\${currentCardIndex}\`;

      const intervals = { again: 1, hard: 3, good: 7, easy: 14 };
      const days = intervals[rating] || 7;

      gState.flashcardIntervals[cardKey] = {
        days: days,
        nextReview: Date.now() + days * 86400000,
        rating: rating
      };
      gState.totalCardsMastered++;
      saveState();

      addXp(20, \`Flashcard Mastered (\${rating})\`);
      showToast(\`ካርዱ በ\${days} ቀን ውስጥ ለክለሳ ይመጣል! 🧠\`);
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
    // STAGE 5: REVIEW ENGINE (AMT EXAM WITH HIDDEN BABY-STEP DERIVATIONS & 80% GATE)
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

      container.innerHTML = \`
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-7 animate-fadeIn shadow-2xl">
          
          <!-- Header Banner -->
          <div class="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs uppercase font-black text-amber-400 tracking-wider">ደረጃ 5 ከ 5 • የብቃት ፈተና (STAGE 5: REVIEW & AMT MASTERY GATE)</span>
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
                \${qList.map((_, i) => {
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
                  return \`<span id="trackerPill-\${i}" class="\${pillClass}">\${pillText}</span>\`;
                }).join('')}
              </div>
            </div>
            <div class="flex items-center gap-4 text-xs font-bold">
              <span id="liveAttemptedCount" class="text-slate-300">\${answeredCount} of \${qList.length} የተመለሱ</span>
              <span class="text-slate-700">|</span>
              <span id="liveScoreCount" class="\${scorePct >= 80 ? 'text-emerald-400' : 'text-amber-400'} font-mono text-sm">\${correctCount} ትክክል (\${scorePct}%)</span>
              <span class="text-[11px] text-slate-400 hidden sm:inline">(የማለፊያ መስፈርት: ≥80%)</span>
            </div>
          </div>

          <!-- Question Cards -->
          <div class="space-y-6" id="quizContainer">
            \${qList.map((item, qIdx) => {
              const ans = currentQuizAnswers[qIdx];
              const isAnswered = !!ans;
              let statusBadge = '<span class="text-xs font-bold text-slate-500">ያልተመለሰ (ከታች ምረጥ)</span>';
              if (isAnswered) {
                statusBadge = ans.isCorrect
                  ? '<span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">ትክክል ✔</span>'
                  : '<span class="text-xs font-black text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/30">ተደጋግሞ መከለስ አለበት ✖</span>';
              }

              return \`
                <div class="p-5 sm:p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-4" id="quizCard-\${qIdx}">
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">ጥያቄ \${qIdx+1} ከ \${qList.length}</span>
                    <span id="quizStatus-\${qIdx}">\${statusBadge}</span>
                  </div>
                  <h4 class="text-sm sm:text-base font-bold text-white leading-relaxed">\${item.q}</h4>
                  
                  <!-- Options Grid -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    \${item.options.map((opt, optIdx) => {
                      let btnClass = 'quiz-option-btn p-3.5 rounded-xl bg-space-950 border border-slate-800 text-left text-xs sm:text-sm text-slate-300 font-medium hover:border-emerald-500 hover:text-white transition flex items-center gap-3 cursor-pointer';
                      let badgeHtml = \`<span class="w-7 h-7 rounded-lg bg-space-850 text-slate-400 border border-slate-700/60 flex items-center justify-center font-bold text-xs shrink-0">\${['A','B','C','D'][optIdx]}</span>\`;

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

                      return \`
                        <button onclick="\${isAnswered ? '' : \`answerAmtQuiz(\${qIdx}, \${optIdx})\`}" id="optBtn-\${qIdx}-\${optIdx}" class="\${btnClass}">
                          \${badgeHtml}
                          <span class="leading-snug">\${opt}</span>
                        </button>
                      \`;
                    }).join('')}
                  </div>

                  <!-- Hidden Baby-Step Detailed Solution Box (Unlocked upon trying) -->
                  <div id="quizExplanation-\${qIdx}" class="\${isAnswered ? '' : 'hidden'} mt-4">
                    \${isAnswered ? buildBabyStepSolutionHtml(item, ans.selected, qIdx, qList.length) : ''}
                  </div>
                </div>
              \`;
            }).join('')}
          </div>

          <!-- Dynamic Mastery Evaluation Banner -->
          <div id="masteryEvaluationBanner" class="\${answeredCount === qList.length && qList.length > 0 ? '' : 'hidden'} pt-5 border-t border-slate-800">
            <!-- Dynamically populated -->
          </div>

          <!-- Stage 5 Footer -->
          <div class="pt-5 border-t border-slate-800 flex justify-between items-center" id="reviewFooterActions">
            <button onclick="setSq3rStep('recite')" class="text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer">
              <span>←</span> ወደ ማስታወስ ተመለስ (Back to Recite)
            </button>
            <div class="text-xs font-bold text-slate-400">
              \${answeredCount === qList.length ? 'ሁሉም ጥያቄዎች ተገምግመዋል' : 'ማጠቃለያውን ለማየት ሁሉንም ጥያቄዎች መልስ'}
            </div>
          </div>
        </div>
      \`;

      if (answeredCount === qList.length && qList.length > 0) {
        evaluateMasteryGate(qList);
      }
    }
`;

// Splice replacement code into logic
code = code.substring(0, sIdx) + replacementCode + '\n' + code.substring(eIdx);
console.log('Successfully replaced SQ3R stages with Deep Amharic interpretations and Baby Steps.');

fs.writeFileSync(logicPath, code, 'utf8');
console.log('src/app_logic.js updated successfully!');
