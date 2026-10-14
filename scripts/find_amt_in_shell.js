const fs = require('fs');
const shell = fs.readFileSync('src/template_shell.html', 'utf8');

const lines = shell.split('\n');
lines.forEach((line, idx) => {
  if (/amt/i.test(line)) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
