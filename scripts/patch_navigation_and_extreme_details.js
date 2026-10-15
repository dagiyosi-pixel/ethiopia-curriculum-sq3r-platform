const fs = require('fs');
const path = require('path');

console.log('Patching Navigation & Extreme Details Upgrade...');

const rootDir = path.join(__dirname, '..');
const shellPath = path.join(rootDir, 'src', 'template_shell.html');
const logicPath = path.join(rootDir, 'src', 'app_logic.js');

let shell = fs.readFileSync(shellPath, 'utf8');
let logic = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// 1. UPDATE template_shell.html: HEADER BUTTONS, SEARCH & SYLLABUS MODALS
// =============================================================================

// 1.1 Add Search & Catalog buttons in Header
const headerSearchBtnHtml = `
          <!-- Global Search Button -->
          <button onclick="openGlobalSearchModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-850 hover:bg-emerald-600/30 border border-slate-700 hover:border-emerald-500/50 text-slate-200 text-xs font-bold transition shadow-sm cursor-pointer" title="Search all topics & formulas (Ctrl+K)">
            <span>🔍</span>
            <span class="hidden md:inline">ፈልግ (Search)</span>
            <kbd class="hidden lg:inline text-[9px] bg-space-950 px-1.5 py-0.5 rounded border border-slate-700 font-mono text-slate-400">Ctrl+K</kbd>
          </button>

          <!-- Slide-out Syllabus Drawer Button -->
          <button onclick="openSyllabusDrawer()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-850 hover:bg-amber-600/30 border border-slate-700 hover:border-amber-500/50 text-amber-300 text-xs font-bold transition shadow-sm cursor-pointer" title="Open complete curriculum syllabus drawer">
            <span>🗺️</span>
            <span class="hidden sm:inline">ካታሎግ (Syllabus)</span>
          </button>
`;

if (!shell.includes('openGlobalSearchModal()')) {
  shell = shell.replace(
    '<!-- Pomodoro Timer -->',
    headerSearchBtnHtml + '\n          <!-- Pomodoro Timer -->'
  );
  console.log('1. Added Search & Catalog buttons in header.');
}

// 1.2 Add Breadcrumbs & Subtopic Dock to view-sq3r
const breadcrumbsHtml = `
        <!-- Interactive Breadcrumbs Bar -->
        <div id="sq3rBreadcrumbsBar" class="p-3.5 rounded-2xl bg-space-950 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2">
          <div class="flex items-center gap-1.5 flex-wrap font-medium">
            <button onclick="switchTab('dashboard')" class="text-slate-300 hover:text-emerald-400 transition flex items-center gap-1 cursor-pointer">
              <span>🏠</span> <span>መነሻ</span>
            </button>
            <span class="text-slate-600">/</span>
            <button onclick="openSyllabusDrawer()" class="text-slate-300 hover:text-emerald-400 transition flex items-center gap-1 cursor-pointer" id="crumbSubject">
              <span>📐</span> <span>ሒሳብ</span>
            </button>
            <span class="text-slate-600">/</span>
            <span class="text-slate-400 font-bold" id="crumbUnit">ምዕራፍ 1</span>
            <span class="text-slate-600">/</span>
            <span class="text-emerald-300 font-black" id="crumbSubtopic">1.1 Rational Numbers</span>
          </div>
          <button onclick="openSyllabusDrawer()" class="text-[11px] text-amber-400 font-bold hover:underline flex items-center gap-1 cursor-pointer">
            <span>🗺️ ካታሎግ ክፈት (Open Drawer)</span> <span>➔</span>
          </button>
        </div>
`;

