const fs = require('fs');
const path = require('path');

const g8Science = {
  id: 'science',
  name: 'General Science',
  icon: '🔬',
  units: [
    {
      id: 'g8-sci-u1',
      number: 'Unit 1',
      title: 'Basics of Chemical Reactions',
      bigIdea: 'Understand chemical equations, conservation of mass, balancing techniques, types of chemical reactions, and thermal changes (exothermic vs endothermic).',
      subtopics: [
        {
          id: 'g8-sci-1.1',
          code: '1.1',
          title: 'Chemical Equations, Balancing & Reaction Types',
          survey: {
            blueprint: 'Chemical equation: symbolic representation of a reaction (Reactants ➔ Products). Balancing equations: adjusting stoichiometric coefficients to satisfy the Law of Conservation of Mass. 4 major types: Synthesis, Decomposition, Single Displacement, Double Displacement. Energy: Exothermic (heat released) vs Endothermic (heat absorbed).',
            objectives: [
              'Balance chemical equations using the systematic inspection method.',
              'Classify reactions into combination, decomposition, single displacement, and double replacement.',
              'Distinguish between exothermic (ΔH < 0, temperature rises) and endothermic (ΔH > 0, temperature falls) reactions.'
            ],
            keyFormulas: 'Law of Conservation of Mass: Total Mass of Reactants = Total Mass of Products'
          },
          questions: [
            'Why can you NEVER alter chemical subscripts (like changing H₂O to H₂O₂) when balancing a chemical equation?',
            'Why does the combustion of methane in a Bunsen burner feel hot while dissolving ammonium nitrate in a beaker causes it to turn ice cold?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>⚖️</span> 1. BALANCING CHEMICAL EQUATIONS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Chemical Equation:</strong> Uses chemical symbols and formulas to show reactants turning into products:<br>
                  <em>Reactants (left) ➔ Products (right)</em>.<br>
                  • <strong>Golden Rule of Balancing:</strong> Because atoms cannot be created or destroyed (Lavoisier’s Law), the number of atoms of each element must be equal on both sides.<br>
                  • <strong>Crucial Warning:</strong> You can ONLY change the <strong>coefficients</strong> in front of formulas (e.g., 2H₂O). Changing <strong>subscripts</strong> alters the chemical identity of the compound (e.g. H₂O is water, H₂O₂ is toxic hydrogen peroxide!).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🔄</span> 2. FOUR MAJOR REACTION TYPES
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>1. Combination (Synthesis):</strong> Two or more substances combine into a single compound:<br>
                    <strong>A + B ➔ AB</strong> (e.g. 2Mg + O₂ ➔ 2MgO).
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>2. Decomposition:</strong> A single compound breaks down into two or more simpler substances:<br>
                    <strong>AB ➔ A + B</strong> (e.g. 2H₂O₂ ➔ 2H₂O + O₂).
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>3. Single Displacement:</strong> A more reactive element replaces a less reactive element in a compound:<br>
                    <strong>A + BC ➔ AC + B</strong> (e.g. Zn + 2HCl ➔ ZnCl₂ + H₂).
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>4. Double Displacement:</strong> Two ionic compounds exchange their ions:<br>
                    <strong>AB + CD ➔ AD + CB</strong> (e.g. AgNO₃ + NaCl ➔ AgCl↓ + NaNO₃).
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🔥</span> 3. EXOTHERMIC VS. ENDOTHERMIC REACTIONS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Exothermic Reaction:</strong> Releases thermal energy to the surroundings. Temperature of surroundings <strong>increases</strong>. (e.g. Combustion of fuels, respiration, neutralizing acid with base).<br>
                  • <strong>Endothermic Reaction:</strong> Absorbs thermal energy from the surroundings. Temperature of surroundings <strong>decreases</strong>. (e.g. Photosynthesis, thermal decomposition of limestone CaCO₃, dissolving ammonium chloride in water).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Balancing Combustion of Ethane Gas',
            problem: 'Balance the chemical equation for the combustion of ethane gas: C₂H₆ + O₂ ➔ CO₂ + H₂O.',
            steps: [
              {
                label: 'Step 1: Balance Carbon atoms',
                text: 'Reactants have 2 Carbons (C₂H₆). Place coefficient 2 in front of CO₂:<br>C₂H₆ + O₂ ➔ 2CO₂ + H₂O.'
              },
              {
                label: 'Step 2: Balance Hydrogen atoms',
                text: 'Reactants have 6 Hydrogens. Place coefficient 3 in front of H₂O (3 × 2 = 6):<br>C₂H₆ + O₂ ➔ 2CO₂ + 3H₂O.'
              },
              {
                label: 'Step 3: Count Oxygen atoms on product side',
                text: '2CO₂ gives 2 × 2 = 4 Oxygens. 3H₂O gives 3 × 1 = 3 Oxygens.<br>Total Oxygens on right = 4 + 3 = 7. This requires 7/2 O₂ on the left:<br>C₂H₆ + (7/2)O₂ ➔ 2CO₂ + 3H₂O.'
              },
              {
                label: 'Step 4: Multiply entire equation by 2 to clear fractions',
                text: '<strong>2C₂H₆ + 7O₂ ➔ 4CO₂ + 6H₂O</strong>.<br>Check: C: 4 = 4; H: 12 = 12; O: 14 = 14. (Balanced!)'
              }
            ],
            proTip: 'When balancing combustion reactions, always balance atoms in this exact order: Carbon first, Hydrogen second, and Oxygen last!'
          },
          reciteFlashcards: [
            { q: 'What is an exothermic reaction?', a: 'A chemical reaction that releases heat energy to its surroundings, causing temperature to rise.' },
            { q: 'What type of reaction is 2KClO₃ ➔ 2KCl + 3O₂?', a: 'Thermal decomposition reaction.' },
            { q: 'Why are subscripts never changed during equation balancing?', a: 'Changing subscripts creates a completely different chemical compound rather than balancing the existing reaction.' }
          ],
          amtQuiz: [
            {
              q: 'When the equation Fe + O₂ ➔ Fe₂O₃ is completely balanced with the smallest whole-number coefficients, what is the coefficient of O₂?',
              options: ['2', '3', '4', '6'],
              correct: 1,
              strategy: 'Fe₂O₃ has 3 Oxygens. The LCM of 2 and 3 is 6 Oxygens, requiring 3O₂ and 2Fe₂O₃.',
              derivation: 'Balanced: 4Fe + 3O₂ ➔ 2Fe₂O₃. The coefficient of O₂ is 3.',
              trap: 'Writing 1.5 O₂ instead of using smallest whole numbers!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u2',
      number: 'Unit 2',
      title: 'Physical & Chemical Properties of Substances',
      bigIdea: 'Examine acids, bases, salts, the pH scale, acid-base indicators, and neutralization reactions in everyday life.',
      subtopics: [
        {
          id: 'g8-sci-2.1',
          code: '2.1',
          title: 'Acids, Bases, Salts & The pH Scale',
          survey: {
            blueprint: 'Acids: produce H⁺ ions in solution, sour taste, turn blue litmus red (pH 0-6). Bases: produce OH⁻ ions, bitter taste, slippery feel, turn red litmus blue (pH 8-14). Neutral substances: pH = 7. Indicators: Litmus, Phenolphthalein, Universal Indicator. Neutralization: Acid + Base ➔ Salt + Water.',
            objectives: [
              'List physical and chemical properties of acids and bases.',
              'Interpret the pH scale from 0 to 14 (acidic, neutral, alkaline).',
              'Predict color changes with litmus paper and phenolphthalein indicators.',
              'Write balanced neutralization equations: Acid + Base ➔ Salt + Water.'
            ],
            keyFormulas: 'Neutralization: HA + BOH ➔ BA + H₂O &nbsp;|&nbsp; pH < 7 (Acidic), pH = 7 (Neutral), pH > 7 (Basic)'
          },
          questions: [
            'Why does drinking an antacid containing magnesium hydroxide relieve gastric heartburn in seconds?',
            'What is the difference between a concentrated acid and a strong acid in chemistry?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🧪</span> 1. ACIDS VS. BASES: NATURE & PROPERTIES
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-rose-400">Acids (Hydrogen Ion H⁺ Donors):</strong><br>
                    • Sour taste (citric acid in lemons, acetic acid in vinegar).<br>
                    • Corrosive; react with active metals to release <strong>Hydrogen gas (H₂)</strong>.<br>
                    • React with carbonates to release <strong>Carbon dioxide gas (CO₂)</strong>.<br>
                    • Color change: Turn <strong>Blue Litmus Paper RED</strong>.<br>
                    • Strong acids: HCl, H₂SO₄, HNO₃; Weak acids: CH₃COOH, H₂CO₃.
                  </div>
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-cyan-400">Bases & Alkalis (Hydroxide OH⁻ Donors):</strong><br>
                    • Bitter taste and slippery/soapy touch (soap, bleach).<br>
                    • Soluble bases are called <strong>Alkalis</strong>.<br>
                    • Color change: Turn <strong>Red Litmus Paper BLUE</strong>.<br>
                    • Phenolphthalein turns bright <strong>magenta/pink</strong> in basic solution.<br>
                    • Strong bases: NaOH, KOH, Ca(OH)₂ (limewater).
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>📊</span> 2. THE pH SCALE (0 TO 14)
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The <strong>pH scale</strong> measures hydrogen ion concentration [H⁺]:<br>
                  • <strong>pH 0 to 6.9: ACIDIC</strong> (Lower pH = stronger acid; battery acid is pH 0, gastric juice is pH 1-2).<br>
                  • <strong>pH 7.0: STRICTLY NEUTRAL</strong> (Pure distilled water at 25°C).<br>
                  • <strong>pH 7.1 to 14: BASIC / ALKALINE</strong> (Higher pH = stronger base; bleach is pH 13, drain cleaner is pH 14).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🧂</span> 3. NEUTRALIZATION & SALT FORMATION
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  When an acid reacts with a base, they destroy each other’s acidic and basic properties:<br>
                  <strong>Acid + Base ➔ Salt + Water</strong>.<br>
                  • Hydrochloric acid + Sodium hydroxide ➔ Sodium chloride (table salt) + Water:<br>
                  <strong>HCl + NaOH ➔ NaCl + H₂O</strong>.<br>
                  • Real-world applications: Farmers spread slaked lime (Ca(OH)₂) to neutralize acidic soil; antacids (Mg(OH)₂) neutralize excess stomach acid.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Predicting Indicator Color and Neutralization Product',
            problem: 'A solution of potassium hydroxide (KOH) is tested. Part A: What color will red litmus paper turn? Part B: Write the balanced chemical equation for its neutralization with sulfuric acid (H₂SO₄).',
            steps: [
              {
                label: 'Step 1: Identify nature of KOH',
                text: 'KOH is a strong alkaline base. Bases turn red litmus paper <strong>BLUE</strong>.'
              },
              {
                label: 'Step 2: Identify reactants and products for Part B',
                text: 'Acid = H₂SO₄ (dibasic acid). Base = KOH.<br>Salt formed = Potassium sulfate (K₂SO₄). Byproduct = Water (H₂O).'
              },
              {
                label: 'Step 3: Balance the neutralization equation',
                text: 'H₂SO₄ + 2KOH ➔ <strong>K₂SO₄ + 2H₂O</strong>.'
              }
            ],
            proTip: 'Remember: Acids turn litmus RED (think "Red = Acid Alert"); Bases turn litmus BLUE (think "B = Base = Blue")!'
          },
          reciteFlashcards: [
            { q: 'What is the pH of a neutral solution like pure water?', a: '7.0.' },
            { q: 'What gas is produced when an acid reacts with an active metal like Zinc?', a: 'Hydrogen gas (H₂), which burns with a squeaky pop sound.' },
            { q: 'What color does phenolphthalein turn in an acidic solution versus a basic solution?', a: 'Colorless in acid; bright pink/magenta in base.' }
          ],
          amtQuiz: [
            {
              q: 'A sample of soil from a farm near Jimma has a pH of 5.2. Which substance should the agricultural extension officer recommend to neutralize the soil acidity?',
              options: ['Dilute sulfuric acid', 'Agricultural lime (Calcium hydroxide)', 'Sodium chloride table salt', 'Vinegar'],
              correct: 1,
              strategy: 'The soil is acidic (pH 5.2 < 7). To neutralize it, a basic substance (lime) must be added.',
              derivation: 'Calcium hydroxide (Ca(OH)₂) is a basic alkali that neutralizes excess H⁺ ions in acidic soils.',
              trap: 'Adding another acid like vinegar or sulfuric acid would worsen the soil acidity!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u3',
      number: 'Unit 3',
      title: 'Motion and Newton’s Laws',
      bigIdea: 'Understand kinematics: distance vs displacement, speed vs velocity, uniform acceleration, linear motion equations, and Newton’s three laws of motion.',
      subtopics: [
        {
          id: 'g8-sci-3.1',
          code: '3.1',
          title: 'Speed, Velocity, Acceleration & Newton’s Laws',
          survey: {
            blueprint: 'Distance (scalar, path length) vs Displacement (vector, straight-line distance). Speed = Distance / Time. Velocity = Displacement / Time. Acceleration: a = (v - u) / t. Three equations of motion: (1) v = u + at, (2) s = ut + ½at², (3) v² = u² + 2as. Newton’s 3 Laws of Motion & Friction.',
            objectives: [
              'Differentiate scalar quantities (distance, speed) from vector quantities (displacement, velocity, acceleration).',
              'Calculate uniform acceleration using a = (v - u) / t.',
              'Solve linear kinematics problems using the three equations of uniformly accelerated motion.',
              'Analyze friction: static friction, kinetic friction, and methods of reducing friction (lubrication, ball bearings).'
            ],
            keyFormulas: 'v = u + at &nbsp;|&nbsp; s = ut + ½at² &nbsp;|&nbsp; v² = u² + 2as &nbsp;|&nbsp; F_net = ma &nbsp;|&nbsp; Momentum: p = mv'
          },
          questions: [
            'Can an object have a constant speed while simultaneously experiencing non-zero acceleration?',
            'Why does a passenger in an Ethiopian bus lurch violently forward when the driver slams on the brakes suddenly?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>🚗</span> 1. KINEMATIC QUANTITIES COMPARED
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Distance (d):</strong> Total length of path traversed regardless of direction (scalar, always positive).<br>
                  • <strong>Displacement (s):</strong> Straight-line vector distance from starting position to ending position.<br>
                  • <strong>Speed:</strong> Rate of change of distance: <em>v = d / t</em> (scalar).<br>
                  • <strong>Velocity:</strong> Speed with a specified direction: <em>v = s / t</em> (vector).<br>
                  • <strong>Acceleration (a):</strong> The rate of change of velocity with respect to time: <strong>a = (v - u) / t</strong> (Unit: m/s²).<br>
                  <em>Note:</em> An object traveling at constant speed in a circle IS accelerating because its direction changes continuously!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>📈</span> 2. THE THREE EQUATIONS OF UNIFORMLY ACCELERATED MOTION
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>1st Equation:</strong> <strong>v = u + at</strong> (relates final velocity v, initial velocity u, acceleration a, and time t).
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>2nd Equation:</strong> <strong>s = ut + ½at²</strong> (relates displacement s to time t).
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>3rd Equation:</strong> <strong>v² = u² + 2as</strong> (time-independent equation).
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🛑</span> 3. NEWTON’S LAWS OF MOTION & FRICTION
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Newton’s 1st Law (Inertia):</strong> Passengers lurch forward during sudden braking because their bodies possess inertia of motion.<br>
                  • <strong>Newton’s 2nd Law:</strong> <strong>F_net = m × a</strong>. Doubling force doubles acceleration; doubling mass halves acceleration.<br>
                  • <strong>Newton’s 3rd Law:</strong> Action and reaction forces are equal and opposite (e.g. rocket exhaust pushes down, rocket accelerates up).<br>
                  • <strong>Friction:</strong> Force opposing relative motion. <em>Static friction</em> (opposing start of motion) is always greater than <em>Kinetic friction</em> (opposing ongoing motion).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Kinematics of an Accelerating Truck',
            problem: 'A freight truck traveling along the Modjo-Hawassa expressway starts from rest (u = 0) and accelerates uniformly at 2.5 m/s² for 8 seconds. Calculate: Part A: Its final velocity in m/s. Part B: The total distance traveled in this time.',
            steps: [
              {
                label: 'Step 1: Calculate final velocity using 1st equation',
                text: 'u = 0 m/s, a = 2.5 m/s², t = 8 s.<br>v = u + at = 0 + (2.5 × 8) = <strong>20 m/s</strong> (72 km/h).'
              },
              {
                label: 'Step 2: Calculate distance using 2nd equation',
                text: 's = ut + ½at².<br>Since u = 0, s = ½ × 2.5 × (8)².<br>s = 1.25 × 64 = <strong>80 meters</strong>.'
              },
              {
                label: 'Step 3: Verification using 3rd equation',
                text: 'v² = u² + 2as ⟹ 20² = 0 + 2(2.5)(s) ⟹ 400 = 5s ⟹ s = 400 / 5 = 80 m. (Verified!)'
              }
            ],
            proTip: 'When a problem states "starts from rest", write down u = 0 immediately! When it states "comes to a stop", write down v = 0!'
          },
          reciteFlashcards: [
            { q: 'What is the SI unit of acceleration?', a: 'm/s² (meters per second squared).' },
            { q: 'Which equation of motion does NOT involve time t?', a: 'v² = u² + 2as.' },
            { q: 'Why is static friction always greater than kinetic friction?', a: 'Because surface asperities interlock deeper when objects are stationary at rest.' }
          ],
          amtQuiz: [
            {
              q: 'A car traveling at 15 m/s accelerates uniformly at 3 m/s² for 6 seconds. What is its final velocity?',
              options: ['33 m/s', '18 m/s', '45 m/s', '90 m/s'],
              correct: 0,
              strategy: 'Apply v = u + at with u = 15, a = 3, t = 6.',
              derivation: 'v = 15 + (3 × 6) = 15 + 18 = 33 m/s.',
              trap: 'Adding acceleration directly without multiplying by time (15 + 3 = 18)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u4',
      number: 'Unit 4',
      title: 'Energy, Work & Simple Machines',
      bigIdea: 'Understand simple machines: mechanical advantage, velocity ratio, efficiency, three classes of levers, pulleys, and inclined planes.',
      subtopics: [
        {
          id: 'g8-sci-4.1',
          code: '4.1',
          title: 'Mechanical Advantage, Levers & Pulleys',
          survey: {
            blueprint: 'Simple machines multiply force or change direction. Mechanical Advantage: MA = Load / Effort. Velocity Ratio: VR = Distance of Effort / Distance of Load. Efficiency: η = (MA / VR) × 100%. Three classes of levers (1st: Fulcrum middle; 2nd: Load middle; 3rd: Effort middle). Pulleys: single fixed, movable, and block-and-tackle.',
            objectives: [
              'Calculate Mechanical Advantage (MA), Velocity Ratio (VR), and Efficiency (η).',
              'Classify levers into Class 1, Class 2, and Class 3 based on relative position of Fulcrum, Load, and Effort (FLE rule).',
              'Explain why real machines NEVER achieve 100% efficiency (frictional thermal dissipation).'
            ],
            keyFormulas: 'MA = Load / Effort &nbsp;|&nbsp; VR = d_E / d_L &nbsp;|&nbsp; Efficiency: η = (MA / VR) × 100% &nbsp;|&nbsp; Work Output = Load × d_L'
          },
          questions: [
            'Why is the Velocity Ratio of a machine purely geometric while its Mechanical Advantage varies with friction?',
            'Why does a Class 3 lever like a pair of tweezers or a human forearm have an MA less than 1.0?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>⚙️</span> 1. THE THREE FUNDAMENTAL RATIOS OF MACHINES
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Mechanical Advantage (MA):</strong> The force multiplier factor:<br>
                  <strong>MA = Load (L) / Effort (E)</strong> (pure dimensionless number).<br>
                  • <strong>Velocity Ratio (VR):</strong> The ratio of distances moved in the same time:<br>
                  <strong>VR = Distance moved by Effort (d_E) / Distance moved by Load (d_L)</strong>.<br>
                  • <strong>Efficiency (η):</strong> Ratio of useful work output to total work input:<br>
                  <strong>Efficiency (η) = (Work Output / Work Input) × 100% = (MA / VR) × 100%</strong>.<br>
                  • <em>100% Rule:</em> In an ideal frictionless machine, MA = VR and η = 100%. In all real machines, friction causes MA < VR, so <strong>η < 100%</strong>.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>📐</span> 2. THE THREE CLASSES OF LEVERS (THE FLE RULE)
                </h4>
                <p class="text-xs text-slate-300 mb-2">
                  Remember what is in the <strong>MIDDLE</strong>: <strong>1-F, 2-L, 3-E (FLE)</strong>:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-slate-300">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>Class 1 (Fulcrum in Middle):</strong><br>
                    • Crowbar, scissors, seesaw.<br>
                    • MA can be greater than, equal to, or less than 1.
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>Class 2 (Load in Middle):</strong><br>
                    • Wheelbarrow, bottle opener, nutcracker.<br>
                    • Effort arm always longer than load arm; <strong>MA > 1</strong> (force multiplier).
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>Class 3 (Effort in Middle):</strong><br>
                    • Tweezers, fishing rod, human forearm.<br>
                    • <strong>MA < 1</strong>; sacrifices force to gain speed and distance!
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🏗️</span> 3. PULLEYS & INCLINED PLANES
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Single Fixed Pulley:</strong> VR = 1. Does NOT amplify force (MA ≈ 1), but changes the direction of force (pulling downward is easier).<br>
                  • <strong>Single Movable Pulley:</strong> VR = 2. Supports load with two rope segments; cuts effort in half.<br>
                  • <strong>Block and Tackle System:</strong> VR equals the total number of rope segments supporting the movable block.<br>
                  • <strong>Inclined Plane:</strong> <strong>VR = Length of slope (l) / Vertical height (h)</strong>.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Pulley System MA, VR & Efficiency',
            problem: 'A block and tackle pulley system consisting of 4 pulleys is used to lift a load of 1,200 N. An effort of 375 N is applied. Calculate: Part A: Mechanical Advantage (MA). Part B: Velocity Ratio (VR). Part C: The Efficiency of the machine.',
            steps: [
              {
                label: 'Step 1: Calculate Mechanical Advantage',
                text: 'MA = Load / Effort = 1,200 N / 375 N = <strong>3.2</strong>.'
              },
              {
                label: 'Step 2: State Velocity Ratio',
                text: 'For a block and tackle system with 4 pulleys supporting the load, <strong>VR = 4</strong>.'
              },
              {
                label: 'Step 3: Calculate Efficiency',
                text: 'Efficiency η = (MA / VR) × 100% = (3.2 / 4) × 100% = 0.8 × 100% = <strong>80%</strong>.'
              }
            ],
            proTip: 'Notice that 20% of the input energy was lost overcoming friction in the pulley axles and lifting the weight of the movable pulleys!'
          },
          reciteFlashcards: [
            { q: 'In a Class 2 lever, which element is located in the middle?', a: 'The Load (e.g. wheelbarrow).' },
            { q: 'What is the formula for the efficiency of a machine in terms of MA and VR?', a: 'Efficiency = (MA / VR) × 100%.' },
            { q: 'What is the Velocity Ratio of a block-and-tackle system with 5 pulleys?', a: '5.' }
          ],
          amtQuiz: [
            {
              q: 'A machine with a velocity ratio of 5 lifts a load of 800 N when an effort of 200 N is applied. What is the efficiency of the machine?',
              options: ['80%', '40%', '100%', '25%'],
              correct: 0,
              strategy: 'First find MA = Load/Effort = 800/200 = 4. Then efficiency = (MA/VR) × 100%.',
              derivation: 'MA = 4. Efficiency = (4 / 5) × 100% = 80%.',
              trap: 'Assuming efficiency is 200/800 = 25% (inverting effort and load)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u5',
      number: 'Unit 5',
      title: 'Electricity and Magnetism',
      bigIdea: 'Explore electrostatics, electric circuits, Ohm’s law (V = IR), series vs parallel circuit analysis, and electromagnetism.',
      subtopics: [
        {
          id: 'g8-sci-5.1',
          code: '5.1',
          title: 'Electric Circuits, Ohm’s Law & Magnetism',
          survey: {
            blueprint: 'Electric charge: Q = I × t (in Coulombs). Current (I, Amperes), Voltage / Potential Difference (V, Volts), Resistance (R, Ohms Ω). Ohm’s Law: V = I × R. Circuit topologies: Series (same current, voltages add) vs Parallel (same voltage, currents add). Magnetism: poles, magnetic field lines, and electromagnets.',
            objectives: [
              'State and apply Ohm’s Law (V = IR) to compute unknown voltage, current, or resistance.',
              'Calculate equivalent resistance for series (R = R₁ + R₂) and parallel (1/R = 1/R₁ + 1/R₂) circuits.',
              'Compare advantages of parallel house wiring over series wiring (independent operation, constant 220V).',
              'Explain how electric current flowing through a coil creates a magnetic field (electromagnet).'
            ],
            keyFormulas: 'Ohm’s Law: V = IR &nbsp;|&nbsp; Series: R_eq = R₁ + R₂ &nbsp;|&nbsp; Parallel: 1/R_eq = 1/R₁ + 1/R₂ &nbsp;|&nbsp; Electric Power: P = VI = I²R'
          },
          questions: [
            'Why are residential homes in Ethiopia wired exclusively in parallel and never in series?',
            'What happens to the total circuit current if you connect more resistors in parallel?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>⚡</span> 1. CURRENT, VOLTAGE, RESISTANCE & OHM’S LAW
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Electric Current (I):</strong> The rate of flow of electric charges: <em>I = Q / t</em>. Unit: <strong>Ampere (A)</strong> (measured by Ammeter in series).<br>
                  • <strong>Voltage / Potential Difference (V):</strong> Work done per unit charge moving between two points: <em>V = W / Q</em>. Unit: <strong>Volt (V)</strong> (measured by Voltmeter in parallel).<br>
                  • <strong>Resistance (R):</strong> Opposition to current flow. Unit: <strong>Ohm (Ω)</strong>.<br>
                  • <strong>Ohm’s Law:</strong> At constant temperature, the current flowing through a metallic conductor is directly proportional to the potential difference across it:<br>
                  <strong>V = I × R</strong> ⟹ <strong>I = V / R</strong> ⟹ <strong>R = V / I</strong>.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🔌</span> 2. SERIES VS. PARALLEL CIRCUIT ARCHITECTURES
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-amber-400">Series Circuits (Single Loop):</strong><br>
                    • Current is <strong>IDENTICAL</strong> through all components: <em>I_total = I₁ = I₂</em>.<br>
                    • Voltages add up: <em>V_total = V₁ + V₂</em>.<br>
                    • Total Resistance adds directly: <strong>R_eq = R₁ + R₂ + R₃</strong>.<br>
                    • <em>Disadvantage:</em> If one bulb burns out, the circuit breaks and all bulbs go out!
                  </div>
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-emerald-400">Parallel Circuits (Multiple Branches):</strong><br>
                    • Voltage is <strong>IDENTICAL</strong> across all branches: <em>V_total = V₁ = V₂</em>.<br>
                    • Currents add up: <em>I_total = I₁ + I₂</em>.<br>
                    • Total Resistance decreases: <strong>1/R_eq = 1/R₁ + 1/R₂</strong>.<br>
                    • <em>Advantage:</em> Each appliance operates independently with full mains voltage (220V)!
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🧲</span> 3. MAGNETISM & ELECTROMAGNETS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Magnetic Poles:</strong> North and South. Like poles repel; unlike poles attract.<br>
                  • <strong>Magnetic Field Lines:</strong> Continuous loops directed from North pole to South pole outside the magnet.<br>
                  • <strong>Electromagnet:</strong> A temporary magnet formed by wrapping insulated copper wire (solenoid) around a soft iron core. When current flows, a strong magnetic field is generated instantly; when current is switched off, magnetism disappears immediately (used in electric bells, scrap cranes, relay switches).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Parallel Resistors and Current Split',
            problem: 'Two resistors of 6 Ω and 12 Ω are connected in parallel across a 24V car battery. Calculate: Part A: Equivalent resistance of the circuit. Part B: Total current drawn from the battery.',
            steps: [
              {
                label: 'Step 1: Calculate equivalent parallel resistance',
                text: '1 / R_eq = 1 / R₁ + 1 / R₂ = 1/6 + 1/12.<br>Common denominator is 12: 1/6 = 2/12.<br>1 / R_eq = 2/12 + 1/12 = 3/12 = 1/4.<br>Invert both sides: <strong>R_eq = 4 Ω</strong>.'
              },
              {
                label: 'Step 2: Calculate total circuit current using Ohm’s Law',
                text: 'I_total = V / R_eq = 24 V / 4 Ω = <strong>6 Amperes</strong>.'
              },
              {
                label: 'Step 3: Check branch currents',
                text: 'Branch 1: I₁ = 24 / 6 = 4 A.<br>Branch 2: I₂ = 24 / 12 = 2 A.<br>Total current = 4 A + 2 A = 6 A. (Verified!)'
              }
            ],
            proTip: 'Shortcut for two parallel resistors: Product over Sum: R_eq = (R₁ × R₂) / (R₁ + R₂) = (6 × 12) / (6 + 12) = 72 / 18 = 4 Ω!'
          },
          reciteFlashcards: [
            { q: 'State Ohm’s Law formula relating Voltage, Current, and Resistance.', a: 'V = I × R.' },
            { q: 'What happens to total resistance when more resistors are added in parallel?', a: 'Total equivalent resistance decreases.' },
            { q: 'Why is an ammeter always connected in series while a voltmeter is connected in parallel?', a: 'An ammeter has near-zero resistance to measure current flow; a voltmeter has massive resistance to measure voltage without drawing current.' }
          ],
          amtQuiz: [
            {
              q: 'Two resistors of 10 Ω and 15 Ω are connected in series with a 50 V DC power supply. What is the current flowing through the circuit?',
              options: ['2.0 A', '5.0 A', '0.5 A', '12.5 A'],
              correct: 0,
              strategy: 'In series, add resistances: R_total = 10 + 15 = 25 Ω. Then I = V / R.',
              derivation: 'I = 50 V / 25 Ω = 2.0 Amperes.',
              trap: 'Using 10 Ω alone gives 5 A, which ignores the second resistor!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u6',
      number: 'Unit 6',
      title: 'Genetics and Heredity',
      bigIdea: 'Understand chromosomes, DNA, genes, alleles, Gregor Mendel’s laws of inheritance, dominant vs recessive traits, and Punnett square crosses.',
      subtopics: [
        {
          id: 'g8-sci-6.1',
          code: '6.1',
          title: 'DNA, Chromosomes & Mendelian Inheritance',
          survey: {
            blueprint: 'Heredity: transmission of traits from parents to offspring. DNA (Deoxyribonucleic Acid): double helix polymer of nucleotides (A-T, C-G base pairing). Genes: functional segments of DNA. Chromosomes: humans have 46 (23 pairs: 22 autosomes + 1 sex chromosome pair XX/XY). Mendel’s Law of Segregation and Monohybrid Punnett Squares.',
            objectives: [
              'Describe the structural relationship between DNA, genes, and chromosomes.',
              'Distinguish between phenotype (physical appearance) and genotype (genetic makeup).',
              'Differentiate homozygous (pure-breeding, TT or tt) from heterozygous (hybrid, Tt) genotypes.',
              'Predict offspring genotypic and phenotypic ratios using a monohybrid Punnett square (3:1 ratio).'
            ],
            keyFormulas: 'Human karyotype: 46 chromosomes (23 pairs) &nbsp;|&nbsp; Monohybrid F₂ phenotypic ratio: 3 dominant : 1 recessive'
          },
          questions: [
            'Why does two brown-eyed parents have a 25% chance of having a blue-eyed child?',
            'Which parent (mother or father) biologically determines the sex of a human baby and why?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>🧬</span> 1. DNA, GENES & HUMAN CHROMOSOMES
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>DNA:</strong> A double-stranded helical molecule carrying hereditary instructions. Four nitrogenous bases pair specifically: <strong>Adenine with Thymine (A-T)</strong> and <strong>Cytosine with Guanine (C-G)</strong>.<br>
                  • <strong>Gene:</strong> A specific sequence of DNA nucleotides that codes for a functional protein or trait.<br>
                  • <strong>Chromosomes:</strong> DNA condensed around histone proteins inside the nucleus. Normal human somatic cells contain <strong>46 chromosomes (23 homologous pairs)</strong>:<br>
                  - 22 pairs of <em>Autosomes</em>.<br>
                  - 1 pair of <em>Sex Chromosomes</em>: Females have <strong>XX</strong>; Males have <strong>XY</strong>.<br>
                  - <em>Sex Determination:</em> Because father's sperm carries either an X or Y chromosome (while mother’s egg always carries X), the <strong>father determines the biological sex</strong> of the child (50% XX girl, 50% XY boy)!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🌱</span> 2. GREGOR MENDEL’S LAWS & GENETIC TERMINOLOGY
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Allele:</strong> Alternative versions of a gene (e.g. T for tall, t for short).</p>
                  <p>• <strong>Dominant Allele (T):</strong> Masks the expression of a recessive allele; expressed in TT and Tt.</p>
                  <p>• <strong>Recessive Allele (t):</strong> Expressed ONLY when in homozygous state (tt).</p>
                  <p>• <strong>Genotype:</strong> The genetic allele combination (TT, Tt, or tt).</p>
                  <p>• <strong>Phenotype:</strong> The physical observable appearance (Tall or Short plant).</p>
                  <p>• <strong>Homozygous:</strong> Having identical alleles (TT = homozygous dominant; tt = homozygous recessive).<br>
                  • <strong>Heterozygous:</strong> Having two different alleles (Tt = carrier/hybrid).</p>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>📊</span> 3. MONOHYBRID CROSS & PUNNETT SQUARES
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  When two heterozygous pea plants (Tt × Tt) are crossed:<br>
                  • Gametes: Each parent produces 50% T and 50% t gametes (Mendel’s Law of Segregation).<br>
                  • <strong>Punnett Square Results:</strong><br>
                  - 1 TT (homozygous tall)<br>
                  - 2 Tt (heterozygous tall)<br>
                  - 1 tt (homozygous short)<br>
                  • <strong>Genotypic Ratio:</strong> <strong>1 TT : 2 Tt : 1 tt</strong> (1:2:1).<br>
                  • <strong>Phenotypic Ratio:</strong> <strong>3 Tall : 1 Short</strong> (75% tall, 25% short).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Predicting Human Albinism Inheritance',
            problem: 'In humans, normal melanin pigmentation is dominant (A) and albinism is recessive (a). Two parents with normal pigmentation both have heterozygous genotypes (Aa). Calculate the probability that their firstborn child will have albinism.',
            steps: [
              {
                label: 'Step 1: Set up the genetic cross',
                text: 'Parent 1: Aa × Parent 2: Aa.<br>Possible gametes from each parent: A (50%) and a (50%).'
              },
              {
                label: 'Step 2: Construct the 2×2 Punnett Square',
                text: 'Top row: A, a. Left column: A, a.<br>Box 1 (Top-Left): A × A = AA (Normal).<br>Box 2 (Top-Right): A × a = Aa (Normal carrier).<br>Box 3 (Bottom-Left): a × A = Aa (Normal carrier).<br>Box 4 (Bottom-Right): a × a = aa (Albinism).'
              },
              {
                label: 'Step 3: Calculate the probability',
                text: 'Out of 4 possible offspring combinations, only 1 is homozygous recessive (aa).<br>Probability of albinism = 1 / 4 = <strong>25% (0.25)</strong>.'
              }
            ],
            proTip: 'Notice that 75% of offspring will have normal pigmentation, but 2 out of 3 normal children (66%) will be silent genetic carriers (Aa)!'
          },
          reciteFlashcards: [
            { q: 'How many total chromosomes are in a normal human diploid somatic cell?', a: '46 chromosomes (23 pairs).' },
            { q: 'What is the phenotypic ratio in the F₂ generation of a monohybrid cross between two heterozygotes (Tt × Tt)?', a: '3 : 1 (3 dominant to 1 recessive).' },
            { q: 'Which base pairs with Adenine (A) in DNA?', a: 'Thymine (T) via two hydrogen bonds.' }
          ],
          amtQuiz: [
            {
              q: 'What is the probability of two heterozygous tall pea plants (Tt × Tt) producing a short offspring (tt)?',
              options: ['25%', '50%', '75%', '0%'],
              correct: 0,
              strategy: 'Construct the Punnett square: TT (25%), Tt (50%), tt (25%).',
              derivation: 'Only the homozygous recessive genotype (tt) produces the short phenotype, giving 1/4 = 25%.',
              trap: 'Assuming 50% because there are two phenotypes (tall vs short)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u7',
      number: 'Unit 7',
      title: 'Environment & Ecology',
      bigIdea: 'Understand ecosystems, biotic vs abiotic factors, energy pyramids, trophic levels, biogeochemical cycles (carbon and nitrogen), and environmental conservation.',
      subtopics: [
        {
          id: 'g8-sci-7.1',
          code: '7.1',
          title: 'Ecosystems, Energy Flow & Biogeochemical Cycles',
          survey: {
            blueprint: 'Ecosystem: biological community of interacting organisms (biotic) and their physical environment (abiotic). Trophic hierarchy: Producers (autotrophs) ➔ Primary Consumers (herbivores) ➔ Secondary/Tertiary Consumers (carnivores) ➔ Decomposers. The 10% Ecological Energy Rule. Carbon and Nitrogen cycles. Conservation of biodiversity.',
            objectives: [
              'Distinguish biotic components (plants, animals, microbes) from abiotic factors (sunlight, soil, water, temperature).',
              'Construct food chains and food webs and apply the 10% Energy Transfer Law.',
              'Explain how photosynthesis and cellular respiration drive the global Carbon Cycle.',
              'Describe the Nitrogen Cycle: nitrogen-fixing bacteria in legume root nodules, nitrification, and denitrification.'
            ],
            keyFormulas: '10% Energy Law: Only ~10% of energy at one trophic level transfers to the next level'
          },
          questions: [
            'Why are food chains almost never longer than 4 or 5 trophic levels in nature?',
            'How do Rhizobium bacteria in the root nodules of Ethiopian faba bean and chickpea plants enrich nitrogen-poor soils naturally?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🌲</span> 1. ECOSYSTEM STRUCTURE & BIOTIC INTERACTIONS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  An <strong>ecosystem</strong> consists of living (biotic) organisms interacting with non-living (abiotic) surroundings:<br>
                  • <strong>Producers (Autotrophs):</strong> Green plants and algae that capture solar energy to synthesize glucose via photosynthesis.<br>
                  • <strong>Consumers (Heterotrophs):</strong><br>
                  - Primary Consumers: Herbivores eating producers (e.g. cattle, grasshoppers, zebras).<br>
                  - Secondary Consumers: Carnivores eating herbivores (e.g. frogs, hyenas).<br>
                  - Tertiary / Apex Predators: Top carnivores (e.g. Ethiopian wolf, lion, eagle).<br>
                  • <strong>Decomposers:</strong> Bacteria and fungi that break down dead organic matter, recycling vital nutrients back into the soil.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
                  <span>⚡</span> 2. THE 10% ECOLOGICAL ENERGY RULE
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Energy enters ecosystems as sunlight, but energy transfer between trophic levels is highly inefficient:<br>
                  • <strong>The 10% Rule (Lindeman’s Law):</strong> Only approximately <strong>10% of energy</strong> stored in organic matter at one trophic level is converted into biomass at the next trophic level.<br>
                  • <em>90% Energy Loss:</em> 90% of energy is lost as heat, cellular respiration, movement, and undigested waste.<br>
                  • <em>Consequence:</em> If grass captures 10,000 J of solar energy: Herbivores obtain 1,000 J; Carnivores obtain 100 J; Top predators obtain only 10 J! This limits food chain length to 4-5 links.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🔄</span> 3. THE CARBON & NITROGEN CYCLES
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Carbon Cycle:</strong> Carbon dioxide (CO₂) is removed from the atmosphere ONLY by plant <strong>Photosynthesis</strong>. CO₂ is returned to the atmosphere by <strong>Cellular Respiration</strong>, <strong>Decomposition</strong>, and the <strong>Combustion of fossil fuels</strong>.</p>
                  <p>• <strong>Nitrogen Cycle:</strong> Atmospheric N₂ (78% of air) cannot be absorbed directly by plants. <strong>Nitrogen-fixing bacteria (Rhizobium)</strong> in the root nodules of leguminous plants convert N₂ into usable nitrates (NO₃⁻). Decomposers recycle ammonia, and <em>denitrifying bacteria</em> return N₂ back into the atmosphere.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Calculating Energy Transfer Through an Ecosystem',
            problem: 'In the Bale Mountains ecosystem, alpine meadow grasses produce 50,000 kJ of chemical energy through photosynthesis. Part A: How much energy reaches the giant mole-rats (primary consumers)? Part B: How much energy reaches the endangered Ethiopian wolf (secondary consumer)?',
            steps: [
              {
                label: 'Step 1: Apply the 10% rule to primary consumers',
                text: 'Energy at Producer level = 50,000 kJ.<br>Primary Consumer Energy = 10% of 50,000 kJ = 0.10 × 50,000 = <strong>5,000 kJ</strong>.'
              },
              {
                label: 'Step 2: Apply the 10% rule to secondary consumers',
                text: 'Secondary Consumer Energy = 10% of 5,000 kJ = 0.10 × 5,000 = <strong>500 kJ</strong>.'
              },
              {
                label: 'Step 3: Analyze total energy loss',
                text: 'Out of 50,000 kJ captured by grass, 49,500 kJ (99%) was dissipated as heat across two trophic transfers, leaving only 500 kJ for the Ethiopian wolf!'
              }
            ],
            proTip: 'Because energy diminishes by 90% at each step, ecosystems can support far fewer carnivores than herbivores!'
          },
          reciteFlashcards: [
            { q: 'What percentage of energy is transferred from one trophic level to the next on average?', a: 'Approximately 10% (the 10% Rule).' },
            { q: 'What type of bacteria convert atmospheric nitrogen into nitrates inside legume root nodules?', a: 'Nitrogen-fixing bacteria (Rhizobium).' },
            { q: 'What biological process is the ONLY natural sink that extracts CO₂ directly from the atmosphere?', a: 'Photosynthesis by green plants and algae.' }
          ],
          amtQuiz: [
            {
              q: 'If producers in an aquatic ecosystem store 80,000 J of energy, how much energy will be available to tertiary consumers (4th trophic level)?',
              options: ['80 J', '800 J', '8,000 J', '8 J'],
              correct: 0,
              strategy: 'Step 1: Primary consumers = 10% of 80,000 = 8,000 J. Step 2: Secondary consumers = 10% of 8,000 = 800 J. Step 3: Tertiary consumers = 10% of 800 = 80 J.',
              derivation: '80,000 ➔ 8,000 (2nd) ➔ 800 (3rd) ➔ 80 J (4th trophic level).',
              trap: 'Stopping after one or two transfers!'
            }
          ]
        }
      ]
    }
  ]
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_science.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8Science, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote deep g8_science.js with all 7 units and rich textbook flesh!');
