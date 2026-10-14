const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function scanUnitOutcomes(fileName) {
  const filePath = path.join(dir, fileName);
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const res = await parser.getText();
  const text = res.text;

  console.log(`\n======================================================`);
  console.log(`FILE: ${fileName}`);
  console.log(`======================================================`);

  const regex = /Unit Outcomes[\s\S]{1,200}/gi;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const idx = match.index;
    const snippet = text.slice(Math.max(0, idx - 150), idx + 200).replace(/\r/g, '');
    console.log('--- FOUND OUTCOME ---');
    console.log(snippet);
  }
}

async function run() {
  await scanUnitOutcomes('Social grade 8.pdf');
  await scanUnitOutcomes('Biology Grade 7.pdf');
  await scanUnitOutcomes('Biology grade 8.pdf');
  await scanUnitOutcomes('Chem. grade 8.pdf');
}

run();
