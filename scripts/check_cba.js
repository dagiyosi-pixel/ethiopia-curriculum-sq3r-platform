const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function checkCba(fileName) {
  const filePath = path.join(dir, fileName);
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const res = await parser.getText();
  console.log('\n====================================');
  console.log('CBA FILE: ' + fileName + ' (Pages: ' + res.total + ')');
  console.log('====================================');
  console.log(res.text.slice(0, 2500));
}

async function run() {
  await checkCba('Grade_7_Mathematics_CBA_Revision_261008_182926.pdf');
  await checkCba('Grade_7_Social_Studies_CBA_Revision_261008_182022.pdf');
  await checkCba('Grade_8_Volcanism_Earthquakes_Short_Notes_261003_100905.pdf');
}

run();
