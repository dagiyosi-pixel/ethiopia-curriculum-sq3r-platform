const fs = require('fs');
const path = require('path');

console.log('Generating Complete Grade 7 & Grade 8 Information Technology modules...');

// ============================================================================
// GRADE 7 INFORMATION TECHNOLOGY
// ============================================================================
const g7ItUnits = [
  {
    num: 1, title: 'Foundations of Information Technology', bigIdea: 'Explore computer definitions, historical generations of computing, and data vs information.',
    subs: [
      { code: '1.1', title: 'Definition, Characteristics & Five Generations of Computers',
        bp: 'Computer: Electronic device that accepts raw data (Input), processes it under stored instructions (Processing), produces meaningful results (Output), and stores it for future use (Storage). Characteristics: High speed, accuracy, diligence, versatility, storage capacity. Five Generations: 1st (Vacuum Tubes, ENIAC, machine language), 2nd (Transistors, assembly), 3rd (Integrated Circuits [ICs]), 4th (Microprocessors, VLSI/ULSI, modern PCs), 5th (Artificial Intelligence, quantum computing).',
        objs: ['Define a computer and identify the four primary IPO+S cycle functions.', 'Describe the five historical generations of computer hardware technology.'],
        kf: 'IPO+S Cycle = Input ➔ Processing (CPU) ➔ Output ➔ Storage',
        q1: 'How did the invention of the microprocessor revolutionize personal computing in the 4th generation?', q2: 'What is the fundamental difference between data and information?'
      },
      { code: '1.2', title: 'Data vs. Information & Societal Roles of Computing',
        bp: 'Data: Raw, unorganized facts, figures, symbols, or observations lacking context (e.g., numbers: 14, 18, 22). Information: Processed, organized, structured, and meaningful data useful for decision-making (e.g., average test scores). Societal Roles: Tele-education in Ethiopian schools, digital banking (Telebirr), healthcare patient records, weather forecasting for agriculture.',
        objs: ['Distinguish raw data from meaningful information with concrete examples.', 'Explain how Information Technology drives modernization in Ethiopian agriculture, education, and commerce.'],
        kf: 'Information = Processed Data + Meaningful Context + Purpose',
        q1: 'Why cannot sound decisions be made directly from unprocessed raw data?', q2: 'How does mobile banking improve financial inclusion in rural Ethiopia?'
      }
    ]
  },
  {
    num: 2, title: 'Computer System Architecture & Hardware', bigIdea: 'Analyze computer hardware components: input, processing, output, secondary storage, and software classification.',
    subs: [
      { code: '2.1', title: 'Hardware Components: Input, Output & Storage Devices',
        bp: 'Hardware: Physical, tangible components of a computer. Input devices: Keyboard, Mouse, Scanner, Optical Mark Recognition (OMR used in Ethiopian national exams), Microphone. Output devices: Monitor (LCD/OLED), Printer (Inkjet, Laser), Projector, Speakers. Storage devices: Primary memory (RAM - volatile; ROM - non-volatile) vs Secondary storage (Hard Disk Drive HDD, Solid State Drive SSD, USB flash drive, Optical disc).',
        objs: ['Classify computer hardware into input, output, processing, and secondary storage.', 'Distinguish volatile RAM from non-volatile ROM.'],
        kf: 'Storage Hierarchy: Registers (fastest, smallest) ➔ Cache ➔ RAM ➔ SSD / HDD (slowest, largest capacity)',
        q1: 'Why is RAM referred to as "volatile" memory?', q2: 'Why are Solid State Drives (SSDs) significantly faster and more durable than traditional Hard Disk Drives (HDDs)?'
      },
      { code: '2.2', title: 'Software Classification: System vs Application Software',
        bp: 'Software: Intangible programs and instructions that direct computer hardware. System Software: Manages and coordinates hardware resources; includes Operating Systems (Windows, Linux, macOS, Android), Device Drivers, and Utility programs (Antivirus, Disk Defragmenter). Application Software: End-user programs designed to accomplish specific tasks; includes Word Processors, Spreadsheets, Web Browsers, and Graphics software.',
        objs: ['Distinguish system software from application software.', 'Explain the role of device drivers in hardware communication.'],
        kf: 'Software Architecture: User ➔ Application Software ➔ Operating System ➔ Hardware',
        q1: 'Can an application program (like Microsoft Word) run on a computer without an operating system?', q2: 'What is the role of a device driver when connecting a printer?'
      }
    ]
  },
  {
    num: 3, title: 'Operating Systems & File Organization', bigIdea: 'Examine operating system functions, user interfaces (GUI vs CLI), and hierarchical file/folder management.',
    subs: [
      { code: '3.1', title: 'Functions of Operating Systems: GUI vs CLI',
        bp: 'Operating System (OS): Master software acting as an intermediary between user and hardware. Functions: Processor management, Memory management, Device management, File system management, Security. User Interfaces: Command Line Interface (CLI: text commands, e.g., DOS, Linux terminal) vs Graphical User Interface (GUI: Windows, icons, menus, pointer - WIMP).',
        objs: ['List the primary resource management functions of an operating system.', 'Compare Graphical User Interface (GUI) with Command Line Interface (CLI).'],
        kf: 'WIMP Interface = Windows + Icons + Menus + Pointer',
        q1: 'Why did the introduction of GUI make computers accessible to the general public?', q2: 'How does the OS manage multitasking when several programs run simultaneously?'
      },
      { code: '3.2', title: 'File Hierarchies, Extensions & Folder Organization',
        bp: 'File: Named collection of related data stored on secondary storage. File Extension: Identifies file type and default opening application (e.g., .docx = Word; .xlsx = Excel; .pptx = PowerPoint; .pdf = Adobe PDF; .jpg/.png = Image; .mp3 = Audio; .mp4 = Video). Folder/Directory: Container for organizing files into a tree hierarchy. File path navigation.',
        objs: ['Interpret file extensions and associate them with application types.', 'Create, rename, copy, move, and organize files into logical folder hierarchies.'],
        kf: 'Full File Path: Drive:\\Folder\\Subfolder\\Filename.extension (e.g., C:\\School\\Grade7\\Notes.docx)',
        q1: 'Why is it critical to organize files into structured subfolders rather than saving everything on the desktop?', q2: 'What happens if a user accidentally changes a file extension from .docx to .xyz?'
      }
    ]
  },
  {
    num: 4, title: 'Word Processing Mastery', bigIdea: 'Master document creation, typography, paragraph alignment, tables, images, and page formatting.',
    subs: [
      { code: '4.1', title: 'Document Creation, Editing & Text Formatting',
        bp: 'Word Processor: Software for typing, editing, formatting, and printing text documents (e.g., Microsoft Word, Google Docs, LibreOffice Writer). Text Formatting: Font family, font size, bold (Ctrl+B), italic (Ctrl+I), underline (Ctrl+U), font color, highlight. Paragraph alignment: Left, Center, Right, Justified. Cut (Ctrl+X), Copy (Ctrl+C), Paste (Ctrl+V), Undo (Ctrl+Z). Spell and grammar check.',
        objs: ['Demonstrate keyboard shortcut proficiency in document editing.', 'Format text and paragraphs with proper font hierarchy, spacing, and justification.'],
        kf: 'Standard Shortcuts: Ctrl+S (Save), Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+Z (Undo), Ctrl+A (Select All)',
        q1: 'What is the typographical difference between "left-aligned" text and "justified" text?', q2: 'Why should writers save their documents frequently (Ctrl+S)?'
      },
      { code: '4.2', title: 'Tables, Graphics, Headers/Footers & Print Layouts',
        bp: 'Tables: Grid of rows and columns for structuring data; merging and splitting cells. Inserting Illustrations: Clip art, shapes, images; text wrapping (In line, Square, Tight). Headers and Footers: Running titles, page numbering, document metadata. Page Setup: Margins (Normal, Narrow), Orientation (Portrait vs Landscape), Paper size (A4, Letter). Print Preview.',
        objs: ['Insert and format data tables with rows and columns.', 'Configure page margins, headers/footers, and page orientation for formal document printing.'],
        kf: 'Page Orientation: Portrait (Vertical, height > width) vs Landscape (Horizontal, width > height)',
        q1: 'When is Landscape page orientation preferred over Portrait orientation?', q2: 'Why are page numbers placed in headers or footers rather than typed into the body text?'
      }
    ]
  },
  {
    num: 5, title: 'Internet, Communication & Cyber Hygiene', bigIdea: 'Understand the global internet, World Wide Web, web browsers, email, and fundamental cyber hygiene.',
    subs: [
      { code: '5.1', title: 'The Internet, World Wide Web, Browsers & Email',
        bp: 'Internet: Global network of interconnected computer networks communicating via TCP/IP protocols. World Wide Web (WWW): Interlinked collection of multimedia web pages accessed via HTTP/HTTPS, invented by Tim Berners-Lee (1989). URL (Uniform Resource Locator): Web address (e.g., https://www.moe.gov.et). Web Browser (Chrome, Firefox, Edge) vs Search Engine (Google, Bing). Email: Electronic mail (username@domain.extension).',
        objs: ['Distinguish the global physical Internet from the World Wide Web.', 'Deconstruct the components of a Uniform Resource Locator (URL).', 'Compose, send, and manage emails with file attachments.'],
        kf: 'URL Structure: Protocol (https://) + Domain / Hostname (www.moe.gov.et) + Path (/resources)',
        q1: 'What is the technical difference between a web browser and an internet search engine?', q2: 'What does the "s" in "https://" signify regarding communication security?'
      },
      { code: '5.2', title: 'Cyber Hygiene, Strong Passwords & Malware Protection',
        bp: 'Cyber Hygiene: Routine practices to maintain computer health and online security. Threats: Computer Viruses (replicate by attaching to host files), Worms (replicate over networks without host files), Trojan Horses (disguised as useful programs), Phishing (fraudulent emails mimicking banks to steal credentials). Defenses: Strong passwords (12+ characters, uppercase, lowercase, numbers, symbols), Antivirus software, Firewall, Two-Factor Authentication (2FA).',
        objs: ['Identify common malware types (viruses, worms, trojans, ransomware).', 'Create strong, uncrackable passwords and recognize phishing scams.', 'Explain the role of firewalls and antivirus software in network security.'],
        kf: 'Strong Password = Length (12+) + Complexity (Mix of Aa, 1-9, @#$) + Uniqueness (Never reused)',
        q1: 'Why is it dangerous to click on unexpected links in emails claiming you have won a lottery prize?', q2: 'What does a computer firewall do?'
      }
    ]
  }
];

