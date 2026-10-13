// Grade 7 Citizenship Education - Complete Ethiopian Curriculum Syllabus (Units 1 to 6)
module.exports = {
  id: 'citizenship',
  name: 'Citizenship Education',
  icon: '⚖️',
  units: [
    {
      id: 'g7-cit-u1',
      number: 'Unit 1',
      title: 'Democratic Systems & Constitutionalism',
      bigIdea: 'Understand democratic principles, constitutional supremacy, citizen participation, and government separation of powers.',
      subtopics: [
        {
          id: 'g7-cit-1.1',
          code: '1.1',
          title: 'Principles of Democracy & Constitutional Supremacy',
          survey: {
            blueprint: 'Core pillars: Rule of Law, popular sovereignty, majority rule with minority rights, transparency, accountability, and periodic free elections.',
            objectives: [
              'Define democracy and explain direct vs representative democracy.',
              'Explain what makes the Constitution the supreme law of the land.',
              'Distinguish the roles of the Legislature, Executive, and Judiciary.'
            ],
            keyFormulas: 'Separation of Powers = Legislative (makes laws) + Executive (enforces laws) + Judicial (interprets laws)'
          },
          questions: [
            'Why does constitutional supremacy mean that no ordinary law or official action can violate the constitution?',
            'How do checks and balances prevent authoritarianism or abuse of power?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Democracy & Constitutional Pillars</h4>
              <p>• <strong>Democracy:</strong> Governance "of the people, by the people, for the people". In modern nations, citizens exercise power through elected representatives (representative democracy).<br>
              • <strong>Constitutional Supremacy:</strong> The Constitution is the foundational legal document. Any proclamation, decree, or government decision that contradicts it is null and void (Article 9 of the FDRE Constitution).<br>
              • <strong>Branches of State:</strong><br>
                - <em>Legislature (Parliament):</em> Enacts laws and represents public will.<br>
                - <em>Executive:</em> Implements and enforces laws (Prime Minister and Ministries).<br>
                - <em>Judiciary:</em> Independent court system that interprets laws and delivers justice.</p>
            </div>
          `,
          example: {
            title: 'Constitutional Supremacy in Practice',
            problem: 'A city municipality passes an ordinance banning students from peaceful assembly without a police permit. If the national constitution guarantees freedom of assembly, what happens to the municipal ordinance?',
            steps: [
              { label: 'Step 1: Check constitutional hierarchy', text: 'The Constitution is supreme over all local, municipal, and regional regulations.' },
              { label: 'Step 2: Legal finding', text: 'Because the local ordinance violates an entrenched constitutional right, the ordinance is legally unconstitutional and invalid.' }
            ],
            proTip: 'Constitutional review ensures that citizen rights are protected against arbitrary government orders!'
          },
          reciteFlashcards: [
            { q: 'What is the supreme law of the land in Ethiopia?', a: 'The Constitution of the FDRE.' },
            { q: 'Which branch of government is responsible for interpreting laws?', a: 'The Judiciary (courts).' }
          ],
          amtQuiz: [
            {
              q: 'Which democratic principle asserts that all citizens, regardless of status or political office, are equally subject to the law?',
              options: ['Rule of Man', 'Rule of Law', 'Authoritarianism', 'Majoritarian dominance'],
              correct: 1,
              strategy: 'Rule of Law guarantees equality before established laws.',
              derivation: 'The Rule of Law ensures laws are applied equally, publicly, and independently without arbitrary privilege.',
              trap: '"Rule of Man" implies arbitrary power by an autocrat, the exact opposite of Rule of Law!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u2',
      number: 'Unit 2',
      title: 'Fundamental Human & Democratic Rights',
      bigIdea: 'Explore universal human rights, civil and political rights, child rights, and state duties of protection.',
      subtopics: [
        {
          id: 'g7-cit-2.1',
          code: '2.1',
          title: 'Human Rights & Child Protection',
          survey: {
            blueprint: 'UDHR (Universal Declaration of Human Rights 1948). Three generations: Civil/Political (Liberty), Socio-Economic (Equality), Solidarity (Peace/Clean Environment). Child Rights: UNCRC.',
            objectives: [
              'State the defining features of human rights (Universal, Inherent, Inalienable, Indivisible).',
              'Differentiate human rights from democratic rights.',
              'Explain the fundamental rights of children (Right to life, education, protection from child labor and exploitation).'
            ],
            keyFormulas: 'Human Rights Features: Universal + Inherent + Inalienable + Indivisible'
          },
          questions: [
            'Why are human rights considered "inherent" rather than granted by the state?',
            'What constitutes hazardous child labor and why is it banned by law?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Human Rights Dimensions & Child Rights</h4>
              <p>• <strong>Core Attributes:</strong> Inherent (possessed simply by virtue of being human), Universal (apply everywhere to all humans), Inalienable (cannot be surrendered or taken away), Indivisible (all rights are equally important).<br>
              • <strong>Child Rights (UN Convention & FDRE Constitution Art. 36):</strong><br>
                - Right to life, a name, and nationality from birth.<br>
                - Right to education and healthcare.<br>
                - Protection against exploitative labor, corporal punishment, and neglect.<br>
                - The "Best Interests of the Child" shall be the primary consideration in all actions concerning children.</p>
            </div>
          `,
          example: {
            title: 'Evaluating Child Labor Violations',
            problem: 'A factory owner employs a 12-year-old child to carry 50 kg chemical sacks during school hours instead of attending class. Which rights are violated?',
            steps: [
              { label: 'Step 1: Right to Education', text: 'The child\'s fundamental right to basic education and personal development is violated.' },
              { label: 'Step 2: Right to Health and Safety', text: 'Exposing a child to hazardous heavy labor and toxic chemicals violates protections against child exploitation.' }
            ],
            proTip: 'The legal minimum age for employment protects youth development and guarantees compulsory schooling!'
          },
          reciteFlashcards: [
            { q: 'In what year was the Universal Declaration of Human Rights (UDHR) adopted?', a: '1948 (by the United Nations General Assembly).' },
            { q: 'What does "inalienable" mean regarding human rights?', a: 'They cannot be taken away or transferred from an individual.' }
          ],
          amtQuiz: [
            {
              q: 'Which principle states that in all court decisions, public welfare, and school actions, the child’s well-being must come first?',
              options: ['Best Interests of the Child', 'Commercial Profitability', 'Administrative Convenience', 'Adult Authority Precedence'],
              correct: 0,
              strategy: 'Identify the cornerstone tenet of the UN Convention on the Rights of the Child.',
              derivation: 'The "Best Interests of the Child" is the fundamental legal guideline governing child custody, welfare, and protective legislation.',
              trap: 'Adult convenience must never supersede child safety and rights!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u3',
      number: 'Unit 3',
      title: 'Equality, Inclusivity & Diversity',
      bigIdea: 'Champion gender equality, inclusivity for persons with disabilities, tolerance, and valuing national multiculturalism.',
      subtopics: [
        {
          id: 'g7-cit-3.1',
          code: '3.1',
          title: 'Gender Equality & Social Inclusivity',
          survey: {
            blueprint: 'Equality before the law, affirmative action to redress historical disadvantages, creating barrier-free accessible schools for persons with disabilities.',
            objectives: [
              'Differentiate biological sex from socially constructed gender roles.',
              'Explain the rationale and constitutional basis of affirmative action.',
              'Promote inclusive education environments for students with physical and sensory disabilities.'
            ],
            keyFormulas: 'Equity (Giving people what they need to succeed) leads to true Equality'
          },
          questions: [
            'Why is affirmative action considered compensatory justice rather than discrimination?',
            'What physical and digital accommodations are needed for visually and hearing-impaired learners?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Equity, Affirmative Action & Inclusivity</h4>
              <p>• <strong>Gender Equality:</strong> Men and women enjoy equal rights in civil, political, economic, and family life. Combating harmful traditional practices (early marriage, female genital mutilation).<br>
              • <strong>Affirmative Action:</strong> Targeted positive measures designed to assist historically marginalized groups (e.g., women, disabled students) in college admissions or employment to level the playing field.<br>
              • <strong>Inclusivity of Persons with Disabilities:</strong> Providing wheelchair ramps, braille textbooks, screen-reader tech, and sign language interpreters ensures equal access without discrimination.</p>
            </div>
          `,
          example: {
            title: 'Distinguishing Equality from Equity',
            problem: 'Three students of different heights (tall, medium, short) are trying to look over a 2-meter fence to watch a soccer match. How does equality differ from equity in this scenario?',
            steps: [
              { label: 'Step 1: Equality approach', text: 'Give every student one identical wooden box. The tall student sees easily, the short student still cannot see.' },
              { label: 'Step 2: Equity approach', text: 'Give zero boxes to the tall student, one to the medium student, and two boxes to the short student so everyone has equal sightlines.' },
              { label: 'Step 3: Conclusion', text: 'Equity allocates resources based on individual need to achieve equal outcomes.' }
            ],
            proTip: 'Equality treats everyone the same; equity provides the specific tools needed for all to succeed!'
          },
          reciteFlashcards: [
            { q: 'What is affirmative action?', a: 'Policies designed to redress past inequalities and discrimination.' },
            { q: 'Give one accommodation required for wheelchair users in public buildings.', a: 'Access ramps or elevators instead of stairs.' }
          ],
          amtQuiz: [
            {
              q: 'What is the primary objective of affirmative action programs in education and the workplace?',
              options: [
                'To permanently privilege one group over another',
                'To remedy historical disadvantages and create equal opportunity',
                'To eliminate standard qualification requirements',
                'To replace merit-based competition'
              ],
              correct: 1,
              strategy: 'Affirmative action is corrective justice.',
              derivation: 'Affirmative action bridges historical socio-economic barriers so marginalized groups can compete on equal terms.',
              trap: 'It is not intended to permanently privilege any group, but to balance systemic disadvantages!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u4',
      number: 'Unit 4',
      title: 'Justice, Fairness & Dispute Resolution',
      bigIdea: 'Study categories of justice (distributive, corrective, procedural) and methods of peaceful conflict resolution.',
      subtopics: [
        {
          id: 'g7-cit-4.1',
          code: '4.1',
          title: 'Dimensions of Justice & Conflict Resolution',
          survey: {
            blueprint: 'Distributive Justice (fair distribution of public wealth/burdens), Corrective Justice (repairing harm/penalizing crimes), Procedural Justice (fair hearings). Alternative Dispute Resolution: Negotiation, Mediation, Arbitration.',
            objectives: [
              'Explain the three major types of justice with real-world examples.',
              'Describe indigenous Ethiopian dispute resolution mechanisms (e.g., Shimgillina, Jaarsummaa).',
              'Explain how impartial courts ensure fair trials.'
            ],
            keyFormulas: 'Conflict Resolution: Dialogue ➔ Negotiation ➔ Mediation (neutral 3rd party) ➔ Reconciliation'
          },
          questions: [
            'How does procedural justice build public trust in law enforcement and judicial courts?',
            'What role does the respected elder (Shimagle / Jaarsa) play in community reconciliation?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Typologies of Justice & Traditional Mediation</h4>
              <p>• <strong>Types of Justice:</strong><br>
                - <em>Distributive:</em> Fair sharing of social benefits (schools, roads, clean water, healthcare) and burdens (taxes).<br>
                - <em>Corrective:</em> Restoring balance when someone has been wronged (restitution, criminal sentencing).<br>
                - <em>Procedural:</em> Fair, transparent rules used to make decisions (due process, right to a lawyer, impartial judge).<br>
              • <strong>Traditional Dispute Resolution:</strong> Ethiopia possesses centuries of customary mediation systems (Shimgillina in Amhara, Jaarsummaa in Oromo, Bayto in Tigray) that restore community peace and harmony without lengthy court litigation.</p>
            </div>
          `,
          example: {
            title: 'Classifying Forms of Justice',
            problem: 'The government builds new high schools in rural communities that previously lacked any secondary school facilities. Which form of justice does this exemplify?',
            steps: [
              { label: 'Step 1: Identify resource involved', text: 'Public educational infrastructure funded by national revenue.' },
              { label: 'Step 2: Analyze distribution', text: 'Allocating resources to historically underserved areas represents fair distribution of public benefits.' },
              { label: 'Step 3: Conclude', text: 'This is an example of <strong>Distributive Justice</strong>.' }
            ],
            proTip: 'Remember: Distributive = who gets what; Corrective = fixing a wrong; Procedural = following fair rules.'
          },
          reciteFlashcards: [
            { q: 'What type of justice deals with fair allocation of social resources and tax burdens?', a: 'Distributive Justice.' },
            { q: 'What is the traditional elder-led dispute resolution system in Ethiopia often called?', a: 'Shimgillina / Jaarsummaa.' }
          ],
          amtQuiz: [
            {
              q: 'When a court guarantees an accused person the right to legal counsel, the presumption of innocence, and an impartial trial, which form of justice is upheld?',
              options: ['Procedural Justice', 'Distributive Justice', 'Economic Justice', 'Retributive Justice alone'],
              correct: 0,
              strategy: 'Fair rules and processes of adjudication define procedural justice.',
              derivation: 'Procedural justice focuses on the fairness and transparency of the legal processes and decision-making procedures used to administer law.',
              trap: 'Distributive justice is about resource allocation, not courtroom trial procedures!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u5',
      number: 'Unit 5',
      title: 'Patriotism & National Identity',
      bigIdea: 'Understand democratic patriotism, national symbols, historical heroism, and pride in Ethiopia’s multicultural unity.',
      subtopics: [
        {
          id: 'g7-cit-5.1',
          code: '5.1',
          title: 'Democratic Patriotism & National Symbols',
          survey: {
            blueprint: 'Patriotism: Love for one\'s country shown through active civic contribution, tax compliance, protecting public assets, and honoring the Flag, Anthem, and Emblem.',
            objectives: [
              'Differentiate democratic patriotism from chauvinistic or blind nationalism.',
              'Explain the constitutional symbolism of the National Flag and Coat of Arms.',
              'Discuss civic responsibilities that protect the motherland (environmental care, hard work, unity).'
            ],
            keyFormulas: 'Democratic Patriotism = Love of Country + Defense of Constitutional Rights + Active Civic Duty'
          },
          questions: [
            'How is a citizen who cleans their neighborhood or pays taxes demonstrating patriotism?',
            'What is the difference between patriotic love of country and blind chauvinism?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Patriotic Values & National Heritage</h4>
              <p>• <strong>Democratic Patriotism:</strong> Genuine patriotism is rooted in values of freedom, justice, human dignity, and constructive citizenship. It encourages citizens to critique errors constructively and build a prosperous nation.<br>
              • <strong>National Symbols of Ethiopia:</strong><br>
                - <em>Tricolor Flag:</em> Green (fertility, labor, development), Yellow (hope, justice, religious equality), Red (sacrifice for freedom and sovereignty).<br>
                - <em>Emblem:</em> Central blue disc with golden star and radiant rays signifying unity of nations, nationalities, and peoples shining towards a bright common destiny.<br>
                - <em>National Anthem:</em> "Wodefit Gesgeshi, Widd Enat Ityoppya" celebrating history, work, and brotherhood.</p>
            </div>
          `,
          example: {
            title: 'Expressing Patriotism in Daily Life',
            problem: 'Which action by a student best demonstrates constructive democratic patriotism: complaining on social media, or organizing a weekend community literacy program?',
            steps: [
              { label: 'Step 1: Evaluate civic impact', text: 'Organizing a community literacy drive directly uplifts fellow citizens and advances national human capital.' },
              { label: 'Step 2: Conclude', text: 'Constructive democratic patriotism is expressed through tangible positive contributions to community welfare.' }
            ],
            proTip: 'True patriotism is not measured by loud slogans, but by dedication to national progress and the common good!'
          },
          reciteFlashcards: [
            { q: 'What do the radiant rays in the Ethiopian national emblem symbolize?', a: 'The bright shared future and equality of all nations and peoples.' },
            { q: 'What does the green color on the Ethiopian flag represent?', a: 'Fertility, agriculture, nature, and the fruits of labor.' }
          ],
          amtQuiz: [
            {
              q: 'Which behavior represents genuine democratic patriotism?',
              options: [
                'Protecting public property and participating in community development',
                'Unquestioning obedience even when laws violate human rights',
                'Feeling superior to people of other nationalities',
                'Evading taxes to keep personal money'
              ],
              correct: 0,
              strategy: 'Democratic patriotism links civic love of country with constitutional values and social solidarity.',
              derivation: 'Protecting shared public infrastructure and contributing to social development directly benefits the nation and fellow citizens.',
              trap: 'Blind obedience or feeling superior to others is toxic chauvinism, not democratic patriotism!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u6',
      number: 'Unit 6',
      title: 'Responsibility & Good Governance',
      bigIdea: 'Explore accountability, civic responsibilities, combating corruption, and youth participation in governance.',
      subtopics: [
        {
          id: 'g7-cit-6.1',
          code: '6.1',
          title: 'Civic Responsibility & Combating Corruption',
          survey: {
            blueprint: 'Good Governance: Transparency, Accountability, Responsiveness, Rule of Law, Integrity. Fighting corruption (bribery, nepotism, embezzlement).',
            objectives: [
              'Define civic responsibility and moral vs legal obligations.',
              'Explain the devastating societal impacts of bribery and nepotism.',
              'Identify the role of whistleblowers and anti-corruption commissions.'
            ],
            keyFormulas: 'Corruption = Monopoly of Power + Discretion - Accountability (Klitgaard Model)'
          },
          questions: [
            'How does corruption divert essential funding away from schools, hospitals, and clean water?',
            'What is the difference between a legal duty (e.g., paying taxes) and a moral duty (e.g., helping an injured neighbor)?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Accountability & Anti-Corruption Ethics</h4>
              <p>• <strong>Good Governance Principles:</strong> Decisions must be open to public scrutiny (transparency), leaders must answer for their stewardship of public resources (accountability), and government services must be delivered efficiently without prejudice.<br>
              • <strong>Forms of Corruption:</strong><br>
                - <em>Bribery:</em> Offering or accepting money to influence an official act.<br>
                - <em>Nepotism / Favoritism:</em> Awarding public contracts or jobs to family and friends rather than qualified individuals.<br>
                - <em>Embezzlement:</em> Stealing public funds entrusted to one\'s care.<br>
              • <strong>Citizen Role:</strong> Rejecting bribes, reporting malpractice, and demanding receipts for all administrative payments.</p>
            </div>
          `,
          example: {
            title: 'Analyzing the Economic Damage of Bribery',
            problem: 'A corrupt inspector accepts a bribe to approve substandard cement in a public school building. What are the multi-layered consequences?',
            steps: [
              { label: 'Step 1: Safety risk', text: 'The weak structural concrete puts hundreds of school children at risk of building collapse.' },
              { label: 'Step 2: Financial waste', text: 'Public tax funds are squandered, requiring double spending on future demolitions and repairs.' },
              { label: 'Step 3: Moral erosion', text: 'Erodes public trust in government institutions and normalizes lawlessness.' }
            ],
            proTip: 'Corruption is never a "victimless crime"; it steals directly from public safety and youth futures!'
          },
          reciteFlashcards: [
            { q: 'What is nepotism in public administration?', a: 'Using power to grant jobs or favors to relatives rather than based on merit.' },
            { q: 'What is transparency in governance?', a: 'Conducting public business and financial reporting openly and clearly for citizens.' }
          ],
          amtQuiz: [
            {
              q: 'When an official uses their public office and entrusted public funds for private personal gain, this is defined as:',
              options: ['Corruption', 'Good governance', 'Judicial independence', 'Civic courage'],
              correct: 0,
              strategy: 'Recall the definition of corruption.',
              derivation: 'Corruption is the abuse of entrusted power and public resources for illicit private benefit.',
              trap: 'Good governance is the exact antidote to corruption!'
            }
          ]
        }
      ]
    }
  ]
};
