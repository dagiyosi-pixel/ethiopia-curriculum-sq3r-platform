const fs = require('fs');
const path = require('path');

const g7Science = require('../src/curriculum/g7_science.js');

// Unit 1: Basic Scientific Investigation (4 questions)
g7Science.units[0].subtopics[0].amtQuiz = [
  {
    q: 'In a controlled agricultural experiment testing teff crop yield with varying amounts of nitrogen fertilizer, what is the dependent variable?',
    options: [
      'The mass of nitrogen fertilizer applied per plot',
      'The total yield of teff harvested at maturity',
      'The quantity of irrigation water supplied',
      'The specific variety of teff seeds planted'
    ],
    correct: 1,
    strategy: 'The dependent variable is what is measured or observed in response to changing the independent variable.',
    derivation: 'The independent variable is the fertilizer amount (manipulated by the experimenter). The dependent variable is the measurable response: teff grain yield.',
    trap: 'Confusing the independent variable (fertilizer applied) with the dependent variable (yield obtained).'
  },
  {
    q: 'A piece of volcanic rock with a mass of 180 grams is placed into a graduated cylinder containing 60 mL of water. The water level rises to 90 mL. What is the density of the rock?',
    options: ['2.0 g/cm³', '6.0 g/cm³', '3.0 g/cm³', '0.5 g/cm³'],
    correct: 1,
    strategy: 'Use water displacement to find volume: V = V_final - V_initial, then apply ρ = m / V.',
    derivation: 'Volume V = 90 mL - 60 mL = 30 mL = 30 cm³. Density ρ = m / V = 180 g / 30 cm³ = 6.0 g/cm³.',
    trap: 'Dividing mass by initial volume (180/60 = 3) or final volume (180/90 = 2).'
  },
  {
    q: 'Why does the standard laboratory safety protocol mandate adding concentrated acid to water rather than water to concentrated acid ("A&W rule")?',
    options: [
      'Water is more dense than acid and will stay at the top',
      'Adding water to concentrated acid generates extreme localized heat that causes violent, explosive boiling and acid splashing',
      'Acid loses its chemical reactivity if mixed with water quickly',
      'Water evaporates immediately without changing temperature'
    ],
    correct: 1,
    strategy: 'Remember the exothermic heat of hydration: Always Add Acid (A&W).',
    derivation: 'Diluting concentrated acid is highly exothermic. Adding water to acid causes the water to boil instantly, spraying acid onto the chemist. Adding acid slowly to a large body of water allows the water to safely absorb the heat.',
    trap: 'Thinking water extinguishes the heat without realizing the violent splattering hazard.'
  },
  {
    q: 'Which of the following represents the correct fundamental SI base unit for thermodynamic temperature?',
    options: ['Degree Celsius (°C)', 'Degree Fahrenheit (°F)', 'Kelvin (K)', 'Joule (J)'],
    correct: 2,
    strategy: 'The SI base unit of temperature is Kelvin (K).',
    derivation: 'Kelvin (K) is the SI base unit of thermodynamic temperature. Celsius is derived, and Joule is energy.',
    trap: 'Selecting Celsius because it is commonly used on domestic thermometers.'
  }
];

