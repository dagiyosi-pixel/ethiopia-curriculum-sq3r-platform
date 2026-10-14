module.exports = {
  "id": "science",
  "name": "General Science",
  "icon": "🔬",
  "units": [
    {
      "id": "g8-sci-u1",
      "number": "Unit 1",
      "title": "Basics of Chemical Reactions",
      "bigIdea": "Understand chemical equations, conservation of mass, balancing techniques, types of chemical reactions, and thermal changes (exothermic vs endothermic).",
      "subtopics": [
        {
          "id": "g8-sci-1.1",
          "code": "1.1",
          "title": "Chemical Equations, Balancing & Reaction Types",
          "survey": {
            "blueprint": "Chemical equation: symbolic representation of a reaction (Reactants ➔ Products). Balancing equations: adjusting stoichiometric coefficients to satisfy the Law of Conservation of Mass. 4 major types: Synthesis, Decomposition, Single Displacement, Double Displacement. Energy: Exothermic (heat released) vs Endothermic (heat absorbed).",
            "objectives": [
              "Balance chemical equations using the systematic inspection method.",
              "Classify reactions into combination, decomposition, single displacement, and double replacement.",
              "Distinguish between exothermic (ΔH < 0, temperature rises) and endothermic (ΔH > 0, temperature falls) reactions."
            ],
            "keyFormulas": "Law of Conservation of Mass: Total Mass of Reactants = Total Mass of Products"
          },
          "questions": [
            "Why can you NEVER alter chemical subscripts (like changing H₂O to H₂O₂) when balancing a chemical equation?",
            "Why does the combustion of methane in a Bunsen burner feel hot while dissolving ammonium nitrate in a beaker causes it to turn ice cold?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>⚖️</span> 1. BALANCING CHEMICAL EQUATIONS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Chemical Equation:</strong> Uses chemical symbols and formulas to show reactants turning into products:<br>\n                  <em>Reactants (left) ➔ Products (right)</em>.<br>\n                  • <strong>Golden Rule of Balancing:</strong> Because atoms cannot be created or destroyed (Lavoisier’s Law), the number of atoms of each element must be equal on both sides.<br>\n                  • <strong>Crucial Warning:</strong> You can ONLY change the <strong>coefficients</strong> in front of formulas (e.g., 2H₂O). Changing <strong>subscripts</strong> alters the chemical identity of the compound (e.g. H₂O is water, H₂O₂ is toxic hydrogen peroxide!).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🔄</span> 2. FOUR MAJOR REACTION TYPES\n                </h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>1. Combination (Synthesis):</strong> Two or more substances combine into a single compound:<br>\n                    <strong>A + B ➔ AB</strong> (e.g. 2Mg + O₂ ➔ 2MgO).\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>2. Decomposition:</strong> A single compound breaks down into two or more simpler substances:<br>\n                    <strong>AB ➔ A + B</strong> (e.g. 2H₂O₂ ➔ 2H₂O + O₂).\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>3. Single Displacement:</strong> A more reactive element replaces a less reactive element in a compound:<br>\n                    <strong>A + BC ➔ AC + B</strong> (e.g. Zn + 2HCl ➔ ZnCl₂ + H₂).\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>4. Double Displacement:</strong> Two ionic compounds exchange their ions:<br>\n                    <strong>AB + CD ➔ AD + CB</strong> (e.g. AgNO₃ + NaCl ➔ AgCl↓ + NaNO₃).\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>🔥</span> 3. EXOTHERMIC VS. ENDOTHERMIC REACTIONS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Exothermic Reaction:</strong> Releases thermal energy to the surroundings. Temperature of surroundings <strong>increases</strong>. (e.g. Combustion of fuels, respiration, neutralizing acid with base).<br>\n                  • <strong>Endothermic Reaction:</strong> Absorbs thermal energy from the surroundings. Temperature of surroundings <strong>decreases</strong>. (e.g. Photosynthesis, thermal decomposition of limestone CaCO₃, dissolving ammonium chloride in water).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Balancing Combustion of Ethane Gas",
            "problem": "Balance the chemical equation for the combustion of ethane gas: C₂H₆ + O₂ ➔ CO₂ + H₂O.",
            "steps": [
              {
                "label": "Step 1: Balance Carbon atoms",
                "text": "Reactants have 2 Carbons (C₂H₆). Place coefficient 2 in front of CO₂:<br>C₂H₆ + O₂ ➔ 2CO₂ + H₂O."
              },
              {
                "label": "Step 2: Balance Hydrogen atoms",
                "text": "Reactants have 6 Hydrogens. Place coefficient 3 in front of H₂O (3 × 2 = 6):<br>C₂H₆ + O₂ ➔ 2CO₂ + 3H₂O."
              },
              {
                "label": "Step 3: Count Oxygen atoms on product side",
                "text": "2CO₂ gives 2 × 2 = 4 Oxygens. 3H₂O gives 3 × 1 = 3 Oxygens.<br>Total Oxygens on right = 4 + 3 = 7. This requires 7/2 O₂ on the left:<br>C₂H₆ + (7/2)O₂ ➔ 2CO₂ + 3H₂O."
              },
              {
                "label": "Step 4: Multiply entire equation by 2 to clear fractions",
                "text": "<strong>2C₂H₆ + 7O₂ ➔ 4CO₂ + 6H₂O</strong>.<br>Check: C: 4 = 4; H: 12 = 12; O: 14 = 14. (Balanced!)"
              }
            ],
            "proTip": "When balancing combustion reactions, always balance atoms in this exact order: Carbon first, Hydrogen second, and Oxygen last!"
          },
          "reciteFlashcards": [
            {
              "q": "What is an exothermic reaction?",
              "a": "A chemical reaction that releases heat energy to its surroundings, causing temperature to rise."
            },
            {
              "q": "What type of reaction is 2KClO₃ ➔ 2KCl + 3O₂?",
              "a": "Thermal decomposition reaction."
            },
            {
              "q": "Why are subscripts never changed during equation balancing?",
              "a": "Changing subscripts creates a completely different chemical compound rather than balancing the existing reaction."
            }
          ],
          "amtQuiz": [
            {
              "q": "In the chemical equation for the synthesis of ammonia gas: N₂ + 3H₂ ➔ 2NH₃, what do the stoichiometric coefficients represent?",
              "options": [
                "The exact temperature in degrees Celsius needed for the reaction",
                "The relative number of molecules or moles of each reactant and product",
                "The mass of each substance in milligrams",
                "The number of electron shells around each nitrogen atom"
              ],
              "correct": 1,
              "strategy": "Coefficients in balanced equations represent molar or molecular ratios.",
              "derivation": "Stoichiometric coefficients indicate the molar ratio: 1 mole of nitrogen gas reacts with 3 moles of hydrogen gas to produce 2 moles of ammonia gas.",
              "trap": "Confusing molar coefficients with mass or temperature."
            },
            {
              "q": "When methane gas (CH₄) burns completely in excess oxygen, what are the balanced products of this combustion reaction?",
              "options": [
                "Carbon monoxide (CO) and hydrogen gas (H₂)",
                "Carbon dioxide (CO₂) and water vapor (H₂O)",
                "Pure carbon soot and ozone (O₃)",
                "Methanol (CH₃OH) and liquid nitrogen"
              ],
              "correct": 1,
              "strategy": "Complete hydrocarbon combustion always yields CO₂ and H₂O.",
              "derivation": "The balanced equation is: CH₄ + 2O₂ ➔ CO₂ + 2H₂O. Complete combustion of any hydrocarbon produces carbon dioxide and water.",
              "trap": "Confusing incomplete combustion (which produces toxic CO) with complete combustion."
            },
            {
              "q": "What type of chemical reaction is represented by: 2H₂O₂ ➔ 2H₂O + O₂?",
              "options": [
                "Synthesis reaction",
                "Decomposition reaction",
                "Single displacement reaction",
                "Double displacement reaction"
              ],
              "correct": 1,
              "strategy": "A single compound breaking down into simpler substances is decomposition.",
              "derivation": "Hydrogen peroxide breaks down into water and oxygen gas. One reactant yielding two or more products defines a decomposition reaction.",
              "trap": "Confusing decomposition with synthesis (which combines multiple reactants into one product)."
            },
            {
              "q": "Why must every chemical equation be balanced to satisfy the fundamental laws of nature?",
              "options": [
                "To ensure both sides have equal numbers of electrons only",
                "To obey the Law of Conservation of Mass (atoms cannot be created or destroyed)",
                "To prevent the temperature of the laboratory from rising",
                "To make sure reactants have higher volume than products"
              ],
              "correct": 1,
              "strategy": "Balancing satisfies the Law of Conservation of Mass.",
              "derivation": "Atoms cannot appear or disappear during an ordinary chemical reaction; they are merely rearranged. Therefore, the number of each type of atom must be identical on both sides.",
              "trap": "Assuming mass changes during reactions."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-sci-u2",
      "number": "Unit 2",
      "title": "Physical & Chemical Properties of Substances",
      "bigIdea": "Examine acids, bases, salts, the pH scale, acid-base indicators, and neutralization reactions in everyday life.",
      "subtopics": [
        {
          "id": "g8-sci-2.1",
          "code": "2.1",
          "title": "Acids, Bases, Salts & The pH Scale",
          "survey": {
            "blueprint": "Acids: produce H⁺ ions in solution, sour taste, turn blue litmus red (pH 0-6). Bases: produce OH⁻ ions, bitter taste, slippery feel, turn red litmus blue (pH 8-14). Neutral substances: pH = 7. Indicators: Litmus, Phenolphthalein, Universal Indicator. Neutralization: Acid + Base ➔ Salt + Water.",
            "objectives": [
              "List physical and chemical properties of acids and bases.",
              "Interpret the pH scale from 0 to 14 (acidic, neutral, alkaline).",
              "Predict color changes with litmus paper and phenolphthalein indicators.",
              "Write balanced neutralization equations: Acid + Base ➔ Salt + Water."
            ],
            "keyFormulas": "Neutralization: HA + BOH ➔ BA + H₂O &nbsp;|&nbsp; pH < 7 (Acidic), pH = 7 (Neutral), pH > 7 (Basic)"
          },
          "questions": [
            "Why does drinking an antacid containing magnesium hydroxide relieve gastric heartburn in seconds?",
            "What is the difference between a concentrated acid and a strong acid in chemistry?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>🧪</span> 1. ACIDS VS. BASES: NATURE & PROPERTIES\n                </h4>\n                <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-rose-400\">Acids (Hydrogen Ion H⁺ Donors):</strong><br>\n                    • Sour taste (citric acid in lemons, acetic acid in vinegar).<br>\n                    • Corrosive; react with active metals to release <strong>Hydrogen gas (H₂)</strong>.<br>\n                    • React with carbonates to release <strong>Carbon dioxide gas (CO₂)</strong>.<br>\n                    • Color change: Turn <strong>Blue Litmus Paper RED</strong>.<br>\n                    • Strong acids: HCl, H₂SO₄, HNO₃; Weak acids: CH₃COOH, H₂CO₃.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-cyan-400\">Bases & Alkalis (Hydroxide OH⁻ Donors):</strong><br>\n                    • Bitter taste and slippery/soapy touch (soap, bleach).<br>\n                    • Soluble bases are called <strong>Alkalis</strong>.<br>\n                    • Color change: Turn <strong>Red Litmus Paper BLUE</strong>.<br>\n                    • Phenolphthalein turns bright <strong>magenta/pink</strong> in basic solution.<br>\n                    • Strong bases: NaOH, KOH, Ca(OH)₂ (limewater).\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>📊</span> 2. THE pH SCALE (0 TO 14)\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The <strong>pH scale</strong> measures hydrogen ion concentration [H⁺]:<br>\n                  • <strong>pH 0 to 6.9: ACIDIC</strong> (Lower pH = stronger acid; battery acid is pH 0, gastric juice is pH 1-2).<br>\n                  • <strong>pH 7.0: STRICTLY NEUTRAL</strong> (Pure distilled water at 25°C).<br>\n                  • <strong>pH 7.1 to 14: BASIC / ALKALINE</strong> (Higher pH = stronger base; bleach is pH 13, drain cleaner is pH 14).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🧂</span> 3. NEUTRALIZATION & SALT FORMATION\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  When an acid reacts with a base, they destroy each other’s acidic and basic properties:<br>\n                  <strong>Acid + Base ➔ Salt + Water</strong>.<br>\n                  • Hydrochloric acid + Sodium hydroxide ➔ Sodium chloride (table salt) + Water:<br>\n                  <strong>HCl + NaOH ➔ NaCl + H₂O</strong>.<br>\n                  • Real-world applications: Farmers spread slaked lime (Ca(OH)₂) to neutralize acidic soil; antacids (Mg(OH)₂) neutralize excess stomach acid.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Predicting Indicator Color and Neutralization Product",
            "problem": "A solution of potassium hydroxide (KOH) is tested. Part A: What color will red litmus paper turn? Part B: Write the balanced chemical equation for its neutralization with sulfuric acid (H₂SO₄).",
            "steps": [
              {
                "label": "Step 1: Identify nature of KOH",
                "text": "KOH is a strong alkaline base. Bases turn red litmus paper <strong>BLUE</strong>."
              },
              {
                "label": "Step 2: Identify reactants and products for Part B",
                "text": "Acid = H₂SO₄ (dibasic acid). Base = KOH.<br>Salt formed = Potassium sulfate (K₂SO₄). Byproduct = Water (H₂O)."
              },
              {
                "label": "Step 3: Balance the neutralization equation",
                "text": "H₂SO₄ + 2KOH ➔ <strong>K₂SO₄ + 2H₂O</strong>."
              }
            ],
            "proTip": "Remember: Acids turn litmus RED (think \"Red = Acid Alert\"); Bases turn litmus BLUE (think \"B = Base = Blue\")!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the pH of a neutral solution like pure water?",
              "a": "7.0."
            },
            {
              "q": "What gas is produced when an acid reacts with an active metal like Zinc?",
              "a": "Hydrogen gas (H₂), which burns with a squeaky pop sound."
            },
            {
              "q": "What color does phenolphthalein turn in an acidic solution versus a basic solution?",
              "a": "Colorless in acid; bright pink/magenta in base."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the color change observed when blue litmus paper is dipped into an acidic solution such as lemon juice (citric acid)?",
              "options": [
                "Blue litmus paper turns Red",
                "Blue litmus paper turns Bright Green",
                "Blue litmus paper turns Colorless",
                "Blue litmus paper remains Blue"
              ],
              "correct": 0,
              "strategy": "Acids turn Blue litmus paper Red (ABR rule).",
              "derivation": "Acidic solutions (pH < 7) donate hydrogen ions (H⁺) that protonate litmus pigment, shifting its conjugated structure to reflect red wavelengths.",
              "trap": "Confusing acids (blue to red) with bases (red to blue)."
            },
            {
              "q": "A soil sample taken from a farming cooperative in Wolaita has a measured pH of 5.0. What chemical substance is commonly applied by agricultural extension workers to neutralize this acidic soil?",
              "options": [
                "Concentrated hydrochloric acid",
                "Agricultural lime (calcium carbonate / hydroxide)",
                "Sodium chloride (table salt)",
                "Sulfur powder"
              ],
              "correct": 1,
              "strategy": "Lime is a basic calcium compound used to raise soil pH (neutralization).",
              "derivation": "Soil with pH 5.0 is acidic. Applying agricultural lime (CaCO₃ or Ca(OH)₂) neutralizes excess H⁺ ions: 2H⁺ + CaCO₃ ➔ Ca²⁺ + CO₂ + H₂O.",
              "trap": "Adding more acid or table salt, which would ruin the soil."
            },
            {
              "q": "Which of the following values on the pH scale represents a strongly basic (alkaline) aqueous solution?",
              "options": [
                "pH = 1.0",
                "pH = 7.0",
                "pH = 5.5",
                "pH = 13.0"
              ],
              "correct": 3,
              "strategy": "pH scale: 0-6.9 is acidic, 7.0 is neutral, 7.1-14 is basic.",
              "derivation": "pH 13.0 indicates a very high hydroxide ion concentration [OH⁻] and very low [H⁺], characteristic of strong bases like sodium hydroxide (NaOH).",
              "trap": "Selecting pH 1.0, which is strongly acidic!"
            },
            {
              "q": "What are the two standard products formed when an acid reacts with a base in a neutralization reaction?",
              "options": [
                "A Salt and Water",
                "An Oxide and Hydrogen gas",
                "Pure Carbon and Oxygen",
                "A Metal and Nitrogen gas"
              ],
              "correct": 0,
              "strategy": "Neutralization formula: Acid + Base ➔ Salt + Water.",
              "derivation": "For example: HCl (acid) + NaOH (base) ➔ NaCl (salt) + H₂O (water). The H⁺ and OH⁻ ions combine to form neutral water.",
              "trap": "Assuming hydrogen gas is released (hydrogen gas is released when acids react with metals, not bases!)."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-sci-u3",
      "number": "Unit 3",
      "title": "Motion and Newton’s Laws",
      "bigIdea": "Understand kinematics: distance vs displacement, speed vs velocity, uniform acceleration, linear motion equations, and Newton’s three laws of motion.",
      "subtopics": [
        {
          "id": "g8-sci-3.1",
          "code": "3.1",
          "title": "Speed, Velocity, Acceleration & Newton’s Laws",
          "survey": {
            "blueprint": "Distance (scalar, path length) vs Displacement (vector, straight-line distance). Speed = Distance / Time. Velocity = Displacement / Time. Acceleration: a = (v - u) / t. Three equations of motion: (1) v = u + at, (2) s = ut + ½at², (3) v² = u² + 2as. Newton’s 3 Laws of Motion & Friction.",
            "objectives": [
              "Differentiate scalar quantities (distance, speed) from vector quantities (displacement, velocity, acceleration).",
              "Calculate uniform acceleration using a = (v - u) / t.",
              "Solve linear kinematics problems using the three equations of uniformly accelerated motion.",
              "Analyze friction: static friction, kinetic friction, and methods of reducing friction (lubrication, ball bearings)."
            ],
            "keyFormulas": "v = u + at &nbsp;|&nbsp; s = ut + ½at² &nbsp;|&nbsp; v² = u² + 2as &nbsp;|&nbsp; F_net = ma &nbsp;|&nbsp; Momentum: p = mv"
          },
          "questions": [
            "Can an object have a constant speed while simultaneously experiencing non-zero acceleration?",
            "Why does a passenger in an Ethiopian bus lurch violently forward when the driver slams on the brakes suddenly?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🚗</span> 1. KINEMATIC QUANTITIES COMPARED\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Distance (d):</strong> Total length of path traversed regardless of direction (scalar, always positive).<br>\n                  • <strong>Displacement (s):</strong> Straight-line vector distance from starting position to ending position.<br>\n                  • <strong>Speed:</strong> Rate of change of distance: <em>v = d / t</em> (scalar).<br>\n                  • <strong>Velocity:</strong> Speed with a specified direction: <em>v = s / t</em> (vector).<br>\n                  • <strong>Acceleration (a):</strong> The rate of change of velocity with respect to time: <strong>a = (v - u) / t</strong> (Unit: m/s²).<br>\n                  <em>Note:</em> An object traveling at constant speed in a circle IS accelerating because its direction changes continuously!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>📈</span> 2. THE THREE EQUATIONS OF UNIFORMLY ACCELERATED MOTION\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>1st Equation:</strong> <strong>v = u + at</strong> (relates final velocity v, initial velocity u, acceleration a, and time t).\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>2nd Equation:</strong> <strong>s = ut + ½at²</strong> (relates displacement s to time t).\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>3rd Equation:</strong> <strong>v² = u² + 2as</strong> (time-independent equation).\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🛑</span> 3. NEWTON’S LAWS OF MOTION & FRICTION\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Newton’s 1st Law (Inertia):</strong> Passengers lurch forward during sudden braking because their bodies possess inertia of motion.<br>\n                  • <strong>Newton’s 2nd Law:</strong> <strong>F_net = m × a</strong>. Doubling force doubles acceleration; doubling mass halves acceleration.<br>\n                  • <strong>Newton’s 3rd Law:</strong> Action and reaction forces are equal and opposite (e.g. rocket exhaust pushes down, rocket accelerates up).<br>\n                  • <strong>Friction:</strong> Force opposing relative motion. <em>Static friction</em> (opposing start of motion) is always greater than <em>Kinetic friction</em> (opposing ongoing motion).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Kinematics of an Accelerating Truck",
            "problem": "A freight truck traveling along the Modjo-Hawassa expressway starts from rest (u = 0) and accelerates uniformly at 2.5 m/s² for 8 seconds. Calculate: Part A: Its final velocity in m/s. Part B: The total distance traveled in this time.",
            "steps": [
              {
                "label": "Step 1: Calculate final velocity using 1st equation",
                "text": "u = 0 m/s, a = 2.5 m/s², t = 8 s.<br>v = u + at = 0 + (2.5 × 8) = <strong>20 m/s</strong> (72 km/h)."
              },
              {
                "label": "Step 2: Calculate distance using 2nd equation",
                "text": "s = ut + ½at².<br>Since u = 0, s = ½ × 2.5 × (8)².<br>s = 1.25 × 64 = <strong>80 meters</strong>."
              },
              {
                "label": "Step 3: Verification using 3rd equation",
                "text": "v² = u² + 2as ⟹ 20² = 0 + 2(2.5)(s) ⟹ 400 = 5s ⟹ s = 400 / 5 = 80 m. (Verified!)"
              }
            ],
            "proTip": "When a problem states \"starts from rest\", write down u = 0 immediately! When it states \"comes to a stop\", write down v = 0!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the SI unit of acceleration?",
              "a": "m/s² (meters per second squared)."
            },
            {
              "q": "Which equation of motion does NOT involve time t?",
              "a": "v² = u² + 2as."
            },
            {
              "q": "Why is static friction always greater than kinetic friction?",
              "a": "Because surface asperities interlock deeper when objects are stationary at rest."
            }
          ],
          "amtQuiz": [
            {
              "q": "An electric train on the Addis Ababa Light Rail Transit accelerates uniformly from rest (u = 0 m/s) at a rate of 1.5 m/s² for 8 seconds. What is its final velocity?",
              "options": [
                "9.5 m/s",
                "12.0 m/s",
                "6.0 m/s",
                "18.0 m/s"
              ],
              "correct": 1,
              "strategy": "Use the first equation of linear motion: v = u + at.",
              "derivation": "v = u + at = 0 + (1.5 m/s² × 8 s) = 12.0 m/s.",
              "trap": "Adding velocity and acceleration directly (8 + 1.5 = 9.5)."
            },
            {
              "q": "What is the physical difference between speed and velocity in physics?",
              "options": [
                "Speed has magnitude and direction, while velocity has only magnitude",
                "Speed is a scalar quantity (magnitude only), while velocity is a vector quantity (magnitude and direction)",
                "Speed is measured in meters per second, while velocity is measured in Newtons",
                "Speed applies only to cars, while velocity applies only to aircraft"
              ],
              "correct": 1,
              "strategy": "Scalar = magnitude only; Vector = magnitude + direction.",
              "derivation": "Speed is distance divided by time (scalar). Velocity is displacement divided by time (vector), requiring a specified direction of travel.",
              "trap": "Reversing scalar and vector definitions."
            },
            {
              "q": "How far does a vehicle travel in 10 seconds if it moves at a constant, non-accelerating speed of 25 meters per second?",
              "options": [
                "2.5 meters",
                "250 meters",
                "35 meters",
                "15 meters"
              ],
              "correct": 1,
              "strategy": "Formula: Distance = Speed × Time (s = v × t).",
              "derivation": "s = 25 m/s × 10 s = 250 meters.",
              "trap": "Dividing speed by time (25/10 = 2.5)."
            },
            {
              "q": "If a freely falling stone dropped from the edge of the Blue Nile Gorge experiences gravitational acceleration g = 9.8 m/s² (neglecting air resistance), what is its downward speed after 3 seconds?",
              "options": [
                "9.8 m/s",
                "29.4 m/s",
                "19.6 m/s",
                "3.26 m/s"
              ],
              "correct": 1,
              "strategy": "Use v = u + gt where u = 0.",
              "derivation": "v = 0 + (9.8 m/s² × 3 s) = 29.4 m/s.",
              "trap": "Assuming terminal velocity without calculation."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-sci-u4",
      "number": "Unit 4",
      "title": "Energy, Work & Simple Machines",
      "bigIdea": "Understand simple machines: mechanical advantage, velocity ratio, efficiency, three classes of levers, pulleys, and inclined planes.",
      "subtopics": [
        {
          "id": "g8-sci-4.1",
          "code": "4.1",
          "title": "Mechanical Advantage, Levers & Pulleys",
          "survey": {
            "blueprint": "Simple machines multiply force or change direction. Mechanical Advantage: MA = Load / Effort. Velocity Ratio: VR = Distance of Effort / Distance of Load. Efficiency: η = (MA / VR) × 100%. Three classes of levers (1st: Fulcrum middle; 2nd: Load middle; 3rd: Effort middle). Pulleys: single fixed, movable, and block-and-tackle.",
            "objectives": [
              "Calculate Mechanical Advantage (MA), Velocity Ratio (VR), and Efficiency (η).",
              "Classify levers into Class 1, Class 2, and Class 3 based on relative position of Fulcrum, Load, and Effort (FLE rule).",
              "Explain why real machines NEVER achieve 100% efficiency (frictional thermal dissipation)."
            ],
            "keyFormulas": "MA = Load / Effort &nbsp;|&nbsp; VR = d_E / d_L &nbsp;|&nbsp; Efficiency: η = (MA / VR) × 100% &nbsp;|&nbsp; Work Output = Load × d_L"
          },
          "questions": [
            "Why is the Velocity Ratio of a machine purely geometric while its Mechanical Advantage varies with friction?",
            "Why does a Class 3 lever like a pair of tweezers or a human forearm have an MA less than 1.0?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>⚙️</span> 1. THE THREE FUNDAMENTAL RATIOS OF MACHINES\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Mechanical Advantage (MA):</strong> The force multiplier factor:<br>\n                  <strong>MA = Load (L) / Effort (E)</strong> (pure dimensionless number).<br>\n                  • <strong>Velocity Ratio (VR):</strong> The ratio of distances moved in the same time:<br>\n                  <strong>VR = Distance moved by Effort (d_E) / Distance moved by Load (d_L)</strong>.<br>\n                  • <strong>Efficiency (η):</strong> Ratio of useful work output to total work input:<br>\n                  <strong>Efficiency (η) = (Work Output / Work Input) × 100% = (MA / VR) × 100%</strong>.<br>\n                  • <em>100% Rule:</em> In an ideal frictionless machine, MA = VR and η = 100%. In all real machines, friction causes MA < VR, so <strong>η < 100%</strong>.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>📐</span> 2. THE THREE CLASSES OF LEVERS (THE FLE RULE)\n                </h4>\n                <p class=\"text-xs text-slate-300 mb-2\">\n                  Remember what is in the <strong>MIDDLE</strong>: <strong>1-F, 2-L, 3-E (FLE)</strong>:\n                </p>\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Class 1 (Fulcrum in Middle):</strong><br>\n                    • Crowbar, scissors, seesaw.<br>\n                    • MA can be greater than, equal to, or less than 1.\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Class 2 (Load in Middle):</strong><br>\n                    • Wheelbarrow, bottle opener, nutcracker.<br>\n                    • Effort arm always longer than load arm; <strong>MA > 1</strong> (force multiplier).\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Class 3 (Effort in Middle):</strong><br>\n                    • Tweezers, fishing rod, human forearm.<br>\n                    • <strong>MA < 1</strong>; sacrifices force to gain speed and distance!\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🏗️</span> 3. PULLEYS & INCLINED PLANES\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Single Fixed Pulley:</strong> VR = 1. Does NOT amplify force (MA ≈ 1), but changes the direction of force (pulling downward is easier).<br>\n                  • <strong>Single Movable Pulley:</strong> VR = 2. Supports load with two rope segments; cuts effort in half.<br>\n                  • <strong>Block and Tackle System:</strong> VR equals the total number of rope segments supporting the movable block.<br>\n                  • <strong>Inclined Plane:</strong> <strong>VR = Length of slope (l) / Vertical height (h)</strong>.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Pulley System MA, VR & Efficiency",
            "problem": "A block and tackle pulley system consisting of 4 pulleys is used to lift a load of 1,200 N. An effort of 375 N is applied. Calculate: Part A: Mechanical Advantage (MA). Part B: Velocity Ratio (VR). Part C: The Efficiency of the machine.",
            "steps": [
              {
                "label": "Step 1: Calculate Mechanical Advantage",
                "text": "MA = Load / Effort = 1,200 N / 375 N = <strong>3.2</strong>."
              },
              {
                "label": "Step 2: State Velocity Ratio",
                "text": "For a block and tackle system with 4 pulleys supporting the load, <strong>VR = 4</strong>."
              },
              {
                "label": "Step 3: Calculate Efficiency",
                "text": "Efficiency η = (MA / VR) × 100% = (3.2 / 4) × 100% = 0.8 × 100% = <strong>80%</strong>."
              }
            ],
            "proTip": "Notice that 20% of the input energy was lost overcoming friction in the pulley axles and lifting the weight of the movable pulleys!"
          },
          "reciteFlashcards": [
            {
              "q": "In a Class 2 lever, which element is located in the middle?",
              "a": "The Load (e.g. wheelbarrow)."
            },
            {
              "q": "What is the formula for the efficiency of a machine in terms of MA and VR?",
              "a": "Efficiency = (MA / VR) × 100%."
            },
            {
              "q": "What is the Velocity Ratio of a block-and-tackle system with 5 pulleys?",
              "a": "5."
            }
          ],
          "amtQuiz": [
            {
              "q": "A simple crowbar lever is used to lift a heavy stone weighing 1,200 Newtons. The worker applies an effort force of only 300 Newtons. What is the Mechanical Advantage (MA) of this machine?",
              "options": [
                "0.25",
                "4.0",
                "900",
                "1,500"
              ],
              "correct": 1,
              "strategy": "Formula: Mechanical Advantage = Load / Effort (MA = L / E).",
              "derivation": "MA = Load ÷ Effort = 1,200 N ÷ 300 N = 4.0 (dimensionless ratio).",
              "trap": "Inverting the formula (300 / 1200 = 0.25) or subtracting forces."
            },
            {
              "q": "In an inclined plane ramp, the effort moves through a distance of 15 meters along the ramp to raise a crate to a vertical platform height of 3 meters. What is the Velocity Ratio (VR) of the ramp?",
              "options": [
                "45",
                "5.0",
                "12",
                "0.2"
              ],
              "correct": 1,
              "strategy": "Formula: Velocity Ratio = Distance moved by Effort / Distance moved by Load (VR = dE / dL).",
              "derivation": "VR = dE / dL = 15 m / 3 m = 5.0.",
              "trap": "Dividing load distance by effort distance (3 / 15 = 0.2)."
            },
            {
              "q": "Why is the efficiency of any real-world simple machine always strictly less than 100% (η < 100%)?",
              "options": [
                "Because mechanical energy is destroyed during work",
                "Because some input work is inevitably dissipated as thermal heat due to friction and moving component weights",
                "Because gravity increases whenever machines are operated",
                "Because velocity ratio always equals zero in practice"
              ],
              "correct": 1,
              "strategy": "Friction converts useful work into wasted heat.",
              "derivation": "Efficiency = (Work Output / Work Input) × 100%. In all real machines, friction between moving surfaces and air resistance convert part of the input work into thermal energy.",
              "trap": "Believing that energy is destroyed, violating conservation of energy."
            },
            {
              "q": "Which class of lever has the fulcrum positioned in the middle, between the effort and the load (e.g. a pair of scissors or a playground seesaw)?",
              "options": [
                "First Class Lever",
                "Second Class Lever",
                "Third Class Lever",
                "Fourth Class Lever"
              ],
              "correct": 0,
              "strategy": "Remember FLE: 1st class has Fulcrum in middle, 2nd class has Load in middle, 3rd class has Effort in middle.",
              "derivation": "First class levers have the pivot (fulcrum) between the effort and load. Second class has the load in the center (wheelbarrow). Third class has effort in the center (tweezer/forearm).",
              "trap": "Confusing 1st class (fulcrum in middle) with 2nd class (load in middle)."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-sci-u5",
      "number": "Unit 5",
      "title": "Electricity and Magnetism",
      "bigIdea": "Explore electrostatics, electric circuits, Ohm’s law (V = IR), series vs parallel circuit analysis, and electromagnetism.",
      "subtopics": [
        {
          "id": "g8-sci-5.1",
          "code": "5.1",
          "title": "Electric Circuits, Ohm’s Law & Magnetism",
          "survey": {
            "blueprint": "Electric charge: Q = I × t (in Coulombs). Current (I, Amperes), Voltage / Potential Difference (V, Volts), Resistance (R, Ohms Ω). Ohm’s Law: V = I × R. Circuit topologies: Series (same current, voltages add) vs Parallel (same voltage, currents add). Magnetism: poles, magnetic field lines, and electromagnets.",
            "objectives": [
              "State and apply Ohm’s Law (V = IR) to compute unknown voltage, current, or resistance.",
              "Calculate equivalent resistance for series (R = R₁ + R₂) and parallel (1/R = 1/R₁ + 1/R₂) circuits.",
              "Compare advantages of parallel house wiring over series wiring (independent operation, constant 220V).",
              "Explain how electric current flowing through a coil creates a magnetic field (electromagnet)."
            ],
            "keyFormulas": "Ohm’s Law: V = IR &nbsp;|&nbsp; Series: R_eq = R₁ + R₂ &nbsp;|&nbsp; Parallel: 1/R_eq = 1/R₁ + 1/R₂ &nbsp;|&nbsp; Electric Power: P = VI = I²R"
          },
          "questions": [
            "Why are residential homes in Ethiopia wired exclusively in parallel and never in series?",
            "What happens to the total circuit current if you connect more resistors in parallel?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>⚡</span> 1. CURRENT, VOLTAGE, RESISTANCE & OHM’S LAW\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Electric Current (I):</strong> The rate of flow of electric charges: <em>I = Q / t</em>. Unit: <strong>Ampere (A)</strong> (measured by Ammeter in series).<br>\n                  • <strong>Voltage / Potential Difference (V):</strong> Work done per unit charge moving between two points: <em>V = W / Q</em>. Unit: <strong>Volt (V)</strong> (measured by Voltmeter in parallel).<br>\n                  • <strong>Resistance (R):</strong> Opposition to current flow. Unit: <strong>Ohm (Ω)</strong>.<br>\n                  • <strong>Ohm’s Law:</strong> At constant temperature, the current flowing through a metallic conductor is directly proportional to the potential difference across it:<br>\n                  <strong>V = I × R</strong> ⟹ <strong>I = V / R</strong> ⟹ <strong>R = V / I</strong>.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🔌</span> 2. SERIES VS. PARALLEL CIRCUIT ARCHITECTURES\n                </h4>\n                <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-amber-400\">Series Circuits (Single Loop):</strong><br>\n                    • Current is <strong>IDENTICAL</strong> through all components: <em>I_total = I₁ = I₂</em>.<br>\n                    • Voltages add up: <em>V_total = V₁ + V₂</em>.<br>\n                    • Total Resistance adds directly: <strong>R_eq = R₁ + R₂ + R₃</strong>.<br>\n                    • <em>Disadvantage:</em> If one bulb burns out, the circuit breaks and all bulbs go out!\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-emerald-400\">Parallel Circuits (Multiple Branches):</strong><br>\n                    • Voltage is <strong>IDENTICAL</strong> across all branches: <em>V_total = V₁ = V₂</em>.<br>\n                    • Currents add up: <em>I_total = I₁ + I₂</em>.<br>\n                    • Total Resistance decreases: <strong>1/R_eq = 1/R₁ + 1/R₂</strong>.<br>\n                    • <em>Advantage:</em> Each appliance operates independently with full mains voltage (220V)!\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>🧲</span> 3. MAGNETISM & ELECTROMAGNETS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Magnetic Poles:</strong> North and South. Like poles repel; unlike poles attract.<br>\n                  • <strong>Magnetic Field Lines:</strong> Continuous loops directed from North pole to South pole outside the magnet.<br>\n                  • <strong>Electromagnet:</strong> A temporary magnet formed by wrapping insulated copper wire (solenoid) around a soft iron core. When current flows, a strong magnetic field is generated instantly; when current is switched off, magnetism disappears immediately (used in electric bells, scrap cranes, relay switches).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Parallel Resistors and Current Split",
            "problem": "Two resistors of 6 Ω and 12 Ω are connected in parallel across a 24V car battery. Calculate: Part A: Equivalent resistance of the circuit. Part B: Total current drawn from the battery.",
            "steps": [
              {
                "label": "Step 1: Calculate equivalent parallel resistance",
                "text": "1 / R_eq = 1 / R₁ + 1 / R₂ = 1/6 + 1/12.<br>Common denominator is 12: 1/6 = 2/12.<br>1 / R_eq = 2/12 + 1/12 = 3/12 = 1/4.<br>Invert both sides: <strong>R_eq = 4 Ω</strong>."
              },
              {
                "label": "Step 2: Calculate total circuit current using Ohm’s Law",
                "text": "I_total = V / R_eq = 24 V / 4 Ω = <strong>6 Amperes</strong>."
              },
              {
                "label": "Step 3: Check branch currents",
                "text": "Branch 1: I₁ = 24 / 6 = 4 A.<br>Branch 2: I₂ = 24 / 12 = 2 A.<br>Total current = 4 A + 2 A = 6 A. (Verified!)"
              }
            ],
            "proTip": "Shortcut for two parallel resistors: Product over Sum: R_eq = (R₁ × R₂) / (R₁ + R₂) = (6 × 12) / (6 + 12) = 72 / 18 = 4 Ω!"
          },
          "reciteFlashcards": [
            {
              "q": "State Ohm’s Law formula relating Voltage, Current, and Resistance.",
              "a": "V = I × R."
            },
            {
              "q": "What happens to total resistance when more resistors are added in parallel?",
              "a": "Total equivalent resistance decreases."
            },
            {
              "q": "Why is an ammeter always connected in series while a voltmeter is connected in parallel?",
              "a": "An ammeter has near-zero resistance to measure current flow; a voltmeter has massive resistance to measure voltage without drawing current."
            }
          ],
          "amtQuiz": [
            {
              "q": "According to Ohm’s Law, what electric current flows through an electric kettle element with a resistance of 44 Ohms connected to a standard 220-Volt mains socket in Addis Ababa?",
              "options": [
                "9,680 Amperes",
                "5.0 Amperes",
                "0.2 Amperes",
                "176 Amperes"
              ],
              "correct": 1,
              "strategy": "Ohm’s Law: I = V / R.",
              "derivation": "Current I = Voltage V ÷ Resistance R = 220 V ÷ 44 Ω = 5.0 Amperes.",
              "trap": "Multiplying voltage by resistance (220 × 44 = 9680)."
            },
            {
              "q": "In a household electrical wiring circuit, why are electrical appliances always connected in parallel rather than in series?",
              "options": [
                "Parallel circuits increase the overall electrical resistance of the entire house",
                "Each appliance receives the full supply voltage, and turning off one appliance does not interrupt current to others",
                "Parallel wiring eliminates the need for circuit breakers and copper wires",
                "Appliances in parallel use zero electrical energy"
              ],
              "correct": 1,
              "strategy": "Parallel circuits provide independent branches and equal voltage.",
              "derivation": "In parallel circuits, every branch experiences the same terminal voltage (220V). If one appliance is switched off or burns out, current continues flowing uninterrupted to the other parallel branches.",
              "trap": "Selecting series, where one broken bulb shuts off the entire circuit."
            },
            {
              "q": "What device converts mechanical rotational energy into electrical energy using electromagnetic induction?",
              "options": [
                "Electric Motor",
                "Electric Generator (Dynamo)",
                "Step-down Transformer",
                "Capacitor"
              ],
              "correct": 1,
              "strategy": "Generator converts mechanical to electrical; Motor converts electrical to mechanical.",
              "derivation": "Generators rotate coils of wire in magnetic fields (Faraday’s law of induction) to generate electric current. Motors do the exact reverse.",
              "trap": "Confusing electric generators with electric motors."
            },
            {
              "q": "What is the equivalent total resistance of two resistors with resistances of 6 Ohms and 12 Ohms connected in series?",
              "options": [
                "4 Ohms",
                "18 Ohms",
                "72 Ohms",
                "2 Ohms"
              ],
              "correct": 1,
              "strategy": "In series, simply add the resistances: R_total = R1 + R2.",
              "derivation": "R_total = 6 Ω + 12 Ω = 18 Ohms.",
              "trap": "Using the parallel formula (which would give 4 Ohms)."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-sci-u6",
      "number": "Unit 6",
      "title": "Genetics and Heredity",
      "bigIdea": "Understand chromosomes, DNA, genes, alleles, Gregor Mendel’s laws of inheritance, dominant vs recessive traits, and Punnett square crosses.",
      "subtopics": [
        {
          "id": "g8-sci-6.1",
          "code": "6.1",
          "title": "DNA, Chromosomes & Mendelian Inheritance",
          "survey": {
            "blueprint": "Heredity: transmission of traits from parents to offspring. DNA (Deoxyribonucleic Acid): double helix polymer of nucleotides (A-T, C-G base pairing). Genes: functional segments of DNA. Chromosomes: humans have 46 (23 pairs: 22 autosomes + 1 sex chromosome pair XX/XY). Mendel’s Law of Segregation and Monohybrid Punnett Squares.",
            "objectives": [
              "Describe the structural relationship between DNA, genes, and chromosomes.",
              "Distinguish between phenotype (physical appearance) and genotype (genetic makeup).",
              "Differentiate homozygous (pure-breeding, TT or tt) from heterozygous (hybrid, Tt) genotypes.",
              "Predict offspring genotypic and phenotypic ratios using a monohybrid Punnett square (3:1 ratio)."
            ],
            "keyFormulas": "Human karyotype: 46 chromosomes (23 pairs) &nbsp;|&nbsp; Monohybrid F₂ phenotypic ratio: 3 dominant : 1 recessive"
          },
          "questions": [
            "Why does two brown-eyed parents have a 25% chance of having a blue-eyed child?",
            "Which parent (mother or father) biologically determines the sex of a human baby and why?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🧬</span> 1. DNA, GENES & HUMAN CHROMOSOMES\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>DNA:</strong> A double-stranded helical molecule carrying hereditary instructions. Four nitrogenous bases pair specifically: <strong>Adenine with Thymine (A-T)</strong> and <strong>Cytosine with Guanine (C-G)</strong>.<br>\n                  • <strong>Gene:</strong> A specific sequence of DNA nucleotides that codes for a functional protein or trait.<br>\n                  • <strong>Chromosomes:</strong> DNA condensed around histone proteins inside the nucleus. Normal human somatic cells contain <strong>46 chromosomes (23 homologous pairs)</strong>:<br>\n                  - 22 pairs of <em>Autosomes</em>.<br>\n                  - 1 pair of <em>Sex Chromosomes</em>: Females have <strong>XX</strong>; Males have <strong>XY</strong>.<br>\n                  - <em>Sex Determination:</em> Because father's sperm carries either an X or Y chromosome (while mother’s egg always carries X), the <strong>father determines the biological sex</strong> of the child (50% XX girl, 50% XY boy)!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🌱</span> 2. GREGOR MENDEL’S LAWS & GENETIC TERMINOLOGY\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Allele:</strong> Alternative versions of a gene (e.g. T for tall, t for short).</p>\n                  <p>• <strong>Dominant Allele (T):</strong> Masks the expression of a recessive allele; expressed in TT and Tt.</p>\n                  <p>• <strong>Recessive Allele (t):</strong> Expressed ONLY when in homozygous state (tt).</p>\n                  <p>• <strong>Genotype:</strong> The genetic allele combination (TT, Tt, or tt).</p>\n                  <p>• <strong>Phenotype:</strong> The physical observable appearance (Tall or Short plant).</p>\n                  <p>• <strong>Homozygous:</strong> Having identical alleles (TT = homozygous dominant; tt = homozygous recessive).<br>\n                  • <strong>Heterozygous:</strong> Having two different alleles (Tt = carrier/hybrid).</p>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>📊</span> 3. MONOHYBRID CROSS & PUNNETT SQUARES\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  When two heterozygous pea plants (Tt × Tt) are crossed:<br>\n                  • Gametes: Each parent produces 50% T and 50% t gametes (Mendel’s Law of Segregation).<br>\n                  • <strong>Punnett Square Results:</strong><br>\n                  - 1 TT (homozygous tall)<br>\n                  - 2 Tt (heterozygous tall)<br>\n                  - 1 tt (homozygous short)<br>\n                  • <strong>Genotypic Ratio:</strong> <strong>1 TT : 2 Tt : 1 tt</strong> (1:2:1).<br>\n                  • <strong>Phenotypic Ratio:</strong> <strong>3 Tall : 1 Short</strong> (75% tall, 25% short).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Predicting Human Albinism Inheritance",
            "problem": "In humans, normal melanin pigmentation is dominant (A) and albinism is recessive (a). Two parents with normal pigmentation both have heterozygous genotypes (Aa). Calculate the probability that their firstborn child will have albinism.",
            "steps": [
              {
                "label": "Step 1: Set up the genetic cross",
                "text": "Parent 1: Aa × Parent 2: Aa.<br>Possible gametes from each parent: A (50%) and a (50%)."
              },
              {
                "label": "Step 2: Construct the 2×2 Punnett Square",
                "text": "Top row: A, a. Left column: A, a.<br>Box 1 (Top-Left): A × A = AA (Normal).<br>Box 2 (Top-Right): A × a = Aa (Normal carrier).<br>Box 3 (Bottom-Left): a × A = Aa (Normal carrier).<br>Box 4 (Bottom-Right): a × a = aa (Albinism)."
              },
              {
                "label": "Step 3: Calculate the probability",
                "text": "Out of 4 possible offspring combinations, only 1 is homozygous recessive (aa).<br>Probability of albinism = 1 / 4 = <strong>25% (0.25)</strong>."
              }
            ],
            "proTip": "Notice that 75% of offspring will have normal pigmentation, but 2 out of 3 normal children (66%) will be silent genetic carriers (Aa)!"
          },
          "reciteFlashcards": [
            {
              "q": "How many total chromosomes are in a normal human diploid somatic cell?",
              "a": "46 chromosomes (23 pairs)."
            },
            {
              "q": "What is the phenotypic ratio in the F₂ generation of a monohybrid cross between two heterozygotes (Tt × Tt)?",
              "a": "3 : 1 (3 dominant to 1 recessive)."
            },
            {
              "q": "Which base pairs with Adenine (A) in DNA?",
              "a": "Thymine (T) via two hydrogen bonds."
            }
          ],
          "amtQuiz": [
            {
              "q": "In Gregor Mendel’s genetic experiments on pea plants, when a homozygous dominant tall plant (TT) is crossed with a homozygous recessive dwarf plant (tt), what is the phenotypic ratio of tall to dwarf in the F1 generation?",
              "options": [
                "1 Tall : 1 Dwarf",
                "3 Tall : 1 Dwarf",
                "100% Tall (All Tall)",
                "50% Medium : 50% Dwarf"
              ],
              "correct": 2,
              "strategy": "All F1 offspring inherit T from one parent and t from the other, giving genotype Tt (all tall).",
              "derivation": "Punnett square of TT × tt yields 100% heterozygous (Tt) offspring. Since T (tall) is completely dominant over t (dwarf), 100% of the F1 generation are phenotypically tall.",
              "trap": "Selecting 3:1, which is the phenotypic ratio of the F2 generation, not F1!"
            },
            {
              "q": "Where are genes, the fundamental units of biological heredity, physically located inside a eukaryotic cell?",
              "options": [
                "Floating freely as carbohydrates inside the cytoplasm vacuole",
                "Arranged in linear sequence along DNA molecules within chromosomes in the cell nucleus",
                "Embedded strictly within the lipid outer cell wall",
                "Dissolved in blood plasma outside the cells"
              ],
              "correct": 1,
              "strategy": "Genes are segments of DNA packaged into chromosomes inside the nucleus.",
              "derivation": "A gene is a specific sequence of nucleotides along a deoxyribonucleic acid (DNA) molecule. Chromosomes in the cell nucleus contain these tightly wound DNA strands.",
              "trap": "Selecting cytoplasm or cell wall."
            },
            {
              "q": "What term describes an organism that has two identical alleles for a specific trait (such as BB or bb)?",
              "options": [
                "Heterozygous",
                "Homozygous",
                "Polygenic",
                "Codominant"
              ],
              "correct": 1,
              "strategy": "Homo = same (homozygous = identical alleles); Hetero = different.",
              "derivation": "Homozygous individuals have identical alleles at a given locus (e.g., homozygous dominant BB or homozygous recessive bb). Heterozygous individuals have different alleles (Bb).",
              "trap": "Confusing homozygous with heterozygous."
            },
            {
              "q": "What is the probability of a human child inheriting a Y chromosome from their father and being biologically male?",
              "options": [
                "25%",
                "50%",
                "75%",
                "100%"
              ],
              "correct": 1,
              "strategy": "Father produces 50% X sperm and 50% Y sperm.",
              "derivation": "Human sex determination: Female = XX; Male = XY. Mother always provides an X chromosome. Father provides either X or Y with equal 50% probability. Therefore, the chance of a male child (XY) is 50% (1 in 2).",
              "trap": "Assuming 25% or 75%."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-sci-u7",
      "number": "Unit 7",
      "title": "Environment & Ecology",
      "bigIdea": "Understand ecosystems, biotic vs abiotic factors, energy pyramids, trophic levels, biogeochemical cycles (carbon and nitrogen), and environmental conservation.",
      "subtopics": [
        {
          "id": "g8-sci-7.1",
          "code": "7.1",
          "title": "Ecosystems, Energy Flow & Biogeochemical Cycles",
          "survey": {
            "blueprint": "Ecosystem: biological community of interacting organisms (biotic) and their physical environment (abiotic). Trophic hierarchy: Producers (autotrophs) ➔ Primary Consumers (herbivores) ➔ Secondary/Tertiary Consumers (carnivores) ➔ Decomposers. The 10% Ecological Energy Rule. Carbon and Nitrogen cycles. Conservation of biodiversity.",
            "objectives": [
              "Distinguish biotic components (plants, animals, microbes) from abiotic factors (sunlight, soil, water, temperature).",
              "Construct food chains and food webs and apply the 10% Energy Transfer Law.",
              "Explain how photosynthesis and cellular respiration drive the global Carbon Cycle.",
              "Describe the Nitrogen Cycle: nitrogen-fixing bacteria in legume root nodules, nitrification, and denitrification."
            ],
            "keyFormulas": "10% Energy Law: Only ~10% of energy at one trophic level transfers to the next level"
          },
          "questions": [
            "Why are food chains almost never longer than 4 or 5 trophic levels in nature?",
            "How do Rhizobium bacteria in the root nodules of Ethiopian faba bean and chickpea plants enrich nitrogen-poor soils naturally?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🌲</span> 1. ECOSYSTEM STRUCTURE & BIOTIC INTERACTIONS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  An <strong>ecosystem</strong> consists of living (biotic) organisms interacting with non-living (abiotic) surroundings:<br>\n                  • <strong>Producers (Autotrophs):</strong> Green plants and algae that capture solar energy to synthesize glucose via photosynthesis.<br>\n                  • <strong>Consumers (Heterotrophs):</strong><br>\n                  - Primary Consumers: Herbivores eating producers (e.g. cattle, grasshoppers, zebras).<br>\n                  - Secondary Consumers: Carnivores eating herbivores (e.g. frogs, hyenas).<br>\n                  - Tertiary / Apex Predators: Top carnivores (e.g. Ethiopian wolf, lion, eagle).<br>\n                  • <strong>Decomposers:</strong> Bacteria and fungi that break down dead organic matter, recycling vital nutrients back into the soil.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400 flex items-center gap-2\">\n                  <span>⚡</span> 2. THE 10% ECOLOGICAL ENERGY RULE\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Energy enters ecosystems as sunlight, but energy transfer between trophic levels is highly inefficient:<br>\n                  • <strong>The 10% Rule (Lindeman’s Law):</strong> Only approximately <strong>10% of energy</strong> stored in organic matter at one trophic level is converted into biomass at the next trophic level.<br>\n                  • <em>90% Energy Loss:</em> 90% of energy is lost as heat, cellular respiration, movement, and undigested waste.<br>\n                  • <em>Consequence:</em> If grass captures 10,000 J of solar energy: Herbivores obtain 1,000 J; Carnivores obtain 100 J; Top predators obtain only 10 J! This limits food chain length to 4-5 links.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🔄</span> 3. THE CARBON & NITROGEN CYCLES\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Carbon Cycle:</strong> Carbon dioxide (CO₂) is removed from the atmosphere ONLY by plant <strong>Photosynthesis</strong>. CO₂ is returned to the atmosphere by <strong>Cellular Respiration</strong>, <strong>Decomposition</strong>, and the <strong>Combustion of fossil fuels</strong>.</p>\n                  <p>• <strong>Nitrogen Cycle:</strong> Atmospheric N₂ (78% of air) cannot be absorbed directly by plants. <strong>Nitrogen-fixing bacteria (Rhizobium)</strong> in the root nodules of leguminous plants convert N₂ into usable nitrates (NO₃⁻). Decomposers recycle ammonia, and <em>denitrifying bacteria</em> return N₂ back into the atmosphere.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Calculating Energy Transfer Through an Ecosystem",
            "problem": "In the Bale Mountains ecosystem, alpine meadow grasses produce 50,000 kJ of chemical energy through photosynthesis. Part A: How much energy reaches the giant mole-rats (primary consumers)? Part B: How much energy reaches the endangered Ethiopian wolf (secondary consumer)?",
            "steps": [
              {
                "label": "Step 1: Apply the 10% rule to primary consumers",
                "text": "Energy at Producer level = 50,000 kJ.<br>Primary Consumer Energy = 10% of 50,000 kJ = 0.10 × 50,000 = <strong>5,000 kJ</strong>."
              },
              {
                "label": "Step 2: Apply the 10% rule to secondary consumers",
                "text": "Secondary Consumer Energy = 10% of 5,000 kJ = 0.10 × 5,000 = <strong>500 kJ</strong>."
              },
              {
                "label": "Step 3: Analyze total energy loss",
                "text": "Out of 50,000 kJ captured by grass, 49,500 kJ (99%) was dissipated as heat across two trophic transfers, leaving only 500 kJ for the Ethiopian wolf!"
              }
            ],
            "proTip": "Because energy diminishes by 90% at each step, ecosystems can support far fewer carnivores than herbivores!"
          },
          "reciteFlashcards": [
            {
              "q": "What percentage of energy is transferred from one trophic level to the next on average?",
              "a": "Approximately 10% (the 10% Rule)."
            },
            {
              "q": "What type of bacteria convert atmospheric nitrogen into nitrates inside legume root nodules?",
              "a": "Nitrogen-fixing bacteria (Rhizobium)."
            },
            {
              "q": "What biological process is the ONLY natural sink that extracts CO₂ directly from the atmosphere?",
              "a": "Photosynthesis by green plants and algae."
            }
          ],
          "amtQuiz": [
            {
              "q": "According to the 10% Trophic Energy Transfer Rule in ecological food chains, if primary producers (grass in Bale Mountains National Park) capture 10,000 Joules of solar energy, how much energy is transferred to the primary consumers (grazing Nyala antelopes)?",
              "options": [
                "10,000 Joules",
                "1,000 Joules",
                "100 Joules",
                "10 Joules"
              ],
              "correct": 1,
              "strategy": "Energy transferred to next level = 10% of 10,000 J.",
              "derivation": "Only approximately 10% of the energy stored in biomass at one trophic level is converted into biomass at the next level. Energy = 10,000 J × 0.10 = 1,000 Joules. The remaining 90% is lost as metabolic heat and respiration.",
              "trap": "Selecting 100 Joules (which would be the secondary consumer level, like wolves)."
            },
            {
              "q": "The Ethiopian Wolf (Canis simensis) in the Afro-alpine ecosystem of Bale and Semien Mountains preys upon giant root-rats. In this ecological relationship, the Ethiopian wolf is classified as a:",
              "options": [
                "Primary Producer (Autotroph)",
                "Primary Consumer (Herbivore)",
                "Secondary Consumer (Carnivore)",
                "Decomposer (Saprotroph)"
              ],
              "correct": 2,
              "strategy": "The wolf eats herbivores (rats), making it a secondary consumer/carnivore.",
              "derivation": "Afro-alpine grass (producer) ➔ Giant root-rat (primary consumer / herbivore) ➔ Ethiopian wolf (secondary consumer / apex carnivore).",
              "trap": "Confusing primary consumer with secondary consumer."
            },
            {
              "q": "What is the ecological term for the maximum population size of a species that a given environment can sustainably support over time without degrading the habitat?",
              "options": [
                "Biotic Potential",
                "Carrying Capacity (K)",
                "Exponential Surge Limit",
                "Trophic Quotient"
              ],
              "correct": 1,
              "strategy": "Carrying capacity is the maximum sustainable population.",
              "derivation": "Carrying capacity (K) represents the equilibrium population level constrained by available food, water, territory, and environmental resistance.",
              "trap": "Confusing carrying capacity with unrestricted biotic potential."
            },
            {
              "q": "Which ecological process returns nitrogen, phosphorus, and carbon trapped in dead plants and animal carcasses back into the soil and atmosphere?",
              "options": [
                "Eutrophication",
                "Decomposition by bacteria and fungi",
                "Biomagnification",
                "Photosynthesis"
              ],
              "correct": 1,
              "strategy": "Decomposers break down organic detritus and recycle nutrients.",
              "derivation": "Decomposers (saprotrophic bacteria and fungi) secret extracellular enzymes that break down dead organic matter, recycling essential mineral nutrients back into the biogeochemical cycles.",
              "trap": "Selecting eutrophication, which is nutrient pollution in water bodies."
            }
          ]
        }
      ]
    }
  ]
};
