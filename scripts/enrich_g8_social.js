const fs = require('fs');
const path = require('path');

const g8Soc = require('../src/curriculum/g8_social.js');

// =========================================================================
// UNIT 1: The World We Live In - Continents & Oceans
// =========================================================================

// 1.1 The Seven Continents: Locations, Sizes & Extremes
g8Soc.units[0].subtopics[0].amtQuiz = [
  {
    q: "Which of the following correctly lists the world's seven continents in descending order of land surface area?",
    options: [
      "Asia > Africa > North America > South America > Antarctica > Europe > Australia",
      "Africa > Asia > North America > South America > Europe > Antarctica > Australia",
      "Asia > North America > Africa > Antarctica > South America > Europe > Australia",
      "Asia > Africa > South America > North America > Europe > Antarctica > Australia"
    ],
    correct: 0,
    strategy: "Recall the continental area ranking: Asia (~44.6M km²) is largest, followed by Africa (~30.3M km²), while Australia (~8.5M km²) is smallest.",
    derivation: "Continents cover 29% of Earth's crust. Asia accounts for ~30% of total land area, Africa ~20%, North America ~16%, South America ~12%, Antarctica ~9.5%, Europe ~7%, and Australia ~5.8%.",
    trap: "Confusing the order of North America and South America, or placing Europe above Antarctica in size."
  },
  {
    q: "What narrow physical land bridge connects the continents of North America and South America?",
    options: [
      "Isthmus of Panama",
      "Isthmus of Suez",
      "Strait of Gibraltar",
      "Sinai Peninsula"
    ],
    correct: 0,
    strategy: "Identify the geographical isthmus linking the Americas versus the one linking Africa and Asia.",
    derivation: "The Isthmus of Panama is the narrow strip of land that connects North and South America and separates the Atlantic and Pacific Oceans. The Isthmus of Suez links Africa and Asia.",
    trap: "Confusing the Isthmus of Panama with the Isthmus of Suez (which joins Africa and Asia)."
  },
  {
    q: "How does the elevation extreme of Ethiopia's Danakil Depression compare to the lowest continental point on Earth?",
    options: [
      "The Danakil Depression is at -125 m below sea level, whereas the lowest continental point on Earth is the Dead Sea shoreline at -430 m",
      "The Danakil Depression is the lowest point on Earth at -8,848 m",
      "The Dead Sea is above sea level (+430 m) while Danakil is below sea level (-125 m)",
      "Both the Danakil Depression and the Dead Sea have the exact same elevation of -500 m"
    ],
    correct: 0,
    strategy: "Compare local relief records in Ethiopia with global elevation records.",
    derivation: "The lowest continental land point on Earth is the Dead Sea shoreline (Jordan/Palestine rift depression) at approximately -430 meters below sea level. In Ethiopia, the lowest point is the Danakil (Dallol) Depression in the Afar Triangle at approximately -125 meters.",
    trap: "Assuming Danakil is the absolute lowest point on Earth rather than the lowest point in Ethiopia."
  }
];