const subtopicDockHtml = `
        <!-- Sticky / Floating Subtopic Navigation Dock -->
        <div id="subtopicNavDock" class="sticky bottom-16 md:bottom-4 z-20 p-3 sm:p-4 rounded-3xl bg-space-950/95 backdrop-blur-xl border border-emerald-500/40 shadow-2xl flex items-center justify-between gap-3 flex-wrap">
          <button onclick="goToPrevSubtopic()" id="btnPrevSubtopic" class="px-4 py-2.5 rounded-2xl bg-space-900 hover:bg-space-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-black transition flex items-center gap-2 cursor-pointer shadow-sm">
            <span>⬅️</span>
            <span class="hidden sm:inline">የቀደመው ርዕስ (Prev)</span>
            <span class="sm:hidden">ቀደምት</span>
          </button>

          <div class="flex items-center gap-2 text-center">
            <span class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-xl border border-amber-500/20" id="dockCurrentTopicCode">1.1</span>
            <span class="text-xs font-bold text-slate-200 truncate max-w-[140px] sm:max-w-xs" id="dockCurrentTopicTitle">Rational Numbers</span>
          </div>

          <button onclick="goToNextSubtopic()" id="btnNextSubtopic" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-black transition flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/30">
            <span class="hidden sm:inline">ቀጣይ ርዕስ (Next)</span>
            <span class="sm:hidden">ቀጣይ</span>
            <span>➡️</span>
          </button>
        </div>
`;

if (!shell.includes('id="sq3rBreadcrumbsBar"')) {
  shell = shell.replace(
    '<!-- Active Topic Banner & Navigation -->',
    breadcrumbsHtml + '\n        <!-- Active Topic Banner & Navigation -->'
  );
  console.log('2. Added Interactive Breadcrumbs Bar to view-sq3r.');
}

if (!shell.includes('id="subtopicNavDock"')) {
  shell = shell.replace(
    '</section>\n\n      <!-- =============================================================== -->\n      <!-- VIEW 1.5: MINISTRY EXAM HALL SIMULATOR',
    subtopicDockHtml + '\n      </section>\n\n      <!-- =============================================================== -->\n      <!-- VIEW 1.5: MINISTRY EXAM HALL SIMULATOR'
  );
  console.log('3. Added Floating Subtopic Navigation Dock to view-sq3r.');
}

