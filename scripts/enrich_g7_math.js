const fs = require('fs');
const path = require('path');

const g7Math = require('../src/curriculum/g7_math.js');

// 1.1 Sets & Notations (4 questions)
g7Math.units[0].subtopics[0].amtQuiz = [
  {
    q: 'Official CBA Exam Q25: What is the mathematical symbol used to denote that an object "is an element of" a set?',
    options: ['⊆', '∉', '∈', '∪'],
    correct: 2,
    strategy: 'Booklet Key: ∈ represents "is an element of".',
    derivation: 'The symbol ∈ indicates set membership (e.g., 3 ∈ {1, 2, 3}).',
    trap: 'Confusing ∈ (element of) with ⊆ (subset of).'
  },
  {
    q: 'Which of the following collections represents a "well-defined" set in mathematics?',
    options: [
      'The collection of all interesting books in the school library',
      'The collection of all students in Grade 7 whose height is greater than 140 cm',
      'The collection of all delicious traditional Ethiopian dishes',
      'The collection of all handsome athletes in Addis Ababa'
    ],
    correct: 1,
    strategy: '"Well-defined" means objective and unambiguous, with no subjective personal opinions.',
    derivation: 'Height > 140 cm is measurable and objectively verifiable for every student. "Interesting", "delicious", and "handsome" are subjective personal tastes, not well-defined sets.',
    trap: 'Choosing subjective descriptions.'
  },
  {
    q: 'If set S = {x | x is a natural number and x ≤ 4}, how is S correctly written in roster (listing) form?',
    options: ['{0, 1, 2, 3, 4}', '{1, 2, 3, 4}', '{1, 2, 3}', '{2, 4}'],
    correct: 1,
    strategy: 'Natural numbers start at 1: N = {1, 2, 3, ...}.',
    derivation: 'The natural numbers less than or equal to 4 are 1, 2, 3, 4. (Zero is a whole number, not a natural number).',
    trap: 'Including 0 (which makes it whole numbers, not natural numbers).'
  },
  {
    q: 'Which of the following represents an empty (null) set ∅?',
    options: [
      '{0}',
      '{x | x is an even prime number greater than 2}',
      '{x | x is a triangle with 3 sides}',
      '{∅}'
    ],
    correct: 1,
    strategy: '2 is the only even prime number; no even prime > 2 exists.',
    derivation: 'Every prime number greater than 2 is odd. Thus, there are zero even primes greater than 2, making this collection the empty set ∅. Note: {0} contains one element (zero), and {∅} contains one element (the empty set).',
    trap: 'Confusing {0} with the empty set ∅.'
  }
];

// 1.2 Subsets & Operations (4 questions)
g7Math.units[0].subtopics[1].amtQuiz = [
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
  },
  {
    q: 'If set A = {2, 4, 6} and set B = {1, 3, 5}, what is the union A ∪ B?',
    options: ['{1, 2, 3, 4, 5, 6}', '∅', '{2, 3, 4}', '{6}'],
    correct: 0,
    strategy: 'Union combines all elements from both sets.',
    derivation: 'A ∪ B = {1, 2, 3, 4, 5, 6}. Note that since A ∩ B = ∅, they are disjoint sets.',
    trap: 'Thinking disjoint sets cannot have a union.'
  },
  {
    q: 'Official CBA Exam Q24: Is the statement {1, 2} ⊆ {1, 2, 3} mathematically true or false?',
    options: [
      'False, because 3 is missing from the first set',
      'True (Yes), because every element in {1, 2} is also in {1, 2, 3}',
      'False, because subsets must have equal number of elements',
      'True, but only if the universal set has 10 elements'
    ],
    correct: 1,
    strategy: 'Booklet Key: Yes.',
    derivation: 'By definition of subset, if every element in A belongs to B, then A ⊆ B. Here 1 and 2 are both in {1, 2, 3}.',
    trap: 'Confusing subset ⊆ with set equality =.'
  }
];