// 1.2 The Five Oceans and Global Drainage Systems
g8Soc.units[0].subtopics[1].amtQuiz = [
  {
    q: "Which of the world's oceans is the largest and deepest, covering more area than all the continents combined?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean"
    ],
    correct: 0,
    strategy: "Recall the relative sizes of the five oceans: Pacific > Atlantic > Indian > Southern > Arctic.",
    derivation: "The Pacific Ocean covers over 165 million km² (more than a third of the Earth's surface) and contains the Mariana Trench (Challenger Deep, ~11,034 m), the deepest point on Earth.",
    trap: "Selecting the Atlantic Ocean, which is the second largest and the busiest maritime shipping corridor."
  },
  {
    q: "Why is the drainage basin of the Amazon River recognized as the greatest hydrological discharge system in the world?",
    options: [
      "It discharges more water into the ocean than the next seven largest rivers combined",
      "It is the shortest river in South America",
      "It flows entirely through arid desert regions without tributaries",
      "It originates in the Ethiopian Highlands and drains into the Red Sea"
    ],
    correct: 0,
    strategy: "Distinguish between river length and water volume/discharge.",
    derivation: "While the Nile River is historically the longest river (~6,650 km), the Amazon River carries the greatest volume of fresh water (average discharge ~209,000 m³/s), draining approximately 7 million km² of tropical rainforest.",
    trap: "Confusing greatest river length (Nile) with greatest river volume and discharge (Amazon)."
  },
  {
    q: "Into which major body of water does the Blue Nile (Abay River) ultimately drain after uniting with the White Nile?",
    options: [
      "The Mediterranean Sea",
      "The Indian Ocean",
      "The Red Sea",
      "The Atlantic Ocean"
    ],
    correct: 0,
    strategy: "Trace the course of the Nile drainage basin from Lake Tana to its final marine outlet.",
    derivation: "The Abay (Blue Nile) originates from the Ethiopian Highlands at Lake Tana, flows into Sudan to join the White Nile at Khartoum, and the main Nile then flows northward through Egypt to discharge into the Mediterranean Sea.",
    trap: "Assuming the Nile empties into the Red Sea because of eastern geographical proximity."
  }
];

// =========================================================================
// UNIT 2: Geological Processes: Volcanism & Earthquakes
// =========================================================================

// 2.1 Faulting, The Rift Valley & Fumaroles
g8Soc.units[1].subtopics[0].amtQuiz = [
  {
    q: "According to the official geology curriculum, how is a Rift Valley structurally formed?",
    options: [
      "A long depression formed when the land block between two parallel normal faults sinks downwards",
      "A mountain ridge pushed upward between converging tectonic plates",
      "A canyon carved exclusively by surface wind and rain erosion",
      "A crater formed by a massive meteorite impact"
    ],
    correct: 0,
    strategy: "Focus on tectonic faulting mechanics: parallel faults with downward subsidence of the central block.",
    derivation: "Tensional tectonic stresses pull the crust apart, creating two parallel faults. The central crustal block sinks downward (graben), forming a rift valley. The East African Rift Valley extends roughly 7,200 km from Syria to Mozambique.",
    trap: "Confusing a rift valley (block sinks down) with a horst (block rises up)."
  },
  {
    q: "What is a fumarole in an active volcanic or geothermal environment?",
    options: [
      "An opening in the Earth's crust through which steam and volcanic gases escape",
      "A deep subterranean reservoir of molten iron and nickel",
      "A lake formed inside an extinct meteor crater",
      "A solid underground pillar of granite rock"
    ],
    correct: 0,
    strategy: "Define the term fumarole: gas/steam vent in volcanic zones.",
    derivation: "Fumaroles are vents or fissures in a volcanic zone from which hot sulfurous gases, carbon dioxide, and pressurized water steam issue into the atmosphere (common throughout the Ethiopian Rift Valley).",
    trap: "Calling a fumarole a liquid lava river or an underground rock mass."
  },
  {
    q: "What is the total approximate length of the East African Rift Valley system and its African section?",
    options: [
      "Total system ~7,200 km from Syria to Mozambique; African section ~5,600 km",
      "Total system ~1,200 km; African section ~500 km",
      "Total system ~25,000 km encircling the entire equator",
      "Total system ~3,000 km located only within Ethiopia"
    ],
    correct: 0,
    strategy: "Recall verified numbers from the curriculum reference (grade8-volcanism-earthquakes.md).",
    derivation: "The entire Afro-Arabian rift system spans ~7,200 km from Syria to Mozambique through the Red Sea; its African continental segment covers about 5,600 km.",
    trap: "Restricting the Rift Valley's extent solely to the horn of Africa."
  }
];

