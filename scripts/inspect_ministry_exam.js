const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\Dagi 3\\Desktop\\ministry exam';
if (!fs.existsSync(dir)) {
  console.log('Directory does not exist:', dir);
  process.exit(1);
}

const files = fs.readdirSync(dir);
console.log('Found ' + files.length + ' files in ' + dir + ':');
files.forEach(f => {
  const stat = fs.statSync(path.join(dir, f));
  console.log(' - ' + f + ' (' + (stat.size / (1024 * 1024)).toFixed(2) + ' MB)');
});
