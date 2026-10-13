const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function checkBio(fileName) {
  const filePath = path.join(dir, fileName);
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const res = await parser.getText();
  const text = res.text;
  
  console.log('\n====================================');
  console.log('FILE: ' + fileName);
  console.log('====================================');
  
  // Find where Unit 1 begins
  const u1 = text.indexOf('Unit 1') !== -1 ? text.indexOf('Unit 1') : text.indexOf('UNIT 1');
  if (u1 !== -1) {
    console.log(text.slice(u1, u1 + 2500));
  } else {
    console.log(text.slice(2000, 4500));
  }
}

async function run() {
  await checkBio('Biology Grade 7.pdf');
  await checkBio('Biology grade 8.pdf');
}

run();
