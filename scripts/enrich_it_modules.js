const fs = require('fs');
const path = require('path');

// =========================================================================
// GRADE 7 IT ENRICHMENT
// =========================================================================
const g7It = require('../src/curriculum/g7_it.js');

// Unit 1: Foundations of IT (3 questions)
g7It.units[0].subtopics[0].amtQuiz = [
  {
    q: 'What is the precise informational difference between raw "Data" and processed "Information"?',
    options: [
      'Data is processed meaningful insight, while information is unorganized symbols',
      'Data consists of raw, unorganized facts, figures, and characters, whereas Information is data that has been processed, organized, and structured into a meaningful context',
      'Data is only stored in RAM, while information is stored on DVD discs',
      'There is no technical difference between data and information'
    ],
    correct: 1,
    strategy: 'Data = raw input; Information = processed meaningful output.',
    derivation: 'Data consists of uncontextualized inputs (e.g. 38, 42, 19). Information applies context and processing (e.g. Average exam scores for Section B = 33%).',
    trap: 'Inverting the definitions of data and information.'
  },
  {
    q: 'Which of the following describes the fundamental four-stage Information Processing Cycle performed by all digital computers?',
    options: [
      'Input ➔ Processing ➔ Output ➔ Storage',
      'Browsing ➔ Gaming ➔ Chatting ➔ Sleeping',
      'Typing ➔ Printing ➔ Deleting ➔ Restarting',
      'Download ➔ Encrypt ➔ Hack ➔ Upload'
    ],
    correct: 0,
    strategy: 'IPOS cycle: Input, Processing, Output, Storage.',
    derivation: 'All general-purpose computers take input data through peripheral devices, process it using the CPU, present output to the user, and store data in secondary storage.',
    trap: 'Leaving out processing or storage.'
  },
  {
    q: 'Which class of computers is specifically engineered for massive scientific computations, climate modeling, and aerospace simulations, performing billions of calculations per second?',
    options: ['Microcomputers (Laptops)', 'Supercomputers', 'Smartphones', 'Embedded Microcontrollers'],
    correct: 1,
    strategy: 'Supercomputers are the most powerful computational systems.',
    derivation: 'Supercomputers possess thousands of interconnected processors designed for ultra-high-speed floating-point scientific simulations.',
    trap: 'Selecting microcomputers or personal workstations.'
  }
];

// Unit 2: Computer System Architecture (3 questions)
g7It.units[1].subtopics[0].amtQuiz = [
  {
    q: 'How does Random Access Memory (RAM) differ fundamentally from Read-Only Memory (ROM)?',
    options: [
      'RAM is volatile (loses its contents when the power is turned off), whereas ROM is non-volatile (permanently retains startup instructions like BIOS/UEFI)',
      'RAM can never be modified, while ROM changes every second',
      'RAM stores photos on flash drives, while ROM is an optical disc',
      'RAM is an output device, while ROM is an input device'
    ],
    correct: 0,
    strategy: 'RAM = volatile temporary working memory; ROM = non-volatile permanent startup code.',
    derivation: 'RAM holds currently executing programs and active data while powered on. ROM holds firmware instructions that survive power shutoffs.',
    trap: 'Thinking RAM permanently saves files.'
  },
  {
    q: 'Which two primary sub-units constitute the central architecture of the Central Processing Unit (CPU)?',
    options: [
      'The Arithmetic Logic Unit (ALU) and the Control Unit (CU)',
      'The Monitor and the Computer Mouse',
      'The Hard Disk Drive and the Power Supply',
      'The Graphics Card and the Cooling Fan'
    ],
    correct: 0,
    strategy: 'CPU = ALU (calculates) + CU (orchestrates).',
    derivation: 'The ALU performs all arithmetic operations (+, -, *, /) and logical comparisons (<, >, =). The Control Unit fetches instructions from memory, decodes them, and directs data flow.',
    trap: 'Selecting external hardware peripherals.'
  },
  {
    q: 'Why are modern Solid-State Drives (SSDs) significantly faster, quieter, and more durable than traditional mechanical Hard Disk Drives (HDDs)?',
    options: [
      'SSDs use non-volatile flash memory chips with zero moving mechanical parts, while HDDs rely on spinning magnetic platters and mechanical read/write heads',
      'SSDs require liquid nitrogen cooling to function',
      'SSDs only store text files, while HDDs store videos',
      'SSDs connect directly to wall power outlets without cables'
    ],
    correct: 0,
    strategy: 'Flash memory has zero mechanical moving parts.',
    derivation: 'HDDs suffer from mechanical latency (spindle spin time and head seek time). SSDs access flash memory cells electronically with near-instant read/write access.',
    trap: 'Assuming HDDs are faster because they are heavier.'
  }
];

