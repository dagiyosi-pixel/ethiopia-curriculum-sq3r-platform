const fs = require('fs');
const path = require('path');

console.log('Enriching Grade 8 Social Studies Units 3-6 to achieve full textbook depth...');

const g8Social = require('../src/curriculum/g8_social.js');

// UNIT 3: Human Intervention in the Eco-System & World Population
g8Social.units[2] = {
  id: 'g8-soc-u3',
  number: 'Unit 3',
  title: 'Human Intervention in the Eco-System & World Population',
  bigIdea: 'Analyze global population dynamics, factors affecting population density, urbanization trends, pollution, and global warming.',
  subtopics: [
    {
      id: 'g8-soc-3.1',
      code: '3.1',
      title: 'World Population Growth, Distribution & Urbanization',
      survey: {
        blueprint: 'Demography: Study of human populations. Global population surpassed 8 billion. Crude Birth Rate (CBR), Crude Death Rate (CDR), Natural Increase = CBR - CDR. Population density = Population / Area (people/km²). Densely populated regions (East Asia, South Asia, Western Europe, Nile Valley) vs Sparsely populated (Sahara, Siberia, Amazon, Australian Outback). Rapid urbanization and growth of megacities.',
        objectives: [
          'Calculate rate of natural population increase given birth and death rates.',
          'Differentiate densely populated areas from sparsely populated areas worldwide.',
          'Identify physical and human factors determining population distribution.',
          'Explain the social, economic, and environmental impacts of rapid rural-to-urban migration.'
        ],
        keyFormulas: 'Natural Increase (%) = [(CBR - CDR) / 1000] × 100% | Population Density = Total Population / Total Land Area (km²)'
      },
      questions: [
        'Why are river valleys and coastal plains densely populated while desert and polar regions remain sparsely populated?',
        'What challenges do rapidly expanding African cities face due to uncontrolled urbanization?'
      ],
      coreNotes: `
        <div class="space-y-4 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-amber-400">👥 1. Demography & Population Growth Metrics</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Crude Birth Rate (CBR):</strong> Annual live births per 1,000 people.<br>
              • <strong>Crude Death Rate (CDR):</strong> Annual deaths per 1,000 people.<br>
              • <strong>Rate of Natural Increase (RNI):</strong> $\text{RNI} = \frac{\text{CBR} - \text{CDR}}{10}$. Developing nations in Sub-Saharan Africa experience high fertility rates, resulting in young, rapidly growing populations.<br>
              • <strong>Population Density:</strong> The average concentration of human beings per square kilometer: $\text{Density} = \frac{\text{Total Population}}{\text{Area in km}^2}$.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-cyan-400">🌍 2. Factors Governing Global Population Distribution</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                <strong class="text-emerald-300">Densely Populated Areas:</strong><br>
                • Favorable temperate/tropical climate with reliable rainfall.<br>
                • Fertile alluvial river basins (Ganges, Yangtze, Nile, Rhine).<br>
                • Flat lowland terrain ideal for intensive farming and transportation.<br>
                • Major industrial and commercial hubs.
              </div>
              <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                <strong class="text-rose-300">Sparsely Populated Areas:</strong><br>
                • Extreme cold polar zones (Antarctica, Greenland, Northern Siberia).<br>
                • Arid deserts (Sahara, Kalahari, Gobi, Australian interior).<br>
                • Rugged high-altitude mountain chains (Himalayas, Andes).<br>
                • Dense tropical rainforests with poor leached soils (Amazon Basin).
              </div>
            </div>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Calculating Population Density',
        problem: 'A country has a total population of 120 million people and a total land area of 1,100,000 km². Calculate its average population density.',
        steps: [
          { label: 'Step 1: Formula', text: 'Population Density = Total Population / Total Land Area' },
          { label: 'Step 2: Substitution', text: 'Density = 120,000,000 people / 1,100,000 km²' },
          { label: 'Step 3: Calculation', text: 'Density = <strong>109.1 people per km²</strong>.' }
        ],
        proTip: 'Population density measures average distribution; it does not reflect the clustering of population in urban centers!'
      },
      reciteFlashcards: [
        { q: 'What is the formula for population density?', a: 'Total Population divided by Total Land Area (people/km²).' },
        { q: 'What are the two components of natural population increase?', a: 'Crude Birth Rate (CBR) minus Crude Death Rate (CDR).' },
        { q: 'Name two major physical factors causing low population density.', a: 'Extreme cold (polar) and severe aridity (deserts).' }
      ],
      amtQuiz: [
        {
          q: 'A region has a Crude Birth Rate of 38 per 1,000 and a Crude Death Rate of 10 per 1,000. What is its annual Rate of Natural Increase?',
          options: ['2.8% per year', '4.8% per year', '28% per year', '0.28% per year'],
          correct: 0,
          strategy: 'Natural increase is (CBR - CDR) / 10 in percentage.',
          derivation: '38 - 10 = 28 per 1,000 = 2.8%.',
          trap: 'Forgetting to divide by 10 to convert per 1,000 to percentage.'
        }
      ]
    },
    {
      id: 'g8-soc-3.2',
      code: '3.2',
      title: 'Human Impact on Ecosystems, Pollution & Global Warming',
      survey: {
        blueprint: 'Human damage to ecosystems: Deforestation, soil degradation, overgrazing, habitat fragmentation. Environmental pollution: Air (sulfur dioxide, carbon monoxide, particulate matter), Water (industrial effluents, untreated sewage, agrochemicals), Soil (pesticides, non-biodegradable plastics). Global warming: Greenhouse gases (CO₂, CH₄, N₂O, CFCs) trapping infrared radiation. Climate consequences: Rising sea levels, desertification in the Sahel, severe droughts in the Horn of Africa.',
        objectives: [
          'Identify primary sources and consequences of air, water, and soil pollution.',
          'Explain the physics of the greenhouse effect and list key greenhouse gases.',
          'Analyze the socio-economic impacts of global climate change on Ethiopian pastoralists and farmers.',
          'Propose sustainable mitigations (afforestation, renewable energy, waste recycling).'
        ],
        keyFormulas: 'Greenhouse Effect: Solar shortwave radiation passes through atmosphere ➔ Earth warms and emits longwave infrared ➔ Absorbed and re-radiated by greenhouse gases (CO₂, CH₄, H₂O vapor).'
      },
      questions: [
        'How does deforestation directly accelerate the rate of global climate change?',
        'What is the difference between natural greenhouse effect and enhanced anthropogenic greenhouse effect?'
      ],
      coreNotes: `
        <div class="space-y-4 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-rose-400">🏭 1. Environmental Pollution</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Air Pollution:</strong> Burning fossil fuels (coal, oil, diesel) releases harmful pollutants: Sulfur Dioxide ($\text{SO}_2$) and Nitrogen Oxides ($\text{NO}_x$) cause <em>acid rain</em>; Carbon Monoxide ($\text{CO}$) reduces oxygen transport in blood; Particulate Matter ($\text{PM}_{2.5}$) triggers severe respiratory ailments.<br>
              • <strong>Water Pollution:</strong> Discharge of untreated industrial chemicals, sewage, and chemical fertilizers into rivers like the Akaki River in Addis Ababa contaminates drinking water, poisons aquatic life, and causes eutrophication.<br>
              • <strong>Soil Pollution:</strong> Excessive agrochemicals and non-biodegradable single-use plastics degrade fertile soils and leach toxins into aquifers.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-amber-400">🌡️ 2. The Enhanced Greenhouse Effect & Global Warming</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Mechanism:</strong> Solar radiation reaches Earth as shortwave light. Earth absorbs this energy and re-emits it as longwave <strong>infrared heat</strong>. Greenhouse gases in the troposphere (Carbon Dioxide $\text{CO}_2$, Methane $\text{CH}_4$, Nitrous Oxide $\text{N}_2\text{O}$) absorb and re-emit this heat back toward the surface, keeping Earth warm enough for life (natural greenhouse effect).<br>
              • <strong>Anthropogenic Enhancement:</strong> Human industrial emissions, coal power generation, vehicular exhaust, and massive deforestation have driven atmospheric $\text{CO}_2$ from 280 ppm to over 420 ppm, trapping excess heat and driving <strong>Global Warming</strong>.<br>
              • <strong>Impacts on Ethiopia:</strong> Recurrent erratic rains, delayed Kiremt seasons, prolonged droughts in Borana and Somali regions, shrinking glaciers on Mount Kilimanjaro and Mount Kenya, and increased malaria spread into highland zones.
            </p>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Explaining the Greenhouse Effect',
        problem: 'Why would planet Earth be completely frozen at an average temperature of -18°C without the natural greenhouse effect?',
        steps: [
          { label: 'Step 1: Role of greenhouse gases', text: 'Naturally occurring atmospheric water vapor, CO₂, and methane absorb outgoing thermal infrared radiation emitted by Earth.' },
          { label: 'Step 2: Heat retention', text: 'These gases radiate heat back to the surface, raising Earth’s global mean surface temperature from -18°C to a habitable +15°C (a 33°C warming).' },
          { label: 'Step 3: Distinguish natural vs enhanced', text: 'The natural greenhouse effect makes life possible; the enhanced greenhouse effect caused by burning fossil fuels leads to dangerous global warming.' }
        ],
        proTip: 'Carbon dioxide (CO₂) is the most abundant human-emitted greenhouse gas, while Methane (CH₄) is ~28 times more potent per molecule!'
      },
      reciteFlashcards: [
        { q: 'What is the principal greenhouse gas emitted by human fossil fuel combustion?', a: 'Carbon dioxide (CO₂).' },
        { q: 'Which atmospheric pollutants cause acid rain?', a: 'Sulfur dioxide (SO₂) and nitrogen oxides (NOx).' },
        { q: 'How does global warming affect rainfall patterns in Ethiopia?', a: 'Causes erratic, unpredictable rains, delayed seasons, and severe droughts.' }
      ],
      amtQuiz: [
        {
          q: 'Which gas is responsible for the largest share of human-induced enhanced greenhouse warming since the Industrial Revolution?',
          options: ['Carbon dioxide (CO₂)', 'Argon (Ar)', 'Oxygen (O₂)', 'Nitrogen (N₂)'],
          correct: 0,
          strategy: 'CO₂ is the primary greenhouse gas produced by burning fossil fuels and deforestation.',
          derivation: 'Carbon dioxide accounts for over 75% of global anthropogenic greenhouse gas emissions.',
          trap: 'Choosing nitrogen or oxygen (which make up 99% of air, but do not absorb infrared radiation).'
        }
      ]
    }
  ]
};

