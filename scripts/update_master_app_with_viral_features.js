const fs = require('fs');
const path = require('path');

console.log('Generating Enhanced Authentic Master App Builder with Viral Popularity Features...');

// We will construct the complete build_authentic_master_app.js with:
// 1. PWA Install Prompt Banner
// 2. 7 Navigation Tabs including 'exam-hall' (Ministry Exam Hall Simulator)
// 3. Print 1-Page Summary / Cheat Sheet button
// 4. Interactive Certificate Generator (Canvas + PNG download + Telegram share)
// 5. Ministry Exam Hall Simulator (20/40/60 Questions, Timer, Palette, Predicted Grade A+/A/B/C/F)
// 6. Full offline functionality & desktop mirrors

const builderCode = `const fs = require('fs');
const path = require('path');

console.log('Building Authentic Ethiopian National Curriculum SQ3R Platform (Grade 7 & 8)...');

// 1. Load the compiled master curriculum
const masterCurriculum = JSON.parse(fs.readFileSync(path.join(__dirname, 'master_curriculum.json'), 'utf8'));

// 2. Prepare HTML template with Authentic Ethiopian National Aesthetics & Viral Popularity Features
const htmlContent = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Ethiopian National Curriculum Platform • Grade 7 & 8 Examination Mastery (SQ3R)</title>
  <link rel="manifest" href="./manifest.json">
  <meta name="theme-color" content="#070b14">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700;800&family=Noto+Sans+Ethiopic:wght@400;600;700;900&family=Space+Grotesk:wght@600;700;900&display=swap" rel="stylesheet">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"Noto Sans Ethiopic"', 'system-ui', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
            display: ['"Space Grotesk"', '"Noto Sans Ethiopic"', 'sans-serif']
          },
          colors: {
            ethiopia: {
              green: '#009A44',
              gold: '#FED100',
              red: '#EF3340',
              blue: '#0D529C'
            },
            space: {
              950: '#060911',
              900: '#090e1a',
              850: '#0e1526',
              800: '#151f38',
              700: '#1e2d4f'
            }
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Plus Jakarta Sans', 'Noto Sans Ethiopic', system-ui, sans-serif;
      background: #060911;
      color: #f1f5f9;
      min-height: 100vh;
      overflow-x: hidden;
      background-image: 
        radial-gradient(circle at 15% 10%, rgba(0, 154, 68, 0.08) 0%, transparent 45%),
        radial-gradient(circle at 85% 15%, rgba(254, 209, 0, 0.06) 0%, transparent 45%),
        radial-gradient(circle at 50% 85%, rgba(239, 51, 64, 0.05) 0%, transparent 55%);
    }
    .flag-ribbon {
      height: 4px;
      width: 100%;
      background: linear-gradient(90deg, #009A44 0% 33.3%, #FED100 33.3% 66.6%, #EF3340 66.6% 100%);
    }
    .glass-card {
      background: rgba(14, 21, 38, 0.88);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .glass-crest {
      background: linear-gradient(135deg, rgba(13, 82, 156, 0.25) 0%, rgba(0, 154, 68, 0.15) 50%, rgba(14, 21, 38, 0.95) 100%);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(254, 209, 0, 0.35);
      box-shadow: 0 10px 40px -10px rgba(13, 82, 156, 0.3);
    }
    .gold-glow {
      box-shadow: 0 0 25px -5px rgba(254, 209, 0, 0.35), inset 0 0 15px rgba(254, 209, 0, 0.1);
    }
    .green-glow {
      box-shadow: 0 0 25px -5px rgba(0, 154, 68, 0.35), inset 0 0 15px rgba(0, 154, 68, 0.1);
    }
    .confetti-canvas {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      pointer-events: none;
      z-index: 9999;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .quiz-option-btn {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .quiz-option-btn:hover {
      transform: translateY(-1.5px);
    }
    .quiz-option-btn:active {
      transform: scale(0.98);
    }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: #060911; }
    ::-webkit-scrollbar-thumb { background: #1e2d4f; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #334a75; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  </style>
</head>
<body class="selection:bg-amber-500 selection:text-slate-950">
  <!-- Official Ethiopian National Tricolor Top Ribbon -->
  <div class="flag-ribbon sticky top-0 z-50"></div>

  <!-- PWA Offline Install Prompt Banner -->
  <div id="pwaInstallBanner" class="bg-gradient-to-r from-emerald-950/90 via-space-900 to-emerald-950/90 border-b border-emerald-500/40 px-4 py-2 flex items-center justify-between gap-3 text-xs z-40 sticky top-1">
    <div class="flex items-center gap-2">
      <span class="text-base">📲</span>
      <span class="text-white font-medium">
        <strong class="text-amber-400">ያለ ኢንተርኔት በስልክዎ ላይ ይጫኑ (Install App Free)</strong> — 100% ነጻ እና ያለ ዳታ ይሰራል (Works 100% Offline with Zero Data)
      </span>
    </div>
    <div class="flex items-center gap-2">
      <button onclick="installPwaApp()" class="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition shadow-sm">
        ጫን (Install)
      </button>
      <button onclick="dismissPwaBanner()" class="text-slate-400 hover:text-white px-1.5 py-0.5 rounded transition">
        ✕
      </button>
    </div>
  </div>

  <!-- Particle Confetti Canvas -->
  <canvas id="confettiCanvas" class="confetti-canvas"></canvas>

  <!-- Interactive Toast Notification Stack -->
  <div id="toastContainer" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <!-- Master App Container -->
  <div class="min-h-screen flex flex-col">

    <!-- Top Universal National Header -->
    <header class="glass-card border-b border-slate-800/80 px-4 sm:px-6 py-2.5">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        
        <!-- Authentic Ministry Branding & Vector Crest -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#0D529C] via-[#009A44] to-[#FED100] p-0.5 shadow-lg shadow-blue-900/40 flex items-center justify-center shrink-0">
            <div class="w-full h-full rounded-[14px] bg-space-950 flex items-center justify-center">
              <!-- High-Definition Official Ethiopian Crest Emblem -->
              <svg viewBox="0 0 100 100" class="w-7 h-7 sm:w-8 sm:h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" fill="#0D529C" stroke="#FED100" stroke-width="3"/>
                <!-- Rays -->
                <line x1="50" y1="50" x2="50" y2="10" stroke="#FED100" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="50" y1="50" x2="88" y2="38" stroke="#FED100" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="50" y1="50" x2="74" y2="86" stroke="#FED100" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="50" y1="50" x2="26" y2="86" stroke="#FED100" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="50" y1="50" x2="12" y2="38" stroke="#FED100" stroke-width="2.5" stroke-linecap="round"/>
                <!-- Central Star -->
                <polygon points="50,16 59,38 82,38 64,52 71,74 50,60 29,74 36,52 18,38 41,38" fill="#FED100" stroke="#D97706" stroke-width="1"/>
              </svg>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-xs sm:text-sm font-black tracking-tight text-white flex items-center gap-1.5 font-display">
                <span>የኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የትምህርት ሚኒስቴር</span>
              </h1>
              <span class="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold border border-emerald-500/30 uppercase tracking-widest hidden sm:inline">CBA ALIGNED</span>
            </div>
            <p class="text-[11px] text-amber-400 font-bold tracking-tight">FDRE MINISTRY OF EDUCATION • Grade 7 & 8 National Examination Mastery (SQ3R)</p>
          </div>
        </div>

        <!-- Grade Selector Pill (Grade 7 ⟷ Grade 8) -->
        <div class="flex items-center bg-space-950 border border-slate-700/80 p-1 rounded-2xl shadow-inner">
          <button onclick="setGrade(7)" id="gradeToggle-7" class="px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/30">
            <span>📗</span> 7ኛ ክፍል (GRADE 7)
          </button>
          <button onclick="setGrade(8)" id="gradeToggle-8" class="px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 text-slate-400 hover:text-white">
            <span>📘</span> 8ኛ ክፍል (GRADE 8)
          </button>
        </div>

        <!-- Student HUD (Rank, XP, Gems, Streak, Pomodoro, Sound) -->
        <div class="flex items-center flex-wrap gap-2 sm:gap-3">
          <!-- Streak -->
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs" title="Consecutive Active Study Days">
            <span class="text-sm">🔥</span>
            <span id="streakCount">5</span>
            <span class="text-[10px] text-amber-300/80 hidden sm:inline">Days</span>
          </div>

          <!-- Gems -->
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs cursor-pointer hover:bg-emerald-500/20 transition" onclick="switchTab('rewards')" title="Knowledge Gems (Click to open Gem Store)">
            <span>💎</span>
            <span id="gemCount">340</span>
          </div>

          <!-- Level & Academic Rank Indicator -->
          <div class="flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-space-900 border border-slate-700">
            <div class="flex flex-col">
              <div class="flex justify-between items-center text-xs mb-1 gap-2">
                <span class="font-bold text-emerald-300 flex items-center gap-1 text-[11px]">
                  <span id="userAvatarIcon">🦁</span> <span id="levelTitle">Lvl 2 • Apprentice Scholar (ጀማሪ ተማሪ)</span>
                </span>
                <span class="font-mono text-slate-400 text-[10px]" id="xpDisplay">450 / 500 XP</span>
              </div>
              <div class="w-24 sm:w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div id="xpProgressBar" class="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-400 rounded-full transition-all duration-500" style="width: 80%;"></div>
              </div>
            </div>
          </div>

          <!-- Pomodoro Timer -->
          <button id="pomoBtn" onclick="togglePomodoro()" class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-200 text-xs font-semibold transition" title="25-min Focused Study Session">
            <span id="pomoIcon">⏳</span>
            <span id="pomoTime" class="font-mono text-[11px]">25:00</span>
          </button>

          <!-- Audio FX -->
          <button id="soundToggleBtn" onclick="toggleSound()" class="p-1.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-slate-300 transition" title="Toggle Sound FX">
            <span id="soundIcon">🔊</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Navigation Hub Tabs (All 7 Views including Exam Hall Simulator) -->
    <nav class="bg-space-900/95 border-b border-slate-800 px-4 sm:px-6 sticky top-1 z-30">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto py-2 no-scrollbar">
        <div class="flex items-center gap-2">
          <button onclick="switchTab('sq3r')" id="tabBtn-sq3r" class="tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap">
            <span>📖</span> SQ3R የጥናት ስልት (Study Studio)
          </button>
          <button onclick="switchTab('exam-hall')" id="tabBtn-exam-hall" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 whitespace-nowrap shadow-md shadow-amber-500/10">
            <span>🏛️</span> የፈተና አዳራሽ (Ministry Exam Hall)
          </button>
          <button onclick="switchTab('curriculum')" id="tabBtn-curriculum" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap">
            <span>📚</span> የትምህርት ማውጫ (Syllabus Matrix)
          </button>
          <button onclick="switchTab('amt-exam')" id="tabBtn-amt-exam" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap">
            <span>🎯</span> የጥያቄዎች ባንክ (AMT Question Bank)
          </button>
          <button onclick="switchTab('vault')" id="tabBtn-vault" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap">
            <span>💡</span> የተሰሩ ምሳሌዎች (Worked Examples Vault)
          </button>
          <button onclick="switchTab('rewards')" id="tabBtn-rewards" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap">
            <span>🏆</span> የክብር ሜዳሊያዎች እና የምስክር ወረቀት (Honors)
          </button>
          <button onclick="switchTab('analytics')" id="tabBtn-analytics" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap">
            <span>📊</span> የውጤት መከታተያ (Analytics)
          </button>
        </div>

        <!-- Master Override Gate Toggle -->
        <div class="flex items-center gap-2 shrink-0">
          <label class="flex items-center gap-1.5 cursor-pointer text-[11px] font-bold text-slate-400 bg-space-950 px-3 py-1.5 rounded-xl border border-slate-800" title="Bypass the 80% passing gate for exploratory learning">
            <input type="checkbox" id="gateBypassToggle" onchange="toggleGateBypass(this.checked)" class="rounded text-emerald-500 focus:ring-0">
            <span>ነጻ አሰሳ (Free-Roam Mode)</span>
          </label>
        </div>
      </div>
    </nav>

    <!-- Subject Selector Bar (Bilingual English + Amharic) -->
    <section class="bg-space-950/90 border-b border-slate-800/80 py-2.5 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <span id="activeGradeLabel" class="text-amber-400 font-black">7ኛ ክፍል (Grade 7)</span> <span>የትምህርት አይነቶች (Subjects):</span>
        </div>
        <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar" id="subjectPillsContainer">
          <!-- Dynamically populated bilingual subject buttons -->
        </div>
      </div>
    </section>

    <!-- Dynamic Main Content Views -->
    <main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">

      <!-- =============================================================== -->
      <!-- VIEW 1: SQ3R MASTERY STUDIO                                     -->
      <!-- =============================================================== -->
      <section id="view-sq3r" class="tab-view block space-y-6">
        
        <!-- Active Topic Banner & Navigation -->
        <div class="glass-crest p-6 sm:p-7 rounded-2xl relative overflow-hidden border border-emerald-500/30">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
            <div class="space-y-1.5">
              <div class="flex items-center gap-2 flex-wrap">
                <span id="activeSubjectBadge" class="px-2.5 py-0.5 rounded-full text-xs font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">MATHEMATICS (ሒሳብ)</span>
                <span id="activeGradeBadge" class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 font-bold border border-slate-700">7ኛ ክፍል (Grade 7)</span>
                <span id="activeUnitNumber" class="text-xs font-bold text-slate-300">ምዕራፍ 1 (Unit 1)</span>
                <span id="activeSubtopicBadge" class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">ርዕስ 1.1</span>
              </div>
              <h2 id="activeUnitTitle" class="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight font-display">
                Rational Numbers • 1.1 The Concept of Rational Numbers
              </h2>
              <p id="activeUnitBigIdea" class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Examine fractions, terminating and repeating decimals, and understand why every rational number can be written as a/b (where b ≠ 0).
              </p>
            </div>

            <!-- Complete Unit & Subtopic Jump Dropdowns -->
            <div class="shrink-0 flex flex-col gap-2">
              <div>
                <label class="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">ምዕራፍ ምረጥ (Select Unit):</label>
                <select id="unitSelector" onchange="changeUnit(this.value)" class="bg-space-900 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3.5 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer w-full sm:w-72 truncate">
                  <!-- Dynamically populated with all units -->
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">ንዑስ ርዕስ ምረጥ (Select Subtopic):</label>
                <select id="subtopicSelector" onchange="changeSubtopic(this.value)" class="bg-space-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold rounded-xl px-3.5 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer w-full sm:w-72 truncate">
                  <!-- Dynamically populated with all subtopics -->
                </select>
              </div>
            </div>
          </div>

          <!-- Unit Mastery Progress Meter -->
          <div class="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4 flex-wrap relative z-10">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold text-slate-400">SQ3R የደረጃዎች ሂደት (Stages):</span>
              <div class="flex items-center gap-1.5">
                <span id="gateIndicator-survey" class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-emerald-600 text-white shadow-sm" title="Survey (ቅኝት)">S</span>
                <span class="text-slate-600 text-xs">➔</span>
                <span id="gateIndicator-question" class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-space-800 text-slate-500 border border-slate-700" title="Question (ጥያቄ)">Q</span>
                <span class="text-slate-600 text-xs">➔</span>
                <span id="gateIndicator-read" class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-space-800 text-slate-500 border border-slate-700" title="Read (ንባብ)">R1</span>
                <span class="text-slate-600 text-xs">➔</span>
                <span id="gateIndicator-recite" class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-space-800 text-slate-500 border border-slate-700" title="Recite (ማስታወስ)">R2</span>
                <span class="text-slate-600 text-xs">➔</span>
                <span id="gateIndicator-review" class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-space-800 text-slate-500 border border-slate-700" title="Review (ፈተና)">R3</span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <button onclick="printCurrentUnitSummary()" class="px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition flex items-center gap-1.5" title="Print this unit as a 1-page pocket study sheet">
                <span>🖨️</span> <span>ማስታወሻ አትም (Print Cheat Sheet)</span>
              </button>
              <div class="text-xs font-mono font-bold text-amber-400" id="unitProgressPercent">
                Progress: 20% Complete
              </div>
            </div>
          </div>
        </div>

        <!-- Visual National Curriculum Expedition Map (Interactive Roadmap) -->
        <div id="levelMapContainer">
          <!-- Dynamically populated sequential nodes -->
        </div>

        <!-- 5-Phase SQ3R Navigation Buttons with Bilingual Titles -->
        <div class="glass-card p-3 rounded-2xl">
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
            <button onclick="setSq3rStep('survey')" id="stepBtn-survey" class="sq3r-step-btn active p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30">
              <span class="text-lg sm:text-xl">🔭</span>
              <span class="text-[11px] sm:text-xs font-black">1. SURVEY (ቅኝት)</span>
              <span class="text-[9px] opacity-80 hidden sm:inline">Reconnaissance</span>
            </button>
            <button onclick="setSq3rStep('question')" id="stepBtn-question" class="sq3r-step-btn p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition bg-space-850 text-slate-300 font-bold hover:bg-space-800 border border-slate-800">
              <span class="text-lg sm:text-xl" id="stepIcon-question">❓</span>
              <span class="text-[11px] sm:text-xs font-black">2. QUESTION (ጥያቄ)</span>
              <span class="text-[9px] opacity-80 hidden sm:inline">Inquiry Prompts</span>
            </button>
            <button onclick="setSq3rStep('read')" id="stepBtn-read" class="sq3r-step-btn p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition bg-space-850 text-slate-300 font-bold hover:bg-space-800 border border-slate-800">
              <span class="text-lg sm:text-xl" id="stepIcon-read">📖</span>
              <span class="text-[11px] sm:text-xs font-black">3. READ (ንባብ)</span>
              <span class="text-[9px] opacity-80 hidden sm:inline">Notes & Examples</span>
            </button>
            <button onclick="setSq3rStep('recite')" id="stepBtn-recite" class="sq3r-step-btn p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition bg-space-850 text-slate-300 font-bold hover:bg-space-800 border border-slate-800">
              <span class="text-lg sm:text-xl" id="stepIcon-recite">🗣️</span>
              <span class="text-[11px] sm:text-xs font-black">4. RECITE (ማስታወስ)</span>
              <span class="text-[9px] opacity-80 hidden sm:inline">Active Recall</span>
            </button>
            <button onclick="setSq3rStep('review')" id="stepBtn-review" class="sq3r-step-btn col-span-2 sm:col-span-1 p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition bg-space-850 text-slate-300 font-bold hover:bg-space-800 border border-slate-800">
              <span class="text-lg sm:text-xl" id="stepIcon-review">⭐</span>
              <span class="text-[11px] sm:text-xs font-black">5. REVIEW (ፈተና)</span>
              <span class="text-[9px] opacity-80 hidden sm:inline">AMT Exam Gate (≥80%)</span>
            </button>
          </div>
        </div>

        <!-- Dynamic SQ3R Stage Body Container -->
        <div id="stepContentContainer" class="min-h-[460px]">
          <!-- Rendered dynamically -->
        </div>
      </section>

      <!-- =============================================================== -->
      <!-- VIEW 2: MINISTRY EXAM HALL SIMULATOR (TIMED FULL MOCKS)         -->
      <!-- =============================================================== -->
      <section id="view-exam-hall" class="tab-view hidden space-y-6">
        
        <!-- Setup & Config Screen -->
        <div id="examHallConfigCard" class="glass-crest p-6 sm:p-8 rounded-2xl border border-amber-500/40 space-y-6">
          <div class="flex items-center justify-between flex-wrap gap-3 border-b border-amber-500/30 pb-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center text-2xl font-black shadow-lg shadow-amber-500/20">
                🏛️
              </div>
              <div>
                <span class="text-xs font-black text-amber-400 uppercase tracking-wider">OFFICIAL REGIONAL MOCK SIMULATOR</span>
                <h2 class="text-xl sm:text-2xl font-black text-white font-display">የክልል ፈተና አዳራሽ (Ministry Exam Hall)</h2>
              </div>
            </div>
            <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-space-950 text-amber-300 border border-slate-800">
              Ethiopian Ministry of Education Standards
            </span>
          </div>

          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Experience real Ministry Examination pressure! Test yourself under continuous countdown clock conditions. Instant prediction of your official Regional Letter Grade (Distinction A+, Very Good A, Good B, Satisfactory C) and custom chapter diagnostic remediation upon submission.
          </p>

          <!-- Exam Config Controls -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label class="block text-xs font-bold text-slate-400 mb-1.5">የትምህርት አይነት (Subject):</label>
              <select id="examSubjectSelect" class="w-full bg-space-900 border border-slate-700 text-white rounded-xl px-3.5 py-2.5 text-xs font-bold focus:ring-2 focus:ring-amber-500 focus:outline-none">
                <option value="all">🌟 All Subjects Combined (ሁሉንም የትምህርት አይነቶች)</option>
                <option value="math">📐 Mathematics (ሒሳብ)</option>
                <option value="science">🔬 General Science (አጠቃላይ ሳይንስ)</option>
                <option value="english">📖 English (እንግሊዝኛ)</option>
                <option value="social">🌍 Social Studies (ኅብረተሰብ ጥናት)</option>
                <option value="citizenship">⚖️ Citizenship (የዜግነት ትምህርት)</option>
                <option value="it">💻 Information Technology (ኢንፎርሜሽን ቴክኖሎጂ)</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-400 mb-1.5">የጥያቄዎች ብዛት (Questions):</label>
              <select id="examLengthSelect" class="w-full bg-space-900 border border-slate-700 text-white rounded-xl px-3.5 py-2.5 text-xs font-bold focus:ring-2 focus:ring-amber-500 focus:outline-none">
                <option value="20">20 Questions (ፈጣን ልምምድ - 25 Minutes)</option>
                <option value="40" selected>40 Questions (ሙሉ የክልል ፈተና - 45 Minutes)</option>
                <option value="60">60 Questions (የብሔራዊ ደረጃ ፈተና - 60 Minutes)</option>
              </select>
            </div>

            <div class="flex items-end">
              <button onclick="launchExamHall()" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 transition flex items-center justify-center gap-2">
                <span>🚀 ፈተናውን ጀምር (Start Exam)</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Live Active Exam Hall Room (Hidden by default) -->
        <div id="examHallActiveRoom" class="hidden space-y-5">
          <!-- Sticky Exam Status HUD -->
          <div class="glass-card p-4 rounded-2xl border border-amber-500/30 flex items-center justify-between flex-wrap gap-4 sticky top-14 z-30 shadow-2xl">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🏛️</span>
              <div>
                <h4 id="activeExamTitle" class="text-sm font-black text-white">Ministry Exam Simulation</h4>
                <span id="activeExamProgressLabel" class="text-xs text-slate-400">Question 1 of 40 • 0 Answered</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <!-- Live Countdown Clock -->
              <div class="flex items-center gap-2 bg-space-950 px-4 py-2 rounded-xl border border-slate-800">
                <span class="text-xs font-bold text-slate-400">ቀሪ ሰዓት (TIME):</span>
                <span id="examHallTimer" class="font-mono text-base font-black text-amber-400">45:00</span>
              </div>

              <!-- Submit Early Button -->
              <button onclick="confirmSubmitExam()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition shadow-md shadow-emerald-600/30">
                ፈተናውን ጨርስ (Submit Exam) ✔
              </button>
            </div>
          </div>

          <!-- Question Palette (Grid of Numbers 1 to N) -->
          <div class="glass-card p-4 rounded-2xl border border-slate-800 space-y-2">
            <div class="flex items-center justify-between text-xs font-bold text-slate-400">
              <span>የጥያቄዎች ማውጫ (QUESTION NAVIGATOR):</span>
              <span class="flex items-center gap-3 text-[11px]">
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span> Answered</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span> Flagged</span>
                <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-space-850 border border-slate-700 inline-block"></span> Unanswered</span>
              </span>
            </div>
            <div id="examHallPalette" class="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
              <!-- Dynamically populated number buttons -->
            </div>
          </div>

          <!-- Active Question Card -->
          <div id="examHallQuestionCard" class="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-5">
            <!-- Dynamically populated -->
          </div>
        </div>

        <!-- Exam Diagnostic Results Card (Hidden by default) -->
        <div id="examHallResultsCard" class="hidden space-y-6">
          <!-- Dynamically populated results banner, grade, and chapter diagnostic breakdown -->
        </div>

      </section>

      <!-- =============================================================== -->
      <!-- VIEW 3: COMPLETE SYLLABUS MATRIX                                -->
      <!-- =============================================================== -->
      <section id="view-curriculum" class="tab-view hidden space-y-6">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2 font-display">
              <span>📚</span> የኢትዮጵያ ስርዓተ-ትምህርት ሙሉ ማውጫ (Syllabus Matrix)
            </h2>
            <p class="text-xs sm:text-sm text-slate-400">Directly matched with the official Ethiopian Grade 7 & 8 Student Textbooks.</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-400">ክፍል (Grade):</span>
            <span id="matrixGradePill" class="px-3 py-1 rounded-xl bg-emerald-600 font-black text-xs text-white">7ኛ ክፍል (Grade 7)</span>
          </div>
        </div>

        <div id="curriculumMatrixContainer" class="space-y-6">
          <!-- Dynamically populated with all units and subtopics -->
        </div>
      </section>

      <!-- =============================================================== -->
      <!-- VIEW 4: AMT QUESTION BANK                                       -->
      <!-- =============================================================== -->
      <section id="view-amt-exam" class="tab-view hidden space-y-6">
        <div class="glass-card p-6 sm:p-8 rounded-2xl border border-emerald-500/30 space-y-3 bg-gradient-to-br from-emerald-950/30 via-space-950 to-space-950">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/30">
              🎯 የክልል ጥያቄዎች ባንክ (REGIONAL AMT QUESTION BANK)
            </span>
            <span class="text-xs font-mono text-emerald-400">Step-by-Step Derivation Revealed After Attempting</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-white font-display">Practice with Complete 4-Option Diagnostic Autopsies</h2>
          <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Test yourself question by question! The verified baby-step derivation, tactical mental model ("Way to Do It"), and common traps remain locked until you try.
          </p>
        </div>

        <div id="amtExamQuestionsList" class="space-y-6">
          <!-- Dynamically populated AMT exam questions -->
        </div>
      </section>

      <!-- =============================================================== -->
      <!-- VIEW 5: WORKING EXAMPLES VAULT                                  -->
      <!-- =============================================================== -->
      <section id="view-vault" class="tab-view hidden space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2 font-display">
              <span>💡</span> የተሰሩ ምሳሌዎች ማህደር (Working Examples Vault)
            </h2>
            <p class="text-xs sm:text-sm text-slate-400">Verified step-by-step solutions for every single unit across both grades.</p>
          </div>
          <div class="flex items-center gap-2" id="vaultFiltersContainer">
            <input type="text" id="vaultSearchInput" oninput="filterVault(this.value)" placeholder="Search by topic, formula, or keyword..." class="bg-space-900 border border-slate-700 text-xs font-medium text-white px-3.5 py-2 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none w-64">
          </div>
        </div>

        <div id="vaultExamplesList" class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <!-- Dynamically populated -->
        </div>
      </section>

      <!-- =============================================================== -->
      <!-- VIEW 6: TROPHY ROOM & ACADEMIC HONORS                            -->
      <!-- =============================================================== -->
      <section id="view-rewards" class="tab-view hidden space-y-8">
        <div class="glass-card p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-br from-emerald-950/40 via-space-900 to-amber-950/20 border border-amber-500/30">
          <div class="flex items-center gap-5">
            <div id="trophyAvatarBig" class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-600 flex items-center justify-center text-4xl shadow-xl shadow-amber-500/20 gold-glow">
              🦁
            </div>
            <div>
              <div class="text-xs uppercase font-black tracking-widest text-amber-400">የአካዳሚክ የክብር አዳራሽ (NATIONAL HALL OF HONORS)</div>
              <h2 id="trophyTitleBig" class="text-xl sm:text-2xl font-black text-white font-display">Apprentice Scholar (ጀማሪ ተማሪ)</h2>
              <p class="text-xs sm:text-sm text-slate-300 mt-1">Knowledge Gems: <strong class="text-emerald-400" id="trophyGems">340 💎</strong> • Badges: <strong class="text-amber-400" id="trophyBadgeCount">3 / 8</strong></p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row items-center gap-3">
            <button onclick="openCertificateModal()" class="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
              <span>🎓</span> የክብር የምስክር ወረቀት አውርድ (Certificate)
            </button>
            <button onclick="claimDailyReward()" id="dailyRewardBtn" class="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
              <span>🎁</span> Daily Stipend (+75 💎)
            </button>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2 font-display">
            <span>🎖️</span> የላቀ ውጤት ሜዳሊያዎች (Achievement Badges & Historical Honors)
          </h3>
          <div id="badgesGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <!-- Dynamically populated national honors -->
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2 font-display">
            <span>🛒</span> የዕውቀት ዕቃዎች መደብር (Knowledge Gem Shop)
          </h3>
          <div id="shopItemsGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>

      <!-- =============================================================== -->
      <!-- VIEW 7: ANALYTICS & MASTERY RADAR                               -->
      <!-- =============================================================== -->
      <section id="view-analytics" class="tab-view hidden space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2 font-display">
              <span>📊</span> የተማሪዎች ውጤት እና የጥናት ሂደት (Mastery & Performance Tracker)
            </h2>
            <p class="text-xs sm:text-sm text-slate-400">Track SQ3R study habits, retention statistics, and syllabus completion across all subjects.</p>
          </div>
          <button onclick="exportStateData()" class="px-4 py-2 rounded-xl bg-space-850 hover:bg-space-800 text-xs font-bold text-slate-300 border border-slate-700 flex items-center gap-1.5 transition">
            <span>💾</span> Export Backup
          </button>
        </div>

        <!-- Metric Tiles -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="glass-card p-4 rounded-xl border-l-4 border-emerald-500">
            <div class="text-xs text-slate-400 font-semibold">Total XP Earned</div>
            <div id="statTotalXp" class="text-2xl font-black text-white mt-1">450</div>
            <div class="text-[11px] text-emerald-400 font-medium mt-0.5">Rank: Apprentice Scholar</div>
          </div>
          <div class="glass-card p-4 rounded-xl border-l-4 border-amber-500">
            <div class="text-xs text-slate-400 font-semibold">Active Streak</div>
            <div id="statStreak" class="text-2xl font-black text-amber-400 mt-1">5 Days</div>
            <div class="text-[11px] text-amber-300 font-medium mt-0.5">Consistent Daily Study</div>
          </div>
          <div class="glass-card p-4 rounded-xl border-l-4 border-cyan-500">
            <div class="text-xs text-slate-400 font-semibold">Flashcards Mastered</div>
            <div id="statCardsMastered" class="text-2xl font-black text-cyan-400 mt-1">38</div>
            <div class="text-[11px] text-cyan-300 font-medium mt-0.5">Active Recall Verified</div>
          </div>
          <div class="glass-card p-4 rounded-xl border-l-4 border-purple-500">
            <div class="text-xs text-slate-400 font-semibold">AMT Quizzes Aced</div>
            <div id="statQuizzesDone" class="text-2xl font-black text-purple-400 mt-1">12</div>
            <div class="text-[11px] text-purple-300 font-medium mt-0.5">Score Threshold ≥80%</div>
          </div>
        </div>

        <!-- Subject Progress Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="glass-card p-6 rounded-2xl space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2 font-display">
              <span>📗</span> 7ኛ ክፍል የትምህርት ሽፋን (Grade 7 Completion)
            </h3>
            <div class="space-y-3.5" id="g7MasteryList"></div>
          </div>
          <div class="glass-card p-6 rounded-2xl space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2 font-display">
              <span>📘</span> 8ኛ ክፍል የትምህርት ሽፋን (Grade 8 Completion)
            </h3>
            <div class="space-y-3.5" id="g8MasteryList"></div>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer with Official Attribution -->
    <footer class="border-t border-slate-800/80 py-4 px-6 text-center text-xs text-slate-500 space-y-1">
      <div class="flag-ribbon h-0.5 w-24 mx-auto mb-2 opacity-80"></div>
      <p class="font-bold text-slate-400">የኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የትምህርት ሚኒስቴር • FDRE Ministry of Education</p>
      <p>Grade 7 & 8 Regional & National Examination Mastery Platform (SQ3R Pedagogical Engine)</p>
    </footer>
  </div>

  <!-- =================================================================== -->
  <!-- MODAL 1: SHAREABLE HONORS CERTIFICATE GENERATOR (CANVAS + PNG)      -->
  <!-- =================================================================== -->
  <div id="certificateModal" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
    <div class="glass-card max-w-3xl w-full max-h-[92vh] overflow-y-auto rounded-3xl p-5 sm:p-7 border border-amber-500/40 space-y-5 animate-fadeIn">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <div class="flex items-center gap-2.5">
          <span class="text-2xl">🎓</span>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white font-display">የላቀ ውጤት የምስክር ወረቀት (Official Certificate Generator)</h3>
            <p class="text-xs text-amber-400">Download high-res PNG to share on Telegram Stories, WhatsApp, or Facebook!</p>
          </div>
        </div>
        <button onclick="closeCertificateModal()" class="text-slate-400 hover:text-white p-1 rounded-lg text-lg">✕</button>
      </div>

      <!-- Controls: Student Name & Subject -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-300 mb-1">የተማሪው ሙሉ ስም (Student Full Name):</label>
          <input type="text" id="certStudentNameInput" oninput="updateCertPreview()" placeholder="Enter your full name here..." class="w-full bg-space-950 border border-slate-700 text-white font-bold rounded-xl px-3.5 py-2 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-300 mb-1">የትምህርት ውጤት (Achievement / Subject):</label>
          <input type="text" id="certSubjectInput" oninput="updateCertPreview()" placeholder="Grade 8 Mathematics Mastery..." class="w-full bg-space-950 border border-slate-700 text-amber-300 font-bold rounded-xl px-3.5 py-2 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none">
        </div>
      </div>

      <!-- Live Canvas Preview Container -->
      <div class="rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black flex items-center justify-center p-1">
        <canvas id="certCanvas" class="w-full h-auto max-h-[420px] rounded-xl object-contain"></canvas>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center justify-between flex-wrap gap-3 pt-2">
        <span class="text-xs text-slate-400">Watermarked with official FDRE Ministry Coat of Arms & Verification ID</span>
        <div class="flex items-center gap-2">
          <button onclick="shareCertificateTelegram()" class="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-md shadow-cyan-600/30">
            <span>✈️</span> <span>Share to Telegram</span>
          </button>
          <button onclick="downloadCertificateImage()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-2 shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95">
            <span>📥</span> <span>ፎቶ አውርድ (Download PNG)</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Zero-Dependency Synthesized Audio Engine -->
  <script>
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let isSoundMuted = false;

    function playTone(freq, type, duration, delay = 0) {
      if (isSoundMuted) return;
      setTimeout(() => {
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
          gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + duration);
        } catch (e) {}
      }, delay);
    }

    function soundClick() { playTone(540, 'sine', 0.05); }
    function soundFlip() { playTone(680, 'sine', 0.06); }
    function soundSuccess() {
      playTone(440, 'triangle', 0.1, 0);
      playTone(554.37, 'triangle', 0.12, 70);
      playTone(659.25, 'triangle', 0.18, 140);
      playTone(880, 'sine', 0.25, 210);
    }
    function soundError() {
      playTone(220, 'sawtooth', 0.14, 0);
      playTone(175, 'sawtooth', 0.22, 110);
    }
    function soundLevelUp() {
      playTone(523.25, 'triangle', 0.14, 0);
      playTone(659.25, 'triangle', 0.14, 110);
      playTone(783.99, 'triangle', 0.14, 220);
      playTone(1046.50, 'triangle', 0.45, 330);
    }
    function toggleSound() {
      isSoundMuted = !isSoundMuted;
      document.getElementById('soundIcon').innerText = isSoundMuted ? '🔇' : '🔊';
      showToast(isSoundMuted ? 'Audio muted' : 'Audio active! 🎵');
    }
  </script>

  <!-- Confetti Particle Engine -->
  <script>
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    let confettiPieces = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function triggerConfetti() {
      soundLevelUp();
      const colors = ['#009A44', '#FED100', '#EF3340', '#0D529C', '#10b981', '#f59e0b'];
      for (let i = 0; i < 95; i++) {
        confettiPieces.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          w: Math.random() * 8 + 4,
          h: Math.random() * 8 + 4,
          vx: (Math.random() - 0.5) * 18,
          vy: (Math.random() - 0.7) * 18,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8,
          life: 1,
          decay: Math.random() * 0.015 + 0.01
        });
      }
    }

    function updateConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = confettiPieces.length - 1; i >= 0; i--) {
        const p = confettiPieces[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.rotationSpeed;
        p.life -= p.decay;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        if (p.life <= 0) confettiPieces.splice(i, 1);
      }
      requestAnimationFrame(updateConfetti);
    }
    updateConfetti();
  </script>

  <!-- Complete Exhaustive Curriculum Database & Engine -->
  <script>
    // =========================================================================
    // EXHAUSTIVE ETHIOPIAN GRADE 7 & GRADE 8 CURRICULUM SYLLABUS DATABASE
    // =========================================================================
    const GALACTIC_DATABASE = \${JSON.stringify(masterCurriculum, null, 2)};

    // =========================================================================
    // BILINGUAL SUBJECT METADATA & HONORS CONSTANTS
    // =========================================================================
    const SUBJECT_METADATA = {
      math: { am: 'ሒሳብ', name: 'Mathematics', icon: '📐' },
      science: { am: 'አጠቃላይ ሳይንስ', name: 'General Science', icon: '🔬' },
      english: { am: 'እንግሊዝኛ', name: 'English', icon: '📖' },
      social: { am: 'ኅብረተሰብ ጥናት', name: 'Social Studies', icon: '🌍' },
      citizenship: { am: 'የዜግነት ትምህርት', name: 'Citizenship Education', icon: '⚖️' },
      it: { am: 'ኢንፎርሜሽን ቴክኖሎጂ', name: 'Information Technology', icon: '💻' }
    };

    const ACADEMIC_RANKS = [
      { level: 1, title: 'Apprentice Scholar (ጀማሪ ተማሪ)', minXp: 0 },
      { level: 2, title: 'Keen Researcher (ንቁ አጥኚ)', minXp: 250 },
      { level: 3, title: 'Curriculum Scholar (የትምህርት አዋቂ)', minXp: 500 },
      { level: 4, title: 'Regional Honor Student (የክልል የክብር ተማሪ)', minXp: 750 },
      { level: 5, title: 'National Merit Finalist (የብሔራዊ የላቀ ውጤታማ)', minXp: 1000 },
      { level: 6, title: 'Ministry Valedictorian (የሚኒስቴር የወርቅ ሜዳሊያ ተሸላሚ)', minXp: 1500 }
    ];

    const NATIONAL_BADGES = [
      { 
        id: 'adwa', 
        name: 'Adwa Sovereign Medal (የዓድዋ ድል ሜዳሊያ)', 
        icon: '🇪🇹', 
        desc: 'Unbreakable academic determination and resilience in mastering rigorous national exams.' 
      },
      { 
        id: 'lucy', 
        name: 'Lucy Paleontology Seal (የድንቅነሽ ቅርስ ክብር)', 
        icon: '🦴', 
        desc: 'Scientific observation, Afar hominid fossils, and geological curiosity.' 
      },
      { 
        id: 'gerd', 
        name: 'GERD Hydro-Energy Star (የታላቁ ሕዳሴ ግድብ ኮከብ)', 
        icon: '🌊', 
        desc: 'Engineering mastery, hydroelectric thermodynamics, and monumental problem-solving.' 
      },
      { 
        id: 'erta_ale', 
        name: 'Erta Ale Volcanology Medal (የኤርታሌ እሳተ ጎመራ ሜዳሊያ)', 
        icon: '🌋', 
        desc: 'Danakil Depression thermal geology, shield volcanoes, and basaltic lava lake dynamics.' 
      },
      { 
        id: 'lalibela', 
        name: 'Lalibela Architecture Laureate (የላሊበላ የምህንድስና ክብር)', 
        icon: '🏛️', 
        desc: 'Geometric calculation, monolithic masonry, surface areas, and spatial volume.' 
      },
      { 
        id: 'abebe_bikila', 
        name: 'Abebe Bikila Marathon Grit (የአበበ ቢቂላ ጽናት)', 
        icon: '🏃', 
        desc: 'Relentless study discipline, 5+ day streak, and stamina through challenging exam sets.' 
      },
      { 
        id: 'axum', 
        name: 'Axumite Obelisk Achievement (የአክሱም ሐውልት ክብር)', 
        icon: '📜', 
        desc: 'Deep mastery of ancient Ethiopian civilization, historic inscriptions, trade, and heritage.' 
      },
      { 
        id: 'walia', 
        name: 'Walia Ibex Peak Laureate (የዋሊያ አይቤክስ ክብር)', 
        icon: '🐐', 
        desc: 'Attaining the pinnacle of Grade 7 & 8 academic excellence across all 12 curriculum subjects.' 
      }
    ];

    const SHOP_ITEMS = [
      { id: 'av_lion', type: 'avatar', item: '🦁', name: 'Lion of Judah Crest', cost: 100, desc: 'Symbol of national strength and wisdom' },
      { id: 'av_eagle', type: 'avatar', item: '🦅', name: 'Highland Tawny Eagle', cost: 150, desc: 'Keen vision and aerial intellect' },
      { id: 'av_scroll', type: 'avatar', item: '📜', name: 'Ge\\'ez Ancient Parchment', cost: 120, desc: 'Scholar of ancient manuscripts and history' },
      { id: 'av_crown', type: 'avatar', item: '👑', name: 'Imperial Laureate Crown', cost: 250, desc: 'Highest standard of regional exam mastery' },
      { id: 'av_star', type: 'avatar', item: '⭐', name: 'Radiant National Star', cost: 80, desc: 'Brilliance in science and mathematics' },
      { id: 'av_walia', type: 'avatar', item: '🐐', name: 'Semien Mountain Walia', cost: 200, desc: 'Climbing to the highest academic peaks' }
    ];

    // =========================================================================
    // STATE & PROGRESSION LOGIC
    // =========================================================================
    const DEFAULT_APP_STATE = {
      grade: 7,
      activeSubject: 'math',
      activeUnitId: 'g7-m-u1',
      activeSubtopicId: 'g7-m-1.1',
      currentStep: 'survey',
      gateBypass: false,
      xp: 450,
      level: 2,
      gems: 150,
      streak: 5,
      avatar: '🦁',
      studentName: 'Honored Scholar',
      title: 'Keen Researcher (ንቁ አጥኚ)',
      totalQuizzesDone: 12,
      totalCardsMastered: 38,
      unlockedBadges: ['adwa', 'lucy', 'gerd'],
      completedSteps: {
        'g7-m-1.1': ['survey']
      },
      masteredSubtopics: {}
    };

    let gState = JSON.parse(localStorage.getItem('sq3r_ethiopia_cba_state')) || 
                 JSON.parse(localStorage.getItem('sq3r_galactic_state')) || 
                 DEFAULT_APP_STATE;
    if (!gState.masteredSubtopics) gState.masteredSubtopics = {};
    if (!gState.unlockedBadges) gState.unlockedBadges = ['adwa', 'lucy', 'gerd'];
    if (!gState.studentName) gState.studentName = 'Honored Scholar';

    function saveState() {
      localStorage.setItem('sq3r_ethiopia_cba_state', JSON.stringify(gState));
      renderHeaderStats();
    }

    // =========================================================================
    // PROGRESSION ORDER & UNLOCK CHECKS (STRICT 80% GATE)
    // =========================================================================
    function getAllSubtopicsForSubject(grade, subjectId) {
      const subj = GALACTIC_DATABASE[grade][subjectId];
      if (!subj || !subj.units) return [];
      const list = [];
      subj.units.forEach(u => {
        if (u.subtopics) {
          u.subtopics.forEach(st => {
            list.push({ ...st, unitId: u.id, unitNumber: u.number, unitTitle: u.title });
          });
        }
      });
      return list;
    }

    function isSubtopicUnlocked(subtopicId, subjectId = null, grade = null) {
      if (gState.gateBypass) return true;
      const g = grade || gState.grade;
      const s = subjectId || gState.activeSubject;
      const allSubtopics = getAllSubtopicsForSubject(g, s);
      const idx = allSubtopics.findIndex(st => st.id === subtopicId);
      
      if (idx <= 0) return true;

      const prevSubtopic = allSubtopics[idx - 1];
      const prevMastery = gState.masteredSubtopics && gState.masteredSubtopics[prevSubtopic.id];
      return !!(prevMastery && prevMastery.passed);
    }

    function isSubtopicMastered(subtopicId) {
      return !!(gState.masteredSubtopics && gState.masteredSubtopics[subtopicId]?.passed);
    }

    function getSubtopicScore(subtopicId) {
      return gState.masteredSubtopics && gState.masteredSubtopics[subtopicId]?.score || 0;
    }

    function getActiveUnit() {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      return sub.units.find(u => u.id === gState.activeUnitId) || sub.units[0];
    }

    function getActiveSubtopic() {
      const unit = getActiveUnit();
      return unit.subtopics.find(st => st.id === gState.activeSubtopicId) || unit.subtopics[0];
    }

    // =========================================================================
    // XP & SOUND HELPERS
    // =========================================================================
    function addXp(amount, reason = '') {
      gState.xp += amount;
      const nextLevelXp = gState.level * 250;
      if (gState.xp >= nextLevelXp) {
        gState.level++;
        gState.gems += 60;
        const matchingRank = ACADEMIC_RANKS.slice().reverse().find(r => gState.xp >= r.minXp);
        if (matchingRank) gState.title = matchingRank.title;
        triggerConfetti();
        showToast(\`🎉 LEVEL UP! You reached Level \${gState.level}! (+60 💎)\`);
      } else {
        showToast(\`+\${amount} XP \${reason ? '• ' + reason : ''}\`);
      }
      saveState();
    }

    function addGems(amount) {
      gState.gems += amount;
      saveState();
      showToast(\`+\${amount} Gems! 💎\`);
    }

    function showToast(msg) {
      const c = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = 'glass-card px-4 py-3 rounded-xl border border-emerald-500/40 text-white font-bold text-xs shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto';
      toast.innerHTML = \`<span>⚡</span> <span>\${msg}</span>\`;
      c.appendChild(toast);
      setTimeout(() => toast.classList.remove('translate-y-4', 'opacity-0'), 10);
      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

    function toggleGateBypass(isChecked) {
      gState.gateBypass = isChecked;
      saveState();
      updateStageLockIcons();
      populateDropdowns();
      renderCurriculumMatrix();
      renderLevelMap();
      showToast(isChecked ? '🔓 ነጻ አሰሳ ነቅቷል (Free-Roam Mode Activated - All Levels Unlocked)' : '🔒 የደረጃ ቁልፍ ነቅቷል (Strict Mastery Gate Activated - Must Pass with ≥80% to Advance)');
    }

    // =========================================================================
    // GRADE & SUBJECT SWITCHERS
    // =========================================================================
    function setGrade(gradeNumber) {
      soundClick();
      gState.grade = gradeNumber;

      const g7Btn = document.getElementById('gradeToggle-7');
      const g8Btn = document.getElementById('gradeToggle-8');
      if (gradeNumber === 7) {
        g7Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/30';
        g8Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 text-slate-400 hover:text-white';
      } else {
        g8Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/30';
        g7Btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 text-slate-400 hover:text-white';
      }

      document.getElementById('activeGradeLabel').innerText = \`\${gradeNumber}ኛ ክፍል (Grade \${gradeNumber})\`;
      document.getElementById('activeGradeBadge').innerText = \`\${gradeNumber}ኛ ክፍል (Grade \${gradeNumber})\`;
      document.getElementById('matrixGradePill').innerText = \`\${gradeNumber}ኛ ክፍል (Grade \${gradeNumber})\`;

      const subjects = GALACTIC_DATABASE[gradeNumber];
      gState.activeSubject = 'math';
      const firstUnit = subjects.math.units[0];
      gState.activeUnitId = firstUnit.id;
      gState.activeSubtopicId = firstUnit.subtopics[0].id;
      gState.currentStep = 'survey';
      saveState();

      renderSubjectPills();
      populateDropdowns();
      renderActiveUnitView();
      renderCurriculumMatrix();
      renderVault();
      renderAmtExam();
      renderLevelMap();
      renderAnalytics();
      showToast(\`ወደ \${gradeNumber}ኛ ክፍል ስርዓተ-ትምህርት ተቀይሯል! (Grade \${gradeNumber} Loaded) 🎒\`);
    }

    function renderSubjectPills() {
      const container = document.getElementById('subjectPillsContainer');
      const subjects = GALACTIC_DATABASE[gState.grade];
      container.innerHTML = '';

      Object.values(subjects).forEach(sub => {
        const isSelected = gState.activeSubject === sub.id;
        const meta = SUBJECT_METADATA[sub.id] || { am: '', name: sub.name, icon: sub.icon };
        const btn = document.createElement('button');
        btn.onclick = () => selectSubject(sub.id);
        btn.className = \`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap \${
          isSelected 
            ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg shadow-emerald-600/30' 
            : 'bg-space-900 border border-slate-800 text-slate-300 hover:bg-space-850 hover:text-white'
        }\`;
        btn.innerHTML = \`<span>\${meta.icon}</span> <span>\${meta.name}</span> <span class="text-[10px] opacity-75">(\${meta.am})</span>\`;
        container.appendChild(btn);
      });
    }

    function selectSubject(subId) {
      soundClick();
      gState.activeSubject = subId;
      const sub = GALACTIC_DATABASE[gState.grade][subId];
      const firstUnit = sub.units[0];
      gState.activeUnitId = firstUnit.id;
      gState.activeSubtopicId = firstUnit.subtopics[0].id;
      gState.currentStep = 'survey';
      saveState();

      renderSubjectPills();
      populateDropdowns();
      renderActiveUnitView();
      renderCurriculumMatrix();
      renderVault();
      renderAmtExam();
      renderLevelMap();
    }

    function populateDropdowns() {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const unitSel = document.getElementById('unitSelector');
      unitSel.innerHTML = '';
      sub.units.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.id;
        opt.text = \`\${u.number}: \${u.title}\`;
        opt.selected = u.id === gState.activeUnitId;
        unitSel.appendChild(opt);
      });

      populateSubtopicDropdown();
    }

    function populateSubtopicDropdown() {
      const unit = getActiveUnit();
      const subSel = document.getElementById('subtopicSelector');
      subSel.innerHTML = '';
      unit.subtopics.forEach(st => {
        const opt = document.createElement('option');
        opt.value = st.id;
        const unlocked = isSubtopicUnlocked(st.id);
        const mastered = isSubtopicMastered(st.id);
        const prefix = mastered ? '⭐ ' : (unlocked ? '🔓 ' : '🔒 ');
        const suffix = mastered ? ' (Mastered)' : (!unlocked ? ' (Locked - Pass Level First)' : '');
        opt.text = \`\${prefix}\${st.code} \${st.title}\${suffix}\`;
        opt.selected = st.id === gState.activeSubtopicId;
        subSel.appendChild(opt);
      });
    }

    function changeUnit(unitId) {
      soundClick();
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const unit = sub.units.find(u => u.id === unitId);
      if (!unit) return;

      gState.activeUnitId = unit.id;
      gState.activeSubtopicId = unit.subtopics[0].id;
      gState.currentStep = 'survey';
      saveState();

      populateSubtopicDropdown();
      renderActiveUnitView();
      renderLevelMap();
    }

    function changeSubtopic(stId) {
      if (!isSubtopicUnlocked(stId)) {
        soundError();
        showToast('🔒 Prerequisite Gate: Pass the previous subtopic with ≥80% score to unlock this level!');
        return;
      }

      soundClick();
      const unit = getActiveUnit();
      let foundSt = unit.subtopics.find(st => st.id === stId);

      if (!foundSt) {
        const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
        for (const u of sub.units) {
          const s = u.subtopics.find(x => x.id === stId);
          if (s) {
            gState.activeUnitId = u.id;
            foundSt = s;
            break;
          }
        }
      }

      gState.activeSubtopicId = stId;
      gState.currentStep = 'survey';
      saveState();

      populateDropdowns();
      renderActiveUnitView();
      renderLevelMap();
    }

    function renderActiveUnitView() {
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const unit = getActiveUnit();
      const st = getActiveSubtopic();
      const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name };

      document.getElementById('activeSubjectBadge').innerText = \`\${meta.name.toUpperCase()} (\${meta.am})\`;
      document.getElementById('activeGradeBadge').innerText = \`\${gState.grade}ኛ ክፍል (Grade \${gState.grade})\`;
      document.getElementById('activeUnitNumber').innerText = \`\${unit.number}\`;
      document.getElementById('activeSubtopicBadge').innerText = \`ርዕስ \${st.code}\`;
      document.getElementById('activeUnitTitle').innerText = \`\${st.code} \${st.title}\`;
      document.getElementById('activeUnitBigIdea').innerText = st.survey.blueprint;

      const unitSel = document.getElementById('unitSelector');
      if (unitSel) unitSel.value = unit.id;
      const subSel = document.getElementById('subtopicSelector');
      if (subSel) subSel.value = st.id;

      updateStageLockIcons();
      renderCurrentStep();
      renderLevelMap();
    }

    // =========================================================================
    // PROGRESSION GATE & STEP LOCK SYSTEM (SQ3R WITHIN A SUBTOPIC)
    // =========================================================================
    const STAGE_ORDER = ['survey', 'question', 'read', 'recite', 'review'];

    function isStepUnlocked(stepName) {
      return true;
    }

    function updateStageLockIcons() {
      const stId = gState.activeSubtopicId;
      const completed = gState.completedSteps[stId] || [];

      STAGE_ORDER.forEach(s => {
        const isDone = completed.includes(s);
        const isUnlocked = isStepUnlocked(s);
        const indicator = document.getElementById(\`gateIndicator-\${s}\`);
        if (indicator) {
          if (isDone) {
            indicator.className = 'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-emerald-600 text-white shadow-sm';
            indicator.innerText = '✔';
          } else if (isUnlocked) {
            indicator.className = 'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-emerald-700/80 text-white shadow-sm';
            indicator.innerText = s.charAt(0).toUpperCase();
          } else {
            indicator.className = 'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-space-800 text-slate-500 border border-slate-700';
            indicator.innerText = '🔒';
          }
        }
      });

      const doneCount = completed.length;
      const pct = Math.round((doneCount / STAGE_ORDER.length) * 100);
      const isMastered = isSubtopicMastered(stId);
      document.getElementById('unitProgressPercent').innerText = isMastered 
        ? \`⭐ Level Mastered (\${getSubtopicScore(stId)}% Score)\`
        : \`Topic Mastery: \${pct}% Complete\`;
    }

    function markStepCompleted(stepName) {
      const stId = gState.activeSubtopicId;
      if (!gState.completedSteps[stId]) gState.completedSteps[stId] = [];
      if (!gState.completedSteps[stId].includes(stepName)) {
        gState.completedSteps[stId].push(stepName);
        saveState();
        updateStageLockIcons();
      }
    }

    function setSq3rStep(stepName) {
      soundClick();
      gState.currentStep = stepName;
      saveState();

      STAGE_ORDER.forEach(s => {
        const btn = document.getElementById(\`stepBtn-\${s}\`) || document.getElementById(\`sq3rBtn-\${s}\`);
        if (btn) {
          if (s === stepName) {
            btn.className = 'sq3r-step-btn active p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30';
          } else {
            btn.className = 'sq3r-step-btn p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition bg-space-850 text-slate-300 font-bold hover:bg-space-800 border border-slate-800';
          }
        }
      });

      renderCurrentStep();
    }

    // =========================================================================
    // VISUAL NATIONAL CURRICULUM EXPEDITION MAP (PROGRESSION PATH)
    // =========================================================================
    function renderLevelMap() {
      const mapContainer = document.getElementById('levelMapContainer');
      if (!mapContainer) return;

      const subtopics = getAllSubtopicsForSubject(gState.grade, gState.activeSubject);
      const curStId = gState.activeSubtopicId;
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name };

      let html = \`
        <div class="glass-card p-5 rounded-2xl border border-slate-800 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span class="text-[10px] font-black uppercase text-emerald-400 tracking-wider">የስርዓተ-ትምህርት ጉዞ እና የፈተና ዝግጅት (NATIONAL CURRICULUM ROADMAP)</span>
              <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>🇪🇹</span> <span>\${meta.name} (\${meta.am}) • የርዕሶች ቅደም ተከተል</span>
              </h3>
            </div>
            <div class="text-xs font-mono text-emerald-400 font-bold bg-space-950 px-3 py-1.5 rounded-lg border border-slate-800">
              \${subtopics.filter(s => isSubtopicMastered(s.id)).length} / \${subtopics.length} Levels Mastered (ያጠናቀቁት)
            </div>
          </div>

          <div class="flex items-center gap-3 overflow-x-auto py-3 px-1 no-scrollbar">
      \`;

      subtopics.forEach((st, idx) => {
        const mastered = isSubtopicMastered(st.id);
        const unlocked = isSubtopicUnlocked(st.id);
        const isCurrent = st.id === curStId;
        const score = getSubtopicScore(st.id);

        let nodeColor = '';
        let nodeIcon = '';
        let nodeLabel = '';

        if (mastered) {
          nodeColor = 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-md shadow-amber-500/20';
          nodeIcon = '⭐';
          nodeLabel = \`Mastered (\${score}%)\`;
        } else if (isCurrent) {
          nodeColor = 'bg-emerald-950 border-emerald-400 text-emerald-300 ring-2 ring-emerald-500/50';
          nodeIcon = '📖';
          nodeLabel = 'Active Level';
        } else if (unlocked) {
          nodeColor = 'bg-space-900 border-emerald-600/60 text-emerald-300 hover:border-emerald-400';
          nodeIcon = '🔓';
          nodeLabel = 'Unlocked';
        } else {
          nodeColor = 'bg-space-950/60 border-slate-800 text-slate-600 opacity-60';
          nodeIcon = '🔒';
          nodeLabel = 'Locked Gate';
        }

        html += \`
          <button onclick="changeSubtopic('\${st.id}')" class="shrink-0 p-3 rounded-xl border flex flex-col items-center text-center w-36 transition hover:scale-105 \${nodeColor}">
            <div class="text-xl mb-1">\${nodeIcon}</div>
            <div class="text-xs font-black truncate w-full">\${st.code} \${st.title}</div>
            <div class="text-[9px] uppercase tracking-wider mt-1 opacity-80">\${nodeLabel}</div>
          </button>
        \`;

        if (idx < subtopics.length - 1) {
          html += \`<div class="shrink-0 text-slate-700 text-xs font-bold">➔</div>\`;
        }
      });

      html += \`
          </div>
        </div>
      \`;

      mapContainer.innerHTML = html;
    }

    // =========================================================================
    // RENDER CURRENT SQ3R STEP
    // =========================================================================
    function renderCurrentStep() {
      const container = document.getElementById('stepContentContainer') || document.getElementById('sq3rStageContainer');
      if (!container) return;
      const st = getActiveSubtopic();
      const s = gState.currentStep;

      // 1. SURVEY
      if (s === 'survey') {
        container.innerHTML = \`
          <div class="space-y-6 animate-fadeIn">
            <div class="glass-crest p-6 rounded-2xl border border-emerald-500/40 relative overflow-hidden">
              <div class="flex items-center justify-between flex-wrap gap-4 relative z-10 border-b border-emerald-500/30 pb-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl text-emerald-300 font-black">
                    🔭
                  </div>
                  <div>
                    <span class="text-xs uppercase font-black text-amber-400 tracking-wider">ደረጃ 1 ከ 5 • የትምህርት ቅኝት (STAGE 1 OF 5: SURVEY)</span>
                    <h3 class="text-lg sm:text-xl font-black text-white">Syllabus Overview & Structural Blueprint</h3>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <button onclick="printCurrentUnitSummary()" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition flex items-center gap-1.5">
                    <span>🖨️</span> <span>Print Cheat Sheet</span>
                  </button>

                  <!-- 2-Minute Countdown Timer -->
                  <div class="flex items-center gap-2 bg-space-950 px-3.5 py-1.5 rounded-xl border border-emerald-500/30">
                    <span class="text-xs font-black text-slate-400">የቅኝት ሰዓት (TIMER):</span>
                    <span id="surveyTimerDisplay" class="font-mono text-xs font-bold text-amber-400">02:00</span>
                    <button onclick="toggleSurveyTimer()" id="surveyTimerBtn" class="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold hover:bg-emerald-500/30 transition">Start</button>
                    <button onclick="resetSurveyTimer()" class="text-xs px-1.5 py-0.5 rounded text-slate-400 hover:text-white transition">↺</button>
                  </div>
                </div>
              </div>

              <!-- Blueprint & Big Idea -->
              <div class="mt-5 space-y-4 relative z-10">
                <div class="p-4 rounded-xl bg-space-900/90 border border-slate-800 space-y-2">
                  <div class="text-[10px] uppercase font-black text-emerald-400 tracking-widest flex items-center gap-1.5">
                    <span>📡</span> <span>HIGH-LEVEL ARCHITECTURAL BLUEPRINT</span>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    \${st.survey.blueprint}
                  </p>
                </div>

                \${st.survey.keyFormulas ? \`
                  <div class="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-3 flex-wrap">
                    <div class="flex items-center gap-2">
                      <span class="text-sm">⚡</span>
                      <span class="text-xs font-black text-emerald-300">CORE THEOREM / FORMULA / LAW:</span>
                    </div>
                    <code class="font-mono text-xs font-bold text-amber-300 bg-space-950 px-2.5 py-1 rounded-lg border border-slate-800">
                      \${st.survey.keyFormulas}
                    </code>
                  </div>
                \` : ''}
              </div>

              <!-- Skimmable Textbook Overview Notes -->
              <div class="mt-6 pt-5 border-t border-slate-800/80 relative z-10 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-base">📖</span>
                    <h4 class="text-xs font-black text-amber-400 uppercase tracking-wider">SKIMMABLE TEXTBOOK OVERVIEW & KEY CONCEPTS:</h4>
                  </div>
                  <span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active Skim Zone</span>
                </div>

                <div class="p-4 rounded-xl bg-space-950/80 border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  \${st.coreNotes}
                </div>

                <div class="pt-2 flex justify-between items-center flex-wrap gap-2 text-xs">
                  <span class="text-slate-400">Want the full working examples & proofs?</span>
                  <button onclick="setSq3rStep('read')" class="px-3.5 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 font-bold text-xs transition flex items-center gap-1.5">
                    <span>Open Deep Read & Worked Examples (R1)</span> <span>➔</span>
                  </button>
                </div>
              </div>

              <!-- Interactive Recon Scout Checklist -->
              <div class="mt-6 pt-5 border-t border-slate-800/80 relative z-10 space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <span>🔭</span> <span>Mission Scouting Checklist (Verify all 3 objectives):</span>
                  </h4>
                  <span id="checklistProgressBadge" class="text-xs font-mono text-amber-400 font-bold">0 / \${st.survey.objectives.length} Verified</span>
                </div>

                <div class="space-y-2">
                  \${st.survey.objectives.map((obj, i) => \`
                    <label class="flex items-start gap-3 p-3 rounded-xl bg-space-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition">
                      <input type="checkbox" id="surveyCheck-\${i}" onchange="checkSurveyCompletion()" class="mt-0.5 rounded text-emerald-500 focus:ring-0">
                      <span class="text-xs text-slate-300 font-medium">\${obj}</span>
                    </label>
                  \`).join('')}
                </div>
              </div>

              <div class="mt-6 flex justify-end relative z-10">
                <button onclick="finishSurveyStep()" id="finishSurveyBtn" class="px-6 py-3 rounded-xl bg-space-800 text-slate-500 font-black text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2">
                  <span>Verify Checklist to Unlock Questions</span> <span>🔒</span>
                </button>
              </div>
            </div>
          </div>
        \`;
        initSurveyTimer();
        checkSurveyCompletion();
      }

      // 2. QUESTION
      else if (s === 'question') {
        container.innerHTML = \`
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-xs uppercase font-black text-emerald-400 tracking-wider">ደረጃ 2 ከ 5 • የማስተዋል ጥያቄዎች (STAGE 2: QUESTION)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">Turn Topics into Focused Inquiry Questions</h3>
              <p class="text-xs sm:text-sm text-slate-400">Curiosity primes the brain to retain knowledge like a magnet. Formulate your hypotheses before reading.</p>
            </div>

            <div class="space-y-4">
              \${st.questions.map((qText, qIdx) => \`
                <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-black text-emerald-400">
                    <span>❓</span> <span>KEY INQUIRY PROMPT \${qIdx+1}:</span>
                  </div>
                  <h4 class="text-xs sm:text-sm font-bold text-white leading-relaxed">\${qText}</h4>
                  <textarea placeholder="Type your prediction or notes here before reading the solution below..." class="w-full bg-space-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none h-16 resize-none"></textarea>
                </div>
              \`).join('')}
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
              <button onclick="setSq3rStep('survey')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Survey</button>
              <button onclick="finishQuestionStep()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Lock In Hypotheses & Deep Read (+35 XP)</span> <span>👉</span>
              </button>
            </div>
          </div>
        \`;
      }

      // 3. READ
      else if (s === 'read') {
        container.innerHTML = \`
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4 flex items-center justify-between flex-wrap gap-2">
              <div>
                <span class="text-xs uppercase font-black text-emerald-400 tracking-wider">ደረጃ 3 ከ 5 • ጥልቅ ንባብና ምሳሌዎች (STAGE 3: READ)</span>
                <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">Deep Reading & Verified Standard Examples</h3>
                <p class="text-xs sm:text-sm text-slate-400">Read with laser focus to verify your hypotheses. Study each step of the standard worked example.</p>
              </div>
              <button onclick="printCurrentUnitSummary()" class="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition flex items-center gap-1.5">
                <span>🖨️</span> <span>ማስታወሻ አትም (Print Cheat Sheet)</span>
              </button>
            </div>

            <!-- Core Textbook Notes -->
            <div class="space-y-4">
              <div class="text-xs uppercase font-black text-slate-400 tracking-wider flex items-center gap-2">
                <span>📖</span> <span>CURRICULUM EXPLANATION & DERIVATION</span>
              </div>
              \${st.coreNotes}
            </div>

            <!-- Detailed Working Example -->
            <div class="p-5 rounded-2xl bg-space-950 border border-emerald-500/30 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <span class="text-xs font-black text-emerald-400 flex items-center gap-2">
                  <span>💡</span> FULLY WORKED STEP-BY-STEP EXAMPLE
                </span>
                <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">Standard Method</span>
              </div>
              
              <h4 class="text-xs sm:text-sm font-black text-white">\${st.example.title}</h4>
              <p class="text-xs text-slate-300 font-mono bg-space-900 p-3 rounded-xl border border-slate-800">\${st.example.problem}</p>

              <div class="space-y-2.5 pt-1">
                \${st.example.steps.map(step => \`
                  <div class="p-3 rounded-xl bg-space-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <span class="font-bold text-emerald-400">\${step.label}:</span>
                    <p class="text-slate-300">\${step.text}</p>
                  </div>
                \`).join('')}
              </div>

              \${st.example.proTip ? \`
                <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
                  <span class="text-sm">⚠️</span>
                  <span><strong>Pro-Tip:</strong> \${st.example.proTip}</span>
                </div>
              \` : ''}
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
              <button onclick="setSq3rStep('question')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Questions</button>
              <button onclick="finishReadStep()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Concepts Mastered! Proceed to Recite (+45 XP)</span> <span>👉</span>
              </button>
            </div>
          </div>
        \`;
      }

      // 4. RECITE
      else if (s === 'recite') {
        currentCardIndex = 0;
        isCardFlipped = false;
        container.innerHTML = \`
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-xs uppercase font-black text-purple-400 tracking-wider">ደረጃ 4 ከ 5 • ንቁ ማስታወስ (STAGE 4: RECITE)</span>
              <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">Active Recall Flashcard Arena</h3>
              <p class="text-xs sm:text-sm text-slate-400">Do not look at the answer! Say the derivation or formula out loud, then tap to verify.</p>
            </div>

            <!-- Interactive 3D Flip Flashcard -->
            <div class="max-w-xl mx-auto py-2">
              <div onclick="flipFlashcard()" id="activeFlashcard" class="glass-crest h-56 sm:h-64 rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-emerald-500/40 relative shadow-2xl transition hover:border-emerald-400">
                <span id="flashcardSideLabel" class="text-[10px] uppercase font-bold text-emerald-400 tracking-widest absolute top-4 left-4">QUESTION</span>
                <span class="text-xs text-slate-500 absolute top-4 right-4">Tap to flip ↺ (Spacebar)</span>

                <div class="my-auto text-center">
                  <h4 id="flashcardContent" class="text-base sm:text-lg font-black text-white leading-relaxed">
                    \${st.reciteFlashcards[0].q}
                  </h4>
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400">
                  <span id="flashcardCounter">Card 1 of \${st.reciteFlashcards.length}</span>
                  <span class="text-emerald-400 font-bold">Active Memory Verification</span>
                </div>
              </div>

              <!-- Flashcard Navigation Controls -->
              <div class="flex items-center justify-center gap-3 mt-5 flex-wrap">
                <button onclick="prevFlashcard()" class="px-4 py-2 rounded-xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white">← Previous</button>
                <button onclick="flipFlashcard()" class="px-4 py-2 rounded-xl bg-space-850 border border-emerald-500/30 text-xs font-bold text-emerald-300 hover:text-white">Flip Card ↺</button>
                <button onclick="markFlashcardMastered()" class="px-4 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-xs font-bold text-emerald-300 hover:bg-emerald-600/30">Mastered ✔</button>
                <button onclick="nextFlashcard()" class="px-4 py-2 rounded-xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white">Next →</button>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
              <button onclick="setSq3rStep('read')" class="text-xs font-bold text-slate-400 hover:text-white transition">← Back to Read</button>
              <button onclick="finishReciteStep()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>Enter AMT Mastery Exam Stage (+45 XP)</span> <span>👉</span>
              </button>
            </div>
          </div>
        \`;
      }

      // 5. REVIEW / AMT EXAM (WITH STRICT 80% PASS GATE)
      else if (s === 'review') {
        if (currentQuizAnswersSubtopicId !== st.id) {
          currentQuizAnswers = {};
          currentQuizAnswersSubtopicId = st.id;
        }
        const qList = st.amtQuiz || [];
        const answeredCount = Object.keys(currentQuizAnswers).length;
        const correctCount = Object.values(currentQuizAnswers).filter(a => a.isCorrect).length;
        const scorePct = answeredCount > 0 ? Math.round((correctCount / qList.length) * 100) : 0;

        container.innerHTML = \`
          <div class="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
            <!-- Header Banner -->
            <div class="border-b border-slate-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span class="text-xs uppercase font-black text-amber-400 tracking-wider">ደረጃ 5 ከ 5 • የብቃት ፈተና (STAGE 5: REVIEW & AMT MASTERY GATE)</span>
                <h3 class="text-xl sm:text-2xl font-black text-white mt-1 font-display">⭐ AMT Exam Engine • Hidden Step-by-Step Derivations</h3>
                <p class="text-xs sm:text-sm text-slate-400">Make your choice first! The official verdict, verified baby-step derivation, and option autopsy unlock after attempting. Score <strong>≥80%</strong> to conquer this level.</p>
              </div>
              <div class="shrink-0 flex items-center gap-2">
                <button onclick="retryAmtQuiz()" class="px-3.5 py-2 rounded-xl bg-space-850 hover:bg-space-800 text-xs font-bold text-slate-300 border border-slate-700 transition flex items-center gap-1.5" title="Reset all answers for a fresh attempt">
                  <span>🔄</span> Reset Test
                </button>
              </div>
            </div>

            <!-- Live Diagnostic & Question Progress Ticker -->
            <div class="p-4 rounded-xl bg-space-950 border border-slate-800 flex items-center justify-between flex-wrap gap-4" id="liveQuizTracker">
              <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-slate-400">ጥያቄዎች (Questions):</span>
                <div class="flex items-center gap-1.5 flex-wrap">
                  \${qList.map((_, i) => {
                    const ans = currentQuizAnswers[i];
                    let pillClass = 'w-6 h-6 rounded-md bg-space-900 text-slate-500 border border-slate-800 text-[10px] font-bold flex items-center justify-center';
                    let pillText = String(i + 1);
                    if (ans) {
                      if (ans.isCorrect) {
                        pillClass = 'w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black flex items-center justify-center';
                        pillText = '✔';
                      } else {
                        pillClass = 'w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 border border-rose-500/40 text-[10px] font-black flex items-center justify-center';
                        pillText = '✖';
                      }
                    }
                    return \`<span id="trackerPill-\${i}" class="\${pillClass}">\${pillText}</span>\`;
                  }).join('')}
                </div>
              </div>
              <div class="flex items-center gap-4 text-xs font-bold">
                <span id="liveAttemptedCount" class="text-slate-300">\${answeredCount} of \${qList.length} Answered</span>
                <span class="text-slate-700">|</span>
                <span id="liveScoreCount" class="\${scorePct >= 80 ? 'text-emerald-400' : 'text-amber-400'} font-mono">\${correctCount} Correct (\${scorePct}%)</span>
                <span class="text-[10px] text-slate-500 font-normal hidden sm:inline">(Gate: ≥80%)</span>
              </div>
            </div>

            <!-- Question Cards -->
            <div class="space-y-6" id="quizContainer">
              \${qList.map((item, qIdx) => {
                const ans = currentQuizAnswers[qIdx];
                const isAnswered = !!ans;
                let statusBadge = '<span class="text-xs font-bold text-slate-500">Unanswered (Select an option below)</span>';
                if (isAnswered) {
                  statusBadge = ans.isCorrect
                    ? '<span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Mastered ✔</span>'
                    : '<span class="text-xs font-black text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">Needs Review ✖</span>';
                }

                return \`
                  <div class="p-5 sm:p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-4" id="quizCard-\${qIdx}">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                      <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">QUESTION \${qIdx+1} OF \${qList.length}</span>
                      <span id="quizStatus-\${qIdx}">\${statusBadge}</span>
                    </div>
                    <h4 class="text-sm sm:text-base font-bold text-white leading-relaxed">\${item.q}</h4>
                    
                    <!-- Options Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      \${item.options.map((opt, optIdx) => {
                        let btnClass = 'quiz-option-btn p-3.5 rounded-xl bg-space-950 border border-slate-800 text-left text-xs sm:text-sm text-slate-300 font-medium hover:border-emerald-500 hover:text-white transition flex items-center gap-3';
                        let badgeHtml = \`<span class="w-7 h-7 rounded-lg bg-space-850 text-slate-400 border border-slate-700/60 flex items-center justify-center font-bold text-xs shrink-0">\${['A','B','C','D'][optIdx]}</span>\`;

                        if (isAnswered) {
                          if (optIdx === item.correct) {
                            btnClass = 'p-3.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-left text-xs sm:text-sm text-emerald-200 font-bold flex items-center gap-3 shadow-lg shadow-emerald-500/20';
                            badgeHtml = '<span class="w-7 h-7 rounded-lg bg-emerald-500/30 text-emerald-300 border border-emerald-500/50 flex items-center justify-center font-black text-xs shrink-0">✔</span>';
                          } else if (optIdx === ans.selected && !ans.isCorrect) {
                            btnClass = 'p-3.5 rounded-xl bg-rose-950/80 border-2 border-rose-500 text-left text-xs sm:text-sm text-rose-300 font-bold flex items-center gap-3 shadow-lg shadow-rose-500/20';
                            badgeHtml = '<span class="w-7 h-7 rounded-lg bg-rose-500/30 text-rose-300 border border-rose-500/50 flex items-center justify-center font-black text-xs shrink-0">✖</span>';
                          } else {
                            btnClass = 'p-3.5 rounded-xl bg-space-950/40 border border-slate-800/60 text-left text-xs sm:text-sm text-slate-500 opacity-50 flex items-center gap-3';
                          }
                        }

                        return \`
                          <button onclick="\${isAnswered ? '' : \`answerAmtQuiz(\${qIdx}, \${optIdx})\`}" id="optBtn-\${qIdx}-\${optIdx}" class="\${btnClass}">
                            \${badgeHtml}
                            <span class="leading-snug">\${opt}</span>
                          </button>
                        \`;
                      }).join('')}
                    </div>

                    <!-- Hidden Baby-Step Detailed Solution Box (Unlocked upon trying) -->
                    <div id="quizExplanation-\${qIdx}" class="\${isAnswered ? '' : 'hidden'} mt-4">
                      \${isAnswered ? buildBabyStepSolutionHtml(item, ans.selected, qIdx, qList.length) : ''}
                    </div>
                  </div>
                \`;
              }).join('')}
            </div>

            <!-- Dynamic Mastery Evaluation Banner -->
            <div id="masteryEvaluationBanner" class="\${answeredCount === qList.length && qList.length > 0 ? '' : 'hidden'} pt-4 border-t border-slate-800">
              <!-- Dynamically populated -->
            </div>

            <div class="pt-4 border-t border-slate-800 flex justify-between items-center" id="reviewFooterActions">
              <button onclick="setSq3rStep('recite')" class="text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5">
                <span>←</span> Back to Recite
              </button>
              <div class="text-xs font-bold text-slate-500">
                \${answeredCount === qList.length ? 'All questions evaluated' : 'Answer all questions to unlock final evaluation'}
              </div>
            </div>
          </div>
        \`;

        if (answeredCount === qList.length && qList.length > 0) {
          evaluateMasteryGate(qList);
        }
      }
    }

    // =========================================================================
    // SURVEY COUNTDOWN TIMER & CHECKLIST LOGIC
    // =========================================================================
    let surveyTimerInterval = null;
    let surveyTimerSeconds = 120;
    let isSurveyTimerRunning = false;

    function initSurveyTimer() {
      surveyTimerSeconds = 120;
      isSurveyTimerRunning = false;
      if (surveyTimerInterval) clearInterval(surveyTimerInterval);
      updateSurveyTimerDisplay();
    }

    function toggleSurveyTimer() {
      const btn = document.getElementById('surveyTimerBtn');
      if (isSurveyTimerRunning) {
        clearInterval(surveyTimerInterval);
        isSurveyTimerRunning = false;
        if (btn) btn.innerText = 'Resume';
      } else {
        isSurveyTimerRunning = true;
        if (btn) btn.innerText = 'Pause';
        surveyTimerInterval = setInterval(() => {
          if (surveyTimerSeconds > 0) {
            surveyTimerSeconds--;
            updateSurveyTimerDisplay();
          } else {
            clearInterval(surveyTimerInterval);
            isSurveyTimerRunning = false;
            soundSuccess();
            showToast('⏰ Scout Recon Timer Complete! Verify your objectives.');
            if (btn) btn.innerText = 'Done';
          }
        }, 1000);
      }
    }

    function resetSurveyTimer() {
      initSurveyTimer();
      const btn = document.getElementById('surveyTimerBtn');
      if (btn) btn.innerText = 'Start';
    }

    function updateSurveyTimerDisplay() {
      const el = document.getElementById('surveyTimerDisplay');
      if (!el) return;
      const m = Math.floor(surveyTimerSeconds / 60).toString().padStart(2, '0');
      const s = (surveyTimerSeconds % 60).toString().padStart(2, '0');
      el.innerText = \`\${m}:\${s}\`;
    }

    function checkSurveyCompletion() {
      const st = getActiveSubtopic();
      let checkedCount = 0;
      st.survey.objectives.forEach((_, i) => {
        const el = document.getElementById(\`surveyCheck-\${i}\`);
        if (el && el.checked) checkedCount++;
      });

      const badge = document.getElementById('checklistProgressBadge');
      if (badge) badge.innerText = \`\${checkedCount} / \${st.survey.objectives.length} Verified\`;

      const btn = document.getElementById('finishSurveyBtn');
      if (btn) {
        if (checkedCount === st.survey.objectives.length) {
          btn.className = 'px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2';
          btn.innerHTML = '<span>All Objectives Verified! Advance to Questions (+35 XP)</span> <span>👉</span>';
        } else {
          btn.className = 'px-6 py-3 rounded-xl bg-space-800 text-slate-500 font-black text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2';
          btn.innerHTML = '<span>Verify All Objectives to Unlock</span> <span>🔒</span>';
        }
      }
    }

    function finishSurveyStep() {
      const st = getActiveSubtopic();
      let allChecked = true;
      st.survey.objectives.forEach((_, i) => {
        const el = document.getElementById(\`surveyCheck-\${i}\`);
        if (el && !el.checked) allChecked = false;
      });

      if (!allChecked && !gState.gateBypass) {
        soundError();
        showToast('🔒 Complete scouting all objectives before advancing!');
        return;
      }

      soundSuccess();
      markStepCompleted('survey');
      addXp(35, 'Tactical Survey Passed');
      setSq3rStep('question');
    }

    function finishQuestionStep() {
      soundSuccess();
      markStepCompleted('question');
      addXp(35, 'Inquiry Hypotheses Submitted');
      setSq3rStep('read');
    }

    function finishReadStep() {
      soundSuccess();
      markStepCompleted('read');
      addXp(45, 'Deep Reading & Examples Studied');
      setSq3rStep('recite');
    }

    function finishReciteStep() {
      soundSuccess();
      markStepCompleted('recite');
      addXp(45, 'Active Recall Flashcards Mastered');
      setSq3rStep('review');
    }

    // =========================================================================
    // FLASHCARDS
    // =========================================================================
    let currentCardIndex = 0;
    let isCardFlipped = false;

    function flipFlashcard() {
      soundFlip();
      const st = getActiveSubtopic();
      const card = st.reciteFlashcards[currentCardIndex];
      const el = document.getElementById('flashcardContent');
      const side = document.getElementById('flashcardSideLabel');

      isCardFlipped = !isCardFlipped;
      if (isCardFlipped) {
        side.innerText = 'መልስ (ACTIVE RECALL ANSWER)';
        side.className = 'text-[10px] uppercase font-bold text-amber-400 tracking-widest absolute top-4 left-4';
        el.innerHTML = \`<span class="text-amber-200">\${card.a}</span>\`;
      } else {
        side.innerText = 'ጥያቄ (QUESTION)';
        side.className = 'text-[10px] uppercase font-bold text-emerald-400 tracking-widest absolute top-4 left-4';
        el.innerHTML = card.q;
      }
    }

    function nextFlashcard() {
      soundClick();
      const st = getActiveSubtopic();
      currentCardIndex = (currentCardIndex + 1) % st.reciteFlashcards.length;
      isCardFlipped = false;
      updateFlashcardView();
    }

    function prevFlashcard() {
      soundClick();
      const st = getActiveSubtopic();
      currentCardIndex = (currentCardIndex - 1 + st.reciteFlashcards.length) % st.reciteFlashcards.length;
      isCardFlipped = false;
      updateFlashcardView();
    }

    function markFlashcardMastered() {
      soundSuccess();
      addXp(15, 'Memory Retained');
      gState.totalCardsMastered++;
      saveState();
      nextFlashcard();
    }

    function updateFlashcardView() {
      const st = getActiveSubtopic();
      const card = st.reciteFlashcards[currentCardIndex];
      document.getElementById('flashcardSideLabel').innerText = 'ጥያቄ (QUESTION)';
      document.getElementById('flashcardSideLabel').className = 'text-[10px] uppercase font-bold text-emerald-400 tracking-widest absolute top-4 left-4';
      document.getElementById('flashcardCounter').innerText = \`Card \${currentCardIndex + 1} of \${st.reciteFlashcards.length}\`;
      document.getElementById('flashcardContent').innerText = card.q;
    }

    // =========================================================================
    // AMT EXAM MODE: GRADING, EXTREME BABY-STEP REVEAL, AND 80% GATE
    // =========================================================================
    let currentQuizAnswers = {};
    let currentQuizAnswersSubtopicId = null;

    function buildBabyStepSolutionHtml(qItem, selectedIdx, qIdx, totalQs, isSim = false) {
      const isCorrect = selectedIdx === qItem.correct;
      const correctLetter = ['A', 'B', 'C', 'D'][qItem.correct];
      const correctText = qItem.options[qItem.correct];
      const selectedLetter = selectedIdx !== null && selectedIdx !== undefined ? ['A', 'B', 'C', 'D'][selectedIdx] : null;
      const selectedText = selectedLetter ? qItem.options[selectedIdx] : 'None';

      const distractorRows = qItem.options.map((opt, i) => {
        const letter = ['A', 'B', 'C', 'D'][i];
        if (i === qItem.correct) {
          return \`
            <div class="p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 space-y-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-md bg-emerald-500/30 text-emerald-300 font-black flex items-center justify-center text-xs">✔</span>
                  <strong class="text-xs sm:text-sm text-emerald-300">Option \${letter}: "\${opt}"</strong>
                </div>
                <span class="text-[10px] uppercase font-black text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/40">VERIFIED ANSWER</span>
              </div>
              <p class="text-xs text-emerald-100/90 pl-7">
                Directly proven by the official curriculum rule and mathematical derivation above.
              </p>
            </div>
          \`;
        } else {
          const wasPicked = i === selectedIdx;
          return \`
            <div class="p-3 rounded-xl bg-space-950 border \${wasPicked ? 'border-rose-500/70 bg-rose-950/20' : 'border-slate-800'} space-y-1">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-md \${wasPicked ? 'bg-rose-500/30 text-rose-300' : 'bg-slate-800 text-slate-500'} font-black flex items-center justify-center text-xs">✖</span>
                  <strong class="text-xs sm:text-sm \${wasPicked ? 'text-rose-300' : 'text-slate-400'}">Option \${letter}: "\${opt}"</strong>
                </div>
                <span class="text-[10px] uppercase font-bold \${wasPicked ? 'text-rose-400 bg-rose-500/10 border border-rose-500/30' : 'text-slate-500 bg-space-900 border border-slate-800'} px-2 py-0.5 rounded">
                  \${wasPicked ? 'YOUR SELECTION • DISTRACTOR' : 'INCORRECT DISTRACTOR'}
                </span>
              </div>
              <p class="text-xs text-slate-400 pl-7">
                \${wasPicked ? '⚠️ Common Misconception: Contradicts verified scientific/mathematical rules (see Exam Pitfall in Step 4).' : 'False choice designed to catch students who fail to execute the verified step-by-step strategy.'}
              </p>
            </div>
          \`;
        }
      }).join('');

      return \`
        <div class="space-y-4 animate-fadeIn">
          <!-- Direct Answer Reveal & Verdict Banner -->
          \${isCorrect ? \`
            <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-space-900 to-emerald-950/80 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-black flex items-center justify-center text-base">
                    ✔
                  </div>
                  <div>
                    <span class="text-[11px] font-black uppercase text-emerald-400 tracking-wider">ትክክለኛ መልስ! (OFFICIAL VERDICT: SPOT ON!)</span>
                    <h5 class="text-sm sm:text-base font-bold text-white">Question #\${qIdx + 1} Mastered Successfully! (+25 XP)</h5>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ANSWER: OPTION \${correctLetter}
                </span>
              </div>
              <div class="p-3 rounded-xl bg-space-950/90 border border-emerald-500/40 text-xs sm:text-sm text-slate-200">
                <strong class="text-emerald-400">Verified Answer:</strong> Option \${correctLetter} — <span class="text-white font-black">"\${correctText}"</span>
              </div>
            </div>
          \` : \`
            <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-950/90 via-space-900 to-rose-950/80 border-2 border-rose-500 shadow-xl shadow-rose-500/10 space-y-3">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 font-black flex items-center justify-center text-base">
                    ✖
                  </div>
                  <div>
                    <span class="text-[11px] font-black uppercase text-rose-400 tracking-wider">ትክክል ያልሆነ ሙከራ (INCORRECT ATTEMPT • DETAILED REMEDIATION)</span>
                    <h5 class="text-sm sm:text-base font-bold text-white">Master the baby steps below to never miss this in exams!</h5>
                  </div>
                </div>
                <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  CORRECT ANSWER: OPTION \${correctLetter}
                </span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                <div class="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-slate-300">
                  <strong class="text-rose-400">Your Selection:</strong> Option \${selectedLetter} — <span class="line-through text-slate-400 font-medium">"\${selectedText}"</span>
                </div>
                <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-slate-200">
                  <strong class="text-emerald-400">Correct Answer:</strong> Option \${correctLetter} — <span class="font-black text-white">"\${correctText}"</span>
                </div>
              </div>
            </div>
          \`}

          <!-- Extreme Step-by-Step Very Baby Step Detailed Solution Framework -->
          <div class="space-y-3">
            <!-- Step 1: Tactical Approach -->
            <div class="p-4 rounded-xl bg-space-950 border border-emerald-500/30 space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🎯</span> STEP 1 • TACTICAL APPROACH & FIRST PRINCIPLES ("WAY TO DO IT")
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                \${qItem.strategy}
              </p>
            </div>

            <!-- Step 2: Micro Baby-Step Derivation -->
            <div class="p-4 rounded-xl bg-space-950 border border-cyan-500/30 space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>👣</span> STEP 2 • VERIFIED BABY-STEP MATHEMATICAL & CONCEPTUAL DERIVATION
                </span>
              </div>
              <div class="p-3.5 rounded-lg bg-space-900 border border-slate-800 text-xs sm:text-sm text-cyan-200 leading-relaxed font-mono whitespace-pre-line">
                \${qItem.derivation}
              </div>
              <p class="text-[11px] text-slate-400 italic">
                Directly establishing the required result: <strong class="text-white">Option \${correctLetter} ("\${correctText}")</strong>.
              </p>
            </div>

            <!-- Step 3: Option-by-Option Distractor Autopsy -->
            <div class="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🔬</span> STEP 3 • OPTION-BY-OPTION AUTOPSY (WHY CHOICES ARE RIGHT OR WRONG)
                </span>
                <span class="text-[10px] text-slate-500 font-mono">All 4 Options Audited</span>
              </div>
              <div class="space-y-2">
                \${distractorRows}
              </div>
            </div>

            <!-- Step 4: Ministry Exam Trap & Golden Rule -->
            <div class="p-4 rounded-xl bg-amber-950/20 border border-amber-500/40 space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>⚠️</span> STEP 4 • MINISTRY EXAM PITFALL & GOLDEN RETENTION RULE
                </span>
              </div>
              <p class="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                \${qItem.trap}
              </p>
            </div>
          </div>

          <!-- Action Shortcut to next question -->
          \${!isSim && qIdx < totalQs - 1 ? \`
            <div class="flex justify-end pt-1">
              <button onclick="scrollToQuizQuestion(\${qIdx + 1})" class="px-4 py-2 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition flex items-center gap-1.5">
                <span>Proceed to Question #\${qIdx + 2}</span> <span>↓</span>
              </button>
            </div>
          \` : ''}
        </div>
      \`;
    }

    function scrollToQuizQuestion(qIdx) {
      soundClick();
      const card = document.getElementById(\`quizCard-\${qIdx}\`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    function updateLiveQuizTracker(total) {
      const answeredCount = Object.keys(currentQuizAnswers).length;
      const correctCount = Object.values(currentQuizAnswers).filter(a => a.isCorrect).length;
      const scorePct = answeredCount > 0 ? Math.round((correctCount / total) * 100) : 0;

      const attemptedEl = document.getElementById('liveAttemptedCount');
      const scoreEl = document.getElementById('liveScoreCount');
      if (attemptedEl) attemptedEl.innerText = \`\${answeredCount} of \${total} Answered\`;
      if (scoreEl) {
        scoreEl.innerText = \`\${correctCount} Correct (\${scorePct}%)\`;
        scoreEl.className = \`text-xs font-black font-mono \${scorePct >= 80 ? 'text-emerald-400' : 'text-amber-400'}\`;
      }

      for (let i = 0; i < total; i++) {
        const pill = document.getElementById(\`trackerPill-\${i}\`);
        if (pill) {
          if (currentQuizAnswers[i]) {
            if (currentQuizAnswers[i].isCorrect) {
              pill.className = 'w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black flex items-center justify-center';
              pill.innerText = '✔';
            } else {
              pill.className = 'w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 border border-rose-500/40 text-[10px] font-black flex items-center justify-center';
              pill.innerText = '✖';
            }
          } else {
            pill.className = 'w-6 h-6 rounded-md bg-space-950 text-slate-500 border border-slate-800 text-[10px] font-bold flex items-center justify-center';
            pill.innerText = String(i + 1);
          }
        }
      }
    }

    function answerAmtQuiz(qIdx, optIdx) {
      const st = getActiveSubtopic();
      const item = st.amtQuiz[qIdx];
      const isCorrect = optIdx === item.correct;

      currentQuizAnswers[qIdx] = { selected: optIdx, isCorrect: isCorrect };

      item.options.forEach((_, i) => {
        const b = document.getElementById(\`optBtn-\${qIdx}-\${i}\`);
        if (b) {
          b.onclick = null;
          if (i === item.correct) {
            b.className = 'p-3.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-left text-xs sm:text-sm text-emerald-200 font-bold flex items-center gap-3 shadow-lg shadow-emerald-500/20';
            b.innerHTML = \`<span class="w-7 h-7 rounded-lg bg-emerald-500/30 text-emerald-300 border border-emerald-500/50 flex items-center justify-center font-black text-xs shrink-0">✔</span> <span class="leading-snug">\${item.options[i]}</span>\`;
          } else if (i === optIdx && !isCorrect) {
            b.className = 'p-3.5 rounded-xl bg-rose-950/80 border-2 border-rose-500 text-left text-xs sm:text-sm text-rose-300 font-bold flex items-center gap-3 shadow-lg shadow-rose-500/20';
            b.innerHTML = \`<span class="w-7 h-7 rounded-lg bg-rose-500/30 text-rose-300 border border-rose-500/50 flex items-center justify-center font-black text-xs shrink-0">✖</span> <span class="leading-snug">\${item.options[i]}</span>\`;
          } else {
            b.className = 'p-3.5 rounded-xl bg-space-950/40 border border-slate-800/60 text-left text-xs sm:text-sm text-slate-500 opacity-50 flex items-center gap-3';
          }
        }
      });

      // UNLOCK AND REVEAL THE EXTREME BABY-STEP DETAILED SOLUTION
      const exp = document.getElementById(\`quizExplanation-\${qIdx}\`);
      if (exp) {
        exp.innerHTML = buildBabyStepSolutionHtml(item, optIdx, qIdx, st.amtQuiz.length);
        exp.classList.remove('hidden');
      }

      const statusEl = document.getElementById(\`quizStatus-\${qIdx}\`);
      if (isCorrect) {
        soundSuccess();
        addXp(25, 'Correct Answer');
        if (statusEl) {
          statusEl.innerHTML = '<span class="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">Mastered ✔</span>';
        }
      } else {
        soundError();
        if (statusEl) {
          statusEl.innerHTML = '<span class="text-xs font-black text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">Needs Review ✖</span>';
        }
      }

      updateLiveQuizTracker(st.amtQuiz.length);

      const qList = st.amtQuiz || [];
      if (Object.keys(currentQuizAnswers).length === qList.length) {
        evaluateMasteryGate(qList);
      }
    }

    function evaluateMasteryGate(qList) {
      const correctCount = Object.values(currentQuizAnswers).filter(a => a.isCorrect).length;
      const scorePct = Math.round((correctCount / qList.length) * 100);
      const passed = scorePct >= 80;

      const banner = document.getElementById('masteryEvaluationBanner');
      const footerActions = document.getElementById('reviewFooterActions');

      if (!banner) return;
      banner.classList.remove('hidden');

      if (passed) {
        triggerConfetti();
        soundSuccess();
        banner.innerHTML = \`
          <div class="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-space-900 to-emerald-950/80 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 space-y-5 text-center animate-fadeIn">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-4xl shadow-lg shadow-emerald-500/30">
              🏆
            </div>
            <div class="space-y-1.5">
              <span class="text-xs uppercase font-black text-emerald-400 tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                MASTERED • CONGRATULATIONS!
              </span>
              <h3 class="text-2xl sm:text-3xl font-black text-white font-display">🎉 ደረጃውን በ \${scorePct}% አጠናቀዋል! (LEVEL MASTERED)</h3>
              <p class="text-xs sm:text-sm text-emerald-200/90 max-w-xl mx-auto leading-relaxed">
                You scored <strong>\${correctCount} out of \${qList.length} correct</strong> (\${scorePct}%) and exceeded the strict 80% national mastery threshold!
              </p>
            </div>
            <div class="flex items-center justify-center gap-3 pt-2 flex-wrap">
              <button onclick="claimMasteryAndUnlockNext(\${scorePct})" class="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2.5">
                <span>ቀጣዩን ርዕስ ክፈት (Unlock & Launch Next Level) (+50 XP, +40 💎)</span> <span>🚀</span>
              </button>
              <button onclick="openCertificateModal(\${scorePct})" class="px-6 py-4 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-black text-sm transition flex items-center gap-2">
                <span>🎓</span> <span>የምስክር ወረቀት አውርድ (Certificate)</span>
              </button>
            </div>
          </div>
        \`;
      } else {
        soundError();
        banner.innerHTML = \`
          <div class="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-rose-950/90 via-space-900 to-rose-950/80 border-2 border-rose-500/70 shadow-2xl shadow-rose-500/20 space-y-5 text-center animate-fadeIn">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-rose-500/20 border border-rose-500/50 flex items-center justify-center text-4xl shadow-lg shadow-rose-500/30">
              ⚠️
            </div>
            <div class="space-y-1.5">
              <span class="text-xs uppercase font-black text-rose-400 tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/30">
                የውጤት ገደብ አልተሟላም (MASTERY GATE LOCKED: \${scorePct}%)
              </span>
              <h3 class="text-2xl sm:text-3xl font-black text-rose-400 font-display">PREREQUISITE THRESHOLD NOT REACHED</h3>
              <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                You got <strong>\${correctCount} of \${qList.length} correct</strong> (\${scorePct}%). The Ethiopian national standard requires at least <strong>80% mastery</strong> before you are permitted to advance to subsequent missions.
              </p>
              <p class="text-xs text-amber-300 pt-1">
                Study the extreme baby-step solutions and option autopsies revealed above, then retry!
              </p>
            </div>
            <div class="flex items-center justify-center gap-3 pt-2 flex-wrap">
              <button onclick="retryAmtQuiz()" class="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-rose-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-2">
                <span>🔄 Retry Test (Reset Answers)</span>
              </button>
              <button onclick="setSq3rStep('read')" class="px-6 py-3.5 rounded-xl bg-space-850 hover:bg-space-800 text-emerald-300 hover:text-white font-black text-xs sm:text-sm border border-emerald-500/30 transition flex items-center gap-2">
                <span>📖 Review Core Notes (Stage 3)</span>
              </button>
            </div>
          </div>
        \`;
      }

      if (footerActions) footerActions.classList.add('hidden');
      banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function retryAmtQuiz() {
      soundClick();
      currentQuizAnswers = {};
      renderCurrentStep();
      showToast('Mastery test reset. Give it your best attempt! 🎯');
    }

    function claimMasteryAndUnlockNext(score) {
      const stId = gState.activeSubtopicId;
      markStepCompleted('review');
      addXp(50, 'Level Mastery Achieved');
      addGems(40);
      gState.totalQuizzesDone++;

      gState.masteredSubtopics[stId] = {
        passed: true,
        score: score,
        timestamp: Date.now()
      };
      saveState();

      const allSubtopics = getAllSubtopicsForSubject(gState.grade, gState.activeSubject);
      const curIdx = allSubtopics.findIndex(st => st.id === stId);

      if (curIdx >= 0 && curIdx < allSubtopics.length - 1) {
        const nextSubtopic = allSubtopics[curIdx + 1];
        showToast(\`🌟 Level Mastered! Advancing to \${nextSubtopic.code} \${nextSubtopic.title}!\`);
        setTimeout(() => {
          changeSubtopic(nextSubtopic.id);
          window.scrollTo({ top: 120, behavior: 'smooth' });
        }, 600);
      } else {
        triggerConfetti();
        showToast(\`🏆 INCREDIBLE! You have fully conquered all levels in \${GALACTIC_DATABASE[gState.grade][gState.activeSubject].name}!\`);
        populateDropdowns();
        renderCurriculumMatrix();
        renderLevelMap();
      }
    }

    // =========================================================================
    // MINISTRY EXAM HALL SIMULATOR ENGINE (TIMED FULL MOCKS)
    // =========================================================================
    let examHallState = {
      active: false,
      grade: 7,
      subject: 'all',
      durationSec: 45 * 60,
      remainingSec: 45 * 60,
      timerInterval: null,
      questions: [],
      answers: {},
      flagged: {},
      currentQIdx: 0,
      isFinished: false,
      score: 0,
      percentage: 0
    };

    function launchExamHall() {
      const subjChoice = document.getElementById('examSubjectSelect').value;
      const lengthChoice = parseInt(document.getElementById('examLengthSelect').value, 10) || 40;
      const targetGrade = gState.grade;

      // Collect all questions for the target selection
      const pool = [];
      const subjects = GALACTIC_DATABASE[targetGrade];

      Object.entries(subjects).forEach(([sId, sub]) => {
        if (subjChoice === 'all' || subjChoice === sId) {
          sub.units.forEach(u => {
            u.subtopics.forEach(st => {
              if (st.amtQuiz) {
                st.amtQuiz.forEach(q => {
                  pool.push({
                    ...q,
                    unitNumber: u.number,
                    unitTitle: u.title,
                    unitId: u.id,
                    subCode: st.code,
                    subTitle: st.title,
                    subId: st.id,
                    subjectId: sId,
                    subjectName: sub.name
                  });
                });
              }
            });
          });
        }
      });

      if (pool.length === 0) {
        showToast('No questions available for this selection.');
        return;
      }

      // Shuffle and pick N questions
      pool.sort(() => 0.5 - Math.random());
      const selectedQuestions = pool.slice(0, Math.min(lengthChoice, pool.length));

      // Calculate time: 20 Qs = 25m, 40 Qs = 45m, 60 Qs = 60m
      let durationMins = 45;
      if (lengthChoice === 20) durationMins = 25;
      if (lengthChoice === 60) durationMins = 60;

      examHallState = {
        active: true,
        grade: targetGrade,
        subject: subjChoice,
        durationSec: durationMins * 60,
        remainingSec: durationMins * 60,
        timerInterval: null,
        questions: selectedQuestions,
        answers: {},
        flagged: {},
        currentQIdx: 0,
        isFinished: false,
        score: 0,
        percentage: 0
      };

      document.getElementById('examHallConfigCard').classList.add('hidden');
      document.getElementById('examHallActiveRoom').classList.remove('hidden');
      document.getElementById('examHallResultsCard').classList.add('hidden');

      const subjName = subjChoice === 'all' ? 'All Subjects Combined' : (SUBJECT_METADATA[subjChoice]?.name || subjChoice);
      document.getElementById('activeExamTitle').innerText = \`Grade \${targetGrade} • \${subjName} Exam Simulator\`;

      startExamHallTimer();
      renderExamHallPalette();
      renderExamHallQuestion(0);
      showToast('🏛️ Ministry Exam Hall in session! Manage your time carefully.');
    }

    function startExamHallTimer() {
      if (examHallState.timerInterval) clearInterval(examHallState.timerInterval);
      updateExamHallTimerDisplay();

      examHallState.timerInterval = setInterval(() => {
        if (examHallState.remainingSec > 0) {
          examHallState.remainingSec--;
          updateExamHallTimerDisplay();
          if (examHallState.remainingSec === 5 * 60) {
            playTone(440, 'sawtooth', 0.5);
            showToast('⚠️ 5 MINUTES REMAINING! Review your flagged questions.');
          }
        } else {
          clearInterval(examHallState.timerInterval);
          soundError();
          showToast('⏰ TIME EXPIRED! Automatically evaluating your exam.');
          finishExamHall();
        }
      }, 1000);
    }

    function updateExamHallTimerDisplay() {
      const el = document.getElementById('examHallTimer');
      if (!el) return;
      const m = Math.floor(examHallState.remainingSec / 60).toString().padStart(2, '0');
      const s = (examHallState.remainingSec % 60).toString().padStart(2, '0');
      el.innerText = \`\${m}:\${s}\`;

      if (examHallState.remainingSec < 5 * 60) {
        el.className = 'font-mono text-base font-black text-rose-400 animate-pulse';
      } else if (examHallState.remainingSec < 10 * 60) {
        el.className = 'font-mono text-base font-black text-amber-400';
      } else {
        el.className = 'font-mono text-base font-black text-emerald-400';
      }
    }

    function renderExamHallPalette() {
      const palette = document.getElementById('examHallPalette');
      if (!palette) return;
      palette.innerHTML = '';

      examHallState.questions.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.onclick = () => renderExamHallQuestion(i);
        btn.id = \`paletteBtn-\${i}\`;

        let cls = 'w-8 h-8 rounded-lg text-xs font-bold transition flex items-center justify-center ';
        const isAnswered = examHallState.answers[i] !== undefined;
        const isFlagged = examHallState.flagged[i] === true;
        const isCurrent = examHallState.currentQIdx === i;

        if (isCurrent) {
          cls += 'ring-2 ring-amber-400 bg-space-800 text-white font-black';
        } else if (isFlagged) {
          cls += 'bg-amber-500/20 text-amber-300 border border-amber-500/40';
        } else if (isAnswered) {
          cls += 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
        } else {
          cls += 'bg-space-900 text-slate-400 border border-slate-800 hover:border-slate-700';
        }

        btn.className = cls;
        btn.innerText = String(i + 1);
        palette.appendChild(btn);
      });

      const answeredCount = Object.keys(examHallState.answers).length;
      const total = examHallState.questions.length;
      document.getElementById('activeExamProgressLabel').innerText = \`Question \${examHallState.currentQIdx + 1} of \${total} • \${answeredCount} Answered\`;
    }

    function renderExamHallQuestion(idx) {
      examHallState.currentQIdx = idx;
      renderExamHallPalette();

      const q = examHallState.questions[idx];
      const card = document.getElementById('examHallQuestionCard');
      const isFlagged = examHallState.flagged[idx] === true;
      const selectedOpt = examHallState.answers[idx];

      card.innerHTML = \`
        <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
              QUESTION \${idx + 1} OF \${examHallState.questions.length}
            </span>
            <span class="text-xs font-bold text-slate-400">\${q.subjectName} • \${q.unitNumber} \${q.subCode}</span>
          </div>
          <button onclick="toggleExamFlag(\${idx})" class="px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition \${isFlagged ? 'bg-amber-500 text-slate-950 font-black' : 'bg-space-900 text-slate-400 border border-slate-700 hover:text-white'}">
            <span>🚩</span> <span>\${isFlagged ? 'Flagged (ምልክት ተደርጓል)' : 'Flag for Review (ለይተህ ያዝ)'}</span>
          </button>
        </div>

        <h3 class="text-sm sm:text-base font-bold text-white leading-relaxed">\${q.q}</h3>

        <!-- Options -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          \${q.options.map((opt, optIdx) => {
            const isSelected = selectedOpt === optIdx;
            return \`
              <button onclick="selectExamOption(\${idx}, \${optIdx})" class="quiz-option-btn p-3.5 rounded-xl border text-left text-xs sm:text-sm transition flex items-center gap-3 \${
                isSelected 
                  ? 'bg-emerald-950/80 border-2 border-emerald-400 text-emerald-200 font-bold shadow-lg shadow-emerald-500/20' 
                  : 'bg-space-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }">
                <span class="w-7 h-7 rounded-lg \${isSelected ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-space-850 text-slate-400 border border-slate-700/60'} flex items-center justify-center font-bold text-xs shrink-0">
                  \${['A','B','C','D'][optIdx]}
                </span>
                <span class="leading-snug">\${opt}</span>
              </button>
            \`;
          }).join('')}
        </div>

        <!-- Navigation Controls -->
        <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
          <button onclick="renderExamHallQuestion(\${Math.max(0, idx - 1)})" class="px-4 py-2 rounded-xl bg-space-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white \${idx === 0 ? 'opacity-40 pointer-events-none' : ''}">
            ← Previous Question
          </button>
          \${idx < examHallState.questions.length - 1 ? \`
            <button onclick="renderExamHallQuestion(\${idx + 1})" class="px-5 py-2 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition flex items-center gap-1.5">
              <span>Next Question</span> <span>➔</span>
            </button>
          \` : \`
            <button onclick="confirmSubmitExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs shadow-lg shadow-emerald-600/30 transition flex items-center gap-1.5">
              <span>ፈተናውን አስረክብ (Finish Exam)</span> <span>✔</span>
            </button>
          \`}
        </div>
      \`;
    }

    function selectExamOption(qIdx, optIdx) {
      soundClick();
      examHallState.answers[qIdx] = optIdx;
      renderExamHallQuestion(qIdx);
    }

    function toggleExamFlag(qIdx) {
      soundClick();
      examHallState.flagged[qIdx] = !examHallState.flagged[qIdx];
      renderExamHallQuestion(qIdx);
    }

    function confirmSubmitExam() {
      const answeredCount = Object.keys(examHallState.answers).length;
      const total = examHallState.questions.length;
      const unanswered = total - answeredCount;

      let msg = 'Are you sure you want to finalize your Ministry Exam submission?';
      if (unanswered > 0) {
        msg = \`You still have \${unanswered} unanswered question(s)! Are you sure you want to finish now?\`;
      }
      if (confirm(msg)) {
        finishExamHall();
      }
    }

    function finishExamHall() {
      if (examHallState.timerInterval) clearInterval(examHallState.timerInterval);
      examHallState.active = false;
      examHallState.isFinished = true;

      // Calculate score
      let correct = 0;
      const unitDiagnostics = {};

      examHallState.questions.forEach((q, i) => {
        const userChoice = examHallState.answers[i];
        const isRight = userChoice === q.correct;
        if (isRight) correct++;

        if (!unitDiagnostics[q.unitId]) {
          unitDiagnostics[q.unitId] = { title: q.unitTitle, number: q.unitNumber, subject: q.subjectName, total: 0, correct: 0 };
        }
        unitDiagnostics[q.unitId].total++;
        if (isRight) unitDiagnostics[q.unitId].correct++;
      });

      const total = examHallState.questions.length;
      const pct = Math.round((correct / total) * 100);
      examHallState.score = correct;
      examHallState.percentage = pct;

      // Predict Ministry Letter Grade
      let letterGrade = 'Distinction (A+) • የላቀ ውጤት (የወርቅ ሜዳሊያ)';
      let gradeColor = 'text-amber-400';
      if (pct >= 90) {
        letterGrade = 'Distinction (A+) • የላቀ ውጤት (የወርቅ ሜዳሊያ)';
        gradeColor = 'text-amber-400';
        triggerConfetti();
        soundSuccess();
      } else if (pct >= 80) {
        letterGrade = 'Very Good (A) • በጣም ጥሩ ውጤት';
        gradeColor = 'text-emerald-400';
        soundSuccess();
      } else if (pct >= 65) {
        letterGrade = 'Good (B) • ጥሩ ውጤት';
        gradeColor = 'text-cyan-400';
      } else if (pct >= 50) {
        letterGrade = 'Satisfactory (C) • አማካይ ውጤት';
        gradeColor = 'text-purple-400';
      } else {
        letterGrade = 'Needs Remediation (F) • ድጋፍ የሚሻ';
        gradeColor = 'text-rose-400';
        soundError();
      }

      document.getElementById('examHallActiveRoom').classList.add('hidden');
      const resultsCard = document.getElementById('examHallResultsCard');
      resultsCard.classList.remove('hidden');

      resultsCard.innerHTML = \`
        <div class="glass-crest p-6 sm:p-8 rounded-3xl border border-amber-500/40 space-y-6 animate-fadeIn">
          <div class="text-center space-y-2">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-3xl shadow-xl shadow-amber-500/20">
              🏆
            </div>
            <span class="text-xs uppercase font-black text-amber-400 tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              OFFICIAL REGIONAL EXAM REPORT CARD
            </span>
            <h2 class="text-2xl sm:text-3xl font-black text-white font-display">የፈተና ውጤት ማስረጃ (Exam Hall Results)</h2>
            <p class="text-xs sm:text-sm text-slate-300">Grade \${examHallState.grade} National Curriculum Examination Simulation</p>
          </div>

          <!-- Score Banner -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div class="p-4 rounded-2xl bg-space-950 border border-slate-800">
              <span class="text-xs text-slate-400 font-bold">ያገኙት ውጤት (Raw Score)</span>
              <div class="text-3xl font-black text-white mt-1 font-mono">\${correct} / \${total}</div>
            </div>
            <div class="p-4 rounded-2xl bg-space-950 border border-slate-800">
              <span class="text-xs text-slate-400 font-bold">የመቶኛ ውጤት (Percentage)</span>
              <div class="text-3xl font-black text-emerald-400 mt-1 font-mono">\${pct}%</div>
            </div>
            <div class="p-4 rounded-2xl bg-space-950 border border-slate-800">
              <span class="text-xs text-slate-400 font-bold">የክልል ፈተና ግምት (Predicted Grade)</span>
              <div class="text-lg font-black \${gradeColor} mt-2 font-display">\${letterGrade}</div>
            </div>
          </div>

          <!-- Certificate Action -->
          <div class="p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-space-950 border border-amber-500/40 flex items-center justify-between flex-wrap gap-4">
            <div class="space-y-1">
              <h4 class="text-sm font-black text-white flex items-center gap-2">
                <span>🎓</span> <span>Claim Your Official Ministry Certificate</span>
              </h4>
              <p class="text-xs text-slate-300">Download and share your verified certificate with your name and \${pct}% score!</p>
            </div>
            <button onclick="openCertificateModal(\${pct})" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 transition hover:scale-105 active:scale-95 flex items-center gap-2">
              <span>ፎቶ አውርድ (Generate Certificate)</span> <span>👉</span>
            </button>
          </div>

          <!-- Unit-by-Unit Diagnostic Breakdown -->
          <div class="space-y-3">
            <h4 class="text-xs font-black text-slate-300 uppercase tracking-wider">
              ምዕራፍ-ተኮር የዕውቀት ግምገማ (CHAPTER-BY-CHAPTER DIAGNOSTIC PRESCRIPTION):
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              \${Object.values(unitDiagnostics).map(u => {
                const uPct = Math.round((u.correct / u.total) * 100);
                const needsWork = uPct < 75;
                return \`
                  <div class="p-3.5 rounded-xl bg-space-950 border \${needsWork ? 'border-amber-500/40' : 'border-slate-800'} space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-bold">
                      <span class="text-slate-300 truncate">\${u.number}: \${u.title}</span>
                      <span class="\${uPct >= 80 ? 'text-emerald-400' : (uPct >= 60 ? 'text-amber-400' : 'text-rose-400')} font-mono">\${u.correct}/\${u.total} (\${uPct}%)</span>
                    </div>
                    <div class="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div class="h-full \${uPct >= 80 ? 'bg-emerald-500' : (uPct >= 60 ? 'bg-amber-400' : 'bg-rose-500')}" style="width: \${uPct}%;"></div>
                    </div>
                    \${needsWork ? '<span class="text-[10px] text-amber-300 font-medium">⚠️ Recommended SQ3R Revision</span>' : '<span class="text-[10px] text-emerald-400 font-medium">✔ Verified Strong</span>'}
                  </div>
                \`;
              }).join('')}
            </div>
          </div>

          <!-- Question Review with Full Baby Steps -->
          <div class="pt-4 border-t border-slate-800 space-y-4">
            <h4 class="text-sm font-black text-white flex items-center gap-2 font-display">
              <span>🔍</span> <span>Full Step-by-Step Question Review & Autopsies (\${examHallState.questions.length} Questions)</span>
            </h4>
            <div class="space-y-4">
              \${examHallState.questions.map((q, idx) => {
                const picked = examHallState.answers[idx];
                const isRight = picked === q.correct;
                return \`
                  <div class="p-4 rounded-xl bg-space-900 border \${isRight ? 'border-emerald-500/30' : 'border-rose-500/30'} space-y-3">
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-bold text-slate-400">Question #\${idx + 1} • \${q.subjectName}</span>
                      <span class="\${isRight ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}">
                        \${isRight ? '✔ Correct' : '✖ Incorrect (Needs Review)'}
                      </span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-white">\${q.q}</h5>
                    <div>
                      \${buildBabyStepSolutionHtml(q, picked, idx, examHallState.questions.length, true)}
                    </div>
                  </div>
                \`;
              }).join('')}
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="flex justify-between items-center pt-4 border-t border-slate-800">
            <button onclick="resetExamHall()" class="px-5 py-2.5 rounded-xl bg-space-850 hover:bg-space-800 border border-slate-700 text-xs font-bold text-white transition">
              🔄 Take Another Mock Exam
            </button>
            <button onclick="switchTab('sq3r')" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition">
              Continue SQ3R Study Studio ➔
            </button>
          </div>
        </div>
      \`;
      resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function resetExamHall() {
      document.getElementById('examHallResultsCard').classList.add('hidden');
      document.getElementById('examHallActiveRoom').classList.add('hidden');
      document.getElementById('examHallConfigCard').classList.remove('hidden');
    }

    // =========================================================================
    // CERTIFICATE GENERATOR (CANVAS + PNG EXPORT + TELEGRAM SHARE)
    // =========================================================================
    let currentCertScore = 95;
    let currentCertSubject = 'Grade 8 Curriculum Mastery';

    function openCertificateModal(score = null, subject = null) {
      soundClick();
      currentCertScore = score !== null ? score : 92;
      currentCertSubject = subject !== null ? subject : \`Grade \${gState.grade} \${GALACTIC_DATABASE[gState.grade][gState.activeSubject].name} Mastery\`;

      const nameInput = document.getElementById('certStudentNameInput');
      const subjInput = document.getElementById('certSubjectInput');
      if (nameInput) nameInput.value = gState.studentName || 'Honored Student';
      if (subjInput) subjInput.value = currentCertSubject;

      document.getElementById('certificateModal').classList.remove('hidden');
      updateCertPreview();
    }

    function closeCertificateModal() {
      document.getElementById('certificateModal').classList.add('hidden');
    }

    function updateCertPreview() {
      const studentName = document.getElementById('certStudentNameInput').value;
      const subjectTitle = document.getElementById('certSubjectInput').value;
      gState.studentName = studentName;
      saveState();

      const rankTitle = gState.title || 'Curriculum Scholar';
      const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      const verCode = 'ET-MOE-2026-' + Math.random().toString(36).substring(2, 8).toUpperCase();

      drawCertificateCanvas(studentName, currentCertScore, subjectTitle, rankTitle, today, verCode);
    }

    function drawCertificateCanvas(studentName, score, subjectTitle, rankTitle, dateStr, verCode) {
      const canvas = document.getElementById('certCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = 1200;
      const h = 840;
      canvas.width = w;
      canvas.height = h;

      // Dark Academic Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#0a101d');
      bgGrad.addColorStop(0.5, '#070b14');
      bgGrad.addColorStop(1, '#05080f');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Outer Gold Border
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 10;
      ctx.strokeRect(20, 20, w - 40, h - 40);

      // Inner Ethiopian Blue Border
      ctx.strokeStyle = '#0D529C';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(32, 32, w - 64, h - 64);

      // Corner Ornaments
      const corners = [[32, 32], [w - 32, 32], [32, h - 32], [w - 32, h - 32]];
      ctx.fillStyle = '#FED100';
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Top National Tricolor Accent Ribbon
      const ribbonH = 8;
      const topY = 40;
      ctx.fillStyle = '#009A44';
      ctx.fillRect(40, topY, (w - 80) / 3, ribbonH);
      ctx.fillStyle = '#FED100';
      ctx.fillRect(40 + (w - 80) / 3, topY, (w - 80) / 3, ribbonH);
      ctx.fillStyle = '#EF3340';
      ctx.fillRect(40 + (2 * (w - 80)) / 3, topY, (w - 80) / 3, ribbonH);

      // Bottom National Tricolor Accent Ribbon
      const botY = h - 48;
      ctx.fillStyle = '#009A44';
      ctx.fillRect(40, botY, (w - 80) / 3, ribbonH);
      ctx.fillStyle = '#FED100';
      ctx.fillRect(40 + (w - 80) / 3, botY, (w - 80) / 3, ribbonH);
      ctx.fillStyle = '#EF3340';
      ctx.fillRect(40 + (2 * (w - 80)) / 3, botY, (w - 80) / 3, ribbonH);

      // Official Coat of Arms Emblem
      const crestX = w / 2;
      const crestY = 115;
      const crestR = 38;

      ctx.beginPath();
      ctx.arc(crestX, crestY, crestR, 0, Math.PI * 2);
      ctx.fillStyle = '#0D529C';
      ctx.fill();
      ctx.strokeStyle = '#FED100';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.strokeStyle = '#FED100';
      ctx.lineWidth = 2;
      for (let a = 0; a < 5; a++) {
        const angle = (a * 72 - 90) * Math.PI / 180;
        ctx.beginPath();
        ctx.moveTo(crestX, crestY);
        ctx.lineTo(crestX + Math.cos(angle) * (crestR - 4), crestY + Math.sin(angle) * (crestR - 4));
        ctx.stroke();
      }

      ctx.fillStyle = '#FED100';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outAngle = (i * 72 - 90) * Math.PI / 180;
        const inAngle = (i * 72 + 36 - 90) * Math.PI / 180;
        const x1 = crestX + Math.cos(outAngle) * (crestR * 0.7);
        const y1 = crestY + Math.sin(outAngle) * (crestR * 0.7);
        const x2 = crestX + Math.cos(inAngle) * (crestR * 0.32);
        const y2 = crestY + Math.sin(inAngle) * (crestR * 0.32);
        if (i === 0) ctx.moveTo(x1, y1);
        else ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.closePath();
      ctx.fill();

      // Header Typography
      ctx.textAlign = 'center';
      ctx.fillStyle = '#E2E8F0';
      ctx.font = 'bold 15px "Noto Sans Ethiopic", "Plus Jakarta Sans", sans-serif';
      ctx.fillText('የኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የትምህርት ሚኒስቴር', w / 2, 185);

      ctx.fillStyle = '#94A3B8';
      ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA • MINISTRY OF EDUCATION', w / 2, 206);

      ctx.fillStyle = '#D97706';
      ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('NATIONAL CURRICULUM EXAMINATION & MASTERY BOARD', w / 2, 224);

      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w / 2 - 250, 240);
      ctx.lineTo(w / 2 + 250, 240);
      ctx.stroke();

      // Certificate Title
      ctx.fillStyle = '#FED100';
      ctx.font = '900 28px "Space Grotesk", "Plus Jakarta Sans", sans-serif';
      ctx.fillText('CERTIFICATE OF ACADEMIC EXCELLENCE', w / 2, 280);

      ctx.fillStyle = '#10B981';
      ctx.font = 'bold 16px "Noto Sans Ethiopic", sans-serif';
      ctx.fillText('የላቀ የአካዳሚክ የብቃት ምስክር ወረቀት', w / 2, 306);

      ctx.fillStyle = '#94A3B8';
      ctx.font = 'italic 16px Georgia, serif';
      ctx.fillText('This official credential is proudly awarded to', w / 2, 350);

      // Student Name
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px "Space Grotesk", "Plus Jakarta Sans", sans-serif';
      const displayName = studentName && studentName.trim() ? studentName.trim() : 'Honored Student (የክብር ተማሪ)';
      ctx.fillText(displayName, w / 2, 400);

      const nameWidth = ctx.measureText(displayName).width;
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w / 2 - nameWidth / 2 - 20, 412);
      ctx.lineTo(w / 2 + nameWidth / 2 + 20, 412);
      ctx.stroke();

      ctx.fillStyle = '#CBD5E1';
      ctx.font = '15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('for demonstrating exceptional mastery in the Ethiopian National Curriculum for', w / 2, 450);

      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 20px "Plus Jakarta Sans", "Noto Sans Ethiopic", sans-serif';
      ctx.fillText(subjectTitle, w / 2, 482);

      // Score Box
      const boxW = 540;
      const boxH = 90;
      const boxX = w / 2 - boxW / 2;
      const boxY = 515;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.fillRect(boxX, boxY, boxW, boxH);
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(boxX, boxY, boxW, boxH);

      ctx.fillStyle = '#FED100';
      ctx.font = '900 24px "JetBrains Mono", monospace';
      ctx.fillText(\`MASTERY SCORE: \${score}%\`, w / 2, boxY + 36);

      ctx.fillStyle = '#E2E8F0';
      ctx.font = 'bold 14px "Plus Jakarta Sans", "Noto Sans Ethiopic", sans-serif';
      ctx.fillText(\`Academic Honor: \${rankTitle}\`, w / 2, boxY + 68);

      // Seals
      const sealX = 220;
      const sealY = 690;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 44, 0, Math.PI * 2);
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#D97706';
      ctx.font = 'bold 9px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('FDRE MINISTRY OF EDUCATION', sealX, sealY - 14);
      ctx.fillText('★ VERIFIED ★', sealX, sealY + 2);
      ctx.fillText('SQ3R PLATFORM', sealX, sealY + 18);

      const metaX = w - 240;
      const metaY = 675;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#64748B';
      ctx.font = '11px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Official Verification Code:', metaX, metaY);
      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 13px "JetBrains Mono", monospace';
      ctx.fillText(verCode, metaX, metaY + 20);
      ctx.fillStyle = '#94A3B8';
      ctx.font = '11px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(\`Issued: \${dateStr}\`, metaX, metaY + 42);
    }

    function downloadCertificateImage() {
      soundSuccess();
      const canvas = document.getElementById('certCanvas');
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = 'Ethiopian_Ministry_Curriculum_Certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('🎉 Certificate downloaded! Share it on Telegram or print it.');
    }

    function shareCertificateTelegram() {
      const shareUrl = window.location.href;
      const text = encodeURIComponent(\`🎓 I achieved \${currentCertScore}% mastery in the Ethiopian National Curriculum platform! Try it for Grade 7 & 8 Ministry Exam preparation:\`);
      window.open(\`https://t.me/share/url?url=\${encodeURIComponent(shareUrl)}&text=\${text}\`, '_blank');
    }

    // =========================================================================
    // PRINTABLE 1-PAGE SUMMARY (CHEAT SHEET GENERATOR)
    // =========================================================================
    function printCurrentUnitSummary() {
      const st = getActiveSubtopic();
      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      const meta = SUBJECT_METADATA[gState.activeSubject] || { am: '', name: sub.name };
      
      const printWindow = window.open('', '_blank');
      printWindow.document.write(\`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>\${meta.name} • \${st.code} \${st.title} Summary</title>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; color: #111; margin: 24px; line-height: 1.45; font-size: 13px; }
            .header { border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; }
            .title { font-size: 18px; font-weight: 900; }
            .subtitle { font-size: 12px; color: #555; }
            .box { border: 1px solid #333; padding: 10px; margin-bottom: 12px; border-radius: 6px; }
            .box-title { font-size: 11px; font-weight: 800; text-transform: uppercase; margin-bottom: 4px; color: #0D529C; }
            .formula { background: #f4f4f4; padding: 8px; font-family: monospace; font-weight: bold; border-left: 4px solid #D97706; margin: 8px 0; }
            .step { margin-bottom: 6px; }
            .step-label { font-weight: bold; color: #009A44; }
            .trap { background: #fff8f0; border-left: 4px solid #EF3340; padding: 8px; border-radius: 4px; }
            @media print { button { display: none; } body { margin: 12px; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="title">\${meta.name} (\${meta.am}) • \${st.code} \${st.title}</div>
              <div class="subtitle">Ethiopian National Curriculum • Grade \${gState.grade} • CBA Mastery Pocket Summary</div>
            </div>
            <button onclick="window.print()" style="padding: 6px 14px; cursor: pointer; font-weight: bold; background: #0D529C; color: #fff; border: none; border-radius: 4px;">Print / Save PDF</button>
          </div>

          <div class="box">
            <div class="box-title">1. High-Level Architectural Blueprint</div>
            <p>\${st.survey.blueprint}</p>
            \${st.survey.keyFormulas ? \`<div class="formula">Core Formula: \${st.survey.keyFormulas}</div>\` : ''}
          </div>

          <div class="box">
            <div class="box-title">2. Curriculum Notes & Derivations</div>
            <div>\${st.coreNotes}</div>
          </div>

          <div class="box">
            <div class="box-title">3. Standard Worked Example: \${st.example.title}</div>
            <p><strong>Problem:</strong> \${st.example.problem}</p>
            <div style="margin-top: 6px;">
              \${st.example.steps.map(s => \`<div class="step"><span class="step-label">\${s.label}:</span> \${s.text}</div>\`).join('')}
            </div>
            \${st.example.proTip ? \`<div style="margin-top: 6px; font-size: 11px; color: #444;"><em>Pro-Tip:</em> \${st.example.proTip}</div>\` : ''}
          </div>

          <div class="trap">
            <strong>⚠️ Exam Pitfall & Retention Rule:</strong>
            \${st.amtQuiz && st.amtQuiz[0] ? st.amtQuiz[0].trap : 'Review formulas and avoid skipping derivation steps.'}
          </div>
        </body>
        </html>
      \`);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => printWindow.print(), 350);
    }

    // =========================================================================
    // PWA INSTALL PROMPT
    // =========================================================================
    let deferredPwaPrompt = null;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPwaPrompt = e;
      const pwaBanner = document.getElementById('pwaInstallBanner');
      if (pwaBanner && !localStorage.getItem('pwa_dismissed')) {
        pwaBanner.classList.remove('hidden');
      }
    });

    function installPwaApp() {
      if (deferredPwaPrompt) {
        deferredPwaPrompt.prompt();
        deferredPwaPrompt.userChoice.then(() => {
          deferredPwaPrompt = null;
          document.getElementById('pwaInstallBanner').classList.add('hidden');
        });
      } else {
        showToast('To install: Tap browser menu (⋮ or Share ⎋) and choose "Add to Home Screen" 📲');
      }
    }

    function dismissPwaBanner() {
      const pwaBanner = document.getElementById('pwaInstallBanner');
      if (pwaBanner) pwaBanner.classList.add('hidden');
      localStorage.setItem('pwa_dismissed', 'true');
    }

    // =========================================================================
    // CURRICULUM SYLLABUS MATRIX VIEW (EXHAUSTIVE)
    // =========================================================================
    function renderCurriculumMatrix() {
      const container = document.getElementById('curriculumMatrixContainer') || document.getElementById('matrixUnitsContainer');
      if (!container) return;

      const subjects = GALACTIC_DATABASE[gState.grade];
      container.innerHTML = '';

      Object.values(subjects).forEach(sub => {
        const subCard = document.createElement('div');
        subCard.className = 'glass-card p-6 rounded-2xl border border-slate-800 space-y-4';
        const meta = SUBJECT_METADATA[sub.id] || { am: '', name: sub.name, icon: sub.icon };

        let subtopicsHtml = '';
        sub.units.forEach(u => {
          subtopicsHtml += \`
            <div class="mt-4 pt-4 border-t border-slate-800/80">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-black text-emerald-400">\${u.number}: \${u.title}</span>
                <span class="text-[10px] text-slate-500">\${u.subtopics.length} Subtopics</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          \`;

          u.subtopics.forEach(st => {
            const mastered = isSubtopicMastered(st.id);
            const unlocked = isSubtopicUnlocked(st.id, sub.id, gState.grade);
            const isCurrent = st.id === gState.activeSubtopicId && sub.id === gState.activeSubject;
            const score = getSubtopicScore(st.id);

            let statusBadge = '';
            let cardBg = '';

            if (mastered) {
              statusBadge = \`<span class="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">⭐ Mastered (\${score}%)</span>\`;
              cardBg = 'bg-amber-950/20 border-amber-500/40 hover:border-amber-400';
            } else if (isCurrent) {
              statusBadge = \`<span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">📖 Active</span>\`;
              cardBg = 'bg-emerald-950/40 border-emerald-500/50 hover:border-emerald-400';
            } else if (unlocked) {
              statusBadge = \`<span class="text-[10px] font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">🔓 Ready</span>\`;
              cardBg = 'bg-space-900 border-slate-800 hover:border-emerald-500';
            } else {
              statusBadge = \`<span class="text-[10px] font-bold text-slate-500 bg-space-950 px-2 py-0.5 rounded border border-slate-800">🔒 Locked</span>\`;
              cardBg = 'bg-space-950/50 border-slate-850 opacity-60';
            }

            subtopicsHtml += \`
              <div onclick="jumpToSubtopic('\${sub.id}', '\${u.id}', '\${st.id}')" class="p-3 rounded-xl border \${cardBg} cursor-pointer transition space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="font-mono text-xs font-bold text-white">\${st.code}</span>
                  \${statusBadge}
                </div>
                <h5 class="text-xs font-medium text-slate-300 leading-snug">\${st.title}</h5>
              </div>
            \`;
          });

          subtopicsHtml += \`
              </div>
            </div>
          \`;
        });

        subCard.innerHTML = \`
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <span class="text-2xl">\${meta.icon}</span>
              <div>
                <h4 class="text-base sm:text-lg font-black text-white font-display">\${meta.name} (\${meta.am})</h4>
                <p class="text-xs text-slate-400">\${sub.units.length} Units • Complete Ethiopian Syllabus</p>
              </div>
            </div>
            <button onclick="selectSubject('\${sub.id}')" class="px-3.5 py-1.5 rounded-xl bg-space-850 border border-slate-700 text-xs font-bold text-emerald-300 hover:text-white transition">Study Subject →</button>
          </div>
          \${subtopicsHtml}
        \`;

        container.appendChild(subCard);
      });
    }

    function jumpToSubtopic(subId, unitId, stId) {
      if (!isSubtopicUnlocked(stId, subId, gState.grade)) {
        soundError();
        showToast('🔒 ACCESS LOCKED: Complete prerequisite levels first before entering this topic!');
        return;
      }

      soundClick();
      gState.activeSubject = subId;
      gState.activeUnitId = unitId;
      gState.activeSubtopicId = stId;
      gState.currentStep = 'survey';
      saveState();

      renderSubjectPills();
      populateDropdowns();
      renderActiveUnitView();
      switchTab('sq3r');
    }

    // =========================================================================
    // WORKED EXAMPLES VAULT
    // =========================================================================
    function renderVault(searchTerm = '') {
      const container = document.getElementById('vaultExamplesList') || document.getElementById('vaultItemsContainer');
      if (!container) return;

      const subjects = GALACTIC_DATABASE[gState.grade];
      const allExamples = [];

      Object.values(subjects).forEach(sub => {
        sub.units.forEach(u => {
          u.subtopics.forEach(st => {
            if (st.example) {
              allExamples.push({
                subjectName: sub.name,
                subjectIcon: sub.icon,
                unitTitle: u.title,
                subCode: st.code,
                example: st.example,
                subtopicId: st.id,
                unitId: u.id,
                subjectId: sub.id
              });
            }
          });
        });
      });

      const filtered = allExamples.filter(item => {
        const term = searchTerm.toLowerCase();
        return item.subjectName.toLowerCase().includes(term) ||
               item.unitTitle.toLowerCase().includes(term) ||
               item.example.title.toLowerCase().includes(term) ||
               item.example.problem.toLowerCase().includes(term);
      });

      container.innerHTML = filtered.map(item => \`
        <div class="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-slate-700 transition">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              \${item.subjectIcon} \${item.subjectName} • \${item.subCode} \${item.unitTitle}
            </span>
            <button onclick="jumpToSubtopic('\${item.subjectId}', '\${item.unitId}', '\${item.subtopicId}')" class="text-[11px] font-bold text-amber-400 hover:underline">
              Go to SQ3R Topic →
            </button>
          </div>

          <h4 class="text-sm sm:text-base font-black text-white">\${item.example.title}</h4>
          <p class="text-xs font-mono text-slate-300 bg-space-950 p-3 rounded-xl border border-slate-800 leading-relaxed">\${item.example.problem}</p>

          <div class="space-y-2 pt-1">
            \${item.example.steps.map(step => \`
              <div class="p-3 rounded-xl bg-space-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                <span class="font-bold text-emerald-400">\${step.label}:</span>
                <p class="text-slate-300">\${step.text}</p>
              </div>
            \`).join('')}
          </div>

          \${item.example.proTip ? \`
            <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
              <span class="text-sm">⚠️</span>
              <span><strong>Pro-Tip:</strong> \${item.example.proTip}</span>
            </div>
          \` : ''}
        </div>
      \`).join('');
    }

    function filterVault(term) {
      renderVault(term);
    }

    // =========================================================================
    // AMT EXAM SIMULATOR TAB
    // =========================================================================
    let allSimQuestions = [];

    function renderAmtExam() {
      const container = document.getElementById('amtExamQuestionsList') || document.getElementById('amtSimulatorContainer');
      if (!container) return;

      const sub = GALACTIC_DATABASE[gState.grade][gState.activeSubject];
      allSimQuestions = [];

      sub.units.forEach(u => {
        u.subtopics.forEach(st => {
          if (st.amtQuiz) {
            st.amtQuiz.forEach(q => {
              allSimQuestions.push({
                ...q,
                unitNumber: u.number,
                subCode: st.code,
                topicTitle: st.title
              });
            });
          }
        });
      });

      container.innerHTML = \`
        <div class="p-5 sm:p-6 rounded-2xl glass-card border border-emerald-500/30 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">NATIONAL CURRICULUM AMT EXAM ENGINE</span>
              <h3 class="text-lg sm:text-xl font-black text-white">\${sub.name} Diagnostic & Preparation Arena</h3>
            </div>
            <span class="text-xs font-mono text-emerald-400 font-bold bg-space-950 px-3 py-1 rounded-lg border border-slate-800">
              \${allSimQuestions.length} Questions Bank
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300">
            Every question simulates national exam standards with instant step-by-step mathematical reasoning, traps, and shortcuts.
          </p>
        </div>

        <div class="space-y-6">
          \${allSimQuestions.map((qItem, idx) => \`
            <div class="p-5 sm:p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-4" id="amtSimCard-\${idx}">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="text-xs font-mono font-bold text-slate-400">\${qItem.unitNumber} • \${qItem.subCode} \${qItem.topicTitle}</span>
                <span class="text-xs font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">AMT Question #\${idx+1}</span>
              </div>
              <h4 class="text-sm sm:text-base font-bold text-white leading-relaxed">\${qItem.q}</h4>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                \${qItem.options.map((opt, optIdx) => \`
                  <button onclick="revealAmtSimAnswer(\${idx}, \${optIdx}, \${qItem.correct})" id="amtSimBtn-\${idx}-\${optIdx}" class="quiz-option-btn p-3.5 rounded-xl bg-space-950 border border-slate-800 text-left text-xs sm:text-sm text-slate-300 font-medium hover:border-emerald-500 hover:text-white transition flex items-center gap-3">
                    <span class="w-7 h-7 rounded-lg bg-space-850 text-slate-400 border border-slate-700/60 flex items-center justify-center font-bold text-xs shrink-0">\${['A','B','C','D'][optIdx]}</span>
                    <span class="leading-snug">\${opt}</span>
                  </button>
                \`).join('')}
              </div>

              <div id="amtSimExp-\${idx}" class="hidden mt-4">
                <!-- Dynamically populated baby-step solution -->
              </div>
            </div>
          \`).join('')}
        </div>
      \`;
    }

    function revealAmtSimAnswer(qIdx, optIdx, correctIdx) {
      const exp = document.getElementById(\`amtSimExp-\${qIdx}\`);
      const item = allSimQuestions[qIdx];

      [0,1,2,3].forEach(i => {
        const b = document.getElementById(\`amtSimBtn-\${qIdx}-\${i}\`);
        if (b) {
          b.onclick = null;
          if (i === correctIdx) {
            b.className = 'p-3.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-left text-xs sm:text-sm text-emerald-200 font-bold flex items-center gap-3 shadow-lg shadow-emerald-500/20';
            b.innerHTML = \`<span class="w-7 h-7 rounded-lg bg-emerald-500/30 text-emerald-300 border border-emerald-500/50 flex items-center justify-center font-black text-xs shrink-0">✔</span> <span class="leading-snug">\${item.options[i]}</span>\`;
          } else if (i === optIdx && optIdx !== correctIdx) {
            b.className = 'p-3.5 rounded-xl bg-rose-950/80 border-2 border-rose-500 text-left text-xs sm:text-sm text-rose-300 font-bold flex items-center gap-3 shadow-lg shadow-rose-500/20';
            b.innerHTML = \`<span class="w-7 h-7 rounded-lg bg-rose-500/30 text-rose-300 border border-rose-500/50 flex items-center justify-center font-black text-xs shrink-0">✖</span> <span class="leading-snug">\${item.options[i]}</span>\`;
          } else {
            b.className = 'p-3.5 rounded-xl bg-space-950/40 border border-slate-800/60 text-left text-xs sm:text-sm text-slate-500 opacity-50 flex items-center gap-3';
          }
        }
      });

      if (exp && item) {
        exp.innerHTML = buildBabyStepSolutionHtml(item, optIdx, qIdx, allSimQuestions.length, true);
        exp.classList.remove('hidden');
      }

      if (optIdx === correctIdx) {
        soundSuccess();
        addXp(25, 'AMT Solver');
      } else {
        soundError();
      }
    }

    // =========================================================================
    // TROPHY ROOM & ACADEMIC HONORS
    // =========================================================================
    function renderTrophyRoom() {
      const bContainer = document.getElementById('badgesGrid') || document.getElementById('trophyBadgesContainer');
      if (bContainer) {
        bContainer.innerHTML = NATIONAL_BADGES.map(b => {
          const isUnlocked = gState.unlockedBadges.includes(b.id);
          return \`
            <div class="p-4 rounded-2xl \${isUnlocked ? 'glass-crest border-amber-500/40' : 'bg-space-950/60 border-slate-800 opacity-50'} border text-center space-y-2">
              <div class="text-3xl">\${b.icon}</div>
              <h5 class="text-xs font-black text-white">\${b.name}</h5>
              <p class="text-[11px] text-slate-400 leading-tight">\${b.desc}</p>
              <span class="inline-block text-[10px] font-bold px-2 py-0.5 rounded \${isUnlocked ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}">
                \${isUnlocked ? 'Unlocked ✔' : 'Locked 🔒'}
              </span>
            </div>
          \`;
        }).join('');
      }

      const shopContainer = document.getElementById('shopItemsGrid');
      if (shopContainer) {
        shopContainer.innerHTML = SHOP_ITEMS.map(item => \`
          <div class="glass-card p-4 rounded-2xl border border-slate-800 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-3xl">\${item.item}</span>
              <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                \${item.cost} 💎
              </span>
            </div>
            <h5 class="text-xs font-black text-white">\${item.name}</h5>
            <p class="text-[11px] text-slate-400 leading-snug">\${item.desc}</p>
            <button onclick="purchaseAvatar('\${item.item}', \${item.cost})" class="w-full py-1.5 rounded-xl bg-space-850 hover:bg-emerald-600/30 text-xs font-bold text-emerald-300 border border-emerald-500/30 transition">
              Equip Avatar
            </button>
          </div>
        \`).join('');
      }
    }

    function purchaseAvatar(icon, cost) {
      if (gState.gems < cost) {
        soundError();
        showToast('Not enough gems! Complete more SQ3R levels to earn diamonds 💎');
        return;
      }
      soundSuccess();
      gState.gems -= cost;
      gState.avatar = icon;
      saveState();
      showToast(\`Avatar updated to \${icon}!\`);
    }

    function claimDailyReward() {
      soundSuccess();
      addXp(60, 'Daily Study Stipend');
      addGems(75);
      triggerConfetti();
      showToast('🎁 Daily National Study Stipend Claimed! (+75 💎 & +60 XP)');
    }

    // =========================================================================
    // ANALYTICS & MASTERY CALCULATOR
    // =========================================================================
    function renderAnalytics() {
      for (const grade of [7, 8]) {
        const container = document.getElementById(\`g\${grade}MasteryList\`);
        if (!container) continue;

        const subjects = GALACTIC_DATABASE[grade];
        let html = '';

        Object.values(subjects).forEach(sub => {
          const allSt = getAllSubtopicsForSubject(grade, sub.id);
          const masteredCount = allSt.filter(st => isSubtopicMastered(st.id)).length;
          const pct = allSt.length > 0 ? Math.round((masteredCount / allSt.length) * 100) : 0;
          const meta = SUBJECT_METADATA[sub.id] || { am: '', name: sub.name, icon: sub.icon };

          html += \`
            <div class="p-3 rounded-xl bg-space-950 border border-slate-800 space-y-1.5">
              <div class="flex items-center justify-between text-xs font-bold">
                <span class="flex items-center gap-1.5 text-white">
                  <span>\${meta.icon}</span> <span>\${meta.name}</span> <span class="text-[10px] text-slate-500">(\${meta.am})</span>
                </span>
                <span class="font-mono text-emerald-400">\${masteredCount} / \${allSt.length} (\${pct}%)</span>
              </div>
              <div class="w-full h-1.5 bg-slate-850 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" style="width: \${pct}%;"></div>
              </div>
            </div>
          \`;
        });

        container.innerHTML = html;
      }
    }

    // =========================================================================
    // TAB NAVIGATION
    // =========================================================================
    function switchTab(tabId) {
      soundClick();
      const tabMap = {
        'sq3r': 'view-sq3r',
        'exam-hall': 'view-exam-hall',
        'curriculum': 'view-curriculum',
        'matrix': 'view-curriculum',
        'amt-exam': 'view-amt-exam',
        'amt': 'view-amt-exam',
        'vault': 'view-vault',
        'rewards': 'view-rewards',
        'analytics': 'view-analytics'
      };

      const btnMap = {
        'sq3r': 'tabBtn-sq3r',
        'exam-hall': 'tabBtn-exam-hall',
        'curriculum': 'tabBtn-curriculum',
        'matrix': 'tabBtn-curriculum',
        'amt-exam': 'tabBtn-amt-exam',
        'amt': 'tabBtn-amt-exam',
        'vault': 'tabBtn-vault',
        'rewards': 'tabBtn-rewards',
        'analytics': 'tabBtn-analytics'
      };

      const activeViewId = tabMap[tabId] || 'view-sq3r';

      ['view-sq3r', 'view-exam-hall', 'view-curriculum', 'view-amt-exam', 'view-vault', 'view-rewards', 'view-analytics'].forEach(vId => {
        const el = document.getElementById(vId);
        if (el) el.style.display = vId === activeViewId ? 'block' : 'none';
      });

      ['tabBtn-sq3r', 'tabBtn-exam-hall', 'tabBtn-curriculum', 'tabBtn-amt-exam', 'tabBtn-vault', 'tabBtn-rewards', 'tabBtn-analytics'].forEach(bId => {
        const btn = document.getElementById(bId);
        if (btn) {
          if (bId === btnMap[tabId]) {
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap';
          } else if (bId === 'tabBtn-exam-hall') {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 whitespace-nowrap shadow-md shadow-amber-500/10';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap';
          }
        }
      });

      if (tabId === 'curriculum' || tabId === 'matrix') renderCurriculumMatrix();
      if (tabId === 'vault') renderVault();
      if (tabId === 'amt-exam' || tabId === 'amt') renderAmtExam();
      if (tabId === 'rewards') renderTrophyRoom();
      if (tabId === 'sq3r') renderLevelMap();
      if (tabId === 'analytics') renderAnalytics();
    }

    function exportStateData() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gState, null, 2));
      const dl = document.createElement('a');
      dl.setAttribute("href", dataStr);
      dl.setAttribute("download", "ethiopia_cba_sq3r_state.json");
      dl.click();
    }

    function renderHeaderStats() {
      const nextLevelXp = gState.level * 250;
      const prevLevelXp = (gState.level - 1) * 250;
      const cur = Math.max(0, gState.xp - prevLevelXp);
      const needed = nextLevelXp - prevLevelXp;
      const pct = Math.min(100, Math.round((cur / needed) * 100));

      document.getElementById('streakCount').innerText = gState.streak;
      document.getElementById('gemCount').innerText = gState.gems;
      document.getElementById('userAvatarIcon').innerText = gState.avatar;
      document.getElementById('levelTitle').innerText = \`Lvl \${gState.level} • \${gState.title}\`;
      document.getElementById('xpDisplay').innerText = \`\${gState.xp} / \${nextLevelXp} XP\`;
      document.getElementById('xpProgressBar').style.width = \`\${pct}%\`;

      if (document.getElementById('statTotalXp')) {
        document.getElementById('statTotalXp').innerText = gState.xp;
        document.getElementById('statStreak').innerText = \`\${gState.streak} Days\`;
        document.getElementById('statCardsMastered').innerText = gState.totalCardsMastered;
        document.getElementById('statQuizzesDone').innerText = gState.totalQuizzesDone;
        document.getElementById('trophyGems').innerText = \`\${gState.gems} 💎\`;
        document.getElementById('trophyAvatarBig').innerText = gState.avatar;
        document.getElementById('trophyTitleBig').innerText = \`\${gState.title} (Level \${gState.level})\`;
        document.getElementById('trophyBadgeCount').innerText = \`\${gState.unlockedBadges.length} / \${NATIONAL_BADGES.length}\`;
      }
    }

    // =========================================================================
    // POMODORO TIMER
    // =========================================================================
    let pomoSeconds = 25 * 60;
    let pomoInterval = null;
    let isPomoRunning = false;

    function togglePomodoro() {
      if (isPomoRunning) {
        clearInterval(pomoInterval);
        isPomoRunning = false;
        document.getElementById('pomoIcon').innerText = '⏳';
        showToast('Pomodoro timer paused.');
      } else {
        isPomoRunning = true;
        document.getElementById('pomoIcon').innerText = '🔥';
        showToast('25-minute focused study session started! Focus on your notes.');
        pomoInterval = setInterval(() => {
          if (pomoSeconds > 0) {
            pomoSeconds--;
            const m = Math.floor(pomoSeconds / 60).toString().padStart(2, '0');
            const s = (pomoSeconds % 60).toString().padStart(2, '0');
            document.getElementById('pomoTime').innerText = \`\${m}:\${s}\`;
          } else {
            clearInterval(pomoInterval);
            isPomoRunning = false;
            pomoSeconds = 25 * 60;
            document.getElementById('pomoIcon').innerText = '⏳';
            document.getElementById('pomoTime').innerText = '25:00';
            soundLevelUp();
            triggerConfetti();
            addXp(50, 'Pomodoro Completed');
            showToast('🎉 Pomodoro Completed! Great focus session. Take a 5-min break.');
          }
        }, 1000);
      }
    }

    // =========================================================================
    // INITIALIZATION & KEYBOARD SHORTCUTS
    // =========================================================================
    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById('gateBypassToggle').checked = gState.gateBypass;
      setGrade(gState.grade);
      setSq3rStep(gState.currentStep);
      renderHeaderStats();
      renderAnalytics();
    });

    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      // Space flips flashcard in Stage 4
      if (e.code === 'Space' && gState.currentStep === 'recite') {
        e.preventDefault();
        flipFlashcard();
      }
      if (e.code === 'ArrowRight' && gState.currentStep === 'recite') {
        e.preventDefault();
        nextFlashcard();
      }
      if (e.code === 'ArrowLeft' && gState.currentStep === 'recite') {
        e.preventDefault();
        prevFlashcard();
      }

      if (gState.currentStep === 'review') {
        const key = e.key.toUpperCase();
        const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
        if (keyMap[key] !== undefined) {
          const st = getActiveSubtopic();
          const qList = st.amtQuiz || [];
          const unansweredIdx = qList.findIndex((_, idx) => !currentQuizAnswers[idx]);
          if (unansweredIdx !== -1) {
            answerAmtQuiz(unansweredIdx, keyMap[key]);
          }
        }
      }
    });
  </script>
</body>
</html>
\`;

// 3. Write index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
console.log('Successfully written enhanced authentic index.html! Size: ' + (htmlContent.length / 1024).toFixed(1) + ' KB');

// 4. Mirror to Desktop
const desktopPath1 = 'C:\\\\Users\\\\Dagi 3\\\\Desktop\\\\Grade_7_and_8_SQ3R_Master_Platform.html';
const desktopPath2 = 'C:\\\\Users\\\\Dagi 3\\\\Desktop\\\\Grade_7_SQ3R_Master_App.html';

fs.writeFileSync(desktopPath1, htmlContent, 'utf8');
fs.writeFileSync(desktopPath2, htmlContent, 'utf8');
console.log('Successfully mirrored to ' + desktopPath1);
console.log('Successfully mirrored to ' + desktopPath2);
`;

fs.writeFileSync(path.join(__dirname, '..', 'build_authentic_master_app.js'), builderCode, 'utf8');
console.log('Updated build_authentic_master_app.js successfully!');
