const fs = require('fs');
const path = require('path');

// =========================================================================
// GRADE 7 ENGLISH ENRICHMENT
// =========================================================================
const g7Eng = require('../src/curriculum/g7_english.js');

// Unit 1: Comparative and Superlative Adjectives (3 questions)
g7Eng.units[0].subtopics[0].amtQuiz = [
  {
    q: 'Choose the grammatically correct sentence comparing the climate of two Ethiopian regions:',
    options: [
      'The Danakil Depression is more hotter than the Bale Mountains',
      'The Danakil Depression is hotter than the Bale Mountains',
      'The Danakil Depression is hottest than the Bale Mountains',
      'The Danakil Depression is as hotter than the Bale Mountains'
    ],
    correct: 1,
    strategy: 'Single-syllable adjectives form comparatives by adding -er (hot ➔ hotter), not "more hotter".',
    derivation: 'For one-syllable adjectives ending in a consonant-vowel-consonant, double the final consonant and add -er: hot ➔ hotter than. Using "more hotter" is an ungrammatical double comparative.',
    trap: 'Using double comparatives like "more hotter" or "more faster".'
  },
  {
    q: 'What is the correct superlative form of the irregular adjective "good"?',
    options: ['Goodest', 'Better', 'Best', 'Most good'],
    correct: 2,
    strategy: 'Irregular adjective degrees: Good (positive) ➔ Better (comparative) ➔ Best (superlative).',
    derivation: '"Good" is irregular: Good ➔ Better ➔ (The) Best. "Best" is always preceded by the definite article "the".',
    trap: 'Adding -est to make "goodest".'
  },
  {
    q: 'Which sentence correctly uses a multi-syllable superlative adjective?',
    options: [
      'Lalibela is the beautifulest town in northern Ethiopia',
      'Lalibela is the most beautiful town in northern Ethiopia',
      'Lalibela is more beautifulest than all towns',
      'Lalibela is as most beautiful as any town'
    ],
    correct: 1,
    strategy: 'Adjectives with three or more syllables take "most" in the superlative degree.',
    derivation: 'Adjectives like "beautiful", "expensive", and "intelligent" take "the most + adjective": "the most beautiful".',
    trap: 'Attaching -est to long multi-syllable adjectives.'
  }
];

// Unit 2: Past Simple vs. Past Continuous Tense (3 questions)
g7Eng.units[1].subtopics[0].amtQuiz = [
  {
    q: 'Identify the sentence that correctly combines the Past Continuous (interrupted action) with the Past Simple (interrupting action):',
    options: [
      'While the archaeological team was excavating near Hadar, they discovered ancient fossil bones',
      'While the team excavated, they were discovering bones',
      'The team was excavating while they was discovering bones',
      'When the team discovers bones, they were excavating'
    ],
    correct: 0,
    strategy: 'Past Continuous (was/were + -ing) for background ongoing action + Past Simple (V2) for sudden event.',
    derivation: '"While + Past Continuous" sets the scene of an ongoing activity (was excavating); the sudden interruption is expressed in Past Simple (discovered).',
    trap: 'Using continuous tense for both actions when one interrupts the other.'
  },
  {
    q: 'What is the correct past simple form of the irregular verb "teach"?',
    options: ['Teached', 'Taught', 'Thought', 'Tought'],
    correct: 1,
    strategy: 'Teach is irregular: Teach ➔ Taught ➔ Taught.',
    derivation: 'The past tense of "teach" is "taught" (spelled t-a-u-g-h-t). "Thought" is the past tense of "think".',
    trap: 'Confusing "taught" (from teach) with "thought" (from think) or adding -ed.'
  },
  {
    q: 'Complete the sentence with the correct past continuous verb agreement: "The students _______ working on their science project at 4 PM yesterday."',
    options: ['was', 'were', 'is', 'are'],
    correct: 1,
    strategy: 'Plural subject "The students" requires plural auxiliary "were".',
    derivation: 'Subject "The students" is third-person plural, so the past continuous auxiliary must be "were": were working.',
    trap: 'Using singular "was" with a plural subject.'
  }
];

