const fs = require('fs');
const path = require('path');

const g7Social = {
  id: 'social',
  name: 'Social Studies',
  icon: '🌍',
  units: [
    {
      id: 'g7-soc-u1',
      number: 'Unit 1',
      title: 'Physical Characteristics of the Earth',
      bigIdea: 'Understand the origin of the Earth, planetary motions (rotation vs revolution), four spheres (lithosphere, atmosphere, hydrosphere, biosphere), internal Earth structure, and rock types in Ethiopia.',
      subtopics: [
        {
          id: 'g7-soc-1.1',
          code: '1.1',
          title: 'Origin, Movements & Spheres of the Earth',
          survey: {
            blueprint: 'Nebular theory: solar system condensed from gas/dust cloud. Earth rotation (24h ➔ day/night) vs revolution (365¼ days ➔ seasons on 23.5° tilt). Solstices & Equinoxes. Four spheres: Lithosphere, Atmosphere, Hydrosphere, Biosphere. Three rock families: Igneous, Sedimentary, Metamorphic.',
            objectives: [
              'Explain the Nebular Theory of Solar System origin.',
              'Distinguish between Earth’s rotation (24 hours) and revolution (365¼ days).',
              'Explain the four spheres of the Earth and the rock cycle in Ethiopia.'
            ],
            keyFormulas: 'Rotation: 24h ➔ Day/Night &nbsp;|&nbsp; Revolution: 365¼ days on 23.5° tilt ➔ Seasons'
          },
          questions: [
            'Why does the 23.5° axial tilt cause seasons on Earth rather than distance from the Sun?',
            'How do igneous basalt rocks formed by volcanic eruptions in the Ethiopian Highlands become rich fertile agricultural soil?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
                  <span>🌌</span> 1. ORIGIN & PLANETARY MOVEMENTS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Nebular Theory:</strong> The Solar System formed approximately 4.6 billion years ago from a rotating interstellar cloud of dust and gas (solar nebula). Gravity pulled material inward, forming the Sun at the center and planets from condensing protoplanetary disks.<br>
                  • <strong>Rotation:</strong> Earth spins on its axis once every 24 hours from West to East. This creates the diurnal cycle of <strong>Day and Night</strong>, deflects ocean/wind currents (Coriolis Effect), and causes the apparent movement of the Sun.<br>
                  • <strong>Revolution:</strong> Earth orbits the Sun in <strong>365¼ days</strong> (1 year). Because Earth’s axis is permanently tilted at <strong>23.5°</strong>, different hemispheres receive direct solar rays at different times of the year, producing the <strong>Four Seasons</strong> (Equinoxes: March 21 & September 23; Solstices: June 21 & December 21).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🌐</span> 2. THE FOUR INTERCONNECTED SPHERES
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1">
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>1. Lithosphere:</strong> Rigid outer rocky crust and upper mantle (~100 km thick).
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>2. Atmosphere:</strong> Gaseous blanket (78% N₂, 21% O₂, 0.9% Ar, 0.04% CO₂) providing oxygen and UV protection.
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>3. Hydrosphere:</strong> All water bodies (oceans, rivers, lakes, ice caps, groundwater) covering ~71% of Earth.
                  </div>
                  <div class="p-2.5 bg-space-950 rounded-lg border border-slate-850">
                    <strong>4. Biosphere:</strong> The global zone of all living organisms interacting with the other three spheres.
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🪨</span> 3. ROCKS AND MINERALS IN ETHIOPIA
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Igneous Rocks:</strong> Formed from cooling and solidification of molten magma/lava. Basalt (Trappean volcanic rocks) covers the Ethiopian central plateau, while granite occurs in Tigray and Harar.<br>
                  • <strong>Sedimentary Rocks:</strong> Formed by deposition, compaction, and cementation of mineral particles and fossils over millions of years. Examples: Limestone and Sandstone in the Abbay Gorge, Mekelle basin, and Ogaden.<br>
                  • <strong>Metamorphic Rocks:</strong> Pre-existing rocks transformed by intense heat and pressure deep within Earth’s crust. Marble (Muger, Gojjam) and schist in northern and western Ethiopia.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Ethiopian Seasonal Rhythms and Equinoxes',
            problem: 'Explain why Ethiopia experiences the equinoxes on approximately March 21 and September 23, and what happens to day length across the country on those dates.',
            steps: [
              {
                label: 'Step 1: Define Equinox',
                text: 'An equinox occurs when Earth’s axis is neither tilted toward nor away from the Sun, causing the subsolar point (overhead Sun) to strike directly on the Equator.'
              },
              {
                label: 'Step 2: Day length effect',
                text: 'On March 21 (Vernal Equinox) and September 23 (Autumnal Equinox), every location across Ethiopia and the world experiences exactly <strong>12 hours of day and 12 hours of night</strong>.'
              },
              {
                label: 'Step 3: Agricultural significance',
                text: 'The March equinox heralds the Belg minor rainy season in Ethiopia, whereas the September equinox marks the end of Kiremt rains and the beginning of harvest (Meskel festival season).'
              }
            ],
            proTip: 'Equinox literally translates from Latin as "aequus" (equal) and "nox" (night) = equal day and night!'
          },
          reciteFlashcards: [
            { q: 'What theory explains the origin of the Solar System from a gas and dust cloud?', a: 'The Nebular Theory.' },
            { q: 'What is the angle of tilt of Earth’s rotational axis?', a: '23.5 degrees.' },
            { q: 'What type of rock is basalt, which forms the vast Ethiopian plateau?', a: 'Extrusive igneous rock.' }
          ],
          amtQuiz: [
            {
              q: 'Which of the following is the primary proof of Earth’s rotation on its axis?',
              options: ['The change of seasons from rainy to dry', 'The alternation of day and night every 24 hours', 'The varying length of shadows at different latitudes', 'Solar and lunar eclipses'],
              correct: 1,
              strategy: 'Rotation takes 24 hours and causes the daily alternation of day and night.',
              derivation: 'Earth’s West-to-East rotation every 24 hours causes sunrise and sunset, producing the cycle of day and night. Revolution on a tilted axis causes seasons.',
              trap: 'Confusing rotation (causes day/night) with revolution (causes seasons)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u2',
      number: 'Unit 2',
      title: 'Human Evolution and World Population',
      bigIdea: 'Explore Ethiopia as the Cradle of Humankind (Lucy/Dinkinesh, Ardi), hominid evolutionary milestones, and world demographic dynamics.',
      subtopics: [
        {
          id: 'g7-soc-2.1',
          code: '2.1',
          title: 'Hominid Evolution in Ethiopia & Demographics',
          survey: {
            blueprint: 'Ethiopia: Cradle of Humankind. Key hominid discoveries: Ardipithecus ramidus (Ardi, 4.4 mya, Middle Awash), Australopithecus afarensis (Lucy / Dinkinesh, 3.2 mya, Hadar, Afar), Homo habilis (handyman, toolmaker), Homo erectus (bipedal, controlled fire), Homo sapiens (anatomically modern human, Omo Kibish 195,000 BP). World population trends, density, and migration.',
            objectives: [
              'Identify the major hominid fossil discoveries in the Ethiopian Rift Valley.',
              'Trace evolutionary transitions: bipedalism, tool manufacture, and brain expansion.',
              'Calculate population density and analyze push and pull migration factors.'
            ],
            keyFormulas: 'Population Density = Total Population / Total Land Area (people/km²)'
          },
          questions: [
            'Why is Ethiopia scientifically recognized globally as the "Cradle of Humankind"?',
            'How did the discovery of Ardi (Ardipithecus ramidus) at 4.4 million years old revolutionize our understanding of upright bipedal walking?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🦴</span> 1. ETHIOPIA: CRADLE OF HUMANKIND
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The Ethiopian Rift Valley provides the most unbroken fossil record of human evolutionary history anywhere on Earth:<br>
                  • <strong>Ardipithecus ramidus ("Ardi"):</strong> Discovered by Tim White and Berhane Asfaw at Aramis, Middle Awash (Afar) in 1994, dated to <strong>4.4 million years ago</strong>. Walked upright on two legs while maintaining an opposable big toe for climbing trees.<br>
                  • <strong>Australopithecus afarensis ("Dinkinesh" / Lucy):</strong> Discovered by Donald Johanson in 1974 at Hadar (Afar), dated to <strong>3.2 million years ago</strong>. 40% complete female skeleton proving habitual upright bipedalism.<br>
                  • <strong>Homo habilis ("Handy Man"):</strong> Lived ~2.4 to 1.4 mya. First hominid to deliberately shape stone tools (Oldowan pebble tool culture).<br>
                  • <strong>Homo erectus:</strong> First to master the control of fire, hunt large game, and migrate out of Africa into Eurasia (Acheulean hand axes).<br>
                  • <strong>Homo sapiens (Modern Humans):</strong> Oldest anatomically modern human fossils discovered at Omo Kibish (Omo I and II, dated ~195,000 - 230,000 years ago) in southern Ethiopia!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>👥</span> 2. GLOBAL DEMOGRAPHY & POPULATION DENSITY
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Population Density:</strong> The number of individuals living per square kilometer of land:<br>
                  <strong>Density = Total Population / Total Land Area (km²)</strong>.<br>
                  • <em>Densely Populated Zones:</em> River valleys, coastal plains, fertile volcanic soils (e.g. Ethiopian Highlands, Nile River Basin, South Asia).<br>
                  • <em>Sparsely Populated Zones:</em> Deserts (Sahara, Danakil), frozen tundra (Siberia), dense tropical rainforests (Congo basin).<br>
                  • <strong>Migration Drivers:</strong><br>
                  - <em>Push Factors (force people to leave):</em> Drought, famine, war, lack of land.<br>
                  - <em>Pull Factors (attract people):</em> Better jobs, education, healthcare, peace.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Calculating Population Density of an Ethiopian Zone',
            problem: 'The Gedeo Zone in Southern Ethiopia has an approximate population of 1,200,000 inhabitants occupying a fertile highland land area of 1,500 km². Calculate its population density and classify its settlement intensity.',
            steps: [
              {
                label: 'Step 1: State the density formula',
                text: 'Population Density = Total Population / Total Area (km²).'
              },
              {
                label: 'Step 2: Substitute values',
                text: 'Density = 1,200,000 people / 1,500 km² = <strong>800 people per km²</strong>.'
              },
              {
                label: 'Step 3: Analyze settlement intensity',
                text: '800 people/km² represents an extremely high population density, supported by intensive agroforestry of Enset (false banana) and coffee cultivation!'
              }
            ],
            proTip: 'Enset-growing regions of Ethiopia support some of the highest rural population densities in all of Africa because enset yields massive caloric food per hectare!'
          },
          reciteFlashcards: [
            { q: 'Where and when was Lucy (Dinkinesh) discovered?', a: 'At Hadar in the Afar Region of Ethiopia in 1974 (3.2 million years old).' },
            { q: 'Which hominid was the first to fashion stone tools?', a: 'Homo habilis ("Handy Man").' },
            { q: 'What is the oldest fossil of anatomically modern Homo sapiens discovered in Ethiopia?', a: 'Omo Kibish fossils (Omo I and II, ~195,000 - 230,000 years old).' }
          ],
          amtQuiz: [
            {
              q: 'The fossil hominid "Ardi" (Ardipithecus ramidus), discovered in the Middle Awash of Ethiopia, is scientifically significant because:',
              options: [
                'It is the oldest evidence of iron smelting in Africa',
                'It provides 4.4-million-year-old evidence of bipedal upright walking',
                'It proved that Homo sapiens originated in Europe',
                'It was the first hominid to produce cave paintings'
              ],
              correct: 1,
              strategy: 'Recall that Ardi is 4.4 mya and represents early bipedal hominid evolution.',
              derivation: 'Ardipithecus ramidus (4.4 mya) showed scientists that human ancestors walked upright long before stone tools were invented.',
              trap: 'Confusing Ardi (4.4 mya) with Lucy (3.2 mya)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u3',
      number: 'Unit 3',
      title: 'Human and Natural Resources',
      bigIdea: 'Analyze natural resources: renewable vs non-renewable, Ethiopian drainage basins and major river systems, and soil conservation strategies.',
      subtopics: [
        {
          id: 'g7-soc-3.1',
          code: '3.1',
          title: 'Natural Resources, Water Basins & Soil Conservation',
          survey: {
            blueprint: 'Resource classification: Renewable (solar, wind, water, timber) vs Non-renewable (petroleum, coal, gold, natural gas). Ethiopia: "Water Tower of East Africa" with 12 river basins (Abbay/Blue Nile, Awash, Omo-Gibe, Tekeze, Baro-Akobo, Genale-Dawa, Wabe Shebelle). Soil erosion causes and conservation (terracing, afforestation, check dams).',
            objectives: [
              'Distinguish between renewable and non-renewable natural resources.',
              'Describe the major river drainage systems of Ethiopia and their transboundary flow.',
              'Explain methods of soil conservation: terracing, contour plowing, and agroforestry.'
            ],
            keyFormulas: 'Water drainage systems: Western (Mediterranean / Nile), South-Eastern (Indian Ocean), Rift Valley (Endorheic / Inland)'
          },
          questions: [
            'Why is Ethiopia famously titled the "Water Tower of Eastern Africa"?',
            'How does bench terracing on steep slopes prevent topsoil erosion during torrential Kiremt rains?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🌊</span> 1. ETHIOPIA’S THREE MAJOR DRAINAGE SYSTEMS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Due to high elevation and annual precipitation, Ethiopia produces over 122 billion cubic meters of surface runoff annually across <strong>Three Main Drainage Systems</strong>:<br>
                  • <strong>1. Western (Mediterranean / Nile) System:</strong> Carries ~65% of Ethiopia’s water to the Nile and Mediterranean Sea. Rivers: <strong>Abbay (Blue Nile)</strong>, <strong>Tekeze</strong>, <strong>Baro-Akobo</strong>, and <strong>Mereb</strong>.<br>
                  • <strong>2. South-Eastern (Indian Ocean) System:</strong> Rivers flow southeastward across the Somali plateau toward the Indian Ocean. Rivers: <strong>Wabe Shebelle</strong> (longest river in Ethiopia, ~1,340 km within Ethiopia) and <strong>Genale-Dawa</strong> (which joins to form the Juba in Somalia).<br>
                  • <strong>3. Inland (Rift Valley / Endorheic) System:</strong> Rivers that do not reach the sea but empty into inland lakes. Rivers: <strong>Awash</strong> (terminates in Lake Abbe at Djibouti border) and <strong>Omo-Gibe</strong> (flows south into Lake Turkana).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
                  <span>🌱</span> 2. SOIL DEGRADATION & CONSERVATION TECHNIQUES
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Topsoil is the primary foundation of Ethiopian agriculture. Soil erosion is accelerated by deforestation, overgrazing, and plowing steep hillsides.<br>
                  • <strong>Terracing (Konso cultural landscape):</strong> Carving stepped level benches into hillsides to slow water runoff and trap soil.<br>
                  • <strong>Contour Plowing:</strong> Plowing across the slope along contour lines rather than up and down.<br>
                  • <strong>Afforestation & Reforestation:</strong> Tree roots anchor soil and foliage intercepts heavy rain drops (e.g. Ethiopia's Green Legacy Initiative).<br>
                  • <strong>Check Dams:</strong> Building stone and wooden barriers across gullies to halt water rush and sediment loss.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Categorizing Ethiopian River Flow Directions',
            problem: 'Classify the following Ethiopian rivers into their respective drainage systems: (a) Abbay, (b) Awash, (c) Wabe Shebelle, (d) Omo-Gibe, (e) Baro.',
            steps: [
              {
                label: 'Step 1: Western Drainage (Mediterranean / Nile)',
                text: '<strong>Abbay</strong> and <strong>Baro</strong> both flow westward and join the Nile basin.'
              },
              {
                label: 'Step 2: South-Eastern Drainage (Indian Ocean)',
                text: '<strong>Wabe Shebelle</strong> flows southeastward toward the Indian Ocean coast of Somalia.'
              },
              {
                label: 'Step 3: Inland / Rift Valley System (Endorheic)',
                text: '<strong>Awash</strong> drains into the desert lake Lake Abbe, and <strong>Omo-Gibe</strong> empties into Lake Turkana.'
              }
            ],
            proTip: 'The Grand Ethiopian Renaissance Dam (GERD) is constructed on the Abbay River in Benishangul-Gumuz, harnessing the vast Western drainage system for clean hydroelectricity!'
          },
          reciteFlashcards: [
            { q: 'Which is the longest river inside the territory of Ethiopia?', a: 'Wabe Shebelle (~1,340 km within Ethiopia).' },
            { q: 'Into which lake does the Omo-Gibe river empty?', a: 'Lake Turkana.' },
            { q: 'Name the world-renowned UNESCO World Heritage landscape in Ethiopia famous for stone terracing.', a: 'Konso Cultural Landscape.' }
          ],
          amtQuiz: [
            {
              q: 'Which river in Ethiopia is unique because it flows entirely within the Rift Valley and terminates in Lake Abbe without ever reaching the ocean?',
              options: ['Abbay River', 'Awash River', 'Tekeze River', 'Baro River'],
              correct: 1,
              strategy: 'Identify the endorheic river of the Ethiopian Rift Valley.',
              derivation: 'The Awash River rises in the central highlands and flows northeast through the Rift Valley, terminating in a chain of interconnected saline lakes ending at Lake Abbe.',
              trap: 'Abbay and Tekeze reach the Nile and Mediterranean Sea!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u4',
      number: 'Unit 4',
      title: 'Ancient Civilizations of the World',
      bigIdea: 'Explore the foundations of human civilization: Mesopotamia (cradle), Ancient Egypt, Indus Valley, Ancient China, Classical Greece, and the Roman Empire.',
      subtopics: [
        {
          id: 'g7-soc-4.1',
          code: '4.1',
          title: 'River Valley Civilizations & Classical Antiquity',
          survey: {
            blueprint: 'River valley civilizations: Mesopotamia (Tigris-Euphrates: cuneiform, Hammurabi’s Code), Egypt (Nile: hieroglyphs, pyramids), Indus Valley (Harappa/Mohenjo-Daro: urban planning), China (Yellow River/Huang He: silk, paper, Great Wall). Classical antiquity: Greece (Athenian democracy, philosophy) and Rome (republic, legal system, Pax Romana).',
            objectives: [
              'Explain why the earliest civilizations developed along fertile river valleys.',
              'Describe the writing systems and engineering achievements of Mesopotamia and Egypt.',
              'Compare direct democracy in Ancient Athens with the republican legal system of Rome.'
            ],
            keyFormulas: 'Civilization = Agriculture Surplus + Urbanization + Writing System + Centralized Government'
          },
          questions: [
            'Why did all the earliest primary civilizations emerge strictly along major river valleys?',
            'What was the Code of Hammurabi and why was its principle of codified public law revolutionary?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>🏛️</span> 1. THE FOUR GREAT RIVER VALLEY CIVILIZATIONS
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-amber-400">1. Mesopotamia (Tigris & Euphrates):</strong><br>
                    • "Land between the rivers" in modern Iraq.<br>
                    • Sumerians invented the <strong>Wheel</strong>, the plow, and <strong>Cuneiform</strong> (wedge-shaped writing on clay).<br>
                    • King Hammurabi codified the famous <em>Code of Hammurabi</em> ("Eye for an eye").
                  </div>
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-cyan-400">2. Ancient Egypt (Nile River Valley):</strong><br>
                    • "Gift of the Nile": annual silt flooding enabled massive agricultural surplus.<br>
                    • Invented <strong>Hieroglyphics</strong> (picture writing on papyrus).<br>
                    • Monumental architecture: Pyramids of Giza, Sphinx, and mummification for the afterlife.
                  </div>
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-emerald-400">3. Indus Valley (Indus River):</strong><br>
                    • Harappa and Mohenjo-Daro (modern Pakistan/India).<br>
                    • Renowned for sophisticated <strong>grid-pattern town planning</strong>, underground drainage systems, and public brick baths.
                  </div>
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-rose-400">4. Ancient China (Huang He / Yellow River):</strong><br>
                    • Four Great Inventions: <strong>Paper</strong>, <strong>Printing</strong>, <strong>Gunpowder</strong>, and the <strong>Compass</strong>.<br>
                    • Construction of the Great Wall of China and the Silk Road trade network.
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
                  <span>⚔️</span> 2. CLASSICAL GREECE & THE ROMAN EMPIRE
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Classical Greece:</strong> City-states (Polis) like Athens and Sparta. Athens pioneered <strong>Direct Democracy</strong> (citizens voted directly on laws). Birthplace of Western philosophy (Socrates, Plato, Aristotle), mathematics (Pythagoras, Euclid), and the Olympic Games.<br>
                  • <strong>The Roman Republic & Empire:</strong> Originated along the Tiber River in Italy. Developed representative Senate, codified civil law (Twelve Tables), monumental civil engineering (Aqueducts, Colosseum, paved roads), and the Pax Romana (Roman Peace).
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Comparing Athenian Democracy with Roman Republic',
            problem: 'Contrast how citizens exercised political authority in Ancient Athens versus Ancient Rome.',
            steps: [
              {
                label: 'Step 1: Athenian System',
                text: 'Athens practiced <strong>Direct Democracy</strong>: every free adult male citizen gathered in the Ecclesia (Popular Assembly) to vote directly on every law and policy decision.'
              },
              {
                label: 'Step 2: Roman System',
                text: 'Rome practiced a <strong>Representative Republic</strong>: citizens elected magistrates and representatives (Consuls, Tribunes, Senators) to govern, pass legislation, and manage state finances on their behalf.'
              }
            ],
            proTip: 'Most modern democracies (including Ethiopia’s House of Peoples’ Representatives) are based on the representative republican model rather than direct Athenian democracy!'
          },
          reciteFlashcards: [
            { q: 'What is the oldest known writing system, invented by the Sumerians in Mesopotamia?', a: 'Cuneiform.' },
            { q: 'Which civilization was famous for sophisticated underground covered sewer systems and grid-planned cities?', a: 'The Indus Valley Civilization (Harappa & Mohenjo-Daro).' },
            { q: 'Name the four great inventions of Ancient China.', a: 'Paper, Printing, Gunpowder, and the Magnetic Compass.' }
          ],
          amtQuiz: [
            {
              q: 'Which ancient civilization is credited with creating the first comprehensive written legal code, inscribed on stone stelae and known for the principle "an eye for an eye"?',
              options: ['Ancient Egypt', 'Babylon (Mesopotamia)', 'Ancient Greece', 'Indus Valley'],
              correct: 1,
              strategy: 'The Code of Hammurabi was enacted by King Hammurabi of Babylon, Mesopotamia.',
              derivation: 'Hammurabi’s Code (c. 1750 BCE) was enacted in Babylon, Mesopotamia, establishing written codified standards for civil and criminal justice.',
              trap: 'Assuming it was Roman Law (Twelve Tables came 1,300 years later)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u5',
      number: 'Unit 5',
      title: 'Ancient History of Africa',
      bigIdea: 'Examine ancient African kingdoms and empires: Kush/Meroe (iron smelting, pyramids), Carthage (maritime power), and the Nok Culture of Nigeria.',
      subtopics: [
        {
          id: 'g7-soc-5.1',
          code: '5.1',
          title: 'Kingdom of Kush, Carthage & The Nok Culture',
          survey: {
            blueprint: 'Kingdom of Kush/Nubia: Kerma, Napata, Meroe. Pharaonic 25th Dynasty. Meroe: "Birmingham of Ancient Africa" for massive iron smelting, Meroitic script, and step pyramids. Carthage: Phoenician naval empire founded in 814 BCE in modern Tunisia, Punic Wars against Rome led by Hannibal Barca. Nok Culture of Nigeria (500 BCE - 200 CE): terracotta sculptures and early iron metallurgy.',
            objectives: [
              'Trace the historical rise and shifts of Kush capitals from Kerma to Napata and Meroe.',
              'Explain Meroe’s technological dominance as an iron-smelting center of Africa.',
              'Analyze the rivalry between Carthage and the Roman Republic during the Punic Wars.',
              'Identify the artistic and metallurgical significance of the Nok terracotta sculptures.'
            ],
            keyFormulas: 'Meroe = Iron Metallurgy + Meroitic Script + Nile-Red Sea Trade Hub'
          },
          questions: [
            'Why did the Kushite rulers move their capital south from Napata to Meroe in the 6th century BCE?',
            'How did Hannibal Barca of Carthage nearly defeat the Roman Republic during the Second Punic War?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
                  <span>🏛️</span> 1. THE KINGDOM OF KUSH (NUBIA)
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Located along the Nile Valley south of Egypt (modern Sudan):<br>
                  • <strong>Rise of Napata:</strong> In the 8th century BCE, Kushite King Piye conquered Egypt, establishing the <strong>25th Dynasty ("Black Pharaohs")</strong> who ruled both Egypt and Nubia.<br>
                  • <strong>The Golden Age of Meroe:</strong> The capital moved south to Meroe c. 590 BCE because of abundant iron ore deposits and hardwood acacia forests for smelting furnaces. Termed the <em>"Birmingham of Ancient Africa"</em>, Meroe manufactured iron weapons, tools, and jewelry, traded with India and Rome, developed their own <strong>Meroitic script</strong>, and built over 200 steep-sided royal pyramids.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>⚓</span> 2. CARTHAGE: MARITIME SUPERPOWER
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • Founded in 814 BCE by Phoenician settlers in modern-day Tunisia.<br>
                  • Controlled Mediterranean maritime trade networks with a powerful navy and commercial empire.<br>
                  • <strong>The Punic Wars (264 - 146 BCE):</strong> Three monumental wars fought against the expanding Roman Republic. General <strong>Hannibal Barca</strong> executed an epic invasion of Italy through Spain and the snowy Alps with war elephants, annihilating Roman armies at Cannae (216 BCE).
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🗿</span> 3. THE NOK CULTURE OF NIGERIA
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • Flourished between 500 BCE and 200 CE on the Jos Plateau of northern Nigeria.<br>
                  • Famous for producing life-sized, highly expressive <strong>Terracotta Sculptures</strong> with distinctive pierced triangular or oval pupils, elaborate hairstyles, and flared nostrils.<br>
                  • Pioneers of early sub-Saharan <strong>iron smelting furnaces</strong> without passing through an intermediate copper or bronze age!
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Why Meroe Was the Technological Engine of Africa',
            problem: 'Explain two environmental and geographic factors that made Meroe the premier iron-smelting metropolis of ancient Africa.',
            steps: [
              {
                label: 'Step 1: Geological resources',
                text: 'The hills surrounding Meroe contained rich, accessible surface deposits of high-grade <strong>iron ore</strong> (hematite).'
              },
              {
                label: 'Step 2: Energy supply for smelting',
                text: 'Unlike the arid north, Meroe lay in a savanna woodland belt with vast reserves of acacia trees, providing charcoal fuel to power blast furnaces to 1,200°C.'
              },
              {
                label: 'Step 3: Strategic trading crossroads',
                text: 'Meroe commanded the intersection of the Nile River waterway and overland camel caravan routes connecting the Red Sea coast (Punt/Axum) to the African interior.'
              }
            ],
            proTip: 'Massive hills of black iron slag still stand beside the Meroe pyramids today as living archaeological testimony to ancient African metallurgical genius!'
          },
          reciteFlashcards: [
            { q: 'Which ancient African city was known as the "Birmingham of Ancient Africa" for iron smelting?', a: 'Meroe (Kingdom of Kush).' },
            { q: 'Who was the famous Carthaginian general who crossed the Alps with war elephants to attack Rome?', a: 'Hannibal Barca.' },
            { q: 'What material was used by the Nok Culture of Nigeria to craft their famous sculptures?', a: 'Terracotta (baked clay).' }
          ],
          amtQuiz: [
            {
              q: 'The Kingdom of Kush moved its capital from Napata to Meroe primarily to capitalize on:',
              options: [
                'Vast iron ore deposits and abundant timber for smelting fuel',
                'Gold mines discovered in the Sahara desert',
                'Direct access to the Atlantic Ocean',
                'Alliances formed with the Roman Republic'
              ],
              correct: 0,
              strategy: 'Meroe’s primary technological advantage was iron ore and timber for smelting.',
              derivation: 'Meroe possessed rich iron ore deposits and extensive acacia forests needed to produce charcoal for blast furnaces.',
              trap: 'Saying Atlantic Ocean access (Meroe is in East Africa along the Nile)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u6',
      number: 'Unit 6',
      title: 'States and Peoples of Ancient and Medieval Ethiopia',
      bigIdea: 'Explore Ethiopia’s monumental historical states: Punt, Da’amat, the Aksumite Empire, the Zagwe Dynasty, Medieval Solomonic kingdom, Muslim Sultanates, and the democratic Gadaa System of the Oromo.',
      subtopics: [
        {
          id: 'g7-soc-6.1',
          code: '6.1',
          title: 'Aksum, Lalibela, Medieval States & The Gadaa System',
          survey: {
            blueprint: 'Punt ("Land of the Gods") & Da’amat (Yeha temple). Aksumite Empire: international trade (Adulis), coinage, King Ezana (Christianity 330 CE), monumental stelae, Ge’ez script. Zagwe Dynasty (1137-1270): King Lalibela & 11 monolithic rock-hewn churches. Medieval Solomonic Dynasty: Yekuno Amlak, mobile royal courts. Muslim Sultanates: Ifat, Adal, Ahmad Gragn. The Gadaa System: Oromo democratic age-grade governance.',
            objectives: [
              'Analyze the commercial, political, and architectural achievements of the Aksumite Empire.',
              'Explain the engineering and spiritual significance of the 11 rock-hewn churches of Lalibela.',
              'Describe the democratic structures, 8-year cycles, and offices (Abba Gadaa) of the Oromo Gadaa system.'
            ],
            keyFormulas: 'Gadaa Cycle = 5 Gadaa parties × 8 years = 40-year full generation cycle'
          },
          questions: [
            'How did the port of Adulis enable the Aksumite Empire to become one of the four great world powers of the 3rd century CE?',
            'What makes the Gadaa system of the Oromo a masterwork of indigenous democratic governance recognized by UNESCO?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
                  <span>🏛️</span> 1. THE AKSUMITE EMPIRE
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Ranked by Persian prophet Mani as one of the four greatest world empires alongside Rome, Persia, and China:<br>
                  • <strong>Commerce & Navy:</strong> Controlled maritime trade through the port of <strong>Adulis</strong> on the Red Sea, trading frankincense, ivory, gold, and spices with the Roman Empire, India, and Arabia.<br>
                  • <strong>Coinage & Script:</strong> First sub-Saharan state to mint its own gold, silver, and bronze coins. Refined the <strong>Ge’ez script</strong> by adding vowel marks (vocalization).<br>
                  • <strong>King Ezana (c. 320 - 360 CE):</strong> Converted to Christianity c. 330 CE; carved trilingual inscriptions (Greek, Sabaean, Ge’ez).<br>
                  • <strong>Monumental Stelae:</strong> Monolithic granite obelisks, the tallest standing over 33 meters (weighing over 500 tons), marking royal underground tombs.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>⛪</span> 2. THE ZAGWE DYNASTY & KING LALIBELA (1137 - 1270 CE)
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • Capital located at <strong>Adefa (Roha)</strong> in Lasta (Wollo).<br>
                  • <strong>King Lalibela:</strong> Commissioned the miraculous carving of <strong>11 monolithic rock-hewn churches</strong> out of solid volcanic basalt tuff in the 12th/13th century (including <em>Bete Giyorgis</em>, carved in the shape of a Greek cross).<br>
                  • Constructed as a "New Jerusalem" after Muslim conquest of Jerusalem in 1187 CE. Designated a UNESCO World Heritage site.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🗳️</span> 3. THE GADAA SYSTEM OF THE OROMO
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  An indigenous egalitarian democratic system of socio-political organization practiced by the Oromo people for centuries (inscribed on the UNESCO Intangible Cultural Heritage list):<br>
                  • <strong>8-Year Fixed Term:</strong> Leaders are elected and hold power for strictly <strong>8 years</strong>, after which power must be peacefully transferred to the next Gadaa class.<br>
                  • <strong>Five Gadaa Parties (Gogeessa):</strong> Rotate in a 40-year generation cycle.<br>
                  • <strong>Key Offices & Structures:</strong><br>
                  - <em>Abba Gadaa:</em> The elected leader and spokesman of the Gadaa assembly.<br>
                  - <em>Chaffe:</em> The supreme legislative and judicial general assembly.<br>
                  - <em>Siqqee:</em> An institutional women’s authority and stick symbol used to protect female rights, mediate disputes, and maintain social harmony.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Mathematical Structure of the Gadaa System',
            problem: 'The Gadaa system organizes life into successive 8-year age-grades (Dabballee, Gaammee, Foollee, Qondaala, Gadaa, Yuba). If a boy enters the first stage (Dabballee) at age 0, at what exact age range will he assume executive leadership as Abba Gadaa?',
            steps: [
              {
                label: 'Step 1: Calculate cumulative age-grades',
                text: 'Stage 1 (Dabballee): Ages 0 - 8.<br>Stage 2 (Gaammee Didiko / Junior): Ages 8 - 16.<br>Stage 3 (Gaammee Gurguddo / Senior): Ages 16 - 24.<br>Stage 4 (Foollee / Military training): Ages 24 - 32.<br>Stage 5 (Qondaala / Prep for office): Ages 32 - 40.'
              },
              {
                label: 'Step 2: Identify the Gadaa executive leadership stage',
                text: 'Stage 6 is the <strong>Gadaa Stage</strong>, lasting strictly 8 years: <strong>Ages 40 to 48</strong>.'
              },
              {
                label: 'Step 3: State retirement into advisory role',
                text: 'At age 48, leaders step down permanently and enter the <em>Yuba</em> stage as elder advisors.'
              }
            ],
            proTip: 'The 8-year term limit prevents any leader from clinging to power or becoming a dictator!'
          },
          reciteFlashcards: [
            { q: 'Which Aksumite king made Christianity the official state religion c. 330 CE?', a: 'King Ezana.' },
            { q: 'How many monolithic rock-hewn churches did King Lalibela carve in Roha?', a: '11 churches.' },
            { q: 'What is the term length of an elected Abba Gadaa in the Oromo Gadaa system?', a: 'Strictly 8 years.' }
          ],
          amtQuiz: [
            {
              q: 'In the democratic Gadaa system of the Oromo, the supreme legislative general assembly that enacts customary laws and mediates disputes is called the:',
              options: ['Chaffe', 'Siqqee', 'Abba Dula', 'Yuba'],
              correct: 0,
              strategy: 'Chaffe is the supreme Oromo legislative and decision-making assembly.',
              derivation: 'The Chaffe serves as the supreme parliamentary assembly where all Gadaa laws are reviewed, proclaimed, and amended.',
              trap: 'Siqqee is the women’s socio-legal institution, not the legislative assembly!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u7',
      number: 'Unit 7',
      title: 'Contemporary Global Issues',
      bigIdea: 'Analyze global and regional challenges: climate change, desertification, drought in the Horn of Africa, HIV/AIDS, and international organizations (IGAD, AU, UN).',
      subtopics: [
        {
          id: 'g7-soc-7.1',
          code: '7.1',
          title: 'Climate Change, Regional Drought & International Organizations',
          survey: {
            blueprint: 'Global challenges: Greenhouse effect, global warming, desertification, deforestation in Ethiopia. Regional drought in the Horn of Africa and climate resilience. Regional organizations: IGAD (Djibouti headquarters) and the African Union (Addis Ababa headquarters). United Nations specialized agencies.',
            objectives: [
              'Explain the greenhouse effect and human drivers of global climate change.',
              'Analyze the recurrent causes of drought and famine in the Horn of Africa.',
              'Describe the foundational role of Ethiopia in the African Union (AU) and IGAD.'
            ],
            keyFormulas: 'Greenhouse Gases: CO₂ + CH₄ + N₂O + H₂O vapor ➔ Thermal radiation trapped in lower atmosphere'
          },
          questions: [
            'Why is Addis Ababa designated as the diplomatic capital of the African continent?',
            'How does the Green Legacy Initiative in Ethiopia serve as a national model for combating climate change and soil desertification?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🌡️</span> 1. CLIMATE CHANGE & THE GREENHOUSE EFFECT
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>The Greenhouse Effect:</strong> Natural atmospheric gases (carbon dioxide CO₂, methane CH₄, nitrous oxide N₂O) allow sunlight to penetrate but absorb outgoing infrared heat, keeping Earth warm. Human burning of fossil fuels and deforestation have drastically increased greenhouse concentrations, driving <strong>Global Warming</strong>.<br>
                  • <strong>Impacts on Ethiopia:</strong> Unpredictable rainfall patterns, shortened Kiremt rainy seasons, prolonged droughts in the pastoral lowlands (Somali, Afar, Borana), and shrinking glaciers on East African peaks.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
                  <span>🤝</span> 2. REGIONAL & GLOBAL ORGANIZATIONS
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>African Union (AU):</strong> Founded originally as the Organization of African Unity (OAU) in 1963 in Addis Ababa under the leadership of Emperor Haile Selassie and Pan-African leaders. Addis Ababa is the permanent continental headquarters.</p>
                  <p>• <strong>IGAD (Intergovernmental Authority on Development):</strong> Regional economic and security community of 8 Horn of Africa nations (Djibouti, Ethiopia, Kenya, Somalia, South Sudan, Sudan, Uganda, Eritrea) focused on drought control, food security, and conflict resolution.</p>
                  <p>• <strong>United Nations (UN):</strong> Ethiopia was one of only four African founding member nations that signed the original UN Charter in San Francisco in 1945.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: The Green Legacy Initiative Impact',
            problem: 'Explain how Ethiopia’s massive tree-planting campaign (Green Legacy) directly addresses both climate change mitigation and rural food security.',
            steps: [
              {
                label: 'Step 1: Carbon sequestration (Mitigation)',
                text: 'Billions of growing trees absorb atmospheric carbon dioxide (CO₂) through photosynthesis, acting as a major terrestrial carbon sink.'
              },
              {
                label: 'Step 2: Soil and watershed restoration (Adaptation)',
                text: 'Tree roots hold fragile highland topsoil in place, preventing silting of hydroelectric dams (GERD) and recharging depleted groundwater aquifers for irrigation.'
              },
              {
                label: 'Step 3: Agroforestry food yield',
                text: 'Planting fruit-bearing trees (avocado, mango, papaya) provides immediate nutrition and income for rural farming households.'
              }
            ],
            proTip: 'Planting indigenous trees (like Acacia, Cordia africana/Wanza, and Hagenia/Kosso) is crucial because they support native biodiversity and require far less groundwater than imported eucalyptus!'
          },
          reciteFlashcards: [
            { q: 'In which city is the headquarters of the African Union (AU) located?', a: 'Addis Ababa, Ethiopia.' },
            { q: 'What does the regional organization acronym IGAD stand for?', a: 'Intergovernmental Authority on Development.' },
            { q: 'What are the two most potent greenhouse gases driving modern climate change?', a: 'Carbon dioxide (CO₂) and Methane (CH₄).' }
          ],
          amtQuiz: [
            {
              q: 'In 1963, 32 independent African heads of state convened to establish the Organization of African Unity (OAU, now the African Union). Where was this historic charter signed?',
              options: ['Cairo, Egypt', 'Addis Ababa, Ethiopia', 'Accra, Ghana', 'Nairobi, Kenya'],
              correct: 1,
              strategy: 'Addis Ababa has been the permanent headquarters of the OAU/AU since its founding in 1963.',
              derivation: 'The OAU was founded in Addis Ababa in May 1963, cementing Ethiopia’s role as the diplomatic capital of the African continent.',
              trap: 'Assuming Cairo or Accra because of their early independence leaders!'
            }
          ]
        }
      ]
    }
  ]
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g7_social.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g7Social, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote deep g7_social.js with all 7 units matching official CBA revision booklet!');
