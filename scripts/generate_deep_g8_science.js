const fs = require('fs');
const path = require('path');

console.log('Generating Complete, Exhaustive Grade 8 Science (7 Units, 14 Subtopics)...');

const g8Science = {
  id: 'science',
  name: 'General Science',
  icon: '🔬',
  units: [
    // UNIT 1: BASICS OF CHEMICAL REACTIONS & INORGANIC COMPOUNDS
    {
      id: 'g8-sci-u1',
      number: 'Unit 1',
      title: 'Basics of Chemical Reactions & Inorganic Compounds',
      bigIdea: 'Understand the classification of inorganic compounds into oxides, acids, bases, and salts, and analyze neutralization reactions.',
      subtopics: [
        {
          id: 'g8-sci-1.1',
          code: '1.1',
          title: 'Classification of Inorganic Compounds: Oxides, Acids, Bases & Salts',
          survey: {
            blueprint: 'Inorganic compounds: 1) Oxides (Metal basic oxides, Non-metal acidic oxides, Amphoteric). 2) Acids (Sour taste, release H⁺ in water, turn blue litmus red, pH < 7, e.g., HCl, H₂SO₄, HNO₃). 3) Bases/Alkalis (Bitter taste, slippery feel, release OH⁻ in water, turn red litmus blue, pH > 7, e.g., NaOH, Ca(OH)₂). 4) Salts (Ionic compounds formed by neutralizing acids with bases, e.g., NaCl, CaCO₃).',
            objectives: [
              'Classify inorganic chemical compounds into oxides, acids, bases, and salts.',
              'Contrast the chemical and physical properties of acidic and basic solutions.',
              'Explain the formation and types of common oxides (acidic, basic, amphoteric).'
            ],
            keyFormulas: 'Acid: HA(aq) ➔ H⁺(aq) + A⁻(aq) | Base: BOH(aq) ➔ B⁺(aq) + OH⁻(aq) | Acidic Oxide + Water ➔ Acid (SO₃ + H₂O ➔ H₂SO₄)'
          },
          questions: [
            'How do non-metal oxides differ from metal oxides in their reaction with water?',
            'What ion is universally responsible for acidic behavior in aqueous solutions?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">🧪 1. The Four Classes of Inorganic Compounds</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Inorganic compounds are divided into four essential classes:<br>
                  • <strong>Oxides:</strong> Binary compounds formed between oxygen and another element:<br>
                  - <em>Basic Oxides:</em> Metallic oxides (e.g., $\\text{CaO}, \\text{Na}_2\\text{O}$) that react with water to form basic metal hydroxides (alkalis).<br>
                  - <em>Acidic Oxides:</em> Non-metallic oxides (e.g., $\\text{CO}_2, \\text{SO}_2, \\text{SO}_3$) that react with water to form oxyacids (e.g., $\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4$).<br>
                  • <strong>Acids:</strong> Substances that release hydrogen ions ($\\text{H}^+$ or hydronium $\\text{H}_3\\text{O}^+$) in aqueous solutions. Taste sour, turn blue litmus paper red, have $\\text{pH} < 7$, and react with active metals to liberate $\\text{H}_2$ gas.<br>
                  • <strong>Bases (Alkalis):</strong> Substances that produce hydroxide ions ($\\text{OH}^-$) in water. Taste bitter, feel slippery/soapy, turn red litmus paper blue, and have $\\text{pH} > 7$.<br>
                  • <strong>Salts:</strong> Ionic compounds containing cations from a base and anions from an acid (e.g., $\\text{NaCl}, \\text{KNO}_3, \\text{CuSO}_4$).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">📊 2. The pH Scale</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The pH scale measures the logarithmic concentration of hydrogen ions from 0 to 14:<br>
                  • $\\text{pH} = 7$: Strictly Neutral (pure distilled water at 25°C).<br>
                  • $\\text{pH} < 7$: Acidic (lower pH = stronger acid, e.g., gastric juice $\\text{pH} \\approx 1.5$; lemon juice $\\text{pH} \\approx 2.5$).<br>
                  • $\\text{pH} > 7$: Basic / Alkaline (higher pH = stronger alkali, e.g., household bleach $\\text{pH} \\approx 12.5$; $\\text{NaOH} \\text{ pH} = 14$).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Classifying Chemical Compounds',
            problem: 'Classify each of the following chemical formulas into oxide, acid, base, or salt: (a) HNO₃, (b) KOH, (c) SO₂, (d) MgSO₄.',
            steps: [
              { label: 'Part (a) HNO₃', text: 'Nitric acid: Releases H⁺ in water ➔ <strong>Acid</strong>.' },
              { label: 'Part (b) KOH', text: 'Potassium hydroxide: Releases OH⁻ in water ➔ <strong>Base (Alkali)</strong>.' },
              { label: 'Part (c) SO₂', text: 'Sulfur dioxide: Binary compound of sulfur with oxygen ➔ <strong>Acidic Oxide</strong>.' },
              { label: 'Part (d) MgSO₄', text: 'Magnesium sulfate: Ionic compound of metal cation Mg²⁺ and sulfate anion SO₄²⁻ ➔ <strong>Salt</strong>.' }
            ],
            proTip: 'Look at the first and last elements: H at the front usually means acid; OH at the end usually means base; oxygen alone at the end means oxide!'
          },
          reciteFlashcards: [
            { q: 'What ion is released by all Arrhenius acids in water?', a: 'Hydrogen ions (H⁺) or hydronium ions (H₃O⁺).' },
            { q: 'What color does litmus paper turn in a basic (alkaline) solution?', a: 'Blue (red litmus turns blue).' },
            { q: 'What type of oxide is formed when sulfur burns in oxygen?', a: 'An acidic oxide (sulfur dioxide, SO₂).' }
          ],
          amtQuiz: [
            {
              q: 'When sulfur powder is burned in air, it produces sulfur dioxide gas (SO₂). When this gas is dissolved in distilled water, what will happen to a strip of blue litmus paper dipped into the solution?',
              options: [
                'The blue litmus paper will turn red because SO₂ dissolves to form sulfurous acid (H₂SO₃)',
                'The blue litmus paper will remain unchanged because non-metal oxides form neutral solutions',
                'The blue litmus paper will turn bright yellow',
                'The blue litmus paper will turn dark blue'
              ],
              correct: 0,
              strategy: 'Non-metal oxides are acidic oxides that react with water to produce acids.',
              derivation: 'SO₂ + H₂O ➔ H₂SO₃ (sulfurous acid). Because the solution is acidic (pH < 7), it turns blue litmus paper red.',
              trap: 'Assuming sulfur dioxide does not react with water.'
            }
          ]
        },
        {
          id: 'g8-sci-1.2',
          code: '1.2',
          title: 'Neutralization Reactions, Indicators & Chemistry Safety',
          survey: {
            blueprint: 'Neutralization: Acid + Base ➔ Salt + Water + Heat (Exothermic). Example: HCl + NaOH ➔ NaCl + H₂O. Acid-Base indicators: Litmus (Red in acid, Blue in base), Phenolphthalein (Colorless in acid, Pink/Magenta in base), Methyl orange (Red in acid, Yellow in base). Universal indicator and pH meter. Lab safety precautions with strong corrosive acids/bases.',
            objectives: [
              'Write balanced chemical equations for acid-base neutralization reactions.',
              'Predict color changes of litmus, phenolphthalein, and methyl orange in various solutions.',
              'Describe practical applications of neutralization (antacids, soil treatment, bee/wasp stings).'
            ],
            keyFormulas: 'Neutralization: Acid + Base ➔ Salt + Water | H⁺(aq) + OH⁻(aq) ➔ H₂O(l)'
          },
          questions: [
            'How do antacid tablets relieve heartburn in the human stomach?',
            'What color does phenolphthalein turn when added to a solution of sodium hydroxide (NaOH)?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">⚖️ 1. The Chemistry of Neutralization</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A <strong>neutralization reaction</strong> is the reaction between an acid and a base to produce a salt and water:<br>
                  • <strong>General Word Equation:</strong> $\\text{Acid} + \\text{Base} \\rightarrow \\text{Salt} + \\text{Water}$.<br>
                  • <strong>Ionic Equation:</strong> $\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$.<br>
                  • <em>Example:</em> $\\text{HCl}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$.<br>
                  • <strong>Real-Life Applications:</strong><br>
                  - <em>Stomach Heartburn:</em> Overproduction of gastric $\\text{HCl}$ is neutralized using antacid tablets containing mild bases like magnesium hydroxide $\\text{Mg(OH)}_2$ or sodium bicarbonate $\\text{NaHCO}_3$.<br>
                  - <em>Agricultural Soil Treatment:</em> Acidic farm soils (common in western Ethiopia due to high leaching) are treated with slaked lime $\\text{Ca(OH)}_2$ or limestone $\\text{CaCO}_3$ to raise pH.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400">🎨 2. Summary Table of Acid-Base Indicators</h4>
                <div class="overflow-x-auto text-xs text-slate-300">
                  <table class="w-full border-collapse border border-slate-800">
                    <tr class="bg-space-950 text-slate-200 font-bold">
                      <th class="p-2 border border-slate-800">Indicator</th>
                      <th class="p-2 border border-slate-800">Color in Acid</th>
                      <th class="p-2 border border-slate-800">Color in Base</th>
                    </tr>
                    <tr><td class="p-2 border border-slate-800">Litmus</td><td class="p-2 border border-slate-800 text-rose-400 font-bold">Red</td><td class="p-2 border border-slate-800 text-blue-400 font-bold">Blue</td></tr>
                    <tr><td class="p-2 border border-slate-800">Phenolphthalein</td><td class="p-2 border border-slate-800">Colorless</td><td class="p-2 border border-slate-800 text-pink-400 font-bold">Pink / Magenta</td></tr>
                    <tr><td class="p-2 border border-slate-800">Methyl Orange</td><td class="p-2 border border-slate-800 text-rose-400 font-bold">Red / Pink</td><td class="p-2 border border-slate-800 text-amber-400 font-bold">Yellow</td></tr>
                  </table>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Neutralizing Soil Acidity in Gojjam',
            problem: 'An agricultural officer in Gojjam tests soil and finds a pH of 4.5 (excessively acidic for maize). Explain what chemical substance should be applied, write the reaction equation, and state why this improves crop yield.',
            steps: [
              { label: 'Step 1: Identify corrective agent', text: 'Agricultural lime (calcium hydroxide, Ca(OH)₂, or crushed limestone, CaCO₃) is added as a mild, cost-effective basic substance.' },
              { label: 'Step 2: Neutralization chemistry', text: 'Ca(OH)₂ + 2 H⁺(soil acid) ➔ Ca²⁺ + 2 H₂O. The excess H⁺ ions are neutralized into water.' },
              { label: 'Step 3: Agricultural benefit', text: 'Raising soil pH toward 6.0-7.0 increases availability of essential plant nutrients (nitrogen, phosphorus) and prevents toxic aluminum absorption.' }
            ],
            proTip: 'Bee stings are acidic and treated with mild bases (baking soda); wasp stings are alkaline and treated with mild acids (vinegar)!'
          },
          reciteFlashcards: [
            { q: 'What are the two universal products of an acid-base neutralization reaction?', a: 'Salt and Water (Acid + Base ➔ Salt + Water).' },
            { q: 'What color is phenolphthalein in an acidic solution?', a: 'Colorless (turns vivid pink in a basic solution).' },
            { q: 'How does an antacid tablet neutralize excess stomach acid?', a: 'The mild base in the tablet (e.g., Mg(OH)₂) reacts with HCl to form harmless salt and water.' }
          ],
          amtQuiz: [
            {
              q: 'A drop of phenolphthalein indicator is added to a test tube containing dilute sodium hydroxide solution (NaOH). What color change will be immediately observed?',
              options: [
                'The colorless solution turns vibrant pink (magenta)',
                'The solution turns deep red like litmus',
                'The solution remains completely colorless',
                'The solution turns bright canary yellow'
              ],
              correct: 0,
              strategy: 'Recall the indicator color chart: Phenolphthalein is colorless in acid and neutral solutions, but pink in alkaline/basic solutions.',
              derivation: 'NaOH is a strong base (pH > 7). Phenolphthalein indicator turns bright pink/magenta in the presence of hydroxide ions.',
              trap: 'Confusing phenolphthalein with methyl orange (which turns yellow in base).'
            }
          ]
        }
      ]
    },

    // UNIT 2: METALS, NON-METALS & FORMULA CALCULATIONS
    {
      id: 'g8-sci-u2',
      number: 'Unit 2',
      title: 'Metals, Non-Metals & Calculations Based on Formulas',
      bigIdea: 'Explore properties of metals and non-metals, and perform stoichiometric calculations: formula mass, percentage composition, and the mole.',
      subtopics: [
        {
          id: 'g8-sci-2.1',
          code: '2.1',
          title: 'Physical & Chemical Properties of Metals and Non-Metals',
          survey: {
            blueprint: 'Metals: Malleable (hammered into sheets), Ductile (drawn into wires), Lustrous, High melting/boiling points, Excellent conductors of heat and electricity (free delocalized electrons), Form positive ions (cations) by losing electrons. Non-metals: Brittle solids or gases, Dull, Poor conductors (insulators, except graphite), Low melting points, Form negative ions (anions) by gaining electrons. Metalloids (Semiconductors: Silicon, Germanium).',
            objectives: [
              'Compare the physical properties of metals with non-metals (conduction, malleability, ductility).',
              'Explain electrical conductivity in metals based on the "sea of delocalized electrons".',
              'Identify exceptional elements (Mercury: liquid metal at room temp; Graphite: carbon allotrope that conducts electricity).'
            ],
            keyFormulas: 'Metallic bonding = Lattice of positive metal cations surrounded by a sea of mobile valence electrons'
          },
          questions: [
            'Why are copper and aluminum widely utilized for electrical wiring and cookware?',
            'Which metal is a liquid at standard room temperature and pressure?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">⚡ 1. Comparison of Metals and Non-Metals</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-emerald-300">Metals (e.g., Fe, Cu, Al, Au):</strong><br>
                    • High electrical and thermal conductivity.<br>
                    • <strong>Malleable:</strong> Can be hammered into thin foils without shattering.<br>
                    • <strong>Ductile:</strong> Can be drawn into thin wires.<br>
                    • Metallic luster (shiny when polished).<br>
                    • High density and high melting points (except Mercury, $\\text{Hg}$, which is liquid at 25°C).
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-rose-300">Non-Metals (e.g., C, S, O₂, N₂, Cl₂):</strong><br>
                    • Poor electrical & thermal conductors (insulators).<br>
                    • <strong>Brittle solids:</strong> Shatter into powders when struck with a hammer.<br>
                    • Dull appearance (lack luster).<br>
                    • Low melting points and densities.<br>
                    • <em>Crucial Exception:</em> <strong>Graphite</strong> (allotrope of carbon) conducts electricity due to delocalized electrons between layers!
                  </div>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Explaining Malleability at the Atomic Level',
            problem: 'Explain why a block of pure copper can be hammered into a thin roofing sheet without cracking, whereas a lump of sulfur shatters into dust.',
            steps: [
              { label: 'Step 1: Metal structure (Copper)', text: 'In copper, metallic bonds consist of positive metal ions immersed in a fluid sea of delocalized electrons. When struck, layers of ions slide past each other without breaking the flexible metallic bond.' },
              { label: 'Step 2: Non-metal structure (Sulfur)', text: 'Solid sulfur consists of covalent S₈ molecules held by weak intermolecular forces. A hammer blow shears the crystal lattice, causing like charges or molecular planes to repel and shatter.' },
              { label: 'Step 3: Conclusion', text: 'Copper is <strong>malleable</strong>; sulfur is <strong>brittle</strong>.' }
            ],
            proTip: 'Graphite is the ONLY common non-metal solid that conducts electricity, making it ideal for battery electrodes and pencil leads!'
          },
          reciteFlashcards: [
            { q: 'What term describes the property of a metal that allows it to be hammered into thin sheets?', a: 'Malleability (Ductility is the ability to be drawn into wires).' },
            { q: 'Which non-metal allotrope is a good conductor of electricity?', a: 'Graphite (an allotrope of carbon).' },
            { q: 'Name the only metal that is liquid at standard room temperature.', a: 'Mercury (Hg).' }
          ],
          amtQuiz: [
            {
              q: 'Which of the following elements is the ONLY metallic element that exists in the liquid state under standard room temperature and atmospheric pressure?',
              options: ['Mercury (Hg)', 'Bromine (Br₂)', 'Gallium (Ga)', 'Sodium (Na)'],
              correct: 0,
              strategy: 'Mercury is the liquid metal; Bromine is a liquid non-metal.',
              derivation: 'Mercury (Hg) is the only liquid metal at standard room temperature (25°C). Bromine is also liquid, but it is a halogen non-metal.',
              trap: 'Choosing Bromine (Bromine is a liquid, but it is a NON-METAL, not a metal!).'
            }
          ]
        },
        {
          id: 'g8-sci-2.2',
          code: '2.2',
          title: 'Relative Formula Mass, Percentage Composition & The Mole Concept',
          survey: {
            blueprint: 'Relative Atomic Mass (Ar): Average mass of an atom compared to 1/12th of Carbon-12. Relative Formula Mass (Mr): Sum of Ar of all atoms in formula. Percentage Composition: % = (n · Ar / Mr) × 100%. The Mole: Avogadro’s number NA = 6.022 × 10²³ particles. Molar mass (g/mol). n = m / M.',
            objectives: [
              'Calculate the Relative Formula Mass (Mr) of chemical compounds given atomic masses.',
              'Determine the percentage composition by mass of each element in a compound.',
              'Define the mole and convert between mass, moles, and number of particles using n = m / M.'
            ],
            keyFormulas: 'Formula Mass Mr = Σ(Ar × atom count) | % Element = (Mass of element in formula / Total Formula Mass) × 100% | Moles: n = m / M'
          },
          questions: [
            'What is the formula mass of calcium carbonate (CaCO₃) if Ca = 40, C = 12, O = 16?',
            'What is the percentage of nitrogen in urea (NH₂CONH₂)?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">📐 1. Relative Formula Mass ($M_r$)</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The <strong>Relative Formula Mass ($M_r$)</strong> is the sum of the relative atomic masses ($A_r$) of all atoms present in the chemical formula:<br>
                  • <em>Example for Water ($\text{H}_2\text{O}$):</em><br>
                  $M_r = (2 \times A_r\text{ of H}) + (1 \times A_r\text{ of O}) = (2 \times 1) + (1 \times 16) = \mathbf{18}$.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">📊 2. Percentage Composition by Mass</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Formula: <strong>$\% \text{ of Element} = \frac{\text{Total mass of that element in formula}}{M_r} \times 100\%$</strong>.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400">🔢 3. The Mole Concept ($n = m / M$)</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>1 Mole:</strong> The amount of substance that contains exactly <strong>$6.022 \times 10^{23}$</strong> elementary entities (Avogadro’s Number, $N_A$).<br>
                  • <strong>Molar Mass ($M$):</strong> The mass of 1 mole of a substance in $\text{g/mol}$, numerically equal to its formula mass.<br>
                  • <strong>Mole Triangle:</strong> $\mathbf{n = \frac{m}{M}}$ (where $n = \text{moles}$, $m = \text{mass in grams}$, $M = \text{molar mass in g/mol}$).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Percentage Composition of Calcium Carbonate',
            problem: 'Calculate the percentage of calcium by mass in pure limestone, calcium carbonate (CaCO₃). Given: Ar(Ca) = 40, Ar(C) = 12, Ar(O) = 16.',
            steps: [
              { label: 'Step 1: Calculate Formula Mass (Mr)', text: 'Mr = (1 × 40) + (1 × 12) + (3 × 16) = 40 + 12 + 48 = <strong>100 g/mol</strong>.' },
              { label: 'Step 2: Apply percentage formula', text: '% Ca = (Total mass of Ca / Mr) × 100% = (40 / 100) × 100%.' },
              { label: 'Step 3: Compute percentage', text: '% Calcium = <strong>40%</strong>.' }
            ],
            proTip: 'Whenever the formula mass happens to equal 100 (like CaCO₃), the mass of each element directly equals its percentage!'
          },
          reciteFlashcards: [
            { q: 'What is Avogadro’s constant?', a: '6.022 × 10²³ particles per mole.' },
            { q: 'What is the formula relating mass, molar mass, and number of moles?', a: 'n = m / M (Moles = Mass / Molar mass).' },
            { q: 'What is the formula mass of water (H₂O)?', a: '18 (2 × 1 + 16).' }
          ],
          amtQuiz: [
            {
              q: 'What is the percentage of oxygen by mass in pure carbon dioxide gas (CO₂)? (Atomic masses: C = 12, O = 16)',
              options: ['72.7%', '27.3%', '32.0%', '50.0%'],
              correct: 0,
              strategy: 'Find Mr of CO₂: 12 + 2(16) = 44. Then divide total oxygen mass (32) by 44.',
              derivation: 'Mr(CO₂) = 12 + 32 = 44. % O = (32 / 44) × 100% = 0.7272 × 100% = 72.7%.',
              trap: 'Dividing 16 by 44 (forgetting that there are TWO oxygen atoms, totaling 32!).'
            }
          ]
        }
      ]
    },

    // UNIT 3: MOTION IN ONE DIMENSION & NEWTON'S LAWS
    {
      id: 'g8-sci-u3',
      number: 'Unit 3',
      title: 'Motion in One Dimension & Newton’s Laws',
      bigIdea: 'Analyze rectilinear kinematics (distance, displacement, speed, velocity, acceleration), motion graphs, and Newton’s three laws of motion.',
      subtopics: [
        {
          id: 'g8-sci-3.1',
          code: '3.1',
          title: 'Speed, Velocity, Acceleration & Motion Graphs',
          survey: {
            blueprint: 'Distance (scalar) vs Displacement (vector). Speed = Distance / time. Velocity = Displacement / time. Acceleration = (v - u) / t. Graphs: Displacement-Time graph (slope = velocity). Velocity-Time graph (slope = acceleration; area under curve = total displacement). Uniform motion vs uniformly accelerated motion.',
            objectives: [
              'Distinguish between scalar quantities (speed, distance) and vector quantities (velocity, displacement).',
              'Calculate acceleration using a = (v - u) / t.',
              'Interpret displacement-time and velocity-time graphs to determine velocity and displacement.'
            ],
            keyFormulas: 'v_avg = s / t | a = (v - u) / t | Area under v-t graph = Displacement s'
          },
          questions: [
            'What physical quantity does the gradient (slope) of a velocity-time graph represent?',
            'Can an object have a constant speed but a changing velocity? Explain.'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">🏎️ 1. Kinematic Definitions</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Distance vs Displacement:</strong> Distance is total path length traveled (scalar, always positive). Displacement is straight-line distance from initial to final position with direction (vector).<br>
                  • <strong>Speed vs Velocity:</strong> Speed is rate of covering distance ($v = d/t$). Velocity is rate of change of displacement ($v = \Delta s / \Delta t$). An object moving in a circle at constant speed has changing velocity because its direction changes continuously!<br>
                  • <strong>Acceleration ($a$):</strong> Rate of change of velocity: <strong>$a = \frac{v - u}{t}$</strong> (where $u = \text{initial velocity}$, $v = \text{final velocity}$, $t = \text{time}$). SI unit: $\text{m/s}^2$. Negative acceleration is deceleration or retardation.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">📈 2. Interpreting Motion Graphs</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>Displacement-Time ($s-t$) Graph:</strong><br>
                    • <strong>Slope (Gradient) = Velocity</strong>.<br>
                    • Straight diagonal line = Constant velocity.<br>
                    • Horizontal line = Object at rest ($v = 0$).<br>
                    • Curved line = Accelerated motion.
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>Velocity-Time ($v-t$) Graph:</strong><br>
                    • <strong>Slope (Gradient) = Acceleration</strong>.<br>
                    • Horizontal line = Uniform velocity ($a = 0$).<br>
                    • <strong>Area Under Curve = Total Displacement ($s$)</strong>!
                  </div>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Calculating Acceleration of a Light Rail Train',
            problem: 'The Addis Ababa Light Rail Transit train accelerates uniformly from rest (0 m/s) to a speed of 20 m/s in 10 seconds. Calculate (a) the acceleration of the train, and (b) the distance traveled during these 10 seconds.',
            steps: [
              { label: 'Step 1: Calculate acceleration', text: 'a = (v - u) / t = (20 m/s - 0 m/s) / 10 s = <strong>2 m/s²</strong>.' },
              { label: 'Step 2: Calculate distance from v-t graph area', text: 'Area of triangle = 1/2 × base × height = 1/2 × 10 s × 20 m/s.' },
              { label: 'Step 3: State distance', text: 'Distance = <strong>100 meters</strong>.' }
            ],
            proTip: 'On a velocity-time graph, the area between the line and the time axis ALWAYS equals total displacement!'
          },
          reciteFlashcards: [
            { q: 'What is the SI unit of acceleration?', a: 'Meters per second squared (m/s²).' },
            { q: 'What does the slope of a velocity-time graph represent?', a: 'Acceleration.' },
            { q: 'What does the area under a velocity-time graph represent?', a: 'Total displacement (distance traveled).' }
          ],
          amtQuiz: [
            {
              q: 'A vehicle moves such that its velocity-time graph is a horizontal straight line at v = 25 m/s for 8 seconds. What is the acceleration of the vehicle and the distance traveled?',
              options: [
                'Acceleration = 0 m/s²; Distance = 200 m',
                'Acceleration = 3.125 m/s²; Distance = 200 m',
                'Acceleration = 0 m/s²; Distance = 100 m',
                'Acceleration = 25 m/s²; Distance = 200 m'
              ],
              correct: 0,
              strategy: 'A horizontal line on a v-t graph has zero slope (zero acceleration). Distance is area of rectangle: v × t.',
              derivation: 'Slope = 0 ➔ a = 0 m/s². Distance = 25 m/s × 8 s = 200 m.',
              trap: 'Thinking that moving at 25 m/s implies non-zero acceleration.'
            }
          ]
        },
        {
          id: 'g8-sci-3.2',
          code: '3.2',
          title: 'Newton’s Three Laws of Motion & Momentum',
          survey: {
            blueprint: 'Newton’s Laws of Motion: 1st Law (Law of Inertia): F_net = 0 ➔ v = constant. 2nd Law: F_net = m · a (Force equals mass times acceleration). 3rd Law (Action-Reaction): For every action, there is an equal and opposite reaction (F_AB = -F_BA). Linear Momentum: p = m · v (in kg·m/s). Law of Conservation of Linear Momentum: Total momentum before collision = Total momentum after collision in an isolated system.',
            objectives: [
              'State and apply Newton’s Second Law of Motion: F = m · a.',
              'Explain Newton’s Third Law and identify action-reaction force pairs.',
              'Define linear momentum (p = m·v) and apply conservation of momentum to collisions.'
            ],
            keyFormulas: 'F = m · a | Momentum: p = m · v [kg·m/s] | Conservation: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂'
          },
          questions: [
            'Why do action and reaction forces never cancel each other out?',
            'What net force is required to accelerate a 1,200 kg car at 2.5 m/s²?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">⚡ 1. Newton’s Second Law ($F = ma$)</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <em>"The acceleration of an object is directly proportional to the net force acting upon it and inversely proportional to its mass."</em><br>
                  • Formula: <strong>$F_{\text{net}} = m \cdot a$</strong>.<br>
                  • $1\text{ Newton} = 1\text{ kg} \cdot \text{m/s}^2$. If you double the force on an object, its acceleration doubles. If you double the mass, acceleration is halved.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">🔄 2. Newton’s Third Law of Motion</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <em>"Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first."</em><br>
                  • <strong>Key Principle:</strong> Action and reaction forces act on <strong>TWO DIFFERENT BODIES</strong>, so they never cancel each other out!<br>
                  • <em>Examples:</em> Walking (foot pushes backward on Earth; Earth pushes forward on foot); Rocket propulsion (exhaust gas expelled backward; rocket pushed forward).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400">💥 3. Linear Momentum ($p = mv$)</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Momentum ($p$):</strong> The quantity of motion an object possesses: <strong>$p = m \cdot v$</strong> (SI unit: $\text{kg} \cdot \text{m/s}$).<br>
                  • <strong>Conservation of Momentum:</strong> In an isolated system (no external forces), the total momentum before collision equals total momentum after collision: $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Applying Newton’s Second Law',
            problem: 'A net braking force of 3,000 N is applied to a vehicle of mass 1,500 kg moving at 20 m/s. Calculate (a) the deceleration of the vehicle, and (b) the time taken for the vehicle to come to a complete stop.',
            steps: [
              { label: 'Step 1: Calculate deceleration using F = ma', text: 'a = F / m = -3,000 N / 1,500 kg = <strong>-2 m/s²</strong> (deceleration of 2 m/s²).' },
              { label: 'Step 2: Calculate time to stop using v = u + at', text: '0 = 20 + (-2) × t ➔ 2t = 20 ➔ t = 20 / 2.' },
              { label: 'Step 3: State time', text: 'Time taken to stop = <strong>10 seconds</strong>.' }
            ],
            proTip: 'A braking force opposes motion, which is why acceleration is negative (deceleration)!'
          },
          reciteFlashcards: [
            { q: 'State Newton’s Second Law in equation form.', a: 'F = m · a (Force = mass × acceleration).' },
            { q: 'Why do action-reaction force pairs never cancel each other?', a: 'Because they act on two different objects, not on the same object.' },
            { q: 'What is the SI unit of linear momentum?', a: 'kg·m/s (or N·s).' }
          ],
          amtQuiz: [
            {
              q: 'A swimmer pushes backward against the water with their hands, and as a result, their body moves forward through the swimming pool. Which law of motion explains this forward propulsion?',
              options: [
                'Newton’s Third Law of Motion (Action and Reaction)',
                'Newton’s First Law of Motion (Inertia)',
                'The Law of Universal Gravitation',
                'Hooke’s Law of Elasticity'
              ],
              correct: 0,
              strategy: 'The swimmer pushes the water (action), and the water pushes the swimmer forward with equal force (reaction).',
              derivation: 'According to Newton’s Third Law, every action produces an equal and opposite reaction on the interacting body.',
              trap: 'Assuming Newton’s First Law because movement is occurring.'
            }
          ]
        }
      ]
    },

    // UNIT 4: PRESSURE, WORK, ENERGY & SIMPLE MACHINES
    {
      id: 'g8-sci-u4',
      number: 'Unit 4',
      title: 'Pressure, Work, Energy & Simple Machines',
      bigIdea: 'Explore liquid pressure, atmospheric pressure, hydraulics, levers, pulleys, mechanical advantage, and efficiency.',
      subtopics: [
        {
          id: 'g8-sci-4.1',
          code: '4.1',
          title: 'Fluid Pressure, Pascal’s Principle & Hydraulics',
          survey: {
            blueprint: 'Pressure = Force / Area (P = F / A, in Pascals Pa = N/m²). Liquid pressure: P = ρ · g · h. Depends only on liquid density and depth, not container shape. Pascal’s Principle: Pressure applied to an enclosed liquid is transmitted undiminished to every portion of the fluid. Hydraulic lift: F₁/A₁ = F₂/A₂. Atmospheric pressure: measured with barometer (~101.3 kPa at sea level; decreases with altitude).',
            objectives: [
              'Define pressure and calculate pressure using P = F / A.',
              'Calculate hydrostatic pressure using P = ρ · g · h.',
              'State Pascal’s Principle and solve hydraulic press mechanical force problems.',
              'Explain how atmospheric pressure varies with elevation in the Ethiopian highlands.'
            ],
            keyFormulas: 'P = F / A [Pa] | Liquid Pressure: P = ρ · g · h | Hydraulic Lift: F₁ / A₁ = F₂ / A₂'
          },
          questions: [
            'Why are the bases of massive dams like the GERD built much thicker than the top?',
            'Why does water boil at a lower temperature in Addis Ababa (altitude ~2,400 m) than in Djibouti at sea level?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">🌊 1. Hydrostatic Liquid Pressure ($P = \rho gh$)</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Pressure Definition:</strong> Force acting perpendicularly per unit area: <strong>$P = \frac{F}{A}$</strong>. SI unit: <strong>Pascal (Pa)</strong> ($1\text{ Pa} = 1\text{ N/m}^2$).<br>
                  • <strong>Pressure in Liquids:</strong> $\mathbf{P = \rho \cdot g \cdot h}$ (where $\rho = \text{density in kg/m}^3$, $g \approx 9.8\text{ m/s}^2$, $h = \text{depth in meters}$).<br>
                  • <em>Key Properties:</em> Liquid pressure increases directly with depth. It acts equally in all directions at a given depth and is independent of the container’s cross-sectional shape. This is why dam walls are built tremendously thick at the base!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">🚗 2. Pascal’s Principle and Hydraulic Machinery</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <em>"Pressure exerted anywhere in an enclosed, incompressible liquid is transmitted undiminished in all directions."</em><br>
                  • <strong>Hydraulic Press Formula:</strong> $\mathbf{\frac{F_1}{A_1} = \frac{F_2}{A_2}} \implies \mathbf{F_2 = F_1 \times \frac{A_2}{A_1}}$.<br>
                  • Applying a small force $F_1$ on a small piston $A_1$ generates a huge lifting force $F_2$ on a large piston $A_2$ (hydraulic car lifts, hydraulic brakes in vehicles).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400">🏔️ 3. Atmospheric Pressure in Ethiopia</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Atmospheric pressure is caused by the weight of air molecules above. As altitude increases, the column of air above becomes shorter and less dense; therefore, <strong>atmospheric pressure decreases with altitude</strong>.<br>
                  • At sea level: $\approx 101.3\text{ kPa}$ (water boils at $100^\circ\text{C}$).<br>
                  • In Addis Ababa ($2,400\text{ m}$ elevation): $\approx 77\text{ kPa}$ (water boils at $\approx 92^\circ\text{C}$).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Hydraulic Car Lift Calculation',
            problem: 'In an auto repair garage in Addis Ababa, a hydraulic lift has a small input piston of area A₁ = 0.02 m² and a large output piston of area A₂ = 1.0 m². What input force F₁ must be exerted on the small piston to raise a 2,000 kg automobile? (Take g = 10 m/s²).',
            steps: [
              { label: 'Step 1: Calculate output load force F₂', text: 'F₂ = Weight = m × g = 2,000 kg × 10 m/s² = 20,000 N.' },
              { label: 'Step 2: Apply Pascal’s hydraulic formula', text: 'F₁ / A₁ = F₂ / A₂ ➔ F₁ = F₂ × (A₁ / A₂) = 20,000 N × (0.02 / 1.0).' },
              { label: 'Step 3: Compute required input force', text: 'F₁ = 20,000 × 0.02 = <strong>400 N</strong> (a person can lift a 2,000 kg car with just 400 N of effort!).' }
            ],
            proTip: 'Hydraulic lifts multiply force by the ratio of the piston areas (A₂/A₁ = 50 times force multiplier)!'
          },
          reciteFlashcards: [
            { q: 'What is the formula for pressure exerted by a liquid at depth h?', a: 'P = ρ · g · h.' },
            { q: 'State Pascal’s Principle.', a: 'Pressure applied to an enclosed liquid is transmitted equally and undiminished in all directions.' },
            { q: 'Why does water boil at a lower temperature in the Ethiopian highlands?', a: 'Because atmospheric pressure is lower at higher altitudes.' }
          ],
          amtQuiz: [
            {
              q: 'A diver descends to a depth of 20 meters in Lake Tana. Taking water density ρ = 1,000 kg/m³ and g = 9.8 m/s², what hydrostatic pressure is exerted by the water alone on the diver?',
              options: ['196,000 Pa (196 kPa)', '19,600 Pa', '98,000 Pa', '392,000 Pa'],
              correct: 0,
              strategy: 'Apply P = ρ · g · h.',
              derivation: 'P = 1,000 kg/m³ × 9.8 m/s² × 20 m = 196,000 Pascals (196 kPa).',
              trap: 'Forgetting depth h or using 10 instead of 9.8.'
            }
          ]
        },
        {
          id: 'g8-sci-4.2',
          code: '4.2',
          title: 'Simple Machines: Levers, Pulleys, Mechanical Advantage & Efficiency',
          survey: {
            blueprint: 'Simple machines make work easier by multiplying force, multiplying distance, or changing direction. Six classical simple machines: Lever, Pulley, Wheel and Axle, Inclined Plane, Wedge, Screw. Key parameters: Mechanical Advantage MA = Load / Effort; Velocity Ratio VR = Distance moved by Effort / Distance moved by Load; Efficiency η = (Work Output / Work Input) × 100% = (MA / VR) × 100%. Efficiency is always < 100% due to friction.',
            objectives: [
              'Classify the three classes of levers based on positions of Fulcrum, Load, and Effort.',
              'Calculate Mechanical Advantage (MA), Velocity Ratio (VR), and Efficiency (η) for simple machines.',
              'Explain why the efficiency of practical machines is always strictly less than 100%.'
            ],
            keyFormulas: 'MA = Load / Effort | VR = d_effort / d_load | Efficiency: η = (MA / VR) × 100%'
          },
          questions: [
            'Why can the efficiency of a real mechanical machine never reach 100%?',
            'In a Class 1 lever, what component is situated in the middle between Load and Effort?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">🏗️ 1. Classes of Levers (FLE Rule)</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Use the mnemonic <strong>FLE 1-2-3</strong> (what is in the MIDDLE):<br>
                  • <strong>Class 1 (Fulcrum in middle):</strong> Crowbar, scissors, seesaw. Can have $\text{MA} > 1$, $\text{MA} = 1$, or $\text{MA} < 1$.<br>
                  • <strong>Class 2 (Load in middle):</strong> Wheelbarrow, nutcracker, bottle opener. Effort arm is always longer than load arm ➔ $\mathbf{\text{MA} > 1}$ (force multiplier).<br>
                  • <strong>Class 3 (Effort in middle):</strong> Tweezers, fishing rod, human forearm. $\mathbf{\text{MA} < 1}$ (speed/distance multiplier).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">⚙️ 2. Machine Performance Metrics</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Mechanical Advantage (MA):</strong> $\mathbf{\text{MA} = \frac{\text{Load } (L)}{\text{Effort } (E)}}$.<br>
                  • <strong>Velocity Ratio (VR):</strong> $\mathbf{\text{VR} = \frac{\text{Distance moved by Effort}}{\text{Distance moved by Load}} = \frac{d_E}{d_L}}$. For a pulley system, $\text{VR}$ equals the number of supporting rope segments.<br>
                  • <strong>Efficiency ($\eta$):</strong> $\mathbf{\eta = \frac{\text{Work Output}}{\text{Work Input}} \times 100\% = \frac{\text{MA}}{\text{VR}} \times 100\%}$. In real machines, $\eta < 100\%$ because energy is lost as thermal energy overcoming friction.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Efficiency of a Pulley System',
            problem: 'A pulley system with a Velocity Ratio VR = 4 is used to lift a load of 600 N by applying an effort of 200 N. Calculate (a) the Mechanical Advantage (MA), and (b) the efficiency of the pulley system.',
            steps: [
              { label: 'Step 1: Calculate MA', text: 'MA = Load / Effort = 600 N / 200 N = <strong>3.0</strong>.' },
              { label: 'Step 2: Calculate efficiency formula', text: 'η = (MA / VR) × 100% = (3.0 / 4) × 100%.' },
              { label: 'Step 3: State efficiency', text: 'η = 0.75 × 100% = <strong>75%</strong> (25% of input energy is lost to friction and lifting pulley blocks).' }
            ],
            proTip: 'Velocity Ratio (VR) depends purely on geometry and never changes; Mechanical Advantage (MA) decreases when friction increases!'
          },
          reciteFlashcards: [
            { q: 'What is the formula for the efficiency of a machine in terms of MA and VR?', a: 'Efficiency = (MA / VR) × 100%.' },
            { q: 'In a wheelbarrow, which component is located in the middle?', a: 'The Load (making it a Class 2 lever).' },
            { q: 'Why is machine efficiency always strictly less than 100% in practice?', a: 'Because some work input is always lost overcoming friction and air resistance.' }
          ],
          amtQuiz: [
            {
              q: 'A machine has a velocity ratio VR = 5. When an effort of 100 N is applied, it lifts a load of 400 N. What is the mechanical efficiency of this machine?',
              options: ['80%', '40%', '100%', '25%'],
              correct: 0,
              strategy: 'Find MA = Load / Effort = 400 / 100 = 4. Then η = (MA / VR) × 100% = (4 / 5) × 100%.',
              derivation: 'MA = 400 / 100 = 4. Efficiency η = (4 / 5) × 100% = 80%.',
              trap: 'Inverting MA and VR or forgetting to multiply by 100%.'
            }
          ]
        }
      ]
    },

    // UNIT 5: HEAT ENERGY, ELECTRICITY & MAGNETISM
    {
      id: 'g8-sci-u5',
      number: 'Unit 5',
      title: 'Heat Energy, Electricity & Magnetism',
      bigIdea: 'Analyze thermal physics, heat transfer mechanisms, electric current, Ohm’s law, series/parallel circuits, and electromagnetism.',
      subtopics: [
        {
          id: 'g8-sci-5.1',
          code: '5.1',
          title: 'Heat vs Temperature, Thermal Expansion & Heat Transfer',
          survey: {
            blueprint: 'Heat (thermal energy in transit, in Joules) vs Temperature (average kinetic energy of particles, in °C or K). Heat transfer mechanisms: Conduction (solids, through particle collisions), Convection (fluids, through density currents), Radiation (electromagnetic waves, travels through vacuum). Thermal expansion of solids, liquids, and anomalous expansion of water (maximum density at 4°C). Specific heat capacity Q = m · c · ΔT.',
            objectives: [
              'Distinguish between heat energy and temperature.',
              'Contrast conduction, convection, and radiation with practical everyday examples.',
              'Explain the anomalous expansion of water and its vital role in aquatic life survival.',
              'Calculate heat transfer using Q = m · c · ΔT.'
            ],
            keyFormulas: 'Heat: Q = m · c · ΔT [J] | Temperature conversion: T(K) = T(°C) + 273.15'
          },
          questions: [
            'Why does ice form on the top surface of a lake rather than freezing from the bottom up?',
            'Why are solar water heaters painted matte black rather than shiny silver?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">🔥 1. Heat Energy vs Temperature</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Heat:</strong> Total thermal energy transferred from a hotter body to a colder body due to temperature difference (SI unit: <strong>Joule, J</strong>).<br>
                  • <strong>Temperature:</strong> A quantitative measure of the <strong>average kinetic energy</strong> of individual particles in a substance (measured in <strong>Kelvin, K</strong> or degrees Celsius, °C). A cup of boiling water has a higher temperature than Lake Tana, but Lake Tana contains vastly more total heat energy!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">🌡️ 2. Three Modes of Heat Transfer</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Conduction:</strong> Transfer of heat through direct atomic collisions without bulk movement of material (dominant in solids, especially metals).<br>
                  • <strong>Convection:</strong> Transfer of heat by actual macroscopic movement of heated fluid molecules (convection currents in boiling water, wind, ocean currents).<br>
                  • <strong>Radiation:</strong> Heat transfer via infrared electromagnetic waves that <strong>requires no physical medium</strong> (how solar energy reaches Earth through the vacuum of space). Dark, matte surfaces are the best absorbers and emitters of radiation!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400">❄️ 3. Anomalous Expansion of Water</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Most liquids contract continuously upon cooling. Water behaves abnormally between <strong>4°C and 0°C</strong>: as it cools below 4°C, it expands, becoming <em>less dense</em>. Water reaches its <strong>maximum density at 4°C</strong>. Ice ($0^\circ\text{C}$) floats on top of liquid water, insulating the deep water below at 4°C and preserving aquatic fish and plant life during winter!
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Calculating Heat Energy to Boil Water',
            problem: 'Calculate the heat energy Q required to heat 2 kg of water from 20°C to 100°C. Given specific heat capacity of water c = 4,200 J/(kg·°C).',
            steps: [
              { label: 'Step 1: Calculate temperature change', text: 'ΔT = T_final - T_initial = 100°C - 20°C = 80°C.' },
              { label: 'Step 2: Apply formula Q = m · c · ΔT', text: 'Q = 2 kg × 4,200 J/(kg·°C) × 80°C.' },
              { label: 'Step 3: Compute heat', text: 'Q = <strong>672,000 Joules = 672 kJ</strong>.' }
            ],
            proTip: 'Water has an extraordinarily high specific heat capacity (4,200 J/kg·°C), making it the perfect coolant for car engines and power plants!'
          },
          reciteFlashcards: [
            { q: 'At what temperature does pure liquid water reach its maximum density?', a: 'At 4°C.' },
            { q: 'Which method of heat transfer can travel through the absolute vacuum of space?', a: 'Thermal Radiation (infrared electromagnetic waves).' },
            { q: 'What is the formula for heat absorbed: Q = ?', a: 'Q = m · c · ΔT.' }
          ],
          amtQuiz: [
            {
              q: 'Through which process does thermal energy from the Sun travel through the vacuum of interplanetary space to warm planet Earth?',
              options: ['Thermal Radiation', 'Thermal Conduction', 'Thermal Convection', 'Advection'],
              correct: 0,
              strategy: 'Space is a vacuum; conduction and convection require a material medium.',
              derivation: 'Radiation consists of electromagnetic waves that do not require any physical material medium to propagate.',
              trap: 'Choosing convection because hot air rises on Earth.'
            }
          ]
        },
        {
          id: 'g8-sci-5.2',
          code: '5.2',
          title: 'Electric Circuits, Ohm’s Law & Electromagnetism',
          survey: {
            blueprint: 'Electric Current: rate of flow of charge I = Q / t (Amperes A = C/s). Potential difference: V = W / Q (Volts V). Ohm’s Law: V = I · R. Resistance in Series: R_eq = R₁ + R₂ + ... Resistance in Parallel: 1/R_eq = 1/R₁ + 1/R₂ + ... Magnetic fields: North and South poles; opposite poles attract, like poles repel. Electromagnetism: Oersted’s discovery (current produces magnetic field); Solenoid with iron core = Electromagnet.',
            objectives: [
              'State Ohm’s Law and solve circuit problems using V = I · R.',
              'Calculate equivalent resistance for resistors in series and parallel circuits.',
              'Explain how an electromagnet works and list factors that increase its strength.'
            ],
            keyFormulas: 'Ohm’s Law: V = I · R | Series: R_eq = R₁ + R₂ | Parallel: 1/R_eq = 1/R₁ + 1/R₂ | Power: P = V · I'
          },
          questions: [
            'Why are home appliances in Ethiopia wired in parallel rather than in series?',
            'How can you increase the magnetic field strength of an electromagnet?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">⚡ 1. Ohm’s Law ($V = IR$)</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <em>"At constant temperature, the electric current passing through a conductor is directly proportional to the potential difference across its terminals."</em><br>
                  • Formula: <strong>$V = I \cdot R$</strong> (where $V = \text{Voltage in Volts}$, $I = \text{Current in Amperes}$, $R = \text{Resistance in Ohms } \Omega$).<br>
                  • An ammeter (measures current) is always connected in <strong>series</strong>; a voltmeter (measures potential difference) is connected in <strong>parallel</strong>.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">🔌 2. Series vs Parallel Circuits</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-cyan-300">Series Circuit:</strong><br>
                    • Single continuous loop.<br>
                    • Current is identical everywhere: $I_{\text{total}} = I_1 = I_2$.<br>
                    • $R_{\text{total}} = R_1 + R_2 + R_3$.<br>
                    • If one lamp burns out, all lamps turn off!
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-amber-300">Parallel Circuit:</strong><br>
                    • Multiple independent branches.<br>
                    • Voltage is identical across each branch: $V_{\text{total}} = V_1 = V_2$.<br>
                    • $\frac{1}{R_{\text{total}}} = \frac{1}{R_1} + \frac{1}{R_2}$. Total resistance decreases!<br>
                    • If one appliance is switched off, others continue operating normally.
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400">🧲 3. Electromagnets</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A temporary magnet created by winding an insulated copper coil (solenoid) around a soft iron core. When direct current flows, a magnetic field is produced.<br>
                  • <strong>To Increase Electromagnet Strength:</strong> 1) Increase electric current; 2) Increase number of coil turns; 3) Insert a soft iron core.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Calculating Parallel Equivalent Resistance',
            problem: 'Two resistors of R₁ = 6 Ω and R₂ = 12 Ω are connected in parallel across a 12 V battery. Calculate (a) the equivalent resistance of the circuit, and (b) the total current drawn from the battery.',
            steps: [
              { label: 'Step 1: Parallel resistance formula', text: '1/R_eq = 1/R₁ + 1/R₂ = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4.' },
              { label: 'Step 2: Invert to find R_eq', text: 'R_eq = 4 / 1 = <strong>4 Ω</strong>.' },
              { label: 'Step 3: Calculate total current using Ohm’s Law', text: 'I = V / R_eq = 12 V / 4 Ω = <strong>3 Amperes (A)</strong>.' }
            ],
            proTip: 'In a parallel circuit, the equivalent resistance is ALWAYS smaller than the smallest individual branch resistor!'
          },
          reciteFlashcards: [
            { q: 'State Ohm’s Law formula.', a: 'V = I · R (Voltage = Current × Resistance).' },
            { q: 'Why are domestic house circuits wired in parallel?', a: 'So each appliance receives full mains voltage and can be switched on/off independently.' },
            { q: 'Name two ways to make an electromagnet stronger.', a: 'Increase the electric current and increase the number of wire coils.' }
          ],
          amtQuiz: [
            {
              q: 'A 24 V potential difference is applied across an electric heater with a resistance of 8 Ω. What current flows through the heater element?',
              options: ['3 A', '192 A', '0.33 A', '16 A'],
              correct: 0,
              strategy: 'Apply Ohm’s Law: I = V / R.',
              derivation: 'I = 24 V / 8 Ω = 3 Amperes.',
              trap: 'Multiplying voltage by resistance (24 × 8 = 192) instead of dividing.'
            }
          ]
        }
      ]
    },

    // UNIT 6: GENETICS, HEREDITY & CELLULAR REPRODUCTION
    {
      id: 'g8-sci-u6',
      number: 'Unit 6',
      title: 'Genetics, Heredity & Cellular Reproduction',
      bigIdea: 'Explore cell division (mitosis vs meiosis), DNA, Mendelian genetics, Punnett squares, and human reproductive health.',
      subtopics: [
        {
          id: 'g8-sci-6.1',
          code: '6.1',
          title: 'Cell Division: Mitosis vs Meiosis',
          survey: {
            blueprint: 'Chromosomes: DNA strands carrying genes in cell nucleus (Humans: 46 chromosomes = 23 pairs; diploid 2n). Mitosis: Equational division for growth, tissue repair, asexual reproduction; produces 2 genetically identical diploid daughter cells (Prophase, Metaphase, Anaphase, Telophase). Meiosis: Reduction division in gonads (testes, ovaries); produces 4 genetically diverse haploid gametes (sperm/egg, n = 23) via crossing over.',
            objectives: [
              'Distinguish between diploid (2n) somatic cells and haploid (n) gametes.',
              'Contrast the biological functions and products of mitosis and meiosis.',
              'Explain how crossing over in meiosis introduces genetic variation in offspring.'
            ],
            keyFormulas: 'Mitosis: 2n ➔ 2 daughter cells (2n each) | Meiosis: 2n ➔ 4 gametes (n each)'
          },
          questions: [
            'Why must gametes (sperm and egg cells) have half the chromosome number of normal body cells?',
            'What is the fundamental difference in the genetic outcome of mitosis compared to meiosis?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">🧬 1. Chromosomes and the Genetic Blueprint</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Inside the nucleus of eukaryotic cells, DNA is packaged into thread-like structures called <strong>chromosomes</strong>:<br>
                  • <strong>Diploid number ($2n$):</strong> Full complement of chromosomes in somatic (body) cells (in humans, $2n = 46$ chromosomes).<br>
                  • <strong>Haploid number ($n$):</strong> Half chromosome count found exclusively in gametes (sperm and ova; in humans, $n = 23$). During fertilization: $n (\text{sperm}) + n (\text{egg}) = 2n (\text{zygote})$, restoring the species chromosome count!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">⚔️ 2. Mitosis vs Meiosis Comparison</h4>
                <div class="overflow-x-auto text-xs text-slate-300">
                  <table class="w-full border-collapse border border-slate-800">
                    <tr class="bg-space-950 font-bold">
                      <th class="p-2 border border-slate-800">Feature</th>
                      <th class="p-2 border border-slate-800 text-cyan-400">Mitosis</th>
                      <th class="p-2 border border-slate-800 text-amber-400">Meiosis</th>
                    </tr>
                    <tr><td class="p-2 border border-slate-800">Location</td><td class="p-2 border border-slate-800">Somatic (body) cells</td><td class="p-2 border border-slate-800">Reproductive organs (gonads)</td></tr>
                    <tr><td class="p-2 border border-slate-800">Daughter Cells</td><td class="p-2 border border-slate-800 font-bold">2 diploid ($2n$) cells</td><td class="p-2 border border-slate-800 font-bold">4 haploid ($n$) cells</td></tr>
                    <tr><td class="p-2 border border-slate-800">Genetic Content</td><td class="p-2 border border-slate-800">Genetically identical clones</td><td class="p-2 border border-slate-800">Genetically diverse gametes</td></tr>
                    <tr><td class="p-2 border border-slate-800">Role</td><td class="p-2 border border-slate-800">Growth, tissue repair</td><td class="p-2 border border-slate-800">Sexual reproduction</td></tr>
                  </table>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Chromosome Number Calculations',
            problem: 'A domestic dog has 78 chromosomes in its skin cells. Calculate the chromosome number in (a) a dog muscle cell after mitosis, and (b) a dog sperm cell produced by meiosis.',
            steps: [
              { label: 'Step 1: Understand skin cell diploid count', text: 'Skin cell is somatic ➔ 2n = 78 chromosomes.' },
              { label: 'Step 2: Muscle cell after mitosis', text: 'Mitosis produces identical diploid cells ➔ <strong>78 chromosomes</strong>.' },
              { label: 'Step 3: Sperm cell after meiosis', text: 'Meiosis reduces chromosome count by half (haploid n) ➔ 78 / 2 = <strong>39 chromosomes</strong>.' }
            ],
            proTip: 'Somatic cells (muscle, skin, liver) always have 2n; only gametes (sperm, egg) have n!'
          },
          reciteFlashcards: [
            { q: 'How many chromosomes are present in a normal human gamete (sperm or egg)?', a: '23 chromosomes (haploid, n).' },
            { q: 'How many daughter cells are produced by meiosis from one parent cell?', a: '4 haploid daughter cells.' },
            { q: 'What is the biological function of mitosis in multicellular organisms?', a: 'Growth, development, and tissue repair/replacement.' }
          ],
          amtQuiz: [
            {
              q: 'If an animal’s somatic body cells contain 36 chromosomes, how many chromosomes will be found in a mature, unfertilized ovum produced by that animal?',
              options: ['18', '36', '72', '9'],
              correct: 0,
              strategy: 'An ovum is a gamete produced by meiosis, having half the somatic chromosome count (n = 2n / 2).',
              derivation: 'Somatic count 2n = 36. Gamete count n = 36 / 2 = 18 chromosomes.',
              trap: 'Keeping the same number 36 (confusing mitosis with meiosis).'
            }
          ]
        },
        {
          id: 'g8-sci-6.2',
          code: '6.2',
          title: 'Mendelian Genetics, Punnett Squares & Reproductive Health',
          survey: {
            blueprint: 'Gregor Mendel (Father of Genetics): Experiments with garden peas. Alleles: Dominant (expressed in capital letter, e.g., T) vs Recessive (expressed only in homozygous state, e.g., t). Genotype (genetic makeup: TT, Tt, tt) vs Phenotype (physical appearance: tall, short). Monohybrid cross: Tt × Tt gives 3:1 phenotypic ratio and 1:2:1 genotypic ratio. Sex determination in humans: XX (female), XY (male). STI prevention and adolescent reproductive health.',
            objectives: [
              'Define gene, allele, homozygous, heterozygous, genotype, and phenotype.',
              'Construct and interpret Punnett squares for monohybrid crosses.',
              'Explain how sex is determined chromosomally in humans (XX vs XY).',
              'Describe the modes of transmission, symptoms, and prevention of STIs including HIV/AIDS.'
            ],
            keyFormulas: 'Monohybrid Heterozygous Cross (Tt × Tt): Phenotype = 3 Dominant : 1 Recessive | Genotype = 1 TT : 2 Tt : 1 tt'
          },
          questions: [
            'Why does a cross between two heterozygous tall pea plants (Tt × Tt) produce short offspring 25% of the time?',
            'Which human parent’s gamete determines the biological sex of a baby?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">🌱 1. Mendel’s Laws of Inheritance</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Gene & Allele:</strong> A gene is a unit of heredity located on DNA. An <strong>allele</strong> is an alternative form of a gene (e.g., allele $T$ for tallness; allele $t$ for dwarfness).<br>
                  • <strong>Dominant vs Recessive:</strong> A dominant allele masks the expression of a recessive allele in heterozygous condition ($Tt$ appears tall). A recessive trait appears only when homozygous recessive ($tt$).<br>
                  • <strong>Homozygous vs Heterozygous:</strong> Homozygous has identical alleles ($TT$ or $tt$); heterozygous has two different alleles ($Tt$).<br>
                  • <strong>Genotype vs Phenotype:</strong> Genotype is the genetic constitution ($TT, Tt, tt$); phenotype is the observable physical characteristic (Tall, Short).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">🚹 2. Human Sex Determination</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Humans have 22 pairs of autosomes and <strong>1 pair of sex chromosomes</strong>:<br>
                  • Females: Homogametic with two <strong>XX</strong> chromosomes. All ova carry one X chromosome.<br>
                  • Males: Heterogametic with one <strong>X and one Y</strong> chromosome. Half of sperm carry an X chromosome, half carry a Y chromosome.<br>
                  • <em>The father’s sperm determines the biological sex:</em> $\text{Egg } X + \text{Sperm } X \rightarrow \text{Female } XX$; $\text{Egg } X + \text{Sperm } Y \rightarrow \text{Male } XY$ (exact 50% probability).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Monohybrid Pea Plant Punnett Square',
            problem: 'Two heterozygous tall pea plants (Tt) are crossed. Using a Punnett square, determine (a) the genotypic ratio, and (b) the percentage probability that an offspring will be dwarf (tt).',
            steps: [
              { label: 'Step 1: Set up Punnett square', text: 'Gametes from Parent 1: T and t. Gametes from Parent 2: T and t. Combinations: TT, Tt, Tt, tt.' },
              { label: 'Step 2: Genotypic ratio', text: '1 TT (homozygous tall) : 2 Tt (heterozygous tall) : 1 tt (homozygous short) = <strong>1 : 2 : 1</strong>.' },
              { label: 'Step 3: Probability of dwarf (tt)', text: 'Only 1 out of 4 boxes is tt = 1/4 = <strong>25% probability</strong>.' }
            ],
            proTip: 'In Mendelian monohybrid crosses, heterozygous crosses ALWAYS yield a 3:1 phenotypic ratio and a 1:2:1 genotypic ratio!'
          },
          reciteFlashcards: [
            { q: 'What is the phenotypic ratio in a cross between two heterozygous parents (Tt × Tt)?', a: '3 : 1 (3 dominant : 1 recessive).' },
            { q: 'What sex chromosome combination determines a human male?', a: 'XY (XX is female).' },
            { q: 'What is the difference between genotype and phenotype?', a: 'Genotype is genetic makeup (alleles); phenotype is observable physical appearance.' }
          ],
          amtQuiz: [
            {
              q: 'In humans, brown eye color (B) is dominant over blue eye color (b). If a homozygous brown-eyed father (BB) has children with a blue-eyed mother (bb), what percentage of their offspring are expected to have brown eyes?',
              options: ['100%', '50%', '75%', '25%'],
              correct: 0,
              strategy: 'Cross BB × bb. Every offspring receives B from father and b from mother, resulting in 100% Bb (brown eyes).',
              derivation: 'All children will have genotype Bb. Since B is dominant over b, 100% will phenotypically exhibit brown eyes.',
              trap: 'Assuming a 3:1 ratio (that only occurs when BOTH parents are heterozygous Bb!).'
            }
          ]
        }
      ]
    },

    // UNIT 7: ECOSYSTEMS, BIOMES & ENVIRONMENTAL CONSERVATION
    {
      id: 'g8-sci-u7',
      number: 'Unit 7',
      title: 'Ecosystems, Biomes & Environmental Conservation',
      bigIdea: 'Explore symbiotic relationships, Ethiopian biomes, ecological adaptations, deforestation, and environmental sustainability.',
      subtopics: [
        {
          id: 'g8-sci-7.1',
          code: '7.1',
          title: 'Symbiotic Associations & Ecological Adaptations',
          survey: {
            blueprint: 'Symbiosis (living together): 1) Mutualism (+/+ both benefit, e.g., Rhizobium nitrogen-fixing bacteria in legume roots; mycorrhizae). 2) Commensalism (+/0 one benefits, other unharmed, e.g., epiphytic orchids on trees). 3) Parasitism (+/- one benefits at host expense, e.g., tapeworm, tick, mistletoe). Adaptations: Xerophytes (desert plants: thick waxy cuticle, sunken stomata, succulent stems, e.g., cactus, acacia); Hydrophytes (water plants: aerenchyma, large floating leaves).',
            objectives: [
              'Distinguish between mutualism, commensalism, and parasitism with biological examples.',
              'Explain the agronomic importance of the Rhizobium-legume mutualistic association in Ethiopian farming.',
              'Identify structural and physiological adaptations of xerophytic plants in arid lowlands (Afar, Somali regions).'
            ],
            keyFormulas: 'Symbiotic relationships: Mutualism (+/+), Commensalism (+/0), Parasitism (+/-)'
          },
          questions: [
            'How do Rhizobium bacteria in the root nodules of chickpea plants enrich soil fertility?',
            'What adaptations allow acacia trees and succulents to survive in the arid lowlands of Afar?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">🤝 1. Types of Symbiotic Associations</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Mutualism (+/+):</strong> An obligatory or facultative interaction where <strong>both species benefit</strong>:<br>
                  - <em>Rhizobium and Legumes:</em> Bacteria living in root nodules of beans, peas, and chickpeas convert atmospheric nitrogen ($\text{N}_2$) into nitrates ($\text{NO}_3^-$) usable by plants, while the plant provides sugars and shelter.<br>
                  - <em>Lichens:</em> Mutualistic partnership between a fungus (provides moisture and minerals) and an alga/cyanobacterium (photosynthesizes carbohydrates).<br>
                  • <strong>Commensalism (+/0):</strong> One organism benefits while the other is unaffected (e.g., epiphytic orchids growing high on forest trees in Kaffa to reach sunlight).<br>
                  • <strong>Parasitism (+/-):</strong> The parasite derives nourishment and habitat at the direct expense of the host organism (e.g., tapeworms in human intestines; ticks on cattle).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400">🌵 2. Plant Adaptations to Extreme Environments</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Xerophytes (Arid Land Plants):</strong> Adapted to conserve water (Afar, Ogaden):<br>
                  - Deep extensive taproots to reach groundwater.<br>
                  - Leaves reduced to spines/thorns to minimize transpiration surface area.<br>
                  - Thick waxy cuticles and sunken stomata that close during daylight.<br>
                  - Fleshy succulent stems storing water (cactus, euphorbia).<br>
                  • <strong>Hydrophytes (Aquatic Plants):</strong> Adapted to aquatic life (Lake Tana, Lake Ziway): air-filled cavities (aerenchyma) for buoyancy, stomata restricted to upper leaf surfaces, thin/absent cuticles.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Classifying Biological Relationships',
            problem: 'Classify each relationship as mutualism, commensalism, or parasitism: (a) Honeyguide bird leading a human to a wild bee nest, (b) Cattle egrets catching grasshoppers stirred up by grazing oxen, (c) A tick sucking blood from a goat.',
            steps: [
              { label: 'Part (a) Honeyguide & human', text: 'Mutualism (+/+): Both gain access to honey and beeswax food resources.' },
              { label: 'Part (b) Cattle egret & oxen', text: 'Commensalism (+/0): The egret benefits by catching flushed insects; the oxen are completely unharmed and unbenefited.' },
              { label: 'Part (c) Tick & goat', text: 'Parasitism (+/-): The tick feeds on goat blood while transmitting blood parasites and causing anemia in the host.' }
            ],
            proTip: 'In mutualism, both have plus signs (+/+); in parasitism, one is plus and one is minus (+/-)!'
          },
          reciteFlashcards: [
            { q: 'What type of symbiotic association occurs between Rhizobium bacteria and legume roots?', a: 'Mutualism (both organisms benefit).' },
            { q: 'What are xerophytes?', a: 'Plants adapted to survive in extremely dry, arid environments.' },
            { q: 'Give an example of commensalism.', a: 'Epiphytic orchids growing on branches of tall rainforest trees.' }
          ],
          amtQuiz: [
            {
              q: 'The interaction between Rhizobium nitrogen-fixing bacteria living in the root nodules of an Ethiopian chickpea plant and the chickpea itself is classified as:',
              options: ['Mutualism', 'Parasitism', 'Commensalism', 'Predation'],
              correct: 0,
              strategy: 'The bacteria provide fixed nitrogen to the plant, and the plant supplies carbohydrates to the bacteria.',
              derivation: 'Since both species derive substantial survival and metabolic benefits from the interaction, it is a mutualistic relationship (+/+).',
              trap: 'Confusing mutualism with commensalism.'
            }
          ]
        },
        {
          id: 'g8-sci-7.2',
          code: '7.2',
          title: 'Ethiopian Biomes, Deforestation & Environmental Sustainability',
          survey: {
            blueprint: 'Ethiopian Agro-ecological Biomes: Afro-Alpine (Bale/Simien Mountains; giant lobelia, Walia Ibex, Ethiopian Wolf), Moist Montane Forest (Kaffa, Illubabor; wild Coffea arabica), Dry Montane Woodland, Acacia Savanna, Arid Lowland Desert. Environmental threats: Deforestation, soil erosion, habitat loss, climate change. Conservation strategies: Green Legacy Initiative, reforestation, terracing, protected national parks.',
            objectives: [
              'Characterize the major agro-ecological biomes of Ethiopia and their endemic wildlife.',
              'Explain the root causes and catastrophic ecological impacts of deforestation and topsoil erosion.',
              'Evaluate modern Ethiopian conservation initiatives including the Green Legacy reforestation campaign.'
            ],
            keyFormulas: 'Sustainable Development = Meeting present societal needs without compromising the ability of future generations to meet their own needs'
          },
          questions: [
            'Why are endemic species like the Walia Ibex and Ethiopian Wolf particularly vulnerable to habitat destruction?',
            'How does extensive tree planting prevent severe topsoil erosion during the Kiremt rainy season?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400">⛰️ 1. Major Biomes and Endemic Wildlife of Ethiopia</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Ethiopia’s dramatic topographic variations (from 125 m below sea level at Danakil Depression to 4,533 m at Ras Dejen) give rise to diverse biomes:<br>
                  • <strong>Afro-Alpine Ecosystem (Bale and Simien Mountains):</strong> Characterized by extreme cold, frost, and high UV radiation. Home to endemic afro-alpine plants (<em>Giant Lobelia</em>) and iconic endemic mammals: <strong>Ethiopian Wolf (Canis simensis)</strong>, <strong>Walia Ibex (Capra walie)</strong>, and <strong>Gelada Baboon (Theropithecus gelada)</strong>.<br>
                  • <strong>Moist Evergreen Montane Forest (Southwestern Highlands: Kaffa, Sheka):</strong> High rainfall rainforests; the evolutionary birthplace of wild <strong>Arabica Coffee (Coffea arabica)</strong>.<br>
                  • <strong>Acacia-Commiphora Bushland & Savanna:</strong> Covers the Rift Valley and southeastern lowlands. Supports diverse ungulates, zebras, and carnivores.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400">🌳 2. Deforestation, Soil Erosion & Conservation</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>The Threat:</strong> Rapid population growth has driven extensive clearing of indigenous forests for agricultural land, firewood, and charcoal, reducing historical forest cover. This causes severe <strong>sheet and gully soil erosion</strong>, loss of reservoir capacity behind dams, and flash flooding.<br>
                  • <strong>Conservation Interventions:</strong><br>
                  - <em>Green Legacy Initiative:</em> Mass nationwide afforestation planting billions of multipurpose seedlings annually.<br>
                  - <em>Watershed Management:</em> Hillside contour terracing, stone bunds, and check dams to slow runoff and recharge groundwater.<br>
                  - <em>National Parks:</em> Protected sanctuaries for biodiversity conservation.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Ecological Impact of Terracing and Reforestation',
            problem: 'Explain how building stone bunds and planting vetiver grass along steep highland slopes in Tigray and Amhara stops gully erosion and preserves downstream reservoir dams.',
            steps: [
              { label: 'Step 1: Reduce runoff velocity', text: 'Stone bunds and vegetative contour hedges act as physical barriers, slowing the velocity of torrential Kiremt rainwater runoff.' },
              { label: 'Step 2: Increase infiltration', text: 'Slower water velocity gives rainwater time to infiltrate deeply into the soil, recharging groundwater aquifers instead of scouring topsoil.' },
              { label: 'Step 3: Prevent dam siltation', text: 'By binding the soil, silt cannot be washed into rivers, protecting downstream hydroelectric dams (such as GERD, Tekeze) from premature silt accumulation.' }
            ],
            proTip: 'Soil conservation directly safeguards national infrastructure: every ton of soil retained on a hillside is a ton of silt kept out of dam turbines!'
          },
          reciteFlashcards: [
            { q: 'In which Ethiopian national park is the critically endangered Walia Ibex exclusively found?', a: 'Simien Mountains National Park.' },
            { q: 'What is the wild evolutionary birthplace of Arabica coffee?', a: 'The moist montane rainforests of Kaffa in Southwestern Ethiopia.' },
            { q: 'What nationwide initiative aims to restore forest cover and combat land degradation in Ethiopia?', a: 'The Green Legacy Initiative.' }
          ],
          amtQuiz: [
            {
              q: 'The critically endangered Ethiopian Wolf (Canis simensis) and the Walia Ibex (Capra walie) are endemic species uniquely adapted to which specific ecological biome?',
              options: [
                'Afro-Alpine highland ecosystem above 3,000 meters elevation',
                'Acacia-Commiphora dry bushland in the Afar depression',
                'Lowland equatorial tropical rainforest',
                'Coastal mangrove swamp ecosystem'
              ],
              correct: 0,
              strategy: 'The Simien and Bale mountains represent the Afro-Alpine biome characterized by extreme cold and high altitude.',
              derivation: 'Both the Ethiopian Wolf and Walia Ibex are cold-adapted endemic mammals residing in the Afro-Alpine moorlands of the Simien and Bale highlands.',
              trap: 'Choosing the lowland acacia bushland.'
            }
          ]
        }
      ]
    }
  ]
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_science.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8Science, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote deep g8_science.js with all 7 units and 14 complete subtopics!');