// Unit 2: Cell as Basic Unit of Life (4 questions)
g7Science.units[1].subtopics[0].amtQuiz = [
  {
    q: 'Which of the following cellular structures is present in plant cells (such as onion skin cells) but completely absent in animal cells?',
    options: ['Mitochondria and Ribosomes', 'Cellulose Cell Wall and Chloroplasts', 'Nucleus and Cytoplasm', 'Endoplasmic Reticulum'],
    correct: 1,
    strategy: 'Plant cells have rigid outer cell walls and photosynthetic chloroplasts.',
    derivation: 'Plant cells possess a rigid cellulose cell wall, large central vacuole, and plastids/chloroplasts. Animal cells lack cell walls and chloroplasts.',
    trap: 'Selecting mitochondria, which are present in both plant and animal cells for respiration!'
  },
  {
    q: 'Which organelle is universally referred to as the "powerhouse of the cell" because it synthesizes cellular energy in the form of ATP through aerobic respiration?',
    options: ['Golgi apparatus', 'Ribosome', 'Mitochondrion', 'Lysosome'],
    correct: 2,
    strategy: 'Mitochondria produce ATP through cellular respiration.',
    derivation: 'Mitochondria oxidize glucose during cellular respiration to synthesize ATP molecules, providing energy for cellular metabolic activities.',
    trap: 'Confusing ribosomes (protein synthesis) with mitochondria (energy synthesis).'
  },
  {
    q: 'If a student observes an epidermal cell under a light microscope using a 10× ocular eyepiece and a 40× objective lens, what is the total magnification of the specimen?',
    options: ['50×', '400×', '300×', '4×'],
    correct: 1,
    strategy: 'Total Magnification = Eyepiece Magnification × Objective Magnification.',
    derivation: 'Total Magnification = 10 × 40 = 400×.',
    trap: 'Adding the magnifications (10 + 40 = 50) instead of multiplying them!'
  },
  {
    q: 'What is the primary function of the semi-permeable cell membrane (plasma membrane)?',
    options: [
      'Synthesizing genetic DNA molecules',
      'Regulating the movement of substances into and out of the cell',
      'Providing rigid structural support to keep the cell rigid like wood',
      'Carrying out photosynthesis in the dark'
    ],
    correct: 1,
    strategy: 'The plasma membrane is selectively permeable, controlling entry and exit.',
    derivation: 'The phospholipid bilayer of the cell membrane maintains homeostasis by controlling the passage of nutrients, waste, ions, and water.',
    trap: 'Confusing the flexible semi-permeable membrane with the rigid cellulose cell wall.'
  }
];

// Unit 3: Human Biology & Health (4 questions)
g7Science.units[2].subtopics[0].amtQuiz = [
  {
    q: 'In the human digestive tract, where does the majority of chemical digestion and nutrient absorption into the bloodstream occur?',
    options: ['The Stomach', 'The Small Intestine (Jejenum and Ileum)', 'The Large Intestine (Colon)', 'The Esophagus'],
    correct: 1,
    strategy: 'The small intestine is lined with villi and microvilli specifically for nutrient absorption.',
    derivation: 'The small intestine receives digestive enzymes from the pancreas and bile from the liver. Its inner walls have millions of microscopic finger-like projections (villi) that absorb amino acids, glucose, and fatty acids into capillaries and lacteals.',
    trap: 'Assuming the stomach absorbs nutrients; the stomach primarily breaks down proteins and churns food into chyme.'
  },
  {
    q: 'Which blood vessels carry oxygenated blood away from the heart to the rest of the body under high pressure?',
    options: ['Veins', 'Capillaries', 'Arteries', 'Lymphatic vessels'],
    correct: 2,
    strategy: 'Remember: Arteries carry blood Away from the heart.',
    derivation: 'Arteries have thick, muscular, elastic walls designed to withstand high pressure generated by ventricular contractions as blood is pumped away from the heart.',
    trap: 'Confusing veins (which carry deoxygenated blood back to the heart) with arteries.'
  },
  {
    q: 'Gas exchange in the human respiratory system occurs between the pulmonary capillaries and tiny microscopic air sacs called:',
    options: ['Bronchi', 'Alveoli', 'Trachea rings', 'Larynx folds'],
    correct: 1,
    strategy: 'Alveoli are the functional sites of oxygen and carbon dioxide diffusion.',
    derivation: 'Alveoli provide a huge surface area with walls only one cell thick, enabling rapid diffusion of oxygen into the blood and carbon dioxide out of the blood.',
    trap: 'Selecting bronchi or trachea, which are conducting airways, not exchange surfaces.'
  },
  {
    q: 'Which chamber of the human heart has the thickest muscular wall because it must pump blood to the entire systemic circulation of the body?',
    options: ['Right Atrium', 'Right Ventricle', 'Left Atrium', 'Left Ventricle'],
    correct: 3,
    strategy: 'The left ventricle pumps blood through the aorta to the whole body.',
    derivation: 'The left ventricle generates the highest systolic pressure to force oxygen-rich blood through the systemic circulation, requiring significantly thicker myocardium.',
    trap: 'Assuming right ventricle, which only pumps to the nearby lungs at lower pressure.'
  }
];