// Unit 3: Operating Systems & File Organization (3 questions)
g7It.units[2].subtopics[0].amtQuiz = [
  {
    q: 'What is the primary role of an Operating System (such as Windows, Linux, or Android) in a computer system?',
    options: [
      'It is a word processing program used only to write essays',
      'It is system software that manages computer hardware resources, coordinates memory, and provides a platform for application software to run',
      'It protects the plastic computer case from dust',
      'It powers the monitor screen using optical sensors'
    ],
    correct: 1,
    strategy: 'The OS manages hardware and provides an application interface.',
    derivation: 'An OS manages the CPU schedule, memory allocation, peripheral I/O devices, and file systems, acting as an intermediary between user applications and bare hardware.',
    trap: 'Confusing operating systems with specific application software (like Word or Chrome).'
  },
  {
    q: 'In hierarchical file organization, what does a file extension (such as .docx, .pdf, .jpg, .py) indicate to the operating system?',
    options: [
      'The date the computer was manufactured in the factory',
      'The file format and which application program is associated to open and interpret it',
      'The price of the software license in birr',
      'The physical location of the computer on the desk'
    ],
    correct: 1,
    strategy: 'File extensions identify format and associated program.',
    derivation: 'Extensions signify file types: .docx (Word document), .pdf (Portable Document Format), .py (Python script). The OS uses this to invoke the proper decoder.',
    trap: 'Assuming file extensions are random decorative letters.'
  },
  {
    q: 'How does a Graphical User Interface (GUI) differ from a Command Line Interface (CLI)?',
    options: [
      'A GUI uses visual windows, icons, menus, and pointers (WIMP) controlled by a mouse/touch, while a CLI requires typing text commands into a terminal prompt',
      'A GUI cannot display colors on the screen',
      'A CLI is only used for playing sound files',
      'There is no difference between GUI and CLI'
    ],
    correct: 0,
    strategy: 'GUI = visual icons/mouse; CLI = text commands/keyboard.',
    derivation: 'GUI provides visual interaction (Windows, macOS, Android). CLI requires memorizing and typing text commands (DOS, Linux bash).',
    trap: 'Inverting CLI and GUI definitions.'
  }
];

// Unit 4: Word Processing Mastery (3 questions)
g7It.units[3].subtopics[0].amtQuiz = [
  {
    q: 'In word processing software, what is the keyboard shortcut to Undo the most recent editing action?',
    options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + Z', 'Ctrl + P'],
    correct: 2,
    strategy: 'Ctrl + Z is the universal shortcut for Undo.',
    derivation: 'Ctrl + C is Copy; Ctrl + V is Paste; Ctrl + P is Print; Ctrl + Z is Undo.',
    trap: 'Confusing Copy (Ctrl + C) with Undo (Ctrl + Z).'
  },
  {
    q: 'Which paragraph alignment option aligns text evenly along both the left and right margins by adjusting inter-word spacing?',
    options: ['Left Align', 'Center Align', 'Right Align', 'Justify'],
    correct: 3,
    strategy: 'Justify produces clean, straight edges on both left and right margins.',
    derivation: 'Justified text distributes spacing evenly between words so that text flushes cleanly against both margins, commonly seen in newspapers, textbooks, and formal documents.',
    trap: 'Selecting Center Align (which leaves jagged side margins).'
  },
  {
    q: 'What is the function of the "Header and Footer" feature in a professional document processing program?',
    options: [
      'To automatically display consistent document metadata (such as page numbers, document titles, or dates) across the top and bottom margins of every page',
      'To increase the physical size of the computer screen',
      'To change the language of the computer operating system',
      'To delete all images from the document'
    ],
    correct: 0,
    strategy: 'Headers and Footers repeat text/page numbers at top and bottom margins.',
    derivation: 'Headers (top margin) and Footers (bottom margin) repeat running information like page numbers, book chapters, and author names across every printed page.',
    trap: 'Thinking footers only appear on the final page.'
  }
];

