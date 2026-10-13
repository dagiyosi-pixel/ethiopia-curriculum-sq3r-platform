// Grade 7 English - Complete Ethiopian Curriculum Syllabus (Units 1 to 7)
module.exports = {
  id: 'english',
  name: 'English',
  icon: '📚',
  units: [
    {
      id: 'g7-eng-u1',
      number: 'Unit 1',
      title: 'Living in Rural and Urban Areas',
      bigIdea: 'Develop vocabulary for lifestyles, compare rural and urban settings, and master comparative and superlative adjective structures.',
      subtopics: [
        {
          id: 'g7-eng-1.1',
          code: '1.1',
          title: 'Comparative and Superlative Adjectives',
          survey: {
            blueprint: 'Grammar rule: One-syllable adjectives add -er / -est. Multi-syllable adjectives use more / most. Irregular adjectives: good ➔ better ➔ best.',
            objectives: [
              'Form regular and irregular comparative and superlative adjectives correctly.',
              'Construct sentences comparing rural and urban life in Ethiopia.',
              'Identify descriptive adjectives in reading passages.'
            ],
            keyFormulas: 'Comparative: Adj + -er + than | More + Adj + than &nbsp;|&nbsp; Superlative: The + Adj + -est | The + most + Adj'
          },
          questions: [
            'When must we use "more" instead of "-er" to form a comparative adjective?',
            'What is the irregular comparative form of the adjective "bad"?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Rules for Adjective Comparison</h4>
              <p>• <strong>Short Adjectives (1 syllable):</strong> Add <em>-er</em> and <em>-est</em> (clean ➔ cleaner ➔ cleanest; quiet ➔ quieter ➔ quietest).<br>
              • <strong>Adjectives ending in consonant + y:</strong> Change <em>y</em> to <em>i</em> and add <em>-er/-est</em> (busy ➔ busier ➔ busiest; healthy ➔ healthier ➔ healthiest).<br>
              • <strong>Long Adjectives (2+ syllables):</strong> Use <em>more</em> and <em>most</em> (crowded ➔ more crowded ➔ most crowded; expensive ➔ more expensive ➔ most expensive).<br>
              • <strong>Irregulars:</strong> good ➔ better ➔ best; bad ➔ worse ➔ worst; far ➔ farther/further ➔ farthest/furthest.</p>
            </div>
          `,
          example: {
            title: 'Forming Comparative Sentences',
            problem: 'Complete the sentence comparing Addis Ababa and Hawassa using the adjective "populated": "Addis Ababa is ________ than Hawassa."',
            steps: [
              { label: 'Step 1: Check syllables', text: '"Populated" has 4 syllables (pop-u-lat-ed), which is a long adjective.' },
              { label: 'Step 2: Apply rule', text: 'Long adjectives use "more + adjective + than".' },
              { label: 'Step 3: Write sentence', text: 'Addis Ababa is <strong>more populated</strong> than Hawassa.' }
            ],
            proTip: 'Never say "more cleaner" or "more better" — double comparatives are grammatically incorrect!'
          },
          reciteFlashcards: [
            { q: 'What is the superlative form of "far"?', a: 'The farthest (distance) or the furthest.' },
            { q: 'What is the comparative form of "healthy"?', a: 'Healthier (change -y to -ier).' },
            { q: 'What is the comparative form of "bad"?', a: 'Worse (never say "badder").' }
          ],
          amtQuiz: [
            {
              q: 'Which sentence correctly compares life in the countryside to life in a major city?',
              options: [
                'The countryside is more peaceful than the city.',
                'The countryside is peacefuler than the city.',
                'The countryside is most peaceful than the city.',
                'The countryside is more peacefuler than the city.'
              ],
              correct: 0,
              strategy: 'Analyze the adjective "peaceful" (2 syllables ending in -ful).',
              derivation: 'Two-syllable adjectives with suffixes like -ful take "more" in the comparative degree: "more peaceful than".',
              trap: 'Never add -er to peaceful ("peacefuler" is incorrect).'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-eng-u2',
      number: 'Unit 2',
      title: 'History of Ethiopian Heritage',
      bigIdea: 'Explore historical national monuments (Lalibela, Axum, Gondar) and master Past Simple vs Past Continuous tenses.',
      subtopics: [
        {
          id: 'g7-eng-2.1',
          code: '2.1',
          title: 'Past Simple vs. Past Continuous Tense',
          survey: {
            blueprint: 'Past Simple (completed action at definite past time: S + V2) vs Past Continuous (action in progress interrupted: was/were + V-ing).',
            objectives: [
              'Distinguish between regular (-ed) and irregular past verb forms.',
              'Use "while" and "when" to link past continuous and past simple actions.',
              'Write descriptive narratives about historic visits to Lalibela or Axum.'
            ],
            keyFormulas: 'While + Past Continuous (was/were + V-ing), Past Simple (V2) &nbsp;|&nbsp; Past Continuous + when + Past Simple'
          },
          questions: [
            'Which conjunction ("when" or "while") is usually followed by the Past Continuous tense?',
            'What is the past simple of irregular verbs "build", "write", and "see"?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Narrative Past Tense Structures</h4>
              <p>• <strong>Past Simple:</strong> Used for completed historical facts or events.<br>
                <em>Example:</em> King Lalibela <strong>carved</strong> eleven rock-hewn churches in the 12th century.<br>
              • <strong>Past Continuous:</strong> An ongoing action in the past interrupted by a shorter action.<br>
                <em>Example:</em> We <strong>were touring</strong> the Fasil Ghebbi castle when it <strong>began</strong> to rain.<br>
              • <strong>Formula:</strong> <em>While + was/were + V-ing, S + V2 (interruption).</em></p>
            </div>
          `,
          example: {
            title: 'Combining Actions with When and While',
            problem: 'Combine the two actions into a complex sentence: (Action 1: Archeologists were excavating near Axum. Action 2: They discovered ancient coins.)',
            steps: [
              { label: 'Step 1: Identify longer background action', text: '"Were excavating" is ongoing Past Continuous.' },
              { label: 'Step 2: Identify sudden event', text: '"Discovered" is sudden Past Simple.' },
              { label: 'Step 3: Combine with while', text: '<strong>While</strong> the archeologists were excavating near Axum, they <strong>discovered</strong> ancient coins.' }
            ],
            proTip: 'Use a comma after the dependent "While..." clause when it begins the sentence!'
          },
          reciteFlashcards: [
            { q: 'What is the past simple form of "carve"?', a: 'Carved (regular verb adding -d).' },
            { q: 'What auxiliary verb is used with "they" in Past Continuous?', a: '"were" (They were reading).' }
          ],
          amtQuiz: [
            {
              q: 'Choose the grammatically correct sentence:',
              options: [
                'While the students were visiting Axum, they saw the great stele.',
                'While the students visited Axum, they were seeing the great stele.',
                'When the students were visiting Axum, they seeing the great stele.',
                'The students was visiting Axum while they saw the great stele.'
              ],
              correct: 0,
              strategy: 'Match ongoing action (were visiting) with background time introduced by "While", and sudden point action (saw) as main clause.',
              derivation: '"While + Past Continuous, Past Simple" represents an interrupted past background action.',
              trap: '"See" is a stative verb of perception and rarely takes continuous form ("were seeing" is awkward/incorrect)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-eng-u3',
      number: 'Unit 3',
      title: 'Healthy Food and Nutrition',
      bigIdea: 'Learn dietary vocabulary, countable versus uncountable nouns, quantifiers, and modal verbs of advice (should, must).',
      subtopics: [
        {
          id: 'g7-eng-3.1',
          code: '3.1',
          title: 'Countable/Uncountable Nouns & Modal Verbs',
          survey: {
            blueprint: 'Countable (can count, have plurals: apples) vs Uncountable (cannot count: water, injera, honey). Quantifiers: many, much, a lot of, few, little. Modals: should, must.',
            objectives: [
              'Differentiate countable from uncountable nouns.',
              'Use "many" with countables and "much" with uncountables.',
              'Express nutritional recommendations with "should", "ought to", and "must".'
            ],
            keyFormulas: 'Many + Countable Plural Nouns | Much + Uncountable Singular Nouns | S + Should + Base Verb'
          },
          questions: [
            'Why is "water" uncountable while "bottles of water" is countable?',
            'What is the difference between "should eat" and "must eat" in health advice?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Grammar of Nutrition & Quantification</h4>
              <p>• <strong>Countable:</strong> Have singular and plural forms (an orange ➔ oranges). Use with <em>many, a few</em>.<br>
              • <strong>Uncountable:</strong> Substances, liquids, grains, concepts (milk, teff, sugar, meat, health). Never take a/an or plural -s. Use with <em>much, a little</em>.<br>
              • <strong>Modals:</strong><br>
                - <em>Should / Ought to:</em> Mild advice, good idea (You should drink 8 glasses of water daily).<br>
                - <em>Must:</em> Strong obligation or vital necessity (You must wash your hands before eating).</p>
            </div>
          `,
          example: {
            title: 'Selecting the Correct Quantifier',
            problem: 'Choose the correct quantifier: "You shouldn\'t add too (much / many) salt to your food."',
            steps: [
              { label: 'Step 1: Identify noun type', text: '"Salt" is a granular seasoning that cannot be counted individually (uncountable).' },
              { label: 'Step 2: Apply rule', text: 'Uncountable nouns take "much" in negative sentences and questions.' },
              { label: 'Step 3: Conclude', text: '"You shouldn\'t add too <strong>much</strong> salt to your food."' }
            ],
            proTip: '"A lot of" can be safely used with both countable and uncountable nouns in affirmative statements!'
          },
          reciteFlashcards: [
            { q: 'Is "rice" countable or uncountable in English?', a: 'Uncountable.' },
            { q: 'Which quantifier goes with countable plural nouns: "few" or "little"?', a: '"Few" (e.g., a few bananas).' }
          ],
          amtQuiz: [
            {
              q: 'Which sentence uses quantifiers and nouns correctly?',
              options: [
                'There isn\'t much sugar left in the bowl.',
                'There aren\'t much sugars left in the bowl.',
                'There isn\'t many sugar left in the bowl.',
                'There are many milks in the refrigerator.'
              ],
              correct: 0,
              strategy: '"Sugar" is an uncountable singular noun.',
              derivation: 'Uncountable nouns require singular verb agreement ("is not") and quantifier "much".',
              trap: 'Never add plural "-s" to uncountable nouns like sugar or milk!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-eng-u4',
      number: 'Unit 4',
      title: 'Environmental Protection and Climate',
      bigIdea: 'Study climate awareness, green initiatives in Ethiopia, Present Perfect tense, and cause/effect connectors.',
      subtopics: [
        {
          id: 'g7-eng-4.1',
          code: '4.1',
          title: 'Present Perfect Tense & Cause-Effect Connectors',
          survey: {
            blueprint: 'Present Perfect (has/have + V3): connects past action to present relevance. Connectors: because, therefore, as a result, so.',
            objectives: [
              'Form the Present Perfect tense with auxiliary has/have and past participle (V3).',
              'Use time adverbs: already, yet, since, for.',
              'Link ecological causes and effects using "therefore" and "because".'
            ],
            keyFormulas: 'S + have/has + V3 (Past Participle) &nbsp;|&nbsp; Cause + therefore / as a result + Effect'
          },
          questions: [
            'How does "since" differ from "for" when specifying duration in Present Perfect?',
            'What is the difference in meaning between "has gone to" and "has been to"?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Present Perfect & Environmental Discourse</h4>
              <p>• <strong>Present Perfect Formation:</strong> Subject + <em>have/has</em> + Past Participle (V3).<br>
                <em>Example:</em> Ethiopian citizens <strong>have planted</strong> billions of tree seedlings through the Green Legacy initiative.<br>
              • <strong>Since vs. For:</strong><br>
                - <em>Since:</em> Specific starting point in time (since 2019, since Monday, since 8:00 AM).<br>
                - <em>For:</em> Length or duration of time (for five years, for two hours, for a decade).<br>
              • <strong>Cause & Effect Connectors:</strong><br>
                - <em>Because / As / Since:</em> Introduces the cause (Plants absorb CO₂ because they photosynthesize).<br>
                - <em>Therefore / Consequently:</em> Introduces the effect (Deforestation leads to erosion; therefore, replanting is urgent).</p>
            </div>
          `,
          example: {
            title: 'Using "Since" vs "For" in Environmental Sentences',
            problem: 'Fill in the blank: "Ethiopia has championed the Green Legacy initiative ________ 2019."',
            steps: [
              { label: 'Step 1: Examine the time expression', text: '"2019" is a specific calendar year (starting point in time).' },
              { label: 'Step 2: Apply grammar rule', text: 'Specific starting points require the preposition "since".' },
              { label: 'Step 3: Solution', text: 'Ethiopia has championed the Green Legacy initiative <strong>since</strong> 2019.' }
            ],
            proTip: 'If the expression is a duration ("for 7 years"), use "for"; if it is a starting date ("since 2019"), use "since"!'
          },
          reciteFlashcards: [
            { q: 'What is the past participle (V3) of the irregular verb "grow"?', a: 'Grown (grow ➔ grew ➔ grown).' },
            { q: 'Which adverb goes at the end of negative sentences in Present Perfect?', a: '"yet" (e.g., We haven\'t finished yet).' }
          ],
          amtQuiz: [
            {
              q: 'Choose the correct sentence expressing an ongoing environmental effort:',
              options: [
                'Volunteers have worked on soil conservation for three months.',
                'Volunteers has worked on soil conservation since three months.',
                'Volunteers have worked on soil conservation since three months.',
                'Volunteers worked on soil conservation for three months since yesterday.'
              ],
              correct: 0,
              strategy: '"Volunteers" is plural (takes "have"), and "three months" is a period/duration (takes "for").',
              derivation: 'Plural subject + have + V3 + for + duration: "have worked ... for three months".',
              trap: '"Since" cannot be used with a duration like "three months"!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-eng-u5',
      number: 'Unit 5',
      title: 'Traditional Craftsmanship and Technology',
      bigIdea: 'Explore Ethiopian cultural crafts (pottery, weaving, leatherwork) and master Passive Voice in Present and Past tenses.',
      subtopics: [
        {
          id: 'g7-eng-5.1',
          code: '5.1',
          title: 'Passive Voice (Present and Past Simple)',
          survey: {
            blueprint: 'Passive Voice highlights the action and receiver rather than the actor. Structure: Object + Be (is/are/was/were) + Past Participle (V3).',
            objectives: [
              'Convert active sentences to passive voice in present and past tenses.',
              'Describe step-by-step technological craft processes using passive verbs.',
              'Use the "by + agent" phrase when the performer is essential.'
            ],
            keyFormulas: 'Present Passive: S + is/are + V3 &nbsp;|&nbsp; Past Passive: S + was/were + V3'
          },
          questions: [
            'Why is passive voice preferred in scientific and manufacturing process descriptions?',
            'When should the "by + agent" phrase be omitted in a passive sentence?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Passive Voice Architecture</h4>
              <p>• <strong>When to Use:</strong> When the object being acted upon is more important than who performs it, or when the agent is obvious/unknown.<br>
              • <strong>Present Passive:</strong> <em>Subject + is/are + Past Participle (V3).</em><br>
                <em>Active:</em> Traditional weavers make shemma from pure cotton.<br>
                <em>Passive:</em> Shemma <strong>is made</strong> from pure cotton (by traditional weavers).<br>
              • <strong>Past Passive:</strong> <em>Subject + was/were + Past Participle (V3).</em><br>
                <em>Active:</em> Ancient craftsmen built the monoliths of Tiya centuries ago.<br>
                <em>Passive:</em> The monoliths of Tiya <strong>were built</strong> centuries ago.</p>
            </div>
          `,
          example: {
            title: 'Active to Passive Voice Transformation',
            problem: 'Convert into passive voice: "Artisans shape red clay into beautiful cooking pots."',
            steps: [
              { label: 'Step 1: Identify object', text: '"Red clay" is the direct object and becomes the new subject.' },
              { label: 'Step 2: Check tense and number', text: 'Present simple tense, "clay" is uncountable singular ➔ use "is".' },
              { label: 'Step 3: Past participle of verb', text: 'Shape ➔ shaped.' },
              { label: 'Step 4: Combine', text: 'Red clay <strong>is shaped</strong> into beautiful cooking pots by artisans.' }
            ],
            proTip: 'Ensure subject-verb agreement with the NEW subject, not the original active subject!'
          },
          reciteFlashcards: [
            { q: 'What is the past participle of "weave"?', a: 'Woven (weave ➔ wove ➔ woven).' },
            { q: 'In the sentence "Coffee is harvested in Kaffa", what voice is used?', a: 'Passive Voice (Present Simple).' }
          ],
          amtQuiz: [
            {
              q: 'What is the passive voice form of: "The blacksmith forged the iron plow yesterday"?',
              options: [
                'The iron plow was forged by the blacksmith yesterday.',
                'The iron plow is forged by the blacksmith yesterday.',
                'The iron plow were forged by the blacksmith yesterday.',
                'The blacksmith was forged by the iron plow yesterday.'
              ],
              correct: 0,
              strategy: '"The iron plow" is singular and the original sentence is past simple ("forged").',
              derivation: 'Past passive singular: was + forged: "The iron plow was forged by the blacksmith yesterday."',
              trap: 'Do not use present "is" when the action happened "yesterday"!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-eng-u6',
      number: 'Unit 6',
      title: 'Road Safety and Rules',
      bigIdea: 'Understand pedestrian and vehicular safety, give directions, and master Imperative sentences and prepositions of movement.',
      subtopics: [
        {
          id: 'g7-eng-6.1',
          code: '6.1',
          title: 'Imperatives & Prepositions of Movement',
          survey: {
            blueprint: 'Imperatives (direct commands, warnings, instructions: base verb without subject). Prepositions: across, along, through, towards, past.',
            objectives: [
              'Form positive and negative imperative commands for road safety.',
              'Give precise navigational directions using prepositions of movement.',
              'Interpret traffic signs and pedestrian zebra crossing regulations.'
            ],
            keyFormulas: 'Positive Imperative: [Base Verb] + Object! &nbsp;|&nbsp; Negative Imperative: Don\'t + [Base Verb]!'
          },
          questions: [
            'Why does an imperative sentence not require an explicit subject pronoun "you"?',
            'What is the difference between walking "across the street" and "along the street"?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Imperative Commands & Spatial Directions</h4>
              <p>• <strong>Imperatives:</strong> Start directly with base form verb. Used for orders, safety rules, and instructions.<br>
                <em>Positive:</em> <strong>Look</strong> both ways before crossing. <strong>Wear</strong> your seatbelt.<br>
                <em>Negative:</em> <strong>Do not (Don\'t) cross</strong> the road while looking at a phone.<br>
              • <strong>Prepositions of Movement:</strong><br>
                - <em>Across:</em> From one side to the opposite (Walk across the zebra crossing).<br>
                - <em>Along:</em> Parallel to the edge or length (Walk along the pedestrian sidewalk).<br>
                - <em>Through:</em> Moving inside a 3D volume or passage (Drive through the roundabout).</p>
            </div>
          `,
          example: {
            title: 'Constructing Negative Safety Imperatives',
            problem: 'Turn this unsafe habit into a negative safety imperative: "A student runs across a busy avenue without waiting for green."',
            steps: [
              { label: 'Step 1: Choose imperative starter', text: 'Use "Do not" or contracted "Don\'t".' },
              { label: 'Step 2: Add base verb', text: '"run across".' },
              { label: 'Step 3: Complete command', text: '<strong>Don\'t run across</strong> the busy avenue without checking the pedestrian light!' }
            ],
            proTip: 'Never use "-ing" or "-ed" verbs to start imperative sentences (e.g., saying "Not running" is wrong)!'
          },
          reciteFlashcards: [
            { q: 'Which preposition means moving from one side of a road to the other?', a: 'Across.' },
            { q: 'How do you form a negative imperative in English?', a: 'Start with "Don\'t" + base verb (e.g., "Don\'t run!").' }
          ],
          amtQuiz: [
            {
              q: 'Which sentence correctly provides road safety instructions using an imperative verb?',
              options: [
                'Always use the pedestrian bridge to cross the highway.',
                'You must always using the pedestrian bridge to cross the highway.',
                'Always using the pedestrian bridge to cross the highway.',
                'Used the pedestrian bridge always to cross the highway.'
              ],
              correct: 0,
              strategy: 'Imperative sentences start with an adverb or base form verb with no subject pronoun.',
              derivation: '"Always use" features the bare infinitive verb "use" acting as a direct command instruction.',
              trap: 'Forms ending in "-ing" like "Always using" cannot function as imperatives!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-eng-u7',
      number: 'Unit 7',
      title: 'Hard Work, Careers and Entrepreneurship',
      bigIdea: 'Explore youth entrepreneurship, career aspirations, Future Tense expressions (will / going to), and First Conditional clauses.',
      subtopics: [
        {
          id: 'g7-eng-7.1',
          code: '7.1',
          title: 'Future Forms & First Conditional Sentences',
          survey: {
            blueprint: 'Future: "Will" (spontaneous decision/prediction) vs "Be going to" (prior plan/evidence). First Conditional: If + Present Simple, will + Base Verb (real possibility).',
            objectives: [
              'Differentiate between "will" and "be going to" for future actions.',
              'Form First Conditional sentences to express realistic conditions and outcomes.',
              'Discuss career planning and entrepreneurial ventures in Ethiopia.'
            ],
            keyFormulas: 'If + Present Simple, S + will + Base Verb &nbsp;|&nbsp; S + will + Base Verb + if + Present Simple'
          },
          questions: [
            'Can we use "will" in the "if-clause" of a First Conditional sentence?',
            'When should an entrepreneur use "I am going to" rather than "I will"?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Future Ambitions & Conditional Reasoning</h4>
              <p>• <strong>Will:</strong> Instant decisions, promises, offers, general predictions (I will help you draft the business plan).<br>
              • <strong>Be going to:</strong> Pre-existing plans, intentions, or predictions based on clear visual evidence (We <strong>are going to open</strong> a bakery next semester).<br>
              • <strong>First Conditional:</strong> Real, likely possibilities in the future.<br>
                <em>Formula:</em> <strong>If</strong> + Subject + Present Simple, Subject + <strong>will</strong> + Base Verb.<br>
                <em>Example:</em> If you <strong>save</strong> your pocket money, you <strong>will start</strong> your small enterprise sooner.</p>
            </div>
          `,
          example: {
            title: 'Completing a First Conditional Clause',
            problem: 'Complete the sentence with correct verb tenses: "If Aster (study) hard, she (pass) the entrance exam with top scores."',
            steps: [
              { label: 'Step 1: Apply rule to If-clause', text: 'If-clause must be in Present Simple: Aster (3rd person singular) ➔ "studies".' },
              { label: 'Step 2: Apply rule to Main clause', text: 'Main result clause must take "will + base verb" ➔ "will pass".' },
              { label: 'Step 3: Combine sentence', text: 'If Aster <strong>studies</strong> hard, she <strong>will pass</strong> the entrance exam with top scores.' }
            ],
            proTip: 'Never put "will" inside the if-clause! Saying "If Aster will study" is a common error.'
          },
          reciteFlashcards: [
            { q: 'What tense is used in the "if" clause of the First Conditional?', a: 'Present Simple tense.' },
            { q: 'Which future form expresses a decision made before the moment of speaking?', a: '"Be going to" (planned intention).' }
          ],
          amtQuiz: [
            {
              q: 'Which sentence correctly applies the First Conditional rule?',
              options: [
                'If you work diligently, you will achieve your entrepreneurial goals.',
                'If you will work diligently, you will achieve your entrepreneurial goals.',
                'If you work diligently, you achieved your entrepreneurial goals.',
                'If you worked diligently, you will achieve your entrepreneurial goals.'
              ],
              correct: 0,
              strategy: 'First conditional formula is: If + Present Simple, will + Bare Infinitive.',
              derivation: '"If you work" (present) + "you will achieve" (will + base verb) expresses a realistic future outcome.',
              trap: 'Never place "will" into the "if" clause ("If you will work" is incorrect)!'
            }
          ]
        }
      ]
    }
  ]
};
