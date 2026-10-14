const fs = require('fs');
const path = require('path');

console.log('Compiling Master Ethiopian National Curriculum Platform with Popularity Upgrades...');

const rootDir = path.join(__dirname, '..');
const shellPath = path.join(rootDir, 'src', 'template_shell.html');
const dbPath = path.join(rootDir, 'master_curriculum.json');
const logicPath = path.join(rootDir, 'src', 'app_logic.js');
const outputPath = path.join(rootDir, 'index.html');

const desktop1 = 'C:\\Users\\Dagi 3\\Desktop\\Grade_7_and_8_SQ3R_Master_Platform.html';
const desktop2 = 'C:\\Users\\Dagi 3\\Desktop\\Grade_7_SQ3R_Master_App.html';

// 1. Read sources
const shell = fs.readFileSync(shellPath, 'utf8');
const dbContent = fs.readFileSync(dbPath, 'utf8');
const logic = fs.readFileSync(logicPath, 'utf8');

// 2. Validate DB is valid JSON
const parsedDB = JSON.parse(dbContent);
console.log('Database loaded. Grades present:', Object.keys(parsedDB));

// 3. Assemble index.html
// template_shell.html already has the open <script> tag at the end
let assembledHtml = shell.trim();
assembledHtml += `\n    const GALACTIC_DATABASE = ${dbContent};\n\n`;
assembledHtml += logic;
assembledHtml += `\n  </script>\n</body>\n</html>\n`;

// 4. Write output to index.html
fs.writeFileSync(outputPath, assembledHtml, 'utf8');
const stat = fs.statSync(outputPath);
console.log(`Generated ${outputPath} (${(stat.size / (1024 * 1024)).toFixed(2)} MB, ${(stat.size / 1024).toFixed(1)} KB)`);

// 5. Mirror to Desktop files
fs.writeFileSync(desktop1, assembledHtml, 'utf8');
console.log(`Mirrored to: ${desktop1}`);

fs.writeFileSync(desktop2, assembledHtml, 'utf8');
console.log(`Mirrored to: ${desktop2}`);

// 6. Quick Integrity Checks
console.log('\n--- Integrity Checks ---');
console.log('Has Certificate Canvas:', assembledHtml.includes('id="certCanvas"'));
console.log('Has Exam Hall Section:', assembledHtml.includes('id="view-exam-hall"'));
console.log('Has Print Unit Sheet:', assembledHtml.includes('function printCurrentUnitSummary'));
console.log('Has Exam Hall Simulator logic:', assembledHtml.includes('function launchExamHall'));
console.log('Has Certificate Canvas drawing:', assembledHtml.includes('function drawCertificateCanvas'));
console.log('Has Telegram sharing:', assembledHtml.includes('function shareCertificateTelegram'));
console.log('Has Baby-Step Solution Engine:', assembledHtml.includes('function buildBabyStepSolutionHtml'));
console.log('Has 80% Gate evaluation:', assembledHtml.includes('scorePct >= 80'));
console.log('\nBUILD AND COMPILATION COMPLETED SUCCESSFULLY! 🚀');