// 2.2 Block (Horst) Mountains vs. Rift Valleys
g8Soc.units[1].subtopics[1].amtQuiz = [
  {
    q: "What is the primary structural difference between a Horst (Block Mountain) and a Rift Valley (Graben)?",
    options: [
      "In a Horst, the land between two parallel faults is uplifted; in a Rift Valley, the land sinks down",
      "A Horst is formed by folding of sediment, while a Rift Valley is formed by wind",
      "A Horst is formed by ocean tides, while a Rift Valley is formed by volcanic ash",
      "A Horst is always submerged under water, while a Rift Valley is an island"
    ],
    correct: 0,
    strategy: "Use the mnemonic: Rift valley → land goes DOWN (↓) | Horst → land goes UP (↑).",
    derivation: "Both features originate along parallel fault lines under tectonic stress. If the central block rises (or adjacent blocks drop), an elevated block mountain (horst) forms. If the central block sinks, a rift valley (graben) forms.",
    trap: "Inverting the motions (thinking horst sinks and graben rises)."
  },
  {
    q: "Which of the following are classic international examples of block (horst) mountains formed along fault lines?",
    options: [
      "Sierra Nevada (North America) and Harz Mountains (Germany)",
      "The Himalayas (Asia) and the Alps (Europe)",
      "The Andes (South America) and Atlas Mountains (North Africa)",
      "Mount Kilimanjaro and Mount Fuji"
    ],
    correct: 0,
    strategy: "Identify fold mountains vs fault-block mountains from textbook examples.",
    derivation: "The Sierra Nevada in the USA and the Harz Mountains in Germany are prime textbook examples of fault-block mountains (horsts). The Himalayas and Alps are fold mountains formed by plate collision.",
    trap: "Selecting young fold mountain chains like the Himalayas or Alps."
  },
  {
    q: "What type of tectonic stress most commonly produces normal faulting and rift grabens?",
    options: [
      "Tensional stress (pulling the crust apart)",
      "Compressional stress (squeezing the crust together)",
      "Shear stress (sliding horizontally past each other)",
      "Rotational atmospheric pressure"
    ],
    correct: 0,
    strategy: "Relate crustal pulling apart to normal faults and rift formation.",
    derivation: "Tensional stress pulls tectonic plates away from one another (divergence), stretching the crust until normal faults fracture the rock and let the central block drop.",
    trap: "Attributing rifting to compressional tectonic squeezing."
  }
];

// 2.3 Volcanism, Magma Dynamics, Vents and Fissures
g8Soc.units[1].subtopics[2].amtQuiz = [
  {
    q: "What is the precise scientific distinction between magma and lava?",
    options: [
      "Magma is molten rock beneath the Earth's surface; lava is magma that has breached the surface",
      "Magma is cold solid rock; lava is boiling acidic gas",
      "Magma only occurs in oceans; lava only occurs in polar ice caps",
      "Magma is composed of pure water; lava is made of pure limestone"
    ],
    correct: 0,
    strategy: "Recall: Magma = underground | Lava = at the surface.",
    derivation: "Molten rock generated in the lower crust or upper mantle is called magma while confined below ground. Once it erupts through a vent or fracture onto the surface, it is termed lava.",
    trap: "Calling surface flows magma or underground chambers lava."
  },
  {
    q: "What is the difference between a volcanic vent and a volcanic fissure?",
    options: [
      "A vent is a pipe-like circular conduit opening, while a fissure is an elongated fracture or crack in the crust",
      "A vent is an underground ice cavern, while a fissure is a high mountain peak",
      "A vent only emits water, while a fissure only emits granite crystals",
      "There is no difference; they are identical terms for a volcanic caldera"
    ],
    correct: 0,
    strategy: "Differentiate conduit geometry: circular pipe vs linear crack.",
    derivation: "A vent is a localized pipe-shaped opening connecting the magma chamber to the surface. A fissure is a long, narrow fracture through which voluminous basaltic lava can pour out over broad areas.",
    trap: "Confusing a linear fissure with a circular central vent."
  },
  {
    q: "What driving force causes magma to ascend from deep within the mantle toward the Earth's crust?",
    options: [
      "Lower density than surrounding solid rock and pressure from dissolved expanding gases",
      "Gravitational pull from the moon sucking magma upwards",
      "Surface rainwater washing down and pulling magma up",
      "Centrifugal force from Earth's daily rotation alone"
    ],
    correct: 0,
    strategy: "Buoyancy: hot liquid rock is less dense than cold solid lithosphere.",
    derivation: "Molten rock is hotter and less dense than the cold, rigid rock encasing it. Buoyancy forces it upward, aided by expanding dissolved volatile gases (water vapor, CO₂, SO₂).",
    trap: "Thinking gravity pulls molten material upwards."
  }
];