// Unit 5: Internet, Communication & Cyber Hygiene (3 questions)
g7It.units[4].subtopics[0].amtQuiz = [
  {
    q: 'What is the technical difference between a Web Browser and a Search Engine?',
    options: [
      'A Web Browser is an application program installed on your device to display HTML web pages (e.g. Chrome, Firefox), while a Search Engine is an online service that indexes and finds websites matching keywords (e.g. Google, Bing)',
      'A Web Browser is a computer hardware monitor, while a Search Engine is a printer',
      'A Search Engine cannot connect to the internet',
      'They are identical software programs that do the exact same thing'
    ],
    correct: 0,
    strategy: 'Browser = software tool to view pages; Search engine = web service to find content.',
    derivation: 'You open a browser (Chrome/Edge) to access a search engine (Google), which searches indexed databases of web pages.',
    trap: 'Believing Google Chrome and Google Search are the same software entity.'
  },
  {
    q: 'In the web URL "https://www.education.gov.et", what does the "https://" protocol indicate regarding communication security?',
    options: [
      'The website is completely unencrypted and vulnerable to eavesdropping',
      'The communication between your browser and the web server is encrypted and authenticated using SSL/TLS security',
      'The website is hosted on an internal hard drive without internet access',
      'The web page contains high-definition video streaming only'
    ],
    correct: 1,
    strategy: 'The "s" in HTTPS stands for Secure (encrypted via SSL/TLS).',
    derivation: 'HTTPS (Hypertext Transfer Protocol Secure) encrypts data in transit, preventing third-party interception of passwords, personal information, and student records.',
    trap: 'Thinking HTTP and HTTPS provide identical security.'
  },
  {
    q: 'What social engineering cyber attack involves sending deceptive emails or messages pretending to be from a legitimate bank or school authority to steal passwords?',
    options: ['Phishing', 'Defragmentation', 'Cloud Computing', 'Bandwidth Throttling'],
    correct: 0,
    strategy: 'Phishing tricks users into revealing credentials.',
    derivation: 'Phishing uses spoofed emails and fake login web pages designed to trick victims into entering passwords, credit card numbers, or PINs.',
    trap: 'Confusing phishing with system maintenance terms like defragmentation.'
  }
];

