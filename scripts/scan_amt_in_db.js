const fs = require('fs');
const db = JSON.parse(fs.readFileSync('master_curriculum.json', 'utf8'));
let keysWithAmt = new Set();
let textWithAmt = [];

function scan(obj, path) {
  path = path || '';
  if (typeof obj === 'string') {
    if (/\bAMT\b/i.test(obj)) {
      textWithAmt.push({ path: path, text: obj.substring(0, 100) });
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => scan(item, path + '[' + i + ']'));
  } else if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach(k => {
      if (/amt/i.test(k)) keysWithAmt.add(k);
      scan(obj[k], path ? path + '.' + k : k);
    });
  }
}

scan(db);
console.log('Keys with AMT:', Array.from(keysWithAmt));
console.log('Strings with AMT word count:', textWithAmt.length);
if (textWithAmt.length > 0) {
  console.log('Sample strings with AMT:', textWithAmt.slice(0, 5));
}
