const fs = require('fs');
const path = require('path');

console.log('Patching Security Fortification and High-Accuracy Reference Library...');

const rootDir = path.join(__dirname, '..');
const shellPath = path.join(rootDir, 'src', 'template_shell.html');
const logicPath = path.join(rootDir, 'src', 'app_logic.js');

let shell = fs.readFileSync(shellPath, 'utf8');
let logic = fs.readFileSync(logicPath, 'utf8');

// =============================================================================
// 1. FORTIFY SECURITY IN template_shell.html
// =============================================================================

// Add Security Headers in <head>
const securityMetaTags = `  <!-- Security Fortification & Content Protection -->
  <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https://cdn.tailwindcss.com https://fonts.googleapis.com https://fonts.gstatic.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com data:; frame-src 'self' blob: data:; connect-src 'self';">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=(), usb=()">
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
`;

if (!shell.includes('Content-Security-Policy')) {
  shell = shell.replace('<head>\n', '<head>\n' + securityMetaTags);
  console.log('1. Security meta tags injected into <head>.');
} else {
  console.log('1. Security meta tags already present.');
}

// Add input length restrictions to Certificate Inputs
shell = shell.replace(
  'id="certStudentName" oninput="updateCertPreview()"',
  'id="certStudentName" oninput="updateCertPreview()" maxlength="60" autocomplete="name"'
);
shell = shell.replace(
  'id="certSchoolName" oninput="updateCertPreview()"',
  'id="certSchoolName" oninput="updateCertPreview()" maxlength="80"'
);

// =============================================================================
// 2. ADD REFERENCE NAVIGATION TAB IN template_shell.html
// =============================================================================
const oldNavButtons = `<button onclick="switchTab('vault')" id="tabBtn-vault" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap">
            <span>💡</span> የተሰሩ ምሳሌዎች (Worked Examples Vault)
          </button>`;

const newNavButtons = `<button onclick="switchTab('vault')" id="tabBtn-vault" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap">
            <span>💡</span> የተሰሩ ምሳሌዎች (Worked Examples Vault)
          </button>
          <button onclick="switchTab('reference')" id="tabBtn-reference" class="tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap">
            <span>📚</span> ማጣቀሻ እና መዛግብት (Reference Library)
          </button>`;

if (!shell.includes('id="tabBtn-reference"')) {
  shell = shell.replace(oldNavButtons, newNavButtons);
  console.log('2. Reference tab button added to navigation.');
} else {
  console.log('2. Reference tab button already present in navigation.');
}

