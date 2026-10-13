const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function checkAllUnits(fileName) {
  const filePath = path.join(dir, fileName);
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const res = await parser.getText();
  const text = res.text;
  
  console.log('\n====================================');
  console.log('FILE: ' + fileName + ' (Pages: ' + res.total + ')');
  console.log('====================================');
  
  // Find lines starting with Unit
  const lines = text.split('\n');
  lines.forEach(line => {
    if (/^Unit\s+\d+/i.test(line.trim())) {
      console.log(line.trim());
    }
  });
}

checkAllUnits('Grade_7_Social_Studies_CBA_Revision_261008_182022.pdf');