// 2.1 Integers & Absolute Value (4 questions)
g7Math.units[1].subtopics[0].amtQuiz = [
  {
    q: 'Official CBA Exam Q6: What is the exact value of |-17|?',
    options: ['-17', '17', '0', '1/17'],
    correct: 1,
    strategy: 'Booklet Key: distance from zero is 17.',
    derivation: 'Absolute value represents distance from 0 on the number line, which is always non-negative: |-17| = 17.',
    trap: 'Retaining the negative sign.'
  },
  {
    q: 'Which of the following integers has the greatest value on the continuous number line?',
    options: ['-15', '-4', '-1', '-20'],
    correct: 2,
    strategy: 'On the negative side of the number line, numbers closer to 0 have greater value.',
    derivation: '-1 lies furthest to the right among all the negative numbers listed, so -1 > -4 > -15 > -20.',
    trap: 'Picking -20 because 20 is numerically the largest digit.'
  },
  {
    q: 'Evaluate the expression: |-25| - |-12| + |0|.',
    options: ['37', '13', '-13', '-37'],
    correct: 1,
    strategy: 'Evaluate absolute values first: |-25| = 25, |-12| = 12, |0| = 0.',
    derivation: '25 - 12 + 0 = 13.',
    trap: 'Changing the middle subtraction into addition.'
  },
  {
    q: 'At dawn, the temperature at the peak of Ras Dejen is -5°C. By midday, the temperature rises by 12°C. What is the midday temperature?',
    options: ['-17°C', '7°C', '-7°C', '17°C'],
    correct: 1,
    strategy: 'Calculation: -5 + 12.',
    derivation: '-5 + 12 = 12 - 5 = 7°C.',
    trap: 'Subtracting 12 from -5 to get -17°C.'
  }
];

// 2.2 Operations on Integers (4 questions)
g7Math.units[1].subtopics[1].amtQuiz = [
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
  },
  {
    q: 'Evaluate the division expression: (-48) ÷ (-6).',
    options: ['-8', '8', '-54', '42'],
    correct: 1,
    strategy: 'Dividing two negative numbers yields a positive quotient.',
    derivation: '(-) ÷ (-) = (+). 48 ÷ 6 = 8. So (-48) ÷ (-6) = 8.',
    trap: 'Keeping the negative sign.'
  },
  {
    q: 'Evaluate the multi-step integer expression: -14 + 9 - (-3).',
    options: ['-2', '-8', '-20', '4'],
    correct: 0,
    strategy: 'Rewrite: -14 + 9 + 3. Calculate left to right.',
    derivation: '-14 + 9 = -5. Then -5 + 3 = -2.',
    trap: 'Miscalculating -14 + 9 as -23.'
  }
];

// 3.1 Linear Equations (4 questions)
g7Math.units[2].subtopics[0].amtQuiz = [
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
  },
  {
    q: 'Solve the equation: 3(x + 2) = 21.',
    options: ['x = 5', 'x = 7', 'x = 9', 'x = 3'],
    correct: 0,
    strategy: 'Divide by 3 first: x + 2 = 7, then subtract 2.',
    derivation: 'Method 1: x + 2 = 21/3 = 7 ⇒ x = 7 - 2 = 5. Method 2: 3x + 6 = 21 ⇒ 3x = 15 ⇒ x = 5.',
    trap: 'Subtracting 2 before dividing by 3 without distributing.'
  },
  {
    q: 'Solve for y: y/5 - 4 = 2.',
    options: ['x = 10', 'y = 30', 'y = -10', 'y = 6'],
    correct: 1,
    strategy: 'Add 4 to both sides: y/5 = 6, then multiply by 5.',
    derivation: 'y/5 = 2 + 4 = 6 ⇒ y = 6 × 5 = 30. Check: 30/5 - 4 = 6 - 4 = 2 (Verified!).',
    trap: 'Multiplying 2 by 5 before adding 4.'
  }
];

// 3.2 Linear Inequalities (4 questions)
g7Math.units[2].subtopics[1].amtQuiz = [
  {
    q: 'Official CBA Exam Q13: What is the solution set of the linear inequality: -2x > 8?',
    options: ['x > -4', 'x < -4', 'x > 4', 'x < 4'],
    correct: 1,
    strategy: 'Booklet Key: dividing by -2 flips the > sign to <.',
    derivation: '-2x > 8 ⇒ x < 8 / (-2) ⇒ x < -4.',
    trap: 'Failing to reverse the inequality sign and choosing x > -4.'
  },
  {
    q: 'Official CBA Exam Q12: Solve the linear inequality: 3x ≥ 15',
    options: ['x ≥ 5', 'x ≤ 5', 'x ≥ 45', 'x ≤ -5'],
    correct: 0,
    strategy: 'Booklet Key: dividing by positive 3 does not flip sign: x ≥ 5.',
    derivation: 'Divide both sides by 3: x ≥ 5.',
    trap: 'Flipping the sign when dividing by a positive number.'
  },
  {
    q: 'Solve the inequality: -4x ≤ 20.',
    options: ['x ≤ -5', 'x ≥ -5', 'x ≤ 5', 'x ≥ 5'],
    correct: 1,
    strategy: 'Dividing by -4 reverses ≤ to ≥.',
    derivation: 'x ≥ 20 / (-4) ⇒ x ≥ -5.',
    trap: 'Forgetting to reverse the inequality sign.'
  },
  {
    q: 'When graphing the solution set x < 6 on a continuous number line, which endpoint marker and direction should be drawn?',
    options: [
      'A closed solid circle at 6 with an arrow pointing right',
      'An open hollow circle at 6 with an arrow pointing left',
      'A closed solid circle at 6 with an arrow pointing left',
      'An open hollow circle at 6 with an arrow pointing right'
    ],
    correct: 1,
    strategy: 'Strict inequality (<) uses open circle; "less than" points left.',
    derivation: 'Since 6 is not included in the solution set (<), use an open circle (○) at 6, and shade to the left toward smaller numbers.',
    trap: 'Using a closed circle for a strict inequality.'
  }
];

