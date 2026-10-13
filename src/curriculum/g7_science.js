// Grade 7 General Science - Complete Ethiopian Curriculum Syllabus (Units 1 to 7)
module.exports = {
  id: 'science',
  name: 'General Science',
  icon: '🔬',
  units: [
    {
      id: 'g7-sci-u1',
      number: 'Unit 1',
      title: 'Basic Scientific Investigation',
      bigIdea: 'Understand the nature of science, laboratory safety practices, SI measurement units, and scientific inquiry.',
      subtopics: [
        {
          id: 'g7-sci-1.1',
          code: '1.1',
          title: 'The Scientific Method & Laboratory Safety',
          survey: {
            blueprint: 'Inquiry cycle: Observation ➔ Question ➔ Hypothesis ➔ Controlled Experiment ➔ Data Analysis ➔ Conclusion.',
            objectives: [
              'Explain the stages of the scientific method.',
              'Identify hazard warning symbols (Flammable, Corrosive, Toxic, Explosive, Biohazard).',
              'Distinguish between independent, dependent, and controlled variables.'
            ],
            keyFormulas: 'Density (ρ) = Mass (m) / Volume (V) [kg/m³ or g/cm³]'
          },
          questions: [
            'Why is a hypothesis defined as a testable prediction rather than an educated guess?',
            'What happens if an experiment does not keep controlled variables constant?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Core Scientific Inquiry & Safety</h4>
              <p>• <strong>Independent Variable:</strong> The factor deliberately altered or manipulated by the experimenter.<br>
              • <strong>Dependent Variable:</strong> The observed or measured variable that changes in response.<br>
              • <strong>Controlled Variables:</strong> All other conditions kept identical to guarantee experimental fairness.</p>
              <p>• <strong>Lab Safety Rules:</strong> Always wear goggles and lab coat. Never taste chemicals. When diluting acid, always add acid slowly to water (A&W rule), never water to acid.</p>
            </div>
          `,
          example: {
            title: 'Identifying Variables in Fertilizer Testing',
            problem: 'A student tests whether adding different masses of DAP fertilizer (0g, 5g, 10g, 15g) to teff plants affects plant height after 30 days. Identify the independent, dependent, and two controlled variables.',
            steps: [
              { label: 'Step 1: Identify independent variable', text: 'The mass of DAP fertilizer applied per pot (0g, 5g, 10g, 15g).' },
              { label: 'Step 2: Identify dependent variable', text: 'The height of the teff plants measured in centimeters.' },
              { label: 'Step 3: State controlled variables', text: 'Amount of daily water, sunlight exposure, soil type, and pot dimensions.' }
            ],
            proTip: 'A control group (0g fertilizer) is essential to provide a baseline for comparison!'
          },
          reciteFlashcards: [
            { q: 'What is the SI unit of thermodynamic temperature?', a: 'Kelvin (K).' },
            { q: 'What safety symbol depicts a skull and crossbones?', a: 'Toxic / Poisonous substance.' },
            { q: 'Why do we add acid to water instead of water to acid?', a: 'Adding water to concentrated acid releases extreme heat that causes dangerous acid splashing.' }
          ],
          amtQuiz: [
            {
              q: 'In a controlled experiment, which variable is purposefully changed by the investigator?',
              options: ['Dependent variable', 'Independent variable', 'Controlled variable', 'Extraneous variable'],
              correct: 1,
              strategy: 'Recall the definition of variables: "I change = Independent".',
              derivation: 'The independent variable is the single parameter manipulated by the scientist to observe its effect on the dependent outcome.',
              trap: 'Do not confuse independent (cause) with dependent (effect)!'
            },
            {
              q: 'A rock sample has a mass of 120 g and occupies a volume of 40 cm³. What is its density?',
              options: ['0.33 g/cm³', '3.0 g/cm³', '480 g/cm³', '80 g/cm³'],
              correct: 1,
              strategy: 'Apply the density formula: ρ = mass / volume.',
              derivation: 'ρ = 120 g / 40 cm³ = 3.0 g/cm³.',
              trap: 'Dividing volume by mass gives 40/120 = 0.33, which is the inverted reciprocal!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-sci-u2',
      number: 'Unit 2',
      title: 'Cell as the Basic Unit of Life',
      bigIdea: 'Examine cellular structure, plant versus animal organelles, microscope optics, and biological hierarchy.',
      subtopics: [
        {
          id: 'g7-sci-2.1',
          code: '2.1',
          title: 'Cell Structure & Organelle Functions',
          survey: {
            blueprint: 'Cell Theory: All living organisms are composed of cells. Plant cells have cell walls and chloroplasts; animal cells do not.',
            objectives: [
              'State the three tenets of the Cell Theory.',
              'Compare organelle structures between plant and animal cells.',
              'Calculate total microscope magnification.'
            ],
            keyFormulas: 'Total Magnification = Eyepiece Power × Objective Power'
          },
          questions: [
            'Why are chloroplasts found in plant cells but absent in animal cells?',
            'What is the physiological role of the selectively permeable cell membrane?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Cellular Anatomy & Organelles</h4>
              <p>• <strong>Nucleus:</strong> Contains genetic material (DNA/chromosomes) and directs all cellular activities.<br>
              • <strong>Mitochondria:</strong> The powerhouse of the cell; produces ATP energy through cellular aerobic respiration.<br>
              • <strong>Chloroplasts:</strong> Contain chlorophyll pigments; site of photosynthesis in photosynthetic plants.<br>
              • <strong>Cell Wall:</strong> Outer rigid cellulose structure giving shape and mechanical support to plant cells.<br>
              • <strong>Vacuole:</strong> Large central fluid-filled sac in plant cells storing sap and maintaining turgor pressure.</p>
            </div>
          `,
          example: {
            title: 'Microscope Lens Magnification Calculation',
            problem: 'A student observes an onion epidermal cell using a light microscope equipped with a 15× ocular lens and a 40× objective lens. Calculate total magnification.',
            steps: [
              { label: 'Step 1: Formula', text: 'Total Magnification = Ocular Lens × Objective Lens.' },
              { label: 'Step 2: Multiply', text: '15 × 40 = <strong>600×</strong>.' }
            ],
            proTip: 'Always focus using the low-power objective lens and coarse adjustment knob first before switching to high-power!'
          },
          reciteFlashcards: [
            { q: 'Which organelle is termed the "Powerhouse of the Cell"?', a: 'Mitochondrion (site of ATP production).' },
            { q: 'Name two organelles present in plant cells but absent in animal cells.', a: 'Cell wall and Chloroplasts (also large central vacuole).' },
            { q: 'What is the function of ribosomes?', a: 'Protein synthesis.' }
          ],
          amtQuiz: [
            {
              q: 'Which of the following structures is found in plant cells but NEVER in animal cells?',
              options: ['Cell membrane', 'Mitochondria', 'Cellulose cell wall', 'Endoplasmic reticulum'],
              correct: 2,
              strategy: 'Recall the definitive structural differences between plant and animal cells.',
              derivation: 'Plant cells have an external rigid cell wall made of cellulose for structural turgor; animal cells possess only a flexible phospholipid cell membrane.',
              trap: 'Both plant and animal cells have cell membranes and mitochondria!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-sci-u3',
      number: 'Unit 3',
      title: 'Human Biology and Health',
      bigIdea: 'Explore human organ systems: digestive, respiratory, and circulatory systems, along with nutrition and hygiene.',
      subtopics: [
        {
          id: 'g7-sci-3.1',
          code: '3.1',
          title: 'Human Digestive & Circulatory Systems',
          survey: {
            blueprint: 'Ingestion ➔ Digestion (Mouth, Stomach, Small Intestine) ➔ Absorption (Villi) ➔ Circulation (Heart, Blood) ➔ Assimilation ➔ Egestion.',
            objectives: [
              'Trace the path of food through the alimentary canal and identify digestive enzymes.',
              'Explain the function of heart chambers, arteries, veins, and capillaries.',
              'Identify the composition of blood (RBCs, WBCs, platelets, plasma).'
            ],
            keyFormulas: 'Blood Flow: Vena Cava ➔ Right Atrium ➔ Right Ventricle ➔ Lungs ➔ Left Atrium ➔ Left Ventricle ➔ Aorta'
          },
          questions: [
            'How do the microvilli in the small intestine enhance nutrient absorption efficiency?',
            'Why do arteries have thicker, more elastic muscular walls than veins?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Digestive & Circulatory Architecture</h4>
              <p>• <strong>Enzymes:</strong> Salivary amylase breaks starch into maltose; Pepsin in stomach breaks proteins into peptides; Lipase in small intestine breaks lipids into fatty acids and glycerol.<br>
              • <strong>Circulation:</strong> The human heart has 4 chambers. The left ventricle has the thickest muscular wall because it pumps oxygenated blood under high pressure to the entire systemic body.<br>
              • <strong>Blood Components:</strong> Red Blood Cells (carry oxygen via hemoglobin), White Blood Cells (immunity/phagocytosis), Platelets (blood clotting), Plasma (transport of dissolved nutrients/waste).</p>
            </div>
          `,
          example: {
            title: 'Blood Circulation Path Analysis',
            problem: 'Trace an oxygen molecule from an alveolus in the lung until it reaches a muscle cell in the leg.',
            steps: [
              { label: 'Step 1: Pulmonary diffusion', text: 'Oxygen diffuses from alveoli into pulmonary capillaries, binding to hemoglobin in RBCs.' },
              { label: 'Step 2: Heart transit', text: 'Blood returns via pulmonary veins to the Left Atrium ➔ Left Ventricle.' },
              { label: 'Step 3: Systemic distribution', text: 'Left Ventricle contracts forcefully, pumping blood through the Aorta to femoral arteries and leg capillaries.' }
            ],
            proTip: 'Pulmonary veins are the ONLY veins in the adult body carrying oxygen-rich blood!'
          },
          reciteFlashcards: [
            { q: 'Where does chemical digestion of carbohydrates begin?', a: 'In the mouth, by salivary amylase.' },
            { q: 'Which heart chamber pumps blood into the aorta to the rest of the body?', a: 'The Left Ventricle.' },
            { q: 'What is the primary function of blood platelets?', a: 'Blood clotting and wound healing.' }
          ],
          amtQuiz: [
            {
              q: 'Which blood vessel carries deoxygenated blood from the heart to the lungs?',
              options: ['Aorta', 'Pulmonary artery', 'Pulmonary vein', 'Superior vena cava'],
              correct: 1,
              strategy: 'Arteries carry blood AWAY from the heart. Pulmonary connects to lungs.',
              derivation: 'The pulmonary artery transports deoxygenated blood from the right ventricle into the lungs for re-oxygenation.',
              trap: 'Most arteries carry oxygenated blood, but the pulmonary artery is the exception!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-sci-u4',
      number: 'Unit 4',
      title: 'Reproduction in Plants and Animals',
      bigIdea: 'Understand asexual versus sexual reproduction, flower reproductive morphology, pollination, and human puberty.',
      subtopics: [
        {
          id: 'g7-sci-4.1',
          code: '4.1',
          title: 'Plant & Human Reproductive Systems',
          survey: {
            blueprint: 'Floral anatomy (Stamen = Anther + Filament; Pistil/Carpel = Stigma + Style + Ovary) & Human reproduction.',
            objectives: [
              'Identify the male and female organs of a flower.',
              'Contrast self-pollination with cross-pollination.',
              'Explain primary physical changes during puberty in males and females.'
            ],
            keyFormulas: 'Pollination ➔ Pollen Tube Growth ➔ Double Fertilization ➔ Ovule becomes Seed, Ovary becomes Fruit'
          },
          questions: [
            'What evolutionary advantages does cross-pollination offer over self-pollination?',
            'What is the biological significance of meiosis in gamete formation?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Reproduction & Growth Mechanisms</h4>
              <p>• <strong>Male Flower Parts (Stamen):</strong> Anther (produces pollen grains) and Filament (stalk).<br>
              • <strong>Female Flower Parts (Pistil/Carpel):</strong> Stigma (sticky surface receiving pollen), Style, and Ovary (contains ovules).<br>
              • <strong>Puberty Changes:</strong> Driven by testosterone in boys (deepening voice, facial hair, sperm production) and estrogen in girls (breast development, wider hips, menstruation).</p>
            </div>
          `,
          example: {
            title: 'Floral Structure to Fruit Transformation',
            problem: 'After successful fertilization in an apple flower, what do the ovary and ovule develop into?',
            steps: [
              { label: 'Step 1: Identify ovule fate', text: 'The fertilized ovule develops into the plant seed.' },
              { label: 'Step 2: Identify ovary fate', text: 'The surrounding floral ovary ripens into the fleshy fruit (the apple).' }
            ],
            proTip: 'Remember: Ovule = Seed, Ovary = Fruit!'
          },
          reciteFlashcards: [
            { q: 'What is the sticky female part of a flower that receives pollen?', a: 'The Stigma.' },
            { q: 'What type of cell division produces sperm and egg cells?', a: 'Meiosis (reduces chromosome count by half).' }
          ],
          amtQuiz: [
            {
              q: 'In flowering plants, following double fertilization, the ovary matures into the:',
              options: ['Seed', 'Fruit', 'Pollen grain', 'Embryo'],
              correct: 1,
              strategy: 'Recall the anatomical development of floral organs after fertilization.',
              derivation: 'The ovary walls thicken and mature into the pericarp/fruit enclosing the seeds.',
              trap: 'The ovule becomes the seed; the ovary becomes the fruit!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-sci-u5',
      number: 'Unit 5',
      title: 'Matter in Our Surroundings',
      bigIdea: 'Analyze physical and chemical properties, states of matter kinetic theory, and separation of mixtures.',
      subtopics: [
        {
          id: 'g7-sci-5.1',
          code: '5.1',
          title: 'States of Matter & Separation Techniques',
          survey: {
            blueprint: 'Solids, Liquids, Gases in terms of kinetic energy and intermolecular spacing. Separation methods: Filtration, Evaporation, Chromatography, Distillation.',
            objectives: [
              'Explain phase changes (Melting, Freezing, Vaporization, Condensation, Sublimation).',
              'Differentiate between physical and chemical changes with examples.',
              'Select appropriate separation techniques for heterogeneous and homogeneous mixtures.'
            ],
            keyFormulas: 'Kinetic Particle Theory: Solid (vibrating fixed) ➔ Liquid (sliding close) ➔ Gas (rapid random free)'
          },
          questions: [
            'Why does temperature remain constant during a substance’s phase change despite continuous heating?',
            'Which property difference allows simple distillation to separate ethanol from water?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Matter & Separation Science</h4>
              <p>• <strong>Physical Change:</strong> No new substance formed; reversible (e.g., ice melting, boiling water, dissolving salt).<br>
              • <strong>Chemical Change:</strong> New chemical bonds formed; irreversible (e.g., rusting iron, burning wood, souring milk).<br>
              • <strong>Separation Techniques:</strong><br>
                - <em>Filtration:</em> Insoluble solid from liquid (sand and water).<br>
                - <em>Evaporation / Crystallization:</em> Soluble solid from liquid (salt from water).<br>
                - <em>Simple Distillation:</em> Separates liquids based on differences in boiling points.<br>
                - <em>Fractional Distillation:</em> Miscible liquids with close boiling points (e.g., crude oil, ethanol-water).</p>
            </div>
          `,
          example: {
            title: 'Selecting a Separation Strategy for a Mixture',
            problem: 'Design a laboratory method to recover both pure dry salt and pure sand from a dry mixture of salt and sand.',
            steps: [
              { label: 'Step 1: Dissolution', text: 'Add water to the mixture and stir. Salt dissolves in water (soluble); sand does not.' },
              { label: 'Step 2: Filtration', text: 'Pour through filter paper in a funnel. Sand remains on paper as residue; salt solution passes through as filtrate.' },
              { label: 'Step 3: Evaporation', text: 'Gently heat the filtrate in an evaporating dish until all water evaporates, leaving pure salt crystals.' }
            ],
            proTip: 'Rinse the sand residue with distilled water and dry it in an oven to obtain pure dry sand!'
          },
          reciteFlashcards: [
            { q: 'What is the direct phase transition from solid to gas called?', a: 'Sublimation (e.g., dry ice, iodine crystals).' },
            { q: 'Is the rusting of iron a physical or chemical change?', a: 'A chemical change (iron reacts with oxygen and water to form iron(III) oxide).' }
          ],
          amtQuiz: [
            {
              q: 'Which separation technique relies primarily on differences in boiling points of liquids?',
              options: ['Filtration', 'Chromatography', 'Distillation', 'Centrifugation'],
              correct: 2,
              strategy: 'Distillation involves boiling the more volatile liquid into vapor and condensing it back to liquid.',
              derivation: 'Distillation exploits difference in boiling points between volatile substances.',
              trap: 'Filtration separates by particle size, not boiling point!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-sci-u6',
      number: 'Unit 6',
      title: 'Elements, Compounds, and Chemical Reactions',
      bigIdea: 'Understand chemical symbols, writing simple chemical formulas, and identifying types of chemical reactions.',
      subtopics: [
        {
          id: 'g7-sci-6.1',
          code: '6.1',
          title: 'Chemical Formulas & Word Equations',
          survey: {
            blueprint: 'Elements (pure, 1 atom type) vs Compounds (chemically bonded in fixed ratio) vs Mixtures (physically blended). Law of Conservation of Mass.',
            objectives: [
              'Write chemical symbols for common elements (H, O, C, N, Na, Fe, Cu, Ca, Cl).',
              'Interpret chemical formulas such as H₂O, NaCl, CO₂, CaCO₃.',
              'Write and interpret balanced word equations for chemical reactions.'
            ],
            keyFormulas: 'Reactants ➔ Products &nbsp;|&nbsp; Mass of Reactants = Mass of Products'
          },
          questions: [
            'Why does a chemical equation need to be balanced?',
            'What is the difference between CO (carbon monoxide) and Co (cobalt)?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Chemical Language & Reactions</h4>
              <p>• <strong>Element:</strong> Substance that cannot be broken down into simpler substances by chemical means (e.g., Hydrogen H, Oxygen O).<br>
              • <strong>Compound:</strong> Two or more elements chemically combined in a fixed ratio (e.g., Water H₂O = 2 atoms H to 1 atom O).<br>
              • <strong>Word Equation Example:</strong><br>
                <em>Hydrogen + Oxygen ➔ Water</em><br>
                <em>Methane + Oxygen ➔ Carbon dioxide + Water</em></p>
            </div>
          `,
          example: {
            title: 'Interpreting Atoms in a Chemical Formula',
            problem: 'Calculate the total number of atoms and list each element present in one molecule of calcium carbonate (CaCO₃).',
            steps: [
              { label: 'Step 1: Identify elements', text: 'Ca = Calcium, C = Carbon, O = Oxygen.' },
              { label: 'Step 2: Count subscripts', text: '1 atom of Ca + 1 atom of C + 3 atoms of O.' },
              { label: 'Step 3: Sum total', text: '1 + 1 + 3 = <strong>5 total atoms</strong>.' }
            ],
            proTip: 'When no subscript is written, the number of atoms is implicitly 1!'
          },
          reciteFlashcards: [
            { q: 'What is the chemical symbol for Iron?', a: 'Fe (from the Latin ferrum).' },
            { q: 'What does the Law of Conservation of Mass state?', a: 'Mass is neither created nor destroyed in a chemical reaction.' }
          ],
          amtQuiz: [
            {
              q: 'How many total atoms are present in one molecule of glucose (C₆H₁₂O₆)?',
              options: ['3', '12', '24', '18'],
              correct: 2,
              strategy: 'Add all subscript numbers in the formula: 6 (C) + 12 (H) + 6 (O).',
              derivation: '6 + 12 + 6 = 24 atoms.',
              trap: 'Do not count the number of distinct elements (which is 3) instead of total atoms!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-sci-u7',
      number: 'Unit 7',
      title: 'Earth and Space Science',
      bigIdea: 'Study the layered structure of the Earth, plate tectonics, our solar system, and climate dynamics in Ethiopia.',
      subtopics: [
        {
          id: 'g7-sci-7.1',
          code: '7.1',
          title: 'Structure of the Earth & The Solar System',
          survey: {
            blueprint: 'Concentric Earth layers: Crust (solid thin) ➔ Mantle (semi-molten asthenosphere) ➔ Outer Core (liquid iron-nickel) ➔ Inner Core (solid iron-nickel).',
            objectives: [
              'Describe the four concentric layers of the Earth.',
              'Explain how convection currents in the mantle drive tectonic plate movement and create the Great Rift Valley.',
              'Name the 8 planets in order from the Sun.'
            ],
            keyFormulas: 'Planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune (My Very Educated Mother Just Served Us Noodles)'
          },
          questions: [
            'Why is the Earth’s inner core solid despite being hotter than the liquid outer core?',
            'How was the Main Ethiopian Rift Valley formed by tectonic divergence?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Earth Geophysics & Astronomical Mechanics</h4>
              <p>• <strong>Crust:</strong> Outermost rigid rock layer (continental crust: granite, oceanic crust: basalt).<br>
              • <strong>Mantle:</strong> Thickest layer (~2900 km). Heat from decay drives mantle convection currents.<br>
              • <strong>Core:</strong> Iron and nickel. Outer core liquid circulation generates Earth’s magnetic field shielding us from solar winds.<br>
              • <strong>Solar System:</strong> Terrestrial rocky inner planets (Mercury, Venus, Earth, Mars) and Jovian gas/ice giants (Jupiter, Saturn, Uranus, Neptune).</p>
            </div>
          `,
          example: {
            title: 'Tectonic Rift Formation Analysis',
            problem: 'Explain the geological mechanism causing the East African Rift System that divides the Ethiopian highlands.',
            steps: [
              { label: 'Step 1: Thermal upwelling', text: 'Magma plumes from the asthenosphere heat and elevate the crust beneath the Afar region.' },
              { label: 'Step 2: Divergent stretching', text: 'Tension causes the African plate to split into the Nubian and Somalian sub-plates.' },
              { label: 'Step 3: Graben faulting', text: 'The central block sinks between parallel normal faults, creating the deep Rift Valley floor.' }
            ],
            proTip: 'The Afar Depression is one of only two places on Earth where a mid-ocean ridge can be studied on dry land!'
          },
          reciteFlashcards: [
            { q: 'Which layer of Earth generates its protective magnetic field?', a: 'The liquid outer core (through circulating iron-nickel currents).' },
            { q: 'Which planet is closest to the Sun?', a: 'Mercury.' }
          ],
          amtQuiz: [
            {
              q: 'What causes the tectonic plates of the Earth’s crust to move slowly across the mantle?',
              options: ['Ocean tides', 'Convection currents in the mantle', 'Earth rotation speed', 'Solar magnetic storms'],
              correct: 1,
              strategy: 'Recall the driving engine of plate tectonics.',
              derivation: 'Heat from the deep Earth causes convection currents in the semi-fluid asthenosphere of the mantle, carrying the lithospheric plates along with them.',
              trap: 'Gravitational lunar tides affect ocean water, not mantle rock convection!'
            }
          ]
        }
      ]
    }
  ]
};
