// Grade 8 English - Complete Ethiopian Curriculum Syllabus (Units 1 to 7)
module.exports = {
  id: 'english',
  name: 'English',
  icon: '📚',
  units: [
    {
      id: 'g8-eng-u1',
      number: 'Unit 1',
      title: 'Global Communication & Media Literacy',
      bigIdea: 'Explore communication technologies, media ethics, Present Perfect Continuous tense, and Reported Speech mechanics.',
      subtopics: [
        {
          id: 'g8-eng-1.1',
          code: '1.1',
          title: 'Present Perfect Continuous & Reported Speech',
          survey: {
            blueprint: 'Present Perfect Continuous (has/have been + V-ing) emphasizes duration of ongoing activity. Reported Speech shifts tenses back one step (Present ➔ Past).',
            objectives: [
              'Use the Present Perfect Continuous tense to describe ongoing actions spanning past to present.',
              'Convert direct statements into indirect reported speech with correct pronoun and tense shifts.',
              'Critique digital news sources and detect misinformation online.'
            ],
            keyFormulas: 'S + have/has + been + V-ing &nbsp;|&nbsp; Direct "I am reading" ➔ Reported "He said that he was reading"'
          },
          questions: [
            'How does "I have read three articles" differ from "I have been reading articles for three hours"?',
            'What happens to modal verbs like "can" and "will" when converting direct speech to reported speech?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Continuous Aspect & Indirect Speech Rules</h4>
              <p>• <strong>Present Perfect Continuous:</strong> Emphasizes the duration or process of an action that started in the past and is still actively continuing.<br>
                <em>Formula:</em> <strong>Subject + have/has + been + Verb-ing.</strong><br>
                <em>Example:</em> Ethiopian programmers <strong>have been developing</strong> innovative mobile apps for several years.<br>
              • <strong>Reported Speech Rules (Backshifting):</strong><br>
                - Present Simple ➔ Past Simple (writes ➔ wrote)<br>
                - Present Continuous ➔ Past Continuous (is writing ➔ was writing)<br>
                - Present Perfect ➔ Past Perfect (has written ➔ had written)<br>
                - Will ➔ Would, Can ➔ Could.</p>
            </div>
          `,
          example: {
            title: 'Converting Direct Speech to Reported Speech',
            problem: 'Convert into reported speech: Almaz said, "I am researching digital media ethics for my class presentation."',
            steps: [
              { label: 'Step 1: Introductory reporting clause', text: 'Almaz said that...' },
              { label: 'Step 2: Pronoun shift', text: '"I" becomes "she".' },
              { label: 'Step 3: Tense backshift', text: '"am researching" (Present Continuous) becomes "was researching" (Past Continuous).' },
              { label: 'Step 4: Possessive shift', text: '"my presentation" becomes "her presentation".' },
              { label: 'Step 5: Full reported sentence', text: 'Almaz said that she <strong>was researching</strong> digital media ethics for <strong>her</strong> class presentation.' }
            ],
            proTip: 'Notice how pronouns and possessive adjectives must shift to match the perspective of the speaker!'
          },
          reciteFlashcards: [
            { q: 'What does "can" change to in reported speech?', a: '"could" (e.g., She said she could come).' },
            { q: 'What is the auxiliary structure of Present Perfect Continuous?', a: 'have/has + been + V-ing.' }
          ],
          amtQuiz: [
            {
              q: 'Which sentence correctly converts: Dawit said, "I have finished my homework"?',
              options: [
                'Dawit said that he had finished his homework.',
                'Dawit said that he has finished his homework.',
                'Dawit said that I had finished my homework.',
                'Dawit said that he finished his homework yesterday.'
              ],
              correct: 0,
              strategy: 'Present perfect ("have finished") backshifts to Past perfect ("had finished").',
              derivation: 'The reporting verb "said" triggers a backshift from present perfect (have finished) to past perfect (had finished), with "my" shifting to "his".',
              trap: 'Keeping "has finished" fails to backshift into past perspective!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-eng-u2',
      number: 'Unit 2',
      title: 'Wildlife Conservation in Ethiopia',
      bigIdea: 'Study unique Ethiopian flora/fauna, national park ecosystems, Past Perfect tense, and Second Conditional hypothetical scenarios.',
      subtopics: [
        {
          id: 'g8-eng-2.1',
          code: '2.1',
          title: 'Past Perfect Tense & Second Conditional Sentences',
          survey: {
            blueprint: 'Past Perfect (had + V3): the "earlier past" action before another past event. Second Conditional: If + Past Simple, would + base verb (hypothetical/unreal).',
            objectives: [
              'Use the Past Perfect tense with "before", "after", and "by the time".',
              'Construct Second Conditional sentences for unreal or hypothetical situations.',
              'Discuss habitat conservation of the Ethiopian Wolf and Walia Ibex.'
            ],
            keyFormulas: 'Past Perfect: had + V3 (happened first) ➔ Past Simple: V2 (happened second) &nbsp;|&nbsp; If + Past Simple, S + would + Base Verb'
          },
          questions: [
            'Why is Past Perfect called the "past before the past"?',
            'When do we use "were" instead of "was" in formal Second Conditional sentences?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Earlier Past & Hypothetical Conditionals</h4>
              <p>• <strong>Past Perfect (had + V3):</strong> Clarifies which of two past actions occurred first.<br>
                <em>Example:</em> By the time the wildlife rangers arrived, the poachers <strong>had fled</strong> into the dense forest.<br>
              • <strong>Second Conditional (Hypothetical / Imaginary):</strong> Imagining an unreal present or improbable future situation.<br>
                <em>Formula:</em> <strong>If + Subject + Past Simple, Subject + would + Base Verb.</strong><br>
                <em>Example:</em> If we <strong>protected</strong> more forest corridors, endangered wildlife <strong>would thrive</strong> safely.<br>
              • <em>Note:</em> In standard formal English, "were" is used for all subjects in the conditional clause (<em>If I were you...</em>).</p>
            </div>
          `,
          example: {
            title: 'Sequencing Actions with Past Perfect',
            problem: 'Combine into one sentence using "before": Action 1: The park rangers constructed watchtowers. Action 2: Tourists arrived to see the Mountain Nyala.',
            steps: [
              { label: 'Step 1: Identify earliest event', text: 'Constructing watchtowers happened first (requires Past Perfect: "had constructed").' },
              { label: 'Step 2: Identify later event', text: 'Tourists arriving happened second (requires Past Simple: "arrived").' },
              { label: 'Step 3: Combine sentence', text: 'The park rangers <strong>had constructed</strong> watchtowers before tourists <strong>arrived</strong>.' }
            ],
            proTip: 'The action with "had" is ALWAYS the chronologically older event!'
          },
          reciteFlashcards: [
            { q: 'What is the grammatical formula for the Second Conditional?', a: 'If + Past Simple, would + Base Verb.' },
            { q: 'Complete the hypothetical expression: "If I _____ (be) a wildlife ranger, I would guard the park."', a: '"were" (standard subjunctive).' }
          ],
          amtQuiz: [
            {
              q: 'Which sentence correctly expresses a hypothetical situation using the Second Conditional?',
              options: [
                'If the government established more sanctuaries, fewer animals would become extinct.',
                'If the government establishes more sanctuaries, fewer animals would become extinct.',
                'If the government had established more sanctuaries, fewer animals will become extinct.',
                'If the government would establish more sanctuaries, fewer animals became extinct.'
              ],
              correct: 0,
              strategy: 'Second conditional matches: If + Past Simple (established) with would + base verb (would become).',
              derivation: 'The hypothetical structure requires the past tense verb in the if-clause and the conditional auxiliary "would" in the result clause.',
              trap: 'Never put "would" in the "if" clause ("If the government would establish" is grammatically incorrect)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-eng-u3',
      number: 'Unit 3',
      title: 'Scientific Inventions & Innovations',
      bigIdea: 'Explore technological milestones, STEM achievements, and Relative Clauses (defining vs non-defining with who, which, that, where, whose).',
      subtopics: [
        {
          id: 'g8-eng-3.1',
          code: '3.1',
          title: 'Relative Clauses (Defining and Non-Defining)',
          survey: {
            blueprint: 'Relative Pronouns: Who (people), Which/That (things/animals), Where (places), Whose (possession). Defining (essential info, no commas) vs Non-defining (extra info, commas).',
            objectives: [
              'Combine sentences using appropriate relative pronouns.',
              'Distinguish defining relative clauses from non-defining clauses with commas.',
              'Write biographies of Ethiopian inventors and scientists.'
            ],
            keyFormulas: 'Defining: The inventor who designed... | Non-defining: Kitaw Ejigu, who was an aerospace engineer, worked on...'
          },
          questions: [
            'Why do non-defining relative clauses require commas around them?',
            'Can we use "that" in a non-defining relative clause?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Relative Pronouns & Clause Syntax</h4>
              <p>• <strong>Relative Pronouns:</strong><br>
                - <em>Who / Whom:</em> Refer to people (The engineer <strong>who</strong> patented the turbine).<br>
                - <em>Which / That:</em> Refer to objects or animals (The machine <strong>which/that</strong> tests solar cells).<br>
                - <em>Whose:</em> Shows possession (The innovator <strong>whose</strong> invention won first prize).<br>
                - <em>Where:</em> Refers to locations (The research laboratory <strong>where</strong> vaccines are tested).<br>
              • <strong>Defining vs. Non-Defining:</strong><br>
                - <em>Defining:</em> Essential to identify the noun (no commas). "The student who scored 100% won a scholarship."<br>
                - <em>Non-Defining:</em> Adds non-essential bonus details (separated by commas; never uses "that"). "Kitaw Ejigu, who was an Ethiopian aerospace engineer, inspired African youth."</p>
            </div>
          `,
          example: {
            title: 'Combining Sentences with Relative Clauses',
            problem: 'Combine the two sentences using a relative pronoun: "We visited the science museum. Ancient measuring tools are preserved there."',
            steps: [
              { label: 'Step 1: Identify the shared element', text: '"Science museum" is a physical location ("there").' },
              { label: 'Step 2: Choose relative pronoun', text: 'Use "where" for places.' },
              { label: 'Step 3: Combine', text: 'We visited the science museum <strong>where</strong> ancient measuring tools are preserved.' }
            ],
            proTip: 'Never use "that" in a non-defining clause enclosed in commas!'
          },
          reciteFlashcards: [
            { q: 'Which relative pronoun is used to indicate ownership or possession?', a: '"whose" (e.g., The student whose bag was found).' },
            { q: 'Do defining relative clauses use commas?', a: 'No, defining clauses never use commas.' }
          ],
          amtQuiz: [
            {
              q: 'Which sentence correctly uses a non-defining relative clause with proper punctuation?',
              options: [
                'Addis Ababa University, which was founded in 1950, is the oldest higher education institution in Ethiopia.',
                'Addis Ababa University that was founded in 1950 is the oldest higher education institution in Ethiopia.',
                'Addis Ababa University which was founded in 1950 is the oldest higher education institution in Ethiopia.',
                'Addis Ababa University, who was founded in 1950, is the oldest higher education institution in Ethiopia.'
              ],
              correct: 0,
              strategy: 'Addis Ababa University is a proper noun; additional facts require commas and "which" (never "that" or "who").',
              derivation: 'Non-defining clauses provide supplementary details about a specific named proper noun and must be enclosed in commas using "which".',
              trap: '"That" cannot be used in non-defining clauses enclosed in commas!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-eng-u4',
      number: 'Unit 4',
      title: 'Cultural Festivals & National Unity',
      bigIdea: 'Explore rich Ethiopian festivals (Meskel, Timket, Irreecha, Eid), and master Modal Verbs of Deduction (must, can’t, might).',
      subtopics: [
        {
          id: 'g8-eng-4.1',
          code: '4.1',
          title: 'Modal Verbs of Probability and Deduction',
          survey: {
            blueprint: 'Deductions: Must be (99% certain YES) ➔ Might / May / Could be (50% possible) ➔ Can\'t be (99% certain NO / impossible).',
            objectives: [
              'Use "must" for logical certainty based on strong evidence.',
              'Use "can’t" to express logical impossibility.',
              'Use "might / could" for uncertain possibilities in cultural descriptions.'
            ],
            keyFormulas: 'Certainty YES: S + must + Base Verb &nbsp;|&nbsp; Certainty NO: S + can\'t + Base Verb &nbsp;|&nbsp; Possibility: S + might + Base Verb'
          },
          questions: [
            'Why does "He can’t be at home" express logical deduction rather than lack of ability?',
            'What is the difference in certainty between "They might be traveling" and "They must be traveling"?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Modal Logic & Deductive Reasoning</h4>
              <p>• <strong>Must:</strong> Used when evidence leaves no reasonable doubt that something is true.<br>
                <em>Example:</em> Thousands of people are dressed in white traditional clothes carrying yellow Adey Abeba flowers; it <strong>must be</strong> the Meskel holiday celebration.<br>
              • <strong>Can\'t:</strong> Used when evidence proves something is logically impossible.<br>
                <em>Example:</em> Dawit just phoned me from Hawassa five minutes ago; he <strong>can\'t be</strong> knocking on my door in Gondar right now.<br>
              • <strong>Might / Could / May:</strong> Used when something is possible but not certain.<br>
                <em>Example:</em> The bus is late; there <strong>might be</strong> heavy traffic along the ring road.</p>
            </div>
          `,
          example: {
            title: 'Selecting the Deductive Modal Verb',
            problem: 'The lights are off, the gate is padlocked from the outside, and no one answers the phone. Form a deduction about whether the family is home.',
            steps: [
              { label: 'Step 1: Analyze evidence', text: 'Locked gate from outside + lights off + unanswered phone = strong proof of absence.' },
              { label: 'Step 2: Choose logical deduction modal', text: 'It is impossible for them to be inside ➔ use "can\'t".' },
              { label: 'Step 3: Express deduction', text: 'The family <strong>can\'t be</strong> at home right now.' }
            ],
            proTip: 'Never say "must not be" when you mean logical impossibility; "can\'t be" is the correct opposite of "must be"!'
          },
          reciteFlashcards: [
            { q: 'Which modal verb expresses that you are 99% sure something is true based on evidence?', a: '"Must" (e.g., It must be true).' },
            { q: 'Which modal verb expresses that something is logically impossible?', a: '"Can\'t" (e.g., That can\'t be right).' }
          ],
          amtQuiz: [
            {
              q: 'You see everyone on the street carrying umbrellas and raincoats. What is the most logical deduction?',
              options: [
                'It must be raining outside.',
                'It can\'t be raining outside.',
                'It might not be daylight.',
                'It should be midnight.'
              ],
              correct: 0,
              strategy: 'Evaluate visual evidence: umbrellas + raincoats indicate certainty of rain.',
              derivation: '"Must be" expresses strong certainty derived directly from visible evidence.',
              trap: '"Can\'t be" would imply it is impossible that it is raining, which contradicts the evidence!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-eng-u5',
      number: 'Unit 5',
      title: 'Climate Change & Environmental Resilience',
      bigIdea: 'Study climate challenges, adaptation strategies, and master Connectors of Contrast and Concession (although, however, despite, in spite of).',
      subtopics: [
        {
          id: 'g8-eng-5.1',
          code: '5.1',
          title: 'Connectors of Contrast (Although, However, Despite)',
          survey: {
            blueprint: 'Connectors of contrast: Although / Even though + Subject + Verb. Despite / In spite of + Noun Phrase or V-ing. However / Nevertheless + comma.',
            objectives: [
              'Use "although" and "even though" to link unexpected contrasting clauses.',
              'Apply "despite" and "in spite of" followed by noun phrases or gerunds.',
              'Use transition adverbs ("however", "nevertheless") with proper punctuation.'
            ],
            keyFormulas: 'Although + Clause (S + V) &nbsp;|&nbsp; Despite + Noun / V-ing &nbsp;|&nbsp; Clause. However, Clause.'
          },
          questions: [
            'Why is it grammatically incorrect to say "Although it rained, but we went out"?',
            'What must follow "despite": a complete clause or a noun/gerund?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Syntax of Contrast & Concession</h4>
              <p>• <strong>Although / Even though:</strong> Followed by a full subject and verb clause.<br>
                <em>Example:</em> <strong>Although</strong> droughts occurred, Ethiopian farmers harvested bumper wheat through dry-season irrigation.<br>
              • <strong>Despite / In spite of:</strong> Followed by a noun, pronoun, or gerund (-ing verb). Never followed directly by subject + verb unless using "the fact that".<br>
                <em>Example:</em> <strong>Despite the heavy rain</strong>, the tree planting ceremony continued.<br>
              • <strong>However / Nevertheless:</strong> Transition words starting a new independent sentence followed by a comma.<br>
                <em>Example:</em> Renewable energy investment is costly. <strong>However,</strong> it eliminates greenhouse emissions.</p>
            </div>
          `,
          example: {
            title: 'Converting "Although" to "Despite"',
            problem: 'Rewrite the sentence using "Despite": "Although he faced severe financial hardships, Kassahun graduated with top academic honors."',
            steps: [
              { label: 'Step 1: Extract the noun phrase from clause', text: '"He faced severe financial hardships" ➔ "severe financial hardships".' },
              { label: 'Step 2: Replace with despite', text: '<strong>Despite severe financial hardships</strong>, Kassahun graduated with top academic honors.' }
            ],
            proTip: 'Never write "Despite of" — "in spite of" takes "of", but "despite" NEVER takes "of"!'
          },
          reciteFlashcards: [
            { q: 'Is "despite of" grammatically correct?', a: 'No! Say either "despite" OR "in spite of".' },
            { q: 'Can you use "although" and "but" together in the same sentence?', a: 'No, using both is redundant and incorrect.' }
          ],
          amtQuiz: [
            {
              q: 'Which of the following sentences is grammatically correct?',
              options: [
                'Despite the difficult terrain, the engineers completed the road.',
                'Despite of the difficult terrain, the engineers completed the road.',
                'Although the difficult terrain, the engineers completed the road.',
                'Although it was difficult, but the engineers completed the road.'
              ],
              correct: 0,
              strategy: '"Despite" takes a noun phrase ("the difficult terrain") without "of".',
              derivation: '"Despite + noun phrase" is the standard concession structure.',
              trap: '"Despite of" is a frequent grammar error!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-eng-u6',
      number: 'Unit 6',
      title: 'Financial Literacy & Youth Entrepreneurship',
      bigIdea: 'Develop budgeting and investment vocabulary, direct versus indirect speech, and formal business correspondence.',
      subtopics: [
        {
          id: 'g8-eng-6.1',
          code: '6.1',
          title: 'Direct vs. Indirect Questions & Business Writing',
          survey: {
            blueprint: 'Direct Questions (verb inversion: Where is the bank?) vs Indirect Questions (polite, statement word order: Could you tell me where the bank is?).',
            objectives: [
              'Transform direct questions into polite indirect questions.',
              'Understand word order in indirect questions (Subject before Verb; drop do/does/did).',
              'Draft formal inquiry letters and business proposals.'
            ],
            keyFormulas: 'Indirect Question = Polite Starter + Question Word + Subject + Verb (No inversion!)'
          },
          questions: [
            'Why does the auxiliary verb "does" disappear when converting "When does the market open?" into an indirect question?',
            'What phrases are commonly used to open polite indirect questions?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Polite Business Inquiry Syntax</h4>
              <p>• <strong>Indirect Questions:</strong> Used in formal professional communication to ask questions politely.<br>
                - Starters: <em>Could you please tell me... / I would like to know... / Do you happen to know...</em><br>
              • <strong>Word Order Shift:</strong> Unlike direct questions where the auxiliary precedes the subject, indirect questions use standard affirmative statement order (Subject + Verb).<br>
                <em>Direct:</em> Where is the microfinance office?<br>
                <em>Indirect:</em> Could you tell me where <strong>the microfinance office is</strong>?<br>
                <em>Direct:</em> How much does the solar pump cost?<br>
                <em>Indirect:</em> Do you know how much the solar pump <strong>costs</strong>? (drop "does", add -s to verb).</p>
            </div>
          `,
          example: {
            title: 'Converting to an Indirect Question',
            problem: 'Turn this direct question into a polite indirect question starting with "Could you tell me...": "What time does the conference begin?"',
            steps: [
              { label: 'Step 1: Add starter and wh-word', text: '"Could you tell me what time..."' },
              { label: 'Step 2: Drop auxiliary "does"', text: 'Remove "does" and apply 3rd person singular -s to main verb "begin".' },
              { label: 'Step 3: Put subject before verb', text: '"Could you tell me what time the conference <strong>begins</strong>?"' }
            ],
            proTip: 'Never say "Could you tell me what time does the conference begin?" — avoid double question inversion!'
          },
          reciteFlashcards: [
            { q: 'In indirect questions, what is the word order after the question word?', a: 'Subject + Verb (normal statement word order).' },
            { q: 'Convert "Where is the station?" into an indirect question.', a: 'Could you tell me where the station is?' }
          ],
          amtQuiz: [
            {
              q: 'Which sentence is a grammatically correct indirect question?',
              options: [
                'Could you tell me where the manager\'s office is?',
                'Could you tell me where is the manager\'s office?',
                'Could you tell me where does the manager\'s office locate?',
                'Could you tell me where the manager\'s office was located yesterday?'
              ],
              correct: 0,
              strategy: 'Indirect questions require Subject (the manager\'s office) + Verb (is).',
              derivation: 'The noun phrase "the manager\'s office" must come before the verb "is" in indirect questions.',
              trap: '"Where is the manager\'s office" keeps direct question inversion!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-eng-u7',
      number: 'Unit 7',
      title: 'Peacebuilding, Conflict Resolution & Dialogue',
      bigIdea: 'Explore diplomacy, non-violent communication, Subject-Verb Agreement with complex subjects, and persuasive writing.',
      subtopics: [
        {
          id: 'g8-eng-7.1',
          code: '7.1',
          title: 'Subject-Verb Agreement with Complex Subjects',
          survey: {
            blueprint: 'Rules: Either...or / Neither...nor (agrees with closest subject). Collective nouns (team, committee). Indefinite pronouns (each, everyone = singular). Prepositional phrases (The leader of the delegates IS).',
            objectives: [
              'Apply subject-verb agreement rules when subjects are separated by prepositional phrases.',
              'Determine singular/plural agreement with "neither...nor" and "either...or".',
              'Compose persuasive speeches advocating community peace and national solidarity.'
            ],
            keyFormulas: 'Neither S1 nor S2 + Verb (Verb agrees with S2!) &nbsp;|&nbsp; Each / Every / Someone + Singular Verb'
          },
          questions: [
            'In "The bouquet of yellow flowers (is / are) beautiful", why is "is" correct even though "flowers" is plural?',
            'How do you determine verb agreement when subjects of different number are joined by "or"?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-sky-400">Complex Subject-Verb Agreement Mechanics</h4>
              <p>• <strong>Intervening Phrases:</strong> Ignore prepositional phrases (e.g., <em>along with, as well as, of</em>) separating subject and verb.<br>
                <em>Example:</em> The elder, along with all the community youths, <strong>is</strong> promoting peaceful dialogue.<br>
              • <strong>Proximity Rule with Either/Or and Neither/Nor:</strong> The verb agrees in person and number with the closer subject.<br>
                <em>Example:</em> Neither the facilitator nor the <strong>participants were</strong> satisfied.<br>
                <em>Example:</em> Neither the participants nor the <strong>facilitator was</strong> satisfied.<br>
              • <strong>Indefinite Pronouns:</strong> <em>Each, every, everyone, everybody, nobody, neither</em> take singular verbs (Everyone <strong>wants</strong> lasting peace).</p>
            </div>
          `,
          example: {
            title: 'Resolving Agreement with Intervening Modifiers',
            problem: 'Choose the correct verb: "A basket of fresh injera (was / were) placed on the banquet table."',
            steps: [
              { label: 'Step 1: Identify the true head subject', text: '"A basket" is the singular head noun.' },
              { label: 'Step 2: Ignore prepositional modifier', text: '"of fresh injera" is a prepositional phrase modifying the basket.' },
              { label: 'Step 3: Match verb', text: 'Singular subject "basket" takes singular verb: "A basket of fresh injera <strong>was</strong> placed..."' }
            ],
            proTip: 'Cross out the prepositional phrase in your mind to find the true head noun!'
          },
          reciteFlashcards: [
            { q: 'Does the indefinite pronoun "everyone" take a singular or plural verb?', a: 'Singular (e.g., "Everyone is ready").' },
            { q: 'In "Neither the teacher nor the students ____ (is/are) in the hall", which verb is correct?', a: '"are" (agrees with the closer plural noun "students").' }
          ],
          amtQuiz: [
            {
              q: 'Choose the sentence with correct subject-verb agreement:',
              options: [
                'Each of the delegates has signed the peace accord.',
                'Each of the delegates have signed the peace accord.',
                'The list of diplomatic rules are hanging on the wall.',
                'Neither the mediator nor the diplomats was present.'
              ],
              correct: 0,
              strategy: '"Each" is a singular indefinite pronoun taking the singular verb "has signed".',
              derivation: 'The head subject "Each" requires the singular verb "has signed", regardless of the intervening plural phrase "of the delegates".',
              trap: '"delegates" is inside the prepositional phrase and does not dictate verb agreement!'
            }
          ]
        }
      ]
    }
  ]
};
