// Comprehensive Grade 7 Mathematics Module with Deep Textbook Notes (Units 1 to 5)
const unit1 = {
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
};

const unit2 = {
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
};

const unit3 = {
  id: 'g7-m-u3',
  number: 'Unit 3',
  title: 'Ratio, Proportion and Percentage',
  bigIdea: 'Explore relationships between quantities: ratios, direct and inverse proportions, percentage change, profit/loss, and simple interest calculations.',
  subtopics: [
    {
      id: 'g7-m-3.1',
      code: '3.1',
      title: 'Ratio and Proportion',
      survey: {
        blueprint: 'Ratio compares two quantities of identical unit (a:b = a/b). Proportion equates two ratios (a/b = c/d). Cross-multiplication theorem: ad = bc.',
        objectives: [
          'Simplify ratios into lowest terms and divide quantities in given ratios.',
          'Solve proportions using the extremes and means property (ad = bc).',
          'Differentiate between direct proportion (y = kx) and inverse proportion (y = k/x).'
        ],
        keyFormulas: 'Ratio = a:b = a/b &nbsp;|&nbsp; Proportion: a/b = c/d ⟺ ad = bc &nbsp;|&nbsp; Direct: y = kx &nbsp;|&nbsp; Inverse: xy = k'
      },
      questions: [
        'Why must two quantities have the EXACT same units before forming a valid mathematical ratio?',
        'How does direct proportion differ from inverse proportion in real-world situations like workers building a road?'
      ],
      coreNotes: `
        <div class="space-y-5 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
              <span>⚖️</span> 1. DEFINITION AND PROPERTIES OF RATIOS
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              A <strong>Ratio</strong> is a mathematical comparison of two quantities of the <em>same kind and in the same units</em> by division.
              Written as <strong>a : b</strong> (read "a to b") or as a fraction <strong>a/b</strong> (where b ≠ 0).<br>
              • <em>Unitless Nature:</em> Because units cancel out during division, a ratio is a pure number without units.<br>
              • <em>Order Matters:</em> The ratio of boys to girls (e.g. 20:25 = 4:5) is NOT the same as girls to boys (5:4).
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
              <span>📐</span> 2. PROPORTIONS & THE EXTREMES-MEANS THEOREM
            </h4>
            <div class="p-3 bg-indigo-950/40 border-l-4 border-indigo-500 rounded-r-lg text-xs sm:text-sm text-slate-200">
              <strong>Definition:</strong> An equation stating that two ratios are equal is called a <strong>Proportion</strong>: <em>a/b = c/d</em> (or <em>a : b :: c : d</em>).
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              • <em>Extremes:</em> The outer terms <strong>a</strong> and <strong>d</strong>.<br>
              • <em>Means:</em> The middle terms <strong>b</strong> and <strong>c</strong>.<br>
              • <strong>Fundamental Law of Proportion:</strong> In any proportion, the product of the extremes equals the product of the means: <strong>a × d = b × c</strong>.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
              <span>🔄</span> 3. DIRECT VS. INVERSE PROPORTION
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-space-950 rounded-xl border border-slate-800 space-y-1">
                <span class="font-bold text-emerald-400">Direct Proportion (y = kx):</span>
                <p class="text-slate-300">As one quantity increases, the other increases at a constant rate <em>k = y/x</em>.<br>
                <em>Example:</em> More kilograms of teff purchased = higher total cost.</p>
              </div>
              <div class="p-3 bg-space-950 rounded-xl border border-slate-800 space-y-1">
                <span class="font-bold text-rose-400">Inverse Proportion (xy = k):</span>
                <p class="text-slate-300">As one quantity increases, the other decreases such that their product remains constant.<br>
                <em>Example:</em> More construction workers on a road = fewer days required to complete it.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Dividing a Quantity in a Ratio & Solving a Proportion',
        problem: 'Part A: Divide 800 Birr between Abebe and Chaltu in the ratio 3 : 5. Part B: If 6 kg of coffee costs 420 Birr, find the cost of 15 kg of coffee under direct proportion.',
        steps: [
          {
            label: 'Step 1: Divide 800 Birr in ratio 3 : 5',
            text: 'Sum of the ratio parts = 3 + 5 = 8 total parts.<br>Value of 1 part = 800 ÷ 8 = 100 Birr.<br>Abebe\'s share (3 parts) = 3 × 100 = <strong>300 Birr</strong>.<br>Chaltu\'s share (5 parts) = 5 × 100 = <strong>500 Birr</strong>.'
          },
          {
            label: 'Step 2: Set up proportion for Part B',
            text: 'Let the unknown cost be x Birr.<br>6 kg / 420 Birr = 15 kg / x Birr.'
          },
          {
            label: 'Step 3: Apply the extremes-means theorem',
            text: '6 × x = 420 × 15<br>6x = 6,300<br>x = 6,300 ÷ 6 = <strong>1,050 Birr</strong>.'
          }
        ],
        proTip: 'Always check that the sum of the divided parts equals the original total: 300 + 500 = 800 Birr!'
      },
      reciteFlashcards: [
        { q: 'What is the product of extremes equal to in a proportion a/b = c/d?', a: 'The product of the means: a × d = b × c.' },
        { q: 'In inverse proportion, what quantity remains constant?', a: 'The product of the two variables: x × y = k.' }
      ],
      amtQuiz: [
        {
          q: 'If 8 construction workers can build a wall in 15 days, how many days will it take 12 workers to complete the same wall at the same working rate?',
          options: ['22.5 days', '10 days', '12 days', '8 days'],
          correct: 1,
          strategy: 'Recognize this as an INVERSE proportion problem: more workers = fewer days. Use x₁y₁ = x₂y₂.',
          derivation: 'Total work = 8 workers × 15 days = 120 worker-days. With 12 workers: 12 × d = 120 ➔ d = 120 / 12 = 10 days.',
          trap: 'Setting it up as a direct proportion gives 8/15 = 12/d ➔ d = 22.5, which is absurd because more workers should take less time!'
        }
      ]
    },
    {
      id: 'g7-m-3.2',
      code: '3.2',
      title: 'Percentage, Commercial Math & Simple Interest',
      survey: {
        blueprint: 'Percentage = per 100 (P% = P/100). Profit = SP - CP. Loss = CP - SP. Discount = Marked Price - Sale Price. Simple Interest: I = (P × R × T) / 100.',
        objectives: [
          'Calculate percentage increase and decrease.',
          'Compute Profit, Loss, and Discount in commercial transactions.',
          'Calculate Simple Interest (I), Principal (P), Rate (R), and Time (T) using the standard financial formula.'
        ],
        keyFormulas: 'Profit = SP - CP &nbsp;|&nbsp; Profit% = (Profit / CP) × 100 &nbsp;|&nbsp; I = (P · R · T) / 100 &nbsp;|&nbsp; Amount A = P + I'
      },
      questions: [
        'Why is profit or loss percentage always calculated with respect to the Cost Price (CP) rather than the Selling Price (SP)?',
        'In the Simple Interest formula, how must time T be converted if given in months or days?'
      ],
      coreNotes: `
        <div class="space-y-5 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
              <span>💰</span> 1. PROFIT, LOSS AND DISCOUNT
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div class="p-3 bg-space-950 rounded-xl border border-slate-800 space-y-1">
                <span class="font-bold text-emerald-400">Profit (Gain):</span>
                <p>When Selling Price (SP) > Cost Price (CP):<br>
                • <strong>Profit = SP - CP</strong><br>
                • <strong>Profit % = (Profit / CP) × 100%</strong></p>
              </div>
              <div class="p-3 bg-space-950 rounded-xl border border-slate-800 space-y-1">
                <span class="font-bold text-rose-400">Loss:</span>
                <p>When Cost Price (CP) > Selling Price (SP):<br>
                • <strong>Loss = CP - SP</strong><br>
                • <strong>Loss % = (Loss / CP) × 100%</strong></p>
              </div>
            </div>
            <p class="text-xs text-slate-400 pt-1">
              • <strong>Discount:</strong> A reduction offered on the Marked Price (MP): <em>Discount = Marked Price - Selling Price</em>.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
              <span>🏦</span> 2. SIMPLE INTEREST (COMMERCIAL BANKING)
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When money is deposited in a bank or borrowed, the financial institution pays or charges interest for the use of the funds:
            </p>
            <div class="p-3 bg-space-950 rounded-lg text-center font-mono text-xs text-amber-300 border border-slate-850">
              Simple Interest (I) = (P × R × T) / 100 &nbsp;|&nbsp; Total Amount (A) = Principal (P) + Interest (I)
            </div>
            <ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
              <li><strong>P (Principal):</strong> The original sum of money borrowed or deposited.</li>
              <li><strong>R (Rate):</strong> The annual interest rate percentage per annum (% p.a.).</li>
              <li><strong>T (Time):</strong> Duration in <em>years</em> (if given in months, divide by 12: T = months/12).</li>
            </ul>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Calculating Profit Percentage & Simple Interest',
        problem: 'A trader buys 5 quintals of wheat for 8,000 Birr and sells them for 10,000 Birr. Then, he deposits 5,000 Birr of the proceeds into a CBE savings account at 8% annual simple interest for 3 years. Calculate: A) Profit percentage, and B) Total simple interest and amount earned.',
        steps: [
          {
            label: 'Step 1: Calculate Profit & Profit %',
            text: 'Profit = SP - CP = 10,000 - 8,000 = 2,000 Birr.<br>Profit % = (Profit / CP) × 100% = (2,000 / 8,000) × 100% = <strong>25% Profit</strong>.'
          },
          {
            label: 'Step 2: Calculate Simple Interest',
            text: 'P = 5,000 Birr, R = 8%, T = 3 years.<br>I = (P × R × T) / 100 = (5,000 × 8 × 3) / 100.<br>I = (120,000) / 100 = <strong>1,200 Birr Interest</strong>.'
          },
          {
            label: 'Step 3: Calculate Total Accumulated Amount',
            text: 'Total Amount A = Principal + Interest = 5,000 + 1,200 = <strong>6,200 Birr</strong>.'
          }
        ],
        proTip: 'Always ensure Time (T) is in years! If time is given as 18 months, T = 18/12 = 1.5 years.'
      },
      reciteFlashcards: [
        { q: 'What is the formula for Simple Interest?', a: 'I = (P × R × T) / 100.' },
        { q: 'What is the base price used to compute Profit or Loss %?', a: 'The Cost Price (CP).' }
      ],
      amtQuiz: [
        {
          q: 'A customer deposits 12,000 Birr in a bank offering 7% simple interest per year. What is the total interest earned after 4 years?',
          options: ['3,360 Birr', '840 Birr', '15,360 Birr', '2,800 Birr'],
          correct: 0,
          strategy: 'Apply I = (P × R × T) / 100 directly.',
          derivation: 'I = (12,000 × 7 × 4) / 100 = 120 × 28 = 3,360 Birr.',
          trap: '15,360 Birr is the total Amount (A = P + I), but the question asked strictly for the Interest earned!'
        }
      ]
    }
  ]
};

