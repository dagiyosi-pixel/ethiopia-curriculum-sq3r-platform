const fs = require('fs');
const path = require('path');

console.log('Generating Complete Grade 7 English with all 12 Textbook Units matching English grade 7.pdf...');

const units = [
  { num: 1, title: 'My Village and Town', bigIdea: 'Greetings, personal introductions, simple present tense, and describing local geography in Ethiopia.',
    grammar: 'Simple Present Tense (Habitual actions, universal truths; third person singular -s/-es; Question forms: Do/Does).',
    vocab: 'Village, town, municipality, landmark, neighborhood, scenery, highland, pastoralist.',
    text: 'Abebe and Chaltu describe their hometowns: Hawassa with its beautiful lake shores and fish market, and Debre Berhan known for cool highland breezes and sheep farming.'
  },
  { num: 2, title: 'Ethiopian Languages & Cultural Heritage', bigIdea: 'Linguistic diversity of Ethiopia, Afroasiatic and Nilo-Saharan language families, and degrees of comparison.',
    grammar: 'Comparative and Superlative Adjectives (regular: -er/-est; irregular: good/better/best, bad/worse/worst; more/most for multi-syllable adjectives).',
    vocab: 'Linguistic, dialect, multilingual, indigenous, script (Fidel), bilingual, heritage.',
    text: 'Ethiopia is home to over 80 living languages grouped into Semitic, Cushitic, Omotic, and Nilo-Saharan families, enriching national unity.'
  },
  { num: 3, title: 'Holidays and Festivals in Ethiopia', bigIdea: 'Traditional and religious celebrations, past simple tense, and prepositions of time and place.',
    grammar: 'Simple Past Tense (regular -ed verbs and irregular verbs: went, ate, saw, bought) & Prepositions of Time (at 7:00, on Monday, in September).',
    vocab: 'Celebration, feast, commemoration, bonfire (Demera), hospitality, reconciliation, procession.',
    text: 'Families across Ethiopia gather for Enkutatash (Ethiopian New Year in September), Meskel with the lighting of the Demera bonfire, Timket with colorful processions, and Eid al-Fitr.'
  },
  { num: 4, title: 'I am Going to Visit Lalibela', bigIdea: 'Travel, historical monuments of Ethiopia, and expressing future intentions using "going to".',
    grammar: 'Future Intentions with "Be Going To" + base verb (I am going to visit; She is going to travel; Are you going to fly?).',
    vocab: 'Monolithic, architecture, pilgrimage, excavation, itinerary, heritage, chisel, sanctuary.',
    text: 'A student writes an exciting travel itinerary planning a holiday trip to the 11 rock-hewn churches of Lalibela, carved out of volcanic tuff.'
  },
  { num: 5, title: 'The Historic Victory of Adwa', bigIdea: 'Historical narratives, courage, and contrasting Past Continuous with Simple Past.',
    grammar: 'Past Continuous Tense (was/were + verb-ing) interrupted by Past Simple (e.g., While the soldiers were marching, the signal sounded).',
    vocab: 'Patriotism, sovereignty, brigade, cavalry, artillery, bravery, mobilization, victory.',
    text: 'On March 1, 1896, Ethiopian patriots led by Emperor Menelik II and Empress Taytu Betul triumphed over Italian colonial forces at Adwa, preserving freedom.'
  },
  { num: 6, title: 'How is a Gabi Made? Traditional Craftsmanship', bigIdea: 'Traditional cotton spinning and weaving, sequence connectors, and Simple Present Passive Voice.',
    grammar: 'Simple Present Passive Voice (Subject + am/is/are + Past Participle: Cotton is harvested; Threads are spun; A gabi is woven).',
    vocab: 'Weaving, loom, spindle, cotton, shuttle, artisan, embroidery (Tibeb), garment.',
    text: 'Raw cotton is cleaned, carded, and spun into fine thread on a traditional spindle (Inzirt). The skilled weaver (Shemane) uses a wooden foot-loom to weave warm white gabis and netelas.'
  },
  { num: 7, title: 'Have You Ever? Personal Experiences', bigIdea: 'Sharing life experiences, achievements, and mastering the Present Perfect Tense with "ever" and "never".',
    grammar: 'Present Perfect Tense (have/has + Past Participle) with "ever" (in questions) and "never" (in negative statements).',
    vocab: 'Experience, achievement, expedition, summit, crater, national park, wildlife.',
    text: 'Students interview each other: "Have you ever climbed Mount Ras Dejen?" "No, I have never climbed it, but I have visited the Blue Nile Falls in Bahir Dar."'
  },
  { num: 8, title: 'How Does It Work? Science and Everyday Gadgets', bigIdea: 'Scientific processes, giving clear technical instructions, and Imperative sentence structures.',
    grammar: 'Imperative Sentences for instructions (e.g., Turn on the power; Do not touch exposed wires) & Sequencing Connectors (First, Second, Then, Next, Finally).',
    vocab: 'Apparatus, procedure, device, switch, terminal, circuit, solar panel, instructions.',
    text: 'A step-by-step technical guide explaining how a solar lantern converts sunlight into electrical energy to illuminate a rural student’s study desk at night.'
  },
  { num: 9, title: 'Traditional Games & Sports in Ethiopia', bigIdea: 'Indigenous sports (Genna, Gugs, Korbo), physical fitness, and Modal Verbs of Ability (can, could, be able to).',
    grammar: 'Modal Verbs of Ability (Can / Cannot for present ability; Could / Couldn’t for past ability; Be able to for future).',
    vocab: 'Horsemanship, curved stick, leather ball, tournament, stamina, teamwork, referee.',
    text: 'Genna is a traditional hockey-like game played during Christmas with wooden curved sticks (Gennaye) and a wooden ball (Rur). Gugs showcases peerless equestrian skill and spear-throwing bravery.'
  },
  { num: 10, title: 'Taking Care of Animals & Wildlife', bigIdea: 'Animal welfare, livestock care, endemic Ethiopian wildlife, and Countable vs Uncountable Nouns with Quantifiers.',
    grammar: 'Countable vs Uncountable Nouns & Quantifiers (many, few with countable; much, little with uncountable; a lot of with both).',
    vocab: 'Livestock, pasture, veterinary, vaccination, endemic, sanctuary, walia ibex, habitat.',
    text: 'Ethiopia holds Africa’s largest livestock population. Caring for farm animals requires clean water, proper fodder, and veterinary vaccinations, alongside protecting endemic wildlife in Bale and Simien.'
  },
  { num: 11, title: 'Say No to Early Marriage: Civic Advocacy', bigIdea: 'Human rights, advocating for girls’ education, and Modal Verbs of Obligation and Advice (should, must, ought to).',
    grammar: 'Modal Verbs of Obligation and Advice (Must for legal/moral necessity; Should / Ought to for strong recommendations).',
    vocab: 'Advocacy, education, equality, empowerment, legislation, dignity, potential, community.',
    text: 'An inspiring youth debate illustrating how keeping girls in school past age 18 unlocks their potential to become doctors, engineers, and teachers, ending cycles of poverty.'
  },
  { num: 12, title: 'I Have Already Done That: Time and Perfection', bigIdea: 'Reflecting on completed tasks, punctuality, and Present Perfect Tense with "already", "just", "yet", "since", and "for".',
    grammar: 'Present Perfect Tense with Time Adverbs (Already = sooner than expected; Just = a moment ago; Yet = up to now in negatives/questions; Since + point in time; For + duration).',
    vocab: 'Accomplishment, deadline, assignment, progress, timetable, punctuality, completion.',
    text: 'A diligent student reviews their weekly study schedule: "I have already finished my mathematics homework, and I have just revised my general science notes!"'
  }
];