// UNIT 4: World Civilizations & The Industrial Revolution
g8Social.units[3] = {
  id: 'g8-soc-u4',
  number: 'Unit 4',
  title: 'World Civilizations & The Industrial Revolution',
  bigIdea: 'Explore ancient river valley civilizations, the transformative socio-economic impacts of the Industrial Revolution, and emerging economic philosophies.',
  subtopics: [
    {
      id: 'g8-soc-4.1',
      code: '4.1',
      title: 'Ancient World Civilizations: River Valleys & Classical Heritage',
      survey: {
        blueprint: 'Cradle of Civilizations: 1) Mesopotamia (Tigris and Euphrates rivers; Sumerians, cuneiform writing, Code of Hammurabi, wheel). 2) Ancient Egypt (Nile River; Pharaohs, hieroglyphics, pyramids, irrigation). 3) Indus Valley (Indus River; Harappa and Mohenjo-Daro, grid urban planning, drainage). 4) Ancient China (Yellow River / Huang He; silk, paper, gunpowder, compass). 5) Classical Greece (Athens democracy, philosophy: Socrates, Plato, Aristotle) and Rome (republic, Roman law, engineering/aqueducts).',
        objectives: [
          'Locate the four ancient river valley civilizations and explain why early civilizations developed along rivers.',
          'Describe the key cultural and technological contributions of Sumer, Egypt, India, and China.',
          'Explain the political legacies of ancient Greek democracy and the Roman legal system.'
        ],
        keyFormulas: 'Civilization hallmarks = Cities, Central Government, Religion, Social Structure, Writing System, Specialized Labor'
      },
      questions: [
        'Why did the world’s earliest civilizations all originate in fertile river valleys?',
        'How did the Code of Hammurabi establish early legal governance?'
      ],
      coreNotes: `
        <div class="space-y-4 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-amber-400">🏛️ 1. The Four Ancient River Valley Civilizations</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Early civilizations flourished along major rivers due to fertile alluvial soil, annual flooding, freshwater for irrigation, and river navigation:<br>
              • <strong>Mesopotamia ("Land between rivers"):</strong> Located between the Tigris and Euphrates (modern Iraq). Sumerians invented the <strong>wheel</strong>, <strong>cuneiform script</strong> (first writing system), and the 60-second minute / 360-degree circle. King Hammurabi of Babylon codified the famous <em>Code of Hammurabi</em> ("an eye for an eye").<br>
              • <strong>Ancient Egypt:</strong> Centered on the Nile River ("Gift of the Nile"). Ruled by divine Pharaohs; developed <strong>hieroglyphic writing</strong> on papyrus, monumental stone architecture (Pyramids of Giza), and advanced geometry for flood surveying.<br>
              • <strong>Indus Valley Civilization:</strong> Flanking the Indus River (Pakistan/India). Cities like Harappa and Mohenjo-Daro featured advanced grid-pattern city layouts, baked-brick architecture, and underground sewage drainage systems.<br>
              • <strong>Ancient China:</strong> Emerged along the Huang He (Yellow River) and Yangtze. Developed silk weaving, paper making, block printing, gunpowder, and the magnetic compass.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-cyan-400">🏛️ 2. Classical Greece & Rome</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Ancient Greece:</strong> City-state of Athens pioneered <strong>direct democracy</strong> (rule by citizens). Flowering of philosophy (Socrates, Plato, Aristotle), mathematics (Pythagoras, Euclid), literature, and the Olympic Games.<br>
              • <strong>Ancient Rome:</strong> Established a Republic with a Senate, later expanding into a Mediterranean empire. Key legacies include <strong>Roman Law</strong> (principles of innocence until proven guilty, written statutes), Latin language (basis of Romance languages), and structural engineering (concrete, arches, aqueducts, Colosseum).
            </p>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: The Gift of the Nile',
        problem: 'Why did the Greek historian Herodotus refer to Egypt as the "Gift of the Nile"?',
        steps: [
          { label: 'Step 1: Geographic setting', text: 'Egypt is located in the hyper-arid Sahara desert, where rain is virtually nonexistent.' },
          { label: 'Step 2: Role of the Nile flood', text: 'The Blue Nile originates in the Ethiopian highlands, carrying rich volcanic silt during the Kiremt season that inundated Egyptian fields annually.' },
          { label: 'Step 3: Conclusion', text: 'Without the silt and water from the Ethiopian highlands, Egyptian civilization could not have sustained agriculture or formed an empire.' }
        ],
        proTip: 'Remember: Over 85% of the Nile’s water and silt originating during the annual flood comes directly from the Ethiopian highlands!'
      },
      reciteFlashcards: [
        { q: 'What was the earliest known writing system, invented by the Sumerians?', a: 'Cuneiform.' },
        { q: 'Which civilization developed advanced grid-pattern cities with underground drainage?', a: 'Indus Valley Civilization (Harappa & Mohenjo-Daro).' },
        { q: 'What Greek city-state is recognized as the birthplace of democracy?', a: 'Athens.' }
      ],
      amtQuiz: [
        {
          q: 'The ancient legal code that established the principle of Lex Talionis ("an eye for an eye, a tooth for a tooth") inscribed on a stone stele was created by which Mesopotamian king?',
          options: ['King Hammurabi of Babylon', 'Pharaoh Tutankhamun', 'Alexander the Great', 'Emperor Julius Caesar'],
          correct: 0,
          strategy: 'The Code of Hammurabi is the famous Babylonian legal code.',
          derivation: 'Hammurabi, the 6th king of the First Babylonian Dynasty, enacted the Code of Hammurabi around 1750 BCE.',
          trap: 'Confusing Babylonian laws with Egyptian Pharaoh decrees.'
        }
      ]
    },
    {
      id: 'g8-soc-4.2',
      code: '4.2',
      title: 'The Industrial Revolution & Socio-Economic Changes',
      survey: {
        blueprint: 'Industrial Revolution began in Britain (mid-18th century). Factors: Coal & iron deposits, capital from colonial trade, naval supremacy, agricultural revolution, scientific innovation. Key inventions: James Watt’s Steam Engine, Spinning Jenny, Power Loom, Steam Locomotive. Transformation from domestic cottage craft to factory system. Impacts: Rapid urbanization, child labor, emergence of industrial bourgeoisie and working class (proletariat). Emergence of Capitalism (Adam Smith) vs Socialism/Marxism (Karl Marx & Friedrich Engels).',
        objectives: [
          'Explain why Britain was the cradle of the Industrial Revolution.',
          'Identify key technological breakthroughs: steam engine, textile machinery, railways.',
          'Evaluate positive and negative socio-economic consequences of industrialization.',
          'Contrast Capitalism (free market, private ownership) with Socialism (collective ownership, planned economy).'
        ],
        keyFormulas: 'Industrial Revolution = Shift from human/animal labor to machine power driven by steam and coal'
      },
      questions: [
        'How did James Watt’s improved steam engine revolutionize manufacturing and transportation?',
        'What were the core differences between Adam Smith’s capitalism and Karl Marx’s socialism?'
      ],
      coreNotes: `
        <div class="space-y-4 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-amber-400">⚙️ 1. Inventions and the Factory System</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Origin:</strong> Began in Great Britain around 1750, transforming agrarian societies into mechanized industrial powerhouses.<br>
              • <strong>Textile Mechanization:</strong> John Kay’s Flying Shuttle (1733), James Hargreaves’ Spinning Jenny (1764), Richard Arkwright’s Water Frame, and Edmund Cartwright’s Power Loom allowed massive automated cloth production.<br>
              • <strong>James Watt’s Steam Engine (1769):</strong> Adapted steam power to drive rotary factory machinery and locomotives, freeing manufacturing from river banks to coal-rich areas.<br>
              • <strong>Transportation Revolution:</strong> George Stephenson’s steam locomotive (1814) and Robert Fulton’s steamship drastically lowered shipping costs and unified world markets.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-cyan-400">⚖️ 2. Capitalism vs Socialism</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                <strong class="text-emerald-300">Capitalism (Adam Smith - 1776):</strong><br>
                • Private ownership of the means of production.<br>
                • Free-market competition governed by supply and demand (<em>Laissez-faire</em>: minimal government intervention).<br>
                • Profit motive drives efficiency and innovation.
              </div>
              <div class="p-3 bg-space-950 rounded-lg border border-slate-850">
                <strong class="text-rose-300">Socialism (Karl Marx & Engels - 1848):</strong><br>
                • Critique of capitalist exploitation of the working class (proletariat).<br>
                • Means of production owned socially/collectively by the workers/state.<br>
                • Wealth distributed based on need to abolish class inequality.
              </div>
            </div>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Impact of the Steam Engine',
        problem: 'Explain how the invention of the steam engine directly triggered the Scramble for Africa in the late 19th century.',
        steps: [
          { label: 'Step 1: Industrial demand for raw materials', text: 'Steam-driven factories consumed enormous amounts of raw materials (cotton, rubber, iron ore, copper, oil) that Europe lacked.' },
          { label: 'Step 2: Overproduction and market search', text: 'Mechanized manufacturing produced more consumer goods than European domestic markets could buy, requiring captive export markets.' },
          { label: 'Step 3: Strategic colonization', text: 'European powers invaded and partitioned Africa to secure exclusive control of these resources and markets.' }
        ],
        proTip: 'The Industrial Revolution directly provided the economic motivation (raw materials, markets) and the military means (Maxim guns, steam gunboats) for European colonialism!'
      },
      reciteFlashcards: [
        { q: 'In which country did the Industrial Revolution begin?', a: 'Great Britain (around 1750).' },
        { q: 'Who perfected the practical rotary steam engine in 1769?', a: 'James Watt.' },
        { q: 'What economic philosophy advocated for private ownership and free markets (laissez-faire)?', a: 'Capitalism (formulated by Adam Smith).' }
      ],
      amtQuiz: [
        {
          q: 'Which breakthrough invention provided reliable mechanical power that drove textile factories, coal mines, and railway locomotives during the Industrial Revolution?',
          options: ['James Watt’s Steam Engine', 'The Electric Telegraph', 'The Internal Combustion Engine', 'The Atomic Reactor'],
          correct: 0,
          strategy: 'James Watt perfected the steam engine in 1769, powering the first industrial phase.',
          derivation: 'Watt’s rotary steam engine converted coal thermal energy into mechanical power, transforming factories and transportation.',
          trap: 'Choosing the internal combustion engine (which came later in the Second Industrial Revolution).'
        }
      ]
    }
  ]
};

