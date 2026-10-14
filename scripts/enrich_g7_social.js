const fs = require('fs');
const path = require('path');

const g7Soc = require('../src/curriculum/g7_social.js');

// Helper to set amtQuiz
function setQ(unitIdx, subIdx, questions) {
  g7Soc.units[unitIdx].subtopics[subIdx].amtQuiz = questions;
}

// =========================================================================
// UNIT 1: Physical Characteristics of the Earth
// =========================================================================

// 1.1 Origin of the Earth and Solar System
setQ(0, 0, [
  {
    q: "According to the widely accepted Nebular Hypothesis, how did our Solar System originate approximately 4.6 billion years ago?",
    options: [
      "A vast rotating interstellar cloud of cosmic dust and gas contracted under gravity, concentrating mass at the center to form the Sun while outer rings formed planets",
      "Two ancient wandering stars violently collided at high speed and shattered into planets",
      "The Earth was captured from a passing galaxy by the Moon's gravitational field",
      "Liquid water condensed from space and froze into solid planetary spheres"
    ],
    correct: 0,
    strategy: "Recall the Nebular Theory: rotating nebula contracts under gravity → Sun at center + planets from orbiting accretion disc.",
    derivation: "The Nebular Hypothesis asserts that ~4.6 billion years ago, gravitational collapse of a giant molecular cloud (nebula) initiated nuclear fusion at its core (the Sun), while remaining orbiting debris coalesced into terrestrial and gas planets.",
    trap: "Confusing nebular gravitational contraction with the obsolete collision theory."
  },
  {
    q: "How are the eight planets of the Solar System categorized based on their physical composition and proximity to the Sun?",
    options: [
      "Inner/Terrestrial planets (Mercury, Venus, Earth, Mars: rocky, dense) and Outer/Jovian gas giants (Jupiter, Saturn, Uranus, Neptune: gaseous, large)",
      "Warm planets with liquid oceans and Cold planets without atmospheres",
      "Luminous star-like planets and Extinct volcanic dwarf planets",
      "Northern hemisphere planets and Southern hemisphere planets"
    ],
    correct: 0,
    strategy: "Divide planets into Inner (rocky, terrestrial) and Outer (Jovian, gas giants).",
    derivation: "Inner planets are compact, dense, and composed of silicate rock and metals. Outer planets are massive gas and ice giants rich in hydrogen, helium, methane, and ammonia.",
    trap: "Classifying Mars or Venus as gas giants."
  },
  {
    q: "What astronomical term defines the curved elliptical path that a celestial body travels around another body in space?",
    options: ["Orbit", "Axis", "Equinox", "Zenith"],
    correct: 0,
    strategy: "Recall basic astronomy vocabulary: Orbit is the pathway around another body.",
    derivation: "An orbit is the gravitationally curved trajectory of an object, such as the path of Earth revolving around the Sun in approximately 365.25 days.",
    trap: "Confusing orbital revolution with axial rotation."
  }
]);

// 1.2 Shape and Movements of Earth
setQ(0, 1, [
  {
    q: "Which of the following is direct physical and observational evidence proving that the Earth is approximately spherical (geoid)?",
    options: [
      "The curved horizon observed from high altitudes, circular shadows during lunar eclipses, and ships disappearing hull-first over the sea",
      "Rivers flowing continuously in a straight line toward the east",
      "The fact that the Sun appears bright yellow at midday",
      "Air temperatures dropping during winter months"
    ],
    correct: 0,
    strategy: "Review Aristotle and modern proofs of Earth's spherical shape.",
    derivation: "Evidence for Earth's sphericity includes: (1) ships sailing away disappear hull-first, (2) Earth casts a round shadow on the Moon during lunar eclipses, (3) photographs taken from space orbits.",
    trap: "Assuming seasonal temperature changes prove Earth's curvature."
  },
  {
    q: "What is the primary difference between Earth's Rotation and Earth's Revolution?",
    options: [
      "Rotation is Earth spinning on its axis (~24 hours, causing day/night); Revolution is Earth traveling around the Sun (~365¼ days, causing years and seasons)",
      "Rotation takes one year, while Revolution takes 24 hours",
      "Rotation causes volcanic eruptions, while Revolution causes ocean tides",
      "Rotation moves the Sun around the Earth, while Revolution moves the Moon"
    ],
    correct: 0,
    strategy: "Mnemonic: Rotation = spins on own axis (day/night) | Revolution = orbits around Sun (year).",
    derivation: "Axial rotation occurs once every 24 hours, producing day and night. Orbital revolution takes 365 days and 6 hours; combined with the 23.5° axial tilt, it produces cyclical seasons.",
    trap: "Inverting the time periods of rotation and revolution."
  },
  {
    q: "What astronomical phenomenon occurs when the Sun is directly overhead at the Equator, resulting in approximately equal 12-hour day and night across the globe?",
    options: ["Equinox (Autumnal and Vernal)", "Summer Solstice", "Winter Solstice", "Solar Eclipse"],
    correct: 0,
    strategy: "Equinox = equal night (aequus + nox).",
    derivation: "An equinox occurs twice a year (around March 21 and September 23) when Earth's axis tilts neither toward nor away from the Sun, yielding roughly 12 hours of daylight and 12 hours of darkness worldwide.",
    trap: "Confusing equinox with solstice (which marks maximum day or night disparity)."
  }
]);

// 1.3 External Components and Internal Structure
setQ(0, 2, [
  {
    q: "Which Earth sphere encompasses all liquid, solid, and vaporized water across the oceans, rivers, ice sheets, and atmosphere?",
    options: ["Hydrosphere", "Lithosphere", "Atmosphere", "Biosphere"],
    correct: 0,
    strategy: "Hydro = water.",
    derivation: "The hydrosphere comprises roughly 71% of Earth's surface, including oceans, freshwater lakes, glaciers, permafrost, groundwater, and atmospheric water vapor.",
    trap: "Confusing hydrosphere with atmosphere (gases) or lithosphere (crust/rock)."
  },
  {
    q: "Which concentric internal layer of the Earth is the innermost, composed primarily of dense metallic iron and nickel under extreme pressure?",
    options: ["The Core (Inner and Outer Core)", "The Continental Crust", "The Upper Mantle (Asthenosphere)", "The Oceanic Crust"],
    correct: 0,
    strategy: "Recall internal structure: Crust (outermost thin rock) → Mantle (semi-molten silicate) → Core (dense iron-nickel).",
    derivation: "The Earth's core has a liquid outer layer and a solid crystalline inner sphere composed of iron and nickel (NiFe alloy) with temperatures exceeding 5,000°C.",
    trap: "Choosing the mantle, which consists of silicate rock, not pure iron-nickel."
  },
  {
    q: "How do geologists obtain indirect evidence about the deep interior structure and boundary layers of the Earth?",
    options: [
      "By analyzing the refraction, reflection, and velocity changes of seismic waves (P-waves and S-waves) generated by earthquakes",
      "By digging deep open-pit diamond mines to the Earth's center",
      "By launching weather balloons into the stratosphere",
      "By measuring ocean surface salinity"
    ],
    correct: 0,
    strategy: "Seismic wave behavior reveals interior density and phase boundaries.",
    derivation: "Because the deepest drill hole (Kola Superdeep Borehole) reaches only ~12.2 km, interior composition is inferred from seismic wave propagation: P-waves travel through liquids and solids, while S-waves cannot travel through liquids, revealing the molten outer core.",
    trap: "Believing humans have drilled directly into the Earth's core."
  }
]);

// 1.4 Materials Forming the Crust
setQ(0, 3, [
  {
    q: "What defines a 'Mineral' in geological science?",
    options: [
      "A naturally occurring, inorganic solid with a definite chemical composition and an ordered crystalline atomic structure",
      "Any organic decay product derived from plant roots",
      "A synthetic chemical alloy manufactured in industrial foundries",
      "A mixture of dried mud and decomposed leaves"
    ],
    correct: 0,
    strategy: "A mineral must be naturally occurring, inorganic, solid, with definite chemical composition and crystalline structure.",
    derivation: "Minerals are the fundamental building blocks of rocks. They cannot be man-made (synthetic) or organic. Examples include quartz (SiO₂), feldspar, and calcite (CaCO₃).",
    trap: "Classifying synthetic stones or organic petroleum as true minerals."
  },
  {
    q: "How are the three primary rock families—Igneous, Sedimentary, and Metamorphic—differentiated based on origin?",
    options: [
      "Igneous form from cooled magma/lava; Sedimentary form from compacted/cemented deposits; Metamorphic form from heat, pressure, and fluids altering pre-existing rock",
      "Igneous form in clouds; Sedimentary form in space; Metamorphic form in volcanic craters",
      "Igneous are made of plants; Sedimentary are made of pure gold; Metamorphic are made of ice",
      "All three rock families form through identical boiling processes"
    ],
    correct: 0,
    strategy: "Review formation processes: Igneous (cooling molten rock), Sedimentary (lithification of sediment), Metamorphic (recrystallization under heat/pressure).",
    derivation: "Igneous rocks (basalt, granite) crystallize from molten melt. Sedimentary rocks (sandstone, limestone) form by deposition, burial, and cementation. Metamorphic rocks (marble, schist) arise when existing rocks recrystallize under elevated pressure/temperature without complete melting.",
    trap: "Thinking metamorphic rocks melt completely into magma (which would make them igneous upon cooling)."
  },
  {
    q: "Which rock family forms when existing rock is subjected to intense directional pressure and heat, creating a foliated or banded texture like gneiss or slate?",
    options: ["Metamorphic rocks", "Igneous extrusive rocks", "Chemical sedimentary rocks", "Volcanic pyroclastic rocks"],
    correct: 0,
    strategy: "Foliation and recrystallization = Metamorphic.",
    derivation: "Differential tectonic pressure aligns platy minerals into parallel bands or layers, producing foliation characteristic of regional metamorphic rocks such as slate, schist, and gneiss.",
    trap: "Confusing sedimentary bedding with metamorphic foliation."
  }
]);