// Unit 3: Countable/Uncountable Nouns & Modal Verbs (3 questions)
g7Eng.units[2].subtopics[0].amtQuiz = [
  {
    q: 'Which quantifier correctly completes the sentence with the uncountable noun "water": "There is only _______ water left in the clay pot."?',
    options: ['a few', 'a little', 'many', 'several'],
    correct: 1,
    strategy: '"A little" and "much" are used with uncountable nouns; "a few" and "many" with countable plural nouns.',
    derivation: 'Water is uncountable (mass noun). Uncountable nouns take "a little" or "much". Countable nouns take "a few" or "many" (e.g. a few cups).',
    trap: 'Using "a few" with non-countable liquids.'
  },
  {
    q: 'Which modal verb expresses strong moral obligation or official necessity in the sentence: "Drivers _______ stop when the pedestrian traffic light turns red."?',
    options: ['might', 'could', 'must', 'would'],
    correct: 2,
    strategy: '"Must" expresses compulsory rule, law, or strict obligation.',
    derivation: '"Must" conveys mandatory obligation imposed by law. "Might" or "could" express mere possibility.',
    trap: 'Selecting "might", which suggests traffic laws are optional.'
  },
  {
    q: 'Which of the following is an uncountable noun that never takes a plural -s ending in standard English?',
    options: ['Apple', 'Information', 'Orange', 'Chair'],
    correct: 1,
    strategy: '"Information", "advice", "furniture", and "luggage" are uncountable nouns.',
    derivation: '"Information" cannot be pluralized as "informations". To specify quantity, we say "a piece of information".',
    trap: 'Adding -s to uncountable nouns like information or advice.'
  }
];

// Unit 4: Present Perfect Tense & Cause-Effect Connectors (3 questions)
g7Eng.units[3].subtopics[0].amtQuiz = [
  {
    q: 'Complete the sentence with the appropriate time preposition: "Farmers in this highland district have practiced agroforestry _______ 2010."',
    options: ['for', 'since', 'during', 'from'],
    correct: 1,
    strategy: '"Since" is used with a specific starting point in time; "For" with a duration of time.',
    derivation: '2010 is a specific calendar starting year. "Since 2010" marks the beginning of the action continuing into the present.',
    trap: 'Using "for" with a starting date instead of a duration (e.g. "for 15 years").'
  },
  {
    q: 'Select the cause-and-effect transition word that logically completes the sentence: "Heavy torrential rains eroded the hillside; _______, the farmers constructed stone check-dams."',
    options: ['therefore', 'although', 'despite', 'whereas'],
    correct: 0,
    strategy: '"Therefore" indicates a logical consequence or result.',
    derivation: '"Therefore" and "as a result" link cause (erosion) to effect/action (building check-dams). "Although" expresses contrast.',
    trap: 'Selecting contrast connectors like "although" when a cause-and-effect relationship exists.'
  },
  {
    q: 'Which sentence correctly forms the Present Perfect tense for third-person singular?',
    options: [
      'She have visited the national museum three times',
      'She has visited the national museum three times',
      'She has visit the national museum three times',
      'She visited have the national museum three times'
    ],
    correct: 1,
    strategy: 'Present Perfect formula: has/have + past participle (V3). Third-person singular takes "has".',
    derivation: 'Subject "She" takes auxiliary "has" + past participle "visited": "has visited".',
    trap: 'Using "have" with singular subjects (he/she/it).'
  }
];

