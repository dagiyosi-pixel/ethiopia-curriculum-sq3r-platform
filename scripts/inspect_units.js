const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function inspect(fileName) {
  const filePath = path.join(dir, fileName);
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const res = await parser.getText();
  const text = res.text;
  
  console.log('\n====================================');
  console.log('FILE: ' + fileName);
  console.log('====================================');
  
  // Find lines starting with Unit or UNIT
  const lines = text.split('\n');
  const unitLines = lines.filter(l => /^(UNIT|Unit)\s+\d+/i.test(l.trim()));
  console.log('Found ' + unitLines.length + ' unit headers:');
  console.log([...new Set(unitLines.map(l => l.trim()))].slice(0, 15).join('\n'));
}

async function run() {
  await inspect('Chemistry Grade 7.pdf');
  await inspect('Biology Grade 7.pdf');
  await inspect('Civics Grade 7.pdf');
  await inspect('Social grade 8.pdf');
  await inspect('Chem. grade 8.pdf');
  await inspect('Physics grade 8.pdf');
  await inspect('Biology grade 8.pdf');
}

run();