const unit4 = {
  id: 'g7-m-u4',
  number: 'Unit 4',
  title: 'Data Handling',
  bigIdea: 'Collect, organize, and visually represent statistical data using tally tables, bar graphs, pie charts, and compute central tendency measures.',
  subtopics: [
    {
      id: 'g7-m-4.1',
      code: '4.1',
      title: 'Data Collection & Graphical Representation',
      survey: {
        blueprint: 'Tally charts, frequency distribution tables. Graphs: Bar charts (vertical/horizontal bars with equal gaps), Pie charts (circular sectors: Angle = (f/N) × 360°).',
        objectives: [
          'Organize raw survey data into frequency tables using tally marks.',
          'Construct and interpret bar charts and line graphs.',
          'Calculate central sector angles to construct accurate pie charts.'
        ],
        keyFormulas: 'Sector Angle θ = (Frequency f / Total N) × 360° &nbsp;|&nbsp; Frequency Percentage = (f / N) × 100%'
      },
      questions: [
        'Why must bar charts have uniform spacing between bars while histograms have continuous bars?',
        'How do you calculate the exact degree angle of a slice on a pie chart representing 25% of total data?'
      ],
      coreNotes: `
        <div class="space-y-5 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
              <span>📊</span> 1. TALLY CHARTS AND FREQUENCY TABLES
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Raw Data:</strong> Unorganized numerical values collected from observations or questionnaires.<br>
              • <strong>Tally Marks:</strong> Marks grouped in clusters of five (four vertical strokes crossed by one diagonal stroke <s>||||</s>) for rapid counting.<br>
              • <strong>Frequency (f):</strong> The total number of times a particular value occurs in the dataset.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
              <span>🥧</span> 2. PIE CHART SECTOR CALCULATIONS
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              A pie chart represents categories as sectors of a complete 360° circle proportional to their frequency:
            </p>
            <div class="p-3 bg-space-950 rounded-lg text-center font-mono text-xs text-amber-300 border border-slate-850">
              Sector Angle (θ) = (Component Frequency f / Total Sample Size N) × 360°
            </div>
            <p class="text-xs text-slate-300">
              The sum of all sector angles in a pie chart must always equal exactly <strong>360°</strong>!
            </p>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Calculating Sector Angles for a School Transport Survey',
        problem: 'In a class of 60 students in Addis Ababa, 30 walk to school, 15 take the public bus, 10 take taxis, and 5 use bicycles. Calculate the sector angle for each category to construct a pie chart.',
        steps: [
          {
            label: 'Step 1: Verify total sample size N',
            text: 'N = 30 + 15 + 10 + 5 = 60 students.'
          },
          {
            label: 'Step 2: Calculate sector angle for Walking',
            text: 'θ_walk = (30 / 60) × 360° = 0.5 × 360° = <strong>180°</strong> (half of the circle).'
          },
          {
            label: 'Step 3: Calculate sector angle for Bus',
            text: 'θ_bus = (15 / 60) × 360° = 0.25 × 360° = <strong>90°</strong> (one quarter of the circle).'
          },
          {
            label: 'Step 4: Calculate sector angle for Taxi and Bicycle',
            text: 'θ_taxi = (10 / 60) × 360° = (1/6) × 360° = <strong>60°</strong>.<br>θ_bike = (5 / 60) × 360° = (1/12) × 360° = <strong>30°</strong>.'
          },
          {
            label: 'Step 5: Verify angle sum',
            text: '180° + 90° + 60° + 30° = <strong>360°</strong> (Verified!).'
          }
        ],
        proTip: 'Always verify that the sum of your calculated sector angles equals 360°!'
      },
      reciteFlashcards: [
        { q: 'What is the sum of all central angles in a pie chart?', a: '360 degrees.' },
        { q: 'How many tally marks are grouped together in a standard tally cluster?', a: '5 marks (four vertical and one diagonal stroke across).' }
      ],
      amtQuiz: [
        {
          q: 'In a survey of 120 cattle, 40 are heifers. What angle should represent heifers on a pie chart?',
          options: ['90°', '120°', '40°', '100°'],
          correct: 1,
          strategy: 'Apply θ = (f / N) × 360°.',
          derivation: 'θ = (40 / 120) × 360° = (1/3) × 360° = 120°.',
          trap: 'Do not use the frequency 40 directly as the angle degree!'
        }
      ]
    },
    {
      id: 'g7-m-4.2',
      code: '4.2',
      title: 'Measures of Central Tendency & Dispersion',
      survey: {
        blueprint: 'Central Tendency: Mean (arithmetic average), Median (middle value of sorted array), Mode (most frequent). Dispersion: Range = Max - Min.',
        objectives: [
          'Calculate the arithmetic mean of ungrouped datasets.',
          'Determine the median for both odd and even sample sizes.',
          'Identify modes and calculate range to assess data spread.'
        ],
        keyFormulas: 'Mean x̄ = (∑x) / n &nbsp;|&nbsp; Range = Max - Min &nbsp;|&nbsp; Median = Middle value in ordered list'
      },
      questions: [
        'How does an extreme outlier (e.g. one very large number) distort the Mean compared to the Median?',
        'Can a dataset have more than one mode, or no mode at all?'
      ],
      coreNotes: `
        <div class="space-y-5 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
              <span>🎯</span> 1. MEAN, MEDIAN AND MODE DEFINED
            </h4>
            <div class="space-y-2 text-xs sm:text-sm text-slate-300">
              <p>• <strong>Mean (Arithmetic Average x̄):</strong> Sum of all observations divided by total count: <em>x̄ = (∑x) / n</em>.<br>
              • <strong>Median:</strong> The middle value when data is arranged in ascending order.<br>
                - If <em>n is odd</em>: The single middle value at position <em>(n + 1)/2</em>.<br>
                - If <em>n is even</em>: The arithmetic average of the two middle values at positions <em>n/2</em> and <em>(n/2) + 1</em>.<br>
              • <strong>Mode:</strong> The observation that appears with the highest frequency. A dataset can be unimodal, bimodal (two modes), or have no mode if all values appear with equal frequency.</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
              <span>📏</span> 2. MEASURE OF DISPERSION: THE RANGE
            </h4>
            <div class="p-3 bg-space-950 rounded-lg text-center font-mono text-xs text-amber-300 border border-slate-850">
              Range = Highest Observed Value (Maximum) - Lowest Observed Value (Minimum)
            </div>
            <p class="text-xs text-slate-300">
              The range indicates the total spread or variability of the data across the measurement scale.
            </p>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Finding Mean, Median, Mode, and Range for an Even Dataset',
        problem: 'A student recorded her math quiz scores over 8 weeks: 14, 18, 12, 19, 14, 16, 20, 15. Find: A) Mean, B) Median, C) Mode, and D) Range.',
        steps: [
          {
            label: 'Step 1: Arrange data in ascending order',
            text: 'Ordered data: 12, 14, 14, 15, 16, 18, 19, 20 (Count n = 8).'
          },
          {
            label: 'Step 2: Calculate Mean',
            text: 'Sum = 12 + 14 + 14 + 15 + 16 + 18 + 19 + 20 = 128.<br>Mean = 128 ÷ 8 = <strong>16.0</strong>.'
          },
          {
            label: 'Step 3: Calculate Median (even count n = 8)',
            text: 'The two middle numbers are the 4th value (15) and 5th value (16).<br>Median = (15 + 16) / 2 = 31 / 2 = <strong>15.5</strong>.'
          },
          {
            label: 'Step 4: Find Mode and Range',
            text: 'Mode = <strong>14</strong> (appears twice; all others appear once).<br>Range = Max - Min = 20 - 12 = <strong>8</strong>.'
          }
        ],
        proTip: 'Always sort data in ascending order before finding the median!'
      },
      reciteFlashcards: [
        { q: 'How do you calculate the median when the number of observations is even?', a: 'Take the average of the two central numbers.' },
        { q: 'What is the range of the numbers: 3, 7, 12, 25, 40?', a: '40 - 3 = 37.' }
      ],
      amtQuiz: [
        {
          q: 'Find the median of the following set of numbers: 9, 3, 7, 12, 5, 18, 14',
          options: ['9', '7', '12', '9.7'],
          correct: 0,
          strategy: 'Sort the dataset in ascending order first: 3, 5, 7, 9, 12, 14, 18.',
          derivation: 'Count is n = 7 (odd). The 4th position is the middle number: 9. Therefore the median is 9.',
          trap: 'Do not take 12 as the middle number from the unsorted original list!'
        }
      ]
    }
  ]
};