// 2.4 Crater, Caldera and Crater Lakes
g8Soc.units[1].subtopics[3].amtQuiz = [
  {
    q: "How does a caldera differ from a standard volcanic crater?",
    options: [
      "A caldera is a very large, wide basin formed by the catastrophic collapse of a magma chamber, whereas a crater is a smaller vent depression",
      "A caldera is an underground cave, while a crater is always a mountain peak",
      "A caldera is made of sedimentary clay, while a crater is made of ice",
      "A caldera is formed by wind erosion, while a crater is formed by tree roots"
    ],
    correct: 0,
    strategy: "Remember: Crater = small/moderate opening at top of cone; Caldera = very wide depression caused by summit collapse.",
    derivation: "A crater is the funnel-shaped depression (typically < 1 km across) around a volcanic vent. When an enormous eruption empties the underlying magma chamber, the mountain summit collapses, leaving a vast circular caldera (often many kilometers across).",
    trap: "Assuming calderas are created by external excavation rather than internal structural collapse."
  },
  {
    q: "Which of the following is a famous Ethiopian example of a lake formed inside a volcanic crater or caldera?",
    options: [
      "Lake Wonchi (Wenchi) and Bishoftu crater lakes",
      "Lake Victoria",
      "Lake Tanganyika",
      "Lake Chad"
    ],
    correct: 0,
    strategy: "Identify Ethiopian crater lakes mentioned in national curricula.",
    derivation: "Ethiopia features world-renowned volcanic crater lakes, including Lake Wonchi (near Ambo) and the Bishoftu (Debre Zeyit) crater lakes (Hora, Babogaya, Bishoftu).",
    trap: "Naming large tectonic rift lakes like Tanganyika instead of volcanic crater lakes."
  },
  {
    q: "Under what conditions does a crater lake form in a volcanic region?",
    options: [
      "When rain and groundwater accumulate inside an impermeable, dormant or extinct crater basin",
      "When ocean tides flood into high mountain valleys during storms",
      "When lava cools into liquid drinking water",
      "When underground salt mines dissolve completely"
    ],
    correct: 0,
    strategy: "Water accumulation in an inactive caldera basin.",
    derivation: "After volcanic activity subsides, the bowl-shaped caldera or crater catches precipitation and groundwater inflow. If the bottom floor is sealed by impermeable clay or solid rock, a crater lake develops.",
    trap: "Thinking the lake is formed from condensed pure lava."
  }
];

// 2.5 Volcanic Landforms: Extrusive vs. Intrusive
g8Soc.units[1].subtopics[4].amtQuiz = [
  {
    q: "Which pair of volcanic features consists entirely of intrusive (plutonic) igneous landforms?",
    options: [
      "Batholith and Sill",
      "Lava flow and Caldera",
      "Cinder cone and Volcanic vent",
      "Crater lake and Fissure"
    ],
    correct: 0,
    strategy: "Recall: Extrusive = formed at/on the surface | Intrusive = solidified underground.",
    derivation: "Intrusive landforms solidify underground: Batholiths (huge magma bodies), Laccoliths (mushroom domes), Sills (horizontal sheets), and Dikes (vertical sheets). Calderas, craters, vents, and lava flows are extrusive.",
    trap: "Classifying sills or batholiths as surface extrusions."
  },
  {
    q: "What is a volcanic 'Dike' and how does it structurally differ from a 'Sill'?",
    options: [
      "A dike is a discordant intrusion cutting vertically across rock layers, whereas a sill is a concordant intrusion lying horizontally between layers",
      "A dike is a horizontal lake, while a sill is a vertical cloud of smoke",
      "A dike only forms on the surface of volcanoes, while a sill only forms in oceans",
      "A dike is formed of limestone, while a sill is formed of coal"
    ],
    correct: 0,
    strategy: "Mnemonic: Dike cuts across vertically (discordant) | Sill lies flat like a window sill (concordant).",
    derivation: "When magma forces its way vertically or steeply through fractures across existing bedding planes, it forms a dike. When it spreads horizontally between existing parallel rock strata, it forms a sill.",
    trap: "Inverting the orientations of dikes (vertical) and sills (horizontal)."
  },
  {
    q: "What is a Batholith in structural geology?",
    options: [
      "An immense, deep-seated mass of intrusive igneous rock (>100 km² in area) formed from cooled magma chambers",
      "A small hollow pebble found in volcanic ash",
      "A shallow hot tub built around a hot spring",
      "A thin vertical crack in a brick wall"
    ],
    correct: 0,
    strategy: "Define batholith: the largest of all intrusive igneous bodies.",
    derivation: "A batholith is a gigantic plutonic body with surface exposure exceeding 100 km², often forming the core of ancient mountain ranges after overlying strata erode away.",
    trap: "Underestimating batholith scale as small or near-surface."
  }
];

