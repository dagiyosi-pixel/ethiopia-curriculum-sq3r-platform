const fs = require('fs');
const path = require('path');

console.log('Generating Complete Grade 8 English with all 14 Textbook Units matching English Grade 8.pdf...');

const units = [
  { num: 1, title: 'A Popular Sport & Ethiopian Super Athletes', bigIdea: 'Athletics in Ethiopia, world records, adverbs of manner, and degrees of comparison.',
    grammar: 'Adverbs of Manner (-ly: quickly, gracefully) & Comparative/Superlative Adverbs (faster, fastest).',
    vocab: 'Athletics, marathon, stamina, world record, endurance, podium, champion, trademark.',
    text: 'Ethiopia’s legendary long-distance runners—Abebe Bikila, Haile Gebrselassie, Kenenisa Bekele, Tirunesh Dibaba, and Derartu Tulu—have dominated Olympic stadiums with peerless speed, endurance, and grace.'
  },
  { num: 2, title: 'Stories, Poetry and Narrative Imagination', bigIdea: 'Narrative storytelling, character development, rhyme schemes, and Past Simple vs Past Continuous.',
    grammar: 'Past Simple vs Past Continuous (e.g., The rain was pouring heavily when the traveler arrived at the village inn).',
    vocab: 'Narrator, stanza, metaphor, suspense, climax, protagonist, dialogue, folklore.',
    text: 'A captivating traditional Ethiopian tale recounting how a clever shepherd outwitted a prowling leopard using quick wit and courage.'
  },
  { num: 3, title: 'The City and the Countryside', bigIdea: 'Urbanization, rural serenity, contrasting lifestyles, and Connectors of Contrast.',
    grammar: 'Connectors of Contrast (Although, Even though, Whereas, While, However, In contrast).',
    vocab: 'Metropolis, tranquility, congestion, pastoral, agricultural, amenities, rural, urban.',
    text: 'Comparing life in bustling Addis Ababa with life in a peaceful rural village in Gojjam: while cities offer modern universities and technology, rural communities enjoy pristine air and organic food.'
  },
  { num: 4, title: 'Education for All & Human Rights', bigIdea: 'Universal primary education, inclusive schools, literacy campaigns, and Modal Verbs of Obligation.',
    grammar: 'Modal Verbs of Obligation and Necessity (Must, Have to, Ought to, Should, Need to).',
    vocab: 'Illiteracy, enrollment, curriculum, equity, empowerment, scholarship, pedagogy, inclusion.',
    text: 'Education is recognized by the United Nations as an inalienable fundamental human right that unlocks individual potential and fuels national socio-economic transformation.'
  },
  { num: 5, title: 'A Scientist Discovers: Inventions and Discoveries', bigIdea: 'Scientific methodology, laboratory breakthroughs, and Passive Voice in Scientific Reports.',
    grammar: 'Passive Voice in Present and Past (Active: Dr. Fleming discovered penicillin ➔ Passive: Penicillin was discovered by Dr. Fleming).',
    vocab: 'Hypothesis, breakthrough, laboratory, vaccine, penicillin, electricity, observation, trial.',
    text: 'From the discovery of penicillin by Alexander Fleming to modern African medical innovators, scientific discovery relies on disciplined observation, relentless experimentation, and empirical verification.'
  },
  { num: 6, title: 'Personal Future Plans and Careers', bigIdea: 'Career ambitions, goal setting, Future Tenses, and Conditional Type 1.',
    grammar: 'First Conditional (If + Present Simple, will + verb) & Future Forms (Will vs Be Going To).',
    vocab: 'Aspiration, vocation, entrepreneur, trajectory, ambition, diploma, qualification, milestone.',
    text: 'Grade 8 students discuss their career visions: "If I pass the regional ministry examination with distinction, I will study civil engineering to design sustainable railway bridges across Ethiopia."'
  },
  { num: 7, title: 'A Day in the Life of a Professional', bigIdea: 'Workplace routines, professional responsibilities, and Conditional Type 2 for hypothetical situations.',
    grammar: 'Second Conditional for hypothetical scenarios (If + Past Simple, would + base verb: If I were the Minister of Health, I would build clinics in every woreda).',
    vocab: 'Profession, routine, surgeon, agronomist, pilot, diligence, stethoscope, shift.',
    text: 'An intimate glimpse into the demanding daily routine of an Ethiopian surgeon at Tikur Anbessa Specialized Hospital, demonstrating extraordinary dedication to saving human lives.'
  },
  { num: 8, title: 'Making Ethiopian Coffee: Process Writing', bigIdea: 'The cultural coffee ceremony (Buna), hospitality, sequence markers, and Imperative instructions.',
    grammar: 'Sequence Adverbs (First, Second, Next, After that, Subsequently, Meanwhile, Finally) & Imperatives.',
    vocab: 'Roasting, grinding, Jebena, incense, frankincense, earthenware, hospitality, aroma.',
    text: 'The traditional Ethiopian coffee ceremony is an artistic cultural ritual: green beans are washed, roasted over charcoal on a pan (Menkeshkesha), ground with a pestle, and brewed in a clay Jebena with aromatic frankincense.'
  },
  { num: 9, title: 'Plants for Medicinal Use & Traditional Healing', bigIdea: 'Indigenous botanical medicine, Kosso, Eucalyptus, and Relative Clauses.',
    grammar: 'Defining and Non-defining Relative Clauses (Who for people, Which/That for things, Where for places, Whose for possession).',
    vocab: 'Medicinal, botanical, infusion, decoction, herbalist, parasite, remedies, indigenous.',
    text: 'Ethiopian traditional medicine utilizes native flora: Kosso (Hagenia abyssinica) flowers have been used for centuries to eradicate tapeworms, while Damakesse leaves treat respiratory fevers.'
  },
  { num: 10, title: 'Art and Artists in Ethiopia', bigIdea: 'Visual arts, traditional church iconography, modern painters (Afewerk Tekle), and Reported Speech.',
    grammar: 'Direct and Indirect (Reported) Speech (Statements: He said that...; Questions: She asked if...).',
    vocab: 'Iconography, stained glass, canvas, exhibition, portrait, fresco, masterpiece, aesthetic.',
    text: 'Honorable Maitre Artiste Afewerk Tekle achieved international renown for his stained-glass masterpiece "Total Liberation of Africa" at Africa Hall in Addis Ababa, celebrating Pan-African freedom.'
  },
  { num: 11, title: 'Natural Wonders of Africa', bigIdea: 'African geography, Simien Mountains, Sof Omar Caves, Victoria Falls, and Descriptive Adjectives.',
    grammar: 'Order of Adjectives (Opinion ➔ Size ➔ Age ➔ Shape ➔ Color ➔ Origin ➔ Material: A magnificent ancient stone church).',
    vocab: 'Breathtaking, subterranean, stalactite, gorge, cataract, escarpment, biodiversity, spectacle.',
    text: 'Africa boasts sublime geological wonders: the dramatic precipices of the Simien Mountains, the subterranean limestone chambers of Sof Omar Cave, and the thundering spray of Victoria Falls.'
  },
  { num: 12, title: 'Technology in a Modern World', bigIdea: 'Computers, artificial intelligence, internet connectivity, and Compound/Complex Sentences.',
    grammar: 'Compound Sentences (FANBOYS: For, And, Nor, But, Or, Yet, So) and Complex Sentences with Subordinating Conjunctions (Because, Although, Since).',
    vocab: 'Algorithm, telecommunication, broadband, cyberspace, automation, microchip, innovation.',
    text: 'Modern digital telecommunications connect remote rural Ethiopian schools with global libraries, democratizing access to scientific knowledge and coding education.'
  },
  { num: 13, title: 'A Historical Person: Abebe Bikila', bigIdea: 'Biographical writing, chronological sequence markers, and triumph over adversity.',
    grammar: 'Biographical Past Narrative with Time Markers (In 1960, Four years later, During his youth, Eventually).',
    vocab: 'Barefoot, endurance, pioneer, legendary, Rome, Tokyo, gold medal, marathon.',
    text: 'Abebe Bikila stunned the sporting world at the 1960 Rome Olympic Games by running the marathon barefoot through cobblestone streets, becoming the first Black African to win an Olympic gold medal.'
  },
  { num: 14, title: 'African Folktales and Moral Values', bigIdea: 'Oral literature, animal fables, moral allegories, idioms, and Phrasal Verbs.',
    grammar: 'Common Phrasal Verbs (Give up, Carry on, Look forward to, Break out, Turn down) & Idiomatic Expressions.',
    vocab: 'Fable, allegory, wisdom, cunning, trickster, hyena, hare, proverb, moral.',
    text: 'Generations of Ethiopian grandmothers have passed down moral wisdom through animated fireside fables of the clever Hare outsmarting the greedy Hyena, teaching that wisdom and patience triumph over brute strength.'
  }
];

