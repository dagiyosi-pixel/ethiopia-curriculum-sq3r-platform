const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function findToc(fileName) {
  const filePath = path.join(dir, fileName);
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const res = await parser.getText();
  const text = res.text;
  
  console.log('\n====================================');
  console.log('FILE: ' + fileName + ' (Pages: ' + res.total + ')');
  console.log('====================================');
  
  // Search for the word 'Unit' or 'Chapter' on early pages (pages 1 to 10)
  // Let's print the first 3500 characters
  console.log(text.slice(0, 3000));
}

async function run() {
  await findToc('Biology Grade 7.pdf');
  await findToc('Biology grade 8.pdf');
  await findToc('Chem. grade 8.pdf');
  await findToc('Social grade 8.pdf');
}

run();