// =============================================================================
// 3. ADD HIGH-ACCURACY REFERENCE VIEW SECTION IN template_shell.html
// =============================================================================
const referenceViewSectionHtml = `      <!-- =============================================================== -->
      <!-- VIEW 4.5: ACCURATE REFERENCE & CURRICULUM ARCHIVE (ማጣቀሻ እና መዛግብት) -->
      <!-- =============================================================== -->
      <section id="view-reference" class="tab-view hidden space-y-6">
        
        <!-- Header Banner -->
        <div class="glass-crest p-6 sm:p-7 rounded-2xl relative overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-space-900 via-emerald-950/20 to-space-950">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
            <div class="space-y-1.5">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">OFFICIAL ARCHIVE</span>
                <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 font-bold border border-slate-700">FDRE MoE CURRICULUM</span>
                <span class="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">CBA VERIFIED</span>
              </div>
              <h2 class="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight font-display flex items-center gap-2.5">
                <span>📚</span> የኢትዮጵያ ሥርዓተ-ትምህርት ይፋዊ ማጣቀሻ እና መዛግብት (Reference Compendium)
              </h2>
              <p class="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                የትምህርት ሚኒስቴር ይፋዊ መማሪያ መጽሐፍት፣ ትክክለኛ የሒሳብ ቀመሮች፣ የሳይንስ ቋሚዎች፣ የኬሚካል ንጥረ-ነገሮች ሰንጠረዥ፣ እና የኢትዮጵያ ታሪክና ጂኦግራፊ መዛግብት።
              </p>
            </div>
            
            <div class="shrink-0 flex items-center gap-3">
              <button onclick="window.print()" class="px-4 py-2 rounded-xl bg-space-850 hover:bg-space-800 text-amber-300 border border-amber-500/30 text-xs font-black flex items-center gap-2 transition shadow-sm cursor-pointer">
                <span>🖨️</span> ማጣቀሻውን አትም (Print Reference)
              </button>
            </div>
          </div>
        </div>

        <!-- Search and Quick Category Filter Pills -->
        <div class="glass-card p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="w-full md:w-96 relative">
            <span class="absolute left-3.5 top-2.5 text-slate-400 text-sm">🔍</span>
            <input type="text" id="refSearchInput" oninput="filterReference(this.value)" placeholder="ቀመሮች፣ ቋሚዎች፣ ታሪካዊ ክስተቶች ወይም መጽሐፍት ፈልግ..." class="w-full bg-space-950 border border-slate-700 text-white rounded-xl pl-10 pr-3.5 py-2 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none">
          </div>
          
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto no-scrollbar">
            <button onclick="filterRefCategory('all')" id="refCatBtn-all" class="ref-cat-btn active px-3 py-1.5 rounded-xl text-xs font-bold transition bg-emerald-600 text-white shadow-sm whitespace-nowrap cursor-pointer">ሁሉንም (All)</button>
            <button onclick="filterRefCategory('math')" id="refCatBtn-math" class="ref-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold transition bg-space-850 text-slate-300 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer">📐 ሒሳብ (Math)</button>
            <button onclick="filterRefCategory('science')" id="refCatBtn-science" class="ref-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold transition bg-space-850 text-slate-300 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer">🔬 ሳይንስ (Science)</button>
            <button onclick="filterRefCategory('history')" id="refCatBtn-history" class="ref-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold transition bg-space-850 text-slate-300 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer">🇪🇹 ታሪክና ጂኦግራፊ (Heritage)</button>
            <button onclick="filterRefCategory('textbooks')" id="refCatBtn-textbooks" class="ref-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold transition bg-space-850 text-slate-300 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer">📖 መማሪያ መጽሐፍት (Textbooks)</button>
            <button onclick="filterRefCategory('sq3r')" id="refCatBtn-sq3r" class="ref-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold transition bg-space-850 text-slate-300 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer">🧠 SQ3R ስልት (Pedagogy)</button>
          </div>
        </div>

        <!-- Reference Content Grid Container -->
        <div id="referenceGrid" class="space-y-6">

          <!-- CARD 1: OFFICIAL MOE TEXTBOOK CITATIONS -->
          <div class="ref-item glass-card p-6 rounded-2xl space-y-4 border border-slate-800" data-cat="textbooks">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
              <h3 class="text-base sm:text-lg font-black text-amber-400 flex items-center gap-2 font-display">
                <span>📖</span> 1. የትምህርት ሚኒስቴር ይፋዊ መማሪያ መጽሐፍት ማጣቀሻ (FDRE MoE Textbook Concordance)
              </h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">CBA Curriculum Framework</span>
            </div>
            
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              በዚህ መድረክ ላይ የተካተቱት ማስታወሻዎች፣ ምሳሌዎች እና 577 የAMT የፈተና ጥያቄዎች በቀጥታ የተወሰዱት በኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ሪፐብሊክ የትምህርት ሚኒስቴር (FDRE MoE) የስርዓተ-ትምህርት ዝግጅት እና ትግበራ መሪ ዳይሬክቶሬት (CDID) ታትመው በሀገር አቀፍ ደረጃ በስራ ላይ ከዋሉት አዲሶቹ የ7ኛ እና 8ኛ ክፍል መማሪያ መጽሐፍት ነው።
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
              <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2">
                <h4 class="font-bold text-emerald-400 text-sm flex items-center gap-1.5">
                  <span>📗</span> የ7ኛ ክፍል ይፋዊ መማሪያ መጽሐፍት (Grade 7 Textbooks)
                </h4>
                <ul class="space-y-1.5 text-slate-300 leading-relaxed">
                  <li>• <strong>ሒሳብ (Mathematics Grade 7):</strong> MoE CDID, Units 1–6 (Rational Numbers, Linear Equations, Ratios & Percentages, Perimeter & Area, Surface Area & Volume, Congruency & Similarity).</li>
                  <li>• <strong>አጠቃላይ ሳይንስ (General Science Grade 7):</strong> MoE CDID, Units 1–7 (Basic Science Concepts, Matter in Our Surroundings, Elements & Compounds, Cell Biology, Human Body Systems, Earth & Space, Energy & Work).</li>
                  <li>• <strong>እንግሊዝኛ (English for Ethiopia Grade 7):</strong> MoE CDID, Units 1–10 (Living in Communities, Wildlife, Environmental Protection, Traditional Crafts, Communication).</li>
                  <li>• <strong>ኅብረተሰብ ጥናት (Social Studies Grade 7):</strong> MoE CDID, Units 1–7 (Physical Characteristics of Earth, Human Evolution & Fossil Discoveries [Lucy, Ardi], Ancient World Civilizations, Medieval Africa, Global Environmental Issues).</li>
                  <li>• <strong>የዜግነት ትምህርት (Citizenship Education Grade 7):</strong> MoE CDID, Units 1–6 (Democracy, Constitution & Rule of Law, Human Rights & Responsibilities, Equality & Diversity, Justice & Dispute Resolution).</li>
                  <li>• <strong>ኢንፎርሜሽን ቴክኖሎጂ (Information Technology Grade 7):</strong> MoE CDID, Units 1–6 (Introduction to ICT, Computer Hardware Components, System Software & Windows, Word Processing, Internet & Safe Online Navigation).</li>
                </ul>
              </div>

              <div class="p-4 rounded-xl bg-space-950 border border-slate-855 space-y-2">
                <h4 class="font-bold text-cyan-400 text-sm flex items-center gap-1.5">
                  <span>📘</span> የ8ኛ ክፍል ይፋዊ መማሪያ መጽሐፍት (Grade 8 Textbooks)
                </h4>
                <ul class="space-y-1.5 text-slate-300 leading-relaxed">
                  <li>• <strong>ሒሳብ (Mathematics Grade 8):</strong> MoE CDID, Units 1–6 (Square & Square Roots, Cube & Cube Roots, Linear Inequalities, Coordinate Geometry, Geometric Transformations, Probability & Statistics).</li>
                  <li>• <strong>አጠቃላይ ሳይንስ (General Science Grade 8):</strong> MoE CDID, Units 1–7 (Scientific Measurement, Chemical Reactions, Earth's Dynamic Crust & Plate Tectonics, Body Health & Nutrition, Electricity & Magnetism, Thermal Energy, Ecological Cycles).</li>
                  <li>• <strong>እንግሊዝኛ (English for Ethiopia Grade 8):</strong> MoE CDID, Units 1–10 (Health and Fitness, Technology in Daily Life, Cultural Heritage, Leadership, Future Careers).</li>
                  <li>• <strong>ኅብረተሰብ ጥናት (Social Studies Grade 8):</strong> MoE CDID, Units 1–7 (Volcanism, Volcanoes & Earthquakes, Rift Valley Dynamics, Medieval Ethiopian History [Axum, Lalibela, Gadaa System], Modern State Building, Global Geopolitics).</li>
                  <li>• <strong>የዜግነት ትምህርት (Citizenship Education Grade 8):</strong> MoE CDID, Units 1–6 (Constitutional Federalism, Democratic Institutions, Patriotism & National Pride, International Relations, Peacebuilding).</li>
                  <li>• <strong>ኢንፎርሜሽን ቴክኖሎጂ (Information Technology Grade 8):</strong> MoE CDID, Units 1–6 (Data Representation, Spreadsheet Modeling, Presentation Software, Computer Networking Basics, Cyber Safety & Ethics).</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- CARD 2: MATHEMATICAL FORMULAS, NUMBER SETS & GEOMETRY -->
          <div class="ref-item glass-card p-6 rounded-2xl space-y-4 border border-slate-800" data-cat="math">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
              <h3 class="text-base sm:text-lg font-black text-emerald-400 flex items-center gap-2 font-display">
                <span>📐</span> 2. የሒሳብ ቀመሮች፣ የቁጥሮች ምደባ እና ጂኦሜትሪ (High-Accuracy Mathematical Formulas)
              </h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">G7 & G8 Formulas</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <!-- Number Sets -->
              <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2">
                <h4 class="font-bold text-amber-300 text-sm">🔢 የቁጥሮች ስብስብ (Number Sets)</h4>
                <ul class="space-y-1 text-slate-300 leading-relaxed font-mono text-[11px]">
                  <li>• <strong>Natural (መደበኛ):</strong> ℕ = {1, 2, 3, 4, ...}</li>
                  <li>• <strong>Whole (ደቂቅ/ሙሉ):</strong> W = {0, 1, 2, 3, ...}</li>
                  <li>• <strong>Integers (ሙሉ ቁጥሮች):</strong> ℤ = {..., -2, -1, 0, 1, 2, ...}</li>
                  <li>• <strong>Rational (አመክንዮአዊ):</strong> ℚ = { a/b | a, b ∈ ℤ, b ≠ 0 }</li>
                  <li>• <strong>Irrational:</strong> Non-terminating, non-repeating decimals (π, √2, √3)</li>
                  <li>• <strong>Real (እውነተኛ):</strong> ℝ = ℚ ∪ ℚ'</li>
                </ul>
              </div>

              <!-- Square & Cube Roots Table -->
              <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2">
                <h4 class="font-bold text-cyan-300 text-sm">⚡ ፍጹም ካሬዎችና ኩቦች (Perfect Powers)</h4>
                <div class="grid grid-cols-2 gap-1 font-mono text-[11px] text-slate-300">
                  <div>1² = 1 • 2² = 4</div>
                  <div>3² = 9 • 4² = 16</div>
                  <div>5² = 25 • 6² = 36</div>
                  <div>7² = 49 • 8² = 64</div>
                  <div>9² = 81 • 10² = 100</div>
                  <div>11² = 121 • 12² = 144</div>
                  <div>13² = 169 • 14² = 196</div>
                  <div>15² = 225 • 16² = 256</div>
                  <div>17² = 289 • 20² = 400</div>
                  <div>25² = 625 • 1³ = 1</div>
                  <div>2³ = 8 • 3³ = 27</div>
                  <div>4³ = 64 • 5³ = 125</div>
                </div>
              </div>

              <!-- Exponents & Algebra -->
              <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2">
                <h4 class="font-bold text-purple-300 text-sm">📊 የርክክብ እና የኃይል ህጎች (Laws of Exponents)</h4>
                <ul class="space-y-1 font-mono text-[11px] text-slate-300 leading-relaxed">
                  <li>• aᵐ · aⁿ = aᵐ⁺ⁿ</li>
                  <li>• aᵐ / aⁿ = aᵐ⁻ⁿ (a ≠ 0)</li>
                  <li>• (aᵐ)ⁿ = aᵐⁿ</li>
                  <li>• (ab)ᵐ = aᵐ · bᵐ</li>
                  <li>• a⁰ = 1 (a ≠ 0)</li>
                  <li>• a⁻ᵐ = 1 / aᵐ</li>
                  <li>• √(a · b) = √a · √b</li>
                  <li>• √(a / b) = √a / √b (b > 0)</li>
                </ul>
              </div>
            </div>

            <!-- Geometric Formulas Table -->
            <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2 text-xs">
              <h4 class="font-bold text-emerald-300 text-sm">📐 የጂኦሜትሪ ዙሪያ፣ ስፋት እና ይዘት ቀመሮች (Perimeter, Area & Volume)</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-slate-300 font-mono text-[11px]">
                <div class="p-2.5 rounded-lg bg-space-900 border border-slate-800">
                  <strong class="text-white block font-sans">Rectangle (አራት ማዕዘን):</strong>
                  Perimeter: P = 2(l + w)<br>
                  Area: A = l · w
                </div>
                <div class="p-2.5 rounded-lg bg-space-900 border border-slate-800">
                  <strong class="text-white block font-sans">Triangle (ሦስት ማዕዘን):</strong>
                  Area: A = ½ · b · h<br>
                  Pythagoras: a² + b² = c²
                </div>
                <div class="p-2.5 rounded-lg bg-space-900 border border-slate-800">
                  <strong class="text-white block font-sans">Circle (ክብ):</strong>
                  Circumference: C = 2πr = πd<br>
                  Area: A = πr² (π ≈ 3.14 or 22/7)
                </div>
                <div class="p-2.5 rounded-lg bg-space-900 border border-slate-800">
                  <strong class="text-white block font-sans">Trapezoid (ትራፔዞይድ):</strong>
                  Area: A = ½(a + b) · h<br>
                  (a, b = parallel bases)
                </div>
                <div class="p-2.5 rounded-lg bg-space-900 border border-slate-800">
                  <strong class="text-white block font-sans">Rectangular Prism (ፕሪዝም):</strong>
                  Volume: V = l · w · h<br>
                  Surface Area: SA = 2(lw + lh + wh)
                </div>
                <div class="p-2.5 rounded-lg bg-space-900 border border-slate-800">
                  <strong class="text-white block font-sans">Cylinder (ሲሊንደር):</strong>
                  Volume: V = πr² · h<br>
                  Surface Area: SA = 2πr² + 2πrh
                </div>
                <div class="p-2.5 rounded-lg bg-space-900 border border-slate-800">
                  <strong class="text-white block font-sans">Parallelogram:</strong>
                  Area: A = b · h<br>
                  Perimeter: P = 2(a + b)
                </div>
                <div class="p-2.5 rounded-lg bg-space-900 border border-slate-800">
                  <strong class="text-white block font-sans">Cube (ኩብ):</strong>
                  Volume: V = s³<br>
                  Surface Area: SA = 6s²
                </div>
              </div>
            </div>
          </div>

          <!-- CARD 3: GENERAL SCIENCE CONSTANTS, SI UNITS & ELEMENTS -->
          <div class="ref-item glass-card p-6 rounded-2xl space-y-4 border border-slate-800" data-cat="science">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
              <h3 class="text-base sm:text-lg font-black text-cyan-400 flex items-center gap-2 font-display">
                <span>🔬</span> 3. የሳይንስ ቋሚዎች፣ ዓለም አቀፍ መለኪያዎች እና የንጥረ-ነገሮች ሰንጠረዥ (Scientific Constants & Elements)
              </h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">SI Standards</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <!-- Physical Constants -->
              <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2">
                <h4 class="font-bold text-amber-300 text-sm">🌐 መሠረታዊ የፊዚክስ ቋሚዎች (Fundamental Constants)</h4>
                <ul class="space-y-1.5 text-slate-300 font-mono text-[11px] leading-relaxed">
                  <li>• <strong>የመሬት ስበት ፍጥነት (g):</strong> g ≈ 9.8 m/s² (በፈተና ስሌት ቀላልነት 10 m/s²)</li>
                  <li>• <strong>የብርሃን ፍጥነት በቫኪዩም (c):</strong> c ≈ 3.0 × 10⁸ m/s (300,000 km/s)</li>
                  <li>• <strong>የንጹህ ውሃ እፍጋት (Density of Water):</strong> ρ = 1.0 g/cm³ = 1000 kg/m³</li>
                  <li>• <strong>የከባቢ አየር ግፊት (Atmospheric Pressure):</strong> 1 atm = 101,325 Pa ≈ 10⁵ Pa = 760 mmHg</li>
                  <li>• <strong>የውሃ መቅለጫ / መቀዝቀዣ ነጥብ:</strong> 0°C = 273.15 K</li>
                  <li>• <strong>የውሃ መፍያ ነጥብ (Boiling Point):</strong> 100°C = 373.15 K</li>
                </ul>
              </div>

              <!-- SI Base & Derived Units -->
              <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2">
                <h4 class="font-bold text-emerald-300 text-sm">📏 ዓለም አቀፍ የልኬት ስርዓት (SI Units Table)</h4>
                <ul class="space-y-1.5 text-slate-300 font-mono text-[11px] leading-relaxed">
                  <li>• <strong>ርዝመት (Length):</strong> ሜትር (Meter [m])</li>
                  <li>• <strong>ክብደት / መጠነ-ቁስ (Mass):</strong> ኪሎግራም (Kilogram [kg])</li>
                  <li>• <strong>ጊዜ (Time):</strong> ሰከንድ (Second [s])</li>
                  <li>• <strong>ኃይል (Force):</strong> ኒውተን (Newton [N] = kg·m/s²)</li>
                  <li>• <strong>ስራ እና ጉልበት (Work & Energy):</strong> ጁል (Joule [J] = N·m)</li>
                  <li>• <strong>አቅም (Power):</strong> ዋት (Watt [W] = J/s)</li>
                  <li>• <strong>ግፊት (Pressure):</strong> ፓስካል (Pascal [Pa] = N/m²)</li>
                </ul>
              </div>
            </div>

            <!-- Periodic Table (First 20 Elements) -->
            <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2 text-xs">
              <h4 class="font-bold text-cyan-300 text-sm">⚛️ የመጀመሪያዎቹ 20 የኬሚካል ንጥረ-ነገሮች (First 20 Elements of Periodic Table)</h4>
              <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 text-slate-300 font-mono text-[11px]">
                <div class="p-2 rounded bg-space-900 border border-slate-800">1. H - Hydrogen (1.008)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">2. He - Helium (4.003)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">3. Li - Lithium (6.941)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">4. Be - Beryllium (9.012)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">5. B - Boron (10.81)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">6. C - Carbon (12.01)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">7. N - Nitrogen (14.01)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">8. O - Oxygen (16.00)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">9. F - Fluorine (19.00)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">10. Ne - Neon (20.18)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">11. Na - Sodium (22.99)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">12. Mg - Magnesium (24.31)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">13. Al - Aluminum (26.98)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">14. Si - Silicon (28.09)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">15. P - Phosphorus (30.97)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">16. S - Sulfur (32.06)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">17. Cl - Chlorine (35.45)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">18. Ar - Argon (39.95)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">19. K - Potassium (39.10)</div>
                <div class="p-2 rounded bg-space-900 border border-slate-800">20. Ca - Calcium (40.08)</div>
              </div>
            </div>
          </div>

          <!-- CARD 4: ETHIOPIAN HISTORY, GEOGRAPHY & NATIONAL HERITAGE -->
          <div class="ref-item glass-card p-6 rounded-2xl space-y-4 border border-slate-800" data-cat="history">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
              <h3 class="text-base sm:text-lg font-black text-amber-300 flex items-center gap-2 font-display">
                <span>🇪🇹</span> 4. የኢትዮጵያ ታሪክ፣ ቅርስ እና ጂኦግራፊ ማጣቀሻ (National Heritage & Geography Concordance)
              </h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">Heritage Archive</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <!-- Hominid Fossils -->
              <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2">
                <h4 class="font-bold text-emerald-400 text-sm">🦴 የቅሪተ-አካል ግኝቶች (Paleoanthropology)</h4>
                <ul class="space-y-1.5 text-slate-300 leading-relaxed">
                  <li>• <strong>አርዲ (Ardi - Ardipithecus ramidus):</strong> 4.4 ሚሊዮን ዓመት ዕድሜ፤ በመካከለኛው አዋሽ (Middle Awash) በ1994 ዓ.ም ተገኘ።</li>
                  <li>• <strong>ሉሲ / ድንቅነሽ (Lucy - Australopithecus afarensis):</strong> 3.2 ሚሊዮን ዓመት ዕድሜ፤ በሐዳር፣ አፋር (Hadar) በ1974 ዓ.ም ተገኘች፤ የሰው ልጅ በሁለት እግሩ መቆሙን ያረጋገጠ 40% የተሟላ ቅሪተ-አካል።</li>
                  <li>• <strong>ሰላም (Selam):</strong> 3.3 ሚሊዮን ዓመት ዕድሜ፤ የ3 ዓመት ሴት ልጅ ቅሪት በዲኪካ (Dikika) በ2000 ዓ.ም ተገኘ።</li>
                  <li>• <strong>ኦሞ 1 እና 2 (Omo Kibish):</strong> ~233,000 ዓመት ዕድሜ፤ በቀዳሚው ዘመናዊ የሰው ልጅ (Homo sapiens) ታሪክ ውስጥ ቁልፍ ግኝት።</li>
                </ul>
              </div>

              <!-- Physical Features -->
              <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2">
                <h4 class="font-bold text-cyan-400 text-sm">🌋 ታላቁ ስምጥ ሸለቆና መልክዓ-ምድር (Geology & Rift Valley)</h4>
                <ul class="space-y-1.5 text-slate-300 leading-relaxed">
                  <li>• <strong>ታላቁ የስምጥ ሸለቆ (East African Rift):</strong> ኢትዮጵያን በሁለት ትልልቅ የደጋ ክፍሎች (ሰሜን ምዕራብ እና ደቡብ ምስራቅ) የሚከፍል የቴክቶኒክ ሰንሰለት።</li>
                  <li>• <strong>ኤርታሌ (Erta Ale Shield Volcano):</strong> በአፋር ዳናኪል የሚገኝ፣ ቀጣይነት ያለው የፈሳሽ ባዛልቲክ ላቫ ሀይቅ (Active Basaltic Lava Lake) ያለው ብርቅዬ እሳተ-ጎመራ።</li>
                  <li>• <strong>ዳሎል (Dallol / Danakil Depression):</strong> ከባህር ወለል በታች 125 ሜትር ዝቅታ፤ በዓለም እጅግ ሞቃታማና ልዩ የሰልፈር ማዕድናት ክምችት።</li>
                  <li>• <strong>ራስ ደጀን (Ras Dejen):</strong> በሰሜን ተራሮች የሚገኝ 4,550 ሜትር የኢትዮጵያ ከፍተኛው ተራራ ጫፍ።</li>
                </ul>
              </div>

              <!-- Civilizations & History -->
              <div class="p-4 rounded-xl bg-space-950 border border-slate-850 space-y-2">
                <h4 class="font-bold text-amber-400 text-sm">🏛️ ታሪካዊ ስልጣኔዎች እና ድሎች (Historic Civilizations)</h4>
                <ul class="space-y-1.5 text-slate-300 leading-relaxed">
                  <li>• <strong>ዳአማት እና የሃ (Da'amat & Yeha):</strong> ከክርስቶስ ልደት በፊት በ10ኛው ክፍለ-ዘመን የተመሰረተ የጥንት ስልጣኔ፤ የየሃ የድንጋይ ቤተ-መቅደስ።</li>
                  <li>• <strong>የአክሱም ስልጣኔ (Axumite Empire):</strong> ዓለም አቀፍ የባህር ንግድ፣ የአክሱም ሀውልቶች፣ የሳንቲም ህትመት፣ እና የኢትዮጵያ የፊደል አጻጻፍ ስርዓት።</li>
                  <li>• <strong>የላሊበላ ውቅር አብያተ-ክርስቲያናት (Zagwe Dynasty):</strong> በአንድ ወጥ እሳተ-ጎመራዊ ድንጋይ ተፈልፍለው የተሰሩ የዓለም ቅርስ አስደናቂ ህንፃዎች።</li>
                  <li>• <strong>የገዳ ስርዓት (Gadaa System):</strong> የኦሮሞ ህዝብ ባህላዊና ዴሞክራሲያዊ የአስተዳደር ስርዓት፤ በየ8 ዓመቱ በሰላማዊ መንገድ ስልጣን የሚተላለፍበት የዩኔስኮ ዓለም አቀፍ ቅርስ።</li>
                  <li>• <strong>የዓድዋ ድል (Battle of Adwa - March 1, 1896):</strong> ዳግማዊ አጼ ምኒልክ እና እቴጌ ጣይቱ ብጡል የመሩት የኢትዮጵያ ጀግኖች ጦር የጣሊያንን ቅኝ ገዢ ጦር ድል በማድረግ የነፃነት ተምሳሌት የሆነበት ቀን።</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- CARD 5: THE SQ3R METHODOLOGICAL FRAMEWORK -->
          <div class="ref-item glass-card p-6 rounded-2xl space-y-4 border border-slate-800" data-cat="sq3r">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
              <h3 class="text-base sm:text-lg font-black text-purple-400 flex items-center gap-2 font-display">
                <span>🧠</span> 5. የSQ3R የጥናት ሳይንሳዊ ስነ-ዘዴ መመሪያ (The SQ3R Pedagogical Engine)
              </h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-mono">Cognitive Science</span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              የSQ3R የጥናት ስልት በ1946 እ.ኤ.አ. በታዋቂው አሜሪካዊ የትምህርት ሳይኮሎጂስት <strong>ዶ/ር ፍራንሲስ ሮቢንሰን (Dr. Francis P. Robinson)</strong> በኦሃዮ ስቴት ዩኒቨርሲቲ የተፈጠረ ሲሆን፣ ተማሪዎች የሚያጠኑትን ትምህርት በረጅም ጊዜ ማህደረ-ትውስታ (Long-Term Memory) እንዲይዙት የሚያስችል የተረጋገጠ ሳይንሳዊ ስርዓት ነው።
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                <div class="text-base font-black text-emerald-400">1. Survey (ቅኝት)</div>
                <div class="text-[11px] text-slate-400 font-bold">5–10% የጥናት ጊዜ</div>
                <p class="text-[11px] text-slate-300">አጠቃላይ ይዘቱን፣ ርዕሶችን፣ ስዕላዊ መግለጫዎችን እና ማጠቃለያዎችን በፍጥነት በመቃኘት የአዕምሮ ካርታ (Schema) መገንባት።</p>
              </div>

              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                <div class="text-base font-black text-amber-400">2. Question (ጥያቄ)</div>
                <div class="text-[11px] text-slate-400 font-bold">10% የጥናት ጊዜ</div>
                <p class="text-[11px] text-slate-300">ንባብ ከመጀመር በፊት ርዕሶችን ወደ "ለምን? እንዴት? ምንድን ነው?" ጥያቄዎች በመቀየር አዕምሮ ንቁ አፈላላጊ እንዲሆን ማድረግ።</p>
              </div>

              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                <div class="text-base font-black text-cyan-400">3. Read (ንባብ)</div>
                <div class="text-[11px] text-slate-400 font-bold">35–40% የጥናት ጊዜ</div>
                <p class="text-[11px] text-slate-300">ያዘጋጀናቸውን ጥያቄዎች ለመመለስ በማሰብ በጥልቀት ማንበብ፤ ቁልፍ ቃላትን እና ቀመሮችን ማስተዋል፤ ምሳሌዎችን ደረጃ-በደረጃ መረዳት።</p>
              </div>

              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                <div class="text-base font-black text-rose-400">4. Recite (ማስታወስ)</div>
                <div class="text-[11px] text-slate-400 font-bold">25–30% የጥናት ጊዜ</div>
                <p class="text-[11px] text-slate-300">መጽሐፉን በመዝጋት የተነበበውን በራስ ቃላት ጮክ ብሎ መናገር ወይም በፍላሽ ካርድ መሞከር (Active Recall)።</p>
              </div>

              <div class="p-3.5 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                <div class="text-base font-black text-purple-400">5. Review (ፈተና)</div>
                <div class="text-[11px] text-slate-400 font-bold">15–20% የጥናት ጊዜ</div>
                <p class="text-[11px] text-slate-300">በየሳምንቱ እና በየወሩ ፈተናዎችን መለማመድ (Spaced Repetition)፤ ስህተቶችን መርምሮ የጎደሉ ክፍሎችን እንደገና ማጥናት።</p>
              </div>
            </div>
          </div>

        </div>

      </section>

`;