// ============================================================================
// GRADE 8 INFORMATION TECHNOLOGY
// ============================================================================
const g8ItUnits = [
  {
    num: 1, title: 'Computer Hardware Architecture & Internal Components', bigIdea: 'Analyze motherboard architecture, CPU components, RAM/ROM operations, and peripheral interfaces.',
    subs: [
      { code: '1.1', title: 'Motherboard, CPU Architecture & Internal Buses',
        bp: 'Motherboard: Main printed circuit board connecting all internal components. Central Processing Unit (CPU - "Brain of computer"): Control Unit (CU - directs signal traffic), Arithmetic Logic Unit (ALU - mathematical & logical operations), Registers (ultra-fast temporary storage). Clock speed (measured in Gigahertz, GHz). System Buses: Data Bus, Address Bus, Control Bus. Cache memory (L1, L2, L3) bridging CPU and RAM.',
        objs: ['Identify the internal architecture of the CPU: ALU, CU, and registers.', 'Explain how system buses transmit data, addresses, and control signals across the motherboard.', 'Describe the performance role of CPU clock speed and cache memory.'],
        kf: 'CPU Machine Cycle = Fetch (from RAM) ➔ Decode (by CU) ➔ Execute (by ALU) ➔ Store (in Registers/RAM)',
        q1: 'Why does a CPU with a large L3 cache execute complex software faster than one with little cache?', q2: 'What is the role of the Arithmetic Logic Unit (ALU)?'
      },
      { code: '1.2', title: 'Peripheral Interfaces, Ports & Expansion Slots',
        bp: 'Expansion Slots: PCIe (Peripheral Component Interconnect Express for graphics cards), RAM DIMM slots. External Ports: USB (Universal Serial Bus - Type A, Type C), HDMI (High-Definition Multimedia Interface for digital audio/video), DisplayPort, Ethernet RJ-45 (wired LAN networking), 3.5mm Audio jack. Plug-and-Play technology.',
        objs: ['Identify physical ports on a computer and explain their transmission capabilities.', 'Distinguish parallel communication interfaces from high-speed serial standards (USB, PCIe).'],
        kf: 'USB-C Standard = High-speed data transfer + Video output + Up to 100W power delivery',
        q1: 'Why has USB-C largely superseded older legacy ports like VGA and PS/2?', q2: 'What port is used to connect a desktop computer to a wired local area network?'
      }
    ]
  },
  {
    num: 2, title: 'Spreadsheets & Quantitative Data Analysis', bigIdea: 'Master electronic spreadsheets: cell referencing, mathematical formulas, standard functions, and data charting.',
    subs: [
      { code: '2.1', title: 'Spreadsheet Grid Architecture & Cell Referencing',
        bp: 'Spreadsheet: Software for quantitative calculation, tabular data organization, and analysis (e.g., Microsoft Excel, Google Sheets). Grid structure: Columns (letters A, B, C...) and Rows (numbers 1, 2, 3...). Cell Address: Intersection of column and row (e.g., B4). Cell Referencing: Relative Referencing (A1 shifts when copied) vs Absolute Referencing ($A$1 locked with dollar signs). Data Types: Labels (text), Values (numbers), Formulas.',
        objs: ['Navigate spreadsheet worksheets and define cell ranges.', 'Distinguish relative cell referencing from absolute cell referencing ($A$1).'],
        kf: 'Formula Rule: Every formula or function MUST begin with an equal sign (=)',
        q1: 'Why must you use absolute cell referencing ($B$1) when multiplying a column of prices by a fixed tax rate?', q2: 'What happens when a formula containing =A1+B1 is copied down one row?'
      },
      { code: '2.2', title: 'Formulas, Statistical Functions & Chart Creation',
        bp: 'Formulas: Mathematical expressions using operators (+, -, *, /, ^). Standard Functions: =SUM(range), =AVERAGE(range), =MAX(range), =MIN(range), =COUNT(range), =IF(logical_test, value_if_true, value_if_false). Charts for data visualization: Bar/Column charts (comparing discrete categories), Line charts (trends over time), Pie charts (proportions of a whole 100%).',
        objs: ['Construct formulas using standard arithmetic operators and functions.', 'Write conditional logic formulas using the =IF function.', 'Select appropriate chart types to visualize educational and financial datasets.'],
        kf: 'Syntax: =FUNCTION(start_cell:end_cell) | Example: =SUM(C2:C20) | =AVERAGE(D2:D50)',
        q1: 'Which function would you use to find the single highest exam score in a class of 60 students?', q2: 'Why is a line graph preferred over a pie chart for showing temperature variations across a month?'
      }
    ]
  },
  {
    num: 3, title: 'Presentation Software Mastery', bigIdea: 'Master electronic slide presentations, layout design, typography, animations, and delivery techniques.',
    subs: [
      { code: '3.1', title: 'Slide Layouts, Design Themes & Visual Hierarchy',
        bp: 'Presentation Software: Application used to create visually engaging slide decks for public speaking (e.g., Microsoft PowerPoint, Google Slides). Slide Components: Title slide, content layouts, bulleted lists. Design Principles: Contrast (dark text on light background or vice versa), Simplicity (the 6×6 rule: no more than 6 bullet points, 6 words per point), Consistent typography and color palette.',
        objs: ['Create presentations with clear visual hierarchy and professional themes.', 'Apply readability guidelines to avoid slide clutter and cognitive overload.'],
        kf: 'Presentation Design Rule: Slides should support the speaker’s spoken narrative, not act as a word-for-word transcript!',
        q1: 'Why is reading full paragraphs of tiny text from a presentation slide ineffective for an audience?', q2: 'What color contrast combinations ensure high legibility in bright auditoriums?'
      },
      { code: '3.2', title: 'Transitions, Custom Animations & Delivery Mastery',
        bp: 'Slide Transitions: Visual motion effects when advancing from one slide to the next (e.g., Fade, Push, Wipe). Custom Animations: Motion effects applied to individual elements on a slide (Entrance, Emphasis, Exit, Motion Paths). Slide Show Delivery: Presenter View, rehearsing slide timings, using keyboard shortcuts (F5 to start, B to black out screen, W to white out screen).',
        objs: ['Apply tasteful slide transitions and entrance animations.', 'Demonstrate confident presentation delivery techniques using Presenter View.'],
        kf: 'Animation Best Practice: Use subtle animations (Fade, Appear) purposefully; excessive spinning text distracts from message',
        q1: 'What is the functional difference between a slide transition and an object animation?', q2: 'How does Presenter View assist a speaker during a formal seminar?'
      }
    ]
  },
  {
    num: 4, title: 'Computer Networks & Network Topologies', bigIdea: 'Analyze computer networks: classifications (LAN, WAN, MAN), transmission media, and physical topologies.',
    subs: [
      { code: '4.1', title: 'Network Classifications & Networking Hardware',
        bp: 'Computer Network: Two or more autonomous computers connected together to share resources (files, printers, internet access). Classifications: LAN (Local Area Network: single room/school building), MAN (Metropolitan Area Network: spanning a city like Addis Ababa), WAN (Wide Area Network: nationwide/global, e.g., the Internet), WLAN (Wireless LAN - Wi-Fi). Network Hardware: Network Interface Card (NIC), Switch (connects local devices), Router (routes packets between different networks), Modem.',
        objs: ['Classify networks by geographical coverage: LAN, MAN, WAN.', 'Explain the distinct functions of network switches and routers.'],
        kf: 'Switch = Connects devices within the SAME local network | Router = Connects DIFFERENT networks together',
        q1: 'Why is the global Internet classified as the ultimate Wide Area Network (WAN)?', q2: 'What is the role of a router in a school computer lab?'
      },
      { code: '4.2', title: 'Network Topologies & Transmission Media',
        bp: 'Network Topology: The physical or logical layout of nodes in a network. Topologies: 1) Star Topology (all nodes connect to central switch; most common; if one cable breaks, other computers continue unaffected). 2) Bus Topology (single central backbone cable terminated at ends; cheap; if backbone breaks, entire network fails). 3) Ring Topology. 4) Mesh Topology (redundant links; high reliability; expensive). Transmission Media: Guided (Twisted pair UTP/STP, Coaxial cable, Fiber Optic - light pulses, immune to EMI) vs Unguided (Radio waves, Microwaves, Infrared, Satellite).',
        objs: ['Compare physical network topologies: Star, Bus, Ring, Mesh.', 'Contrast copper twisted-pair cables with fiber-optic cables in speed and bandwidth.'],
        kf: 'Star Topology: Central hub/switch failure downs the network; individual cable break affects only that node',
        q1: 'Why is Star topology standard in modern school computer labs instead of Bus topology?', q2: 'Why are trans-continental internet backbones built using undersea fiber-optic cables rather than copper wires?'
      }
    ]
  },
  {
    num: 5, title: 'Introduction to Programming & Algorithms', bigIdea: 'Understand computational thinking, algorithm design, flowchart symbols, pseudocode, and core control structures.',
    subs: [
      { code: '5.1', title: 'Problem Solving, Algorithm Design & Flowchart Symbols',
        bp: 'Algorithm: A finite, step-by-step sequence of unambiguous instructions to solve a specific problem. Characteristics: Unambiguous, finite, well-defined inputs/outputs, effective. Flowchart: Graphical representation of an algorithm. Standard Symbols: Oval (Terminal - Start/Stop), Parallelogram (Input/Output), Rectangle (Process / Computation), Diamond (Decision - Condition with Yes/No branches), Flow lines (Arrows directing execution).',
        objs: ['Define an algorithm and state the required properties of valid algorithms.', 'Construct flowcharts using standard ISO flowcharting symbols.'],
        kf: 'Flowchart Symbols: Oval = Start/End | Parallelogram = Input/Output | Rectangle = Process | Diamond = Decision',
        q1: 'Why must an algorithm have a guaranteed termination condition (finiteness)?', q2: 'What flowchart symbol is used when checking if a student score is greater than or equal to 50?'
      },
      { code: '5.2', title: 'Control Structures: Sequence, Selection & Iteration',
        bp: 'The Three Fundamental Control Structures (Böhm-Jacopini theorem): 1) Sequence: Executing statements strictly one after another in order. 2) Selection (Decision / Branching): Choosing which path to execute based on a Boolean condition (IF-THEN-ELSE). 3) Iteration (Looping / Repetition): Repeating a block of statements while a condition is true or for a set count (WHILE, FOR loops). Variables and assignment.',
        objs: ['Differentiate sequence, selection, and iteration in pseudocode algorithms.', 'Trace variable values through sequential, conditional, and looped algorithms.'],
        kf: 'Three Control Structures: Sequence (Do A, then B) | Selection (IF condition THEN A ELSE B) | Iteration (WHILE condition DO A)',
        q1: 'In what programming scenario is an iteration (loop) structure required instead of sequence?', q2: 'Write a simple pseudocode algorithm to determine if an integer is even or odd.'
      }
    ]
  },
  {
    num: 6, title: 'Information Security, Cyber Ethics & Intellectual Property', bigIdea: 'Analyze computer malware, firewalls, encryption, cyber ethics, software piracy, copyright, and digital privacy.',
    subs: [
      { code: '6.1', title: 'Malware Threats, Ransomware & Cybersecurity Defenses',
        bp: 'Malware (Malicious Software): Software designed to disrupt, damage, or gain unauthorized access to computer systems. Types: Virus, Worm, Spyware (tracks keystrokes and browsing habits), Adware, Ransomware (encrypts user files and demands ransom money to unlock). Defenses: End-point antivirus with daily definition updates, Firewalls, Secure OS patches, Data backups (3-2-1 backup rule: 3 copies, 2 different media, 1 offsite/cloud).',
        objs: ['Classify malware categories and explain how ransomware attacks occur.', 'Apply data protection strategies including the 3-2-1 backup methodology.'],
        kf: '3-2-1 Backup Rule: Maintain 3 total copies of critical data on 2 different storage media types with 1 copy stored offsite/cloud',
        q1: 'How does ransomware extort computer users, and why does maintaining offline backups neutralize this threat?', q2: 'What is the purpose of regular operating system security patches?'
      },
      { code: '6.2', title: 'Cyber Ethics, Intellectual Property, Copyright & Plagiarism',
        bp: 'Cyber Ethics: Moral principles governing acceptable behavior in cyberspace. Intellectual Property (IP): Legal rights protecting human creations of the mind (inventions, literary works, software code). Copyright: Legal protection granted to creators prohibiting unauthorized copying, reproduction, or distribution. Plagiarism: Copying someone else’s text, code, or ideas and presenting them as one’s own original work without proper attribution. Software Piracy: Illegally copying or distributing proprietary commercial software. Creative Commons and Open Source.',
        objs: ['Define intellectual property, copyright, and software piracy.', 'Distinguish ethical research citation from academic plagiarism.', 'Explain open-source software licenses vs proprietary commercial licenses.'],
        kf: 'Academic Integrity = Original Thought + Honest Attribution of All External Sources and Citations',
        q1: 'Why is copying text directly from Wikipedia into a school project without citation considered plagiarism?', q2: 'What are the legal and security risks of installing pirated software downloaded from untrusted torrent sites?'
      }
    ]
  }
];

