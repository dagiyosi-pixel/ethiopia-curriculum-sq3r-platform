const fs = require('fs');
const path = require('path');

console.log('Writing World-Class SQ3R Logic Patch...');

const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');
let logic = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// 1. UPDATE DEFAULT_APP_STATE & INITIALIZATION
// =============================================================================
const oldStateBlock = `    const DEFAULT_APP_STATE = {
      grade: 7,
      activeSubject: 'math',
      activeUnitId: 'g7-m-u1',
      activeSubtopicId: 'g7-m-1.1',
      currentStep: 'survey',
      gateBypass: false,
      xp: 450,
      level: 2,
      gems: 150,
      streak: 5,
      avatar: '🦁',
      title: 'Keen Researcher (ንቁ አጥኚ)',
      totalQuizzesDone: 12,
      totalCardsMastered: 38,
      unlockedBadges: ['adwa', 'lucy', 'gerd'],
      completedSteps: {
        'g7-m-1.1': ['survey']
      },
      masteredSubtopics: {}
    };`;

const newStateBlock = `    const DEFAULT_APP_STATE = {
      grade: 7,
      activeSubject: 'math',
      activeUnitId: 'g7-m-u1',
      activeSubtopicId: 'g7-m-1.1',
      currentStep: 'survey',
      gateBypass: false,
      studentName: 'ዳግማዊ (Dagi)',
      xp: 450,
      level: 2,
      gems: 150,
      streak: 5,
      avatar: '🦁',
      title: 'Keen Researcher (ንቁ አጥኚ)',
      totalQuizzesDone: 12,
      totalCardsMastered: 38,
      unlockedBadges: ['adwa', 'lucy', 'gerd'],
      completedSteps: {
        'g7-m-1.1': ['survey']
      },
      masteredSubtopics: {},
      customQuestions: {},
      userNotes: {},
      flashcardIntervals: {},
      reconProgress: {},
      xrayActive: false,
      activeFontSize: 'md'
    };`;

if (logic.includes(oldStateBlock)) {
  logic = logic.replace(oldStateBlock, newStateBlock);
  console.log('1. Updated DEFAULT_APP_STATE with world-class state fields.');
}

// Ensure state normalization on load
const oldLoadCheck = `    if (!gState.masteredSubtopics) gState.masteredSubtopics = {};
    if (!gState.unlockedBadges) gState.unlockedBadges = ['adwa', 'lucy', 'gerd'];`;

const newLoadCheck = `    if (!gState.masteredSubtopics) gState.masteredSubtopics = {};
    if (!gState.unlockedBadges) gState.unlockedBadges = ['adwa', 'lucy', 'gerd'];
    if (!gState.customQuestions) gState.customQuestions = {};
    if (!gState.userNotes) gState.userNotes = {};
    if (!gState.flashcardIntervals) gState.flashcardIntervals = {};
    if (!gState.reconProgress) gState.reconProgress = {};
    if (!gState.studentName) gState.studentName = 'ዳግማዊ (Dagi)';
    if (gState.xrayActive === undefined) gState.xrayActive = false;
    if (!gState.activeFontSize) gState.activeFontSize = 'md';`;

if (logic.includes(oldLoadCheck)) {
  logic = logic.replace(oldLoadCheck, newLoadCheck);
  console.log('2. Updated state normalization checks.');
}

