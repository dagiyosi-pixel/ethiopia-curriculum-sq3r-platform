const fs = require('fs');
const path = require('path');

const g8Math = require('../src/curriculum/g8_math.js');

// 1.1 Squares and Square Roots (4 questions)
g8Math.units[0].subtopics[0].amtQuiz = [
  {
    q: 'What is the principal square root of the rational number 144 / 289?',
    options: ['12 / 17', '14 / 19', '12 / 289', '72 / 144.5'],
    correct: 0,
    strategy: 'Take the square root of the numerator and denominator independently: √(a/b) = √a / √b.',
    derivation: '√144 = 12 and √289 = 17 (since 17² = 289). Therefore, √(144/289) = 12/17.',
    trap: 'Dividing numerator and denominator by 2 instead of finding square roots.'
  },
  {
    q: 'Between which two consecutive whole numbers does the irrational number √54 lie on the continuous number line?',
    options: ['5 and 6', '6 and 7', '7 and 8', '8 and 9'],
    correct: 2,
    strategy: 'Find the nearest perfect squares bounding 54: 7² = 49 and 8² = 64.',
    derivation: 'Since 49 < 54 < 64, taking square roots gives √49 < √54 < √64 ⇒ 7 < √54 < 8.',
    trap: 'Selecting 6 and 7 (thinking 6² = 36).'
  },
  {
    q: 'What is the value of the expression: (√0.09) + (√0.64)?',
    options: ['0.73', '1.1', '0.11', '0.073'],
    correct: 1,
    strategy: 'Evaluate decimals: √0.09 = 0.3 (since 0.3² = 0.09) and √0.64 = 0.8 (since 0.8² = 0.64).',
    derivation: '0.3 + 0.8 = 1.1.',
    trap: 'Forgetting place value and thinking √0.09 = 0.03.'
  },
  {
    q: 'Which of the following numbers is an irrational number that cannot be written in the form a/b where a, b ∈ Z?',
    options: ['√196', '√121', '√75', '3.1415'],
    correct: 2,
    strategy: 'The square root of any non-perfect square is irrational.',
    derivation: '√196 = 14 (rational), √121 = 11 (rational), 3.1415 is a terminating decimal (rational). 75 is not a perfect square (75 = 25 × 3 ⇒ 5√3), so √75 is irrational.',
    trap: 'Confusing 3.1415 (a terminating decimal, which is rational) with π.'
  }
];

// 1.2 Cubes and Cube Roots (4 questions)
g8Math.units[0].subtopics[1].amtQuiz = [
  {
    q: 'What is the exact value of the cube root expression: ∛(-216)?',
    options: ['6', '-6', '-36', 'No real solution'],
    correct: 1,
    strategy: 'The cube root of a negative number is always negative: (-a)³ = -a³.',
    derivation: '(-6) × (-6) × (-6) = 36 × (-6) = -216. Therefore, ∛(-216) = -6.',
    trap: 'Assuming cube roots of negatives do not exist (confusing cube roots with square roots!).'
  },
  {
    q: 'A solid cubic wooden storage box has a total interior volume of 343 cm³. What is the length of each edge of the cube?',
    options: ['7 cm', '49 cm', '11.4 cm', '21 cm'],
    correct: 0,
    strategy: 'Volume of cube V = s³ ⇒ s = ∛V.',
    derivation: 's = ∛343 = 7 cm (since 7 × 7 × 7 = 49 × 7 = 343).',
    trap: 'Dividing 343 by 3 to get 114.3 cm.'
  },
  {
    q: 'Evaluate the arithmetic expression: ∛(1/125) × ∛27.',
    options: ['3/5', '1/15', '5/3', '9/25'],
    correct: 0,
    strategy: '∛(1/125) = 1/5 and ∛27 = 3.',
    derivation: '(1/5) × 3 = 3/5.',
    trap: 'Multiplying 125 by 27 inside the radical first without simplifying.'
  },
  {
    q: 'What is the value of (-3)³ + (-2)³?',
    options: ['-35', '-13', '35', '-125'],
    correct: 0,
    strategy: 'Compute each cube: (-3)³ = -27, and (-2)³ = -8.',
    derivation: '(-27) + (-8) = -35.',
    trap: 'Adding bases (-3 + -2 = -5) and cubing to get -125 (invalid exponent rule!).'
  }
];

