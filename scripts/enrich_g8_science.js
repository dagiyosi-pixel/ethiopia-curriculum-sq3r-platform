const fs = require('fs');
const path = require('path');

const g8Science = require('../src/curriculum/g8_science.js');

// Unit 1: Basics of Chemical Reactions (4 questions)
g8Science.units[0].subtopics[0].amtQuiz = [
  {
    q: 'In the chemical equation for the synthesis of ammonia gas: N₂ + 3H₂ ➔ 2NH₃, what do the stoichiometric coefficients represent?',
    options: [
      'The exact temperature in degrees Celsius needed for the reaction',
      'The relative number of molecules or moles of each reactant and product',
      'The mass of each substance in milligrams',
      'The number of electron shells around each nitrogen atom'
    ],
    correct: 1,
    strategy: 'Coefficients in balanced equations represent molar or molecular ratios.',
    derivation: 'Stoichiometric coefficients indicate the molar ratio: 1 mole of nitrogen gas reacts with 3 moles of hydrogen gas to produce 2 moles of ammonia gas.',
    trap: 'Confusing molar coefficients with mass or temperature.'
  },
  {
    q: 'When methane gas (CH₄) burns completely in excess oxygen, what are the balanced products of this combustion reaction?',
    options: [
      'Carbon monoxide (CO) and hydrogen gas (H₂)',
      'Carbon dioxide (CO₂) and water vapor (H₂O)',
      'Pure carbon soot and ozone (O₃)',
      'Methanol (CH₃OH) and liquid nitrogen'
    ],
    correct: 1,
    strategy: 'Complete hydrocarbon combustion always yields CO₂ and H₂O.',
    derivation: 'The balanced equation is: CH₄ + 2O₂ ➔ CO₂ + 2H₂O. Complete combustion of any hydrocarbon produces carbon dioxide and water.',
    trap: 'Confusing incomplete combustion (which produces toxic CO) with complete combustion.'
  },
  {
    q: 'What type of chemical reaction is represented by: 2H₂O₂ ➔ 2H₂O + O₂?',
    options: ['Synthesis reaction', 'Decomposition reaction', 'Single displacement reaction', 'Double displacement reaction'],
    correct: 1,
    strategy: 'A single compound breaking down into simpler substances is decomposition.',
    derivation: 'Hydrogen peroxide breaks down into water and oxygen gas. One reactant yielding two or more products defines a decomposition reaction.',
    trap: 'Confusing decomposition with synthesis (which combines multiple reactants into one product).'
  },
  {
    q: 'Why must every chemical equation be balanced to satisfy the fundamental laws of nature?',
    options: [
      'To ensure both sides have equal numbers of electrons only',
      'To obey the Law of Conservation of Mass (atoms cannot be created or destroyed)',
      'To prevent the temperature of the laboratory from rising',
      'To make sure reactants have higher volume than products'
    ],
    correct: 1,
    strategy: 'Balancing satisfies the Law of Conservation of Mass.',
    derivation: 'Atoms cannot appear or disappear during an ordinary chemical reaction; they are merely rearranged. Therefore, the number of each type of atom must be identical on both sides.',
    trap: 'Assuming mass changes during reactions.'
  }
];

