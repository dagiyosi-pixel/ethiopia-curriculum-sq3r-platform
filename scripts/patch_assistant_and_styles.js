const fs = require('fs');
const path = require('path');

const shellPath = path.join(__dirname, '..', 'src', 'template_shell.html');
let html = fs.readFileSync(shellPath, 'utf8');

// 1. Add 3D Flip, Constellation, and X-Ray CSS
const customCss = `
    /* === WORLD-CLASS SQ3R INTERACTIVE SUITE STYLES === */
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    .card-flip-container {
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      transform-style: preserve-3d;
    }
    .card-flip-container.is-flipped {
      transform: rotateY(180deg);
    }

    /* Pulse & Radar Animations */
    @keyframes radarPulse {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
      70% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }
    .radar-pulse {
      animation: radarPulse 2s infinite;
    }

    @keyframes goldenOrbit {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .orbit-spin-slow {
      animation: goldenOrbit 40s linear infinite;
    }

    /* X-Ray Concept Scanner Highlight */
    .xray-active .xray-term {
      background: rgba(16, 185, 129, 0.25);
      border-bottom: 2px solid #10b981;
      color: #a7f3d0;
      font-weight: 700;
      padding: 1px 4px;
      border-radius: 4px;
      cursor: pointer;
      display: inline-block;
      transition: all 0.2s ease;
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
    }
    .xray-active .xray-term:hover {
      background: rgba(16, 185, 129, 0.5);
      color: #ffffff;
      transform: translateY(-1px);
    }

    /* Constellation Node Styling */
    .constellation-node {
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .constellation-node:hover {
      transform: translateY(-4px) scale(1.04);
    }
    .constellation-node.active-node {
      border-color: #10b981;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
    }
`;

if (!html.includes('WORLD-CLASS SQ3R INTERACTIVE SUITE STYLES')) {
  html = html.replace('</style>', customCss + '\n  </style>');
  console.log('1. Added custom SQ3R 3D, constellation, and X-ray CSS.');
}

// 2. Add Floating Smart Study Assistant FAB and Interactive Modal
const assistantHtml = `
  <!-- Floating Smart Study Assistant (Dr. Desta • AI Study Guide) -->
  <button id="studyAssistantFab" onclick="toggleStudyAssistant()" class="fixed bottom-6 left-6 z-40 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition flex items-center gap-2 border border-emerald-400/40 cursor-pointer">
    <span class="text-lg">🤖</span>
    <span>ዶ/ር ደስታ (AI Study Guide)</span>
  </button>

  <!-- Study Assistant Interactive Modal Drawer -->
  <div id="studyAssistantModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/80 backdrop-blur-md">
    <div class="glass-card max-w-xl w-full p-6 sm:p-7 rounded-3xl border border-emerald-500/40 space-y-5 relative bg-space-900 shadow-2xl">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl">
            🎓
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white font-display">ዶ/ር ደስታ • ብልህ የጥናት ረዳት (Curriculum Guide)</h3>
            <p class="text-xs text-slate-400">Contextual pedagogical explanation grounded strictly in the Ethiopian Curriculum.</p>
          </div>
        </div>
        <button onclick="toggleStudyAssistant()" class="w-8 h-8 rounded-full bg-space-850 hover:bg-space-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer">
          ✕
        </button>
      </div>

      <!-- Quick Action Prompt Chips -->
      <div class="space-y-1.5">
        <label class="block text-[11px] font-black text-slate-400 uppercase tracking-widest">ምን ማወቅ ትፈልጋለህ? (Choose Prompt):</label>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <button onclick="askAssistant('simpler')" class="p-2.5 rounded-xl bg-space-950 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/40 text-slate-200 font-bold transition text-left cursor-pointer">
            💡 ቀለል አድርገህ አስረዳ (Explain Simpler)
          </button>
          <button onclick="askAssistant('example')" class="p-2.5 rounded-xl bg-space-950 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/40 text-slate-200 font-bold transition text-left cursor-pointer">
            🌍 የዕለት ተዕለት ምሳሌ (Everyday Example)
          </button>
          <button onclick="askAssistant('hint')" class="p-2.5 rounded-xl bg-space-950 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/40 text-slate-200 font-bold transition text-left cursor-pointer">
            🎯 የፈተና ፍንጭ ስጠኝ (Exam Pitfall Hint)
          </button>
          <button onclick="askAssistant('recap')" class="p-2.5 rounded-xl bg-space-950 hover:bg-space-850 border border-slate-800 hover:border-emerald-500/40 text-slate-200 font-bold transition text-left cursor-pointer">
            📝 ዋና ዋና ነጥቦች (3-Point Recap)
          </button>
        </div>
      </div>

      <!-- Dynamic Response Box -->
      <div class="p-4 rounded-2xl bg-space-950 border border-slate-800 space-y-2 min-h-[140px] max-h-[260px] overflow-y-auto">
        <div class="text-xs uppercase font-black text-emerald-400 tracking-wider flex items-center gap-1.5">
          <span>📖</span> <span id="assistantTopicBadge">Target: Active Lesson</span>
        </div>
        <div id="assistantResponseText" class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          ሰላም! እኔ ዶ/ር ደስታ ነኝ። ከላይ ካሉት አማራጮች አንዱን በመምረጥ የትምህርቱን ፅንሰ-ሀሳብ በቀላሉ መረዳት ትችላለህ።
        </div>
      </div>

      <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800">
        <span>Grounded in Ethiopian MoE Curriculum</span>
        <button onclick="toggleStudyAssistant()" class="px-4 py-1.5 rounded-lg bg-space-850 hover:bg-space-800 text-slate-300 font-bold transition cursor-pointer">ተመለስ (Close)</button>
      </div>
    </div>
  </div>
`;

if (!html.includes('id="studyAssistantFab"')) {
  const targetScriptTag = '  <!-- Complete Exhaustive Curriculum Database & Engine -->';
  if (html.includes(targetScriptTag)) {
    html = html.replace(targetScriptTag, assistantHtml + '\n' + targetScriptTag);
    console.log('2. Inserted Study Assistant modal and FAB before script tag.');
  } else {
    html = html + '\n' + assistantHtml;
    console.log('2. Appended Study Assistant modal and FAB.');
  }
} else {
  console.log('2. Study Assistant already present.');
}

fs.writeFileSync(shellPath, html, 'utf8');
console.log('template_shell.html patched successfully!');
