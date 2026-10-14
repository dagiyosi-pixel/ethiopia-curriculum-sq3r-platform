const fs = require('fs');
const path = require('path');

const logicPath = path.join(__dirname, '..', 'src', 'app_logic.js');
let code = fs.readFileSync(logicPath, 'utf8');

// 1. Fix Ge'ez single quote
code = code.replace("name: 'Ge'ez Ancient Parchment'", 'name: "Ge\'ez Ancient Parchment"');

// 2. Remove the inner <script> tag from printCurrentUnitSummary completely
const innerScriptBlock = `  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  </script>`;

if (code.includes(innerScriptBlock)) {
  code = code.replace(innerScriptBlock, '');
  console.log('Removed inner <script> tag from printHtml string template.');
} else {
  // Replace any </script> inside strings with <\/script>
  code = code.replace(/<\/script>/g, '<\\/script>');
}

// 3. Update printWindow to print via window.focus() & setTimeout
const oldPrintCall = `const printWindow = window.open('', '_blank', 'width=850,height=900');
      if (printWindow) {
        try { printWindow.opener = null; } catch(e) {}
        printWindow.document.write(printHtml);
        printWindow.document.close();
      }`;

const newPrintCall = `const printWindow = window.open('', '_blank', 'width=850,height=900');
      if (printWindow) {
        try { printWindow.opener = null; } catch(e) {}
        printWindow.document.write(printHtml);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          try { printWindow.print(); } catch(e) {}
        }, 300);
      }`;

if (code.includes(oldPrintCall)) {
  code = code.replace(oldPrintCall, newPrintCall);
}

fs.writeFileSync(logicPath, code, 'utf8');
console.log('Successfully fixed syntax and script escapes in src/app_logic.js!');