// Unit 4: Plant & Animal Reproduction (4 questions)
g7Science.units[3].subtopics[0].amtQuiz = [
  {
    q: 'What is the biological definition of pollination in flowering plants (angiosperms)?',
    options: [
      'The fusion of the male gamete with the female ovule in the ovary',
      'The transfer of pollen grains from the anther to the stigma of a flower',
      'The germination of a seed into a green seedling',
      'The dispersal of ripe fruits by birds and monkeys'
    ],
    correct: 1,
    strategy: 'Pollination is the transfer of pollen; fertilization is the actual fusion of gametes.',
    derivation: 'Pollination is the mechanical transfer of pollen grains from the male anther to the receptive female stigma (by wind, insects, or birds). Fertilization occurs afterward when the sperm nucleus unites with the egg cell inside the ovule.',
    trap: 'Confusing pollination (transfer) with fertilization (gamete fusion).'
  },
  {
    q: 'Which of the following insects undergoes complete metamorphosis (four distinct stages: Egg ➔ Larva ➔ Pupa ➔ Adult)?',
    options: ['Grasshopper', 'Cockroach', 'Butterfly', 'Termite'],
    correct: 2,
    strategy: 'Complete metamorphosis includes a pupal stage (chrysalis/cocoon).',
    derivation: 'Butterflies, houseflies, bees, and mosquitoes undergo complete metamorphosis (Egg ➔ Caterpillar/Larva ➔ Chrysalis/Pupa ➔ Adult). Grasshoppers and cockroaches undergo incomplete metamorphosis (Egg ➔ Nymph ➔ Adult).',
    trap: 'Grasshoppers have nymphs without a pupa stage (incomplete metamorphosis).'
  },
  {
    q: 'In plant sexual reproduction, following successful fertilization, what part of the flower develops into the seed and what part develops into the fruit?',
    options: [
      'Ovule develops into the seed, and Ovary develops into the fruit',
      'Ovary develops into the seed, and Stigma develops into the fruit',
      'Petal develops into the seed, and Anther develops into the fruit',
      'Sepal develops into the seed, and Filament develops into the fruit'
    ],
    correct: 0,
    strategy: 'Ovule = Seed; Ovary = Fruit.',
    derivation: 'After fertilization, the zygote and surrounding ovule mature into the seed, while the surrounding ovary wall swells and ripens into the fruit (pericarp).',
    trap: 'Reversing ovary and ovule.'
  },
  {
    q: 'Asexual reproduction (such as vegetative propagation in potatoes or binary fission in amoeba) produces offspring that are:',
    options: [
      'Genetically diverse with completely new traits',
      'Genetically identical clones of the single parent organism',
      'Infertile organisms unable to grow',
      'Always larger than sexually reproduced offspring'
    ],
    correct: 1,
    strategy: 'Asexual reproduction involves one parent and mitosis without gamete fusion.',
    derivation: 'Asexual reproduction involves a single organism replicating its genome without meiosis or fertilization, producing genetically identical clones.',
    trap: 'Assuming genetic diversity, which only arises through sexual reproduction.'
  }
];

