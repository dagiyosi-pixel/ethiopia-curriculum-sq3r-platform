const fs = require('fs');
const path = require('path');

const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');
let logic = fs.readFileSync(logicPath, 'utf8');

// In newGizmoReciteSuite, change:
// let currentCardIndex = 0;
// let isCardFlipped = false;
// to just assign or remove duplicate 'let'
logic = logic.replace(
  `    let activeReciteMode = 'flashcards'; // 'flashcards' | 'type' | 'match' | 'journal'
    let currentCardIndex = 0;
    let isCardFlipped = false;`,
  `    let activeReciteMode = 'flashcards'; // 'flashcards' | 'type' | 'match' | 'journal'`
);

// Check if there are other duplicate 'let currentCardIndex'
const matches = [...logic.matchAll(/let currentCardIndex\s*=\s*0;/g)];
console.log('Matches for let currentCardIndex:', matches.length);

if (matches.length > 1) {
  // Keep only the first declaration, remove subsequent 'let '
  let count = 0;
  logic = logic.replace(/let currentCardIndex\s*=\s*0;/g, (match) => {
    count++;
    return count === 1 ? match : 'currentCardIndex = 0;';
  });
}

const isFlippedMatches = [...logic.matchAll(/let isCardFlipped\s*=\s*false;/g)];
console.log('Matches for let isCardFlipped:', isFlippedMatches.length);

if (isFlippedMatches.length > 1) {
  let count = 0;
  logic = logic.replace(/let isCardFlipped\s*=\s*false;/g, (match) => {
    count++;
    return count === 1 ? match : 'isCardFlipped = false;';
  });
}

fs.writeFileSync(logicPath, logic, 'utf8');
console.log('Cleaned up duplicate variable declarations in app_logic.js.');