// 2.6 Types of Volcanoes and Socio-Economic Effects
g8Soc.units[1].subtopics[5].amtQuiz = [
  {
    q: "How are volcanoes classified based on their historical activity and eruption status?",
    options: [
      "Active (erupting or recently erupted), Dormant (sleeping but capable of erupting), and Extinct (dead)",
      "Liquid, Solid, and Gaseous",
      "Tropical, Temperate, and Polar",
      "Agricultural, Industrial, and Commercial"
    ],
    correct: 0,
    strategy: "Active = awake | Dormant = sleeping | Extinct = dead.",
    derivation: "Active volcanoes have erupted in recorded history (e.g., Erta Ale in Afar). Dormant volcanoes have been inactive for centuries but retain an intact magma source. Extinct volcanoes have completely cooled with no likelihood of future eruption.",
    trap: "Confusing dormant (temporarily inactive) with extinct (permanently dead)."
  },
  {
    q: "Which of the following is an active shield volcano in the Afar Region of Ethiopia famous for its persistent lava lake?",
    options: [
      "Erta Ale",
      "Ras Dejen",
      "Mount Batu",
      "Mount Guna"
    ],
    correct: 0,
    strategy: "Recall the famous active volcano cited in national exam syllabi.",
    derivation: "Erta Ale ('Smoking Mountain' in the Afar language) is an active basaltic shield volcano in the Danakil Depression, containing one of the world's longest-lasting active lava lakes.",
    trap: "Confusing volcanic peaks with erosional basaltic mountain peaks like Ras Dejen."
  },
  {
    q: "Which of the following represents a major POSITIVE socio-economic benefit of volcanism in Ethiopia?",
    options: [
      "Fertile volcanic soils for agriculture and geothermal energy potential along the Rift Valley",
      "Destruction of urban transport infrastructure",
      "Release of poisonous sulfur dioxide gases",
      "Ash fall causing respiratory illnesses"
    ],
    correct: 0,
    strategy: "Identify positive economic/natural assets resulting from volcanic geology.",
    derivation: "Weathered volcanic rocks produce exceptionally fertile agricultural soils (high in potassium, phosphorus, and iron). Furthermore, the Rift Valley possesses huge geothermal clean energy resources (e.g., Aluto-Langano).",
    trap: "Selecting hazardous consequences (ash, toxic gases) when asked for positive benefits."
  }
];

