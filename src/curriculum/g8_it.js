module.exports = {
  "id": "g8-it",
  "name": "Information Technology",
  "icon": "💻",
  "units": [
    {
      "id": "g8-it-u1",
      "number": "Unit 1",
      "title": "Computer Hardware Architecture & Internal Components",
      "bigIdea": "Analyze motherboard architecture, CPU components, RAM/ROM operations, and peripheral interfaces.",
      "subtopics": [
        {
          "id": "g8-it-1.1",
          "code": "1.1",
          "title": "Motherboard, CPU Architecture & Internal Buses",
          "survey": {
            "blueprint": "Motherboard: Main printed circuit board connecting all internal components. Central Processing Unit (CPU - \"Brain of computer\"): Control Unit (CU - directs signal traffic), Arithmetic Logic Unit (ALU - mathematical & logical operations), Registers (ultra-fast temporary storage). Clock speed (measured in Gigahertz, GHz). System Buses: Data Bus, Address Bus, Control Bus. Cache memory (L1, L2, L3) bridging CPU and RAM.",
            "objectives": [
              "Identify the internal architecture of the CPU: ALU, CU, and registers.",
              "Explain how system buses transmit data, addresses, and control signals across the motherboard.",
              "Describe the performance role of CPU clock speed and cache memory."
            ],
            "keyFormulas": "CPU Machine Cycle = Fetch (from RAM) ➔ Decode (by CU) ➔ Execute (by ALU) ➔ Store (in Registers/RAM)"
          },
          "questions": [
            "Why does a CPU with a large L3 cache execute complex software faster than one with little cache?",
            "What is the role of the Arithmetic Logic Unit (ALU)?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Motherboard, CPU Architecture & Internal Buses</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Motherboard: Main printed circuit board connecting all internal components. Central Processing Unit (CPU - \"Brain of computer\"): Control Unit (CU - directs signal traffic), Arithmetic Logic Unit (ALU - mathematical & logical operations), Registers (ultra-fast temporary storage). Clock speed (measured in Gigahertz, GHz). System Buses: Data Bus, Address Bus, Control Bus. Cache memory (L1, L2, L3) bridging CPU and RAM.</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering motherboard, cpu architecture & internal buses equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Motherboard, CPU Architecture & Internal Buses",
            "problem": "Explain how a student or IT professional applies Motherboard, CPU Architecture & Internal Buses to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: CPU Machine Cycle = Fetch (from RAM) ➔ Decode (by CU) ➔ Execute (by ALU) ➔ Store (in Registers/RAM)."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Motherboard, CPU Architecture & Internal Buses?",
              "a": "CPU Machine Cycle = Fetch (from RAM) ➔ Decode (by CU) ➔ Execute (by ALU) ➔ Store (in Registers/RAM)"
            },
            {
              "q": "Why does a CPU with a large L3 cache execute complex software faster than one with little cache?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "What is the role of the Arithmetic Logic Unit (ALU)?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Motherboard, CPU Architecture & Internal Buses?",
              "options": [
                "CPU Machine Cycle = Fetch (from RAM) ➔ Decode (by CU) ➔ Execute (by ALU) ➔ Store (in Registers/RAM)",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: CPU Machine Cycle = Fetch (from RAM) ➔ Decode (by CU) ➔ Execute (by ALU) ➔ Store (in Registers/RAM).",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving motherboard, cpu architecture & internal buses, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering motherboard, cpu architecture & internal buses support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        },
        {
          "id": "g8-it-1.2",
          "code": "1.2",
          "title": "Peripheral Interfaces, Ports & Expansion Slots",
          "survey": {
            "blueprint": "Expansion Slots: PCIe (Peripheral Component Interconnect Express for graphics cards), RAM DIMM slots. External Ports: USB (Universal Serial Bus - Type A, Type C), HDMI (High-Definition Multimedia Interface for digital audio/video), DisplayPort, Ethernet RJ-45 (wired LAN networking), 3.5mm Audio jack. Plug-and-Play technology.",
            "objectives": [
              "Identify physical ports on a computer and explain their transmission capabilities.",
              "Distinguish parallel communication interfaces from high-speed serial standards (USB, PCIe)."
            ],
            "keyFormulas": "USB-C Standard = High-speed data transfer + Video output + Up to 100W power delivery"
          },
          "questions": [
            "Why has USB-C largely superseded older legacy ports like VGA and PS/2?",
            "What port is used to connect a desktop computer to a wired local area network?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Peripheral Interfaces, Ports & Expansion Slots</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Expansion Slots: PCIe (Peripheral Component Interconnect Express for graphics cards), RAM DIMM slots. External Ports: USB (Universal Serial Bus - Type A, Type C), HDMI (High-Definition Multimedia Interface for digital audio/video), DisplayPort, Ethernet RJ-45 (wired LAN networking), 3.5mm Audio jack. Plug-and-Play technology.</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering peripheral interfaces, ports & expansion slots equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Peripheral Interfaces, Ports & Expansion Slots",
            "problem": "Explain how a student or IT professional applies Peripheral Interfaces, Ports & Expansion Slots to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: USB-C Standard = High-speed data transfer + Video output + Up to 100W power delivery."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Peripheral Interfaces, Ports & Expansion Slots?",
              "a": "USB-C Standard = High-speed data transfer + Video output + Up to 100W power delivery"
            },
            {
              "q": "Why has USB-C largely superseded older legacy ports like VGA and PS/2?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "What port is used to connect a desktop computer to a wired local area network?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Peripheral Interfaces, Ports & Expansion Slots?",
              "options": [
                "USB-C Standard = High-speed data transfer + Video output + Up to 100W power delivery",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: USB-C Standard = High-speed data transfer + Video output + Up to 100W power delivery.",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving peripheral interfaces, ports & expansion slots, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering peripheral interfaces, ports & expansion slots support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u2",
      "number": "Unit 2",
      "title": "Spreadsheets & Quantitative Data Analysis",
      "bigIdea": "Master electronic spreadsheets: cell referencing, mathematical formulas, standard functions, and data charting.",
      "subtopics": [
        {
          "id": "g8-it-2.1",
          "code": "2.1",
          "title": "Spreadsheet Grid Architecture & Cell Referencing",
          "survey": {
            "blueprint": "Spreadsheet: Software for quantitative calculation, tabular data organization, and analysis (e.g., Microsoft Excel, Google Sheets). Grid structure: Columns (letters A, B, C...) and Rows (numbers 1, 2, 3...). Cell Address: Intersection of column and row (e.g., B4). Cell Referencing: Relative Referencing (A1 shifts when copied) vs Absolute Referencing ($A$1 locked with dollar signs). Data Types: Labels (text), Values (numbers), Formulas.",
            "objectives": [
              "Navigate spreadsheet worksheets and define cell ranges.",
              "Distinguish relative cell referencing from absolute cell referencing ($A$1)."
            ],
            "keyFormulas": "Formula Rule: Every formula or function MUST begin with an equal sign (=)"
          },
          "questions": [
            "Why must you use absolute cell referencing ($B$1) when multiplying a column of prices by a fixed tax rate?",
            "What happens when a formula containing =A1+B1 is copied down one row?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Spreadsheet Grid Architecture & Cell Referencing</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Spreadsheet: Software for quantitative calculation, tabular data organization, and analysis (e.g., Microsoft Excel, Google Sheets). Grid structure: Columns (letters A, B, C...) and Rows (numbers 1, 2, 3...). Cell Address: Intersection of column and row (e.g., B4). Cell Referencing: Relative Referencing (A1 shifts when copied) vs Absolute Referencing ($A$1 locked with dollar signs). Data Types: Labels (text), Values (numbers), Formulas.</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering spreadsheet grid architecture & cell referencing equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Spreadsheet Grid Architecture & Cell Referencing",
            "problem": "Explain how a student or IT professional applies Spreadsheet Grid Architecture & Cell Referencing to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: Formula Rule: Every formula or function MUST begin with an equal sign (=)."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Spreadsheet Grid Architecture & Cell Referencing?",
              "a": "Formula Rule: Every formula or function MUST begin with an equal sign (=)"
            },
            {
              "q": "Why must you use absolute cell referencing ($B$1) when multiplying a column of prices by a fixed tax rate?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "What happens when a formula containing =A1+B1 is copied down one row?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Spreadsheet Grid Architecture & Cell Referencing?",
              "options": [
                "Formula Rule: Every formula or function MUST begin with an equal sign (=)",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: Formula Rule: Every formula or function MUST begin with an equal sign (=).",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving spreadsheet grid architecture & cell referencing, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering spreadsheet grid architecture & cell referencing support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        },
        {
          "id": "g8-it-2.2",
          "code": "2.2",
          "title": "Formulas, Statistical Functions & Chart Creation",
          "survey": {
            "blueprint": "Formulas: Mathematical expressions using operators (+, -, *, /, ^). Standard Functions: =SUM(range), =AVERAGE(range), =MAX(range), =MIN(range), =COUNT(range), =IF(logical_test, value_if_true, value_if_false). Charts for data visualization: Bar/Column charts (comparing discrete categories), Line charts (trends over time), Pie charts (proportions of a whole 100%).",
            "objectives": [
              "Construct formulas using standard arithmetic operators and functions.",
              "Write conditional logic formulas using the =IF function.",
              "Select appropriate chart types to visualize educational and financial datasets."
            ],
            "keyFormulas": "Syntax: =FUNCTION(start_cell:end_cell) | Example: =SUM(C2:C20) | =AVERAGE(D2:D50)"
          },
          "questions": [
            "Which function would you use to find the single highest exam score in a class of 60 students?",
            "Why is a line graph preferred over a pie chart for showing temperature variations across a month?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Formulas, Statistical Functions & Chart Creation</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Formulas: Mathematical expressions using operators (+, -, *, /, ^). Standard Functions: =SUM(range), =AVERAGE(range), =MAX(range), =MIN(range), =COUNT(range), =IF(logical_test, value_if_true, value_if_false). Charts for data visualization: Bar/Column charts (comparing discrete categories), Line charts (trends over time), Pie charts (proportions of a whole 100%).</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering formulas, statistical functions & chart creation equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Formulas, Statistical Functions & Chart Creation",
            "problem": "Explain how a student or IT professional applies Formulas, Statistical Functions & Chart Creation to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: Syntax: =FUNCTION(start_cell:end_cell) | Example: =SUM(C2:C20) | =AVERAGE(D2:D50)."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Formulas, Statistical Functions & Chart Creation?",
              "a": "Syntax: =FUNCTION(start_cell:end_cell) | Example: =SUM(C2:C20) | =AVERAGE(D2:D50)"
            },
            {
              "q": "Which function would you use to find the single highest exam score in a class of 60 students?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "Why is a line graph preferred over a pie chart for showing temperature variations across a month?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Formulas, Statistical Functions & Chart Creation?",
              "options": [
                "Syntax: =FUNCTION(start_cell:end_cell) | Example: =SUM(C2:C20) | =AVERAGE(D2:D50)",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: Syntax: =FUNCTION(start_cell:end_cell) | Example: =SUM(C2:C20) | =AVERAGE(D2:D50).",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving formulas, statistical functions & chart creation, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering formulas, statistical functions & chart creation support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u3",
      "number": "Unit 3",
      "title": "Presentation Software Mastery",
      "bigIdea": "Master electronic slide presentations, layout design, typography, animations, and delivery techniques.",
      "subtopics": [
        {
          "id": "g8-it-3.1",
          "code": "3.1",
          "title": "Slide Layouts, Design Themes & Visual Hierarchy",
          "survey": {
            "blueprint": "Presentation Software: Application used to create visually engaging slide decks for public speaking (e.g., Microsoft PowerPoint, Google Slides). Slide Components: Title slide, content layouts, bulleted lists. Design Principles: Contrast (dark text on light background or vice versa), Simplicity (the 6×6 rule: no more than 6 bullet points, 6 words per point), Consistent typography and color palette.",
            "objectives": [
              "Create presentations with clear visual hierarchy and professional themes.",
              "Apply readability guidelines to avoid slide clutter and cognitive overload."
            ],
            "keyFormulas": "Presentation Design Rule: Slides should support the speaker’s spoken narrative, not act as a word-for-word transcript!"
          },
          "questions": [
            "Why is reading full paragraphs of tiny text from a presentation slide ineffective for an audience?",
            "What color contrast combinations ensure high legibility in bright auditoriums?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Slide Layouts, Design Themes & Visual Hierarchy</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Presentation Software: Application used to create visually engaging slide decks for public speaking (e.g., Microsoft PowerPoint, Google Slides). Slide Components: Title slide, content layouts, bulleted lists. Design Principles: Contrast (dark text on light background or vice versa), Simplicity (the 6×6 rule: no more than 6 bullet points, 6 words per point), Consistent typography and color palette.</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering slide layouts, design themes & visual hierarchy equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Slide Layouts, Design Themes & Visual Hierarchy",
            "problem": "Explain how a student or IT professional applies Slide Layouts, Design Themes & Visual Hierarchy to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: Presentation Design Rule: Slides should support the speaker’s spoken narrative, not act as a word-for-word transcript!."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Slide Layouts, Design Themes & Visual Hierarchy?",
              "a": "Presentation Design Rule: Slides should support the speaker’s spoken narrative, not act as a word-for-word transcript!"
            },
            {
              "q": "Why is reading full paragraphs of tiny text from a presentation slide ineffective for an audience?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "What color contrast combinations ensure high legibility in bright auditoriums?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Slide Layouts, Design Themes & Visual Hierarchy?",
              "options": [
                "Presentation Design Rule: Slides should support the speaker’s spoken narrative, not act as a word-for-word transcript!",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: Presentation Design Rule: Slides should support the speaker’s spoken narrative, not act as a word-for-word transcript!.",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving slide layouts, design themes & visual hierarchy, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering slide layouts, design themes & visual hierarchy support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        },
        {
          "id": "g8-it-3.2",
          "code": "3.2",
          "title": "Transitions, Custom Animations & Delivery Mastery",
          "survey": {
            "blueprint": "Slide Transitions: Visual motion effects when advancing from one slide to the next (e.g., Fade, Push, Wipe). Custom Animations: Motion effects applied to individual elements on a slide (Entrance, Emphasis, Exit, Motion Paths). Slide Show Delivery: Presenter View, rehearsing slide timings, using keyboard shortcuts (F5 to start, B to black out screen, W to white out screen).",
            "objectives": [
              "Apply tasteful slide transitions and entrance animations.",
              "Demonstrate confident presentation delivery techniques using Presenter View."
            ],
            "keyFormulas": "Animation Best Practice: Use subtle animations (Fade, Appear) purposefully; excessive spinning text distracts from message"
          },
          "questions": [
            "What is the functional difference between a slide transition and an object animation?",
            "How does Presenter View assist a speaker during a formal seminar?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Transitions, Custom Animations & Delivery Mastery</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Slide Transitions: Visual motion effects when advancing from one slide to the next (e.g., Fade, Push, Wipe). Custom Animations: Motion effects applied to individual elements on a slide (Entrance, Emphasis, Exit, Motion Paths). Slide Show Delivery: Presenter View, rehearsing slide timings, using keyboard shortcuts (F5 to start, B to black out screen, W to white out screen).</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering transitions, custom animations & delivery mastery equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Transitions, Custom Animations & Delivery Mastery",
            "problem": "Explain how a student or IT professional applies Transitions, Custom Animations & Delivery Mastery to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: Animation Best Practice: Use subtle animations (Fade, Appear) purposefully; excessive spinning text distracts from message."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Transitions, Custom Animations & Delivery Mastery?",
              "a": "Animation Best Practice: Use subtle animations (Fade, Appear) purposefully; excessive spinning text distracts from message"
            },
            {
              "q": "What is the functional difference between a slide transition and an object animation?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "How does Presenter View assist a speaker during a formal seminar?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Transitions, Custom Animations & Delivery Mastery?",
              "options": [
                "Animation Best Practice: Use subtle animations (Fade, Appear) purposefully; excessive spinning text distracts from message",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: Animation Best Practice: Use subtle animations (Fade, Appear) purposefully; excessive spinning text distracts from message.",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving transitions, custom animations & delivery mastery, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering transitions, custom animations & delivery mastery support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u4",
      "number": "Unit 4",
      "title": "Computer Networks & Network Topologies",
      "bigIdea": "Analyze computer networks: classifications (LAN, WAN, MAN), transmission media, and physical topologies.",
      "subtopics": [
        {
          "id": "g8-it-4.1",
          "code": "4.1",
          "title": "Network Classifications & Networking Hardware",
          "survey": {
            "blueprint": "Computer Network: Two or more autonomous computers connected together to share resources (files, printers, internet access). Classifications: LAN (Local Area Network: single room/school building), MAN (Metropolitan Area Network: spanning a city like Addis Ababa), WAN (Wide Area Network: nationwide/global, e.g., the Internet), WLAN (Wireless LAN - Wi-Fi). Network Hardware: Network Interface Card (NIC), Switch (connects local devices), Router (routes packets between different networks), Modem.",
            "objectives": [
              "Classify networks by geographical coverage: LAN, MAN, WAN.",
              "Explain the distinct functions of network switches and routers."
            ],
            "keyFormulas": "Switch = Connects devices within the SAME local network | Router = Connects DIFFERENT networks together"
          },
          "questions": [
            "Why is the global Internet classified as the ultimate Wide Area Network (WAN)?",
            "What is the role of a router in a school computer lab?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Network Classifications & Networking Hardware</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Computer Network: Two or more autonomous computers connected together to share resources (files, printers, internet access). Classifications: LAN (Local Area Network: single room/school building), MAN (Metropolitan Area Network: spanning a city like Addis Ababa), WAN (Wide Area Network: nationwide/global, e.g., the Internet), WLAN (Wireless LAN - Wi-Fi). Network Hardware: Network Interface Card (NIC), Switch (connects local devices), Router (routes packets between different networks), Modem.</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering network classifications & networking hardware equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Network Classifications & Networking Hardware",
            "problem": "Explain how a student or IT professional applies Network Classifications & Networking Hardware to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: Switch = Connects devices within the SAME local network | Router = Connects DIFFERENT networks together."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Network Classifications & Networking Hardware?",
              "a": "Switch = Connects devices within the SAME local network | Router = Connects DIFFERENT networks together"
            },
            {
              "q": "Why is the global Internet classified as the ultimate Wide Area Network (WAN)?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "What is the role of a router in a school computer lab?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Network Classifications & Networking Hardware?",
              "options": [
                "Switch = Connects devices within the SAME local network | Router = Connects DIFFERENT networks together",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: Switch = Connects devices within the SAME local network | Router = Connects DIFFERENT networks together.",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving network classifications & networking hardware, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering network classifications & networking hardware support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        },
        {
          "id": "g8-it-4.2",
          "code": "4.2",
          "title": "Network Topologies & Transmission Media",
          "survey": {
            "blueprint": "Network Topology: The physical or logical layout of nodes in a network. Topologies: 1) Star Topology (all nodes connect to central switch; most common; if one cable breaks, other computers continue unaffected). 2) Bus Topology (single central backbone cable terminated at ends; cheap; if backbone breaks, entire network fails). 3) Ring Topology. 4) Mesh Topology (redundant links; high reliability; expensive). Transmission Media: Guided (Twisted pair UTP/STP, Coaxial cable, Fiber Optic - light pulses, immune to EMI) vs Unguided (Radio waves, Microwaves, Infrared, Satellite).",
            "objectives": [
              "Compare physical network topologies: Star, Bus, Ring, Mesh.",
              "Contrast copper twisted-pair cables with fiber-optic cables in speed and bandwidth."
            ],
            "keyFormulas": "Star Topology: Central hub/switch failure downs the network; individual cable break affects only that node"
          },
          "questions": [
            "Why is Star topology standard in modern school computer labs instead of Bus topology?",
            "Why are trans-continental internet backbones built using undersea fiber-optic cables rather than copper wires?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Network Topologies & Transmission Media</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Network Topology: The physical or logical layout of nodes in a network. Topologies: 1) Star Topology (all nodes connect to central switch; most common; if one cable breaks, other computers continue unaffected). 2) Bus Topology (single central backbone cable terminated at ends; cheap; if backbone breaks, entire network fails). 3) Ring Topology. 4) Mesh Topology (redundant links; high reliability; expensive). Transmission Media: Guided (Twisted pair UTP/STP, Coaxial cable, Fiber Optic - light pulses, immune to EMI) vs Unguided (Radio waves, Microwaves, Infrared, Satellite).</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering network topologies & transmission media equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Network Topologies & Transmission Media",
            "problem": "Explain how a student or IT professional applies Network Topologies & Transmission Media to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: Star Topology: Central hub/switch failure downs the network; individual cable break affects only that node."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Network Topologies & Transmission Media?",
              "a": "Star Topology: Central hub/switch failure downs the network; individual cable break affects only that node"
            },
            {
              "q": "Why is Star topology standard in modern school computer labs instead of Bus topology?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "Why are trans-continental internet backbones built using undersea fiber-optic cables rather than copper wires?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Network Topologies & Transmission Media?",
              "options": [
                "Star Topology: Central hub/switch failure downs the network; individual cable break affects only that node",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: Star Topology: Central hub/switch failure downs the network; individual cable break affects only that node.",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving network topologies & transmission media, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering network topologies & transmission media support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u5",
      "number": "Unit 5",
      "title": "Introduction to Programming & Algorithms",
      "bigIdea": "Understand computational thinking, algorithm design, flowchart symbols, pseudocode, and core control structures.",
      "subtopics": [
        {
          "id": "g8-it-5.1",
          "code": "5.1",
          "title": "Problem Solving, Algorithm Design & Flowchart Symbols",
          "survey": {
            "blueprint": "Algorithm: A finite, step-by-step sequence of unambiguous instructions to solve a specific problem. Characteristics: Unambiguous, finite, well-defined inputs/outputs, effective. Flowchart: Graphical representation of an algorithm. Standard Symbols: Oval (Terminal - Start/Stop), Parallelogram (Input/Output), Rectangle (Process / Computation), Diamond (Decision - Condition with Yes/No branches), Flow lines (Arrows directing execution).",
            "objectives": [
              "Define an algorithm and state the required properties of valid algorithms.",
              "Construct flowcharts using standard ISO flowcharting symbols."
            ],
            "keyFormulas": "Flowchart Symbols: Oval = Start/End | Parallelogram = Input/Output | Rectangle = Process | Diamond = Decision"
          },
          "questions": [
            "Why must an algorithm have a guaranteed termination condition (finiteness)?",
            "What flowchart symbol is used when checking if a student score is greater than or equal to 50?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Problem Solving, Algorithm Design & Flowchart Symbols</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Algorithm: A finite, step-by-step sequence of unambiguous instructions to solve a specific problem. Characteristics: Unambiguous, finite, well-defined inputs/outputs, effective. Flowchart: Graphical representation of an algorithm. Standard Symbols: Oval (Terminal - Start/Stop), Parallelogram (Input/Output), Rectangle (Process / Computation), Diamond (Decision - Condition with Yes/No branches), Flow lines (Arrows directing execution).</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering problem solving, algorithm design & flowchart symbols equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Problem Solving, Algorithm Design & Flowchart Symbols",
            "problem": "Explain how a student or IT professional applies Problem Solving, Algorithm Design & Flowchart Symbols to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: Flowchart Symbols: Oval = Start/End | Parallelogram = Input/Output | Rectangle = Process | Diamond = Decision."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Problem Solving, Algorithm Design & Flowchart Symbols?",
              "a": "Flowchart Symbols: Oval = Start/End | Parallelogram = Input/Output | Rectangle = Process | Diamond = Decision"
            },
            {
              "q": "Why must an algorithm have a guaranteed termination condition (finiteness)?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "What flowchart symbol is used when checking if a student score is greater than or equal to 50?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Problem Solving, Algorithm Design & Flowchart Symbols?",
              "options": [
                "Flowchart Symbols: Oval = Start/End | Parallelogram = Input/Output | Rectangle = Process | Diamond = Decision",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: Flowchart Symbols: Oval = Start/End | Parallelogram = Input/Output | Rectangle = Process | Diamond = Decision.",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving problem solving, algorithm design & flowchart symbols, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering problem solving, algorithm design & flowchart symbols support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        },
        {
          "id": "g8-it-5.2",
          "code": "5.2",
          "title": "Control Structures: Sequence, Selection & Iteration",
          "survey": {
            "blueprint": "The Three Fundamental Control Structures (Böhm-Jacopini theorem): 1) Sequence: Executing statements strictly one after another in order. 2) Selection (Decision / Branching): Choosing which path to execute based on a Boolean condition (IF-THEN-ELSE). 3) Iteration (Looping / Repetition): Repeating a block of statements while a condition is true or for a set count (WHILE, FOR loops). Variables and assignment.",
            "objectives": [
              "Differentiate sequence, selection, and iteration in pseudocode algorithms.",
              "Trace variable values through sequential, conditional, and looped algorithms."
            ],
            "keyFormulas": "Three Control Structures: Sequence (Do A, then B) | Selection (IF condition THEN A ELSE B) | Iteration (WHILE condition DO A)"
          },
          "questions": [
            "In what programming scenario is an iteration (loop) structure required instead of sequence?",
            "Write a simple pseudocode algorithm to determine if an integer is even or odd."
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Control Structures: Sequence, Selection & Iteration</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">The Three Fundamental Control Structures (Böhm-Jacopini theorem): 1) Sequence: Executing statements strictly one after another in order. 2) Selection (Decision / Branching): Choosing which path to execute based on a Boolean condition (IF-THEN-ELSE). 3) Iteration (Looping / Repetition): Repeating a block of statements while a condition is true or for a set count (WHILE, FOR loops). Variables and assignment.</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering control structures: sequence, selection & iteration equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Control Structures: Sequence, Selection & Iteration",
            "problem": "Explain how a student or IT professional applies Control Structures: Sequence, Selection & Iteration to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: Three Control Structures: Sequence (Do A, then B) | Selection (IF condition THEN A ELSE B) | Iteration (WHILE condition DO A)."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Control Structures: Sequence, Selection & Iteration?",
              "a": "Three Control Structures: Sequence (Do A, then B) | Selection (IF condition THEN A ELSE B) | Iteration (WHILE condition DO A)"
            },
            {
              "q": "In what programming scenario is an iteration (loop) structure required instead of sequence?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "Write a simple pseudocode algorithm to determine if an integer is even or odd.",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Control Structures: Sequence, Selection & Iteration?",
              "options": [
                "Three Control Structures: Sequence (Do A, then B) | Selection (IF condition THEN A ELSE B) | Iteration (WHILE condition DO A)",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: Three Control Structures: Sequence (Do A, then B) | Selection (IF condition THEN A ELSE B) | Iteration (WHILE condition DO A).",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving control structures: sequence, selection & iteration, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering control structures: sequence, selection & iteration support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u6",
      "number": "Unit 6",
      "title": "Information Security, Cyber Ethics & Intellectual Property",
      "bigIdea": "Analyze computer malware, firewalls, encryption, cyber ethics, software piracy, copyright, and digital privacy.",
      "subtopics": [
        {
          "id": "g8-it-6.1",
          "code": "6.1",
          "title": "Malware Threats, Ransomware & Cybersecurity Defenses",
          "survey": {
            "blueprint": "Malware (Malicious Software): Software designed to disrupt, damage, or gain unauthorized access to computer systems. Types: Virus, Worm, Spyware (tracks keystrokes and browsing habits), Adware, Ransomware (encrypts user files and demands ransom money to unlock). Defenses: End-point antivirus with daily definition updates, Firewalls, Secure OS patches, Data backups (3-2-1 backup rule: 3 copies, 2 different media, 1 offsite/cloud).",
            "objectives": [
              "Classify malware categories and explain how ransomware attacks occur.",
              "Apply data protection strategies including the 3-2-1 backup methodology."
            ],
            "keyFormulas": "3-2-1 Backup Rule: Maintain 3 total copies of critical data on 2 different storage media types with 1 copy stored offsite/cloud"
          },
          "questions": [
            "How does ransomware extort computer users, and why does maintaining offline backups neutralize this threat?",
            "What is the purpose of regular operating system security patches?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Malware Threats, Ransomware & Cybersecurity Defenses</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Malware (Malicious Software): Software designed to disrupt, damage, or gain unauthorized access to computer systems. Types: Virus, Worm, Spyware (tracks keystrokes and browsing habits), Adware, Ransomware (encrypts user files and demands ransom money to unlock). Defenses: End-point antivirus with daily definition updates, Firewalls, Secure OS patches, Data backups (3-2-1 backup rule: 3 copies, 2 different media, 1 offsite/cloud).</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering malware threats, ransomware & cybersecurity defenses equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Malware Threats, Ransomware & Cybersecurity Defenses",
            "problem": "Explain how a student or IT professional applies Malware Threats, Ransomware & Cybersecurity Defenses to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: 3-2-1 Backup Rule: Maintain 3 total copies of critical data on 2 different storage media types with 1 copy stored offsite/cloud."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Malware Threats, Ransomware & Cybersecurity Defenses?",
              "a": "3-2-1 Backup Rule: Maintain 3 total copies of critical data on 2 different storage media types with 1 copy stored offsite/cloud"
            },
            {
              "q": "How does ransomware extort computer users, and why does maintaining offline backups neutralize this threat?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "What is the purpose of regular operating system security patches?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Malware Threats, Ransomware & Cybersecurity Defenses?",
              "options": [
                "3-2-1 Backup Rule: Maintain 3 total copies of critical data on 2 different storage media types with 1 copy stored offsite/cloud",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: 3-2-1 Backup Rule: Maintain 3 total copies of critical data on 2 different storage media types with 1 copy stored offsite/cloud.",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving malware threats, ransomware & cybersecurity defenses, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering malware threats, ransomware & cybersecurity defenses support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        },
        {
          "id": "g8-it-6.2",
          "code": "6.2",
          "title": "Cyber Ethics, Intellectual Property, Copyright & Plagiarism",
          "survey": {
            "blueprint": "Cyber Ethics: Moral principles governing acceptable behavior in cyberspace. Intellectual Property (IP): Legal rights protecting human creations of the mind (inventions, literary works, software code). Copyright: Legal protection granted to creators prohibiting unauthorized copying, reproduction, or distribution. Plagiarism: Copying someone else’s text, code, or ideas and presenting them as one’s own original work without proper attribution. Software Piracy: Illegally copying or distributing proprietary commercial software. Creative Commons and Open Source.",
            "objectives": [
              "Define intellectual property, copyright, and software piracy.",
              "Distinguish ethical research citation from academic plagiarism.",
              "Explain open-source software licenses vs proprietary commercial licenses."
            ],
            "keyFormulas": "Academic Integrity = Original Thought + Honest Attribution of All External Sources and Citations"
          },
          "questions": [
            "Why is copying text directly from Wikipedia into a school project without citation considered plagiarism?",
            "What are the legal and security risks of installing pirated software downloaded from untrusted torrent sites?"
          ],
          "coreNotes": "\n          <div class=\"space-y-4 text-slate-200\">\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-amber-400\">💻 1. Core Technical Concepts: Cyber Ethics, Intellectual Property, Copyright & Plagiarism</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">Cyber Ethics: Moral principles governing acceptable behavior in cyberspace. Intellectual Property (IP): Legal rights protecting human creations of the mind (inventions, literary works, software code). Copyright: Legal protection granted to creators prohibiting unauthorized copying, reproduction, or distribution. Plagiarism: Copying someone else’s text, code, or ideas and presenting them as one’s own original work without proper attribution. Software Piracy: Illegally copying or distributing proprietary commercial software. Creative Commons and Open Source.</p>\n            </div>\n            <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n              <h4 class=\"text-sm font-bold text-cyan-400\">🛠️ 2. Practical Application & Ethiopian Context</h4>\n              <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                Mastering cyber ethics, intellectual property, copyright & plagiarism equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.\n              </p>\n            </div>\n          </div>\n        ",
          "example": {
            "title": "Worked Example: Practical Application of Cyber Ethics, Intellectual Property, Copyright & Plagiarism",
            "problem": "Explain how a student or IT professional applies Cyber Ethics, Intellectual Property, Copyright & Plagiarism to solve a real-world computing task.",
            "steps": [
              {
                "label": "Step 1: Identify technical requirements",
                "text": "Determine the relevant hardware, software, or algorithmic parameters."
              },
              {
                "label": "Step 2: Execute procedure",
                "text": "Apply standard best practices: Academic Integrity = Original Thought + Honest Attribution of All External Sources and Citations."
              },
              {
                "label": "Step 3: Verification",
                "text": "Verify operational integrity, security, and data accuracy."
              }
            ],
            "proTip": "Consistent hands-on practice in the computer laboratory builds true technical mastery!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the core rule or definition of Cyber Ethics, Intellectual Property, Copyright & Plagiarism?",
              "a": "Academic Integrity = Original Thought + Honest Attribution of All External Sources and Citations"
            },
            {
              "q": "Why is copying text directly from Wikipedia into a school project without citation considered plagiarism?",
              "a": "It optimizes performance, ensures reliable data processing, and prevents critical failures."
            },
            {
              "q": "What are the legal and security risks of installing pirated software downloaded from untrusted torrent sites?",
              "a": "It protects digital assets, ensures legal compliance, and maintains cybersecurity."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which of the following statements most accurately reflects the core computing principle of Cyber Ethics, Intellectual Property, Copyright & Plagiarism?",
              "options": [
                "Academic Integrity = Original Thought + Honest Attribution of All External Sources and Citations",
                "Computers function without any hardware architecture or memory",
                "Digital systems do not require software or operating systems",
                "Security measures and backups are completely unnecessary in modern computing"
              ],
              "correct": 0,
              "strategy": "Select the statement that reflects sound computer science principles.",
              "derivation": "Option A correctly states the fundamental principle: Academic Integrity = Original Thought + Honest Attribution of All External Sources and Citations.",
              "trap": "Choosing options that dismiss hardware, software, or cybersecurity requirements."
            },
            {
              "q": "When implementing solutions involving cyber ethics, intellectual property, copyright & plagiarism, what is the primary technical consideration?",
              "options": [
                "Ensuring logical correctness, system compatibility, data integrity, and adherence to cybersecurity standards",
                "Bypassing error-checking routines to save processing cycles",
                "Using unverified proprietary software without software licensing",
                "Connecting to unsecured public wireless networks without encryption"
              ],
              "correct": 0,
              "strategy": "High-quality computing solutions prioritize correctness, security, and integrity.",
              "derivation": "Computer systems must be architected with systematic validation, secure communication protocols, and ethical licensing.",
              "trap": "Prioritizing speed over security and data integrity."
            },
            {
              "q": "How does mastering cyber ethics, intellectual property, copyright & plagiarism support national digital transformation in Ethiopia?",
              "options": [
                "By building local capacity to develop reliable software, manage secure networks, and analyze quantitative datasets",
                "By eliminating the need for national telecommunication infrastructure",
                "By restricting digital literacy to urban centers only",
                "By encouraging unauthorized distribution of intellectual property"
              ],
              "correct": 0,
              "strategy": "Digital skills empower local innovation and economic modernization.",
              "derivation": "Building domestic expertise in programming, networking, data analysis, and security drives technological self-reliance.",
              "trap": "Selecting options that promote digital inequality or intellectual property theft."
            }
          ]
        }
      ]
    }
  ]
};