// =============================================================================
// 2. UPDATE switchTab() TO SUPPORT 'dashboard' AS PRIMARY
// =============================================================================
const oldSwitchTab = `    function switchTab(tabId) {
      soundClick();
      const tabMap = {
        'sq3r': 'view-sq3r',
        'exam-hall': 'view-exam-hall',
        'exam': 'view-exam-hall',
        'curriculum': 'view-curriculum',
        'matrix': 'view-curriculum',
        'amt-exam': 'view-amt-exam',
        'amt': 'view-amt-exam',
        'vault': 'view-vault',
        'reference': 'view-reference',
        'ref': 'view-reference',
        'rewards': 'view-rewards',
        'analytics': 'view-analytics'
      };

      const btnMap = {
        'sq3r': 'tabBtn-sq3r',
        'exam-hall': 'tabBtn-exam-hall',
        'exam': 'tabBtn-exam-hall',
        'curriculum': 'tabBtn-curriculum',
        'matrix': 'tabBtn-curriculum',
        'amt-exam': 'tabBtn-amt-exam',
        'amt': 'tabBtn-amt-exam',
        'vault': 'tabBtn-vault',
        'reference': 'tabBtn-reference',
        'ref': 'tabBtn-reference',
        'rewards': 'tabBtn-rewards',
        'analytics': 'tabBtn-analytics'
      };

      const activeViewId = tabMap[tabId] || 'view-sq3r';

      ['view-sq3r', 'view-exam-hall', 'view-curriculum', 'view-amt-exam', 'view-vault', 'view-reference', 'view-rewards', 'view-analytics'].forEach(vId => {
        const el = document.getElementById(vId);
        if (el) el.style.display = vId === activeViewId ? 'block' : 'none';
      });

      ['tabBtn-sq3r', 'tabBtn-exam-hall', 'tabBtn-curriculum', 'tabBtn-amt-exam', 'tabBtn-vault', 'tabBtn-reference', 'tabBtn-rewards', 'tabBtn-analytics'].forEach(bId => {
        const btn = document.getElementById(bId);
        if (btn) {
          if (bId === btnMap[tabId]) {
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap';
          }
        }
      });

      if (tabId === 'exam-hall' || tabId === 'exam') initExamHallView();
      if (tabId === 'curriculum' || tabId === 'matrix') renderCurriculumMatrix();
      if (tabId === 'vault') renderVault();
      if (tabId === 'amt-exam' || tabId === 'amt') renderAmtExam();
      if (tabId === 'rewards') renderTrophyRoom();
      if (tabId === 'sq3r') renderLevelMap();
      if (tabId === 'analytics') renderAnalytics();
    }`;

const newSwitchTab = `    function switchTab(tabId) {
      soundClick();
      const tabMap = {
        'dashboard': 'view-dashboard',
        'sq3r': 'view-sq3r',
        'exam-hall': 'view-exam-hall',
        'exam': 'view-exam-hall',
        'curriculum': 'view-curriculum',
        'matrix': 'view-curriculum',
        'amt-exam': 'view-amt-exam',
        'amt': 'view-amt-exam',
        'vault': 'view-vault',
        'reference': 'view-reference',
        'ref': 'view-reference',
        'rewards': 'view-rewards',
        'analytics': 'view-analytics'
      };

      const btnMap = {
        'dashboard': 'tabBtn-dashboard',
        'sq3r': 'tabBtn-sq3r',
        'exam-hall': 'tabBtn-exam-hall',
        'exam': 'tabBtn-exam-hall',
        'curriculum': 'tabBtn-curriculum',
        'matrix': 'tabBtn-curriculum',
        'amt-exam': 'tabBtn-amt-exam',
        'amt': 'tabBtn-amt-exam',
        'vault': 'tabBtn-vault',
        'reference': 'tabBtn-reference',
        'ref': 'tabBtn-reference',
        'rewards': 'tabBtn-rewards',
        'analytics': 'tabBtn-analytics'
      };

      const activeViewId = tabMap[tabId] || 'view-dashboard';

      ['view-dashboard', 'view-sq3r', 'view-exam-hall', 'view-curriculum', 'view-amt-exam', 'view-vault', 'view-reference', 'view-rewards', 'view-analytics'].forEach(vId => {
        const el = document.getElementById(vId);
        if (el) el.style.display = vId === activeViewId ? 'block' : 'none';
      });

      ['tabBtn-dashboard', 'tabBtn-sq3r', 'tabBtn-exam-hall', 'tabBtn-curriculum', 'tabBtn-amt-exam', 'tabBtn-vault', 'tabBtn-reference', 'tabBtn-rewards', 'tabBtn-analytics'].forEach(bId => {
        const btn = document.getElementById(bId);
        if (btn) {
          if (bId === btnMap[tabId]) {
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap cursor-pointer';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer';
          }
        }
      });

      if (tabId === 'dashboard') renderDashboard();
      if (tabId === 'exam-hall' || tabId === 'exam') initExamHallView();
      if (tabId === 'curriculum' || tabId === 'matrix') renderCurriculumMatrix();
      if (tabId === 'vault') renderVault();
      if (tabId === 'amt-exam' || tabId === 'amt') renderAmtExam();
      if (tabId === 'rewards') renderTrophyRoom();
      if (tabId === 'sq3r') renderLevelMap();
      if (tabId === 'analytics') renderAnalytics();
    }`;

if (logic.includes(oldSwitchTab)) {
  logic = logic.replace(oldSwitchTab, newSwitchTab);
  console.log('3. Updated switchTab with dashboard support.');
} else {
  console.warn('oldSwitchTab block not matched directly!');
}

fs.writeFileSync(logicPath, logic, 'utf8');
console.log('Preliminary logic updates applied.');
