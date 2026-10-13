// Grade 8 Information Technology - Complete Ethiopian Curriculum Syllabus (Units 1 to 6)
module.exports = {
  id: 'it',
  name: 'Information Technology',
  icon: '💻',
  units: [
    {
      id: 'g8-it-u1',
      number: 'Unit 1',
      title: 'Computer Systems Architecture & Hardware',
      bigIdea: 'Explore microprocessor architecture, system buses, clock speed, cache memory hierarchies, and modern storage interfaces (SSD vs HDD).',
      subtopics: [
        {
          id: 'g8-it-1.1',
          code: '1.1',
          title: 'CPU Architecture, Cache Memory & Storage Buses',
          survey: {
            blueprint: 'Microprocessor components: ALU, CU, Registers, Cache (L1, L2, L3). Clock speed (GHz). System buses: Data Bus, Address Bus, Control Bus. NVMe PCIe SSDs vs SATA HDDs.',
            objectives: [
              'Explain the machine instruction cycle: Fetch ➔ Decode ➔ Execute ➔ Store.',
              'Describe the speed hierarchy: Registers > L1/L2 Cache > RAM > SSD > HDD.',
              'Distinguish data bus, address bus, and control bus functions.'
            ],
            keyFormulas: 'Clock Speed: 1 GHz = 1 Billion CPU cycles per second &nbsp;|&nbsp; Fetch-Decode-Execute Cycle'
          },
          questions: [
            'Why does CPU Cache memory operate much faster than system RAM?',
            'How does bus width (e.g., 64-bit architecture) affect maximum addressable memory capacity?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Microprocessor Architecture & Storage Metrology</h4>
              <p>• <strong>The Machine Cycle:</strong><br>
                - <em>Fetch:</em> Retrieves instruction from memory using the Program Counter.<br>
                - <em>Decode:</em> Translates binary opcode in the Instruction Register.<br>
                - <em>Execute:</em> ALU performs the calculation or logic operation.<br>
                - <em>Store:</em> Writes output result to register or RAM.<br>
              • <strong>Memory Cache Hierarchy:</strong> Level 1 (L1) sits directly on CPU core (fastest, smallest); L2/L3 provide slightly larger buffers preventing CPU bottlenecks.<br>
              • <strong>Storage Buses:</strong> NVMe (Non-Volatile Memory Express) over PCIe lanes delivers speeds >3,500 MB/s, compared to traditional mechanical spinning SATA HDDs (~150 MB/s).</p>
            </div>
          `,
          example: {
            title: 'Analyzing Memory Speed Hierarchies',
            problem: 'Rank the following computer memory and storage types in order from fastest access speed to slowest: RAM, L1 Cache, NVMe SSD, CPU Registers.',
            steps: [
              { label: 'Step 1: Fastest (on-chip)', text: 'CPU Registers (instant access within processor cycle).' },
              { label: 'Step 2: Second fastest', text: 'L1 Cache (ultra-fast SRAM on core die).' },
              { label: 'Step 3: Third fastest', text: 'RAM (DDR4/DDR5 dynamic memory on motherboard).' },
              { label: 'Step 4: Slowest among these', text: 'NVMe SSD (flash storage over PCIe bus).' }
            ],
            proTip: 'CPU Registers > L1 Cache > L2 Cache > L3 Cache > RAM > NVMe SSD > HDD!'
          },
          reciteFlashcards: [
            { q: 'What are the four stages of the CPU machine cycle?', a: 'Fetch, Decode, Execute, and Store.' },
            { q: 'Which memory type is located directly inside the CPU core for fastest access?', a: 'CPU Registers (and L1 Cache).' }
          ],
          amtQuiz: [
            {
              q: 'Which component of the computer system architecture holds the exact memory address of the next instruction waiting to be executed?',
              options: ['Program Counter (PC)', 'Accumulator', 'Arithmetic Logic Unit', 'Data Bus'],
              correct: 0,
              strategy: 'Recall CPU registers and their specific functions.',
              derivation: 'The Program Counter register stores the memory address of the next instruction to be fetched into the instruction register.',
              trap: 'The Accumulator stores intermediate arithmetic results, not instruction addresses!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-it-u2',
      number: 'Unit 2',
      title: 'Spreadsheets & Quantitative Analysis',
      bigIdea: 'Master spreadsheet computational models: cell references (relative vs absolute), formulas (=SUM, =AVERAGE, =IF, =COUNTIF), and data charts.',
      subtopics: [
        {
          id: 'g8-it-2.1',
          code: '2.1',
          title: 'Formulas, Functions & Absolute Cell Referencing ($)',
          survey: {
            blueprint: 'Spreadsheet Formulas begin with "=". Relative references (A1) adjust when copied; Absolute references ($A$1) stay locked. Logical formulas: =IF(condition, value_if_true, value_if_false).',
            objectives: [
              'Write spreadsheet calculations using SUM, AVERAGE, MIN, MAX, and COUNT.',
              'Use the dollar sign ($) to lock rows and columns with absolute cell referencing.',
              'Implement logical =IF() statements to assign letter grades or pass/fail flags.'
            ],
            keyFormulas: '=IF(B2>=50, "Pass", "Fail") &nbsp;|&nbsp; Absolute Cell: $B$1 (locks column B and row 1)'
          },
          questions: [
            'What happens when you copy formula =A1*B1 down one row versus =$A$1*B1?',
            'How can the =COUNTIF() function automate counting the number of passing students?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Spreadsheet Architecture & Computational Functions</h4>
              <p>• <strong>Formula Syntax:</strong> Must always start with an equals sign (<code>=</code>).<br>
              • <strong>Relative vs. Absolute Referencing:</strong><br>
                - <em>Relative (e.g., A1):</em> Automatically shifts cell references when dragged or copied across cells.<br>
                - <em>Absolute (e.g., $A$1):</em> Prepending <code>$</code> locks the row, column, or both so the referenced cell never changes during autofill.<br>
              • <strong>Essential Functions:</strong><br>
                - <code>=SUM(range)</code>: Sums values in range.<br>
                - <code>=AVERAGE(range)</code>: Arithmetic mean.<br>
                - <code>=MAX(range) / =MIN(range)</code>: Finds highest and lowest values.<br>
                - <code>=IF(logical_test, val_if_true, val_if_false)</code>: Conditional logic.</p>
            </div>
          `,
          example: {
            title: 'Applying Absolute Referencing in VAT Calculation',
            problem: 'Cell E1 contains the VAT rate of 15% (0.15). In column C, you have item prices (C2, C3, C4). Write the formula for cell D2 to calculate VAT amount that can be safely copied down to D4.',
            steps: [
              { label: 'Step 1: Identify price cell', text: 'C2 (relative, needs to change to C3 and C4 as you copy down).' },
              { label: 'Step 2: Identify VAT tax rate cell', text: 'E1 must stay permanently fixed on cell E1 ➔ use absolute reference <strong>$E$1</strong>.' },
              { label: 'Step 3: Combine formula', text: 'Enter in D2: <code>=C2 * $E$1</code>' }
            ],
            proTip: 'Pressing key F4 in Excel automatically toggles dollar signs for absolute referencing!'
          },
          reciteFlashcards: [
            { q: 'What character is used in Excel to lock a cell reference as absolute?', a: 'The dollar sign ($), e.g., $C$5.' },
            { q: 'Write the formula to find the highest score in cells B2 to B50.', a: '=MAX(B2:B50)' }
          ],
          amtQuiz: [
            {
              q: 'Which formula correctly outputs "Pass" if a student\'s exam score in cell B2 is 50 or greater, and "Fail" otherwise?',
              options: [
                '=IF(B2 >= 50, "Pass", "Fail")',
                '=CHECK(B2 >= 50, Pass, Fail)',
                '=IF(B2 = 50, "Pass", "Fail")',
                '=CONDITION(B2 >= 50 ? "Pass" : "Fail")'
              ],
              correct: 0,
              strategy: 'Excel uses the standard =IF(test, true_val, false_val) syntax.',
              derivation: '=IF(B2 >= 50, "Pass", "Fail") correctly tests the greater-than-or-equal condition and returns the text strings.',
              trap: 'Quotation marks are mandatory around text strings in Excel formulas!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-it-u3',
      number: 'Unit 3',
      title: 'Presentation Software Mastery',
      bigIdea: 'Master presentation software (PowerPoint/Google Slides): Slide Master, slide transitions, object animations, multimedia embedding, and public speaking deck design.',
      subtopics: [
        {
          id: 'g8-it-3.1',
          code: '3.1',
          title: 'Slide Masters, Transitions & Visual Design Rules',
          survey: {
            blueprint: 'Slide Master (controls universal layout, fonts, logo placement across all slides). Transitions (movement between slides) vs Animations (movement of elements on a slide). The 6x6 rule of slide design.',
            objectives: [
              'Customize the Slide Master for consistent professional branding.',
              'Differentiate slide transitions from entry, emphasis, and exit animations.',
              'Apply graphic design principles: high contrast, 6x6 rule, and avoiding text clutter.'
            ],
            keyFormulas: 'Design 6x6 Rule: Maximum 6 bullet points per slide, maximum 6 words per bullet point'
          },
          questions: [
            'Why is it faster to edit universal slide colors and logos in the Slide Master rather than on each slide individually?',
            'What is the difference between a slide transition and an object animation?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Presentation Engineering & Visual Aesthetics</h4>
              <p>• <strong>Slide Master:</strong> The top slide in the template hierarchy that stores theme information, default font types, color schemes, and header/footer positions across all sub-slides.<br>
              • <strong>Transitions vs. Animations:</strong><br>
                - <em>Slide Transitions:</em> Visual animation effects that occur when advancing from one slide to the next (e.g., Fade, Push, Wipe).<br>
                - <em>Object Animations:</em> Visual effects applied to individual elements on a slide (Entrance, Emphasis, Exit, Motion Paths).<br>
              • <strong>Professional Design Rules:</strong> Use high contrast (dark background with light text or vice versa), large legible fonts (minimum 24pt for body text), high-resolution imagery, and avoid reading full paragraphs off slides.</p>
            </div>
          `,
          example: {
            title: 'Applying the 6x6 Presentation Rule',
            problem: 'A student copied a 150-word paragraph directly onto a PowerPoint slide for a biology class presentation. How should the slide be redesigned?',
            steps: [
              { label: 'Step 1: Extract core ideas', text: 'Condense the paragraph into 4 key concise bullet points.' },
              { label: 'Step 2: Limit word count', text: 'Ensure each bullet has no more than 5-6 words (The 6x6 rule).' },
              { label: 'Step 3: Add supporting visual', text: 'Include a clean diagram or photo illustrating the biological concept alongside the bullets.' }
            ],
            proTip: 'Slides are visual anchors for your audience, not speaker cue teleprompters!'
          },
          reciteFlashcards: [
            { q: 'What tool allows you to change the font and background on every slide simultaneously?', a: 'The Slide Master.' },
            { q: 'What is the visual effect that plays when moving between slides called?', a: 'A Slide Transition.' }
          ],
          amtQuiz: [
            {
              q: 'What is the primary difference between a Slide Transition and an Animation in presentation software?',
              options: [
                'Transitions apply to the movement between slides; animations apply to individual objects on a slide',
                'Transitions are for text only; animations are for videos only',
                'Animations occur automatically; transitions require manual clicking',
                'Transitions change fonts; animations change colors'
              ],
              correct: 0,
              strategy: 'Define the scope of transitions vs animations.',
              derivation: 'A transition controls the motion effect when moving from slide A to slide B, while animations animate specific text boxes, shapes, or images on a single slide.',
              trap: 'Both can be automated with timed triggers!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-it-u4',
      number: 'Unit 4',
      title: 'Computer Networks & Network Topologies',
      bigIdea: 'Explore computer networking: LAN, MAN, WAN, network topologies (Star, Bus, Ring, Mesh), IP addresses, DNS, and transmission media (Fiber optics vs Wi-Fi).',
      subtopics: [
        {
          id: 'g8-it-4.1',
          code: '4.1',
          title: 'Network Scales, Topologies & Network Protocols',
          survey: {
            blueprint: 'Network Scales: LAN (Local Area Network - school lab), MAN (Metropolitan), WAN (Wide Area - Internet). Topologies: Star (central switch/hub), Bus (single backbone), Ring, Mesh (highest redundancy). IP addressing and DNS.',
            objectives: [
              'Classify networks by geographical scope: LAN, MAN, WAN.',
              'Compare network physical topologies: Star, Bus, Ring, Mesh.',
              'Explain the function of Routers, Switches, IP addresses, and DNS servers.'
            ],
            keyFormulas: 'DNS (Domain Name System) translates human names (google.com) into computer IP addresses (142.250.190.46)'
          },
          questions: [
            'Why is Star topology the most widely used network configuration in modern computer labs?',
            'What happens in a Bus network if the central backbone cable breaks?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Networking Topology & Infrastructure Science</h4>
              <p>• <strong>Network Scales:</strong><br>
                - <em>LAN (Local Area Network):</em> Covers small local area (school computer lab, home, office building). High speed, low latency.<br>
                - <em>MAN (Metropolitan Area Network):</em> Covers a town or city (e.g., Addis Ababa municipal cable network).<br>
                - <em>WAN (Wide Area Network):</em> Spans continents or countries (e.g., The Global Internet, Ethio Telecom national backbone).<br>
              • <strong>Network Topologies:</strong><br>
                - <em>Star Topology:</em> All nodes connect to a central Switch/Hub. If one node cable fails, only that device disconnects; the rest remain active.<br>
                - <em>Bus Topology:</em> Devices share a single linear central coaxial cable. If the backbone breaks, the entire network fails.<br>
                - <em>Mesh Topology:</em> Every device connects redundantly to multiple devices (fault-tolerant, used in military and core internet).<br>
              • <strong>Networking Devices:</strong> Switch (connects LAN devices), Router (routes packets between different networks/WANs).</p>
            </div>
          `,
          example: {
            title: 'Selecting a Network Topology for a School Lab',
            problem: 'A school in Hawassa plans to build a computer lab with 30 desktop computers. Evaluate whether Bus or Star topology is better suited.',
            steps: [
              { label: 'Step 1: Evaluate Bus topology', text: 'Cheaper cabling, but if the main trunk line breaks, all 30 PCs lose network connectivity immediately; difficult to troubleshoot.' },
              { label: 'Step 2: Evaluate Star topology', text: 'Requires individual UTP cables to a 32-port central network switch. If one student accidentally unplugs their cable, the other 29 computers remain operational.' },
              { label: 'Step 3: Recommendation', text: 'Select <strong>Star Topology</strong> for reliability and ease of troubleshooting.' }
            ],
            proTip: 'Star topology is the universal standard in modern ethernet local area networks!'
          },
          reciteFlashcards: [
            { q: 'In Star network topology, what central device connects all computers together?', a: 'A Network Switch (or Hub).' },
            { q: 'What does DNS stand for in computer networking?', a: 'Domain Name System (translates domain names into numeric IP addresses).' }
          ],
          amtQuiz: [
            {
              q: 'In which network topology does the failure of a single central cable backbone cause the entire network to fail completely?',
              options: ['Star Topology', 'Bus Topology', 'Mesh Topology', 'Tree Topology'],
              correct: 1,
              strategy: 'Identify the linear network layout with a shared single cable spine.',
              derivation: 'In a Bus topology, all devices share a single linear trunk cable. Any break disrupts signal reflection and collapses the entire network.',
              trap: 'In Star topology, a broken cable only affects that single connected computer!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-it-u5',
      number: 'Unit 5',
      title: 'Introduction to Programming & Algorithms',
      bigIdea: 'Explore computational logic: algorithms, flowchart symbols, pseudocode, variables, sequential logic, selection (if-else), and iteration (loops).',
      subtopics: [
        {
          id: 'g8-it-5.1',
          code: '5.1',
          title: 'Algorithms, Flowcharts & Control Structures',
          survey: {
            blueprint: 'Algorithm: Step-by-step procedure to solve a problem. Flowchart symbols: Oval (Start/End), Parallelogram (Input/Output), Rectangle (Process), Diamond (Decision/If-Else). Control structures: Sequence, Selection, Iteration.',
            objectives: [
              'Write clear step-by-step algorithms for mathematical and computational tasks.',
              'Design flowcharts using standardized ISO symbols.',
              'Identify the three fundamental programming control structures: Sequence, Selection (branching), and Iteration (looping).'
            ],
            keyFormulas: 'Flowchart Symbols: Oval (Terminal) | Rectangle (Process) | Parallelogram (I/O) | Diamond (Decision)'
          },
          questions: [
            'Why must every algorithm be finite, precise, and unambiguous?',
            'What flowchart shape is used to represent an "IF condition" that branches into True and False paths?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Algorithmic Logic & Flowchart Conventions</h4>
              <p>• <strong>Algorithm:</strong> An ordered, unambiguous set of step-by-step instructions that terminates with a solution.<br>
              • <strong>Flowchart Standard Symbols:</strong><br>
                - <em>Oval / Rounded Rectangle:</em> Start / Stop (Terminal).<br>
                - <em>Parallelogram:</em> Input data or Output result (e.g., Read A, Print Total).<br>
                - <em>Rectangle:</em> Process / Calculation (e.g., Sum = A + B).<br>
                - <em>Diamond:</em> Decision / Condition test with two diverging paths (True/Yes or False/No).<br>
                - <em>Flowline (Arrow):</em> Direction of process flow.<br>
              • <strong>Three Core Control Structures:</strong><br>
                1. <em>Sequence:</em> Steps execute one after another in order.<br>
                2. <em>Selection (Branching):</em> Decision making using IF-THEN-ELSE.<br>
                3. <em>Iteration (Looping):</em> Repeating steps while a condition remains true (FOR, WHILE).</p>
            </div>
          `,
          example: {
            title: 'Drafting an Algorithm & Pseudocode to Find the Larger of Two Numbers',
            problem: 'Write pseudocode to input two numbers A and B and display the larger number.',
            steps: [
              { label: 'Step 1: Start and input', text: 'START<br>INPUT A, B' },
              { label: 'Step 2: Selection condition', text: 'IF A > B THEN<br>&nbsp;&nbsp;PRINT "A is larger"<br>ELSE IF B > A THEN<br>&nbsp;&nbsp;PRINT "B is larger"<br>ELSE<br>&nbsp;&nbsp;PRINT "Both are equal"<br>ENDIF' },
              { label: 'Step 3: Termination', text: 'STOP' }
            ],
            proTip: 'Always specify what happens when numbers are equal to avoid logic bugs!'
          },
          reciteFlashcards: [
            { q: 'What shape represents a Decision or Condition in a flowchart?', a: 'A Diamond.' },
            { q: 'What are the three fundamental programming control structures?', a: 'Sequence, Selection (Branching), and Iteration (Looping).' }
          ],
          amtQuiz: [
            {
              q: 'Which geometric symbol in standard flowcharts is used to represent an Input or Output operation?',
              options: ['Rectangle', 'Parallelogram', 'Oval', 'Diamond'],
              correct: 1,
              strategy: 'Match flowchart shapes to functions: Parallelogram = Input / Output.',
              derivation: 'The parallelogram is reserved specifically for inputting data (Read X) and outputting results (Print Y).',
              trap: 'Rectangles represent internal processing/arithmetic calculations!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-it-u6',
      number: 'Unit 6',
      title: 'Information Security, Cyber Ethics & Cyber Law',
      bigIdea: 'Explore cybersecurity defense: malware types (viruses, worms, ransomware), encryption, firewalls, cyber laws in Ethiopia, and digital intellectual property.',
      subtopics: [
        {
          id: 'g8-it-6.1',
          code: '6.1',
          title: 'Malware Vectors, Encryption & Computer Ethics',
          survey: {
            blueprint: 'Malware taxonomy: Viruses (need host file), Worms (self-replicating across networks), Trojans (disguised legitimate software), Ransomware (encrypts files for ransom). Defense: Antivirus, Firewalls, Two-Factor Authentication (2FA), Intellectual property laws.',
            objectives: [
              'Classify types of malicious software: Viruses, Worms, Trojans, Ransomware, Spyware.',
              'Explain how firewalls and encryption protect sensitive personal and financial data.',
              'Discuss copyright laws, software piracy, and ethical use of intellectual property in Ethiopia.'
            ],
            keyFormulas: 'CIA Security Triad = Confidentiality + Integrity + Availability &nbsp;|&nbsp; 2FA = Password + OTP'
          },
          questions: [
            'How does a computer worm differ from a traditional virus in how it spreads?',
            'Why is downloading and distributing pirated commercial software illegal and unethical?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Cybersecurity Architecture & Digital Ethics</h4>
              <p>• <strong>Malware Taxonomy:</strong><br>
                - <em>Virus:</em> Malicious code that attaches to a host executable file and requires human action (clicking/running) to spread.<br>
                - <em>Worm:</em> Self-replicating autonomous malware that spreads across computer networks without requiring a host program or user action.<br>
                - <em>Trojan Horse:</em> Malware disguised as a desirable or harmless game/utility, opening a secret backdoor for hackers.<br>
                - <em>Ransomware:</em> Encrypts user files with military-grade ciphers and demands payment (usually cryptocurrency) for decryption keys.<br>
              • <strong>Defensive Tools:</strong> Firewalls (inspect and filter incoming/outgoing network packets), Antivirus software (signature heuristic detection), Two-Factor Authentication (2FA: password + dynamic SMS/app token).<br>
              • <strong>Software Piracy:</strong> Unauthorized copying, distribution, or use of copyrighted proprietary software. Violates Ethiopian intellectual property and copyright proclamations.</p>
            </div>
          `,
          example: {
            title: 'Analyzing a Ransomware Cyber Attack Scenario',
            problem: 'A school administrative computer displays a red warning: "All student database records have been encrypted. Pay $500 in Bitcoin to unlock within 24 hours." Identify the attack and preventive defenses.',
            steps: [
              { label: 'Step 1: Identify malware class', text: 'This is a <strong>Ransomware attack</strong>.' },
              { label: 'Step 2: Immediate protocol', text: 'Disconnect the infected computer from the school network immediately to stop lateral spreading.' },
              { label: 'Step 3: Best defense practice', text: 'Restore student records from an offline, disconnected 3-2-1 backup drive rather than paying criminals.' }
            ],
            proTip: 'Maintaining offline backups is the single most effective defense against ransomware!'
          },
          reciteFlashcards: [
            { q: 'Which type of malware replicates and spreads across computer networks autonomously without requiring a host file?', a: 'A Computer Worm.' },
            { q: 'What does 2FA stand for in account security?', a: 'Two-Factor Authentication (e.g., password + phone SMS verification code).' }
          ],
          amtQuiz: [
            {
              q: 'Which malicious program disguises itself as legitimate or harmless software to deceive users into installing it, thereby creating a backdoor for attackers?',
              options: ['Trojan Horse', 'Antivirus utility', 'Macro compiler', 'Network router'],
              correct: 0,
              strategy: 'Associate the historical Trojan Horse with deceptive malware.',
              derivation: 'A Trojan Horse presents itself as useful software (like a game or tool) while concealing malicious payload code.',
              trap: 'A worm spreads autonomously without disguising itself as a legitimate file!'
            }
          ]
        }
      ]
    }
  ]
};
