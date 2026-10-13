// Grade 7 Social Studies - Complete Ethiopian Curriculum Syllabus (Units 1 to 7)
module.exports = {
  id: 'social',
  name: 'Social Studies',
  icon: '🌍',
  units: [
    {
      id: 'g7-soc-u1',
      number: 'Unit 1',
      title: 'Physical Geography of Africa',
      bigIdea: 'Examine astronomical location, size, boundaries, and regional relief features of the African continent.',
      subtopics: [
        {
          id: 'g7-soc-1.1',
          code: '1.1',
          title: 'Location, Size & Boundaries of Africa',
          survey: {
            blueprint: 'Africa: 2nd largest continent (~30.3 million km²). Latitudes: 37°21\'N (Ras Ben Sakka) to 34°52\'S (Cape Agulhas). Equator crosses almost symmetrically.',
            objectives: [
              'State the absolute (latitudinal/longitudinal) location of Africa.',
              'Identify the four water bodies bordering Africa (Mediterranean Sea, Red Sea, Indian Ocean, Atlantic Ocean).',
              'Explain the significance of the Strait of Gibraltar and the Suez Canal.'
            ],
            keyFormulas: 'Area ≈ 30.3 million km² (20.4% of Earth’s land surface) &nbsp;|&nbsp; 54 Sovereign Nations'
          },
          questions: [
            'Why is Africa referred to as the most tropical of all continents?',
            'What man-made waterway connects the Mediterranean Sea to the Red Sea?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Continental Dimensions & Geopolitical Boundaries</h4>
              <p>• <strong>Location:</strong> Africa spans from 37°21'N to 34°52'S latitude, and from 17°33'W (Cape Verde Peninsula) to 51°28'E (Ras Hafun, Somalia) longitude.<br>
              • <strong>Surrounding Water Bodies:</strong> North: Mediterranean Sea; Northeast: Red Sea (separated from Asia by Bab-el-Mandeb and connected by Suez Canal); East: Indian Ocean; West & South: Atlantic Ocean.<br>
              • <strong>Topography:</strong> Characterized as a plateau continent with narrow coastal plains, high plateaus, and the East African Rift System.</p>
            </div>
          `,
          example: {
            title: 'Identifying Africa’s Extreme Geographical Points',
            problem: 'Name the northernmost and easternmost mainland points of the African continent.',
            steps: [
              { label: 'Step 1: Northernmost extremity', text: 'Ras Ben Sakka in Tunisia (37°21\' N).' },
              { label: 'Step 2: Easternmost extremity', text: 'Ras Hafun in Somalia (51°28\' E, located in the Horn of Africa).' }
            ],
            proTip: 'Remember that the Prime Meridian (0°) passes through Accra (Ghana) and Algeria in West Africa!'
          },
          reciteFlashcards: [
            { q: 'What is the total land area of the African continent?', a: 'Approximately 30.3 million square kilometers.' },
            { q: 'Which artificial waterway links the Mediterranean Sea to the Red Sea?', a: 'The Suez Canal (opened in Egypt in 1869).' }
          ],
          amtQuiz: [
            {
              q: 'Which body of water borders the African continent to the northeast?',
              options: ['Atlantic Ocean', 'Mediterranean Sea', 'Red Sea', 'Baltic Sea'],
              correct: 2,
              strategy: 'Recall the regional compass directions bordering Africa.',
              derivation: 'The Red Sea separates northeastern Africa (Egypt, Sudan, Eritrea) from the Arabian Peninsula.',
              trap: 'The Mediterranean Sea is to the north, not northeast!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u2',
      number: 'Unit 2',
      title: 'Drainage Systems & Climate of Africa',
      bigIdea: 'Study major river basins (Nile, Congo, Niger, Zambezi), rift valley lakes, and continental climatic belts.',
      subtopics: [
        {
          id: 'g7-soc-2.1',
          code: '2.1',
          title: 'Major Rivers, Lakes & Climate Zones of Africa',
          survey: {
            blueprint: 'Rivers: Nile (longest in world, 6,650 km), Congo (deepest, largest discharge in Africa), Niger, Zambezi (Victoria Falls). Climates: Equatorial, Tropical Savanna, Desert, Mediterranean.',
            objectives: [
              'Trace the origin and course of the Blue Nile (Abay) and White Nile.',
              'Explain why the Congo River has the highest volume of discharge in Africa.',
              'Differentiate the four major climate zones of Africa and their vegetation.'
            ],
            keyFormulas: 'River Nile = Blue Nile (Lake Tana, 85% flood volume) + White Nile (Lake Victoria) ➔ Khartoum confluence ➔ Mediterranean Sea'
          },
          questions: [
            'Why does the Blue Nile provide approximately 85% of the Nile’s water during flood season?',
            'How do the ITCZ (Inter-Tropical Convergence Zone) wind shifts determine rainfall across Ethiopia?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Hydrography & Climatological Zones</h4>
              <p>• <strong>River Nile:</strong> The world\'s longest river (~6,650 km). The Blue Nile (Abay) originates at the Gish Abay spring feeding Lake Tana in the Ethiopian highlands and unites with the White Nile at Khartoum, Sudan.<br>
              • <strong>Congo River Basin:</strong> Second largest river system in the world by water volume (after the Amazon), fed by year-round equatorial rainfall.<br>
              • <strong>Climatic Belts:</strong><br>
                - <em>Equatorial Rain Forest:</em> Hot and humid year-round with convectional rain (Congo basin).<br>
                - <em>Savanna (Tropical Wet-and-Dry):</em> Defined wet summer and dry winter, covered by grasslands and acacia trees.<br>
                - <em>Arid / Semi-Arid (Deserts):</em> Sahara (North) and Kalahari/Namib (South), extremely low precipitation.<br>
                - <em>Mediterranean:</em> Mild, wet winters and warm, dry summers (northern tip of Africa and southern Cape).</p>
            </div>
          `,
          example: {
            title: 'Hydrographic Analysis of the Nile River Confluence',
            problem: 'Explain the geographical components of the Nile river basin and why the Ethiopian highlands are termed the "Water Tower of Northeast Africa".',
            steps: [
              { label: 'Step 1: Identify headwaters', text: 'White Nile originates from the Lake Victoria basin in East Africa; Blue Nile (Abay), Tekeze (Atbara), and Baro originate in the Ethiopian highlands.' },
              { label: 'Step 2: Water contribution', text: 'Due to summer monsoon rains, Ethiopian rivers contribute ~85% of the total water reaching the lower Nile valley.' },
              { label: 'Step 3: Hydrographic conclusion', text: 'The massive elevation and rainfall capture in the Ethiopian plateau makes it the vital water tower for the downstream arid regions.' }
            ],
            proTip: 'The Grand Ethiopian Renaissance Dam (GERD) is built on the Blue Nile near the Sudan border to harness this hydro-potential!'
          },
          reciteFlashcards: [
            { q: 'Where do the Blue Nile and White Nile meet?', a: 'At Khartoum, the capital of Sudan.' },
            { q: 'Which African river carries the largest discharge volume of water?', a: 'The Congo River.' }
          ],
          amtQuiz: [
            {
              q: 'Where does the Blue Nile (Abay) river originate?',
              options: ['Lake Victoria', 'Lake Tana / Ethiopian Highlands', 'Lake Tanganyika', 'Mount Kilimanjaro'],
              correct: 1,
              strategy: 'Recall the geography of Ethiopian river systems.',
              derivation: 'The Blue Nile originates from springs feeding Lake Tana in the northwestern Ethiopian plateau.',
              trap: 'Lake Victoria is the principal headwater reservoir of the White Nile, not the Blue Nile!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u3',
      number: 'Unit 3',
      title: 'Human Population & Demography of Africa',
      bigIdea: 'Analyze population distribution, fertility rates, demographic transition, and urban migration challenges.',
      subtopics: [
        {
          id: 'g7-soc-3.1',
          code: '3.1',
          title: 'Population Distribution & Demographic Dynamics',
          survey: {
            blueprint: 'Africa population: Over 1.4 billion. Factors influencing distribution: rainfall, fertile soils, mineral wealth, disease vectors (tsetse fly, malaria).',
            objectives: [
              'Define population density and calculate crude population density.',
              'Explain the factors leading to uneven population distribution in Africa.',
              'Discuss socio-economic impacts of high dependency ratios and rapid urbanization.'
            ],
            keyFormulas: 'Crude Population Density = Total Population / Total Land Area (persons/km²)'
          },
          questions: [
            'Why are the Nile valley and the Ethiopian highlands densely populated while the Sahara is virtually empty?',
            'What is a "youth bulge" and what opportunities and challenges does it create for Africa?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Demographic Science & Spatial Settlement</h4>
              <p>• <strong>Densely Populated Zones:</strong> River valleys (Nile valley/delta in Egypt), fertile volcanic highlands (Ethiopian plateau, Kenyan highlands, Rwanda/Burundi), coastal trading belts (West Africa/Gulf of Guinea).<br>
              • <strong>Sparsely Populated Zones:</strong> Hyper-arid deserts (Sahara, Kalahari), dense tropical rainforest swamps, areas prone to sleeping sickness (tsetse fly belt).<br>
              • <strong>Demographic Characteristics:</strong> High birth rate, declining infant mortality, youthful age structure (>60% under 25 years), rapid rural-to-urban migration creating pressure on infrastructure.</p>
            </div>
          `,
          example: {
            title: 'Calculating Population Density',
            problem: 'A region in eastern Africa has a total population of 12,000,000 people living across a land surface of 150,000 km². Calculate its crude population density.',
            steps: [
              { label: 'Step 1: State formula', text: 'Density = Total Population / Total Land Area.' },
              { label: 'Step 2: Calculate', text: '12,000,000 / 150,000 = <strong>80 persons/km²</strong>.' }
            ],
            proTip: 'Crude density does not account for arable vs. wasteland area; physiological density measures people per unit of farmable land.'
          },
          reciteFlashcards: [
            { q: 'What is the approximate total population of Africa today?', a: 'Over 1.4 billion people.' },
            { q: 'Why do fertile volcanic highlands attract dense human settlements in East Africa?', a: 'Rich agricultural soil, cooler pleasant climate, and fewer tropical disease vectors.' }
          ],
          amtQuiz: [
            {
              q: 'Which of the following areas in Africa has the LOWEST population density?',
              options: ['The Nile Delta of Egypt', 'The Sahara Desert', 'The Ethiopian Highlands', 'The Lake Victoria Basin'],
              correct: 1,
              strategy: 'Arid climate and lack of freshwater prevent permanent human agricultural settlement.',
              derivation: 'The hyper-arid Sahara Desert has extreme heat and almost zero rainfall, making its population density less than 1 person per km².',
              trap: 'The Ethiopian Highlands are one of the most densely populated regions due to fertile soils!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u4',
      number: 'Unit 4',
      title: 'Early Human Origins & Ancient Civilizations',
      bigIdea: 'Explore East Africa as the Cradle of Humankind, hominid fossil discoveries, and ancient civilizations (Kush, Punt, Axum).',
      subtopics: [
        {
          id: 'g7-soc-4.1',
          code: '4.1',
          title: 'East Africa Cradle of Humankind & Ancient Axum',
          survey: {
            blueprint: 'Hominid discoveries in Afar/Awash valley: Lucy (Dinkenesh - Australopithecus afarensis, 3.2 million years old), Ardi. Ancient states: Land of Punt, Da’amat, Axumite Empire.',
            objectives: [
              'Explain why Ethiopia and the East African Rift are recognized as the Cradle of Humankind.',
              'Describe the achievements of the Kingdom of Axum (stelae, coinage, Red Sea trade, Ge\'ez script).',
              'Discuss international trade through the port of Adulis on the Red Sea.'
            ],
            keyFormulas: 'Australopithecus afarensis (Dinkenesh / Lucy, 3.2 Ma) ➔ Homo habilis (toolmaker) ➔ Homo erectus ➔ Homo sapiens'
          },
          questions: [
            'What anatomical evidence proves that Australopithecus afarensis walked upright (bipedalism)?',
            'How did the port city of Adulis connect Axum with Greco-Roman, Persian, and Indian trading networks?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Paleoanthropology & Ancient African Empires</h4>
              <p>• <strong>Cradle of Humankind:</strong> Fossils discovered in the Afar Depression (Hadar) including <em>Australopithecus afarensis</em> (Dinkenesh / Lucy, discovered in 1974 by Donald Johanson) date to 3.2 million years ago, proving bipedal locomotion.<br>
              • <strong>Land of Punt:</strong> Ancient trading partner of Pharonic Egypt known for gold, myrrh, frankincense, and ivory.<br>
              • <strong>Axumite Civilization (1st - 7th century CE):</strong> One of the four great world empires alongside Rome, Persia, and China. Notable achievements include towering granite stelae, minting gold, silver, and bronze currency, adopting Christianity (King Ezana, ~330 CE), and developing the written Ge\'ez script.</p>
            </div>
          `,
          example: {
            title: 'Axumite Economic Innovation Analysis',
            problem: 'Why was the minting of coins by Axumite kings like Endubis and Ezana a profound economic breakthrough in African history?',
            steps: [
              { label: 'Step 1: International trade facilitation', text: 'Coins bearing Greek and Ge\'ez inscriptions allowed seamless transactions with foreign merchants across the Red Sea and Mediterranean.' },
              { label: 'Step 2: Royal sovereignty assertion', text: 'Minting currency in gold, silver, and bronze symbolized political independence and imperial prestige.' }
            ],
            proTip: 'Axum was the first African state south of the Sahara to mint its own gold coinage!'
          },
          reciteFlashcards: [
            { q: 'What is the Ethiopian name given to the fossil Australopithecus afarensis?', a: 'Dinkenesh ("You are marvelous").' },
            { q: 'Which ancient Red Sea port served as the commercial gateway for the Kingdom of Axum?', a: 'Adulis (near modern Zula).' }
          ],
          amtQuiz: [
            {
              q: 'Which Axumite king officially declared Christianity as the state religion in the 4th century CE?',
              options: ['King Kaleb', 'King Ezana', 'King Endubis', 'King Lalibela'],
              correct: 1,
              strategy: 'Recall the conversion of Axum during the 330s CE.',
              derivation: 'King Ezana converted to Christianity through the teachings of Frumentius (Abba Selama) and struck the cross on his coins.',
              trap: 'King Lalibela ruled during the later Zagwe Dynasty, not the Axumite period!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u5',
      number: 'Unit 5',
      title: 'Medieval Kingdoms & Ethiopian History',
      bigIdea: 'Study the Zagwe dynasty, architectural wonder of rock-hewn churches of Roha (Lalibela), and the Solomonic period.',
      subtopics: [
        {
          id: 'g7-soc-5.1',
          code: '5.1',
          title: 'The Zagwe Dynasty & The Rock-Hewn Churches',
          survey: {
            blueprint: 'Zagwe dynasty (capital at Roha / Lalibela, Bugna). Monolithic architecture: 11 monolithic and semi-monolithic churches carved out of living volcanic tuff rock.',
            objectives: [
              'Explain the political origins and cultural achievements of the Zagwe Dynasty.',
              'Describe the architecture and engineering techniques of King Lalibela’s rock-cut churches.',
              'Understand the peaceful restoration of the Solomonic Dynasty under Yekuno Amlak in 1270 CE.'
            ],
            keyFormulas: 'Monolithic Church = Chiseled completely free from solid surrounding bedrock (e.g., Bete Giyorgis)'
          },
          questions: [
            'What differentiates a monolithic rock church from a cave or semi-monolithic church?',
            'Why did King Lalibela design Roha as a "New Jerusalem"?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Medieval Ethiopian Statehood & Stone Architecture</h4>
              <p>• <strong>The Zagwe Dynasty:</strong> Emerged in the 10th-11th century CE centered in Lasta Bugna. King Lalibela (r. late 12th - early 13th c.) is credited with excavating eleven churches.<br>
              • <strong>Architectural Typology:</strong><br>
                - <em>Monolithic:</em> Completely carved inside and outside from monolithic basalt bedrock (e.g., Bete Medhane Alem, Bete Giyorgis).<br>
                - <em>Semi-monolithic:</em> Partially connected to the rock face.<br>
              • <strong>Solomonic Transition:</strong> In 1270 CE, power shifted to Yekuno Amlak of Amhara, claiming direct lineage from the Axumite Solomonic dynasty with the mediation of Abuna Tekle Haymanot.</p>
            </div>
          `,
          example: {
            title: 'Engineering Classification of Bete Giyorgis',
            problem: 'Describe the structural excavation method used to build Bete Giyorgis (Church of St. George) in Lalibela.',
            steps: [
              { label: 'Step 1: Trench excavation', text: 'Craftsmen excavated a 12-meter deep rectangular perimeter trench into the red volcanic scoria bedrock.' },
              { label: 'Step 2: Exterior cruciform shaping', text: 'The isolated central stone block was carved from the top down into an equal-armed Greek cross shape.' },
              { label: 'Step 3: Interior hollowing', text: 'Doors, windows, and inner pillars were hollowed out from within the solid rock without using mortar or cement.' }
            ],
            proTip: 'Bete Giyorgis is celebrated worldwide as the pinnacle of medieval Ethiopian monolithic engineering!'
          },
          reciteFlashcards: [
            { q: 'How many rock-hewn churches were carved in Roha (Lalibela)?', a: 'Eleven (11) churches.' },
            { q: 'Who founded the Solomonic dynasty in 1270 CE following the Zagwe era?', a: 'Yekuno Amlak.' }
          ],
          amtQuiz: [
            {
              q: 'The rock-hewn church of Bete Giyorgis in Lalibela is famous for having what structural shape when viewed from above?',
              options: ['Octagonal dome', 'Cruciform (Greek cross)', 'Circular rotunda', 'Hexagonal prism'],
              correct: 1,
              strategy: 'Recall the iconic cross plan of St. George’s church.',
              derivation: 'Bete Giyorgis is carved in the shape of a symmetrical equal-armed Greek cross.',
              trap: 'Bete Medhane Alem is a rectangular basilica, but Bete Giyorgis is cruciform!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u6',
      number: 'Unit 6',
      title: 'Economic Activities in Africa',
      bigIdea: 'Explore primary economic sectors: subsistence vs commercial agriculture, pastoralism, mining, and continental trade.',
      subtopics: [
        {
          id: 'g7-soc-6.1',
          code: '6.1',
          title: 'Agriculture, Mining & African Trade',
          survey: {
            blueprint: 'Sectors: Primary (farming, mining, fishing) ➔ Secondary (manufacturing) ➔ Tertiary (services). Major cash crops: coffee, cocoa, tea, cotton.',
            objectives: [
              'Differentiate subsistence farming from commercial plantation agriculture.',
              'Identify Africa’s major mineral deposits (gold, diamonds, copper, petroleum, cobalt).',
              'Explain the objectives of the African Continental Free Trade Area (AfCFTA).'
            ],
            keyFormulas: 'AfCFTA = Creating a single unified market of 1.4 billion consumers across Africa'
          },
          questions: [
            'Why does the dependence on exporting raw unprocessed agricultural products leave African economies vulnerable to global price shocks?',
            'What is the agricultural significance of the Ethiopian high-plateau "Enset and Teff" farming complexes?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Economic Systems & Mineral Wealth</h4>
              <p>• <strong>Agriculture:</strong> Employs over 60% of Africa\'s labor force. Includes shifting cultivation, nomadic pastoralism, sedentary mixed farming, and commercial export plantations (cocoa in Ghana/Ivory Coast, coffee in Ethiopia/Kenya).<br>
              • <strong>Mining Wealth:</strong> Africa holds ~30% of the world\'s mineral reserves. Copper belt (Zambia/DRC), Coltan and Cobalt for batteries (DRC), Gold and Platinum (South Africa), Oil/Gas (Nigeria, Angola, Algeria).<br>
              • <strong>AfCFTA:</strong> Flagship initiative of African Union Agenda 2063 designed to boost intra-African trade by eliminating tariffs and border bottlenecks.</p>
            </div>
          `,
          example: {
            title: 'Value Addition Economic Analysis',
            problem: 'Why does exporting processed roast coffee or chocolate generate far more national revenue than exporting raw green coffee beans or raw cocoa beans?',
            steps: [
              { label: 'Step 1: Industrial value chain', text: 'Roasting, packaging, branding, and retailing capture over 80% of final consumer market value.' },
              { label: 'Step 2: Employment and technology', text: 'Processing creates domestic manufacturing jobs, industrial skills, and reduces currency flight.' }
            ],
            proTip: 'Agro-processing industrial parks in Ethiopia are designed specifically to achieve this value addition!'
          },
          reciteFlashcards: [
            { q: 'Which African country is renowned as the primary birthplace of Arabica coffee?', a: 'Ethiopia (Kaffa region).' },
            { q: 'What does the acronym AfCFTA stand for?', a: 'African Continental Free Trade Area.' }
          ],
          amtQuiz: [
            {
              q: 'The Democratic Republic of the Congo (DRC) produces over 70% of the world’s supply of which essential mineral used in electric vehicle and smartphone batteries?',
              options: ['Bauxite', 'Cobalt', 'Limestone', 'Potash'],
              correct: 1,
              strategy: 'Associate modern battery technology metals with Central African mining.',
              derivation: 'The DRC holds the majority of global cobalt reserves, critical for rechargeable lithium-ion batteries.',
              trap: 'Bauxite is mined for aluminum primarily in Guinea!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-soc-u7',
      number: 'Unit 7',
      title: 'Environmental Issues & Resource Conservation',
      bigIdea: 'Study soil degradation, deforestation, desertification, wildlife conservation, and sustainable development.',
      subtopics: [
        {
          id: 'g7-soc-7.1',
          code: '7.1',
          title: 'Deforestation, Soil Conservation & National Parks',
          survey: {
            blueprint: 'Challenges: Overgrazing, slash-and-burn, gully erosion. Solutions: Terracing, afforestation, check-dams, national park biodiversity conservation.',
            objectives: [
              'Identify primary drivers of soil erosion in steep highland topographies.',
              'Explain physical and biological soil conservation measures (contour bunds, vetiver grass, terracing).',
              'Highlight endemic Ethiopian wildlife protected in national parks (Walia Ibex, Ethiopian Wolf, Gelada Baboon).'
            ],
            keyFormulas: 'Conservation Methods = Terracing + Contour Plowing + Strip Cropping + Reforestation'
          },
          questions: [
            'How does contour plowing reduce surface runoff velocity on sloping farmland?',
            'Where is the endemic Walia Ibex protected in Ethiopia?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Ecology, Conservation & Wildlife Protection</h4>
              <p>• <strong>Soil Degradation:</strong> Removal of fertile topsoil by torrential water runoff or wind. Exacerbated by deforestation for fuelwood and overgrazing.<br>
              • <strong>Conservation Methods:</strong><br>
                - <em>Terracing:</em> Stepping hillsides to flatten slope gradients.<br>
                - <em>Afforestation / Reforestation:</em> Planting trees to bind soil with root systems.<br>
                - <em>Check Dams:</em> Stone structures built across gullies to trap silt.<br>
              • <strong>Protected Parks & Endemic Species:</strong><br>
                - <em>Simien Mountains National Park:</em> Walia Ibex, Ethiopian Wolf (Simien Fox), Gelada Baboon.<br>
                - <em>Bale Mountains National Park:</em> Ethiopian Wolf, Mountain Nyala.<br>
                - <em>Awash National Park:</em> Beisa Oryx and bird sanctuaries.</p>
            </div>
          `,
          example: {
            title: 'Selecting an Anti-Erosion Strategy on Highland Slopes',
            problem: 'A farmer in Wollo cultivates teff on a 25% steep slope facing heavy rainfall. Which soil conservation measures should be combined?',
            steps: [
              { label: 'Step 1: Physical engineering', text: 'Construct stone-faced terracing or soil bunds along the topographic contour lines.' },
              { label: 'Step 2: Biological stabilization', text: 'Plant deep-rooting grasses (such as vetiver or elephant grass) along bund edges.' },
              { label: 'Step 3: Farm management', text: 'Practice contour plowing perpendicular to the slope rather than up-and-down.' }
            ],
            proTip: 'Never plow up-and-down a hill slope, as furrows act as artificial channels accelerating destructive gully erosion!'
          },
          reciteFlashcards: [
            { q: 'In which national park is the endangered Walia Ibex found?', a: 'Simien Mountains National Park.' },
            { q: 'What is the term for planting trees in an area where forests were previously destroyed?', a: 'Reforestation.' }
          ],
          amtQuiz: [
            {
              q: 'Which Ethiopian animal is an endemic species found naturally ONLY in the Ethiopian highlands?',
              options: ['African Elephant', 'Mountain Nyala', 'Cheetah', 'Giraffe'],
              correct: 1,
              strategy: 'Endemic means restricted exclusively to a specific geographic habitat.',
              derivation: 'The Mountain Nyala (Tragelaphus buxtoni) is endemic to the high-altitude forests of the Bale Mountains and Arsi highlands of Ethiopia.',
              trap: 'Elephants and cheetahs are indigenous to broad regions across Africa, not endemic to Ethiopia!'
            }
          ]
        }
      ]
    }
  ]
};