// 4.1 Perimeter & Area (4 questions)
g7Math.units[3].subtopics[0].amtQuiz = [
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
  },
  {
    q: 'Calculate the area of a parallelogram having a base of 7 cm and a perpendicular height of 6 cm:',
    options: ['42 cm²', '21 cm²', '26 cm', '42 cm'],
    correct: 0,
    strategy: 'Area of parallelogram = base × height (A = bh).',
    derivation: 'A = b × h = 7 cm × 6 cm = 42 cm².',
    trap: 'Dividing by 2 (which is for triangles, not parallelograms!).'
  },
  {
    q: 'Official CBA Exam Q16: Calculate the area of a triangle having a base of 12 cm and a height of 5 cm:',
    options: ['60 cm²', '30 cm²', '34 cm', '17 cm²'],
    correct: 1,
    strategy: 'Booklet Key: Area = ½ × b × h = ½ × 12 × 5 = 30 cm².',
    derivation: 'Multiply base by height and divide by 2: (12 × 5) / 2 = 60 / 2 = 30 cm².',
    trap: 'Forgetting to multiply by ½ and getting 60 cm².'
  }
];

// 5.1 Congruency of Plane Figures (4 questions)
g7Math.units[4].subtopics[0].amtQuiz = [
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
  },
  {
    q: 'Two triangles ABC and DEF have AB = DE = 6 cm, AC = DF = 8 cm, and the included angle ∠A = ∠D = 50°. By which criterion are the triangles congruent?',
    options: ['SSS', 'SAS', 'ASA', 'RHS'],
    correct: 1,
    strategy: 'Two sides and the included angle between them equal SAS.',
    derivation: 'SAS (Side-Angle-Side) states that if two sides and the included angle of one triangle equal two sides and the included angle of another, they are congruent.',
    trap: 'Selecting SSS when an angle is given.'
  },
  {
    q: 'Which of the following statements correctly distinguishes congruent triangles from similar triangles?',
    options: [
      'Congruent triangles have the same shape and size, while similar triangles have the same shape but may differ in size',
      'Similar triangles must have identical perimeters',
      'Congruent triangles have different corresponding angles',
      'All similar triangles are automatically congruent'
    ],
    correct: 0,
    strategy: 'Congruent = same shape AND size; Similar = same shape, proportional sizes.',
    derivation: 'All congruent triangles are similar (scale factor k = 1), but similar triangles are not necessarily congruent.',
    trap: 'Claiming that all similar triangles are congruent.'
  }
];

// 6.1 Data Handling & Statistics (4 questions)
g7Math.units[5].subtopics[0].amtQuiz = [
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
  },
  {
    q: 'Official CBA Exam Q19: What is the arithmetic mean of the numbers: 2, 4, 6, 8?',
    options: ['4', '5', '6', '20'],
    correct: 1,
    strategy: 'Booklet Key: Mean = Sum / Count = (2+4+6+8) / 4 = 20 / 4 = 5.',
    derivation: 'Add the values (20) and divide by the number of observations (4): 20 ÷ 4 = 5.',
    trap: 'Summing without dividing by count.'
  },
  {
    q: 'Official CBA Exam Q22: What is the mode of the numbers: 3, 3, 4, 5, 5, 5, 7?',
    options: ['3', '4', '5', '7'],
    correct: 2,
    strategy: 'Booklet Key: Mode is the most frequent number, which is 5 (appears 3 times).',
    derivation: '3 occurs twice, 4 occurs once, 5 occurs three times, 7 occurs once. 5 has the highest frequency.',
    trap: 'Selecting 3 (which occurs twice) instead of 5 (which occurs 3 times).'
  }
];

