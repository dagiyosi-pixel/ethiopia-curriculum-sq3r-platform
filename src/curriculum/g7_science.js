module.exports = {
  "id": "science",
  "name": "General Science",
  "icon": "🔬",
  "units": [
    {
      "id": "g7-sci-u1",
      "number": "Unit 1",
      "title": "Basic Scientific Investigation",
      "bigIdea": "Understand the nature of science, laboratory safety, SI measurement units, and scientific inquiry.",
      "subtopics": [
        {
          "id": "g7-sci-1.1",
          "code": "1.1",
          "title": "The Scientific Method, Measurement & Lab Safety",
          "survey": {
            "blueprint": "Inquiry cycle: Observation ➔ Question ➔ Hypothesis ➔ Controlled Experiment ➔ Data Analysis ➔ Conclusion. Variables: Independent (manipulated), Dependent (measured), Controlled (constant). Lab safety symbols. SI units & density: ρ = m/V.",
            "objectives": [
              "Explain the sequential steps of the scientific investigation cycle.",
              "Distinguish between independent, dependent, and controlled variables in experiments.",
              "Identify laboratory hazard symbols and apply the \"Acid to Water\" dilution rule.",
              "Calculate density using ρ = m/V and apply displacement to find irregular solid volume."
            ],
            "keyFormulas": "Density: ρ = m / V [kg/m³ or g/cm³] | Irregular solid volume: V = V_final - V_initial"
          },
          "questions": [
            "Why must an experiment have only ONE independent variable at a time?",
            "Why must concentrated acid always be added to water, and never water to acid?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🔬 1. The Scientific Method & Experimental Variables</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Science is an evidence-based pursuit of knowledge following a strict inquiry framework:<br>\n                  • <strong>Observation:</strong> Gathering sensory data about natural phenomena.<br>\n                  • <strong>Hypothesis:</strong> A testable, falsifiable predictive proposition explaining the observation.<br>\n                  • <strong>Controlled Experimentation:</strong> Testing the hypothesis under isolated conditions:<br>\n                  - <em>Independent Variable:</em> The single factor deliberately altered by the investigator (e.g., amount of fertilizer).<br>\n                  - <em>Dependent Variable:</em> The factor that changes in response and is measured (e.g., plant height in cm).<br>\n                  - <em>Controlled Variables:</em> All other variables kept identical (sunlight, soil, water) to ensure a fair test.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400\">☣️ 2. Laboratory Safety & Hazard Warning Symbols</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Flammable (Flame):</strong> Substances that catch fire easily (ethanol, acetone). Keep away from open flames.<br>\n                  • <strong>Corrosive (Liquid spilling on hands/metal):</strong> Destroys living tissue and corrodes metals (sulfuric acid, sodium hydroxide).<br>\n                  • <strong>Toxic (Skull & Crossbones):</strong> Deadly or poisonous if inhaled, swallowed, or absorbed through skin.<br>\n                  • <strong>The Golden Acid Dilution Rule:</strong> <em>\"Always Add Acid to water (A&W rule)\"</em>. Adding water to concentrated acid releases immense exothermic heat, causing the liquid to boil instantly and violently splash corrosive acid onto skin and eyes!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">⚖️ 3. SI Units, Mass, Volume & Density</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Fundamental SI Units:</strong><br>\n                    • Length: Meter (m)<br>\n                    • Mass: Kilogram (kg)<br>\n                    • Time: Second (s)<br>\n                    • Temperature: Kelvin (K)\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Density Calculation:</strong><br>\n                    • Formula: <strong>ρ = Mass / Volume = m / V</strong>.<br>\n                    • Units: kg/m³ (SI) or g/cm³ (1 g/cm³ = 1,000 kg/m³).<br>\n                    • Water Density: 1.0 g/cm³ (objects with ρ < 1 float; ρ > 1 sink).\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Determining Density of an Irregular Mineral Specimen",
            "problem": "A student measures a piece of volcanic basalt rock from the Ethiopian Rift Valley. The electronic balance reads 156 grams. When submerged into a graduated cylinder filled with 50 mL of water, the water level rises to 74 mL. Calculate the density of the basalt rock.",
            "steps": [
              {
                "label": "Step 1: Calculate volume by displacement",
                "text": "Volume V = V_final - V_initial = 74 mL - 50 mL = 24 mL = 24 cm³ (since 1 mL = 1 cm³)."
              },
              {
                "label": "Step 2: State mass and formula",
                "text": "Mass m = 156 g. Density formula: ρ = m / V."
              },
              {
                "label": "Step 3: Compute density",
                "text": "ρ = 156 g / 24 cm³ = 6.5 g/cm³ (or 6,500 kg/m³)."
              }
            ],
            "proTip": "Water displacement is the Archimedean method for finding the volume of any irregularly shaped insoluble solid!"
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
              "a": "To prevent violent exothermic boiling and splattering of concentrated acid."
            }
          ],
          "amtQuiz": [
            {
              "q": "In an experiment testing how different concentrations of nitrate fertilizer affect maize growth, what is the dependent variable?",
              "options": [
                "The height and biomass of the maize plants measured weekly",
                "The concentration of nitrate fertilizer applied to each pot",
                "The amount of daily sunlight received by the maize",
                "The type and volume of soil placed in each pot"
              ],
              "correct": 0,
              "strategy": "Identify what is being measured as the result of the experiment.",
              "derivation": "The dependent variable is the responding factor measured by the scientist. Plant height and biomass depend on fertilizer concentration.",
              "trap": "Confusing the independent variable (fertilizer concentration) with the dependent variable (plant growth)."
            },
            {
              "q": "A metallic cylinder of mass 270 g displaces 100 cm³ of water. What is the density of this metal in kg/m³?",
              "options": [
                "2,700 kg/m³",
                "2.7 kg/m³",
                "27,000 kg/m³",
                "270 kg/m³"
              ],
              "correct": 0,
              "strategy": "Compute density in g/cm³ first (ρ = m/V), then multiply by 1,000 to convert to SI units (kg/m³).",
              "derivation": "ρ = 270 g / 100 cm³ = 2.7 g/cm³. In SI units: 2.7 × 1,000 kg/m³ = 2,700 kg/m³ (density of aluminum).",
              "trap": "Forgetting to convert g/cm³ to kg/m³ by multiplying by 1000."
            },
            {
              "q": "According to the principles of The Scientific Method, Measurement & Lab Safety, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in The Scientific Method, Measurement & Lab Safety.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            }
          ]
        },
        {
          "id": "g7-sci-1.2",
          "code": "1.2",
          "title": "Laboratory Apparatus & Branches of Natural Science",
          "survey": {
            "blueprint": "Branches of Natural Science: Biology (study of life), Chemistry (matter & transformations), Physics (matter, energy & force), Earth Science. Standard glassware: Beaker, Erlenmeyer flask, Graduated cylinder, Pipette, Burette, Test tube, Bunsen burner.",
            "objectives": [
              "Classify the major branches of natural science and their interdisciplinary links.",
              "Identify common laboratory apparatus and explain their precise functions.",
              "Distinguish between volumetric equipment used for approximate holding vs precise measurement."
            ],
            "keyFormulas": "1 Liter = 1,000 mL = 1,000 cm³ = 1 dm³ | Meniscus reading: Read bottom of concave meniscus at eye level."
          },
          "questions": [
            "Why is a graduated cylinder preferred over a beaker for measuring volume?",
            "How should you read the liquid meniscus of water in a graduated cylinder?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🔭 1. Branches of Natural Science</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Natural science is divided into specialized interconnected branches:<br>\n                  • <strong>Biology:</strong> The scientific study of living organisms, their structure, function, growth, origin, evolution, and distribution (Botany, Zoology, Microbiology).<br>\n                  • <strong>Chemistry:</strong> The study of the composition, properties, and reactions of matter (organic, inorganic, physical, analytical).<br>\n                  • <strong>Physics:</strong> The study of matter, energy, space, time, and the fundamental forces governing the physical universe.<br>\n                  • <strong>Earth Science / Geology:</strong> Study of Earth's solid structure, atmosphere, oceans, and astronomical environment.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400\">🧪 2. Common Laboratory Apparatus & Functions</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Holding & Heating:</strong><br>\n                    • <em>Beaker:</em> Holding and heating liquids (approximate volume markings only).<br>\n                    • <em>Erlenmeyer Flask:</em> Conical shape facilitates swirling without splashing; ideal for titrations.<br>\n                    • <em>Test Tube:</em> Conducting small-scale reactions and heating small volumes.<br>\n                    • <em>Bunsen Burner:</em> Controllable flame heat source.\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Precision Measuring:</strong><br>\n                    • <em>Graduated Cylinder:</em> Accurately measures liquid volumes.<br>\n                    • <em>Volumetric Pipette / Burette:</em> Delivers highly precise liquid volumes in analytical experiments.<br>\n                    • <em>Meniscus Rule:</em> Read the liquid level at the <strong>lowest point of the concave meniscus</strong> at eye level to avoid parallax error.\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Preventing Parallax Error When Measuring Liquids",
            "problem": "A student looks down at a graduated cylinder from an angle above the liquid surface. The reading appears to be 48 mL. When viewing horizontally at eye level, the bottom of the meniscus aligns with 45 mL. Explain the difference and state the correct volume.",
            "steps": [
              {
                "label": "Step 1: Identify parallax error",
                "text": "Viewing a scale from an angle above or below causes parallax error, making the meniscus appear shifted."
              },
              {
                "label": "Step 2: Apply the standard measurement rule",
                "text": "Eye level must be strictly horizontal with the liquid surface, reading the bottom of the curved meniscus for water."
              },
              {
                "label": "Step 3: State verified volume",
                "text": "The correct, verified volume is <strong>45 mL</strong>."
              }
            ],
            "proTip": "For water and aqueous solutions, always read the bottom of the concave curve. For mercury, read the top of the convex curve!"
          },
          "reciteFlashcards": [
            {
              "q": "Which piece of laboratory glassware is designed specifically for swirling liquids during titrations?",
              "a": "Erlenmeyer (conical) flask."
            },
            {
              "q": "How should you position your eyes when reading a graduated cylinder?",
              "a": "Directly horizontal with the bottom of the concave meniscus."
            },
            {
              "q": "What branch of natural science studies living organisms?",
              "a": "Biology."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following laboratory tools is specifically designed to measure a precise volume of liquid, rather than simply holding or mixing it?",
              "options": [
                "Graduated cylinder",
                "Beaker",
                "Evaporating dish",
                "Erlenmeyer flask"
              ],
              "correct": 0,
              "strategy": "Beakers and flasks have wide tolerances (±5-10%); graduated cylinders are calibrated volumetric instruments.",
              "derivation": "Graduated cylinders are precision instruments calibrated specifically for measuring liquid volume with high accuracy.",
              "trap": "Assuming beakers are precision measuring devices because they have markings printed on the glass."
            },
            {
              "q": "According to the principles of Laboratory Apparatus & Branches of Natural Science, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Laboratory Apparatus & Branches of Natural Science.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Laboratory Apparatus & Branches of Natural Science, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u2",
      "number": "Unit 2",
      "title": "Cell as the Basic Unit of Life",
      "bigIdea": "Explore cell theory, microscopy, cellular organelles, and the distinction between plant and animal cells.",
      "subtopics": [
        {
          "id": "g7-sci-2.1",
          "code": "2.1",
          "title": "The Compound Light Microscope & Cell Theory",
          "survey": {
            "blueprint": "Cell Theory: 1) All living organisms are composed of one or more cells. 2) The cell is the basic structural and functional unit of life. 3) All cells arise from pre-existing cells. Microscope parts: Eyepiece, Objective lenses, Stage, Coarse/Fine adjustment, Diaphragm. Total magnification = Eyepiece × Objective.",
            "objectives": [
              "State the three tenets of modern Cell Theory (Schleiden, Schwann, Virchow).",
              "Identify the mechanical and optical components of a compound light microscope.",
              "Calculate total magnification and describe proper focusing procedure from low to high power."
            ],
            "keyFormulas": "Total Magnification = Magnification of Eyepiece × Magnification of Objective Lens"
          },
          "questions": [
            "Why must you always start focusing a specimen using the low-power objective lens first?",
            "What is the total magnification when using a 10× eyepiece and a 40× objective lens?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">🔬 1. The Classical Cell Theory</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Formulated through the pioneering discoveries of Robert Hooke (1665, coined \"cell\"), Anton van Leeuwenhoek (microorganisms), Matthias Schleiden (1838, plants), Theodor Schwann (1839, animals), and Rudolf Virchow (1855):<br>\n                  1. <strong>All living organisms</strong> are composed of one or more cells (unicellular or multicellular).<br>\n                  2. <strong>The cell</strong> is the fundamental structural, functional, and biological unit of all living organisms.<br>\n                  3. <strong>All cells arise from pre-existing cells</strong> through cellular division (<em>Omnis cellula e cellula</em>).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400\">🔭 2. Parts of the Compound Light Microscope</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Optical Components:</strong><br>\n                    • <em>Eyepiece (Ocular):</em> Lens at top (usually 10× magnification).<br>\n                    • <em>Objective Lenses:</em> Mounted on revolving nosepiece (Scanning 4×, Low 10×, High 40×, Oil immersion 100×).<br>\n                    • <em>Condenser & Diaphragm:</em> Regulates light intensity passing through specimen.\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Mechanical Components:</strong><br>\n                    • <em>Stage & Stage Clips:</em> Holds the glass slide firmly.<br>\n                    • <em>Coarse Adjustment Knob:</em> Rapidly moves stage up/down for initial focusing (use ONLY on low power).<br>\n                    • <em>Fine Adjustment Knob:</em> Precise focusing for crisp clarity on high power.\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Calculating Microscope Magnification",
            "problem": "A Grade 7 student observes an onion epidermal peel under a compound light microscope using an eyepiece marked 15× and a high-power objective lens marked 40×. What is the total magnification of the specimen?",
            "steps": [
              {
                "label": "Step 1: Formula",
                "text": "Total Magnification = Eyepiece Magnification × Objective Magnification"
              },
              {
                "label": "Step 2: Substitute values",
                "text": "Total Magnification = 15 × 40"
              },
              {
                "label": "Step 3: Calculate product",
                "text": "Total Magnification = <strong>600×</strong> (the specimen appears 600 times larger than actual size)."
              }
            ],
            "proTip": "Never use the coarse adjustment knob under high-power objective; it can crack the coverslip and ruin the expensive objective lens!"
          },
          "reciteFlashcards": [
            {
              "q": "Who first observed and named \"cells\" looking at cork slices in 1665?",
              "a": "Robert Hooke."
            },
            {
              "q": "What is the formula for total microscope magnification?",
              "a": "Eyepiece Magnification × Objective Lens Magnification."
            },
            {
              "q": "Which adjustment knob should be used exclusively under high-power magnification?",
              "a": "Fine adjustment knob."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which adjustment knob must NEVER be turned when viewing a slide under the high-power (40× or 100×) objective lens?",
              "options": [
                "Coarse adjustment knob",
                "Fine adjustment knob",
                "Iris diaphragm lever",
                "Revolving nosepiece ring"
              ],
              "correct": 0,
              "strategy": "High-power objectives are very long and positioned millimeters above the slide.",
              "derivation": "The coarse adjustment knob moves the stage rapidly over large distances and can smash the slide against the high-power objective.",
              "trap": "Confusing coarse adjustment with fine adjustment."
            },
            {
              "q": "According to the principles of The Compound Light Microscope & Cell Theory, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in The Compound Light Microscope & Cell Theory.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to The Compound Light Microscope & Cell Theory, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        },
        {
          "id": "g7-sci-2.2",
          "code": "2.2",
          "title": "Plant Cells vs Animal Cells & Biological Organization",
          "survey": {
            "blueprint": "Common organelles: Nucleus (genetic control), Cell Membrane (semi-permeable barrier), Cytoplasm, Mitochondria (cellular respiration, ATP powerhouse), Ribosomes (protein synthesis). Plant-only structures: Cellulose Cell Wall (rigid support), Chloroplasts (photosynthesis), Large Central Vacuole. Levels of organization: Cell ➔ Tissue ➔ Organ ➔ Organ System ➔ Organism.",
            "objectives": [
              "Compare and contrast the ultrastructure of plant cells and animal cells.",
              "State the specific function of nucleus, mitochondria, cell wall, and chloroplasts.",
              "Sequence the hierarchy of biological organization from cell to organism."
            ],
            "keyFormulas": "Levels of biological hierarchy: Cell ➔ Tissue ➔ Organ ➔ Organ System ➔ Multicellular Organism"
          },
          "questions": [
            "Why do plant cells have a rigid cell wall while animal cells do not?",
            "What is the function of mitochondria, and why do muscle cells contain thousands of them?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🧬 1. Key Cellular Organelles & Functions</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Nucleus:</strong> Contains DNA/chromosomes; controls all cellular activities and heredity.<br>\n                  • <strong>Cell Membrane:</strong> Selectively permeable phospholipid bilayer regulating substance entry/exit.<br>\n                  • <strong>Mitochondria:</strong> <em>\"Powerhouse of the cell\"</em>; carries out aerobic cellular respiration to generate ATP energy.<br>\n                  • <strong>Cytoplasm:</strong> Jelly-like cytosol where biochemical metabolic reactions occur.<br>\n                  • <strong>Ribosomes:</strong> Sites of protein synthesis.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">🌿 2. Plant Cells vs Animal Cells</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-emerald-300\">Plant Cells:</strong><br>\n                    • Outer rigid <strong>Cellulose Cell Wall</strong> gives shape & turgor pressure.<br>\n                    • Contain green <strong>Chloroplasts</strong> with chlorophyll for photosynthesis.<br>\n                    • Large single <strong>Central Vacuole</strong> storing cell sap.\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-rose-300\">Animal Cells:</strong><br>\n                    • <strong>No cell wall</strong> (only flexible cell membrane; enables motility).<br>\n                    • <strong>No chloroplasts</strong> (heterotrophic nutrition).<br>\n                    • Small, temporary vacuoles; contain centrioles for cell division.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400\">🪜 3. Levels of Biological Organization</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  <strong>Cell</strong> (basic unit, e.g., muscle cell) ➔ <strong>Tissue</strong> (group of similar cells performing common function, e.g., muscle tissue) ➔ <strong>Organ</strong> (structures composed of multiple tissues, e.g., heart) ➔ <strong>Organ System</strong> (group of organs working together, e.g., circulatory system) ➔ <strong>Organism</strong> (individual living being, e.g., human).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Identifying Unknown Cell Type Under Microscope",
            "problem": "A biology student observes an unknown specimen under 400× magnification and records: definite rectangular shape, distinct outer boundary outside membrane, green oval plastids, and a massive central fluid cavity pushing the nucleus to the side. Classify the cell with justification.",
            "steps": [
              {
                "label": "Step 1: Analyze green plastids",
                "text": "Green oval plastids are chloroplasts containing chlorophyll for photosynthesis."
              },
              {
                "label": "Step 2: Analyze outer boundary and cavity",
                "text": "The boundary is a cellulose cell wall; the fluid cavity is a large central vacuole."
              },
              {
                "label": "Step 3: Conclusion",
                "text": "The specimen is unambiguously a <strong>Plant Cell</strong> (such as an Elodea leaf cell or onion mesophyll cell)."
              }
            ],
            "proTip": "Animal cells never possess a cell wall or chloroplasts; their shape is flexible and irregular!"
          },
          "reciteFlashcards": [
            {
              "q": "Which organelle is known as the \"powerhouse of the cell\"?",
              "a": "Mitochondria (produces ATP through cellular respiration)."
            },
            {
              "q": "Name three structural features present in plant cells but absent in animal cells.",
              "a": "Cellulose cell wall, chloroplasts, and a large central vacuole."
            },
            {
              "q": "What is the correct biological hierarchy from cell to organism?",
              "a": "Cell ➔ Tissue ➔ Organ ➔ Organ System ➔ Organism."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following cellular structures is present in onion bulb epidermal cells and eucalyptus leaf cells, but completely absent in human cheek cells?",
              "options": [
                "Cellulose cell wall",
                "Mitochondria",
                "Endoplasmic reticulum",
                "Cell membrane"
              ],
              "correct": 0,
              "strategy": "Human cheek cells are animal cells, whereas onion and eucalyptus cells are plant cells.",
              "derivation": "Plant cells are enveloped by a rigid cellulose cell wall outside the plasma membrane, which animal cells strictly lack.",
              "trap": "Assuming plant cells do not have a cell membrane because they have a cell wall (they have BOTH!)."
            },
            {
              "q": "According to the principles of Plant Cells vs Animal Cells & Biological Organization, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Plant Cells vs Animal Cells & Biological Organization.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Plant Cells vs Animal Cells & Biological Organization, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u3",
      "number": "Unit 3",
      "title": "Human Biology & Health",
      "bigIdea": "Analyze human musculoskeletal systems, dentition, digestive mechanics, nutrition, and common communicable diseases.",
      "subtopics": [
        {
          "id": "g7-sci-3.1",
          "code": "3.1",
          "title": "The Human Skeletal System & Dentition",
          "survey": {
            "blueprint": "Skeletal functions: Support, Protection, Movement, Blood cell production (bone marrow), Mineral storage (calcium). Axial skeleton (Skull, Vertebral column, Rib cage, Sternum) vs Appendicular skeleton (Limbs, Pectoral and Pelvic girdles). Joint types: Ball-and-socket, Hinge, Pivot, Fixed. Human dentition: Incisors (cutting), Canines (tearing), Premolars & Molars (grinding). Adult dental formula: 2:1:2:3.",
            "objectives": [
              "List the 5 primary functions of the human skeleton.",
              "Distinguish between the axial and appendicular divisions of the skeleton.",
              "Classify synovial joints (hinge, ball-and-socket, pivot) and provide anatomical examples.",
              "State the types, numbers, and functions of teeth in an adult human jaw."
            ],
            "keyFormulas": "Adult Dental Formula (per half jaw): (2 Incisors + 1 Canine + 2 Premolars + 3 Molars) × 4 = 32 teeth total"
          },
          "questions": [
            "How do the axial skeleton and appendicular skeleton differ in their primary roles?",
            "What type of joint allows 360-degree rotational movement at the shoulder and hip?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🦴 1. The Human Skeleton: Axial vs Appendicular</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  An adult human skeleton contains <strong>206 bones</strong> divided into two main sections:<br>\n                  • <strong>Axial Skeleton (80 bones):</strong> Forms the central axis of the body. Primary role is <strong>vital organ protection</strong>:<br>\n                  - <em>Cranium/Skull:</em> Encases and protects the brain.<br>\n                  - <em>Vertebral Column (33 vertebrae):</em> Protects the spinal cord and provides erect posture.<br>\n                  - <em>Rib Cage (12 pairs of ribs) & Sternum:</em> Shields heart and lungs; facilitates respiration.<br>\n                  • <strong>Appendicular Skeleton (126 bones):</strong> Comprises limbs and girdles. Primary role is <strong>locomotion and manipulation</strong>:<br>\n                  - Pectoral Girdle (clavicle, scapula) & Upper Limbs (humerus, radius, ulna, carpals, metacarpals, phalanges).<br>\n                  - Pelvic Girdle & Lower Limbs (femur [longest bone], patella, tibia, fibula, tarsals, metatarsals, phalanges).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">🔄 2. Types of Joints & Connective Tissues</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Ball-and-Socket Joint:</strong> Allows multi-directional rotational movement (shoulder, hip).<br>\n                  • <strong>Hinge Joint:</strong> Allows movement in one plane like a door hinge (elbow, knee, fingers).<br>\n                  • <strong>Pivot Joint:</strong> Allows rotation around an axis (neck joint between atlas and axis vertebrae).<br>\n                  • <strong>Fixed / Immovable Joints (Sutures):</strong> Bones fused together (cranium plates).<br>\n                  • <strong>Ligaments:</strong> Tough elastic bands connecting <em>Bone to Bone</em>.<br>\n                  • <strong>Tendons:</strong> Dense fibrous cords connecting <em>Muscle to Bone</em>.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400\">🦷 3. Human Dentition & Tooth Structure</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Humans are diphyodont (milk teeth = 20; permanent teeth = 32):<br>\n                  • <strong>Incisors (8 total):</strong> Chisel-shaped for cutting and biting food.<br>\n                  • <strong>Canines (4 total):</strong> Pointed, sharp for gripping and tearing food.<br>\n                  • <strong>Premolars (8 total):</strong> Two cusps (bicuspids) for crushing food.<br>\n                  • <strong>Molars (12 total):</strong> Broad flat surfaces with 4-5 cusps for thorough grinding (includes 4 wisdom teeth).<br>\n                  • <strong>Tooth Layers:</strong> Outer <em>Enamel</em> (hardest biological substance) ➔ <em>Dentine</em> ➔ Central <em>Pulp Cavity</em> (nerves and blood vessels).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Calculating Total Number of Teeth from Dental Formula",
            "problem": "The dental formula of an adult human is written as I: 2/2, C: 1/1, PM: 2/2, M: 3/3. Demonstrate step-by-step how to find the total number of teeth.",
            "steps": [
              {
                "label": "Step 1: Sum teeth in one quadrant (half of one jaw)",
                "text": "One quadrant = 2 Incisors + 1 Canine + 2 Premolars + 3 Molars = 8 teeth."
              },
              {
                "label": "Step 2: Multiply by 2 for the full jaw (upper or lower)",
                "text": "Upper jaw has 8 × 2 = 16 teeth; Lower jaw has 8 × 2 = 16 teeth."
              },
              {
                "label": "Step 3: Total dentition",
                "text": "Total teeth in full adult set = 16 + 16 = <strong>32 permanent teeth</strong>."
              }
            ],
            "proTip": "Children with deciduous (milk) teeth have NO premolars and only 8 molars (20 teeth total)!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the longest and strongest bone in the human body?",
              "a": "The Femur (thigh bone)."
            },
            {
              "q": "What connective tissue connects muscle to bone?",
              "a": "Tendon (Ligament connects bone to bone)."
            },
            {
              "q": "What is the hardest substance in the human body?",
              "a": "Tooth enamel."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following bones belongs strictly to the appendicular skeleton rather than the axial skeleton?",
              "options": [
                "Femur (thigh bone)",
                "Sternum (breastbone)",
                "Cranium (skull)",
                "Thoracic vertebrae"
              ],
              "correct": 0,
              "strategy": "Axial skeleton consists of the skull, vertebral column, and rib cage along the body’s midline.",
              "derivation": "The femur is the bone of the lower limb, which belongs to the appendicular skeleton alongside the pelvic and pectoral girdles.",
              "trap": "Confusing the midline axial protective cage with the limb bones of the appendicular skeleton."
            },
            {
              "q": "According to the principles of The Human Skeletal System & Dentition, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in The Human Skeletal System & Dentition.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to The Human Skeletal System & Dentition, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        },
        {
          "id": "g7-sci-3.2",
          "code": "3.2",
          "title": "Human Digestion, Nutrition & Communicable Diseases",
          "survey": {
            "blueprint": "Alimentary canal: Mouth ➔ Pharynx ➔ Esophagus (peristalsis) ➔ Stomach (HCl, pepsin) ➔ Small Intestine (duodenum, ileum; villi absorption) ➔ Large Intestine (water reabsorption) ➔ Rectum/Anus. Major nutrients: Carbohydrates, Proteins, Lipids, Vitamins, Minerals, Water, Dietary Fiber. Pathogens & vectors: Malaria (Plasmodium via Anopheles mosquito), Cholera (Vibrio cholerae via contaminated water), Tuberculosis (Mycobacterium tuberculosis via airborne droplets).",
            "objectives": [
              "Trace the path of food through the human alimentary canal and explain the action of digestive enzymes.",
              "Explain the function of intestinal villi in nutrient absorption into the bloodstream.",
              "Classify deficiency diseases (Kwashiorkor, Marasmus, Scurvy, Rickets, Anemia, Goiter).",
              "Identify causes, modes of transmission, symptoms, and prevention of major Ethiopian infectious diseases."
            ],
            "keyFormulas": "Balanced Diet = Carbohydrates + Proteins + Fats + Vitamins + Minerals + Fiber + Water"
          },
          "questions": [
            "How do microvilli in the small intestine optimize nutrient absorption?",
            "How does the transmission cycle of malaria differ from that of waterborne cholera?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🍎 1. The Human Digestive System</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Mouth:</strong> Teeth masticate food; salivary amylase begins starch breakdown into maltose.<br>\n                  • <strong>Esophagus:</strong> Rhythmic muscular contractions called <strong>peristalsis</strong> push bolus down.<br>\n                  • <strong>Stomach:</strong> Secretes gastric juice containing Hydrochloric Acid (pH 1.5-2.0 kills microbes) and <em>Pepsin</em> (digests proteins into peptides).<br>\n                  • <strong>Small Intestine:</strong> Complete chemical digestion via pancreatic enzymes and liver bile (emulsifies fats). The inner lining contains finger-like projections called <strong>villi</strong> that massively increase surface area for rapid nutrient absorption into blood capillaries.<br>\n                  • <strong>Large Intestine:</strong> Reabsorbs water and mineral salts, forming solid feces.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400\">⚠️ 2. Nutritional Deficiency Diseases</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    • <strong>Kwashiorkor:</strong> Severe protein deficiency in young children; causes swollen belly (edema), stunted growth, and reddish hair.<br>\n                    • <strong>Marasmus:</strong> Total caloric (energy) starvation; causes severe wasting of muscle and fat tissues.\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    • <strong>Scurvy:</strong> Vitamin C deficiency (bleeding gums).<br>\n                    • <strong>Rickets:</strong> Vitamin D / Calcium deficiency (soft, bowed leg bones).<br>\n                    • <strong>Anemia:</strong> Iron deficiency (fatigue, pale skin).<br>\n                    • <strong>Goiter:</strong> Iodine deficiency (enlarged thyroid gland in neck).\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400\">🦟 3. Major Communicable Diseases in Ethiopia</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Malaria:</strong> Caused by the protozoan parasite <em>Plasmodium</em>; transmitted by the bite of infected female <em>Anopheles</em> mosquitoes. Prevented with insecticide-treated bed nets, draining stagnant water, and artemisinin-based combination therapies.<br>\n                  • <strong>Cholera:</strong> Caused by bacterium <em>Vibrio cholerae</em>; transmitted through fecal contamination of water/food; causes severe watery diarrhea and rapid fatal dehydration.<br>\n                  • <strong>Tuberculosis (TB):</strong> Caused by bacterium <em>Mycobacterium tuberculosis</em>; transmitted via airborne droplets from coughs/sneezes.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Distinguishing Kwashiorkor from Marasmus",
            "problem": "A health worker in an Ethiopian rural health clinic examines two toddlers suffering from severe malnutrition. Toddler A exhibits fluid swelling in the ankles and abdomen, reddish hair, and an enlarged fatty liver. Toddler B is emaciated with skin hanging off bones and sunken eyes. Diagnose both conditions.",
            "steps": [
              {
                "label": "Step 1: Analyze Toddler A symptoms",
                "text": "Fluid swelling (edema), skin depigmentation, and distended abdomen are classic hallmarks of <strong>Kwashiorkor</strong>, caused by protein deficiency despite adequate carbohydrate calories."
              },
              {
                "label": "Step 2: Analyze Toddler B symptoms",
                "text": "Severe muscle wasting, loss of subcutaneous fat, and withered appearance indicate <strong>Marasmus</strong>, caused by total caloric deficiency (starvation)."
              },
              {
                "label": "Step 3: Treatment strategy",
                "text": "Both require careful therapeutic milk feeding (F-75, F-100) followed by balanced macro- and micro-nutrient diets."
              }
            ],
            "proTip": "Kwashiorkor features edema (swelling) due to low blood albumin causing fluid leakage; Marasmus features no edema!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the primary function of villi in the small intestine?",
              "a": "To increase surface area for efficient absorption of digested nutrients."
            },
            {
              "q": "Which disease is caused by deficiency of Vitamin D and calcium?",
              "a": "Rickets (causes soft, bent bones in children)."
            },
            {
              "q": "What is the vector that transmits the malaria parasite?",
              "a": "Female Anopheles mosquito."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which digestive organ is the principal site where the chemical digestion of carbohydrates, proteins, and lipids is completed and nutrients are absorbed into the bloodstream?",
              "options": [
                "Small intestine",
                "Stomach",
                "Large intestine (colon)",
                "Esophagus"
              ],
              "correct": 0,
              "strategy": "The small intestine receives pancreatic enzymes and bile, and contains villi for absorption.",
              "derivation": "The small intestine (duodenum, jejunum, ileum) completes digestion using pancreatic enzymes and absorbs virtually all nutrients through its vast villi surface.",
              "trap": "Thinking the stomach absorbs nutrients—the stomach mainly breaks down proteins and kills bacteria with HCl."
            },
            {
              "q": "According to the principles of Human Digestion, Nutrition & Communicable Diseases, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Human Digestion, Nutrition & Communicable Diseases.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Human Digestion, Nutrition & Communicable Diseases, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u4",
      "number": "Unit 4",
      "title": "Reproduction in Plants and Animals",
      "bigIdea": "Explore plant classification, flower anatomy, pollination, animal diversity, and insect metamorphosis.",
      "subtopics": [
        {
          "id": "g7-sci-4.1",
          "code": "4.1",
          "title": "Plant Classification & Anatomy of a Flowering Plant",
          "survey": {
            "blueprint": "Plant Kingdom: Non-vascular (Bryophytes: mosses) vs Vascular (Pteridophytes: ferns; Gymnosperms: conifers; Angiosperms: flowering plants). Parts of a complete flower: Calyx (sepals), Corolla (petals), Stamen (male organ: anther & filament), Carpel/Pistil (female organ: stigma, style, ovary containing ovules). Pollination: Self-pollination vs Cross-pollination (wind vs insect). Fertilization ➔ Ovary develops into Fruit; Ovules develop into Seeds.",
            "objectives": [
              "Classify plants into non-flowering and flowering (angiosperms) groups.",
              "Identify the male (stamen) and female (pistil) reproductive structures of a flower.",
              "Contrast insect-pollinated flowers with wind-pollinated flowers.",
              "Explain the biological process of fertilization leading to fruit and seed development."
            ],
            "keyFormulas": "Fertilization: Pollen grain (male gamete) + Ovule (female gamete) ➔ Zygote ➔ Seed (Ovary ➔ Fruit)"
          },
          "questions": [
            "What structural differences exist between flowers pollinated by insects and those pollinated by wind?",
            "What becomes of the ovary and ovules after fertilization occurs in a flower?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🌸 1. Anatomy of a Flower</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  A flower is the reproductive organ of angiosperms, arranged in four concentric whorls:<br>\n                  • <strong>Calyx (Sepals):</strong> Outermost green leaves that protect the flower bud before it opens.<br>\n                  • <strong>Corolla (Petals):</strong> Brightly colored, scented petals that attract pollinators.<br>\n                  • <strong>Stamen (Male Reproductive Organ):</strong> Consists of the <em>Anther</em> (produces pollen grains containing male gametes) supported by a slender stalk called the <em>Filament</em>.<br>\n                  • <strong>Carpel / Pistil (Female Reproductive Organ):</strong> Consists of the sticky <em>Stigma</em> (receives pollen), the elongated <em>Style</em>, and the swollen basal <em>Ovary</em> containing one or more <em>Ovules</em> (female gametes).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">🐝 2. Pollination & Post-Fertilization Changes</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Insect vs Wind Pollination:</strong><br>\n                    • <em>Insect-pollinated:</em> Large, brightly colored petals, pleasant scent, nectar glands, sticky/spiky pollen, stigma inside flower.<br>\n                    • <em>Wind-pollinated:</em> Small, dull green petals, no nectar, huge quantities of light smooth airborne pollen, feathery hanging stigmas outside flower (e.g., maize, teff, wheat).\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Post-Fertilization Development:</strong><br>\n                    • <strong>Ovary</strong> matures into the <strong>Fruit</strong>.<br>\n                    • <strong>Ovules</strong> develop into <strong>Seeds</strong>.<br>\n                    • Petals, sepals, and stamens wither and fall away.\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Classifying Pollination Adaptations in Teff vs Coffee Flowers",
            "problem": "Compare the floral features of an Ethiopian coffee plant (Coffea arabica) with a teff plant (Eragrostis tef) and determine their primary modes of pollination.",
            "steps": [
              {
                "label": "Step 1: Observe coffee flower",
                "text": "Coffee flowers are white, intensely fragrant, produce sweet nectar, and have sticky pollen. These are classic insect-pollination adaptations (bees)."
              },
              {
                "label": "Step 2: Observe teff flower",
                "text": "Teff flowers are tiny, dull green/brown, lack nectar and fragrance, and feature feathery dangling stigmas that catch drifting pollen. These are adaptations for wind pollination."
              },
              {
                "label": "Step 3: Conclusion",
                "text": "Coffee is <strong>entomophilous (insect-pollinated)</strong>; Teff is <strong>anemophilous (wind-pollinated)</strong>."
              }
            ],
            "proTip": "Cereal crops like teff, maize, and sorghum are wind-pollinated and produce massive amounts of dry, buoyant pollen grains!"
          },
          "reciteFlashcards": [
            {
              "q": "What flower part produces pollen grains?",
              "a": "The Anther."
            },
            {
              "q": "What does the fertilized ovary of a flower become?",
              "a": "The Fruit (fertilized ovules become Seeds)."
            },
            {
              "q": "Name two adaptations of wind-pollinated flowers.",
              "a": "Feathery stigmas and abundant lightweight pollen."
            }
          ],
          "amtQuiz": [
            {
              "q": "Following successful double fertilization in a flowering angiosperm, what biological structure does the floral ovary transform into?",
              "options": [
                "The fruit",
                "The seed coat (testa)",
                "The embryo",
                "The endosperm"
              ],
              "correct": 0,
              "strategy": "Remember the transformation rule: Ovule ➔ Seed; Ovary ➔ Fruit.",
              "derivation": "The ovary wall thickens and ripens into the fruit surrounding the seeds, which develop from the fertilized ovules.",
              "trap": "Confusing the fate of the ovule (seed) with that of the ovary (fruit)."
            },
            {
              "q": "According to the principles of Plant Classification & Anatomy of a Flowering Plant, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Plant Classification & Anatomy of a Flowering Plant.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Plant Classification & Anatomy of a Flowering Plant, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        },
        {
          "id": "g7-sci-4.2",
          "code": "4.2",
          "title": "Animal Diversity & Insect Metamorphosis",
          "survey": {
            "blueprint": "Invertebrates (lack backbone: insects, arachnids, mollusks, worms) vs Vertebrates (possess backbone: fish, amphibians, reptiles, birds, mammals). Insect features: 3 body segments (head, thorax, abdomen), 3 pairs of jointed legs, exoskeleton of chitin. Metamorphosis: Complete (Egg ➔ Larva ➔ Pupa ➔ Adult, e.g., butterfly, housefly, honeybee) vs Incomplete (Egg ➔ Nymph ➔ Adult, e.g., locust, grasshopper, cockroach).",
            "objectives": [
              "Distinguish between invertebrates and vertebrates with animal kingdom examples.",
              "Identify the diagnostic anatomical characteristics of class Insecta.",
              "Contrast complete metamorphosis with incomplete metamorphosis.",
              "Explain the ecological and agricultural importance of insects in Ethiopia (honeybees vs desert locusts)."
            ],
            "keyFormulas": "Complete Metamorphosis = 4 Stages (Egg ➔ Larva ➔ Pupa ➔ Adult) | Incomplete = 3 Stages (Egg ➔ Nymph ➔ Adult)"
          },
          "questions": [
            "What is the fundamental difference between the life cycle of a butterfly and that of a desert locust?",
            "Why are honeybees of monumental economic importance to Ethiopia?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🦋 1. Insect Characteristics & Metamorphosis</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Insects are the most diverse group of animals on Earth. Key traits:<br>\n                  • Body divided into <strong>3 regions</strong>: Head (antennae, compound eyes), Thorax (3 pairs of walking legs, 1-2 pairs of wings), and Abdomen (spiracles for breathing).<br>\n                  • <strong>Complete Metamorphosis (Holometabolous - 4 stages):</strong><br>\n                  - <strong>Egg ➔ Larva (caterpillar/maggot, voracious eater) ➔ Pupa (chrysalis, non-feeding resting stage of complete reorganization) ➔ Adult.</strong><br>\n                  - Examples: Butterflies, moths, houseflies, mosquitoes, honeybees.<br>\n                  • <strong>Incomplete Metamorphosis (Hemimetabolous - 3 stages):</strong><br>\n                  - <strong>Egg ➔ Nymph (resembles small wingless adult, molts repeatedly) ➔ Adult.</strong><br>\n                  - Examples: Grasshoppers, desert locusts, cockroaches, dragonflies.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">🍯 2. Economically Important Insects in Ethiopia</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Honeybees (Apis mellifera):</strong> Social insects with queen, drones, and workers. Ethiopia is the leading producer of honey and beeswax in Africa. Crucial pollinators of crops (coffee, oilseeds, fruits).<br>\n                  • <strong>Silkworms:</strong> Cultivated for silk thread production (sericulture).<br>\n                  • <strong>Harmful Insects:</strong> Desert Locust (<em>Schistocerca gregaria</em>, devastating swarms that consume entire crop fields), Mosquitoes (malaria, yellow fever vectors), Tsetse fly (transmits trypanosomiasis/sleeping sickness in livestock).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Classifying Metamorphosis of Housefly vs Desert Locust",
            "problem": "Contrast the developmental stages of a housefly with a desert locust and identify which undergoes a resting pupal stage.",
            "steps": [
              {
                "label": "Step 1: Housefly life cycle",
                "text": "Egg ➔ Maggot (Larva) ➔ Puparium (Pupa) ➔ Winged Adult. This is <strong>Complete Metamorphosis</strong> (4 distinct stages)."
              },
              {
                "label": "Step 2: Desert locust life cycle",
                "text": "Egg ➔ Hopper (Nymph) ➔ Winged Adult. This is <strong>Incomplete Metamorphosis</strong> (3 stages, no pupa)."
              },
              {
                "label": "Step 3: Identify pupal stage",
                "text": "The <strong>housefly</strong> undergoes the resting pupal stage, during which larval tissues break down and reassemble into the adult body plan."
              }
            ],
            "proTip": "Remember: If it has a \"pupa\" or \"chrysalis\", it is Complete Metamorphosis. Nymphs that look like mini-adults mean Incomplete!"
          },
          "reciteFlashcards": [
            {
              "q": "How many pairs of walking legs do adult insects possess?",
              "a": "3 pairs (6 legs total), attached to the thorax."
            },
            {
              "q": "What are the 4 stages of complete metamorphosis?",
              "a": "Egg ➔ Larva ➔ Pupa ➔ Adult."
            },
            {
              "q": "Which insect is the premier pollinator and honey producer in Ethiopia?",
              "a": "The honeybee (Apis mellifera)."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following insects develops through INCOMPLETE metamorphosis (Egg ➔ Nymph ➔ Adult), lacking a pupal stage?",
              "options": [
                "Desert locust",
                "Honeybee",
                "Housefly",
                "Anopheles mosquito"
              ],
              "correct": 0,
              "strategy": "Locusts, grasshoppers, and cockroaches hatch as nymphs that resemble miniature adults.",
              "derivation": "Desert locusts undergo incomplete metamorphosis with only 3 stages: egg, nymph (hopper), and adult. Bees, flies, and mosquitoes all have a pupal stage.",
              "trap": "Assuming all insects have a caterpillar/grub/pupa stage."
            },
            {
              "q": "According to the principles of Animal Diversity & Insect Metamorphosis, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Animal Diversity & Insect Metamorphosis.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Animal Diversity & Insect Metamorphosis, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u5",
      "number": "Unit 5",
      "title": "Matter and Chemical Reactions",
      "bigIdea": "Explore elements, compounds, mixtures, chemical symbols, formulas, and physical vs chemical changes.",
      "subtopics": [
        {
          "id": "g7-sci-5.1",
          "code": "5.1",
          "title": "Elements, Compounds, Mixtures & Physical/Chemical Changes",
          "survey": {
            "blueprint": "Matter classification: Pure substances (Elements: cannot be broken down chemically, e.g., Iron, Oxygen; Compounds: 2+ elements chemically combined in fixed ratios, e.g., Water H₂O, Salt NaCl) vs Mixtures (Homogeneous: uniform solutions; Heterogeneous: non-uniform suspensions). Physical change (reversible, no new substance, e.g., melting ice) vs Chemical change (irreversible, new substance formed with heat/gas/color change, e.g., rusting iron, burning wood).",
            "objectives": [
              "Distinguish between elements, compounds, and mixtures with everyday examples.",
              "Contrast homogeneous mixtures (solutions) with heterogeneous mixtures.",
              "Differentiate physical changes from chemical changes based on reversibility and new substance formation."
            ],
            "keyFormulas": "Law of Conservation of Mass: Mass of Reactants = Mass of Products in any closed chemical reaction"
          },
          "questions": [
            "Why is dissolving table salt in water a physical change, but burning magnesium ribbon a chemical change?",
            "What makes water (H₂O) a compound rather than a mixture of hydrogen and oxygen gases?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">⚛️ 1. Elements, Compounds & Mixtures</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Element:</strong> A pure substance composed of only one type of atom that cannot be chemically decomposed into simpler substances (e.g., Gold [Au], Iron [Fe], Oxygen [O₂]).<br>\n                  • <strong>Compound:</strong> A substance formed when two or more different elements chemically combine in a fixed mass ratio (e.g., Pure Water [H₂O], Carbon Dioxide [CO₂], Sodium Chloride [NaCl]). Compounds have entirely different properties from their constituent elements (e.g., flammable H₂ gas + combustion-supporting O₂ gas form liquid water H₂O that extinguishes fire!).<br>\n                  • <strong>Mixture:</strong> Physical combination of two or more substances where each retains its chemical identity and can be separated by physical means (filtration, distillation, evaporation, magnets).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">🔥 2. Physical vs Chemical Changes</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-cyan-300\">Physical Change:</strong><br>\n                    • No new chemical substance formed.<br>\n                    • Easily reversible (usually).<br>\n                    • Examples: Ice melting to water, dissolving sugar in tea, chopping firewood, boiling ethanol.\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-rose-300\">Chemical Change:</strong><br>\n                    • New substance with new chemical properties formed.<br>\n                    • Not easily reversible.<br>\n                    • Evidence: Gas evolution (bubbles), temperature change, precipitate formation, color change.<br>\n                    • Examples: Rusting iron, souring milk, combustion of charcoal, baking bread.\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Classifying Changes of Matter",
            "problem": "Classify each of the following everyday phenomena as a physical change or a chemical change: (a) Melting of butter in a pan, (b) Rusting of an iron roof nail, (c) Dissolving sugar in warm Ethiopian coffee, (d) Fermentation of teff dough to bake injera.",
            "steps": [
              {
                "label": "Part (a) Melting butter",
                "text": "Physical change: Only the physical state changes from solid to liquid; the chemical fat molecules remain identical."
              },
              {
                "label": "Part (b) Rusting nail",
                "text": "Chemical change: Iron reacts with oxygen and moisture to form iron(III) oxide (rust, Fe₂O₃), an entirely new compound."
              },
              {
                "label": "Part (c) Dissolving sugar",
                "text": "Physical change: Sugar molecules disperse among water molecules without changing their chemical structure; can be recovered by evaporating water."
              },
              {
                "label": "Part (d) Teff fermentation",
                "text": "Chemical change: Yeasts and bacteria biochemically convert carbohydrates into lactic acid, alcohol, and CO₂ bubbles (producing the tangy flavor and \"eyes\" of injera)."
              }
            ],
            "proTip": "If you can reverse the process simply by changing temperature or evaporating, it is almost always physical!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the primary difference between a compound and a mixture?",
              "a": "Compounds are chemically combined in fixed ratios; mixtures are physically mixed in any ratio and separated physically."
            },
            {
              "q": "Is the rusting of iron a physical or chemical change?",
              "a": "Chemical change (a new compound, iron oxide, is formed)."
            },
            {
              "q": "Give an example of a homogeneous mixture.",
              "a": "Saltwater solution or air."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following processes represents an unmistakable chemical change rather than a physical change?",
              "options": [
                "The rusting of an iron fence exposed to rain and air",
                "The melting of candle wax upon gentle heating",
                "The dissolving of common salt in a beaker of water",
                "The evaporation of alcohol from an open dish"
              ],
              "correct": 0,
              "strategy": "Look for the formation of an entirely new chemical substance.",
              "derivation": "Rusting involves iron reacting with oxygen and water to produce hydrated iron(III) oxide (Fe₂O₃·nH₂O), a new chemical substance with distinct properties.",
              "trap": "Confusing the phase change of wax or alcohol (physical) with chemical bond rearrangement."
            },
            {
              "q": "According to the principles of Elements, Compounds, Mixtures & Physical/Chemical Changes, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Elements, Compounds, Mixtures & Physical/Chemical Changes.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Elements, Compounds, Mixtures & Physical/Chemical Changes, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        },
        {
          "id": "g7-sci-5.2",
          "code": "5.2",
          "title": "Chemical Symbols, Formulas & Periodic Table Foundations",
          "survey": {
            "blueprint": "Chemical symbols: Berzelius notation using Latin/English names (H, O, C, N, Na [Natrium], Fe [Ferrum], Cu [Cuprum], Au [Aurum]). Chemical formula: Represents composition (H₂O has 2 H and 1 O atom; H₂SO₄ has 2 H, 1 S, 4 O atoms). Introduction to the Periodic Table: Dmitri Mendeleev; Periods (horizontal rows, 1-7) vs Groups (vertical columns, 1-18 with similar chemical properties).",
            "objectives": [
              "Write standard chemical symbols for common elements (H, He, C, N, O, Na, Mg, Al, S, Cl, K, Ca, Fe, Cu).",
              "Interpret chemical formulas to determine the total number of atoms of each element.",
              "Describe the organization of the periodic table into periods (rows) and groups (columns)."
            ],
            "keyFormulas": "Counting atoms in a formula: In 3 Ca(OH)₂, there are 3 Ca atoms, 6 O atoms, and 6 H atoms."
          },
          "questions": [
            "Why is the chemical symbol for sodium Na instead of So?",
            "How many total atoms of all elements are present in one molecule of sulfuric acid (H₂SO₄)?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🔤 1. Chemical Symbols and Latin Roots</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Chemical symbols consist of one capital letter, or one capital letter followed by a lower-case letter:<br>\n                  • Derived from English: Hydrogen (H), Carbon (C), Nitrogen (N), Oxygen (O), Calcium (Ca), Chlorine (Cl).<br>\n                  • Derived from Latin: Sodium = <strong>Na</strong> (<em>Natrium</em>), Potassium = <strong>K</strong> (<em>Kalium</em>), Iron = <strong>Fe</strong> (<em>Ferrum</em>), Copper = <strong>Cu</strong> (<em>Cuprum</em>), Silver = <strong>Ag</strong> (<em>Argentum</em>), Gold = <strong>Au</strong> (<em>Aurum</em>), Lead = <strong>Pb</strong> (<em>Plumbum</em>).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400\">📊 2. The Periodic Table Architecture</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Organized by Dmitri Mendeleev and refined by Henry Moseley (by atomic number):<br>\n                  • <strong>Periods:</strong> The <strong>7 horizontal rows</strong>. Across a period, atomic number increases by 1.<br>\n                  • <strong>Groups (Families):</strong> The <strong>18 vertical columns</strong>. Elements in the same group share identical valence electron numbers and similar chemical reactivities:<br>\n                  - Group 1: Alkali Metals (Li, Na, K - extremely reactive with water).<br>\n                  - Group 2: Alkaline Earth Metals (Mg, Ca).<br>\n                  - Group 17: Halogens (F, Cl, Br, I - highly reactive non-metals).<br>\n                  - Group 18: Noble / Inert Gases (He, Ne, Ar - unreactive, complete octet).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Atom Counting in Chemical Formulas",
            "problem": "Calculate the total number of atoms of each element in two formula units of aluminum sulfate, 2 Al₂(SO₄)₃.",
            "steps": [
              {
                "label": "Step 1: Aluminum (Al) atoms",
                "text": "Subscript is 2. Multiplied by coefficient 2: 2 × 2 = <strong>4 Al atoms</strong>."
              },
              {
                "label": "Step 2: Sulfur (S) atoms",
                "text": "Inside parentheses subscript is 1. Outside parentheses is 3. Multiplied by coefficient 2: 2 × (1 × 3) = <strong>6 S atoms</strong>."
              },
              {
                "label": "Step 3: Oxygen (O) atoms",
                "text": "Inside parentheses subscript is 4. Outside is 3. Multiplied by coefficient 2: 2 × (4 × 3) = <strong>24 O atoms</strong>."
              },
              {
                "label": "Step 4: Grand total",
                "text": "Total atoms = 4 + 6 + 24 = <strong>34 atoms</strong>."
              }
            ],
            "proTip": "A coefficient in front of a formula multiplies every single element in that entire formula!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the Latin name and chemical symbol for Iron?",
              "a": "Ferrum; symbol Fe."
            },
            {
              "q": "What do elements in the same vertical column (group) of the periodic table have in common?",
              "a": "Similar chemical properties and same number of valence electrons."
            },
            {
              "q": "Which group of the periodic table contains the unreactive noble gases?",
              "a": "Group 18."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the chemical symbol for the element Potassium, derived from its historical Neo-Latin name Kalium?",
              "options": [
                "K",
                "P",
                "Po",
                "Pt"
              ],
              "correct": 0,
              "strategy": "Potassium is represented by K (Kalium). P is Phosphorus, Po is Polonium, Pt is Platinum.",
              "derivation": "The chemical symbol for potassium is K, taken from its Latin root Kalium.",
              "trap": "Choosing P because the English name begins with P (P is phosphorus!)."
            },
            {
              "q": "According to the principles of Chemical Symbols, Formulas & Periodic Table Foundations, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Chemical Symbols, Formulas & Periodic Table Foundations.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Chemical Symbols, Formulas & Periodic Table Foundations, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u6",
      "number": "Unit 6",
      "title": "Force, Work, Energy & Power",
      "bigIdea": "Understand contact and non-contact forces, friction, Newton’s first law, work, kinetic and potential energy, and power.",
      "subtopics": [
        {
          "id": "g7-sci-6.1",
          "code": "6.1",
          "title": "Forces, Friction & Newton’s First Law of Motion",
          "survey": {
            "blueprint": "Force is a push or pull that changes state of rest, motion, direction, or shape. SI unit: Newton (N). Contact forces (Friction, Tension, Normal) vs Non-contact forces (Gravity, Magnetic, Electrostatic). Friction: opposes relative motion; Static vs Kinetic. Advantages (walking, braking) vs Disadvantages (wear, heat). Newton’s First Law (Law of Inertia): An object remains at rest or in uniform straight-line motion unless acted upon by a net external force.",
            "objectives": [
              "Define force and state its SI unit (Newton, N).",
              "Classify forces as contact or non-contact field forces.",
              "Explain the nature of friction and methods to increase or reduce it.",
              "State Newton’s First Law of Motion and explain the concept of inertia."
            ],
            "keyFormulas": "Weight: W = m · g (where g ≈ 9.8 m/s² on Earth) | Net Force: F_net = m · a"
          },
          "questions": [
            "Why does a passenger lurch forward when a public bus in Addis Ababa suddenly hits the brakes?",
            "What would happen to the motion of a soccer ball kicked in outer space where there is no gravity or friction?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">⚡ 1. Forces and Classification</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  A <strong>force</strong> is an interaction that, when unopposed, changes the motion of an object. Measured with a spring balance (dynamometer) in <strong>Newtons (N)</strong>:<br>\n                  • <strong>Contact Forces:</strong> Physical contact required:<br>\n                  - <em>Frictional force:</em> Opposes relative sliding motion between contacting surfaces.<br>\n                  - <em>Tension:</em> Pulling force transmitted through ropes/cables.<br>\n                  - <em>Normal force:</em> Perpendicular supporting force exerted by a surface.<br>\n                  • <strong>Non-Contact (Action-at-a-Distance) Forces:</strong> Act through empty space via fields:<br>\n                  - <em>Gravitational force:</em> Attraction between masses (Weight $W = mg$).<br>\n                  - <em>Electrostatic force:</em> Attraction/repulsion between electric charges.<br>\n                  - <em>Magnetic force:</em> Forces between magnetic poles.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">🚗 2. Friction: Types and Management</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Static Friction:</strong> Force preventing a stationary object from beginning to slide (always greater than kinetic friction).<br>\n                  • <strong>Kinetic (Sliding) Friction:</strong> Force resisting motion while sliding.<br>\n                  • <strong>Methods to Reduce Friction:</strong> Lubrication (oil/grease), ball bearings, streamlining, polishing surfaces.<br>\n                  • <strong>Methods to Increase Friction:</strong> Tread patterns on tires, spiked athletic shoes, spreading sand on icy roads.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400\">🛑 3. Newton’s First Law & Inertia</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  <strong>Newton’s First Law:</strong> <em>\"Every object continues in its state of rest, or of uniform motion in a straight line, unless acted upon by a net external force.\"</em><br>\n                  • <strong>Inertia:</strong> The natural resistance of any physical object to any change in its velocity. <strong>Mass is the quantitative measure of inertia</strong>—the greater the mass, the greater the inertia!\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Weight vs Mass Calculation",
            "problem": "An astronaut has a mass of 70 kg on Earth. Calculate the astronaut's weight (a) on Earth where g = 9.8 m/s², and (b) on the Moon where g = 1.6 m/s².",
            "steps": [
              {
                "label": "Step 1: Weight on Earth",
                "text": "W_earth = m × g_earth = 70 kg × 9.8 m/s² = <strong>686 N</strong>."
              },
              {
                "label": "Step 2: Weight on Moon",
                "text": "Mass remains 70 kg (mass never changes!). W_moon = 70 kg × 1.6 m/s² = <strong>112 N</strong>."
              },
              {
                "label": "Step 3: Key insight",
                "text": "Mass is constant everywhere; weight varies directly with gravitational field strength!"
              }
            ],
            "proTip": "Never confuse mass (in kg, scalar) with weight (in N, gravitational vector force)!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the SI unit of force?",
              "a": "Newton (N)."
            },
            {
              "q": "What physical quantity is the direct measure of an object’s inertia?",
              "a": "Mass (in kilograms)."
            },
            {
              "q": "What force keeps a car from skidding off a curved road?",
              "a": "Friction between tires and road."
            }
          ],
          "amtQuiz": [
            {
              "q": "When a city bus abruptly accelerates forward from a complete stop, the standing passengers stumble backward relative to the bus floor. Which law of physics directly accounts for this phenomenon?",
              "options": [
                "Newton’s First Law of Motion (Inertia)",
                "The Law of Conservation of Energy",
                "Pascal’s Principle of Pressure Transmission",
                "Archimedes’ Principle of Buoyancy"
              ],
              "correct": 0,
              "strategy": "Passengers have mass and thus inertia, resisting the sudden change in motion.",
              "derivation": "Due to inertia (Newton’s First Law), the passengers’ bodies tend to remain at rest while the bus accelerates forward underneath them, causing a relative backward stumble.",
              "trap": "Assuming an active backward force was exerted on the passengers."
            },
            {
              "q": "According to the principles of Forces, Friction & Newton’s First Law of Motion, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Forces, Friction & Newton’s First Law of Motion.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Forces, Friction & Newton’s First Law of Motion, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        },
        {
          "id": "g7-sci-6.2",
          "code": "6.2",
          "title": "Work, Forms of Energy, Conservation & Power",
          "survey": {
            "blueprint": "Work done: W = F · d (in Joules = N·m). Work is zero if displacement is zero or perpendicular to force. Kinetic Energy: KE = 1/2 m v². Gravitational Potential Energy: PE = m · g · h. Law of Conservation of Energy: Energy cannot be created or destroyed, only transformed from one form to another. Power: rate of doing work P = W / t (in Watts = J/s).",
            "objectives": [
              "Define mechanical work and calculate work using W = F · d.",
              "Distinguish between kinetic energy and gravitational potential energy.",
              "Apply the Law of Conservation of Energy to swinging pendulums and falling objects.",
              "Calculate electrical and mechanical power using P = W / t."
            ],
            "keyFormulas": "Work: W = F · d [J] | KE = 1/2 m v² [J] | PE = m · g · h [J] | Power: P = W / t [Watts (W)]"
          },
          "questions": [
            "If a person pushes against a solid stone wall with 500 N of force for one hour and the wall does not move, how much work was done?",
            "How is gravitational potential energy transformed into kinetic energy at the Grand Ethiopian Renaissance Dam (GERD)?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">⚙️ 1. Scientific Definition of Work</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  In physics, <strong>work is done</strong> only when a force causes displacement of an object in the direction of the force:<br>\n                  • Formula: <strong>Work = Force × Displacement</strong> ($W = F cdot d$).<br>\n                  • SI Unit: <strong>Joule (J)</strong> ($1\text{ J} = 1\text{ N} cdot \text{m}$).<br>\n                  • <em>Zero Work Condition:</em> If $d = 0$, $W = 0$. Holding a 20 kg sack of grain stationary on your shoulder requires physiological effort, but mechanical work done on the sack is strictly zero!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">⚡ 2. Kinetic vs Potential Energy</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-cyan-300\">Kinetic Energy (KE):</strong><br>\n                    • Energy of motion: <strong>$\text{KE} = \frac{1}{2}mv^2$</strong>.<br>\n                    • Depends on mass and square of velocity (doubling speed quadruples KE!).\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-amber-300\">Gravitational Potential Energy (PE):</strong><br>\n                    • Stored energy of height: <strong>$\text{PE} = mgh$</strong>.<br>\n                    • Water stored behind the GERD dam reservoir possesses enormous PE.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400\">💡 3. Power</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  <strong>Power</strong> is the rate at which work is done or energy is transferred:<br>\n                  • Formula: <strong>$\text{Power} = \frac{\text{Work}}{\text{Time}} = \frac{W}{t}$</strong>.<br>\n                  • SI Unit: <strong>Watt (W)</strong> ($1\text{ W} = 1\text{ Joule per second}$). $1\text{ kilowatt (kW)} = 1,000\text{ W}$.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Calculating Work and Power",
            "problem": "A construction crane in Addis Ababa lifts a 500 kg concrete block vertically through a height of 20 meters in 10 seconds. Taking g = 10 m/s², calculate (a) the work done by the crane, and (b) the power output of the crane.",
            "steps": [
              {
                "label": "Step 1: Calculate lifting force (Weight)",
                "text": "F = Weight = m × g = 500 kg × 10 m/s² = 5,000 N."
              },
              {
                "label": "Step 2: Calculate work done",
                "text": "W = F × d = 5,000 N × 20 m = <strong>100,000 Joules (100 kJ)</strong>."
              },
              {
                "label": "Step 3: Calculate power output",
                "text": "P = W / t = 100,000 J / 10 s = <strong>10,000 Watts = 10 kW</strong>."
              }
            ],
            "proTip": "Power measures how fast work is accomplished: two machines can do the exact same total work, but the one doing it in half the time has twice the power!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the SI unit of work and energy?",
              "a": "Joule (J)."
            },
            {
              "q": "What is the formula for gravitational potential energy?",
              "a": "PE = m · g · h."
            },
            {
              "q": "What is the SI unit of power?",
              "a": "Watt (W), equal to 1 Joule per second."
            }
          ],
          "amtQuiz": [
            {
              "q": "An electric motor does 6,000 Joules of work in lifting an elevator carriage in 12 seconds. What is the power delivered by the motor?",
              "options": [
                "500 W",
                "72,000 W",
                "50 W",
                "720 W"
              ],
              "correct": 0,
              "strategy": "Power formula is P = Work / time.",
              "derivation": "P = 6,000 J / 12 s = 500 Watts (W).",
              "trap": "Multiplying work by time (6,000 × 12) instead of dividing!"
            },
            {
              "q": "According to the principles of Work, Forms of Energy, Conservation & Power, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Work, Forms of Energy, Conservation & Power.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Work, Forms of Energy, Conservation & Power, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-sci-u7",
      "number": "Unit 7",
      "title": "Earth and the Solar System",
      "bigIdea": "Examine ecological habitats, food webs, Earth’s axial rotation, orbital revolution, and celestial mechanics of the solar system.",
      "subtopics": [
        {
          "id": "g7-sci-7.1",
          "code": "7.1",
          "title": "Ecosystems, Habitats & Food Relationships",
          "survey": {
            "blueprint": "Ecology: Study of interactions between living organisms and their environment. Ecosystem = Biotic (living: producers, consumers, decomposers) + Abiotic (non-living: sunlight, water, soil, temperature). Food Chain: Producer (green plant) ➔ Primary Consumer (herbivore) ➔ Secondary Consumer (carnivore) ➔ Tertiary Consumer (apex predator). Food Web: Interconnected food chains. 10% Energy Transfer Law (Lindeman).",
            "objectives": [
              "Distinguish between biotic and abiotic components of terrestrial and aquatic ecosystems.",
              "Construct food chains and food webs with Ethiopian flora and fauna.",
              "Explain the role of decomposers (bacteria and fungi) in nutrient recycling.",
              "Apply the 10% energy transfer rule across trophic levels."
            ],
            "keyFormulas": "10% Law: Approximately 10% of energy at one trophic level is transferred to the next level; 90% is lost as metabolic heat."
          },
          "questions": [
            "Why are food chains rarely longer than 4 or 5 trophic levels?",
            "What would happen to an acacia savannah ecosystem if all decomposers were eliminated?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🌿 1. Structure of an Ecosystem</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  An <strong>ecosystem</strong> is a biological community of interacting organisms and their physical environment:<br>\n                  • <strong>Abiotic Factors:</strong> Sunlight, ambient temperature, water availability, soil pH, and atmospheric gases.<br>\n                  • <strong>Biotic Components:</strong><br>\n                  - <em>Producers (Autotrophs):</em> Green plants, algae, and cyanobacteria that convert solar energy into chemical energy via photosynthesis.<br>\n                  - <em>Consumers (Heterotrophs):</em> Herbivores (primary), carnivores (secondary/tertiary), and omnivores.<br>\n                  - <em>Decomposers (Saprotrophs):</em> Bacteria and fungi that break down dead organic matter, recycling vital mineral nutrients back to the soil.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400\">⚡ 2. Trophic Levels & The 10% Energy Rule</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Trophic Level:</strong> The position an organism occupies in a food chain.<br>\n                  • <strong>Energy Pyramid:</strong> Only about <strong>10% of energy</strong> stored as biomass in one trophic level is passed to the next level. The remaining <strong>90% is dissipated as metabolic heat</strong> during respiration, excretion, and movement.<br>\n                  • <em>Example:</em> Grass (10,000 J) ➔ Zebra (1,000 J) ➔ Lion (100 J). This rapid energetic loss limits food chain length to 4-5 steps.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Calculating Energy Transfer in an Ethiopian Savannah",
            "problem": "In an Awash National Park food chain, acacia trees produce 40,000 kJ of chemical energy through photosynthesis. Calculate the energy available to (a) the gazelles feeding on acacia, and (b) the cheetahs preying on gazelles, assuming a 10% transfer efficiency.",
            "steps": [
              {
                "label": "Step 1: Energy at Primary Consumer level (Gazelle)",
                "text": "Energy = 10% of 40,000 kJ = 0.10 × 40,000 = <strong>4,000 kJ</strong>."
              },
              {
                "label": "Step 2: Energy at Secondary Consumer level (Cheetah)",
                "text": "Energy = 10% of 4,000 kJ = 0.10 × 4,000 = <strong>400 kJ</strong>."
              },
              {
                "label": "Step 3: Biological explanation",
                "text": "36,000 kJ is lost at the first transfer and 3,600 kJ is lost at the second transfer as metabolic heat and waste."
              }
            ],
            "proTip": "Energy flows unidirectionally through an ecosystem (dissipating into space), while chemical nutrients cycle endlessly!"
          },
          "reciteFlashcards": [
            {
              "q": "What percentage of energy is typically transferred from one trophic level to the next?",
              "a": "Approximately 10% (the 10% Law)."
            },
            {
              "q": "What is the ecological role of decomposers?",
              "a": "To break down dead organic matter and recycle mineral nutrients back to the soil."
            },
            {
              "q": "Give an example of a primary consumer in an Ethiopian grassland.",
              "a": "A grazing animal such as a zebra, gazelle, or walia ibex."
            }
          ],
          "amtQuiz": [
            {
              "q": "If clover plants in a meadow capture and store 50,000 Joules of energy from sunlight, approximately how many Joules of that energy will be incorporated into the body tissues of the cattle that feed on the clover?",
              "options": [
                "5,000 J",
                "50,000 J",
                "500 J",
                "50 J"
              ],
              "correct": 0,
              "strategy": "Apply the 10% energy transfer rule between trophic levels.",
              "derivation": "50,000 J × 10% (0.10) = 5,000 Joules of energy transferred to the primary consumers (cattle).",
              "trap": "Assuming 90% is transferred instead of 10%."
            },
            {
              "q": "According to the principles of Ecosystems, Habitats & Food Relationships, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Ecosystems, Habitats & Food Relationships.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Ecosystems, Habitats & Food Relationships, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        },
        {
          "id": "g7-sci-7.2",
          "code": "7.2",
          "title": "Earth’s Motions, Seasons & The Solar System",
          "survey": {
            "blueprint": "Earth Rotation: West to East on axis every 24 hours ➔ Day and Night. Earth Revolution: Orbit around Sun in 365.25 days along elliptical path with 23.5° axial tilt ➔ Four Seasons (Solstices & Equinoxes). Solar System: Sun (G-type star) + 8 Planets (Terrestrial: Mercury, Venus, Earth, Mars; Asteroid Belt; Jovian: Jupiter, Saturn, Uranus, Neptune). Earth internal structure: Crust, Mantle, Outer Core (liquid iron), Inner Core (solid iron).",
            "objectives": [
              "Distinguish between Earth’s rotation (day/night) and revolution (seasons).",
              "Explain how Earth’s 23.5° axial tilt creates seasonal temperature differences.",
              "Order the 8 planets from the Sun and distinguish terrestrial from gas giant planets.",
              "Describe the structural layers of planet Earth (crust, mantle, core)."
            ],
            "keyFormulas": "Rotation = 24 hours (day/night) | Revolution = 365 1/4 days (year) | Axial tilt = 23.5°"
          },
          "questions": [
            "Why does the Southern Hemisphere experience winter while Ethiopia experiences summer?",
            "What is the difference between the asteroid belt and the planets in terms of composition and location?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400\">🌍 1. Earth’s Rotation vs Revolution</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Rotation:</strong> The spinning of Earth on its internal axis from West to East once every <strong>24 hours</strong>. Causes the diurnal cycle of <strong>Day and Night</strong>, apparent motion of stars across the sky, and the Coriolis effect.<br>\n                  • <strong>Revolution:</strong> The orbital motion of Earth around the Sun along an elliptical orbit, completing one revolution in <strong>365.25 days</strong> (one calendar year).<br>\n                  • <strong>The Cause of Seasons:</strong> Earth’s axis is tilted at an angle of <strong>23.5°</strong> from the perpendicular to its orbital plane. As Earth revolves, the Northern and Southern hemispheres lean alternately toward or away from the Sun, altering the angle of incidence of sunlight and day length.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400\">🪐 2. The Solar System Architecture</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The solar system contains our Sun and 8 planets organized into two distinct groups:<br>\n                  • <strong>Terrestrial (Inner Rocky) Planets:</strong> Mercury (closest, extreme temperatures), Venus (\"morning/evening star\", dense CO₂ atmosphere, hottest planet due to runaway greenhouse effect), Earth (liquid water, life), Mars (\"Red planet\", iron oxide surface).<br>\n                  • <strong>Asteroid Belt:</strong> Vast ring of rocky debris orbiting between Mars and Jupiter.<br>\n                  • <strong>Jovian (Outer Gas Giant) Planets:</strong> Jupiter (largest planet, Great Red Spot), Saturn (spectacular ring system of ice and dust), Uranus (rotates on its side), Neptune (coldest, supersonic winds).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400\">🌋 3. Internal Structure of the Earth</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Crust:</strong> Outermost thin solid rock layer (continental crust: granitic, 30-70 km; oceanic crust: basaltic, 5-10 km).<br>\n                  • <strong>Mantle:</strong> Thickest layer (~2,900 km) of dense silicate rock; upper asthenosphere is semi-plastic and drives plate tectonics.<br>\n                  • <strong>Outer Core:</strong> Molten (liquid) iron and nickel; convection generates Earth’s magnetic field.<br>\n                  • <strong>Inner Core:</strong> Solid sphere of iron and nickel under tremendous pressure (~5,500°C).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Explaining Seasonal Changes",
            "problem": "State the two astronomical factors that combine to produce the change of seasons on Earth.",
            "steps": [
              {
                "label": "Factor 1: Axial Tilt",
                "text": "Earth’s rotational axis is tilted at <strong>23.5 degrees</strong> relative to its orbital plane."
              },
              {
                "label": "Factor 2: Orbital Revolution",
                "text": "Earth <strong>revolves around the Sun</strong> in an elliptical path once every 365.25 days."
              },
              {
                "label": "Conclusion",
                "text": "Together, tilt and revolution cause sunlight to strike different parts of Earth at varying angles throughout the year, producing seasons."
              }
            ],
            "proTip": "Seasons are NOT caused by Earth being closer or further from the Sun! In fact, Earth is closest to the Sun in January!"
          },
          "reciteFlashcards": [
            {
              "q": "What causes the cycle of day and night on Earth?",
              "a": "Earth’s rotation on its axis once every 24 hours."
            },
            {
              "q": "Why do we have four distinct seasons on Earth?",
              "a": "The 23.5° tilt of Earth’s axis combined with its revolution around the Sun."
            },
            {
              "q": "Which layer of the Earth is liquid and generates our magnetic field?",
              "a": "The Outer Core (molten iron and nickel)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the fundamental cause of the cycle of seasons throughout the year on planet Earth?",
              "options": [
                "The 23.5° tilt of Earth’s rotational axis as it revolves around the Sun",
                "The fluctuating distance between Earth and the Sun during elliptical orbit",
                "Cyclic changes in the heat output of the Sun",
                "Gravitational tidal forces exerted by the Moon"
              ],
              "correct": 0,
              "strategy": "Seasons result from the tilt directing hemisphere toward or away from the Sun.",
              "derivation": "The 23.5° axial tilt causes different hemispheres to receive varying angles of solar radiation and daylight hours during revolution, creating seasons.",
              "trap": "Believing seasons are caused by Earth moving closer to or further from the Sun."
            },
            {
              "q": "According to the principles of Earth’s Motions, Seasons & The Solar System, which statement represents a verified scientific fact?",
              "options": [
                "Scientific observations and experiments must be objective, measurable, and replicable by other researchers",
                "Scientific claims are based purely on unverified personal opinions and rumors",
                "Controlled variables in an experiment should be changed randomly during testing",
                "Measurements should avoid using standard SI metric units"
              ],
              "correct": 0,
              "strategy": "Reflect on core empirical requirements taught in Earth’s Motions, Seasons & The Solar System.",
              "derivation": "Science requires verifiable, replicable evidence gathered under controlled conditions with standard SI measurement units.",
              "trap": "Choosing unverified opinion or variable inconsistency."
            },
            {
              "q": "In practical laboratory and field studies related to Earth’s Motions, Seasons & The Solar System, what is the primary purpose of following standard safety guidelines and precise observation?",
              "options": [
                "To ensure valid, accurate data collection while preventing physical injury and laboratory hazards",
                "To speed up the experiment by skipping verification steps",
                "To eliminate the need for repeating trials in experiments",
                "To replace mathematical calculations with guesswork"
              ],
              "correct": 0,
              "strategy": "Safety and accuracy are paramount in scientific inquiry.",
              "derivation": "Standard safety protocols protect investigators from chemical and biological hazards, while precise methodology guarantees empirical reproducibility.",
              "trap": "Thinking safety protocols are merely optional formalities."
            }
          ]
        }
      ]
    }
  ]
};
