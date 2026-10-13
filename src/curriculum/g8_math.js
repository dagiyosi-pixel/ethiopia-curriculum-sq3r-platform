module.exports = {
  "id": "math",
  "name": "Mathematics",
  "icon": "📐",
  "units": [
    {
      "id": "g8-m-u1",
      "number": "Unit 1",
      "title": "Square Roots and Cube Roots",
      "bigIdea": "Understand radicals, principal roots, irrational numbers, and calculating square and cube roots.",
      "subtopics": [
        {
          "id": "g8-m-1.1",
          "code": "1.1",
          "title": "Squares and Square Roots",
          "survey": {
            "blueprint": "Perfect squares, radical symbol √, prime factorization method for roots.",
            "objectives": [
              "Evaluate square roots of perfect square numbers.",
              "Estimate square roots of non-perfect square numbers between two consecutive integers."
            ],
            "keyFormulas": "√a² = |a| &nbsp;|&nbsp; √(ab) = √a × √b"
          },
          "questions": [
            "Why does every positive real number have two square roots (+ and -)?",
            "How can prime factorization determine if a large number is a perfect square?"
          ],
          "coreNotes": "\n                    <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                      <h4 class=\"font-bold text-indigo-400\">Prime Factorization for Square Roots</h4>\n                      <p>If all prime factors in the prime factorization of a number have EVEN exponents, the number is a perfect square. The square root is obtained by halving each exponent.</p>\n                    </div>\n                  ",
          "example": {
            "title": "Evaluating Square Root by Prime Factorization",
            "problem": "Find the square root of 576 using prime factorization.",
            "steps": [
              {
                "label": "Step 1: Factorize 576",
                "text": "576 = 2⁶ × 3²."
              },
              {
                "label": "Step 2: Halve the exponents",
                "text": "√576 = 2^(6/2) × 3^(2/2) = 2³ × 3¹."
              },
              {
                "label": "Step 3: Calculate product",
                "text": "8 × 3 = <strong>24</strong>."
              },
              {
                "label": "Step 4: Check",
                "text": "24 × 24 = 576. (Verified!)"
              }
            ],
            "proTip": "If any prime factor has an odd exponent, the number is not a perfect square!"
          },
          "reciteFlashcards": [
            {
              "q": "What is √225?",
              "a": "15."
            },
            {
              "q": "Between which two consecutive integers does √50 lie?",
              "a": "Between 7 (√49) and 8 (√64)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the value of √0.0064?",
              "options": [
                "0.8",
                "0.08",
                "0.008",
                "0.04"
              ],
              "correct": 1,
              "strategy": "Convert to fraction: √(64/10000).",
              "derivation": "√64 / √10000 = 8 / 100 = 0.08.",
              "trap": "0.8 squared is 0.64, not 0.0064!"
            }
          ]
        },
        {
          "id": "g8-m-1.2",
          "code": "1.2",
          "title": "Cubes and Cube Roots",
          "survey": {
            "blueprint": "Perfect cubes, cube root symbol ∛, and odd powers of negative numbers.",
            "objectives": [
              "Evaluate cube roots of positive and negative integers.",
              "Differentiate between square roots of negative numbers (not real) and cube roots of negative numbers (real negative)."
            ],
            "keyFormulas": "∛(-a) = -∛a"
          },
          "questions": [
            "Why does the cube root of a negative number exist in real numbers while the square root does not?",
            "What is the cube root of -216?"
          ],
          "coreNotes": "\n                    <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                      <h4 class=\"font-bold text-amber-400\">Cube Roots of Negative Numbers</h4>\n                      <p>Because an odd number of negative signs multiplies to a negative, the cube root of a negative number is ALWAYS a real negative number:<br>\n                      ∛(-8) = -2 because (-2)³ = (-2) × (-2) × (-2) = -8.</p>\n                    </div>\n                  ",
          "example": {
            "title": "Evaluating Negative Cube Roots",
            "problem": "Evaluate: ∛(-343) + ∛(125)",
            "steps": [
              {
                "label": "Step 1: Evaluate ∛(-343)",
                "text": "(-7)³ = -343, so ∛(-343) = <strong>-7</strong>."
              },
              {
                "label": "Step 2: Evaluate ∛(125)",
                "text": "5³ = 125, so ∛(125) = <strong>5</strong>."
              },
              {
                "label": "Step 3: Combine",
                "text": "-7 + 5 = <strong>-2</strong>."
              }
            ],
            "proTip": "Never say the cube root of a negative is impossible—that rule only applies to even roots (like square roots)!"
          },
          "reciteFlashcards": [
            {
              "q": "What is ∛(-64)?",
              "a": "-4."
            },
            {
              "q": "What is ∛(1,000)?",
              "a": "10."
            }
          ],
          "amtQuiz": [
            {
              "q": "Evaluate: ∛(-216)",
              "options": [
                "-6",
                "6",
                "Not a real number",
                "-16"
              ],
              "correct": 0,
              "strategy": "Find integer whose cube is -216.",
              "derivation": "(-6)³ = -6 × -6 × -6 = 36 × -6 = -216. Therefore ∛(-216) = -6.",
              "trap": "Assuming negative roots don't exist!"
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u2",
      "number": "Unit 2",
      "title": "Further on Sets",
      "bigIdea": "Explore Cartesian products, complements, and solve three-set Venn diagram word problems.",
      "subtopics": [
        {
          "id": "g8-m-2.1",
          "code": "2.1",
          "title": "Cartesian Products & Set Relations",
          "survey": {
            "blueprint": "Ordered pairs (a, b), Cartesian product A × B, and cardinality n(A × B) = n(A) · n(B).",
            "objectives": [
              "Construct ordered pairs and Cartesian products.",
              "Apply Cartesian product cardinality formula."
            ],
            "keyFormulas": "n(A × B) = n(A) × n(B)"
          },
          "questions": [
            "Is the Cartesian product commutative: does A × B equal B × A?",
            "If set A has 3 elements and set B has 4 elements, how many ordered pairs are in A × B?"
          ],
          "coreNotes": "\n                    <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                      <h4 class=\"font-bold text-cyan-400\">Cartesian Product Definition</h4>\n                      <p>The set of all ordered pairs (a, b) such that a ∈ A and b ∈ B:<br>\n                      A × B = { (a, b) | a ∈ A and b ∈ B }.<br>\n                      In general, A × B ≠ B × A unless A = B.</p>\n                    </div>\n                  ",
          "example": {
            "title": "Constructing Cartesian Product Pairs",
            "problem": "Given A = {1, 2} and B = {x, y, z}. Write out A × B and state its cardinality.",
            "steps": [
              {
                "label": "Step 1: Write all ordered pairs",
                "text": "A × B = { (1, x), (1, y), (1, z), (2, x), (2, y), (2, z) }."
              },
              {
                "label": "Step 2: Cardinality",
                "text": "n(A × B) = n(A) × n(B) = 2 × 3 = <strong>6</strong>."
              }
            ],
            "proTip": "Order matters in pairs: (1, x) is NOT the same as (x, 1)!"
          },
          "reciteFlashcards": [
            {
              "q": "If n(A) = 5 and n(B) = 4, what is n(A × B)?",
              "a": "5 × 4 = 20."
            }
          ],
          "amtQuiz": [
            {
              "q": "If n(A × B) = 24 and n(A) = 6, what is n(B)?",
              "options": [
                "4",
                "18",
                "30",
                "144"
              ],
              "correct": 0,
              "strategy": "Divide total cardinality by n(A).",
              "derivation": "n(B) = 24 / 6 = 4.",
              "trap": "Subtracting 24 - 6 = 18 instead of dividing!"
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u3",
      "number": "Unit 3",
      "title": "Linear Equations & Systems in Two Variables",
      "bigIdea": "Graph lines on the Cartesian plane, find slopes, and solve simultaneous systems of equations.",
      "subtopics": [
        {
          "id": "g8-m-3.1",
          "code": "3.1",
          "title": "Cartesian Coordinate System & Slope of a Line",
          "survey": {
            "blueprint": "The 4 quadrants, plotting (x, y), slope formula m = (y₂ - y₁) / (x₂ - x₁), slope-intercept form y = mx + b.",
            "objectives": [
              "Plot coordinates across all four quadrants.",
              "Calculate slope m between two given points.",
              "Identify parallel lines (same slope) and perpendicular lines (m₁ · m₂ = -1)."
            ],
            "keyFormulas": "Slope m = (y₂ - y₁) / (x₂ - x₁) &nbsp;|&nbsp; y = mx + b"
          },
          "questions": [
            "What is the slope of a horizontal line versus a vertical line?",
            "In the equation y = -3x + 7, what is the slope and y-intercept?"
          ],
          "coreNotes": "\n                    <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                      <h4 class=\"font-bold text-indigo-400\">Slope Formula & Line Types</h4>\n                      <p>• Horizontal lines have a slope of <strong>0</strong>.<br>\n                      • Vertical lines have an <strong>undefined</strong> slope (division by zero).<br>\n                      • Positive slope rises from left to right; negative slope falls.</p>\n                    </div>\n                  ",
          "example": {
            "title": "Calculating Slope Between Two Coordinates",
            "problem": "Find the slope of the line passing through points A(-2, 3) and B(4, -9).",
            "steps": [
              {
                "label": "Step 1: Identify coordinates",
                "text": "x₁ = -2, y₁ = 3, x₂ = 4, y₂ = -9."
              },
              {
                "label": "Step 2: Apply slope formula",
                "text": "m = (y₂ - y₁) / (x₂ - x₁) = (-9 - 3) / (4 - (-2))."
              },
              {
                "label": "Step 3: Simplify",
                "text": "m = -12 / (4 + 2) = -12 / 6 = <strong>-2</strong>."
              }
            ],
            "proTip": "Watch out for double negatives in the denominator: 4 - (-2) = 4 + 2 = 6!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the slope of the line y = 5x - 8?",
              "a": "m = 5."
            },
            {
              "q": "What is the y-intercept of y = -2x + 4?",
              "a": "(0, 4)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the slope of the line passing through (1, 2) and (3, 8)?",
              "options": [
                "3",
                "2",
                "4",
                "6"
              ],
              "correct": 0,
              "strategy": "m = (8 - 2) / (3 - 1).",
              "derivation": "m = 6 / 2 = 3.",
              "trap": "Dividing (3 - 1) / (8 - 2) = 2/6 = 1/3 (inverted dx/dy)!"
            }
          ]
        },
        {
          "id": "g8-m-3.2",
          "code": "3.2",
          "title": "Solving Systems of Linear Equations",
          "survey": {
            "blueprint": "Simultaneous equations with two unknowns using substitution and elimination methods.",
            "objectives": [
              "Solve systems using the Substitution method.",
              "Solve systems using the Elimination (Addition) method."
            ],
            "keyFormulas": "ax + by = e and cx + dy = f"
          },
          "questions": [
            "When is the elimination method faster than substitution?",
            "What does the intersection point of two linear graphs represent?"
          ],
          "coreNotes": "\n                    <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                      <h4 class=\"font-bold text-amber-400\">The Elimination Strategy</h4>\n                      <p>Multiply one or both equations by suitable non-zero constants so that the coefficients of one variable become opposites, then add the equations to eliminate that variable.</p>\n                    </div>\n                  ",
          "example": {
            "title": "Grade 8 Ministry Exam Style: Solving Simultaneous Equations",
            "problem": "Solve the system of equations:<br>2x + 3y = 13<br>4x - 3y = 5",
            "steps": [
              {
                "label": "Step 1: Recognize opposite coefficients",
                "text": "The y terms (+3y and -3y) are already additive opposites!"
              },
              {
                "label": "Step 2: Add both equations",
                "text": "(2x + 4x) + (3y - 3y) = 13 + 5<br>6x = 18<br><strong>x = 3</strong>"
              },
              {
                "label": "Step 3: Substitute x = 3 into Equation 1",
                "text": "2(3) + 3y = 13<br>6 + 3y = 13<br>3y = 7<br><strong>y = 7/3</strong>"
              },
              {
                "label": "Step 4: Check in Equation 2",
                "text": "4(3) - 3(7/3) = 12 - 7 = 5. (Match!)"
              }
            ],
            "proTip": "Always verify both solutions in the SECOND equation!"
          },
          "reciteFlashcards": [
            {
              "q": "What does a system with parallel lines have as a solution?",
              "a": "No solution (lines never intersect)."
            }
          ],
          "amtQuiz": [
            {
              "q": "If x + y = 10 and x - y = 4, what is the value of x?",
              "options": [
                "7",
                "3",
                "6",
                "5"
              ],
              "correct": 0,
              "strategy": "Add both equations together to eliminate y.",
              "derivation": "2x = 14 ➔ x = 7. (And y = 3).",
              "trap": "Selecting y = 3 instead of x!"
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u4",
      "number": "Unit 4",
      "title": "Similar Figures & Theorems on Triangles",
      "bigIdea": "Explore scale factors, similarity criteria (AAA, SAS, SSS), and area ratios of similar polygons.",
      "subtopics": [
        {
          "id": "g8-m-4.1",
          "code": "4.1",
          "title": "Similar Triangles & Scale Factors",
          "survey": {
            "blueprint": "Definition of similarity (~), proportional side ratios, and ratio of areas = k².",
            "objectives": [
              "Apply similarity theorems (AAA, SAS, SSS) to find missing side lengths.",
              "Calculate areas of similar figures using the square of the scale factor: Area₁ / Area₂ = k²."
            ],
            "keyFormulas": "Side Ratio = k ➔ Area Ratio = k²"
          },
          "questions": [
            "If the side lengths of a triangle are doubled, by what factor does the area increase?",
            "What is the difference between congruent figures (≅) and similar figures (~)?"
          ],
          "coreNotes": "\n                    <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                      <h4 class=\"font-bold text-emerald-400\">The k² Area Law</h4>\n                      <p>If two figures are similar with linear scale factor k:<br>\n                      • Perimeter ratio = k<br>\n                      • Area ratio = k²<br>\n                      • Volume ratio = k³</p>\n                    </div>\n                  ",
          "example": {
            "title": "Calculating Unknown Side in Similar Triangles",
            "problem": "Triangle ABC is similar to Triangle DEF. AB = 6 cm, BC = 8 cm. If DE = 15 cm, find the length of EF.",
            "steps": [
              {
                "label": "Step 1: Set up proportional ratios",
                "text": "AB / DE = BC / EF ➔ 6 / 15 = 8 / EF."
              },
              {
                "label": "Step 2: Cross-multiply",
                "text": "6 × EF = 15 × 8<br>6 × EF = 120."
              },
              {
                "label": "Step 3: Solve",
                "text": "EF = 120 / 6 = <strong>20 cm</strong>."
              }
            ],
            "proTip": "Always align corresponding sides in the same numerator and denominator order!"
          },
          "reciteFlashcards": [
            {
              "q": "If scale factor k = 3, what is the ratio of their areas?",
              "a": "k² = 3² = 9."
            }
          ],
          "amtQuiz": [
            {
              "q": "Two similar triangles have a side ratio of 2 : 5. If the smaller triangle has an area of 16 cm², what is the area of the larger triangle?",
              "options": [
                "40 cm²",
                "100 cm²",
                "64 cm²",
                "25 cm²"
              ],
              "correct": 1,
              "strategy": "Area ratio is (2/5)² = 4/25. Set up 16 / Area = 4 / 25.",
              "derivation": "4 × Area = 16 × 25 = 400 ➔ Area = 100 cm².",
              "trap": "Using the linear ratio 2:5 to get 40 cm²!"
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u5",
      "number": "Unit 5",
      "title": "Circles & Angle Properties",
      "bigIdea": "Study central angles, inscribed angles, chords, and the tangent-radius perpendicularity theorem.",
      "subtopics": [
        {
          "id": "g8-m-5.1",
          "code": "5.1",
          "title": "Central Angles, Inscribed Angles & Tangents",
          "survey": {
            "blueprint": "Inscribed angle theorem: Angle at circumference = ½ angle at center subtended by the same arc.",
            "objectives": [
              "Apply the Inscribed Angle Theorem: ∠Inscribed = ½ ∠Central.",
              "Apply Thales' Theorem: Angle inscribed in a semicircle is ALWAYS 90°.",
              "Apply Tangent Theorem: Tangent is perpendicular to radius at point of contact (90°)."
            ],
            "keyFormulas": "∠Inscribed = ½ ∠Central &nbsp;|&nbsp; Semicircle ∠ = 90°"
          },
          "questions": [
            "What is the measure of an angle inscribed in a semicircle?",
            "If a central angle is 80°, what is the measure of an inscribed angle on the same arc?"
          ],
          "coreNotes": "\n                    <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                      <h4 class=\"font-bold text-amber-400\">Key Circle Theorems</h4>\n                      <p>• <strong>Inscribed Angle:</strong> The angle subtended by an arc at the center is TWICE the angle subtended by it at any point on the circumference.<br>\n                      • <strong>Thales' Theorem:</strong> Any angle inscribed in a semicircle is a right angle (90°).<br>\n                      • <strong>Radius-Tangent:</strong> A tangent to a circle is perpendicular to the radius at the point of tangency (90°).</p>\n                    </div>\n                  ",
          "example": {
            "title": "Solving Circle Angle with Central and Inscribed Theorems",
            "problem": "In a circle with center O, arc AB subtends a central angle ∠AOB = 110°. Point C lies on the circumference. Find the measure of inscribed angle ∠ACB.",
            "steps": [
              {
                "label": "Step 1: Apply inscribed angle theorem",
                "text": "∠ACB = ½ × ∠AOB."
              },
              {
                "label": "Step 2: Calculate",
                "text": "∠ACB = ½ × 110° = <strong>55°</strong>."
              }
            ],
            "proTip": "The angle at the center is always larger (double the circumference angle)!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the angle inscribed in a semicircle?",
              "a": "90 degrees."
            },
            {
              "q": "At what angle does a tangent line meet the radius?",
              "a": "90 degrees (perpendicular)."
            }
          ],
          "amtQuiz": [
            {
              "q": "An inscribed angle in a circle measures 38°. What is the measure of the central angle subtending the same arc?",
              "options": [
                "19°",
                "38°",
                "76°",
                "90°"
              ],
              "correct": 2,
              "strategy": "Central angle = 2 × inscribed angle.",
              "derivation": "Central angle = 2 × 38° = 76°.",
              "trap": "Dividing by 2 to get 19° (confusing central with inscribed)!"
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u6",
      "number": "Unit 6",
      "title": "Introduction to Probability",
      "bigIdea": "Calculate theoretical probabilities of events, sample spaces, and compound complementary events.",
      "subtopics": [
        {
          "id": "g8-m-6.1",
          "code": "6.1",
          "title": "Sample Spaces & Probability of Simple Events",
          "survey": {
            "blueprint": "Probability scale from 0 (impossible) to 1 (certain), P(E) = n(E) / n(S), complementary rule P(E') = 1 - P(E).",
            "objectives": [
              "List sample space S for rolling dice and tossing coins.",
              "Calculate probability of mutually exclusive events."
            ],
            "keyFormulas": "P(E) = n(E) / n(S) &nbsp;|&nbsp; P(not E) = 1 - P(E)"
          },
          "questions": [
            "Can a probability ever be negative or greater than 1?",
            "What is the probability of rolling a prime number on a standard 6-sided die?"
          ],
          "coreNotes": "\n                    <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                      <h4 class=\"font-bold text-indigo-400\">Probability Axioms</h4>\n                      <p>• 0 ≤ P(E) ≤ 1 for any event E.<br>\n                      • P(S) = 1 (certain event).<br>\n                      • P(∅) = 0 (impossible event).<br>\n                      • P(E') = 1 − P(E) (complementary event).</p>\n                    </div>\n                  ",
          "example": {
            "title": "Die Roll Prime Number Probability",
            "problem": "A standard fair 6-sided die is rolled once. Find the probability of getting: (a) A prime number, and (b) A number greater than 4.",
            "steps": [
              {
                "label": "Step 1: Define Sample Space",
                "text": "S = {1, 2, 3, 4, 5, 6}. Total n(S) = 6."
              },
              {
                "label": "Step 2: Prime outcomes",
                "text": "Prime numbers are 2, 3, 5 (1 is not prime!). Favorable n(E) = 3.<br>P(Prime) = 3/6 = <strong>1/2</strong>."
              },
              {
                "label": "Step 3: Greater than 4 outcomes",
                "text": "Numbers > 4 are 5, 6. Favorable = 2.<br>P(> 4) = 2/6 = <strong>1/3</strong>."
              }
            ],
            "proTip": "1 is neither prime nor composite!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the sum of probabilities of all outcomes in a sample space?",
              "a": "1."
            },
            {
              "q": "If P(Rain) = 0.35, what is P(No Rain)?",
              "a": "1 - 0.35 = 0.65."
            }
          ],
          "amtQuiz": [
            {
              "q": "A bag contains 5 red, 3 blue, and 2 green marbles. One marble is drawn at random. What is the probability that it is NOT red?",
              "options": [
                "1/2",
                "3/10",
                "7/10",
                "1/5"
              ],
              "correct": 0,
              "strategy": "Total marbles = 10. Not red = 3 blue + 2 green = 5.",
              "derivation": "P(Not Red) = 5 / 10 = 1/2.",
              "trap": "Finding P(Red) = 5/10 which happens to equal 1/2 here, but always ensure correct favorable count!"
            }
          ]
        }
      ]
    },
    {
      "id": "g8-m-u7",
      "number": "Unit 7",
      "title": "3D Solid Figures (Pyramids, Cones, Spheres)",
      "bigIdea": "Calculate surface areas and volumes of regular pyramids, right circular cones, and spheres.",
      "subtopics": [
        {
          "id": "g8-m-7.1",
          "code": "7.1",
          "title": "Pyramids, Cones & Spheres Formulas",
          "survey": {
            "blueprint": "Volume of Pyramids & Cones = ⅓ Base Area × Height; Sphere Volume = 4/3 πr³; Sphere Surface Area = 4πr².",
            "objectives": [
              "Calculate volume of a cone: V = ⅓πr²h.",
              "Calculate surface area and volume of spheres."
            ],
            "keyFormulas": "V_cone = ⅓πr²h &nbsp;|&nbsp; V_sphere = 4/3 πr³ &nbsp;|&nbsp; A_sphere = 4πr²"
          },
          "questions": [
            "How is the volume of a cone related to the volume of a cylinder with the same radius and height?",
            "What is the formula for the surface area of a sphere?"
          ],
          "coreNotes": "\n                    <div class=\"p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2\">\n                      <h4 class=\"font-bold text-amber-400\">3D Solid Volumes Summary</h4>\n                      <p>• <strong>Cone:</strong> V = ⅓πr²h (exactly one-third of cylinder).<br>\n                      • <strong>Square Pyramid:</strong> V = ⅓s²h.<br>\n                      • <strong>Sphere:</strong> V = 4/3 πr³ and Surface Area = 4πr².</p>\n                    </div>\n                  ",
          "example": {
            "title": "Calculating Volume of a Right Circular Cone",
            "problem": "A cone has a radius of 6 cm and a vertical height of 14 cm. Calculate its volume. (Use π = 22/7).",
            "steps": [
              {
                "label": "Step 1: State formula",
                "text": "V = ⅓ × π × r² × h."
              },
              {
                "label": "Step 2: Substitute values",
                "text": "V = ⅓ × (22/7) × (6²) × 14 = ⅓ × (22/7) × 36 × 14."
              },
              {
                "label": "Step 3: Simplify",
                "text": "14 / 7 = 2. And 36 / 3 = 12.<br>V = 22 × 12 × 2 = <strong>528 cm³</strong>."
              }
            ],
            "proTip": "Always cancel common factors (like 14/7 and 36/3) before multiplying!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the surface area of a sphere of radius r?",
              "a": "4πr²."
            },
            {
              "q": "What fraction of a cylinder's volume is a cone with equal radius and height?",
              "a": "1/3."
            }
          ],
          "amtQuiz": [
            {
              "q": "Calculate the volume of a sphere with radius 3 cm (Leave answer in terms of π).",
              "options": [
                "36π cm³",
                "12π cm³",
                "27π cm³",
                "108π cm³"
              ],
              "correct": 0,
              "strategy": "V = (4/3) × π × r³.",
              "derivation": "V = (4/3) × π × 27 = 4 × 9 × π = 36π cm³.",
              "trap": "Squaring radius instead of cubing it gives 12π!"
            }
          ]
        }
      ]
    }
  ]
};
