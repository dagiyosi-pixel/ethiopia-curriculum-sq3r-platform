const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function getToc(fileName) {
  try {
    const filePath = path.join(dir, fileName);
    const buffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: buffer });
    const res = await parser.getText();
    const text = res.text;
    
    // Look for Contents or Table of Contents
    let startIdx = text.indexOf('Table of Contents');
    if (startIdx === -1) startIdx = text.indexOf('TABLE OF CONTENTS');
    if (startIdx === -1) startIdx = text.indexOf('Contents');
    if (startIdx === -1) startIdx = text.indexOf('CONTENTS');
    if (startIdx === -1) startIdx = text.indexOf('Unit 1');
    if (startIdx === -1) startIdx = text.indexOf('UNIT 1');

    console.log('\n==================================================');
    console.log('FILE: ' + fileName + ' (Pages: ' + res.total + ')');
    console.log('==================================================');
    if (startIdx !== -1) {
      console.log(text.slice(startIdx, startIdx + 1200));
    } else {
      console.log(text.slice(0, 1000));
    }
  } catch (err) {
    console.error('Error on ' + fileName + ':', err.message);
  }
}

async function run() {
  const targets = [
    'Chemistry Grade 7.pdf',
    'Biology Grade 7.pdf',
    'Civics Grade 7.pdf',
    'Social grade 8.pdf',
    'Biology grade 8.pdf',
    'Chem. grade 8.pdf',
    'Physics grade 8.pdf',
    'English grade 7.pdf',
    'English Grade 8.pdf'
  ];

  for (const t of targets) {
    await getToc(t);
  }
}

run();
