const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function scanUnits(fileName) {
  try {
    const filePath = path.join(dir, fileName);
    if (!fs.existsSync(filePath)) return;
    const buffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: buffer });
    const res = await parser.getText();
    const text = res.text;

    console.log(`\n======================================================`);
    console.log(`FILE: ${fileName}`);
    console.log(`======================================================`);

    // Match patterns like "Unit 1", "UNIT 1", "Unit 2", etc.
    const regex = /(?:Unit|UNIT)\s+(\d+)\s*[:\-\.]?\s*([^\n\r]{3,80})/g;
    let match;
    const foundUnits = new Map();
    while ((match = regex.exec(text)) !== null) {
      const uNum = parseInt(match[1]);
      const title = match[2].trim().replace(/\s+/g, ' ');
      if (uNum >= 1 && uNum <= 15 && !foundUnits.has(uNum)) {
        foundUnits.set(uNum, title);
      }
    }

    foundUnits.forEach((title, num) => {
      console.log(`  Unit ${num}: ${title}`);
    });
  } catch (e) {
    console.log(`Error reading ${fileName}: ${e.message}`);
  }
}

async function main() {
  const files = [
    'Maths grade.pdf',
    'Maths grade 8.pdf',
    'Biology Grade 7.pdf',
    'Chemistry Grade 7.pdf',
    'Biology grade 8.pdf',
    'Chem. grade 8.pdf',
    'Physics grade 8.pdf',
    'Civics Grade 7.pdf',
    'Social grade 8.pdf',
    'English grade 7.pdf',
    'English Grade 8.pdf'
  ];

  for (const f of files) {
    await scanUnits(f);
  }
}

main();