const g7English = {
  id: 'english',
  name: 'English',
  icon: '📚',
  units: units.map(u => ({
    id: `g7-eng-u${u.num}`,
    number: `Unit ${u.num}`,
    title: u.title,
    bigIdea: u.bigIdea,
    subtopics: [
      {
        id: `g7-eng-${u.num}.1`,
        code: `${u.num}.1`,
        title: `Grammar, Reading Comprehension & Vocabulary: ${u.title}`,
        survey: {
          blueprint: `Grammar Focus: ${u.grammar} Key Vocabulary: ${u.vocab} Reading Theme: ${u.text}`,
          objectives: [
            `Master the grammatical structure: ${u.grammar.split('(')[0].trim()}.`,
            `Apply high-frequency academic vocabulary in reading comprehension and sentence construction.`,
            `Answer reading analysis questions based on Ethiopian cultural and scientific contexts.`
          ],
          keyFormulas: `Grammar Rule: ${u.grammar.split(';')[0]}`
        },
        questions: [
          `How is the target grammatical structure (${u.grammar.split('(')[0].trim()}) correctly applied in conversation?`,
          `What is the central theme of the reading passage in this unit?`
        ],
        coreNotes: `
          <div class="space-y-4 text-slate-200">
            <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
              <h4 class="text-sm font-bold text-amber-400">📖 1. Reading Passage & Context</h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${u.text}</p>
            </div>
            <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
              <h4 class="text-sm font-bold text-cyan-400">📝 2. Grammar Focus: ${u.grammar.split('(')[0].trim()}</h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                • <strong>Rule:</strong> ${u.grammar}<br>
                • <strong>Academic Vocabulary:</strong> <code class="text-emerald-300 font-mono">${u.vocab}</code>
              </p>
            </div>
          </div>
        `,
        example: {
          title: `Worked Example: Applying ${u.grammar.split('(')[0].trim()}`,
          problem: `Construct a grammatically flawless sentence applying the target rule to Ethiopian context.`,
          steps: [
            { label: 'Step 1: Identify grammar structure', text: `Apply the specific grammatical pattern: ${u.grammar.split('(')[0].trim()}.` },
            { label: 'Step 2: Compose sentence', text: `Example: <em>${u.text.split('.')[0]}.</em>` },
            { label: 'Step 3: Verification', text: `Check subject-verb agreement, verb tense, and spelling.` }
          ],
          proTip: 'Consistent reading and active speaking practice build natural grammatical fluency!'
        },
        reciteFlashcards: [
          { q: `What is the primary grammar focus of Unit ${u.num}?`, a: u.grammar.split('(')[0].trim() },
          { q: `Define key vocabulary from this unit: ${u.vocab.split(',')[0]} and ${u.vocab.split(',')[1]}`, a: `Core vocabulary words essential for Grade 7 English mastery.` }
        ],
        amtQuiz: [
          {
            q: `Which sentence correctly applies the target grammatical structure (${u.grammar.split('(')[0].trim()})?`,
            options: [
              `${u.text.split('.')[0]}.`,
              `The sentence has broken subject-verb concord and wrong tenses.`,
              `Yesterday he will visiting the market place.`,
              `They does not goes to the school.`
            ],
            correct: 0,
            strategy: 'Identify the sentence with correct grammatical syntax and subject-verb agreement.',
            derivation: 'Option A follows standard English grammar rules perfectly.',
            trap: 'Choosing options with irregular tense mismatches.'
          }
        ]
      }
    ]
  }))
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g7_english.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g7English, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote complete Grade 7 English with all 12 Units matching the ministry textbook!');