// 2.7 Earthquakes, Focus, Epicenter and Richter Scale
g8Soc.units[1].subtopics[6].amtQuiz = [
  {
    q: "What is the critical distinction between the Focus and the Epicenter of an earthquake?",
    options: [
      "The Focus is the underground point where seismic rupture originates; the Epicenter is the point on Earth's surface directly above the focus",
      "The Focus is on the Earth's surface; the Epicenter is located at the center of the Earth's molten core",
      "The Focus measures earthquake strength; the Epicenter measures the duration in seconds",
      "The Focus is an ocean wave; the Epicenter is a desert sandstorm"
    ],
    correct: 0,
    strategy: "Mnemonic: Focus = underground origin | Epicenter = surface point directly above.",
    derivation: "The hypocenter (focus) is the subterranean site on a fault plane where stored elastic strain energy is abruptly unleashed. The epicenter is the geographic point vertically perpendicular to it on the surface.",
    trap: "Placing the focus on the surface and the epicenter underground."
  },
  {
    q: "Which scientific instrument records seismic ground vibrations, and what logarithmic scale measures earthquake magnitude?",
    options: [
      "Seismograph (instrument) and Richter Scale (magnitude scale)",
      "Thermometer and Celsius scale",
      "Barometer and Pascal scale",
      "Anemometer and Beaufort scale"
    ],
    correct: 0,
    strategy: "Identify the earthquake recording device and its magnitude scale.",
    derivation: "A seismometer senses ground movement, producing a graphic record called a seismograph (or seismogram). The Richter scale calculates the total energy released on a logarithmic base-10 scale.",
    trap: "Confusing a seismograph with a barometer (atmospheric pressure)."
  },
  {
    q: "According to standard seismic scale categories, how is an earthquake with a Richter magnitude of 7.0 to 7.9 classified?",
    options: [
      "Major earthquake capable of severe widespread destruction",
      "Minor tremor barely perceptible to humans",
      "Moderate shaking causing no structural damage",
      "Micro-earthquake detected only by satellites"
    ],
    correct: 0,
    strategy: "Review standard Richter ranges: 2-5 minor, 5-7 moderate/strong, 7-8 major, 8+ great.",
    derivation: "Earthquakes of magnitude 7.0–7.9 are classified as 'Major' earthquakes, causing extensive damage to reinforced structures and ground fracturing over vast areas.",
    trap: "Underestimating a magnitude 7 earthquake as merely light or moderate."
  }
];

// =========================================================================
// UNIT 3: World Population and Urbanization
// =========================================================================

// 3.1 Population Distribution and Age-Sex Pyramids
g8Soc.units[2].subtopics[0].amtQuiz = [
  {
    q: "What does an expansive population pyramid with a broad base and a narrow tapering apex indicate about a country's demography?",
    options: [
      "High birth rates, a high proportion of children, and a relatively high dependency ratio",
      "An aging population with extremely low birth rates and negative population growth",
      "Equal numbers of citizens in every age bracket from 0 to 100",
      "A country where males outnumber females by ten to one"
    ],
    correct: 0,
    strategy: "Analyze pyramid geometry: broad base = high fertility/birth rates; narrow top = lower life expectancy.",
    derivation: "Developing countries typically display a broad-based pyramid reflecting high fertility rates and a large youth cohort, creating substantial demands for schools, pediatric healthcare, and youth employment.",
    trap: "Interpreting a broad base as an aging population."
  },
  {
    q: "Which mathematical formula correctly expresses arithmetic population density?",
    options: [
      "Population Density = Total Population ÷ Total Land Area (people per km²)",
      "Population Density = Total Land Area ÷ Total Births",
      "Population Density = Total Deaths × Total Area",
      "Population Density = Total Immigrants ÷ Total Emigrants"
    ],
    correct: 0,
    strategy: "Density is people divided by unit of land area.",
    derivation: "Arithmetic density measures the average concentration of human habitation per square kilometer: Density = P / A.",
    trap: "Dividing land area by population or multiplying by deaths."
  },
  {
    q: "Which combination of factors serves as strong 'pull factors' attracting rural migrants to urban centers in developing nations?",
    options: [
      "Employment opportunities, advanced healthcare facilities, and access to secondary/higher education",
      "Severe drought, crop failure, and rural ethnic conflict",
      "Lack of clean drinking water and absence of electricity",
      "High rural land taxes and declining agricultural soil fertility"
    ],
    correct: 0,
    strategy: "Differentiate push factors (adverse rural conditions) from pull factors (attractive urban amenities).",
    derivation: "Pull factors are positive attributes that attract people toward cities (jobs, universities, hospitals, modern infrastructure). Drought and land scarcity are rural push factors.",
    trap: "Classifying negative rural conditions (push factors) as pull factors."
  }
];

