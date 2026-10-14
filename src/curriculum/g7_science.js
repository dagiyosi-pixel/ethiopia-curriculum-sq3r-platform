module.exports = {
  "id": "science",
  "name": "General Science",
  "icon": "🔬",
  "units": [
    {
      "id": "g7-sci-u1",
      "number": "Unit 1",
      "title": "Basic Scientific Investigation",
      "bigIdea": "Understand the nature of science, laboratory safety practices, SI measurement units, and scientific inquiry.",
      "subtopics": [
        {
          "id": "g7-sci-1.1",
          "code": "1.1",
          "title": "The Scientific Method, Measurement & Lab Safety",
          "survey": {
            "blueprint": "Inquiry cycle: Observation ➔ Question ➔ Hypothesis ➔ Controlled Experiment ➔ Data Analysis ➔ Conclusion. Variables: Independent (manipulated), Dependent (measured), Controlled (held constant). Lab safety & hazard symbols. SI units and density: ρ = m/V.",
            "objectives": [
              "Explain the sequential steps of the scientific investigation cycle.",
              "Distinguish between independent, dependent, and controlled variables in experiments.",
              "Identify laboratory hazard symbols and apply the \"Acid to Water\" dilution rule.",
              "Calculate density using ρ = m/V and apply displacement to find irregular solid volume."
            ],
            "keyFormulas": "Density: ρ = m / V [kg/m³ or g/cm³] &nbsp;|&nbsp; Volume of irregular solid: V = V_final - V_initial"
          },
          "questions": [
            "Why must an experiment have only ONE independent variable at a time?",
            "Why must concentrated acid always be added to water, and never water to acid?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🔬</span> 1. THE SCIENTIFIC METHOD & EXPERIMENTAL VARIABLES\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Science is an evidence-based pursuit of knowledge following a strict inquiry framework:<br>\n                  • <strong>Observation:</strong> Gathering sensory data about natural phenomena.<br>\n                  • <strong>Hypothesis:</strong> A testable, falsifiable predictive proposition explaining the observation.<br>\n                  • <strong>Controlled Experimentation:</strong> Testing the hypothesis under isolated conditions:<br>\n                  - <em>Independent Variable:</em> The single factor deliberately altered by the investigator (e.g. amount of fertilizer).<br>\n                  - <em>Dependent Variable:</em> The factor that changes in response and is measured (e.g. plant growth in cm).<br>\n                  - <em>Controlled Variables:</em> All other variables kept identical (sunlight, water, soil type) to ensure a fair test.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>☣️</span> 2. LABORATORY SAFETY & HAZARD WARNING SYMBOLS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Flammable (Flame):</strong> Substances that catch fire easily (ethanol, acetone). Keep away from open flames.<br>\n                  • <strong>Corrosive (Liquid spilling on hands/metal):</strong> Destroys living tissue and corrodes metals (sulfuric acid, sodium hydroxide).<br>\n                  • <strong>Toxic (Skull & Crossbones):</strong> Deadly or poisonous if inhaled, swallowed, or absorbed through skin.<br>\n                  • <strong>The Golden Acid Dilution Rule:</strong> <em>\"Always Add Acid to water (A&W rule)\"</em>. Adding water to concentrated acid releases immense exothermic heat, causing the liquid to boil instantly and violently splash corrosive acid onto skin and eyes!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>⚖️</span> 3. SI UNITS, MASS, VOLUME & DENSITY\n                </h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Fundamental SI Units:</strong><br>\n                    • Length: Meter (m)<br>\n                    • Mass: Kilogram (kg)<br>\n                    • Time: Second (s)<br>\n                    • Temperature: Kelvin (K)\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Density Calculation:</strong><br>\n                    • Formula: <strong>ρ = Mass / Volume = m / V</strong>.<br>\n                    • Units: kg/m³ (SI) or g/cm³ (1 g/cm³ = 1,000 kg/m³).<br>\n                    • Water Density: 1.0 g/cm³ (objects with ρ < 1 float; ρ > 1 sink).\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Determining Density of an Irregular Mineral Specimen",
            "problem": "A student measures a piece of volcanic basalt rock from the Ethiopian Rift Valley. The electronic balance reads 156 grams. When submerged into a graduated cylinder filled with 50 mL of water, the water level rises to 74 mL. Calculate the density of the basalt rock.",
            "steps": [
              {
                "label": "Step 1: Calculate volume by water displacement",
                "text": "Volume V = V_final - V_initial = 74 mL - 50 mL = <strong>24 mL = 24 cm³</strong> (since 1 mL = 1 cm³)."
              },
              {
                "label": "Step 2: State mass and formula",
                "text": "Mass m = 156 g.<br>Density formula: ρ = m / V."
              },
              {
                "label": "Step 3: Compute density",
                "text": "ρ = 156 g / 24 cm³ = <strong>6.5 g/cm³</strong> (or 6,500 kg/m³)."
              }
            ],
            "proTip": "Water displacement is the universally accepted Archimedean method for finding the volume of any irregularly shaped solid that does not dissolve in water!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the SI unit of thermodynamic temperature?",
              "a": "Kelvin (K)."
            },
            {
              "q": "What safety symbol depicts a skull and crossbones?",
              "a": "Toxic / Poisonous substance."
            },
            {
              "q": "Why do we add acid to water instead of water to acid?",
              "a": "Adding water to concentrated acid releases extreme heat that causes explosive acid boiling and splashing."
            }
          ],
          "amtQuiz": [
            {
              "q": "In a controlled agricultural experiment testing teff crop yield with varying amounts of nitrogen fertilizer, what is the dependent variable?",
              "options": [
                "The mass of nitrogen fertilizer applied per plot",
                "The total yield of teff harvested at maturity",
                "The quantity of irrigation water supplied",
                "The specific variety of teff seeds planted"
              ],
              "correct": 1,
              "strategy": "The dependent variable is what is measured or observed in response to changing the independent variable.",
              "derivation": "The independent variable is the fertilizer amount (manipulated by the experimenter). The dependent variable is the measurable response: teff grain yield.",
              "trap": "Confusing the independent variable (fertilizer applied) with the dependent variable (yield obtained)."
            },
            {
              "q": "A piece of volcanic rock with a mass of 180 grams is placed into a graduated cylinder containing 60 mL of water. The water level rises to 90 mL. What is the density of the rock?",
              "options": [
                "2.0 g/cm³",
                "6.0 g/cm³",
                "3.0 g/cm³",
                "0.5 g/cm³"
              ],
              "correct": 1,
              "strategy": "Use water displacement to find volume: V = V_final - V_initial, then apply ρ = m / V.",
              "derivation": "Volume V = 90 mL - 60 mL = 30 mL = 30 cm³. Density ρ = m / V = 180 g / 30 cm³ = 6.0 g/cm³.",
              "trap": "Dividing mass by initial volume (180/60 = 3) or final volume (180/90 = 2)."
            },
            {
              "q": "Why does the standard laboratory safety protocol mandate adding concentrated acid to water rather than water to concentrated acid (\"A&W rule\")?",
              "options": [
                "Water is more dense than acid and will stay at the top",
                "Adding water to concentrated acid generates extreme localized heat that causes violent, explosive boiling and acid splashing",
                "Acid loses its chemical reactivity if mixed with water quickly",
                "Water evaporates immediately without changing temperature"
              ],
              "correct": 1,
              "strategy": "Remember the exothermic heat of hydration: Always Add Acid (A&W).",
              "derivation": "Diluting concentrated acid is highly exothermic. Adding water to acid causes the water to boil instantly, spraying acid onto the chemist. Adding acid slowly to a large body of water allows the water to safely absorb the heat.",
              "trap": "Thinking water extinguishes the heat without realizing the violent splattering hazard."
            },
            {
              "q": "Which of the following represents the correct fundamental SI base unit for thermodynamic temperature?",
              "options": [
                "Degree Celsius (°C)",
                "Degree Fahrenheit (°F)",
                "Kelvin (K)",
                "Joule (J)"
              ],
              "correct": 2,
              "strategy": "The SI base unit of temperature is Kelvin (K).",
              "derivation": "Kelvin (K) is the SI base unit of thermodynamic temperature. Celsius is derived, and Joule is energy.",
              "trap": "Selecting Celsius because it is commonly used on domestic thermometers."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u2",
      "number": "Unit 2",
      "title": "Cell as the Basic Unit of Life",
      "bigIdea": "Examine cellular structure, plant versus animal organelles, microscope optics, and biological hierarchy.",
      "subtopics": [
        {
          "id": "g7-sci-2.1",
          "code": "2.1",
          "title": "Cell Structure, Organelles & Microscopy",
          "survey": {
            "blueprint": "Cell Theory: (1) All living things are composed of cells, (2) Cells are structural/functional units of life, (3) Cells arise from pre-existing cells. Plant vs. animal cell organelles. Light microscope optics: Total Magnification = Eyepiece × Objective.",
            "objectives": [
              "State the three tenets of the classical Cell Theory (Schleiden, Schwann, Virchow).",
              "Compare organelle structures between plant and animal cells (chloroplast, cell wall, central vacuole).",
              "Calculate total optical magnification of a compound light microscope."
            ],
            "keyFormulas": "Total Magnification = Eyepiece Magnification × Objective Lens Magnification"
          },
          "questions": [
            "Why can plant cells withstand hypotonic water intake without bursting while animal cells undergo lysis?",
            "Why are mitochondria termed the \"powerhouse of the cell\" in cellular respiration?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🔬</span> 1. THE THREE TENETS OF CELL THEORY\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Formulated by Matthias Schleiden (1838), Theodor Schwann (1839), and Rudolf Virchow (1855):<br>\n                  1. All living organisms are composed of one or more cells.<br>\n                  2. The cell is the fundamental structural and functional unit of life.<br>\n                  3. All cells arise from pre-existing living cells through cellular division (<em>\"Omnis cellula e cellula\"</em>).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🌿</span> 2. PLANT VS. ANIMAL CELL ORGANELLES\n                </h4>\n                <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-emerald-400\">Plant Cells (Unique Features):</strong><br>\n                    • <strong>Cell Wall:</strong> Rigid outer coat made of cellulose; provides mechanical support and prevents osmotic bursting.<br>\n                    • <strong>Chloroplasts:</strong> Contain green chlorophyll for photosynthesis (light ➔ glucose).<br>\n                    • <strong>Large Central Vacuole:</strong> Maintains turgor pressure against the cell wall.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-amber-400\">Animal Cells (Unique Features):</strong><br>\n                    • No cell wall (enclosed only by flexible, selectively permeable cell membrane).<br>\n                    • No chloroplasts (heterotrophic nutrition).<br>\n                    • Vacuoles are small, temporary, and numerous.<br>\n                    • Possess <strong>Centrioles</strong> for organizing spindle fibers during cell division.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>⚡</span> 3. UNIVERSAL ORGANELLES & MICROSCOPE OPTICS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Nucleus:</strong> Contains DNA genetic blueprint; controls cellular metabolism.<br>\n                  • <strong>Mitochondria:</strong> Sites of aerobic cellular respiration generating ATP energy.<br>\n                  • <strong>Ribosomes:</strong> Protein synthesis factories.<br>\n                  • <strong>Microscope Magnification:</strong> <strong>Total Magnification = Eyepiece (Ocular) Power × Objective Power</strong>.<br>\n                  Example: 10× eyepiece with 40× high-power objective gives 10 × 40 = <strong>400× magnification</strong>.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Calculating Microscope Optics & Specimen Size",
            "problem": "A student views onion epidermal cells under a compound microscope using a 15× eyepiece and a 40× objective lens. What is the total magnification? If a cell appears 6 mm long under this view, what is its actual physical size in micrometers (μm)?",
            "steps": [
              {
                "label": "Step 1: Calculate total magnification",
                "text": "Total Magnification = Eyepiece × Objective = 15 × 40 = <strong>600×</strong>."
              },
              {
                "label": "Step 2: Calculate actual physical size",
                "text": "Actual Size = Apparent Image Size / Magnification.<br>Convert 6 mm to micrometers: 6 mm = 6,000 μm.<br>Actual Size = 6,000 μm / 600 = <strong>10 μm</strong> (0.01 mm)."
              }
            ],
            "proTip": "Remember the metric conversion: 1 millimeter (mm) = 1,000 micrometers (μm)!"
          },
          "reciteFlashcards": [
            {
              "q": "Which organelle is the site of aerobic cellular respiration?",
              "a": "Mitochondrion (Mitochondria)."
            },
            {
              "q": "What carbohydrate makes up the rigid plant cell wall?",
              "a": "Cellulose."
            },
            {
              "q": "If an eyepiece is 10× and an objective is 100×, what is total magnification?",
              "a": "1,000× (oil immersion)."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following cellular structures is present in plant cells (such as onion skin cells) but completely absent in animal cells?",
              "options": [
                "Mitochondria and Ribosomes",
                "Cellulose Cell Wall and Chloroplasts",
                "Nucleus and Cytoplasm",
                "Endoplasmic Reticulum"
              ],
              "correct": 1,
              "strategy": "Plant cells have rigid outer cell walls and photosynthetic chloroplasts.",
              "derivation": "Plant cells possess a rigid cellulose cell wall, large central vacuole, and plastids/chloroplasts. Animal cells lack cell walls and chloroplasts.",
              "trap": "Selecting mitochondria, which are present in both plant and animal cells for respiration!"
            },
            {
              "q": "Which organelle is universally referred to as the \"powerhouse of the cell\" because it synthesizes cellular energy in the form of ATP through aerobic respiration?",
              "options": [
                "Golgi apparatus",
                "Ribosome",
                "Mitochondrion",
                "Lysosome"
              ],
              "correct": 2,
              "strategy": "Mitochondria produce ATP through cellular respiration.",
              "derivation": "Mitochondria oxidize glucose during cellular respiration to synthesize ATP molecules, providing energy for cellular metabolic activities.",
              "trap": "Confusing ribosomes (protein synthesis) with mitochondria (energy synthesis)."
            },
            {
              "q": "If a student observes an epidermal cell under a light microscope using a 10× ocular eyepiece and a 40× objective lens, what is the total magnification of the specimen?",
              "options": [
                "50×",
                "400×",
                "300×",
                "4×"
              ],
              "correct": 1,
              "strategy": "Total Magnification = Eyepiece Magnification × Objective Magnification.",
              "derivation": "Total Magnification = 10 × 40 = 400×.",
              "trap": "Adding the magnifications (10 + 40 = 50) instead of multiplying them!"
            },
            {
              "q": "What is the primary function of the semi-permeable cell membrane (plasma membrane)?",
              "options": [
                "Synthesizing genetic DNA molecules",
                "Regulating the movement of substances into and out of the cell",
                "Providing rigid structural support to keep the cell rigid like wood",
                "Carrying out photosynthesis in the dark"
              ],
              "correct": 1,
              "strategy": "The plasma membrane is selectively permeable, controlling entry and exit.",
              "derivation": "The phospholipid bilayer of the cell membrane maintains homeostasis by controlling the passage of nutrients, waste, ions, and water.",
              "trap": "Confusing the flexible semi-permeable membrane with the rigid cellulose cell wall."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u3",
      "number": "Unit 3",
      "title": "Human Biology & Health",
      "bigIdea": "Understand human organ systems: digestive enzymes, the double circulatory system, respiratory gas exchange, and infectious disease prevention.",
      "subtopics": [
        {
          "id": "g7-sci-3.1",
          "code": "3.1",
          "title": "Digestive, Circulatory & Respiratory Systems",
          "survey": {
            "blueprint": "Human organ systems: (1) Digestive tract: mechanical vs chemical digestion, digestive enzymes (amylase, pepsin, lipase), (2) Circulatory system: 4-chambered heart, double circulation, blood components (RBC, WBC, platelets, plasma), (3) Respiratory system: tracheal branching, alveoli gas diffusion.",
            "objectives": [
              "Trace the path of food through the alimentary canal and identify functions of salivary amylase, gastric pepsin, and pancreatic lipase.",
              "Describe the 4 heart chambers and follow pulmonary versus systemic blood circulation.",
              "Explain how oxygen and carbon dioxide diffuse across the single-cell alveolar membrane."
            ],
            "keyFormulas": "Cardiac output = Heart Rate × Stroke Volume &nbsp;|&nbsp; Aerobic respiration: C₆H₁₂O₆ + 6O₂ ➔ 6CO₂ + 6H₂O + 36 ATP"
          },
          "questions": [
            "Why do arteries have thick, elastic muscular walls while veins have thin walls with one-way valves?",
            "How do the microscopic villi and microvilli in the small intestine expand the surface area for nutrient absorption?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🍽️</span> 1. THE HUMAN DIGESTIVE SYSTEM & ENZYMES\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Digestion breaks large insoluble food molecules into small soluble nutrients for absorption:<br>\n                  • <strong>Mouth:</strong> Teeth perform mechanical chewing; salivary glands secrete <strong>Amylase</strong> (breaks starch into maltose).<br>\n                  • <strong>Stomach:</strong> Churns food with gastric juice containing <em>Hydrochloric Acid (HCl)</em> (kills bacteria, pH ~2) and <strong>Pepsin</strong> (digests proteins into polypeptides).<br>\n                  • <strong>Small Intestine:</strong> Receives <em>Bile</em> from the liver (emulsifies fats) and pancreatic enzymes (trypsin, lipase, amylase). Inner walls lined with millions of <strong>villi</strong> that absorb nutrients directly into blood capillaries.<br>\n                  • <strong>Large Intestine:</strong> Reabsorbs water and minerals; compacts feces for elimination through the rectum.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>❤️</span> 2. CIRCULATORY SYSTEM & BLOOD CONSTITUENTS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Humans possess a <strong>closed, double circulatory system</strong> powered by a 4-chambered muscular heart:<br>\n                  • <strong>Right Side (Deoxygenated Blood):</strong> Vena Cava ➔ Right Atrium ➔ Right Ventricle ➔ Pulmonary Artery ➔ Lungs.<br>\n                  • <strong>Left Side (Oxygenated Blood):</strong> Pulmonary Veins ➔ Left Atrium ➔ Left Ventricle (thickest muscle wall) ➔ Aorta ➔ Body.<br>\n                  • <strong>Blood Components:</strong><br>\n                  - <em>Red Blood Cells (Erythrocytes):</em> Biconcave discs with hemoglobin, no nucleus; transport O₂.<br>\n                  - <em>White Blood Cells (Leukocytes):</em> Phagocytes and lymphocytes; defend against pathogens.<br>\n                  - <em>Platelets (Thrombocytes):</em> Cell fragments responsible for blood clotting at wounds.<br>\n                  - <em>Plasma:</em> Liquid medium (90% water) carrying dissolved glucose, amino acids, hormones, urea, and CO₂.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🫁</span> 3. RESPIRATORY GAS EXCHANGE AT THE ALVEOLI\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Inhaled air travels: Nose ➔ Pharynx ➔ Larynx ➔ Trachea ➔ Bronchi ➔ Bronchioles ➔ <strong>Alveoli</strong>.<br>\n                  • <strong>Alveolar Adaptations for Diffusion:</strong><br>\n                  1. Immense surface area (over 100 m² in adult lungs).<br>\n                  2. Extremely thin wall (one-cell thick) for a minimal diffusion distance.<br>\n                  3. Dense capillary network maintaining a steep concentration gradient.<br>\n                  4. Moist lining allowing oxygen to dissolve before diffusing into blood hemoglobin.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Tracing Red Blood Cell Circulation",
            "problem": "Trace the path of a red blood cell from the moment it leaves the right ventricle until it arrives at the muscle cells of the leg.",
            "steps": [
              {
                "label": "Step 1: Pulmonary Circulation",
                "text": "Right Ventricle contracts ➔ Pulmonary Artery ➔ Capillaries of the Lungs (absorbs O₂, releases CO₂) ➔ Pulmonary Vein ➔ Left Atrium."
              },
              {
                "label": "Step 2: Systemic Circulation",
                "text": "Left Atrium ➔ Left Ventricle (pumped under high pressure) ➔ Aorta (main systemic artery) ➔ Iliac and femoral arteries ➔ Capillaries of the leg muscle (unloads O₂ for cellular respiration)."
              }
            ],
            "proTip": "Remember the simple naming rule: Arteries carry blood Away from the heart; Veins carry blood in to the heart!"
          },
          "reciteFlashcards": [
            {
              "q": "Which heart chamber has the thickest muscular wall and why?",
              "a": "The Left Ventricle, because it must generate high pressure to pump oxygenated blood to the entire body."
            },
            {
              "q": "What is the primary enzyme responsible for protein digestion in the stomach?",
              "a": "Pepsin (active in acidic pH ~2)."
            },
            {
              "q": "What blood component is essential for blood clotting?",
              "a": "Platelets (Thrombocytes)."
            }
          ],
          "amtQuiz": [
            {
              "q": "In the human digestive tract, where does the majority of chemical digestion and nutrient absorption into the bloodstream occur?",
              "options": [
                "The Stomach",
                "The Small Intestine (Jejenum and Ileum)",
                "The Large Intestine (Colon)",
                "The Esophagus"
              ],
              "correct": 1,
              "strategy": "The small intestine is lined with villi and microvilli specifically for nutrient absorption.",
              "derivation": "The small intestine receives digestive enzymes from the pancreas and bile from the liver. Its inner walls have millions of microscopic finger-like projections (villi) that absorb amino acids, glucose, and fatty acids into capillaries and lacteals.",
              "trap": "Assuming the stomach absorbs nutrients; the stomach primarily breaks down proteins and churns food into chyme."
            },
            {
              "q": "Which blood vessels carry oxygenated blood away from the heart to the rest of the body under high pressure?",
              "options": [
                "Veins",
                "Capillaries",
                "Arteries",
                "Lymphatic vessels"
              ],
              "correct": 2,
              "strategy": "Remember: Arteries carry blood Away from the heart.",
              "derivation": "Arteries have thick, muscular, elastic walls designed to withstand high pressure generated by ventricular contractions as blood is pumped away from the heart.",
              "trap": "Confusing veins (which carry deoxygenated blood back to the heart) with arteries."
            },
            {
              "q": "Gas exchange in the human respiratory system occurs between the pulmonary capillaries and tiny microscopic air sacs called:",
              "options": [
                "Bronchi",
                "Alveoli",
                "Trachea rings",
                "Larynx folds"
              ],
              "correct": 1,
              "strategy": "Alveoli are the functional sites of oxygen and carbon dioxide diffusion.",
              "derivation": "Alveoli provide a huge surface area with walls only one cell thick, enabling rapid diffusion of oxygen into the blood and carbon dioxide out of the blood.",
              "trap": "Selecting bronchi or trachea, which are conducting airways, not exchange surfaces."
            },
            {
              "q": "Which chamber of the human heart has the thickest muscular wall because it must pump blood to the entire systemic circulation of the body?",
              "options": [
                "Right Atrium",
                "Right Ventricle",
                "Left Atrium",
                "Left Ventricle"
              ],
              "correct": 3,
              "strategy": "The left ventricle pumps blood through the aorta to the whole body.",
              "derivation": "The left ventricle generates the highest systolic pressure to force oxygen-rich blood through the systemic circulation, requiring significantly thicker myocardium.",
              "trap": "Assuming right ventricle, which only pumps to the nearby lungs at lower pressure."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u4",
      "number": "Unit 4",
      "title": "Reproduction in Plants and Animals",
      "bigIdea": "Understand modes of reproduction: asexual reproduction mechanisms, flower anatomy, pollination, fertilization, and animal life cycles.",
      "subtopics": [
        {
          "id": "g7-sci-4.1",
          "code": "4.1",
          "title": "Plant Reproduction & Metamorphosis in Animals",
          "survey": {
            "blueprint": "Asexual reproduction (binary fission, budding, vegetative propagation) produces genetically identical clones. Sexual reproduction generates genetic variation. Flower structure: Stamen (male) and Carpel (female). Pollination (self vs cross) and double fertilization. Metamorphosis: complete (egg-larva-pupa-adult) vs incomplete.",
            "objectives": [
              "Compare advantages and disadvantages of asexual versus sexual reproduction.",
              "Identify the reproductive parts of a flowering plant (anther, filament, stigma, style, ovary).",
              "Distinguish between complete metamorphosis (butterfly, mosquito) and incomplete metamorphosis (grasshopper)."
            ],
            "keyFormulas": "Sexual: Gametes (n) + Gametes (n) ➔ Zygote (2n) via Fertilization"
          },
          "questions": [
            "Why does sexual reproduction provide a massive evolutionary advantage when the environment changes?",
            "What is the distinct difference between pollination and fertilization in flowering plants?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🌱</span> 1. MODES OF REPRODUCTION COMPARED\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Asexual Reproduction:</strong> Involves a single parent without gamete fusion. Offspring are genetically identical clones.<br>\n                  - Types: Binary fission (amoeba, bacteria), Budding (yeast, hydra), Spore formation (fungi), Vegetative propagation (runners in strawberry, tubers in potato).<br>\n                  - <em>Pros & Cons:</em> Fast, energy-efficient, but zero genetic variation (one disease can wipe out an entire population).<br>\n                  • <strong>Sexual Reproduction:</strong> Involves two parents and fusion of haploid male and female gametes to form a diploid zygote. Generates <strong>genetic diversity</strong> essential for species adaptation.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🌸</span> 2. ANATOMY OF A FLOWER & POLLINATION\n                </h4>\n                <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-cyan-400\">Male Reproductive Organ (Stamen):</strong><br>\n                    • <strong>Anther:</strong> Produces pollen grains containing male gametes.<br>\n                    • <strong>Filament:</strong> Slender stalk supporting the anther.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-rose-400\">Female Reproductive Organ (Carpel / Pistil):</strong><br>\n                    • <strong>Stigma:</strong> Sticky surface that catches pollen grains.<br>\n                    • <strong>Style:</strong> Tube down which the pollen tube grows.<br>\n                    • <strong>Ovary:</strong> Contains ovules (female gametes). After fertilization, the ovary becomes the <strong>fruit</strong> and ovules become <strong>seeds</strong>!\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400 flex items-center gap-2\">\n                  <span>🦋</span> 3. ANIMAL DEVELOPMENT & METAMORPHOSIS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Complete Metamorphosis:</strong> 4 distinct life stages where larva looks entirely different from adult:<br>\n                  <strong>Egg ➔ Larva (caterpillar / maggot) ➔ Pupa (chrysalis) ➔ Adult</strong> (e.g. Butterflies, Houseflies, Mosquitoes).<br>\n                  • <strong>Incomplete Metamorphosis:</strong> 3 stages where young nymph resembles a miniature wingless adult:<br>\n                  <strong>Egg ➔ Nymph ➔ Adult</strong> (e.g. Grasshoppers, Cockroaches, Locusts).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Distinguishing Pollination vs Fertilization",
            "problem": "Explain the difference between pollination and fertilization in an Ethiopian coffee plant (Coffea arabica).",
            "steps": [
              {
                "label": "Step 1: Define Pollination",
                "text": "Pollination is the physical transfer of pollen grains from the anther to the receptive stigma of a flower (carried by honeybees or wind)."
              },
              {
                "label": "Step 2: Define Fertilization",
                "text": "Fertilization is the internal biochemical fusion of the male nucleus (from the pollen tube) with the female egg nucleus inside the ovule to create a diploid zygote."
              },
              {
                "label": "Step 3: State the botanical outcome",
                "text": "Following fertilization, the ovule develops into the coffee bean (seed), and the surrounding ovary matures into the red coffee cherry (fruit)."
              }
            ],
            "proTip": "Pollination must occur before fertilization can take place, but pollination does not always guarantee fertilization!"
          },
          "reciteFlashcards": [
            {
              "q": "What does the fertilized plant ovary develop into?",
              "a": "The Fruit (while ovules become seeds)."
            },
            {
              "q": "What are the 4 stages of complete metamorphosis?",
              "a": "Egg ➔ Larva ➔ Pupa ➔ Adult."
            },
            {
              "q": "Name a crop propagated vegetatively by underground tubers.",
              "a": "Potato (Solanum tuberosum)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the biological definition of pollination in flowering plants (angiosperms)?",
              "options": [
                "The fusion of the male gamete with the female ovule in the ovary",
                "The transfer of pollen grains from the anther to the stigma of a flower",
                "The germination of a seed into a green seedling",
                "The dispersal of ripe fruits by birds and monkeys"
              ],
              "correct": 1,
              "strategy": "Pollination is the transfer of pollen; fertilization is the actual fusion of gametes.",
              "derivation": "Pollination is the mechanical transfer of pollen grains from the male anther to the receptive female stigma (by wind, insects, or birds). Fertilization occurs afterward when the sperm nucleus unites with the egg cell inside the ovule.",
              "trap": "Confusing pollination (transfer) with fertilization (gamete fusion)."
            },
            {
              "q": "Which of the following insects undergoes complete metamorphosis (four distinct stages: Egg ➔ Larva ➔ Pupa ➔ Adult)?",
              "options": [
                "Grasshopper",
                "Cockroach",
                "Butterfly",
                "Termite"
              ],
              "correct": 2,
              "strategy": "Complete metamorphosis includes a pupal stage (chrysalis/cocoon).",
              "derivation": "Butterflies, houseflies, bees, and mosquitoes undergo complete metamorphosis (Egg ➔ Caterpillar/Larva ➔ Chrysalis/Pupa ➔ Adult). Grasshoppers and cockroaches undergo incomplete metamorphosis (Egg ➔ Nymph ➔ Adult).",
              "trap": "Grasshoppers have nymphs without a pupa stage (incomplete metamorphosis)."
            },
            {
              "q": "In plant sexual reproduction, following successful fertilization, what part of the flower develops into the seed and what part develops into the fruit?",
              "options": [
                "Ovule develops into the seed, and Ovary develops into the fruit",
                "Ovary develops into the seed, and Stigma develops into the fruit",
                "Petal develops into the seed, and Anther develops into the fruit",
                "Sepal develops into the seed, and Filament develops into the fruit"
              ],
              "correct": 0,
              "strategy": "Ovule = Seed; Ovary = Fruit.",
              "derivation": "After fertilization, the zygote and surrounding ovule mature into the seed, while the surrounding ovary wall swells and ripens into the fruit (pericarp).",
              "trap": "Reversing ovary and ovule."
            },
            {
              "q": "Asexual reproduction (such as vegetative propagation in potatoes or binary fission in amoeba) produces offspring that are:",
              "options": [
                "Genetically diverse with completely new traits",
                "Genetically identical clones of the single parent organism",
                "Infertile organisms unable to grow",
                "Always larger than sexually reproduced offspring"
              ],
              "correct": 1,
              "strategy": "Asexual reproduction involves one parent and mitosis without gamete fusion.",
              "derivation": "Asexual reproduction involves a single organism replicating its genome without meiosis or fertilization, producing genetically identical clones.",
              "trap": "Assuming genetic diversity, which only arises through sexual reproduction."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u5",
      "number": "Unit 5",
      "title": "Matter and Chemical Reactions",
      "bigIdea": "Understand kinetic particle theory, states of matter, physical vs chemical changes, atomic structure, and the Law of Conservation of Mass.",
      "subtopics": [
        {
          "id": "g7-sci-5.1",
          "code": "5.1",
          "title": "Particle Nature of Matter & Chemical Reactions",
          "survey": {
            "blueprint": "Kinetic Theory: all matter is made of particles in continuous motion. States: Solid, Liquid, Gas. Phase changes: Melting, Freezing, Boiling, Evaporation, Condensation, Sublimation. Physical vs Chemical changes. Atomic structure: Protons (+), Neutrons (0), Electrons (-). Law of Conservation of Mass.",
            "objectives": [
              "Explain phase changes using kinetic energy and intermolecular forces.",
              "Differentiate between physical changes (reversible, no new substance) and chemical changes (irreversible, new substance formed).",
              "State the location, charge, and relative mass of protons, neutrons, and electrons in an atom.",
              "Balance simple chemical equations to demonstrate conservation of mass."
            ],
            "keyFormulas": "Mass Number (A) = Protons (Z) + Neutrons (N) &nbsp;|&nbsp; Reactants Mass = Products Mass"
          },
          "questions": [
            "Why does temperature remain strictly constant during the melting of ice even though heat energy is continually being supplied?",
            "How does rusting of iron prove that mass is conserved in a chemical reaction?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>⚛️</span> 1. KINETIC PARTICLE THEORY & PHASES OF MATTER\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Solid:</strong> Particles tightly packed in fixed geometric lattice; vibrate in place; fixed shape and volume.<br>\n                  • <strong>Liquid:</strong> Particles close together but can slide past one another; fixed volume, takes shape of container.<br>\n                  • <strong>Gas:</strong> Particles widely separated moving rapidly in random directions; compressible, fills entire volume.<br>\n                  • <strong>Phase Transitions:</strong><br>\n                  - Melting (Solid ➔ Liquid) & Boiling (Liquid ➔ Gas): Absorbs latent heat energy.<br>\n                  - Sublimation: Direct transition from solid to gas without becoming liquid (e.g. Dry ice, iodine, camphor).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400 flex items-center gap-2\">\n                  <span>🔥</span> 2. PHYSICAL VS. CHEMICAL CHANGES\n                </h4>\n                <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-cyan-400\">Physical Change:</strong><br>\n                    • No new chemical substance is formed.<br>\n                    • Easily reversible by physical means.<br>\n                    • Mass and chemical identity conserved.<br>\n                    • Examples: Melting wax, dissolving salt in water, tearing paper.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-rose-400\">Chemical Change (Reaction):</strong><br>\n                    • One or more completely new substances formed.<br>\n                    • Chemical bonds broken and formed.<br>\n                    • Usually irreversible by simple means; energy released/absorbed.<br>\n                    • Examples: Burning wood, rusting iron, souring milk, digestion.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🔬</span> 3. ATOMIC ARCHITECTURE & CONSERVATION OF MASS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Nucleus:</strong> Dense center containing <strong>Protons</strong> (positive +1 charge, mass 1 amu) and <strong>Neutrons</strong> (neutral 0 charge, mass 1 amu).<br>\n                  • <strong>Electron Shells:</strong> Cloud containing <strong>Electrons</strong> (negative -1 charge, negligible mass ~1/1836 amu) orbiting the nucleus.<br>\n                  • <strong>Law of Conservation of Mass (Lavoisier):</strong> In any chemical reaction, matter is neither created nor destroyed. The total mass of reactants must equal the total mass of products:<br>\n                  <strong>2H₂ + O₂ ➔ 2H₂O</strong> (4 H atoms and 2 O atoms on both sides!).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Atomic Calculation & Conservation of Mass",
            "problem": "Part A: An atom of Sodium has atomic number Z = 11 and mass number A = 23. Determine its protons, neutrons, and electrons. Part B: 12 g of carbon reacts completely with 32 g of oxygen gas. What mass of carbon dioxide (CO₂) is formed?",
            "steps": [
              {
                "label": "Step 1: Calculate subatomic particles for Part A",
                "text": "Protons = Z = <strong>11</strong>.<br>Electrons in neutral atom = Protons = <strong>11</strong>.<br>Neutrons N = Mass Number (A) - Atomic Number (Z) = 23 - 11 = <strong>12 neutrons</strong>."
              },
              {
                "label": "Step 2: Apply Conservation of Mass for Part B",
                "text": "C + O₂ ➔ CO₂.<br>Total mass of reactants = Mass of Carbon + Mass of Oxygen = 12 g + 32 g = <strong>44 grams</strong>.<br>By the Law of Conservation of Mass, the mass of CO₂ produced must be exactly <strong>44 grams</strong>."
              }
            ],
            "proTip": "In neutral atoms: Protons = Electrons. Mass number A is always the sum of protons plus neutrons in the nucleus!"
          },
          "reciteFlashcards": [
            {
              "q": "What is sublimation?",
              "a": "The direct phase transition of a substance from solid to gas without passing through the liquid state."
            },
            {
              "q": "What is the relative charge and location of an electron in an atom?",
              "a": "Charge of -1, located in orbits/shells outside the nucleus."
            },
            {
              "q": "State the Law of Conservation of Mass.",
              "a": "Matter cannot be created or destroyed in a chemical reaction; mass of reactants equals mass of products."
            }
          ],
          "amtQuiz": [
            {
              "q": "According to the Law of Conservation of Mass, what happens to the total mass of substances involved in a chemical reaction in a closed system?",
              "options": [
                "The mass increases as chemical bonds store more energy",
                "The mass decreases because gases evaporate into nothingness",
                "The total mass of products is strictly equal to the total mass of reactants",
                "The mass doubles whenever heat is released"
              ],
              "correct": 2,
              "strategy": "Mass is neither created nor destroyed during chemical reactions.",
              "derivation": "The Law of Conservation of Mass (Lavoisier) dictates that atoms are merely rearranged in a chemical reaction. Therefore, Total Mass of Reactants = Total Mass of Products.",
              "trap": "Assuming mass is lost when smoke or gas forms, ignoring that gas has mass."
            },
            {
              "q": "Which of the following is an undeniable indicator of a chemical change rather than a physical change?",
              "options": [
                "Ice melting into liquid water at room temperature",
                "Dissolving table salt crystals into a glass of clean water",
                "Rusting of iron nails producing reddish-brown iron oxide with heat release",
                "Chopping a dry wooden log into small sawdust pieces"
              ],
              "correct": 2,
              "strategy": "Chemical changes form new chemical substances with altered molecular formulas.",
              "derivation": "Rusting is an irreversible chemical oxidation reaction: 4Fe + 3O₂ + 2nH₂O ➔ 2Fe₂O₃·nH₂O. Melting, dissolving, and chopping are reversible physical changes.",
              "trap": "Confusing dissolving salt (physical) with a chemical change."
            },
            {
              "q": "In terms of particle kinetic theory, how do the particles in a solid differ from those in a liquid?",
              "options": [
                "Solid particles move rapidly in straight lines over long distances",
                "Solid particles are closely packed in fixed lattice positions and only vibrate in place",
                "Liquid particles have zero attractive forces between them",
                "Solid particles have much higher kinetic energy than liquid particles"
              ],
              "correct": 1,
              "strategy": "Solids have fixed positions and low kinetic energy; liquids flow past one another.",
              "derivation": "Solid particles have strong intermolecular bonds holding them in rigid regular crystal lattices where they only vibrate about fixed equilibrium points.",
              "trap": "Thinking particles in a solid are completely motionless (they vibrate!)."
            },
            {
              "q": "If 24 grams of magnesium react completely with 16 grams of oxygen gas in a sealed crucible, what is the exact mass of magnesium oxide (MgO) produced?",
              "options": [
                "8 grams",
                "40 grams",
                "24 grams",
                "384 grams"
              ],
              "correct": 1,
              "strategy": "Apply Conservation of Mass: Mass of MgO = Mass of Mg + Mass of O₂.",
              "derivation": "24 g Mg + 16 g O₂ = 40 g MgO. Mass is conserved.",
              "trap": "Subtracting 16 from 24 (giving 8) instead of adding."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u6",
      "number": "Unit 6",
      "title": "Force, Work, Energy & Power",
      "bigIdea": "Understand forces, Newton’s laws of motion, mechanical work, kinetic and potential energy, and simple machines.",
      "subtopics": [
        {
          "id": "g7-sci-6.1",
          "code": "6.1",
          "title": "Forces, Newton’s Laws & Mechanical Work",
          "survey": {
            "blueprint": "Force: push or pull measured in Newtons (N). Contact vs Non-contact forces. Newton’s 3 Laws of Motion. Work: W = F × d (in Joules). Forms of energy: Potential Energy (PE = mgh) and Kinetic Energy (KE = ½mv²). Law of Conservation of Energy.",
            "objectives": [
              "Differentiate between mass (kg, scalar) and weight (W = mg, vector in N).",
              "Apply Newton’s Three Laws of Motion to real-world scenarios.",
              "Calculate mechanical work: W = F × d.",
              "Calculate potential energy (PE = mgh) and kinetic energy (KE = ½mv²)."
            ],
            "keyFormulas": "Weight: W = mg (g ≈ 9.8 or 10 m/s²) &nbsp;|&nbsp; Force: F = ma &nbsp;|&nbsp; Work: W = Fd [J] &nbsp;|&nbsp; KE = ½mv² &nbsp;|&nbsp; PE = mgh"
          },
          "questions": [
            "Why does an astronaut’s mass remain unchanged on the Moon while their weight decreases by 83%?",
            "If a person pushes a massive stone wall for 2 hours with 500 N of force but the wall never moves, how much scientific work was accomplished?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>⚡</span> 1. FORCES, MASS VS. WEIGHT\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Force (F):</strong> An interaction (push or pull) that changes an object’s velocity, direction, or shape. SI unit: <strong>Newton (N)</strong>.<br>\n                  • <strong>Mass (m):</strong> The amount of matter in an object. Invariant scalar measured in <em>kilograms (kg)</em>.<br>\n                  • <strong>Weight (W):</strong> The gravitational pull exerted on a mass: <strong>W = m × g</strong>.<br>\n                  (On Earth, acceleration due to gravity <em>g ≈ 9.8 m/s²</em> or 10 m/s²). A 60 kg person weighs 600 N on Earth, but only 100 N on the Moon!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🚀</span> 2. NEWTON’S THREE LAWS OF MOTION\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p><strong>1. Law of Inertia:</strong> An object remains at rest or in uniform straight-line motion unless acted upon by an external net force.</p>\n                  <p><strong>2. Fundamental Law of Dynamics:</strong> Acceleration is directly proportional to net force and inversely proportional to mass: <strong>F_net = m × a</strong>.</p>\n                  <p><strong>3. Action & Reaction:</strong> For every action force, there is an equal in magnitude and opposite in direction reaction force (forces always occur in matched pairs!).</p>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>⚙️</span> 3. WORK, KINETIC & POTENTIAL ENERGY\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Scientific Work:</strong> Work is done ONLY when a force displaces an object in the direction of the force:<br>\n                  <strong>Work (W) = Force (F) × Displacement (d)</strong>. Unit: <strong>Joule (J)</strong> (1 J = 1 N·m).<br>\n                  <em>Key rule:</em> If displacement d = 0, Work = 0 (no matter how tired you get!).<br>\n                  • <strong>Kinetic Energy (KE):</strong> Energy of motion: <strong>KE = ½ m v²</strong>.<br>\n                  • <strong>Gravitational Potential Energy (PE):</strong> Stored energy of height: <strong>PE = m g h</strong>.<br>\n                  • <strong>Conservation of Energy:</strong> Energy cannot be created or destroyed, only transformed: <em>Total Mechanical Energy E = PE + KE = constant</em>.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Work Done Lifting & Kinetic Energy Calculation",
            "problem": "Part A: A laborer in Addis Ababa lifts a 25 kg bag of cement vertically through a height of 2 meters (use g = 9.8 m/s²). Calculate the work done. Part B: A 1,200 kg car travels on the highway at 20 m/s. Calculate its kinetic energy.",
            "steps": [
              {
                "label": "Step 1: Calculate lifting force for Part A",
                "text": "Force required equals weight: F = mg = 25 kg × 9.8 m/s² = <strong>245 N</strong>."
              },
              {
                "label": "Step 2: Calculate work done",
                "text": "W = F × d = 245 N × 2 m = <strong>490 Joules</strong>."
              },
              {
                "label": "Step 3: Calculate kinetic energy for Part B",
                "text": "KE = ½ m v² = ½ × (1,200 kg) × (20 m/s)².<br>KE = 600 × 400 = <strong>240,000 Joules = 240 kJ</strong>."
              }
            ],
            "proTip": "Notice that kinetic energy depends on velocity squared (v²)! If you double car speed from 20 m/s to 40 m/s, kinetic energy quadruples (4×)!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the formula for gravitational potential energy?",
              "a": "PE = mgh (mass × gravity × height)."
            },
            {
              "q": "State Newton’s Third Law of Motion.",
              "a": "For every action, there is an equal and opposite reaction."
            },
            {
              "q": "What is the scientific work done if you hold a 50 kg weight motionless above your head for 10 minutes?",
              "a": "Zero Joules (because displacement d = 0)."
            }
          ],
          "amtQuiz": [
            {
              "q": "According to Newton’s First Law of Motion (Law of Inertia), what happens to a body at rest or moving with uniform velocity if no unbalanced external force acts upon it?",
              "options": [
                "It will immediately accelerate in the direction of Earth’s rotation",
                "It will gradually slow down and stop within a few seconds",
                "It remains at rest or continues moving at constant velocity in a straight line",
                "It spontaneously converts its mass into gravitational radiation"
              ],
              "correct": 2,
              "strategy": "Inertia keeps an object doing whatever it is currently doing.",
              "derivation": "Newton’s First Law states: An object remains at rest, or in uniform motion along a straight line, unless acted upon by a net external force (ΣF = 0 ➔ a = 0).",
              "trap": "Assuming all objects naturally stop (which is caused by friction, not a law of motion!)."
            },
            {
              "q": "A student applies a horizontal force of 50 Newtons to push a crate across a classroom floor through a distance of 4 meters. How much work is done on the crate?",
              "options": [
                "12.5 Joules",
                "200 Joules",
                "54 Joules",
                "46 Joules"
              ],
              "correct": 1,
              "strategy": "Formula: Work = Force × Distance (W = F × s).",
              "derivation": "W = F × s = 50 N × 4 m = 200 N·m = 200 Joules.",
              "trap": "Dividing force by distance (50 / 4 = 12.5) instead of multiplying."
            },
            {
              "q": "What is the weight on Earth of a satellite equipment pack with a mass of 25 kilograms? (Use g = 9.8 m/s²)",
              "options": [
                "2.55 N",
                "245 N",
                "25 N",
                "250 kg"
              ],
              "correct": 1,
              "strategy": "Weight formula: w = m × g.",
              "derivation": "w = m × g = 25 kg × 9.8 m/s² = 245 Newtons.",
              "trap": "Confusing mass (kg) with weight (Newtons)."
            },
            {
              "q": "As water stored in the reservoir of the Grand Ethiopian Renaissance Dam (GERD) falls through high-pressure penstock pipes toward the turbines, what energy transformation occurs?",
              "options": [
                "Chemical energy transforms directly into nuclear energy",
                "Gravitational potential energy transforms into kinetic energy",
                "Thermal heat energy transforms into sound energy",
                "Electrical energy transforms into gravitational potential energy"
              ],
              "correct": 1,
              "strategy": "Water at height has potential energy; moving water has kinetic energy.",
              "derivation": "Elevated water in a dam reservoir possesses gravitational potential energy (Ep = mgh). As it descends through the penstocks, potential energy is converted into kinetic energy (Ek = ½mv²) that rotates the hydro-turbines.",
              "trap": "Reversing the transformation direction."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u7",
      "number": "Unit 7",
      "title": "Earth and the Solar System",
      "bigIdea": "Understand the internal structure of the Earth, plate tectonics, planetary motion, rotation vs. revolution, and the components of our Solar System.",
      "subtopics": [
        {
          "id": "g7-sci-7.1",
          "code": "7.1",
          "title": "Earth’s Structure, Planetary Motions & The Solar System",
          "survey": {
            "blueprint": "Internal Earth layers: Crust, Mantle, Outer Core (molten iron/nickel), Inner Core (solid iron). Plate tectonics: convergent, divergent, transform boundaries. Earth movements: Rotation (24 hours ➔ Day/Night) and Revolution (365.25 days on 23.5° tilted axis ➔ Seasons). Solar system: 8 planets.",
            "objectives": [
              "Describe the four concentric layers of the Earth and their states of matter.",
              "Explain how tectonic plate movements create the Great East African Rift Valley.",
              "Differentiate between Earth’s rotation (causes day/night) and revolution (causes seasons).",
              "Classify the 8 planets into terrestrial (rocky) and Jovian (gas giant) planets."
            ],
            "keyFormulas": "Rotation period: 23 hours 56 min (~24h) &nbsp;|&nbsp; Revolution period: 365.25 days &nbsp;|&nbsp; Axial tilt: 23.5°"
          },
          "questions": [
            "Why does the Earth have seasons throughout the year while the equator experiences nearly constant temperatures?",
            "What geological tectonic process is currently actively splitting the Horn of Africa along the Afar Depression?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🌍</span> 1. INTERNAL LAYERS OF THE EARTH\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The Earth consists of four distinct compositional zones:<br>\n                  • <strong>Crust:</strong> Outermost solid silicate rock layer. Continental crust (granitic, ~35 km thick) and Oceanic crust (basaltic, ~7 km thick).<br>\n                  • <strong>Mantle:</strong> Semi-solid silicate rock layer extending to 2,900 km depth. Convection currents here drive tectonic plate motion.<br>\n                  • <strong>Outer Core:</strong> Liquid layer of molten Iron and Nickel (2,900 to 5,150 km). Convection in the outer core generates Earth's protective <strong>geomagnetic field</strong>!<br>\n                  • <strong>Inner Core:</strong> Solid sphere of pure Iron-Nickel under immense pressure (~5,500°C).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400 flex items-center gap-2\">\n                  <span>🌋</span> 2. PLATE TECTONICS & THE ETHIOPIAN RIFT VALLEY\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The lithosphere is broken into moving tectonic plates floating on the asthenosphere:<br>\n                  • <strong>Divergent Boundaries (Pulling Apart):</strong> Magma rises from mantle creating new crust. The <strong>East African Rift System</strong> (running right through Ethiopia from the Afar Triple Junction) is a classic active continental rift where the Somali plate is pulling away from the Nubian plate!<br>\n                  • <strong>Convergent Boundaries (Colliding):</strong> Subduction zones form ocean trenches and volcanic mountain ranges.<br>\n                  • <strong>Transform Boundaries (Sliding Past):</strong> Cause severe shallow-focus earthquakes.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>☀️</span> 3. ROTATION, REVOLUTION & THE SOLAR SYSTEM\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Rotation:</strong> Earth spinning on its axis once every 24 hours from West to East causes the cycle of <strong>Day and Night</strong>.<br>\n                  • <strong>Revolution:</strong> Earth orbiting the Sun in 365.25 days along an elliptical path with its axis tilted at <strong>23.5°</strong> causes the <strong>Four Seasons</strong>.<br>\n                  • <strong>The 8 Planets in Order from the Sun:</strong><br>\n                  - <em>Terrestrial (Rocky Inner Planets):</em> Mercury, Venus, Earth, Mars.<br>\n                  - <em>Asteroid Belt</em> (separates inner and outer planets).<br>\n                  - <em>Gas Giants / Jovian (Outer Planets):</em> Jupiter (largest), Saturn (ring system), Uranus, Neptune.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Explaining Solstices, Equinoxes and Seasons",
            "problem": "Explain why Ethiopia experiences the Kiremt (main rainy season) during the months of June, July, and August while the Southern Hemisphere experiences winter.",
            "steps": [
              {
                "label": "Step 1: Axial tilt orientation in June",
                "text": "During June, July, and August, Earth’s Northern Hemisphere is tilted towards the Sun (reaching maximum tilt at the June Summer Solstice, ~June 21)."
              },
              {
                "label": "Step 2: Solar angle and heating",
                "text": "Because Ethiopia lies in the Northern Hemisphere (approx 3°N to 15°N), it receives intense direct solar radiation, driving monsoonal air currents from the Atlantic and Indian oceans that cause heavy Kiremt rainfall."
              },
              {
                "label": "Step 3: Contrast with Southern Hemisphere",
                "text": "Simultaneously, the Southern Hemisphere is tilted away from the Sun, receiving slanted rays with less solar energy per unit area, resulting in their cold winter season."
              }
            ],
            "proTip": "Seasons are NOT caused by distance from the Sun! Earth is actually closest to the Sun (perihelion) in January during Northern winter!"
          },
          "reciteFlashcards": [
            {
              "q": "Which layer of the Earth is liquid and generates our magnetic field?",
              "a": "The Outer Core (molten iron and nickel)."
            },
            {
              "q": "What causes the cycle of Day and Night on Earth?",
              "a": "Earth’s rotation on its axis once every 24 hours."
            },
            {
              "q": "Name the four terrestrial (rocky inner) planets.",
              "a": "Mercury, Venus, Earth, and Mars."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which layer of Earth’s internal structure generates Earth’s magnetic field through convective circulation of molten iron and nickel?",
              "options": [
                "The Continental Crust",
                "The Asthenosphere",
                "The Liquid Outer Core",
                "The Solid Lithosphere"
              ],
              "correct": 2,
              "strategy": "The liquid outer core produces the geodynamo effect.",
              "derivation": "Earth’s magnetic field is generated by convection currents in the molten liquid outer core (iron-nickel alloy) coupled with Earth’s axial rotation (geodynamo).",
              "trap": "Selecting the solid inner core or mantle."
            },
            {
              "q": "The East African Rift Valley, which bisects Ethiopia, is formed along what type of tectonic plate boundary?",
              "options": [
                "Convergent plate boundary where two plates collide head-on",
                "Divergent plate boundary where tectonic plates are pulling apart",
                "Transform fault boundary where plates slide horizontally past one another",
                "Subduction trench boundary where oceanic crust sinks into the mantle"
              ],
              "correct": 1,
              "strategy": "Rifting is tensional pulling apart (divergence).",
              "derivation": "The African Plate is splitting into the Nubian and Somali sub-plates at a divergent plate boundary, creating a continental rift system.",
              "trap": "Confusing divergent rift boundaries with convergent collision mountain boundaries (like the Himalayas)."
            },
            {
              "q": "Which planet in our Solar System is closest in size, mass, and density to Earth, but suffers from a runaway greenhouse effect with surface temperatures exceeding 460°C?",
              "options": [
                "Mars",
                "Venus",
                "Mercury",
                "Jupiter"
              ],
              "correct": 1,
              "strategy": "Venus is Earth’s \"twin\" in size but has a dense CO₂ atmosphere.",
              "derivation": "Venus has approximately 95% of Earth’s diameter, but its thick atmosphere (96% CO₂) traps heat via a runaway greenhouse effect.",
              "trap": "Selecting Mars, which is much smaller and colder than Earth."
            },
            {
              "q": "What astronomical event occurs when the Moon passes directly between the Sun and the Earth, casting its dark shadow (umbra) onto Earth’s surface?",
              "options": [
                "Lunar Eclipse",
                "Solar Eclipse",
                "Vernal Equinox",
                "Winter Solstice"
              ],
              "correct": 1,
              "strategy": "Sun - Moon - Earth alignment is a Solar Eclipse.",
              "derivation": "A solar eclipse occurs when the Moon blocks solar rays from reaching Earth. A lunar eclipse occurs when Earth blocks sunlight from reaching the Moon.",
              "trap": "Confusing a solar eclipse (Moon in the middle) with a lunar eclipse (Earth in the middle)."
            }
          ]
        }
      ]
    }
  ]
};