// UNIT 5: European Colonialism & African Resistance
g8Social.units[4] = {
  id: 'g8-soc-u5',
  number: 'Unit 5',
  title: 'European Colonialism & African Resistance',
  bigIdea: 'Analyze the Scramble for Africa, the Berlin Conference, colonial administrative systems, African anti-colonial resistance, and the decisive victory of Adwa.',
  subtopics: [
    {
      id: 'g8-soc-5.1',
      code: '5.1',
      title: 'The Scramble for Africa & The Berlin Conference (1884–1885)',
      survey: {
        blueprint: 'Scramble for Africa (1880s-1914): European imperialist rush to colonize Africa. Causes: Economic (raw materials, markets, investment capital), Strategic (Suez Canal, trade routes), Ideological/Racist ("Civilizing Mission", White Man’s Burden, Social Darwinism). Berlin Conference (1884–1885): Convened by German Chancellor Otto von Bismarck; attended by 14 European powers (zero Africans invited). Established "Effective Occupation" rule. Partition of Africa: By 1914, all of Africa colonized except Ethiopia and Liberia.',
        objectives: [
          'Analyze the economic, political, and ideological causes of European colonialism in Africa.',
          'Explain the decisions and consequences of the Berlin Conference (1884–1885).',
          'Describe the principle of "Effective Occupation" established at Berlin.',
          'Identify the only two African countries that successfully maintained independence.'
        ],
        keyFormulas: 'Berlin Conference Principle: "Effective Occupation" required physical presence, treaties with local chiefs, and administrative control to claim territory'
      },
      questions: [
        'Why was not a single African leader or representative invited to the Berlin Conference?',
        'What was the principle of "Effective Occupation" established at the Berlin Conference?'
      ],
      coreNotes: `
        <div class="space-y-4 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-amber-400">🌍 1. Causes of the Scramble for Africa</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Between 1884 and 1914, European powers partitioned 90% of the African continent into colonial territories:<br>
              • <strong>Economic Impetus:</strong> European industries required vital raw materials (rubber, palm oil, cotton, copper, tin, gold, ivory) and guaranteed export markets for surplus industrial manufactures.<br>
              • <strong>Strategic Rivalry:</strong> Competition between Britain, France, Germany, Belgium, Italy, and Portugal to control vital waterways (e.g., Britain securing the Suez Canal in Egypt and the Cape route in South Africa).<br>
              • <strong>Racist Ideologies:</strong> European imperialists masked their conquest under the paternalistic excuse of the "Civilizing Mission" (<em>Mission Civilisatrice</em>) and Social Darwinism, falsely claiming moral superiority over Africans.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-cyan-400">📜 2. The Berlin Conference (1884–1885)</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Host:</strong> German Chancellor <strong>Otto von Bismarck</strong> convened 14 European nations and the United States in Berlin (November 1884 – February 1885). <strong>Not a single African was invited</strong> or consulted.<br>
              • <strong>Key Outcomes:</strong><br>
              - Recognized King Leopold II’s personal ownership of the <em>Congo Free State</em> (which led to catastrophic atrocities).<br>
              - Freedom of navigation on the Congo and Niger rivers.<br>
              - <strong>Doctrine of "Effective Occupation":</strong> A European power could only claim sovereignty over an African region if it possessed physical administrative presence, military garrisons, and treaties signed with local rulers.<br>
              - Arbitrary boundaries were drawn across ethnic, linguistic, and historical frontiers, sowing long-term seeds of post-colonial conflict.
            </p>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: The Arbitrary Partition of Africa',
        problem: 'How did the borders drawn at the Berlin Conference create lasting political instability in modern Africa?',
        steps: [
          { label: 'Step 1: Disregard for African demographics', text: 'European diplomats used geometric straight lines and rivers to partition Africa without regard to established ethnic, linguistic, or cultural boundaries.' },
          { label: 'Step 2: Splitting coherent nations', text: 'Homogeneous communities (such as the Somali, Maasai, and Yoruba) were arbitrarily partitioned across multiple colonial states.' },
          { label: 'Step 3: Combining hostile groups', text: 'Conversely, rival historical groups were enclosed into single artificial colonies (such as Nigeria and Sudan), fueling post-independence civil conflicts.' }
        ],
        proTip: 'Ethiopia and Liberia were the ONLY two African nations that remained uncolonized by European powers in 1914!'
      },
      reciteFlashcards: [
        { q: 'Who hosted the Berlin Conference of 1884–1885?', a: 'German Chancellor Otto von Bismarck.' },
        { q: 'What two African countries preserved their independence throughout the Scramble for Africa?', a: 'Ethiopia and Liberia.' },
        { q: 'What was the principle of "Effective Occupation"?', a: 'European powers had to establish actual physical administration and troops on the ground to claim an African territory.' }
      ],
      amtQuiz: [
        {
          q: 'Which European leader chaired the Berlin Conference of 1884–1885 that established the legal framework for the partition of the African continent?',
          options: ['Otto von Bismarck of Germany', 'King Leopold II of Belgium', 'Queen Victoria of Great Britain', 'Napoleon Bonaparte of France'],
          correct: 0,
          strategy: 'Otto von Bismarck convened the conference in Berlin.',
          derivation: 'German Chancellor Otto von Bismarck called the conference in Berlin to regulate European colonization and trade in Africa.',
          trap: 'Choosing King Leopold II (who profited enormously from the Congo, but did not chair the conference).'
        }
      ]
    },
    {
      id: 'g8-soc-5.2',
      code: '5.2',
      title: 'Colonial Administrative Policies & The Epic Battle of Adwa (1896)',
      survey: {
        blueprint: 'Colonial Administrative Policies: 1) British Indirect Rule (Lord Lugard; ruling through traditional chiefs, e.g., Nigeria, Uganda, Ghana). 2) French Direct Rule & Assimilation (Evolués; turning Africans into French cultural citizens; centralized). 3) Portuguese and Belgian paternalism/exploitation (forced labor, rubber extraction). African resistance: Samori Ture (Mandinka Empire), Maji Maji (Tanzania), Ashanti Wars (Ghana). The Battle of Adwa (March 1, 1896): Emperor Menelik II, Empress Taytu Betul; complete defeat of General Baratieri’s Italian invading army. Treaty of Addis Ababa (October 1896) recognized Ethiopia’s absolute sovereignty. Adwa as global symbol of Black dignity and Pan-Africanism.',
        objectives: [
          'Contrast British Indirect Rule with French Assimilation policies.',
          'Trace the deception of Article XVII of the Treaty of Wuchale (1889).',
          'Describe the mobilization, tactics, and historic outcome of the Battle of Adwa (March 1, 1896).',
          'Explain the global significance of the Victory of Adwa for Pan-Africanism and Black liberation.'
        ],
        keyFormulas: 'Treaty of Wuchale (1889) Article XVII: Amharic text made Italian diplomatic assistance optional; Italian text falsely made Ethiopia a protectorate of Italy'
      },
      questions: [
        'How did Empress Taytu Betul influence Emperor Menelik II’s resistance against Italian imperialism?',
        'Why does the Victory of Adwa hold immense symbolic value for the worldwide Pan-African movement?'
      ],
      coreNotes: `
        <div class="space-y-4 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-amber-400">📜 1. The Fraudulent Treaty of Wuchale (1889)</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Signed on May 2, 1889 between Emperor Menelik II and Count Pietro Antonelli:<br>
              • <strong>Article XVII Discrepancy:</strong><br>
              - <em>Amharic Text:</em> Ethiopia <strong>could</strong> utilize the Italian government for diplomatic communications with European powers if it chose to do so (optional assistance).<br>
              - <em>Italian Text:</em> Ethiopia <strong>was obliged</strong> to conduct all foreign affairs through Rome, effectively reducing Ethiopia to an Italian protectorate!<br>
              • <strong>Abrogation:</strong> When Menelik discovered the colonial deception, he formally rejected Italy’s protectorate claim. <strong>Empress Taytu Betul</strong> famously declared: <em>"I am a woman, I do not like war. But I would rather die than accept your treaty. You wish Ethiopia to be represented before the other powers as your protectorate, but this shall never be!"</em> Menelik officially abrogated the treaty in February 1893.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-emerald-400">⚔️ 2. The Battle of Adwa (March 1, 1896)</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Mobilization:</strong> Menelik issued a nationwide mobilization proclamation in September 1895. Over 100,000 patriotic warriors from across Ethiopia (Oromo, Amhara, Tigray, Gurage, Wolayta, Sidama, Afar) marched over 1,000 km northward to Tigray.<br>
              • <strong>Strategic Brilliance:</strong> At the Siege of Mekelle (January 1896), Empress Taytu cut off the Italian fort’s water supply, forcing Italian commander Major Galliano to surrender.<br>
              • <strong>The Decisive Clash:</strong> On <strong>Sunday, March 1, 1896 (Yekatit 23, 1888 E.C.)</strong>, General Oreste Baratieri ordered 17,700 well-armed Italian and colonial Askari troops to attack Ethiopian positions in the rugged mountains of Adwa. Ethiopian commanders (Ras Makonnen, Ras Alula Aba Nega, Ras Mengesha, Ras Mikael with his cavalry, Dejazmach Balcha Safo with artillery) encircled and annihilated the Italian brigades.<br>
              • <strong>Aftermath & Global Impact:</strong> Over 5,000 Italian troops were killed and 2,000 captured. Italy signed the <strong>Treaty of Addis Ababa (October 26, 1896)</strong>, nullifying the Treaty of Wuchale and unconditionally recognizing Ethiopia’s full sovereignty. Adwa shattered the myth of European white supremacy, serving as the beacon of hope for anti-colonial movements across Africa and the African Diaspora (Pan-Africanism).
            </p>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Significance of Adwa',
        problem: 'Name three direct international consequences of the Ethiopian victory at the Battle of Adwa in 1896.',
        steps: [
          { label: 'Consequence 1: Unconditional Sovereignty', text: 'Italy was forced to sign the Treaty of Addis Ababa, revoking the Treaty of Wuchale and recognizing Ethiopia as an independent sovereign empire.' },
          { label: 'Consequence 2: Diplomatic Recognition', text: 'Major world powers (Britain, France, Russia, USA, Germany) established permanent embassies and legations in Addis Ababa.' },
          { label: 'Consequence 3: Pan-African Inspiration', text: 'Adwa became the spiritual fountainhead of the Pan-African movement; newly independent African nations adopted the Ethiopian tricolor (Green, Yellow, Red) for their national flags.' }
        ],
        proTip: 'The Ethiopian flag colors (Green, Yellow, Red) became the official Pan-African colors because Ethiopia remained the lone unbowed fortress of African freedom!'
      },
      reciteFlashcards: [
        { q: 'On what exact date was the historic Battle of Adwa fought?', a: 'March 1, 1896 (Yekatit 23, 1888 E.C.).' },
        { q: 'Which article of the Treaty of Wuchale contained the deceptive protectorate clause?', a: 'Article XVII (17).' },
        { q: 'Which Ethiopian military commander famously cut off the water supply during the Siege of Mekelle?', a: 'Empress Taytu Betul.' }
      ],
      amtQuiz: [
        {
          q: 'Which historic international treaty, signed on October 26, 1896, forced Italy to unconditionally abrogate the fraudulent Treaty of Wuchale and recognize Ethiopia’s full sovereignty?',
          options: ['The Treaty of Addis Ababa (1896)', 'The Treaty of Versailles', 'The Berlin Act', 'The Treaty of London'],
          correct: 0,
          strategy: 'Following Adwa, the peace treaty was signed in Addis Ababa.',
          derivation: 'Following the crushing defeat of Italian forces at Adwa, Italy signed the Treaty of Addis Ababa on October 26, 1896, recognizing Ethiopian independence.',
          trap: 'Confusing the Treaty of Addis Ababa (1896) with the Treaty of Wuchale (1889).'
        }
      ]
    }
  ]
};