// 1.3 Add Global Search Modal & Slide-out Syllabus Drawer HTML before closing body / script
const modalsHtml = `
  <!-- ========================================================================= -->
  <!-- 1. GLOBAL CURRICULUM SPOTLIGHT SEARCH MODAL (Ctrl+K)                      -->
  <!-- ========================================================================= -->
  <div id="globalSearchModal" class="hidden fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-space-950/80 backdrop-blur-md">
    <div class="glass-card max-w-2xl w-full p-5 sm:p-6 rounded-3xl border border-emerald-500/40 space-y-4 relative bg-space-900 shadow-2xl animate-fadeIn">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <div class="flex items-center gap-2.5 flex-1">
          <span class="text-xl">🔍</span>
          <input type="text" id="globalSearchInput" oninput="performGlobalSearch(this.value)" placeholder="ርዕስ፣ ቀመር ወይም ፅንሰ-ሀሳብ ፈልግ (ለምሳሌ፦ fraction, photosynthesis, adwa)..." class="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none font-bold">
        </div>
        <button onclick="closeGlobalSearchModal()" class="w-8 h-8 rounded-full bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer ml-2">
          ✕
        </button>
      </div>

      <!-- Search Results Container -->
      <div id="globalSearchResults" class="max-h-96 overflow-y-auto space-y-2 pr-1">
        <div class="text-xs text-slate-500 py-6 text-center">
          የሚፈልጉትን ርዕስ ወይም ቀመር ከላይ ይተይቡ፤ በፍጥነት ወደሚፈልጉት ትምህርት መዝለል ይችላሉ።
        </div>
      </div>

      <div class="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800">
        <span>184 ንዑስ ርዕሶች • 96 ምዕራፎች • 12 የትምህርት አይነቶች</span>
        <span>Esc ለመዝጋት</span>
      </div>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- 2. SLIDE-OUT SYLLABUS NAVIGATOR DRAWER (የትምህርት ካታሎግ)                     -->
  <!-- ========================================================================= -->
  <div id="syllabusDrawerModal" class="hidden fixed inset-0 z-50 flex justify-end bg-space-950/80 backdrop-blur-sm">
    <div class="w-full max-w-md h-full bg-space-900 border-l border-emerald-500/40 p-6 flex flex-col justify-between shadow-2xl overflow-hidden animate-fadeIn">
      
      <!-- Drawer Header -->
      <div class="space-y-4 border-b border-slate-800 pb-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🗺️</span>
            <div>
              <h3 class="text-base sm:text-lg font-black text-white font-display">የትምህርት ካታሎግ (Syllabus)</h3>
              <p class="text-xs text-slate-400">ሁሉንም ምዕራፎች እና ርዕሶች በቀላሉ ያስሱ</p>
            </div>
          </div>
          <button onclick="closeSyllabusDrawer()" class="w-8 h-8 rounded-full bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer">
            ✕
          </button>
        </div>

        <!-- Grade Switcher in Drawer -->
        <div class="grid grid-cols-2 gap-2 bg-space-950 p-1 rounded-2xl border border-slate-800">
          <button onclick="setGrade(7); renderSyllabusDrawer();" id="drawerGrade-7" class="py-1.5 rounded-xl text-xs font-black transition cursor-pointer bg-emerald-600 text-white">
            7ኛ ክፍል (Grade 7)
          </button>
          <button onclick="setGrade(8); renderSyllabusDrawer();" id="drawerGrade-8" class="py-1.5 rounded-xl text-xs font-black transition cursor-pointer text-slate-400 hover:text-white">
            8ኛ ክፍል (Grade 8)
          </button>
        </div>

        <!-- Subject Switcher Pills in Drawer -->
        <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1" id="drawerSubjectPills">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- Drawer Content: Units & Subtopics List -->
      <div id="drawerUnitsContainer" class="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
        <!-- Dynamically populated with units & subtopics -->
      </div>

      <!-- Drawer Footer -->
      <div class="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span id="drawerProgressSummary">Mastery: 24%</span>
        <button onclick="closeSyllabusDrawer()" class="px-4 py-2 rounded-xl bg-space-850 hover:bg-space-800 text-slate-200 font-bold transition cursor-pointer">
          ዝጋ (Close)
        </button>
      </div>

    </div>
  </div>
`;

if (!shell.includes('id="globalSearchModal"')) {
  shell = shell.replace(
    '<!-- ========================================================================= -->\n  <!-- GIZMO-STYLE MOBILE BOTTOM NAVIGATION BAR',
    modalsHtml + '\n  <!-- ========================================================================= -->\n  <!-- GIZMO-STYLE MOBILE BOTTOM NAVIGATION BAR'
  );
  console.log('4. Added Global Search Modal & Syllabus Drawer to template_shell.html.');
}

fs.writeFileSync(shellPath, shell, 'utf8');
console.log('template_shell.html successfully updated with Navigation Hub.');

// =============================================================================
// 2. UPDATE app_logic.js: NAVIGATION ENGINES & EXTREME DETAILS UPGRADE
// =============================================================================