// Unit 5: Matter and Chemical Reactions (4 questions)
g7Science.units[4].subtopics[0].amtQuiz = [
  {
    q: 'According to the Law of Conservation of Mass, what happens to the total mass of substances involved in a chemical reaction in a closed system?',
    options: [
      'The mass increases as chemical bonds store more energy',
      'The mass decreases because gases evaporate into nothingness',
      'The total mass of products is strictly equal to the total mass of reactants',
      'The mass doubles whenever heat is released'
    ],
    correct: 2,
    strategy: 'Mass is neither created nor destroyed during chemical reactions.',
    derivation: 'The Law of Conservation of Mass (Lavoisier) dictates that atoms are merely rearranged in a chemical reaction. Therefore, Total Mass of Reactants = Total Mass of Products.',
    trap: 'Assuming mass is lost when smoke or gas forms, ignoring that gas has mass.'
  },
  {
    q: 'Which of the following is an undeniable indicator of a chemical change rather than a physical change?',
    options: [
      'Ice melting into liquid water at room temperature',
      'Dissolving table salt crystals into a glass of clean water',
      'Rusting of iron nails producing reddish-brown iron oxide with heat release',
      'Chopping a dry wooden log into small sawdust pieces'
    ],
    correct: 2,
    strategy: 'Chemical changes form new chemical substances with altered molecular formulas.',
    derivation: 'Rusting is an irreversible chemical oxidation reaction: 4Fe + 3O₂ + 2nH₂O ➔ 2Fe₂O₃·nH₂O. Melting, dissolving, and chopping are reversible physical changes.',
    trap: 'Confusing dissolving salt (physical) with a chemical change.'
  },
  {
    q: 'In terms of particle kinetic theory, how do the particles in a solid differ from those in a liquid?',
    options: [
      'Solid particles move rapidly in straight lines over long distances',
      'Solid particles are closely packed in fixed lattice positions and only vibrate in place',
      'Liquid particles have zero attractive forces between them',
      'Solid particles have much higher kinetic energy than liquid particles'
    ],
    correct: 1,
    strategy: 'Solids have fixed positions and low kinetic energy; liquids flow past one another.',
    derivation: 'Solid particles have strong intermolecular bonds holding them in rigid regular crystal lattices where they only vibrate about fixed equilibrium points.',
    trap: 'Thinking particles in a solid are completely motionless (they vibrate!).'
  },
  {
    q: 'If 24 grams of magnesium react completely with 16 grams of oxygen gas in a sealed crucible, what is the exact mass of magnesium oxide (MgO) produced?',
    options: ['8 grams', '40 grams', '24 grams', '384 grams'],
    correct: 1,
    strategy: 'Apply Conservation of Mass: Mass of MgO = Mass of Mg + Mass of O₂.',
    derivation: '24 g Mg + 16 g O₂ = 40 g MgO. Mass is conserved.',
    trap: 'Subtracting 16 from 24 (giving 8) instead of adding.'
  }
];

// Unit 6: Force, Work, Energy & Power (4 questions)
g7Science.units[5].subtopics[0].amtQuiz = [
  {
    q: 'According to Newton’s First Law of Motion (Law of Inertia), what happens to a body at rest or moving with uniform velocity if no unbalanced external force acts upon it?',
    options: [
      'It will immediately accelerate in the direction of Earth’s rotation',
      'It will gradually slow down and stop within a few seconds',
      'It remains at rest or continues moving at constant velocity in a straight line',
      'It spontaneously converts its mass into gravitational radiation'
    ],
    correct: 2,
    strategy: 'Inertia keeps an object doing whatever it is currently doing.',
    derivation: 'Newton’s First Law states: An object remains at rest, or in uniform motion along a straight line, unless acted upon by a net external force (ΣF = 0 ➔ a = 0).',
    trap: 'Assuming all objects naturally stop (which is caused by friction, not a law of motion!).'
  },
  {
    q: 'A student applies a horizontal force of 50 Newtons to push a crate across a classroom floor through a distance of 4 meters. How much work is done on the crate?',
    options: ['12.5 Joules', '200 Joules', '54 Joules', '46 Joules'],
    correct: 1,
    strategy: 'Formula: Work = Force × Distance (W = F × s).',
    derivation: 'W = F × s = 50 N × 4 m = 200 N·m = 200 Joules.',
    trap: 'Dividing force by distance (50 / 4 = 12.5) instead of multiplying.'
  },
  {
    q: 'What is the weight on Earth of a satellite equipment pack with a mass of 25 kilograms? (Use g = 9.8 m/s²)',
    options: ['2.55 N', '245 N', '25 N', '250 kg'],
    correct: 1,
    strategy: 'Weight formula: w = m × g.',
    derivation: 'w = m × g = 25 kg × 9.8 m/s² = 245 Newtons.',
    trap: 'Confusing mass (kg) with weight (Newtons).'
  },
  {
    q: 'As water stored in the reservoir of the Grand Ethiopian Renaissance Dam (GERD) falls through high-pressure penstock pipes toward the turbines, what energy transformation occurs?',
    options: [
      'Chemical energy transforms directly into nuclear energy',
      'Gravitational potential energy transforms into kinetic energy',
      'Thermal heat energy transforms into sound energy',
      'Electrical energy transforms into gravitational potential energy'
    ],
    correct: 1,
    strategy: 'Water at height has potential energy; moving water has kinetic energy.',
    derivation: 'Elevated water in a dam reservoir possesses gravitational potential energy (Ep = mgh). As it descends through the penstocks, potential energy is converted into kinetic energy (Ek = ½mv²) that rotates the hydro-turbines.',
    trap: 'Reversing the transformation direction.'
  }
];

