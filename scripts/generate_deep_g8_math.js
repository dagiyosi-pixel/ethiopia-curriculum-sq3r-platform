const fs = require('fs');
const path = require('path');

const g8Math = {
  id: 'math',
  name: 'Mathematics',
  icon: '📐',
  units: [
    {
      id: 'g8-m-u1',
      number: 'Unit 1',
      title: 'Squares, Square Roots, Cubes and Cube Roots',
      bigIdea: 'Understand perfect squares, radical notation, extraction of square roots, perfect cubes, and cube roots of rational numbers.',
      subtopics: [
        {
          id: 'g8-m-1.1',
          code: '1.1',
          title: 'Squares and Square Roots of Rational Numbers',
          survey: {
            blueprint: 'Square of a number: a² = a × a. Perfect squares: numbers whose square roots are integers. Radical notation: √a. Properties: √(ab) = √a × √b and √(a/b) = √a / √b (b > 0). Evaluation methods: prime factorization and division algorithm.',
            objectives: [
              'Define the square of a rational number and identify perfect squares up to 400.',
              'Extract exact square roots using prime factorization (halving even exponents).',
              'Estimate square roots of non-perfect squares between consecutive integers.'
            ],
            keyFormulas: 'a² = a × a &nbsp;|&nbsp; √a² = |a| &nbsp;|&nbsp; √(ab) = √a × √b &nbsp;|&nbsp; √(a/b) = √a / √b'
          },
          questions: [
            'Why does every positive rational number have two square roots (positive and negative), but √a denotes only the principal (non-negative) root?',
            'How can prime factorization immediately reveal if a number like 1,089 is a perfect square?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>📐</span> 1. SQUARES & PRINCIPAL SQUARE ROOTS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Square of a Number:</strong> When a number <em>a</em> is multiplied by itself, the product <strong>a × a = a²</strong> is called the square of <em>a</em>.<br>
                  • <strong>Two Square Roots:</strong> Every positive number <em>x</em> has two square roots: <strong>+√x</strong> and <strong>-√x</strong>, because (+a)² = a² and (-a)² = a².<br>
                  • <strong>Principal Square Root:</strong> The symbol <strong>√a</strong> (radical symbol) represents <em>only the non-negative</em> (principal) square root.<br>
                  • <em>Non-existence in Real Numbers:</em> For any negative number <em>-x</em>, √(-x) is NOT a real number, because no real number squared can produce a negative result!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🔢</span> 2. PRIME FACTORIZATION METHOD
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A whole number is a <strong>perfect square</strong> if and only if all exponents in its prime factorization are <strong>EVEN</strong>.<br>
                  • <em>Rule for Extraction:</em> To find the square root, factorize the number completely and divide every exponent by 2.<br>
                  • Example: 576 = 2⁶ × 3² ⟹ √576 = 2^(6/2) × 3^(2/2) = 2³ × 3¹ = 8 × 3 = <strong>24</strong>.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>⚡</span> 3. RADICAL LAWS FOR MULTIPLICATION AND DIVISION
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>Product Rule:</strong> √(a × b) = √a × √b (for a, b ≥ 0). E.g., √36 = √(4 × 9) = 2 × 3 = 6.
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>Quotient Rule:</strong> √(a / b) = √a / √b (for a ≥ 0, b > 0). E.g., √(49/81) = 7/9.
                  </div>
                </div>
                <p class="text-xs text-rose-400 font-bold mt-2">
                  ⚠️ Critical Warning: √(a + b) is NEVER equal to √a + √b! (e.g. √(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Square Root Extraction of Decimal and Fraction',
            problem: 'Evaluate: Part A: √(144 / 625). Part B: √0.0196.',
            steps: [
              {
                label: 'Step 1: Apply quotient rule for Part A',
                text: '√(144 / 625) = √144 / √625.'
              },
              {
                label: 'Step 2: Prime factorize or recall perfect squares',
                text: '144 = 12² ⟹ √144 = 12.<br>625 = 25² ⟹ √625 = 25.<br>Result = <strong>12 / 25 = 0.48</strong>.'
              },
              {
                label: 'Step 3: Convert decimal in Part B into fraction',
                text: '0.0196 has 4 decimal places, so: 0.0196 = 196 / 10,000.'
              },
              {
                label: 'Step 4: Take square roots of numerator and denominator',
                text: '√196 = 14 (since 14² = 196).<br>√10,000 = 100.<br>Result = 14 / 100 = <strong>0.14</strong>.'
              }
            ],
            proTip: 'Notice the decimal place rule: when squaring a number with n decimal places, the square has 2n decimal places. Conversely, taking the square root cuts the number of decimal places in half!'
          },
          reciteFlashcards: [
            { q: 'What is the principal square root of 289?', a: '17 (since 17² = 289).' },
            { q: 'Why is √(a + b) ≠ √a + √b?', a: 'Square roots do not distribute over addition; operations under the radical must be evaluated first.' },
            { q: 'What is √0.0004?', a: '0.02 (4 decimal places become 2 decimal places: 2/100).' }
          ],
          amtQuiz: [
            {
              q: 'What is the value of √(0.0081) + √(169 / 25)?',
              options: ['2.69', '2.59', '3.50', '2.79'],
              correct: 0,
              strategy: 'Evaluate each radical separately: √0.0081 = 0.09; √(169/25) = 13/5 = 2.60.',
              derivation: '0.09 + 2.60 = 2.69.',
              trap: 'Assuming √0.0081 = 0.9 (0.9² = 0.81, not 0.0081)!'
            }
          ]
        },
        {
          id: 'g8-m-1.2',
          code: '1.2',
          title: 'Cubes and Cube Roots',
          survey: {
            blueprint: 'Cube of a number: a³ = a × a × a. Perfect cubes. Cube root radical notation: ∛a. Fundamental difference: cube roots of negative numbers ARE real numbers: ∛(-a) = -∛a.',
            objectives: [
              'Evaluate cubes of rational numbers (positive, negative, and fractional).',
              'Extract cube roots of perfect cubes using prime factorization (dividing exponents by 3).',
              'Differentiate why √(-64) is non-real but ∛(-64) = -4 is a valid real number.'
            ],
            keyFormulas: 'a³ = a × a × a &nbsp;|&nbsp; ∛a³ = a &nbsp;|&nbsp; ∛(-a) = -∛a &nbsp;|&nbsp; ∛(ab) = ∛a × ∛b'
          },
          questions: [
            'Why does (-2)³ = -8 prove that every negative number possesses a unique real cube root?',
            'How does dividing prime exponents by 3 extract cube roots of large numbers like 3,375?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
                  <span>🧊</span> 1. CUBES OF RATIONAL NUMBERS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Definition:</strong> The cube of a number <em>a</em> is the product of three factors of <em>a</em>: <strong>a³ = a × a × a</strong>.<br>
                  • <em>Sign Rule for Cubes:</em><br>
                  - The cube of a positive number is always <strong>positive</strong>: (+3)³ = +27.<br>
                  - The cube of a negative number is always <strong>negative</strong>: (-3)³ = (-3) × (-3) × (-3) = <strong>-27</strong>.<br>
                  - The cube of zero is zero: 0³ = 0.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🔍</span> 2. CUBE ROOT & NEGATIVE RADICALS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The <strong>cube root</strong> of a number <em>b</em> is the number <em>a</em> such that <em>a³ = b</em>, written as <strong>∛b</strong>.<br>
                  • <strong>Crucial Contrast with Square Roots:</strong><br>
                  Square roots of negative numbers do NOT exist in real numbers. But because (-a)³ = -a³, the cube root of a negative number is <strong>ALWAYS a real negative number</strong>:<br>
                  <strong>∛(-b) = -∛b</strong>. For example, ∛(-125) = -5, ∛(-8) = -2, ∛(-1) = -1.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>⚙️</span> 3. EXTRACTION BY PRIME FACTORIZATION
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A whole number is a <strong>perfect cube</strong> if all exponents in its prime factorization are multiples of <strong>3</strong>.<br>
                  • To find the cube root: divide all prime exponents by 3.<br>
                  • Example: 3,375 = 3³ × 5³ ⟹ ∛3,375 = 3^(3/3) × 5^(3/3) = 3¹ × 5¹ = <strong>15</strong>.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Evaluating Composite Cube Root Expression',
            problem: 'Evaluate: ∛(-512) + ∛(0.027) - ∛(216 / 125).',
            steps: [
              {
                label: 'Step 1: Evaluate ∛(-512)',
                text: '512 = 2⁹ = (2³)³ = 8³. Therefore, ∛(-512) = <strong>-8</strong>.'
              },
              {
                label: 'Step 2: Evaluate ∛(0.027)',
                text: '0.027 = 27 / 1,000.<br>∛(27 / 1,000) = ∛27 / ∛1,000 = 3 / 10 = <strong>0.3</strong>.'
              },
              {
                label: 'Step 3: Evaluate ∛(216 / 125)',
                text: '216 = 6³ and 125 = 5³.<br>∛(216 / 125) = 6 / 5 = <strong>1.2</strong>.'
              },
              {
                label: 'Step 4: Combine all terms',
                text: 'Expression = -8 + 0.3 - 1.2 = -8 - 0.9 = <strong>-8.9</strong>.'
              }
            ],
            proTip: 'For decimals under a cube root: 3 decimal places become 1 decimal place, 6 become 2, etc., because 0.1 × 0.1 × 0.1 = 0.001!'
          },
          reciteFlashcards: [
            { q: 'What is ∛(-216)?', a: '-6 (since (-6)³ = -216).' },
            { q: 'What is ∛(0.000064)?', a: '0.04 (6 decimal places divided by 3 gives 2 decimal places: 4/100).' },
            { q: 'What is the condition on prime exponents for a number to be a perfect cube?', a: 'Every prime factor exponent must be a multiple of 3.' }
          ],
          amtQuiz: [
            {
              q: 'What is the value of ∛(-729) + ∛(1,000)?',
              options: ['-1', '1', '19', '-19'],
              correct: 1,
              strategy: 'Find ∛(-729) and ∛(1000): (-9)³ = -729, 10³ = 1000.',
              derivation: '∛(-729) = -9. ∛(1,000) = 10. -9 + 10 = 1.',
              trap: 'Saying ∛(-729) does not exist (confusing cube roots with square roots)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-m-u2',
      number: 'Unit 2',
      title: 'Further on Working with Variables',
      bigIdea: 'Master operations on polynomials, algebraic term expansions, multiplication of binomials (FOIL method), and factoring using Highest Common Factors (HCF).',
      subtopics: [
        {
          id: 'g8-m-2.1',
          code: '2.1',
          title: 'Algebraic Terms, Binomial Multiplication & Factoring',
          survey: {
            blueprint: 'Polynomial structure: monomials, binomials, trinomials. Multiplication of binomials: (ax + b)(cx + d) via distributive / FOIL method. Special products: (a + b)², (a - b)², and difference of squares (a + b)(a - b) = a² - b². Factoring by HCF and grouping.',
            objectives: [
              'Multiply binomials using FOIL (First, Outer, Inner, Last).',
              'Apply the Difference of Two Squares identity: a² - b² = (a + b)(a - b).',
              'Factor algebraic expressions by extracting the Highest Common Factor (HCF).'
            ],
            keyFormulas: '(a+b)(c+d) = ac+ad+bc+bd &nbsp;|&nbsp; (a±b)² = a² ± 2ab + b² &nbsp;|&nbsp; a² - b² = (a+b)(a-b)'
          },
          questions: [
            'Why does (x + 3)² NOT equal x² + 9, and where does the middle term 6x come from geometrically?',
            'How can the Difference of Squares formula compute 102 × 98 in your head in 2 seconds?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>✖️</span> 1. BINOMIAL MULTIPLICATION (THE FOIL METHOD)
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  When multiplying two binomials <strong>(a + b)(c + d)</strong>, distribute every term in the first bracket to every term in the second bracket:<br>
                  • <strong>F</strong> (First terms): a × c = <em>ac</em><br>
                  • <strong>O</strong> (Outer terms): a × d = <em>ad</em><br>
                  • <strong>I</strong> (Inner terms): b × c = <em>bc</em><br>
                  • <strong>L</strong> (Last terms): b × d = <em>bd</em><br>
                  Formula: <strong>(a + b)(c + d) = ac + ad + bc + bd</strong>. Combine any like terms!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>⚡</span> 2. THREE SACRED SPECIAL PRODUCT IDENTITIES
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>1. Square of a Sum:</strong> (a + b)² = <strong>a² + 2ab + b²</strong>.<br>
                    <em>Common Trap:</em> Never write (a + b)² = a² + b²! The middle term +2ab is mandatory!
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>2. Square of a Difference:</strong> (a - b)² = <strong>a² - 2ab + b²</strong>.
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>3. Difference of Two Squares:</strong> (a + b)(a - b) = <strong>a² - b²</strong>.<br>
                    <em>Mental Math Miracle:</em> 102 × 98 = (100 + 2)(100 - 2) = 100² - 2² = 10,000 - 4 = <strong>9,996</strong>!
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🧩</span> 3. FACTORING BY HIGHEST COMMON FACTOR (HCF)
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Factoring is the reverse process of multiplication:<br>
                  1. Find the numerical GCF of all coefficients.<br>
                  2. Find the lowest power of each shared variable.<br>
                  3. Factor out the complete HCF in front of parentheses.<br>
                  Example: 12x³y² - 18x²y³ = <strong>6x²y²(2x - 3y)</strong>.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Expanding Binomials & Factoring by Grouping',
            problem: 'Part A: Expand and simplify (3x - 4)(2x + 5). Part B: Factor completely: 5x² - 20.',
            steps: [
              {
                label: 'Step 1: Apply FOIL for Part A',
                text: 'First: (3x)(2x) = 6x².<br>Outer: (3x)(5) = +15x.<br>Inner: (-4)(2x) = -8x.<br>Last: (-4)(5) = -20.'
              },
              {
                label: 'Step 2: Combine like terms',
                text: '6x² + (15x - 8x) - 20 = <strong>6x² + 7x - 20</strong>.'
              },
              {
                label: 'Step 3: Extract HCF for Part B',
                text: 'Both terms 5x² and 20 are divisible by 5:<br>5x² - 20 = 5(x² - 4).'
              },
              {
                label: 'Step 4: Factor the difference of squares',
                text: 'x² - 4 = (x + 2)(x - 2).<br>Complete factorization: <strong>5(x + 2)(x - 2)</strong>.'
              }
            ],
            proTip: 'Always check if the expression inside parentheses can be factored further using difference of squares!'
          },
          reciteFlashcards: [
            { q: 'What is the expansion of (a - b)²?', a: 'a² - 2ab + b².' },
            { q: 'What is the factored form of x² - 81?', a: '(x + 9)(x - 9).' },
            { q: 'What is the HCF of 16x⁴y² and 24x²y⁵?', a: '8x²y².' }
          ],
          amtQuiz: [
            {
              q: 'Expand and simplify: (2x - 5)²',
              options: ['4x² - 25', '4x² - 20x + 25', '4x² + 25', '4x² - 10x + 25'],
              correct: 1,
              strategy: 'Apply identity (a - b)² = a² - 2ab + b² with a = 2x and b = 5.',
              derivation: '(2x)² - 2(2x)(5) + 5² = 4x² - 20x + 25.',
              trap: 'Writing 4x² - 25 or 4x² + 25 forgets the middle term -2ab = -20x!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-m-u3',
      number: 'Unit 3',
      title: 'Linear Equations and Inequalities in Two Variables',
      bigIdea: 'Explore the 2D Cartesian coordinate plane, plotting points, graphing linear equations, slope-intercept form (y = mx + c), and linear inequalities.',
      subtopics: [
        {
          id: 'g8-m-3.1',
          code: '3.1',
          title: 'Cartesian Coordinate System & Linear Graphs',
          survey: {
            blueprint: 'Cartesian plane: x-axis (abscissa), y-axis (ordinate), origin (0,0), and 4 quadrants. Linear equations in two variables: Ax + By = C. Slope-intercept form: y = mx + c (m = slope, c = y-intercept). Slope formula: m = (y₂ - y₁) / (x₂ - x₁).',
            objectives: [
              'Plot ordered pairs (x, y) across all 4 quadrants of the Cartesian plane.',
              'Calculate the slope m of a line passing through two given points.',
              'Graph linear equations by finding the x-intercept and y-intercept.'
            ],
            keyFormulas: 'Slope: m = (y₂ - y₁)/(x₂ - x₁) &nbsp;|&nbsp; Slope-intercept: y = mx + c &nbsp;|&nbsp; x-intercept: set y=0; y-intercept: set x=0'
          },
          questions: [
            'Why does a horizontal line have a slope of zero while a vertical line has an undefined slope?',
            'How do intercepts provide the fastest way to graph 3x + 4y = 12 without creating a huge table of values?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>🌐</span> 1. THE CARTESIAN COORDINATE PLANE
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Invented by René Descartes, the Cartesian plane consists of two perpendicular number lines intersecting at the <strong>Origin (0, 0)</strong>:<br>
                  • <strong>Horizontal x-axis:</strong> positive to right, negative to left.<br>
                  • <strong>Vertical y-axis:</strong> positive upward, negative downward.<br>
                  • <strong>4 Quadrants:</strong><br>
                  - Quadrant I: (+, +) &nbsp;|&nbsp; Quadrant II: (-, +)<br>
                  - Quadrant III: (-, -) &nbsp;|&nbsp; Quadrant IV: (+, -).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>📈</span> 2. SLOPE OF A LINE (RATE OF STEEPNESS)
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The <strong>slope (m)</strong> measures steepness as ratio of vertical change (rise) to horizontal change (run):<br>
                  <strong>m = (y₂ - y₁) / (x₂ - x₁)</strong> (where x₂ ≠ x₁).<br>
                  • <em>Positive Slope (m > 0):</em> Line rises from left to right.<br>
                  • <em>Negative Slope (m < 0):</em> Line falls from left to right.<br>
                  • <em>Zero Slope (m = 0):</em> Horizontal line (y = c).<br>
                  • <em>Undefined Slope:</em> Vertical line (x = k, division by zero: x₂ - x₁ = 0).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🎯</span> 3. DUAL-INTERCEPT GRAPHING METHOD
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To graph any linear equation Ax + By = C:<br>
                  1. <strong>Find x-intercept:</strong> Set y = 0 and solve for x ⟹ point (x, 0).<br>
                  2. <strong>Find y-intercept:</strong> Set x = 0 and solve for y ⟹ point (0, y).<br>
                  3. Plot these two points and draw a straight line through them!
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Finding Slope and Graphing via Intercepts',
            problem: 'Part A: Find the slope of the line passing through A(2, -3) and B(6, 5). Part B: Find the x- and y-intercepts of 3x + 2y = 12.',
            steps: [
              {
                label: 'Step 1: Calculate slope for Part A',
                text: 'x₁ = 2, y₁ = -3, x₂ = 6, y₂ = 5.<br>m = [5 - (-3)] / [6 - 2] = (5 + 3) / 4 = 8 / 4 = <strong>2</strong>.'
              },
              {
                label: 'Step 2: Find x-intercept for Part B',
                text: 'Set y = 0:<br>3x + 2(0) = 12 ⟹ 3x = 12 ⟹ x = 4.<br>x-intercept point: <strong>(4, 0)</strong>.'
              },
              {
                label: 'Step 3: Find y-intercept for Part B',
                text: 'Set x = 0:<br>3(0) + 2y = 12 ⟹ 2y = 12 ⟹ y = 6.<br>y-intercept point: <strong>(0, 6)</strong>.'
              }
            ],
            proTip: 'Slope m = 2 means for every 1 step you move right horizontally, you move 2 steps up vertically!'
          },
          reciteFlashcards: [
            { q: 'What is the slope of any horizontal line?', a: '0 (zero vertical rise).' },
            { q: 'What is the slope of any vertical line?', a: 'Undefined (division by zero horizontal run).' },
            { q: 'In y = -4x + 7, what is the slope and y-intercept?', a: 'Slope m = -4, y-intercept c = 7 (point (0, 7)).' }
          ],
          amtQuiz: [
            {
              q: 'What is the slope of the line passing through (-1, 4) and (3, -4)?',
              options: ['-2', '2', '-1/2', '0'],
              correct: 0,
              strategy: 'Apply slope formula: m = (y₂ - y₁) / (x₂ - x₁).',
              derivation: 'm = (-4 - 4) / [3 - (-1)] = -8 / (3 + 1) = -8 / 4 = -2.',
              trap: 'Subtracting coordinates in opposite orders: e.g. (y₂ - y₁)/(x₁ - x₂) flips the sign!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-m-u4',
      number: 'Unit 4',
      title: 'Similar Figures',
      bigIdea: 'Understand geometric similarity: scale factors (ratio of similitude), conditions for similarity of polygons, and triangle similarity criteria (AAA, SAS, SSS).',
      subtopics: [
        {
          id: 'g8-m-4.1',
          code: '4.1',
          title: 'Geometric Similarity & Triangle Criteria',
          survey: {
            blueprint: 'Similarity symbol: ~. Two figures are similar if: (1) Corresponding angles are equal, and (2) Corresponding sides are proportional (Ratio of Similitude k). Triangle criteria: AAA (or AA), SAS, SSS.',
            objectives: [
              'Distinguish between congruent figures (same shape, same size) and similar figures (same shape, proportional size).',
              'Calculate unknown side lengths using the ratio of similitude k.',
              'Apply AA, SAS, and SSS similarity theorems to solve practical shadow and height problems.'
            ],
            keyFormulas: 'AB/DE = BC/EF = AC/DF = k &nbsp;|&nbsp; Area ratio = k² &nbsp;|&nbsp; Volume ratio = k³'
          },
          questions: [
            'If the linear scale factor between two similar triangles is 3, why is the ratio of their areas 9 and not 3?',
            'How did ancient Greek mathematicians measure the exact height of the Great Pyramid using only a stick and similar triangles?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>📐</span> 1. DEFINITION OF SIMILAR POLYGONS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Two polygons are <strong>similar (~)</strong> if and only if:<br>
                  1. All pairs of <strong>corresponding angles are congruent (equal)</strong>.<br>
                  2. All pairs of <strong>corresponding sides are proportional</strong>.<br>
                  • The constant ratio <strong>k = Side₁ / Side₂</strong> is called the <strong>Scale Factor</strong> or <em>Ratio of Similitude</em>.<br>
                  • <em>Area Scaling Theorem:</em> If the ratio of sides is k, the ratio of their areas is <strong>k²</strong>!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🔺</span> 2. TRIANGLE SIMILARITY THEOREMS
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>AA (Angle-Angle) Criterion:</strong> If two angles of one triangle are equal to two angles of another, the third angles must also be equal (180° rule), and the triangles are SIMILAR.</p>
                  <p>• <strong>SSS (Side-Side-Side) Criterion:</strong> If the three sets of corresponding sides are in the exact same ratio, the triangles are SIMILAR.</p>
                  <p>• <strong>SAS (Side-Angle-Side) Criterion:</strong> If two pairs of corresponding sides are proportional AND their included angles are equal, the triangles are SIMILAR.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Thales Shadow Problem for Real Heights',
            problem: 'A vertical pole 2.5 meters tall casts a shadow of 1.5 meters on the ground in Hawassa. At the exact same moment, a nearby telecom tower casts a shadow of 36 meters. Find the height of the telecom tower.',
            steps: [
              {
                label: 'Step 1: Recognize similar triangles',
                text: 'Both the pole and the tower form right angles (90°) with the ground. Sun rays strike at the identical angle of elevation. By AA similarity, the two triangles are <strong>similar</strong>.'
              },
              {
                label: 'Step 2: Set up proportion of corresponding sides',
                text: 'Height of Tower (H) / Height of Pole (2.5) = Shadow of Tower (36) / Shadow of Pole (1.5).'
              },
              {
                label: 'Step 3: Solve for H via cross-multiplication',
                text: 'H = (36 / 1.5) × 2.5.<br>36 ÷ 1.5 = 24.<br>H = 24 × 2.5 = <strong>60 meters</strong>.'
              }
            ],
            proTip: 'Always align corresponding parts: (Height / Shadow) = (Height / Shadow) ensures zero calculation mistakes!'
          },
          reciteFlashcards: [
            { q: 'If two similar triangles have scale factor k = 4, what is the ratio of their areas?', a: 'k² = 4² = 16.' },
            { q: 'What is the AA similarity criterion?', a: 'If two angles of one triangle equal two angles of another, the triangles are similar.' },
            { q: 'Are all equilateral triangles similar to each other?', a: 'Yes! Every equilateral triangle has three 60° angles, satisfying AAA similarity.' }
          ],
          amtQuiz: [
            {
              q: 'Triangle ABC is similar to Triangle DEF with scale factor AB/DE = 3/5. If the area of Triangle ABC is 36 cm², what is the area of Triangle DEF?',
              options: ['60 cm²', '100 cm²', '20 cm²', '120 cm²'],
              correct: 1,
              strategy: 'The ratio of areas of similar figures equals the square of the ratio of their sides: Area₁ / Area₂ = (3/5)² = 9/25.',
              derivation: '36 / Area₂ = 9 / 25 ⟹ Area₂ = (36 × 25) / 9 = 4 × 25 = 100 cm².',
              trap: 'Multiplying by 5/3 directly gives 60 cm², which forgets to square the scale factor!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-m-u5',
      number: 'Unit 5',
      title: 'Circles',
      bigIdea: 'Explore properties of circles: chords, tangents, secants, central angles, arcs, and the inscribed angle theorem.',
      subtopics: [
        {
          id: 'g8-m-5.1',
          code: '5.1',
          title: 'Chords, Tangents & Inscribed Angles',
          survey: {
            blueprint: 'Circle geometry: Radius (r), Diameter (d = 2r), Chord (line segment joining two points on circle), Tangent (line touching circle at exactly 1 point, perpendicular to radius). Central angle = arc measure. Inscribed angle = ½ × intercepted arc.',
            objectives: [
              'Apply the Tangent-Radius theorem: a tangent is perpendicular to the radius at the point of contact (90°).',
              'Calculate angle measures using the Inscribed Angle Theorem: ∠Inscribed = ½ × ∠Central.',
              'Apply Thales Circle Theorem: any angle inscribed in a semicircle is a right angle (90°).'
            ],
            keyFormulas: '∠Inscribed = ½ × ∠Central &nbsp;|&nbsp; Angle in semicircle = 90° &nbsp;|&nbsp; Tangent ⊥ Radius (90°)'
          },
          questions: [
            'Why is any angle inscribed in a semicircle automatically a 90° right angle?',
            'How does the perpendicular from the center of a circle to a chord always bisect that chord?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>⭕</span> 1. THE INSCRIBED ANGLE THEOREM
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Central Angle:</strong> An angle whose vertex is at the center of the circle. Its measure equals the intercepted arc: <em>∠AOB = arc(AB)</em>.<br>
                  • <strong>Inscribed Angle:</strong> An angle whose vertex lies on the circle and whose sides are chords.<br>
                  • <strong>Fundamental Theorem:</strong> The measure of an inscribed angle is <strong>HALF</strong> the measure of its intercepted central angle:<br>
                  <strong>∠APB = ½ × ∠AOB</strong>.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>📐</span> 2. THALES SEMICIRCLE THEOREM & CHORD PROPERTIES
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Angle in a Semicircle:</strong> If an inscribed angle subtends a diameter, its central angle is a straight line (180°). Therefore, its inscribed angle is 180° / 2 = <strong>90°</strong>!</p>
                  <p>• <strong>Chord Bisection:</strong> The perpendicular line dropped from the circle center to any chord bisects the chord into two equal halves.</p>
                  <p>• <strong>Tangent Perpendicularity:</strong> A tangent to a circle is perpendicular (90°) to the radius drawn to the point of contact.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Inscribed Angles and Semicircles',
            problem: 'In a circle with center O, AB is a diameter and C is any point on the circumference. If ∠ABC = 35°, find the measure of ∠BAC.',
            steps: [
              {
                label: 'Step 1: Identify angle in semicircle',
                text: 'Because AB is a diameter, ∠ACB is inscribed in a semicircle. By Thales theorem, <strong>∠ACB = 90°</strong>.'
              },
              {
                label: 'Step 2: Apply triangle angle sum theorem',
                text: 'In Triangle ABC: ∠BAC + ∠ABC + ∠ACB = 180°.<br>∠BAC + 35° + 90° = 180°.<br>∠BAC + 125° = 180°.'
              },
              {
                label: 'Step 3: Calculate ∠BAC',
                text: '∠BAC = 180° - 125° = <strong>55°</strong>.'
              }
            ],
            proTip: 'In any right-angled triangle inscribed in a semicircle, the two acute angles are complementary (they add to 90°): 90° - 35° = 55°!'
          },
          reciteFlashcards: [
            { q: 'If a central angle measures 110°, what is the measure of an inscribed angle subtending the same arc?', a: '55° (half of 110°).' },
            { q: 'What is the angle between a tangent line and the radius at the point of tangency?', a: '90 degrees (perpendicular).' },
            { q: 'What is the measure of an angle inscribed in a semicircle?', a: 'Always 90 degrees.' }
          ],
          amtQuiz: [
            {
              q: 'Points A, B, and C lie on a circle centered at O. The central angle ∠AOB = 130°. What is the measure of the inscribed angle ∠ACB that subtends the same arc?',
              options: ['65°', '130°', '260°', '50°'],
              correct: 0,
              strategy: 'Apply the Inscribed Angle Theorem: ∠Inscribed = ½ × ∠Central.',
              derivation: '∠ACB = 130° / 2 = 65°.',
              trap: 'Assuming inscribed angles equal central angles (130°)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-m-u6',
      number: 'Unit 6',
      title: 'Introduction to Probability',
      bigIdea: 'Understand uncertainty, experiments, outcomes, sample spaces (S), events (E), theoretical probability, and complementary events.',
      subtopics: [
        {
          id: 'g8-m-6.1',
          code: '6.1',
          title: 'The Concept of Probability & Simple Events',
          survey: {
            blueprint: 'Random experiment: action with unpredictable outcomes. Sample space S: set of all possible outcomes. Event E: subset of sample space. Classical probability formula: P(E) = n(E) / n(S). Range of probability: 0 ≤ P(E) ≤ 1. Impossible event = 0, certain event = 1.',
            objectives: [
              'List sample spaces for coin flips, dice rolls, and card draws.',
              'Calculate theoretical probability of simple events: P(E) = n(E)/n(S).',
              'Apply the Complement Rule: P(not E) = 1 - P(E).'
            ],
            keyFormulas: 'P(E) = n(E) / n(S) &nbsp;|&nbsp; 0 ≤ P(E) ≤ 1 &nbsp;|&nbsp; P(E\') = 1 - P(E)'
          },
          questions: [
            'Why can a probability value NEVER be negative or exceed 1.0 (100%)?',
            'How does the complement rule P(not E) = 1 - P(E) drastically speed up solving "at least one" problems?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>🎲</span> 1. PROBABILITY FOUNDATIONS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Random Experiment:</strong> An activity where the outcome cannot be predicted with certainty in advance.<br>
                  • <strong>Sample Space (S):</strong> The complete set of all possible outcomes. For rolling a fair 6-sided die: <em>S = {1, 2, 3, 4, 5, 6}</em>, so <em>n(S) = 6</em>.<br>
                  • <strong>Event (E):</strong> Any subset of outcomes from the sample space. E.g., rolling an even number: <em>E = {2, 4, 6}</em>, so <em>n(E) = 3</em>.<br>
                  • <strong>Probability Formula:</strong> <strong>P(E) = n(E) / n(S)</strong>.<br>
                  P(even) = 3 / 6 = <strong>1/2 = 0.5 = 50%</strong>.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>⚖️</span> 2. THE THREE SACRED PROBABILITY AXIOMS
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p><strong>1. Probability Bounds:</strong> For any event E, <strong>0 ≤ P(E) ≤ 1</strong>. A probability can never be negative (-0.2) or greater than 1 (1.5)!</p>
                  <p><strong>2. Certain & Impossible Events:</strong> P(Impossible Event ∅) = <strong>0</strong> (e.g. rolling a 7 on a 6-sided die). P(Certain Event S) = <strong>1</strong>.</p>
                  <p><strong>3. Complementary Event Rule:</strong> The event that E does NOT happen is denoted E' (or not E):<br>
                  <strong>P(E') = 1 - P(E)</strong>.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Prime Numbers on a Die and Bag of Marbles',
            problem: 'A bag contains 5 red, 8 blue, and 7 green marbles. One marble is drawn at random. What is the probability that the marble is NOT blue?',
            steps: [
              {
                label: 'Step 1: Calculate total sample space n(S)',
                text: 'n(S) = 5 + 8 + 7 = <strong>20 marbles</strong>.'
              },
              {
                label: 'Step 2: Find probability of drawing Blue P(B)',
                text: 'Number of blue marbles n(B) = 8.<br>P(B) = 8 / 20 = 2 / 5 = <strong>0.40</strong>.'
              },
              {
                label: 'Step 3: Apply the Complement Rule',
                text: 'P(not Blue) = 1 - P(B) = 1 - 2/5 = <strong>3/5 = 0.60 = 60%</strong>.<br>(Alternatively: Red + Green = 5 + 7 = 12; 12/20 = 3/5!).'
              }
            ],
            proTip: 'When an event asks for "NOT X", subtracting P(X) from 1 is almost always faster than adding all other cases!'
          },
          reciteFlashcards: [
            { q: 'What is the probability of an impossible event?', a: '0.' },
            { q: 'If P(Rain) = 0.35, what is P(No Rain)?', a: '1 - 0.35 = 0.65 (65%).' },
            { q: 'What are the prime numbers in a standard 6-sided die sample space {1, 2, 3, 4, 5, 6}?', a: '{2, 3, 5} (1 is neither prime nor composite!).' }
          ],
          amtQuiz: [
            {
              q: 'A standard 6-sided die is rolled once. What is the probability of obtaining a prime number?',
              options: ['1/2', '2/3', '1/3', '5/6'],
              correct: 0,
              strategy: 'Identify prime numbers in {1, 2, 3, 4, 5, 6}: 2, 3, 5 (3 prime numbers).',
              derivation: 'P(prime) = 3 / 6 = 1/2.',
              trap: 'Counting 1 as a prime number (1 is NOT prime) gives 4/6 = 2/3!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-m-u7',
      number: 'Unit 7',
      title: 'Geometry and Measurements',
      bigIdea: 'Master the Pythagorean Theorem, right triangle applications, introduction to trigonometric ratios (sin, cos, tan), and surface area & volume of 3D solids (pyramids, cones, spheres).',
      subtopics: [
        {
          id: 'g8-m-7.1',
          code: '7.1',
          title: 'Pythagorean Theorem, Trigonometry & 3D Solids',
          survey: {
            blueprint: 'Pythagorean Theorem: a² + b² = c² (where c is hypotenuse). Pythagorean triples: (3,4,5), (5,12,13), (8,15,17). Trigonometric ratios in right triangles: sin θ = Opp/Hyp, cos θ = Adj/Hyp, tan θ = Opp/Adj (SOH CAH TOA). 3D solids: Sphere Volume = (4/3)πr³, Cone Volume = (1/3)πr²h.',
            objectives: [
              'Calculate unknown sides of right triangles using Pythagoras: c = √(a² + b²).',
              'Set up sine, cosine, and tangent ratios using SOH CAH TOA.',
              'Calculate surface area and volume of right pyramids, cones, and spheres.'
            ],
            keyFormulas: 'a² + b² = c² &nbsp;|&nbsp; sin θ = Opp/Hyp &nbsp;|&nbsp; cos θ = Adj/Hyp &nbsp;|&nbsp; tan θ = Opp/Adj &nbsp;|&nbsp; Sphere V = 4/3 πr³ &nbsp;|&nbsp; Cone V = 1/3 πr²h'
          },
          questions: [
            'How can the converse of the Pythagorean Theorem verify whether a room corner is an exact 90° right angle in construction?',
            'What is the mnemonic SOH CAH TOA and how does it define trigonometry ratios?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>📐</span> 1. THE PYTHAGOREAN THEOREM & ITS CONVERSE
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  In any right-angled triangle, the square of the longest side (the <strong>hypotenuse c</strong>, opposite the 90° angle) equals the sum of the squares of the other two legs (a and b):<br>
                  <strong>a² + b² = c²</strong> ⟹ <strong>c = √(a² + b²)</strong>.<br>
                  • <em>Converse Theorem:</em> If the side lengths of a triangle satisfy a² + b² = c², the triangle is guaranteed to be a <strong>right-angled triangle</strong>!<br>
                  • <em>Pythagorean Triples to Memorize:</em> (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🔺</span> 2. INTRODUCTION TO TRIGONOMETRIC RATIOS (SOH CAH TOA)
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  For an acute angle θ in a right-angled triangle:<br>
                  • <strong>Sine:</strong> <strong>sin θ = Opposite / Hypotenuse</strong> (SOH)<br>
                  • <strong>Cosine:</strong> <strong>cos θ = Adjacent / Hypotenuse</strong> (CAH)<br>
                  • <strong>Tangent:</strong> <strong>tan θ = Opposite / Adjacent</strong> (TOA)<br>
                  • Relationship: <strong>tan θ = sin θ / cos θ</strong>.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🌐</span> 3. 3D SOLID MEASUREMENTS: SPHERES & CONES
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>Right Circular Cone:</strong><br>
                    - Slant height: l = √(r² + h²).<br>
                    - Volume: <strong>V = ⅓ πr²h</strong>.<br>
                    - Curved Area = πrl &nbsp;|&nbsp; Total Area = πr(l + r).
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>Sphere:</strong><br>
                    - Surface Area: <strong>A = 4πr²</strong>.<br>
                    - Volume: <strong>V = ⁴⁄₃ πr³</strong>.
                  </div>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Pythagorean Ladder & Volume of a Cone',
            problem: 'Part A: A 13-meter ladder leans against a vertical building wall. Its base is placed 5 meters away from the wall. How high up the wall does the ladder reach? Part B: Find the volume of a cone with radius r = 6 cm and height h = 7 cm (use π = 22/7).',
            steps: [
              {
                label: 'Step 1: Set up Pythagoras for Part A',
                text: 'Hypotenuse c = 13 m. Base a = 5 m. Wall height = b.<br>a² + b² = c² ⟹ 5² + b² = 13².<br>25 + b² = 169.'
              },
              {
                label: 'Step 2: Solve for height b',
                text: 'b² = 169 - 25 = 144.<br>b = √144 = <strong>12 meters</strong>.'
              },
              {
                label: 'Step 3: Calculate Cone Volume for Part B',
                text: 'Volume V = ⅓ × π × r² × h.<br>Substitute: V = ⅓ × (22/7) × (6)² × 7.<br>Cancel the 7 with 7, and ⅓ × 36 = 12.<br>V = 12 × 22 = <strong>264 cm³</strong>.'
              }
            ],
            proTip: 'Recognizing the (5, 12, 13) Pythagorean triple immediately gives 12 meters without squaring or subtracting!'
          },
          reciteFlashcards: [
            { q: 'What is the formula for the volume of a sphere?', a: 'V = (4/3)πr³.' },
            { q: 'What is tan θ defined as in a right-angled triangle?', a: 'Opposite side / Adjacent side.' },
            { q: 'If two legs of a right triangle are 6 cm and 8 cm, what is the hypotenuse?', a: '10 cm (scaled 3-4-5 triple: 2 × 5 = 10).' }
          ],
          amtQuiz: [
            {
              q: 'In a right-angled triangle, the side opposite angle θ is 9 cm and the adjacent side is 12 cm. What is the value of cos θ?',
              options: ['4/5', '3/5', '3/4', '5/4'],
              correct: 0,
              strategy: 'First find hypotenuse using Pythagoras: c = √(9² + 12²) = √(81 + 144) = √225 = 15 cm. Then cos θ = Adjacent / Hypotenuse.',
              derivation: 'cos θ = 12 / 15 = 4/5.',
              trap: '3/5 is sin θ (Opposite / Hypotenuse)!'
            }
          ]
        }
      ]
    }
  ]
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_math.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8Math, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote deep g8_math.js with all 7 units and rich textbook flesh!');