// 7.1 CBA Questions 1-13 (4 questions)
g7Math.units[6].subtopics[0].amtQuiz = [
  {
    q: 'Official CBA Exam Q3: What is the value of -8 + 13?',
    options: ['-21', '5', '-5', '21'],
    correct: 1,
    strategy: 'Booklet Key: 5.',
    derivation: '-8 + 13 = 13 - 8 = 5.',
    trap: 'Adding absolute values with a negative sign (-21).'
  },
  {
    q: 'Official CBA Exam Q7: Solve for x: x + 8 = 20',
    options: ['x = 28', 'x = 12', 'x = 160', 'x = 2.5'],
    correct: 1,
    strategy: 'Booklet Key: x = 20 - 8 = 12.',
    derivation: 'Subtract 8 from both sides: x = 12.',
    trap: 'Adding 8 to 20.'
  },
  {
    q: 'Official CBA Exam Q8: Find the solution of the linear equation: 3x = 27',
    options: ['x = 81', 'x = 9', 'x = 24', 'x = 30'],
    correct: 1,
    strategy: 'Booklet Key: x = 27 / 3 = 9.',
    derivation: 'Divide both sides by 3: x = 9.',
    trap: 'Multiplying 3 by 27 to get 81.'
  },
  {
    q: 'Official CBA Exam Q11: Solve the inequality: x + 4 < 10',
    options: ['x < 14', 'x < 6', 'x > 6', 'x ≤ 6'],
    correct: 1,
    strategy: 'Booklet Key: x < 10 - 4 = 6.',
    derivation: 'Subtract 4 from both sides: x < 6.',
    trap: 'Reversing the sign without multiplying/dividing by a negative.'
  }
];

// 7.2 CBA Questions 14-25 (4 questions)
g7Math.units[6].subtopics[1].amtQuiz = [
  {
    q: 'Official CBA Exam Q20: What is the median of the five numbers: 1, 3, 5, 7, 9?',
    options: ['3', '5', '7', '25'],
    correct: 1,
    strategy: 'Booklet Key: odd count (5 values) ➔ middle value is 5.',
    derivation: 'In the ordered list 1, 3, [5], 7, 9, the middle value is 5.',
    trap: 'Calculating the sum.'
  },
  {
    q: 'Official CBA Exam Q14 & Q15 Review: A rectangle has area 36 cm² and width 4 cm. A square has side equal to the rectangle\'s length. What is the square\'s perimeter?',
    options: ['36 cm', '81 cm', '9 cm', '18 cm'],
    correct: 0,
    strategy: 'Rectangle length = 36 / 4 = 9 cm. Square side = 9 cm. Square perimeter = 4 × 9 = 36 cm.',
    derivation: 'Length = Area ÷ Width = 36 ÷ 4 = 9 cm. Perimeter of square = 4 × side = 4 × 9 = 36 cm.',
    trap: 'Confusing the square\'s area (81 cm²) with perimeter (36 cm).'
  },
  {
    q: 'Official CBA Exam Review: What is the area of a trapezium whose parallel bases are 8 cm and 12 cm, with a perpendicular height of 5 cm?',
    options: ['100 cm²', '50 cm²', '25 cm²', '40 cm²'],
    correct: 1,
    strategy: 'Formula: A = ½ × (a + b) × h = ½ × (8 + 12) × 5.',
    derivation: 'A = ½ × 20 × 5 = 10 × 5 = 50 cm².',
    trap: 'Multiplying bases together before multiplying by height.'
  },
  {
    q: 'Official CBA Exam Q25 Review: Which of the following set statements is mathematically FALSE?',
    options: [
      '3 ∈ {1, 2, 3}',
      '4 ∉ {1, 2, 3}',
      '{1, 2} ⊆ {1, 2, 3}',
      '{3} ∈ {1, 2, 3}'
    ],
    correct: 3,
    strategy: '{3} is a SUBSET, not an element of {1, 2, 3}. {3} ⊆ {1, 2, 3} is true, but {3} ∈ {1, 2, 3} is false.',
    derivation: 'The elements of {1, 2, 3} are the numbers 1, 2, and 3. The set {3} is a subset ({3} ⊆ A), not a direct element ({3} ∉ A). Therefore, option D is FALSE.',
    trap: 'Confusing the element 3 with the subset {3}.'
  }
];

const targetPathM7 = path.join(__dirname, '..', 'src', 'curriculum', 'g7_math.js');
fs.writeFileSync(targetPathM7, 'module.exports = ' + JSON.stringify(g7Math, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g7_math.js with 4 questions per subtopic (total 44 questions)!');