// 1.5 Rocks in Ethiopia and Their Economic Value
setQ(0, 4, [
  {
    q: "Where in Ethiopia are volcanic (igneous) basaltic rocks most extensively distributed, and what is their primary economic application?",
    options: [
      "Across the central and northwestern highlands (plateaus); extensively quarried for foundation stone, masonry blocks, and crushed aggregate for roads",
      "Only along the Red Sea coastal sand dunes for glassmaking",
      "Exclusively in the Ogaden desert for oil drilling",
      "In deep subterranean caves for gem carving"
    ],
    correct: 0,
    strategy: "Highland trap series basalts cover central/NW plateaus and serve as construction stone.",
    derivation: "Extensive Tertiary volcanic eruptions produced the Ethiopian plateau basalts across Amhara, Oromia, and Tigray, providing durable stones for construction, cobblestone paving, and road aggregate.",
    trap: "Assuming volcanic rocks are only located in the lowland deserts."
  },
  {
    q: "In which geological regions of Ethiopia are sedimentary rocks (such as limestone, gypsum, and sandstone) predominantly found?",
    options: [
      "In eastern, southeastern (Somali/Ogaden), and southern regions, as well as the Mekelle and Blue Nile gorges; used in cement manufacturing",
      "Exclusively on the summit of Mount Ras Dejen",
      "At the center of the molten lava lake of Erta Ale",
      "Floating on the surface of Lake Tana"
    ],
    correct: 0,
    strategy: "Sedimentary marine transgressions occurred in the Mesozoic era in the southeast and gorge cuts.",
    derivation: "Mesozoic marine sedimentary strata (limestone and gypsum) are widespread in the Somali Region, Dire Dawa, and deep river gorges (Abay), providing essential raw inputs for Ethiopia's cement industry (e.g., Mugher, Dangote).",
    trap: "Believing sedimentary limestone is found on top of high volcanic mountain peaks."
  },
  {
    q: "Which ancient rock complex in northern, western, and southern Ethiopia hosts metallic mineral deposits such as gold and tantalite?",
    options: [
      "Precambrian Metamorphic basement complex rocks",
      "Recent Quaternary sand dunes",
      "Young volcanic ash beds",
      "Tertiary basaltic flood lavas"
    ],
    correct: 0,
    strategy: "Precambrian basement = metamorphic rocks hosting gold, platinum, and tantalum.",
    derivation: "The oldest Precambrian crystalline rocks (exposed in Tigray, Benishangul-Gumuz, Gambella, and Oromia/Adola) contain quartz veins with precious metals like gold and tantalite.",
    trap: "Attributing gold deposits to young volcanic lava flows."
  }
]);

// =========================================================================
// UNIT 2: Human Evolution and World Population
// =========================================================================

// 2.1 Human Evolution and Ethiopia’s Hominin Record
setQ(1, 0, [
  {
    q: "Why is Ethiopia universally recognized by paleoanthropologists as the 'Cradle of Humankind'?",
    options: [
      "The Awash River Basin and Afar Triangle have yielded an unparalleled chronological sequence of early hominin fossils, including Ardipithecus and Australopithecus",
      "Ethiopia was the only country where modern humans lived before 1900",
      "No hominin fossils have ever been discovered in any other continent",
      "The earliest steam locomotives were designed in the Ethiopian rift"
    ],
    correct: 0,
    strategy: "Focus on paleoanthropological fossil discoveries in the Afar and Omo basins.",
    derivation: "Fossil discoveries spanning over 4 million years—including *Ardipithecus ramidus* (Ardi, 4.4 Ma) and *Australopithecus afarensis* (Lucy/Dinkinesh, 3.2 Ma)—confirm Ethiopia's premier status in documenting human evolutionary origins.",
    trap: "Claiming hominin fossils are found *only* in Ethiopia."
  },
  {
    q: "Where in Ethiopia was the famous fossil skeleton 'Lucy' (*Australopithecus afarensis*, locally known as Dinkinesh) discovered in 1974?",
    options: [
      "Hadar in the Awash Valley, Afar Region",
      "Gondar Royal Enclosure",
      "Lalibela Rock-Hewn Churches",
      "Bale Mountains National Park"
    ],
    correct: 0,
    strategy: "Locate Lucy's find: Hadar, Afar Region.",
    derivation: "Donald Johanson and his team discovered the 3.2-million-year-old partial skeleton of Dinkinesh at Hadar in the lower Awash River Valley of the Afar depression in 1974.",
    trap: "Placing Hadar in the Bale Mountains or northern highlands."
  },
  {
    q: "How does human biological evolution differ fundamentally from cultural evolution?",
    options: [
      "Biological evolution changes physical/genetic traits across generations through natural selection, whereas culture is learned and transmitted socially",
      "Biological evolution happens in one day, while culture takes 10 million years",
      "Culture is inherited entirely through DNA chromosomes, while anatomy is chosen voluntarily",
      "There is no difference; culture and biology are identical scientific terms"
    ],
    correct: 0,
    strategy: "Biology = genetic/inherited | Culture = learned/socially transmitted.",
    derivation: "Biological evolution alters anatomical features (bipedalism, brain capacity). Cultural evolution involves learned knowledge, language, tool-making, and institutions passed down through social learning.",
    trap: "Believing cultural knowledge like language is encoded in DNA at birth."
  }
]);

// 2.2 Trend of World Population and Density
setQ(1, 1, [
  {
    q: "Which demographic equation correctly determines the total net change in a population over a given period?",
    options: [
      "Population Change = (Births - Deaths) + (Immigration - Emigration)",
      "Population Change = (Births × Deaths) ÷ (Immigration × Emigration)",
      "Population Change = Total Deaths - Total Births",
      "Population Change = Total Land Area ÷ Total Households"
    ],
    correct: 0,
    strategy: "Natural increase (Births - Deaths) + Net migration (Immigration - Emigration).",
    derivation: "Population grows by births and inbound arrivals (immigration), and shrinks through mortalities (deaths) and departures (emigration).",
    trap: "Multiplying rates instead of calculating net addition/subtraction."
  },
  {
    q: "What is the key geographical distinction between 'Immigration' and 'Emigration'?",
    options: [
      "Immigration is moving INTO a country/region to settle; Emigration is LEAVING one's country to settle elsewhere",
      "Immigration means leaving forever, while emigration means staying at home",
      "Immigration refers only to birds, while emigration refers only to humans",
      "Immigration occurs in daytime, while emigration occurs at night"
    ],
    correct: 0,
    strategy: "Mnemonic: 'I'mmigration = IN | 'E'migration = EXIT.",
    derivation: "Immigrants enter a host destination; emigrants exit their homeland.",
    trap: "Inverting immigration (entering) with emigration (leaving)."
  },
  {
    q: "Why is human population density highly uneven across various geographic zones of Ethiopia?",
    options: [
      "Highland regions (Dega and Weina Dega) offer fertile soils, reliable rainfall, and freedom from tropical diseases, whereas arid lowlands suffer water scarcity and high heat",
      "People are legally prohibited from living in any lowland area",
      "Lowland zones are covered by solid volcanic ice sheets",
      "Every city in Ethiopia has the exact same population density"
    ],
    correct: 0,
    strategy: "Relate altitude, climate, disease vectors (malaria in lowlands), and soil fertility to human settlement patterns.",
    derivation: "Ethiopia's population is heavily concentrated in highland plateaus (>1,500 m) due to moderate temperatures, fertile volcanic soils, and lower malaria prevalence compared to dry, hot lowland fringes.",
    trap: "Believing climate and altitude have no bearing on Ethiopian settlement patterns."
  }
]);

