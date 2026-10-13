module.exports = {
  "id": "social",
  "name": "Social Studies",
  "icon": "🌍",
  "units": [
    {
      "id": "g8-soc-u1",
      "number": "Unit 1",
      "title": "The World We Live In - Continents & Oceans",
      "bigIdea": "Explore the global physical landscape: relative location and sizes of the 7 continents and 5 oceans, extreme elevations, and major river systems.",
      "subtopics": [
        {
          "id": "g8-soc-1.1",
          "code": "1.1",
          "title": "The Seven Continents: Locations, Sizes & Extremes",
          "survey": {
            "blueprint": "Land (29%) vs Water (71%). 7 Continents ranked by area: Asia (~44.6M km²), Africa (~30.3M km²), North America (~24.5M km²), South America (~17.8M km²), Antarctica (~14.2M km²), Europe (~10.2M km²), Australia (~8.5M km²). Global extremes: Mount Everest (8,848m) vs Dead Sea (-430m) & Danakil Depression (-125m).",
            "objectives": [
              "Rank the 7 continents in order of land surface area.",
              "Describe the relative locations of the continents and key separating boundaries (Isthmus of Suez, Isthmus of Panama, Ural Mountains).",
              "Compare global elevation extremes with Ethiopian relief features (Ras Dejen vs Danakil Depression)."
            ],
            "keyFormulas": "Continents = 29% of Earth | Asia (Largest) > Africa > North America > South America > Antarctica > Europe > Australia (Smallest)"
          },
          "questions": [
            "Why is Asia ranked as the largest continent on Earth?",
            "How do the Isthmus of Panama and Isthmus of Suez connect major continental landmasses?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🗺️ 1. The Seven Continents Ranked by Size</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Continents cover 29% of Earth’s surface area (roughly 149 million km²). In descending order of size:<br>\n                  • <strong>1. Asia (~44.6 million km²):</strong> The largest and most populous continent; larger than Antarctica, Europe, and Australia combined. Connected to Europe along the Ural Mountains and to Africa at the Isthmus of Suez.<br>\n                  • <strong>2. Africa (~30.3 million km²):</strong> The second largest continent; crossed by both the Equator and Prime Meridian, bordered by the Mediterranean Sea (N), Red Sea (NE), Indian Ocean (E), and Atlantic Ocean (W/S).<br>\n                  • <strong>3. North America (~24.5 million km²):</strong> Third largest; connected to South America by the Isthmus of Panama.<br>\n                  • <strong>4. South America (~17.8 million km²):</strong> Fourth largest; home to the Andes Mountains and Amazon River Basin.<br>\n                  • <strong>5. Antarctica (~14.2 million km²):</strong> Frozen polar continent completely encircled by the Southern Ocean.<br>\n                  • <strong>6. Europe (~10.2 million km²):</strong> Sixth largest; western peninsula of the Eurasian landmass.<br>\n                  • <strong>7. Australia (~8.5 million km²):</strong> Smallest continent and only island continent occupied by a single nation.\n                </p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">🏔️ 2. Global and Ethiopian Relief Extremes</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-emerald-300\">Global Elevation Extremes:</strong><br>\n                    • Highest Peak: Mount Everest (8,848 m) in the Himalayas (Nepal/China).<br>\n                    • Lowest Continental Point: Dead Sea shoreline (-430 m below sea level) in Jordan/Palestine.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-amber-300\">Ethiopian Relief Extremes:</strong><br>\n                    • Highest Peak: Ras Dejen (4,550 m) in the Semien Mountains.<br>\n                    • Lowest Point: Danakil (Dallol) Depression (-125 m below sea level) in the Afar Triangle.\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Continental Area Comparison",
            "problem": "A geography problem asks: Which continent is larger than Europe and Australia combined, but smaller than Africa?",
            "steps": [
              {
                "label": "Step 1: Calculate combined area of Europe and Australia",
                "text": "Europe (~10.2M km²) + Australia (~8.5M km²) = ~18.7 million km²."
              },
              {
                "label": "Step 2: Compare with remaining continents",
                "text": "North America (~24.5M km²) is larger than 18.7M km² and smaller than Africa (~30.3M km²)."
              }
            ],
            "proTip": "Always memorize the ranking: Asia, Africa, North America, South America, Antarctica, Europe, Australia!"
          },
          "reciteFlashcards": [
            {
              "q": "Which is the largest continent in the world by area?",
              "a": "Asia (~44.6 million km²)."
            },
            {
              "q": "Which is the smallest continent in the world?",
              "a": "Australia (~8.5 million km²)."
            },
            {
              "q": "What is the highest mountain peak in Ethiopia?",
              "a": "Ras Dejen (4,550 meters above sea level) in the Semien Mountains."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which continent ranks as the second largest in the world by total land area?",
              "options": [
                "North America",
                "Africa",
                "Europe",
                "Antarctica"
              ],
              "correct": 1,
              "strategy": "Africa is the second largest continent after Asia.",
              "derivation": "Asia is 1st (~44.6M km²) and Africa is 2nd (~30.3M km²).",
              "trap": "Assuming North America is second."
            }
          ]
        },
        {
          "id": "g8-soc-1.2",
          "code": "1.2",
          "title": "The Five Oceans and Global Drainage Systems",
          "survey": {
            "blueprint": "Oceans cover 71% of Earth. 5 Oceans ranked by area: Pacific (largest, Mariana Trench -11,034m), Atlantic (S-shaped, Mid-Atlantic Ridge), Indian, Southern (encircles Antarctica), Arctic (smallest/shallowest). Strait vs Isthmus.",
            "objectives": [
              "Rank the 5 oceans in order of surface area and depth.",
              "Identify the deepest maritime depression (Challenger Deep in the Mariana Trench).",
              "Distinguish between a land Isthmus and a water Strait."
            ],
            "keyFormulas": "Oceans = 71% of Earth | Pacific (Largest/Deepest) > Atlantic > Indian > Southern > Arctic (Smallest)"
          },
          "questions": [
            "Why is the Pacific Ocean described as the largest single geographic feature on the planet?",
            "What is the precise physical difference between a Strait and an Isthmus?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">🌊 1. The Five Oceans Ranked</h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Pacific Ocean:</strong> Largest and deepest ocean; spans over 165 million km² (larger than all land surfaces combined). Contains the <strong>Mariana Trench (Challenger Deep, -11,034 m)</strong> and the volcanic \"Ring of Fire\".<br>\n                  • <strong>Atlantic Ocean:</strong> Second largest; S-shaped ocean separating the Americas from Europe and Africa. Traversed by the volcanic Mid-Atlantic Ridge.<br>\n                  • <strong>Indian Ocean:</strong> Third largest; warms the East African coast and drives the Asian seasonal monsoon rains.<br>\n                  • <strong>Southern (Antarctic) Ocean:</strong> Fourth largest; encircles Antarctica south of 60°S latitude with strong circumpolar currents.<br>\n                  • <strong>Arctic Ocean:</strong> Smallest and shallowest ocean, mostly covered by polar ice caps around the North Pole.</p>\n                </div>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🌉 2. Isthmus vs. Strait</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-emerald-300\">Isthmus (Land Bridge):</strong><br>\n                    A narrow strip of land connecting two larger landmasses and separating two bodies of water.<br>\n                    <em>Examples:</em> Isthmus of Panama (North & South America); Isthmus of Suez (Africa & Asia).\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-cyan-300\">Strait (Water Bridge):</strong><br>\n                    A narrow navigable waterway connecting two larger bodies of water and separating two landmasses.<br>\n                    <em>Examples:</em> Bab-el-Mandeb Strait (Red Sea & Gulf of Aden); Strait of Gibraltar (Atlantic & Mediterranean).\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Contrasting Land Isthmus vs Water Strait",
            "problem": "Differentiate between the Isthmus of Suez and the Bab-el-Mandeb Strait.",
            "steps": [
              {
                "label": "Step 1: Isthmus of Suez",
                "text": "The Isthmus of Suez is a strip of land connecting the African and Asian continents, separating the Mediterranean Sea from the Red Sea."
              },
              {
                "label": "Step 2: Bab-el-Mandeb Strait",
                "text": "The Bab-el-Mandeb is a narrow body of water connecting the Red Sea to the Gulf of Aden/Indian Ocean, separating the Horn of Africa (Djibouti/Eritrea) from the Arabian Peninsula (Yemen)."
              }
            ],
            "proTip": "Isthmus connects land; Strait connects bodies of water!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the deepest known location in the world’s oceans?",
              "a": "Challenger Deep in the Mariana Trench (-11,034 m, Pacific Ocean)."
            },
            {
              "q": "Which is the smallest and shallowest ocean?",
              "a": "The Arctic Ocean."
            },
            {
              "q": "What is a strait?",
              "a": "A narrow navigable waterway connecting two larger bodies of water."
            }
          ],
          "amtQuiz": [
            {
              "q": "The deepest point on Earth, the Challenger Deep (-11,034 meters), is located in which ocean?",
              "options": [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
              ],
              "correct": 2,
              "strategy": "The Mariana Trench is in the western Pacific Ocean.",
              "derivation": "The Mariana Trench in the Pacific Ocean reaches a depth of approximately 11,034 meters at Challenger Deep.",
              "trap": "Confusing the Atlantic’s Puerto Rico Trench with the Pacific’s Mariana Trench."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-soc-u2",
      "number": "Unit 2",
      "title": "Geological Processes: Volcanism & Earthquakes",
      "bigIdea": "Detailed study of endogenic tectonic processes: faulting and rift valleys, block mountains, volcanism (intrusive vs extrusive), active volcanoes (Erta Ale), and earthquake seismology.",
      "subtopics": [
        {
          "id": "g8-soc-2.1",
          "code": "2.1",
          "title": "Faulting, The Rift Valley & Fumaroles",
          "survey": {
            "blueprint": "Directly from skill booklet. Rift valley definition: long depression formed when land between two parallel faults sinks down. Formation: parallel faults → middle land sinks ↓. East African Rift Valley (7,200 km Syria to Mozambique, 5,600 km in Africa). Ethiopian Rift Valley (north to southwest). Features: active volcanoes, lakes, hot springs, fumaroles (openings for steam and volcanic gases).",
            "objectives": [
              "Define a rift valley and describe its tectonic formation between parallel faults.",
              "Trace the geographical extent of the East African and Ethiopian Rift Valley.",
              "Identify the key geological features of the rift valley, including fumaroles."
            ],
            "keyFormulas": "Rift Valley Formation: Two Parallel Faults → Tensional Stress → Middle Land Sinks DOWN ↓"
          },
          "questions": [
            "How does a rift valley form tectonically between two parallel faults?",
            "What is a fumarole and where are they found in the Ethiopian Rift Valley?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-rose-400\">🌋 1. Faulting and Rift Valley Formation</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Textbook Definition:</strong> A <strong>rift valley</strong> is a long, linear depression formed when the land situated between two parallel faults <strong>sinks down ↓</strong> under tensional tectonic forces.<br>\n                  • <strong>Step-by-Step Formation:</strong><br>\n                  1. Tensional tectonic stress pulls crustal blocks apart.<br>\n                  2. Two parallel normal fault fractures develop in the crust.<br>\n                  3. The central crustal block drops downward (graben), forming a steep-walled rift valley floor.\n                </p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🌍 2. The East African and Ethiopian Rift Valley</h4>\n                <ul class=\"text-xs sm:text-sm text-slate-300 space-y-1 list-disc list-inside\">\n                  <li><strong>East African Rift Valley:</strong> The world's largest rift valley system, extending approximately <strong>7,200 km</strong> from Syria (Jordan Valley) through the Red Sea down to Mozambique. The African continental section alone measures about <strong>5,600 km</strong>.</li>\n                  <li><strong>Ethiopian Rift Valley:</strong> A prominent segment of the East African Rift; extends from the northern Afar Triangle southwestward toward Lake Turkana.</li>\n                  <li><strong>Distinctive Geological Features:</strong> Active and dormant volcanoes, chain of rift valley lakes (Ziway, Langano, Abijatta, Shalla, Awassa, Abaya, Chamo), boiling geothermal hot springs, and <strong>fumaroles</strong>.</li>\n                  <li><strong>Fumarole Definition:</strong> An opening or vent in Earth’s crust through which steam and volcanic gases escape into the atmosphere.</li>\n                </ul>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Exam Definition - Rift Valley and Fumarole",
            "problem": "Define \"Rift Valley\" and \"Fumarole\" exactly as formulated in the national curriculum.",
            "steps": [
              {
                "label": "Step 1: Define Rift Valley",
                "text": "A rift valley is a long depression formed when the land between two parallel faults sinks down."
              },
              {
                "label": "Step 2: Define Fumarole",
                "text": "A fumarole is an opening in Earth’s surface through which steam and volcanic gases escape."
              }
            ],
            "proTip": "Remember the keyword for Rift Valley: land between parallel faults SINKS DOWN!"
          },
          "reciteFlashcards": [
            {
              "q": "What is a rift valley?",
              "a": "A long depression formed when the land between two parallel faults sinks down."
            },
            {
              "q": "How long is the entire East African Rift Valley?",
              "a": "About 7,200 km (from Syria to Mozambique; 5,600 km in Africa)."
            },
            {
              "q": "What is a fumarole?",
              "a": "An opening through which steam and volcanic gases escape."
            }
          ],
          "amtQuiz": [
            {
              "q": "According to the official Grade 8 curriculum, how does a rift valley form?",
              "options": [
                "Two parallel faults develop and the land between them sinks down",
                "A single volcanic mountain collapses from high atmospheric pressure",
                "Ocean waves erode a trench across granite coastal cliffs",
                "Rivers carve through a flat sedimentary plain over a few decades"
              ],
              "correct": 0,
              "strategy": "Direct textbook definition: two parallel faults → land between sinks down.",
              "derivation": "Rift valleys are tectonic grabens created when crustal blocks pull apart along parallel faults, allowing the center to drop downward.",
              "trap": "Confusing tectonic faulting with river or ocean erosion."
            }
          ]
        },
        {
          "id": "g8-soc-2.2",
          "code": "2.2",
          "title": "Block (Horst) Mountains vs. Rift Valleys",
          "survey": {
            "blueprint": "Directly from skill booklet. Block mountain (horst) definition: mountain formed by uplift of land between two parallel faults. Formation: parallel faults → middle land rises ↑. Core memory rule: Rift valley → land goes DOWN ↓ | Horst → land goes UP ↑. Examples: Sierra Nevada (North America), Harz Mountains (Germany).",
            "objectives": [
              "Define a block mountain (horst) and describe its tectonic formation.",
              "Contrast the formation of a block mountain with that of a rift valley.",
              "Cite international examples of block mountains (Sierra Nevada, Harz Mountains)."
            ],
            "keyFormulas": "Rift Valley: Land goes DOWN ↓ | Horst (Block Mountain): Land goes UP ↑"
          },
          "questions": [
            "What is the fundamental tectonic difference between a Horst and a Graben (Rift Valley)?",
            "What international examples of block mountains are highlighted in the textbook?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">⛰️ 1. Definition and Formation of Block Mountains (Horsts)</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Textbook Definition:</strong> A <strong>block mountain (horst)</strong> is a steep-sided mountain formed by the <strong>uplift of the land</strong> between two parallel faults.<br>\n                  • <strong>Step-by-Step Formation:</strong><br>\n                  1. Parallel fault lines crack through the rigid rock crust.<br>\n                  2. Tectonic forces either push the central block upward, or the flanking blocks on both sides sink downward.<br>\n                  3. The elevated, flat-topped central block stands high above surrounding terrain as a block mountain.\n                </p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">⚖️ 2. Memory Rule and Examples</h4>\n                <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850 text-xs sm:text-sm text-slate-300\">\n                  <p class=\"font-bold text-rose-300\">Golden Memory Rule for Exams:</p>\n                  <p class=\"text-emerald-300\">• <strong>Rift Valley</strong> → Land goes <strong>DOWN ↓</strong></p>\n                  <p class=\"text-cyan-300\">• <strong>Horst / Block Mountain</strong> → Land goes <strong>UP ↑</strong></p>\n                  <p class=\"pt-2\"><strong>Classic Textbook Examples:</strong><br>\n                  • <em>Sierra Nevada</em> (North America)<br>\n                  • <em>Harz Mountains</em> (Germany)<br>\n                  • <em>Vosges Mountains</em> (France) and <em>Black Forest</em> (Germany)</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: High-Yield Exam Difference",
            "problem": "State the difference between a rift valley and a block mountain as tested on the national exam.",
            "steps": [
              {
                "label": "Step 1: Rift valley",
                "text": "A rift valley is formed when the land between two parallel faults sinks down (goes down ↓)."
              },
              {
                "label": "Step 2: Block mountain (horst)",
                "text": "A block mountain (horst) is formed when the land between two parallel faults rises up (goes up ↑)."
              }
            ],
            "proTip": "Examiners look for the opposing movements: land sinks down vs land rises up between parallel faults!"
          },
          "reciteFlashcards": [
            {
              "q": "What is a block mountain (horst)?",
              "a": "A mountain formed by the uplift of land between two parallel faults."
            },
            {
              "q": "State the memory rule distinguishing rift valley from horst.",
              "a": "Rift valley → land goes DOWN ↓; Horst → land goes UP ↑."
            },
            {
              "q": "Give two world examples of block mountains.",
              "a": "Sierra Nevada (North America) and Harz Mountains (Germany)."
            }
          ],
          "amtQuiz": [
            {
              "q": "In structural geology, a block mountain (horst) is formed when the crustal land between two parallel faults:",
              "options": [
                "Sinks down into a deep depression",
                "Rises upward relative to the adjacent crustal blocks",
                "Folds into flexible sedimentary anticlines",
                "Melts completely into subterranean magma"
              ],
              "correct": 1,
              "strategy": "Remember: Horst = land goes UP ↑.",
              "derivation": "A horst or block mountain forms when the central crustal block is pushed upward between parallel faults.",
              "trap": "Selecting sinks down, which describes a rift valley."
            }
          ]
        },
        {
          "id": "g8-soc-2.3",
          "code": "2.3",
          "title": "Volcanism, Magma Dynamics, Vents and Fissures",
          "survey": {
            "blueprint": "Directly from skill booklet. Volcanism definition: process by which molten rock (magma) is forced toward or onto Earth surface. Magma (molten rock beneath surface) vs Lava (magma reaching surface). Vent (opening through which lava/magma emerges) vs Fissure (long crack/opening for lava).",
            "objectives": [
              "Define volcanism.",
              "Distinguish between magma and lava.",
              "Differentiate between a volcanic vent and a fissure."
            ],
            "keyFormulas": "Magma (Subterranean / Underground) → Surface Eruption → Lava (Subaerial / At the Surface)"
          },
          "questions": [
            "What is the precise scientific distinction between magma and lava?",
            "How does an eruption through a cylindrical vent differ from an eruption along an elongated fissure?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🔥 1. What is Volcanism?</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Textbook Definition:</strong> <strong>Volcanism</strong> is the geological process by which molten rock material (magma) is forced from Earth's deep interior toward or onto the Earth's surface.<br>\n                  • <strong>Magma:</strong> Molten, liquefied rock containing dissolved gases and mineral crystals located <strong>beneath Earth's surface</strong> in the crust and upper mantle.<br>\n                  • <strong>Lava:</strong> Molten magma that has breached the crust and reached <strong>Earth's surface</strong>, degassing into the atmosphere.\n                </p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">🌋 2. Vents vs. Fissures</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-rose-300\">Vent:</strong><br>\n                    A circular or pipe-like cylindrical opening or pipe through which lava, volcanic ash, and gases escape onto the surface, typically building a conical mountain.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-amber-300\">Fissure:</strong><br>\n                    A long, narrow fracture or elongated crack in Earth’s crust through which highly fluid basaltic lava pours out over vast plains (flood basalts).\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Magma vs Lava and Vent vs Fissure",
            "problem": "Write the exact exam distinctions for: Part A: Magma vs Lava. Part B: Vent vs Fissure.",
            "steps": [
              {
                "label": "Step 1: Magma vs Lava",
                "text": "Magma is molten rock beneath Earth’s surface; Lava is magma that reaches Earth’s surface."
              },
              {
                "label": "Step 2: Vent vs Fissure",
                "text": "A vent is a pipe-like opening through which lava emerges; A fissure is a long crack or fracture in the crust through which lava escapes."
              }
            ],
            "proTip": "Location determines Magma (underground) vs Lava (surface); shape determines Vent (opening) vs Fissure (crack)!"
          },
          "reciteFlashcards": [
            {
              "q": "Define volcanism.",
              "a": "The process by which molten rock (magma) is forced toward or onto Earth’s surface."
            },
            {
              "q": "What is the difference between magma and lava?",
              "a": "Magma is molten rock underground; lava is magma at the surface."
            },
            {
              "q": "What is a fissure?",
              "a": "A long crack or opening in Earth’s crust through which lava escapes."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the correct geological term for molten rock while it is still located beneath Earth’s crust?",
              "options": [
                "Lava",
                "Magma",
                "Basaltic pumice",
                "Ignimbrite flow"
              ],
              "correct": 1,
              "strategy": "Magma is underground; lava is at the surface.",
              "derivation": "Molten rock is designated as magma while inside the Earth, and becomes lava once it erupts onto the surface.",
              "trap": "Selecting lava before it reaches the surface."
            }
          ]
        },
        {
          "id": "g8-soc-2.4",
          "code": "2.4",
          "title": "Crater, Caldera and Crater Lakes",
          "survey": {
            "blueprint": "Directly from skill booklet. Crater: hole/depression at top of volcanic cone. Caldera: very wide crater/depression (formed by collapse). Crater lake: lake formed inside crater or caldera. Memory rule: small/narrow opening → crater | very wide opening → caldera. Ethiopian crater lakes: Wonchi, Bishoftu, Dendi.",
            "objectives": [
              "Define a volcanic crater.",
              "Define a volcanic caldera and explain its formation by collapse.",
              "Explain how crater lakes form and cite prominent Ethiopian examples (Wonchi, Bishoftu, Dendi)."
            ],
            "keyFormulas": "Crater = Narrow Top Depression | Caldera = Very Wide Collapse Depression | Crater Lake = Rain/Groundwater in Crater/Caldera"
          },
          "questions": [
            "What is the structural difference between a volcanic crater and a caldera?",
            "How did the famous crater lakes of Bishoftu and Wonchi in Ethiopia form?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-rose-400\">🌋 1. Crater vs. Caldera</h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Crater:</strong> A circular, funnel-shaped hole or depression at the summit or top of a volcanic cone, formed by explosive explosive blasting of rock around the central vent.<br>\n                  • <strong>Caldera:</strong> A <strong>very wide crater or depression</strong> (often several kilometers in diameter), formed when the roof of a volcanic cone collapses inward into an underlying magma chamber emptied by a cataclysmic eruption.<br>\n                  • <strong>Memory Rule:</strong><br>\n                  - <em>Small / narrow opening</em> → <strong>Crater</strong><br>\n                  - <em>Very wide opening</em> → <strong>Caldera</strong></p>\n                </div>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">🌊 2. Crater Lakes in Ethiopia</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Crater Lake:</strong> A body of water formed when rainwater and groundwater accumulate inside an extinct or dormant volcanic crater or caldera.<br>\n                  • <strong>Ethiopian Examples:</strong><br>\n                  - <strong>Bishoftu (Debre Zeit) Crater Lakes:</strong> Series of maar crater lakes (Lake Bishoftu, Lake Babogaya, Lake Hora, Lake Kuriftu).<br>\n                  - <strong>Lake Wonchi:</strong> Spectacular alpine caldera lake located in the highland volcanic massif of Oromia.<br>\n                  - <strong>Lake Dendi:</strong> Double-ring caldera lake near Mount Wonchi.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Crater vs Caldera Distinction",
            "problem": "A geology question asks: Contrast a volcanic crater and a caldera in one sentence each.",
            "steps": [
              {
                "label": "Step 1: Define crater",
                "text": "A crater is a small or narrow hole/depression situated at the top of a volcanic cone."
              },
              {
                "label": "Step 2: Define caldera",
                "text": "A caldera is a very wide crater or depression formed when the summit of a volcano collapses."
              }
            ],
            "proTip": "Examiners reward: Crater = top hole/depression | Caldera = very wide depression!"
          },
          "reciteFlashcards": [
            {
              "q": "What is a volcanic crater?",
              "a": "A hole or depression at the top of a volcanic cone."
            },
            {
              "q": "What is a caldera?",
              "a": "A very wide crater or depression formed by volcanic collapse."
            },
            {
              "q": "Name two famous crater lakes in Ethiopia.",
              "a": "Lake Wonchi and Lake Bishoftu (or Lake Dendi)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the primary physical characteristic that distinguishes a caldera from a standard volcanic crater?",
              "options": [
                "A caldera is a very wide depression formed by summit collapse",
                "A caldera is always made of pure frozen glacier ice",
                "A caldera only occurs on the ocean floor",
                "A caldera is an underground cave that never reaches the surface"
              ],
              "correct": 0,
              "strategy": "Booklet rule: very wide depression formed by collapse.",
              "derivation": "A caldera is a very wide crater or basin formed when a volcano collapses inward following a massive eruption.",
              "trap": "Confusing caldera with underwater oceanic trenches."
            }
          ]
        },
        {
          "id": "g8-soc-2.5",
          "code": "2.5",
          "title": "Volcanic Landforms: Extrusive vs. Intrusive",
          "survey": {
            "blueprint": "Directly from skill booklet. Extrusive landforms: formed at/on Earth surface (vents, craters, fissures, calderas, crater lakes, lava flows). Intrusive landforms: formed when magma solidifies underground before reaching surface. Batholith (very large mass), Laccolith (mushroom-shaped), Dike (vertical/steep), Sill (near-horizontal). Memory: Extrusive → surface | Intrusive → underground.",
            "objectives": [
              "Distinguish between extrusive and intrusive volcanic landforms.",
              "Define batholith and laccolith with their characteristic shapes.",
              "Contrast a vertical dike with a horizontal sill."
            ],
            "keyFormulas": "Extrusive = Surface Features | Intrusive = Underground Features: Batholith (Huge), Laccolith (Mushroom), Dike (Vertical), Sill (Horizontal)"
          },
          "questions": [
            "How can geologists identify whether an igneous rock structure is intrusive or extrusive?",
            "What is the geometrical orientation difference between a dike and a sill?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🌍 1. Extrusive Landforms (Surface)</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Definition:</strong> Landforms created when magma erupts onto the Earth's surface as lava and solidifies subaerially.<br>\n                  • <strong>Examples:</strong> Volcanic cones, vents, craters, calderas, crater lakes, fissures, lava plateaus, and basaltic lava flows.<br>\n                  • <em>Memory Rule:</em> <strong>Extrusive → Surface</strong>\n                </p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-rose-400\">🪨 2. Intrusive Landforms (Underground)</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Definition:</strong> Landforms created when magma forces its way into crustal fractures and solidifies <strong>below the surface</strong> before reaching the open air.<br>\n                  • <strong>The Four Key Intrusive Bodies:</strong><br>\n                  - <strong>Batholith:</strong> A <em>very large mass</em> of magma that accumulates and solidifies deep in Earth's crust, often forming the granitic core of mountain ranges.<br>\n                  - <strong>Laccolith:</strong> A smaller, generally <em>mushroom-shaped</em> or dome-shaped intrusive mass of igneous rock arched between rock strata.<br>\n                  - <strong>Dike:</strong> An intrusive igneous body formed when magma solidifies in a <em>vertical or steeply inclined</em> crack cutting across rock layers.<br>\n                  - <strong>Sill:</strong> A <em>near-horizontal</em> intrusion of igneous rock injected parallel between two existing horizontal rock layers.<br>\n                  • <em>Memory Rule:</em> <strong>Intrusive → Underground</strong>\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Contrasting Dike vs Sill",
            "problem": "A geological cross-section shows two igneous intrusions: Body X cuts vertically across sedimentary strata, while Body Y runs horizontally between layers. Identify each.",
            "steps": [
              {
                "label": "Step 1: Identify Body X (Vertical)",
                "text": "Body X is a <strong>Dike</strong> because it solidifies in a vertical or steeply inclined fracture cutting across strata."
              },
              {
                "label": "Step 2: Identify Body Y (Horizontal)",
                "text": "Body Y is a <strong>Sill</strong> because it intrudes as a near-horizontal sheet parallel to existing sedimentary beds."
              }
            ],
            "proTip": "Remember: Dike = Vertical | Sill = Horizontal (like a window sill)!"
          },
          "reciteFlashcards": [
            {
              "q": "What is an intrusive landform?",
              "a": "A landform formed when magma solidifies underground before reaching Earth’s surface."
            },
            {
              "q": "What is a batholith?",
              "a": "A very large mass of magma that accumulates and solidifies in Earth’s crust."
            },
            {
              "q": "What is the difference between a dike and a sill?",
              "a": "A dike is vertical or steeply inclined; a sill is near-horizontal between rock layers."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which intrusive igneous landform is defined as a near-horizontal sheet of rock injected between two parallel rock layers?",
              "options": [
                "Dike",
                "Sill",
                "Batholith",
                "Volcanic Crater"
              ],
              "correct": 1,
              "strategy": "Sill is horizontal; dike is vertical.",
              "derivation": "A sill is an intrusive igneous sheet formed parallel to the host rock strata (near-horizontal).",
              "trap": "Confusing vertical dike with horizontal sill."
            }
          ]
        },
        {
          "id": "g8-soc-2.6",
          "code": "2.6",
          "title": "Types of Volcanoes and Socio-Economic Effects",
          "survey": {
            "blueprint": "Directly from skill booklet. Volcano classification: Active (recent eruption, likely to erupt again; Erta Ale, Ethiopia), Dormant (not erupted for long time but may erupt), Extinct (dead, not expected to erupt). Memory: Active → awake | Dormant → sleeping | Extinct → dead. Positive effects: fertile soil, geothermal energy, rocks/minerals, tourism. Negative effects: destruction of houses/crops, death/injuries, ash/gas pollution, lava flows, lahars/mudflows.",
            "objectives": [
              "Classify volcanoes into active, dormant, and extinct with Ethiopian examples (Erta Ale).",
              "List positive socio-economic effects of volcanism (geothermal energy, fertile soil, tourism).",
              "Analyze negative impacts of volcanic hazards (ash, lava, lahars, destruction)."
            ],
            "keyFormulas": "Active (Awake - Erta Ale) | Dormant (Sleeping) | Extinct (Dead) | Effects = Geothermal & Fertile Soil vs Ash & Destruction"
          },
          "questions": [
            "Why is Erta Ale in Ethiopia classified as an active volcano?",
            "What positive economic benefits does volcanism provide to humanity?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-rose-400\">🌋 1. Classification of Volcanoes</h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Active Volcano:</strong> Has a recent history of eruption and is likely to erupt again in the future.<br>\n                  - <em>Ethiopian Example:</em> <strong>Erta Ale</strong> (in the Danakil/Afar Depression), which contains one of the world's few continuously boiling basaltic lava lakes.<br>\n                  - <em>Memory:</em> <strong>Active → Awake</strong></p>\n                  <p>• <strong>Dormant Volcano:</strong> Has not erupted for a very long period of time (centuries) but still has potential to erupt again.<br>\n                  - <em>Memory:</em> <strong>Dormant → Sleeping</strong></p>\n                  <p>• <strong>Extinct Volcano:</strong> A dead volcano that has completely ceased eruptive activity and is not expected to erupt again.<br>\n                  - <em>Memory:</em> <strong>Extinct → Dead / Not expected to erupt</strong></p>\n                </div>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-emerald-400\">⚖️ 2. Socio-Economic Effects of Volcanism</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-emerald-300\">Positive Effects:</strong><br>\n                    • <strong>Fertile Soils:</strong> Volcanic ash weathers into highly fertile agricultural soil rich in potassium and phosphorus.<br>\n                    • <strong>Geothermal Energy:</strong> Clean steam electricity generated from magma heat (e.g. Aluto-Langano plant in Ethiopia).<br>\n                    • <strong>Useful Rocks & Minerals:</strong> Basalt, pumice, sulfur, and building stone.<br>\n                    • <strong>Tourism:</strong> Scenic caldera lakes and volcanic peaks attract international tourists.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-rose-300\">Negative Effects:</strong><br>\n                    • <strong>Destruction of Property:</strong> Lava and pyroclastic flows destroy villages, farms, and roads.<br>\n                    • <strong>Loss of Life:</strong> Fatalities from toxic volcanic gases, suffocating ash clouds, and explosions.<br>\n                    • <strong>Lahars:</strong> Destructive volcanic mudflows triggered by rainfall mixing with fresh ash.<br>\n                    • <strong>Air Travel Disruption:</strong> Airborne ash clouds stall jet engines and ground aircraft.\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Erta Ale Classification and Geothermal Energy",
            "problem": "Name an active volcano in Ethiopia and explain one major economic benefit of its volcanic heat.",
            "steps": [
              {
                "label": "Step 1: Identify active volcano",
                "text": "<strong>Erta Ale</strong> in the Afar Depression is an active volcano."
              },
              {
                "label": "Step 2: Explain economic benefit",
                "text": "Its subterranean magma heat can be harnessed to produce clean, renewable <strong>geothermal electricity</strong>, reducing dependency on fossil fuels."
              }
            ],
            "proTip": "Always link Erta Ale to \"Active volcano\" and geothermal energy to \"Renewable electricity\"!"
          },
          "reciteFlashcards": [
            {
              "q": "What is an active volcano? Give an Ethiopian example.",
              "a": "A volcano with a recent history of eruption likely to erupt again; Erta Ale."
            },
            {
              "q": "State the memory rule for active, dormant, and extinct.",
              "a": "Active → awake | Dormant → sleeping | Extinct → dead."
            },
            {
              "q": "Name two positive effects of volcanism.",
              "a": "Fertile agricultural soil and geothermal energy."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which famous volcano in Ethiopia’s Afar Depression is classified as active and celebrated for its persistent glowing lava lake?",
              "options": [
                "Mount Ras Dejen",
                "Erta Ale",
                "Mount Batu",
                "Mount Tullu Dimtu"
              ],
              "correct": 1,
              "strategy": "Erta Ale is Ethiopia’s famous active volcano.",
              "derivation": "Erta Ale is a continuously active basaltic shield volcano located in the Danakil Depression of Afar.",
              "trap": "Selecting Ras Dejen or Batu, which are mountain peaks rather than active volcanoes."
            }
          ]
        },
        {
          "id": "g8-soc-2.7",
          "code": "2.7",
          "title": "Earthquakes, Focus, Epicenter and Richter Scale",
          "survey": {
            "blueprint": "Directly from skill booklet. Earthquake definition: sudden movement/shaking of Earth crust caused by internal movements deep inside Earth (associated with faults). Process: internal movement → energy released → crust shakes. Focus (point inside Earth where earthquake starts) vs Epicenter (point on surface directly above focus). Measuring: Seismometer (detects), Seismograph (records), Richter scale (magnitude: 2-5 minor, 5-7 moderate to strong, 7-8 major, 8+ great). Quick exam review table.",
            "objectives": [
              "Define an earthquake and explain the release of seismic energy.",
              "Distinguish between the focus and the epicenter.",
              "Describe how earthquakes are detected (seismometer), recorded (seismograph), and measured (Richter scale)."
            ],
            "keyFormulas": "Process: Fault Slip → Elastic Strain Energy Released → Crustal Shaking | Focus (Underground) vs Epicenter (Surface)"
          },
          "questions": [
            "What is the precise structural difference between an earthquake focus and its epicenter?",
            "What instrument detects earthquake vibrations and what scale expresses its magnitude?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">📉 1. What is an Earthquake?</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Textbook Definition:</strong> An <strong>earthquake</strong> is the sudden movement or shaking of the Earth's crust caused by internal movements and ruptures deep inside the Earth, frequently associated with tectonic faults.<br>\n                  • <strong>Chain of Events:</strong><br>\n                  <code class=\"text-cyan-300\">Movement inside Earth → Energy released → Crust moves/shakes → Earthquake</code>\n                </p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-rose-400\">📍 2. Focus vs. Epicenter</h4>\n                <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-amber-300\">Focus (Hypocenter):</strong><br>\n                    • The exact point <strong>inside the Earth</strong> where an earthquake originates.<br>\n                    • Situated underground along the fault fracture plane.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-lg border border-slate-850\">\n                    <strong class=\"text-cyan-300\">Epicenter:</strong><br>\n                    • The point on <strong>Earth's surface</strong> situated directly above the focus.<br>\n                    • Experiences the earliest and usually most severe surface shockwaves.\n                  </div>\n                </div>\n                <p class=\"text-xs text-emerald-400 font-bold pt-1\">Memory Rule: Epicenter = Surface | Focus = Underground</p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">📊 3. Measuring Earthquakes</h4>\n                <ul class=\"text-xs sm:text-sm text-slate-300 space-y-1 list-disc list-inside\">\n                  <li><strong>Seismometer:</strong> The sensitive scientific instrument used to detect and measure earthquake ground vibrations.</li>\n                  <li><strong>Seismograph:</strong> The instrument that writes or records earthquake vibrations onto a visual paper or digital tracing (seismogram).</li>\n                  <li><strong>Richter Scale:</strong> A logarithmic scale used to express the magnitude (total energy released) of an earthquake:\n                    <ul class=\"pl-6 space-y-0.5 list-circle\">\n                      <li><em>2 - 5:</em> Minor / light vibrations (often barely felt).</li>\n                      <li><em>5 - 7:</em> Moderate to strong earthquake (structural damage to buildings).</li>\n                      <li><em>7 - 8:</em> Major earthquake (widespread catastrophic destruction).</li>\n                      <li><em>8+:</em> Great earthquake (total devastating devastation across vast territories).</li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Seismological Quick Review",
            "problem": "The national exam asks: State the definition of Focus and Epicenter, and name the instrument that detects earthquake vibrations.",
            "steps": [
              {
                "label": "Step 1: Define Focus and Epicenter",
                "text": "The <strong>Focus</strong> is the point inside the Earth where an earthquake starts. The <strong>Epicenter</strong> is the point on Earth’s surface directly above the focus."
              },
              {
                "label": "Step 2: Name the instrument",
                "text": "The instrument used to detect earthquake vibrations is the <strong>Seismometer</strong>."
              }
            ],
            "proTip": "Always distinguish: Seismometer detects; Seismograph records; Richter scale measures magnitude!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the focus of an earthquake?",
              "a": "The point inside the Earth where an earthquake originates."
            },
            {
              "q": "What is the epicenter of an earthquake?",
              "a": "The point on Earth’s surface directly above the focus."
            },
            {
              "q": "What scale expresses the magnitude or energy released by an earthquake?",
              "a": "The Richter scale."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the point on Earth’s surface located directly above the underground origin (focus) of an earthquake?",
              "options": [
                "The Epicenter",
                "The Caldera",
                "The Batholith",
                "The Fumarole"
              ],
              "correct": 0,
              "strategy": "Booklet rule: Epicenter = surface point above focus.",
              "derivation": "The epicenter is by definition the location on the surface perpendicular to the subsurface focus.",
              "trap": "Confusing geological volcanic features with the seismological epicenter."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-soc-u3",
      "number": "Unit 3",
      "title": "World Population and Urbanization",
      "bigIdea": "Demographic dynamics: population distribution, age-sex population pyramids, rapid urbanization, and challenges of urban settlement.",
      "subtopics": [
        {
          "id": "g8-soc-3.1",
          "code": "3.1",
          "title": "Population Distribution and Age-Sex Pyramids",
          "survey": {
            "blueprint": "Global population distribution. Age-sex pyramids: expansive (broad base, high fertility, developing nations), stationary (uniform, developed nations), constrictive (narrow base, aging). Dependency ratio calculation.",
            "objectives": [
              "Analyze the shape and meaning of expansive vs stationary population pyramids.",
              "Calculate youth and old-age dependency ratios.",
              "Explain how demographic transitions shape national development policies."
            ],
            "keyFormulas": "Dependency Ratio = ((Population aged 0-14 + Population aged 65+) ÷ Population aged 15-64) × 100"
          },
          "questions": [
            "What does a broad-based expansive population pyramid reveal about a nation’s demographic structure?",
            "How is the dependency ratio calculated and why is it critical for economic planners?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">📊 1. Age-Sex Population Pyramids</h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Expansive Pyramid (Broad Base):</strong> High birth rate and high child mortality with rapid decline in older age groups. Typical of developing countries including Ethiopia. Results in a high youth dependency burden.<br>\n                  • <strong>Stationary / Constrictive Pyramid:</strong> Rectangular or beehive shape with low birth rate and low death rate, long life expectancy, and higher proportion of elderly citizens. Typical of industrialized nations (e.g. Germany, Japan).</p>\n                </div>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">🧮 2. The Dependency Ratio</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Formula:</strong><br>\n                  <code class=\"text-emerald-300\">Dependency Ratio = ((Children 0-14 + Elderly 65+) ÷ Working Age 15-64) × 100</code><br>\n                  • A high ratio indicates that each working citizen must support many dependents, requiring higher state expenditures on primary schools, pediatric clinics, or geriatric pensions.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Interpreting a Broad-Based Pyramid",
            "problem": "Why does an expansive, broad-based population pyramid require heavy government investment in primary education?",
            "steps": [
              {
                "label": "Step 1: Identify age cohort dominance",
                "text": "A broad base means children aged 0 to 14 make up a very large percentage of the total national population."
              },
              {
                "label": "Step 2: Connect to budgetary allocation",
                "text": "Governments must construct thousands of classrooms, train primary teachers, and purchase textbooks to educate this incoming youth wave."
              }
            ],
            "proTip": "Broad base = large youth cohort = schools and pediatric healthcare priorities!"
          },
          "reciteFlashcards": [
            {
              "q": "What does a broad base in a population pyramid signify?",
              "a": "A high birth rate and large proportion of young children."
            },
            {
              "q": "What is the working-age population cohort in standard demography?",
              "a": "People aged 15 to 64 years."
            },
            {
              "q": "What does a high dependency ratio indicate?",
              "a": "That a relatively small working population must support a large dependent population."
            }
          ],
          "amtQuiz": [
            {
              "q": "A population pyramid with a very wide, broad base that tapers rapidly toward the top indicates a country with:",
              "options": [
                "An aging population with extremely low birth rates",
                "A high birth rate and a very large proportion of young dependent children",
                "Zero population growth and negative natural increase",
                "Equal numbers of citizens in every single age cohort"
              ],
              "correct": 1,
              "strategy": "Wide base indicates high fertility and many children.",
              "derivation": "An expansive pyramid has a broad base caused by high birth rates, characteristic of developing countries.",
              "trap": "Confusing broad base with an aging population."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-soc-u4",
      "number": "Unit 4",
      "title": "World Civilizations & The Industrial Revolution",
      "bigIdea": "The transition from agrarian manual labor to mechanized fossil-fueled manufacturing in 18th-century Britain and its global transformation.",
      "subtopics": [
        {
          "id": "g8-soc-4.1",
          "code": "4.1",
          "title": "The Industrial Revolution: Origins, Steam & Factories",
          "survey": {
            "blueprint": "Origin of the Industrial Revolution in 18th-century Britain. Key inventions: James Watt steam engine, spinning jenny, steam locomotives. Replacement of muscle/animal power with coal energy. Rise of factory system and rapid urbanization.",
            "objectives": [
              "Explain why the Industrial Revolution originated in Great Britain.",
              "Identify pivotal mechanical inventions (Watt steam engine, mechanized textiles).",
              "Describe the shift from cottage industries to mass factory production and industrial urbanization."
            ],
            "keyFormulas": "Industrial Revolution = Coal Energy + Steam Engine + Mechanized Factories + Railways"
          },
          "questions": [
            "Why did Great Britain become the birthplace of the modern Industrial Revolution?",
            "How did James Watt’s steam engine transform manufacturing, mining, and global transportation?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">⚙️ 1. Origins in 18th-Century Britain</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Why Britain First?</strong> Britain possessed abundant domestic coal and iron ore deposits, capital from colonial trade, a patent legal system protecting inventions, mobile surplus labor from agricultural enclosures, and extensive navigable canals.<br>\n                  • <strong>The Textile Breakthrough:</strong> Inventions like the Flying Shuttle (John Kay), Spinning Jenny (James Hargreaves), and Water Frame (Richard Arkwright) mechanized cotton and wool spinning, increasing fabric output a thousandfold.\n                </p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">🚂 2. Steam Power and the Factory System</h4>\n                <ul class=\"text-xs sm:text-sm text-slate-300 space-y-1 list-disc list-inside\">\n                  <li><strong>James Watt Steam Engine (1769):</strong> Liberated factories from river waterfalls, allowing manufacturing plants to operate anywhere near coal fields. Powered drainage pumps in deep coal mines and heavy industrial rolling mills.</li>\n                  <li><strong>Transport Revolution:</strong> Steam-powered locomotives (George Stephenson's Rocket) and steamships reduced transcontinental travel from weeks to hours.</li>\n                  <li><strong>Social Transformation:</strong> Workers moved from rural cottage handicraft workshops into concentrated urban industrial factories, leading to the rise of the industrial working class (proletariat) and urban growth.</li>\n                </ul>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Impact of the Steam Engine",
            "problem": "Explain how James Watt’s improved steam engine accelerated both mining and factory production.",
            "steps": [
              {
                "label": "Step 1: Mining application",
                "text": "Steam pumps drained water from flooded underground coal mines, allowing miners to extract vast quantities of coal needed to fuel factories."
              },
              {
                "label": "Step 2: Factory application",
                "text": "Steam engines drove overhead belts and pulleys that operated dozens of power looms and spinning machines simultaneously in factories."
              }
            ],
            "proTip": "Highlight coal mine drainage AND factory mechanization!"
          },
          "reciteFlashcards": [
            {
              "q": "In which country did the Industrial Revolution begin?",
              "a": "Great Britain (in the 18th century)."
            },
            {
              "q": "Who developed the efficient commercial steam engine in 1769?",
              "a": "James Watt."
            },
            {
              "q": "What primary fossil fuel powered the early Industrial Revolution?",
              "a": "Coal."
            }
          ],
          "amtQuiz": [
            {
              "q": "The Industrial Revolution began during the mid-18th century in which European country?",
              "options": [
                "France",
                "Great Britain",
                "Russia",
                "Spain"
              ],
              "correct": 1,
              "strategy": "Great Britain was the birthplace of the Industrial Revolution.",
              "derivation": "Britain had the necessary coal, iron ore, commercial capital, and technological innovations to spark the Industrial Revolution.",
              "trap": "Assuming France or Germany."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-soc-u5",
      "number": "Unit 5",
      "title": "European Colonialism & African Resistance",
      "bigIdea": "The Scramble for Africa, Berlin Conference (1884/85), colonial exploitation mechanisms, and the historic victory of Ethiopia at the Battle of Adwa (1896).",
      "subtopics": [
        {
          "id": "g8-soc-5.1",
          "code": "5.1",
          "title": "The Scramble for Africa and The Battle of Adwa (1896)",
          "survey": {
            "blueprint": "Berlin Conference (1884/85): European powers partition Africa without African representation. Motives: raw materials, markets, prestige. Ethiopia’s resistance: Emperor Menelik II, Empress Taytu Betul, Treaty of Wuchale (Article XVII deceit). March 1, 1896: Battle of Adwa decisive victory over Italian colonial forces. Global pan-African significance.",
            "objectives": [
              "Explain the causes and consequences of the Berlin Conference of 1884/85.",
              "Analyze the linguistic deception in Article XVII of the 1889 Treaty of Wuchale.",
              "Detail the strategic triumph of the Battle of Adwa on March 1, 1896, and its global anti-colonial legacy."
            ],
            "keyFormulas": "Treaty of Wuchale (1889): Amharic (Optional Diplomacy) vs Italian (Mandatory Protectorate) → Battle of Adwa (1896 Victory)"
          },
          "questions": [
            "How did the Italian colonial administration attempt to deceive Ethiopia using Article XVII of the Treaty of Wuchale?",
            "Why is Ethiopia’s victory at Adwa on March 1, 1896, revered as a beacon of Pan-African freedom?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🌍 1. The Scramble for Africa & Berlin Conference</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Berlin Conference (1884–1885):</strong> Convened by German Chancellor Otto von Bismarck, 14 European nations gathered in Berlin to partition the African continent without a single African representative present.<br>\n                  • <strong>Imperial Motivations:</strong> Driven by the Industrial Revolution’s ravenous demand for cheap raw materials (rubber, cotton, copper, palm oil), captive export markets, and national prestige.\n                </p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-rose-400\">⚔️ 2. The Treaty of Wuchale Deception and Adwa Victory</h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>The Article XVII Deception (1889):</strong> Signed between Emperor Menelik II and Italian envoy Count Pietro Antonelli:<br>\n                  - <em>Amharic Version:</em> Ethiopia <strong>could</strong> choose to utilize Italy’s good offices for diplomatic relations with European powers if it so wished.<br>\n                  - <em>Italian Version:</em> Ethiopia <strong>must</strong> conduct all foreign affairs through Rome, effectively making Ethiopia an Italian protectorate.<br>\n                  When Menelik discovered the deliberate forgery, he formally abrogated the treaty.</p>\n                  <p>• <strong>The Battle of Adwa (March 1, 1896):</strong> Over 100,000 patriotic Ethiopian soldiers mobilized from all corners of the country under the leadership of <strong>Emperor Menelik II</strong>, <strong>Empress Taytu Betul</strong>, Ras Makonnen, Ras Alula, and Fitawrari Gebeyehu. They decisively crushed the invading Italian colonial army under General Baratieri in a single day at Adwa.<br>\n                  • <strong>Global Legacy:</strong> Adwa forced Italy to sign the Treaty of Addis Ababa recognizing Ethiopia's absolute sovereignty. It shattered the racist myth of European military invincibility and inspired Pan-African anti-colonial liberation movements worldwide.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Analysis of Article XVII Discrepancy",
            "problem": "Why did the translation difference in Article XVII of the Treaty of Wuchale make war inevitable between Ethiopia and Italy?",
            "steps": [
              {
                "label": "Step 1: Amharic sovereign meaning",
                "text": "The Amharic text preserved Ethiopia’s absolute sovereignty, making contact with European powers optional."
              },
              {
                "label": "Step 2: Italian imperialist distortion",
                "text": "The Italian text stripped Ethiopia of foreign sovereignty by forcing all diplomatic contact through Italy, which Rome claimed as a protectorate."
              },
              {
                "label": "Step 3: Outcome of rejection",
                "text": "When Emperor Menelik II and Empress Taytu rejected the protectorate claim, Italy invaded, leading directly to the Battle of Adwa in 1896."
              }
            ],
            "proTip": "Highlight optional (\"could\") in Amharic vs obligatory (\"must / protectorate\") in Italian!"
          },
          "reciteFlashcards": [
            {
              "q": "What conference partitioned Africa among European powers in 1884/85?",
              "a": "The Berlin Conference."
            },
            {
              "q": "On what date did the decisive Battle of Adwa take place?",
              "a": "March 1, 1896."
            },
            {
              "q": "What treaty recognized Ethiopia’s complete independence after the Battle of Adwa?",
              "a": "The Treaty of Addis Ababa (1896)."
            }
          ],
          "amtQuiz": [
            {
              "q": "On March 1, 1896, Ethiopian forces led by Emperor Menelik II and Empress Taytu Betul won a historic victory over invading colonial forces at:",
              "options": [
                "The Battle of Omdurman",
                "The Battle of Adwa",
                "The Battle of Isandlwana",
                "The Battle of Waterloo"
              ],
              "correct": 1,
              "strategy": "Adwa was fought on March 1, 1896.",
              "derivation": "The Battle of Adwa on March 1, 1896, secured Ethiopian independence against Italian colonial forces.",
              "trap": "Confusing Adwa with other colonial battles in South Africa or Sudan."
            }
          ]
        }
      ]
    },
    {
      "id": "g8-soc-u6",
      "number": "Unit 6",
      "title": "Global Interdependence & Environmental Challenges",
      "bigIdea": "Modern global interconnectedness: economic globalization, the United Nations system, international treaties, and planetary environmental stewardship.",
      "subtopics": [
        {
          "id": "g8-soc-6.1",
          "code": "6.1",
          "title": "Globalization, The United Nations & Planetary Ecology",
          "survey": {
            "blueprint": "Globalization: economic, cultural, and technological interconnectedness. International institutions: United Nations (1945, General Assembly, Security Council). Ethiopia as a founding UN member. Global environmental treaties: Paris Agreement on climate change, SDGs.",
            "objectives": [
              "Define globalization and identify its benefits and challenges.",
              "Describe the structure and peacekeeping role of the United Nations.",
              "Highlight Ethiopia’s historic role as a founding member of the UN and leader in African multilateralism."
            ],
            "keyFormulas": "Multilateralism = UN Charter (1945) + Sustainable Development Goals (SDGs 2030) + Global Climate Accords"
          },
          "questions": [
            "What is globalization and how does it influence developing economies?",
            "What was Ethiopia’s historic role in the founding of the United Nations in 1945?"
          ],
          "coreNotes": "\n            <div class=\"space-y-4 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-cyan-400\">🌐 1. Understanding Globalization</h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Definition:</strong> <strong>Globalization</strong> is the expanding worldwide interconnectedness and integration of national economies, cultures, technologies, and political systems.<br>\n                  • <strong>Key Drivers:</strong> Modern container shipping, air transport, satellite telecommunications, and the global internet.<br>\n                  • <strong>Opportunities vs. Challenges:</strong> Offers access to global markets, technology transfer, and capital investment, but poses risks of cultural homogenization, economic dependency, and vulnerability to global financial shocks.\n                </p>\n              </div>\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-bold text-amber-400\">🇺🇳 2. The United Nations and Ethiopia’s Leadership</h4>\n                <ul class=\"text-xs sm:text-sm text-slate-300 space-y-1 list-disc list-inside\">\n                  <li><strong>Founding of the UN (1945):</strong> Established following World War II in San Francisco to maintain international peace and security, foster friendly relations, and promote human rights and development.</li>\n                  <li><strong>Ethiopian Founding Role:</strong> Ethiopia was one of only four sovereign African nations that signed the original United Nations Charter in 1945.</li>\n                  <li><strong>Peacekeeping Heritage:</strong> Ethiopia is consistently one of the world's leading contributors of professional peacekeeping troops deployed under UN blue helmets (Korea, Congo, Rwanda, Liberia, Abyei).</li>\n                </ul>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Ethiopia’s Multilateralism",
            "problem": "Why is Ethiopia recognized as a historic pioneer in international multilateral diplomacy?",
            "steps": [
              {
                "label": "Step 1: UN founding charter",
                "text": "Ethiopia was one of the original 51 founding signatory nations of the UN Charter in 1945."
              },
              {
                "label": "Step 2: Continental Pan-African headquarters",
                "text": "Ethiopia founded and permanently hosts the headquarters of both the Organization of African Unity / African Union (AU) and the UN Economic Commission for Africa (UNECA) in Addis Ababa."
              }
            ],
            "proTip": "Highlight UN founding in 1945 AND hosting the AU / UNECA in Addis Ababa!"
          },
          "reciteFlashcards": [
            {
              "q": "In what year was the United Nations (UN) founded?",
              "a": "1945 (following World War II)."
            },
            {
              "q": "Was Ethiopia a founding member of the United Nations?",
              "a": "Yes, Ethiopia signed the original UN Charter in 1945."
            },
            {
              "q": "What does globalization mean?",
              "a": "The worldwide interconnectedness of economies, cultures, and technologies."
            }
          ],
          "amtQuiz": [
            {
              "q": "In 1945, Ethiopia participated as one of the original signatory nations to establish which international organization?",
              "options": [
                "The European Union",
                "The United Nations (UN)",
                "NATO",
                "The Warsaw Pact"
              ],
              "correct": 1,
              "strategy": "Ethiopia is an original founding member of the UN.",
              "derivation": "Ethiopia was one of only four African states that founded and signed the United Nations Charter in San Francisco in 1945.",
              "trap": "Confusing the UN with regional European or military alliances."
            }
          ]
        }
      ]
    }
  ]
};
