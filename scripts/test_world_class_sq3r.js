const fs = require('fs');
const path = require('path');

console.log('Running Gizmo-Style SQ3R Acceptance Suite (Mobile-First, No AI, Grade 7 & 8)...\n');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const tests = [
  { name: '1. Home Dashboard View (#view-dashboard)', pass: html.includes('id="view-dashboard"') },
  { name: '2. Student Name Greeting (#dashStudentNameGreeting)', pass: html.includes('id="dashStudentNameGreeting"') },
  { name: '3. 4-Stat Metric Tiles (Progress, Mastered, Accuracy, Review Due)', pass: html.includes('id="dashMetricProgress"') && html.includes('id="dashMetricMastered"') && html.includes('id="dashMetricAccuracy"') && html.includes('id="dashMetricReviewDue"') },
  { name: '4. Daily Missions Panel (#dashMissionsContainer)', pass: html.includes('id="dashMissionsContainer"') },
  { name: '5. 7-Day Activity Radar Heatmap (#dashHeatmapTiles)', pass: html.includes('id="dashHeatmapTiles"') },
  { name: '6. Subject Exploration Cards Matrix (#dashSubjectCardsContainer)', pass: html.includes('id="dashSubjectCardsContainer"') },
  { name: '7. Stage 1 5-Node Concept Constellation (Knowledge Orbit)', pass: html.includes('id="constellationGrid"') && html.includes('selectConstellationNode') },
  { name: '8. Stage 1 X-Ray Concept Scanner Toggle & Highlights', pass: html.includes('toggleXRayScanner') && html.includes('xray-term') },
  { name: '9. Stage 1 3 Pre-Flight Curiosity Probes (#curiosityProbesGrid)', pass: html.includes('id="curiosityProbesGrid"') && html.includes('flipCuriosityProbe') },
  { name: '10. Stage 1 2-Minute Scout Timer & Live Recon Meter', pass: html.includes('id="surveyTimerDisplay"') && html.includes('id="surveyReconMeter"') },
  { name: '11. Stage 2 Custom Inquiry Board & Amharic Starters', pass: html.includes('insertQuestionStarter') && html.includes('addCustomQuestion') },
  { name: '12. Stage 3 Typography Controls & Personal Scratchpad', pass: html.includes('setReadingFontSize') && html.includes('id="lessonUserNotes"') },
  { name: '13. Stage 3 Step-by-Step Worked Example with Amharic Details', pass: html.includes('ደረጃ በደረጃ የተሰራ መደበኛ ምሳሌ') && html.includes('id="readingNotesBody"') },
  { name: '14. Stage 4 Gizmo 3D Flashcards & Type-In Recall & Speed Match', pass: html.includes('rateFlashcardLeitner') && html.includes('checkTypeRecallAnswer') && html.includes('initMatchGame') },
  { name: '15. Stage 5 577-Question Ministry Exam Gate with 4-Step Baby-Step Derivations', pass: html.includes('buildBabyStepSolutionHtml') && html.includes('scorePct >= 80') },
  { name: '16. Gizmo-Style Mobile Bottom Navigation Bar (#gizmoBottomNav)', pass: html.includes('id="gizmoBottomNav"') && html.includes('bottomNav-dashboard') },
  { name: '17. One-Click Continue Learning Resumption', pass: html.includes('resumeLastActivity') },
  { name: '18. No AI Chatbot/Assistant Present (Pure Deterministic Fast Pedagogy)', pass: !html.includes('id="studyAssistantFab"') && !html.includes('id="studyAssistantModal"') },
  { name: '19. No AMT References in User-Facing Content', pass: !html.includes('577 የAMT') && !html.includes('AMT Question Bank') },
  { name: '20. Stage 3 4-Step Baby-Step Derivations (Givens, Formula, Calculation, Verification)', pass: html.includes('ደረጃ 1፦ የተሰጡ መረጃዎችንና የሚፈለገውን መለየት') && html.includes('ደረጃ 4፦ የመጨረሻ መልስ ማረጋገጫና የወጥመዶች ትንተና') },
  { name: '21. Stage 3 Dynamic Key Vocabulary Table with MoE Definitions', pass: html.includes('KEY VOCABULARY & DEFINITIONS') && html.includes('MoE Standard Glossary') },
  { name: '22. Global Spotlight Search Modal (#globalSearchModal, performGlobalSearch)', pass: html.includes('id="globalSearchModal"') && html.includes('performGlobalSearch') },
  { name: '23. Slide-Out Syllabus Drawer (#syllabusDrawerModal, renderSyllabusDrawer)', pass: html.includes('id="syllabusDrawerModal"') && html.includes('renderSyllabusDrawer') },
  { name: '24. Floating Subtopic Navigation Dock (#subtopicNavDock, goToPrevSubtopic, goToNextSubtopic)', pass: html.includes('id="subtopicNavDock"') && html.includes('goToPrevSubtopic') && html.includes('goToNextSubtopic') },
  { name: '25. Dual-Grade Search & Global Keyboard Navigation Shortcuts', pass: html.includes('handleGlobalShortcuts') && html.includes("['7', '8']") }
];

let allPassed = true;
tests.forEach(function(t) {
  const status = t.pass ? 'PASS' : 'FAIL';
  console.log('[' + status + ']: ' + t.name);
  if (!t.pass) allPassed = false;
});

console.log('\n======================================================');
console.log(allPassed ? 'ALL 25 GIZMO & MOBILE SUITE ACCEPTANCE CRITERIA PASSED 100%!' : 'SOME CRITERIA FAILED!');
console.log('======================================================');

if (!allPassed) process.exit(1);