// 2.3 People and Development of Transportation
setQ(1, 2, [
  {
    q: "How does the development of an integrated transport infrastructure drive socio-economic growth in a nation?",
    options: [
      "It connects agricultural producers with urban/international markets, reduces travel costs, and expands access to healthcare and education",
      "It increases food waste by preventing crops from leaving farms",
      "It makes rural communities completely isolated from national commerce",
      "It decreases the productivity of trade by eliminating motorized vehicles"
    ],
    correct: 0,
    strategy: "Transport connects markets, labor, and essential public services.",
    derivation: "Efficient transport (roads, railways, ports, aviation) reduces freight friction, integrates regional markets, facilitates labor mobility, and ensures delivery of emergency social services.",
    trap: "Thinking transportation only benefits tourists rather than agricultural producers."
  },
  {
    q: "Which mode of transportation is historically the most dominant for domestic freight and passenger movement in Ethiopia?",
    options: ["Road transport", "Inland river water transport", "Underground subway transit", "High-speed maglev rail"],
    correct: 0,
    strategy: "Identify the dominant freight and passenger carrier across Ethiopia's mountainous topography.",
    derivation: "Over 90% of domestic passenger travel and cargo freight in Ethiopia moves via the national road network. Navigable waterways are scarce due to steep river gradients and waterfalls.",
    trap: "Assuming large rivers like the Abay are navigable for bulk domestic shipping."
  },
  {
    q: "What strategic role does the electrified Addis Ababa–Djibouti Railway play in the Ethiopian economy?",
    options: [
      "It provides a vital high-capacity transport corridor linking landlocked Ethiopia to the international maritime shipping port of Djibouti",
      "It transports passengers exclusively within Addis Ababa municipal boundaries",
      "It is an oil pipeline carrying refined kerosene across the Sahara Desert",
      "It connects Ethiopia directly to the Atlantic Ocean across Central Africa"
    ],
    correct: 0,
    strategy: "Recognize Ethiopia's prime import-export railway link to the port of Djibouti.",
    derivation: "As a landlocked nation, Ethiopia relies on the 759-km standard-gauge electric railway to Djibouti Port for over 90% of its containerized foreign import and export freight.",
    trap: "Confusing the national railway with the local light rail transit (LRT) in Addis Ababa."
  }
]);

// =========================================================================
// UNIT 3: Human and Natural Resources
// =========================================================================

// 3.1 Human-Environment Relationships
setQ(2, 0, [
  {
    q: "What is meant by a 'reciprocal relationship' between humans and their physical environment?",
    options: [
      "Humans modify the environment through activities like farming and urban construction, while the environment actively shapes human settlement, livelihoods, and health",
      "Humans have zero impact on nature, and nature has zero impact on humans",
      "Nature completely dictates all human thoughts with no room for technological adaptation",
      "Humans can destroy all natural ecosystems without suffering any consequences"
    ],
    correct: 0,
    strategy: "Reciprocal = two-way interaction and mutual influence.",
    derivation: "The relationship is two-way: climate, relief, and soils influence human lifestyle and clothing, while anthropogenic actions (deforestation, irrigation, building) alter natural landscapes.",
    trap: "Viewing the relationship as one-sided (strict environmental determinism or radical possibilism)."
  },
  {
    q: "What is the internationally accepted definition of 'Sustainable Development'?",
    options: [
      "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs",
      "Consuming all available fossil fuels immediately to maximize short-term industrial profit",
      "Banning all economic activity and returning to hunting and gathering",
      "Building concrete skyscrapers across all agricultural land"
    ],
    correct: 0,
    strategy: "Recall the Brundtland Commission definition: meeting present needs while protecting resources for future generations.",
    derivation: "Sustainable development balances economic progress, social inclusion, and ecological preservation so that the natural resource base remains productive for posterity.",
    trap: "Defining sustainability as prioritizing current extraction without regard for the future."
  },
  {
    q: "Which human activity is a leading driver of severe land degradation and watershed depletion in the Ethiopian highlands?",
    options: [
      "Unplanned deforestation and steep-slope cultivation without soil conservation terracing",
      "Installing solar photovoltaic panels on urban rooftops",
      "Reforestation with native acacia trees",
      "Practicing rainwater harvesting in community ponds"
    ],
    correct: 0,
    strategy: "Identify destructive land-use practices versus conservation practices.",
    derivation: "Clearing forests for fuelwood and farming on steep slopes without stone bunds or terraces strips topsoil through intense rainfall runoff, causing severe gully erosion.",
    trap: "Selecting conservation actions (terracing, tree planting) as causes of degradation."
  }
]);

// 3.2 The Population-Resource Relationship
setQ(2, 1, [
  {
    q: "How does 'Overpopulation' differ from 'Optimal Population' in demographic economics?",
    options: [
      "Overpopulation occurs when population size exceeds the carrying capacity and resources of an area, whereas optimal population achieves the highest living standard with available resources and technology",
      "Overpopulation means too few workers, while optimal population means zero children",
      "Overpopulation only occurs in polar regions, while optimal population occurs only in deserts",
      "There is no difference; both mean the population is growing at 50% per year"
    ],
    correct: 0,
    strategy: "Contrast overpopulation (resource strain/depletion) with optimal population (balanced equilibrium).",
    derivation: "Overpopulation strains public services, food security, and natural ecosystems. Optimal population is the theoretical equilibrium where population size yields the highest output and quality of life given current technological capacity.",
    trap: "Confusing overpopulation with simple high density (density alone does not mean overpopulation if resources and technology are abundant)."
  },
  {
    q: "What defines an 'Underpopulated' region?",
    options: [
      "An area having too few inhabitants to fully develop and utilize its abundant natural resources and infrastructure",
      "An area with millions of starving people crowded in squalor",
      "A region where all animals have migrated away",
      "A city with no schools or hospitals"
    ],
    correct: 0,
    strategy: "Underpopulation = population insufficient to exploit available resource potential.",
    derivation: "In underpopulated areas, increasing the labor force would increase per capita productivity because resources remain under-exploited (e.g., historical frontier agricultural lands).",
    trap: "Assuming underpopulated means totally uninhabited."
  },
  {
    q: "Why does population pressure depend on technology and management, rather than raw population numbers alone?",
    options: [
      "Advanced technologies (like drip irrigation, renewable energy, and recycling) can dramatically increase resource efficiency and carrying capacity",
      "Technology always doubles the amount of oil underground",
      "Machines make humans stop eating food",
      "Computers eliminate the need for agricultural soil"
    ],
    correct: 0,
    strategy: "Technological innovation elevates resource efficiency.",
    derivation: "A technologically advanced nation can sustain high densities comfortably by maximizing water efficiency, recycling, and high-yield farming, whereas poor resource management leads to shortages even at lower densities.",
    trap: "Thinking natural resource availability is fixed and independent of technology."
  }
]);

// 3.3 Types of Natural Resources
setQ(2, 2, [
  {
    q: "Which of the following is a classic example of a 'Renewable Resource' that naturally replenishes on a human timescale when properly managed?",
    options: ["Forests and solar energy", "Petroleum crude oil", "Coal deposits", "Uranium ore"],
    correct: 0,
    strategy: "Renewable = naturally replaced in short timeframes; Non-renewable = finite on human scale.",
    derivation: "Solar radiation, wind, and biomass (forests) replenish naturally through solar cycles and biological growth. Fossil fuels (coal, petroleum) require millions of years of geological pressure to form.",
    trap: "Classifying fossil fuels like coal as renewable."
  },
  {
    q: "What is the difference between 'Biotic' and 'Abiotic' natural resources?",
    options: [
      "Biotic resources originate from living organisms and organic matter; Abiotic resources originate from non-living physical substances",
      "Biotic resources are made of metal, while abiotic resources are made of meat",
      "Biotic resources only exist in space, while abiotic resources exist on Earth",
      "Biotic resources cannot be used by humans, while abiotic resources are free"
    ],
    correct: 0,
    strategy: "Bio = life/living | A-biotic = non-living.",
    derivation: "Biotic resources include timber, wildlife, crops, and marine life. Abiotic resources include minerals, freshwater, atmospheric air, and sunlight.",
    trap: "Calling water or sunlight a biotic resource."
  },
  {
    q: "Why are fossil fuels (petroleum, coal, natural gas) categorized as 'Non-Renewable Resources'?",
    options: [
      "Their rate of formation spans millions of years of geological burial, making them finite and exhaustible on a human timescale",
      "They evaporate completely every morning",
      "They are manufactured out of sea salt in factories",
      "They can never be ignited to produce heat"
    ],
    correct: 0,
    strategy: "Rate of consumption vastly outpaces geological generation.",
    derivation: "Formed from decomposed organic matter buried under heat and pressure over geological epochs (millions of years), fossil fuel reserves cannot be replenished within human generations once depleted.",
    trap: "Thinking fossil fuels regenerate annually like agricultural crops."
  }
]);

// 3.4 Factors Affecting Natural Resources in Ethiopia and Conservation
setQ(2, 3, [
  {
    q: "Which conservation practice is most effective in combating soil erosion on steep cultivated slopes in the Ethiopian highlands?",
    options: [
      "Constructing contour stone bunds, fanya juu terraces, and check dams across ravines",
      "Burning all crop residues and clearing all hillside brush",
      "Plowing up and down the steepest slope gradient",
      "Letting livestock overgraze hilltops bare"
    ],
    correct: 0,
    strategy: "Physical soil and water conservation: contour bunding, terracing, and check dams.",
    derivation: "Building contour bunds and stone terraces breaks the velocity of sheet runoff, traps nutrient-rich sediment, and enhances groundwater infiltration on mountainous farmland.",
    trap: "Selecting destructive farming practices like plowing along the vertical fall line."
  },
  {
    q: "What is the environmental distinction between 'Afforestation' and 'Reforestation'?",
    options: [
      "Afforestation is planting trees in an area that previously lacked tree cover; Reforestation is replanting trees in a deforested or harvested area",
      "Afforestation burns trees, while reforestation cuts them down",
      "Afforestation only uses fruit trees, while reforestation only uses pine trees",
      "There is no difference; both are slang terms for timber logging"
    ],
    correct: 0,
    strategy: "Afforestation = establishing a brand new forest | Reforestation = restocking a depleted forest.",
    derivation: "Afforestation introduces forest cover to historically non-forested lands. Reforestation restores tree canopies in areas where previous forests were destroyed by logging or fires.",
    trap: "Confusing planting trees on new land (afforestation) with replanting destroyed forests (reforestation)."
  },
  {
    q: "What role does community participation play in the long-term success of watershed conservation programs in Ethiopia?",
    options: [
      "It ensures local ownership, maintenance of physical structures, and equitable sharing of grass, water, and timber benefits",
      "It forces communities to abandon all farming forever",
      "It makes conservation structures collapse quickly",
      "It eliminates the need for any technical planning"
    ],
    correct: 0,
    strategy: "Community engagement ensures ownership and sustainability.",
    derivation: "When local farmers actively design, construct, and benefit from enclosed hillsides (through cut-and-carry fodder and beehives), conservation structures are protected and maintained indefinitely.",
    trap: "Assuming top-down enforcement without community input can sustain conservation."
  }
]);