// =========================================================================
// UNIT 4: World Civilizations & The Industrial Revolution
// =========================================================================

// 4.1 The Industrial Revolution: Origins, Steam & Factories
g8Soc.units[3].subtopics[0].amtQuiz = [
  {
    q: "Where did the Industrial Revolution begin during the mid-18th century, and which was the first manufacturing sector to mechanize?",
    options: [
      "Great Britain; Textile (cotton and wool cloth) manufacturing",
      "Ethiopia; Agricultural teff harvesting",
      "United States; Automobile assembly lines",
      "Germany; Chemical synthetic fertilizer production"
    ],
    correct: 0,
    strategy: "Recall historical cradle of industrialization: Britain, starting with mechanized textile spinning and weaving.",
    derivation: "Great Britain pioneered the Industrial Revolution (circa 1760-1840) due to abundant coal, iron ore, naval trade dominance, and capital. The textile sector was revolutionized first by inventions like the spinning jenny and power loom.",
    trap: "Assuming automobile manufacturing or electronics started the first industrial revolution."
  },
  {
    q: "Whose improved design of the steam engine in the late 1760s provided reliable mechanical power that freed factories from riverbanks?",
    options: [
      "James Watt",
      "Thomas Edison",
      "Alexander Graham Bell",
      "Isaac Newton"
    ],
    correct: 0,
    strategy: "Associate the commercial steam engine innovation with James Watt.",
    derivation: "James Watt patented a separate condenser for steam engines in 1769, dramatically increasing energy efficiency and enabling rotary motion to power mills, locomotives, and ships anywhere.",
    trap: "Confusing James Watt with electrical inventors like Thomas Edison."
  },
  {
    q: "What major demographic and social transformation accompanied the rapid rise of the factory system during the Industrial Revolution?",
    options: [
      "Rapid urbanization as rural agricultural laborers migrated into crowded industrial cities",
      "A complete abandonment of all cities in favor of nomadic pastoralism",
      "The immediate elimination of child labor and hazardous working conditions",
      "A return to subsistence barter trade without currency"
    ],
    correct: 0,
    strategy: "Identify the primary demographic consequence of factory labor centralization.",
    derivation: "Factory centralization triggered mass rural-to-urban migration, spawning rapid urbanization in cities like Manchester and Birmingham, often initially plagued by tenements, pollution, and harsh labor conditions.",
    trap: "Believing early factories immediately eliminated child labor."
  }
];

// =========================================================================
// UNIT 5: European Colonialism & African Resistance
// =========================================================================

// 5.1 The Scramble for Africa and The Battle of Adwa (1896)
g8Soc.units[4].subtopics[0].amtQuiz = [
  {
    q: "What historic diplomatic meeting of European imperial powers in 1884–1885 laid down the ground rules for the partition and colonization of Africa?",
    options: [
      "The Berlin Conference",
      "The Treaty of Versailles",
      "The Geneva Convention",
      "The Congress of Vienna"
    ],
    correct: 0,
    strategy: "Recall the 1884-1885 European conference convened by Otto von Bismarck.",
    derivation: "The Berlin Conference (1884–1885), convened by German Chancellor Bismarck, formalized the 'Scramble for Africa,' establishing the doctrine of 'effective occupation' without African representation.",
    trap: "Selecting post-World War treaties like Versailles or Geneva."
  },
  {
    q: "What was the decisive military outcome and global historical significance of the Battle of Adwa fought on March 1, 1896?",
    options: [
      "Ethiopian forces under Emperor Menelik II and Empress Taytu decisively defeated the Italian colonial army, safeguarding Ethiopian sovereignty",
      "Italy annexed Ethiopia and turned it into an Italian colony for fifty years",
      "The British army intervened and divided the Ethiopian empire into protectorates",
      "A peace treaty was signed without any military battle taking place"
    ],
    correct: 0,
    strategy: "Adwa 1896: Menelik II and Taytu lead Ethiopia to defeat invading Italian forces.",
    derivation: "On March 1, 1896 (Yekatit 23, 1888 E.C.), Ethiopian patriots routed General Baratieri's Italian army at Adwa. It compelled Italy to sign the Treaty of Addis Ababa recognizing Ethiopian sovereignty and inspired global anti-colonial movements.",
    trap: "Believing Ethiopia was colonized at Adwa."
  },
  {
    q: "What deceptive clause in the Italian translation of the Treaty of Wuchale (Article XVII) provoked the war leading to the Battle of Adwa?",
    options: [
      "The Italian text made Ethiopia an Italian protectorate, whereas the Amharic text made Italian diplomatic assistance optional",
      "The Amharic text forced Ethiopia to adopt Italian as its official national language",
      "The Italian text surrendered Lake Tana to the Vatican",
      "The Amharic text agreed to pay Italy 100 million gold coins annually"
    ],
    correct: 0,
    strategy: "Recall the Article XVII discrepancy in the 1889 Treaty of Wuchale.",
    derivation: "Article XVII in Amharic stated that Ethiopia *could* use Italian diplomatic channels if it wished, but the Italian version stated Ethiopia *must* conduct all foreign affairs through Rome, effectively claiming a protectorate. Menelik II repudiated the treaty when this fraud was discovered.",
    trap: "Thinking the dispute was merely over border taxes rather than sovereignty."
  }
];

