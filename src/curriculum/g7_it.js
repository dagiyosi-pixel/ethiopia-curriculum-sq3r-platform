// Grade 7 Information Technology - Complete Ethiopian Curriculum Syllabus (Units 1 to 5)
module.exports = {
  id: 'it',
  name: 'Information Technology',
  icon: '💻',
  units: [
    {
      id: 'g7-it-u1',
      number: 'Unit 1',
      title: 'Foundations of Information Technology',
      bigIdea: 'Understand the concept of ICT, distinction between data and information, and modern computer applications in society.',
      subtopics: [
        {
          id: 'g7-it-1.1',
          code: '1.1',
          title: 'Data vs. Information & ICT Overview',
          survey: {
            blueprint: 'Information Processing Cycle: Input (Data) ➔ Processing (CPU) ➔ Output (Information) ➔ Storage. Characteristics of computers: Speed, Accuracy, Diligence, Versatility, Storage capacity.',
            objectives: [
              'Differentiate raw data from meaningful information.',
              'Explain the stages of the Information Processing Cycle.',
              'Identify the role of ICT in education, banking, healthcare, and telecommunications in Ethiopia.'
            ],
            keyFormulas: 'Information = Data + Context + Processing (Data is unorganized facts; Information is structured knowledge)'
          },
          questions: [
            'Why is raw data considered useless without processing and context?',
            'How has digital banking (e.g., Telebirr, CBE Birr) transformed Ethiopian commerce?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Information Concepts & Computing Foundations</h4>
              <p>• <strong>Data:</strong> Unprocessed, unorganized raw facts, numbers, figures, or symbols (e.g., "85, 92, 78").<br>
              • <strong>Information:</strong> Data that has been processed, organized, structured, and presented in a meaningful context (e.g., "Abebe\'s Grade 7 Math exam score is 92%, ranked 1st in the class").<br>
              • <strong>The Information Processing Cycle:</strong><br>
                - <em>Input:</em> Entering raw data via keyboard, mouse, scanner.<br>
                - <em>Processing:</em> Performing arithmetic and logical operations via the CPU.<br>
                - <em>Output:</em> Presenting usable results on monitor screen or printer.<br>
                - <em>Storage:</em> Saving data permanently on SSD, hard drive, or cloud for future retrieval.</p>
            </div>
          `,
          example: {
            title: 'Converting Raw Data to Meaningful Information',
            problem: 'A weather sensor records the numbers "28, 65, 12". Explain how a computer system turns this into usable information for an Ethiopian farmer.',
            steps: [
              { label: 'Step 1: Contextual mapping', text: 'Assign units and semantics: 28°C (temperature), 65% (relative humidity), 12 km/h (wind speed).' },
              { label: 'Step 2: Analysis algorithm', text: 'Compare against agronomic thresholds: conditions indicate ideal moisture for sowing teff seeds today.' },
              { label: 'Step 3: Actionable information output', text: 'Display farmer SMS alert: "Optimal conditions today for planting in Bishoftu."' }
            ],
            proTip: 'Data is the raw ingredient; information is the cooked meal ready to consume!'
          },
          reciteFlashcards: [
            { q: 'What is the fundamental difference between data and information?', a: 'Data is raw unorganized facts; information is processed and meaningful data.' },
            { q: 'What are the four phases of the Information Processing Cycle?', a: 'Input, Processing, Output, and Storage.' }
          ],
          amtQuiz: [
            {
              q: 'Which of the following represents processed INFORMATION rather than raw data?',
              options: [
                'The list of unorganized numbers: 14, 22, 9, 31',
                'A report showing the average monthly rainfall in Hawassa is 115 mm',
                'The single character string "X79"',
                'A collection of unsorted student names without grades'
              ],
              correct: 1,
              strategy: 'Information has structure, unit, and meaningful context.',
              derivation: 'The average rainfall report presents analyzed data with context (Hawassa, mm, monthly average), delivering immediate actionable meaning.',
              trap: 'Unsorted numbers or single characters lack context and remain raw data!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-it-u2',
      number: 'Unit 2',
      title: 'Computer System Architecture',
      bigIdea: 'Explore internal computer hardware: CPU (ALU and Control Unit), system bus, Primary memory (RAM/ROM), and Secondary storage.',
      subtopics: [
        {
          id: 'g7-it-2.1',
          code: '2.1',
          title: 'CPU, Memory (RAM vs. ROM) & Storage',
          survey: {
            blueprint: 'Hardware system: Central Processing Unit (ALU + Control Unit + Registers), Primary Memory (RAM volatile vs ROM non-volatile), Secondary Storage (HDD, SSD, Flash drives).',
            objectives: [
              'Explain the function of the ALU (Arithmetic Logic Unit) and CU (Control Unit).',
              'Distinguish between volatile RAM and non-volatile ROM.',
              'Compare secondary storage media by speed and capacity.'
            ],
            keyFormulas: '1 Byte = 8 bits &nbsp;|&nbsp; 1 KB = 1024 Bytes &nbsp;|&nbsp; 1 MB = 1024 KB &nbsp;|&nbsp; 1 GB = 1024 MB &nbsp;|&nbsp; 1 TB = 1024 GB'
          },
          questions: [
            'Why does all unsaved work in RAM vanish when power is suddenly cut off?',
            'Why are Solid State Drives (SSDs) significantly faster than traditional Hard Disk Drives (HDDs)?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Processor Anatomy & Memory Hierarchy</h4>
              <p>• <strong>Central Processing Unit (CPU):</strong> The "brain" of the computer.<br>
                - <em>Control Unit (CU):</em> Coordinates and directs all operations of the computer system.<br>
                - <em>Arithmetic Logic Unit (ALU):</em> Performs mathematical calculations (+, -, *, /) and logical comparisons (&lt;, &gt;, =).<br>
              • <strong>RAM vs. ROM:</strong><br>
                - <em>RAM (Random Access Memory):</em> Volatile temporary memory holding active programs and data. Lost when powered off.<br>
                - <em>ROM (Read Only Memory):</em> Non-volatile permanent chip storing startup firmware (BIOS / UEFI).<br>
              • <strong>Secondary Storage:</strong> Non-volatile long-term storage (SSDs use flash memory chips; HDDs use spinning magnetic platters).</p>
            </div>
          `,
          example: {
            title: 'Memory Capacity Unit Conversion',
            problem: 'Calculate how many megabytes (MB) of data can be stored on a 4 Gigabyte (GB) USB flash drive (using standard binary 1024 binary units).',
            steps: [
              { label: 'Step 1: State conversion factor', text: '1 GB = 1024 MB.' },
              { label: 'Step 2: Multiply by 4', text: '4 × 1024 MB = <strong>4096 MB</strong>.' }
            ],
            proTip: 'In consumer storage advertising, manufacturers often use decimal 1000 instead of 1024, which is why a drive shows slightly less capacity in Windows!'
          },
          reciteFlashcards: [
            { q: 'Which component of the CPU carries out mathematical and logical comparisons?', a: 'The ALU (Arithmetic Logic Unit).' },
            { q: 'Why is RAM referred to as "volatile" memory?', a: 'Because its contents are erased as soon as power is turned off.' }
          ],
          amtQuiz: [
            {
              q: 'Which type of memory permanently retains the computer’s basic boot instructions (BIOS) even after power is turned off?',
              options: ['RAM', 'ROM', 'Cache Memory', 'Virtual Memory'],
              correct: 1,
              strategy: 'Recall the definition of non-volatile read-only memory.',
              derivation: 'ROM (Read Only Memory) is non-volatile and permanently programmed by the manufacturer to store boot firmware.',
              trap: 'RAM is volatile and wipes clean when power is disconnected!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-it-u3',
      number: 'Unit 3',
      title: 'Operating Systems & File Organization',
      bigIdea: 'Understand the operating system as an interface, desktop GUI navigation, file hierarchies, extensions, and folder management.',
      subtopics: [
        {
          id: 'g7-it-3.1',
          code: '3.1',
          title: 'Operating System Roles & File Management',
          survey: {
            blueprint: 'Operating System (OS: Windows, Linux, Android) manages hardware, software, memory, and files. GUI (Graphical User Interface: Windows, Icons, Menus, Pointers). File path hierarchies.',
            objectives: [
              'Explain the core responsibilities of an Operating System.',
              'Identify common file extensions (.docx, .xlsx, .pdf, .jpg, .mp3, .html).',
              'Create, rename, organize, and search hierarchical folder directories.'
            ],
            keyFormulas: 'File Architecture: Root Directory (C:\\) ➔ Folder ➔ Subfolder ➔ Filename.extension'
          },
          questions: [
            'What happens if a computer does not have an operating system installed?',
            'Why does the operating system rely on file extensions to open documents?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">OS Architecture & File Structures</h4>
              <p>• <strong>Operating System (OS):</strong> System software that acts as an intermediary between computer hardware and user application software (examples: Microsoft Windows, Ubuntu Linux, macOS, Android).<br>
              • <strong>Key Roles:</strong> Memory management, processor scheduling, device driver control, security, and file system management.<br>
              • <strong>Common File Extensions:</strong><br>
                - Documents: <code>.docx</code> (Word), <code>.pdf</code> (Acrobat), <code>.txt</code> (Plain text)<br>
                - Spreadsheets: <code>.xlsx</code> (Excel)<br>
                - Images: <code>.jpg / .png / .svg</code><br>
                - Audio / Video: <code>.mp3</code> (Audio), <code>.mp4</code> (Video)<br>
                - Web / Code: <code>.html, .css, .js</code></p>
            </div>
          `,
          example: {
            title: 'Interpreting a Hierarchical File Path',
            problem: 'Break down the file path: <code>C:\\Grade7\\Science\\Unit2_Cells.pdf</code> into its hierarchical components.',
            steps: [
              { label: 'Step 1: Root Drive', text: '<code>C:</code> represents the primary local hard drive partition.' },
              { label: 'Step 2: Folders', text: '<code>Grade7</code> is the parent folder; <code>Science</code> is the nested subfolder.' },
              { label: 'Step 3: File & Extension', text: '<code>Unit2_Cells</code> is the filename; <code>.pdf</code> denotes a Portable Document Format file opened with a PDF reader.' }
            ],
            proTip: 'Never rename the file extension suffix by accident or your OS may not know which application to launch!'
          },
          reciteFlashcards: [
            { q: 'What does GUI stand for in operating systems?', a: 'Graphical User Interface.' },
            { q: 'What kind of file has the extension .docx?', a: 'A Microsoft Word text document.' }
          ],
          amtQuiz: [
            {
              q: 'Which of the following software programs is an Operating System?',
              options: ['Microsoft Word', 'Ubuntu Linux', 'Google Chrome', 'Adobe Photoshop'],
              correct: 1,
              strategy: 'Distinguish system software (OS) from application software.',
              derivation: 'Ubuntu Linux is an open-source operating system that manages the computer\'s hardware and software resources.',
              trap: 'Chrome is a web browser and Word is a word processor — both are application software!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-it-u4',
      number: 'Unit 4',
      title: 'Word Processing Mastery',
      bigIdea: 'Master word processing tools: document drafting, character and paragraph formatting, tables, page orientation, and printing.',
      subtopics: [
        {
          id: 'g7-it-4.1',
          code: '4.1',
          title: 'Document Formatting, Tables & Page Layout',
          survey: {
            blueprint: 'Word Processing: Ribbon interface, font attributes (bold, italics, underline, size, color), paragraph alignments (left, center, right, justify), inserting tables, margins and orientation (portrait vs landscape).',
            objectives: [
              'Format text with fonts, alignments, and line spacing.',
              'Create and customize tables with rows and columns.',
              'Configure page setup (margins, portrait/landscape orientation) and print preview.'
            ],
            keyFormulas: 'Shortcuts: Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+Z (Undo), Ctrl+S (Save), Ctrl+B (Bold)'
          },
          questions: [
            'What is the difference between "Justified" alignment and "Left" alignment in a printed essay?',
            'When is landscape page orientation preferred over portrait?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Document Engineering & Formatting Rules</h4>
              <p>• <strong>Paragraph Formatting:</strong><br>
                - <em>Left-aligned:</em> Text aligns along left margin with ragged right edge (standard reading).<br>
                - <em>Center-aligned:</em> Centered between margins (used for titles and certificates).<br>
                - <em>Justified:</em> Text spreads evenly between both left and right margins, producing crisp newspaper-style column edges.<br>
              • <strong>Tables:</strong> Organized grid made of rows (horizontal) and columns (vertical). The intersection of a row and column is called a <strong>Cell</strong>.<br>
              • <strong>Page Orientation:</strong> Portrait (taller than wide, standard letters) vs Landscape (wider than tall, wide tables and certificates).</p>
            </div>
          `,
          example: {
            title: 'Selecting Page Orientation for a School Timetable',
            problem: 'A student needs to type a weekly class timetable with 8 period columns (Monday through Friday). Should they choose portrait or landscape orientation?',
            steps: [
              { label: 'Step 1: Analyze horizontal width', text: '8 period columns plus time headers require significant horizontal page width.' },
              { label: 'Step 2: Compare layouts', text: 'Portrait is 210 mm wide (A4); Landscape is 297 mm wide.' },
              { label: 'Step 3: Decision', text: 'Select <strong>Landscape Orientation</strong> so table columns fit comfortably without shrinking text.' }
            ],
            proTip: 'Use "Print Preview" before sending to a printer to verify that columns do not overflow the page margin!'
          },
          reciteFlashcards: [
            { q: 'What is the intersection of a row and a column in a table called?', a: 'A Cell.' },
            { q: 'What keyboard shortcut undoes the last typing mistake?', a: 'Ctrl + Z.' }
          ],
          amtQuiz: [
            {
              q: 'Which paragraph alignment formats text flush along BOTH the left and right margins?',
              options: ['Left Alignment', 'Center Alignment', 'Justified Alignment', 'Right Alignment'],
              correct: 2,
              strategy: 'Recall the 4 alignment buttons in word processing.',
              derivation: 'Justified alignment adjusts word spacing so that text aligns straight against both the left and right margins.',
              trap: 'Center alignment centers each line but leaves ragged margins on both sides!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-it-u5',
      number: 'Unit 5',
      title: 'Internet, Communication & Cyber Hygiene',
      bigIdea: 'Explore web browsing, search engines, URLs, electronic mail, cybersecurity, strong passwords, and digital netiquette.',
      subtopics: [
        {
          id: 'g7-it-5.1',
          code: '5.1',
          title: 'Internet Navigation & Online Safety',
          survey: {
            blueprint: 'WWW (World Wide Web), Web Browsers (Chrome, Firefox, Edge) vs Search Engines (Google). URLs (Protocol, Domain, Top-Level Domain). Cyber hygiene: Strong passwords, phishing awareness, digital footprint.',
            objectives: [
              'Explain the difference between a web browser and a search engine.',
              'Deconstruct a URL into protocol, domain name, and extension (.edu, .gov, .org, .et).',
              'Apply cybersecurity best practices to safeguard personal data and passwords.'
            ],
            keyFormulas: 'URL: https:// (Protocol) + www.moe.gov.et (Domain & TLD: Government of Ethiopia)'
          },
          questions: [
            'Why is Google Chrome considered a browser while Google Search is an online search engine?',
            'What makes a password robust against brute-force dictionary cyberattacks?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-cyan-400">Web Navigation & Cyber Safety Essentials</h4>
              <p>• <strong>Browser vs. Search Engine:</strong> A <em>Web Browser</em> is an application software installed on your device to display web pages (Chrome, Edge). A <em>Search Engine</em> is a cloud web service that indexes and searches the internet using keywords (Google, Bing).<br>
              • <strong>URL Components:</strong> <code>https://www.ethiopia.gov.et</code><br>
                - <code>https://</code>: Hypertext Transfer Protocol Secure (encrypted communication).<br>
                - <code>.gov.et</code>: Top-Level Domain (.gov = government; .et = Ethiopia country code).<br>
              • <strong>Cyber Hygiene Rules:</strong><br>
                - Use passwords with 12+ characters combining uppercase, lowercase, numbers, and symbols.<br>
                - Never click suspicious links in emails claiming you won a lottery (phishing fraud).<br>
                - Never share personal home addresses, phone numbers, or passwords on social media.</p>
            </div>
          `,
          example: {
            title: 'Evaluating Password Security Strength',
            problem: 'Evaluate two passwords: A) "ethiopia123" vs B) "Teff#Green!2026". Which is secure and why?',
            steps: [
              { label: 'Step 1: Analyze password A', text: '"ethiopia123" uses common dictionary words and simple sequential numbers, highly susceptible to dictionary hacking.' },
              { label: 'Step 2: Analyze password B', text: '"Teff#Green!2026" contains uppercase, lowercase, special characters (#, !), and numbers, with 16 characters.' },
              { label: 'Step 3: Conclusion', text: 'Password B is exponentially stronger and resists automated brute-force cracking.' }
            ],
            proTip: 'Never reuse the same password across multiple online accounts or email services!'
          },
          reciteFlashcards: [
            { q: 'What does "HTTPS" stand for in a website address?', a: 'Hypertext Transfer Protocol Secure (indicates encrypted communication).' },
            { q: 'What is phishing in cybercrime?', a: 'Deceptive emails or fake websites designed to trick users into revealing passwords or credit details.' }
          ],
          amtQuiz: [
            {
              q: 'Which of the following top-level domain extensions is strictly reserved for educational institutions?',
              options: ['.com', '.edu', '.org', '.gov'],
              correct: 1,
              strategy: 'Associate domain suffixes with institutional categories.',
              derivation: '.edu is reserved specifically for accredited educational institutions like universities and schools.',
              trap: '.gov is for government entities, while .org is for non-profit organizations!'
            }
          ]
        }
      ]
    }
  ]
};