// 2.1 Algebraic Terms, FOIL Expansion & Factoring (4 questions)
g8Math.units[1].subtopics[0].amtQuiz = [
  {
    q: 'Expand and simplify the product of the two binomials using the FOIL method: (2x - 3)(x + 5).',
    options: ['2x² - 15', '2x² + 7x - 15', '2x² - 7x - 15', '2x² + 13x - 15'],
    correct: 1,
    strategy: 'FOIL = First + Outside + Inside + Last.',
    derivation: 'First: 2x · x = 2x². Outside: 2x · 5 = 10x. Inside: -3 · x = -3x. Last: -3 · 5 = -15. Sum: 2x² + (10x - 3x) - 15 = 2x² + 7x - 15.',
    trap: 'Forgetting to combine the middle terms (10x - 3x = 7x).'
  },
  {
    q: 'Factor completely by recognizing the Difference of Two Squares: 9x² - 49y².',
    options: ['(3x - 7y)²', '(3x - 7y)(3x + 7y)', '(9x - 49y)(x + y)', '(3x + 7y)²'],
    correct: 1,
    strategy: 'Formula: a² - b² = (a - b)(a + b).',
    derivation: '9x² = (3x)² and 49y² = (7y)². Therefore, 9x² - 49y² = (3x - 7y)(3x + 7y).',
    trap: 'Writing (3x - 7y)² which would expand to 9x² - 42xy + 49y².'
  },
  {
    q: 'What is the greatest common factor (GCF) of the polynomial: 12x³y² - 18x²y³ + 6x²y²?',
    options: ['6x²y²', '3xy', '12x³y³', '6xy'],
    correct: 0,
    strategy: 'Take the highest common numerical factor and the lowest power of each variable.',
    derivation: 'GCF of 12, 18, 6 is 6. Lowest power of x is x²; lowest power of y is y². GCF = 6x²y².',
    trap: 'Omitting the variable powers and taking only the coefficient 6.'
  },
  {
    q: 'What is the degree of the polynomial: 4x³y² - 7x²y⁴ + 5x - 9?',
    options: ['3', '5', '6', '4'],
    correct: 2,
    strategy: 'The degree of a multivariable polynomial is the maximum sum of exponents in any single term.',
    derivation: 'Term 1: 3 + 2 = 5. Term 2: 2 + 4 = 6. Term 3: 1. Maximum degree is 6 (from -7x²y⁴).',
    trap: 'Picking 3 from the leading term or 4 from y⁴.'
  }
];

// 3.1 Linear Equations in Two Variables & Cartesian Plane (4 questions)
g8Math.units[2].subtopics[0].amtQuiz = [
  {
    q: 'What is the slope (gradient m) of the straight line passing through points A(2, 3) and B(6, 11) on the Cartesian coordinate plane?',
    options: ['2.0', '0.5', '4.0', '-2.0'],
    correct: 0,
    strategy: 'Slope formula: m = (y₂ - y₁) / (x₂ - x₁).',
    derivation: 'm = (11 - 3) / (6 - 2) = 8 / 4 = 2.0.',
    trap: 'Inverting the ratio to (x₂ - x₁) / (y₂ - y₁) = 4/8 = 0.5.'
  },
  {
    q: 'What is the y-intercept of the linear equation: 3x - 2y = 8?',
    options: ['(0, 8)', '(0, -4)', '(0, 4)', '(0, -2)'],
    correct: 1,
    strategy: 'Set x = 0 to find the y-intercept.',
    derivation: '3(0) - 2y = 8 ⇒ -2y = 8 ⇒ y = -4. The intercept is (0, -4).',
    trap: 'Forgetting the negative sign on -2y and choosing +4.'
  },
  {
    q: 'In which quadrant of the Cartesian plane does the coordinate point P(-4, -7) lie?',
    options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
    correct: 2,
    strategy: 'Signs by quadrant: Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-).',
    derivation: 'Both x (-4) and y (-7) are negative, which defines Quadrant III.',
    trap: 'Confusing Quadrant II (-,+) with Quadrant III (-,-).'
  },
  {
    q: 'What is the slope of any horizontal line parallel to the x-axis?',
    options: ['Zero (0)', 'Undefined / Infinity', '1.0', '-1.0'],
    correct: 0,
    strategy: 'A horizontal line has zero vertical rise: Δy = 0.',
    derivation: 'm = Δy / Δx = 0 / Δx = 0. A vertical line has an undefined slope.',
    trap: 'Confusing horizontal (slope = 0) with vertical (slope = undefined).'
  }
];