// =========================================================================
// UNIT 6: Global Interdependence & Environmental Challenges
// =========================================================================

// 6.1 Globalization, The United Nations & Planetary Ecology
g8Soc.units[5].subtopics[0].amtQuiz = [
  {
    q: "Which principal organ of the United Nations holds primary responsibility under the UN Charter for the maintenance of international peace and security?",
    options: [
      "The UN Security Council",
      "The International Court of Justice",
      "The Economic and Social Council",
      "The Secretariat"
    ],
    correct: 0,
    strategy: "Identify the UN organ with 15 members and veto-wielding permanent members.",
    derivation: "Under Article 24 of the UN Charter, the UN Security Council (UNSC) has primary responsibility for international peace and security. It consists of 5 permanent veto members and 10 non-permanent members.",
    trap: "Selecting the General Assembly, which debates issues but cannot issue binding enforcement resolutions."
  },
  {
    q: "What is the primary human-induced cause of contemporary global warming and climate change?",
    options: [
      "Excessive emissions of greenhouse gases (CO₂, CH₄, N₂O) from burning fossil fuels and deforestation",
      "Normal fluctuations in lunar tidal gravity",
      "Natural evaporation of ocean sea salt",
      "Underground geothermal magma cooling"
    ],
    correct: 0,
    strategy: "Greenhouse gas emissions trap thermal infrared radiation.",
    derivation: "The combustion of coal, oil, and gas, coupled with large-scale forest clearance, releases billions of tons of carbon dioxide and methane, enhancing the greenhouse effect and driving atmospheric and oceanic warming.",
    trap: "Attributing modern climate change primarily to lunar tides or salt."
  },
  {
    q: "How does economic globalization facilitate both opportunities and vulnerabilities for developing African economies?",
    options: [
      "It expands access to export markets and foreign investment, but can expose local industries to global commodity price volatility and foreign competition",
      "It guarantees that every developing country achieves an equal GDP without trading",
      "It completely halts all international shipping and financial wire transfers",
      "It makes national borders impermeable to all ideas, technologies, and services"
    ],
    correct: 0,
    strategy: "Examine both advantages (trade, capital, tech) and risks (market shocks, inequality).",
    derivation: "Globalization integrates trade, finance, and technology across borders. While developing countries gain investment and access to global consumer markets, they also face vulnerability to international recessions and unfair terms of trade.",
    trap: "Viewing globalization as solely beneficial or solely harmful without understanding the balanced dual impact."
  }
];

// =========================================================================
// SAVE ENRICHED MODULE
// =========================================================================
const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_social.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8Soc, null, 2) + ';\n', 'utf8');

console.log('Successfully enriched g8_social.js with 3 AMT questions per subtopic across all 13 subtopics (total 39 questions)!');