// 2.1 Add Search, Drawer, Dock, and Breadcrumb functions to logic
const navigationAndDetailsCode = `
    // =========================================================================
    // GLOBAL CURRICULUM SPOTLIGHT SEARCH (Ctrl+K)
    // =========================================================================
    function openGlobalSearchModal() {
      soundClick();
      const modal = document.getElementById('globalSearchModal');
      const input = document.getElementById('globalSearchInput');
      if (modal) {
        modal.classList.remove('hidden');
        if (input) {
          input.value = '';
          input.focus();
        }
        performGlobalSearch('');
      }
    }

    function closeGlobalSearchModal() {
      const modal = document.getElementById('globalSearchModal');
      if (modal) modal.classList.add('hidden');
    }

    function performGlobalSearch(query) {
      const q = query.trim().toLowerCase();
      const resultsContainer = document.getElementById('globalSearchResults');
      if (!resultsContainer) return;

      const matches = [];
      const grade = gState.grade;
      const subjects = GALACTIC_DATABASE[grade];

      Object.keys(subjects).forEach(sKey => {
        const sObj = subjects[sKey];
        const meta = SUBJECT_METADATA[sKey] || { am: '', name: sObj.name, icon: sObj.icon };

        sObj.units.forEach(u => {
          if (u.subtopics) {
            u.subtopics.forEach(st => {
              const textToSearch = \`\${meta.name} \${meta.am} \${u.number} \${u.title} \${st.code} \${st.title} \${st.survey.blueprint} \${st.survey.keyFormulas || ''}\`.toLowerCase();
              if (!q || textToSearch.includes(q)) {
                matches.push({
                  grade: grade,
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

      if (matches.length === 0) {
        resultsContainer.innerHTML = \`
          <div class="text-xs text-slate-400 py-8 text-center space-y-1">
            <span class="text-2xl">🔍</span>
            <p>"<strong>\${query}</strong>" የሚል ርዕስ አልተገኘም። እባክዎ ፊደላቱን አስተካክለው ይሞክሩ።</p>
          </div>
        \`;
        return;
      }

      resultsContainer.innerHTML = matches.slice(0, 15).map(m => \`
        <div onclick="jumpToSubtopicFromSearch('\${m.grade}', '\${m.subjectKey}', '\${m.subtopic.id}')" class="p-3.5 rounded-2xl bg-space-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-space-850 cursor-pointer transition flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl p-2 rounded-xl bg-space-900 border border-slate-800">\${m.subjectMeta.icon}</span>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">\${m.grade}ኛ ክፍል</span>
                <span class="text-xs text-slate-400 font-bold">\${m.subjectMeta.name} (\${m.subjectMeta.am}) • \${m.unit.number}</span>
              </div>
              <h5 class="text-xs sm:text-sm font-black text-white mt-0.5">\${m.subtopic.code} \${m.subtopic.title}</h5>
              <p class="text-[11px] text-slate-400 line-clamp-1">\${m.subtopic.survey.blueprint}</p>
            </div>
          </div>
          <span class="text-emerald-400 text-sm font-bold shrink-0">➔</span>
        </div>
      \`).join('');
    }

    function jumpToSubtopicFromSearch(grade, subjectId, stId) {
      soundClick();
      closeGlobalSearchModal();

      if (gState.grade !== Number(grade)) {
        setGrade(Number(grade));
      }
      if (gState.activeSubject !== subjectId) {
        selectSubject(subjectId);
      }
      changeSubtopic(stId);
      switchTab('sq3r');
      showToast(\`ወደ \${stId} ተዘሏል! 🚀\`);
    }

    // =========================================================================
    // SLIDE-OUT SYLLABUS DRAWER
    // =========================================================================
    function openSyllabusDrawer() {
      soundClick();
      const modal = document.getElementById('syllabusDrawerModal');
      if (modal) {
        modal.classList.remove('hidden');
        renderSyllabusDrawer();
      }
    }

    function closeSyllabusDrawer() {
      const modal = document.getElementById('syllabusDrawerModal');
      if (modal) modal.classList.add('hidden');
    }

    function renderSyllabusDrawer() {
      const g7Btn = document.getElementById('drawerGrade-7');
      const g8Btn = document.getElementById('drawerGrade-8');
      if (g7Btn && g8Btn) {
        if (gState.grade === 7) {
          g7Btn.className = 'py-1.5 rounded-xl text-xs font-black transition cursor-pointer bg-emerald-600 text-white shadow-sm';
          g8Btn.className = 'py-1.5 rounded-xl text-xs font-black transition cursor-pointer text-slate-400 hover:text-white';
        } else {
          g8Btn.className = 'py-1.5 rounded-xl text-xs font-black transition cursor-pointer bg-emerald-600 text-white shadow-sm';
          g7Btn.className = 'py-1.5 rounded-xl text-xs font-black transition cursor-pointer text-slate-400 hover:text-white';
        }
      }

      // Render Subject Pills in Drawer
      const pillsContainer = document.getElementById('drawerSubjectPills');
      const subjects = GALACTIC_DATABASE[gState.grade];
      if (pillsContainer) {
        pillsContainer.innerHTML = Object.keys(subjects).map(sKey => {
          const sObj = subjects[sKey];
          const meta = SUBJECT_METADATA[sKey] || { am: '', name: sObj.name, icon: sObj.icon };
          const isActive = sKey === gState.activeSubject;
          return \`
            <button onclick="selectSubject('\${sKey}'); renderSyllabusDrawer();" class="px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap flex items-center gap-1.5 \${isActive ? 'bg-emerald-600 text-white shadow-sm' : 'bg-space-950 text-slate-400 hover:text-white border border-slate-800'} cursor-pointer">
              <span>\${meta.icon}</span> <span>\${meta.name}</span>
            </button>
          \`;
        }).join('');
      }

      // Render Units & Subtopics
      const unitsContainer = document.getElementById('drawerUnitsContainer');
      const activeSub = subjects[gState.activeSubject];
      if (unitsContainer && activeSub) {
        unitsContainer.innerHTML = activeSub.units.map(u => {
          const isCurrentUnit = u.id === gState.activeUnitId;
          return \`
            <div class="p-3.5 rounded-2xl bg-space-950 border \${isCurrentUnit ? 'border-emerald-500/50' : 'border-slate-800'} space-y-2">
              <div class="flex items-center justify-between text-xs font-black text-white">
                <span class="text-amber-400">\${u.number}: \${u.title}</span>
                <span class="text-[10px] text-slate-400">\${u.subtopics.length} ርዕሶች</span>
              </div>
              <div class="space-y-1.5 pt-1">
                \${u.subtopics.map(st => {
                  const isCurrent = st.id === gState.activeSubtopicId;
                  const mastered = isSubtopicMastered(st.id);
                  const unlocked = isSubtopicUnlocked(st.id);
                  const score = getSubtopicScore(st.id);

                  let badge = '<span class="text-[10px] text-slate-500">🔒</span>';
                  if (mastered) badge = \`<span class="text-[10px] text-amber-400 font-bold">⭐ \${score}%</span>\`;
                  else if (unlocked) badge = '<span class="text-[10px] text-emerald-400">🔓</span>';

                  return \`
                    <button onclick="changeSubtopic('\${st.id}'); closeSyllabusDrawer(); switchTab('sq3r');" class="w-full text-left p-2.5 rounded-xl text-xs transition flex items-center justify-between gap-2 \${isCurrent ? 'bg-emerald-950/80 border border-emerald-500/60 text-white font-black' : 'bg-space-900/60 text-slate-300 hover:bg-space-850 hover:text-white'} cursor-pointer">
                      <span class="truncate">\${st.code} \${st.title}</span>
                      \${badge}
                    </button>
                  \`;
                }).join('')}
              </div>
            </div>
          \`;
        }).join('');
      }
    }

    // =========================================================================
    // PREV / NEXT SUBTOPIC NAVIGATION & BREADCRUMBS
    // =========================================================================
    function getAdjacentSubtopics() {
      const allSubtopics = getAllSubtopicsForSubject(gState.grade, gState.activeSubject);
      const curIdx = allSubtopics.findIndex(st => st.id === gState.activeSubtopicId);
      return {
        prev: curIdx > 0 ? allSubtopics[curIdx - 1] : null,
        current: allSubtopics[curIdx],
        next: curIdx < allSubtopics.length - 1 ? allSubtopics[curIdx + 1] : null,
        index: curIdx,
        total: allSubtopics.length
      };
    }

    function goToPrevSubtopic() {
      const { prev } = getAdjacentSubtopics();
      if (prev) {
        changeSubtopic(prev.id);
        showToast(\`ወደ ቀደመው ርዕስ ተመልሰሃል፦ \${prev.code} \${prev.title}\`);
      } else {
        showToast('የመጀመሪያው ርዕስ ላይ ነዎት!');
      }
    }

    function goToNextSubtopic() {
      const { next } = getAdjacentSubtopics();
      if (!next) {
        showToast('የመጨረሻው ርዕስ ላይ ነዎት! ፈተናውን በመውሰድ የምስክር ወረቀትዎን ያግኙ 🎓');
        return;
      }

      if (!isSubtopicUnlocked(next.id) && !gState.gateBypass) {
        soundError();
        showToast('🔒 የደረጃ ቁልፍ፦ ቀጣዩ ርዕስ እንዲከፈት ይህንን ርዕስ በፈተና ≥80% ማለፍ አለብዎት!');
        return;
      }

      changeSubtopic(next.id);
      showToast(\`ቀጣይ ርዕስ ተከፍቷል፦ \${next.code} \${next.title} 🚀\`);
    }

    function updateSubtopicNavDock() {
      const { prev, current, next } = getAdjacentSubtopics();
      const codeEl = document.getElementById('dockCurrentTopicCode');
      const titleEl = document.getElementById('dockCurrentTopicTitle');
      const prevBtn = document.getElementById('btnPrevSubtopic');
      const nextBtn = document.getElementById('btnNextSubtopic');

      if (codeEl && current) codeEl.innerText = current.code;
      if (titleEl && current) titleEl.innerText = current.title;

      if (prevBtn) {
        prevBtn.disabled = !prev;
        prevBtn.style.opacity = prev ? '1' : '0.4';
      }
      if (nextBtn) {
        const canAdvance = next && (gState.gateBypass || isSubtopicUnlocked(next.id));
        nextBtn.style.opacity = next ? '1' : '0.4';
      }

      updateBreadcrumbs();
    }

    function updateBreadcrumbs() {
      const st = getActiveSubtopic();
      const unit = getActiveUnit();
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name, icon: '📖' };

      const cSubj = document.getElementById('crumbSubject');
      const cUnit = document.getElementById('crumbUnit');
      const cSt = document.getElementById('crumbSubtopic');

      if (cSubj) cSubj.innerHTML = \`<span>\${meta.icon}</span> <span>\${meta.name} (\${gState.grade}ኛ ክፍል)</span>\`;
      if (cUnit) cUnit.innerText = \`\${unit.number}: \${unit.title}\`;
      if (cSt) cSt.innerText = \`\${st.code} \${st.title}\`;
    }
`;