// =========================================================================
// UNIT 4: Ancient Civilizations and Medieval History of the World
// =========================================================================

// 4.1 Ancient World Civilizations
setQ(3, 0, [
  {
    q: "Why were the earliest ancient civilizations—such as Mesopotamia and Egypt—described as 'River Valley Civilizations'?",
    options: [
      "Annual river flooding deposited fertile silt and provided predictable water for irrigation, allowing agricultural surplus to support cities and specialized professions",
      "People could only drink water directly from rivers and could not dig wells",
      "Ancient humans were afraid of walking on dry land",
      "Rivers were the only places safe from lightning storms"
    ],
    correct: 0,
    strategy: "Rivers provided fertile alluvium, irrigation water, and transport routes.",
    derivation: "The Tigris, Euphrates, Nile, and Indus rivers provided continuous fresh water and nutrient-rich silt, enabling large-scale irrigation agriculture that generated food surpluses, urban state organizations, and division of labor.",
    trap: "Thinking rivers were chosen purely for defensive isolation."
  },
  {
    q: "What was the landmark writing system invented by the Sumerians of ancient Mesopotamia, utilizing wedge-shaped marks pressed into damp clay tablets?",
    options: ["Cuneiform", "Hieroglyphics", "Ge'ez script", "Phoenician alphabet"],
    correct: 0,
    strategy: "Mesopotamia/Sumer = Cuneiform (wedge-shaped).",
    derivation: "Sumerians developed cuneiform around 3200 BCE, using reed styluses to impress wedge-shaped pictographs and phonetic signs onto soft clay tablets for accounting, law, and literature.",
    trap: "Confusing cuneiform with Egyptian hieroglyphics."
  },
  {
    q: "Which ancient Greek city-state is celebrated for pioneering direct democracy for its free male citizens, alongside major advances in philosophy and theater?",
    options: ["Athens", "Sparta", "Troy", "Corinth"],
    correct: 0,
    strategy: "Athens = direct democracy, philosophy (Socrates, Plato); Sparta = militaristic oligarchy.",
    derivation: "Classical Athens established a direct democratic assembly (Ekklesia) where citizens debated and voted directly on public policy, producing foundational philosophical and scientific traditions.",
    trap: "Selecting Sparta, which was an austere military oligarchy."
  }
]);

// 4.2 Medieval History of the World
setQ(3, 1, [
  {
    q: "What social and political hierarchy structured medieval Europe, based on reciprocal obligations of land grants (fiefs) in exchange for military service and loyalty?",
    options: ["Feudalism", "Capitalism", "Direct Democracy", "Socialism"],
    correct: 0,
    strategy: "Feudalism = medieval system linking monarchs, lords, knights, and serfs.",
    derivation: "Feudalism decentralized political power across Europe: kings granted land to noble vassals, who provided armed knights for defense, while peasant serfs farmed the land under manorial obligations.",
    trap: "Confusing medieval feudalism with modern industrial capitalism."
  },
  {
    q: "What was the capital city and cultural epicenter of the Byzantine Empire (Eastern Roman Empire), strategically guarding trade between Europe and Asia?",
    options: ["Constantinople", "Rome", "Athens", "Alexandria"],
    correct: 0,
    strategy: "Byzantine Empire capital = Constantinople (modern Istanbul).",
    derivation: "Emperor Constantine dedicated Constantinople in 330 CE along the Bosporus Strait, creating a formidable imperial fortress and trading hub preserving Greco-Roman law and Christian scholarship.",
    trap: "Picking Western Rome, which fell in 476 CE."
  },
  {
    q: "During the Islamic Golden Age (8th–14th centuries), what major contributions did scholars in centers like Baghdad and Cordoba make to world civilization?",
    options: [
      "Pioneering algebra, optics, and medical encyclopedias, while translating and preserving ancient Greek and Indian scientific texts",
      "Inventing the steam locomotive and diesel engine",
      "Prohibiting all forms of mathematics and book printing",
      "Abandoning all overland international trade routes"
    ],
    correct: 0,
    strategy: "Islamic Golden Age: House of Wisdom, algebra (Al-Khwarizmi), medicine (Ibn Sina/Avicenna).",
    derivation: "Scholars synthesized and advanced mathematics (algebra, Arabic numerals), astronomy, chemistry, and medicine, creating extensive libraries and hospitals that bridged ancient and Renaissance science.",
    trap: "Attributing 19th-century steam engine inventions to the medieval era."
  }
]);

// =========================================================================
// UNIT 5: Ancient History of Africa
// =========================================================================

// 5.1 The Ancient Kingdom of Egypt
setQ(4, 0, [
  {
    q: "Why did the ancient Greek historian Herodotus famously refer to Egypt as 'the Gift of the Nile'?",
    options: [
      "Without the annual predictable flooding and fertile black silt (Kemet) of the Nile, Egyptian civilization would not have existed in the barren Sahara desert",
      "The Nile River was created as an artificial canal by the first Pharaoh",
      "The Nile flowed with gold and precious gemstones instead of water",
      "Egyptians never had to perform any agricultural work because food floated down the river"
    ],
    correct: 0,
    strategy: "The Nile's annual inundation supported agriculture in a hyper-arid desert.",
    derivation: "Annual summer floods fed by monsoon rains in the Ethiopian highlands deposited rich volcanic silt across the Nile floodplains, sustaining high crop yields that funded monumental architecture and statecraft.",
    trap: "Thinking Egypt's agriculture relied primarily on rainfall rather than river flooding."
  },
  {
    q: "What monumental architectural structures were constructed during Egypt's Old Kingdom, notably at Giza, to serve as eternal royal tombs for Pharaohs?",
    options: ["The Pyramids (such as the Great Pyramid of Khufu)", "The Roman Colosseum", "The Parthenon", "The Taj Mahal"],
    correct: 0,
    strategy: "Egypt's Old Kingdom is the 'Age of the Pyramids.'",
    derivation: "Pharaohs were buried in limestone pyramids designed as monumental stairways to the afterlife, reflecting extraordinary engineering, surveying precision, and labor organization.",
    trap: "Confusing Egyptian pyramids with Indian or Roman monuments."
  },
  {
    q: "What formal writing system, combining logographic and alphabetic elements carved on temple walls and written on papyrus, was developed in ancient Egypt?",
    options: ["Hieroglyphics", "Cuneiform", "Latin alphabet", "Brahmi script"],
    correct: 0,
    strategy: "Egyptian writing = Hieroglyphics.",
    derivation: "Hieroglyphs ('sacred carvings') represented sounds and ideas, deciphered in modern times via the bilingual Rosetta Stone inscription.",
    trap: "Selecting cuneiform (Mesopotamian clay script)."
  }
]);

// 5.2 The Kingdom of Nubia (Kush)
setQ(4, 1, [
  {
    q: "Where was the ancient Kingdom of Nubia (Kush) geographically situated along the Nile corridor?",
    options: [
      "South of Egypt along the Nile Valley, occupying present-day Sudan and southern Egypt",
      "In the dense equatorial rainforest of West Africa",
      "On the northern coast of the Mediterranean Sea in Greece",
      "In the central Sahara desert far away from all rivers"
    ],
    correct: 0,
    strategy: "Nubia/Kush is located immediately south of Egypt in modern Sudan.",
    derivation: "Stretching along the Nile's cataracts south of Aswan, Nubia was a powerful Nilotic civilization that controlled valuable trade corridors and gold reserves.",
    trap: "Placing Nubia in West Africa or the Mediterranean."
  },
  {
    q: "What historical event in the 8th century BCE demonstrated the military and political zenith of the Kingdom of Kush over Egypt?",
    options: [
      "Kushite rulers (such as King Piye and Shabaka) conquered Egypt and established the 25th 'Black Pharaoh' Dynasty",
      "Kushite armies sailed across the Atlantic Ocean to explore the Americas",
      "Kush signed a peace treaty surrendering all its lands to the Roman Empire",
      "Kushites dismantled all pyramids across the Nile"
    ],
    correct: 0,
    strategy: "Kushite conquest of Egypt = 25th Dynasty.",
    derivation: "Under King Piye, Nubian forces unified the entire Nile Valley, ruling Egypt and Nubia as the 25th Dynasty for nearly a century and revitalizing pyramid building.",
    trap: "Believing Nubia was always subordinate to Egypt without recognizing its era of imperial rule."
  },
  {
    q: "What valuable trade goods did Nubia export northward to Egypt and the Mediterranean world?",
    options: [
      "Gold, ivory, ebony wood, cattle, and incense",
      "Manufactured motor vehicles and firearms",
      "Paper currency and synthetic petroleum",
      "Polar bear pelts and arctic seal oil"
    ],
    correct: 0,
    strategy: "Nubia was famed for gold (Nub = gold in Egyptian), ivory, and incense.",
    derivation: "Nubia served as the primary mercantile conduit linking sub-Saharan tropical raw materials (fine woods, ivory, exotic animal skins, and alluvial gold) with the Mediterranean economies.",
    trap: "Including modern manufactured items in ancient trade networks."
  }
]);