// Unit 2: Acids, Bases, Salts & The pH Scale (4 questions)
g8Science.units[1].subtopics[0].amtQuiz = [
  {
    q: 'What is the color change observed when blue litmus paper is dipped into an acidic solution such as lemon juice (citric acid)?',
    options: ['Blue litmus paper turns Red', 'Blue litmus paper turns Bright Green', 'Blue litmus paper turns Colorless', 'Blue litmus paper remains Blue'],
    correct: 0,
    strategy: 'Acids turn Blue litmus paper Red (ABR rule).',
    derivation: 'Acidic solutions (pH < 7) donate hydrogen ions (H⁺) that protonate litmus pigment, shifting its conjugated structure to reflect red wavelengths.',
    trap: 'Confusing acids (blue to red) with bases (red to blue).'
  },
  {
    q: 'A soil sample taken from a farming cooperative in Wolaita has a measured pH of 5.0. What chemical substance is commonly applied by agricultural extension workers to neutralize this acidic soil?',
    options: ['Concentrated hydrochloric acid', 'Agricultural lime (calcium carbonate / hydroxide)', 'Sodium chloride (table salt)', 'Sulfur powder'],
    correct: 1,
    strategy: 'Lime is a basic calcium compound used to raise soil pH (neutralization).',
    derivation: 'Soil with pH 5.0 is acidic. Applying agricultural lime (CaCO₃ or Ca(OH)₂) neutralizes excess H⁺ ions: 2H⁺ + CaCO₃ ➔ Ca²⁺ + CO₂ + H₂O.',
    trap: 'Adding more acid or table salt, which would ruin the soil.'
  },
  {
    q: 'Which of the following values on the pH scale represents a strongly basic (alkaline) aqueous solution?',
    options: ['pH = 1.0', 'pH = 7.0', 'pH = 5.5', 'pH = 13.0'],
    correct: 3,
    strategy: 'pH scale: 0-6.9 is acidic, 7.0 is neutral, 7.1-14 is basic.',
    derivation: 'pH 13.0 indicates a very high hydroxide ion concentration [OH⁻] and very low [H⁺], characteristic of strong bases like sodium hydroxide (NaOH).',
    trap: 'Selecting pH 1.0, which is strongly acidic!'
  },
  {
    q: 'What are the two standard products formed when an acid reacts with a base in a neutralization reaction?',
    options: ['A Salt and Water', 'An Oxide and Hydrogen gas', 'Pure Carbon and Oxygen', 'A Metal and Nitrogen gas'],
    correct: 0,
    strategy: 'Neutralization formula: Acid + Base ➔ Salt + Water.',
    derivation: 'For example: HCl (acid) + NaOH (base) ➔ NaCl (salt) + H₂O (water). The H⁺ and OH⁻ ions combine to form neutral water.',
    trap: 'Assuming hydrogen gas is released (hydrogen gas is released when acids react with metals, not bases!).'
  }
];

// Unit 3: Kinematics, Acceleration & Uniform Linear Motion (4 questions)
g8Science.units[2].subtopics[0].amtQuiz = [
  {
    q: 'An electric train on the Addis Ababa Light Rail Transit accelerates uniformly from rest (u = 0 m/s) at a rate of 1.5 m/s² for 8 seconds. What is its final velocity?',
    options: ['9.5 m/s', '12.0 m/s', '6.0 m/s', '18.0 m/s'],
    correct: 1,
    strategy: 'Use the first equation of linear motion: v = u + at.',
    derivation: 'v = u + at = 0 + (1.5 m/s² × 8 s) = 12.0 m/s.',
    trap: 'Adding velocity and acceleration directly (8 + 1.5 = 9.5).'
  },
  {
    q: 'What is the physical difference between speed and velocity in physics?',
    options: [
      'Speed has magnitude and direction, while velocity has only magnitude',
      'Speed is a scalar quantity (magnitude only), while velocity is a vector quantity (magnitude and direction)',
      'Speed is measured in meters per second, while velocity is measured in Newtons',
      'Speed applies only to cars, while velocity applies only to aircraft'
    ],
    correct: 1,
    strategy: 'Scalar = magnitude only; Vector = magnitude + direction.',
    derivation: 'Speed is distance divided by time (scalar). Velocity is displacement divided by time (vector), requiring a specified direction of travel.',
    trap: 'Reversing scalar and vector definitions.'
  },
  {
    q: 'How far does a vehicle travel in 10 seconds if it moves at a constant, non-accelerating speed of 25 meters per second?',
    options: ['2.5 meters', '250 meters', '35 meters', '15 meters'],
    correct: 1,
    strategy: 'Formula: Distance = Speed × Time (s = v × t).',
    derivation: 's = 25 m/s × 10 s = 250 meters.',
    trap: 'Dividing speed by time (25/10 = 2.5).'
  },
  {
    q: 'If a freely falling stone dropped from the edge of the Blue Nile Gorge experiences gravitational acceleration g = 9.8 m/s² (neglecting air resistance), what is its downward speed after 3 seconds?',
    options: ['9.8 m/s', '29.4 m/s', '19.6 m/s', '3.26 m/s'],
    correct: 1,
    strategy: 'Use v = u + gt where u = 0.',
    derivation: 'v = 0 + (9.8 m/s² × 3 s) = 29.4 m/s.',
    trap: 'Assuming terminal velocity without calculation.'
  }
];

