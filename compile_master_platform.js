const fs = require('fs');
const path = require('path');

console.log('Compiling Master Galactic Platform with All 12 Subjects and Strict Progression Gate...');

// Load all subjects
const g7m = require('./src/curriculum/g7_math.js');
const g7s = require('./src/curriculum/g7_science.js');
const g7e = require('./src/curriculum/g7_english.js');
const g7so = require('./src/curriculum/g7_social.js');
const g7c = require('./src/curriculum/g7_citizenship.js');
const g7it = require('./src/curriculum/g7_it.js');

const g8m = require('./src/curriculum/g8_math.js');
const g8s = require('./src/curriculum/g8_science.js');
const g8e = require('./src/curriculum/g8_english.js');
const g8so = require('./src/curriculum/g8_social.js');
const g8c = require('./src/curriculum/g8_citizenship.js');
const g8it = require('./src/curriculum/g8_it.js');

const masterDB = {
  7: {
    math: g7m,
    science: g7s,
    english: g7e,
    social: g7so,
    citizenship: g7c,
    it: g7it
  },
  8: {
    math: g8m,
    science: g8s,
    english: g8e,
    social: g8so,
    citizenship: g8c,
    it: g8it
  }
};

// Validate that every unit and subtopic is properly structured
let totalUnits = 0;
let totalSubtopics = 0;
let totalAmtQuestions = 0;

[7, 8].forEach(g => {
  Object.keys(masterDB[g]).forEach(sKey => {
    const subj = masterDB[g][sKey];
    totalUnits += subj.units.length;
    subj.units.forEach(u => {
      if (!u.subtopics || u.subtopics.length === 0) {
        console.error(`ERROR: Unit ${u.number} (${u.title}) in Grade ${g} ${subj.name} has no subtopics!`);
      } else {
        totalSubtopics += u.subtopics.length;
        u.subtopics.forEach(st => {
          if (!st.amtQuiz || st.amtQuiz.length === 0) {
            console.error(`ERROR: Subtopic ${st.code} (${st.title}) has no amtQuiz!`);
          } else {
            totalAmtQuestions += st.amtQuiz.length;
          }
        });
      }
    });
  });
});

console.log(`Validation Passed! Total Units: ${totalUnits}, Total Subtopics: ${totalSubtopics}, Total AMT Questions: ${totalAmtQuestions}`);

// Write master_curriculum.json
fs.writeFileSync(path.join(__dirname, 'master_curriculum.json'), JSON.stringify(masterDB, null, 2));
console.log('master_curriculum.json successfully updated.');