// 5.3 The Kingdom of Meroë
setQ(4, 2, [
  {
    q: "For which groundbreaking industrial and metallurgical technology was the ancient Kushite capital of Meroë world-renowned?",
    options: [
      "Large-scale iron smelting and manufacturing of iron tools and weapons",
      "Automated robotic spinning looms",
      "Chemical production of gunpowder",
      "Nuclear power generation"
    ],
    correct: 0,
    strategy: "Meroë is renowned in African history as a major iron-smelting center.",
    derivation: "Blessed with extensive iron ore deposits and acacia woodlands for charcoal fuel, Meroë became an iron metallurgical powerhouse, leaving behind massive slag heaps documented by archaeologists.",
    trap: "Confusing Meroitic ironworking with modern industrialization."
  },
  {
    q: "How did the royal pyramids of Meroë differ architecturally from the earlier Old Kingdom pyramids of Giza in Egypt?",
    options: [
      "Meroitic pyramids were smaller, had much steeper slope angles, and featured attached offering chapels facing east",
      "Meroitic pyramids were built entirely of transparent glass",
      "Meroitic pyramids were spherical globes rather than pyramids",
      "Meroitic pyramids were built underground in submerged lakes"
    ],
    correct: 0,
    strategy: "Meroë pyramids: smaller footprint, steep incline (approx. 70°), distinctive offering chapels.",
    derivation: "Over 200 steep-sided royal tombs were constructed in the royal necropolises of Meroë and Begrawiya, exhibiting distinctive Kushite artistic synthesis.",
    trap: "Assuming Kushite pyramids were identical in size and angle to the Great Pyramid of Giza."
  },
  {
    q: "What distinct indigenous script did Meroë develop to replace Egyptian hieroglyphics for recording its own language?",
    options: ["Meroitic script (hieroglyphic and cursive forms)", "Cuneiform tablets", "Latin alphabet", "Coptic Greek script"],
    correct: 0,
    strategy: "Meroë created its own unique script: Meroitic.",
    derivation: "By the 2nd century BCE, Meroë developed an alphabetic script consisting of 23 signs in both hieroglyphic and cursive styles to write the Meroitic tongue.",
    trap: "Believing Meroë continued to use only Egyptian hieroglyphs."
  }
]);

// =========================================================================
// UNIT 6: States and Peoples of Ancient and Medieval Ethiopia
// =========================================================================

// 6.1 Aksum, Lalibela and Gondar
setQ(5, 0, [
  {
    q: "Which remarkable economic and commercial milestone made the Kingdom of Aksum unique among all sub-Saharan African civilizations?",
    options: [
      "Minting its own gold, silver, and bronze currency bearing the effigies of its monarchs and state symbols",
      "Building the world's first wooden airplanes",
      "Banning all foreign maritime trade across the Red Sea",
      "Refusing to use written language in public affairs"
    ],
    correct: 0,
    strategy: "Aksum minted its own indigenous coins from King Endubis onwards.",
    derivation: "From circa 270 CE (King Endubis), Aksum issued official coinage in gold, silver, and bronze for international and domestic commerce, facilitating integration with the Roman, Byzantine, and Persian empires.",
    trap: "Believing Aksum relied solely on barter without monetary coinage."
  },
  {
    q: "During which historical dynasty were the eleven monolithic rock-hewn churches of Lalibela carved out of volcanic tuff?",
    options: ["The Zagwe Dynasty (under King Lalibela)", "The Solomonic Dynasty of Gondar", "The Aksumite Dynasty of King Ezana", "The Funj Sultanate"],
    correct: 0,
    strategy: "Lalibela rock-hewn churches = Zagwe dynasty (12th–13th century).",
    derivation: "King Gebre Mesqel Lalibela directed the excavation of 11 monolithic and semi-monolithic churches (such as Bete Giyorgis and Bete Medhane Alem) in Roha (Lalibela) to establish a 'New Jerusalem'.",
    trap: "Attributing the Lalibela churches to the 17th-century Gondarine period."
  },
  {
    q: "What architectural legacy characterizes the 17th- and 18th-century imperial capital of Gondar, founded by Emperor Fasilides in 1636?",
    options: [
      "The Fasil Ghebbi (Royal Enclosure) with magnificent stone castles, banqueting halls, and royal baths",
      "Giant wooden pyramids built in marshlands",
      "Underground limestone caves without doorways",
      "Clay beehive huts built without mortar"
    ],
    correct: 0,
    strategy: "Gondar = Fasil Ghebbi stone castles (Fasilides, Bakaffa, Mentewab).",
    derivation: "Fasilides ended the tradition of mobile tent capitals by establishing Gondar, constructing stone castles exhibiting a fusion of Ethiopian, Portuguese, and Indo-Islamic architectural styles.",
    trap: "Thinking Gondar was a nomadic tent camp."
  }
]);

// 6.2 The Islamic Sultanates of the Horn
setQ(5, 1, [
  {
    q: "Which major medieval Islamic sultanate flourished in the eastern foothills and trade routes of the Horn of Africa, later shifting its center to Adal?",
    options: ["The Sultanate of Ifat", "The Sultanate of Zanzibar", "The Mali Empire", "The Kingdom of Songhai"],
    correct: 0,
    strategy: "Ifat and Adal were prominent Islamic sultanates in the eastern Horn.",
    derivation: "Established by the Walasma dynasty, Ifat controlled strategic caravan corridors between the central Ethiopian highlands and the Red Sea/Gulf of Aden port of Zeila. After highland conflicts, power shifted to the Sultanate of Adal.",
    trap: "Confusing Ethiopian Horn sultanates with West African empires like Mali."
  },
  {
    q: "What ancient walled city in eastern Ethiopia served as a renowned international center of Islamic learning, commerce, and distinctive urban architecture?",
    options: ["Harar Jugol", "Adwa", "Lalibela", "Axum"],
    correct: 0,
    strategy: "Harar Jugol: fortified historic walled city, 4th holiest city in Islam.",
    derivation: "Surrounded by the 16th-century stone wall (Jugol) built by Amir Nur, Harar became a bustling Islamic scholarly and mercantile hub with its own currency, mosques, and trade connections.",
    trap: "Selecting Lalibela or Axum, which were centers of Christian monasticism and statecraft."
  },
  {
    q: "What vital economic role did coastal port cities like Zeila play for both Christian highland kingdoms and Muslim sultanates?",
    options: [
      "They served as premier maritime gateways exchanging highland ivory, gold, civet, and coffee for imported silks, ceramics, and spices",
      "They were uninhabited fishing banks with no mercantile ties to the interior",
      "They prohibited all caravans from the interior from reaching the coast",
      "They only traded with polar ice fishermen"
    ],
    correct: 0,
    strategy: "Zeila was the main maritime trade conduit for the Horn of Africa.",
    derivation: "Zeila on the Gulf of Aden was the economic lifeline through which long-distance caravan routes transported highland commodities to Arabia, India, and China.",
    trap: "Assuming religious rivalries prevented all commercial trade through ports."
  }
]);

// 6.3 Population Movements, Interaction and the Gadaa System
setQ(5, 2, [
  {
    q: "What is the indigenous Gadaa System practiced by the Oromo people?",
    options: [
      "A comprehensive, democratic socio-political system based on generation sets (misensa) and eight-year leadership cycles",
      "A hereditary absolute monarchy where the oldest son rules for life",
      "A military dictatorship led by foreign mercenaries",
      "A religious cult that forbids all elections and community assemblies"
    ],
    correct: 0,
    strategy: "Gadaa = democratic socio-political system of age grades, 8-year terms, assembly rule.",
    derivation: "Inscribed by UNESCO as Intangible Cultural Heritage, the Gadaa system organizes society into generation classes that advance through 8-year stages, electing an Abbaa Gadaa to lead governance, dispute resolution, and law-making.",
    trap: "Confusing the Gadaa system with hereditary kingship."
  },
  {
    q: "What were the primary historical drivers of large-scale population movements in medieval Ethiopia (such as the 16th-century Oromo population movement)?",
    options: [
      "Demographic growth, search for fertile grazing lands, climatic pressures, and the aftermath of devastating 16th-century wars",
      "A desire to sail across the Atlantic Ocean",
      "Orders from foreign European colonial governors",
      "Building tourist amusement parks"
    ],
    correct: 0,
    strategy: "Demographic expansion, grazing pasture needs, and regional power vacuums after the Christian-Adal wars.",
    derivation: "The prolonged wars between the Christian Kingdom and the Sultanate of Adal exhausted regional defenses, facilitating the northward movement of pastoral Oromo communities seeking pasture, water, and integration across highland communities.",
    trap: "Attributing medieval population movements to European colonial commands."
  },
  {
    q: "Through which socio-cultural adoption institutions (such as Guddifachaa and Moggaasa) did interacting Ethiopian communities peacefully integrate newcomers?",
    options: [
      "Indigenous adoption and fosterage institutions that granted full clan membership, equal property rights, and mutual protection",
      "Permanent enslavement in underground mines",
      "Expulsion of all adopted children into foreign territories",
      "Denial of legal and inheritance rights"
    ],
    correct: 0,
    strategy: "Guddifachaa (child adoption) and Moggaasa (clan incorporation) foster social cohesion.",
    derivation: "Moggaasa incorporated non-Oromo groups into Oromo clans as equal kin, while Guddifachaa legally adopted children with full inheritance rights, cementing multi-ethnic integration.",
    trap: "Assuming integration was achieved exclusively through warfare without peaceful legal institutions."
  }
]);

