const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const shellPath = path.join(rootDir, 'src', 'template_shell.html');
const logicPath = path.join(rootDir, 'src', 'app_logic.js');

let shell = fs.readFileSync(shellPath, 'utf8');
let logic = fs.readFileSync(logicPath, 'utf8');

shell = shell.replace('<!-- VIEW 3: AMT REGIONAL EXAM MODE (DETAILED BABY-STEP REVEAL)      -->', '<!-- VIEW 3: GRADE 7 & 8 REGIONAL EXAM MODE (DETAILED BABY-STEP REVEAL) -->');
shell = shell.replace('<!-- Dynamically populated AMT exam questions -->', '<!-- Dynamically populated Grade 7 & 8 exam questions -->');

logic = logic.replace('// STAGE 5: REVIEW ENGINE (AMT EXAM WITH HIDDEN BABY-STEP DERIVATIONS & 80% GATE)', '// STAGE 5: REVIEW ENGINE (MINISTRY EXAM WITH HIDDEN BABY-STEP DERIVATIONS & 80% GATE)');
logic = logic.replace('// AMT EXAM MODE: GRADING, EXTREME BABY-STEP REVEAL, AND 80% GATE', '// GRADE 7 & 8 MINISTRY EXAM MODE: GRADING, EXTREME BABY-STEP REVEAL, AND 80% GATE)');
logic = logic.replace('// AMT EXAM SIMULATOR TAB', '// GRADE 7 & 8 MINISTRY EXAM SIMULATOR TAB');

fs.writeFileSync(shellPath, shell, 'utf8');
fs.writeFileSync(logicPath, logic, 'utf8');
console.log('Cleaned up comments.');