// Unit 5: Passive Voice (Present and Past Simple) (3 questions)
g7Eng.units[4].subtopics[0].amtQuiz = [
  {
    q: 'Convert the active sentence into the correct Present Simple Passive: "Artisans in Gondar weave traditional cotton Shemma cloths."',
    options: [
      'Traditional cotton Shemma cloths are woven by artisans in Gondar',
      'Traditional cotton Shemma cloths was woven by artisans in Gondar',
      'Traditional cotton Shemma cloths are weaved by artisans in Gondar',
      'Traditional cotton Shemma cloths is woven by artisans in Gondar'
    ],
    correct: 0,
    strategy: 'Present Simple Passive = am/is/are + past participle (V3). Plural subject takes "are woven".',
    derivation: 'Object "cloths" is plural, so auxiliary is "are". Irregular past participle of "weave" is "woven". Thus: "are woven by artisans".',
    trap: 'Using regular ending "weaved" or singular auxiliary "is".'
  },
  {
    q: 'What is the correct Past Simple Passive voice of: "King Ezana erected the monumental granite stelae in Aksum"?',
    options: [
      'The monumental granite stelae were erected by King Ezana in Aksum',
      'The monumental granite stelae was erected by King Ezana in Aksum',
      'The monumental granite stelae are erected by King Ezana in Aksum',
      'The monumental granite stelae have erected by King Ezana in Aksum'
    ],
    correct: 0,
    strategy: 'Past Simple Passive = was/were + past participle. Plural "stelae" takes "were erected".',
    derivation: '"Stelae" is the plural form of stela (obelisk). Plural subject takes "were erected".',
    trap: 'Using singular "was" for plural "stelae".'
  },
  {
    q: 'Why do writers use the Passive Voice in scientific reports and official announcements?',
    options: [
      'To emphasize the action, result, or object rather than the person performing the action',
      'Because passive voice is always shorter than active voice',
      'Because active voice is forbidden in the English language',
      'To confuse the reader about what happened'
    ],
    correct: 0,
    strategy: 'Passive voice shifts focus to the action or patient.',
    derivation: 'In science ("Water was boiled at 100°C"), the experiment process and results matter more than who personally lit the Bunsen burner.',
    trap: 'Believing passive voice is used to obscure meaning.'
  }
];

// Unit 6: Imperatives & Prepositions of Movement (3 questions)
g7Eng.units[5].subtopics[0].amtQuiz = [
  {
    q: 'Which sentence correctly uses an Imperative for giving clear traffic safety instructions?',
    options: [
      'You are always looking both ways before crossing the road',
      'Look both ways before you cross the busy avenue!',
      'You will be looking both ways before crossing',
      'Should you looking both ways before crossing'
    ],
    correct: 1,
    strategy: 'Imperatives start with the base form of the verb without a stated grammatical subject (implied "you").',
    derivation: 'Imperative sentences issue direct commands, directions, or warnings: "Look both ways!", "Stop!", "Do not run!".',
    trap: 'Adding unnecessary subject pronouns like "You are looking".'
  },
  {
    q: 'Choose the correct preposition of movement: "The students walked safely _______ the zebra pedestrian crossing to reach the school gate."',
    options: ['through', 'across', 'into', 'underneath'],
    correct: 1,
    strategy: '"Across" is used for movement from one side of a surface/street to the other.',
    derivation: '"Across" denotes movement from one side to the opposite side of a flat boundary (street, river, bridge). "Through" is for 3D enclosed spaces (tunnel, forest).',
    trap: 'Confusing "across" with "through".'
  },
  {
    q: 'What is the negative imperative form of the instruction "Cross when the light is red"?',
    options: [
      'Do not cross when the light is red!',
      'Not cross when the light is red!',
      'No crossing when the light is red!',
      'You cannot crossing when the light is red!'
    ],
    correct: 0,
    strategy: 'Negative imperatives are formed with "Do not + base verb" (or "Don\'t").',
    derivation: 'Standard English negative imperative syntax is: Do not (Don\'t) + infinitive without to: "Do not cross!".',
    trap: 'Using "Not cross" without the auxiliary "Do".'
  }
];