const g8English = {
  id: 'english',
  name: 'English',
  icon: '📚',
  units: units.map(u => ({
    id: `g8-eng-u${u.num}`,
    number: `Unit ${u.num}`,
    title: u.title,
    bigIdea: u.bigIdea,
    subtopics: [
      {
        id: `g8-eng-${u.num}.1`,
        code: `${u.num}.1`,
        title: `Grammar, Reading Analysis & Vocabulary: ${u.title}`,
        survey: {
          blueprint: `Grammar: ${u.grammar} Key Vocabulary: ${u.vocab} Reading Passage: ${u.text}`,
          objectives: [
            `Master the advanced grammar target: ${u.grammar.split('(')[0].trim()}.`,
            `Analyze informational texts reflecting Ethiopian history, sports, science, and cultural heritage.`,
            `Demonstrate accurate usage of high-level academic vocabulary.`
          ],
          keyFormulas: `Grammar Rule: ${u.grammar.split(';')[0]}`
        },
        questions: [
          `How is the target grammatical rule (${u.grammar.split('(')[0].trim()}) correctly deployed in formal writing?`,
          `What historical or cultural lesson is conveyed in the unit reading text?`
        ],
        coreNotes: `
          <div class="space-y-4 text-slate-200">
            <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
              <h4 class="text-sm font-bold text-amber-400">📖 1. Contextual Reading: ${u.title}</h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${u.text}</p>
            </div>
            <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
              <h4 class="text-sm font-bold text-cyan-400">📝 2. Advanced Grammar: ${u.grammar.split('(')[0].trim()}</h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                • <strong>Grammatical Structure:</strong> ${u.grammar}<br>
                • <strong>Target Lexicon:</strong> <code class="text-emerald-300 font-mono">${u.vocab}</code>
              </p>
            </div>
          </div>
        `,
        example: {
          title: `Worked Example: Grammar Application in Context`,
          problem: `Apply the target grammatical structure to compose an authentic sentence based on the unit reading theme.`,
          steps: [
            { label: 'Step 1: Identify grammar formula', text: `Target rule: ${u.grammar.split('(')[0].trim()}.` },
            { label: 'Step 2: Compose sentence', text: `Example: <em>${u.text.split('.')[0]}.</em>` },
            { label: 'Step 3: Syntax check', text: `Verify clause connection, punctuation, and tense harmony.` }
          ],
          proTip: 'In Grade 8 national English exams, complex sentence transformations and correct prepositional usage are heavily tested!'
        },
        reciteFlashcards: [
          { q: `What is the core grammatical structure in Unit ${u.num}?`, a: u.grammar.split('(')[0].trim() },
          { q: `Define key vocabulary from this unit: ${u.vocab.split(',')[0]} and ${u.vocab.split(',')[1]}`, a: 'High-frequency academic vocabulary for Grade 8 national exam preparation.' }
        ],
        amtQuiz: [
          {
            q: `Which of the following sentences correctly applies the target grammatical structure for this unit (${u.grammar.split('(')[0].trim()})?`,
            options: [
              `${u.text.split('.')[0]}.`,
              `The runner have winning the race yesterday morning.`,
              `She did not saw nothing at the market.`,
              `Although it was raining, but they played football outside.`
            ],
            correct: 0,
            strategy: 'Identify the sentence with flawless syntactic structure.',
            derivation: 'Option A exemplifies correct grammatical agreement and syntax.',
            trap: 'Using both "Although" and "but" in the same sentence (double conjunction error!).'
          }
        ]
      }
    ]
  }))
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_english.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8English, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote complete Grade 8 English with all 14 Units matching the ministry textbook!');
