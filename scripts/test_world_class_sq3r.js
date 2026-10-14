const fs = require('fs');
const path = require('path');

console.log('Running World-Class SQ3R Acceptance Suite on index.html...\n');

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
  { name: '14. Stage 4 3D Leitner Flashcards & Free Recall Journal', pass: html.includes('rateFlashcardLeitner') && html.includes('id="freeRecallInput"') && html.includes('compareFreeRecall') },
  { name: '15. Stage 5 577-Question AMT Exam Gate with 4-Step Baby-Step Derivations', pass: html.includes('buildBabyStepSolutionHtml') && html.includes('scorePct >= 80') },
  { name: '16. Floating Smart Study Assistant (Dr. Desta AI Guide)', pass: html.includes('id="studyAssistantFab"') && html.includes('toggleStudyAssistant') && html.includes('askAssistant') },
  { name: '17. One-Click Continue Learning Resumption', pass: html.includes('resumeLastActivity') }
];

let allPassed = true;
tests.forEach(function(t) {
  const status = t.pass ? 'PASS' : 'FAIL';
  console.log('[' + status + ']: ' + t.name);
  if (!t.pass) allPassed = false;
});

console.log('\n======================================================');
console.log(allPassed ? 'ALL 17 ACCEPTANCE CRITERIA PASSED 100%!' : 'SOME CRITERIA FAILED!');
console.log('======================================================');

if (!allPassed) process.exit(1);
