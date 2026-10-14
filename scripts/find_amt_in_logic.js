const fs = require('fs');
const logic = fs.readFileSync('src/app_logic.js', 'utf8');

const lines = logic.split('\n');
lines.forEach((line, idx) => {
  if (/\bamt\b/i.test(line)) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
