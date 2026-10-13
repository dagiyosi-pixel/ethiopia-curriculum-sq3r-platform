// Grade 8 Social Studies - Complete Ethiopian Curriculum Syllabus (Units 1 to 6)
module.exports = {
  id: 'social',
  name: 'Social Studies',
  icon: '🌍',
  units: [
    {
      id: 'g8-soc-u1',
      number: 'Unit 1',
      title: 'Physical Geography of the World',
      bigIdea: 'Examine continents, oceans, tectonic plate boundaries, planetary wind belts, and major world climate zones.',
      subtopics: [
        {
          id: 'g8-soc-1.1',
          code: '1.1',
          title: 'Continents, Oceans & Atmospheric Circulation',
          survey: {
            blueprint: 'World: 7 Continents (Asia largest, Australia smallest), 5 Oceans (Pacific largest/deepest). Atmospheric pressure cells: Equatorial low (doldrums), Subtropical high (horse latitudes), Subpolar low, Polar high.',
            objectives: [
              'Rank the 7 continents and 5 oceans by area and depth.',
              'Explain global wind circulation (Trade Winds, Westerlies, Polar Easterlies).',
              'Analyze how ocean currents (warm Gulf Stream, cold Benguela) affect coastal climates.'
            ],
            keyFormulas: 'Coriolis Effect: Deflects winds to the right in the Northern Hemisphere and left in the Southern Hemisphere'
          },
          questions: [
            'Why does warm air rise at the Equator and sink at approximately 30° North and South latitude?',
            'How do cold ocean currents like the Benguela Current contribute to the creation of coastal deserts like the Namib Desert?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Global Geomorphology & Planetary Climatology</h4>
              <p>• <strong>Continents & Oceans:</strong> Continents: Asia, Africa, North America, South America, Antarctica, Europe, Australia. Oceans: Pacific, Atlantic, Indian, Southern, Arctic.<br>
              • <strong>Global Atmospheric Cells:</strong><br>
                - <em>Hadley Cell:</em> Warm air rises at Equator, moves poleward, and sinks at 30° latitude creating dry subtropical deserts.<br>
                - <em>Trade Winds:</em> Blow steadily from subtropical highs toward the equator (NE Trades in north, SE Trades in south).<br>
              • <strong>Ocean Currents:</strong> Warm currents raise coastal air temperature and precipitation; cold currents chill air, stabilize it, and produce coastal aridity and fogs.</p>
            </div>
          `,
          example: {
            title: 'Analyzing the Impact of the Benguela Cold Current',
            problem: 'Explain how the cold Benguela Current off the southwestern coast of Africa creates the extremely dry Namib Desert.',
            steps: [
              { label: 'Step 1: Water temperature effect', text: 'Cold water chills the bottom atmospheric air layer, causing temperature inversion.' },
              { label: 'Step 2: Suppression of convection', text: 'Cold stable air cannot rise to form rain clouds; only morning sea fog is produced.' },
              { label: 'Step 3: Climatic outcome', text: 'The coastal land remains hyper-arid, creating the Namib Desert dunes.' }
            ],
            proTip: 'Remember that cold currents always create dry coastal desert conditions!'
          },
          reciteFlashcards: [
            { q: 'Which is the largest and deepest ocean on Earth?', a: 'The Pacific Ocean.' },
            { q: 'In which direction does the Coriolis effect deflect moving air in the Northern Hemisphere?', a: 'To the right (clockwise).' }
          ],
          amtQuiz: [
            {
              q: 'What causes the formation of major world deserts (like the Sahara and Arabian deserts) along approximately 30° North and South latitudes?',
              options: [
                'Rising warm equatorial air and low pressure',
                'Descending dry air within high-pressure subtropical belts (Hadley cells)',
                'Frequent polar frontal storms',
                'Rapid volcanic geothermal heating'
              ],
              correct: 1,
              strategy: 'Subtropical highs at 30° latitude are characterized by sinking dry air that inhibits cloud formation.',
              derivation: 'High-pressure subtropical ridges feature dry descending air, preventing convection and generating arid desert conditions.',
              trap: 'Rising air produces rain; sinking air produces deserts!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-soc-u2',
      number: 'Unit 2',
      title: 'World Human Population Dynamics',
      bigIdea: 'Study global population growth trends, demographic transition theory, urbanization, and migration patterns.',
      subtopics: [
        {
          id: 'g8-soc-2.1',
          code: '2.1',
          title: 'Demographic Transition Model & Urbanization',
          survey: {
            blueprint: 'World population: Exceeded 8 billion. Demographic Transition Model (DTM: 4-5 stages from high birth/death to low birth/death). Megacities (>10 million residents).',
            objectives: [
              'Trace the stages of the Demographic Transition Model.',
              'Interpret population pyramids (expansive, stationary, constrictive).',
              'Identify the push and pull factors driving global rural-urban migration.'
            ],
            keyFormulas: 'Rate of Natural Increase (RNI) = Crude Birth Rate (CBR) - Crude Death Rate (CDR) / 10'
          },
          questions: [
            'Why does a broad-based triangular population pyramid indicate a high youth dependency ratio?',
            'What challenges arise when cities experience rapid urbanization without proportional industrial employment growth?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Demographic Science & Urban Geography</h4>
              <p>• <strong>Demographic Transition Model (DTM):</strong><br>
                - <em>Stage 1:</em> High birth rate, high death rate (fluctuating, stationary population).<br>
                - <em>Stage 2:</em> High birth rate, falling death rate due to sanitation and medicine (rapid population explosion).<br>
                - <em>Stage 3:</em> Falling birth rate, low death rate (slowing growth).<br>
                - <em>Stage 4:</em> Low birth and death rates (stable population).<br>
              • <strong>Population Pyramids:</strong> Expansive (wide base, rapid youth growth typical of developing nations) vs Constrictive (narrow base, aging society typical of developed nations).<br>
              • <strong>Urbanization:</strong> Push factors (rural soil exhaustion, lack of services) and pull factors (educational facilities, healthcare, commercial jobs).</p>
            </div>
          `,
          example: {
            title: 'Calculating Rate of Natural Increase',
            problem: 'A country has a Crude Birth Rate of 36 per 1,000 and a Crude Death Rate of 8 per 1,000. Calculate its annual Rate of Natural Increase (RNI) as a percentage.',
            steps: [
              { label: 'Step 1: Calculate net difference per 1,000', text: '36 - 8 = 28 per 1,000 people.' },
              { label: 'Step 2: Convert to percentage', text: '28 / 10 = <strong>2.8% per year</strong>.' }
            ],
            proTip: 'The Rule of 70 shows that a population growing at 2.8% doubles in 70 / 2.8 = 25 years!'
          },
          reciteFlashcards: [
            { q: 'In which stage of the Demographic Transition Model does death rate decline rapidly while birth rate remains high?', a: 'Stage 2.' },
            { q: 'What is a megacity defined as?', a: 'An urban metropolitan area with a population of over 10 million inhabitants.' }
          ],
          amtQuiz: [
            {
              q: 'A population pyramid with an extremely wide base and a rapidly narrowing top indicates:',
              options: [
                'A rapidly growing population with a high proportion of children and youth',
                'An aging population with declining birth rates',
                'A stationary population with equal birth and death rates',
                'A population in Stage 4 of the demographic transition'
              ],
              correct: 0,
              strategy: 'The base represents young infants and children.',
              derivation: 'A broad base reflects high birth rates and a young demographic age structure, common in Stage 2 of the DTM.',
              trap: 'An aging population has a narrow, constrictive base!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-soc-u3',
      number: 'Unit 3',
      title: 'Modern World History & Industrial Revolution',
      bigIdea: 'Explore the Renaissance, Scientific Revolution, the Industrial Revolution in Britain, and socio-economic shifts.',
      subtopics: [
        {
          id: 'g8-soc-3.1',
          code: '3.1',
          title: 'The Industrial Revolution & Global Transformations',
          survey: {
            blueprint: 'Industrial Revolution began in Britain (~1760): steam engine (James Watt), textile mechanization (Spinning Jenny), coal and iron mining, factory system.',
            objectives: [
              'Explain why the Industrial Revolution began in Great Britain (coal reserves, capital, colonies, naval power).',
              'Describe key technological innovations (steam engine, railway locomotives).',
              'Analyze the societal impacts: rise of the working class, urbanization, child labor, and modern capitalism.'
            ],
            keyFormulas: 'Industrialization = Mechanization + Fossil Fuel Energy (Coal/Steam) + Factory System'
          },
          questions: [
            'How did James Watt’s improved steam engine liberate factories from having to locate alongside rushing rivers?',
            'How did the search for cheap raw materials and captive consumer markets drive 19th-century European imperialism?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Mechanization & The Rise of Industrial Society</h4>
              <p>• <strong>Factors for British Inception:</strong> Rich deposits of coal and iron ore, secure patent laws, merchant capital from overseas trade, and an enclosure movement that created an available labor force.<br>
              • <strong>Key Breakthroughs:</strong><br>
                - James Hargreaves: Spinning Jenny (mechanized yarn production).<br>
                - James Watt: Commercial Steam Engine (provided portable inanimate mechanical power).<br>
                - George Stephenson: Steam Locomotive (revolutionized continental overland transport).<br>
              • <strong>Socio-Economic Impacts:</strong> Rapid growth of industrial cities (Manchester, Birmingham), shift from agrarian handicrafts to automated factories, emergence of labor unions fighting for fair working hours.</p>
            </div>
          `,
          example: {
            title: 'Analyzing the Economic Link between Industrialization and Imperialism',
            problem: 'Explain how industrial mechanization in European textile mills created direct economic pressure to colonize African and Asian territories.',
            steps: [
              { label: 'Step 1: Raw material requirement', text: 'Mills required millions of tons of raw cotton, rubber, and palm oil not grown in Europe.' },
              { label: 'Step 2: Surpluses and consumer markets', text: 'Mechanized factories produced massive surplus goods that needed protected export markets without competition.' },
              { label: 'Step 3: Imperial consequence', text: 'European powers sought direct political control of overseas colonies to secure raw materials and monopolize markets.' }
            ],
            proTip: 'This economic demand was a major trigger for the 1884 Berlin Conference and the Scramble for Africa!'
          },
          reciteFlashcards: [
            { q: 'In which European country did the Industrial Revolution begin in the mid-18th century?', a: 'Great Britain.' },
            { q: 'Who revolutionized industrial machinery by inventing the efficient condenser steam engine?', a: 'James Watt.' }
          ],
          amtQuiz: [
            {
              q: 'Which source of fuel was the primary energy catalyst driving the first Industrial Revolution?',
              options: ['Petroleum oil', 'Coal', 'Nuclear energy', 'Hydroelectric power'],
              correct: 1,
              strategy: 'Identify the early fossil fuel used to fire steam engine boilers and blast furnaces.',
              derivation: 'Coal fueled steam engines and iron smelters, forming the backbone of the British Industrial Revolution.',
              trap: 'Petroleum and electricity powered the later Second Industrial Revolution (late 19th century)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-soc-u4',
      number: 'Unit 4',
      title: 'European Colonialism & Ethiopian Resistance',
      bigIdea: 'Analyze the Scramble for Africa, the 1884-85 Berlin Conference, colonial policies, and Ethiopia\'s glorious victory at Adwa in 1896.',
      subtopics: [
        {
          id: 'g8-soc-4.1',
          code: '4.1',
          title: 'The Scramble for Africa & The Victory of Adwa (1896)',
          survey: {
            blueprint: 'Berlin Conference (1884-85): Partition of Africa without African consent. Treaty of Wuchale (1889) Article XVII controversy. Battle of Adwa (March 1, 1896): Emperor Menelik II & Empress Taytu defeat Italian colonial army.',
            objectives: [
              'Explain the principles of effective occupation established at the Berlin Conference.',
              'Deconstruct the deceptive discrepancy between the Amharic and Italian texts of Article XVII of the Wuchale Treaty.',
              'Analyze the military, diplomatic, and Pan-African significance of the Ethiopian victory at the Battle of Adwa.'
            ],
            keyFormulas: 'Battle of Adwa = March 1, 1896 (Yekatit 23, 1888 E.C.) ➔ Complete routing of colonial invaders'
          },
          questions: [
            'How did the Italian version of Article XVII of the Wuchale Treaty attempt to reduce Ethiopia to a colonial protectorate?',
            'Why did the victory of Adwa become an enduring beacon of freedom for the worldwide Pan-African anti-colonial movement?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Anticolonial Sovereign Triumph & Pan-African Symbol</h4>
              <p>• <strong>The Berlin Conference (1884–85):</strong> Convened by Otto von Bismarck; 14 European nations partitioned Africa into artificial colonies without a single African representative present.<br>
              • <strong>Treaty of Wuchale (May 2, 1889):</strong><br>
                - <em>Amharic Article XVII:</em> Stated that Ethiopia <strong>may</strong> utilize the services of the Italian government for foreign diplomatic communications if she so desires (optional).<br>
                - <em>Italian Article XVII:</em> Deceptively stated that Ethiopia <strong>consents</strong> to conduct all foreign affairs through Rome (compulsory protectorate).<br>
              • <strong>The Battle of Adwa (March 1, 1896):</strong> Rejecting the treaty, Emperor Menelik II mobilized over 100,000 unified Ethiopian patriots from all regions. Advised tactically by Empress Taytu Betul, Ethiopian forces routed General Baratieri’s Italian colonial army, forcing Italy to sign the Treaty of Addis Ababa recognizing full Ethiopian sovereignty.</p>
            </div>
          `,
          example: {
            title: 'Deconstructing the Article XVII Treaty Deception',
            problem: 'Compare the two linguistic versions of Article XVII of the Wuchale Treaty and explain why Emperor Menelik II tore up the agreement.',
            steps: [
              { label: 'Step 1: Amharic linguistic analysis', text: 'The Amharic text used "ይቻላቸዋል" ("it is possible / optional for him"), preserving sovereign choice.' },
              { label: 'Step 2: Italian linguistic analysis', text: 'The Italian text used "consente" ("agrees/obliged"), creating an unlawful Italian protectorate over Ethiopia.' },
              { label: 'Step 3: Royal denunciation', text: 'Upon learning of the fraud, Empress Taytu and Emperor Menelik formally abrogated the treaty and marched north to defend national independence.' }
            ],
            proTip: 'Adwa proved that African armies could defeat European colonial forces, shattering white supremacist colonial dogmas!'
          },
          reciteFlashcards: [
            { q: 'On what date did the decisive Battle of Adwa take place?', a: 'March 1, 1896 (Yekatit 23, 1888 Ethiopian Calendar).' },
            { q: 'Which Italian general commanded the invading troops at Adwa?', a: 'General Oreste Baratieri.' }
          ],
          amtQuiz: [
            {
              q: 'The linguistic dispute that triggered the war between Ethiopia and Italy centered on which article of the 1889 Treaty of Wuchale?',
              options: ['Article V', 'Article XVII (17)', 'Article XXIV (24)', 'Article XII (12)'],
              correct: 1,
              strategy: 'Recall the specific article governing foreign relations and protectorate status.',
              derivation: 'Article XVII contained the deliberate translation discrepancy regarding whether Ethiopia was compelled to conduct foreign relations through Italy.',
              trap: 'Article XVII is universally famous in Ethiopian diplomatic history!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-soc-u5',
      number: 'Unit 5',
      title: 'Global Economic Systems & International Trade',
      bigIdea: 'Study economic ideologies: capitalism, command socialism, and mixed economies, alongside globalization and trade balance.',
      subtopics: [
        {
          id: 'g8-soc-5.1',
          code: '5.1',
          title: 'Economic Systems & Balance of Trade',
          survey: {
            blueprint: 'Three core economic questions: What to produce? How to produce? For whom to produce? Systems: Free Market Capitalism, Planned Command Socialism, Mixed Economy. Balance of Trade = Exports - Imports.',
            objectives: [
              'Compare market economies, command economies, and mixed economies.',
              'Calculate trade balance (favorable trade surplus vs unfavorable trade deficit).',
              'Explain the benefits and risks of globalization and international trade.'
            ],
            keyFormulas: 'Balance of Trade = Total Value of Exports (X) - Total Value of Imports (M)'
          },
          questions: [
            'Why do most modern nations operate as mixed economies rather than pure laissez-faire capitalism or pure command socialism?',
            'What economic danger occurs when a country runs a persistent trade deficit for decades?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Macroeconomic Paradigms & Trade Balances</h4>
              <p>• <strong>Economic Systems:</strong><br>
                - <em>Traditional:</em> Guided by custom, barter, and inheritance.<br>
                - <em>Free Market (Capitalism):</em> Private ownership of means of production, profit motive, price set by supply and demand (Adam Smith\'s "invisible hand").<br>
                - <em>Command (Socialism):</em> State owns key resources; central planning agency decides production quotas and prices.<br>
                - <em>Mixed Economy:</em> Combines private enterprise with government regulation of public utilities, healthcare, and infrastructure (e.g., Ethiopia).<br>
              • <strong>Balance of Trade:</strong><br>
                - <em>Trade Surplus (Favorable):</em> Value of Exports &gt; Value of Imports.<br>
                - <em>Trade Deficit (Unfavorable):</em> Value of Imports &gt; Value of Exports, draining foreign exchange reserves.</p>
            </div>
          `,
          example: {
            title: 'Calculating Balance of Trade',
            problem: 'In a fiscal year, a nation exports agricultural coffee and gold worth $4.5 billion, but imports machinery, fuel, and electronics worth $12.0 billion. Calculate its balance of trade.',
            steps: [
              { label: 'Step 1: State formula', text: 'Balance of Trade = Exports - Imports.' },
              { label: 'Step 2: Substitute values', text: '$4.5 billion - $12.0 billion = <strong>-$7.5 billion</strong>.' },
              { label: 'Step 3: Characterize outcome', text: 'The nation is running a <strong>Trade Deficit of $7.5 billion</strong>.' }
            ],
            proTip: 'To eliminate trade deficits, nations implement import substitution manufacturing and promote value-added exports!'
          },
          reciteFlashcards: [
            { q: 'In which economic system does the central government make all decisions on production and pricing?', a: 'A Command (Planned/Socialist) Economy.' },
            { q: 'What is a trade surplus?', a: 'When the monetary value of a country\'s exports exceeds its imports.' }
          ],
          amtQuiz: [
            {
              q: 'When a nation’s monetary expenditure on imported foreign goods exceeds the revenue earned from its exported goods, it has a:',
              options: ['Trade surplus', 'Trade deficit', 'Balanced budget', 'Zero-sum monopoly'],
              correct: 1,
              strategy: 'Imports > Exports means spending more than earning from trade.',
              derivation: 'A trade deficit occurs when the value of imports is greater than the value of exports.',
              trap: 'A trade surplus is the opposite (Exports > Imports)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-soc-u6',
      number: 'Unit 6',
      title: 'Contemporary Global Challenges',
      bigIdea: 'Examine pressing international challenges: climate change, pandemics, sustainable development goals (SDGs), and international peacekeeping.',
      subtopics: [
        {
          id: 'g8-soc-6.1',
          code: '6.1',
          title: 'Climate Crisis & International Organizations (UN and AU)',
          survey: {
            blueprint: 'Challenges: Global warming (greenhouse effect: CO₂, CH₄), ozone depletion, resource conflicts. Multilateral cooperation: United Nations (UN: General Assembly, Security Council), African Union (AU, headquartered in Addis Ababa).',
            objectives: [
              'Explain the greenhouse effect and main drivers of anthropogenic climate change.',
              'Describe the structure and peacekeeping missions of the United Nations (UN).',
              'Explain the role of the African Union (AU) in continental integration and conflict resolution.'
            ],
            keyFormulas: 'AU Headquarters = Addis Ababa, Ethiopia ("The Diplomatic Capital of Africa")'
          },
          questions: [
            'Why is Addis Ababa widely recognized as the diplomatic capital of the African continent?',
            'What is the difference between climate change mitigation and climate adaptation?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-amber-400">Global Governance & Environmental Security</h4>
              <p>• <strong>Global Warming:</strong> Excessive combustion of fossil fuels releases greenhouse gases (CO₂, methane) that trap infrared radiation in the troposphere, driving global temperature increases, polar ice melting, and erratic weather patterns.<br>
              • <strong>United Nations (UN, founded 1945):</strong> 193 member states dedicated to international peace, security, and human rights. Principal organs include the UN General Assembly and the UN Security Council (5 permanent veto members).<br>
              • <strong>The African Union (AU):</strong> Founded in 2002 as successor to the OAU (Organization of African Unity, 1963). Headquartered in Addis Ababa, Ethiopia. Focuses on Agenda 2063: promoting political integration, economic unity, and resolving armed conflicts through the Peace and Security Council.</p>
            </div>
          `,
          example: {
            title: 'Ethiopia’s Historic Diplomatic Role in African Unity',
            problem: 'Why was Addis Ababa chosen as the permanent headquarters of both the OAU in 1963 and the African Union today?',
            steps: [
              { label: 'Step 1: Sovereign anticolonial symbol', text: 'Ethiopia stood as an uncolonized symbol of sovereign African dignity and freedom throughout the colonial era.' },
              { label: 'Step 2: Leadership in liberation diplomacy', text: 'Emperor Haile Selassie I mediated between the rival Monrovia and Casablanca blocs to forge the OAU charter on May 25, 1963.' },
              { label: 'Step 3: Diplomatic hub', text: 'Addis Ababa remains the third largest diplomatic capital in the world hosting international embassies and the UN-ECA.' }
            ],
            proTip: 'May 25 is celebrated across the globe as Africa Day in honor of the 1963 founding in Addis Ababa!'
          },
          reciteFlashcards: [
            { q: 'In which city is the headquarters of the African Union located?', a: 'Addis Ababa, Ethiopia.' },
            { q: 'What is the primary greenhouse gas released by burning coal and oil?', a: 'Carbon Dioxide (CO₂).' }
          ],
          amtQuiz: [
            {
              q: 'Which principal body of the United Nations is primarily charged with the maintenance of international peace and security?',
              options: ['The International Court of Justice', 'The UN Security Council', 'The Economic and Social Council', 'The Trusteeship Council'],
              correct: 1,
              strategy: 'Recall the UN organ with authority to pass binding resolutions and deploy peacekeeping forces.',
              derivation: 'The UN Security Council has primary responsibility under the UN Charter for maintaining international peace and deploying peacekeepers.',
              trap: 'The General Assembly debates global issues, but binding security actions belong to the Security Council!'
            }
          ]
        }
      ]
    }
  ]
};