// Unit 7: Future Forms & First Conditional (3 questions)
g7Eng.units[6].subtopics[0].amtQuiz = [
  {
    q: 'Complete the First Conditional sentence with the correct verb tenses: "If you _______ hard every day, you _______ your national ministry examinations."',
    options: [
      'study / will pass',
      'will study / pass',
      'studied / would pass',
      'studies / will passed'
    ],
    correct: 0,
    strategy: 'First Conditional rule: If + Present Simple, will + base verb.',
    derivation: 'The condition clause (if-clause) takes the Present Simple (study). The result clause takes will + base verb (will pass). "Will" is NEVER used in the if-clause.',
    trap: 'Putting "will" in the if-clause ("If you will study").'
  },
  {
    q: 'When expresses a future intention or planned arrangement made before the moment of speaking, which future form is preferred?',
    options: ['be going to + base verb', 'will + base verb', 'Past Simple', 'Past Continuous'],
    correct: 0,
    strategy: '"Be going to" expresses prior intentions or plans; "Will" expresses spontaneous decisions.',
    derivation: 'Spontaneous decision made at the moment: "I will answer the phone." Premeditated plan: "I am going to study medicine next year."',
    trap: 'Using "will" for pre-arranged future appointments.'
  },
  {
    q: 'What does the First Conditional express about future events?',
    options: [
      'Impossible fantasy situations in imaginary fairy tales',
      'Real, likely, and possible future situations and their probable results',
      'Regrets about events that occurred in the past',
      'Actions that happened before another past action'
    ],
    correct: 1,
    strategy: 'First conditional deals with real and probable future possibilities.',
    derivation: 'The First Conditional (real conditional) talks about realistic situations that are likely to happen if the condition is fulfilled.',
    trap: 'Confusing the 1st conditional (real/possible) with the 2nd conditional (hypothetical/unreal).'
  }
];

