module.exports = {
  "id": "math",
  "name": "Mathematics",
  "icon": "📐",
  "units": [
    {
      "id": "g8-m-u1",
      "number": "Unit 1",
      "title": "Squares, Square Roots, Cubes and Cube Roots",
      "bigIdea": "Understand perfect squares, radical notation, extraction of square roots, perfect cubes, and cube roots of rational numbers.",
      "subtopics": [
        {
          "id": "g8-m-1.1",
          "code": "1.1",
          "title": "Squares and Square Roots of Rational Numbers",
          "survey": {
            "blueprint": "Square of a number: a² = a × a. Perfect squares: numbers whose square roots are integers. Radical notation: √a. Properties: √(ab) = √a × √b and √(a/b) = √a / √b (b > 0). Evaluation methods: prime factorization and division algorithm.",
            "objectives": [
              "Define the square of a rational number and identify perfect squares up to 400.",
              "Extract exact square roots using prime factorization (halving even exponents).",
              "Estimate square roots of non-perfect squares between consecutive integers."
            ],
            "keyFormulas": "a² = a × a &nbsp;|&nbsp; √a² = |a| &nbsp;|&nbsp; √(ab) = √a × √b &nbsp;|&nbsp; √(a/b) = √a / √b"
          },
          "questions": [
            "Why does every positive rational number have two square roots (positive and negative), but √a denotes only the principal (non-negative) root?",
            "How can prime factorization immediately reveal if a number like 1,089 is a perfect square?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>📐</span> 1. SQUARES & PRINCIPAL SQUARE ROOTS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Square of a Number:</strong> When a number <em>a</em> is multiplied by itself, the product <strong>a × a = a²</strong> is called the square of <em>a</em>.<br>\n                  • <strong>Two Square Roots:</strong> Every positive number <em>x</em> has two square roots: <strong>+√x</strong> and <strong>-√x</strong>, because (+a)² = a² and (-a)² = a².<br>\n                  • <strong>Principal Square Root:</strong> The symbol <strong>√a</strong> (radical symbol) represents <em>only the non-negative</em> (principal) square root.<br>\n                  • <em>Non-existence in Real Numbers:</em> For any negative number <em>-x</em>, √(-x) is NOT a real number, because no real number squared can produce a negative result!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🔢</span> 2. PRIME FACTORIZATION METHOD\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  A whole number is a <strong>perfect square</strong> if and only if all exponents in its prime factorization are <strong>EVEN</strong>.<br>\n                  • <em>Rule for Extraction:</em> To find the square root, factorize the number completely and divide every exponent by 2.<br>\n                  • Example: 576 = 2⁶ × 3² ⟹ √576 = 2^(6/2) × 3^(2/2) = 2³ × 3¹ = 8 × 3 = <strong>24</strong>.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>⚡</span> 3. RADICAL LAWS FOR MULTIPLICATION AND DIVISION\n                </h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Product Rule:</strong> √(a × b) = √a × √b (for a, b ≥ 0). E.g., √36 = √(4 × 9) = 2 × 3 = 6.\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Quotient Rule:</strong> √(a / b) = √a / √b (for a ≥ 0, b > 0). E.g., √(49/81) = 7/9.\n                  </div>\n                </div>\n                <p class=\"text-xs text-rose-400 font-bold mt-2\">\n                  ⚠️ Critical Warning: √(a + b) is NEVER equal to √a + √b! (e.g. √(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Square Root Extraction of Decimal and Fraction",
            "problem": "Evaluate: Part A: √(144 / 625). Part B: √0.0196.",
            "steps": [
              {
                "label": "Step 1: Apply quotient rule for Part A",
                "text": "√(144 / 625) = √144 / √625."
              },
              {
                "label": "Step 2: Prime factorize or recall perfect squares",
                "text": "144 = 12² ⟹ √144 = 12.<br>625 = 25² ⟹ √625 = 25.<br>Result = <strong>12 / 25 = 0.48</strong>."
              },
              {
                "label": "Step 3: Convert decimal in Part B into fraction",
                "text": "0.0196 has 4 decimal places, so: 0.0196 = 196 / 10,000."
              },
              {
                "label": "Step 4: Take square roots of numerator and denominator",
                "text": "√196 = 14 (since 14² = 196).<br>√10,000 = 100.<br>Result = 14 / 100 = <strong>0.14</strong>."
              }
            ],
            "proTip": "Notice the decimal place rule: when squaring a number with n decimal places, the square has 2n decimal places. Conversely, taking the square root cuts the number of decimal places in half!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the principal square root of 289?",
              "a": "17 (since 17² = 289)."
            },
            {
              "q": "Why is √(a + b) ≠ √a + √b?",
              "a": "Square roots do not distribute over addition; operations under the radical must be evaluated first."
            },
            {
              "q": "What is √0.0004?",
              "a": "0.02 (4 decimal places become 2 decimal places: 2/100)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the principal square root of the rational number 144 / 289?",
              "options": [
                "12 / 17",
                "14 / 19",
                "12 / 289",
                "72 / 144.5"
              ],
              "correct": 0,
              "strategy": "Take the square root of the numerator and denominator independently: √(a/b) = √a / √b.",
              "derivation": "√144 = 12 and √289 = 17 (since 17² = 289). Therefore, √(144/289) = 12/17.",
              "trap": "Dividing numerator and denominator by 2 instead of finding square roots."
            },
            {
              "q": "Between which two consecutive whole numbers does the irrational number √54 lie on the continuous number line?",
              "options": [
                "5 and 6",
                "6 and 7",
                "7 and 8",
                "8 and 9"
              ],
              "correct": 2,
              "strategy": "Find the nearest perfect squares bounding 54: 7² = 49 and 8² = 64.",
              "derivation": "Since 49 < 54 < 64, taking square roots gives √49 < √54 < √64 ⇒ 7 < √54 < 8.",
              "trap": "Selecting 6 and 7 (thinking 6² = 36)."
            },
            {
              "q": "What is the value of the expression: (√0.09) + (√0.64)?",
              "options": [
                "0.73",
                "1.1",
                "0.11",
                "0.073"
              ],
              "correct": 1,
              "strategy": "Evaluate decimals: √0.09 = 0.3 (since 0.3² = 0.09) and √0.64 = 0.8 (since 0.8² = 0.64).",
              "derivation": "0.3 + 0.8 = 1.1.",
              "trap": "Forgetting place value and thinking √0.09 = 0.03."
            },
            {
              "q": "Which of the following numbers is an irrational number that cannot be written in the form a/b where a, b ∈ Z?",
              "options": [
                "√196",
                "√121",
                "√75",
                "3.1415"
              ],
              "correct": 2,
              "strategy": "The square root of any non-perfect square is irrational.",
              "derivation": "√196 = 14 (rational), √121 = 11 (rational), 3.1415 is a terminating decimal (rational). 75 is not a perfect square (75 = 25 × 3 ⇒ 5√3), so √75 is irrational.",
              "trap": "Confusing 3.1415 (a terminating decimal, which is rational) with π."
            }
          ]
        },
        {
          "id": "g8-m-1.2",
          "code": "1.2",
          "title": "Cubes and Cube Roots",
          "survey": {
            "blueprint": "Cube of a number: a³ = a × a × a. Perfect cubes. Cube root radical notation: ∛a. Fundamental difference: cube roots of negative numbers ARE real numbers: ∛(-a) = -∛a.",
            "objectives": [
              "Evaluate cubes of rational numbers (positive, negative, and fractional).",
              "Extract cube roots of perfect cubes using prime factorization (dividing exponents by 3).",
              "Differentiate why √(-64) is non-real but ∛(-64) = -4 is a valid real number."
            ],
            "keyFormulas": "a³ = a × a × a &nbsp;|&nbsp; ∛a³ = a &nbsp;|&nbsp; ∛(-a) = -∛a &nbsp;|&nbsp; ∛(ab) = ∛a × ∛b"
          },
          "questions": [
            "Why does (-2)³ = -8 prove that every negative number possesses a unique real cube root?",
            "How does dividing prime exponents by 3 extract cube roots of large numbers like 3,375?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400 flex items-center gap-2\">\n                  <span>🧊</span> 1. CUBES OF RATIONAL NUMBERS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Definition:</strong> The cube of a number <em>a</em> is the product of three factors of <em>a</em>: <strong>a³ = a × a × a</strong>.<br>\n                  • <em>Sign Rule for Cubes:</em><br>\n                  - The cube of a positive number is always <strong>positive</strong>: (+3)³ = +27.<br>\n                  - The cube of a negative number is always <strong>negative</strong>: (-3)³ = (-3) × (-3) × (-3) = <strong>-27</strong>.<br>\n                  - The cube of zero is zero: 0³ = 0.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🔍</span> 2. CUBE ROOT & NEGATIVE RADICALS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The <strong>cube root</strong> of a number <em>b</em> is the number <em>a</em> such that <em>a³ = b</em>, written as <strong>∛b</strong>.<br>\n                  • <strong>Crucial Contrast with Square Roots:</strong><br>\n                  Square roots of negative numbers do NOT exist in real numbers. But because (-a)³ = -a³, the cube root of a negative number is <strong>ALWAYS a real negative number</strong>:<br>\n                  <strong>∛(-b) = -∛b</strong>. For example, ∛(-125) = -5, ∛(-8) = -2, ∛(-1) = -1.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>⚙️</span> 3. EXTRACTION BY PRIME FACTORIZATION\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  A whole number is a <strong>perfect cube</strong> if all exponents in its prime factorization are multiples of <strong>3</strong>.<br>\n                  • To find the cube root: divide all prime exponents by 3.<br>\n                  • Example: 3,375 = 3³ × 5³ ⟹ ∛3,375 = 3^(3/3) × 5^(3/3) = 3¹ × 5¹ = <strong>15</strong>.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Evaluating Composite Cube Root Expression",
            "problem": "Evaluate: ∛(-512) + ∛(0.027) - ∛(216 / 125).",
            "steps": [
              {
                "label": "Step 1: Evaluate ∛(-512)",
                "text": "512 = 2⁹ = (2³)³ = 8³. Therefore, ∛(-512) = <strong>-8</strong>."
              },
              {
                "label": "Step 2: Evaluate ∛(0.027)",
                "text": "0.027 = 27 / 1,000.<br>∛(27 / 1,000) = ∛27 / ∛1,000 = 3 / 10 = <strong>0.3</strong>."
              },
              {
                "label": "Step 3: Evaluate ∛(216 / 125)",
                "text": "216 = 6³ and 125 = 5³.<br>∛(216 / 125) = 6 / 5 = <strong>1.2</strong>."
              },
              {
                "label": "Step 4: Combine all terms",
                "text": "Expression = -8 + 0.3 - 1.2 = -8 - 0.9 = <strong>-8.9</strong>."
              }
            ],
            "proTip": "For decimals under a cube root: 3 decimal places become 1 decimal place, 6 become 2, etc., because 0.1 × 0.1 × 0.1 = 0.001!"
          },
          "reciteFlashcards": [
            {
              "q": "What is ∛(-216)?",
              "a": "-6 (since (-6)³ = -216)."
            },
            {
              "q": "What is ∛(0.000064)?",
              "a": "0.04 (6 decimal places divided by 3 gives 2 decimal places: 4/100)."
            },
            {
              "q": "What is the condition on prime exponents for a number to be a perfect cube?",
              "a": "Every prime factor exponent must be a multiple of 3."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the exact value of the cube root expression: ∛(-216)?",
              "options": [
                "6",
                "-6",
                "-36",
                "No real solution"
              ],
              "correct": 1,
              "strategy": "The cube root of a negative number is always negative: (-a)³ = -a³.",
              "derivation": "(-6) × (-6) × (-6) = 36 × (-6) = -216. Therefore, ∛(-216) = -6.",
              "trap": "Assuming cube roots of negatives do not exist (confusing cube roots with square roots!)."
            },
            {
              "q": "A solid cubic wooden storage box has a total interior volume of 343 cm³. What is the length of each edge of the cube?",
              "options": [
                "7 cm",
                "49 cm",
                "11.4 cm",
                "21 cm"
              ],
              "correct": 0,
              "strategy": "Volume of cube V = s³ ⇒ s = ∛V.",
              "derivation": "s = ∛343 = 7 cm (since 7 × 7 × 7 = 49 × 7 = 343).",
              "trap": "Dividing 343 by 3 to get 114.3 cm."
            },
            {
              "q": "Evaluate the arithmetic expression: ∛(1/125) × ∛27.",
              "options": [
                "3/5",
                "1/15",
                "5/3",
                "9/25"
              ],
              "correct": 0,
              "strategy": "∛(1/125) = 1/5 and ∛27 = 3.",
              "derivation": "(1/5) × 3 = 3/5.",
              "trap": "Multiplying 125 by 27 inside the radical first without simplifying."
            },
            {
              "q": "What is the value of (-3)³ + (-2)³?",
              "options": [
                "-35",
                "-13",
                "35",
                "-125"
              ],
              "correct": 0,
              "strategy": "Compute each cube: (-3)³ = -27, and (-2)³ = -8.",
              "derivation": "(-27) + (-8) = -35.",
              "trap": "Adding bases (-3 + -2 = -5) and cubing to get -125 (invalid exponent rule!)."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u2",
      "number": "Unit 2",
      "title": "Further on Working with Variables",
      "bigIdea": "Master operations on polynomials, algebraic term expansions, multiplication of binomials (FOIL method), and factoring using Highest Common Factors (HCF).",
      "subtopics": [
        {
          "id": "g8-m-2.1",
          "code": "2.1",
          "title": "Algebraic Terms, Binomial Multiplication & Factoring",
          "survey": {
            "blueprint": "Polynomial structure: monomials, binomials, trinomials. Multiplication of binomials: (ax + b)(cx + d) via distributive / FOIL method. Special products: (a + b)², (a - b)², and difference of squares (a + b)(a - b) = a² - b². Factoring by HCF and grouping.",
            "objectives": [
              "Multiply binomials using FOIL (First, Outer, Inner, Last).",
              "Apply the Difference of Two Squares identity: a² - b² = (a + b)(a - b).",
              "Factor algebraic expressions by extracting the Highest Common Factor (HCF)."
            ],
            "keyFormulas": "(a+b)(c+d) = ac+ad+bc+bd &nbsp;|&nbsp; (a±b)² = a² ± 2ab + b² &nbsp;|&nbsp; a² - b² = (a+b)(a-b)"
          },
          "questions": [
            "Why does (x + 3)² NOT equal x² + 9, and where does the middle term 6x come from geometrically?",
            "How can the Difference of Squares formula compute 102 × 98 in your head in 2 seconds?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>✖️</span> 1. BINOMIAL MULTIPLICATION (THE FOIL METHOD)\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  When multiplying two binomials <strong>(a + b)(c + d)</strong>, distribute every term in the first bracket to every term in the second bracket:<br>\n                  • <strong>F</strong> (First terms): a × c = <em>ac</em><br>\n                  • <strong>O</strong> (Outer terms): a × d = <em>ad</em><br>\n                  • <strong>I</strong> (Inner terms): b × c = <em>bc</em><br>\n                  • <strong>L</strong> (Last terms): b × d = <em>bd</em><br>\n                  Formula: <strong>(a + b)(c + d) = ac + ad + bc + bd</strong>. Combine any like terms!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>⚡</span> 2. THREE SACRED SPECIAL PRODUCT IDENTITIES\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>1. Square of a Sum:</strong> (a + b)² = <strong>a² + 2ab + b²</strong>.<br>\n                    <em>Common Trap:</em> Never write (a + b)² = a² + b²! The middle term +2ab is mandatory!\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>2. Square of a Difference:</strong> (a - b)² = <strong>a² - 2ab + b²</strong>.\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>3. Difference of Two Squares:</strong> (a + b)(a - b) = <strong>a² - b²</strong>.<br>\n                    <em>Mental Math Miracle:</em> 102 × 98 = (100 + 2)(100 - 2) = 100² - 2² = 10,000 - 4 = <strong>9,996</strong>!\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🧩</span> 3. FACTORING BY HIGHEST COMMON FACTOR (HCF)\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Factoring is the reverse process of multiplication:<br>\n                  1. Find the numerical GCF of all coefficients.<br>\n                  2. Find the lowest power of each shared variable.<br>\n                  3. Factor out the complete HCF in front of parentheses.<br>\n                  Example: 12x³y² - 18x²y³ = <strong>6x²y²(2x - 3y)</strong>.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Expanding Binomials & Factoring by Grouping",
            "problem": "Part A: Expand and simplify (3x - 4)(2x + 5). Part B: Factor completely: 5x² - 20.",
            "steps": [
              {
                "label": "Step 1: Apply FOIL for Part A",
                "text": "First: (3x)(2x) = 6x².<br>Outer: (3x)(5) = +15x.<br>Inner: (-4)(2x) = -8x.<br>Last: (-4)(5) = -20."
              },
              {
                "label": "Step 2: Combine like terms",
                "text": "6x² + (15x - 8x) - 20 = <strong>6x² + 7x - 20</strong>."
              },
              {
                "label": "Step 3: Extract HCF for Part B",
                "text": "Both terms 5x² and 20 are divisible by 5:<br>5x² - 20 = 5(x² - 4)."
              },
              {
                "label": "Step 4: Factor the difference of squares",
                "text": "x² - 4 = (x + 2)(x - 2).<br>Complete factorization: <strong>5(x + 2)(x - 2)</strong>."
              }
            ],
            "proTip": "Always check if the expression inside parentheses can be factored further using difference of squares!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the expansion of (a - b)²?",
              "a": "a² - 2ab + b²."
            },
            {
              "q": "What is the factored form of x² - 81?",
              "a": "(x + 9)(x - 9)."
            },
            {
              "q": "What is the HCF of 16x⁴y² and 24x²y⁵?",
              "a": "8x²y²."
            }
          ],
          "amtQuiz": [
            {
              "q": "Expand and simplify the product of the two binomials using the FOIL method: (2x - 3)(x + 5).",
              "options": [
                "2x² - 15",
                "2x² + 7x - 15",
                "2x² - 7x - 15",
                "2x² + 13x - 15"
              ],
              "correct": 1,
              "strategy": "FOIL = First + Outside + Inside + Last.",
              "derivation": "First: 2x · x = 2x². Outside: 2x · 5 = 10x. Inside: -3 · x = -3x. Last: -3 · 5 = -15. Sum: 2x² + (10x - 3x) - 15 = 2x² + 7x - 15.",
              "trap": "Forgetting to combine the middle terms (10x - 3x = 7x)."
            },
            {
              "q": "Factor completely by recognizing the Difference of Two Squares: 9x² - 49y².",
              "options": [
                "(3x - 7y)²",
                "(3x - 7y)(3x + 7y)",
                "(9x - 49y)(x + y)",
                "(3x + 7y)²"
              ],
              "correct": 1,
              "strategy": "Formula: a² - b² = (a - b)(a + b).",
              "derivation": "9x² = (3x)² and 49y² = (7y)². Therefore, 9x² - 49y² = (3x - 7y)(3x + 7y).",
              "trap": "Writing (3x - 7y)² which would expand to 9x² - 42xy + 49y²."
            },
            {
              "q": "What is the greatest common factor (GCF) of the polynomial: 12x³y² - 18x²y³ + 6x²y²?",
              "options": [
                "6x²y²",
                "3xy",
                "12x³y³",
                "6xy"
              ],
              "correct": 0,
              "strategy": "Take the highest common numerical factor and the lowest power of each variable.",
              "derivation": "GCF of 12, 18, 6 is 6. Lowest power of x is x²; lowest power of y is y². GCF = 6x²y².",
              "trap": "Omitting the variable powers and taking only the coefficient 6."
            },
            {
              "q": "What is the degree of the polynomial: 4x³y² - 7x²y⁴ + 5x - 9?",
              "options": [
                "3",
                "5",
                "6",
                "4"
              ],
              "correct": 2,
              "strategy": "The degree of a multivariable polynomial is the maximum sum of exponents in any single term.",
              "derivation": "Term 1: 3 + 2 = 5. Term 2: 2 + 4 = 6. Term 3: 1. Maximum degree is 6 (from -7x²y⁴).",
              "trap": "Picking 3 from the leading term or 4 from y⁴."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u3",
      "number": "Unit 3",
      "title": "Linear Equations and Inequalities in Two Variables",
      "bigIdea": "Explore the 2D Cartesian coordinate plane, plotting points, graphing linear equations, slope-intercept form (y = mx + c), and linear inequalities.",
      "subtopics": [
        {
          "id": "g8-m-3.1",
          "code": "3.1",
          "title": "Cartesian Coordinate System & Linear Graphs",
          "survey": {
            "blueprint": "Cartesian plane: x-axis (abscissa), y-axis (ordinate), origin (0,0), and 4 quadrants. Linear equations in two variables: Ax + By = C. Slope-intercept form: y = mx + c (m = slope, c = y-intercept). Slope formula: m = (y₂ - y₁) / (x₂ - x₁).",
            "objectives": [
              "Plot ordered pairs (x, y) across all 4 quadrants of the Cartesian plane.",
              "Calculate the slope m of a line passing through two given points.",
              "Graph linear equations by finding the x-intercept and y-intercept."
            ],
            "keyFormulas": "Slope: m = (y₂ - y₁)/(x₂ - x₁) &nbsp;|&nbsp; Slope-intercept: y = mx + c &nbsp;|&nbsp; x-intercept: set y=0; y-intercept: set x=0"
          },
          "questions": [
            "Why does a horizontal line have a slope of zero while a vertical line has an undefined slope?",
            "How do intercepts provide the fastest way to graph 3x + 4y = 12 without creating a huge table of values?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🌐</span> 1. THE CARTESIAN COORDINATE PLANE\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Invented by René Descartes, the Cartesian plane consists of two perpendicular number lines intersecting at the <strong>Origin (0, 0)</strong>:<br>\n                  • <strong>Horizontal x-axis:</strong> positive to right, negative to left.<br>\n                  • <strong>Vertical y-axis:</strong> positive upward, negative downward.<br>\n                  • <strong>4 Quadrants:</strong><br>\n                  - Quadrant I: (+, +) &nbsp;|&nbsp; Quadrant II: (-, +)<br>\n                  - Quadrant III: (-, -) &nbsp;|&nbsp; Quadrant IV: (+, -).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>📈</span> 2. SLOPE OF A LINE (RATE OF STEEPNESS)\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The <strong>slope (m)</strong> measures steepness as ratio of vertical change (rise) to horizontal change (run):<br>\n                  <strong>m = (y₂ - y₁) / (x₂ - x₁)</strong> (where x₂ ≠ x₁).<br>\n                  • <em>Positive Slope (m > 0):</em> Line rises from left to right.<br>\n                  • <em>Negative Slope (m < 0):</em> Line falls from left to right.<br>\n                  • <em>Zero Slope (m = 0):</em> Horizontal line (y = c).<br>\n                  • <em>Undefined Slope:</em> Vertical line (x = k, division by zero: x₂ - x₁ = 0).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🎯</span> 3. DUAL-INTERCEPT GRAPHING METHOD\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  To graph any linear equation Ax + By = C:<br>\n                  1. <strong>Find x-intercept:</strong> Set y = 0 and solve for x ⟹ point (x, 0).<br>\n                  2. <strong>Find y-intercept:</strong> Set x = 0 and solve for y ⟹ point (0, y).<br>\n                  3. Plot these two points and draw a straight line through them!\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Finding Slope and Graphing via Intercepts",
            "problem": "Part A: Find the slope of the line passing through A(2, -3) and B(6, 5). Part B: Find the x- and y-intercepts of 3x + 2y = 12.",
            "steps": [
              {
                "label": "Step 1: Calculate slope for Part A",
                "text": "x₁ = 2, y₁ = -3, x₂ = 6, y₂ = 5.<br>m = [5 - (-3)] / [6 - 2] = (5 + 3) / 4 = 8 / 4 = <strong>2</strong>."
              },
              {
                "label": "Step 2: Find x-intercept for Part B",
                "text": "Set y = 0:<br>3x + 2(0) = 12 ⟹ 3x = 12 ⟹ x = 4.<br>x-intercept point: <strong>(4, 0)</strong>."
              },
              {
                "label": "Step 3: Find y-intercept for Part B",
                "text": "Set x = 0:<br>3(0) + 2y = 12 ⟹ 2y = 12 ⟹ y = 6.<br>y-intercept point: <strong>(0, 6)</strong>."
              }
            ],
            "proTip": "Slope m = 2 means for every 1 step you move right horizontally, you move 2 steps up vertically!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the slope of any horizontal line?",
              "a": "0 (zero vertical rise)."
            },
            {
              "q": "What is the slope of any vertical line?",
              "a": "Undefined (division by zero horizontal run)."
            },
            {
              "q": "In y = -4x + 7, what is the slope and y-intercept?",
              "a": "Slope m = -4, y-intercept c = 7 (point (0, 7))."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the slope (gradient m) of the straight line passing through points A(2, 3) and B(6, 11) on the Cartesian coordinate plane?",
              "options": [
                "2.0",
                "0.5",
                "4.0",
                "-2.0"
              ],
              "correct": 0,
              "strategy": "Slope formula: m = (y₂ - y₁) / (x₂ - x₁).",
              "derivation": "m = (11 - 3) / (6 - 2) = 8 / 4 = 2.0.",
              "trap": "Inverting the ratio to (x₂ - x₁) / (y₂ - y₁) = 4/8 = 0.5."
            },
            {
              "q": "What is the y-intercept of the linear equation: 3x - 2y = 8?",
              "options": [
                "(0, 8)",
                "(0, -4)",
                "(0, 4)",
                "(0, -2)"
              ],
              "correct": 1,
              "strategy": "Set x = 0 to find the y-intercept.",
              "derivation": "3(0) - 2y = 8 ⇒ -2y = 8 ⇒ y = -4. The intercept is (0, -4).",
              "trap": "Forgetting the negative sign on -2y and choosing +4."
            },
            {
              "q": "In which quadrant of the Cartesian plane does the coordinate point P(-4, -7) lie?",
              "options": [
                "Quadrant I",
                "Quadrant II",
                "Quadrant III",
                "Quadrant IV"
              ],
              "correct": 2,
              "strategy": "Signs by quadrant: Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-).",
              "derivation": "Both x (-4) and y (-7) are negative, which defines Quadrant III.",
              "trap": "Confusing Quadrant II (-,+) with Quadrant III (-,-)."
            },
            {
              "q": "What is the slope of any horizontal line parallel to the x-axis?",
              "options": [
                "Zero (0)",
                "Undefined / Infinity",
                "1.0",
                "-1.0"
              ],
              "correct": 0,
              "strategy": "A horizontal line has zero vertical rise: Δy = 0.",
              "derivation": "m = Δy / Δx = 0 / Δx = 0. A vertical line has an undefined slope.",
              "trap": "Confusing horizontal (slope = 0) with vertical (slope = undefined)."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u4",
      "number": "Unit 4",
      "title": "Similar Figures",
      "bigIdea": "Understand geometric similarity: scale factors (ratio of similitude), conditions for similarity of polygons, and triangle similarity criteria (AAA, SAS, SSS).",
      "subtopics": [
        {
          "id": "g8-m-4.1",
          "code": "4.1",
          "title": "Geometric Similarity & Triangle Criteria",
          "survey": {
            "blueprint": "Similarity symbol: ~. Two figures are similar if: (1) Corresponding angles are equal, and (2) Corresponding sides are proportional (Ratio of Similitude k). Triangle criteria: AAA (or AA), SAS, SSS.",
            "objectives": [
              "Distinguish between congruent figures (same shape, same size) and similar figures (same shape, proportional size).",
              "Calculate unknown side lengths using the ratio of similitude k.",
              "Apply AA, SAS, and SSS similarity theorems to solve practical shadow and height problems."
            ],
            "keyFormulas": "AB/DE = BC/EF = AC/DF = k &nbsp;|&nbsp; Area ratio = k² &nbsp;|&nbsp; Volume ratio = k³"
          },
          "questions": [
            "If the linear scale factor between two similar triangles is 3, why is the ratio of their areas 9 and not 3?",
            "How did ancient Greek mathematicians measure the exact height of the Great Pyramid using only a stick and similar triangles?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>📐</span> 1. DEFINITION OF SIMILAR POLYGONS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Two polygons are <strong>similar (~)</strong> if and only if:<br>\n                  1. All pairs of <strong>corresponding angles are congruent (equal)</strong>.<br>\n                  2. All pairs of <strong>corresponding sides are proportional</strong>.<br>\n                  • The constant ratio <strong>k = Side₁ / Side₂</strong> is called the <strong>Scale Factor</strong> or <em>Ratio of Similitude</em>.<br>\n                  • <em>Area Scaling Theorem:</em> If the ratio of sides is k, the ratio of their areas is <strong>k²</strong>!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🔺</span> 2. TRIANGLE SIMILARITY THEOREMS\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>AA (Angle-Angle) Criterion:</strong> If two angles of one triangle are equal to two angles of another, the third angles must also be equal (180° rule), and the triangles are SIMILAR.</p>\n                  <p>• <strong>SSS (Side-Side-Side) Criterion:</strong> If the three sets of corresponding sides are in the exact same ratio, the triangles are SIMILAR.</p>\n                  <p>• <strong>SAS (Side-Angle-Side) Criterion:</strong> If two pairs of corresponding sides are proportional AND their included angles are equal, the triangles are SIMILAR.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Thales Shadow Problem for Real Heights",
            "problem": "A vertical pole 2.5 meters tall casts a shadow of 1.5 meters on the ground in Hawassa. At the exact same moment, a nearby telecom tower casts a shadow of 36 meters. Find the height of the telecom tower.",
            "steps": [
              {
                "label": "Step 1: Recognize similar triangles",
                "text": "Both the pole and the tower form right angles (90°) with the ground. Sun rays strike at the identical angle of elevation. By AA similarity, the two triangles are <strong>similar</strong>."
              },
              {
                "label": "Step 2: Set up proportion of corresponding sides",
                "text": "Height of Tower (H) / Height of Pole (2.5) = Shadow of Tower (36) / Shadow of Pole (1.5)."
              },
              {
                "label": "Step 3: Solve for H via cross-multiplication",
                "text": "H = (36 / 1.5) × 2.5.<br>36 ÷ 1.5 = 24.<br>H = 24 × 2.5 = <strong>60 meters</strong>."
              }
            ],
            "proTip": "Always align corresponding parts: (Height / Shadow) = (Height / Shadow) ensures zero calculation mistakes!"
          },
          "reciteFlashcards": [
            {
              "q": "If two similar triangles have scale factor k = 4, what is the ratio of their areas?",
              "a": "k² = 4² = 16."
            },
            {
              "q": "What is the AA similarity criterion?",
              "a": "If two angles of one triangle equal two angles of another, the triangles are similar."
            },
            {
              "q": "Are all equilateral triangles similar to each other?",
              "a": "Yes! Every equilateral triangle has three 60° angles, satisfying AAA similarity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Two triangles ABC and DEF are similar (△ABC ~ △DEF). If AB = 6 cm, BC = 8 cm, and the corresponding side DE = 15 cm, what is the length of side EF?",
              "options": [
                "17 cm",
                "20 cm",
                "16 cm",
                "24 cm"
              ],
              "correct": 1,
              "strategy": "Set up proportional sides: AB / DE = BC / EF.",
              "derivation": "6 / 15 = 8 / EF ⇒ 6 · EF = 15 · 8 = 120 ⇒ EF = 120 / 6 = 20 cm.",
              "trap": "Adding the difference (15 - 6 = 9 ➔ 8 + 9 = 17) instead of scaling proportionally."
            },
            {
              "q": "If the linear scale factor of two similar polygons is k = 3 : 5, what is the ratio of their surface areas?",
              "options": [
                "3 : 5",
                "6 : 10",
                "9 : 25",
                "27 : 125"
              ],
              "correct": 2,
              "strategy": "Ratio of areas is the square of the linear scale factor: Area Ratio = k².",
              "derivation": "Area Ratio = (3/5)² = 9/25 (or 9 : 25).",
              "trap": "Selecting 3:5 (linear ratio) or 27:125 (volume ratio k³)."
            },
            {
              "q": "Which criterion guarantees that two triangles are similar even if their side lengths are unknown?",
              "options": [
                "AAA (Angle-Angle-Angle: two pairs of corresponding angles are equal)",
                "One pair of equal sides",
                "Equal perimeters",
                "Equal areas"
              ],
              "correct": 0,
              "strategy": "AAA (or AA) similarity criterion.",
              "derivation": "If two angles of one triangle equal two angles of another, the third angles must also be equal (sum = 180°), guaranteeing identical shape (similarity).",
              "trap": "Assuming equal areas proves similarity."
            },
            {
              "q": "A 2-meter tall flagpole casts a shadow of 3 meters. At the same moment, a nearby acacia tree casts a shadow of 18 meters. How tall is the acacia tree?",
              "options": [
                "12 meters",
                "27 meters",
                "9 meters",
                "15 meters"
              ],
              "correct": 0,
              "strategy": "Proportion of similar shadow triangles: Height / Shadow = Height / Shadow.",
              "derivation": "2 / 3 = h / 18 ⇒ 3h = 36 ⇒ h = 12 meters.",
              "trap": "Multiplying 18 by 2 = 36 without dividing by 3."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u5",
      "number": "Unit 5",
      "title": "Circles",
      "bigIdea": "Explore properties of circles: chords, tangents, secants, central angles, arcs, and the inscribed angle theorem.",
      "subtopics": [
        {
          "id": "g8-m-5.1",
          "code": "5.1",
          "title": "Chords, Tangents & Inscribed Angles",
          "survey": {
            "blueprint": "Circle geometry: Radius (r), Diameter (d = 2r), Chord (line segment joining two points on circle), Tangent (line touching circle at exactly 1 point, perpendicular to radius). Central angle = arc measure. Inscribed angle = ½ × intercepted arc.",
            "objectives": [
              "Apply the Tangent-Radius theorem: a tangent is perpendicular to the radius at the point of contact (90°).",
              "Calculate angle measures using the Inscribed Angle Theorem: ∠Inscribed = ½ × ∠Central.",
              "Apply Thales Circle Theorem: any angle inscribed in a semicircle is a right angle (90°)."
            ],
            "keyFormulas": "∠Inscribed = ½ × ∠Central &nbsp;|&nbsp; Angle in semicircle = 90° &nbsp;|&nbsp; Tangent ⊥ Radius (90°)"
          },
          "questions": [
            "Why is any angle inscribed in a semicircle automatically a 90° right angle?",
            "How does the perpendicular from the center of a circle to a chord always bisect that chord?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>⭕</span> 1. THE INSCRIBED ANGLE THEOREM\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Central Angle:</strong> An angle whose vertex is at the center of the circle. Its measure equals the intercepted arc: <em>∠AOB = arc(AB)</em>.<br>\n                  • <strong>Inscribed Angle:</strong> An angle whose vertex lies on the circle and whose sides are chords.<br>\n                  • <strong>Fundamental Theorem:</strong> The measure of an inscribed angle is <strong>HALF</strong> the measure of its intercepted central angle:<br>\n                  <strong>∠APB = ½ × ∠AOB</strong>.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>📐</span> 2. THALES SEMICIRCLE THEOREM & CHORD PROPERTIES\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Angle in a Semicircle:</strong> If an inscribed angle subtends a diameter, its central angle is a straight line (180°). Therefore, its inscribed angle is 180° / 2 = <strong>90°</strong>!</p>\n                  <p>• <strong>Chord Bisection:</strong> The perpendicular line dropped from the circle center to any chord bisects the chord into two equal halves.</p>\n                  <p>• <strong>Tangent Perpendicularity:</strong> A tangent to a circle is perpendicular (90°) to the radius drawn to the point of contact.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Inscribed Angles and Semicircles",
            "problem": "In a circle with center O, AB is a diameter and C is any point on the circumference. If ∠ABC = 35°, find the measure of ∠BAC.",
            "steps": [
              {
                "label": "Step 1: Identify angle in semicircle",
                "text": "Because AB is a diameter, ∠ACB is inscribed in a semicircle. By Thales theorem, <strong>∠ACB = 90°</strong>."
              },
              {
                "label": "Step 2: Apply triangle angle sum theorem",
                "text": "In Triangle ABC: ∠BAC + ∠ABC + ∠ACB = 180°.<br>∠BAC + 35° + 90° = 180°.<br>∠BAC + 125° = 180°."
              },
              {
                "label": "Step 3: Calculate ∠BAC",
                "text": "∠BAC = 180° - 125° = <strong>55°</strong>."
              }
            ],
            "proTip": "In any right-angled triangle inscribed in a semicircle, the two acute angles are complementary (they add to 90°): 90° - 35° = 55°!"
          },
          "reciteFlashcards": [
            {
              "q": "If a central angle measures 110°, what is the measure of an inscribed angle subtending the same arc?",
              "a": "55° (half of 110°)."
            },
            {
              "q": "What is the angle between a tangent line and the radius at the point of tangency?",
              "a": "90 degrees (perpendicular)."
            },
            {
              "q": "What is the measure of an angle inscribed in a semicircle?",
              "a": "Always 90 degrees."
            }
          ],
          "amtQuiz": [
            {
              "q": "According to the Inscribed Angle Theorem, what is the relationship between an angle inscribed in a circle and the central angle that subtends the exact same arc?",
              "options": [
                "The inscribed angle is equal to the central angle",
                "The inscribed angle is exactly half (½) of the central angle",
                "The inscribed angle is double (2×) the central angle",
                "The inscribed angle is always 90 degrees"
              ],
              "correct": 1,
              "strategy": "Inscribed Angle = ½ × Central Angle.",
              "derivation": "Theorem: The measure of an inscribed angle is half the measure of its intercepted central angle (θ_inscribed = ½ θ_central).",
              "trap": "Inverting the relationship and saying inscribed is double."
            },
            {
              "q": "An angle inscribed in a semicircle with its vertices on the endpoints of the diameter (Thales’ Theorem) is always:",
              "options": [
                "An acute angle (< 90°)",
                "An obtuse angle (> 90°)",
                "A right angle (exactly 90°)",
                "A reflex angle (> 180°)"
              ],
              "correct": 2,
              "strategy": "Thales’ Theorem: An angle in a semicircle is a right angle.",
              "derivation": "The diameter forms a straight central angle of 180°. By the inscribed angle theorem, the angle inscribed in the semicircle is 180° / 2 = 90°.",
              "trap": "Guessing 45° or 60°."
            },
            {
              "q": "What is the angle formed between a tangent line to a circle and the radius drawn to the point of tangency?",
              "options": [
                "45°",
                "90° (Perpendicular)",
                "180°",
                "60°"
              ],
              "correct": 1,
              "strategy": "A tangent is always perpendicular to the radius at the point of contact.",
              "derivation": "Tangency Theorem: A line is tangent to a circle if and only if it is perpendicular (forms a 90° angle) to the radius at the point of tangency.",
              "trap": "Assuming acute angles."
            },
            {
              "q": "A chord of length 16 cm is drawn in a circle of radius 10 cm. What is the perpendicular distance from the center of the circle to the chord?",
              "options": [
                "6 cm",
                "8 cm",
                "4 cm",
                "2 cm"
              ],
              "correct": 0,
              "strategy": "A perpendicular from the center bisects the chord: half chord = 8 cm. Apply Pythagoras: d² + 8² = 10².",
              "derivation": "d² + 8² = 10² ⇒ d² + 64 = 100 ⇒ d² = 36 ⇒ d = 6 cm.",
              "trap": "Using 16 directly without bisecting into 8."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u6",
      "number": "Unit 6",
      "title": "Introduction to Probability",
      "bigIdea": "Understand uncertainty, experiments, outcomes, sample spaces (S), events (E), theoretical probability, and complementary events.",
      "subtopics": [
        {
          "id": "g8-m-6.1",
          "code": "6.1",
          "title": "The Concept of Probability & Simple Events",
          "survey": {
            "blueprint": "Random experiment: action with unpredictable outcomes. Sample space S: set of all possible outcomes. Event E: subset of sample space. Classical probability formula: P(E) = n(E) / n(S). Range of probability: 0 ≤ P(E) ≤ 1. Impossible event = 0, certain event = 1.",
            "objectives": [
              "List sample spaces for coin flips, dice rolls, and card draws.",
              "Calculate theoretical probability of simple events: P(E) = n(E)/n(S).",
              "Apply the Complement Rule: P(not E) = 1 - P(E)."
            ],
            "keyFormulas": "P(E) = n(E) / n(S) &nbsp;|&nbsp; 0 ≤ P(E) ≤ 1 &nbsp;|&nbsp; P(E') = 1 - P(E)"
          },
          "questions": [
            "Why can a probability value NEVER be negative or exceed 1.0 (100%)?",
            "How does the complement rule P(not E) = 1 - P(E) drastically speed up solving \"at least one\" problems?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🎲</span> 1. PROBABILITY FOUNDATIONS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Random Experiment:</strong> An activity where the outcome cannot be predicted with certainty in advance.<br>\n                  • <strong>Sample Space (S):</strong> The complete set of all possible outcomes. For rolling a fair 6-sided die: <em>S = {1, 2, 3, 4, 5, 6}</em>, so <em>n(S) = 6</em>.<br>\n                  • <strong>Event (E):</strong> Any subset of outcomes from the sample space. E.g., rolling an even number: <em>E = {2, 4, 6}</em>, so <em>n(E) = 3</em>.<br>\n                  • <strong>Probability Formula:</strong> <strong>P(E) = n(E) / n(S)</strong>.<br>\n                  P(even) = 3 / 6 = <strong>1/2 = 0.5 = 50%</strong>.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>⚖️</span> 2. THE THREE SACRED PROBABILITY AXIOMS\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p><strong>1. Probability Bounds:</strong> For any event E, <strong>0 ≤ P(E) ≤ 1</strong>. A probability can never be negative (-0.2) or greater than 1 (1.5)!</p>\n                  <p><strong>2. Certain & Impossible Events:</strong> P(Impossible Event ∅) = <strong>0</strong> (e.g. rolling a 7 on a 6-sided die). P(Certain Event S) = <strong>1</strong>.</p>\n                  <p><strong>3. Complementary Event Rule:</strong> The event that E does NOT happen is denoted E' (or not E):<br>\n                  <strong>P(E') = 1 - P(E)</strong>.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Prime Numbers on a Die and Bag of Marbles",
            "problem": "A bag contains 5 red, 8 blue, and 7 green marbles. One marble is drawn at random. What is the probability that the marble is NOT blue?",
            "steps": [
              {
                "label": "Step 1: Calculate total sample space n(S)",
                "text": "n(S) = 5 + 8 + 7 = <strong>20 marbles</strong>."
              },
              {
                "label": "Step 2: Find probability of drawing Blue P(B)",
                "text": "Number of blue marbles n(B) = 8.<br>P(B) = 8 / 20 = 2 / 5 = <strong>0.40</strong>."
              },
              {
                "label": "Step 3: Apply the Complement Rule",
                "text": "P(not Blue) = 1 - P(B) = 1 - 2/5 = <strong>3/5 = 0.60 = 60%</strong>.<br>(Alternatively: Red + Green = 5 + 7 = 12; 12/20 = 3/5!)."
              }
            ],
            "proTip": "When an event asks for \"NOT X\", subtracting P(X) from 1 is almost always faster than adding all other cases!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the probability of an impossible event?",
              "a": "0."
            },
            {
              "q": "If P(Rain) = 0.35, what is P(No Rain)?",
              "a": "1 - 0.35 = 0.65 (65%)."
            },
            {
              "q": "What are the prime numbers in a standard 6-sided die sample space {1, 2, 3, 4, 5, 6}?",
              "a": "{2, 3, 5} (1 is neither prime nor composite!)."
            }
          ],
          "amtQuiz": [
            {
              "q": "When rolling a fair, six-sided standard die (with faces 1 to 6), what is the theoretical probability of rolling a prime number?",
              "options": [
                "1/6",
                "1/3",
                "1/2",
                "2/3"
              ],
              "correct": 2,
              "strategy": "Identify prime numbers on a die: 2, 3, 5 (3 favorable outcomes out of 6).",
              "derivation": "Sample space S = {1, 2, 3, 4, 5, 6}. Primes = {2, 3, 5} (note: 1 is NOT prime!). Probability P = 3 / 6 = 1/2.",
              "trap": "Counting 1 as prime and getting 4/6 = 2/3."
            },
            {
              "q": "A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. If one marble is drawn at random, what is the probability that it is NOT blue?",
              "options": [
                "3/10",
                "7/10",
                "1/2",
                "1/5"
              ],
              "correct": 1,
              "strategy": "Complementary probability: P(not blue) = 1 - P(blue).",
              "derivation": "Total marbles = 5 + 3 + 2 = 10. Non-blue marbles = 5 red + 2 green = 7. P(not blue) = 7 / 10 (or 1 - 3/10 = 7/10).",
              "trap": "Selecting 3/10 (which is the probability of drawing blue)."
            },
            {
              "q": "What is the sum of the probabilities of all possible mutually exclusive outcomes in any complete sample space?",
              "options": [
                "0",
                "0.5",
                "1.0",
                "100"
              ],
              "correct": 2,
              "strategy": "Total probability of a sample space is always 1 (or 100%).",
              "derivation": "By the axioms of probability: Σ P(E_i) = 1.0 for a complete set of exhaustive, mutually exclusive events.",
              "trap": "Selecting 0 or infinity."
            },
            {
              "q": "If two fair coins are flipped simultaneously, what is the probability of obtaining at least one Head?",
              "options": [
                "1/4",
                "1/2",
                "3/4",
                "1/8"
              ],
              "correct": 2,
              "strategy": "Sample space = {HH, HT, TH, TT}. \"At least one Head\" includes HH, HT, TH.",
              "derivation": "Favorable outcomes = 3. Total outcomes = 4. P = 3/4.",
              "trap": "Thinking only HT and TH count, getting 2/4 = 1/2."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u7",
      "number": "Unit 7",
      "title": "Geometry and Measurements",
      "bigIdea": "Master the Pythagorean Theorem, right triangle applications, introduction to trigonometric ratios (sin, cos, tan), and surface area & volume of 3D solids (pyramids, cones, spheres).",
      "subtopics": [
        {
          "id": "g8-m-7.1",
          "code": "7.1",
          "title": "Pythagorean Theorem, Trigonometry & 3D Solids",
          "survey": {
            "blueprint": "Pythagorean Theorem: a² + b² = c² (where c is hypotenuse). Pythagorean triples: (3,4,5), (5,12,13), (8,15,17). Trigonometric ratios in right triangles: sin θ = Opp/Hyp, cos θ = Adj/Hyp, tan θ = Opp/Adj (SOH CAH TOA). 3D solids: Sphere Volume = (4/3)πr³, Cone Volume = (1/3)πr²h.",
            "objectives": [
              "Calculate unknown sides of right triangles using Pythagoras: c = √(a² + b²).",
              "Set up sine, cosine, and tangent ratios using SOH CAH TOA.",
              "Calculate surface area and volume of right pyramids, cones, and spheres."
            ],
            "keyFormulas": "a² + b² = c² &nbsp;|&nbsp; sin θ = Opp/Hyp &nbsp;|&nbsp; cos θ = Adj/Hyp &nbsp;|&nbsp; tan θ = Opp/Adj &nbsp;|&nbsp; Sphere V = 4/3 πr³ &nbsp;|&nbsp; Cone V = 1/3 πr²h"
          },
          "questions": [
            "How can the converse of the Pythagorean Theorem verify whether a room corner is an exact 90° right angle in construction?",
            "What is the mnemonic SOH CAH TOA and how does it define trigonometry ratios?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>📐</span> 1. THE PYTHAGOREAN THEOREM & ITS CONVERSE\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  In any right-angled triangle, the square of the longest side (the <strong>hypotenuse c</strong>, opposite the 90° angle) equals the sum of the squares of the other two legs (a and b):<br>\n                  <strong>a² + b² = c²</strong> ⟹ <strong>c = √(a² + b²)</strong>.<br>\n                  • <em>Converse Theorem:</em> If the side lengths of a triangle satisfy a² + b² = c², the triangle is guaranteed to be a <strong>right-angled triangle</strong>!<br>\n                  • <em>Pythagorean Triples to Memorize:</em> (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🔺</span> 2. INTRODUCTION TO TRIGONOMETRIC RATIOS (SOH CAH TOA)\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  For an acute angle θ in a right-angled triangle:<br>\n                  • <strong>Sine:</strong> <strong>sin θ = Opposite / Hypotenuse</strong> (SOH)<br>\n                  • <strong>Cosine:</strong> <strong>cos θ = Adjacent / Hypotenuse</strong> (CAH)<br>\n                  • <strong>Tangent:</strong> <strong>tan θ = Opposite / Adjacent</strong> (TOA)<br>\n                  • Relationship: <strong>tan θ = sin θ / cos θ</strong>.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🌐</span> 3. 3D SOLID MEASUREMENTS: SPHERES & CONES\n                </h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Right Circular Cone:</strong><br>\n                    - Slant height: l = √(r² + h²).<br>\n                    - Volume: <strong>V = ⅓ πr²h</strong>.<br>\n                    - Curved Area = πrl &nbsp;|&nbsp; Total Area = πr(l + r).\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong>Sphere:</strong><br>\n                    - Surface Area: <strong>A = 4πr²</strong>.<br>\n                    - Volume: <strong>V = ⁴⁄₃ πr³</strong>.\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Pythagorean Ladder & Volume of a Cone",
            "problem": "Part A: A 13-meter ladder leans against a vertical building wall. Its base is placed 5 meters away from the wall. How high up the wall does the ladder reach? Part B: Find the volume of a cone with radius r = 6 cm and height h = 7 cm (use π = 22/7).",
            "steps": [
              {
                "label": "Step 1: Set up Pythagoras for Part A",
                "text": "Hypotenuse c = 13 m. Base a = 5 m. Wall height = b.<br>a² + b² = c² ⟹ 5² + b² = 13².<br>25 + b² = 169."
              },
              {
                "label": "Step 2: Solve for height b",
                "text": "b² = 169 - 25 = 144.<br>b = √144 = <strong>12 meters</strong>."
              },
              {
                "label": "Step 3: Calculate Cone Volume for Part B",
                "text": "Volume V = ⅓ × π × r² × h.<br>Substitute: V = ⅓ × (22/7) × (6)² × 7.<br>Cancel the 7 with 7, and ⅓ × 36 = 12.<br>V = 12 × 22 = <strong>264 cm³</strong>."
              }
            ],
            "proTip": "Recognizing the (5, 12, 13) Pythagorean triple immediately gives 12 meters without squaring or subtracting!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the formula for the volume of a sphere?",
              "a": "V = (4/3)πr³."
            },
            {
              "q": "What is tan θ defined as in a right-angled triangle?",
              "a": "Opposite side / Adjacent side."
            },
            {
              "q": "If two legs of a right triangle are 6 cm and 8 cm, what is the hypotenuse?",
              "a": "10 cm (scaled 3-4-5 triple: 2 × 5 = 10)."
            }
          ],
          "amtQuiz": [
            {
              "q": "In a right-angled triangle, the two perpendicular legs measure 9 cm and 12 cm. What is the length of the hypotenuse c?",
              "options": [
                "15 cm",
                "21 cm",
                "18 cm",
                "144 cm"
              ],
              "correct": 0,
              "strategy": "Pythagorean Theorem: c² = a² + b².",
              "derivation": "c² = 9² + 12² = 81 + 144 = 225 ⇒ c = √225 = 15 cm. (This is a 3-4-5 triple scaled by 3).",
              "trap": "Adding legs directly: 9 + 12 = 21 cm."
            },
            {
              "q": "In right-angled triangle ABC with right angle at C, if opposite side a = 3 and adjacent side b = 4, what is the trigonometric ratio tan(A)?",
              "options": [
                "3/5",
                "4/5",
                "3/4",
                "4/3"
              ],
              "correct": 2,
              "strategy": "SOH-CAH-TOA: Tangent = Opposite / Adjacent.",
              "derivation": "tan(A) = Opposite / Adjacent = a / b = 3 / 4.",
              "trap": "Dividing opposite by hypotenuse (3/5 is sin A)."
            },
            {
              "q": "What is the total volume of a right circular cylinder having a base radius r = 7 cm and a height h = 10 cm? (Use π ≈ 22/7)",
              "options": [
                "440 cm³",
                "1,540 cm³",
                "2,200 cm³",
                "770 cm³"
              ],
              "correct": 1,
              "strategy": "Volume of cylinder: V = πr²h.",
              "derivation": "V = (22/7) × (7²) × 10 = (22/7) × 49 × 10 = 22 × 7 × 10 = 1,540 cm³.",
              "trap": "Forgetting to square the radius (using 2πrh which gives curved surface area = 440 cm²)."
            },
            {
              "q": "If a 10-meter ladder leans against a vertical brick wall reaching a window 8 meters above the ground, how far is the foot of the ladder from the base of the wall?",
              "options": [
                "2 meters",
                "6 meters",
                "18 meters",
                "4 meters"
              ],
              "correct": 1,
              "strategy": "Use Pythagoras: a² + b² = c² where hypotenuse c = 10 and height b = 8.",
              "derivation": "a² + 8² = 10² ⇒ a² + 64 = 100 ⇒ a² = 36 ⇒ a = 6 meters.",
              "trap": "Subtracting 10 - 8 = 2 meters."
            }
          ]
        }
      ]
    }
  ]
};
