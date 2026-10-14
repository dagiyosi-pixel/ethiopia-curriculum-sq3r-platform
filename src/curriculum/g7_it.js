module.exports = {
  "id": "it",
  "name": "Information Technology",
  "icon": "💻",
  "units": [
    {
      "id": "g7-it-u1",
      "number": "Unit 1",
      "title": "Foundations of Information Technology",
      "bigIdea": "Understand the concept of ICT, distinction between data and information, and modern computer applications in society.",
      "subtopics": [
        {
          "id": "g7-it-1.1",
          "code": "1.1",
          "title": "Data vs. Information & ICT Overview",
          "survey": {
            "blueprint": "Information Processing Cycle: Input (Data) ➔ Processing (CPU) ➔ Output (Information) ➔ Storage. Characteristics of computers: Speed, Accuracy, Diligence, Versatility, Storage capacity.",
            "objectives": [
              "Differentiate raw data from meaningful information.",
              "Explain the stages of the Information Processing Cycle.",
              "Identify the role of ICT in education, banking, healthcare, and telecommunications in Ethiopia."
            ],
            "keyFormulas": "Information = Data + Context + Processing (Data is unorganized facts; Information is structured knowledge)"
          },
          "questions": [
            "Why is raw data considered useless without processing and context?",
            "How has digital banking (e.g., Telebirr, CBE Birr) transformed Ethiopian commerce?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Information Concepts & Computing Foundations</h4>\n              <p>• <strong>Data:</strong> Unprocessed, unorganized raw facts, numbers, figures, or symbols (e.g., \"85, 92, 78\").<br>\n              • <strong>Information:</strong> Data that has been processed, organized, structured, and presented in a meaningful context (e.g., \"Abebe's Grade 7 Math exam score is 92%, ranked 1st in the class\").<br>\n              • <strong>The Information Processing Cycle:</strong><br>\n                - <em>Input:</em> Entering raw data via keyboard, mouse, scanner.<br>\n                - <em>Processing:</em> Performing arithmetic and logical operations via the CPU.<br>\n                - <em>Output:</em> Presenting usable results on monitor screen or printer.<br>\n                - <em>Storage:</em> Saving data permanently on SSD, hard drive, or cloud for future retrieval.</p>\n            </div>\n          ",
          "example": {
            "title": "Converting Raw Data to Meaningful Information",
            "problem": "A weather sensor records the numbers \"28, 65, 12\". Explain how a computer system turns this into usable information for an Ethiopian farmer.",
            "steps": [
              {
                "label": "Step 1: Contextual mapping",
                "text": "Assign units and semantics: 28°C (temperature), 65% (relative humidity), 12 km/h (wind speed)."
              },
              {
                "label": "Step 2: Analysis algorithm",
                "text": "Compare against agronomic thresholds: conditions indicate ideal moisture for sowing teff seeds today."
              },
              {
                "label": "Step 3: Actionable information output",
                "text": "Display farmer SMS alert: \"Optimal conditions today for planting in Bishoftu.\""
              }
            ],
            "proTip": "Data is the raw ingredient; information is the cooked meal ready to consume!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the fundamental difference between data and information?",
              "a": "Data is raw unorganized facts; information is processed and meaningful data."
            },
            {
              "q": "What are the four phases of the Information Processing Cycle?",
              "a": "Input, Processing, Output, and Storage."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the precise informational difference between raw \"Data\" and processed \"Information\"?",
              "options": [
                "Data is processed meaningful insight, while information is unorganized symbols",
                "Data consists of raw, unorganized facts, figures, and characters, whereas Information is data that has been processed, organized, and structured into a meaningful context",
                "Data is only stored in RAM, while information is stored on DVD discs",
                "There is no technical difference between data and information"
              ],
              "correct": 1,
              "strategy": "Data = raw input; Information = processed meaningful output.",
              "derivation": "Data consists of uncontextualized inputs (e.g. 38, 42, 19). Information applies context and processing (e.g. Average exam scores for Section B = 33%).",
              "trap": "Inverting the definitions of data and information."
            },
            {
              "q": "Which of the following describes the fundamental four-stage Information Processing Cycle performed by all digital computers?",
              "options": [
                "Input ➔ Processing ➔ Output ➔ Storage",
                "Browsing ➔ Gaming ➔ Chatting ➔ Sleeping",
                "Typing ➔ Printing ➔ Deleting ➔ Restarting",
                "Download ➔ Encrypt ➔ Hack ➔ Upload"
              ],
              "correct": 0,
              "strategy": "IPOS cycle: Input, Processing, Output, Storage.",
              "derivation": "All general-purpose computers take input data through peripheral devices, process it using the CPU, present output to the user, and store data in secondary storage.",
              "trap": "Leaving out processing or storage."
            },
            {
              "q": "Which class of computers is specifically engineered for massive scientific computations, climate modeling, and aerospace simulations, performing billions of calculations per second?",
              "options": [
                "Microcomputers (Laptops)",
                "Supercomputers",
                "Smartphones",
                "Embedded Microcontrollers"
              ],
              "correct": 1,
              "strategy": "Supercomputers are the most powerful computational systems.",
              "derivation": "Supercomputers possess thousands of interconnected processors designed for ultra-high-speed floating-point scientific simulations.",
              "trap": "Selecting microcomputers or personal workstations."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-it-u2",
      "number": "Unit 2",
      "title": "Computer System Architecture",
      "bigIdea": "Explore internal computer hardware: CPU (ALU and Control Unit), system bus, Primary memory (RAM/ROM), and Secondary storage.",
      "subtopics": [
        {
          "id": "g7-it-2.1",
          "code": "2.1",
          "title": "CPU, Memory (RAM vs. ROM) & Storage",
          "survey": {
            "blueprint": "Hardware system: Central Processing Unit (ALU + Control Unit + Registers), Primary Memory (RAM volatile vs ROM non-volatile), Secondary Storage (HDD, SSD, Flash drives).",
            "objectives": [
              "Explain the function of the ALU (Arithmetic Logic Unit) and CU (Control Unit).",
              "Distinguish between volatile RAM and non-volatile ROM.",
              "Compare secondary storage media by speed and capacity."
            ],
            "keyFormulas": "1 Byte = 8 bits &nbsp;|&nbsp; 1 KB = 1024 Bytes &nbsp;|&nbsp; 1 MB = 1024 KB &nbsp;|&nbsp; 1 GB = 1024 MB &nbsp;|&nbsp; 1 TB = 1024 GB"
          },
          "questions": [
            "Why does all unsaved work in RAM vanish when power is suddenly cut off?",
            "Why are Solid State Drives (SSDs) significantly faster than traditional Hard Disk Drives (HDDs)?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Processor Anatomy & Memory Hierarchy</h4>\n              <p>• <strong>Central Processing Unit (CPU):</strong> The \"brain\" of the computer.<br>\n                - <em>Control Unit (CU):</em> Coordinates and directs all operations of the computer system.<br>\n                - <em>Arithmetic Logic Unit (ALU):</em> Performs mathematical calculations (+, -, *, /) and logical comparisons (&lt;, &gt;, =).<br>\n              • <strong>RAM vs. ROM:</strong><br>\n                - <em>RAM (Random Access Memory):</em> Volatile temporary memory holding active programs and data. Lost when powered off.<br>\n                - <em>ROM (Read Only Memory):</em> Non-volatile permanent chip storing startup firmware (BIOS / UEFI).<br>\n              • <strong>Secondary Storage:</strong> Non-volatile long-term storage (SSDs use flash memory chips; HDDs use spinning magnetic platters).</p>\n            </div>\n          ",
          "example": {
            "title": "Memory Capacity Unit Conversion",
            "problem": "Calculate how many megabytes (MB) of data can be stored on a 4 Gigabyte (GB) USB flash drive (using standard binary 1024 binary units).",
            "steps": [
              {
                "label": "Step 1: State conversion factor",
                "text": "1 GB = 1024 MB."
              },
              {
                "label": "Step 2: Multiply by 4",
                "text": "4 × 1024 MB = <strong>4096 MB</strong>."
              }
            ],
            "proTip": "In consumer storage advertising, manufacturers often use decimal 1000 instead of 1024, which is why a drive shows slightly less capacity in Windows!"
          },
          "reciteFlashcards": [
            {
              "q": "Which component of the CPU carries out mathematical and logical comparisons?",
              "a": "The ALU (Arithmetic Logic Unit)."
            },
            {
              "q": "Why is RAM referred to as \"volatile\" memory?",
              "a": "Because its contents are erased as soon as power is turned off."
            }
          ],
          "amtQuiz": [
            {
              "q": "How does Random Access Memory (RAM) differ fundamentally from Read-Only Memory (ROM)?",
              "options": [
                "RAM is volatile (loses its contents when the power is turned off), whereas ROM is non-volatile (permanently retains startup instructions like BIOS/UEFI)",
                "RAM can never be modified, while ROM changes every second",
                "RAM stores photos on flash drives, while ROM is an optical disc",
                "RAM is an output device, while ROM is an input device"
              ],
              "correct": 0,
              "strategy": "RAM = volatile temporary working memory; ROM = non-volatile permanent startup code.",
              "derivation": "RAM holds currently executing programs and active data while powered on. ROM holds firmware instructions that survive power shutoffs.",
              "trap": "Thinking RAM permanently saves files."
            },
            {
              "q": "Which two primary sub-units constitute the central architecture of the Central Processing Unit (CPU)?",
              "options": [
                "The Arithmetic Logic Unit (ALU) and the Control Unit (CU)",
                "The Monitor and the Computer Mouse",
                "The Hard Disk Drive and the Power Supply",
                "The Graphics Card and the Cooling Fan"
              ],
              "correct": 0,
              "strategy": "CPU = ALU (calculates) + CU (orchestrates).",
              "derivation": "The ALU performs all arithmetic operations (+, -, *, /) and logical comparisons (<, >, =). The Control Unit fetches instructions from memory, decodes them, and directs data flow.",
              "trap": "Selecting external hardware peripherals."
            },
            {
              "q": "Why are modern Solid-State Drives (SSDs) significantly faster, quieter, and more durable than traditional mechanical Hard Disk Drives (HDDs)?",
              "options": [
                "SSDs use non-volatile flash memory chips with zero moving mechanical parts, while HDDs rely on spinning magnetic platters and mechanical read/write heads",
                "SSDs require liquid nitrogen cooling to function",
                "SSDs only store text files, while HDDs store videos",
                "SSDs connect directly to wall power outlets without cables"
              ],
              "correct": 0,
              "strategy": "Flash memory has zero mechanical moving parts.",
              "derivation": "HDDs suffer from mechanical latency (spindle spin time and head seek time). SSDs access flash memory cells electronically with near-instant read/write access.",
              "trap": "Assuming HDDs are faster because they are heavier."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-it-u3",
      "number": "Unit 3",
      "title": "Operating Systems & File Organization",
      "bigIdea": "Understand the operating system as an interface, desktop GUI navigation, file hierarchies, extensions, and folder management.",
      "subtopics": [
        {
          "id": "g7-it-3.1",
          "code": "3.1",
          "title": "Operating System Roles & File Management",
          "survey": {
            "blueprint": "Operating System (OS: Windows, Linux, Android) manages hardware, software, memory, and files. GUI (Graphical User Interface: Windows, Icons, Menus, Pointers). File path hierarchies.",
            "objectives": [
              "Explain the core responsibilities of an Operating System.",
              "Identify common file extensions (.docx, .xlsx, .pdf, .jpg, .mp3, .html).",
              "Create, rename, organize, and search hierarchical folder directories."
            ],
            "keyFormulas": "File Architecture: Root Directory (C:\\) ➔ Folder ➔ Subfolder ➔ Filename.extension"
          },
          "questions": [
            "What happens if a computer does not have an operating system installed?",
            "Why does the operating system rely on file extensions to open documents?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">OS Architecture & File Structures</h4>\n              <p>• <strong>Operating System (OS):</strong> System software that acts as an intermediary between computer hardware and user application software (examples: Microsoft Windows, Ubuntu Linux, macOS, Android).<br>\n              • <strong>Key Roles:</strong> Memory management, processor scheduling, device driver control, security, and file system management.<br>\n              • <strong>Common File Extensions:</strong><br>\n                - Documents: <code>.docx</code> (Word), <code>.pdf</code> (Acrobat), <code>.txt</code> (Plain text)<br>\n                - Spreadsheets: <code>.xlsx</code> (Excel)<br>\n                - Images: <code>.jpg / .png / .svg</code><br>\n                - Audio / Video: <code>.mp3</code> (Audio), <code>.mp4</code> (Video)<br>\n                - Web / Code: <code>.html, .css, .js</code></p>\n            </div>\n          ",
          "example": {
            "title": "Interpreting a Hierarchical File Path",
            "problem": "Break down the file path: <code>C:\\Grade7\\Science\\Unit2_Cells.pdf</code> into its hierarchical components.",
            "steps": [
              {
                "label": "Step 1: Root Drive",
                "text": "<code>C:</code> represents the primary local hard drive partition."
              },
              {
                "label": "Step 2: Folders",
                "text": "<code>Grade7</code> is the parent folder; <code>Science</code> is the nested subfolder."
              },
              {
                "label": "Step 3: File & Extension",
                "text": "<code>Unit2_Cells</code> is the filename; <code>.pdf</code> denotes a Portable Document Format file opened with a PDF reader."
              }
            ],
            "proTip": "Never rename the file extension suffix by accident or your OS may not know which application to launch!"
          },
          "reciteFlashcards": [
            {
              "q": "What does GUI stand for in operating systems?",
              "a": "Graphical User Interface."
            },
            {
              "q": "What kind of file has the extension .docx?",
              "a": "A Microsoft Word text document."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the primary role of an Operating System (such as Windows, Linux, or Android) in a computer system?",
              "options": [
                "It is a word processing program used only to write essays",
                "It is system software that manages computer hardware resources, coordinates memory, and provides a platform for application software to run",
                "It protects the plastic computer case from dust",
                "It powers the monitor screen using optical sensors"
              ],
              "correct": 1,
              "strategy": "The OS manages hardware and provides an application interface.",
              "derivation": "An OS manages the CPU schedule, memory allocation, peripheral I/O devices, and file systems, acting as an intermediary between user applications and bare hardware.",
              "trap": "Confusing operating systems with specific application software (like Word or Chrome)."
            },
            {
              "q": "In hierarchical file organization, what does a file extension (such as .docx, .pdf, .jpg, .py) indicate to the operating system?",
              "options": [
                "The date the computer was manufactured in the factory",
                "The file format and which application program is associated to open and interpret it",
                "The price of the software license in birr",
                "The physical location of the computer on the desk"
              ],
              "correct": 1,
              "strategy": "File extensions identify format and associated program.",
              "derivation": "Extensions signify file types: .docx (Word document), .pdf (Portable Document Format), .py (Python script). The OS uses this to invoke the proper decoder.",
              "trap": "Assuming file extensions are random decorative letters."
            },
            {
              "q": "How does a Graphical User Interface (GUI) differ from a Command Line Interface (CLI)?",
              "options": [
                "A GUI uses visual windows, icons, menus, and pointers (WIMP) controlled by a mouse/touch, while a CLI requires typing text commands into a terminal prompt",
                "A GUI cannot display colors on the screen",
                "A CLI is only used for playing sound files",
                "There is no difference between GUI and CLI"
              ],
              "correct": 0,
              "strategy": "GUI = visual icons/mouse; CLI = text commands/keyboard.",
              "derivation": "GUI provides visual interaction (Windows, macOS, Android). CLI requires memorizing and typing text commands (DOS, Linux bash).",
              "trap": "Inverting CLI and GUI definitions."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-it-u4",
      "number": "Unit 4",
      "title": "Word Processing Mastery",
      "bigIdea": "Master word processing tools: document drafting, character and paragraph formatting, tables, page orientation, and printing.",
      "subtopics": [
        {
          "id": "g7-it-4.1",
          "code": "4.1",
          "title": "Document Formatting, Tables & Page Layout",
          "survey": {
            "blueprint": "Word Processing: Ribbon interface, font attributes (bold, italics, underline, size, color), paragraph alignments (left, center, right, justify), inserting tables, margins and orientation (portrait vs landscape).",
            "objectives": [
              "Format text with fonts, alignments, and line spacing.",
              "Create and customize tables with rows and columns.",
              "Configure page setup (margins, portrait/landscape orientation) and print preview."
            ],
            "keyFormulas": "Shortcuts: Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+Z (Undo), Ctrl+S (Save), Ctrl+B (Bold)"
          },
          "questions": [
            "What is the difference between \"Justified\" alignment and \"Left\" alignment in a printed essay?",
            "When is landscape page orientation preferred over portrait?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Document Engineering & Formatting Rules</h4>\n              <p>• <strong>Paragraph Formatting:</strong><br>\n                - <em>Left-aligned:</em> Text aligns along left margin with ragged right edge (standard reading).<br>\n                - <em>Center-aligned:</em> Centered between margins (used for titles and certificates).<br>\n                - <em>Justified:</em> Text spreads evenly between both left and right margins, producing crisp newspaper-style column edges.<br>\n              • <strong>Tables:</strong> Organized grid made of rows (horizontal) and columns (vertical). The intersection of a row and column is called a <strong>Cell</strong>.<br>\n              • <strong>Page Orientation:</strong> Portrait (taller than wide, standard letters) vs Landscape (wider than tall, wide tables and certificates).</p>\n            </div>\n          ",
          "example": {
            "title": "Selecting Page Orientation for a School Timetable",
            "problem": "A student needs to type a weekly class timetable with 8 period columns (Monday through Friday). Should they choose portrait or landscape orientation?",
            "steps": [
              {
                "label": "Step 1: Analyze horizontal width",
                "text": "8 period columns plus time headers require significant horizontal page width."
              },
              {
                "label": "Step 2: Compare layouts",
                "text": "Portrait is 210 mm wide (A4); Landscape is 297 mm wide."
              },
              {
                "label": "Step 3: Decision",
                "text": "Select <strong>Landscape Orientation</strong> so table columns fit comfortably without shrinking text."
              }
            ],
            "proTip": "Use \"Print Preview\" before sending to a printer to verify that columns do not overflow the page margin!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the intersection of a row and a column in a table called?",
              "a": "A Cell."
            },
            {
              "q": "What keyboard shortcut undoes the last typing mistake?",
              "a": "Ctrl + Z."
            }
          ],
          "amtQuiz": [
            {
              "q": "In word processing software, what is the keyboard shortcut to Undo the most recent editing action?",
              "options": [
                "Ctrl + C",
                "Ctrl + V",
                "Ctrl + Z",
                "Ctrl + P"
              ],
              "correct": 2,
              "strategy": "Ctrl + Z is the universal shortcut for Undo.",
              "derivation": "Ctrl + C is Copy; Ctrl + V is Paste; Ctrl + P is Print; Ctrl + Z is Undo.",
              "trap": "Confusing Copy (Ctrl + C) with Undo (Ctrl + Z)."
            },
            {
              "q": "Which paragraph alignment option aligns text evenly along both the left and right margins by adjusting inter-word spacing?",
              "options": [
                "Left Align",
                "Center Align",
                "Right Align",
                "Justify"
              ],
              "correct": 3,
              "strategy": "Justify produces clean, straight edges on both left and right margins.",
              "derivation": "Justified text distributes spacing evenly between words so that text flushes cleanly against both margins, commonly seen in newspapers, textbooks, and formal documents.",
              "trap": "Selecting Center Align (which leaves jagged side margins)."
            },
            {
              "q": "What is the function of the \"Header and Footer\" feature in a professional document processing program?",
              "options": [
                "To automatically display consistent document metadata (such as page numbers, document titles, or dates) across the top and bottom margins of every page",
                "To increase the physical size of the computer screen",
                "To change the language of the computer operating system",
                "To delete all images from the document"
              ],
              "correct": 0,
              "strategy": "Headers and Footers repeat text/page numbers at top and bottom margins.",
              "derivation": "Headers (top margin) and Footers (bottom margin) repeat running information like page numbers, book chapters, and author names across every printed page.",
              "trap": "Thinking footers only appear on the final page."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-it-u5",
      "number": "Unit 5",
      "title": "Internet, Communication & Cyber Hygiene",
      "bigIdea": "Explore web browsing, search engines, URLs, electronic mail, cybersecurity, strong passwords, and digital netiquette.",
      "subtopics": [
        {
          "id": "g7-it-5.1",
          "code": "5.1",
          "title": "Internet Navigation & Online Safety",
          "survey": {
            "blueprint": "WWW (World Wide Web), Web Browsers (Chrome, Firefox, Edge) vs Search Engines (Google). URLs (Protocol, Domain, Top-Level Domain). Cyber hygiene: Strong passwords, phishing awareness, digital footprint.",
            "objectives": [
              "Explain the difference between a web browser and a search engine.",
              "Deconstruct a URL into protocol, domain name, and extension (.edu, .gov, .org, .et).",
              "Apply cybersecurity best practices to safeguard personal data and passwords."
            ],
            "keyFormulas": "URL: https:// (Protocol) + www.moe.gov.et (Domain & TLD: Government of Ethiopia)"
          },
          "questions": [
            "Why is Google Chrome considered a browser while Google Search is an online search engine?",
            "What makes a password robust against brute-force dictionary cyberattacks?"
          ],
          "coreNotes": "\n            <div class=\"space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300\">\n              <h4 class=\"font-bold text-cyan-400\">Web Navigation & Cyber Safety Essentials</h4>\n              <p>• <strong>Browser vs. Search Engine:</strong> A <em>Web Browser</em> is an application software installed on your device to display web pages (Chrome, Edge). A <em>Search Engine</em> is a cloud web service that indexes and searches the internet using keywords (Google, Bing).<br>\n              • <strong>URL Components:</strong> <code>https://www.ethiopia.gov.et</code><br>\n                - <code>https://</code>: Hypertext Transfer Protocol Secure (encrypted communication).<br>\n                - <code>.gov.et</code>: Top-Level Domain (.gov = government; .et = Ethiopia country code).<br>\n              • <strong>Cyber Hygiene Rules:</strong><br>\n                - Use passwords with 12+ characters combining uppercase, lowercase, numbers, and symbols.<br>\n                - Never click suspicious links in emails claiming you won a lottery (phishing fraud).<br>\n                - Never share personal home addresses, phone numbers, or passwords on social media.</p>\n            </div>\n          ",
          "example": {
            "title": "Evaluating Password Security Strength",
            "problem": "Evaluate two passwords: A) \"ethiopia123\" vs B) \"Teff#Green!2026\". Which is secure and why?",
            "steps": [
              {
                "label": "Step 1: Analyze password A",
                "text": "\"ethiopia123\" uses common dictionary words and simple sequential numbers, highly susceptible to dictionary hacking."
              },
              {
                "label": "Step 2: Analyze password B",
                "text": "\"Teff#Green!2026\" contains uppercase, lowercase, special characters (#, !), and numbers, with 16 characters."
              },
              {
                "label": "Step 3: Conclusion",
                "text": "Password B is exponentially stronger and resists automated brute-force cracking."
              }
            ],
            "proTip": "Never reuse the same password across multiple online accounts or email services!"
          },
          "reciteFlashcards": [
            {
              "q": "What does \"HTTPS\" stand for in a website address?",
              "a": "Hypertext Transfer Protocol Secure (indicates encrypted communication)."
            },
            {
              "q": "What is phishing in cybercrime?",
              "a": "Deceptive emails or fake websites designed to trick users into revealing passwords or credit details."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the technical difference between a Web Browser and a Search Engine?",
              "options": [
                "A Web Browser is an application program installed on your device to display HTML web pages (e.g. Chrome, Firefox), while a Search Engine is an online service that indexes and finds websites matching keywords (e.g. Google, Bing)",
                "A Web Browser is a computer hardware monitor, while a Search Engine is a printer",
                "A Search Engine cannot connect to the internet",
                "They are identical software programs that do the exact same thing"
              ],
              "correct": 0,
              "strategy": "Browser = software tool to view pages; Search engine = web service to find content.",
              "derivation": "You open a browser (Chrome/Edge) to access a search engine (Google), which searches indexed databases of web pages.",
              "trap": "Believing Google Chrome and Google Search are the same software entity."
            },
            {
              "q": "In the web URL \"https://www.education.gov.et\", what does the \"https://\" protocol indicate regarding communication security?",
              "options": [
                "The website is completely unencrypted and vulnerable to eavesdropping",
                "The communication between your browser and the web server is encrypted and authenticated using SSL/TLS security",
                "The website is hosted on an internal hard drive without internet access",
                "The web page contains high-definition video streaming only"
              ],
              "correct": 1,
              "strategy": "The \"s\" in HTTPS stands for Secure (encrypted via SSL/TLS).",
              "derivation": "HTTPS (Hypertext Transfer Protocol Secure) encrypts data in transit, preventing third-party interception of passwords, personal information, and student records.",
              "trap": "Thinking HTTP and HTTPS provide identical security."
            },
            {
              "q": "What social engineering cyber attack involves sending deceptive emails or messages pretending to be from a legitimate bank or school authority to steal passwords?",
              "options": [
                "Phishing",
                "Defragmentation",
                "Cloud Computing",
                "Bandwidth Throttling"
              ],
              "correct": 0,
              "strategy": "Phishing tricks users into revealing credentials.",
              "derivation": "Phishing uses spoofed emails and fake login web pages designed to trick victims into entering passwords, credit card numbers, or PINs.",
              "trap": "Confusing phishing with system maintenance terms like defragmentation."
            }
          ]
        }
      ]
    }
  ]
};