// Unit 4: Energy, Work & Simple Machines (4 questions)
g8Science.units[3].subtopics[0].amtQuiz = [
  {
    q: 'A simple crowbar lever is used to lift a heavy stone weighing 1,200 Newtons. The worker applies an effort force of only 300 Newtons. What is the Mechanical Advantage (MA) of this machine?',
    options: ['0.25', '4.0', '900', '1,500'],
    correct: 1,
    strategy: 'Formula: Mechanical Advantage = Load / Effort (MA = L / E).',
    derivation: 'MA = Load ÷ Effort = 1,200 N ÷ 300 N = 4.0 (dimensionless ratio).',
    trap: 'Inverting the formula (300 / 1200 = 0.25) or subtracting forces.'
  },
  {
    q: 'In an inclined plane ramp, the effort moves through a distance of 15 meters along the ramp to raise a crate to a vertical platform height of 3 meters. What is the Velocity Ratio (VR) of the ramp?',
    options: ['45', '5.0', '12', '0.2'],
    correct: 1,
    strategy: 'Formula: Velocity Ratio = Distance moved by Effort / Distance moved by Load (VR = dE / dL).',
    derivation: 'VR = dE / dL = 15 m / 3 m = 5.0.',
    trap: 'Dividing load distance by effort distance (3 / 15 = 0.2).'
  },
  {
    q: 'Why is the efficiency of any real-world simple machine always strictly less than 100% (η < 100%)?',
    options: [
      'Because mechanical energy is destroyed during work',
      'Because some input work is inevitably dissipated as thermal heat due to friction and moving component weights',
      'Because gravity increases whenever machines are operated',
      'Because velocity ratio always equals zero in practice'
    ],
    correct: 1,
    strategy: 'Friction converts useful work into wasted heat.',
    derivation: 'Efficiency = (Work Output / Work Input) × 100%. In all real machines, friction between moving surfaces and air resistance convert part of the input work into thermal energy.',
    trap: 'Believing that energy is destroyed, violating conservation of energy.'
  },
  {
    q: 'Which class of lever has the fulcrum positioned in the middle, between the effort and the load (e.g. a pair of scissors or a playground seesaw)?',
    options: ['First Class Lever', 'Second Class Lever', 'Third Class Lever', 'Fourth Class Lever'],
    correct: 0,
    strategy: 'Remember FLE: 1st class has Fulcrum in middle, 2nd class has Load in middle, 3rd class has Effort in middle.',
    derivation: 'First class levers have the pivot (fulcrum) between the effort and load. Second class has the load in the center (wheelbarrow). Third class has effort in the center (tweezer/forearm).',
    trap: 'Confusing 1st class (fulcrum in middle) with 2nd class (load in middle).'
  }
];

