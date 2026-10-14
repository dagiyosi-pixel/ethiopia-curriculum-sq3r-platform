const fs = require('fs');
const path = require('path');

console.log('Testing Popularity Upgrades in index.html...');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

const requiredIds = [
  'pwaInstallBanner',
  'tabBtn-exam-hall',
  'view-exam-hall',
  'examHallLobby',
  'examHallActive',
  'examHallResults',
  'examPaletteGrid',
  'examClockDisplay',
  'examQuestionCard',
  'certificateModal',
  'certCanvas',
  'certStudentName',
  'certSchoolName'
];

let allIdsFound = true;
requiredIds.forEach(id => {
  const has = html.includes(`id="${id}"`);
  if (!has) {
    console.error(`MISSING ID: ${id}`);
    allIdsFound = false;
  }
});

console.log('All Required DOM IDs Present:', allIdsFound);

const requiredFunctions = [
  'launchExamHall',
  'startExamHallTimer',
  'renderExamHallPalette',
  'renderExamHallQuestion',
  'selectExamOption',
  'toggleExamFlag',
  'navigateExamQuestion',
  'confirmSubmitExam',
  'finishExamHall',
  'resetExamHall',
  'openCertificateModal',
  'closeCertificateModal',
  'updateCertPreview',
  'drawCertificateCanvas',
  'downloadCertificateImage',
  'shareCertificateTelegram',
  'printCurrentUnitSummary',
  'installPwaApp',
  'dismissPwaBanner'
];

let allFuncsFound = true;
requiredFunctions.forEach(fn => {
  const has = html.includes(`function ${fn}`);
  if (!has) {
    console.error(`MISSING FUNCTION: ${fn}`);
    allFuncsFound = false;
  }
});

console.log('All Popularity Functions Present:', allFuncsFound);

if (allIdsFound && allFuncsFound) {
  console.log('POPULARITY UPGRADES VERIFICATION PASSED 100%! 🌟');
} else {
  process.exit(1);
}