// 4.1 Similar Geometric Figures & Scale Factors (4 questions)
g8Math.units[3].subtopics[0].amtQuiz = [
  {
    q: 'Two triangles ABC and DEF are similar (△ABC ~ △DEF). If AB = 6 cm, BC = 8 cm, and the corresponding side DE = 15 cm, what is the length of side EF?',
    options: ['17 cm', '20 cm', '16 cm', '24 cm'],
    correct: 1,
    strategy: 'Set up proportional sides: AB / DE = BC / EF.',
    derivation: '6 / 15 = 8 / EF ⇒ 6 · EF = 15 · 8 = 120 ⇒ EF = 120 / 6 = 20 cm.',
    trap: 'Adding the difference (15 - 6 = 9 ➔ 8 + 9 = 17) instead of scaling proportionally.'
  },
  {
    q: 'If the linear scale factor of two similar polygons is k = 3 : 5, what is the ratio of their surface areas?',
    options: ['3 : 5', '6 : 10', '9 : 25', '27 : 125'],
    correct: 2,
    strategy: 'Ratio of areas is the square of the linear scale factor: Area Ratio = k².',
    derivation: 'Area Ratio = (3/5)² = 9/25 (or 9 : 25).',
    trap: 'Selecting 3:5 (linear ratio) or 27:125 (volume ratio k³).'
  },
  {
    q: 'Which criterion guarantees that two triangles are similar even if their side lengths are unknown?',
    options: ['AAA (Angle-Angle-Angle: two pairs of corresponding angles are equal)', 'One pair of equal sides', 'Equal perimeters', 'Equal areas'],
    correct: 0,
    strategy: 'AAA (or AA) similarity criterion.',
    derivation: 'If two angles of one triangle equal two angles of another, the third angles must also be equal (sum = 180°), guaranteeing identical shape (similarity).',
    trap: 'Assuming equal areas proves similarity.'
  },
  {
    q: 'A 2-meter tall flagpole casts a shadow of 3 meters. At the same moment, a nearby acacia tree casts a shadow of 18 meters. How tall is the acacia tree?',
    options: ['12 meters', '27 meters', '9 meters', '15 meters'],
    correct: 0,
    strategy: 'Proportion of similar shadow triangles: Height / Shadow = Height / Shadow.',
    derivation: '2 / 3 = h / 18 ⇒ 3h = 36 ⇒ h = 12 meters.',
    trap: 'Multiplying 18 by 2 = 36 without dividing by 3.'
  }
];

// 5.1 Chords, Tangents & Inscribed Angles (4 questions)
g8Math.units[4].subtopics[0].amtQuiz = [
  {
    q: 'According to the Inscribed Angle Theorem, what is the relationship between an angle inscribed in a circle and the central angle that subtends the exact same arc?',
    options: [
      'The inscribed angle is equal to the central angle',
      'The inscribed angle is exactly half (½) of the central angle',
      'The inscribed angle is double (2×) the central angle',
      'The inscribed angle is always 90 degrees'
    ],
    correct: 1,
    strategy: 'Inscribed Angle = ½ × Central Angle.',
    derivation: 'Theorem: The measure of an inscribed angle is half the measure of its intercepted central angle (θ_inscribed = ½ θ_central).',
    trap: 'Inverting the relationship and saying inscribed is double.'
  },
  {
    q: 'An angle inscribed in a semicircle with its vertices on the endpoints of the diameter (Thales’ Theorem) is always:',
    options: ['An acute angle (< 90°)', 'An obtuse angle (> 90°)', 'A right angle (exactly 90°)', 'A reflex angle (> 180°)'],
    correct: 2,
    strategy: 'Thales’ Theorem: An angle in a semicircle is a right angle.',
    derivation: 'The diameter forms a straight central angle of 180°. By the inscribed angle theorem, the angle inscribed in the semicircle is 180° / 2 = 90°.',
    trap: 'Guessing 45° or 60°.'
  },
  {
    q: 'What is the angle formed between a tangent line to a circle and the radius drawn to the point of tangency?',
    options: ['45°', '90° (Perpendicular)', '180°', '60°'],
    correct: 1,
    strategy: 'A tangent is always perpendicular to the radius at the point of contact.',
    derivation: 'Tangency Theorem: A line is tangent to a circle if and only if it is perpendicular (forms a 90° angle) to the radius at the point of tangency.',
    trap: 'Assuming acute angles.'
  },
  {
    q: 'A chord of length 16 cm is drawn in a circle of radius 10 cm. What is the perpendicular distance from the center of the circle to the chord?',
    options: ['6 cm', '8 cm', '4 cm', '2 cm'],
    correct: 0,
    strategy: 'A perpendicular from the center bisects the chord: half chord = 8 cm. Apply Pythagoras: d² + 8² = 10².',
    derivation: 'd² + 8² = 10² ⇒ d² + 64 = 100 ⇒ d² = 36 ⇒ d = 6 cm.',
    trap: 'Using 16 directly without bisecting into 8.'
  }
];

