const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Find all script blocks
const scriptMatches = [];
let idx = 0;
while ((idx = html.indexOf('<script', idx)) !== -1) {
  const closeIdx = html.indexOf('</script>', idx);
  if (closeIdx === -1) {
    console.error('Unclosed script tag starting at', idx);
    break;
  }
  scriptMatches.push({ start: idx, end: closeIdx + 9 });
  idx = closeIdx + 9;
}

console.log(`Found ${scriptMatches.length} <script> blocks in index.html.`);

// Check for any leaked code after footer
const footerPos = html.indexOf('</footer>');
const lastScriptPos = html.lastIndexOf('<script');
const lastScriptClose = html.lastIndexOf('</script>');

console.log('Footer pos:', footerPos);
console.log('Last script start:', lastScriptPos);
console.log('Last script close:', lastScriptClose);

// Extract the main script block
const mainScriptContent = html.substring(lastScriptPos, lastScriptClose);

// Ensure there are no nested </script> inside the main script
const innerClosePos = mainScriptContent.indexOf('</script>');
console.log('Main script contains premature closing tag:', innerClosePos !== -1 && innerClosePos !== mainScriptContent.length - 9);

// Test executing the script header and logic in a sandbox VM
const vm = require('vm');
const context = {
  window: {
    addEventListener: () => {},
    innerWidth: 1024,
    innerHeight: 768,
    AudioContext: class {},
    webkitAudioContext: class {},
    localStorage: { getItem: () => null, setItem: () => {} }
  },
  document: {
    getElementById: () => ({ innerText: '', classList: { add: () => {}, remove: () => {} } }),
    querySelectorAll: () => [],
    createElement: () => ({ setAttribute: () => {}, click: () => {} }),
    body: { appendChild: () => {}, removeChild: () => {} },
    activeElement: { tagName: 'DIV' }
  },
  navigator: {},
  localStorage: { getItem: () => null, setItem: () => {} },
  setTimeout: () => {},
  setInterval: () => {},
  clearInterval: () => {}
};

try {
  // Strip the opening and closing script tags
  const pureJs = mainScriptContent.substring(mainScriptContent.indexOf('>') + 1);
  vm.createContext(context);
  vm.runInContext(pureJs, context);
  console.log('✅ Main JS script executes without any syntax or runtime evaluation errors in VM!');
} catch (err) {
  console.error('❌ JS Execution Error in VM:', err);
  process.exit(1);
}