const unit5 = {
  id: 'g7-m-u5',
  number: 'Unit 5',
  title: 'Geometric Figures and Measurement',
  bigIdea: 'Analyze quadrilaterals, angle sum of polygons, exterior angle theorems of triangles, congruence, and measurement of areas and 3D volumes.',
  subtopics: [
    {
      id: 'g7-m-5.1',
      code: '5.1',
      title: 'Quadrilaterals, Polygons and Circles',
      survey: {
        blueprint: 'Quadrilateral angle sum = 360°. Polygons: Interior angle sum = (n - 2) × 180°. Regular polygon interior angle = [(n - 2) × 180°] / n. Exterior angle sum = 360°.',
        objectives: [
          'Prove that the sum of interior angles of any quadrilateral is 360°.',
          'Calculate interior and exterior angle measures of regular n-sided polygons.',
          'Classify special quadrilaterals: Trapezoid, Parallelogram, Rhombus, Rectangle, Square.'
        ],
        keyFormulas: 'Interior Angle Sum = (n - 2) × 180° &nbsp;|&nbsp; Each Interior Angle = [(n - 2) · 180°] / n &nbsp;|&nbsp; Exterior Sum = 360°'
      },
      questions: [
        'Why does the sum of exterior angles of ANY convex polygon always equal 360°, regardless of how many sides it has?',
        'What geometric properties make a square both a rectangle and a rhombus simultaneously?'
      ],
      coreNotes: `
        <div class="space-y-5 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
              <span>📐</span> 1. QUADRILATERALS & PARALLELOGRAM PROPERTIES
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              A <strong>Quadrilateral</strong> is a 4-sided polygon. Dividing any quadrilateral by a diagonal forms two triangles, each having angle sum 180°. Therefore:<br>
              <strong>The sum of the interior angles of any quadrilateral is 180° + 180° = 360°.</strong>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1">
              <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                <strong>Parallelogram:</strong> Opposite sides are parallel and equal; opposite angles are equal; diagonals bisect each other.
              </div>
              <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                <strong>Rhombus:</strong> All 4 sides equal; diagonals bisect each other at right angles (90°).
              </div>
              <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                <strong>Rectangle:</strong> All 4 angles are 90°; diagonals are congruent and equal.
              </div>
              <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                <strong>Trapezoid:</strong> Exactly one pair of opposite sides are parallel.
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
              <span>🔢</span> 2. POLYGON ANGLE THEOREMS
            </h4>
            <ul class="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc list-inside">
              <li><strong>Interior Angle Sum Theorem:</strong> For any convex n-sided polygon, the sum of all interior angles is: <em>S = (n - 2) × 180°</em>.</li>
              <li><strong>Regular Polygon:</strong> All sides equal and all angles equal. Each interior angle is: <em>θ = [(n - 2) × 180°] / n</em>.</li>
              <li><strong>Exterior Angle Sum Theorem:</strong> The sum of one exterior angle at each vertex of any convex polygon is ALWAYS <strong>360°</strong>.</li>
              <li>Each exterior angle of a regular polygon is: <em>360° / n</em>.</li>
            </ul>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Interior and Exterior Angles of a Regular Octagon',
        problem: 'For a regular octagon (8-sided polygon), calculate: A) The sum of all interior angles, B) The measure of each interior angle, and C) The measure of each exterior angle.',
        steps: [
          {
            label: 'Step 1: Calculate Interior Angle Sum (n = 8)',
            text: 'S = (n - 2) × 180° = (8 - 2) × 180° = 6 × 180° = <strong>1,080°</strong>.'
          },
          {
            label: 'Step 2: Calculate each interior angle',
            text: 'θ_int = S / n = 1,080° / 8 = <strong>135°</strong>.'
          },
          {
            label: 'Step 3: Calculate each exterior angle',
            text: 'θ_ext = 360° / n = 360° / 8 = <strong>45°</strong>.'
          },
          {
            label: 'Step 4: Check supplementary condition',
            text: 'Interior + Exterior = 135° + 45° = <strong>180°</strong> (Verified straight line!).'
          }
        ],
        proTip: 'At every vertex of a polygon, Interior Angle + Exterior Angle = 180° (linear pair)!'
      },
      reciteFlashcards: [
        { q: 'What is the sum of interior angles of a pentagon (5 sides)?', a: '(5 - 2) × 180° = 3 × 180° = 540°.' },
        { q: 'What is the sum of exterior angles of any convex polygon?', a: '360 degrees.' }
      ],
      amtQuiz: [
        {
          q: 'Each interior angle of a regular polygon measures 140°. How many sides does this polygon have?',
          options: ['9 sides', '8 sides', '10 sides', '12 sides'],
          correct: 0,
          strategy: 'Use the exterior angle shortcut: Exterior angle = 180° - 140° = 40°. Then n = 360° / 40°.',
          derivation: 'At any vertex, Ext = 180° - Int = 180° - 140° = 40°. Number of sides n = 360° / Ext = 360° / 40° = 9 sides (a nonagon).',
          trap: 'Using the interior formula directly requires solving (n-2)×180/n = 140, which is slower than using the exterior shortcut!'
        }
      ]
    },
    {
      id: 'g7-m-5.2',
      code: '5.2',
      title: 'Theorems of Triangles',
      survey: {
        blueprint: 'Triangle angle sum = 180°. Exterior angle theorem: d = a + b. Triangle inequality: a + b > c. Triangle congruence: SSS, SAS, ASA, AAS, RHS.',
        objectives: [
          'Prove and apply the Exterior Angle Theorem of triangles.',
          'Verify side lengths using the Triangle Inequality Theorem (a + b > c).',
          'Identify congruence criteria (SSS, SAS, ASA, AAS, RHS).'
        ],
        keyFormulas: 'Angle Sum = 180° &nbsp;|&nbsp; Exterior Angle d = a + b &nbsp;|&nbsp; Inequality: a + b > c, b + c > a, a + c > b'
      },
      questions: [
        'Can a triangle have side lengths 4 cm, 7 cm, and 12 cm? Why or why not?',
        'Why does SSA (side-side-angle) NOT guarantee congruence between two triangles?'
      ],
      coreNotes: `
        <div class="space-y-5 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
              <span>🔺</span> 1. THE EXTERIOR ANGLE THEOREM
            </h4>
            <div class="p-3 bg-indigo-950/40 border-l-4 border-indigo-500 rounded-r-lg text-xs sm:text-sm text-slate-200">
              <strong>Theorem:</strong> The measure of an exterior angle of a triangle is equal to the sum of the measures of its two remote (non-adjacent) interior angles: <strong>∠d = ∠a + ∠b</strong>.
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              <em>Proof:</em> Interior angles a + b + c = 180°. At the exterior vertex, c + d = 180° (linear pair). Subtracting c yields d = a + b.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
              <span>📏</span> 2. THE TRIANGLE INEQUALITY THEOREM
            </h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-bold">
              The sum of the lengths of any two sides of a triangle must be strictly GREATER than the length of the third side:
            </p>
            <div class="p-2.5 bg-space-950 rounded-lg text-center font-mono text-xs text-amber-300 border border-slate-850">
              a + b > c &nbsp; AND &nbsp; a + c > b &nbsp; AND &nbsp; b + c > a
            </div>
            <p class="text-xs text-slate-300">
              If the sum of two smaller sides is less than or equal to the third side, the sides cannot meet to form a triangle!
            </p>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Exterior Angle Theorem & Triangle Inequality Test',
        problem: 'Part A: In △ABC, an exterior angle at C measures 115°, and interior angle A measures 45°. Find interior angle B. Part B: Can line segments of lengths 6 cm, 9 cm, and 16 cm form a triangle?',
        steps: [
          {
            label: 'Step 1: Apply Exterior Angle Theorem for Part A',
            text: 'Exterior angle C = Angle A + Angle B.<br>115° = 45° + Angle B.<br>Angle B = 115° - 45° = <strong>70°</strong>.'
          },
          {
            label: 'Step 2: Apply Triangle Inequality for Part B',
            text: 'Test the sum of the two shorter sides: 6 + 9 = 15 cm.<br>Compare with third side: 15 cm vs 16 cm.'
          },
          {
            label: 'Step 3: Conclusion for Part B',
            text: 'Since 6 + 9 = 15 < 16 cm, the two shorter sides cannot meet. <strong>No triangle can be formed with these side lengths</strong>.'
          }
        ],
        proTip: 'To test if 3 lengths form a triangle, you only need to check if: (Shortest + Middle) > Longest!'
      },
      reciteFlashcards: [
        { q: 'What does the exterior angle of a triangle equal?', a: 'The sum of the two remote interior angles.' },
        { q: 'Can lengths 5, 5, 10 form a triangle?', a: 'No, because 5 + 5 = 10 (it must be strictly greater than 10).' }
      ],
      amtQuiz: [
        {
          q: 'Which of the following sets of side lengths CAN form a valid triangle?',
          options: ['3 cm, 4 cm, 8 cm', '7 cm, 10 cm, 16 cm', '5 cm, 6 cm, 12 cm', '2 cm, 5 cm, 7 cm'],
          correct: 1,
          strategy: 'Check whether the sum of the two shorter sides is strictly greater than the longest side.',
          derivation: 'For 7, 10, 16: 7 + 10 = 17 > 16 (Valid!). For 3+4=7 < 8 (Invalid). For 5+6=11 < 12 (Invalid). For 2+5=7 = 7 (Invalid).',
          trap: 'Equal sum (2 + 5 = 7) collapses into a flat line segment, not a triangle!'
        }
      ]
    },
    {
      id: 'g7-m-5.3',
      code: '5.3',
      title: 'Measurement: Area of Plane Figures & 3D Volume',
      survey: {
        blueprint: 'Area: Parallelogram (bh), Trapezoid (½(a+b)h), Rhombus (½ d1 d2), Circle (πr²). Volume of 3D solids: Right Prisms (V = Bh), Cylinders (V = πr²h). Surface area.',
        objectives: [
          'Calculate perimeter and area of trapezoids, rhombuses, and parallelograms.',
          'Calculate total surface area and volume of right rectangular/triangular prisms.',
          'Compute curved surface area and volume of right circular cylinders.'
        ],
        keyFormulas: 'Trapezoid Area = ½(a + b)h &nbsp;|&nbsp; Rhombus Area = ½ d1 d2 &nbsp;|&nbsp; Prism V = Bh &nbsp;|&nbsp; Cylinder V = πr²h'
      },
      questions: [
        'Why is the area of a rhombus calculated using half the product of its diagonals?',
        'How does doubling the radius of a cylinder affect its volume compared to doubling its height?'
      ],
      coreNotes: `
        <div class="space-y-5 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
              <span>📐</span> 1. AREA FORMULAS FOR SPECIAL PLANE FIGURES
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1">
              <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                <strong>Parallelogram:</strong> Area = Base × Height = <em>b × h</em>.
              </div>
              <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                <strong>Trapezoid:</strong> Area = ½ × (Sum of Parallel Bases) × Height = <em>½(a + b)h</em>.
              </div>
              <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                <strong>Rhombus:</strong> Area = ½ × (Product of Diagonals) = <em>½ × d₁ × d₂</em>.
              </div>
              <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                <strong>Circle:</strong> Circumference = <em>2πr</em> &nbsp;|&nbsp; Area = <em>πr²</em>.
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
              <span>📦</span> 2. 3D SOLID FIGURES: SURFACE AREA & VOLUME
            </h4>
            <div class="space-y-2 text-xs sm:text-sm text-slate-300">
              <p>• <strong>Right Prisms:</strong><br>
                - Volume = Base Area × Height: <strong>V = B × h</strong>.<br>
                - Total Surface Area = Lateral Area + 2(Base Area) = <strong>(Perimeter of Base × h) + 2B</strong>.</p>
              <p>• <strong>Right Circular Cylinder:</strong><br>
                - Volume = <strong>πr²h</strong>.<br>
                - Curved (Lateral) Surface Area = <strong>2πrh</strong>.<br>
                - Total Surface Area = 2πrh + 2πr² = <strong>2πr(h + r)</strong>.</p>
            </div>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Area of Trapezoid & Volume of Water Storage Cylinder',
        problem: 'Part A: Find the area of a trapezoidal farmland with parallel bases 18 m and 12 m, and height 8 m. Part B: A cylindrical grain silo in Arsi has radius r = 3 m and height h = 7 m. Calculate its storage volume (use π ≈ 22/7).',
        steps: [
          {
            label: 'Step 1: Calculate Trapezoid Area',
            text: 'Area = ½ × (a + b) × h = ½ × (18 + 12) × 8.<br>Area = ½ × 30 × 8 = 15 × 8 = <strong>120 m²</strong>.'
          },
          {
            label: 'Step 2: Calculate Cylinder Volume',
            text: 'Volume V = πr²h.<br>Substitute: V = (22/7) × (3)² × 7.<br>Cancel the 7 in denominator with height 7: V = 22 × 9 = <strong>198 m³</strong>.'
          }
        ],
        proTip: 'Notice how using π = 22/7 allows clean cancellation when radius or height is a multiple of 7!'
      },
      reciteFlashcards: [
        { q: 'What is the formula for the area of a trapezoid?', a: 'Area = ½(a + b)h, where a and b are the parallel bases.' },
        { q: 'What is the formula for the volume of a cylinder?', a: 'Volume = πr²h.' }
      ],
      amtQuiz: [
        {
          q: 'The diagonals of a rhombus measure 14 cm and 20 cm. What is the area of the rhombus?',
          options: ['280 cm²', '140 cm²', '68 cm²', '70 cm²'],
          correct: 1,
          strategy: 'Area of a rhombus = ½ × d₁ × d₂.',
          derivation: 'Area = ½ × 14 × 20 = 7 × 20 = 140 cm².',
          trap: 'Multiplying 14 × 20 = 280 forgets the essential ½ factor in rhombus area!'
        }
      ]
    }
  ]
};



module.exports = {
  id: 'math',
  name: 'Mathematics',
  icon: '📐',
  units: [unit1, unit2, unit3, unit4, unit5]
};