const targetPath7 = path.join(__dirname, '..', 'src', 'curriculum', 'g7_it.js');
fs.writeFileSync(targetPath7, 'module.exports = ' + JSON.stringify(g7It, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g7_it.js with 3 questions per unit (total 15 questions)!');

// =========================================================================
// GRADE 8 IT ENRICHMENT
// =========================================================================
const g8It = require('../src/curriculum/g8_it.js');

// Unit 1: Computer Systems Architecture & Hardware (3 questions)
g8It.units[0].subtopics[0].amtQuiz = [
  {
    q: 'Why is CPU Cache Memory (L1, L2, L3) built directly into the processor chip using ultra-fast Static RAM (SRAM)?',
    options: [
      'To provide massive terabyte storage for movie collections',
      'To bridge the performance speed gap between the high-speed CPU processor and the slower main system RAM',
      'To reduce the electrical voltage of the computer power supply',
      'To eliminate the need for an operating system'
    ],
    correct: 1,
    strategy: 'Cache memory minimizes CPU idle wait states by pre-fetching data.',
    derivation: 'The CPU operates at gigahertz speeds, whereas main RAM is slower. Multi-level SRAM cache stores frequently accessed instructions right next to the processor execution cores.',
    trap: 'Thinking cache is large-capacity bulk storage.'
  },
  {
    q: 'Which system bus on the computer motherboard is responsible for transmitting the physical memory addresses where data should be read from or written to?',
    options: ['The Data Bus', 'The Address Bus', 'The Control Bus', 'The Power Bus'],
    correct: 1,
    strategy: 'Address Bus carries memory locations; Data Bus carries the actual values.',
    derivation: 'The Address Bus is unidirectional, carrying binary memory addresses from the CPU to RAM. The Data Bus is bidirectional, transferring the actual data bytes.',
    trap: 'Confusing the Address Bus with the Data Bus.'
  },
  {
    q: 'What metric measures the internal clock rate (number of machine cycles per second) of a modern computer microprocessor?',
    options: ['Gigahertz (GHz)', 'Gigabytes (GB)', 'Megapixels (MP)', 'Dots per inch (DPI)'],
    correct: 0,
    strategy: 'Clock speed is frequency measured in Hertz (GHz = billion cycles per second).',
    derivation: 'CPU clock speed is expressed in GHz (gigahertz). Storage capacity is measured in GB; display resolution in DPI or MP.',
    trap: 'Confusing clock speed (GHz) with RAM capacity (GB).'
  }
];

// Unit 2: Spreadsheets & Quantitative Analysis (3 questions)
g8It.units[1].subtopics[0].amtQuiz = [
  {
    q: 'In spreadsheet software (such as Microsoft Excel or Google Sheets), what character must precede all formulas and functions to instruct the program to calculate a value?',
    options: ['The hash symbol (#)', 'The equals sign (=)', 'The at symbol (@)', 'The exclamation mark (!)'],
    correct: 1,
    strategy: 'All spreadsheet formulas begin with the equals sign (=).',
    derivation: 'Typing "=SUM(A1:A10)" instructs the spreadsheet calculation engine to evaluate the mathematical expression rather than storing it as literal text.',
    trap: 'Starting formulas with letters or numbers without the = sign.'
  },
  {
    q: 'What is the purpose of using the dollar sign ($) in a spreadsheet cell reference, such as $C$4 (Absolute Cell Referencing)?',
    options: [
      'It converts the number into US Dollar foreign currency',
      'It locks both the column (C) and row (4) coordinates so they do not shift when the formula is copied across other cells',
      'It deletes the contents of cell C4 automatically',
      'It highlights cell C4 in green color'
    ],
    correct: 1,
    strategy: '$ locks the coordinate from changing during formula fill.',
    derivation: 'Relative references (C4) shift when dragged. Adding $ ($C$4) locks the reference to a fixed cell (e.g. holding a tax rate or exchange rate constant).',
    trap: 'Assuming $ denotes currency format rather than cell coordinate locking!'
  },
  {
    q: 'Which spreadsheet function evaluates a logical condition and returns one value if the condition is TRUE and another value if it is FALSE?',
    options: ['=SUM()', '=AVERAGE()', '=IF()', '=COUNT()'],
    correct: 2,
    strategy: 'The =IF(condition, value_if_true, value_if_false) function.',
    derivation: 'The =IF() function performs conditional logic: for example, =IF(B2>=50, "Pass", "Fail").',
    trap: 'Confusing arithmetic functions (SUM/AVERAGE) with logical conditions.'
  }
];

// Unit 3: Presentation Software Mastery (3 questions)
g8It.units[2].subtopics[0].amtQuiz = [
  {
    q: 'In presentation software, what is the Slide Master used for?',
    options: [
      'To manually draw cartoon figures with vector brushes',
      'To establish universal global formatting (fonts, background theme, logo placement, footer text) across all slides in the presentation simultaneously',
      'To convert presentations into audio podcast recordings',
      'To print physical business cards'
    ],
    correct: 1,
    strategy: 'Slide Master controls the hierarchy and global formatting of all slides.',
    derivation: 'Modifying the Slide Master applies uniform theme layouts, company logos, and typographic hierarchy to every slide without editing slides individually.',
    trap: 'Formatting every slide manually one by one.'
  },
  {
    q: 'What is the visual difference between a Slide Transition and an Animation in presentation software?',
    options: [
      'A Transition is the motion effect that occurs when moving from one slide to the next slide, while an Animation is a motion effect applied to an individual element (text, image, chart) on a single slide',
      'Transitions only work with sound, while animations only work with video',
      'Transitions are strictly for black-and-white slides',
      'There is no technical difference between transitions and animations'
    ],
    correct: 0,
    strategy: 'Transition = slide-to-slide motion; Animation = object-on-slide motion.',
    derivation: 'Transitions animate the entire canvas between slides (e.g. Fade, Wipe). Animations control the entrance, emphasis, or exit of specific bullet points or graphics.',
    trap: 'Confusing slide transitions with element animations.'
  },
  {
    q: 'According to the standard "6×6 Rule" of professional presentation design, what practice should presenters follow to maintain legibility?',
    options: [
      'Include no more than 6 bullet points per slide, with no more than 6 words per bullet point',
      'Use 6 different bright colors on every single line of text',
      'Show 6 full textbook paragraphs on each slide',
      'Set font size to exactly 6 points'
    ],
    correct: 0,
    strategy: 'The 6×6 rule prevents cluttered, unreadable walls of text.',
    derivation: 'Slides should communicate concise key takeaways, not word-for-word transcriptions. The 6×6 rule ensures visual clarity and audience engagement.',
    trap: 'Filling slides with dense paragraphs.'
  }
];

// Unit 4: Computer Networks & Network Topologies (3 questions)
g8It.units[3].subtopics[0].amtQuiz = [
  {
    q: 'Which network topology connects all client computers to a single central device (such as a network switch or hub), ensuring that the failure of one cable does not bring down the entire network?',
    options: ['Bus Topology', 'Star Topology', 'Ring Topology', 'Linear Chain Topology'],
    correct: 1,
    strategy: 'Star topology connects all nodes radially to a central switch.',
    derivation: 'In a Star topology, every workstation has an independent point-to-point connection to the central switch. If one cable fails, only that workstation is disconnected. In a Bus topology, a severed backbone cable brings down the entire network.',
    trap: 'Selecting Bus topology, which relies on a single shared backbone cable.'
  },
  {
    q: 'How does a Local Area Network (LAN) differ from a Wide Area Network (WAN)?',
    options: [
      'A LAN spans a restricted geographic area (such as a school computer lab or single office building), while a WAN covers vast geographical spans connecting cities, countries, or the globe (e.g. the Internet)',
      'A LAN only operates with fiber optic cables, while a WAN only operates with copper wires',
      'A LAN cannot connect more than two computers',
      'A WAN is completely disconnected from the internet'
    ],
    correct: 0,
    strategy: 'LAN = local building/campus; WAN = wide geographical/global.',
    derivation: 'LAN (Local Area Network) covers a school or home. WAN (Wide Area Network) connects disparate regional and continental networks (the Internet is the largest WAN).',
    trap: 'Inverting geographic scales.'
  },
  {
    q: 'Which networking device operates at Layer 3 to inspect IP destination addresses and route data packets across different interconnected networks?',
    options: ['A Network Repeater', 'A Dumb Hub', 'A Router', 'An Ethernet RJ45 Connector'],
    correct: 2,
    strategy: 'Routers route packets between different IP networks.',
    derivation: 'A router reads network layer (IP) headers and routes packets across optimal paths between distinct subnets and the wider internet.',
    trap: 'Confusing routers with physical layer hubs or simple repeaters.'
  }
];

// Unit 5: Introduction to Programming & Algorithms (3 questions)
g8It.units[4].subtopics[0].amtQuiz = [
  {
    q: 'In algorithm design and standard flowchart notation, what geometrical shape is used to represent a conditional decision or branching question (e.g. "Is x > 0?")?',
    options: ['Oval (Rounded Rectangle)', 'Diamond (Rhombus)', 'Rectangle', 'Parallelogram'],
    correct: 1,
    strategy: 'Diamond represents Decision; Oval = Start/End; Rectangle = Process; Parallelogram = Input/Output.',
    derivation: 'A Diamond has multiple outgoing condition paths (True/False, Yes/No) representing conditional branching in flowcharts.',
    trap: 'Confusing Rectangle (process calculation) with Diamond (conditional decision).'
  },
  {
    q: 'What is the precise definition of an "Algorithm" in computer science?',
    options: [
      'A physical silicon microchip soldered to a motherboard',
      'A step-by-step, finite, unambiguous sequence of instructions designed to solve a specific problem or perform a task',
      'A computer virus that corrupts secondary storage',
      'A specialized software license for proprietary games'
    ],
    correct: 1,
    strategy: 'Algorithm = step-by-step finite problem-solving procedure.',
    derivation: 'An algorithm must be finite, well-defined, and effective, taking inputs and producing deterministic outputs in a sequence of operations.',
    trap: 'Confusing algorithms with physical hardware chips.'
  },
  {
    q: 'Which fundamental control structure repeats a specific block of instructions multiple times until a terminating condition is met (e.g. "While" or "For" loop)?',
    options: ['Sequence Structure', 'Selection Structure', 'Iteration (Looping) Structure', 'Decomposition Structure'],
    correct: 2,
    strategy: 'Iteration (looping) repeats execution.',
    derivation: 'The three core control structures are: Sequence (line by line), Selection (if/else branching), and Iteration/Repetition (loops repeating code).',
    trap: 'Selecting Sequence (which executes each step only once).'
  }
];

// Unit 6: Information Security, Cyber Ethics & Cyber Law (3 questions)
g8It.units[5].subtopics[0].amtQuiz = [
  {
    q: 'What form of malicious software (malware) encrypts a user’s documents and files, completely locking them out until an extortion payment is made to the attacker?',
    options: ['Spyware', 'Ransomware', 'Adware', 'Rootkit'],
    correct: 1,
    strategy: 'Ransomware demands a ransom to decrypt hijacked files.',
    derivation: 'Ransomware (such as WannaCry) silently encrypts storage drives with cryptographic keys and demands payment to restore access.',
    trap: 'Confusing ransomware with adware (which only displays popup advertisements).'
  },
  {
    q: 'What is the ethical and legal meaning of "Copyright" in digital software and media creation?',
    options: [
      'The right of any internet user to copy and resell any file they find for free',
      'The exclusive legal right granted to the original creator of a creative or intellectual work to reproduce, distribute, and license it',
      'A government tax imposed on computer memory sticks',
      'A computer algorithm that automatically prints book pages'
    ],
    correct: 1,
    strategy: 'Copyright grants exclusive rights to the creator.',
    derivation: 'Copyright protects original creative expressions (software code, books, music) from unauthorized reproduction or piracy, protecting intellectual property.',
    trap: 'Thinking copyright means permission to copy freely.'
  },
  {
    q: 'How does Multi-Factor Authentication (MFA / 2FA) provide dramatically superior account security compared to a single password alone?',
    options: [
      'It requires the user to memorize a 100-character password',
      'It requires two or more independent credentials for access: something you know (password) plus something you have (phone OTP code) or something you are (biometrics)',
      'It eliminates passwords completely and relies on guessing',
      'It automatically formats the computer hard drive upon logout'
    ],
    correct: 1,
    strategy: 'MFA combines two or more distinct authentication factors.',
    derivation: 'Even if an attacker steals your password through phishing or data leaks, they cannot breach your account without the second factor (e.g. mobile authenticator code or fingerprint).',
    trap: 'Assuming having two identical passwords equals multi-factor authentication.'
  }
];

const targetPath8 = path.join(__dirname, '..', 'src', 'curriculum', 'g8_it.js');
fs.writeFileSync(targetPath8, 'module.exports = ' + JSON.stringify(g8It, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g8_it.js with 3 questions per unit (total 18 questions)!');