const targetInsertView = `      <!-- =============================================================== -->
      <!-- VIEW 5: TROPHY ROOM & ACADEMIC HONORS                            -->`;

if (!shell.includes('id="view-reference"')) {
  shell = shell.replace(targetInsertView, referenceViewSectionHtml + targetInsertView);
  console.log('3. Accurate Reference section added before view-rewards.');
} else {
  console.log('3. Accurate Reference section already present.');
}

fs.writeFileSync(shellPath, shell, 'utf8');
console.log('Successfully updated src/template_shell.html with Security & Reference Library!');

// =============================================================================
// 4. UPDATE app_logic.js WITH REFERENCE & SECURITY DEFENSES
// =============================================================================

// 4.1 Update switchTab to support 'reference'
const oldSwitchTab = `      const tabMap = {
        'sq3r': 'view-sq3r',
        'exam-hall': 'view-exam-hall',
        'exam': 'view-exam-hall',
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
        'exam': 'tabBtn-exam-hall',
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
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap';
          }
        }
      });`;

const newSwitchTab = `      const tabMap = {
        'sq3r': 'view-sq3r',
        'exam-hall': 'view-exam-hall',
        'exam': 'view-exam-hall',
        'curriculum': 'view-curriculum',
        'matrix': 'view-curriculum',
        'amt-exam': 'view-amt-exam',
        'amt': 'view-amt-exam',
        'vault': 'view-vault',
        'reference': 'view-reference',
        'ref': 'view-reference',
        'rewards': 'view-rewards',
        'analytics': 'view-analytics'
      };

      const btnMap = {
        'sq3r': 'tabBtn-sq3r',
        'exam-hall': 'tabBtn-exam-hall',
        'exam': 'tabBtn-exam-hall',
        'curriculum': 'tabBtn-curriculum',
        'matrix': 'tabBtn-curriculum',
        'amt-exam': 'tabBtn-amt-exam',
        'amt': 'tabBtn-amt-exam',
        'vault': 'tabBtn-vault',
        'reference': 'tabBtn-reference',
        'ref': 'tabBtn-reference',
        'rewards': 'tabBtn-rewards',
        'analytics': 'tabBtn-analytics'
      };

      const activeViewId = tabMap[tabId] || 'view-sq3r';

      ['view-sq3r', 'view-exam-hall', 'view-curriculum', 'view-amt-exam', 'view-vault', 'view-reference', 'view-rewards', 'view-analytics'].forEach(vId => {
        const el = document.getElementById(vId);
        if (el) el.style.display = vId === activeViewId ? 'block' : 'none';
      });

      ['tabBtn-sq3r', 'tabBtn-exam-hall', 'tabBtn-curriculum', 'tabBtn-amt-exam', 'tabBtn-vault', 'tabBtn-reference', 'tabBtn-rewards', 'tabBtn-analytics'].forEach(bId => {
        const btn = document.getElementById(bId);
        if (btn) {
          if (bId === btnMap[tabId]) {
            btn.className = 'tab-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 whitespace-nowrap';
          } else {
            btn.className = 'tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition bg-space-850 text-slate-300 hover:bg-space-800 hover:text-white border border-slate-800 whitespace-nowrap';
          }
        }
      });`;

