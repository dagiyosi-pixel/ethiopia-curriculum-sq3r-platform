const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';

async function inspectTocPages(fileName) {
  try {
    const filePath = path.join(dir, fileName);
    const buffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: buffer });
    const res = await parser.getText();
    const text = res.text;
    console.log(`\n======================================================`);
    console.log(`FILE: ${fileName}`);
    console.log(`======================================================`);
    
    // Find where "Table of Contents" or "Contents" appears
    let idx = text.indexOf('Contents');
    if (idx === -1) idx = text.indexOf('CONTENTS');
    if (idx !== -1) {
      console.log(text.slice(idx, idx + 2500));
    } else {
      console.log(text.slice(0, 2000));
    }
  } catch (e) {
    console.log(`Error ${fileName}: ${e.message}`);
  }
}

async function run() {
  await inspectTocPages('Biology Grade 7.pdf');
  await inspectTocPages('Biology grade 8.pdf');
  await inspectTocPages('Chem. grade 8.pdf');
  await inspectTocPages('Social grade 8.pdf');
}

run();