// Unit 5: Electricity and Magnetism (4 questions)
g8Science.units[4].subtopics[0].amtQuiz = [
  {
    q: 'According to Ohm’s Law, what electric current flows through an electric kettle element with a resistance of 44 Ohms connected to a standard 220-Volt mains socket in Addis Ababa?',
    options: ['9,680 Amperes', '5.0 Amperes', '0.2 Amperes', '176 Amperes'],
    correct: 1,
    strategy: 'Ohm’s Law: I = V / R.',
    derivation: 'Current I = Voltage V ÷ Resistance R = 220 V ÷ 44 Ω = 5.0 Amperes.',
    trap: 'Multiplying voltage by resistance (220 × 44 = 9680).'
  },
  {
    q: 'In a household electrical wiring circuit, why are electrical appliances always connected in parallel rather than in series?',
    options: [
      'Parallel circuits increase the overall electrical resistance of the entire house',
      'Each appliance receives the full supply voltage, and turning off one appliance does not interrupt current to others',
      'Parallel wiring eliminates the need for circuit breakers and copper wires',
      'Appliances in parallel use zero electrical energy'
    ],
    correct: 1,
    strategy: 'Parallel circuits provide independent branches and equal voltage.',
    derivation: 'In parallel circuits, every branch experiences the same terminal voltage (220V). If one appliance is switched off or burns out, current continues flowing uninterrupted to the other parallel branches.',
    trap: 'Selecting series, where one broken bulb shuts off the entire circuit.'
  },
  {
    q: 'What device converts mechanical rotational energy into electrical energy using electromagnetic induction?',
    options: ['Electric Motor', 'Electric Generator (Dynamo)', 'Step-down Transformer', 'Capacitor'],
    correct: 1,
    strategy: 'Generator converts mechanical to electrical; Motor converts electrical to mechanical.',
    derivation: 'Generators rotate coils of wire in magnetic fields (Faraday’s law of induction) to generate electric current. Motors do the exact reverse.',
    trap: 'Confusing electric generators with electric motors.'
  },
  {
    q: 'What is the equivalent total resistance of two resistors with resistances of 6 Ohms and 12 Ohms connected in series?',
    options: ['4 Ohms', '18 Ohms', '72 Ohms', '2 Ohms'],
    correct: 1,
    strategy: 'In series, simply add the resistances: R_total = R1 + R2.',
    derivation: 'R_total = 6 Ω + 12 Ω = 18 Ohms.',
    trap: 'Using the parallel formula (which would give 4 Ohms).'
  }
];

// Unit 6: Genetics and Heredity (4 questions)
g8Science.units[5].subtopics[0].amtQuiz = [
  {
    q: 'In Gregor Mendel’s genetic experiments on pea plants, when a homozygous dominant tall plant (TT) is crossed with a homozygous recessive dwarf plant (tt), what is the phenotypic ratio of tall to dwarf in the F1 generation?',
    options: ['1 Tall : 1 Dwarf', '3 Tall : 1 Dwarf', '100% Tall (All Tall)', '50% Medium : 50% Dwarf'],
    correct: 2,
    strategy: 'All F1 offspring inherit T from one parent and t from the other, giving genotype Tt (all tall).',
    derivation: 'Punnett square of TT × tt yields 100% heterozygous (Tt) offspring. Since T (tall) is completely dominant over t (dwarf), 100% of the F1 generation are phenotypically tall.',
    trap: 'Selecting 3:1, which is the phenotypic ratio of the F2 generation, not F1!'
  },
  {
    q: 'Where are genes, the fundamental units of biological heredity, physically located inside a eukaryotic cell?',
    options: [
      'Floating freely as carbohydrates inside the cytoplasm vacuole',
      'Arranged in linear sequence along DNA molecules within chromosomes in the cell nucleus',
      'Embedded strictly within the lipid outer cell wall',
      'Dissolved in blood plasma outside the cells'
    ],
    correct: 1,
    strategy: 'Genes are segments of DNA packaged into chromosomes inside the nucleus.',
    derivation: 'A gene is a specific sequence of nucleotides along a deoxyribonucleic acid (DNA) molecule. Chromosomes in the cell nucleus contain these tightly wound DNA strands.',
    trap: 'Selecting cytoplasm or cell wall.'
  },
  {
    q: 'What term describes an organism that has two identical alleles for a specific trait (such as BB or bb)?',
    options: ['Heterozygous', 'Homozygous', 'Polygenic', 'Codominant'],
    correct: 1,
    strategy: 'Homo = same (homozygous = identical alleles); Hetero = different.',
    derivation: 'Homozygous individuals have identical alleles at a given locus (e.g., homozygous dominant BB or homozygous recessive bb). Heterozygous individuals have different alleles (Bb).',
    trap: 'Confusing homozygous with heterozygous.'
  },
  {
    q: 'What is the probability of a human child inheriting a Y chromosome from their father and being biologically male?',
    options: ['25%', '50%', '75%', '100%'],
    correct: 1,
    strategy: 'Father produces 50% X sperm and 50% Y sperm.',
    derivation: 'Human sex determination: Female = XX; Male = XY. Mother always provides an X chromosome. Father provides either X or Y with equal 50% probability. Therefore, the chance of a male child (XY) is 50% (1 in 2).',
    trap: 'Assuming 25% or 75%.'
  }
];