// 6.4 The Economic Base of Medieval States
setQ(5, 3, [
  {
    q: "What formed the foundational economic base for state revenue, military sustenance, and royal courts in medieval Ethiopia?",
    options: [
      "Agricultural peasant production (plow-based grain farming and pastoralism) supplemented by tribute and internal trade taxation",
      "Exporting high-tech microchips to Europe",
      "Stock market investments in overseas banks",
      "Automobile manufacturing tariffs"
    ],
    correct: 0,
    strategy: "Ox-plow agriculture and land tribute underpinned medieval Ethiopian states.",
    derivation: "The medieval state drew its sustenance from peasant agricultural surpluses through land tenure systems (Gult, Rist), grain tithes, livestock tribute, and tolls collected along long-distance caravan trade corridors.",
    trap: "Looking for modern financial instruments in medieval feudal economies."
  },
  {
    q: "What was the 'Gult' system in medieval Ethiopian land tenure?",
    options: [
      "A state-granted right given to nobility and church officials to collect tribute and judicial dues from peasants farming the land",
      "Peasants owning all rights to sell land to foreign buyers",
      "A government program giving free tractors to smallholders",
      "A tax applied exclusively on ocean-going ships"
    ],
    correct: 0,
    strategy: "Gult = right to collect tribute; Rist = hereditary peasant land-use right.",
    derivation: "While peasants held hereditary user rights (Rist) to cultivate their ancestral plots, the crown granted Gult rights to regional lords, soldiers, and monasteries to extract tribute and labor services.",
    trap: "Confusing Gult (tribute-collection privilege) with Rist (hereditary cultivator ownership)."
  },
  {
    q: "Which commodities served as widely accepted domestic 'primitive currencies' (mediums of exchange) in medieval and early modern Ethiopian markets?",
    options: ["Amole (rock salt bars) and Maria Theresa Thalers", "Plastic credit cards", "Copper electrical wires", "Paper banknotes printed in Addis Ababa"],
    correct: 0,
    strategy: "Amole salt bars from the Afar Danakil were Ethiopia's traditional commodity currency.",
    derivation: "Quarried in the Danakil depression, bars of rock salt (Amole) functioned as standard currency throughout Ethiopia for centuries, later joined in the late 18th century by the Austrian silver Maria Theresa Thaler.",
    trap: "Believing paper money was circulating throughout medieval Ethiopia."
  }
]);

// =========================================================================
// UNIT 7: Contemporary Global Issues
// =========================================================================

// 7.1 Environmental Challenges and Pollution
setQ(6, 0, [
  {
    q: "How is 'Environmental Pollution' scientifically defined in contemporary geography?",
    options: [
      "The introduction of harmful contaminants, waste substances, or energy into natural environments at rates faster than nature can safely dilute or assimilate",
      "The natural falling of rain and snow on mountain summits",
      "The normal breathing of forest animals releasing carbon dioxide",
      "The growth of wildflowers in open meadows"
    ],
    correct: 0,
    strategy: "Pollution = introduction of contaminants causing ecological harm or human hazard.",
    derivation: "Pollutants (chemical toxins, plastic non-biodegradable waste, excessive particulates, thermal discharge) destabilize ecosystems, diminish biodiversity, and threaten human public health.",
    trap: "Treating natural biological processes as environmental pollution."
  },
  {
    q: "What is the primary cause of urban air pollution and smog in rapidly expanding cities across the developing world?",
    options: [
      "Vehicular exhaust emissions from aging, unmaintained vehicles, industrial smoke, and open combustion of municipal waste",
      "Widespread planting of municipal shade trees in parks",
      "Installation of electric light bulbs inside residential homes",
      "Water vapor evaporating from public swimming pools"
    ],
    correct: 0,
    strategy: "Vehicle emissions, dirty fuels, industrial smokestacks, and open waste burning.",
    derivation: "High concentrations of fine particulate matter (PM2.5, PM10), nitrogen oxides (NOx), and carbon monoxide (CO) stem from diesel engines, industrial boilers, and uncontrolled waste combustion.",
    trap: "Attributing urban smog to forest trees or swimming pools."
  },
  {
    q: "Which comprehensive management strategy addresses municipal plastic and solid waste management sustainably?",
    options: [
      "The '3Rs' hierarchy: Reduce consumption, Reuse materials, and Recycle plastic/glass into new products",
      "Dumping all raw waste directly into municipal rivers and lakes",
      "Burying plastic waste under fertile agricultural cropland",
      "Burning all plastic waste in backyards at low temperatures"
    ],
    correct: 0,
    strategy: "Waste hierarchy: Reduce > Reuse > Recycle.",
    derivation: "The 3Rs minimize extraction of virgin resources, reduce landfill volume, and curb plastic contamination in marine and terrestrial food chains.",
    trap: "Selecting open dumping or burning, which worsens soil and air toxicity."
  }
]);

// 7.2 Demographic Overload
setQ(6, 1, [
  {
    q: "What constitutes 'Demographic Overload' in socioeconomic development?",
    options: [
      "When population growth significantly outpaces the capacity of existing economic resources, infrastructure, schools, hospitals, and jobs to provide adequate living standards",
      "When a country runs out of elderly citizens to serve in government",
      "When the birth rate drops to zero across an entire continent",
      "When all citizens emigrate to other countries at the exact same time"
    ],
    correct: 0,
    strategy: "Demographic overload = population growth outstripping infrastructure and public services.",
    derivation: "Rapid demographic expansion without proportional investment in capital, water infrastructure, educational facilities, and job creation leads to urban overcrowding, youth unemployment, and ecological stress.",
    trap: "Confusing demographic overload with declining birth rates."
  },
  {
    q: "Which public policy intervention is proven to be the most effective, ethical, and sustainable long-term response to demographic overload?",
    options: [
      "Expanding universal girls' secondary and higher education, providing accessible maternal healthcare and voluntary family planning services",
      "Imposing forced relocations and cutting off food supplies to poor families",
      "Banning female enrollment in secondary schools and universities",
      "Closing all rural medical clinics to cut public spending"
    ],
    correct: 0,
    strategy: "Female education and accessible voluntary reproductive healthcare naturally lower fertility rates.",
    derivation: "Educating young women delays marriage age, enhances female workforce participation, reduces infant mortality, and empowers voluntary family planning, naturally accelerating demographic transition.",
    trap: "Selecting coercive or authoritarian measures that violate human rights."
  },
  {
    q: "What urban development phenomenon frequently emerges when rapid rural-to-urban migration overwhelms city municipal housing capacity?",
    options: [
      "The proliferation of informal settlements (slums) lacking clean piped water, sanitation, and electricity",
      "An immediate surplus of luxurious affordable apartments for all residents",
      "A complete elimination of urban traffic congestion",
      "A massive expansion of untouched wilderness inside city centers"
    ],
    correct: 0,
    strategy: "Informal settlements and slums arise from unmanaged urban migration.",
    derivation: "When municipal authorities cannot keep pace with housing demand, incoming migrants settle on marginal lands without building permits, creating dense settlements vulnerable to disease outbreaks and fire hazards.",
    trap: "Believing rapid migration automatically generates surplus housing."
  }
]);