// Unit 7: Earth and the Solar System (4 questions)
g7Science.units[6].subtopics[0].amtQuiz = [
  {
    q: 'Which layer of Earth’s internal structure generates Earth’s magnetic field through convective circulation of molten iron and nickel?',
    options: ['The Continental Crust', 'The Asthenosphere', 'The Liquid Outer Core', 'The Solid Lithosphere'],
    correct: 2,
    strategy: 'The liquid outer core produces the geodynamo effect.',
    derivation: 'Earth’s magnetic field is generated by convection currents in the molten liquid outer core (iron-nickel alloy) coupled with Earth’s axial rotation (geodynamo).',
    trap: 'Selecting the solid inner core or mantle.'
  },
  {
    q: 'The East African Rift Valley, which bisects Ethiopia, is formed along what type of tectonic plate boundary?',
    options: [
      'Convergent plate boundary where two plates collide head-on',
      'Divergent plate boundary where tectonic plates are pulling apart',
      'Transform fault boundary where plates slide horizontally past one another',
      'Subduction trench boundary where oceanic crust sinks into the mantle'
    ],
    correct: 1,
    strategy: 'Rifting is tensional pulling apart (divergence).',
    derivation: 'The African Plate is splitting into the Nubian and Somali sub-plates at a divergent plate boundary, creating a continental rift system.',
    trap: 'Confusing divergent rift boundaries with convergent collision mountain boundaries (like the Himalayas).'
  },
  {
    q: 'Which planet in our Solar System is closest in size, mass, and density to Earth, but suffers from a runaway greenhouse effect with surface temperatures exceeding 460°C?',
    options: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
    correct: 1,
    strategy: 'Venus is Earth’s "twin" in size but has a dense CO₂ atmosphere.',
    derivation: 'Venus has approximately 95% of Earth’s diameter, but its thick atmosphere (96% CO₂) traps heat via a runaway greenhouse effect.',
    trap: 'Selecting Mars, which is much smaller and colder than Earth.'
  },
  {
    q: 'What astronomical event occurs when the Moon passes directly between the Sun and the Earth, casting its dark shadow (umbra) onto Earth’s surface?',
    options: ['Lunar Eclipse', 'Solar Eclipse', 'Vernal Equinox', 'Winter Solstice'],
    correct: 1,
    strategy: 'Sun - Moon - Earth alignment is a Solar Eclipse.',
    derivation: 'A solar eclipse occurs when the Moon blocks solar rays from reaching Earth. A lunar eclipse occurs when Earth blocks sunlight from reaching the Moon.',
    trap: 'Confusing a solar eclipse (Moon in the middle) with a lunar eclipse (Earth in the middle).'
  }
];

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g7_science.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g7Science, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g7_science.js with 4 questions per subtopic (total 28 questions)!');
