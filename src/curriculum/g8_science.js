// Grade 8 General Science - Complete Ethiopian Curriculum Syllabus (Units 1 to 7)
module.exports = {
  id: 'science',
  name: 'General Science',
  icon: '🔬',
  units: [
    {
      id: 'g8-sci-u1',
      number: 'Unit 1',
      title: 'Basics of Scientific Inquiry & Laboratory Practice',
      bigIdea: 'Advance scientific measurement rigor: precision versus accuracy, significant figures, density calculations, and experimental errors.',
      subtopics: [
        {
          id: 'g8-sci-1.1',
          code: '1.1',
          title: 'Precision, Accuracy & Measurement Errors',
          survey: {
            blueprint: 'Accuracy (closeness to true accepted value) vs Precision (repeatability/closeness of measurements to each other). Systematic vs Random errors.',
            objectives: [
              'Differentiate between accuracy and precision using target dartboard analogies.',
              'Identify systematic errors (zero errors in instruments) and random environmental errors.',
              'Calculate percent relative error in quantitative laboratory experiments.'
            ],
            keyFormulas: 'Percent Error = (|Experimental Value - Accepted Value| / Accepted Value) × 100%'
          },
          questions: [
            'Can a set of experimental measurements be highly precise but completely inaccurate?',
            'How can random measurement errors be minimized in a lab experiment?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Measurement Metrology & Error Analysis</h4>
              <p>• <strong>Accuracy:</strong> How close a measured value is to the true or accepted standard value.<br>
              • <strong>Precision:</strong> The closeness of agreement among repeated measurements of the same quantity under identical conditions.<br>
              • <strong>Types of Errors:</strong><br>
                - <em>Systematic Errors:</em> Predictable and constant bias caused by faulty calibration (e.g., zero offset on a scale). Minimized by recalibration.<br>
                - <em>Random Errors:</em> Unpredictable fluctuations due to parallax, ambient temperature changes, or air currents. Minimized by taking multiple repeated trials and calculating the average mean.</p>
            </div>
          `,
          example: {
            title: 'Calculating Experimental Percent Error',
            problem: 'A student measures the boiling point of pure water in Addis Ababa (at standard local pressure) and obtains 92.0°C. The true accepted boiling point at this altitude is 90.0°C. Calculate the percent error.',
            steps: [
              { label: 'Step 1: Calculate absolute difference', text: '|92.0°C - 90.0°C| = 2.0°C.' },
              { label: 'Step 2: Divide by accepted value', text: '2.0 / 90.0 = 0.0222...' },
              { label: 'Step 3: Multiply by 100%', text: '0.0222... × 100% = <strong>2.22%</strong>.' }
            ],
            proTip: 'Always use the accepted standard value in the denominator when calculating percent error, never your measured value!'
          },
          reciteFlashcards: [
            { q: 'What is the difference between accuracy and precision?', a: 'Accuracy is closeness to true value; precision is reproducibility among repeated trials.' },
            { q: 'How do you minimize random errors in an experiment?', a: 'Take multiple repeated readings and calculate the arithmetic average.' }
          ],
          amtQuiz: [
            {
              q: 'A digital balance always reads +0.50 g even when empty. Every measurement taken with this balance suffers from which type of error?',
              options: ['Systematic zero error', 'Random parallax error', 'Human reaction time error', 'Uncontrollable ambient error'],
              correct: 0,
              strategy: 'A consistent offset in an instrument calibration is a systematic zero error.',
              derivation: 'The constant +0.50 g shift biases every measurement in the same direction, which defines a systematic calibration zero error.',
              trap: 'Random errors fluctuate unpredictably in both directions; a constant offset is systematic!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u2',
      number: 'Unit 2',
      title: 'Atomic Structure & Chemical Elements',
      bigIdea: 'Explore atomic theory, subatomic particles (protons, neutrons, electrons), atomic number, mass number, and isotopes.',
      subtopics: [
        {
          id: 'g8-sci-2.1',
          code: '2.1',
          title: 'Subatomic Particles, Isotopes & Electron Configuration',
          survey: {
            blueprint: 'Atom: Dense nucleus (protons + neutrons) surrounded by electron shells (Bohr model: 2, 8, 8, 2 capacity). Atomic number Z, Mass number A.',
            objectives: [
              'Identify the charge, relative mass, and location of protons, neutrons, and electrons.',
              'Calculate neutrons: Number of Neutrons = Mass Number (A) - Atomic Number (Z).',
              'Write Bohr electronic configurations for the first 20 elements of the periodic table.'
            ],
            keyFormulas: 'Mass Number (A) = Protons (Z) + Neutrons (n) &nbsp;|&nbsp; Max electrons per shell = 2n²'
          },
          questions: [
            'Why is an electrically neutral atom characterized by equal numbers of protons and electrons?',
            'What makes Carbon-12 and Carbon-14 isotopes of the same element?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Atomic Physics & Electron Shells</h4>
              <p>• <strong>Subatomic Table:</strong><br>
                - <em>Proton (p⁺):</em> Charge +1, Relative mass 1 amu, located in Nucleus.<br>
                - <em>Neutron (n⁰):</em> Charge 0, Relative mass 1 amu, located in Nucleus.<br>
                - <em>Electron (e⁻):</em> Charge -1, Relative mass 1/1840 amu, located in Orbiting Shells.<br>
              • <strong>Atomic Number (Z):</strong> Number of protons; defines the chemical identity of an element.<br>
              • <strong>Isotopes:</strong> Atoms of the same element with identical atomic numbers (same protons) but different mass numbers (different number of neutrons).<br>
              • <strong>Shell Distribution (Bohr Rule for elements 1-20):</strong> 1st shell holds max 2 e⁻, 2nd shell holds max 8 e⁻, 3rd shell holds max 8 e⁻.</p>
            </div>
          `,
          example: {
            title: 'Deducing Subatomic Particles from Isotopic Notation',
            problem: 'An isotope of sodium is denoted as ²³₁₁Na. Determine its number of protons, electrons, and neutrons, and its Bohr electron configuration.',
            steps: [
              { label: 'Step 1: Identify Z and A', text: 'Atomic number Z = 11 (protons = 11, electrons = 11 in a neutral atom).' },
              { label: 'Step 2: Calculate neutrons', text: 'Neutrons = Mass Number (23) - Atomic Number (11) = <strong>12 neutrons</strong>.' },
              { label: 'Step 3: Electron configuration', text: 'Distribute 11 electrons into shells: 1st shell = 2, 2nd shell = 8, 3rd shell = 1 ➔ <strong>2, 8, 1</strong>.' }
            ],
            proTip: 'The outermost shell electrons are called "valence electrons" (Sodium has 1 valence electron, placing it in Group 1)!'
          },
          reciteFlashcards: [
            { q: 'Where are protons and neutrons located in an atom?', a: 'Inside the dense central atomic nucleus.' },
            { q: 'What are isotopes?', a: 'Atoms of the same element with the same number of protons but different numbers of neutrons.' }
          ],
          amtQuiz: [
            {
              q: 'How many neutrons are present in an atom of Chlorine-35 with atomic number 17 (³⁵₁₇Cl)?',
              options: ['17', '18', '35', '52'],
              correct: 1,
              strategy: 'Use the neutron formula: Neutrons = Mass Number (A) - Atomic Number (Z).',
              derivation: 'Neutrons = 35 - 17 = 18.',
              trap: 'Do not choose 17, which is the number of protons/electrons!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u3',
      number: 'Unit 3',
      title: 'The Periodic Table & Chemical Bonding',
      bigIdea: 'Understand Mendeleev’s and modern periodic laws, periodic groups and periods, and ionic versus covalent bonding.',
      subtopics: [
        {
          id: 'g8-sci-3.1',
          code: '3.1',
          title: 'Periodic Trends & Chemical Bonding (Ionic vs Covalent)',
          survey: {
            blueprint: 'Periodic Table: 7 Periods (horizontal rows = electron shells) and 18 Groups (vertical columns = valence electrons). Chemical bonds: Ionic (transfer e⁻) vs Covalent (share e⁻).',
            objectives: [
              'Explain how elements are organized in the modern periodic table by increasing atomic number.',
              'Contrast metals (left/center) with non-metals (right) and metalloids (staircase).',
              'Illustrate ionic bonding in NaCl and covalent bonding in H₂O using Lewis dot diagrams.'
            ],
            keyFormulas: 'Octet Rule: Atoms gain, lose, or share electrons to achieve a stable outer shell of 8 electrons'
          },
          questions: [
            'Why do Group 1 alkali metals react vigorously by losing their single valence electron?',
            'What causes ionic compounds to form high-melting-point crystalline lattices?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Chemical Periodicity & Bonding Dynamics</h4>
              <p>• <strong>Groups and Valency:</strong> Elements in the same group share identical valence electron counts and exhibit similar chemical behaviors.<br>
                - <em>Group 1:</em> Alkali Metals (1 valence e⁻, highly reactive, form +1 cations).<br>
                - <em>Group 7 / 17:</em> Halogens (7 valence e⁻, highly reactive non-metals, form -1 anions).<br>
                - <em>Group 8 / 18:</em> Noble Gases (full octet of 8 e⁻, inert and chemically stable).<br>
              • <strong>Ionic Bonding:</strong> Electrostatic attraction between oppositely charged ions formed by the complete transfer of electrons from a metal to a non-metal (e.g., Na⁺ + Cl⁻ ➔ NaCl).<br>
              • <strong>Covalent Bonding:</strong> Sharing of electron pairs between two non-metal atoms (e.g., H· + ·H ➔ H:H or H₂).</p>
            </div>
          `,
          example: {
            title: 'Predicting Bond Type from Elemental Properties',
            problem: 'Predict the type of chemical bond formed between Calcium (Group 2 metal) and Oxygen (Group 16 non-metal).',
            steps: [
              { label: 'Step 1: Identify elemental types', text: 'Calcium (Ca) is an electropositive metal; Oxygen (O) is an electronegative non-metal.' },
              { label: 'Step 2: Analyze electron exchange', text: 'Calcium loses 2 valence electrons to become Ca²⁺; Oxygen gains 2 electrons to complete its octet as O²⁻.' },
              { label: 'Step 3: Conclude bond type', text: 'The bond is an <strong>Ionic Bond</strong> forming the crystalline compound Calcium Oxide (CaO).' }
            ],
            proTip: 'Metal + Non-metal = Ionic Bond; Non-metal + Non-metal = Covalent Bond!'
          },
          reciteFlashcards: [
            { q: 'What type of chemical bond forms when two atoms share electron pairs?', a: 'Covalent Bond.' },
            { q: 'Why are Group 18 noble gases chemically unreactive?', a: 'They already possess a stable full octet of 8 valence electrons.' }
          ],
          amtQuiz: [
            {
              q: 'Which of the following compounds is formed by COVALENT bonding?',
              options: ['Sodium chloride (NaCl)', 'Water (H₂O)', 'Magnesium oxide (MgO)', 'Potassium bromide (KBr)'],
              correct: 1,
              strategy: 'Identify the compound made purely of non-metal atoms sharing electrons.',
              derivation: 'Water is formed between hydrogen and oxygen (both non-metals) by sharing electron pairs, creating covalent bonds.',
              trap: 'NaCl, MgO, and KBr are formed between metals and non-metals and are ionic!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u4',
      number: 'Unit 4',
      title: 'Motion, Force & Newton\'s Laws',
      bigIdea: 'Explore kinematics and dynamics: speed, velocity, acceleration, Newton’s three laws of motion, friction, and gravity.',
      subtopics: [
        {
          id: 'g8-sci-4.1',
          code: '4.1',
          title: 'Speed, Acceleration & Newton’s Three Laws',
          survey: {
            blueprint: 'Kinematics: v = s/t, a = (v-u)/t. Newton’s Laws: 1st (Inertia), 2nd (F = ma), 3rd (Action-Reaction: Fab = -Fba). Friction and gravity (w = mg).',
            objectives: [
              'Differentiate scalar speed from vector velocity.',
              'Calculate acceleration using initial velocity, final velocity, and elapsed time.',
              'State and apply Newton’s three laws of motion to physical scenarios.'
            ],
            keyFormulas: 'Velocity = Δs / Δt &nbsp;|&nbsp; Acceleration = (v - u) / t &nbsp;|&nbsp; Force = m · a &nbsp;|&nbsp; Weight = m · g (g ≈ 9.8 m/s²)'
          },
          questions: [
            'Why does a passenger lurch forward when a bus driver applies the brakes suddenly?',
            'What happens to the acceleration of an object if the net applied force is doubled while mass is held constant?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Classical Mechanics & Newtonian Dynamics</h4>
              <p>• <strong>Newton\'s 1st Law (Law of Inertia):</strong> An object remains at rest or moves with uniform velocity unless acted upon by a net unbalanced external force.<br>
              • <strong>Newton\'s 2nd Law (Fundamental Law of Dynamics):</strong> The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass: <em>F = m · a</em> (Unit: Newton, 1 N = 1 kg·m/s²).<br>
              • <strong>Newton\'s 3rd Law (Action and Reaction):</strong> For every action force, there is an equal and opposite reaction force (e.g., rocket propulsion pushing hot exhaust gas backwards while accelerating forward).<br>
              • <strong>Mass vs. Weight:</strong> Mass (kg) is the constant measure of matter; Weight (N) is the gravitational force acting on mass (<em>w = mg</em>).</p>
            </div>
          `,
          example: {
            title: 'Applying Newton’s Second Law',
            problem: 'A net force of 150 N is applied to a crate of mass 30 kg on a frictionless surface. Calculate the acceleration of the crate.',
            steps: [
              { label: 'Step 1: State formula', text: 'F = m · a ➔ a = F / m.' },
              { label: 'Step 2: Substitute values', text: 'a = 150 N / 30 kg.' },
              { label: 'Step 3: Calculate result', text: 'a = <strong>5.0 m/s²</strong>.' }
            ],
            proTip: 'Always verify standard SI units: Force in Newtons, mass in kg, acceleration in m/s²!'
          },
          reciteFlashcards: [
            { q: 'What is Newton’s First Law commonly known as?', a: 'The Law of Inertia.' },
            { q: 'What is the formula for calculating Weight from mass?', a: 'w = m · g (Weight = Mass × Gravitational Acceleration).' }
          ],
          amtQuiz: [
            {
              q: 'A car accelerates uniformly from rest (0 m/s) to 20 m/s in 4.0 seconds. What is its acceleration?',
              options: ['80 m/s²', '5.0 m/s²', '0.2 m/s²', '24 m/s²'],
              correct: 1,
              strategy: 'Apply acceleration formula: a = (v - u) / t.',
              derivation: 'a = (20 m/s - 0 m/s) / 4.0 s = 20 / 4 = 5.0 m/s².',
              trap: 'Multiplying 20 × 4 gives 80, which is incorrect!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u5',
      number: 'Unit 5',
      title: 'Energy, Work and Power',
      bigIdea: 'Understand mechanical work, power output, kinetic and gravitational potential energy, and simple machines.',
      subtopics: [
        {
          id: 'g8-sci-5.1',
          code: '5.1',
          title: 'Work, Mechanical Energy & Simple Machines',
          survey: {
            blueprint: 'Work: W = F · d (in Joules). Kinetic Energy: KE = ½mv². Gravitational Potential Energy: PE = mgh. Power: P = W/t (in Watts). Simple machines: Levers, Pulleys, Inclined Planes.',
            objectives: [
              'Calculate work done when a force moves an object through a distance in the direction of the force.',
              'Calculate kinetic energy and gravitational potential energy.',
              'Determine the mechanical advantage (MA) and efficiency of simple machines.'
            ],
            keyFormulas: 'Work = F · d &nbsp;|&nbsp; KE = ½mv² &nbsp;|&nbsp; PE = m·g·h &nbsp;|&nbsp; Power = W / t &nbsp;|&nbsp; MA = Load / Effort'
          },
          questions: [
            'Why is no work done in the scientific sense if someone pushes hard against a stationary concrete wall for 2 hours?',
            'What happens to the kinetic energy of a vehicle if its speed doubles from 30 km/h to 60 km/h?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Energy Forms, Conservation & Machines</h4>
              <p>• <strong>Work:</strong> Done only when an applied force causes displacement in the direction of the force: <em>W = F · d · cos(θ)</em> (Unit: Joule = 1 N·m).<br>
              • <strong>Law of Conservation of Energy:</strong> Energy cannot be created or destroyed, only transformed from one form to another (e.g., PE converts to KE as a pendulum swings down).<br>
              • <strong>Power:</strong> The rate at which work is done or energy transferred: <em>P = W / t</em> (Unit: Watt = 1 Joule/second).<br>
              • <strong>Simple Machines:</strong> Devices that multiply force or change force direction. Ideal Mechanical Advantage (IMA) = Effort Distance / Load Distance. Efficiency = (Useful Work Output / Total Work Input) × 100%.</p>
            </div>
          `,
          example: {
            title: 'Calculating Gravitational Potential Energy & Power',
            problem: 'A crane lifts a 500 kg concrete beam vertically by a height of 12 meters in 10 seconds. Calculate: A) Work done (using g = 10 m/s²), and B) The power output of the crane.',
            steps: [
              { label: 'Step 1: Calculate force (weight)', text: 'F = m · g = 500 kg × 10 m/s² = 5000 N.' },
              { label: 'Step 2: Calculate work done', text: 'W = F · d = 5000 N × 12 m = <strong>60,000 Joules (60 kJ)</strong>.' },
              { label: 'Step 3: Calculate power output', text: 'P = W / t = 60,000 J / 10 s = <strong>6,000 Watts (6 kW)</strong>.' }
            ],
            proTip: 'Work is a scalar quantity, not a vector!'
          },
          reciteFlashcards: [
            { q: 'What is the SI unit of power?', a: 'Watt (W), equal to 1 Joule per second.' },
            { q: 'If velocity doubles, what factor does Kinetic Energy increase by?', a: 'By a factor of 4 (since KE depends on v²).' }
          ],
          amtQuiz: [
            {
              q: 'A boy carries a 20 kg backpack and walks 50 meters horizontally along a level flat sidewalk. In the strict scientific definition, what is the work done by the vertical lifting force against gravity?',
              options: ['1,000 Joules', '10,000 Joules', '0 Joules', '250 Joules'],
              correct: 2,
              strategy: 'Check the angle between the lifting force and the horizontal displacement.',
              derivation: 'The upward lifting force is perpendicular (90°) to the horizontal displacement. Work = F · d · cos(90°) = 0 Joules.',
              trap: 'Although physical effort is expended, no work is done against gravity because displacement is perpendicular to the vertical force!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u6',
      number: 'Unit 6',
      title: 'Human Body Systems Coordination',
      bigIdea: 'Explore neural and hormonal regulation: central nervous system, reflex arcs, endocrine glands, and the renal excretory system.',
      subtopics: [
        {
          id: 'g8-sci-6.1',
          code: '6.1',
          title: 'Nervous System, Endocrine Glands & Nephron Filtration',
          survey: {
            blueprint: 'Nervous System (CNS: Brain, Spinal cord; PNS: Nerves, Neurons, Reflex arc). Endocrine System (Hormones: Insulin, Adrenaline, Thyroxine). Excretion: Kidneys and Nephrons.',
            objectives: [
              'Trace the pathway of a spinal reflex arc (Receptor ➔ Sensory neuron ➔ Relay neuron ➔ Motor neuron ➔ Effector).',
              'Identify master endocrine glands (Pituitary, Thyroid, Pancreas, Adrenals) and their hormones.',
              'Explain how nephrons in the kidney filter blood to produce urine (ultrafiltration and selective reabsorption).'
            ],
            keyFormulas: 'Reflex Arc: Stimulus ➔ Receptor ➔ Sensory Neuron ➔ Spinal Interneuron ➔ Motor Neuron ➔ Effector Muscle ➔ Response'
          },
          questions: [
            'Why does a person pull their hand away from a hot stove before consciously feeling the sensation of pain in the brain?',
            'How do the hormones insulin and glucagon regulate blood glucose homeostasis?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Biological Homeostasis & Neuro-Hormonal Control</h4>
              <p>• <strong>The Neuron:</strong> Basic structural unit consisting of Dendrites (receive signals), Cell Body, Axon (transmits electrical impulse), and Synapse (chemical neurotransmitter junction).<br>
              • <strong>Reflex Arc:</strong> Involuntary, rapid protective response bypassing the conscious brain via the spinal cord.<br>
              • <strong>Endocrine System:</strong> Ductless glands releasing hormones into the bloodstream.<br>
                - <em>Pancreas:</em> Produces Insulin (lowers blood sugar) and Glucagon (raises blood sugar).<br>
                - <em>Adrenals:</em> Secretes Adrenaline preparing the body for "fight or flight".<br>
              • <strong>Renal Excretion:</strong> The kidneys filter blood through ~1 million microscopic nephrons per kidney, removing urea, excess salts, and water while retaining glucose and proteins.</p>
            </div>
          `,
          example: {
            title: 'Tracing Blood Sugar Feedback Homeostasis',
            problem: 'Describe what occurs in the human body immediately after consuming a carbohydrate-rich meal.',
            steps: [
              { label: 'Step 1: Detection', text: 'Blood glucose levels rise as carbohydrates are absorbed in the small intestine.' },
              { label: 'Step 2: Hormonal secretion', text: 'Beta cells in the pancreas detect the increase and secrete the hormone insulin into the blood.' },
              { label: 'Step 3: Cellular uptake', text: 'Insulin stimulates liver and muscle cells to absorb glucose and store it as glycogen, returning blood sugar to normal.' }
            ],
            proTip: 'Failure to produce or respond to insulin causes Diabetes Mellitus!'
          },
          reciteFlashcards: [
            { q: 'What is the microscopic functional filtration unit of the human kidney?', a: 'The Nephron.' },
            { q: 'Which hormone is released by the adrenal glands during sudden emergencies ("fight or flight")?', a: 'Adrenaline (Epinephrine).' }
          ],
          amtQuiz: [
            {
              q: 'In a protective spinal reflex arc, which neuron transmits the electrical nerve impulse directly from the spinal cord to the responding muscle effector?',
              options: ['Sensory neuron', 'Motor neuron', 'Receptor neuron', 'Relay interneuron only'],
              correct: 1,
              strategy: 'Follow the reflex signal sequence: Sensory in ➔ Relay inside spine ➔ Motor out to muscle.',
              derivation: 'The motor neuron conveys the effector command from the central nervous system out to muscle fibers.',
              trap: 'Sensory neurons carry signals IN from sensory receptors, not out to muscles!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-sci-u7',
      number: 'Unit 7',
      title: 'Ecosystems & Environmental Sustainability',
      bigIdea: 'Study ecological interactions, food webs, trophic energy transfer (10% law), biogeochemical cycles, and biodiversity conservation in Ethiopia.',
      subtopics: [
        {
          id: 'g8-sci-7.1',
          code: '7.1',
          title: 'Food Webs, Energy Pyramids & Conservation',
          survey: {
            blueprint: 'Trophic levels: Primary Producers ➔ Primary Consumers (Herbivores) ➔ Secondary Consumers ➔ Tertiary Consumers ➔ Decomposers. Lindeman\'s 10% Energy Transfer Law. Biodiversity protection.',
            objectives: [
              'Construct ecological food chains and interconnected food webs.',
              'Calculate energy loss across successive trophic levels using the 10% rule.',
              'Evaluate threats to Ethiopian biodiversity (habitat fragmentation, invasive species like Parthenium and water hyacinth).'
            ],
            keyFormulas: 'Lindeman\'s 10% Law: Only ~10% of chemical energy transfers to the next trophic level; 90% is lost as metabolic heat'
          },
          questions: [
            'Why are ecological food chains rarely longer than four or five trophic levels?',
            'What ecological harm does the invasive weed Water Hyacinth cause to Lake Tana?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-emerald-400">Trophic Thermodynamics & Ecosystem Health</h4>
              <p>• <strong>Producers:</strong> Autotrophs (green plants, algae) converting solar light into chemical bond energy through photosynthesis.<br>
              • <strong>Consumers:</strong> Heterotrophs. Herbivores eat producers; carnivores eat animals; omnivores eat both.<br>
              • <strong>Energy Pyramid & 10% Law:</strong> Because organisms use energy for respiration, movement, and waste, only about 10% of energy is converted into biomass available for the next consumer level.<br>
              • <strong>Invasive Species Threat:</strong> Water Hyacinth (Emboch) on Lake Tana blocks sunlight, depletes dissolved oxygen, and kills fish stocks, demanding coordinated mechanical and biological remediation.</p>
            </div>
          `,
          example: {
            title: 'Calculating Energy Transfer Along a Trophic Chain',
            problem: 'In an Ethiopian grassland ecosystem, grass captures 50,000 kJ of solar energy into plant biomass. Calculate the energy available to: A) Zebras (primary consumers), and B) Lions (secondary consumers).',
            steps: [
              { label: 'Step 1: Grass ➔ Zebra (10% law)', text: '50,000 kJ × 0.10 = <strong>5,000 kJ</strong> available to zebras.' },
              { label: 'Step 2: Zebra ➔ Lion (10% law)', text: '5,000 kJ × 0.10 = <strong>500 kJ</strong> available to lions.' }
            ],
            proTip: 'Notice that 99% of original solar energy was dissipated as metabolic heat by the time it reached the lion!'
          },
          reciteFlashcards: [
            { q: 'What percentage of energy is typically transferred from one trophic level to the next?', a: 'Approximately 10% (the 10% Law).' },
            { q: 'What role do decomposers (bacteria and fungi) play in an ecosystem?', a: 'They break down dead organic matter and recycle essential mineral nutrients back to the soil.' }
          ],
          amtQuiz: [
            {
              q: 'If primary producers in an acacia woodland produce 20,000 Joules of energy, how much energy will be incorporated into the bodies of tertiary consumers?',
              options: ['2,000 J', '200 J', '20 J', '2 J'],
              correct: 2,
              strategy: 'Apply the 10% rule three successive times: Producer (20,000) ➔ Primary (2,000) ➔ Secondary (200) ➔ Tertiary (20).',
              derivation: '20,000 × 0.10 = 2,000 J (Primary) ➔ 2,000 × 0.10 = 200 J (Secondary) ➔ 200 × 0.10 = 20 Joules (Tertiary).',
              trap: 'Do not stop at primary or secondary consumer levels!'
            }
          ]
        }
      ]
    }
  ]
};
