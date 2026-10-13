const fs = require('fs');
const path = require('path');

console.log('Building Full Galactic SQ3R Master Platform with Strict Level Tests & All Subjects...');

// We will load g7_data.json as base and add Science, English, Social, Citizenship, IT for G7 & G8
const g7 = JSON.parse(fs.readFileSync(path.join(__dirname, 'g7_data.json'), 'utf8'));

// Add G7 Science
g7.science = {
  id: 'science', name: 'General Science', icon: '🔬',
  units: [
    {
      id: 'g7-s-u1', number: 'Unit 1', title: 'Basic Scientific Investigation',
      bigIdea: 'Understand the scientific method, laboratory safety symbols, and standard SI measurement units.',
      subtopics: [
        {
          id: 'g7-s-1.1', code: '1.1', title: 'The Scientific Method & Lab Safety',
          survey: {
            blueprint: 'Observation ➔ Question ➔ Hypothesis ➔ Controlled Experiment ➔ Data Analysis ➔ Conclusion.',
            objectives: [
              'List the six steps of the scientific inquiry method.',
              'Identify hazard symbols (Corrosive, Flammable, Toxic, Biohazard).',
              'Convert basic SI units for length (m), mass (kg), time (s), and volume (m³).'
            ],
            keyFormulas: 'Density = Mass / Volume (ρ = m/V)'
          },
          questions: [
            'What is the difference between an independent variable and a dependent variable?',
            'Why must an experiment have a control group?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Scientific Variables & Safety</h4>
              <p>• <strong>Independent Variable:</strong> The factor deliberately changed by the scientist.<br>
              • <strong>Dependent Variable:</strong> The factor measured in response.<br>
              • <strong>Controlled Variables:</strong> All other factors kept constant to ensure a fair test.</p>
            </div>
          `,
          example: {
            title: 'Identifying Variables in a Plant Growth Experiment',
            problem: 'A student tests how varying amounts of water affect the height of maize seedlings over 3 weeks. Identify the independent, dependent, and three controlled variables.',
            steps: [
              { label: 'Step 1: Independent variable', text: 'Amount of water given daily (changed by student).' },
              { label: 'Step 2: Dependent variable', text: 'Height of the maize seedlings (measured in cm).' },
              { label: 'Step 3: Controlled variables', text: 'Same soil type, same sunlight exposure, same pot size.' }
            ],
            proTip: 'Only change ONE independent variable at a time!'
          },
          reciteFlashcards: [
            { q: 'What is the SI unit of mass?', a: 'Kilogram (kg).' },
            { q: 'What does a skull and crossbones symbol mean in the lab?', a: 'Toxic / Poisonous material.' }
          ],
          amtQuiz: [
            {
              q: 'In an experiment, what is the purpose of a control group?',
              options: ['To provide a baseline for comparison', 'To test multiple variables simultaneously', 'To replace the hypothesis', 'To guarantee positive results'],
              correct: 0,
              strategy: 'Recall the definition of a controlled experiment.',
              derivation: 'A control group does not receive the experimental treatment, allowing scientists to compare and prove that the independent variable caused the observed effect.',
              trap: 'Assuming a control group is tested with extra variables!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-s-u2', number: 'Unit 2', title: 'Cell as the Basic Unit of Life',
      bigIdea: 'Explore plant vs animal organelles, microscope optics, and hierarchical tissue organization.',
      subtopics: [
        {
          id: 'g7-s-2.1', code: '2.1', title: 'Cell Structure & Organelle Functions',
          survey: {
            blueprint: 'Plant Cells (Cell wall, Chloroplasts, Large vacuole) vs Animal Cells (Membrane only, no chloroplasts).',
            objectives: [
              'Distinguish between plant and animal cellular structures under a microscope.',
              'Explain functions of nucleus, mitochondria, chloroplasts, ribosomes, and cell membrane.'
            ],
            keyFormulas: 'Total Magnification = Eyepiece Magnification × Objective Magnification'
          },
          questions: [
            'Why do plant cells require a rigid cell wall made of cellulose?',
            'What cellular process takes place inside mitochondria?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Cell Organelle Master Reference</h4>
              <p>• <strong>Nucleus:</strong> Command center holding DNA/genes.<br>
              • <strong>Mitochondria:</strong> Respiration site producing energy (ATP).<br>
              • <strong>Chloroplasts:</strong> Green plastids with chlorophyll for photosynthesis.<br>
              • <strong>Cell Wall:</strong> Rigid outer cellulose layer providing support in plants.</p>
            </div>
          `,
          example: {
            title: 'Microscope Total Magnification Calculation',
            problem: 'A student uses a microscope with a 10× eyepiece and a 40× high-power objective lens. Calculate total magnification.',
            steps: [
              { label: 'Step 1: State formula', text: 'Total Magnification = Eyepiece × Objective.' },
              { label: 'Step 2: Multiply', text: '10 × 40 = <strong>400×</strong>.' }
            ],
            proTip: 'Never add magnification numbers—always multiply them!'
          },
          reciteFlashcards: [
            { q: 'Which organelle is the powerhouse of the cell?', a: 'Mitochondria.' },
            { q: 'Do animal cells have chloroplasts?', a: 'No, never.' }
          ],
          amtQuiz: [
            {
              q: 'Which structure controls the movement of substances into and out of all cells?',
              options: ['Cell wall', 'Cell membrane', 'Cytoplasm', 'Vacuole'],
              correct: 1,
              strategy: 'Identify the selectively permeable barrier present in both plant and animal cells.',
              derivation: 'The cell membrane (plasma membrane) is selectively permeable and regulates transport in all living cells.',
              trap: 'Cell wall is fully permeable and found only in plants/fungi/bacteria!'
            }
          ]
        }
      ]
    }
  ]
};

// Add G7 English
g7.english = {
  id: 'english', name: 'English', icon: '📚',
  units: [
    {
      id: 'g7-e-u1', number: 'Unit 3', title: 'Traffic Rules & Modal Verbs',
      bigIdea: 'Express obligations, laws, friendly advice, and safety prohibitions using modal verbs.',
      subtopics: [
        {
          id: 'g7-e-3.1', code: '3.1', title: 'Modals of Obligation & Advice (Must, Should, Have to)',
          survey: {
            blueprint: 'Must (law/duty), Have to (external requirement), Should (advice), Must not (strict prohibition).',
            objectives: [
              'Use must and have to for strong legal obligations.',
              'Use should and ought to for recommendations and advice.',
              'Distinguish between must not (forbidden) and don\'t have to (optional).'
            ],
            keyFormulas: 'Subject + Modal + Base Infinitive Verb (No -s, no -ed)'
          },
          questions: [
            'Why is "He must wears a helmet" grammatically incorrect in English?',
            'What is the difference between "You must not go" and "You don\'t have to go"?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Modal Rules</h4>
              <p>• <strong>Must:</strong> Mandatory obligation by law or direct rule.<br>
              • <strong>Should:</strong> Helpful advice / best practice.<br>
              • <strong>Must not:</strong> Prohibited / against the rules.</p>
            </div>
          `,
          example: {
            title: 'School Safety Sentence Rewriting',
            problem: 'Complete the rule: "Pedestrians ___ cross the road when the pedestrian light is red." (Choose must not or don\'t have to).',
            steps: [
              { label: 'Step 1: Check meaning', text: 'Crossing on red light is illegal and dangerous (prohibition).' },
              { label: 'Step 2: Select modal', text: 'Use <strong>must not</strong>.' }
            ],
            proTip: '"Don\'t have to" means optional, whereas "must not" means forbidden!'
          },
          reciteFlashcards: [
            { q: 'What form of verb follows a modal auxiliary?', a: 'The base verb (bare infinitive).' }
          ],
          amtQuiz: [
            {
              q: 'You ___ stop your vehicle when the traffic light turns red.',
              options: ['might', 'should', 'could', 'must'],
              correct: 3,
              strategy: 'Traffic lights are mandatory legal requirements.',
              derivation: 'Laws require "must".',
              trap: 'Choosing "should" which implies advice rather than a mandatory law!'
            }
          ]
        }
      ]
    }
  ]
};

// Add G7 Social Studies
g7.social = {
  id: 'social', name: 'Social Studies', icon: '🌍',
  units: [
    {
      id: 'g7-ss-u1', number: 'Unit 1', title: 'Physical Geography of Ethiopia & The Horn',
      bigIdea: 'Understand the geological forces shaping Ethiopia’s highlands, plateaus, and the Great Rift Valley.',
      subtopics: [
        {
          id: 'g7-ss-1.1', code: '1.1', title: 'Landforms & The Great Rift Valley',
          survey: {
            blueprint: 'The Ethiopian plateau, escarpments, Rift Valley depression, and drainage basins.',
            objectives: [
              'Describe the formation of the Great East African Rift Valley.',
              'Classify traditional climatic zones: Kur, Dega, Weyna Dega, Kolla, Bereha.'
            ],
            keyFormulas: 'Weyna Dega: 1,500m - 2,300m elevation'
          },
          questions: [
            'Why does the Weyna Dega zone host the highest population density in Ethiopia?',
            'Which major river originates from Lake Tana?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-blue-400">Traditional Climatic Zones</h4>
              <p>• <strong>Dega:</strong> 2,300m - 3,300m (Cool; barley, wheat).<br>
              • <strong>Weyna Dega:</strong> 1,500m - 2,300m (Temperate; teff, coffee, maize).<br>
              • <strong>Kolla:</strong> 500m - 1,500m (Hot; sorghum, pastoralism).</p>
            </div>
          `,
          example: {
            title: 'Agro-Ecological Classification',
            problem: 'A farmer lives at 2,700m elevation where it is cool and grows barley. Identify the climatic zone.',
            steps: [
              { label: 'Step 1: Check elevation', text: '2,700m falls between 2,300m and 3,300m.' },
              { label: 'Step 2: Identify', text: 'This is the <strong>Dega</strong> zone.' }
            ],
            proTip: 'Weyna Dega stops at 2,300m; anything higher up to 3,300m is Dega!'
          },
          reciteFlashcards: [
            { q: 'Which major river basin flows westward to Sudan and Egypt?', a: 'The Abbay (Blue Nile).' }
          ],
          amtQuiz: [
            {
              q: 'Which Ethiopian agro-climatic zone is situated between 1,500m and 2,300m elevation?',
              options: ['Kolla', 'Bereha', 'Weyna Dega', 'Dega'],
              correct: 2,
              strategy: 'Recall the altitude brackets for traditional Ethiopian climate zones.',
              derivation: 'Weyna Dega spans 1,500m to 2,300m.',
              trap: 'Dega is 2,300m to 3,300m!'
            }
          ]
        }
      ]
    }
  ]
};

// Add G7 Citizenship
g7.citizenship = {
  id: 'citizenship', name: 'Citizenship', icon: '⚖️',
  units: [
    {
      id: 'g7-c-u1', number: 'Unit 1', title: 'Democracy & The Rule of Law',
      bigIdea: 'Explore democratic values, fundamental constitutional rights, and peaceful conflict resolution.',
      subtopics: [
        {
          id: 'g7-c-1.1', code: '1.1', title: 'Principles of Democracy & Mediation',
          survey: {
            blueprint: 'Rule of Law, citizen participation, equality before the law, and the 4-step mediation model.',
            objectives: [
              'Explain the principle of the Rule of Law.',
              'Apply the 4 steps of constructive mediation to resolve school disputes.'
            ],
            keyFormulas: 'Rule of Law: Equality of all before legal statutes'
          },
          questions: [
            'Why does the Rule of Law prevent abuse of power?',
            'What is the role of an impartial mediator in a conflict?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-purple-400">Pillars of Democratic Governance</h4>
              <p>• <strong>Popular Sovereignty:</strong> Power originates from the will of the people.<br>
              • <strong>Rule of Law:</strong> All individuals and state organs are subordinate to the law.<br>
              • <strong>Mediation Steps:</strong> Cool down ➔ Active listening ➔ Brainstorm win-win options ➔ Commit to agreement.</p>
            </div>
          `,
          example: {
            title: 'School Mediation Case Study',
            problem: 'Two students argue over a sports ball. What is the mediator\'s first duty?',
            steps: [
              { label: 'Step 1: Cool down', text: 'Separate both sides until calm without taking sides.' },
              { label: 'Step 2: Impartial dialogue', text: 'Facilitate a fair agreement where both can play.' }
            ],
            proTip: 'Mediators never judge or take sides; they guide parties to a fair solution!'
          },
          reciteFlashcards: [
            { q: 'What does "Rule of Law" mean?', a: 'Everyone is accountable under the law equally.' }
          ],
          amtQuiz: [
            {
              q: 'What is a core characteristic of democratic governance?',
              options: ['Arbitrary leadership', 'Citizen participation', 'Censorship of opinions', 'Unaccountable courts'],
              correct: 1,
              strategy: 'Recall the definition of democracy (demos + kratos).',
              derivation: 'Citizen participation through voting and civic duties is essential.',
              trap: 'Assuming democratic leaders have unlimited arbitrary power!'
            }
          ]
        }
      ]
    }
  ]
};

// Add G7 IT
g7.it = {
  id: 'it', name: 'Information Technology', icon: '💻',
  units: [
    {
      id: 'g7-it-u1', number: 'Unit 2', title: 'Computer Hardware & The IPOS Cycle',
      bigIdea: 'Understand the Input-Process-Output-Storage cycle and the components that drive personal computers.',
      subtopics: [
        {
          id: 'g7-it-2.1', code: '2.1', title: 'The IPOS Cycle & Storage Units',
          survey: {
            blueprint: 'Input (Keyboard, Mouse) ➔ Process (CPU) ➔ Output (Monitor) ➔ Storage (SSD, RAM, ROM).',
            objectives: [
              'Explain the functions of CPU, RAM, and ROM.',
              'Convert storage units: 1 Byte = 8 Bits, 1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB.'
            ],
            keyFormulas: '1 GB = 1,024 MB &nbsp;|&nbsp; 1 MB = 1,024 KB'
          },
          questions: [
            'Why does RAM lose its data when power is turned off (volatile)?',
            'How many megabytes are in 4 gigabytes?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">RAM vs. ROM</h4>
              <p>• <strong>RAM:</strong> Volatile working memory for active tasks.<br>
              • <strong>ROM:</strong> Non-volatile memory holding startup BIOS instructions.</p>
            </div>
          `,
          example: {
            title: 'Storage Conversion Problem',
            problem: 'A flash drive has 4 GB capacity. How many 2 MB songs can it store? (Use 1 GB = 1000 MB for basic estimation).',
            steps: [
              { label: 'Step 1: Convert GB to MB', text: '4 GB × 1000 MB/GB = <strong>4,000 MB</strong>.' },
              { label: 'Step 2: Divide by file size', text: '4,000 MB ÷ 2 MB/song = <strong>2,000 songs</strong>.' }
            ],
            proTip: 'Always convert both numbers to the same unit before dividing!'
          },
          reciteFlashcards: [
            { q: 'Which component is the brain of the computer?', a: 'CPU.' },
            { q: 'Is RAM volatile or non-volatile?', a: 'Volatile.' }
          ],
          amtQuiz: [
            {
              q: 'Which memory type retains its contents permanently even when the computer is turned off?',
              options: ['RAM', 'ROM', 'Cache', 'Virtual memory'],
              correct: 1,
              strategy: 'Recall the definition of non-volatile memory.',
              derivation: 'ROM (Read Only Memory) is non-volatile.',
              trap: 'RAM is volatile and wipes out when powered off!'
            }
          ]
        }
      ]
    }
  ]
};

console.log('Complete G7 Data constructed.');

// Construct Full G8 Data
const G8_DATA = {
  math: {
    id: 'math', name: 'Mathematics', icon: '📐',
    units: [
      {
        id: 'g8-m-u1', number: 'Unit 1', title: 'Square Roots and Cube Roots',
        bigIdea: 'Understand radicals, principal roots, irrational numbers, and calculating square and cube roots.',
        subtopics: [
          {
            id: 'g8-m-1.1', code: '1.1', title: 'Squares and Square Roots',
            survey: {
              blueprint: 'Perfect squares, radical symbol √, prime factorization method for roots.',
              objectives: [
                'Evaluate square roots of perfect square numbers.',
                'Estimate square roots of non-perfect square numbers between two consecutive integers.'
              ],
              keyFormulas: '√a² = |a| &nbsp;|&nbsp; √(ab) = √a × √b'
            },
            questions: [
              'Why does every positive real number have two square roots (+ and -)?',
              'How can prime factorization determine if a large number is a perfect square?'
            ],
            coreNotes: `
              <div class="p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <h4 class="font-bold text-indigo-400">Prime Factorization for Square Roots</h4>
                <p>If all prime factors in the prime factorization of a number have EVEN exponents, the number is a perfect square. The square root is obtained by halving each exponent.</p>
              </div>
            `,
            example: {
              title: 'Evaluating Square Root by Prime Factorization',
              problem: 'Find the square root of 576 using prime factorization.',
              steps: [
                { label: 'Step 1: Factorize 576', text: '576 = 2⁶ × 3².' },
                { label: 'Step 2: Halve the exponents', text: '√576 = 2^(6/2) × 3^(2/2) = 2³ × 3¹.' },
                { label: 'Step 3: Calculate product', text: '8 × 3 = <strong>24</strong>.' }
              ],
              proTip: 'If any prime factor has an odd exponent, the number is not a perfect square!'
            },
            reciteFlashcards: [
              { q: 'What is √225?', a: '15.' }
            ],
            amtQuiz: [
              {
                q: 'What is the value of √0.0064?',
                options: ['0.8', '0.08', '0.008', '0.04'],
                correct: 1,
                strategy: 'Convert to fraction: √(64/10000).',
                derivation: '√64 / √10000 = 8 / 100 = 0.08.',
                trap: '0.8 squared is 0.64, not 0.0064!'
              }
            ]
          }
        ]
      },
      {
        id: 'g8-m-u2', number: 'Unit 3', title: 'Linear Equations & Systems in Two Variables',
        bigIdea: 'Graph lines on the Cartesian plane, find slopes, and solve simultaneous systems of equations.',
        subtopics: [
          {
            id: 'g8-m-3.1', code: '3.1', title: 'Cartesian Coordinate System & Slope of a Line',
            survey: {
              blueprint: 'The 4 quadrants, plotting (x, y), slope formula m = (y₂ - y₁) / (x₂ - x₁), slope-intercept form y = mx + b.',
              objectives: [
                'Plot coordinates across all four quadrants.',
                'Calculate slope m between two given points.'
              ],
              keyFormulas: 'Slope m = (y₂ - y₁) / (x₂ - x₁) &nbsp;|&nbsp; y = mx + b'
            },
            questions: [
              'What is the slope of a horizontal line versus a vertical line?'
            ],
            coreNotes: `
              <div class="p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <h4 class="font-bold text-indigo-400">Slope Formula & Line Types</h4>
                <p>• Horizontal lines have a slope of <strong>0</strong>.<br>
                • Vertical lines have an <strong>undefined</strong> slope (division by zero).</p>
              </div>
            `,
            example: {
              title: 'Calculating Slope Between Two Coordinates',
              problem: 'Find the slope of the line passing through points A(-2, 3) and B(4, -9).',
              steps: [
                { label: 'Step 1: Identify coordinates', text: 'x₁ = -2, y₁ = 3, x₂ = 4, y₂ = -9.' },
                { label: 'Step 2: Apply slope formula', text: 'm = (y₂ - y₁) / (x₂ - x₁) = (-9 - 3) / (4 - (-2)) = -12 / 6 = <strong>-2</strong>.' }
              ],
              proTip: 'Watch out for double negatives in denominator: 4 - (-2) = 6!'
            },
            reciteFlashcards: [
              { q: 'What is the slope of y = 3x - 5?', a: 'm = 3.' }
            ],
            amtQuiz: [
              {
                q: 'What is the slope of the line passing through (1, 2) and (3, 8)?',
                options: ['3', '2', '4', '6'],
                correct: 0,
                strategy: 'm = (8 - 2) / (3 - 1).',
                derivation: 'm = 6 / 2 = 3.',
                trap: 'Dividing dx by dy gives 1/3!'
              }
            ]
          }
        ]
      }
    ]
  },
  science: {
    id: 'science', name: 'General Science', icon: '🔬',
    units: [
      {
        id: 'g8-s-u1', number: 'Unit 1', title: 'Acids, Bases & The pH Scale',
        bigIdea: 'Classify compounds by chemical properties, pH value (0 to 14), and acid-base neutralization reactions.',
        subtopics: [
          {
            id: 'g8-s-1.1', code: '1.1', title: 'Properties of Acids, Bases & Neutralization',
            survey: {
              blueprint: 'pH scale: 0-6 (Acidic), 7 (Neutral), 8-14 (Basic). Litmus reactions.',
              objectives: [
                'Predict litmus paper color changes in acids and bases.',
                'Write balanced neutralization equations: Acid + Base ➔ Salt + Water.'
              ],
              keyFormulas: 'HCl + NaOH ➔ NaCl + H₂O'
            },
            questions: [
              'What color does blue litmus paper turn in acidic lemon juice?'
            ],
            coreNotes: `
              <div class="p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <h4 class="font-bold text-emerald-400">Acids vs. Bases Summary</h4>
                <p>• <strong>Acids:</strong> Sour taste, pH < 7, turn blue litmus red.<br>
                • <strong>Bases:</strong> Bitter taste, slippery feel, pH > 7, turn red litmus blue.<br>
                • <strong>Neutralization:</strong> Acid + Base ➔ Salt + Water.</p>
              </div>
            `,
            example: {
              title: 'Predicting Litmus Color Reactions',
              problem: 'A solution has a pH of 11. Predict its effect on red litmus paper.',
              steps: [
                { label: 'Step 1: Check pH', text: 'pH 11 is greater than 7, so it is a base.' },
                { label: 'Step 2: Predict reaction', text: 'Bases turn <strong>red litmus paper blue</strong>.' }
              ],
              proTip: 'Base turns Blue (remember the B\'s)!'
            },
            reciteFlashcards: [
              { q: 'What is the pH of pure water?', a: '7 (Neutral).' }
            ],
            amtQuiz: [
              {
                q: 'What products are formed when hydrochloric acid reacts with sodium hydroxide?',
                options: ['Sodium chloride and water', 'Sodium hydride and chlorine', 'Hydrogen and oxygen', 'Acidic salt'],
                correct: 0,
                strategy: 'Recall the neutralization reaction: Acid + Base ➔ Salt + Water.',
                derivation: 'HCl + NaOH ➔ NaCl (Table salt) + H₂O.',
                trap: 'Assuming hazardous chemicals are formed!'
              }
            ]
          }
        ]
      }
    ]
  },
  english: {
    id: 'english', name: 'English', icon: '📚',
    units: [
      {
        id: 'g8-e-u1', number: 'Unit 2', title: 'The Passive Voice in Science',
        bigIdea: 'Transform active sentences into passive constructions to emphasize processes.',
        subtopics: [
          {
            id: 'g8-e-2.1', code: '2.1', title: 'Forming Present & Past Passive Sentences',
            survey: {
              blueprint: 'Object + be (is/are/was/were) + Past Participle (V3) (+ by Agent).',
              objectives: [
                'Convert active transitive sentences into passive voice.',
                'Use passive voice appropriately in scientific and reporting contexts.'
              ],
              keyFormulas: 'Passive = Object + Be + Past Participle (V3)'
            },
            questions: [
              'When should you use the passive voice instead of the active voice?'
            ],
            coreNotes: `
              <div class="p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <h4 class="font-bold text-amber-400">Passive Voice Formation</h4>
                <p>Active: <em>Farmers grow teff in Ethiopia.</em><br>
                Passive: <em>Teff <strong>is grown</strong> in Ethiopia by farmers.</em></p>
              </div>
            `,
            example: {
              title: 'Active to Passive Voice Transformation',
              problem: 'Rewrite in passive voice: "The technician sanitized the laboratory instruments."',
              steps: [
                { label: 'Step 1: Identify object', text: '"The laboratory instruments" (plural).' },
                { label: 'Step 2: Choose auxiliary', text: 'Past tense + plural = "were".' },
                { label: 'Step 3: Assemble', text: '<strong>"The laboratory instruments were sanitized by the technician."</strong>' }
              ],
              proTip: 'Make sure the auxiliary verb matches the new plural subject!'
            },
            reciteFlashcards: [
              { q: 'What is the past participle of "write"?', a: 'Written.' }
            ],
            amtQuiz: [
              {
                q: 'Choose the correct passive: "Coffee ___ in several regions of Ethiopia."',
                options: ['is grown', 'are grown', 'grew', 'growing'],
                correct: 0,
                strategy: '"Coffee" is uncountable singular, so use "is grown".',
                derivation: 'Coffee is grown in Ethiopia.',
                trap: 'Using "are grown" which requires a plural subject!'
              }
            ]
          }
        ]
      }
    ]
  },
  social: {
    id: 'social', name: 'Social Studies', icon: '🌍',
    units: [
      {
        id: 'g8-ss-u1', number: 'Unit 1', title: 'The Geography of Africa',
        bigIdea: 'Explore Africa’s major river systems, climatic zones, and environmental conservation.',
        subtopics: [
          {
            id: 'g8-ss-1.1', code: '1.1', title: 'African Continental Relief & Rivers',
            survey: {
              blueprint: 'Major rivers: Nile (longest), Congo (highest volume), Niger, Zambezi.',
              objectives: [
                'Compare lengths and discharge volumes of major African rivers.',
                'Identify causes of desertification in the Sahel region.'
              ],
              keyFormulas: 'Nile Length: 6,650 km'
            },
            questions: [
              'Which river carries the greatest water volume in Africa?'
            ],
            coreNotes: `
              <div class="p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-1">
                <h4 class="font-bold text-blue-400">African Drainage Facts</h4>
                <p>• <strong>Nile:</strong> Longest river in the world.<br>
                • <strong>Congo:</strong> Highest discharge volume due to equatorial rains.<br>
                • <strong>Lake Victoria:</strong> Largest freshwater lake in Africa.</p>
              </div>
            `,
            example: {
              title: 'River Volume vs Length Comparison',
              problem: 'Which river is longer: Nile or Congo? Which carries more volume?',
              steps: [
                { label: 'Step 1: Length', text: 'The Nile is longer (6,650 km vs 4,700 km).' },
                { label: 'Step 2: Volume', text: 'The Congo carries much more water volume.' }
              ],
              proTip: 'Do not confuse river length with river discharge volume!'
            },
            reciteFlashcards: [
              { q: 'What is the largest lake in Africa?', a: 'Lake Victoria.' }
            ],
            amtQuiz: [
              {
                q: 'Which river carries the greatest discharge volume of water in Africa?',
                options: ['Nile River', 'Congo River', 'Niger River', 'Zambezi River'],
                correct: 1,
                strategy: 'Recall the hydrology of the equatorial rainforest basin.',
                derivation: 'The Congo River has the highest water volume in Africa.',
                trap: 'Assuming the Nile carries the most water because it is the longest!'
              }
            ]
          }
        ]
      }
    ]
  },
  citizenship: {
    id: 'citizenship', name: 'Citizenship', icon: '⚖️',
    units: [
      {
        id: 'g8-c-u1', number: 'Unit 1', title: 'The Separation of Powers',
        bigIdea: 'Understand the three branches of democratic government: Legislative, Executive, and Judicial.',
        subtopics: [
          {
            id: 'g8-c-1.1', code: '1.1', title: 'Branches of Government & Checks and Balances',
            survey: {
              blueprint: 'Legislative (Makes laws), Executive (Enforces laws), Judicial (Interprets laws).',
              objectives: [
                'Explain the system of checks and balances.',
                'Describe the role of an independent judiciary.'
              ],
              keyFormulas: 'Tripartite balance of powers'
            },
            questions: [
              'What is the function of the Judiciary versus the Executive?'
            ],
            coreNotes: `
              <div class="p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <h4 class="font-bold text-purple-400">The 3 Branches</h4>
                <p>• <strong>Legislative:</strong> Parliament / House of Peoples\' Representatives.<br>
                • <strong>Executive:</strong> Prime Minister & Ministers enforcing policy.<br>
                • <strong>Judiciary:</strong> Independent courts interpreting the constitution.</p>
              </div>
            `,
            example: {
              title: 'Branch Classification Case',
              problem: 'Which branch rules whether a newly passed regulation violates human rights?',
              steps: [
                { label: 'Step 1: Check function', text: 'Interpreting the constitution and laws belongs to the courts.' },
                { label: 'Step 2: Identify branch', text: 'The <strong>Judicial Branch</strong>.' }
              ],
              proTip: 'Legislative makes laws; Judicial judges and interprets them!'
            },
            reciteFlashcards: [
              { q: 'Which branch enforces and executes laws?', a: 'The Executive.' }
            ],
            amtQuiz: [
              {
                q: 'Which branch of government is responsible for interpreting laws and administering justice?',
                options: ['Executive', 'Legislative', 'Judiciary', 'Electoral Board'],
                correct: 2,
                strategy: 'Recall the definition of the three branches of government.',
                derivation: 'The Judiciary interprets laws and resolves disputes.',
                trap: 'Executive enforces; Legislative writes laws!'
              }
            ]
          }
        ]
      }
    ]
  },
  it: {
    id: 'it', name: 'Information Technology', icon: '💻',
    units: [
      {
        id: 'g8-it-u1', number: 'Unit 2', title: 'Spreadsheet Formulas & Data Analysis',
        bigIdea: 'Master spreadsheet calculation formulas (=SUM, =AVERAGE, =MAX, =MIN) and data visualization.',
        subtopics: [
          {
            id: 'g8-it-2.1', code: '2.1', title: 'Spreadsheet Functions & Data Analysis',
            survey: {
              blueprint: 'Formulas start with =, Functions: SUM, AVERAGE, MAX, MIN, COUNT.',
              objectives: [
                'Write valid spreadsheet formulas with cell ranges.',
                'Identify syntax errors in formulas.'
              ],
              keyFormulas: '=SUM(A1:A10) &nbsp;|&nbsp; =AVERAGE(B1:B20)'
            },
            questions: [
              'What symbol MUST every spreadsheet formula begin with?'
            ],
            coreNotes: `
              <div class="p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                <h4 class="font-bold text-cyan-400">Essential Functions</h4>
                <p>• <code>=SUM(range)</code>: Adds all values.<br>
                • <code>=AVERAGE(range)</code>: Calculates arithmetic mean.<br>
                • <code>=MAX(range)</code>: Finds largest value.</p>
              </div>
            `,
            example: {
              title: 'Calculating Average Grade in Excel',
              problem: 'Write the formula to calculate the average score of cells B2, B3, B4, B5, B6.',
              steps: [
                { label: 'Step 1: Formula start', text: 'Must begin with equals sign "=". ' },
                { label: 'Step 2: Function & Range', text: '<code>=AVERAGE(B2:B6)</code>' }
              ],
              proTip: 'Never omit the "=" sign or Excel treats it as plain text!'
            },
            reciteFlashcards: [
              { q: 'What does =MAX(A1:A10) return?', a: 'The highest numerical value in range A1 to A10.' }
            ],
            amtQuiz: [
              {
                q: 'Which formula correctly computes the sum of cells A1 through A10?',
                options: ['SUM(A1:A10)', '=SUM(A1:A10)', '=ADD(A1:A10)', '=TOTAL(A1-A10)'],
                correct: 1,
                strategy: 'Formulas require = and the valid function name SUM.',
                derivation: '=SUM(A1:A10) is correct syntax.',
                trap: 'Omitting the equals sign will not calculate the sum!'
              }
            ]
          }
        ]
      }
    ]
  }
};

console.log('Complete G8 Data constructed.');

// Write the combined dataset to master_data.js
const fullDatabase = {
  7: g7,
  8: G8_DATA
};

fs.writeFileSync(path.join(__dirname, 'master_curriculum.json'), JSON.stringify(fullDatabase, null, 2));
console.log('master_curriculum.json written successfully.');