const targetPathE7 = path.join(__dirname, '..', 'src', 'curriculum', 'g7_english.js');
fs.writeFileSync(targetPathE7, 'module.exports = ' + JSON.stringify(g7Eng, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g7_english.js with 3 questions per unit (total 21 questions)!');

// =========================================================================
// GRADE 8 ENGLISH ENRICHMENT
// =========================================================================
const g8Eng = require('../src/curriculum/g8_english.js');

// Unit 1: Present Perfect Continuous & Reported Speech (3 questions)
g8Eng.units[0].subtopics[0].amtQuiz = [
  {
    q: 'Change the direct speech sentence into correct reported (indirect) speech: Abebe said, "I am studying for my national physics exam today."',
    options: [
      'Abebe said that he was studying for his national physics exam that day',
      'Abebe said that I am studying for my national physics exam today',
      'Abebe said that he will be studying for his national physics exam tomorrow',
      'Abebe says that he had studied for his exam yesterday'
    ],
    correct: 0,
    strategy: 'Reported speech shifts tenses back (Present Continuous ➔ Past Continuous) and adjusts time/pronouns ("today" ➔ "that day", "I" ➔ "he").',
    derivation: 'Direct speech in present continuous ("am studying") shifts to past continuous ("was studying"). Pronoun "I" shifts to "he", and time marker "today" shifts to "that day".',
    trap: 'Leaving pronouns and time markers unshifted.'
  },
  {
    q: 'Which sentence correctly uses the Present Perfect Continuous tense to emphasize an ongoing action that started in the past and continues right now?',
    options: [
      'They have been revising biology for three hours',
      'They were revising biology since three hours',
      'They has been revising biology for three hours',
      'They had revising biology since three hours'
    ],
    correct: 0,
    strategy: 'Present Perfect Continuous: have/has been + present participle (-ing) + for/since.',
    derivation: 'Plural subject "They" takes "have been revising". "For" indicates duration (three hours).',
    trap: 'Using "has" with plural subject or mixing up "since" and "for".'
  },
  {
    q: 'When reporting a direct question: She asked me, "Where do you live?", what is the correct reported speech word order?',
    options: [
      'She asked me where did I live',
      'She asked me where I lived',
      'She asked me where do I lived',
      'She asked me where live I'
    ],
    correct: 1,
    strategy: 'Reported questions use statement word order (Subject + Verb), eliminating auxiliary "do/did".',
    derivation: 'In indirect questions, the question word order inverts back to normal statement order (subject before verb): "where I lived", NOT "where did I live".',
    trap: 'Keeping the auxiliary "did" in the reported clause.'
  }
];

// Unit 2: Past Perfect Tense & Second Conditional (3 questions)
g8Eng.units[1].subtopics[0].amtQuiz = [
  {
    q: 'Complete the sentence using the Past Perfect tense to show which action happened first: "When the wildlife rangers arrived at the park sanctuary, the poachers _______ already _______."',
    options: ['had / fled', 'have / fled', 'were / fleeing', 'did / flee'],
    correct: 0,
    strategy: 'Past Perfect (had + V3) indicates the earlier of two completed past actions.',
    derivation: 'The poachers fled BEFORE the rangers arrived. The earlier action takes the Past Perfect (had fled); the later action takes the Past Simple (arrived).',
    trap: 'Using Present Perfect "have fled" in a past context.'
  },
  {
    q: 'Which sentence correctly exemplifies the Second Conditional (hypothetical or unreal present/future situation)?',
    options: [
      'If I have a million birr, I will buy a tractor',
      'If I had a million birr, I would establish a wildlife sanctuary',
      'If I had had a million birr, I will buy a farm',
      'If I will have a million birr, I would buy a tractor'
    ],
    correct: 1,
    strategy: 'Second Conditional rule: If + Past Simple, would + base verb.',
    derivation: 'The Second Conditional expresses imaginary or contrary-to-fact hypotheses: "If I had (past simple)... I would establish (would + infinitive)".',
    trap: 'Confusing 2nd conditional with 1st conditional ("if I have... I will").'
  },
  {
    q: 'In formal standard English conditional structures, which form of the verb "to be" is traditionally used with all persons (including I, he, she) in the if-clause of the Second Conditional?',
    options: ['was', 'were', 'am', 'is'],
    correct: 1,
    strategy: 'Subjunctive mood uses "were" for all subjects: "If I were you", "If he were here".',
    derivation: 'The hypothetical subjunctive standard uses "were": "If I were the minister of education, I would build 100 digital libraries."',
    trap: 'Assuming "was" is the only correct form for singular subjects.'
  }
];

// Unit 3: Relative Clauses (Defining and Non-Defining) (3 questions)
g8Eng.units[2].subtopics[0].amtQuiz = [
  {
    q: 'Which relative pronoun correctly joins the two sentences: "Dr. Aklilu Lemma was a world-renowned Ethiopian scientist. He co-discovered the endod plant molluscicide."?',
    options: ['which', 'who', 'whose', 'whom'],
    correct: 1,
    strategy: '"Who" is used as the subject relative pronoun for people.',
    derivation: 'Dr. Aklilu Lemma is a person and the grammatical subject of the clause: "Dr. Aklilu Lemma, who co-discovered the endod plant...".',
    trap: 'Using "which" for a person.'
  },
  {
    q: 'What punctuation is strictly mandatory around non-defining (extra information) relative clauses in written English?',
    options: ['Commas', 'Exclamation marks', 'Quotation marks', 'Colons'],
    correct: 0,
    strategy: 'Non-defining relative clauses are set off by commas.',
    derivation: 'Non-defining clauses add non-essential bonus information and must be separated by commas (e.g. "Addis Ababa, which is the capital of Ethiopia, hosts the African Union.").',
    trap: 'Omitting commas in non-defining clauses.'
  },
  {
    q: 'Which relative pronoun indicates possession in: "We met a passionate young agronomist _______ innovative irrigation invention saved village crops."?',
    options: ['who', 'whom', 'whose', 'which'],
    correct: 2,
    strategy: '"Whose" shows possession (belonging to someone).',
    derivation: '"Whose" is the possessive relative pronoun (his/her invention ➔ whose invention).',
    trap: 'Confusing "whose" with "who\'s" (who is).'
  }
];

// Unit 4: Modal Verbs of Probability and Deduction (3 questions)
g8Eng.units[3].subtopics[0].amtQuiz = [
  {
    q: 'The lights are turned on in the laboratory, and chemical apparatus is steaming on the lab table. Which modal deduction expresses logical certainty?',
    options: [
      'The teacher can’t be inside the laboratory',
      'The teacher must be inside the laboratory',
      'The teacher might be in another city',
      'The teacher should not be here'
    ],
    correct: 1,
    strategy: '"Must be" expresses logical positive certainty based on strong evidence.',
    derivation: 'Based on compelling visual evidence (lights on, steaming beakers), the deductive conclusion is positive certainty: "must be".',
    trap: 'Using "can\'t be" (which expresses negative impossibility).'
  },
  {
    q: 'Which modal verb expresses logical impossibility when the speaker is 100% certain something is NOT true?',
    options: ['can’t (cannot)', 'must', 'might', 'may'],
    correct: 0,
    strategy: '"Can\'t" expresses negative certainty (impossibility).',
    derivation: 'Example: "He just left on a bus to Hawassa 5 minutes ago; he can\'t be in Gondar right now!"',
    trap: 'Using "must not" (which expresses prohibition rather than logical deduction).'
  },
  {
    q: 'When the speaker is unsure and expressing a 50% possibility about an event, which pair of modal verbs is used?',
    options: ['must or shall', 'might or could', 'can’t or won’t', 'ought to or had better'],
    correct: 1,
    strategy: '"Might", "may", and "could" express possibility without certainty.',
    derivation: '"It might rain this afternoon" or "It could rain" express realistic possibilities without certainty.',
    trap: 'Assuming "might" indicates certainty.'
  }
];

// Unit 5: Connectors of Contrast (3 questions)
g8Eng.units[4].subtopics[0].amtQuiz = [
  {
    q: 'Complete the sentence with the correct contrast connector followed by a noun phrase: "_______ the severe highland cold, the scouts completed their overnight mountain trek."',
    options: ['Although', 'Despite', 'Even though', 'Whereas'],
    correct: 1,
    strategy: '"Despite" (and "In spite of") is followed by a noun phrase or gerund (-ing), whereas "Although" is followed by a full clause (subject + verb).',
    derivation: '"The severe highland cold" is a noun phrase without a conjugated verb. Therefore, "Despite" is grammatically required. "Although" would require a clause: "Although it was severely cold".',
    trap: 'Using "Although" directly before a noun phrase without a verb.'
  },
  {
    q: 'Which sentence correctly uses "However" with standard punctuation between two independent clauses?',
    options: [
      'The irrigation budget was reduced, however the harvest was abundant.',
      'The irrigation budget was reduced; however, the harvest was abundant.',
      'The irrigation budget was reduced however; the harvest was abundant.',
      'The irrigation budget was reduced however the harvest was abundant.'
    ],
    correct: 1,
    strategy: '"However" transitioning between two clauses takes a semicolon before and a comma after (; however,).',
    derivation: 'When connecting two independent sentences, use a semicolon or period before "however" and a comma after: "; however, " or ". However, ".',
    trap: 'Using a comma splice with "however".'
  },
  {
    q: 'Is the phrase "Despite of the rain" grammatically correct in standard English?',
    options: [
      'Yes, it is the standard formal idiom',
      'No! It is an error; use either "Despite the rain" or "In spite of the rain"',
      'Yes, but only in poetry',
      'Yes, it is identical to "although"'
    ],
    correct: 1,
    strategy: '"Despite" never takes "of"; "In spite of" requires "of".',
    derivation: 'One of the most frequent errors tested on English national exams: "Despite" is NEVER followed by "of". Say "Despite the rain" OR "In spite of the rain".',
    trap: 'Saying "Despite of".'
  }
];

// Unit 6: Direct vs. Indirect Questions (3 questions)
g8Eng.units[5].subtopics[0].amtQuiz = [
  {
    q: 'Convert the direct question: "What time does the regional train arrive?" into a polite indirect question beginning with: "Could you please tell me..."',
    options: [
      'Could you please tell me what time does the regional train arrive?',
      'Could you please tell me what time the regional train arrives?',
      'Could you please tell me what time did the train arrive?',
      'Could you please tell me what time is the train arriving?'
    ],
    correct: 1,
    strategy: 'Indirect questions revert to statement word order (Subject + Verb) without "does".',
    derivation: 'In indirect questions, the auxiliary "does" drops out and the main verb takes standard third-person -s: "what time the regional train arrives".',
    trap: 'Retaining the auxiliary "does" in indirect questions.'
  },
  {
    q: 'When an indirect question is formed from a Yes/No direct question (e.g. "Is the library open?"), what conjunction must be inserted?',
    options: ['if (or whether)', 'that', 'because', 'which'],
    correct: 0,
    strategy: 'Yes/No direct questions use "if" or "whether" in indirect form.',
    derivation: '"Is the library open?" ➔ "Do you know IF (or WHETHER) the library is open?".',
    trap: 'Inserting "that" instead of "if/whether".'
  },
  {
    q: 'Which of the following is a polite introductory stem used to introduce indirect inquiries in professional correspondence?',
    options: [
      'Hey you, answer me this!',
      'I was wondering if you could provide details regarding...',
      'Tell me immediately whether...',
      'Why you not telling me...'
    ],
    correct: 1,
    strategy: '"I was wondering if..." is a polite, professional indirect question stem.',
    derivation: 'Polite indirect stems soften the tone in business and academic correspondence.',
    trap: 'Using aggressive imperative phrasing.'
  }
];

// Unit 7: Subject-Verb Agreement with Complex Subjects (3 questions)
g8Eng.units[6].subtopics[0].amtQuiz = [
  {
    q: 'Choose the sentence with correct Subject-Verb Agreement when using the correlative conjunction "Neither... nor":',
    options: [
      'Neither the coach nor the players was ready for the tournament',
      'Neither the coach nor the players were ready for the tournament',
      'Neither the coach nor the players is ready for the tournament',
      'Neither the coach nor the players be ready for the tournament'
    ],
    correct: 1,
    strategy: 'With "Neither... nor", the verb agrees with the subject CLOSER to the verb (proximity rule).',
    derivation: 'The subject closer to the verb is "the players" (plural). Therefore, the verb must be plural: "were ready".',
    trap: 'Matching the verb to the first singular subject ("the coach").'
  },
  {
    q: 'Complete the sentence with correct verb agreement: "Each of the participating students _______ a certificate of merit."',
    options: ['receive', 'receives', 'are receiving', 'have received'],
    correct: 1,
    strategy: '"Each" is an indefinite pronoun that is grammatically singular and takes a singular verb.',
    derivation: 'The subject is "Each" (singular), not the prepositional phrase "of the students". Therefore, it takes the singular verb with -s: "receives".',
    trap: 'Mistakenly agreeing with the plural noun "students" inside the prepositional phrase!'
  },
  {
    q: 'In the sentence: "The committee _______ deliberating the new educational curriculum guidelines today", which verb is used when the collective noun acts as a unified single body?',
    options: ['is', 'are', 'were', 'have been'],
    correct: 0,
    strategy: 'Collective nouns acting as a single unit take singular verbs.',
    derivation: 'When a collective noun (committee, team, jury) acts as a unified entity, it takes a singular verb: "The committee is deliberating".',
    trap: 'Automatically using plural verbs with collective nouns.'
  }
];

const targetPathE8 = path.join(__dirname, '..', 'src', 'curriculum', 'g8_english.js');
fs.writeFileSync(targetPathE8, 'module.exports = ' + JSON.stringify(g8Eng, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g8_english.js with 3 questions per unit (total 21 questions)!');
