const fs = require('fs');
const path = require('path');

console.log('Generating Deep Grade 7 Mathematics module strictly adhering to ethiopia-grade7-8-study-notes skill...');

const g7Math = {
  id: 'math',
  name: 'Mathematics',
  icon: '📐',
  units: [
    {
      id: 'g7-m-u1',
      number: 'Unit 1',
      title: 'Basic Concepts of Sets',
      bigIdea: 'Understand set definitions, roster vs set-builder notation, membership (∈, ∉), subsets (⊆), empty set (∅), union (∪), intersection (∩), and complement (A′).',
      subtopics: [
        {
          id: 'g7-m-1.1',
          code: '1.1',
          title: 'Sets, Elements and Notations (Roster & Set-Builder)',
          survey: {
            blueprint: 'Directly from skill booklet. Set: well-defined collection of objects. Element: object in a set. Naming: capital letters and braces { }. Roster form: elements listed, e.g. {1, 2, 3}. Set-builder form: rule, e.g. {x | x is a natural number less than 5}. ∈ (element of) vs ∉ (not an element of). ∅ (empty/null set). Finite vs Infinite sets.',
            objectives: [
              'Define a set as a well-defined collection of objects.',
              'Express sets in roster form and set-builder notation.',
              'Use set symbols: ∈, ∉, ∅, and distinguish finite from infinite sets.'
            ],
            keyFormulas: 'Roster: A = {2, 4, 6, 8} | Set-Builder: A = {x | x is an even natural number, x ≤ 8} | x ∈ A vs y ∉ A'
          },
          questions: [
            'What does it mean for a collection of objects to be "well-defined"?',
            'How do we convert a set written in set-builder form into roster form?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">📦 1. Definition and Representation of Sets</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Set:</strong> A <strong>well-defined collection of objects</strong>. "Well-defined" means there is an unambiguous rule that determines whether any given object belongs to the collection or not.<br>
                  • <strong>Element (Member):</strong> An individual object belonging to a set. Symbol: <strong>∈</strong> ("is an element of"); <strong>∉</strong> ("is not an element of").<br>
                  • <strong>Naming Sets:</strong> Represented by capital letters (A, B, S) and enclosed in braces { }.<br>
                  • <strong>Roster (Listing) Form:</strong> All elements are explicitly listed, separated by commas. Example: <code class="text-cyan-300">A = {1, 2, 3, 4, 5}</code>.<br>
                  • <strong>Set-Builder (Rule) Form:</strong> Specified by stating the defining property or rule satisfied by all members. Example: <code class="text-emerald-300">A = {x | x is a natural number less than or equal to 5}</code>.
                </p>
              </div>
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-cyan-400">🔢 2. Types of Sets</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-rose-300">Empty (Null) Set (∅ or { }):</strong><br>
                    A set containing zero elements. Example: {x | x is an odd number divisible by 2} = ∅.
                  </div>
                  <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-amber-300">Finite vs. Infinite Sets:</strong><br>
                    • <em>Finite:</em> Countable number of elements (e.g. days of the week).<br>
                    • <em>Infinite:</em> Unlimited elements that never terminate (e.g. natural numbers N = {1, 2, 3, ...}).
                  </div>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Roster and Set-Builder Conversion',
            problem: 'Express the set P of all prime numbers less than 15 in both Roster form and Set-builder form. Is 9 ∈ P?',
            steps: [
              {
                label: 'Step 1: Determine prime numbers less than 15',
                text: 'Primes have exactly two distinct factors (1 and itself): 2, 3, 5, 7, 11, 13.'
              },
              {
                label: 'Step 2: Write in Roster form',
                text: '<strong>P = {2, 3, 5, 7, 11, 13}</strong>.'
              },
              {
                label: 'Step 3: Write in Set-builder form',
                text: '<strong>P = {x | x is a prime number and x < 15}</strong>.'
              },
              {
                label: 'Step 4: Check membership of 9',
                text: '9 = 1 × 9 = 3 × 3 (composite, 3 factors). Therefore, <strong>9 ∉ P</strong>.'
              }
            ],
            proTip: 'Remember that 1 is neither prime nor composite, and 2 is the only even prime number!'
          },
          reciteFlashcards: [
            { q: 'What is a set?', a: 'A well-defined collection of objects.' },
            { q: 'What does the symbol ∈ mean in mathematics?', a: 'Is an element of (belongs to).' },
            { q: 'What is an empty set and what symbol denotes it?', a: 'A set containing no elements, denoted by ∅ or { }.' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q25: What is the mathematical symbol used to denote that an object "is an element of" a set?',
              options: ['⊆', '∉', '∈', '∪'],
              correct: 2,
              strategy: 'Booklet Key: ∈ represents "is an element of".',
              derivation: 'The symbol ∈ indicates set membership (e.g., 3 ∈ {1, 2, 3}).',
              trap: 'Confusing ∈ (element of) with ⊆ (subset of).'
            }
          ]
        },
        {
          id: 'g7-m-1.2',
          code: '1.2',
          title: 'Subsets, Universal Sets, Operations (∪, ∩) and Complements',
          survey: {
            blueprint: 'Directly from skill booklet. Subset A ⊆ B: every element of A is in B. Universal set U. Union A ∪ B: elements in A or B or both. Intersection A ∩ B: common elements. Complement A′: elements in universal set U but not in A. Worked booklet problems.',
            objectives: [
              'Determine if set A is a subset of set B (A ⊆ B).',
              'Find the union (A ∪ B) and intersection (A ∩ B) of two sets.',
              'Calculate the complement of a set (A′) relative to universal set U.'
            ],
            keyFormulas: 'A ⊆ B ⇔ (∀x ∈ A ⇒ x ∈ B) | A ∪ B = {x | x ∈ A or x ∈ B} | A ∩ B = {x | x ∈ A and x ∈ B} | A′ = U \\ A'
          },
          questions: [
            'What is the difference between the union and the intersection of two sets?',
            'How is the complement A′ calculated when given a universal set U?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">🤝 1. Subsets and Universal Sets</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Subset (A ⊆ B):</strong> Set A is a subset of set B if <strong>every element of A is also an element of B</strong>. Example: If A = {1, 2} and B = {1, 2, 3}, then A ⊆ B.<br>
                  • <strong>Universal Set (U):</strong> The set containing all possible elements under consideration in a given mathematical context.
                </p>
              </div>
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-cyan-400">⚡ 2. Set Operations: Union, Intersection, and Complement</h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Union (A ∪ B):</strong> The set of all elements that belong to <strong>A or B or both</strong>. Combine all elements without repeating duplicates.<br>
                  <em>Example:</em> If A = {1, 2, 3} and B = {3, 4, 5}, then <strong>A ∪ B = {1, 2, 3, 4, 5}</strong>.</p>
                  <p>• <strong>Intersection (A ∩ B):</strong> The set of all elements that are <strong>common to both A and B</strong>.<br>
                  <em>Example:</em> If A = {1, 2, 3} and B = {3, 4, 5}, then <strong>A ∩ B = {3}</strong>.<br>
                  If A ∩ B = ∅, the sets are called <strong>disjoint</strong>.</p>
                  <p>• <strong>Complement (A′):</strong> The set of all elements that belong to the universal set U <strong>but not to A</strong>.<br>
                  <em>Example:</em> If U = {1, 2, 3, 4, 5, 6} and A = {2, 4, 6}, then <strong>A′ = {1, 3, 5}</strong>.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Official Booklet Problem on Union, Intersection & Complement',
            problem: 'Given U = {1, 2, 3, 4, 5, 6, 7, 8}, A = {2, 4, 6, 8}, and B = {1, 2, 3, 4}: Find: (a) A ∩ B, (b) A ∪ B, and (c) A′.',
            steps: [
              {
                label: 'Step 1: Find Intersection A ∩ B',
                text: 'Common elements in both A and B are 2 and 4. Thus, <strong>A ∩ B = {2, 4}</strong>.'
              },
              {
                label: 'Step 2: Find Union A ∪ B',
                text: 'Combine all unique elements: <strong>A ∪ B = {1, 2, 3, 4, 6, 8}</strong>.'
              },
              {
                label: 'Step 3: Find Complement A′',
                text: 'Take elements in U that are not in A: <strong>A′ = {1, 3, 5, 7}</strong>.'
              }
            ],
            proTip: 'Never duplicate elements in union; write each element exactly once!'
          },
          reciteFlashcards: [
            { q: 'What is A ∩ B?', a: 'The intersection of A and B: the set of elements common to both sets.' },
            { q: 'If U = {1, 2, 3, 4, 5} and A = {1, 3, 5}, what is A′?', a: 'A′ = {2, 4}.' },
            { q: 'Is {1, 2} ⊆ {1, 2, 3}?', a: 'Yes, because every element in {1, 2} belongs to {1, 2, 3}.' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q1: If set A = {1, 2, 3} and set B = {3, 4}, what is A ∩ B?',
              options: ['{1, 2, 3, 4}', '{3}', '{1, 2}', '∅'],
              correct: 1,
              strategy: 'Booklet Key: A ∩ B is the element shared by both sets, which is 3.',
              derivation: 'The only element appearing in both set A and set B is 3. Hence A ∩ B = {3}.',
              trap: 'Confusing intersection ∩ ({3}) with union ∪ ({1, 2, 3, 4}).'
            },
            {
              q: 'Official CBA Exam Q2: If universal set U = {1, 2, 3, 4, 5} and set A = {2, 4}, what is the complement A′?',
              options: ['{1, 3, 5}', '{2, 4}', '{1, 2, 3, 4, 5}', '∅'],
              correct: 0,
              strategy: 'Booklet Key: A′ = U \\ A = {1, 3, 5}.',
              derivation: 'Removing {2, 4} from U leaves the odd integers {1, 3, 5}.',
              trap: 'Listing A instead of its complement.'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-m-u2',
      number: 'Unit 2',
      title: 'Integers and Signed Number Arithmetic',
      bigIdea: 'Understand the set of integers (Z), number line direction, absolute value (|a|), and arithmetic rules for adding, subtracting, multiplying, and dividing positive and negative numbers.',
      subtopics: [
        {
          id: 'g7-m-2.1',
          code: '2.1',
          title: 'Integers, Number Line & Absolute Value',
          survey: {
            blueprint: 'Directly from skill booklet. Integers Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}. Number line: movement right = greater, movement left = lesser. Absolute value |a| = distance from 0, never negative. Worked examples: |-11| = 11, |-19| = 19.',
            objectives: [
              'Locate and compare integers on the number line.',
              'Define absolute value as distance from zero.',
              'Evaluate expressions containing absolute value bars.'
            ],
            keyFormulas: '|a| = a if a ≥ 0 | |a| = -a if a < 0 | Distance is always ≥ 0'
          },
          questions: [
            'Why is the absolute value of a non-zero integer always positive?',
            'Why is -5 greater than -10 on the number line?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">📏 1. The Set of Integers (Z)</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Integers (Z):</strong> The set consisting of negative whole numbers, zero, and positive whole numbers:<br>
                  <code class="text-cyan-300">Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}</code><br>
                  • <strong>Number Line Ordering:</strong> Numbers to the right are always greater than numbers to the left. Since -5 lies to the right of -10, we have <strong>-5 > -10</strong>.
                </p>
              </div>
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-emerald-400">📐 2. Absolute Value (|a|)</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Definition:</strong> The <strong>absolute value</strong> of an integer <em>a</em>, denoted by <strong>|a|</strong>, is its geometric <strong>distance from 0</strong> on the number line.<br>
                  • <strong>Non-Negative Property:</strong> Because distance is never negative, <code class="text-amber-300">|a| ≥ 0</code> for all integers.<br>
                  • <em>Booklet Examples:</em> <code class="text-cyan-300">|7| = 7</code>, <code class="text-cyan-300">|-11| = 11</code>, <code class="text-cyan-300">|-17| = 17</code>, <code class="text-cyan-300">|0| = 0</code>.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Absolute Value Arithmetic',
            problem: 'Evaluate: |-15| - |7| + |-8|.',
            steps: [
              {
                label: 'Step 1: Evaluate each absolute value',
                text: '|-15| = 15, |7| = 7, |-8| = 8.'
              },
              {
                label: 'Step 2: Substitute and calculate',
                text: '15 - 7 + 8 = 8 + 8 = <strong>16</strong>.'
              }
            ],
            proTip: 'Evaluate what is inside absolute value bars first before doing operations outside!'
          },
          reciteFlashcards: [
            { q: 'What is absolute value geometrically?', a: 'The distance of a number from zero on the number line (never negative).' },
            { q: 'What is |-17|?', a: '17.' },
            { q: 'Which is larger: -3 or -8?', a: '-3 (it is further right on the number line).' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q6: What is the exact value of |-17|?',
              options: ['-17', '17', '0', '1/17'],
              correct: 1,
              strategy: 'Booklet Key: distance from zero is 17.',
              derivation: 'Absolute value represents distance from 0 on the number line, which is always non-negative: |-17| = 17.',
              trap: 'Retaining the negative sign.'
            }
          ]
        },
        {
          id: 'g7-m-2.2',
          code: '2.2',
          title: 'Operations on Integers (+, -, ×, ÷)',
          survey: {
            blueprint: 'Directly from skill booklet operations table. Addition with same signs (add absolute values, keep sign). Addition with different signs (subtract absolute values, keep sign of larger absolute value). Subtraction: a - b = a + (-b). Multiplication/Division: same signs = positive; different signs = negative. Official worked booklet problems.',
            objectives: [
              'Add and subtract signed integers with identical and opposing signs.',
              'Convert integer subtraction into addition of the additive inverse: a - b = a + (-b).',
              'Multiply and divide integers applying the sign rules.'
            ],
            keyFormulas: 'a - b = a + (-b) | (+) × (+) = (+) | (-) × (-) = (+) | (+) × (-) = (-) | (-) ÷ (-) = (+)'
          },
          questions: [
            'Why does subtracting a negative integer equal adding a positive integer?',
            'What is the sign of the product when multiplying an odd number of negative integers?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">📋 Official Operations Rules Table</h4>
                <div class="overflow-x-auto text-xs text-slate-300">
                  <table class="w-full text-left border-collapse">
                    <thead>
                      <tr class="border-b border-slate-800 text-cyan-400">
                        <th class="p-2">Operation</th>
                        <th class="p-2">Official Booklet Rule</th>
                        <th class="p-2">Worked Example</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-850">
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Add, same signs</td>
                        <td class="p-2">Add absolute values, keep common sign</td>
                        <td class="p-2">(-15) + (-7) = -22</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Add, different signs</td>
                        <td class="p-2">Subtract absolute values, keep sign of larger absolute value</td>
                        <td class="p-2">-8 + 13 = 5</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Subtract</td>
                        <td class="p-2">Change to adding the opposite: <strong>a - b = a + (-b)</strong></td>
                        <td class="p-2">-12 - (-5) = -12 + 5 = -7</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Multiply/Divide, same signs</td>
                        <td class="p-2">Result is always <strong>Positive (+)</strong></td>
                        <td class="p-2">(-6) × (-4) = 24 &nbsp;|&nbsp; (-48) ÷ (-6) = 8</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Multiply/Divide, different signs</td>
                        <td class="p-2">Result is always <strong>Negative (-)</strong></td>
                        <td class="p-2">(-7) × 4 = -28 &nbsp;|&nbsp; 36 ÷ (-9) = -4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Multi-Step Signed Arithmetic',
            problem: 'Evaluate step-by-step: -14 + 9 - (-3).',
            steps: [
              {
                label: 'Step 1: Rewrite subtraction as addition of inverse',
                text: '-14 + 9 - (-3) = -14 + 9 + 3.'
              },
              {
                label: 'Step 2: Perform addition from left to right',
                text: '-14 + 9 = -5.'
              },
              {
                label: 'Step 3: Add remaining positive 3',
                text: '-5 + 3 = <strong>-2</strong>.'
              }
            ],
            proTip: 'Two minus signs together "- (-b)" always become a plus "+ b"!'
          },
          reciteFlashcards: [
            { q: 'CBA Q3: What is -8 + 13?', a: '5.' },
            { q: 'CBA Q4: What is -12 - (-5)?', a: '-7.' },
            { q: 'CBA Q5: What is (-6) × (-4)?', a: '24.' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q4: Evaluate the expression: -12 - (-5)',
              options: ['-17', '-7', '7', '17'],
              correct: 1,
              strategy: 'Booklet Key: -12 - (-5) = -12 + 5 = -7.',
              derivation: 'Subtracting a negative is adding a positive: -12 + 5 = -7.',
              trap: 'Thinking -12 - 5 = -17 by missing the double negative.'
            },
            {
              q: 'Official CBA Exam Q5: What is the product of (-6) × (-4)?',
              options: ['-24', '24', '-10', '10'],
              correct: 1,
              strategy: 'Booklet Key: multiplying two negative numbers yields a positive product.',
              derivation: 'Negative times negative gives positive: (-6) × (-4) = +24.',
              trap: 'Giving a negative sign to the product of two negatives.'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-m-u3',
      number: 'Unit 3',
      title: 'Linear Equations and Inequalities',
      bigIdea: 'Solve one-step and two-step linear equations using inverse operations, verify by substitution, solve inequalities, and apply the negative multiplier sign-flip rule.',
      subtopics: [
        {
          id: 'g7-m-3.1',
          code: '3.1',
          title: 'Solving One-Step & Two-Step Linear Equations',
          survey: {
            blueprint: 'Directly from skill booklet. Solution: value making equation true. Inverse operations: + undoes -, × undoes ÷. Golden rule: perform identical operation on both sides. Two-step: undo +/- first, then undo ×/÷. Verification by substituting back.',
            objectives: [
              'Solve one-step linear equations using inverse operations.',
              'Solve two-step linear equations: undo addition/subtraction, then multiplication/division.',
              'Check answers by substituting the root back into the original equation.'
            ],
            keyFormulas: 'ax + b = c ⇒ ax = c - b ⇒ x = (c - b) ÷ a | Always check: Substitute x into LHS'
          },
          questions: [
            'Why must we perform the exact same operation on both sides of an equation?',
            'What is the correct order of inverse operations when solving 2x + 5 = 17?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">⚖️ 1. Concept of an Equation and Balance</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Linear Equation:</strong> An algebraic statement that two expressions are equal, containing a variable to the first power (e.g. 2x + 5 = 17).<br>
                  • <strong>Solution (Root):</strong> The specific numerical value of the variable that makes the equation true.<br>
                  • <strong>Golden Balance Rule:</strong> Whatever operation is applied to the Left-Hand Side (LHS), <strong>the exact same operation must be applied to the Right-Hand Side (RHS)</strong> to preserve equality.
                </p>
              </div>
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-cyan-400">🪜 2. Two-Step Equation Solving Procedure</h4>
                <div class="space-y-1 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Step 1:</strong> Undo addition or subtraction first using inverse operations.</p>
                  <p>• <strong>Step 2:</strong> Undo multiplication or division second to isolate the variable.</p>
                  <p>• <strong>Step 3: Verification:</strong> Substitute the obtained value back into the original equation to verify that LHS = RHS.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Official Booklet Problem on Linear Equations',
            problem: 'Solve and check: 4x - 7 = 21.',
            steps: [
              {
                label: 'Step 1: Undo subtraction by adding 7 to both sides',
                text: '4x - 7 + 7 = 21 + 7 ⇒ <strong>4x = 28</strong>.'
              },
              {
                label: 'Step 2: Undo multiplication by dividing both sides by 4',
                text: '4x ÷ 4 = 28 ÷ 4 ⇒ <strong>x = 7</strong>.'
              },
              {
                label: 'Step 3: Check by substitution',
                text: 'LHS = 4(7) - 7 = 28 - 7 = 21. LHS = RHS (Verified!).'
              }
            ],
            proTip: 'Always verify equations by substituting back into the LHS!'
          },
          reciteFlashcards: [
            { q: 'CBA Q7: Solve x + 8 = 20.', a: 'x = 12.' },
            { q: 'CBA Q8: Solve 3x = 27.', a: 'x = 9.' },
            { q: 'CBA Q9: Solve 2x + 5 = 17.', a: 'x = 6.' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q9: What is the solution to the linear equation: 2x + 5 = 17?',
              options: ['x = 11', 'x = 6', 'x = 12', 'x = 8'],
              correct: 1,
              strategy: 'Booklet Key: 2x = 17 - 5 = 12; x = 12 / 2 = 6.',
              derivation: 'Subtract 5 from both sides: 2x = 12. Divide by 2: x = 6.',
              trap: 'Adding 5 instead of subtracting, giving 2x = 22 → x = 11.'
            },
            {
              q: 'Official CBA Exam Q10: Solve the linear equation: 5x - 10 = 20',
              options: ['x = 2', 'x = 6', 'x = 10', 'x = 4'],
              correct: 1,
              strategy: 'Booklet Key: 5x = 30; x = 6.',
              derivation: 'Add 10 to both sides: 5x = 30. Divide both sides by 5: x = 6.',
              trap: 'Subtracting 10 from 20 to get 5x = 10 → x = 2.'
            }
          ]
        },
        {
          id: 'g7-m-3.2',
          code: '3.2',
          title: 'Solving Linear Inequalities & The Negative Flip Rule',
          survey: {
            blueprint: 'Directly from skill booklet. Inequality symbols: <, >, ≤, ≥. Solved like equations with ONE critical exception: REVERSE the inequality sign when multiplying or dividing by a negative number (-2x > 8 → x < -4). Number line representation: open circle for < or >, closed circle for ≤ or ≥.',
            objectives: [
              'Solve linear inequalities in one variable.',
              'Apply the negative multiplier/divisor inequality sign reversal rule.',
              'Graph inequality solution sets on a continuous number line with open/closed circles.'
            ],
            keyFormulas: '-cx < d ⇒ x > -d/c (FLIP!) | Open circle ○ for <, > | Closed circle ● for ≤, ≥'
          },
          questions: [
            'Why does multiplying or dividing an inequality by a negative number reverse the direction of the sign?',
            'What is the graphical difference between an open circle and a closed circle on a number line?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-rose-400">⚠️ 1. The Golden Negative Flip Rule</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Inequality Symbols:</strong> <strong>&lt;</strong> (less than), <strong>&gt;</strong> (greater than), <strong>≤</strong> (less than or equal to), <strong>≥</strong> (greater than or equal to).<br>
                  • <strong>The Critical Exception:</strong> You solve inequalities just like linear equations, EXCEPT: <strong>Whenever you multiply or divide both sides by a negative number, you MUST reverse (flip) the inequality symbol!</strong><br>
                  <em>Example:</em> <code class="text-amber-300">-2x &gt; 8 ⇒ x &lt; -4</code> (the &gt; flips to &lt;!).
                </p>
              </div>
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-cyan-400">⭕ 2. Number Line Graphing</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-cyan-300">Open Circle (○):</strong><br>
                    Used for strict inequalities <strong>&lt;</strong> and <strong>&gt;</strong>.<br>
                    Indicates that the endpoint is <em>NOT included</em> in the solution set.
                  </div>
                  <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-emerald-300">Closed Circle (●):</strong><br>
                    Used for inclusive inequalities <strong>≤</strong> and <strong>≥</strong>.<br>
                    Indicates that the endpoint <em>IS included</em> in the solution set.
                  </div>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Official Booklet Problem on Flipping Inequalities',
            problem: 'Solve: -5x + 10 ≥ 25 and graph the solution concept.',
            steps: [
              {
                label: 'Step 1: Subtract 10 from both sides',
                text: '-5x + 10 - 10 ≥ 25 - 10 ⇒ <strong>-5x ≥ 15</strong>.'
              },
              {
                label: 'Step 2: Divide by negative 5 and REVERSE sign',
                text: 'x ≤ 15 ÷ (-5) ⇒ <strong>x ≤ -3</strong> (note: ≥ flipped to ≤!).'
              },
              {
                label: 'Step 3: Graphing interpretation',
                text: 'Place a <strong>closed solid circle at -3</strong> and shade the arrow pointing to the left.'
              }
            ],
            proTip: 'Forgetting to flip the sign when dividing by a negative is the #1 error on the national exam!'
          },
          reciteFlashcards: [
            { q: 'CBA Q11: Solve x + 4 < 10.', a: 'x < 6.' },
            { q: 'CBA Q12: Solve 3x ≥ 15.', a: 'x ≥ 5.' },
            { q: 'CBA Q13: Solve -2x > 8.', a: 'x < -4 (sign flips!).' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q13: What is the solution set of the linear inequality: -2x > 8?',
              options: ['x > -4', 'x < -4', 'x > 4', 'x < 4'],
              correct: 1,
              strategy: 'Booklet Key: dividing by -2 flips the > sign to <.',
              derivation: '-2x > 8 ⇒ x < 8 / (-2) ⇒ x < -4.',
              trap: 'Failing to reverse the inequality sign and choosing x > -4.'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-m-u4',
      number: 'Unit 4',
      title: 'Perimeter and Area of Plane Figures',
      bigIdea: 'Formulas and calculations for perimeter and area: rectangle, square, triangle, parallelogram, and trapezium, with strict unit discipline (linear units vs square units).',
      subtopics: [
        {
          id: 'g7-m-4.1',
          code: '4.1',
          title: 'Perimeter and Area Formulas & Unit Rules',
          survey: {
            blueprint: 'Directly from skill booklet. Formulas: Rectangle P=2(l+w), A=lw; Square P=4s, A=s²; Triangle P=sum, A=½bh; Parallelogram P=sum, A=bh; Trapezium P=sum, A=½(a+b)h. Unit rules: Perimeter uses length units (cm, m); Area uses square units (cm², m²). Official booklet worked problems.',
            objectives: [
              'Calculate the perimeter and area of rectangles, squares, and triangles.',
              'Calculate the area of parallelograms (A = bh) and trapeziums (A = ½(a+b)h).',
              'Apply strict unit discipline: linear units for perimeter, square units for area.'
            ],
            keyFormulas: 'Rectangle: A=lw, P=2(l+w) | Square: A=s², P=4s | Triangle: A=½bh | Trapezium: A=½(a+b)h'
          },
          questions: [
            'Why does perimeter always use linear units while area always uses square units?',
            'How is the area of a trapezium calculated from its two parallel bases and height?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">📐 1. Official Formulas Table</h4>
                <div class="overflow-x-auto text-xs text-slate-300">
                  <table class="w-full text-left border-collapse">
                    <thead>
                      <tr class="border-b border-slate-800 text-cyan-400">
                        <th class="p-2">Plane Figure</th>
                        <th class="p-2">Perimeter (P)</th>
                        <th class="p-2">Area (A)</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-850">
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Rectangle</td>
                        <td class="p-2">P = 2(l + w)</td>
                        <td class="p-2">A = l × w</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Square</td>
                        <td class="p-2">P = 4s</td>
                        <td class="p-2">A = s²</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Triangle</td>
                        <td class="p-2">P = sum of 3 sides</td>
                        <td class="p-2">A = ½ × b × h</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Parallelogram</td>
                        <td class="p-2">P = sum of 4 sides</td>
                        <td class="p-2">A = b × h</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-bold text-slate-200">Trapezium</td>
                        <td class="p-2">P = sum of 4 sides</td>
                        <td class="p-2">A = ½ × (a + b) × h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-rose-400">📏 2. Strict Unit Rules</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Perimeter:</strong> Measures boundary length. Expressed in <strong>plain length units</strong> (mm, cm, m, km).<br>
                  • <strong>Area:</strong> Measures 2D surface coverage. Expressed in <strong>square units</strong> (mm², cm², m², km²).<br>
                  • Always ensure all dimensions are converted to the same unit before calculating!
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Official Booklet Problem on Trapezium Area',
            problem: 'Calculate the area of a trapezium with parallel sides measuring 8 cm and 12 cm, and a perpendicular height of 5 cm.',
            steps: [
              {
                label: 'Step 1: Write formula',
                text: 'Area = ½ × (a + b) × h'
              },
              {
                label: 'Step 2: Substitute values',
                text: 'Area = ½ × (8 cm + 12 cm) × 5 cm = ½ × (20 cm) × 5 cm'
              },
              {
                label: 'Step 3: Calculate and state unit',
                text: 'Area = 10 cm × 5 cm = <strong>50 cm²</strong>.'
              }
            ],
            proTip: 'Always show formula, substitution, calculation, and square units cm²!'
          },
          reciteFlashcards: [
            { q: 'CBA Q14: Find the area of a rectangle with length 9 cm and width 4 cm.', a: 'A = 9 × 4 = 36 cm².' },
            { q: 'CBA Q15: Find the perimeter of a square with side length 7 cm.', a: 'P = 4 × 7 = 28 cm.' },
            { q: 'CBA Q16: Find the area of a triangle with base 12 cm and height 5 cm.', a: 'A = ½ × 12 × 5 = 30 cm².' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q14: What is the area of a rectangle measuring 9 cm in length and 4 cm in width?',
              options: ['26 cm', '36 cm²', '13 cm²', '36 cm'],
              correct: 1,
              strategy: 'Booklet Key: Area = l × w = 9 × 4 = 36 cm².',
              derivation: 'Area equals length times width: 9 cm × 4 cm = 36 cm².',
              trap: 'Confusing area (36 cm²) with perimeter 2(9+4) = 26 cm, or forgetting square units.'
            },
            {
              q: 'Official CBA Exam Q15: What is the perimeter of a square whose side measures 7 cm?',
              options: ['49 cm²', '28 cm', '28 cm²', '14 cm'],
              correct: 1,
              strategy: 'Booklet Key: Perimeter = 4s = 4 × 7 = 28 cm.',
              derivation: 'Perimeter of a square is 4 times its side: 4 × 7 = 28 cm (linear units).',
              trap: 'Confusing perimeter (28 cm) with area (49 cm²).'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-m-u5',
      number: 'Unit 5',
      title: 'Congruency of Plane Figures',
      bigIdea: 'Understand geometric congruence (same shape and size), rigid motions, triangle congruence criteria (SSS, SAS, ASA), and contrast with geometric similarity.',
      subtopics: [
        {
          id: 'g7-m-5.1',
          code: '5.1',
          title: 'Congruence vs. Similarity and Triangle Criteria (SSS, SAS, ASA)',
          survey: {
            blueprint: 'Directly from skill booklet. Congruent: same shape AND size (coincides by translation, rotation, reflection; corresponding sides and angles equal). Similar: same shape, size may differ. Criteria: SSS (three sides equal), SAS (two sides and included angle equal), ASA/AAS.',
            objectives: [
              'Define geometric congruency and differentiate from similarity.',
              'Explain rigid motions: translation, rotation, and reflection.',
              'Apply triangle congruence criteria: SSS, SAS, and ASA.'
            ],
            keyFormulas: 'Congruent: Same Shape AND Same Size (≅) | Similar: Same Shape, Proportional Size (~)'
          },
          questions: [
            'What is the precise mathematical difference between two congruent figures and two similar figures?',
            'What is the "included angle" in the SAS triangle congruence criterion?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">📐 1. Congruent vs. Similar Figures</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-emerald-300">Congruent Figures (≅):</strong><br>
                    • Exactly the <strong>same shape AND the same size</strong>.<br>
                    • One figure coincides exactly with the other through rigid transformations (translation, rotation, or reflection).<br>
                    • All corresponding sides are equal, and all corresponding angles are equal.
                  </div>
                  <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                    <strong class="text-cyan-300">Similar Figures (~):</strong><br>
                    • Have the <strong>same shape, but their sizes may differ</strong>.<br>
                    • Corresponding angles are equal, but corresponding sides are proportional (scaled up or down).
                  </div>
                </div>
              </div>
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-cyan-400">🔺 2. Triangle Congruence Criteria</h4>
                <ul class="text-xs sm:text-sm text-slate-300 space-y-1 list-disc list-inside">
                  <li><strong>SSS (Side-Side-Side):</strong> If all three sides of one triangle are equal to the three corresponding sides of another triangle, the triangles are congruent.</li>
                  <li><strong>SAS (Side-Angle-Side):</strong> If two sides and the <em>included angle</em> (the angle between the two sides) of one triangle are equal to two sides and the included angle of another triangle, they are congruent.</li>
                  <li><strong>ASA (Angle-Side-Angle):</strong> If two angles and the included side of one triangle are equal to two angles and the included side of another triangle, they are congruent.</li>
                </ul>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Official Booklet Problem on Triangle Congruence',
            problem: 'Triangle ABC has sides of 5 cm, 6 cm, and 7 cm. Triangle DEF also has sides of 5 cm, 6 cm, and 7 cm. Are they congruent, and by what criterion?',
            steps: [
              {
                label: 'Step 1: Compare corresponding side lengths',
                text: 'All three sides of triangle ABC are equal in length to all three sides of triangle DEF.'
              },
              {
                label: 'Step 2: Conclude congruence and criterion',
                text: 'Yes, triangle ABC ≅ triangle DEF by the <strong>SSS (Side-Side-Side)</strong> criterion.'
              }
            ],
            proTip: 'When all three sides are equal, cite SSS!'
          },
          reciteFlashcards: [
            { q: 'CBA Q17: What does it mean for two figures to be congruent?', a: 'They have exactly the same shape and the same size.' },
            { q: 'CBA Q18: What does the SSS criterion stand for?', a: 'Side-Side-Side (all three corresponding sides are equal).' },
            { q: 'How does congruency differ from similarity?', a: 'Congruent figures have the same shape and size; similar figures have the same shape but sizes may differ.' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q17: In Euclidean plane geometry, two figures are defined as "Congruent" if and only if they have:',
              options: [
                'The same shape, but strictly different areas',
                'Exactly the same shape and the same size',
                'Different numbers of sides but equal perimeters',
                'The same color and identical orientation'
              ],
              correct: 1,
              strategy: 'Booklet Key: same shape and same size.',
              derivation: 'Congruent figures can be superimposed onto one another by rigid motions, meaning they share identical shape and dimensions.',
              trap: 'Confusing congruency with similarity (same shape only).'
            },
            {
              q: 'Official CBA Exam Q18: Which triangle congruence condition asserts that two triangles are congruent if all three corresponding sides are equal?',
              options: ['Angle-Angle-Angle (AAA)', 'Side-Side-Side (SSS)', 'Side-Angle-Side (SAS)', 'Angle-Side-Angle (ASA)'],
              correct: 1,
              strategy: 'Booklet Key: SSS = Side-Side-Side.',
              derivation: 'The SSS theorem proves congruence when three sides of one triangle equal three sides of another.',
              trap: 'Assuming AAA, which proves only similarity, not congruence.'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-m-u6',
      number: 'Unit 6',
      title: 'Data Handling and Statistics',
      bigIdea: 'Qualitative vs quantitative data, frequency distributions, measures of central tendency (mean, median, mode), and dispersion (range).',
      subtopics: [
        {
          id: 'g7-m-6.1',
          code: '6.1',
          title: 'Mean, Median, Mode and Range',
          survey: {
            blueprint: 'Directly from skill booklet. Qualitative (categorical) vs Quantitative (numerical). Frequency: occurrences. Mean: sum ÷ count. Median: middle value when ordered (even count → average of two middle). Mode: most frequent value. Range: largest - smallest. Worked booklet problems.',
            objectives: [
              'Distinguish qualitative from quantitative data.',
              'Calculate the arithmetic mean of a data set.',
              'Determine the median, mode, and range of raw data.'
            ],
            keyFormulas: 'Mean = Σx ÷ n | Median = Middle Value (Ordered) | Range = Maximum - Minimum'
          },
          questions: [
            'How is the median calculated when a data set has an even number of values?',
            'What is the difference between the mean and the mode?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">📊 1. Data Classification</h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Qualitative Data:</strong> Descriptive non-numerical categories (e.g. eye color, blood type, favorite subject).<br>
                  • <strong>Quantitative Data:</strong> Numerical values obtained through counting or measuring (e.g. test scores, student heights, daily temperatures).<br>
                  • <strong>Frequency:</strong> The number of times a particular data value occurs in a data set.
                </p>
              </div>
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-cyan-400">📈 2. Measures of Central Tendency & Range</h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Mean (Average):</strong> The sum of all values divided by the total number of values.<br>
                  <code class="text-emerald-300">Mean = (Sum of values) ÷ (Number of values)</code></p>
                  <p>• <strong>Median:</strong> The middle value when data is arranged in ascending order.<br>
                  - <em>Odd count:</em> Exactly the single middle value.<br>
                  - <em>Even count:</em> The average (mean) of the two middle values.</p>
                  <p>• <strong>Mode:</strong> The value that occurs most frequently. A data set may have one mode (unimodal), more than one mode (bimodal/multimodal), or no mode if all values appear equally.</p>
                  <p>• <strong>Range:</strong> A measure of dispersion equal to the difference between the maximum and minimum values:<br>
                  <code class="text-rose-300">Range = Largest value - Smallest value</code></p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Official Booklet Data Calculation',
            problem: 'For the data set: 3, 5, 5, 7, 10, find: (a) Mean, (b) Median, (c) Mode, and (d) Range.',
            steps: [
              {
                label: 'Step 1: Calculate Mean',
                text: 'Sum = 3 + 5 + 5 + 7 + 10 = 30. Total values n = 5.<br>Mean = 30 ÷ 5 = <strong>6</strong>.'
              },
              {
                label: 'Step 2: Find Median',
                text: 'Data is already in order: 3, 5, [5], 7, 10. Middle value is <strong>5</strong>.'
              },
              {
                label: 'Step 3: Identify Mode',
                text: '5 occurs twice (most frequent). Mode = <strong>5</strong>.'
              },
              {
                label: 'Step 4: Calculate Range',
                text: 'Range = Largest - Smallest = 10 - 3 = <strong>7</strong>.'
              }
            ],
            proTip: 'Always order the data in ascending order before finding median or range!'
          },
          reciteFlashcards: [
            { q: 'CBA Q19: What is the mean of 2, 4, 6, 8?', a: '(2+4+6+8) ÷ 4 = 20 ÷ 4 = 5.' },
            { q: 'CBA Q20: What is the median of 1, 3, 5, 7, 9?', a: '5 (the middle value).' },
            { q: 'CBA Q21: What is the median of 2, 4, 6, 8?', a: '(4 + 6) ÷ 2 = 10 ÷ 2 = 5.' },
            { q: 'CBA Q23: What is the range of 4, 9, 12, 20?', a: '20 - 4 = 16.' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q21: What is the median of the four numbers: 2, 4, 6, 8?',
              options: ['4', '5', '6', '10'],
              correct: 1,
              strategy: 'Booklet Key: even count → average of the two middle numbers (4 + 6) / 2 = 5.',
              derivation: 'Since there are an even number of data values (4), average the two middle values: (4 + 6) ÷ 2 = 5.',
              trap: 'Picking either 4 or 6 instead of averaging them.'
            },
            {
              q: 'Official CBA Exam Q23: Find the range of the following data values: 4, 9, 12, 20',
              options: ['16', '12', '4', '8'],
              correct: 0,
              strategy: 'Booklet Key: Range = Largest - Smallest = 20 - 4 = 16.',
              derivation: 'Range is the difference between maximum (20) and minimum (4): 20 - 4 = 16.',
              trap: 'Calculating the mean or picking the largest number.'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-m-u7',
      number: 'Unit 7',
      title: 'Official CBA Mixed Practice Exam (Questions 1 - 25)',
      bigIdea: 'The official 25 printed exam questions from the Ministry revision booklet with complete worked solutions, derivations, and traps.',
      subtopics: [
        {
          id: 'g7-m-7.1',
          code: '7.1',
          title: 'Official Ministry Examination Questions 1 to 13',
          survey: {
            blueprint: 'Direct integration of official Ministry CBA Exam Questions 1 to 13 covering Sets, Integers, Linear Equations, and Inequalities with booklet answer key.',
            objectives: [
              'Solve Questions 1 through 13 under timed exam conditions.',
              'Verify algebraic steps for linear equations and inequalities.',
              'Avoid negative sign traps in signed arithmetic.'
            ],
            keyFormulas: 'Official CBA Key: 1.{3} | 2.{1,3,5} | 3.5 | 4.-7 | 5.24 | 6.17 | 7.x=12 | 8.x=9 | 9.x=6 | 10.x=6 | 11.x<6 | 12.x≥5 | 13.x<-4'
          },
          questions: [
            'What are Questions 1 to 13 in the official Ministry revision booklet?',
            'What common mistake occurs in Question 4 (-12 - (-5))?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">📝 Questions 1 - 13 Model Solutions</h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p><strong>Q1:</strong> A={1,2,3}, B={3,4}: A ∩ B = <strong>{3}</strong></p>
                  <p><strong>Q2:</strong> U={1..5}, A={2,4}: A′ = <strong>{1,3,5}</strong></p>
                  <p><strong>Q3:</strong> -8 + 13 = <strong>5</strong></p>
                  <p><strong>Q4:</strong> -12 - (-5) = -12 + 5 = <strong>-7</strong></p>
                  <p><strong>Q5:</strong> (-6)(-4) = <strong>24</strong></p>
                  <p><strong>Q6:</strong> |-17| = <strong>17</strong></p>
                  <p><strong>Q7:</strong> x + 8 = 20 ⇒ x = <strong>12</strong></p>
                  <p><strong>Q8:</strong> 3x = 27 ⇒ x = <strong>9</strong></p>
                  <p><strong>Q9:</strong> 2x + 5 = 17 ⇒ 2x = 12 ⇒ x = <strong>6</strong></p>
                  <p><strong>Q10:</strong> 5x - 10 = 20 ⇒ 5x = 30 ⇒ x = <strong>6</strong></p>
                  <p><strong>Q11:</strong> x + 4 < 10 ⇒ x < <strong>6</strong></p>
                  <p><strong>Q12:</strong> 3x ≥ 15 ⇒ x ≥ <strong>5</strong></p>
                  <p><strong>Q13:</strong> -2x > 8 ⇒ x < <strong>-4</strong> (sign flips!)</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Detailed Derivation of Q12 and Q13',
            problem: 'Contrast Q12 (3x ≥ 15) and Q13 (-2x > 8) to show when an inequality sign flips and when it does not.',
            steps: [
              {
                label: 'Step 1: Q12 positive coefficient',
                text: 'In 3x ≥ 15, we divide by positive 3. Dividing by positive does NOT flip the sign: x ≥ 15/3 ⇒ <strong>x ≥ 5</strong>.'
              },
              {
                label: 'Step 2: Q13 negative coefficient',
                text: 'In -2x > 8, we divide by negative -2. Dividing by a negative DOES flip the sign: x < 8/(-2) ⇒ <strong>x < -4</strong>.'
              }
            ],
            proTip: 'Only negative multiplication or division flips the inequality sign!'
          },
          reciteFlashcards: [
            { q: 'CBA Q7: x + 8 = 20', a: 'x = 12.' },
            { q: 'CBA Q10: 5x - 10 = 20', a: 'x = 6.' },
            { q: 'CBA Q13: -2x > 8', a: 'x < -4.' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q8: Find the solution of the linear equation: 3x = 27',
              options: ['x = 81', 'x = 9', 'x = 24', 'x = 30'],
              correct: 1,
              strategy: 'Booklet Key: x = 27 / 3 = 9.',
              derivation: 'Divide both sides by 3: x = 9.',
              trap: 'Multiplying 3 by 27 to get 81.'
            },
            {
              q: 'Official CBA Exam Q12: Solve the inequality: 3x ≥ 15',
              options: ['x ≥ 5', 'x ≤ 5', 'x ≥ 45', 'x ≤ -5'],
              correct: 0,
              strategy: 'Booklet Key: dividing by positive 3 does not flip sign: x ≥ 5.',
              derivation: 'Divide both sides by 3: x ≥ 5.',
              trap: 'Flipping the sign when dividing by a positive number.'
            }
          ]
        },
        {
          id: 'g7-m-7.2',
          code: '7.2',
          title: 'Official Ministry Examination Questions 14 to 25',
          survey: {
            blueprint: 'Direct integration of official Ministry CBA Exam Questions 14 to 25 covering Geometry, Area, Perimeter, Congruency, and Data Handling with booklet answer key.',
            objectives: [
              'Solve Questions 14 through 25 under timed exam conditions.',
              'Calculate area and perimeter with proper square and linear units.',
              'Determine measures of central tendency and set relationships.'
            ],
            keyFormulas: 'Official CBA Key: 14.36 cm² | 15.28 cm | 16.30 cm² | 17.same shape & size | 18.Side-Side-Side | 19.5 | 20.5 | 21.5 | 22.5 | 23.16 | 24.Yes | 25.∈'
          },
          questions: [
            'What are Questions 14 to 25 in the official Ministry revision booklet?',
            'Why does Question 24 confirm that {1,2} ⊆ {1,2,3}?'
          ],
          coreNotes: `
            <div class="space-y-4 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-bold text-amber-400">📝 Questions 14 - 25 Model Solutions</h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p><strong>Q14:</strong> Area of 9×4 cm rectangle: A = 9 × 4 = <strong>36 cm²</strong></p>
                  <p><strong>Q15:</strong> Perimeter of square with side 7 cm: P = 4 × 7 = <strong>28 cm</strong></p>
                  <p><strong>Q16:</strong> Triangle base 12 cm, height 5 cm: A = ½ × 12 × 5 = <strong>30 cm²</strong></p>
                  <p><strong>Q17:</strong> Definition of congruent: <strong>Same shape and same size</strong></p>
                  <p><strong>Q18:</strong> SSS stands for: <strong>Side-Side-Side</strong></p>
                  <p><strong>Q19:</strong> Mean of 2, 4, 6, 8: Sum = 20 ÷ 4 = <strong>5</strong></p>
                  <p><strong>Q20:</strong> Median of 1, 3, 5, 7, 9: Middle value = <strong>5</strong></p>
                  <p><strong>Q21:</strong> Median of 2, 4, 6, 8: Average of 4 and 6 = <strong>5</strong></p>
                  <p><strong>Q22:</strong> Mode of 3, 3, 4, 5, 5, 5, 7: Most frequent value = <strong>5</strong></p>
                  <p><strong>Q23:</strong> Range of 4, 9, 12, 20: 20 - 4 = <strong>16</strong></p>
                  <p><strong>Q24:</strong> Is {1, 2} ⊆ {1, 2, 3}? Answer: <strong>Yes</strong></p>
                  <p><strong>Q25:</strong> Symbol for "is an element of": <strong>∈</strong></p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Questions 16, 22 & 24',
            problem: 'Show the full step-by-step working for Question 16 (triangle area), Question 22 (mode), and Question 24 (subset check).',
            steps: [
              {
                label: 'Step 1: Triangle area (Q16)',
                text: 'Formula: A = ½ × b × h. Substitution: A = ½ × 12 cm × 5 cm = 6 cm × 5 cm = <strong>30 cm²</strong>.'
              },
              {
                label: 'Step 2: Mode analysis (Q22)',
                text: 'Count frequencies: 3 occurs twice; 4 occurs once; 5 occurs three times; 7 occurs once. 5 has the highest frequency (3 times), so Mode = <strong>5</strong>.'
              },
              {
                label: 'Step 3: Subset verification (Q24)',
                text: 'Inspect every element of {1, 2}: 1 ∈ {1, 2, 3} and 2 ∈ {1, 2, 3}. Since every element belongs to the second set, <strong>{1, 2} ⊆ {1, 2, 3} is TRUE (Yes)</strong>.'
              }
            ],
            proTip: 'Always write down the formula before inserting numbers in geometry questions!'
          },
          reciteFlashcards: [
            { q: 'CBA Q16: Find the area of a triangle with base 12 cm and height 5 cm.', a: '30 cm².' },
            { q: 'CBA Q22: What is the mode of 3, 3, 4, 5, 5, 5, 7?', a: '5 (occurs 3 times).' },
            { q: 'CBA Q24: Is {1, 2} ⊆ {1, 2, 3}?', a: 'Yes.' }
          ],
          amtQuiz: [
            {
              q: 'Official CBA Exam Q16: Calculate the area of a triangle having a base of 12 cm and a height of 5 cm:',
              options: ['60 cm²', '30 cm²', '34 cm', '17 cm²'],
              correct: 1,
              strategy: 'Booklet Key: Area = ½ × b × h = ½ × 12 × 5 = 30 cm².',
              derivation: 'Multiply base by height and divide by 2: (12 × 5) / 2 = 60 / 2 = 30 cm².',
              trap: 'Forgetting to multiply by ½ and getting 60 cm².'
            },
            {
              q: 'Official CBA Exam Q24: Is the statement {1, 2} ⊆ {1, 2, 3} mathematically true or false?',
              options: ['False, because 3 is missing from the first set', 'True (Yes), because every element in {1, 2} is in {1, 2, 3}', 'False, because sets cannot have numbers', 'True, but only if the universal set has 10 elements'],
              correct: 1,
              strategy: 'Booklet Key: Yes.',
              derivation: 'By definition of subset, if every element of set A belongs to set B, then A ⊆ B.',
              trap: 'Confusing subset ⊆ with strict equality =.'
            }
          ]
        }
      ]
    }
  ]
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g7_math.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g7Math, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote deeply enriched g7_math.js with 7 Units, 12 Subtopics, and official 25 CBA exam questions!');