// Insert navigation logic before renderActiveUnitView or where appropriate
const anchorLogic = '    function renderActiveUnitView() {';
if (logic.includes(anchorLogic)) {
  logic = logic.replace(
    anchorLogic,
    navigationAndDetailsCode + '\n    ' + anchorLogic
  );
  console.log('5. Injected Navigation Engines (Search, Drawer, Dock, Breadcrumbs).');
}

// Ensure updateSubtopicNavDock is called inside renderActiveUnitView
logic = logic.replace(
  'renderLevelMap();\n    }',
  'renderLevelMap();\n      updateSubtopicNavDock();\n    }'
);

// Add Global Keyboard Listener for Search (Ctrl+K and Escape)
const keyListenerAnchor = "window.addEventListener('keydown', (e) => {";
const searchKeyListener = `window.addEventListener('keydown', (e) => {
      // Ctrl+K or Cmd+K opens global search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openGlobalSearchModal();
        return;
      }
      if (e.key === 'Escape') {
        closeGlobalSearchModal();
        closeSyllabusDrawer();
        return;
      }
`;

if (logic.includes(keyListenerAnchor)) {
  logic = logic.replace(keyListenerAnchor, searchKeyListener);
  console.log('6. Added Ctrl+K global search keyboard shortcut.');
}

fs.writeFileSync(logicPath, logic, 'utf8');
console.log('app_logic.js updated successfully with navigation enhancements.');