// UNIT 6: Public Agenda, Regional Organizations & Contemporary Global Issues
g8Social.units[5] = {
  id: 'g8-soc-u6',
  number: 'Unit 6',
  title: 'Public Agenda, Regional Organizations & Contemporary Global Issues',
  bigIdea: 'Analyze crucial public agendas (combating HIV/AIDS, population policy, gender equity), regional integration (AU, IGAD), and multilateral diplomacy (UN).',
  subtopics: [
    {
      id: 'g8-soc-6.1',
      code: '6.1',
      title: 'Public Agenda: Combating HIV/AIDS, Population Policy & Gender Equity',
      survey: {
        blueprint: 'Public Agenda: Issues of vital public concern requiring concerted collective action. Combating HIV/AIDS: Transmission (blood, sexual contact, mother-to-child), prevention (Abstinence, Being faithful, Condom use - ABC; Antiretroviral therapy ART; combating stigma). National Population Policy of Ethiopia: Balancing population growth with economic development, expanding reproductive health. Gender equity: Overcoming Harmful Traditional Practices (HTPs: female genital mutilation FGM, early forced marriage, abduction); empowering girls in education and leadership.',
        objectives: [
          'Describe the biological and social impacts of HIV/AIDS and methods of prevention and care.',
          'Explain the goals of the National Population Policy of Ethiopia.',
          'Analyze harmful traditional practices (early marriage, FGM) and strategies for promoting gender equity.'
        ],
        keyFormulas: 'Gender Equity = Fairness of treatment for women and men according to their respective needs'
      },
      questions: [
        'How does early child marriage violate human rights and hinder economic development?',
        'What role do youth play in eradicating harmful traditional practices (HTPs) in Ethiopian communities?'
      ],
      coreNotes: `
        <div class="space-y-4 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-amber-400">🎗️ 1. Combating HIV/AIDS and Stigma</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>HIV (Human Immunodeficiency Virus):</strong> Attacks the immune system (specifically CD4 T-cells), leading to AIDS (Acquired Immunodeficiency Syndrome).<br>
              • <strong>Transmission Modes:</strong> Unprotected sexual intercourse with an infected partner, transfusion of contaminated blood, use of unsterilized sharp instruments/needles, and mother-to-child transmission during pregnancy, childbirth, or breastfeeding.<br>
              • <strong>Prevention & Care:</strong> Voluntary counseling and testing (VCT), widespread availability of free Antiretroviral Therapy (ART) that suppresses viral load, and eradicating social stigma and discrimination against people living with HIV.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-cyan-400">⚖️ 2. Harmful Traditional Practices (HTPs) & Gender Equity</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Harmful Traditional Practices:</strong> Cultural customs that cause physical, psychological, and economic harm, predominantly targeting girls and women:<br>
              - <em>Early and Forced Marriage:</em> Deprives young girls of education, damages physical health through obstructed labor and obstetric fistula, and perpetuates generational poverty.<br>
              - <em>Female Genital Mutilation (FGM):</em> Severe violation of bodily integrity causing hemorrhage, infection, shock, and complications during childbirth.<br>
              • <strong>Gender Equity Interventions:</strong> Strict legal enforcement of the revised Family Code (minimum marriage age = 18 years for both sexes), affirmative action in higher education, microfinance credit for female entrepreneurs, and community awareness campaigns.
            </p>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Legal Minimum Age of Marriage',
        problem: 'What is the legally established minimum age of marriage in Ethiopia under the Revised Family Code, and why was it enacted?',
        steps: [
          { label: 'Step 1: State legal age', text: 'The legal minimum age of marriage for both males and females is <strong>18 years</strong>.' },
          { label: 'Step 2: Societal justification', text: 'At age 18, individuals reach full physical, mental, and emotional maturity, are legally recognized as adults, and have the capability to complete secondary education.' },
          { label: 'Step 3: Human rights protection', text: 'This law protects girls from early pregnancy, fistula complications, and loss of educational opportunities.' }
        ],
        proTip: 'The Revised Family Code establishes equal rights for both spouses during marriage, throughout marriage, and upon divorce!'
      },
      reciteFlashcards: [
        { q: 'What is the legally mandated minimum age of marriage in Ethiopia for both boys and girls?', a: '18 years of age.' },
        { q: 'What does ART stand for in the medical management of HIV?', a: 'Antiretroviral Therapy.' },
        { q: 'Name two Harmful Traditional Practices (HTPs) prohibited by Ethiopian law.', a: 'Early forced child marriage and Female Genital Mutilation (FGM).' }
      ],
      amtQuiz: [
        {
          q: 'Under the Ethiopian Revised Family Code, what is the legally prescribed minimum age for entering into marriage for both women and men?',
          options: ['18 years', '15 years', '16 years', '21 years'],
          correct: 0,
          strategy: 'The Revised Family Code sets the minimum marriage age at 18.',
          derivation: 'Article 7 of the Revised Family Code of Ethiopia establishes that marriage cannot be contracted between persons who have not attained the full age of 18 years.',
          trap: 'Choosing 15 or 16 based on outdated customs.'
        }
      ]
    },
    {
      id: 'g8-soc-6.2',
      code: '6.2',
      title: 'Regional & Global Organizations: AU, IGAD & The United Nations',
      survey: {
        blueprint: 'African Union (AU): Founded as OAU in Addis Ababa (May 25, 1963) by 32 independent African states led by Emperor Haile Selassie I; transformed into AU in 2002 (Durban). Permanent Headquarters: Addis Ababa (Africa Hall / AU Conference Center). Objectives: Pan-African unity, peace, economic integration (AfCFTA). Intergovernmental Authority on Development (IGAD): 8 Horn of Africa nations (Djibouti HQ); drought control, peace in South Sudan/Somalia. United Nations (UN): Founded in 1945 in San Francisco; 6 principal organs; Ethiopia is an original founding member and premier global peacekeeping contributor.',
        objectives: [
          'Trace the evolution of the Organization of African Unity (OAU, 1963) into the African Union (AU, 2002).',
          'Explain why Addis Ababa is known as the Diplomatic Capital of Africa.',
          'Describe the founding, structure, and peacekeeping role of Ethiopia in the United Nations.'
        ],
        keyFormulas: 'OAU founded: May 25, 1963 (Africa Day) | AU launched: 2002 | Permanent Headquarters = Addis Ababa, Ethiopia'
      },
      questions: [
        'Why was Addis Ababa chosen as the permanent headquarters of the Organization of African Unity in 1963?',
        'What are the primary objectives of the African Continental Free Trade Area (AfCFTA)?'
      ],
      coreNotes: `
        <div class="space-y-4 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-amber-400">🏛️ 1. The African Union (AU) & Addis Ababa</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>Founding of the OAU (May 25, 1963):</strong> 32 sovereign African heads of state gathered in Addis Ababa, hosted by Emperor Haile Selassie I. The <strong>Organization of African Unity (OAU)</strong> was established to eradicate all remaining vestiges of European colonialism and apartheid, and promote solidarity across Africa.<br>
              • <strong>Transformation into the AU (2002):</strong> Re-launched in Durban, South Africa, shifting emphasis toward continental economic integration, democratic governance, and conflict resolution (African Peace and Security Architecture).<br>
              • <strong>Diplomatic Capital of Africa:</strong> Addis Ababa permanently hosts the headquarters of both the <strong>African Union</strong> and the <strong>United Nations Economic Commission for Africa (UNECA)</strong>.<br>
              • <strong>AfCFTA:</strong> The African Continental Free Trade Area creates a single continent-wide market for goods and services to spur industrialization and intra-African trade.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-cyan-400">🇺🇳 2. IGAD and Ethiopia in the United Nations</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              • <strong>IGAD (Intergovernmental Authority on Development):</strong> Regional economic community in the Horn of Africa (Djibouti, Ethiopia, Eritrea, Kenya, Somalia, South Sudan, Sudan, Uganda) focused on drought resilience, food security, and mediating regional peace agreements.<br>
              • <strong>The United Nations (UN):</strong> Founded in <strong>1945</strong> following WWII. Ethiopia was one of only 4 African nations among the 51 original founding signatories of the UN Charter.<br>
              • <strong>Ethiopian Peacekeeping Prestige:</strong> Ethiopia has deployed tens of thousands of professional peacekeepers under UN mandates across the globe (Korea in 1951, Congo, Rwanda, Burundi, Liberia, Darfur, Abyei), building an international reputation for discipline and neutrality.
            </p>
          </div>
        </div>
      `,
      example: {
        title: 'Worked Example: Ethiopia’s Diplomatic Status',
        problem: 'Explain why Addis Ababa ranks alongside New York, Geneva, and Brussels as a premier diplomatic hub of the world.',
        steps: [
          { label: 'Step 1: Continental headquarters', text: 'Addis Ababa is the permanent seat of the 55-member African Union (AU).' },
          { label: 'Step 2: UN continental presence', text: 'It hosts the United Nations Economic Commission for Africa (UNECA) at Africa Hall.' },
          { label: 'Step 3: Diplomatic corps', text: 'Over 130 international embassies, missions, and multilateral agencies maintain permanent resident delegations in Addis Ababa.' }
        ],
        proTip: 'May 25 is celebrated annually worldwide as "Africa Day" to commemorate the 1963 founding of the OAU in Addis Ababa!'
      },
      reciteFlashcards: [
        { q: 'In what year and city was the Organization of African Unity (OAU) founded?', a: 'May 25, 1963 in Addis Ababa, Ethiopia.' },
        { q: 'What is the main headquarters of the African Union (AU)?', a: 'Addis Ababa, Ethiopia.' },
        { q: 'Where are the headquarters of IGAD located?', a: 'Djibouti City, Djibouti.' }
      ],
      amtQuiz: [
        {
          q: 'On May 25, 1963, 32 independent African nations met in Addis Ababa, Ethiopia to establish which historic continental organization?',
          options: ['The Organization of African Unity (OAU)', 'The League of Nations', 'The Commonwealth of Nations', 'The Arab League'],
          correct: 0,
          strategy: 'May 25, 1963 marks the founding of the OAU (now AU) in Addis Ababa.',
          derivation: 'The OAU was founded in Addis Ababa on May 25, 1963, a date commemorated globally as Africa Day.',
          trap: 'Confusing the OAU with the League of Nations.'
        }
      ]
    }
  ]
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_social.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8Social, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched Grade 8 Social Studies: all 6 Units now have 2-7 complete subtopics with deep notes and AMT questions!');
