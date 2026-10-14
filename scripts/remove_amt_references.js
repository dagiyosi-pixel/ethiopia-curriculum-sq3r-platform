const fs = require('fs');
const path = require('path');

console.log('Purging all AMT references and replacing with Grade 7 & 8 Ministry Exam terminology...');

const rootDir = path.join(__dirname, '..');
const shellPath = path.join(rootDir, 'src', 'template_shell.html');
const logicPath = path.join(rootDir, 'src', 'app_logic.js');
const readmePath = path.join(rootDir, 'README.md');

let shell = fs.readFileSync(shellPath, 'utf8');
let logic = fs.readFileSync(logicPath, 'utf8');
let readme = fs.readFileSync(readmePath, 'utf8');

// 1. Template Shell replacements
shell = shell.replace('<span>🎯</span> የጥያቄዎች ባንክ (AMT Question Bank)', '<span>🎯</span> የፈተናዎች ባንክ (Grade 7 & 8 Exam Bank)');
shell = shell.replace('<span>577 የAMT ጥያቄዎች ባንክ</span>', '<span>577 የ7ኛ እና 8ኛ ክፍል ፈተናዎች ባንክ</span>');
shell = shell.replace('AMT Exam Gate (≥80%)', 'Ministry Exam Gate (≥80%)');
shell = shell.replace('🎯 የክልል ፈተና ማስመሰያ (REGIONAL AMT EXAM ENGINE)', '🎯 የ7ኛ እና 8ኛ ክፍል ፈተና ማስመሰያ (GRADE 7 & 8 MINISTRY EXAM ENGINE)');
shell = shell.replace('577 የAMT የፈተና ጥያቄዎች', '577 የ7ኛ እና 8ኛ ክፍል የፈተና ጥያቄዎች');
shell = shell.replace('<div class="text-xs text-slate-400 font-semibold">AMT Quizzes Aced</div>', '<div class="text-xs text-slate-400 font-semibold">Ministry Quizzes Aced</div>');

// 2. App Logic replacements
logic = logic.replace('<span>ወደ AMT ብቃት ፈተና እለፍ (+45 XP)</span>', '<span>ወደ ሚኒስቴር ፈተና እለፍ (+45 XP)</span>');
logic = logic.replace('ደረጃ 5 ከ 5 • የብቃት ፈተና (STAGE 5: REVIEW & AMT MASTERY GATE)', 'ደረጃ 5 ከ 5 • የብቃት ፈተና (STAGE 5: REVIEW & MINISTRY MASTERY GATE)');
logic = logic.replace('NATIONAL CURRICULUM AMT EXAM ENGINE', 'NATIONAL CURRICULUM GRADE 7 & 8 EXAM ENGINE');
logic = logic.replace('AMT Question #${idx+1}', 'Exam Question #${idx+1}');
logic = logic.replace("addXp(25, 'AMT Solver');", "addXp(25, 'Ministry Exam Solver');");
logic = logic.replace('ተልዕኮ 3፦ በAMT ፈተና ≥80% በማምጣት ማለፍ', 'ተልዕኮ 3፦ በሚኒስቴር ፈተና ≥80% በማምጣት ማለፍ');
logic = logic.replace('Score ≥80% on an AMT Mastery Exam Gate (+80 XP)', 'Score ≥80% on a Ministry Mastery Exam Gate (+80 XP)');

// Any remaining user-facing "AMT" in template strings or comments
logic = logic.replace(/AMT Exam Gate/g, 'Ministry Exam Gate');
logic = logic.replace(/AMT Mastery Gate/g, 'Ministry Mastery Gate');
logic = logic.replace(/AMT Quiz/gi, 'Ministry Exam');
logic = logic.replace(/AMT ፈተና/g, 'የሚኒስቴር ፈተና');
logic = logic.replace(/የAMT ጥያቄዎች/g, 'የ7ኛ እና 8ኛ ክፍል የፈተና ጥያቄዎች');

// 3. README replacements
readme = readme.replace(/AMT Exam-style/g, 'Ministry Exam-style');
readme = readme.replace(/AMT_Exam_Questions-577_Verified/g, 'Ministry_Exam_Questions-577_Verified');
readme = readme.replace(/577\+ AMT Exam-Style/g, '577+ Ministry Exam-Style (Grade 7 & 8)');

fs.writeFileSync(shellPath, shell, 'utf8');
fs.writeFileSync(logicPath, logic, 'utf8');
fs.writeFileSync(readmePath, readme, 'utf8');

console.log('All AMT references purged successfully from template_shell, app_logic, and README.');
