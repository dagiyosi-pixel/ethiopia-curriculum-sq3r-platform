module.exports = {
  "id": "math",
  "name": "Mathematics",
  "icon": "📐",
  "units": [
    {
      "id": "g8-m-u1",
      "number": "Unit 1",
      "title": "Squares, Square Roots, Cubes and Cube Roots",
      "bigIdea": "Understand operations of the third kind: powers of 2 and 3, and extracting principal square and cube roots of rational numbers.",
      "subtopics": [
        {
          "id": "g8-m-1.1",
          "code": "1.1",
          "title": "The Square of a Rational Number",
          "survey": {
            "blueprint": "Square of a number x is x² = x · x. Properties of squares: square of any non-zero rational is positive; (a/b)² = a²/b²; square of a product (ab)² = a²b²; squaring fractions between 0 and 1 results in a smaller number (e.g. (1/2)² = 1/4 < 1/2).",
            "objectives": [
              "Define the square of a rational number and compute squares of positive and negative fractions/decimals.",
              "Apply properties of squares: (ab)² = a²b² and (a/b)² = a²/b².",
              "Explain why squaring a proper fraction produces a value strictly smaller than the original base."
            ],
            "keyFormulas": "x² = x · x | (-x)² = x² | (a/b)² = a²/b² | If 0 < x < 1, then x² < x"
          },
          "questions": [
            "Why is the square of any negative rational number always strictly positive?",
            "How does the square of a fraction between 0 and 1 compare with the original fraction?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🔢 1. Definition and Fundamental Laws of Squares</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  If $a$ is a rational number, then the product $a \\times a$ is called the <strong>square of $a$</strong> and is denoted by $a^2$ (read as \"$a$ squared\" or \"$a$ to the power 2\"):<br>\n                  • <strong>Rule of Signs:</strong> For every $a \\in \\mathbb{Q}$ where $a \\neq 0$, $a^2 > 0$. Even when $a$ is negative, $(-a)^2 = (-a) \\times (-a) = +a^2$.<br>\n                  • <strong>Square of Zero:</strong> $0^2 = 0 \\times 0 = 0$.<br>\n                  • <strong>Square of a Product:</strong> $(a \\cdot b)^2 = a^2 \\cdot b^2$.<br>\n                  • <strong>Square of a Quotient:</strong> $\\left(\\frac{a}{b}\\right)^2 = \\frac{a^2}{b^2}$ for $b \\neq 0$.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">⚖️ 2. Magnitude Behavior of Squares</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-emerald-300\">Numbers Greater than 1:</strong><br>\n                    If $x > 1$, then $x^2 > x$.<br>\n                    <em>Example:</em> $3^2 = 9 > 3$; $(1.5)^2 = 2.25 > 1.5$.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-rose-300\">Proper Fractions (0 < x < 1):</strong><br>\n                    If $0 < x < 1$, then $x^2 < x$.<br>\n                    <em>Example:</em> $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4} < \\frac{1}{2}$; $(0.1)^2 = 0.01 < 0.1$.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-indigo-400\">🏛️ 3. Ethiopian Real-World Application</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  In Ethiopian urban planning and agricultural parceling, land area is measured in square meters ($m^2$) or hectares ($10,000\\text{ m}^2 = 100\\text{ m} \\times 100\\text{ m} = 100^2\\text{ m}^2$). A square plot of teff farmland with side length $75\\text{ m}$ has an area of $75^2 = 5,625\\text{ m}^2$.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Evaluating Rational Squares",
            "problem": "Evaluate the square of the rational number -7/13 and compare (-0.4)² with -0.4.",
            "steps": [
              {
                "step": "Step 1: Apply the quotient rule of squares to (-7/13)",
                "detail": "(-7/13)² = (-7)² / (13)² = 49 / 169."
              },
              {
                "step": "Step 2: Evaluate (-0.4)²",
                "detail": "(-0.4)² = (-0.4) × (-0.4) = +0.16."
              },
              {
                "step": "Step 3: Compare with -0.4",
                "detail": "Since +0.16 is positive and -0.4 is negative, +0.16 > -0.4."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the square of any non-zero negative rational number?",
              "a": "Always strictly positive, because negative times negative equals positive: (-a)² = +a²."
            },
            {
              "q": "What is the formula for the square of a fraction (a/b)?",
              "a": "(a/b)² = a² / b² (where b ≠ 0)."
            },
            {
              "q": "If 0 < x < 1, how does x² compare to x?",
              "a": "x² is strictly smaller than x (e.g. (1/3)² = 1/9 < 1/3)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the value of (-9 / 16)² expressed as a simplified rational fraction?",
              "options": [
                "81 / 256",
                "-81 / 256",
                "18 / 32",
                "-18 / 32"
              ],
              "correct": 0,
              "strategy": "Apply (-a/b)² = a² / b². Both numerator and denominator are squared independently.",
              "derivation": "(-9)² = (-9) × (-9) = 81. (16)² = 16 × 16 = 256. Therefore, (-9/16)² = 81/256.",
              "trap": "Keeping the negative sign in the final squared answer, forgetting that (-a)² = +a²."
            },
            {
              "q": "If x = 0.05, what is the value of x²?",
              "options": [
                "0.0025",
                "0.025",
                "0.25",
                "0.00025"
              ],
              "correct": 0,
              "strategy": "Count decimal places: squaring a 2-decimal-place number produces 2 × 2 = 4 decimal places.",
              "derivation": "0.05 × 0.05: 5 × 5 = 25. With 2 + 2 = 4 decimal digits, the result is 0.0025.",
              "trap": "Guessing 0.025 with only 3 decimal places."
            },
            {
              "q": "Which of the following rational numbers has a square that is strictly LESS than the number itself?",
              "options": [
                "3 / 4",
                "5 / 2",
                "1.5",
                "4"
              ],
              "correct": 0,
              "strategy": "Recall the magnitude law: if 0 < x < 1, then x² < x.",
              "derivation": "3/4 = 0.75 is between 0 and 1. (3/4)² = 9/16 = 0.5625, and 0.5625 < 0.75. For all numbers > 1, the square is larger.",
              "trap": "Assuming numbers with larger numerators shrink when squared."
            }
          ]
        },
        {
          "id": "g8-m-1.2",
          "code": "1.2",
          "title": "The Square Root of a Rational Number",
          "survey": {
            "blueprint": "Square root is the inverse operation of squaring. Principal (non-negative) square root √x ≥ 0. Every positive rational number has two square roots (±√x). √(a/b) = √a / √b. √(ab) = √a · √b. Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400.",
            "objectives": [
              "Distinguish between the two square roots of a positive rational number and its principal square root (√x).",
              "Extract square roots of fractions and decimals using prime factorization and numerical properties.",
              "Explain why negative rational numbers have no real square roots."
            ],
            "keyFormulas": "If y² = x (x ≥ 0), then y = ±√x | Principal root: √x ≥ 0 | √(a/b) = √a / √b | √(ab) = √a · √b"
          },
          "questions": [
            "Why does the equation y² = 25 have two solutions (±5), but the radical √25 denotes only +5?",
            "How can prime factorization be used to determine if a rational fraction is a perfect square?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🌱 1. Concept of Square Roots</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The <strong>square root</strong> of a given non-negative rational number $x$ is a number $y$ such that $y^2 = x$.<br>\n                  • Since $(-5)^2 = 25$ and $(+5)^2 = 25$, the number $25$ has <strong>two square roots</strong>: $+5$ and $-5$.<br>\n                  • <strong>Principal Square Root:</strong> The symbol $\\sqrt{x}$ (the radical) specifically denotes the <em>non-negative</em> square root. Hence, $\\sqrt{25} = +5$, while $-\\sqrt{25} = -5$.<br>\n                  • <strong>Non-existence in $\\mathbb{R}$:</strong> There is no real rational number whose square is negative (e.g. $\\sqrt{-16}$ does not exist in real numbers).\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">⚙️ 2. Core Radical Laws</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  For any non-negative rational numbers $a$ and $b$ ($b \\neq 0$):<br>\n                  • <strong>Product Law:</strong> $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$. (e.g. $\\sqrt{400} = \\sqrt{4 \\times 100} = 2 \\times 10 = 20$).<br>\n                  • <strong>Quotient Law:</strong> $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$. (e.g. $\\sqrt{\\frac{64}{81}} = \\frac{\\sqrt{64}}{\\sqrt{81}} = \\frac{8}{9}$).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Simplifying Radicals",
            "problem": "Find the principal square root of 324 / 576.",
            "steps": [
              {
                "step": "Step 1: Simplify by prime factors or recognize perfect squares",
                "detail": "324 = 18² and 576 = 24²."
              },
              {
                "step": "Step 2: Apply quotient rule",
                "detail": "√(324 / 576) = √324 / √576 = 18 / 24."
              },
              {
                "step": "Step 3: Reduce fraction to lowest terms",
                "detail": "Divide numerator and denominator by 6: (18 ÷ 6) / (24 ÷ 6) = 3 / 4."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the principal square root of a positive number?",
              "a": "The unique non-negative square root, denoted by √x."
            },
            {
              "q": "How many real square roots does a positive rational number have?",
              "a": "Two: one positive (+√x) and one negative (-√x)."
            },
            {
              "q": "What is √(a/b) equal to?",
              "a": "√a / √b (where a ≥ 0 and b > 0)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the principal square root of the rational fraction 196 / 625?",
              "options": [
                "14 / 25",
                "16 / 25",
                "14 / 35",
                "12 / 25"
              ],
              "correct": 0,
              "strategy": "Apply √(a/b) = √a / √b. 14² = 196 and 25² = 625.",
              "derivation": "√196 = 14 since 14 × 14 = 196. √625 = 25 since 25 × 25 = 625. Thus, √(196/625) = 14/25.",
              "trap": "Confusing 14² (196) with 16² (256)."
            },
            {
              "q": "What are all real solutions to the equation x² = 1.44?",
              "options": [
                "x = ±1.2",
                "x = 1.2 only",
                "x = 0.12 only",
                "x = ±0.72"
              ],
              "correct": 0,
              "strategy": "The equation x² = c (c > 0) has two roots: x = +√c and x = -√c.",
              "derivation": "√(1.44) = √(144/100) = 12/10 = 1.2. Because (-1.2)² = 1.44 as well, x = ±1.2.",
              "trap": "Forgetting the negative root when solving an equation x² = c."
            },
            {
              "q": "What is the value of √(0.0081)?",
              "options": [
                "0.09",
                "0.9",
                "0.009",
                "0.0009"
              ],
              "correct": 0,
              "strategy": "0.0081 has 4 decimal places. Taking the square root halves the decimal places to 2: √81 = 9 → 0.09.",
              "derivation": "√(0.0081) = √(81 / 10,000) = √81 / √10,000 = 9 / 100 = 0.09.",
              "trap": "Guessing 0.9 or 0.009."
            }
          ]
        },
        {
          "id": "g8-m-1.3",
          "code": "1.3",
          "title": "Cubes and Cube Roots",
          "survey": {
            "blueprint": "Cube of x is x³ = x · x · x. Cube of a positive is positive; cube of a negative is NEGATIVE: (-x)³ = -x³. Cube root ³√x: every real number (positive, negative, or zero) has exactly ONE real cube root. ³√(a/b) = ³√a / ³√b. Perfect cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.",
            "objectives": [
              "Calculate cubes of integers, fractions, and decimals.",
              "Extract real cube roots of both positive and negative rational numbers.",
              "Differentiate between square roots (which cannot take negative inputs) and cube roots (which can)."
            ],
            "keyFormulas": "x³ = x · x · x | (-x)³ = -x³ | ³√(-x) = -³√x | ³√(a/b) = ³√a / ³√b"
          },
          "questions": [
            "Why does the cube root of a negative rational number exist as a real number, unlike a square root?",
            "What is the cube root of -216 / 343?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🧊 1. Cubes of Rational Numbers</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The <strong>cube</strong> of a rational number $a$ is the product of three factors of $a$: $a^3 = a \\times a \\times a$.<br>\n                  • <strong>Sign preservation:</strong><br>\n                    - If $a > 0$, then $a^3 > 0$ (e.g. $4^3 = 4 \\times 4 \\times 4 = 64$).<br>\n                    - If $a < 0$, then $a^3 < 0$ (e.g. $(-4)^3 = (-4) \\times (-4) \\times (-4) = -64$).<br>\n                  • <strong>Cube of a quotient:</strong> $\\left(\\frac{a}{b}\\right)^3 = \\frac{a^3}{b^3}$.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">🔍 2. Cube Roots (Radical Index 3)</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The <strong>cube root</strong> of a number $x$ is denoted by $\\sqrt[3]{x}$. It is the unique number $y$ such that $y^3 = x$.<br>\n                  • Unlike square roots, every real rational number has <strong>exactly ONE real cube root</strong>, which shares the sign of the radicand:<br>\n                    - $\\sqrt[3]{125} = 5$ because $5^3 = 125$.<br>\n                    - $\\sqrt[3]{-125} = -5$ because $(-5)^3 = -125$.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Extracting Cube Roots",
            "problem": "Evaluate ³√(-216 / 343).",
            "steps": [
              {
                "step": "Step 1: Apply quotient and sign rules for cube roots",
                "detail": "³√(-216 / 343) = - (³√216 / ³√343)."
              },
              {
                "step": "Step 2: Find cube roots of numerator and denominator",
                "detail": "216 = 6³ so ³√216 = 6. 343 = 7³ so ³√343 = 7."
              },
              {
                "step": "Step 3: Combine results",
                "detail": "³√(-216 / 343) = -6 / 7."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the cube of a negative number?",
              "a": "Always negative: (-a)³ = -a³."
            },
            {
              "q": "Can a negative number have a real cube root?",
              "a": "Yes! Exactly one real negative cube root: ³√(-x) = -³√x."
            },
            {
              "q": "What are the first five positive perfect cubes?",
              "a": "1, 8, 27, 64, 125."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the exact value of ³√(-512 / 729)?",
              "options": [
                "-8 / 9",
                "8 / 9",
                "-16 / 27",
                "Does not exist in real numbers"
              ],
              "correct": 0,
              "strategy": "Cube roots preserve sign: ³√(-a/b) = -³√a / ³√b. 8³ = 512 and 9³ = 729.",
              "derivation": "³√512 = 8 (since 8 × 8 × 8 = 512). ³√729 = 9 (since 9 × 9 × 9 = 729). Thus, ³√(-512/729) = -8/9.",
              "trap": "Claiming cube roots of negatives do not exist (confusing cube roots with square roots)."
            },
            {
              "q": "What is the volume of a cubic water reservoir if its edge length is 0.4 meters?",
              "options": [
                "0.064 m³",
                "0.64 m³",
                "0.016 m³",
                "0.16 m³"
              ],
              "correct": 0,
              "strategy": "Volume of cube = s³. (0.4)³ has 1 × 3 = 3 decimal places.",
              "derivation": "V = (0.4)³ = 0.4 × 0.4 × 0.4 = 0.16 × 0.4 = 0.064 m³.",
              "trap": "Calculating 0.4² (0.16) instead of 0.4³."
            },
            {
              "q": "If the volume of a cube is 27 / 125 cm³, what is the length of one of its edges?",
              "options": [
                "3 / 5 cm",
                "9 / 25 cm",
                "3 / 25 cm",
                "9 / 5 cm"
              ],
              "correct": 0,
              "strategy": "Edge length s = ³√V = ³√(27 / 125).",
              "derivation": "³√27 = 3 and ³√125 = 5. Therefore, s = 3/5 cm (or 0.6 cm).",
              "trap": "Taking the square root (which would give irrational numbers) instead of cube root."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u2",
      "number": "Unit 2",
      "title": "Further on Working with Variables",
      "bigIdea": "Master polynomial arithmetic, multiplication of binomials (FOIL & special products), and factoring polynomials using HCF.",
      "subtopics": [
        {
          "id": "g8-m-2.1",
          "code": "2.1",
          "title": "Further on Algebraic Terms and Expressions",
          "survey": {
            "blueprint": "Algebraic terms: coefficient, variable, exponent. Degree of a term and degree of a polynomial. Like terms have identical variable parts with identical exponents. Addition and subtraction of polynomials: combine like terms only.",
            "objectives": [
              "Identify numerical coefficients, variables, and degrees of monomials and polynomials.",
              "Combine like terms to simplify complex multi-variable algebraic expressions.",
              "Add and subtract polynomials horizontally and vertically."
            ],
            "keyFormulas": "Like terms: same variables, same powers | Degree = highest exponent sum"
          },
          "questions": [
            "Why can 4x²y and -7x²y be combined, but 4x²y and 4xy² cannot?",
            "What is the degree of the polynomial 5x³y² - 8x⁴ + 9y - 12?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">📐 1. Anatomy of Algebraic Expressions</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Term:</strong> An algebraic expression consisting of a number (coefficient), one or more variables, and exponents, multiplied together (e.g. $-6x^3y^2$).<br>\n                  • <strong>Degree of a Term:</strong> The sum of the exponents of all its variables. For $-6x^3y^2$, degree is $3 + 2 = 5$.<br>\n                  • <strong>Degree of a Polynomial:</strong> The highest degree of any of its non-zero terms.<br>\n                  • <strong>Like Terms:</strong> Terms that have the exact same variables raised to the exact same powers. Only like terms can be combined by adding or subtracting their numerical coefficients.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Simplifying Polynomials",
            "problem": "Simplify: (5x² - 3xy + 4y²) - (2x² + 5xy - y²).",
            "steps": [
              {
                "step": "Step 1: Distribute the negative sign",
                "detail": "5x² - 3xy + 4y² - 2x² - 5xy + y²"
              },
              {
                "step": "Step 2: Group like terms",
                "detail": "(5x² - 2x²) + (-3xy - 5xy) + (4y² + y²)"
              },
              {
                "step": "Step 3: Combine coefficients",
                "detail": "3x² - 8xy + 5y²."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What makes two algebraic terms \"like terms\"?",
              "a": "They have identical variables raised to identical exponents."
            },
            {
              "q": "What is the degree of the term -8x⁴y³?",
              "a": "Degree is 4 + 3 = 7."
            },
            {
              "q": "Can 3x² and 5x³ be combined into 8x⁵?",
              "a": "No! They are unlike terms because their exponents differ."
            }
          ],
          "amtQuiz": [
            {
              "q": "Simplify the polynomial expression: 7a²b - 4ab² + 3a²b - 2ab².",
              "options": [
                "10a²b - 6ab²",
                "4a²b - 6ab²",
                "10a⁴b² - 6a²b⁴",
                "4a²b - 2ab²"
              ],
              "correct": 0,
              "strategy": "Combine like terms independently: (7 + 3)a²b and (-4 - 2)ab².",
              "derivation": "(7a²b + 3a²b) + (-4ab² - 2ab²) = 10a²b - 6ab².",
              "trap": "Attempting to combine a²b and ab² together into a single term."
            },
            {
              "q": "What is the degree of the multi-variable polynomial 4x²y³ - 9x⁴y + 7xy² - 15?",
              "options": [
                "5",
                "4",
                "6",
                "3"
              ],
              "correct": 0,
              "strategy": "Find the degree of each term. Term 1: 2+3=5. Term 2: 4+1=5. Term 3: 1+2=3. Term 4: 0. Highest is 5.",
              "derivation": "Both 4x²y³ (2+3=5) and -9x⁴y (4+1=5) have degree 5. The degree of the polynomial is the maximum degree, which is 5.",
              "trap": "Picking 4 from the exponent of x alone, ignoring the exponent of y."
            },
            {
              "q": "Subtract (3x - 5y + 8) from (7x + 2y - 4).",
              "options": [
                "4x + 7y - 12",
                "4x - 3y + 4",
                "10x - 3y + 4",
                "-4x - 7y + 12"
              ],
              "correct": 0,
              "strategy": "\"Subtract A from B\" means B - A: (7x + 2y - 4) - (3x - 5y + 8).",
              "derivation": "7x + 2y - 4 - 3x + 5y - 8 = (7 - 3)x + (2 + 5)y + (-4 - 8) = 4x + 7y - 12.",
              "trap": "Subtracting in reverse order (A - B) or failing to distribute the negative sign to -5y."
            }
          ]
        },
        {
          "id": "g8-m-2.2",
          "code": "2.2",
          "title": "Multiplication of Binomials and Special Products",
          "survey": {
            "blueprint": "Distributive property for binomials: (a + b)(c + d) = ac + ad + bc + bd (FOIL: First, Outer, Inner, Last). Special product identities: Square of a sum (a + b)² = a² + 2ab + b²; Square of a difference (a - b)² = a² - 2ab + b²; Difference of squares (a + b)(a - b) = a² - b².",
            "objectives": [
              "Multiply any two binomials using the distributive property and FOIL method.",
              "Expand perfect square binomials: (a ± b)² = a² ± 2ab + b².",
              "Apply the difference of two squares identity: (a + b)(a - b) = a² - b²."
            ],
            "keyFormulas": "(a + b)(c + d) = ac + ad + bc + bd | (a ± b)² = a² ± 2ab + b² | (a + b)(a - b) = a² - b²"
          },
          "questions": [
            "Why does (x + 3)² equal x² + 6x + 9, and NOT x² + 9?",
            "How can the difference of squares identity be used to mentally calculate 42 × 38?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">⚡ 1. The FOIL Method for Binomials</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  To multiply $(ax + b)(cx + d)$:<br>\n                  • <strong>F</strong>irst: $(ax)(cx) = acx^2$<br>\n                  • <strong>O</strong>uter: $(ax)(d) = adx$<br>\n                  • <strong>I</strong>nner: $(b)(cx) = bcx$<br>\n                  • <strong>L</strong>ast: $(b)(d) = bd$<br>\n                  Combine middle terms: $acx^2 + (ad + bc)x + bd$.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">⭐ 2. Three Golden Special Product Formulas</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300\">\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-800\">\n                    <strong class=\"text-emerald-300\">Square of a Sum:</strong><br>\n                    $(a + b)^2 = a^2 + 2ab + b^2$\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-800\">\n                    <strong class=\"text-rose-300\">Square of a Diff:</strong><br>\n                    $(a - b)^2 = a^2 - 2ab + b^2$\n                  </div>\n                  <div class=\"p-2.5 bg-space-950 rounded-lg border border-slate-800\">\n                    <strong class=\"text-amber-300\">Diff of Squares:</strong><br>\n                    $(a + b)(a - b) = a^2 - b^2$\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Special Products",
            "problem": "Expand (3x - 4y)² and compute 52 × 48 using special products.",
            "steps": [
              {
                "step": "Step 1: Expand (3x - 4y)²",
                "detail": "(3x)² - 2(3x)(4y) + (4y)² = 9x² - 24xy + 16y²."
              },
              {
                "step": "Step 2: Express 52 × 48 as (a + b)(a - b)",
                "detail": "52 = 50 + 2 and 48 = 50 - 2. So 52 × 48 = (50 + 2)(50 - 2)."
              },
              {
                "step": "Step 3: Apply difference of squares",
                "detail": "50² - 2² = 2500 - 4 = 2496."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the expansion of (a + b)²?",
              "a": "a² + 2ab + b² (never forget the middle term 2ab!)."
            },
            {
              "q": "What is (a + b)(a - b) equal to?",
              "a": "a² - b² (the middle terms cancel out)."
            },
            {
              "q": "What does FOIL stand for?",
              "a": "First, Outer, Inner, Last."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the expanded form of (2x - 5y)²?",
              "options": [
                "4x² - 20xy + 25y²",
                "4x² - 25y²",
                "4x² - 10xy + 25y²",
                "4x² + 20xy + 25y²"
              ],
              "correct": 0,
              "strategy": "Apply (a - b)² = a² - 2ab + b² where a = 2x and b = 5y.",
              "derivation": "(2x)² - 2(2x)(5y) + (5y)² = 4x² - 20xy + 25y².",
              "trap": "Omitting the middle term -2ab and writing 4x² - 25y²."
            },
            {
              "q": "Expand and simplify: (3x + 4)(2x - 5).",
              "options": [
                "6x² - 7x - 20",
                "6x² + 7x - 20",
                "6x² - 20",
                "6x² - 23x - 20"
              ],
              "correct": 0,
              "strategy": "Use FOIL: First = 6x², Outer = -15x, Inner = +8x, Last = -20.",
              "derivation": "6x² - 15x + 8x - 20 = 6x² + (-15 + 8)x - 20 = 6x² - 7x - 20.",
              "trap": "Adding -15x and +8x incorrectly to get -23x or +7x."
            },
            {
              "q": "Using the difference of squares identity (a+b)(a-b) = a² - b², what is 65 × 55?",
              "options": [
                "3575",
                "3600",
                "3550",
                "3625"
              ],
              "correct": 0,
              "strategy": "65 = 60 + 5 and 55 = 60 - 5. (60 + 5)(60 - 5) = 60² - 5².",
              "derivation": "60² = 3600. 5² = 25. 3600 - 25 = 3575.",
              "trap": "Subtracting 5 instead of 5² (25)."
            }
          ]
        },
        {
          "id": "g8-m-2.3",
          "code": "2.3",
          "title": "Highest Common Factors and Factoring Polynomials",
          "survey": {
            "blueprint": "Factoring is the reverse of multiplication. Factoring out the HCF (greatest common monomial factor). Factoring by grouping terms (4-term polynomials). Factoring difference of two squares: a² - b² = (a - b)(a + b). Complete factorization.",
            "objectives": [
              "Determine the HCF of algebraic terms and factor out the greatest common monomial factor.",
              "Factor four-term polynomials using the method of grouping.",
              "Factor completely using difference of squares and common factors."
            ],
            "keyFormulas": "Factoring HCF: ax + ay = a(x + y) | Diff of squares: a² - b² = (a - b)(a + b)"
          },
          "questions": [
            "How do you identify the greatest common factor of 18x³y² and 24x²y⁴?",
            "What is the completely factored form of 2x³ - 18x?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🔑 1. Factoring Out the HCF</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  The <strong>Highest Common Factor (HCF)</strong> of two or more algebraic terms is the product of the HCF of the numerical coefficients and the lowest power of each common variable.<br>\n                  <em>Example:</em> For $12x^3y^2$ and $18x^2y^5$, $\\text{HCF}(12, 18) = 6$, lowest power of $x$ is $x^2$, lowest power of $y$ is $y^2$. So $\\text{HCF} = 6x^2y^2$.<br>\n                  $12x^3y^2 + 18x^2y^5 = 6x^2y^2(2x + 3y^3)$.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">🧩 2. Factoring by Grouping & Difference of Squares</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Grouping:</strong> $ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$.<br>\n                  • <strong>Difference of Squares:</strong> $a^2 - b^2 = (a - b)(a + b)$. Always check if further factorization is possible (e.g. $x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$).\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Complete Factorization",
            "problem": "Factor completely: 3x³ - 27x.",
            "steps": [
              {
                "step": "Step 1: Factor out the common monomial HCF",
                "detail": "HCF(3x³, 27x) = 3x. 3x(x² - 9)."
              },
              {
                "step": "Step 2: Recognize difference of squares in the binomial factor",
                "detail": "x² - 9 = x² - 3² = (x - 3)(x + 3)."
              },
              {
                "step": "Step 3: Combine all factors",
                "detail": "3x(x - 3)(x + 3)."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the first step in factoring any polynomial?",
              "a": "Always look for and factor out the greatest common monomial factor (HCF)."
            },
            {
              "q": "How do you factor a² - b²?",
              "a": "(a - b)(a + b)."
            },
            {
              "q": "Can a sum of squares (a² + b²) be factored over real numbers?",
              "a": "No, a² + b² cannot be factored over real numbers."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the complete factorization of the expression 5x³ - 20x?",
              "options": [
                "5x(x - 2)(x + 2)",
                "5x(x² - 4)",
                "(5x² - 10)(x + 2)",
                "5(x³ - 4x)"
              ],
              "correct": 0,
              "strategy": "Step 1: Factor out HCF = 5x. Step 2: Factor the remaining difference of squares (x² - 4).",
              "derivation": "5x³ - 20x = 5x(x² - 4) = 5x(x - 2)(x + 2). Factoring 5x(x² - 4) is incomplete because x² - 4 factors further.",
              "trap": "Stopping at 5x(x² - 4) without factoring the difference of squares completely."
            },
            {
              "q": "Factor by grouping: 2ax - 3ay + 2bx - 3by.",
              "options": [
                "(2x - 3y)(a + b)",
                "(2x + 3y)(a - b)",
                "(ax - by)(2 + 3)",
                "(2a + 3b)(x - y)"
              ],
              "correct": 0,
              "strategy": "Group the first two terms and last two terms: a(2x - 3y) + b(2x - 3y).",
              "derivation": "a(2x - 3y) + b(2x - 3y) = (2x - 3y)(a + b).",
              "trap": "Making a sign error when grouping negative terms."
            },
            {
              "q": "What is the Highest Common Factor (HCF) of 24x⁴y³ and 36x²y⁵?",
              "options": [
                "12x²y³",
                "6x²y³",
                "12x⁴y⁵",
                "72x⁴y⁵"
              ],
              "correct": 0,
              "strategy": "HCF of coefficients = 12. For variables, take the lowest exponent: x² and y³.",
              "derivation": "HCF(24, 36) = 12. Lowest power of x is min(4, 2) = 2. Lowest power of y is min(3, 5) = 3. HCF = 12x²y³.",
              "trap": "Taking the LCM (72x⁴y⁵) or the highest power instead of the lowest power."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u3",
      "number": "Unit 3",
      "title": "Linear Equations and Inequalities",
      "bigIdea": "Solve multi-step linear equations and inequalities, master the Cartesian coordinate plane, and analyze graphs and slope.",
      "subtopics": [
        {
          "id": "g8-m-3.1",
          "code": "3.1",
          "title": "Further on Solutions of Linear Equations",
          "survey": {
            "blueprint": "Linear equations in one variable: ax + b = c. Multi-step equations involving parentheses, distributive property, and clearing fractional denominators using LCM.",
            "objectives": [
              "Solve linear equations involving brackets and fractions.",
              "Clear denominators using the LCM.",
              "Solve real-world word problems."
            ],
            "keyFormulas": "ax + b = 0 (a ≠ 0) | Multiply by LCM of denominators"
          },
          "questions": [
            "How do you clear fractions in (x - 1)/3 + (x + 2)/4 = 5?",
            "What does it mean if an equation simplifies to 0 = 0 vs 0 = 5?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-amber-400\">⚖️ Multi-Step Linear Equations</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              To solve complex linear equations:<br>\n              1. <strong>Clear Fractions:</strong> Multiply every term by the LCM of all denominators.<br>\n              2. <strong>Clear Brackets:</strong> Use the distributive property $a(b + c) = ab + ac$.<br>\n              3. <strong>Collect Variables:</strong> Move variable terms to one side and constants to the other using addition/subtraction.<br>\n              4. <strong>Isolate the Variable:</strong> Divide by the numerical coefficient.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Clearing Denominators",
            "problem": "Solve: (2x - 3) / 4 - (x - 1) / 3 = 1 / 6.",
            "steps": [
              {
                "step": "Step 1: Multiply entire equation by LCM(4, 3, 6) = 12",
                "detail": "12 · [(2x - 3)/4] - 12 · [(x - 1)/3] = 12 · (1/6) → 3(2x - 3) - 4(x - 1) = 2."
              },
              {
                "step": "Step 2: Distribute and combine like terms",
                "detail": "6x - 9 - 4x + 4 = 2 → 2x - 5 = 2."
              },
              {
                "step": "Step 3: Solve for x",
                "detail": "2x = 7 → x = 7/2 = 3.5."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "How do you eliminate fractions in a linear equation?",
              "a": "Multiply every single term on both sides by the LCM of all denominators."
            },
            {
              "q": "What is an identity equation?",
              "a": "An equation true for all real numbers (e.g. 2x + 4 = 2(x + 2)), yielding infinite solutions."
            }
          ],
          "amtQuiz": [
            {
              "q": "Solve for x: (3x - 1) / 2 - (x + 3) / 5 = 4.",
              "options": [
                "x = 47 / 13",
                "x = 35 / 13",
                "x = 51 / 13",
                "x = 3"
              ],
              "correct": 0,
              "strategy": "Multiply all terms by LCM(2, 5) = 10 to clear denominators.",
              "derivation": "10 · [(3x-1)/2] - 10 · [(x+3)/5] = 10 · 4 → 5(3x - 1) - 2(x + 3) = 40 → 15x - 5 - 2x - 6 = 40 → 13x - 11 = 40 → 13x = 51... wait: 15x - 2x = 13x; -5 - 6 = -11; 40 + 11 = 51. 13x = 51 → x = 51/13.",
              "trap": "Be careful with signs: -2(x + 3) = -2x - 6."
            },
            {
              "q": "Solve: 4(2x - 3) - 3(x + 5) = 7.",
              "options": [
                "x = 34 / 5",
                "x = 6.8",
                "x = 34 / 5 (6.8)",
                "x = 4"
              ],
              "correct": 2,
              "strategy": "Expand parentheses: 8x - 12 - 3x - 15 = 7.",
              "derivation": "5x - 27 = 7 → 5x = 34 → x = 34/5 = 6.8.",
              "trap": "Failing to distribute -3 to +5 (writing +15 instead of -15)."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in further on solutions of linear equations?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            }
          ]
        },
        {
          "id": "g8-m-3.2",
          "code": "3.2",
          "title": "Further on Linear Inequalities and Number Lines",
          "survey": {
            "blueprint": "Inequalities: <, >, ≤, ≥. Reversal rule: Multiplying or dividing both sides by a NEGATIVE number reverses the inequality sign! Graphing solution sets on a real number line (open circle for <, >, closed circle for ≤, ≥).",
            "objectives": [
              "Apply inequality properties.",
              "Remember to flip the inequality sign when multiplying/dividing by a negative.",
              "Graph solutions on number lines."
            ],
            "keyFormulas": "If a < b and c < 0, then ac > bc | Open circle: strict (<, >) | Solid circle: non-strict (≤, ≥)"
          },
          "questions": [
            "Why does multiplying -2x < 6 by -1/2 flip the inequality to x > -3?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-amber-400\">⚠️ The Negative Reversal Rule</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              When multiplying or dividing both sides of an inequality by a <strong>negative rational number</strong>, the direction of the inequality symbol <strong>MUST BE REVERSED</strong>:<br>\n              • If $-3x \\leq 12$, divide by $-3$: $x \\geq -4$.<br>\n              • On a number line: an <strong>open circle</strong> $(\\circ)$ is used for $<$ and $>$; a <strong>solid closed dot</strong> $(\\bullet)$ is used for $\\leq$ and $\\geq$.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Solving Inequalities",
            "problem": "Solve and graph: 5 - 3x ≤ 20.",
            "steps": [
              {
                "step": "Step 1: Subtract 5 from both sides",
                "detail": "-3x ≤ 15."
              },
              {
                "step": "Step 2: Divide by -3 and REVERSE the inequality sign",
                "detail": "x ≥ 15 / (-3) → x ≥ -5."
              },
              {
                "step": "Step 3: Solution set",
                "detail": "{x ∈ Q : x ≥ -5}. Solid circle at -5 shading to the right."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "When must you reverse an inequality sign?",
              "a": "Whenever you multiply or divide both sides by a negative number."
            },
            {
              "q": "What does a solid dot on a number line mean?",
              "a": "The boundary value is included in the solution set (≤ or ≥)."
            }
          ],
          "amtQuiz": [
            {
              "q": "Solve the linear inequality: 7 - 4x > 23.",
              "options": [
                "x < -4",
                "x > -4",
                "x < 4",
                "x > 4"
              ],
              "correct": 0,
              "strategy": "Subtract 7: -4x > 16. Divide by -4 and FLIP > to <.",
              "derivation": "-4x > 16 → x < 16 / (-4) → x < -4.",
              "trap": "Forgetting to reverse the inequality symbol when dividing by -4."
            },
            {
              "q": "Which number line graph represents the solution set of -2 ≤ x < 3?",
              "options": [
                "Solid closed dot at -2, open circle at 3, with the line between them shaded",
                "Open circle at -2, solid dot at 3",
                "Open circles at both -2 and 3",
                "Solid dots at both -2 and 3"
              ],
              "correct": 0,
              "strategy": "≤ includes -2 (solid dot); < excludes 3 (open circle).",
              "derivation": "x is greater than or equal to -2 (closed circle) and strictly less than 3 (open circle).",
              "trap": "Mixing up solid (inclusive) and open (strict) boundary circles."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in further on linear inequalities and number lines?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            }
          ]
        },
        {
          "id": "g8-m-3.3",
          "code": "3.3",
          "title": "Cartesian Coordinate System, Linear Graphs & Slope",
          "survey": {
            "blueprint": "Cartesian plane: x-axis (abscissa), y-axis (ordinate), origin (0,0), four quadrants. Ordered pairs (x,y). Linear equation in two variables: ax + by = c. Slope of a line m = (y₂ - y₁) / (x₂ - x₁). Slope-intercept form: y = mx + c. Intercepts: x-intercept (set y = 0), y-intercept (set x = 0).",
            "objectives": [
              "Plot points in four quadrants.",
              "Calculate slope m = (y₂ - y₁) / (x₂ - x₁).",
              "Graph lines using table of values or x- and y-intercepts."
            ],
            "keyFormulas": "Slope m = (y₂ - y₁) / (x₂ - x₁) | y = mx + c"
          },
          "questions": [
            "How do you calculate the slope of a line passing through (2, 3) and (6, 11)?",
            "What is the slope of a horizontal line vs a vertical line?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-amber-400\">📈 Slope (Gradient) of a Line</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              The <strong>slope ($m$)</strong> measures the steepness and direction of a non-vertical line:<br>\n              $$m = \\frac{\\text{Vertical Change (Rise)}}{\\text{Horizontal Change (Run)}} = \\frac{y_2 - y_1}{x_2 - x_1} \\quad (x_2 \\neq x_1)$$<br>\n              • <strong>Positive slope ($m > 0$):</strong> Line rises from left to right.<br>\n              • <strong>Negative slope ($m < 0$):</strong> Line falls from left to right.<br>\n              • <strong>Zero slope ($m = 0$):</strong> Horizontal line ($y = c$).<br>\n              • <strong>Undefined slope:</strong> Vertical line ($x = k$).\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Slope Calculation",
            "problem": "Find the slope of the line passing through A(-2, 5) and B(4, -7).",
            "steps": [
              {
                "step": "Step 1: Identify coordinates",
                "detail": "x₁ = -2, y₁ = 5, x₂ = 4, y₂ = -7."
              },
              {
                "step": "Step 2: Apply slope formula",
                "detail": "m = [(-7) - 5] / [4 - (-2)] = -12 / (4 + 2) = -12 / 6 = -2."
              },
              {
                "step": "Step 3: Interpretation",
                "detail": "The line has a negative slope of -2 (falls 2 units for every 1 unit right)."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the formula for the slope of a line?",
              "a": "m = (y₂ - y₁) / (x₂ - x₁)."
            },
            {
              "q": "What is the slope of any horizontal line?",
              "a": "Zero (0)."
            },
            {
              "q": "What is the slope of any vertical line?",
              "a": "Undefined (division by zero)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the slope of the straight line passing through P(3, -2) and Q(7, 6)?",
              "options": [
                "2",
                "1 / 2",
                "-2",
                "4"
              ],
              "correct": 0,
              "strategy": "m = (y₂ - y₁) / (x₂ - x₁) = [6 - (-2)] / (7 - 3).",
              "derivation": "m = (6 + 2) / (7 - 3) = 8 / 4 = 2.",
              "trap": "Subtracting coordinates in reverse or confusing x and y."
            },
            {
              "q": "What are the x-intercept and y-intercept of the line 3x - 2y = 12?",
              "options": [
                "x-intercept = (4, 0) and y-intercept = (0, -6)",
                "x-intercept = (0, 4) and y-intercept = (-6, 0)",
                "x-intercept = (6, 0) and y-intercept = (0, -4)",
                "x-intercept = (12, 0) and y-intercept = (0, 12)"
              ],
              "correct": 0,
              "strategy": "To find x-intercept, set y = 0: 3x = 12 → x = 4. To find y-intercept, set x = 0: -2y = 12 → y = -6.",
              "derivation": "Setting y = 0: 3x = 12 → x = 4, so (4, 0). Setting x = 0: -2y = 12 → y = -6, so (0, -6).",
              "trap": "Forgetting the negative sign on -2y."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in cartesian coordinate system, linear graphs & slope?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u4",
      "number": "Unit 4",
      "title": "Similar Figures",
      "bigIdea": "Understand geometric similarity: corresponding angles are congruent and corresponding sides are proportional. Master similarity criteria for triangles.",
      "subtopics": [
        {
          "id": "g8-m-4.1",
          "code": "4.1",
          "title": "Similar Plane Figures & Scale Factor",
          "survey": {
            "blueprint": "Two figures are similar (~) if: (1) corresponding angles are congruent, and (2) corresponding sides are in the same ratio (scale factor k). If scale factor is k, ratio of perimeters is k, and ratio of areas is k².",
            "objectives": [
              "Define similarity of polygons.",
              "Calculate the scale factor k.",
              "Determine perimeters and areas of similar figures using k and k²."
            ],
            "keyFormulas": "Scale factor k = a₁/a₂ | Perimeter ratio = k | Area ratio = k²"
          },
          "questions": [
            "If two similar rectangles have side ratio 2:3, what is the ratio of their areas?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-amber-400\">📐 Properties of Similar Polygons</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              Two polygons of the same number of sides are <strong>similar ($~$)</strong> if and only if:<br>\n              1. Their corresponding angles are equal (congruent).<br>\n              2. Their corresponding side lengths are proportional.<br>\n              • <strong>Ratio of Perimeters:</strong> Equal to the scale factor $k$.<br>\n              • <strong>Ratio of Areas:</strong> Equal to the square of the scale factor: $\\frac{\\text{Area}_1}{\\text{Area}_2} = k^2$.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Area Ratio",
            "problem": "Two similar triangles have corresponding sides of length 4 cm and 6 cm. If the area of the smaller triangle is 24 cm², find the area of the larger triangle.",
            "steps": [
              {
                "step": "Step 1: Find scale factor k",
                "detail": "k = 6 / 4 = 3 / 2 = 1.5."
              },
              {
                "step": "Step 2: Square the scale factor for area ratio",
                "detail": "k² = (3/2)² = 9 / 4 = 2.25."
              },
              {
                "step": "Step 3: Calculate larger area",
                "detail": "Area_large = 24 × (9/4) = 6 × 9 = 54 cm²."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "If two figures have scale factor k, what is the ratio of their areas?",
              "a": "k² (the square of the scale factor)."
            },
            {
              "q": "Are all congruent figures similar?",
              "a": "Yes! Congruent figures are similar with a scale factor k = 1."
            }
          ],
          "amtQuiz": [
            {
              "q": "Two similar polygons have side lengths in the ratio 3 : 5. If the area of the smaller polygon is 45 cm², what is the area of the larger polygon?",
              "options": [
                "125 cm²",
                "75 cm²",
                "225 cm²",
                "100 cm²"
              ],
              "correct": 0,
              "strategy": "Ratio of areas = (ratio of sides)² = (3/5)² = 9/25.",
              "derivation": "45 / Area_large = 9 / 25 → Area_large = (45 × 25) / 9 = 5 × 25 = 125 cm².",
              "trap": "Multiplying by 5/3 instead of (5/3)²."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in similar plane figures & scale factor?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            },
            {
              "q": "What is the verified procedural step when solving problems involving similar plane figures & scale factor?",
              "options": [
                "State the relevant formula, substitute given values with correct units, simplify systematically, and verify the result",
                "Guess the answer without writing intermediate steps",
                "Ignore dimensional units throughout the calculation",
                "Skip reading the problem constraints"
              ],
              "correct": 0,
              "strategy": "Systematic problem-solving requires formula, substitution, calculation, and verification.",
              "derivation": "Step-by-step mathematical rigor ensures accuracy and eliminates careless algebraic errors.",
              "trap": "Selecting shortcuts that skip verification."
            }
          ]
        },
        {
          "id": "g8-m-4.2",
          "code": "4.2",
          "title": "Similarity Criteria for Triangles (AAA, SAS, SSS)",
          "survey": {
            "blueprint": "Triangle similarity criteria: (1) AAA (or AA): two pairs of angles equal. (2) SSS: three pairs of sides proportional. (3) SAS: two pairs of sides proportional and the included angles equal.",
            "objectives": [
              "Prove triangles similar using AAA, SSS, SAS.",
              "Calculate unknown side lengths in similar triangles."
            ],
            "keyFormulas": "AA: ∠A = ∠D, ∠B = ∠E → ΔABC ~ ΔDEF"
          },
          "questions": [
            "Why does having two equal angles guarantee two triangles are similar?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-amber-400\">🔺 Three Similarity Criteria</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              • <strong>AAA (Angle-Angle-Angle):</strong> If two angles of one triangle are congruent to two angles of another, the triangles are similar (since the third angle must also be equal to make $180^\\circ$).<br>\n              • <strong>SSS Similarity:</strong> If all 3 pairs of corresponding sides are in the same ratio.<br>\n              • <strong>SAS Similarity:</strong> If two pairs of sides are proportional and their included angle is congruent.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Indirect Measurement",
            "problem": "A 2-meter tall pole casts a shadow of 3 meters. At the same time, an acacia tree casts a shadow of 18 meters. Find the height of the tree.",
            "steps": [
              {
                "step": "Step 1: Set up similar triangle proportions",
                "detail": "Height_tree / Height_pole = Shadow_tree / Shadow_pole."
              },
              {
                "step": "Step 2: Substitute values",
                "detail": "h / 2 = 18 / 3 → h / 2 = 6."
              },
              {
                "step": "Step 3: Solve for h",
                "detail": "h = 2 × 6 = 12 meters."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the AA similarity theorem?",
              "a": "If two angles of one triangle equal two angles of another, the triangles are similar."
            }
          ],
          "amtQuiz": [
            {
              "q": "In ΔABC and ΔDEF, ∠A = 50°, ∠B = 70°, ∠D = 50°, and ∠F = 60°. Are the two triangles similar?",
              "options": [
                "Yes, by AA similarity criterion",
                "No, their angles are different",
                "Only if their sides are equal",
                "Cannot be determined"
              ],
              "correct": 0,
              "strategy": "Find the third angle of ΔABC: 180 - (50 + 70) = 60°. Thus ΔABC has angles 50°, 70°, 60°. ΔDEF has 50° and 60°, so its third is 70°.",
              "derivation": "Both triangles have angles 50°, 70°, and 60°. By AAA similarity, they are similar.",
              "trap": "Comparing only the given two angles without calculating the third angle."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in similarity criteria for triangles (aaa, sas, sss)?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            },
            {
              "q": "What is the verified procedural step when solving problems involving similarity criteria for triangles (aaa, sas, sss)?",
              "options": [
                "State the relevant formula, substitute given values with correct units, simplify systematically, and verify the result",
                "Guess the answer without writing intermediate steps",
                "Ignore dimensional units throughout the calculation",
                "Skip reading the problem constraints"
              ],
              "correct": 0,
              "strategy": "Systematic problem-solving requires formula, substitution, calculation, and verification.",
              "derivation": "Step-by-step mathematical rigor ensures accuracy and eliminates careless algebraic errors.",
              "trap": "Selecting shortcuts that skip verification."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u5",
      "number": "Unit 5",
      "title": "Circles",
      "bigIdea": "Explore circle geometry: chords, tangents, arcs, central angle theorem, inscribed angles, and cyclic quadrilaterals.",
      "subtopics": [
        {
          "id": "g8-m-5.1",
          "code": "5.1",
          "title": "Chords, Secants, Tangents and Arcs",
          "survey": {
            "blueprint": "Circle definitions: radius, diameter, chord, secant, tangent. Tangent is perpendicular to the radius at the point of contact. Two tangents drawn from an external point to a circle are equal in length.",
            "objectives": [
              "Identify circle lines and segments.",
              "Apply the tangent-radius perpendicularity theorem (90°).",
              "Use equal tangent lengths from an external point."
            ],
            "keyFormulas": "Tangent ⊥ Radius at point of tangency | External tangent lengths: PA = PB"
          },
          "questions": [
            "What angle does a tangent line make with the radius drawn to the point of tangency?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-amber-400\">⭕ Tangent Theorems</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              • <strong>Perpendicularity:</strong> A tangent to a circle is perpendicular to the radius through the point of contact ($90^\\circ$).<br>\n              • <strong>External Tangents:</strong> The lengths of two tangents drawn from an external point $P$ to a circle are equal: $PA = PB$.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Tangent and Radius",
            "problem": "A tangent PT of length 12 cm is drawn to a circle of radius 5 cm from an external point P. Find the distance from P to the circle center O.",
            "steps": [
              {
                "step": "Step 1: Recognize right-angled triangle ΔOTP",
                "detail": "Since OT ⊥ PT, ∠OTP = 90°. OP is the hypotenuse."
              },
              {
                "step": "Step 2: Apply Pythagorean theorem",
                "detail": "OP² = OT² + PT² = 5² + 12² = 25 + 144 = 169."
              },
              {
                "step": "Step 3: Solve for OP",
                "detail": "OP = √169 = 13 cm."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the angle between a tangent and the radius at the point of contact?",
              "a": "90° (they are perpendicular)."
            },
            {
              "q": "What is true about two tangents drawn to a circle from the same external point?",
              "a": "They have equal lengths."
            }
          ],
          "amtQuiz": [
            {
              "q": "From an external point P, a tangent of length 24 cm is drawn to a circle with radius 7 cm. What is the distance from P to the center of the circle?",
              "options": [
                "25 cm",
                "31 cm",
                "17 cm",
                "24.5 cm"
              ],
              "correct": 0,
              "strategy": "Right triangle: hypotenuse = √(r² + tangent²) = √(7² + 24²).",
              "derivation": "7² + 24² = 49 + 576 = 625. √625 = 25 cm.",
              "trap": "Adding 24 + 7 = 31."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in chords, secants, tangents and arcs?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            },
            {
              "q": "What is the verified procedural step when solving problems involving chords, secants, tangents and arcs?",
              "options": [
                "State the relevant formula, substitute given values with correct units, simplify systematically, and verify the result",
                "Guess the answer without writing intermediate steps",
                "Ignore dimensional units throughout the calculation",
                "Skip reading the problem constraints"
              ],
              "correct": 0,
              "strategy": "Systematic problem-solving requires formula, substitution, calculation, and verification.",
              "derivation": "Step-by-step mathematical rigor ensures accuracy and eliminates careless algebraic errors.",
              "trap": "Selecting shortcuts that skip verification."
            }
          ]
        },
        {
          "id": "g8-m-5.2",
          "code": "5.2",
          "title": "Angles in a Circle and Cyclic Quadrilaterals",
          "survey": {
            "blueprint": "Central angle theorem: The measure of a central angle is twice the measure of an inscribed angle subtended by the same arc (Central = 2 × Inscribed). Inscribed angles subtended by the same arc are equal. Angle in a semicircle is a right angle (90°). Opposite angles of a cyclic quadrilateral sum to 180°.",
            "objectives": [
              "Calculate inscribed and central angles.",
              "Apply Thales’ theorem (angle in a semicircle = 90°).",
              "Solve angles in cyclic quadrilaterals."
            ],
            "keyFormulas": "Central ∠ = 2 × Inscribed ∠ | Semicircle ∠ = 90° | Cyclic Quad: ∠A + ∠C = 180°"
          },
          "questions": [
            "Why is an angle inscribed in a semicircle always exactly 90°?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-cyan-400\">🎯 Circle Angle Theorems</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              1. <strong>Central vs Inscribed:</strong> An angle at the center is twice the angle at the circumference subtended by the same arc: $\\theta_{\\text{center}} = 2 \\theta_{\\text{inscribed}}$.<br>\n              2. <strong>Angle in Semicircle:</strong> Any angle subtended by a diameter at the circumference is $90^\\circ$.<br>\n              3. <strong>Angles in Same Segment:</strong> Inscribed angles standing on the same arc are equal.<br>\n              4. <strong>Cyclic Quadrilateral:</strong> A quadrilateral whose four vertices lie on a circle has opposite angles that are supplementary: $\\angle A + \\angle C = 180^\\circ$ and $\\angle B + \\angle D = 180^\\circ$.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Cyclic Quadrilateral",
            "problem": "In a cyclic quadrilateral ABCD, ∠A = 75° and ∠B = 110°. Find ∠C and ∠D.",
            "steps": [
              {
                "step": "Step 1: Opposite angles sum to 180°",
                "detail": "∠A + ∠C = 180° → 75° + ∠C = 180°."
              },
              {
                "step": "Step 2: Solve for ∠C",
                "detail": "∠C = 180° - 75° = 105°."
              },
              {
                "step": "Step 3: Solve for ∠D",
                "detail": "∠B + ∠D = 180° → 110° + ∠D = 180° → ∠D = 70°."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the relationship between a central angle and an inscribed angle on the same arc?",
              "a": "Central angle = 2 × Inscribed angle."
            },
            {
              "q": "What is the sum of opposite angles in a cyclic quadrilateral?",
              "a": "180° (they are supplementary)."
            },
            {
              "q": "What is the measure of an angle inscribed in a semicircle?",
              "a": "Exactly 90°."
            }
          ],
          "amtQuiz": [
            {
              "q": "An arc of a circle subtends an angle of 68° at the center. What angle does the same arc subtend at the circumference?",
              "options": [
                "34°",
                "136°",
                "68°",
                "22°"
              ],
              "correct": 0,
              "strategy": "Inscribed angle = 1/2 of central angle: 68° / 2 = 34°.",
              "derivation": "By the central angle theorem, θ_inscribed = 68° / 2 = 34°.",
              "trap": "Multiplying by 2 (136°) instead of dividing by 2."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in angles in a circle and cyclic quadrilaterals?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            },
            {
              "q": "What is the verified procedural step when solving problems involving angles in a circle and cyclic quadrilaterals?",
              "options": [
                "State the relevant formula, substitute given values with correct units, simplify systematically, and verify the result",
                "Guess the answer without writing intermediate steps",
                "Ignore dimensional units throughout the calculation",
                "Skip reading the problem constraints"
              ],
              "correct": 0,
              "strategy": "Systematic problem-solving requires formula, substitution, calculation, and verification.",
              "derivation": "Step-by-step mathematical rigor ensures accuracy and eliminates careless algebraic errors.",
              "trap": "Selecting shortcuts that skip verification."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u6",
      "number": "Unit 6",
      "title": "Introduction to Probability",
      "bigIdea": "Understand chance, random experiments, sample spaces, and computing theoretical probabilities of simple and complementary events.",
      "subtopics": [
        {
          "id": "g8-m-6.1",
          "code": "6.1",
          "title": "The Concept of Probability and Sample Space",
          "survey": {
            "blueprint": "Random experiment, outcome, sample space S, event E. Probability scale: 0 ≤ P(E) ≤ 1. P(impossible) = 0, P(certain) = 1. Equally likely outcomes: P(E) = n(E) / n(S).",
            "objectives": [
              "Define sample space S and events E.",
              "State the probability scale [0, 1].",
              "Calculate probabilities of equally likely outcomes."
            ],
            "keyFormulas": "P(E) = n(E) / n(S) | 0 ≤ P(E) ≤ 1"
          },
          "questions": [
            "Why can a probability never be negative or greater than 1?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-amber-400\">🎲 Probability Foundations</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              • <strong>Sample Space ($S$):</strong> The set of all possible outcomes of a random experiment.<br>\n              • <strong>Event ($E$):</strong> Any subset of the sample space.<br>\n              • <strong>Theoretical Probability:</strong> For equally likely outcomes:\n              $$P(E) = \\frac{\\text{Number of favorable outcomes } n(E)}{\\text{Total number of possible outcomes } n(S)}$$<br>\n              • <strong>Probability Axiom:</strong> $0 \\leq P(E) \\leq 1$. $P(\\emptyset) = 0$ (impossible event), $P(S) = 1$ (certain event).\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Rolling a Die",
            "problem": "A fair 6-sided die is rolled. Find the probability of getting a prime number.",
            "steps": [
              {
                "step": "Step 1: Identify sample space S",
                "detail": "S = {1, 2, 3, 4, 5, 6}, so n(S) = 6."
              },
              {
                "step": "Step 2: Identify favorable prime numbers E",
                "detail": "E = {2, 3, 5} (1 is not prime). n(E) = 3."
              },
              {
                "step": "Step 3: Calculate probability",
                "detail": "P(prime) = 3 / 6 = 1 / 2 = 0.5 (50%)."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the probability of an impossible event?",
              "a": "0."
            },
            {
              "q": "What is the probability of a certain event?",
              "a": "1."
            },
            {
              "q": "What is the range of values for any probability?",
              "a": "Between 0 and 1 inclusive: 0 ≤ P(E) ≤ 1."
            }
          ],
          "amtQuiz": [
            {
              "q": "A fair six-sided die is rolled once. What is the probability of obtaining an even number?",
              "options": [
                "1 / 2",
                "1 / 3",
                "1 / 6",
                "2 / 3"
              ],
              "correct": 0,
              "strategy": "Even numbers on a die: {2, 4, 6}. Total outcomes: 6.",
              "derivation": "n(even) = 3, n(S) = 6. P(even) = 3/6 = 1/2.",
              "trap": "Counting 1 as an even number."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in the concept of probability and sample space?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            },
            {
              "q": "What is the verified procedural step when solving problems involving the concept of probability and sample space?",
              "options": [
                "State the relevant formula, substitute given values with correct units, simplify systematically, and verify the result",
                "Guess the answer without writing intermediate steps",
                "Ignore dimensional units throughout the calculation",
                "Skip reading the problem constraints"
              ],
              "correct": 0,
              "strategy": "Systematic problem-solving requires formula, substitution, calculation, and verification.",
              "derivation": "Step-by-step mathematical rigor ensures accuracy and eliminates careless algebraic errors.",
              "trap": "Selecting shortcuts that skip verification."
            }
          ]
        },
        {
          "id": "g8-m-6.2",
          "code": "6.2",
          "title": "Probability of Simple and Complementary Events",
          "survey": {
            "blueprint": "Complementary events: E and E' (or not E). P(E') = 1 - P(E). Sum of probabilities of all elementary outcomes equals 1.",
            "objectives": [
              "Calculate probability of complementary events: P(not E) = 1 - P(E).",
              "Solve multi-item container problems (balls, cards)."
            ],
            "keyFormulas": "P(E') = 1 - P(E) | P(E) + P(E') = 1"
          },
          "questions": [
            "If the probability of rain in Addis Ababa is 0.35, what is the probability that it will NOT rain?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-cyan-400\">🔄 Complementary Rule</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              If $E$ is an event, the event that $E$ does <em>not</em> happen is called the <strong>complement of $E$</strong>, denoted by $E'$ or $\\bar{E}$:<br>\n              $$P(E') = 1 - P(E)$$<br>\n              This rule is especially powerful when calculating \"at least one\" probabilities.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Complementary Probability",
            "problem": "A bag contains 5 red, 7 blue, and 8 green marbles. A marble is picked at random. What is the probability that it is NOT blue?",
            "steps": [
              {
                "step": "Step 1: Find total marbles n(S)",
                "detail": "5 + 7 + 8 = 20 marbles."
              },
              {
                "step": "Step 2: Find P(blue)",
                "detail": "P(blue) = 7 / 20."
              },
              {
                "step": "Step 3: Apply complementary rule",
                "detail": "P(not blue) = 1 - 7/20 = 13 / 20 = 0.65 (65%)."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the formula for the probability of the complement of an event E?",
              "a": "P(E') = 1 - P(E)."
            }
          ],
          "amtQuiz": [
            {
              "q": "A card is drawn from a standard deck of 52 playing cards. What is the probability that the card drawn is NOT an Ace?",
              "options": [
                "12 / 13",
                "1 / 13",
                "48 / 52",
                "Both 12/13 and 48/52"
              ],
              "correct": 3,
              "strategy": "Standard deck has 4 Aces. P(Ace) = 4/52 = 1/13. P(not Ace) = 1 - 1/13 = 12/13.",
              "derivation": "P(not Ace) = 48/52 = 12/13. Both options express the identical simplified and unsimplified values.",
              "trap": "Thinking only 48/52 or only 12/13 is valid."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in probability of simple and complementary events?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            },
            {
              "q": "What is the verified procedural step when solving problems involving probability of simple and complementary events?",
              "options": [
                "State the relevant formula, substitute given values with correct units, simplify systematically, and verify the result",
                "Guess the answer without writing intermediate steps",
                "Ignore dimensional units throughout the calculation",
                "Skip reading the problem constraints"
              ],
              "correct": 0,
              "strategy": "Systematic problem-solving requires formula, substitution, calculation, and verification.",
              "derivation": "Step-by-step mathematical rigor ensures accuracy and eliminates careless algebraic errors.",
              "trap": "Selecting shortcuts that skip verification."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u7",
      "number": "Unit 7",
      "title": "Geometry and Measurements",
      "bigIdea": "Master right-angled triangle theorems (Pythagoras), introduction to trigonometry (sin, cos, tan), and surface area and volume of 3D solids.",
      "subtopics": [
        {
          "id": "g8-m-7.1",
          "code": "7.1",
          "title": "Theorems on the Right Angled Triangle (Pythagoras)",
          "survey": {
            "blueprint": "Pythagorean theorem: in a right triangle, a² + b² = c² (where c is hypotenuse). Converse: if a² + b² = c², the triangle is right-angled. Pythagorean triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25). Special triangles: 45°-45°-90° (sides 1:1:√2) and 30°-60°-90° (sides 1:√3:2).",
            "objectives": [
              "State and prove Pythagorean theorem.",
              "Use converse to test for right triangles.",
              "Apply special right triangle ratios."
            ],
            "keyFormulas": "a² + b² = c² | c = √(a² + b²) | 45-45-90: x, x, x√2 | 30-60-90: x, x√3, 2x"
          },
          "questions": [
            "How do you determine if a triangle with side lengths 9 cm, 12 cm, and 15 cm is a right triangle?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-amber-400\">📐 Pythagorean Theorem & Converse</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              In any right-angled triangle with legs $a$, $b$ and hypotenuse $c$:<br>\n              $$a^2 + b^2 = c^2$$<br>\n              • <strong>Converse Theorem:</strong> If the square of the longest side of a triangle equals the sum of the squares of the other two sides, the triangle is right-angled.<br>\n              • If $a^2 + b^2 > c^2$, the triangle is <strong>acute</strong>.<br>\n              • If $a^2 + b^2 < c^2$, the triangle is <strong>obtuse</strong>.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Pythagorean Calculation",
            "problem": "A 10-meter ladder leans against a vertical wall with its foot 6 meters away from the base of the wall. How high up the wall does the ladder reach?",
            "steps": [
              {
                "step": "Step 1: Set up right triangle equation",
                "detail": "Leg a = 6, hypotenuse c = 10, height b = ?"
              },
              {
                "step": "Step 2: Apply a² + b² = c²",
                "detail": "6² + b² = 10² → 36 + b² = 100."
              },
              {
                "step": "Step 3: Solve for b",
                "detail": "b² = 100 - 36 = 64 → b = √64 = 8 meters."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the Pythagorean theorem formula?",
              "a": "a² + b² = c² (where c is the hypotenuse)."
            },
            {
              "q": "What are three common Pythagorean triples?",
              "a": "(3, 4, 5), (5, 12, 13), and (8, 15, 17)."
            }
          ],
          "amtQuiz": [
            {
              "q": "A right-angled triangle has legs of length 9 cm and 12 cm. What is the length of its hypotenuse?",
              "options": [
                "15 cm",
                "21 cm",
                "16 cm",
                "14 cm"
              ],
              "correct": 0,
              "strategy": "c = √(a² + b²) = √(9² + 12²).",
              "derivation": "9² = 81, 12² = 144. 81 + 144 = 225. √225 = 15 cm.",
              "trap": "Adding 9 + 12 = 21."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in theorems on the right angled triangle (pythagoras)?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            },
            {
              "q": "What is the verified procedural step when solving problems involving theorems on the right angled triangle (pythagoras)?",
              "options": [
                "State the relevant formula, substitute given values with correct units, simplify systematically, and verify the result",
                "Guess the answer without writing intermediate steps",
                "Ignore dimensional units throughout the calculation",
                "Skip reading the problem constraints"
              ],
              "correct": 0,
              "strategy": "Systematic problem-solving requires formula, substitution, calculation, and verification.",
              "derivation": "Step-by-step mathematical rigor ensures accuracy and eliminates careless algebraic errors.",
              "trap": "Selecting shortcuts that skip verification."
            }
          ]
        },
        {
          "id": "g8-m-7.2",
          "code": "7.2",
          "title": "Introduction to Trigonometry (sin, cos, tan)",
          "survey": {
            "blueprint": "Trigonometric ratios in a right triangle: SOH-CAH-TOA. sin θ = opposite/hypotenuse. cos θ = adjacent/hypotenuse. tan θ = opposite/adjacent. Exact values for 30°, 45°, 60°: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3; sin 45° = cos 45° = 1/√2, tan 45° = 1; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.",
            "objectives": [
              "Define sin, cos, tan in right triangles.",
              "Memorize exact values for 30°, 45°, 60°.",
              "Solve for unknown heights and angles of elevation."
            ],
            "keyFormulas": "sin θ = opp/hyp | cos θ = adj/hyp | tan θ = opp/adj | tan θ = sin θ / cos θ"
          },
          "questions": [
            "What does SOH CAH TOA stand for?",
            "Why is tan 45° always exactly equal to 1?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-cyan-400\">📐 SOH CAH TOA Ratios</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              For an acute angle $\\theta$ in a right-angled triangle:<br>\n              • $\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$<br>\n              • $\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$<br>\n              • $\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{\\sin \\theta}{\\cos \\theta}$<br>\n              • <strong>Special Values:</strong> $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, $\\tan 45^\\circ = 1$.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Angle of Elevation",
            "problem": "From a point on flat ground 20 meters from the base of a monument in Addis Ababa, the angle of elevation to the top is 45°. Find the height of the monument.",
            "steps": [
              {
                "step": "Step 1: Identify sides relative to 45°",
                "detail": "Opposite = h, Adjacent = 20 m."
              },
              {
                "step": "Step 2: Apply tan θ = opp / adj",
                "detail": "tan 45° = h / 20."
              },
              {
                "step": "Step 3: Since tan 45° = 1, solve for h",
                "detail": "1 = h / 20 → h = 20 meters."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is sin θ defined as in a right triangle?",
              "a": "Opposite / Hypotenuse."
            },
            {
              "q": "What is tan θ defined as?",
              "a": "Opposite / Adjacent (or sin θ / cos θ)."
            },
            {
              "q": "What is the exact value of tan 45°?",
              "a": "1."
            }
          ],
          "amtQuiz": [
            {
              "q": "In a right-angled triangle, the side opposite to angle θ has length 5 cm and the hypotenuse has length 13 cm. What is cos θ?",
              "options": [
                "12 / 13",
                "5 / 13",
                "5 / 12",
                "13 / 12"
              ],
              "correct": 0,
              "strategy": "Find adjacent side via Pythagoras: adj = √(13² - 5²) = 12. cos θ = adj / hyp.",
              "derivation": "13² - 5² = 169 - 25 = 144. adj = √144 = 12. cos θ = 12 / 13.",
              "trap": "Picking 5/13 which is sin θ."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in introduction to trigonometry (sin, cos, tan)?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            },
            {
              "q": "What is the verified procedural step when solving problems involving introduction to trigonometry (sin, cos, tan)?",
              "options": [
                "State the relevant formula, substitute given values with correct units, simplify systematically, and verify the result",
                "Guess the answer without writing intermediate steps",
                "Ignore dimensional units throughout the calculation",
                "Skip reading the problem constraints"
              ],
              "correct": 0,
              "strategy": "Systematic problem-solving requires formula, substitution, calculation, and verification.",
              "derivation": "Step-by-step mathematical rigor ensures accuracy and eliminates careless algebraic errors.",
              "trap": "Selecting shortcuts that skip verification."
            }
          ]
        },
        {
          "id": "g8-m-7.3",
          "code": "7.3",
          "title": "Solid Figures: Prisms, Cylinders, Pyramids and Cones",
          "survey": {
            "blueprint": "Surface area and volume of 3D solids: Right prism V = Base Area × h; Right circular cylinder V = πr²h, Total Surface Area = 2πrh + 2πr²; Right pyramid V = 1/3 (Base Area × h); Right circular cone V = 1/3 πr²h; Sphere V = 4/3 πr³, Surface Area = 4πr².",
            "objectives": [
              "Calculate volume and total surface area of cylinders and prisms.",
              "Calculate volume of pyramids and cones.",
              "Solve real-world storage capacity problems."
            ],
            "keyFormulas": "Cylinder V = πr²h, TSA = 2πr(h + r) | Cone V = 1/3 πr²h | Sphere V = 4/3 πr³, SA = 4πr²"
          },
          "questions": [
            "How does doubling the radius of a cylinder affect its volume?"
          ],
          "coreNotes": "\n        <div class=\"space-y-4 text-slate-200\">\n          <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n            <h4 class=\"text-sm font-bold text-amber-400\">📦 3D Mensuration Formulas</h4>\n            <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n              • <strong>Right Cylinder:</strong> $V = \\pi r^2 h$; $\\text{Lateral Area} = 2\\pi r h$; $\\text{Total Area} = 2\\pi r h + 2\\pi r^2$.<br>\n              • <strong>Right Cone:</strong> $V = \\frac{1}{3} \\pi r^2 h$; $\\text{Lateral Area} = \\pi r l$ (where slant height $l = \\sqrt{r^2 + h^2}$).<br>\n              • <strong>Right Pyramid:</strong> $V = \\frac{1}{3} (\\text{Base Area} \\times h)$.<br>\n              • <strong>Sphere:</strong> $V = \\frac{4}{3} \\pi r^3$; $\\text{Surface Area} = 4\\pi r^2$.\n            </p>\n          </div>\n        </div>\n      ",
          "example": {
            "title": "Worked Example: Cylinder Volume",
            "problem": "A cylindrical grain silo in Gojjam has a radius of 3 meters and a height of 7 meters. Using π ≈ 22/7, find its volume.",
            "steps": [
              {
                "step": "Step 1: Formula V = πr²h",
                "detail": "V = (22/7) × 3² × 7."
              },
              {
                "step": "Step 2: Cancel 7 in denominator and numerator",
                "detail": "V = 22 × 9 = 198 m³."
              }
            ]
          },
          "reciteFlashcards": [
            {
              "q": "What is the volume formula for a cylinder?",
              "a": "V = πr²h."
            },
            {
              "q": "What is the volume formula for a cone?",
              "a": "V = 1/3 πr²h (one-third the volume of a cylinder with same base and height)."
            },
            {
              "q": "What is the surface area of a sphere?",
              "a": "4πr²."
            }
          ],
          "amtQuiz": [
            {
              "q": "A right circular cylinder has radius r = 7 cm and height h = 10 cm. Using π ≈ 22/7, what is its volume?",
              "options": [
                "1540 cm³",
                "154 cm³",
                "440 cm³",
                "2200 cm³"
              ],
              "correct": 0,
              "strategy": "V = πr²h = (22/7) × 7² × 10 = 22 × 7 × 10.",
              "derivation": "22 × 7 = 154. 154 × 10 = 1540 cm³.",
              "trap": "Using 2πrh (lateral surface area) instead of πr²h (volume)."
            },
            {
              "q": "Which mathematical property is universally valid when performing operations in solid figures: prisms, cylinders, pyramids and cones?",
              "options": [
                "Mathematical equality is preserved when identical operations are applied to both sides of an equation",
                "Multiplying an inequality by a negative number preserves the original inequality direction",
                "The square of any real rational number can be strictly negative",
                "Division by zero produces a valid real rational number"
              ],
              "correct": 0,
              "strategy": "Review core algebraic axioms.",
              "derivation": "Adding, subtracting, multiplying, or dividing (by non-zero) both sides of an equation preserves equality. Multiplying an inequality by a negative reverses the sign, and division by zero is undefined.",
              "trap": "Forgetting that dividing by a negative number reverses an inequality sign!"
            },
            {
              "q": "What is the verified procedural step when solving problems involving solid figures: prisms, cylinders, pyramids and cones?",
              "options": [
                "State the relevant formula, substitute given values with correct units, simplify systematically, and verify the result",
                "Guess the answer without writing intermediate steps",
                "Ignore dimensional units throughout the calculation",
                "Skip reading the problem constraints"
              ],
              "correct": 0,
              "strategy": "Systematic problem-solving requires formula, substitution, calculation, and verification.",
              "derivation": "Step-by-step mathematical rigor ensures accuracy and eliminates careless algebraic errors.",
              "trap": "Selecting shortcuts that skip verification."
            }
          ]
        }
      ]
    }
  ]
};
