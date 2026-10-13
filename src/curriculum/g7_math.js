module.exports = {
  "id": "math",
  "name": "Mathematics",
  "icon": "📐",
  "units": [
    {
      "id": "g7-m-u1",
      "number": "Unit 1",
      "title": "Rational Numbers",
      "bigIdea": "Understand fractions, terminating vs. repeating decimals, comparing and operations on rational numbers (Q).",
      "subtopics": [
        {
          "id": "g7-m-1.1",
          "code": "1.1",
          "title": "The Concept of Rational Numbers",
          "survey": {
            "blueprint": "Number systems hierarchy: Natural (N) ⊂ Whole (W) ⊂ Integers (Z) ⊂ Rational Numbers (Q).",
            "objectives": [
              "Define a rational number as a quotient a/b where a, b ∈ Z and b ≠ 0.",
              "Differentiate between terminating decimals and repeating decimals.",
              "Express negative rational numbers on the continuous number line."
            ],
            "keyFormulas": "Q = { x | x = a/b, a, b ∈ Z and b ≠ 0 }"
          },
          "questions": [
            "Why can the denominator b never equal zero in a rational number a/b?",
            "How can we tell if a simplified fraction a/b will produce a terminating decimal before dividing?"
          ],
          "coreNotes": "\n              <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n                <h4 class=\"font-bold text-indigo-400\">Definition and Structure of Q</h4>\n                <p>A number that can be written in the form <strong>a/b</strong> where <em>a</em> and <em>b</em> are integers and <em>b ≠ 0</em> is called a <strong>Rational Number</strong>.</p>\n                <p>• <strong>Terminating Decimal:</strong> The division terminates with a remainder of zero (e.g., 3/4 = 0.75). Occurs when the prime factors of the denominator in lowest terms consist ONLY of 2s and/or 5s.<br>\n                • <strong>Repeating (Periodic) Decimal:</strong> A block of one or more digits repeats indefinitely (e.g., 2/3 = 0.666... = 0.6̄, or 5/11 = 0.4545... = 0.45̄).</p>\n              </div>\n            ",
          "example": {
            "title": "Fraction to Repeating Decimal Conversion & Verification",
            "problem": "Determine whether 7/12 is a terminating or repeating decimal. If repeating, express it using period bar notation.",
            "steps": [
              {
                "label": "Step 1: Inspect the denominator",
                "text": "12 in prime factors = 2² × 3. Because it contains 3 (a factor other than 2 and 5), it MUST be a repeating decimal."
              },
              {
                "label": "Step 2: Perform long division 7 ÷ 12",
                "text": "7.0 ÷ 12 = 0.5 with remainder 10.<br>100 ÷ 12 = 8 with remainder 4.<br>40 ÷ 12 = 3 with remainder 4.<br>40 ÷ 12 = 3 with remainder 4 (repeats!)."
              },
              {
                "label": "Step 3: Conclude with bar notation",
                "text": "7/12 = 0.58333... = <strong>0.583̄</strong> (the bar covers only 3)."
              }
            ],
            "proTip": "Only place the bar over the repeating digit, not over non-repeating starter digits!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the condition on b in a rational number a/b?",
              "a": "b must be a non-zero integer (b ≠ 0)."
            },
            {
              "q": "Is 0 a rational number?",
              "a": "Yes! 0 = 0/1, so it is rational."
            },
            {
              "q": "Why is 1/6 a repeating decimal?",
              "a": "Because denominator 6 has prime factor 3 (not just 2 or 5)."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following is an irrational number (NOT in Q)?",
              "options": [
                "-7/8",
                "0.333...",
                "√2",
                "5.125"
              ],
              "correct": 2,
              "strategy": "Recall the definition of rational vs. irrational numbers.",
              "derivation": "√2 cannot be written as a/b with integers. Its decimal expansion 1.41421356... neither terminates nor repeats. Therefore, √2 is irrational.",
              "trap": "0.333... is rational because it is 1/3!"
            },
            {
              "q": "What is the simplified fraction form of the repeating decimal 0.272727...?",
              "options": [
                "27/100",
                "3/11",
                "27/90",
                "1/4"
              ],
              "correct": 1,
              "strategy": "Use the algebraic cancellation method: let x = 0.2727... Multiply by 100.",
              "derivation": "100x = 27.2727... Subtracting x gives 99x = 27. Therefore x = 27/99 = (27÷9)/(99÷9) = 3/11.",
              "trap": "Do not write 27/100, which is exactly 0.27 (terminating)!"
            }
          ]
        },
        {
          "id": "g7-m-1.2",
          "code": "1.2",
          "title": "Comparing and Ordering Rational Numbers",
          "survey": {
            "blueprint": "Cross-multiplication rule: a/b < c/d if and only if a·d < b·c (for b, d > 0).",
            "objectives": [
              "Compare positive and negative fractions using common denominators.",
              "Order sets of rational numbers in ascending and descending order on the number line."
            ],
            "keyFormulas": "a/b < c/d ⟺ ad < bc (when b, d > 0)"
          },
          "questions": [
            "How does comparing two negative rational numbers differ from comparing positive ones?",
            "What is the density property between any two distinct rational numbers?"
          ],
          "coreNotes": "\n              <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n                <h4 class=\"font-bold text-amber-400\">Rules for Comparing Rational Numbers</h4>\n                <p>• Negative rational numbers are always less than zero and less than positive rational numbers.<br>\n                • For two negative numbers, the one with the larger absolute value is smaller: e.g., −5/6 < −2/3 because −5/6 is further left on the number line.</p>\n              </div>\n            ",
          "example": {
            "title": "Ordering Rational Numbers with Different Signs",
            "problem": "Arrange the rational numbers in ascending order (smallest to largest): −3/4, 2/3, −5/6, 1/2",
            "steps": [
              {
                "label": "Step 1: Find a common denominator",
                "text": "LCD of 4, 3, 6, 2 is 12.<br>−3/4 = −9/12<br>2/3 = 8/12<br>−5/6 = −10/12<br>1/2 = 6/12"
              },
              {
                "label": "Step 2: Order numerators",
                "text": "Numerators: −10 < −9 < 6 < 8."
              },
              {
                "label": "Step 3: Write final order",
                "text": "<strong>−5/6, −3/4, 1/2, 2/3</strong>."
              }
            ],
            "proTip": "Remember that −10 is smaller than −9 on the number line!"
          },
          "reciteFlashcards": [
            {
              "q": "Which is smaller: −3/5 or −4/5?",
              "a": "−4/5 (it is further left on the number line)."
            },
            {
              "q": "What is the arithmetic mean between 1/3 and 1/2?",
              "a": "(1/3 + 1/2)/2 = (5/6)/2 = 5/12."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which symbol correctly completes: −7/10 ___ −4/5?",
              "options": [
                "<",
                ">",
                "=",
                "≤"
              ],
              "correct": 1,
              "strategy": "Convert both to common denominator of 10.",
              "derivation": "−4/5 = −8/10. On the number line, −7 is to the right of −8. Therefore −7/10 > −8/10.",
              "trap": "7 < 8 for positives, but for negatives −7 > −8!"
            }
          ]
        },
        {
          "id": "g7-m-1.3",
          "code": "1.3",
          "title": "Operations on Rational Numbers",
          "survey": {
            "blueprint": "Addition, subtraction, multiplication, division (by reciprocal), and distributive properties.",
            "objectives": [
              "Compute sums, differences, products, and quotients of rational numbers.",
              "Apply the order of operations (PEMDAS) to multi-step rational expressions."
            ],
            "keyFormulas": "(a/b) ÷ (c/d) = (a/b) × (d/c)"
          },
          "questions": [
            "Why do we multiply by the reciprocal when dividing by a fraction?",
            "What happens when you square a negative rational number?"
          ],
          "coreNotes": "\n              <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n                <h4 class=\"font-bold text-emerald-400\">The 4 Fundamental Operations</h4>\n                <p>• <strong>Addition/Subtraction:</strong> Requires a Common Denominator (LCD).<br>\n                • <strong>Multiplication:</strong> (a/b) × (c/d) = (ac)/(bd).<br>\n                • <strong>Division:</strong> Invert the divisor and multiply: (a/b) ÷ (c/d) = (ad)/(bc).</p>\n              </div>\n            ",
          "example": {
            "title": "Multi-Step Rational Arithmetic with PEMDAS",
            "problem": "Evaluate: (−2/3) + (5/6) × (−4/5) − (−1/2)",
            "steps": [
              {
                "label": "Step 1: Multiplication First",
                "text": "(5/6) × (−4/5) = −20/30 = <strong>−2/3</strong>.<br>Expression is now: (−2/3) + (−2/3) − (−1/2)"
              },
              {
                "label": "Step 2: Combine addition",
                "text": "(−2/3) + (−2/3) = −4/3."
              },
              {
                "label": "Step 3: Subtraction with double negative",
                "text": "−4/3 − (−1/2) = −4/3 + 1/2 = −8/6 + 3/6 = <strong>−5/6</strong>."
              }
            ],
            "proTip": "Always simplify fractions during multiplication before multiplying large numbers!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the reciprocal of −3/7?",
              "a": "−7/3."
            },
            {
              "q": "What is (−2/5)²?",
              "a": "+4/25."
            }
          ],
          "amtQuiz": [
            {
              "q": "Compute: (3/4) ÷ (−9/8) + 1/3",
              "options": [
                "−1/3",
                "1/3",
                "−1",
                "0"
              ],
              "correct": 0,
              "strategy": "Perform division by multiplying by the reciprocal first, then add 1/3.",
              "derivation": "(3/4) × (−8/9) = −24/36 = −2/3. Then −2/3 + 1/3 = −1/3.",
              "trap": "Do not add before completing the division!"
            }
          ]
        }
      ]
    },
    {
      "id": "g7-m-u2",
      "number": "Unit 2",
      "title": "Linear Equations and Inequalities",
      "bigIdea": "Solve for unknowns using properties of equality and the sign-reversing rule for inequalities.",
      "subtopics": [
        {
          "id": "g7-m-2.1",
          "code": "2.1",
          "title": "Solving Linear Equations",
          "survey": {
            "blueprint": "Equations with variables on both sides, parentheses, and fractional coefficients.",
            "objectives": [
              "Apply addition and multiplication properties of equality.",
              "Clear fractions by multiplying by the Least Common Multiple (LCM)."
            ],
            "keyFormulas": "ax + b = cx + d ➔ (a - c)x = d - b"
          },
          "questions": [
            "How can we clear fractional coefficients in a single algebraic step?",
            "What does it mean if an equation simplifies to 5 = 5 or 0 = 7?"
          ],
          "coreNotes": "\n              <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n                <h4 class=\"font-bold text-indigo-400\">Step-by-Step Equation Solving Guide</h4>\n                <p>1. Clear parentheses using the Distributive Property: a(x + y) = ax + ay.<br>\n                2. Clear fractions by multiplying every term by the LCM of denominators.<br>\n                3. Collect like terms on each side.<br>\n                4. Isolate the variable term and solve.</p>\n              </div>\n            ",
          "example": {
            "title": "Solving Linear Equation with Fractional Coefficients",
            "problem": "Solve for x: (2x - 1)/3 = (x + 4)/2 - 1",
            "steps": [
              {
                "label": "Step 1: Clear denominators",
                "text": "Multiply entire equation by LCM(3, 2) = 6:<br>6 × [(2x - 1)/3] = 6 × [(x + 4)/2] - 6 × [1]<br>2(2x - 1) = 3(x + 4) - 6"
              },
              {
                "label": "Step 2: Distribute",
                "text": "4x - 2 = 3x + 12 - 6<br>4x - 2 = 3x + 6"
              },
              {
                "label": "Step 3: Isolate x",
                "text": "4x - 3x = 6 + 2<br><strong>x = 8</strong>"
              },
              {
                "label": "Step 4: Verification",
                "text": "Left side: (16 - 1)/3 = 5.<br>Right side: (8 + 4)/2 - 1 = 6 - 1 = 5. (Match!)"
              }
            ],
            "proTip": "Remember to multiply the whole number (-1) by 6 as well!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the inverse operation of multiplication?",
              "a": "Division."
            },
            {
              "q": "If an equation simplifies to 3 = 8, what is the solution?",
              "a": "No solution (empty set ∅)."
            }
          ],
          "amtQuiz": [
            {
              "q": "Solve for x: 5(x - 2) = 3x + 8",
              "options": [
                "x = 9",
                "x = 5",
                "x = 7",
                "x = 6"
              ],
              "correct": 0,
              "strategy": "Distribute 5 on left, then subtract 3x and add 10.",
              "derivation": "5x - 10 = 3x + 8 ➔ 2x = 18 ➔ x = 9.",
              "trap": "Forgetting to distribute 5 to -2!"
            }
          ]
        },
        {
          "id": "g7-m-2.2",
          "code": "2.2",
          "title": "Solving Linear Inequalities",
          "survey": {
            "blueprint": "Inequality symbols (<, ≤, >, ≥), number line graphs, and sign-reversal rule.",
            "objectives": [
              "Solve linear inequalities in one variable.",
              "Graph solution sets on the real number line with solid or open circles."
            ],
            "keyFormulas": "If a < b and c < 0, then ac > bc"
          },
          "questions": [
            "Why does multiplying by a negative flip the inequality direction?",
            "When do we use an open circle versus a solid circle on a graph?"
          ],
          "coreNotes": "\n              <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                <h4 class=\"font-bold text-amber-400\">Crucial Rule for Inequalities</h4>\n                <p>Whenever you MULTIPLY or DIVIDE both sides by a NEGATIVE number, the inequality sign MUST reverse:</p>\n                <div class=\"p-2 bg-space-950 font-mono text-center text-amber-300 rounded\">\n                  -5x ≤ 30 ➔ x ≥ -6\n                </div>\n              </div>\n            ",
          "example": {
            "title": "Multi-Step Inequality with Sign Reversal",
            "problem": "Solve and describe the solution set: 7 - 3x ≥ 22",
            "steps": [
              {
                "label": "Step 1: Subtract 7",
                "text": "-3x ≥ 22 - 7<br>-3x ≥ 15"
              },
              {
                "label": "Step 2: Divide by -3 (Flip sign!)",
                "text": "x ≤ 15 / (-3)<br><strong>x ≤ -5</strong>"
              },
              {
                "label": "Step 3: Number line interpretation",
                "text": "A solid circle at -5 with an arrow pointing left toward negative infinity."
              }
            ],
            "proTip": "A common mistake is forgetting to reverse the ≥ to ≤ when dividing by -3!"
          },
          "reciteFlashcards": [
            {
              "q": "What does a solid circle on a number line represent?",
              "a": "Included endpoint (≤ or ≥)."
            },
            {
              "q": "If -2x < 10, what is x?",
              "a": "x > -5."
            }
          ],
          "amtQuiz": [
            {
              "q": "Solve the inequality: 4 - 2x < 12",
              "options": [
                "x < -4",
                "x > -4",
                "x > 4",
                "x < 4"
              ],
              "correct": 1,
              "strategy": "Subtract 4, then divide by -2 and reverse the sign.",
              "derivation": "-2x < 8 ➔ x > 8 / (-2) ➔ x > -4.",
              "trap": "Leaving the sign as < instead of reversing it to >!"
            }
          ]
        }
      ]
    },
    {
      "id": "g7-m-u3",
      "number": "Unit 3",
      "title": "Ratio, Proportion and Percentage",
      "bigIdea": "Solve real-world problems involving ratios, direct proportions, discounts, and simple interest.",
      "subtopics": [
        {
          "id": "g7-m-3.1",
          "code": "3.1",
          "title": "Ratio and Proportion",
          "survey": {
            "blueprint": "Equivalent ratios, cross-product property (ad = bc), and unit rates.",
            "objectives": [
              "Express comparisons in simplest ratio form.",
              "Solve proportion equations using cross-multiplication."
            ],
            "keyFormulas": "a/b = c/d ⟺ ad = bc"
          },
          "questions": [
            "How is a ratio different from a fraction?",
            "How can we divide an amount in a given ratio like 3:5:2?"
          ],
          "coreNotes": "\n              <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                <h4 class=\"font-bold text-indigo-400\">Ratio Sharing Formula</h4>\n                <p>To divide total quantity Q in ratio a:b:c:<br>\n                Total parts = a + b + c.<br>\n                Each part = Q / (a + b + c). Then multiply by each ratio number.</p>\n              </div>\n            ",
          "example": {
            "title": "Sharing Money in a Three-Way Ratio",
            "problem": "Three partners invest in a small business and share profits of 60,000 Birr in the ratio 2 : 3 : 5. Calculate each partner's share.",
            "steps": [
              {
                "label": "Step 1: Calculate total parts",
                "text": "2 + 3 + 5 = <strong>10 parts</strong>."
              },
              {
                "label": "Step 2: Value per part",
                "text": "60,000 Birr ÷ 10 = <strong>6,000 Birr per part</strong>."
              },
              {
                "label": "Step 3: Compute individual shares",
                "text": "Partner 1: 2 × 6,000 = <strong>12,000 Birr</strong>.<br>Partner 2: 3 × 6,000 = <strong>18,000 Birr</strong>.<br>Partner 3: 5 × 6,000 = <strong>30,000 Birr</strong>."
              }
            ],
            "proTip": "Verify that the sum matches: 12,000 + 18,000 + 30,000 = 60,000 Birr!"
          },
          "reciteFlashcards": [
            {
              "q": "In proportion a/b = c/d, what is the cross-product equation?",
              "a": "ad = bc."
            }
          ],
          "amtQuiz": [
            {
              "q": "Solve for x: 4/7 = 20/x",
              "options": [
                "x = 28",
                "x = 35",
                "x = 42",
                "x = 21"
              ],
              "correct": 1,
              "strategy": "Cross-multiply: 4x = 7 × 20.",
              "derivation": "4x = 140 ➔ x = 140 / 4 = 35.",
              "trap": "Calculating 7 × 20 = 140 and forgetting to divide by 4!"
            }
          ]
        },
        {
          "id": "g7-m-3.2",
          "code": "3.2",
          "title": "Further on Percentage & Applications",
          "survey": {
            "blueprint": "Percentage increase/decrease, profit and loss, discount, sales tax, simple interest.",
            "objectives": [
              "Calculate percentage change: (Change / Original) × 100%.",
              "Compute simple interest using I = P·r·t."
            ],
            "keyFormulas": "I = P × r × t &nbsp;|&nbsp; % Change = (Change / Original) × 100"
          },
          "questions": [
            "Why must percentage increase always be based on the ORIGINAL value?",
            "How do you calculate the sale price after a 25% discount?"
          ],
          "coreNotes": "\n              <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                <h4 class=\"font-bold text-amber-400\">Essential Business Math Formulas</h4>\n                <p>• <strong>Discount:</strong> Discount = Original Price × Discount Rate.<br>\n                • <strong>Simple Interest:</strong> Interest = Principal × Rate × Time (in years).</p>\n              </div>\n            ",
          "example": {
            "title": "Simple Interest & Total Repayment Calculation",
            "problem": "A farmer borrows 25,000 Birr from a microfinance cooperative at an annual interest rate of 8% for 3 years. Calculate the simple interest and total amount repaid.",
            "steps": [
              {
                "label": "Step 1: Identify values",
                "text": "Principal P = 25,000 Birr. Rate r = 8% = 0.08. Time t = 3 years."
              },
              {
                "label": "Step 2: Calculate Interest",
                "text": "I = P × r × t = 25,000 × 0.08 × 3 = <strong>6,000 Birr</strong>."
              },
              {
                "label": "Step 3: Total Repayment",
                "text": "Total = Principal + Interest = 25,000 + 6,000 = <strong>31,000 Birr</strong>."
              }
            ],
            "proTip": "Always convert percentage rate to a decimal or fraction before multiplying!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the formula for Simple Interest?",
              "a": "I = P × r × t."
            },
            {
              "q": "An item priced 200 Birr is discounted 15%. What is the sale price?",
              "a": "200 - 30 = 170 Birr."
            }
          ],
          "amtQuiz": [
            {
              "q": "A book originally priced at 120 Birr is sold for 90 Birr. What is the percentage discount?",
              "options": [
                "30%",
                "25%",
                "20%",
                "15%"
              ],
              "correct": 1,
              "strategy": "Find discount amount, then divide by original price and multiply by 100.",
              "derivation": "Discount = 120 - 90 = 30 Birr. Percentage = (30 / 120) × 100% = (1/4) × 100% = 25%.",
              "trap": "Dividing by 90 instead of original price 120 gives 33.3%, which is wrong!"
            }
          ]
        }
      ]
    },
    {
      "id": "g7-m-u4",
      "number": "Unit 4",
      "title": "Data Handling",
      "bigIdea": "Collect, organize with frequency tables, visualize with graphs, and compute measures of central tendency.",
      "subtopics": [
        {
          "id": "g7-m-4.1",
          "code": "4.1",
          "title": "Tally Marks, Frequency & Graphs",
          "survey": {
            "blueprint": "Data collection, frequency distributions, line graphs, and pie charts.",
            "objectives": [
              "Construct tally sheets and frequency distribution tables.",
              "Convert sector angles into percentages for pie charts: Angle = (Frequency / Total) × 360°."
            ],
            "keyFormulas": "Sector Angle = (f / N) × 360°"
          },
          "questions": [
            "How do you calculate the central angle of a sector in a pie chart?",
            "When is a line graph preferred over a bar chart?"
          ],
          "coreNotes": "\n              <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                <h4 class=\"font-bold text-cyan-400\">Pie Chart Sector Angle Rule</h4>\n                <p>The total sum of angles in a complete circle is 360°.<br>\n                Sector Angle for category = (Category Frequency / Total Population) × 360°.</p>\n              </div>\n            ",
          "example": {
            "title": "Constructing Pie Chart Central Angles",
            "problem": "In a class of 60 students, 15 chose Football, 20 chose Basketball, and 25 chose Athletics. Find the sector angle for Football on a pie chart.",
            "steps": [
              {
                "label": "Step 1: Identify fraction",
                "text": "Football fraction = 15 / 60 = 1/4 of the class."
              },
              {
                "label": "Step 2: Multiply by 360°",
                "text": "Angle = (1/4) × 360° = <strong>90°</strong>."
              }
            ],
            "proTip": "A quarter of the circle is always a 90° right angle!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the sum of angles in a pie chart?",
              "a": "360 degrees."
            }
          ],
          "amtQuiz": [
            {
              "q": "If 30% of students walk to school, what central angle represents this in a pie chart?",
              "options": [
                "30°",
                "108°",
                "120°",
                "90°"
              ],
              "correct": 1,
              "strategy": "Multiply 30% by 360°.",
              "derivation": "0.30 × 360° = 108°.",
              "trap": "Assuming 30% equals 30 degrees!"
            }
          ]
        },
        {
          "id": "g7-m-4.2",
          "code": "4.2",
          "title": "Mean, Mode, Median and Range",
          "survey": {
            "blueprint": "Measures of central tendency: Mean (average), Median (middle), Mode (most frequent), Range (spread).",
            "objectives": [
              "Compute the arithmetic mean of a data set.",
              "Identify the median of an odd or even numbered set after sorting.",
              "Calculate the range = Maximum - Minimum."
            ],
            "keyFormulas": "Mean = (Σx) / N &nbsp;|&nbsp; Range = Max - Min"
          },
          "questions": [
            "How do you find the median when a data set has an even number of values?",
            "Which measure of center is most affected by extreme outliers?"
          ],
          "coreNotes": "\n              <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                <h4 class=\"font-bold text-indigo-400\">Summary of the 3 M's</h4>\n                <p>• <strong>Mean:</strong> Add all values and divide by the count.<br>\n                • <strong>Median:</strong> Middle number when sorted in numerical order (average of middle two if even).<br>\n                • <strong>Mode:</strong> Most frequently occurring number (can be bimodal or no mode).</p>\n              </div>\n            ",
          "example": {
            "title": "Finding Median and Mean with Even Count Data",
            "problem": "Find the mean and median of the test scores: 12, 18, 14, 20, 16, 10",
            "steps": [
              {
                "label": "Step 1: Calculate Mean",
                "text": "Sum = 12 + 18 + 14 + 20 + 16 + 10 = 90.<br>Count = 6. Mean = 90 / 6 = <strong>15</strong>."
              },
              {
                "label": "Step 2: Sort for Median",
                "text": "Ordered: 10, 12, <strong>14, 16</strong>, 18, 20.<br>The two middle values are 14 and 16."
              },
              {
                "label": "Step 3: Average the middle values",
                "text": "Median = (14 + 16) / 2 = <strong>15</strong>."
              }
            ],
            "proTip": "Never calculate the median without sorting the numbers first!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the range of: 5, 8, 12, 25, 4?",
              "a": "Max (25) - Min (4) = 21."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the median of the set: 7, 3, 9, 2, 8?",
              "options": [
                "7",
                "5.8",
                "8",
                "3"
              ],
              "correct": 0,
              "strategy": "Sort from smallest to largest first.",
              "derivation": "Sorted: 2, 3, 7, 8, 9. The middle number is 7.",
              "trap": "Picking 9 because it is in the middle of the unsorted list!"
            }
          ]
        }
      ]
    },
    {
      "id": "g7-m-u5",
      "number": "Unit 5",
      "title": "Geometric Figures and Measurement",
      "bigIdea": "Analyze quadrilaterals, triangle angle theorems, and calculate perimeters, areas, and volumes of solid prisms.",
      "subtopics": [
        {
          "id": "g7-m-5.1",
          "code": "5.1",
          "title": "Quadrilaterals, Polygons and Circles",
          "survey": {
            "blueprint": "Properties of trapezoids, parallelograms, rhombuses, and polygon interior angle sums.",
            "objectives": [
              "Classify special quadrilaterals by side lengths, parallel lines, and diagonal bisections.",
              "Calculate polygon interior angle sum using formula (n - 2) × 180°."
            ],
            "keyFormulas": "Interior Angle Sum = (n - 2) × 180°"
          },
          "questions": [
            "What is the interior angle sum of a hexagon (6-sided polygon)?",
            "How do the diagonals of a rhombus intersect each other?"
          ],
          "coreNotes": "\n              <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                <h4 class=\"font-bold text-amber-400\">Polygon Theorems</h4>\n                <p>• Interior Angle Sum = (n - 2) × 180° (where n is number of sides).<br>\n                • Exterior Angle Sum = 360° for any convex polygon.<br>\n                • Diagonals of a rhombus bisect each other at perpendicular right angles (90°).</p>\n              </div>\n            ",
          "example": {
            "title": "Finding Each Interior Angle of a Regular Polygon",
            "problem": "Find the measure of each interior angle of a regular octagon (8 sides).",
            "steps": [
              {
                "label": "Step 1: Total interior angle sum",
                "text": "Sum = (8 - 2) × 180° = 6 × 180° = <strong>1,080°</strong>."
              },
              {
                "label": "Step 2: Divide by 8 equal angles",
                "text": "Each angle = 1,080° / 8 = <strong>135°</strong>."
              }
            ],
            "proTip": "Alternative method: Exterior angle = 360° / 8 = 45°. Interior = 180° - 45° = 135°!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the sum of interior angles of a pentagon (5 sides)?",
              "a": "(5 - 2) × 180° = 540°."
            },
            {
              "q": "At what angle do diagonals of a square intersect?",
              "a": "90 degrees (perpendicular)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the measure of each interior angle in a regular hexagon (6 sides)?",
              "options": [
                "120°",
                "108°",
                "135°",
                "90°"
              ],
              "correct": 0,
              "strategy": "Sum = (6 - 2) × 180° = 720°. Divide by 6.",
              "derivation": "720° / 6 = 120°.",
              "trap": "108° is for a regular pentagon!"
            }
          ]
        },
        {
          "id": "g7-m-5.2",
          "code": "5.2",
          "title": "Theorems of Triangles",
          "survey": {
            "blueprint": "Triangle angle sum theorem (180°), exterior angle theorem, and isosceles triangle properties.",
            "objectives": [
              "Apply the Angle Sum Theorem: ∠A + ∠B + ∠C = 180°.",
              "Apply Exterior Angle Theorem: Exterior angle = sum of two opposite interior angles."
            ],
            "keyFormulas": "∠Exterior = ∠InteriorOpposite1 + ∠InteriorOpposite2"
          },
          "questions": [
            "How does the exterior angle theorem speed up solving geometric angle diagrams?",
            "In an equilateral triangle, what is the measure of every internal angle?"
          ],
          "coreNotes": "\n              <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                <h4 class=\"font-bold text-indigo-400\">Exterior Angle Theorem</h4>\n                <p>The measure of an exterior angle of a triangle equals the sum of the measures of its two remote (opposite) interior angles.</p>\n              </div>\n            ",
          "example": {
            "title": "Applying the Exterior Angle Theorem",
            "problem": "In triangle ABC, the two remote interior angles are 42° and 76°. Find the measure of the exterior angle at the third vertex.",
            "steps": [
              {
                "label": "Step 1: Apply theorem",
                "text": "Exterior Angle = 42° + 76° = <strong>118°</strong>."
              },
              {
                "label": "Step 2: Verification with linear pair",
                "text": "Interior third angle = 180° - (42° + 76°) = 62°.<br>Linear pair = 180° - 62° = 118°. (Verified!)"
              }
            ],
            "proTip": "Using the exterior angle theorem directly saves an entire intermediate subtraction step!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the sum of angles in any triangle?",
              "a": "180 degrees."
            }
          ],
          "amtQuiz": [
            {
              "q": "In an isosceles triangle, the vertex angle is 50°. What is the measure of each base angle?",
              "options": [
                "65°",
                "50°",
                "75°",
                "130°"
              ],
              "correct": 0,
              "strategy": "Subtract vertex angle from 180°, then divide by 2.",
              "derivation": "180° - 50° = 130°. Base angles are equal, so each is 130° / 2 = 65°.",
              "trap": "Forgetting to divide by 2!"
            }
          ]
        },
        {
          "id": "g7-m-5.3",
          "code": "5.3",
          "title": "Measurement (Perimeter, Area & Volume)",
          "survey": {
            "blueprint": "Area of trapezoids, triangles, circles, and surface area & volume of right rectangular prisms and cylinders.",
            "objectives": [
              "Calculate area of a trapezoid: A = ½(a + b)h.",
              "Calculate circle circumference (C = 2πr) and area (A = πr²).",
              "Calculate volume of rectangular prisms: V = l × w × h."
            ],
            "keyFormulas": "Trapezoid: A = ½(a + b)h &nbsp;|&nbsp; Circle: A = πr² &nbsp;|&nbsp; Prism: V = lwh"
          },
          "questions": [
            "How does doubling the radius of a circle affect its area?",
            "What is the difference between total surface area and volume of a prism?"
          ],
          "coreNotes": "\n              <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                <h4 class=\"font-bold text-emerald-400\">Measurement Formulas Summary</h4>\n                <p>• <strong>Trapezoid Area:</strong> A = ½(base1 + base2) × height.<br>\n                • <strong>Circle Area:</strong> A = πr² (where π ≈ 22/7 or 3.14).<br>\n                • <strong>Rectangular Prism Volume:</strong> V = Length × Width × Height.</p>\n              </div>\n            ",
          "example": {
            "title": "Area of a Trapezoid Word Problem",
            "problem": "A farmer's field is in the shape of a trapezoid with parallel sides of 14 meters and 20 meters. The perpendicular distance between them is 8 meters. Find the area of the field.",
            "steps": [
              {
                "label": "Step 1: Identify given dimensions",
                "text": "Parallel sides a = 14m, b = 20m. Height h = 8m."
              },
              {
                "label": "Step 2: Apply Trapezoid formula",
                "text": "Area = ½(14 + 20) × 8 = ½(34) × 8."
              },
              {
                "label": "Step 3: Calculate result",
                "text": "17 × 8 = <strong>136 square meters (m²)</strong>."
              }
            ],
            "proTip": "Never use the slanted side length as height—always use the perpendicular height!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the formula for the area of a circle?",
              "a": "A = πr²."
            },
            {
              "q": "If a cube has side length 4 cm, what is its volume?",
              "a": "4³ = 64 cm³."
            }
          ],
          "amtQuiz": [
            {
              "q": "Calculate the area of a circle with radius 7 cm (Use π = 22/7).",
              "options": [
                "154 cm²",
                "44 cm²",
                "88 cm²",
                "308 cm²"
              ],
              "correct": 0,
              "strategy": "Apply A = πr².",
              "derivation": "A = (22/7) × 7 × 7 = 22 × 7 = 154 cm².",
              "trap": "44 cm is the circumference (2πr), not the area!"
            }
          ]
        }
      ]
    }
  ]
};