// Helper to assemble full subject JSON
function assembleItSubject(id, name, unitData) {
  return {
    id: id,
    name: name,
    icon: '💻',
    units: unitData.map(u => ({
      id: `${id}-u${u.num}`,
      number: `Unit ${u.num}`,
      title: u.title,
      bigIdea: u.bigIdea,
      subtopics: u.subs.map(s => ({
        id: `${id}-${s.code}`,
        code: s.code,
        title: s.title,
        survey: {
          blueprint: s.bp,
          objectives: s.objs,
          keyFormulas: s.kf
        },
        questions: [s.q1, s.q2],
        coreNotes: `
          <div class="space-y-4 text-slate-200">
            <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
              <h4 class="text-sm font-bold text-amber-400">💻 1. Core Technical Concepts: ${s.title}</h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${s.bp}</p>
            </div>
            <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
              <h4 class="text-sm font-bold text-cyan-400">🛠️ 2. Practical Application & Ethiopian Context</h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mastering ${s.title.toLowerCase()} equips Ethiopian students with essential digital literacy, technical problem-solving skills, and ethical understanding required for modern higher education and digital economy careers.
              </p>
            </div>
          </div>
        `,
        example: {
          title: `Worked Example: Practical Application of ${s.title}`,
          problem: `Explain how a student or IT professional applies ${s.title} to solve a real-world computing task.`,
          steps: [
            { label: 'Step 1: Identify technical requirements', text: `Determine the relevant hardware, software, or algorithmic parameters.` },
            { label: 'Step 2: Execute procedure', text: `Apply standard best practices: ${s.kf}.` },
            { label: 'Step 3: Verification', text: `Verify operational integrity, security, and data accuracy.` }
          ],
          proTip: 'Consistent hands-on practice in the computer laboratory builds true technical mastery!'
        },
        reciteFlashcards: [
          { q: `What is the core rule or definition of ${s.title}?`, a: s.kf },
          { q: s.q1, a: 'It optimizes performance, ensures reliable data processing, and prevents critical failures.' },
          { q: s.q2, a: 'It protects digital assets, ensures legal compliance, and maintains cybersecurity.' }
        ],
        amtQuiz: [
          {
            q: `Which of the following statements most accurately reflects the core computing principle of ${s.title}?`,
            options: [
              `${s.kf}`,
              `Computers function without any hardware architecture or memory`,
              `Digital systems do not require software or operating systems`,
              `Security measures and backups are completely unnecessary in modern computing`
            ],
            correct: 0,
            strategy: 'Select the statement that reflects sound computer science principles.',
            derivation: `Option A correctly states the fundamental principle: ${s.kf}.`,
            trap: 'Choosing options that dismiss hardware, software, or cybersecurity requirements.'
          }
        ]
      }))
    }))
  };
}

const g7It = assembleItSubject('g7-it', 'Information Technology', g7ItUnits);
const g8It = assembleItSubject('g8-it', 'Information Technology', g8ItUnits);

fs.writeFileSync(path.join(__dirname, '..', 'src', 'curriculum', 'g7_it.js'), 'module.exports = ' + JSON.stringify(g7It, null, 2) + ';\n', 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'src', 'curriculum', 'g8_it.js'), 'module.exports = ' + JSON.stringify(g8It, null, 2) + ';\n', 'utf8');

console.log('Successfully wrote Complete Grade 7 IT (5 Units, 10 Subtopics) and Grade 8 IT (6 Units, 12 Subtopics)!');