// 6.1 Probability & Simple Events (4 questions)
g8Math.units[5].subtopics[0].amtQuiz = [
  {
    q: 'When rolling a fair, six-sided standard die (with faces 1 to 6), what is the theoretical probability of rolling a prime number?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correct: 2,
    strategy: 'Identify prime numbers on a die: 2, 3, 5 (3 favorable outcomes out of 6).',
    derivation: 'Sample space S = {1, 2, 3, 4, 5, 6}. Primes = {2, 3, 5} (note: 1 is NOT prime!). Probability P = 3 / 6 = 1/2.',
    trap: 'Counting 1 as prime and getting 4/6 = 2/3.'
  },
  {
    q: 'A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. If one marble is drawn at random, what is the probability that it is NOT blue?',
    options: ['3/10', '7/10', '1/2', '1/5'],
    correct: 1,
    strategy: 'Complementary probability: P(not blue) = 1 - P(blue).',
    derivation: 'Total marbles = 5 + 3 + 2 = 10. Non-blue marbles = 5 red + 2 green = 7. P(not blue) = 7 / 10 (or 1 - 3/10 = 7/10).',
    trap: 'Selecting 3/10 (which is the probability of drawing blue).'
  },
  {
    q: 'What is the sum of the probabilities of all possible mutually exclusive outcomes in any complete sample space?',
    options: ['0', '0.5', '1.0', '100'],
    correct: 2,
    strategy: 'Total probability of a sample space is always 1 (or 100%).',
    derivation: 'By the axioms of probability: Σ P(E_i) = 1.0 for a complete set of exhaustive, mutually exclusive events.',
    trap: 'Selecting 0 or infinity.'
  },
  {
    q: 'If two fair coins are flipped simultaneously, what is the probability of obtaining at least one Head?',
    options: ['1/4', '1/2', '3/4', '1/8'],
    correct: 2,
    strategy: 'Sample space = {HH, HT, TH, TT}. "At least one Head" includes HH, HT, TH.',
    derivation: 'Favorable outcomes = 3. Total outcomes = 4. P = 3/4.',
    trap: 'Thinking only HT and TH count, getting 2/4 = 1/2.'
  }
];

// 7.1 Pythagorean Theorem, Trigonometry & 3D Solids (4 questions)
g8Math.units[6].subtopics[0].amtQuiz = [
  {
    q: 'In a right-angled triangle, the two perpendicular legs measure 9 cm and 12 cm. What is the length of the hypotenuse c?',
    options: ['15 cm', '21 cm', '18 cm', '144 cm'],
    correct: 0,
    strategy: 'Pythagorean Theorem: c² = a² + b².',
    derivation: 'c² = 9² + 12² = 81 + 144 = 225 ⇒ c = √225 = 15 cm. (This is a 3-4-5 triple scaled by 3).',
    trap: 'Adding legs directly: 9 + 12 = 21 cm.'
  },
  {
    q: 'In right-angled triangle ABC with right angle at C, if opposite side a = 3 and adjacent side b = 4, what is the trigonometric ratio tan(A)?',
    options: ['3/5', '4/5', '3/4', '4/3'],
    correct: 2,
    strategy: 'SOH-CAH-TOA: Tangent = Opposite / Adjacent.',
    derivation: 'tan(A) = Opposite / Adjacent = a / b = 3 / 4.',
    trap: 'Dividing opposite by hypotenuse (3/5 is sin A).'
  },
  {
    q: 'What is the total volume of a right circular cylinder having a base radius r = 7 cm and a height h = 10 cm? (Use π ≈ 22/7)',
    options: ['440 cm³', '1,540 cm³', '2,200 cm³', '770 cm³'],
    correct: 1,
    strategy: 'Volume of cylinder: V = πr²h.',
    derivation: 'V = (22/7) × (7²) × 10 = (22/7) × 49 × 10 = 22 × 7 × 10 = 1,540 cm³.',
    trap: 'Forgetting to square the radius (using 2πrh which gives curved surface area = 440 cm²).'
  },
  {
    q: 'If a 10-meter ladder leans against a vertical brick wall reaching a window 8 meters above the ground, how far is the foot of the ladder from the base of the wall?',
    options: ['2 meters', '6 meters', '18 meters', '4 meters'],
    correct: 1,
    strategy: 'Use Pythagoras: a² + b² = c² where hypotenuse c = 10 and height b = 8.',
    derivation: 'a² + 8² = 10² ⇒ a² + 64 = 100 ⇒ a² = 36 ⇒ a = 6 meters.',
    trap: 'Subtracting 10 - 8 = 2 meters.'
  }
];

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_math.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8Math, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g8_math.js with 4 questions per subtopic (total 32 questions)!');