// 7.3 Terrorism and Regional Security
setQ(6, 2, [
  {
    q: "What is the defining characteristic of 'Terrorism' distinguishing it from conventional warfare?",
    options: [
      "The deliberate, systematic use or threat of violence against civilians and non-combatants to induce fear and coerce political, ideological, or religious ends",
      "Formal combat between uniformed military armies on open battlefields",
      "Peaceful diplomatic debates conducted within the United Nations General Assembly",
      "Citizens casting secret ballots in municipal elections"
    ],
    correct: 0,
    strategy: "Terrorism targets civilians to create fear for ideological/political objectives.",
    derivation: "Terrorism uses asymmetrical, unlawful violence against civilian infrastructure, schools, and markets to intimidate populations and destabilize government institutions.",
    trap: "Equating terrorism with legitimate law-enforcement operations or conventional defensive warfare."
  },
  {
    q: "Why is a multifaceted strategy combining community resilience, the rule of law, and economic opportunity essential for countering terrorism?",
    options: [
      "Security forces alone cannot solve the underlying grievances, youth unemployment, and ideological radicalization that terrorist recruiters exploit",
      "Military forces are legally banned from carrying firearms in public",
      "Terrorists only negotiate with foreign tourist agencies",
      "Economic growth automatically makes weapons disappear"
    ],
    correct: 0,
    strategy: "Holistic counter-terrorism addresses root causes (marginalization, joblessness, extremist ideology).",
    derivation: "Lasting peace requires upholding human rights, expanding youth employment, fostering interfaith dialogue, and providing equitable justice alongside professional security intelligence.",
    trap: "Assuming purely military force without addressing socioeconomic root causes is sufficient."
  },
  {
    q: "What regional body in Eastern Africa coordinates peace, security, and counter-terrorism cooperation among member states, including Ethiopia?",
    options: ["IGAD (Intergovernmental Authority on Development)", "NATO", "OAS (Organization of American States)", "ASEAN"],
    correct: 0,
    strategy: "Horn of Africa regional organization = IGAD.",
    derivation: "Headquartered in Djibouti with strong Ethiopian leadership, IGAD coordinates regional security, drought resilience, and peace-building operations across the Horn.",
    trap: "Selecting trans-Atlantic or Asian organizations like NATO or ASEAN."
  }
]);

// 7.4 Human Trafficking and Safe Migration
setQ(6, 3, [
  {
    q: "According to the UN Palermo Protocol, what constitutes 'Human Trafficking'?",
    options: [
      "The recruitment, transportation, transfer, harboring, or receipt of persons by means of threat, force, fraud, or deception for the purpose of exploitation",
      "Traveling overseas on a valid passport and tourist visa to visit family",
      "Legally immigrating with an authorized work permit issued by an embassy",
      "Applying online for a university scholarship abroad"
    ],
    correct: 0,
    strategy: "Trafficking = force/fraud/coercion + exploitation (labor, organ, or sexual).",
    derivation: "Human trafficking involves deceptive recruitment and coercion to subject vulnerable victims to forced labor, debt bondage, or commercial exploitation.",
    trap: "Confusing legal migration or tourism with criminal trafficking."
  },
  {
    q: "What is the critical distinction between 'Human Trafficking' and 'Human Smuggling'?",
    options: [
      "Smuggling involves voluntary, consensual assistance to cross an international border illegally; Trafficking involves ongoing coercion, force, and exploitation",
      "Smuggling always involves legal airplanes; Trafficking only uses rowboats",
      "Smuggling is legal in all countries; Trafficking is only illegal in winter",
      "There is no difference; they are identical legal concepts"
    ],
    correct: 0,
    strategy: "Smuggling = consensual illegal border transit (crime against state) | Trafficking = ongoing exploitation/force (crime against person).",
    derivation: "While smuggling ends once the migrant crosses the border, trafficking involves continuous exploitation, confiscation of travel documents, and debt bondage, even if the victim initially agreed to travel.",
    trap: "Assuming smuggled migrants are always trafficking victims from the outset."
  },
  {
    q: "Which preventative measure most effectively protects vulnerable rural youth from falling prey to illegal trafficking syndicates?",
    options: [
      "Public awareness campaigns, vocational skills training, creating local entrepreneurship opportunities, and providing official channels for safe, legal migration",
      "Confiscating all books and shutting down mobile phone connectivity in rural villages",
      "Encouraging youth to trust unregistered brokers who promise free visas",
      "Barring citizens from ever discussing migration with their families"
    ],
    correct: 0,
    strategy: "Awareness of broker deception + local economic alternatives + verified legal migration channels.",
    derivation: "Equipping young people with livelihood skills, reliable information regarding broker fraud, and safe labor pathways eliminates the desperation traffickers exploit.",
    trap: "Trusting informal smugglers or withholding migration warnings."
  }
]);

// =========================================================================
// UNIT 8: Official CBA Examination & High-Yield Mastery
// =========================================================================

// 8.1 High-Yield Core Differences & Exam Definitions
setQ(7, 0, [
  {
    q: "In national exam review, what is the core physical difference between 'Rotation' and 'Revolution'?",
    options: [
      "Rotation is Earth spinning on its axis (causing day and night, 24 hours); Revolution is Earth orbiting the Sun (causing years and seasons, 365¼ days)",
      "Rotation takes 365 days; Revolution takes 24 hours",
      "Rotation causes earthquakes; Revolution causes volcanic vents",
      "Rotation moves the planets away from the Sun; Revolution pulls them in"
    ],
    correct: 0,
    strategy: "Rotation = 24-hr axis spin (day/night) | Revolution = 365.25-day orbit around Sun (seasons).",
    derivation: "Official curriculum high-yield pair: Rotation occurs around the internal axis; Revolution describes orbital motion around the external solar barycenter.",
    trap: "Mixing up the time durations."
  },
  {
    q: "What is the crucial physical distinction between 'Magma' and 'Lava'?",
    options: [
      "Magma is molten rock confined beneath Earth's surface; Lava is molten rock that has extruded onto the surface",
      "Magma is cold granite stone; Lava is boiling ocean water",
      "Magma only occurs in deserts; Lava only occurs in polar ice caps",
      "Magma is solid metal; Lava is vaporized gas"
    ],
    correct: 0,
    strategy: "Magma = underground | Lava = at surface.",
    derivation: "Direct booklet definition: Magma exists in the subsurface magma chamber or conduit; upon reaching the atmosphere or ocean floor, it is called lava.",
    trap: "Calling underground intrusions lava."
  },
  {
    q: "How does 'Population Density' differ from 'Total Population'?",
    options: [
      "Total Population is the gross count of individuals; Population Density is the number of people per unit of land area (people/km²)",
      "Total Population is measured in square kilometers; Population Density is measured in kilograms",
      "Total Population only counts adults; Population Density only counts infants",
      "They are identical mathematical expressions"
    ],
    correct: 0,
    strategy: "Total = gross count | Density = count divided by area.",
    derivation: "Arithmetic density reflects concentration pressure on available geographical territory: Density = Total Population ÷ Total Area.",
    trap: "Confusing total population count with spatial concentration."
  }
]);

// 8.2 Official CBA Practice Examination: Multiple-Choice Questions (1-10)
setQ(7, 1, [
  {
    q: "1. The movement of the Earth spinning on its own axis is called:",
    options: ["Revolution", "Rotation", "Orbit", "Migration"],
    correct: 1,
    strategy: "Official CBA Booklet Q1: Spinning on axis = Rotation.",
    derivation: "Axial rotation occurs once every 24 hours, generating diurnal light and dark cycles.",
    trap: "Selecting Revolution (orbital motion)."
  },
  {
    q: "2. Which of the Earth's four major spheres contains most of Earth's water?",
    options: ["Biosphere", "Atmosphere", "Hydrosphere", "Lithosphere"],
    correct: 2,
    strategy: "Official CBA Booklet Q2: Hydrosphere = all water.",
    derivation: "The hydrosphere encompasses 97% saline ocean water and 3% freshwater reserves.",
    trap: "Confusing hydrosphere with atmosphere."
  },
  {
    q: "3. What type of rock is formed directly from the cooling and solidification of molten magma or lava?",
    options: ["Igneous rock", "Sedimentary rock", "Metamorphic rock", "Mineral ore"],
    correct: 0,
    strategy: "Official CBA Booklet Q3: Cooled magma/lava = Igneous.",
    derivation: "Igneous rocks (extrusive basalt, intrusive granite) crystallize from molten silicate melt.",
    trap: "Selecting sedimentary or metamorphic."
  },
  {
    q: "4. What does the demographic term 'Population Density' mean?",
    options: ["Number of births per year", "Number of people per unit area", "Total births in a hospital", "Rate of international migration"],
    correct: 1,
    strategy: "Official CBA Booklet Q4: Population density = people per unit area.",
    derivation: "Density measures spatial concentration, expressed as people per square kilometer.",
    trap: "Selecting annual birth rate."
  },
  {
    q: "5. Which of the following natural resources is renewable when properly and sustainably managed?",
    options: ["Coal deposits", "Petroleum reserves", "Forests", "Metallic iron ore"],
    correct: 2,
    strategy: "Official CBA Booklet Q5: Forests regenerate naturally on human timescales.",
    derivation: "Forests regenerate through biological seed cycles when harvest rates do not exceed replenishment.",
    trap: "Classifying finite mineral ores as renewable."
  },
  {
    q: "6. Ancient Egyptian civilization developed primarily along the fertile banks of which major river?",
    options: ["The Nile River", "The Congo River", "The Niger River", "The Zambezi River"],
    correct: 0,
    strategy: "Official CBA Booklet Q6: Ancient Egypt = Nile River.",
    derivation: "The Nile's seasonal inundations deposited fertile black silt, transforming a desert into an agricultural heartland.",
    trap: "Selecting Congo or Niger."
  },
  {
    q: "7. The ancient city of Meroë was associated with which prominent historic kingdom?",
    options: ["The Kingdom of Kush (Nubia)", "The Roman Empire", "Ancient Greece", "The Kingdom of Aksum"],
    correct: 0,
    strategy: "Official CBA Booklet Q7: Meroë = Kingdom of Kush.",
    derivation: "Meroë served as the southern capital of Kush, renowned for its steep pyramids and iron smelting.",
    trap: "Confusing Meroë with Aksum."
  },
  {
    q: "8. The ancient Kingdom of Aksum was especially famous for connecting with global trade through which body of water?",
    options: ["Red Sea trade routes", "American Atlantic colonies", "Baltic Sea fisheries", "Pacific coral atolls"],
    correct: 0,
    strategy: "Official CBA Booklet Q8: Aksum connected through the Red Sea (port of Adulis).",
    derivation: "Aksum's chief port of Adulis on the Red Sea linked interior African exports with Rome, Byzantium, and India.",
    trap: "Selecting Atlantic or Pacific."
  },
  {
    q: "9. The democratic Gadaa system is an indigenous governance and social organization system of which people?",
    options: ["The Oromo people", "Ancient Egyptian pharaohs", "Roman legal courts", "Ancient Greek philosophers"],
    correct: 0,
    strategy: "Official CBA Booklet Q9: Gadaa = Oromo democratic governance.",
    derivation: "The Gadaa system is the traditional Oromo egalitarian socio-political institution with 8-year generational leadership terms.",
    trap: "Attributing Gadaa to foreign civilizations."
  },
  {
    q: "10. Human trafficking primarily involves which unlawful practice?",
    options: ["Ordinary international tourism", "Exploitation of human beings through deception or force", "Legal registered trade of cargo goods", "Domestic bus transportation"],
    correct: 1,
    strategy: "Official CBA Booklet Q10: Human trafficking = exploitation through force, fraud, or coercion.",
    derivation: "Trafficking deprives individuals of freedom and dignity through forced labor, servitude, or exploitation.",
    trap: "Viewing trafficking as routine travel or transport."
  }
]);