// Unit 7: Environment & Ecology (4 questions)
g8Science.units[6].subtopics[0].amtQuiz = [
  {
    q: 'According to the 10% Trophic Energy Transfer Rule in ecological food chains, if primary producers (grass in Bale Mountains National Park) capture 10,000 Joules of solar energy, how much energy is transferred to the primary consumers (grazing Nyala antelopes)?',
    options: ['10,000 Joules', '1,000 Joules', '100 Joules', '10 Joules'],
    correct: 1,
    strategy: 'Energy transferred to next level = 10% of 10,000 J.',
    derivation: 'Only approximately 10% of the energy stored in biomass at one trophic level is converted into biomass at the next level. Energy = 10,000 J × 0.10 = 1,000 Joules. The remaining 90% is lost as metabolic heat and respiration.',
    trap: 'Selecting 100 Joules (which would be the secondary consumer level, like wolves).'
  },
  {
    q: 'The Ethiopian Wolf (Canis simensis) in the Afro-alpine ecosystem of Bale and Semien Mountains preys upon giant root-rats. In this ecological relationship, the Ethiopian wolf is classified as a:',
    options: ['Primary Producer (Autotroph)', 'Primary Consumer (Herbivore)', 'Secondary Consumer (Carnivore)', 'Decomposer (Saprotroph)'],
    correct: 2,
    strategy: 'The wolf eats herbivores (rats), making it a secondary consumer/carnivore.',
    derivation: 'Afro-alpine grass (producer) ➔ Giant root-rat (primary consumer / herbivore) ➔ Ethiopian wolf (secondary consumer / apex carnivore).',
    trap: 'Confusing primary consumer with secondary consumer.'
  },
  {
    q: 'What is the ecological term for the maximum population size of a species that a given environment can sustainably support over time without degrading the habitat?',
    options: ['Biotic Potential', 'Carrying Capacity (K)', 'Exponential Surge Limit', 'Trophic Quotient'],
    correct: 1,
    strategy: 'Carrying capacity is the maximum sustainable population.',
    derivation: 'Carrying capacity (K) represents the equilibrium population level constrained by available food, water, territory, and environmental resistance.',
    trap: 'Confusing carrying capacity with unrestricted biotic potential.'
  },
  {
    q: 'Which ecological process returns nitrogen, phosphorus, and carbon trapped in dead plants and animal carcasses back into the soil and atmosphere?',
    options: ['Eutrophication', 'Decomposition by bacteria and fungi', 'Biomagnification', 'Photosynthesis'],
    correct: 1,
    strategy: 'Decomposers break down organic detritus and recycle nutrients.',
    derivation: 'Decomposers (saprotrophic bacteria and fungi) secret extracellular enzymes that break down dead organic matter, recycling essential mineral nutrients back into the biogeochemical cycles.',
    trap: 'Selecting eutrophication, which is nutrient pollution in water bodies.'
  }
];

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_science.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8Science, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g8_science.js with 4 questions per subtopic (total 28 questions)!');
