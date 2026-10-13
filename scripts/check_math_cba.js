const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function checkMathCba() {
  const filePath = path.join(dir, 'Grade_7_Mathematics_CBA_Revision_261008_182926.pdf');
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const res = await parser.getText();
  const text = res.text;
  
  const lines = text.split('\n');
  lines.forEach(line => {
    if (/^Unit\s+\d+/i.test(line.trim())) {
      console.log(line.trim());
    }
  });
}

checkMathCba();
