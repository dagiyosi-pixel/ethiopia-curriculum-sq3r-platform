const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function scanSocialAndBio(fileName) {
  const filePath = path.join(dir, fileName);
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const res = await parser.getText();
  const text = res.text;

  console.log(`\n*** SCANNING ${fileName} ***`);
  // Look for "UNIT X" or "Unit X"
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim();
    if (/^(UNIT|Unit)\s+\d+/i.test(l)) {
      console.log(l + ' | next: ' + (lines[i+1] || '').trim() + ' | next2: ' + (lines[i+2] || '').trim());
    }
  }
}

async function run() {
  await scanSocialAndBio('Social grade 8.pdf');
  await scanSocialAndBio('Biology Grade 7.pdf');
  await scanSocialAndBio('Biology grade 8.pdf');
  await scanSocialAndBio('Chem. grade 8.pdf');
}

run();
