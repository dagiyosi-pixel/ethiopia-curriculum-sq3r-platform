const fs = require('fs');
const path = require('path');

console.log('Building World-Class SQ3R Learning Suite Logic...');

const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');
let logic = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// Helper: Curriculum Intelligence Engine for Constellation & Assistant
// =============================================================================
const suiteLogic = `
    // =========================================================================
    // CURRICULUM INTELLIGENCE & CONSTELLATION ENGINE
    // =========================================================================
    function getCurriculumIntel(st, nodeKey) {
      const subject = gState.activeSubject;
      const title = st.title;
      const code = st.code;
      const bp = st.survey.blueprint;
      const formula = st.survey.keyFormulas || 'Standard Method & Axioms';

      const intelMap = {
        prereq: {
          math: \`ይህ ርዕስ ከዚህ በፊት የተማርካቸውን የመሠረታዊ ቁጥሮች እና የስሌት ደንቦች (Basic Arithmetic & Fractions) በቀጥታ መሠረት ያደረገ ነው። በቅድሚያ የአሃዞችን ዋጋ እና የክፍልፋይ ስሌቶችን ማስታወስህ ለዚህ ርዕስ ከፍተኛ እገዛ ያደርጋል።\`,
          science: \`የሳይንሳዊ ምልከታ እና የሙከራ ደንቦች (Laboratory Safety & Units of Measurement) መነሻ ናቸው። የSI አሃዶችን እና የትንታኔ መርሆችን ማስታወስ ይገባል።\`,
          english: \`Requires basic vocabulary, parts of speech (Nouns, Verbs, Adjectives), and basic sentence structures studied in primary grades.\`,
          social: \`የካርታ ንባብ መርሆዎች፣ አቅጣጫዎች እና የመልክአ-ምድራዊ አቀማመጥ እውቀትን መነሻ ያደርጋል።\`,
          citizenship: \`በህብረተሰብ ውስጥ የሰላማዊ አብሮ መኖር፣ የቤተሰብ እና የትምህርት ቤት ህጎች መነሻ ናቸው።\`,
          it: \`የኮምፒውተር መሠረታዊ ክፍሎች (Hardware & Software) እና የቁልፍ ሰሌዳ አጠቃቀም መነሻ ናቸው።\`
        },
        core: {
          math: \`<strong>ዋናው ማዕከላዊ ፅንሰ-ሀሳብ፦</strong> \${bp}<br><br>የዚህ ርዕስ ዋና ዓላማ ተማሪው የሒሳብ መዋቅሮችን፣ ቀመሮችን እና የአሰራር ቅደም ተከተሎችን በአግባቡ ተረድቶ በፈተናም ሆነ በዕለት ተዕለት ኑሮው ተግባራዊ እንዲያደርግ ማስቻል ነው።\`,
          science: \`<strong>ዋናው ሳይንሳዊ መርህ፦</strong> \${bp}<br><br>ተፈጥሮአዊ ክስተቶችን በምክንያት እና በውጤት (Cause and Effect) በማገናዘብ ሳይንሳዊ ድምዳሜ ላይ መድረስ።\`,
          english: \`<strong>Core Language Competency:</strong> \${bp}<br><br>Mastering authentic linguistic context, active comprehension, and syntactic accuracy.\`,
          social: \`<strong>የኅብረተሰብ እና የአካባቢ ግንኙነት፦</strong> \${bp}<br><br>ታሪካዊ፣ ጂኦግራፊያዊ እና ኢኮኖሚያዊ ክስተቶችን ከኢትዮጵያ ነባራዊ ሁኔታ ጋር ማስተሳሰር።\`,
          citizenship: \`<strong>የዜግነት መብትና ግዴታ፦</strong> \${bp}<br><br>ዲሞክራሲያዊ ተቋማትን ማክበር፣ የህግ የበላይነት እና ኃላፊነት የሚሰማው ዜጋ መሆን።\`,
          it: \`<strong>የዲጂታል ቴክኖሎጂ መርህ፦</strong> \${bp}<br><br>የኮምፒውተር ቴክኖሎጂን ለምርታማነት፣ ለፈጠራ እና ለእውቀት ማበልጸጊያ መጠቀም።\`
        },
        formula: {
          math: \`<strong>ቁልፍ ቀመር / ሕግ፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">\${formula}</code>ይህ ቀመር በደረጃዎች ተተንትኖ የሚሰራ ሲሆን፣ በክልላዊ ፈተናዎች ላይ ቀጥተኛ ስሌት ይጠየቅበታል።\`,
          science: \`<strong>ሳይንሳዊ ሕግ እና እኩልዮሽ፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">\${formula}</code>የአሃዶች ልኬት (Units) እንዳይዘነጋ ጥንቃቄ ያድርጉ።\`,
          english: \`<strong>Grammar Rule / Structural Pattern:</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">\${formula}</code>Always observe subject-verb agreement and contextual tense continuity.\`,
          social: \`<strong>የመልክአ-ምድር ወይም የታሪክ ቀመር / ሕግጋት፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">\${formula}</code>ካርታዎች እና መረጃዎች የሚሰሉበት መደበኛ መለኪያ።\`,
          citizenship: \`<strong>የህገ-መንግስት እና የህግ ድንጋጌዎች፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">\${formula}</code>መብቶች ከግዴታዎች ጋር ተመጣጣኝ መሆን አለባቸው።\`,
          it: \`<strong>የኮምፒውተር ሥርዓት ደንብ፦</strong><br><code class="font-mono text-amber-300 font-bold bg-space-950 px-2 py-1 rounded block my-2">\${formula}</code>የመረጃ ሂደት ቅደም ተከተል (Input ➔ Process ➔ Output ➔ Storage)።\`
        },
        pitfall: {
          math: \`<strong>የሚኒስቴር ፈተና ወጥመድ ራዳር (Exam Pitfall):</strong><br>ተማሪዎች አብዛኛውን ጊዜ በምልክቶች (+/-)፣ በቅደም-ተከተል (Order of Operations) እና ክፍልፋዮችን በማቅለል ወቅት ይሳሳታሉ። ፈታኙ አማራጮች ውስጥ የተሳሳተውን መልስ አስቀድሞ ያስቀምጣል!\`,
          science: \`<strong>የሚኒስቴር ፈተና ወጥመድ ራዳር (Exam Pitfall):</strong><br>አሃዶችን (Units) አለመቀየር (ለምሳሌ cm ወደ m፣ ወይም g ወደ kg) እና የሳይንሳዊ ቃላትን ትክክለኛ ፍቺ አለመረዳት ዋና ዋና የስህተት ምንጮች ናቸው።\`,
          english: \`<strong>Ministry Exam Pitfall:</strong><br>Watch out for irregular verb forms, false cognates, and prepositions that change meaning in phrasal verbs.\`,
          social: \`<strong>የፈተና ወጥመድ፦</strong><br>የዘመናት ቅደም ተከተል (Chronology) ማምታታት እና የመልክአ-ምድራዊ መጋጠሚያዎችን (Coordinates) በስህተት ማንበብ።\`,
          citizenship: \`<strong>የፈተና ወጥመድ፦</strong><br>መብትን ከነጻነት፣ እንዲሁም ህጋዊ ግዴታን ከሞራላዊ ግዴታ ጋር ማደባለቅ።\`,
          it: \`<strong>የፈተና ወጥመድ፦</strong><br>የማስታወሻ አይነቶችን (RAM vs ROM) እና Input vs Output መሳሪያዎችን ማምታታት።\`
        },
        anchor: {
          math: \`<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>የኢትዮጵያ ብር የገንዘብ ዝውውር፣ የታላቁ የሕዳሴ ግድብ የኮንክሪት መጠን ስሌት፣ እና የላሊበላ ውቅር አብያተ-ክርስቲያናት ምህንድስና ስሌት የዚህ ርዕስ ቀጥተኛ ተግባራዊ ምሳሌዎች ናቸው።\`,
          science: \`<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>የስምጥ ሸለቆ (Great Rift Valley) መፈጠር፣ የኤርታሌ እሳተ-ጎመራ የጂኦሎጂካል ሂደት፣ እና የአዋሽ ተፋሰስ ስነ-ምህዳር ጥናት።\`,
          english: \`<strong>Ethiopian Contextual Connection:</strong><br>Describing Ethiopian historic heritage, tourism in the Simien Mountains, and cultural coffee ceremonies using rich academic English.\`,
          social: \`<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>በአፋር ሃዳር የተገኘችው ድንቅነሽ (Lucy/Australopithecus afarensis)፣ የአክሱም ስልጣኔ የንግድ መስመር፣ እና የዓድዋ ድል ታሪካዊ ፋይዳ።\`,
          citizenship: \`<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>የኢትዮጵያ ባህላዊ የግጭት አፈታት ስልቶች (ሽምግልና)፣ የብሔር ብሔረሰቦች ባህል እና የፌዴራል ስርዓት ግንባታ።\`,
          it: \`<strong>የኢትዮጵያ እውነታ ትስስር፦</strong><br>በኢትዮጵያ የቴሌኮም ማስፋፊያ፣ የትምህርት ቤት የኮምፒውተር ላቦራቶሪዎች እና የፊደል (Ge'ez script) ዲጂታይዜሽን።\`
        }
      };

      const fallback = intelMap[nodeKey] && intelMap[nodeKey][subject] 
        ? intelMap[nodeKey][subject] 
        : \`<strong>\${title}:</strong> \${bp}\`;
      return fallback;
    }

    // =========================================================================
    // STAGE 1: SURVEY RECONNAISSANCE ENGINE
    // =========================================================================
    let activeConstellationNode = 'core';

    function selectConstellationNode(nodeKey) {
      soundClick();
      activeConstellationNode = nodeKey;
      const st = getActiveSubtopic();
      const intelHtml = getCurriculumIntel(st, nodeKey);

      const drawer = document.getElementById('reconIntelDrawer');
      const titleEl = document.getElementById('reconIntelTitle');
      const contentEl = document.getElementById('reconIntelContent');

      const titles = {
        prereq: '🌐 1. መነሻ እውቀት እና ቅድመ-ግንዛቤ (Prerequisites & Bridge)',
        core: '🏛️ 2. ዋናው ፅንሰ-ሀሳብ (Architectural Anchor Concept)',
        formula: '⚡ 3. ቁልፍ ቀመር / ሕግጋት (Core Law & Formulas)',
        pitfall: '🎯 4. የሚኒስቴር ፈተና ወጥመድ ራዳር (Exam Pitfall Radar)',
        anchor: '🇪🇹 5. የኢትዮጵያ እውነታ ትስስር (Ethiopian Real-World Anchor)'
      };

      if (titleEl) titleEl.innerHTML = titles[nodeKey] || 'Reconnaissance Intelligence';
      if (contentEl) contentEl.innerHTML = intelHtml;
      if (drawer) {
        drawer.classList.remove('hidden');
        drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Update Node button styling
      ['prereq', 'core', 'formula', 'pitfall', 'anchor'].forEach(key => {
        const btn = document.getElementById(\`nodeBtn-\${key}\`);
        if (btn) {
          if (key === nodeKey) {
            btn.className = 'constellation-node active-node p-3 sm:p-4 rounded-2xl bg-emerald-950/80 border-2 border-emerald-400 text-white shadow-lg shadow-emerald-500/30 flex flex-col items-center text-center cursor-pointer transition';
          } else {
            btn.className = 'constellation-node p-3 sm:p-4 rounded-2xl bg-space-950/90 border border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white flex flex-col items-center text-center cursor-pointer transition';
          }
        }
      });

      advanceReconMeter(15);
    }

    function toggleXRayScanner() {
      soundClick();
      gState.xrayActive = !gState.xrayActive;
      saveState();

      const btn = document.getElementById('xrayScannerToggleBtn');
      const container = document.getElementById('surveyNotesContainer');

      if (gState.xrayActive) {
        if (btn) {
          btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 cursor-pointer radar-pulse';
          btn.innerHTML = '<span>🔬</span> <span>X-Ray Scanner: ON</span>';
        }
        if (container) container.classList.add('xray-active');
        showToast('🔬 X-Ray Scanner ነቅቷል! ቁልፍ ቃላቶች በደማቅ ያበራሉ፤ ጠቅ በማድረግ ፈጣን ማብራሪያ ተመልከት።');
        advanceReconMeter(20);
      } else {
        if (btn) {
          btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-space-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer';
          btn.innerHTML = '<span>🔬</span> <span>X-Ray Scanner: OFF</span>';
        }
        if (container) container.classList.remove('xray-active');
      }
    }

    function showXRayTermInsight(term) {
      soundClick();
      const st = getActiveSubtopic();
      const msg = \`<strong>📌 ፅንሰ-ሀሳብ፦ \${term}</strong><br>በ\${st.code} \${st.title} ስር ወሳኝ የሆነ የፈተና ቃል ነው። ትርጉሙንና አሰራሩን በStage 3 ንባብ ውስጥ በዝርዝር ተመልከት!\`;
      
      const drawer = document.getElementById('reconIntelDrawer');
      const titleEl = document.getElementById('reconIntelTitle');
      const contentEl = document.getElementById('reconIntelContent');

      if (titleEl) titleEl.innerHTML = \`🔬 X-Ray Insight: \${term}\`;
      if (contentEl) contentEl.innerHTML = msg;
      if (drawer) {
        drawer.classList.remove('hidden');
        drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      advanceReconMeter(10);
    }

    function flipCuriosityProbe(idx) {
      soundFlip();
      const card = document.getElementById(\`probeCard-\${idx}\`);
      if (card) {
        card.classList.toggle('is-flipped');
        if (card.classList.contains('is-flipped')) {
          addXp(15, 'Curiosity Probe Unlocked');
          advanceReconMeter(15);
        }
      }
    }

    function advanceReconMeter(amount) {
      const stId = gState.activeSubtopicId;
      const current = gState.reconProgress[stId] || 20;
      const next = Math.min(100, current + amount);
      gState.reconProgress[stId] = next;
      saveState();

      const meter = document.getElementById('surveyReconMeter');
      const badge = document.getElementById('reconMeterBadge');
      if (meter) meter.style.width = \`\${next}%\`;
      if (badge) badge.innerText = \`\${next}% Recon Complete\`;

      if (next >= 100) {
        const finishBtn = document.getElementById('finishSurveyBtn');
        if (finishBtn) {
          finishBtn.className = 'px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 cursor-pointer border border-emerald-400';
          finishBtn.innerHTML = '<span>🚀 Recon 100% Complete! Advance to Questions (+35 XP)</span> <span>👉</span>';
        }
      }
    }

    // Wrap high-yield terms with xray-term spans
    function enrichNotesWithXRay(rawHtml) {
      const keywords = [
        'Rational Numbers', 'Repeating Decimals', 'Terminating Decimals', 'Set', 'Element', 'Subset',
        'Scientific Method', 'Measurement', 'Cell', 'Photosynthesis', 'Ecosystem',
        'Gravity', 'Force', 'Motion', 'Velocity', 'Acceleration',
        'Democracy', 'Human Rights', 'Rule of Law', 'Constitution', 'Tolerance',
        'Earth', 'Solar System', 'Plate Tectonics', 'Volcano', 'Earthquake', 'Climate',
        'CPU', 'RAM', 'ROM', 'Hardware', 'Software', 'Algorithm', 'Network'
      ];
      let res = rawHtml;
      keywords.forEach(kw => {
        const regex = new RegExp(\`\\\\b(\${kw})\\\\b\`, 'gi');
        res = res.replace(regex, \`<span class="xray-term" onclick="showXRayTermInsight('$1')">$1</span>\`);
      });
      return res;
    }
`;

// Check where to inject suiteLogic
if (!logic.includes('CURRICULUM INTELLIGENCE & CONSTELLATION ENGINE')) {
  // Insert before renderCurrentStep
  const anchor = '    // =========================================================================\n    // RENDER CURRENT SQ3R STEP';
  if (logic.includes(anchor)) {
    logic = logic.replace(anchor, suiteLogic + '\n' + anchor);
    console.log('1. Injected Curriculum Intelligence & Constellation Engine.');
  } else {
    console.error('Could not find renderCurrentStep anchor!');
  }
}

fs.writeFileSync(logicPath, logic, 'utf8');
console.log('Curriculum Intelligence injected.');
