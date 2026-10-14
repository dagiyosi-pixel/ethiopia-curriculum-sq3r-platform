module.exports = {
  "id": "it",
  "name": "Information Technology",
  "icon": "💻",
  "units": [
    {
      "id": "g8-it-u1",
      "number": "Unit 1",
      "title": "Computer Systems Architecture & Hardware",
      "bigIdea": "Explore microprocessor architecture, system buses, clock speed, cache memory hierarchies, and modern storage interfaces (SSD vs HDD).",
      "subtopics": [
        {
          "id": "g8-it-1.1",
          "code": "1.1",
          "title": "CPU Architecture, Cache Memory & Storage Buses",
          "survey": {
            "blueprint": "Microprocessor components: ALU, CU, Registers, Cache (L1, L2, L3). Clock speed (GHz). System buses: Data Bus, Address Bus, Control Bus. NVMe PCIe SSDs vs SATA HDDs.",
            "objectives": [
              "Explain the machine instruction cycle: Fetch ➔ Decode ➔ Execute ➔ Store.",
              "Describe the speed hierarchy: Registers > L1/L2 Cache > RAM > SSD > HDD.",
              "Distinguish data bus, address bus, and control bus functions."
            ],
            "keyFormulas": "Clock Speed: 1 GHz = 1 Billion CPU cycles per second &nbsp;|&nbsp; Fetch-Decode-Execute Cycle"
          },
          "questions": [
            "Why does CPU Cache memory operate much faster than system RAM?",
            "How does bus width (e.g., 64-bit architecture) affect maximum addressable memory capacity?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Microprocessor Architecture & Storage Metrology</h4>\n              <p>• <strong>The Machine Cycle:</strong><br>\n                - <em>Fetch:</em> Retrieves instruction from memory using the Program Counter.<br>\n                - <em>Decode:</em> Translates binary opcode in the Instruction Register.<br>\n                - <em>Execute:</em> ALU performs the calculation or logic operation.<br>\n                - <em>Store:</em> Writes output result to register or RAM.<br>\n              • <strong>Memory Cache Hierarchy:</strong> Level 1 (L1) sits directly on CPU core (fastest, smallest); L2/L3 provide slightly larger buffers preventing CPU bottlenecks.<br>\n              • <strong>Storage Buses:</strong> NVMe (Non-Volatile Memory Express) over PCIe lanes delivers speeds >3,500 MB/s, compared to traditional mechanical spinning SATA HDDs (~150 MB/s).</p>\n            </div>\n          ",
          "example": {
            "title": "Analyzing Memory Speed Hierarchies",
            "problem": "Rank the following computer memory and storage types in order from fastest access speed to slowest: RAM, L1 Cache, NVMe SSD, CPU Registers.",
            "steps": [
              {
                "label": "Step 1: Fastest (on-chip)",
                "text": "CPU Registers (instant access within processor cycle)."
              },
              {
                "label": "Step 2: Second fastest",
                "text": "L1 Cache (ultra-fast SRAM on core die)."
              },
              {
                "label": "Step 3: Third fastest",
                "text": "RAM (DDR4/DDR5 dynamic memory on motherboard)."
              },
              {
                "label": "Step 4: Slowest among these",
                "text": "NVMe SSD (flash storage over PCIe bus)."
              }
            ],
            "proTip": "CPU Registers > L1 Cache > L2 Cache > L3 Cache > RAM > NVMe SSD > HDD!"
          },
          "reciteFlashcards": [
            {
              "q": "What are the four stages of the CPU machine cycle?",
              "a": "Fetch, Decode, Execute, and Store."
            },
            {
              "q": "Which memory type is located directly inside the CPU core for fastest access?",
              "a": "CPU Registers (and L1 Cache)."
            }
          ],
          "amtQuiz": [
            {
              "q": "Why is CPU Cache Memory (L1, L2, L3) built directly into the processor chip using ultra-fast Static RAM (SRAM)?",
              "options": [
                "To provide massive terabyte storage for movie collections",
                "To bridge the performance speed gap between the high-speed CPU processor and the slower main system RAM",
                "To reduce the electrical voltage of the computer power supply",
                "To eliminate the need for an operating system"
              ],
              "correct": 1,
              "strategy": "Cache memory minimizes CPU idle wait states by pre-fetching data.",
              "derivation": "The CPU operates at gigahertz speeds, whereas main RAM is slower. Multi-level SRAM cache stores frequently accessed instructions right next to the processor execution cores.",
              "trap": "Thinking cache is large-capacity bulk storage."
            },
            {
              "q": "Which system bus on the computer motherboard is responsible for transmitting the physical memory addresses where data should be read from or written to?",
              "options": [
                "The Data Bus",
                "The Address Bus",
                "The Control Bus",
                "The Power Bus"
              ],
              "correct": 1,
              "strategy": "Address Bus carries memory locations; Data Bus carries the actual values.",
              "derivation": "The Address Bus is unidirectional, carrying binary memory addresses from the CPU to RAM. The Data Bus is bidirectional, transferring the actual data bytes.",
              "trap": "Confusing the Address Bus with the Data Bus."
            },
            {
              "q": "What metric measures the internal clock rate (number of machine cycles per second) of a modern computer microprocessor?",
              "options": [
                "Gigahertz (GHz)",
                "Gigabytes (GB)",
                "Megapixels (MP)",
                "Dots per inch (DPI)"
              ],
              "correct": 0,
              "strategy": "Clock speed is frequency measured in Hertz (GHz = billion cycles per second).",
              "derivation": "CPU clock speed is expressed in GHz (gigahertz). Storage capacity is measured in GB; display resolution in DPI or MP.",
              "trap": "Confusing clock speed (GHz) with RAM capacity (GB)."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u2",
      "number": "Unit 2",
      "title": "Spreadsheets & Quantitative Analysis",
      "bigIdea": "Master spreadsheet computational models: cell references (relative vs absolute), formulas (=SUM, =AVERAGE, =IF, =COUNTIF), and data charts.",
      "subtopics": [
        {
          "id": "g8-it-2.1",
          "code": "2.1",
          "title": "Formulas, Functions & Absolute Cell Referencing ($)",
          "survey": {
            "blueprint": "Spreadsheet Formulas begin with \"=\". Relative references (A1) adjust when copied; Absolute references ($A$1) stay locked. Logical formulas: =IF(condition, value_if_true, value_if_false).",
            "objectives": [
              "Write spreadsheet calculations using SUM, AVERAGE, MIN, MAX, and COUNT.",
              "Use the dollar sign ($) to lock rows and columns with absolute cell referencing.",
              "Implement logical =IF() statements to assign letter grades or pass/fail flags."
            ],
            "keyFormulas": "=IF(B2>=50, \"Pass\", \"Fail\") &nbsp;|&nbsp; Absolute Cell: $B$1 (locks column B and row 1)"
          },
          "questions": [
            "What happens when you copy formula =A1*B1 down one row versus =$A$1*B1?",
            "How can the =COUNTIF() function automate counting the number of passing students?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Spreadsheet Architecture & Computational Functions</h4>\n              <p>• <strong>Formula Syntax:</strong> Must always start with an equals sign (<code>=</code>).<br>\n              • <strong>Relative vs. Absolute Referencing:</strong><br>\n                - <em>Relative (e.g., A1):</em> Automatically shifts cell references when dragged or copied across cells.<br>\n                - <em>Absolute (e.g., $A$1):</em> Prepending <code>$</code> locks the row, column, or both so the referenced cell never changes during autofill.<br>\n              • <strong>Essential Functions:</strong><br>\n                - <code>=SUM(range)</code>: Sums values in range.<br>\n                - <code>=AVERAGE(range)</code>: Arithmetic mean.<br>\n                - <code>=MAX(range) / =MIN(range)</code>: Finds highest and lowest values.<br>\n                - <code>=IF(logical_test, val_if_true, val_if_false)</code>: Conditional logic.</p>\n            </div>\n          ",
          "example": {
            "title": "Applying Absolute Referencing in VAT Calculation",
            "problem": "Cell E1 contains the VAT rate of 15% (0.15). In column C, you have item prices (C2, C3, C4). Write the formula for cell D2 to calculate VAT amount that can be safely copied down to D4.",
            "steps": [
              {
                "label": "Step 1: Identify price cell",
                "text": "C2 (relative, needs to change to C3 and C4 as you copy down)."
              },
              {
                "label": "Step 2: Identify VAT tax rate cell",
                "text": "E1 must stay permanently fixed on cell E1 ➔ use absolute reference <strong>$E$1</strong>."
              },
              {
                "label": "Step 3: Combine formula",
                "text": "Enter in D2: <code>=C2 * $E$1</code>"
              }
            ],
            "proTip": "Pressing key F4 in Excel automatically toggles dollar signs for absolute referencing!"
          },
          "reciteFlashcards": [
            {
              "q": "What character is used in Excel to lock a cell reference as absolute?",
              "a": "The dollar sign ($), e.g., $C$5."
            },
            {
              "q": "Write the formula to find the highest score in cells B2 to B50.",
              "a": "=MAX(B2:B50)"
            }
          ],
          "amtQuiz": [
            {
              "q": "In spreadsheet software (such as Microsoft Excel or Google Sheets), what character must precede all formulas and functions to instruct the program to calculate a value?",
              "options": [
                "The hash symbol (#)",
                "The equals sign (=)",
                "The at symbol (@)",
                "The exclamation mark (!)"
              ],
              "correct": 1,
              "strategy": "All spreadsheet formulas begin with the equals sign (=).",
              "derivation": "Typing \"=SUM(A1:A10)\" instructs the spreadsheet calculation engine to evaluate the mathematical expression rather than storing it as literal text.",
              "trap": "Starting formulas with letters or numbers without the = sign."
            },
            {
              "q": "What is the purpose of using the dollar sign ($) in a spreadsheet cell reference, such as $C$4 (Absolute Cell Referencing)?",
              "options": [
                "It converts the number into US Dollar foreign currency",
                "It locks both the column (C) and row (4) coordinates so they do not shift when the formula is copied across other cells",
                "It deletes the contents of cell C4 automatically",
                "It highlights cell C4 in green color"
              ],
              "correct": 1,
              "strategy": "$ locks the coordinate from changing during formula fill.",
              "derivation": "Relative references (C4) shift when dragged. Adding $ ($C$4) locks the reference to a fixed cell (e.g. holding a tax rate or exchange rate constant).",
              "trap": "Assuming $ denotes currency format rather than cell coordinate locking!"
            },
            {
              "q": "Which spreadsheet function evaluates a logical condition and returns one value if the condition is TRUE and another value if it is FALSE?",
              "options": [
                "=SUM()",
                "=AVERAGE()",
                "=IF()",
                "=COUNT()"
              ],
              "correct": 2,
              "strategy": "The =IF(condition, value_if_true, value_if_false) function.",
              "derivation": "The =IF() function performs conditional logic: for example, =IF(B2>=50, \"Pass\", \"Fail\").",
              "trap": "Confusing arithmetic functions (SUM/AVERAGE) with logical conditions."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u3",
      "number": "Unit 3",
      "title": "Presentation Software Mastery",
      "bigIdea": "Master presentation software (PowerPoint/Google Slides): Slide Master, slide transitions, object animations, multimedia embedding, and public speaking deck design.",
      "subtopics": [
        {
          "id": "g8-it-3.1",
          "code": "3.1",
          "title": "Slide Masters, Transitions & Visual Design Rules",
          "survey": {
            "blueprint": "Slide Master (controls universal layout, fonts, logo placement across all slides). Transitions (movement between slides) vs Animations (movement of elements on a slide). The 6x6 rule of slide design.",
            "objectives": [
              "Customize the Slide Master for consistent professional branding.",
              "Differentiate slide transitions from entry, emphasis, and exit animations.",
              "Apply graphic design principles: high contrast, 6x6 rule, and avoiding text clutter."
            ],
            "keyFormulas": "Design 6x6 Rule: Maximum 6 bullet points per slide, maximum 6 words per bullet point"
          },
          "questions": [
            "Why is it faster to edit universal slide colors and logos in the Slide Master rather than on each slide individually?",
            "What is the difference between a slide transition and an object animation?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Presentation Engineering & Visual Aesthetics</h4>\n              <p>• <strong>Slide Master:</strong> The top slide in the template hierarchy that stores theme information, default font types, color schemes, and header/footer positions across all sub-slides.<br>\n              • <strong>Transitions vs. Animations:</strong><br>\n                - <em>Slide Transitions:</em> Visual animation effects that occur when advancing from one slide to the next (e.g., Fade, Push, Wipe).<br>\n                - <em>Object Animations:</em> Visual effects applied to individual elements on a slide (Entrance, Emphasis, Exit, Motion Paths).<br>\n              • <strong>Professional Design Rules:</strong> Use high contrast (dark background with light text or vice versa), large legible fonts (minimum 24pt for body text), high-resolution imagery, and avoid reading full paragraphs off slides.</p>\n            </div>\n          ",
          "example": {
            "title": "Applying the 6x6 Presentation Rule",
            "problem": "A student copied a 150-word paragraph directly onto a PowerPoint slide for a biology class presentation. How should the slide be redesigned?",
            "steps": [
              {
                "label": "Step 1: Extract core ideas",
                "text": "Condense the paragraph into 4 key concise bullet points."
              },
              {
                "label": "Step 2: Limit word count",
                "text": "Ensure each bullet has no more than 5-6 words (The 6x6 rule)."
              },
              {
                "label": "Step 3: Add supporting visual",
                "text": "Include a clean diagram or photo illustrating the biological concept alongside the bullets."
              }
            ],
            "proTip": "Slides are visual anchors for your audience, not speaker cue teleprompters!"
          },
          "reciteFlashcards": [
            {
              "q": "What tool allows you to change the font and background on every slide simultaneously?",
              "a": "The Slide Master."
            },
            {
              "q": "What is the visual effect that plays when moving between slides called?",
              "a": "A Slide Transition."
            }
          ],
          "amtQuiz": [
            {
              "q": "In presentation software, what is the Slide Master used for?",
              "options": [
                "To manually draw cartoon figures with vector brushes",
                "To establish universal global formatting (fonts, background theme, logo placement, footer text) across all slides in the presentation simultaneously",
                "To convert presentations into audio podcast recordings",
                "To print physical business cards"
              ],
              "correct": 1,
              "strategy": "Slide Master controls the hierarchy and global formatting of all slides.",
              "derivation": "Modifying the Slide Master applies uniform theme layouts, company logos, and typographic hierarchy to every slide without editing slides individually.",
              "trap": "Formatting every slide manually one by one."
            },
            {
              "q": "What is the visual difference between a Slide Transition and an Animation in presentation software?",
              "options": [
                "A Transition is the motion effect that occurs when moving from one slide to the next slide, while an Animation is a motion effect applied to an individual element (text, image, chart) on a single slide",
                "Transitions only work with sound, while animations only work with video",
                "Transitions are strictly for black-and-white slides",
                "There is no technical difference between transitions and animations"
              ],
              "correct": 0,
              "strategy": "Transition = slide-to-slide motion; Animation = object-on-slide motion.",
              "derivation": "Transitions animate the entire canvas between slides (e.g. Fade, Wipe). Animations control the entrance, emphasis, or exit of specific bullet points or graphics.",
              "trap": "Confusing slide transitions with element animations."
            },
            {
              "q": "According to the standard \"6×6 Rule\" of professional presentation design, what practice should presenters follow to maintain legibility?",
              "options": [
                "Include no more than 6 bullet points per slide, with no more than 6 words per bullet point",
                "Use 6 different bright colors on every single line of text",
                "Show 6 full textbook paragraphs on each slide",
                "Set font size to exactly 6 points"
              ],
              "correct": 0,
              "strategy": "The 6×6 rule prevents cluttered, unreadable walls of text.",
              "derivation": "Slides should communicate concise key takeaways, not word-for-word transcriptions. The 6×6 rule ensures visual clarity and audience engagement.",
              "trap": "Filling slides with dense paragraphs."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u4",
      "number": "Unit 4",
      "title": "Computer Networks & Network Topologies",
      "bigIdea": "Explore computer networking: LAN, MAN, WAN, network topologies (Star, Bus, Ring, Mesh), IP addresses, DNS, and transmission media (Fiber optics vs Wi-Fi).",
      "subtopics": [
        {
          "id": "g8-it-4.1",
          "code": "4.1",
          "title": "Network Scales, Topologies & Network Protocols",
          "survey": {
            "blueprint": "Network Scales: LAN (Local Area Network - school lab), MAN (Metropolitan), WAN (Wide Area - Internet). Topologies: Star (central switch/hub), Bus (single backbone), Ring, Mesh (highest redundancy). IP addressing and DNS.",
            "objectives": [
              "Classify networks by geographical scope: LAN, MAN, WAN.",
              "Compare network physical topologies: Star, Bus, Ring, Mesh.",
              "Explain the function of Routers, Switches, IP addresses, and DNS servers."
            ],
            "keyFormulas": "DNS (Domain Name System) translates human names (google.com) into computer IP addresses (142.250.190.46)"
          },
          "questions": [
            "Why is Star topology the most widely used network configuration in modern computer labs?",
            "What happens in a Bus network if the central backbone cable breaks?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Networking Topology & Infrastructure Science</h4>\n              <p>• <strong>Network Scales:</strong><br>\n                - <em>LAN (Local Area Network):</em> Covers small local area (school computer lab, home, office building). High speed, low latency.<br>\n                - <em>MAN (Metropolitan Area Network):</em> Covers a town or city (e.g., Addis Ababa municipal cable network).<br>\n                - <em>WAN (Wide Area Network):</em> Spans continents or countries (e.g., The Global Internet, Ethio Telecom national backbone).<br>\n              • <strong>Network Topologies:</strong><br>\n                - <em>Star Topology:</em> All nodes connect to a central Switch/Hub. If one node cable fails, only that device disconnects; the rest remain active.<br>\n                - <em>Bus Topology:</em> Devices share a single linear central coaxial cable. If the backbone breaks, the entire network fails.<br>\n                - <em>Mesh Topology:</em> Every device connects redundantly to multiple devices (fault-tolerant, used in military and core internet).<br>\n              • <strong>Networking Devices:</strong> Switch (connects LAN devices), Router (routes packets between different networks/WANs).</p>\n            </div>\n          ",
          "example": {
            "title": "Selecting a Network Topology for a School Lab",
            "problem": "A school in Hawassa plans to build a computer lab with 30 desktop computers. Evaluate whether Bus or Star topology is better suited.",
            "steps": [
              {
                "label": "Step 1: Evaluate Bus topology",
                "text": "Cheaper cabling, but if the main trunk line breaks, all 30 PCs lose network connectivity immediately; difficult to troubleshoot."
              },
              {
                "label": "Step 2: Evaluate Star topology",
                "text": "Requires individual UTP cables to a 32-port central network switch. If one student accidentally unplugs their cable, the other 29 computers remain operational."
              },
              {
                "label": "Step 3: Recommendation",
                "text": "Select <strong>Star Topology</strong> for reliability and ease of troubleshooting."
              }
            ],
            "proTip": "Star topology is the universal standard in modern ethernet local area networks!"
          },
          "reciteFlashcards": [
            {
              "q": "In Star network topology, what central device connects all computers together?",
              "a": "A Network Switch (or Hub)."
            },
            {
              "q": "What does DNS stand for in computer networking?",
              "a": "Domain Name System (translates domain names into numeric IP addresses)."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which network topology connects all client computers to a single central device (such as a network switch or hub), ensuring that the failure of one cable does not bring down the entire network?",
              "options": [
                "Bus Topology",
                "Star Topology",
                "Ring Topology",
                "Linear Chain Topology"
              ],
              "correct": 1,
              "strategy": "Star topology connects all nodes radially to a central switch.",
              "derivation": "In a Star topology, every workstation has an independent point-to-point connection to the central switch. If one cable fails, only that workstation is disconnected. In a Bus topology, a severed backbone cable brings down the entire network.",
              "trap": "Selecting Bus topology, which relies on a single shared backbone cable."
            },
            {
              "q": "How does a Local Area Network (LAN) differ from a Wide Area Network (WAN)?",
              "options": [
                "A LAN spans a restricted geographic area (such as a school computer lab or single office building), while a WAN covers vast geographical spans connecting cities, countries, or the globe (e.g. the Internet)",
                "A LAN only operates with fiber optic cables, while a WAN only operates with copper wires",
                "A LAN cannot connect more than two computers",
                "A WAN is completely disconnected from the internet"
              ],
              "correct": 0,
              "strategy": "LAN = local building/campus; WAN = wide geographical/global.",
              "derivation": "LAN (Local Area Network) covers a school or home. WAN (Wide Area Network) connects disparate regional and continental networks (the Internet is the largest WAN).",
              "trap": "Inverting geographic scales."
            },
            {
              "q": "Which networking device operates at Layer 3 to inspect IP destination addresses and route data packets across different interconnected networks?",
              "options": [
                "A Network Repeater",
                "A Dumb Hub",
                "A Router",
                "An Ethernet RJ45 Connector"
              ],
              "correct": 2,
              "strategy": "Routers route packets between different IP networks.",
              "derivation": "A router reads network layer (IP) headers and routes packets across optimal paths between distinct subnets and the wider internet.",
              "trap": "Confusing routers with physical layer hubs or simple repeaters."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u5",
      "number": "Unit 5",
      "title": "Introduction to Programming & Algorithms",
      "bigIdea": "Explore computational logic: algorithms, flowchart symbols, pseudocode, variables, sequential logic, selection (if-else), and iteration (loops).",
      "subtopics": [
        {
          "id": "g8-it-5.1",
          "code": "5.1",
          "title": "Algorithms, Flowcharts & Control Structures",
          "survey": {
            "blueprint": "Algorithm: Step-by-step procedure to solve a problem. Flowchart symbols: Oval (Start/End), Parallelogram (Input/Output), Rectangle (Process), Diamond (Decision/If-Else). Control structures: Sequence, Selection, Iteration.",
            "objectives": [
              "Write clear step-by-step algorithms for mathematical and computational tasks.",
              "Design flowcharts using standardized ISO symbols.",
              "Identify the three fundamental programming control structures: Sequence, Selection (branching), and Iteration (looping)."
            ],
            "keyFormulas": "Flowchart Symbols: Oval (Terminal) | Rectangle (Process) | Parallelogram (I/O) | Diamond (Decision)"
          },
          "questions": [
            "Why must every algorithm be finite, precise, and unambiguous?",
            "What flowchart shape is used to represent an \"IF condition\" that branches into True and False paths?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Algorithmic Logic & Flowchart Conventions</h4>\n              <p>• <strong>Algorithm:</strong> An ordered, unambiguous set of step-by-step instructions that terminates with a solution.<br>\n              • <strong>Flowchart Standard Symbols:</strong><br>\n                - <em>Oval / Rounded Rectangle:</em> Start / Stop (Terminal).<br>\n                - <em>Parallelogram:</em> Input data or Output result (e.g., Read A, Print Total).<br>\n                - <em>Rectangle:</em> Process / Calculation (e.g., Sum = A + B).<br>\n                - <em>Diamond:</em> Decision / Condition test with two diverging paths (True/Yes or False/No).<br>\n                - <em>Flowline (Arrow):</em> Direction of process flow.<br>\n              • <strong>Three Core Control Structures:</strong><br>\n                1. <em>Sequence:</em> Steps execute one after another in order.<br>\n                2. <em>Selection (Branching):</em> Decision making using IF-THEN-ELSE.<br>\n                3. <em>Iteration (Looping):</em> Repeating steps while a condition remains true (FOR, WHILE).</p>\n            </div>\n          ",
          "example": {
            "title": "Drafting an Algorithm & Pseudocode to Find the Larger of Two Numbers",
            "problem": "Write pseudocode to input two numbers A and B and display the larger number.",
            "steps": [
              {
                "label": "Step 1: Start and input",
                "text": "START<br>INPUT A, B"
              },
              {
                "label": "Step 2: Selection condition",
                "text": "IF A > B THEN<br>&nbsp;&nbsp;PRINT \"A is larger\"<br>ELSE IF B > A THEN<br>&nbsp;&nbsp;PRINT \"B is larger\"<br>ELSE<br>&nbsp;&nbsp;PRINT \"Both are equal\"<br>ENDIF"
              },
              {
                "label": "Step 3: Termination",
                "text": "STOP"
              }
            ],
            "proTip": "Always specify what happens when numbers are equal to avoid logic bugs!"
          },
          "reciteFlashcards": [
            {
              "q": "What shape represents a Decision or Condition in a flowchart?",
              "a": "A Diamond."
            },
            {
              "q": "What are the three fundamental programming control structures?",
              "a": "Sequence, Selection (Branching), and Iteration (Looping)."
            }
          ],
          "amtQuiz": [
            {
              "q": "In algorithm design and standard flowchart notation, what geometrical shape is used to represent a conditional decision or branching question (e.g. \"Is x > 0?\")?",
              "options": [
                "Oval (Rounded Rectangle)",
                "Diamond (Rhombus)",
                "Rectangle",
                "Parallelogram"
              ],
              "correct": 1,
              "strategy": "Diamond represents Decision; Oval = Start/End; Rectangle = Process; Parallelogram = Input/Output.",
              "derivation": "A Diamond has multiple outgoing condition paths (True/False, Yes/No) representing conditional branching in flowcharts.",
              "trap": "Confusing Rectangle (process calculation) with Diamond (conditional decision)."
            },
            {
              "q": "What is the precise definition of an \"Algorithm\" in computer science?",
              "options": [
                "A physical silicon microchip soldered to a motherboard",
                "A step-by-step, finite, unambiguous sequence of instructions designed to solve a specific problem or perform a task",
                "A computer virus that corrupts secondary storage",
                "A specialized software license for proprietary games"
              ],
              "correct": 1,
              "strategy": "Algorithm = step-by-step finite problem-solving procedure.",
              "derivation": "An algorithm must be finite, well-defined, and effective, taking inputs and producing deterministic outputs in a sequence of operations.",
              "trap": "Confusing algorithms with physical hardware chips."
            },
            {
              "q": "Which fundamental control structure repeats a specific block of instructions multiple times until a terminating condition is met (e.g. \"While\" or \"For\" loop)?",
              "options": [
                "Sequence Structure",
                "Selection Structure",
                "Iteration (Looping) Structure",
                "Decomposition Structure"
              ],
              "correct": 2,
              "strategy": "Iteration (looping) repeats execution.",
              "derivation": "The three core control structures are: Sequence (line by line), Selection (if/else branching), and Iteration/Repetition (loops repeating code).",
              "trap": "Selecting Sequence (which executes each step only once)."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-it-u6",
      "number": "Unit 6",
      "title": "Information Security, Cyber Ethics & Cyber Law",
      "bigIdea": "Explore cybersecurity defense: malware types (viruses, worms, ransomware), encryption, firewalls, cyber laws in Ethiopia, and digital intellectual property.",
      "subtopics": [
        {
          "id": "g8-it-6.1",
          "code": "6.1",
          "title": "Malware Vectors, Encryption & Computer Ethics",
          "survey": {
            "blueprint": "Malware taxonomy: Viruses (need host file), Worms (self-replicating across networks), Trojans (disguised legitimate software), Ransomware (encrypts files for ransom). Defense: Antivirus, Firewalls, Two-Factor Authentication (2FA), Intellectual property laws.",
            "objectives": [
              "Classify types of malicious software: Viruses, Worms, Trojans, Ransomware, Spyware.",
              "Explain how firewalls and encryption protect sensitive personal and financial data.",
              "Discuss copyright laws, software piracy, and ethical use of intellectual property in Ethiopia."
            ],
            "keyFormulas": "CIA Security Triad = Confidentiality + Integrity + Availability &nbsp;|&nbsp; 2FA = Password + OTP"
          },
          "questions": [
            "How does a computer worm differ from a traditional virus in how it spreads?",
            "Why is downloading and distributing pirated commercial software illegal and unethical?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Cybersecurity Architecture & Digital Ethics</h4>\n              <p>• <strong>Malware Taxonomy:</strong><br>\n                - <em>Virus:</em> Malicious code that attaches to a host executable file and requires human action (clicking/running) to spread.<br>\n                - <em>Worm:</em> Self-replicating autonomous malware that spreads across computer networks without requiring a host program or user action.<br>\n                - <em>Trojan Horse:</em> Malware disguised as a desirable or harmless game/utility, opening a secret backdoor for hackers.<br>\n                - <em>Ransomware:</em> Encrypts user files with military-grade ciphers and demands payment (usually cryptocurrency) for decryption keys.<br>\n              • <strong>Defensive Tools:</strong> Firewalls (inspect and filter incoming/outgoing network packets), Antivirus software (signature heuristic detection), Two-Factor Authentication (2FA: password + dynamic SMS/app token).<br>\n              • <strong>Software Piracy:</strong> Unauthorized copying, distribution, or use of copyrighted proprietary software. Violates Ethiopian intellectual property and copyright proclamations.</p>\n            </div>\n          ",
          "example": {
            "title": "Analyzing a Ransomware Cyber Attack Scenario",
            "problem": "A school administrative computer displays a red warning: \"All student database records have been encrypted. Pay $500 in Bitcoin to unlock within 24 hours.\" Identify the attack and preventive defenses.",
            "steps": [
              {
                "label": "Step 1: Identify malware class",
                "text": "This is a <strong>Ransomware attack</strong>."
              },
              {
                "label": "Step 2: Immediate protocol",
                "text": "Disconnect the infected computer from the school network immediately to stop lateral spreading."
              },
              {
                "label": "Step 3: Best defense practice",
                "text": "Restore student records from an offline, disconnected 3-2-1 backup drive rather than paying criminals."
              }
            ],
            "proTip": "Maintaining offline backups is the single most effective defense against ransomware!"
          },
          "reciteFlashcards": [
            {
              "q": "Which type of malware replicates and spreads across computer networks autonomously without requiring a host file?",
              "a": "A Computer Worm."
            },
            {
              "q": "What does 2FA stand for in account security?",
              "a": "Two-Factor Authentication (e.g., password + phone SMS verification code)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What form of malicious software (malware) encrypts a user’s documents and files, completely locking them out until an extortion payment is made to the attacker?",
              "options": [
                "Spyware",
                "Ransomware",
                "Adware",
                "Rootkit"
              ],
              "correct": 1,
              "strategy": "Ransomware demands a ransom to decrypt hijacked files.",
              "derivation": "Ransomware (such as WannaCry) silently encrypts storage drives with cryptographic keys and demands payment to restore access.",
              "trap": "Confusing ransomware with adware (which only displays popup advertisements)."
            },
            {
              "q": "What is the ethical and legal meaning of \"Copyright\" in digital software and media creation?",
              "options": [
                "The right of any internet user to copy and resell any file they find for free",
                "The exclusive legal right granted to the original creator of a creative or intellectual work to reproduce, distribute, and license it",
                "A government tax imposed on computer memory sticks",
                "A computer algorithm that automatically prints book pages"
              ],
              "correct": 1,
              "strategy": "Copyright grants exclusive rights to the creator.",
              "derivation": "Copyright protects original creative expressions (software code, books, music) from unauthorized reproduction or piracy, protecting intellectual property.",
              "trap": "Thinking copyright means permission to copy freely."
            },
            {
              "q": "How does Multi-Factor Authentication (MFA / 2FA) provide dramatically superior account security compared to a single password alone?",
              "options": [
                "It requires the user to memorize a 100-character password",
                "It requires two or more independent credentials for access: something you know (password) plus something you have (phone OTP code) or something you are (biometrics)",
                "It eliminates passwords completely and relies on guessing",
                "It automatically formats the computer hard drive upon logout"
              ],
              "correct": 1,
              "strategy": "MFA combines two or more distinct authentication factors.",
              "derivation": "Even if an attacker steals your password through phishing or data leaks, they cannot breach your account without the second factor (e.g. mobile authenticator code or fingerprint).",
              "trap": "Assuming having two identical passwords equals multi-factor authentication."
            }
          ]
        }
      ]
    }
  ]
};
