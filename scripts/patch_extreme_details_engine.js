const fs = require('fs');
const path = require('path');

console.log('Upgrading Curriculum Intelligence Engine & Read Step Details...');

const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');
let logic = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// 1. REVISE getCurriculumIntel WITH EXTREME PEDAGOGICAL DEPTH
// =============================================================================
const oldIntelStart = '    function getCurriculumIntel(st, nodeKey) {';
const oldIntelEnd = '    // STAGE 1: SURVEY RECONNAISSANCE ENGINE';

const p1 = logic.indexOf(oldIntelStart);
const p2 = logic.indexOf(oldIntelEnd);

if (p1 === -1 || p2 === -1) {
  console.error('Could not locate getCurriculumIntel markers in app_logic.js!');
  process.exit(1);
}

const newIntelFunction = `    function getCurriculumIntel(st, nodeKey) {
      const subject = gState.activeSubject;
      const title = st.title;
      const code = st.code;
      const bp = st.survey.blueprint;
      const formula = st.survey.keyFormulas || 'Standard Method & Axioms';

      const intelMap = {
        prereq: {
          math: \`
            <div class="space-y-3">
              <div class="p-3.5 rounded-xl bg-space-900 border border-slate-800 space-y-1">
                <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">📌 የቀደመ የክፍል መነሻ (Prior Foundation):</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  ይህ ርዕስ በ6ኛ እና 7ኛ ክፍል የተማርካቸውን <strong>የመሠረታዊ ቁጥሮች እና ክፍልፋዮች ስሌት (Fractions, Decimals, & Integers)</strong> በቀጥታ መሠረት ያደረገ ነው።
                </p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div class="p-2.5 rounded-xl bg-space-950 border border-slate-800">
                  <span class="text-amber-400 font-bold block mb-1">🔑 የሚያስፈልግ ቅድመ-እውቀት፦</span>
                  <ul class="list-disc list-inside space-y-0.5 text-slate-300">
                    <li>ክፍልፋዮችን ማባዛትና ማካፈል</li>
                    <li>አዎንታዊ እና አሉታዊ ቁጥሮች (+/-)</li>
                    <li>የጋራ አባዢዎችን መለየት (GCF / LCM)</li>
                  </ul>
                </div>
                <div class="p-2.5 rounded-xl bg-space-950 border border-slate-800">
                  <span class="text-emerald-400 font-bold block mb-1">🎯 የቅድመ-ግንዛቤ ፈተና፦</span>
                  <p class="text-slate-300">ክፍልፋይን ወደ አስረኛ (Decimal) ለመቀየር አሃዛዊውን ለአካፋዩ ማካፈል እንደምንችል ታስታውሳለህ?</p>
                </div>
              </div>
            </div>
          \`,
          science: \`
            <div class="space-y-3">
              <div class="p-3.5 rounded-xl bg-space-900 border border-slate-800 space-y-1">
                <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">🔬 ሳይንሳዊ መነሻ (Scientific Foundation):</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  የሳይንሳዊ ምልከታ፣ የቤተ-ሙከራ ደንቦች (Laboratory Safety Rules) እና <strong>መደበኛ የልኬት አሃዶች (SI Units)</strong> የዚህ ትምህርት መነሻ መሰረቶች ናቸው።
                </p>
              </div>
              <div class="p-2.5 rounded-xl bg-space-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                <span class="text-amber-400 font-bold block">⚖️ ወሳኝ የልኬት አሃዶች፦</span>
                <p>ርዝመት በሜትር (m)፣ ክብደት በኪሎግራም (kg)፣ ጊዜ በሰከንድ (s) እንደሚለካ ማስታወስ ለቀጣይ ቀመሮች እጅግ ወሳኝ ነው።</p>
              </div>
            </div>
          \`,
          english: \`
            <div class="space-y-3">
              <div class="p-3.5 rounded-xl bg-space-900 border border-slate-800 space-y-1">
                <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">📖 Linguistic Foundation:</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Builds on primary sentence structure (Subject + Verb + Object), basic parts of speech, and regular/irregular verb conjugations.
                </p>
              </div>
            </div>
          \`,
          social: \`
            <div class="space-y-3">
              <div class="p-3.5 rounded-xl bg-space-900 border border-slate-800 space-y-1">
                <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">🌍 ታሪካዊና መልክአ-ምድራዊ መነሻ:</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  የካርታ ንባብ መርሆዎች፣ አቅጣጫዎች (Cardinal Points)፣ እና የዘመናት ቅደም ተከተል (Chronology) ለዚህ ምዕራፍ ዋነኛ መነሻዎች ናቸው።
                </p>
              </div>
            </div>
          \`,
          citizenship: \`
            <div class="space-y-3">
              <div class="p-3.5 rounded-xl bg-space-900 border border-slate-800 space-y-1">
                <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">⚖️ ማህበረሰባዊ መነሻ:</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  በቤተሰብ፣ በትምህርት ቤት እና በህብረተሰብ ውስጥ ሰላማዊ አብሮ መኖር፣ የህግ አክባሪነት እና ግዴታን መወጣት መነሻ መሰረቶች ናቸው።
                </p>
              </div>
            </div>
          \`,
          it: \`
            <div class="space-y-3">
              <div class="p-3.5 rounded-xl bg-space-900 border border-slate-800 space-y-1">
                <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">💻 የቴክኖሎጂ መነሻ:</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  የኮምፒውተር መሰረታዊ ክፍሎች (Hardware vs. Software)፣ የማከማቻ እና የግቤት መሣሪያዎች አሰራር መነሻ ነው።
                </p>
              </div>
            </div>
          \`
        },
        core: {
          math: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-emerald-500/30 space-y-2">
                <div class="text-xs font-black text-emerald-300 uppercase tracking-wider">🏛️ ማዕከላዊው የትምህርት ፅንሰ-ሀሳብ፦</div>
                <p class="text-xs sm:text-sm text-white font-medium leading-relaxed">\${bp}</p>
              </div>
              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 space-y-2 text-xs">
                <span class="text-amber-400 font-bold block">🔍 3ቱ ዋና ዋና ነጥቦች፦</span>
                <ol class="list-decimal list-inside space-y-1 text-slate-300">
                  <li><strong>ፍቺና ባህሪ፦</strong> ፅንሰ-ሀሳቡ የሚገልጸውን የቁጥሮች ወይም የጂኦሜትሪ ባህሪ መረዳት።</li>
                  <li><strong>የስሌት ቅደም ተከተል፦</strong> ቀመሮችን ከመጠቀም በፊት ደረጃዎችን በቅደም ተከተል ማደራጀት።</li>
                  <li><strong>ማጠቃለያ ድምዳሜ፦</strong> የሚገኘውን ውጤት ከመነሻው ጥያቄ ጋር አዛምዶ ትክክለኛነቱን ማረጋገጥ።</li>
                </ol>
              </div>
            </div>
          \`,
          science: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-emerald-500/30 space-y-2">
                <div class="text-xs font-black text-emerald-300 uppercase tracking-wider">🔬 ዋናው ሳይንሳዊ መርህ፦</div>
                <p class="text-xs sm:text-sm text-white font-medium leading-relaxed">\${bp}</p>
              </div>
              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                ሳይንስ የተፈጥሮን ህግጋት በምክንያት እና በውጤት (Cause & Effect) ይተነትናል። ይህ ርዕስ በፈተና ወቅት ቀጥተኛ ሳይንሳዊ ማብራሪያዎችን ይጠይቃል።
              </div>
            </div>
          \`,
          english: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-emerald-500/30 space-y-2">
                <div class="text-xs font-black text-emerald-300 uppercase tracking-wider">📖 Core Communicative Competency:</div>
                <p class="text-xs sm:text-sm text-white font-medium leading-relaxed">\${bp}</p>
              </div>
            </div>
          \`,
          social: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-emerald-500/30 space-y-2">
                <div class="text-xs font-black text-emerald-300 uppercase tracking-wider">🌍 ማህበረሰባዊና ተፈጥሯዊ ትስስር፦</div>
                <p class="text-xs sm:text-sm text-white font-medium leading-relaxed">\${bp}</p>
              </div>
            </div>
          \`,
          citizenship: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-emerald-500/30 space-y-2">
                <div class="text-xs font-black text-emerald-300 uppercase tracking-wider">⚖️ ዲሞክራሲያዊ እሴቶችና መርሆዎች፦</div>
                <p class="text-xs sm:text-sm text-white font-medium leading-relaxed">\${bp}</p>
              </div>
            </div>
          \`,
          it: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-emerald-500/30 space-y-2">
                <div class="text-xs font-black text-emerald-300 uppercase tracking-wider">💻 የዲጂታል ቴክኖሎጂ መዋቅር፦</div>
                <p class="text-xs sm:text-sm text-white font-medium leading-relaxed">\${bp}</p>
              </div>
            </div>
          \`
        },
        formula: {
          math: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">⚡ መደበኛ ቀመር እና ትንታኔ (FORMULA DERIVATION):</span>
                <code class="font-mono text-sm sm:text-base font-black text-amber-300 bg-space-950 px-4 py-2 rounded-xl block border border-amber-500/20">\${formula}</code>
              </div>
              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 text-xs space-y-2">
                <span class="text-emerald-400 font-bold block">📐 የፊደላት ፍቺ (Variables Definition):</span>
                <p class="text-slate-300 leading-relaxed">
                  በቀመሩ ውስጥ ያሉትን እያንዳንዱን ተለዋዋጮች (Variables) ለይቶ ማወቅ ስህተትን ሙሉ በሙሉ ያስቀራል። የተሰጡ ቁጥሮችን በቀመሩ ቦታ በጥንቃቄ ተክተህ አቅልል።
                </p>
              </div>
            </div>
          \`,
          science: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">⚡ ሳይንሳዊ እኩልዮሽ እና ቀመር:</span>
                <code class="font-mono text-sm sm:text-base font-black text-amber-300 bg-space-950 px-4 py-2 rounded-xl block border border-amber-500/20">\${formula}</code>
              </div>
              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 text-xs text-slate-300">
                አሃዶች (Units) ሁልጊዜ ወደ መደበኛ SI Unit (m, kg, s, N, J) መቀየር እንዳለባቸው አይዘንጉ!
              </div>
            </div>
          \`,
          english: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">⚡ Structural Rule / Pattern:</span>
                <code class="font-mono text-sm sm:text-base font-black text-amber-300 bg-space-950 px-4 py-2 rounded-xl block border border-amber-500/20">\${formula}</code>
              </div>
            </div>
          \`,
          social: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">⚡ የልኬት ወይም የታሪክ መደበኛ መመሪያ:</span>
                <code class="font-mono text-sm sm:text-base font-black text-amber-300 bg-space-950 px-4 py-2 rounded-xl block border border-amber-500/20">\${formula}</code>
              </div>
            </div>
          \`,
          citizenship: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">⚡ የህግና የመብት ሚዛን:</span>
                <code class="font-mono text-sm sm:text-base font-black text-amber-300 bg-space-950 px-4 py-2 rounded-xl block border border-amber-500/20">\${formula}</code>
              </div>
            </div>
          \`,
          it: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">⚡ የመረጃ ፍሰት ስልተ-ቀመር (Algorithm):</span>
                <code class="font-mono text-sm sm:text-base font-black text-amber-300 bg-space-950 px-4 py-2 rounded-xl block border border-amber-500/20">\${formula}</code>
              </div>
            </div>
          \`
        },
        pitfall: {
          math: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <div class="flex items-center gap-2 text-rose-300 text-xs font-black uppercase tracking-wider">
                  <span>⚠️</span> <span>የሚኒስቴር ፈተና ወጥመድ ራዳር (COMMON EXAM TRAPS):</span>
                </div>
                <ul class="list-disc list-inside text-xs sm:text-sm text-slate-200 space-y-1.5 leading-relaxed">
                  <li><strong>ዜሮን እንደ አካፋይ መጠቀም፦</strong> በዜሮ ማካፈል ያልተተረጎመ (Undefined) እንጂ ዜሮ አይደለም! (a/0 ≠ 0)</li>
                  <li><strong>የምልክቶች ጥንቃቄ፦</strong> አሉታዊ ቁጥርን በአሉታዊ ቁጥር ስናባዛ ወይም ስናካፍል አዎንታዊ (+) እንደሚሆን መዘንጋት።</li>
                  <li><strong>የስሌት ቅደም ተከተል (PEMDAS)፦</strong> ማባዛትና ማካፈል ከመደመርና መቀነስ ይቀድማሉ።</li>
                </ul>
              </div>
              <div class="p-3 rounded-xl bg-space-950 border border-slate-800 text-xs text-amber-300">
                💡 <strong>ፈታኙ የሚያዘጋጀው ወጥመድ፦</strong> ተማሪዎች በስህተት የሚያገኙትን ቁጥር ሁልጊዜ በምርጫ (A) ወይም (B) ላይ ያስቀምጠዋል፤ እንዳትሸወድ!
              </div>
            </div>
          \`,
          science: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <span class="text-xs font-black text-rose-300 uppercase tracking-wider">⚠️ የተለመዱ ሳይንሳዊ የስህተት ወጥመዶች:</span>
                <ul class="list-disc list-inside text-xs sm:text-sm text-slate-200 space-y-1.5">
                  <li><strong>መጠነ-ቁስ (Mass) vs. ክብደት (Weight)፦</strong> መጠነ-ቁስ በኪሎግራም (kg) ይለካል፤ ቦታ ቢቀየር አይለወጥም። ክብደት በኒውተን (N) የሚለካ የመሬት ስበት ኃይል ነው።</li>
                  <li><strong>የሙቀት መጠን vs. ሙቀት (Heat)፦</strong> ሙቀት የኃይል አይነት ሲሆን በJoule ይለካል፤ የሙቀት መጠን ደግሞ በ°C ወይም Kelvin ይለካል።</li>
                </ul>
              </div>
            </div>
          \`,
          english: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <span class="text-xs font-black text-rose-300 uppercase tracking-wider">⚠️ Ministry Exam Traps:</span>
                <ul class="list-disc list-inside text-xs sm:text-sm text-slate-200 space-y-1.5">
                  <li>Confusing past simple (e.g., 'wrote') with past participle (e.g., 'written').</li>
                  <li>Subject-verb disagreement with collective nouns and indefinite pronouns ('everyone', 'neither').</li>
                </ul>
              </div>
            </div>
          \`,
          social: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <span class="text-xs font-black text-rose-300 uppercase tracking-wider">⚠️ የፈተና ወጥመዶች:</span>
                <p class="text-xs sm:text-sm text-slate-200">
                  የኬክሮስ (Latitude - ሰሜን/ደቡብ) እና የኬንትሮስ (Longitude - ምስራቅ/ምዕራብ) መስመሮችን ሚና ማምታታት። ሰዓት የሚሰላው በኬንትሮስ ዲግሪዎች አማካኝነት ነው።
                </p>
              </div>
            </div>
          \`,
          citizenship: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <span class="text-xs font-black text-rose-300 uppercase tracking-wider">⚠️ የፈተና ወጥመዶች:</span>
                <p class="text-xs sm:text-sm text-slate-200">
                  መብት ወሰን የለውም ብሎ ማሰብ፤ ዲሞክራሲያዊ መብት የሌሎችን ዜጎች መብት እስካልጣሰ ድረስ ብቻ የሚተገበር ነው።
                </p>
              </div>
            </div>
          \`,
          it: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <span class="text-xs font-black text-rose-300 uppercase tracking-wider">⚠️ የፈተና ወጥመዶች:</span>
                <p class="text-xs sm:text-sm text-slate-200">
                  RAM (ጊዚያዊ ማህደረ-ትውስታ - ኃይል ሲጠፋ መረጃ ይጠፋል) እና ROM (ቋሚ ማህደረ-ትውስታ) ማምታታት።
                </p>
              </div>
            </div>
          \`
        },
        anchor: {
          math: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">🇪🇹 የኢትዮጵያ ነባራዊ እውነታ ትስስር (ETHIOPIAN REAL-WORLD ANCHOR):</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong>የኢትዮጵያ ንግድ ባንክ እና የብር ዝውውር፦</strong> ክፍልፋዮችና አስረኛ ቁጥሮች በየቀኑ በኢትዮጵያ የገንዘብ ግብይት (CBE Birr፣ Telebirr እና ወለድ ስሌት) ውስጥ በቀጥታ ስራ ላይ ይውላሉ።
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                <strong class="text-emerald-400 block">🏗️ የታላቁ ህዳሴ ግድብ እና የላሊበላ ምህንድስና፦</strong>
                <p>የኮንክሪት ስሌት፣ የውሃ ፍሰት እና የድንጋይ ውቅር አብያተ-ክርስቲያናት ምህንድስና የዚህ ርዕስ ተግባራዊ ማሳያዎች ናቸው።</p>
              </div>
            </div>
          \`,
          science: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">🇪🇹 የኢትዮጵያ ተፈጥሮና ጂኦሎጂ:</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  የኢትዮጵያ ስምጥ ሸለቆ (Great Rift Valley)፣ የኤርታሌ እሳተ-ጎመራ ባስልት፣ እና የአዋሽ ተፋሰስ ስነ-ምህዳር ጥናት።
                </p>
              </div>
            </div>
          \`,
          english: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">🇪🇹 Cultural & Tourism Application:</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Writing and speaking about Ethiopia's world heritage sites (Axum, Lalibela, Semien Mountains) using accurate grammar and academic vocabulary.
                </p>
              </div>
            </div>
          \`,
          social: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">🇪🇹 የታሪክ እና የቅርስ እውነታ:</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  በአፋር ሃዳር የተገኘችው ድንቅነሽ (Lucy)، የአክሱም ስልጣኔ፣ እና የዓድዋ ድል ታሪካዊ ፋይዳ በህብረተሰብ ጥናት ውስጥ ዋነኛ ምሳሌዎች ናቸው።
                </p>
              </div>
            </div>
          \`,
          citizenship: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">🇪🇹 የሀገር ግንባታ እና ባህላዊ ሽምግልና:</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  የኢትዮጵያ ባህላዊ የግጭት አፈታት ስልቶች (ሽምግልና፣ የገዳ ስርዓት) እና የህገ-መንግስታዊ ዲሞክራሲ ግንባታ።
                </p>
              </div>
            </div>
          \`,
          it: \`
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-space-900 border border-amber-500/40 space-y-2">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider">🇪🇹 የዲጂታል ኢትዮጵያ ራዕይ:</span>
                <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  የትምህርት ቤቶች የኮምፒውተር ላብራቶሪዎች ማስፋፊያ፣ የኢትዮ-ቴሌኮም የኔትወርክ ዝርጋታ እና የግዕዝ ፊደል ዲጂታይዜሽን።
                </p>
              </div>
            </div>
          \`
        }
      };

      const fallback = intelMap[nodeKey] && intelMap[nodeKey][subject] 
        ? intelMap[nodeKey][subject] 
        : \`<strong>\${title}:</strong> \${bp}\`;
      return fallback;
    }
`;

logic = logic.substring(0, p1) + newIntelFunction + '\n' + logic.substring(p2);
console.log('Successfully upgraded Curriculum Intelligence Engine with extreme details.');

fs.writeFileSync(logicPath, logic, 'utf8');
console.log('src/app_logic.js updated.');