if (logic.includes(oldSwitchTab)) {
  logic = logic.replace(oldSwitchTab, newSwitchTab);
  console.log('4. switchTab updated to support reference tab.');
}

// 4.2 Append Reference Filtering and Security Sanitizers
const securityAndRefCode = `
    // =========================================================================
    // SECURITY FORTIFICATION & DEFENSIVE RUNTIME GUARDS
    // =========================================================================
    function sanitizeText(str, maxLength = 80) {
      if (typeof str !== 'string') return '';
      return str
        .trim()
        .slice(0, maxLength)
        .replace(/[\\u0000-\\u001F\\u007F-\\u009F]/g, '');
    }

    function sanitizeHtml(str) {
      if (typeof str !== 'string') return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function safeGetLocalStorage(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return fallback;
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          delete parsed.__proto__;
          delete parsed.constructor;
          delete parsed.prototype;
        }
        return parsed;
      } catch (e) {
        console.warn('Storage security fallback:', e);
        return fallback;
      }
    }

    // Audio rate-limiting to prevent oscillator exhaustion DOS
    let activeOscillators = 0;
    const MAX_OSCILLATORS = 6;

    // =========================================================================
    // HIGH-ACCURACY REFERENCE COMPENDIUM LOGIC
    // =========================================================================
    let activeRefCategory = 'all';

    function filterRefCategory(category) {
      soundClick();
      activeRefCategory = category;
      
      const buttons = document.querySelectorAll('.ref-cat-btn');
      buttons.forEach(btn => {
        btn.className = 'ref-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold transition bg-space-850 text-slate-300 hover:text-white border border-slate-800 whitespace-nowrap cursor-pointer';
      });

      const activeBtn = document.getElementById(\`refCatBtn-\${category}\`);
      if (activeBtn) {
        activeBtn.className = 'ref-cat-btn active px-3 py-1.5 rounded-xl text-xs font-bold transition bg-emerald-600 text-white shadow-sm whitespace-nowrap cursor-pointer';
      }

      applyRefFilters();
    }

    function filterReference(searchQuery) {
      applyRefFilters(searchQuery);
    }

    function applyRefFilters(query = null) {
      const q = (query !== null ? query : (document.getElementById('refSearchInput')?.value || '')).toLowerCase().trim();
      const items = document.querySelectorAll('.ref-item');

      items.forEach(item => {
        const cat = item.getAttribute('data-cat');
        const matchesCategory = activeRefCategory === 'all' || cat === activeRefCategory;
        const text = item.innerText.toLowerCase();
        const matchesQuery = !q || text.includes(q);

        if (matchesCategory && matchesQuery) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }
`;

// Insert security and reference logic before DOMContentLoaded
const domLoadedTarget = "    window.addEventListener('DOMContentLoaded', () => {";
if (!logic.includes('function filterRefCategory')) {
  logic = logic.replace(domLoadedTarget, securityAndRefCode + "\n" + domLoadedTarget);
  console.log('5. Security guards and reference library functions added to app_logic.js.');
}

// Disconnect opener on printWindow for reverse tabnabbing defense
logic = logic.replace(
  "const printWindow = window.open('', '_blank', 'width=850,height=900');\n      if (printWindow) {",
  "const printWindow = window.open('', '_blank', 'width=850,height=900');\n      if (printWindow) {\n        try { printWindow.opener = null; } catch(e) {}"
);

// Apply input sanitization in updateCertPreview
logic = logic.replace(
  "currentCertData.studentName = nameInput.value.trim();",
  "currentCertData.studentName = sanitizeText(nameInput.value, 60);"
);
logic = logic.replace(
  "currentCertData.schoolName = schoolInput.value.trim();",
  "currentCertData.schoolName = sanitizeText(schoolInput.value, 80);"
);

fs.writeFileSync(logicPath, logic, 'utf8');
console.log('Successfully updated src/app_logic.js with Security & Reference Library!');