// 8.3 Official CBA Practice Examination: Short-Answer Questions (11-30)
setQ(7, 2, [
  {
    q: "11. What are two primary pieces of observational evidence proving that the Earth is approximately spherical?",
    options: [
      "Curved horizon from high altitudes and circular shadows cast on the Moon during lunar eclipses",
      "The existence of clouds in the sky and blowing winds",
      "Rivers flowing only at daytime",
      "The presence of green grass on fields"
    ],
    correct: 0,
    strategy: "CBA Booklet #11: Curved horizon, lunar eclipse shadow, hull-first disappearance of distant ships.",
    derivation: "During lunar eclipses, the Earth's shadow cast upon the Moon is always circular regardless of orbital angle, which can only be produced by a sphere.",
    trap: "Selecting atmospheric weather phenomena like clouds."
  },
  {
    q: "12. What are the four major external interactive spheres of the Earth system?",
    options: [
      "Lithosphere (rock), Atmosphere (air), Hydrosphere (water), and Biosphere (life)",
      "North, South, East, and West",
      "Solid, Liquid, Gas, and Plasma",
      "Crust, Mantle, Outer Core, and Inner Core"
    ],
    correct: 0,
    strategy: "CBA Booklet #12: External spheres = Litho, Atmo, Hydro, Bio.",
    derivation: "The Earth system operates through complex biogeochemical exchanges among its four external spheres.",
    trap: "Confusing external spheres with internal structural layers (crust, mantle, core)."
  },
  {
    q: "13. What are the three major genetic classifications of rocks found in the Earth's crust?",
    options: [
      "Igneous, Sedimentary, and Metamorphic rocks",
      "Gold, Silver, and Bronze minerals",
      "Hard, Soft, and Liquid rocks",
      "Volcanic ash, Sea water, and Glacier ice"
    ],
    correct: 0,
    strategy: "CBA Booklet #14: Three rock families: Igneous, Sedimentary, Metamorphic.",
    derivation: "Rocks are categorized by origin: Igneous (solidified melt), Sedimentary (lithified sediment), and Metamorphic (thermally/mechanically altered).",
    trap: "Classifying individual minerals as rock families."
  },
  {
    q: "14. What are two major natural and socioeconomic reasons why human population is unevenly distributed across the globe?",
    options: [
      "Variations in climate and water availability, as well as relief, fertile soils, and economic job opportunities",
      "Legal mandates that all humans must live in identical grid squares",
      "Every country having the exact same mountain elevation",
      "Random movement of continents on a daily basis"
    ],
    correct: 0,
    strategy: "CBA Booklet #15: Climate, water, relief, soils, jobs, transport, and history dictate population density.",
    derivation: "Harsh environments (hyper-arid deserts, glaciated poles) inhibit settlement, while fertile alluvial plains with temperate climates attract dense human concentrations.",
    trap: "Attributing settlement distribution to daily continental movement."
  },
  {
    q: "15. How does the official curriculum define 'Human Evolution'?",
    options: [
      "The long-term biological and cultural development of humans from earlier hominin ancestors",
      "The immediate transformation of monkeys into humans in a single generation",
      "The process of building taller stone skyscrapers",
      "The invention of personal computers in the 20th century"
    ],
    correct: 0,
    strategy: "CBA Booklet #16: Evolution = long-term biological and cultural development from hominin ancestors.",
    derivation: "Paleoanthropological evolution traces morphological adaptations (bipedalism, encephalization) alongside cultural innovations (Oldowan and Acheulean tool traditions).",
    trap: "Viewing evolution as an instantaneous single-generation metamorphosis."
  },
  {
    q: "16. What is the fundamental distinction between an 'Overpopulated' and an 'Optimal' population?",
    options: [
      "Overpopulation means population pressure exceeds available resources/services; Optimal population is the ideal size balanced with resources and technology to yield maximum living standards",
      "Overpopulation means zero children; Optimal population means 100 children per family",
      "Overpopulation only happens in winter; Optimal population only happens in summer",
      "There is no difference between them"
    ],
    correct: 0,
    strategy: "CBA Booklet #20: Overpopulated (pressure > resources) vs Optimal (equilibrium yielding highest per capita output).",
    derivation: "Optimal population achieves maximum efficiency given capital and tech; overpopulation causes diminishing marginal returns and environmental stress.",
    trap: "Equating overpopulation with gross population numbers rather than resource carrying capacity."
  },
  {
    q: "17. What were two seminal cultural and architectural contributions of ancient Egyptian civilization to humanity?",
    options: [
      "Hieroglyphic writing and monumental stone architecture (such as the Pyramids and Karnak temple)",
      "Invention of digital television and steam locomotives",
      "Building nuclear submarines and nylon polymers",
      "Creating the modern internet and microprocessors"
    ],
    correct: 0,
    strategy: "CBA Booklet #22: Writing (hieroglyphics), monumental architecture (pyramids), mathematics, medicine, calendar.",
    derivation: "Egyptian civilization pioneered monumental stone masonry, papyrus manufacturing, a 365-day solar calendar, and specialized medical surgery.",
    trap: "Selecting modern electronic inventions."
  },
  {
    q: "18. What were two prominent historical characteristics of the ancient Kingdom of Aksum?",
    options: [
      "Minting its own official coinage and erecting giant monolithic granite stelae at royal tombs",
      "Constructing wooden suspension bridges across the Atlantic Ocean",
      "Refusing to engage in international commerce with Rome or Persia",
      "Operating underground coal mines with electric drills"
    ],
    correct: 0,
    strategy: "CBA Booklet #24: Coinage, monumental stelae, international Red Sea trade, adoption of Christianity.",
    derivation: "Aksum's stelae (such as the 24-meter Obelisk of Aksum) and its bi-lingual royal inscriptions represent peak indigenous architectural and administrative sophistication.",
    trap: "Claiming Aksum was completely isolated from world trade."
  },
  {
    q: "19. What does the demographic concept of 'Demographic Overload' signify?",
    options: [
      "When rapid population expansion exceeds the capacity of municipal resources, infrastructure, schools, and hospitals to meet basic needs",
      "When an airplane carries too much luggage on an international flight",
      "When a country's population decreases by 90% in one month",
      "When all citizens decide to stop working"
    ],
    correct: 0,
    strategy: "CBA Booklet #26: Demographic overload = population pressure outstripping public resource capacity.",
    derivation: "Overload strains municipal sanitation, water supply, teacher-to-student ratios, and hospital bed capacity, producing structural deficits.",
    trap: "Confusing population overload with physical weight on vehicles."
  },
  {
    q: "20. Why is sustainable natural resource use essential for national development?",
    options: [
      "It meets the urgent development needs of the present generation while safeguarding resources and ecological stability for future generations",
      "It mandates burning all forests immediately to clear land for factories",
      "It requires exhausting all underground aquifers in one decade",
      "It prevents future generations from ever using natural resources"
    ],
    correct: 0,
    strategy: "CBA Booklet #30: Sustainable use meets present needs without compromising the future.",
    derivation: "Sustainable stewardship prevents irreparable desertification, topsoil erosion, and aquifer depletion, ensuring enduring prosperity.",
    trap: "Interpreting sustainability as short-term resource exploitation."
  }
]);

// =========================================================================
// SAVE ENRICHED MODULE
// =========================================================================
const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g7_social.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g7Soc, null, 2) + ';\n', 'utf8');

console.log('Successfully enriched g7_social.js with exhaustive AMT questions across all 28 subtopics!');
