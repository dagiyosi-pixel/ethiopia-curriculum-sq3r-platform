const fs = require('fs');
const path = require('path');

const g7Citizenship = {
  id: 'citizenship',
  name: 'Citizenship Education',
  icon: '⚖️',
  units: [
    {
      id: 'g7-cit-u1',
      number: 'Unit 1',
      title: 'Democratic System',
      bigIdea: 'Understand democratic principles, direct versus representative democracy, constitutional supremacy, citizen participation, and government separation of powers.',
      subtopics: [
        {
          id: 'g7-cit-1.1',
          code: '1.1',
          title: 'Principles of Democracy & Constitutional Supremacy',
          survey: {
            blueprint: 'Core pillars: Rule of Law, popular sovereignty, majority rule with minority rights, transparency, accountability, and periodic free elections. Constitutional Supremacy (Article 9 of FDRE Constitution). Separation of Powers: Legislature (HPR), Executive (PM & Ministries), Judiciary (Courts).',
            objectives: [
              'Define democracy and explain direct vs representative democracy.',
              'Explain what makes the Constitution the supreme law of the land.',
              'Distinguish the roles of the Legislature, Executive, and Judiciary.'
            ],
            keyFormulas: 'Separation of Powers = Legislative (enacts laws) + Executive (enforces laws) + Judicial (interprets laws)'
          },
          questions: [
            'Why does constitutional supremacy mean that no ordinary law or government proclamation can contradict the constitution?',
            'How do checks and balances prevent abuse of power or tyranny in a constitutional democracy?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🏛️</span> 1. DEMOCRATIC PRINCIPLES & GOVERNANCE
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Democracy:</strong> Derived from Greek <em>demos</em> (people) and <em>kratos</em> (rule) = rule by the people.<br>
                  • <strong>Direct Democracy:</strong> Citizens directly deliberate and vote on every law (practiced in Ancient Athens and modern Swiss cantons).<br>
                  • <strong>Representative (Indirect) Democracy:</strong> Citizens elect representatives through periodic secret ballot elections to make decisions on their behalf (practiced in Ethiopia and modern republics).<br>
                  • <strong>Core Pillars:</strong> Popular sovereignty, universal adult suffrage, majority rule with fundamental minority protection, institutional transparency, and regular competitive elections.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>📜</span> 2. CONSTITUTIONAL SUPREMACY & SEPARATION OF POWERS
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Constitutional Supremacy (Article 9 of FDRE Constitution):</strong> The Constitution is the supreme law of the land. Any law, customary practice, or decision of an organ of state or public official that contravenes this Constitution is <strong>null and void</strong> with zero legal effect.</p>
                  <p>• <strong>Separation of Powers:</strong> Formulated by Montesquieu to prevent dictatorship by dividing authority among three co-equal branches:<br>
                  - <em>Legislative:</em> House of Peoples’ Representatives (makes and enacts proclamations).<br>
                  - <em>Executive:</em> Prime Minister and Council of Ministers (implements and administers policy).<br>
                  - <em>Judiciary:</em> Independent court system (Federal Supreme Court, High Court, First Instance Court) that interprets laws and protects rights.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Application of Constitutional Supremacy',
            problem: 'A regional state council passes a regulation prohibiting women from owning rural agricultural land. Does this regulation have legal force in Ethiopia?',
            steps: [
              {
                label: 'Step 1: Check constitutional provisions',
                text: 'Article 35(7) of the FDRE Constitution explicitly guarantees: "Women have the right to acquire, administer, control, use and transfer property; in particular, they have equal rights with men in respect of use, transfer, administration and control of land."'
              },
              {
                label: 'Step 2: Apply Article 9 Supremacy clause',
                text: 'Article 9 states that any proclamation, regulation, or customary practice that contradicts the Constitution has no legal effect.'
              },
              {
                label: 'Step 3: Legal conclusion',
                text: 'The regional regulation is completely <strong>unconstitutional, null, and void</strong>. Courts and citizens are bound strictly to uphold constitutional supremacy!'
              }
            ],
            proTip: 'Constitutional supremacy is the ultimate shield protecting fundamental human rights against arbitrary government decrees!'
          },
          reciteFlashcards: [
            { q: 'What is the supreme law of the land in Ethiopia?', a: 'The Constitution of the Federal Democratic Republic of Ethiopia (FDRE).' },
            { q: 'Which organ of state is responsible for interpreting laws and adjudicating disputes?', a: 'The Judiciary (Courts).' },
            { q: 'What does "null and void" mean regarding laws that violate the Constitution?', a: 'They have zero legal validity and cannot be enforced.' }
          ],
          amtQuiz: [
            {
              q: 'According to Article 9 of the FDRE Constitution, what happens if an administrative decree issued by a government ministry contradicts a constitutional article?',
              options: [
                'The decree takes precedence until the next election',
                'The decree is null and void with zero legal effect',
                'The decree remains active for six months',
                'The decree must be approved by the President'
              ],
              correct: 1,
              strategy: 'Constitutional supremacy guarantees that any contradictory decree is null and void.',
              derivation: 'Under Article 9(1), the Constitution is the supreme law of the land, rendering any conflicting law, regulation, or customary practice completely invalid.',
              trap: 'Assuming ministerial decrees override constitutional provisions!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u2',
      number: 'Unit 2',
      title: 'The Rule of Law',
      bigIdea: 'Understand the concept of the Rule of Law, equality before the law, limits on government power, due process, and the dangers of corruption and arbitrary rule.',
      subtopics: [
        {
          id: 'g7-cit-2.1',
          code: '2.1',
          title: 'Rule of Law vs Rule of Man & Due Process',
          survey: {
            blueprint: 'Rule of Law: all individuals, institutions, and leaders are accountable to publicly promulgated laws. Contrast with "Rule of Man" (arbitrary tyranny). Key components: legal equality, presumption of innocence, fair trial, independent judiciary, prevention of abuse of authority and corruption.',
            objectives: [
              'Differentiate between the Rule of Law and Rule of Man / arbitrary authority.',
              'Explain the fundamental principle of "Presumption of Innocence".',
              'Analyze how the Rule of Law protects citizens from official corruption and rights abuses.'
            ],
            keyFormulas: 'Rule of Law = Equality Before Law + Independent Courts + Limitation of State Power'
          },
          questions: [
            'What is the fundamental danger to ordinary citizens when a country operates under the "Rule of Man" instead of the Rule of Law?',
            'Why does the law insist that an accused person is "presumed innocent until proven guilty by a court of law"?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>⚖️</span> 1. THE ESSENCE OF THE RULE OF LAW
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Rule of Law:</strong> A foundational principle where laws apply equally to all people, including government officials, prime ministers, judges, and ordinary citizens. No individual is above the law.<br>
                  • <strong>Rule of Man:</strong> When society is governed by the arbitrary whims, personal preferences, and decrees of a single ruler or ruling elite without legal restraint. Leads inevitably to tyranny, nepotism, and injustice.<br>
                  • <strong>Core Pillars:</strong> Pre-established clear laws, public promulgation, equal enforcement, and independent adjudication by impartial courts.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🛡️</span> 2. DUE PROCESS & PRESUMPTION OF INNOCENCE
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Presumption of Innocence (Article 20 of FDRE Constitution):</strong> Every person accused of an offense has the absolute right to be presumed innocent until proven guilty according to law by an impartial court.</p>
                  <p>• <strong>Due Process Rights:</strong><br>
                  - Right to be informed promptly of charges in a language they understand.<br>
                  - Right to full legal representation (counsel).<br>
                  - Right to a public trial without unreasonable delay.<br>
                  - Protection against arbitrary arrest, unlawful search, and self-incrimination.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Due Process in Criminal Procedure',
            problem: 'A police officer arrests a suspect on suspicion of burglary and detains him in a cell for 8 days without bringing him before a court or formally filing charges. Is this action lawful under the Ethiopian legal system?',
            steps: [
              {
                label: 'Step 1: Check constitutional detention limits',
                text: 'Article 19(3) of the FDRE Constitution mandates that all arrested persons have the right to be brought before a court of law within <strong>48 hours</strong> of their arrest (excluding travel time).'
              },
              {
                label: 'Step 2: Legal violation identified',
                text: 'Detaining the suspect for 8 days without judicial review violates habeas corpus and procedural due process.'
              },
              {
                label: 'Step 3: Remedy',
                text: 'The court will order the immediate release or review of the detention, and the police officer can be held legally accountable for unlawful detention under the Rule of Law.'
              }
            ],
            proTip: 'The 48-hour rule prevents police forces from holding citizens indefinitely without judicial supervision!'
          },
          reciteFlashcards: [
            { q: 'What is the maximum time an arrested person can be held before being brought before a court in Ethiopia?', a: '48 hours (excluding reasonable travel time).' },
            { q: 'What does the Presumption of Innocence state?', a: 'Every accused person is considered innocent until proven guilty by a court of law.' },
            { q: 'What is the opposite of the Rule of Law?', a: 'The Rule of Man (arbitrary, lawless governance).' }
          ],
          amtQuiz: [
            {
              q: 'Which democratic concept guarantees that high-ranking government officials and ordinary citizens are subject to the exact same penal laws and legal processes?',
              options: ['Executive Immunity', 'The Rule of Law', 'Parliamentary Privilege', 'Rule of Man'],
              correct: 1,
              strategy: 'Rule of Law means no one is above the law and all are equal before it.',
              derivation: 'The Rule of Law asserts the absolute supremacy of established law over all individuals regardless of office, wealth, or status.',
              trap: 'Assuming executive immunity exempts leaders from law!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u3',
      number: 'Unit 3',
      title: 'Equality',
      bigIdea: 'Understand human equality, gender equity, affirmative action, rights of children, and rights of nations, nationalities and peoples.',
      subtopics: [
        {
          id: 'g7-cit-3.1',
          code: '3.1',
          title: 'Gender Equity, Non-Discrimination & Affirmative Action',
          survey: {
            blueprint: 'Equality before the law (Article 25). Gender equality: combating harmful traditional practices (child marriage, FGM). Affirmative action: corrective measures to bridge historical disparities. Rights of children and rights of persons with disabilities.',
            objectives: [
              'Explain equality before the law without discrimination based on race, gender, religion, or language.',
              'Analyze the rationale for Affirmative Action in education and civil service.',
              'Identify harmful traditional practices (HTPs) that violate the constitutional rights of women and children.'
            ],
            keyFormulas: 'Equality Before Law = Non-Discrimination + Equal Opportunity + Affirmative Redress'
          },
          questions: [
            'Why does true equality sometimes require "Affirmative Action" rather than treating historically disadvantaged groups identically?',
            'What legal and societal measures are required in Ethiopia to eradicate harmful traditional practices like early childhood marriage?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>⚖️</span> 1. CONSTITUTIONAL EQUALITY & NON-DISCRIMINATION
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Article 25 (Right to Equality):</strong> All persons are equal before the law and are entitled without any discrimination to the equal protection of the law. The law guarantees effective protection without discrimination on grounds of race, nation, nationality, color, sex, language, religion, political opinion, or social origin.<br>
                  • <strong>Gender Equity:</strong> Ensuring women have equal access to land ownership, education, equal pay for equal work, inheritance, and reproductive healthcare.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>📈</span> 2. AFFIRMATIVE ACTION AS CORRECTIVE JUSTICE
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Definition:</strong> Special positive remedial measures designed to eliminate the ongoing effects of historical discrimination, prejudice, and structural inequality against marginalized groups (such as women and historically underserved pastoralist communities).</p>
                  <p>• <strong>Article 35(3):</strong> Mandates that <em>"historical legacy of inequality and discrimination suffered by women in Ethiopia shall be redressed through affirmative action measures"</em> in university entrance cutoffs, vocational hiring, and leadership appointments.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Rationale of University Affirmative Action',
            problem: 'Explain why the Ethiopian Ministry of Education sets slightly lower cutoff scores for female applicants and pastoralist students entering higher education universities.',
            steps: [
              {
                label: 'Step 1: Recognize historical structural disparities',
                text: 'Due to unequal domestic labor burdens, harmful cultural traditions, and remote geographical infrastructure, female and pastoralist students face severe obstacles outside their academic control.'
              },
              {
                label: 'Step 2: Corrective equal playing field',
                text: 'Affirmative action does not lower competence standards; it corrects systemic unfair hurdles to ensure all citizens have genuine equal access to university education and national development.'
              }
            ],
            proTip: 'Affirmative action is temporary and targeted: once equality of opportunity and demographic parity are achieved, special measures can be phased out!'
          },
          reciteFlashcards: [
            { q: 'Which article of the FDRE Constitution guarantees the right to equality before the law?', a: 'Article 25.' },
            { q: 'What is affirmative action?', a: 'Special positive remedial measures to correct historical discrimination and inequality.' },
            { q: 'What harmful traditional practice involves forcing young underage girls into marriage?', a: 'Child marriage (early marriage).' }
          ],
          amtQuiz: [
            {
              q: 'The implementation of affirmative action in Ethiopian higher education and public sector recruitment is designed to:',
              options: [
                'Permanently favor one group over all others regardless of merit',
                'Correct and eliminate the historical legacy of inequality and structural discrimination suffered by women and underserved communities',
                'Abolish the merit system completely',
                'Discourage male students from studying'
              ],
              correct: 1,
              strategy: 'Affirmative action is constitutional corrective redress for historical discrimination (Article 35(3)).',
              derivation: 'The explicit constitutional purpose of affirmative action is to remedy long-standing historical disparities and achieve a level playing field.',
              trap: 'Believing affirmative action is permanent discrimination against men!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u4',
      number: 'Unit 4',
      title: 'Justice',
      bigIdea: 'Understand the three dimensions of justice (distributive, corrective, procedural), fair trial rights, and the role of an independent judicial system.',
      subtopics: [
        {
          id: 'g7-cit-4.1',
          code: '4.1',
          title: 'Distributive, Corrective & Procedural Justice',
          survey: {
            blueprint: 'Three forms of justice: (1) Distributive justice: fair allocation of national benefits and burdens, (2) Corrective justice: restoring balance after a wrong or injury through compensation and restitution, (3) Procedural justice: fair, transparent, and impartial decision-making rules.',
            objectives: [
              'Differentiate between distributive, corrective, and procedural justice.',
              'Explain the role of courts and customary dispute mechanisms (Shimgelina).',
              'Analyze how taxation and public infrastructure represent distributive justice.'
            ],
            keyFormulas: 'Justice = Fairness in Allocation (Distributive) + Fairness in Remedy (Corrective) + Fairness in Process (Procedural)'
          },
          questions: [
            'How does progressive taxation and public school funding embody distributive justice in Ethiopia?',
            'What is the difference between formal courtroom litigation and traditional Ethiopian elders’ mediation (Shimgelina)?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>⚖️</span> 1. THE THREE FORMS OF JUSTICE
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>1. Distributive Justice:</strong> Concerns the fair distribution of society’s benefits (education, clean water, healthcare, land, roads) and burdens (taxes, civic duties, military service). Ensures that resources are not monopolized by a privileged elite.</p>
                  <p>• <strong>2. Corrective Justice:</strong> Concerns correcting wrongs and restoring equilibrium when someone’s rights, property, or bodily integrity have been violated. The wrongdoer must make restitution or pay compensation to the victim, accompanied by proportionate legal punishment.</p>
                  <p>• <strong>3. Procedural Justice:</strong> Concerns the fairness of the procedures used to make decisions. Decisions must be transparent, evidence-based, free of bias or conflict of interest, and allow all parties an equal opportunity to be heard (the legal principle <em>"Audi alteram partem"</em> — hear the other side!).</p>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🤝</span> 2. TRADITIONAL MEDIATION: SHIMGELINA
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Alongside formal courts, Ethiopia possesses deeply rooted indigenous justice mechanisms:<br>
                  • <strong>Shimgelina (Council of Elders):</strong> Respected community elders mediate interpersonal, clan, and property conflicts.<br>
                  • <em>Advantage:</em> Focuses on <strong>restorative reconciliation</strong>, social harmony, and mutual forgiveness rather than purely punitive win-lose outcomes.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Classifying Real-World Justice Scenarios',
            problem: 'Classify each scenario as Distributive, Corrective, or Procedural Justice: (a) A court orders a reckless driver to pay for hospital treatment of an injured pedestrian; (b) The government builds rural health clinics in remote Afar woredas using national budget funds; (c) A referee allows both soccer teams equal time and reviews video replay impartially.',
            steps: [
              {
                label: 'Scenario A: Restitution for injury',
                text: 'Paying hospital damages restores the victim to their prior state: <strong>Corrective Justice</strong>.'
              },
              {
                label: 'Scenario B: Allocation of national public services',
                text: 'Distributing healthcare facilities fairly across regions: <strong>Distributive Justice</strong>.'
              },
              {
                label: 'Scenario C: Impartial fair rules of process',
                text: 'Following fair, unbiased rules and hearing both sides: <strong>Procedural Justice</strong>.'
              }
            ],
            proTip: 'Remember: Benefits/Burdens = Distributive; Fixing a Wrong = Corrective; Fair Process = Procedural!'
          },
          reciteFlashcards: [
            { q: 'What form of justice deals with the fair allocation of resources and taxes in a country?', a: 'Distributive Justice.' },
            { q: 'What form of justice requires a wrongdoer to compensate a victim for damages caused?', a: 'Corrective Justice.' },
            { q: 'What is the traditional Ethiopian elders’ dispute resolution institution called?', a: 'Shimgelina.' }
          ],
          amtQuiz: [
            {
              q: 'When a court requires a person who damaged someone’s farmland to pay compensation to restore the farmer’s financial loss, which form of justice is being fulfilled?',
              options: ['Distributive Justice', 'Corrective Justice', 'Procedural Justice', 'Arbitrary Justice'],
              correct: 1,
              strategy: 'Compensation and restitution for a civil wrong represent corrective justice.',
              derivation: 'Corrective justice focuses on remedying a specific wrong or injury and restoring the victim to their original condition through compensation.',
              trap: 'Confusing corrective justice with distributive justice!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u5',
      number: 'Unit 5',
      title: 'Patriotism',
      bigIdea: 'Understand true patriotism: love of homeland, defense of sovereignty, honoring national symbols (flag, anthem, coat of arms), protecting cultural heritage, and combating chauvinism.',
      subtopics: [
        {
          id: 'g7-cit-5.1',
          code: '5.1',
          title: 'Patriotism, National Symbols & Heritage Preservation',
          survey: {
            blueprint: 'True patriotism vs Chauvinism / Blind loyalty. National symbols of Ethiopia: The National Flag (Green, Yellow, Red tricolor with circular emblem), National Anthem, Coat of Arms. Defending national sovereignty and unity in diversity. Protecting historical, cultural, and natural heritage.',
            objectives: [
              'Differentiate between healthy patriotism (constructive love for country and people) and destructive chauvinism.',
              'Explain the symbolism of the Ethiopian National Flag and Anthem.',
              'Describe citizen responsibilities in safeguarding historical monuments (Aksum, Lalibela, Gondar).'
            ],
            keyFormulas: 'National Flag: Green (fertility & labor) + Yellow (hope & religious freedom) + Red (sacrifice & bravery)'
          },
          questions: [
            'How does true civic patriotism differ from blind nationalism or aggressive chauvinism?',
            'What do the three horizontal colors (Green, Yellow, Red) and the central star emblem on the Ethiopian national flag represent?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🇪🇹</span> 1. TRUE PATRIOTISM VS. CHAUVINISM
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>True Patriotism:</strong> A genuine, devoted love for one's country expressed through constructive citizenship: obeying laws, paying taxes, promoting national development, protecting public resources, standing against injustice, and honoring fellow citizens.<br>
                  • <strong>Chauvinism (Blind Nationalism):</strong> An uncritical, aggressive belief in the superiority of one's own group, nation, or gender combined with hostility toward others. Chauvinism breeds war, bigotry, and ethnic conflict. True patriots critique national shortcomings to help their country improve!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>🚩</span> 2. ETHIOPIA’S NATIONAL SYMBOLS
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>The National Flag (Article 3 of FDRE Constitution):</strong> Three equal horizontal stripes:<br>
                  - <strong>Green (Top):</strong> Represents fertility of the soil, labor, agricultural abundance, and development.<br>
                  - <strong>Yellow (Middle):</strong> Represents hope, justice, peace, and religious equality.<br>
                  - <strong>Red (Bottom):</strong> Represents sacrifice, heroism, and bravery in defense of national sovereignty and freedom.<br>
                  - <strong>Central Blue Emblem with Yellow Star:</strong> Radiating rays signify the bright future and equality of all Nations, Nationalities, and Peoples of Ethiopia united in brotherhood.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Acts of Daily Civic Patriotism',
            problem: 'Which of the following actions best demonstrates true patriotism: (A) Boasting that one’s nation has never made historical mistakes, or (B) Cleaning municipal drainage ditches and planting trees in a neighborhood volunteer project?',
            steps: [
              {
                label: 'Step 1: Evaluate Action A',
                text: 'Blind boasting ignores real problems and reflects chauvinistic complacency rather than constructive action.'
              },
              {
                label: 'Step 2: Evaluate Action B',
                text: 'Volunteering to protect the environment and municipal infrastructure directly improves the lives of fellow citizens, demonstrating genuine civic patriotism through service.'
              }
            ],
            proTip: 'Patriotism is not just waving a flag during national holidays; it is demonstrated daily through integrity, paying taxes honestly, and public service!'
          },
          reciteFlashcards: [
            { q: 'What does the green color on the Ethiopian national flag symbolize?', a: 'Fertility, agriculture, and national development.' },
            { q: 'What is the blue circular emblem with a golden star at the center of the flag?', a: 'The equality, unity, and bright future of all Nations, Nationalities, and Peoples of Ethiopia.' },
            { q: 'What is chauvinism?', a: 'Blind, aggressive nationalism that treats other nations or groups with contempt.' }
          ],
          amtQuiz: [
            {
              q: 'On the National Flag of Ethiopia, what does the bottom RED stripe historically and constitutionally symbolize?',
              options: [
                'Volcanic basalt minerals in the Rift Valley',
                'The bravery, heroism, and sacrifices made by patriots to defend national freedom and sovereignty',
                'The setting sun over the western border',
                'Coffee exports to international markets'
              ],
              correct: 1,
              strategy: 'The red stripe symbolizes the blood and sacrifices of Ethiopian patriots.',
              derivation: 'Red traditionally and constitutionally represents the blood shed by brave patriots at battles like Adwa to defend Ethiopia’s independence.',
              trap: 'Assuming red represents minerals or export crops!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u6',
      number: 'Unit 6',
      title: 'Responsibility',
      bigIdea: 'Understand personal, social, and civic responsibilities, fulfillment of promises, preservation of historical heritage, and combating the spread of HIV/AIDS.',
      subtopics: [
        {
          id: 'g7-cit-6.1',
          code: '6.1',
          title: 'Civic Responsibilities, Heritage & Health Protection',
          survey: {
            blueprint: 'Responsibilities: personal, social, and civic duties. Keeping promises and contractual integrity. Protection of natural resources and cultural heritage (preventing looting of antiquities). Preventing HIV/AIDS through abstinence, fidelity, and elimination of stigma.',
            objectives: [
              'Distinguish between personal, moral, and civic responsibilities.',
              'Explain the consequences of failing to fulfill promises in social and economic life.',
              'Describe methods of conserving Ethiopia’s historical heritage and stopping illegal artifact trafficking.'
            ],
            keyFormulas: 'Responsibility = Accountability for Actions + Fulfilling Commitments + Public Good Stewardship'
          },
          questions: [
            'Why is keeping a promise considered both an ethical moral duty and an economic cornerstone of contracts?',
            'What civic responsibility do local communities have in protecting ancient archaeological sites from illegal excavation and foreign smuggling?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>📋</span> 1. PERSONAL, MORAL & CIVIC RESPONSIBILITIES
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A responsibility is a duty or obligation to act or perform certain tasks, or to accept accountability for one’s actions:<br>
                  • <strong>Personal Responsibilities:</strong> Taking care of one’s health, education, hygiene, and ethical character.<br>
                  • <strong>Social / Moral Responsibilities:</strong> Supporting family members, keeping promises, respecting elders, and helping neighbors in times of grief (e.g. Edir).<br>
                  • <strong>Civic Responsibilities:</strong> Obeying constitutional laws, paying taxes, voting in elections, participating in community development, and reporting crimes.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🏛️</span> 2. SAFEGUARDING ETHIOPIA’S HISTORICAL HERITAGE
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Ethiopia possesses centuries of ancient manuscripts, parchment Bibles and Qurans, rock-hewn churches, and archaeological ruins. Citizens have a civic duty to:<br>
                  • Refuse to sell ancient family manuscripts or church/mosque treasures to tourists or antique smugglers.<br>
                  • Prevent vandalism, graffiti, and illegal looting of archaeological sites.<br>
                  • Notify authorities when ancient artifacts or fossils are uncovered during construction or plowing.
                </p>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Resolving a Conflict of Responsibilities',
            problem: 'A student discovers that a fellow classmate has stolen exam papers from the staff room. The classmate asks the student to promise to keep it a secret. What is the ethically responsible course of action?',
            steps: [
              {
                label: 'Step 1: Weigh moral duties',
                text: 'A promise to keep a secret must not be used to shield an illegal or dishonest crime that harms academic integrity and the rights of all other students.'
              },
              {
                label: 'Step 2: Act in favor of the greater public good',
                text: 'The student’s civic responsibility to honesty, fairness, and institutional integrity supersedes a private request to conceal a theft. The student must report the breach to the school administration.'
              }
            ],
            proTip: 'A promise made to facilitate a crime or cover up an injustice is ethically void and invalid!'
          },
          reciteFlashcards: [
            { q: 'What is civic responsibility?', a: 'Obligations of citizens toward their society and state, including obeying laws and voting.' },
            { q: 'Why is illegal trafficking of ancient Ethiopian manuscripts harmful to the country?', a: 'It destroys our irreplaceable national history, cultural heritage, and identity for private greed.' },
            { q: 'What are the ABC rules of HIV/AIDS prevention?', a: 'Abstinence, Be faithful to one partner, and Correct condom use.' }
          ],
          amtQuiz: [
            {
              q: 'When an archaeological excavation uncovers ancient Axumite coins or parchment texts on private farmland, the civic and legal responsibility of the finder under Ethiopian law is to:',
              options: [
                'Sell the coins to foreign antique collectors on the black market',
                'Immediately report and surrender the artifacts to the Authority for Research and Conservation of Cultural Heritage (ARCCH)',
                'Melt down the gold and silver for personal jewelry',
                'Conceal the discovery indefinitely'
              ],
              correct: 1,
              strategy: 'Historical antiquities are national treasures belonging to the public domain.',
              derivation: 'Under Ethiopian law, all cultural and archaeological heritage belongs to the people and state of Ethiopia and must be preserved by ARCCH.',
              trap: 'Thinking private land ownership grants private ownership over ancient antiquities!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u7',
      number: 'Unit 7',
      title: 'Industriousness',
      bigIdea: 'Develop a culture of hard work, eradicate idleness, respect all legitimate forms of labor, and uphold professional ethics in public service.',
      subtopics: [
        {
          id: 'g7-cit-7.1',
          code: '7.1',
          title: 'Work Ethic, Idleness & Professional Standards',
          survey: {
            blueprint: 'Industriousness: working diligently, smartly, and persistently. Economic and psychological dangers of idleness. Dignity of labor: respecting manual labor (pottery, tanning, blacksmithing, farming). Professional ethics: punctuality, competence, honesty, and anti-corruption.',
            objectives: [
              'Explain the role of hard work (industriousness) in national poverty eradication.',
              'Deconstruct and reject backward societal taboos against artisanal and manual crafts.',
              'Identify core professional ethics: punctuality, integrity, confidentiality, and impartiality.'
            ],
            keyFormulas: 'National Prosperity = Diligent Labor + Vocational Skill + Integrity'
          },
          questions: [
            'Why have backward societal prejudices against manual artisans (blacksmiths, potters, tanners) historically held back technological progress in Ethiopia?',
            'What constitutes a breach of professional ethics for a healthcare doctor or public civil servant?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🔨</span> 1. THE DIGNITY OF LABOR & REJECTING TABOOS
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Industriousness:</strong> Dedication to focused, disciplined work that creates tangible economic and intellectual value.<br>
                  • <strong>Dignity of Labor:</strong> Every honest, legal job that contributes to society is noble and worthy of dignity. No job is "dirty" or "inferior" if it produces honest bread.<br>
                  • <strong>Overcoming Artisanal Prejudice:</strong> Historically, Ethiopian artisans (blacksmiths who made plows and swords; weavers who crafted traditional cloth; potters; tanners) faced unjust social discrimination and were stigmatized as outcast groups. This backward mindset suppressed domestic technological innovation. Modern Ethiopia celebrates artisans as the foundational engine of technical industry and manufacturing!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>⏱️</span> 2. PROFESSIONAL ETHICS IN THE WORKPLACE
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Punctuality:</strong> Arriving on time and respecting work hours. Wasting official work hours is a form of corruption that robs the public.</p>
                  <p>• <strong>Competence:</strong> Continually updating professional skills to deliver high-quality public service.</p>
                  <p>• <strong>Integrity & Impartiality:</strong> Treating all citizens equally without demanding bribes, favors, or giving unfair preferential treatment to relatives (nepotism).</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Overcoming Idleness in Youth Communities',
            problem: 'A group of school graduates spend their days chewing khat and complaining about unemployment while agricultural land and vocational repair shops in their town remain abandoned. How can a culture of industriousness transform their livelihood?',
            steps: [
              {
                label: 'Step 1: Recognize idleness as a trap',
                text: 'Idleness leads to economic dependency, substance addiction, despair, and crime.'
              },
              {
                label: 'Step 2: Form vocational enterprise',
                text: 'By organizing a micro-enterprise cooperative (e.g. poultry farming, cobblestone paving, metal fabrication, carpentry), youth can pool resources and access government seed capital.'
              },
              {
                label: 'Step 3: Economic transformation',
                text: 'Productive labor generates self-reliance, income, and community respect, turning job-seekers into job-creators!'
              }
            ],
            proTip: 'Work is the only authentic engine that creates wealth; no country ever developed through idle complaining or wishful thinking!'
          },
          reciteFlashcards: [
            { q: 'What is industriousness?', a: 'The habit of working diligently, consistently, and purposefully.' },
            { q: 'Why is discrimination against manual artisans harmful to a nation?', a: 'It devalues essential vocational skills and suppresses technological and manufacturing innovation.' },
            { q: 'What is nepotism in professional ethics?', a: 'Unfairly giving jobs or favors to relatives rather than qualified applicants on merit.' }
          ],
          amtQuiz: [
            {
              q: 'The backward traditional attitude that looked down upon blacksmiths, potters, and tanners in historical Ethiopia is contrary to the democratic value of:',
              options: ['The Dignity of Labor and Equality', 'Free market competition', 'Judicial review', 'Direct democracy'],
              correct: 0,
              strategy: 'All lawful labor has dignity, and discrimination violates equality.',
              derivation: 'The Dignity of Labor asserts that all lawful work contributes value to society and that no human being should be marginalized because of their craft.',
              trap: 'Assuming manual labor is inherently inferior to white-collar office jobs!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u8',
      number: 'Unit 8',
      title: 'Self-Reliance',
      bigIdea: 'Cultivate self-reliance, overcome the dependency syndrome, develop genuine self-confidence, and recognize outstanding individual achievement.',
      subtopics: [
        {
          id: 'g7-cit-8.1',
          code: '8.1',
          title: 'Independence, Self-Confidence & Overcoming Dependency',
          survey: {
            blueprint: 'Self-reliance: relying on one’s own intellectual, material, and moral capabilities without perpetual dependency on external charity. Dangers of Dependency Syndrome. Self-confidence: realistic self-assessment without arrogance. Honoring heroes and achievers.',
            objectives: [
              'Define self-reliance at the personal, community, and national level.',
              'Explain how dependency syndrome weakens initiative, self-respect, and national sovereignty.',
              'Distinguish between genuine self-confidence and boastful arrogance.'
            ],
            keyFormulas: 'Self-Reliance = Initiative + Resourcefulness + Confidence in Own Ability'
          },
          questions: [
            'How does perpetual reliance on foreign food aid undermine a nation’s long-term agricultural self-reliance and dignity?',
            'What is the difference between genuine self-confidence and hollow arrogance?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🧗</span> 1. THE PRINCIPLE OF SELF-RELIANCE
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Self-Reliance:</strong> The capacity of individuals, communities, and nations to fulfill their needs, solve their problems, and shape their destiny using their own internal resources, labor, and knowledge.<br>
                  • <strong>Levels of Self-Reliance:</strong><br>
                  - <em>Individual:</em> Earning one's own livelihood, studying independently, taking responsibility for choices.<br>
                  - <em>National:</em> Food security, domestic manufacturing, and financing development projects (e.g. self-funding the GERD) through domestic bonds and taxes rather than perpetual foreign debt!
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🛑</span> 2. ERADICATING THE DEPENDENCY SYNDROME
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Dependency Syndrome:</strong> A psychological and economic condition where a person or nation becomes permanently dependent on external handouts, charity, or aid, losing all motivation to work, innovate, or produce.</p>
                  <p>• <strong>Self-Confidence vs Arrogance:</strong><br>
                  - <em>Self-Confidence:</em> A realistic faith in one's own talents, willingness to learn from mistakes, and respect for others.<br>
                  - <em>Arrogance:</em> An exaggerated, boastful ego that looks down on others and refuses to accept constructive advice.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Self-Funding the Grand Renaissance Dam (GERD)',
            problem: 'Explain why the Ethiopian government and public decided to finance the multi-billion dollar GERD through domestic bond sales and public contributions rather than foreign donor loans.',
            steps: [
              {
                label: 'Step 1: Geopolitical resistance to loans',
                text: 'International banks and foreign powers refused to finance dam construction on the Blue Nile due to downstream geopolitical pressures.'
              },
              {
                label: 'Step 2: Mobilizing national self-reliance',
                text: 'By rallying every Ethiopian citizen at home and in the diaspora to purchase GERD bonds and donate monthly salaries, Ethiopia proved national self-reliance and safeguarded water sovereignty.'
              }
            ],
            proTip: 'The GERD is the ultimate living monument of African national self-reliance!'
          },
          reciteFlashcards: [
            { q: 'What is dependency syndrome?', a: 'A psychological attitude of passively expecting external charity and handouts rather than working.' },
            { q: 'How did Ethiopia finance the construction of the Grand Ethiopian Renaissance Dam (GERD)?', a: 'Through national self-reliance, public bond purchases, and domestic taxes without foreign loans.' },
            { q: 'What distinguishes self-confidence from arrogance?', a: 'Self-confidence is a humble, realistic belief in one’s abilities; arrogance is boastful disrespect for others.' }
          ],
          amtQuiz: [
            {
              q: 'A community in a drought-prone district builds stone water-harvesting check dams and plants drought-resistant wheat varieties instead of passively waiting for external emergency food rations. This best illustrates:',
              options: ['Dependency syndrome', 'Self-reliance and community initiative', 'Chauvinism', 'Rule of Man'],
              correct: 1,
              strategy: 'Taking active community steps to solve problems with local labor exemplifies self-reliance.',
              derivation: 'Self-reliance means taking the initiative to solve problems through one’s own labor, skills, and resources.',
              trap: 'Assuming self-reliance means isolating oneself from the world!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u9',
      number: 'Unit 9',
      title: 'Saving',
      bigIdea: 'Understand the habit of saving, avoiding extravagance, budget planning, traditional saving institutions (Equb and Edir), and formal financial banking systems.',
      subtopics: [
        {
          id: 'g7-cit-9.1',
          code: '9.1',
          title: 'Financial Planning, Equb, Edir & Institutional Banking',
          survey: {
            blueprint: 'Saving: reserving a portion of current income for future investment, emergency, or long-term growth. Extravagance vs Thrift. Traditional saving institutions in Ethiopia: Equb (rotating credit) and Edir (social security insurance). Formal financial institutions: commercial banks, microfinance, credit unions.',
            objectives: [
              'Explain the economic importance of saving for individuals and national capital formation.',
              'Compare traditional Ethiopian institutions: Equb (rotating savings) vs Edir (mutual aid and funeral insurance).',
              'Construct a personal or household monthly balanced budget.'
            ],
            keyFormulas: 'Income = Consumption + Savings &nbsp;|&nbsp; Balanced Budget: Total Income ≥ Total Expenditures'
          },
          questions: [
            'How does the traditional Ethiopian Equb function as an ingenious indigenous microfinance rotating credit association?',
            'What is the difference between wasteful extravagance and prudent, productive expenditure?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-emerald-400 flex items-center gap-2">
                  <span>💰</span> 1. THE ECONOMIC IMPERATIVE OF SAVING
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Saving:</strong> Setting aside a portion of income earned today to meet unforeseen emergencies, finance future education, or invest in productive capital (machinery, cattle, businesses).<br>
                  • <strong>Formula of Prosperity:</strong> <strong>Income = Consumption (expenses) + Savings</strong>.<br>
                  • <strong>Extravagance (Wastage):</strong> Spending excessively on lavish feasts, costly luxury apparel, and showing off. In Ethiopia, lavish multi-day weddings and memorial banquets often plunge rural families into deep debt.<br>
                  • <strong>Thrift:</strong> Wise, disciplined spending that prioritizes necessities over temporary luxury.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🤝</span> 2. TRADITIONAL VS. FORMAL SAVINGS IN ETHIOPIA
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-amber-400">1. Equb (Rotating Credit Association):</strong><br>
                    • Members contribute a fixed amount of money weekly or monthly.<br>
                    • The pooled sum is awarded to one member by lottery or priority.<br>
                    • Provides instant interest-free capital to start businesses, buy plows, or build homes without bank collateral.
                  </div>
                  <div class="p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1">
                    <strong class="text-cyan-400">2. Edir (Mutual Insurance):</strong><br>
                    • Community association providing financial assistance, labor, and emotional support during bereavement and funerals.<br>
                    • Acts as an indigenous social security safety net.
                  </div>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Managing an Equb Payout for Capital Investment',
            problem: 'A trader in Hawassa joins a 10-person weekly Equb where each member pays 2,000 Birr per week. On week 4, she wins the pool. Calculate the lump sum payout and design a productive reinvestment strategy.',
            steps: [
              {
                label: 'Step 1: Calculate total pool amount',
                text: 'Total Pool = 10 members × 2,000 Birr = <strong>20,000 Birr</strong>.'
              },
              {
                label: 'Step 2: Productive vs Extravagant use',
                text: 'Extravagant use: Throwing a lavish party or buying luxury clothes (money gone instantly).<br>Productive investment: Buying wholesale bags of coffee and grain to sell at weekly market markup, generating recurrent profit while continuing to pay the remaining weekly contributions.'
              }
            ],
            proTip: 'Equb turns small, scattered weekly savings into a powerful lump sum for business investment!'
          },
          reciteFlashcards: [
            { q: 'What is an Equb in Ethiopian culture?', a: 'A traditional rotating savings and credit association where members pool money and take turns receiving the lump sum.' },
            { q: 'What is an Edir?', a: 'A traditional mutual insurance association that assists families during bereavement and funeral expenses.' },
            { q: 'What is the danger of extravagance?', a: 'It wastes current capital, forces families into debt, and leaves zero reserves for emergencies.' }
          ],
          amtQuiz: [
            {
              q: 'Which traditional Ethiopian institution acts as an informal rotating credit system where members make regular financial contributions and pool funds to award a lump sum to one winner at a time?',
              options: ['Edir', 'Equb', 'Shimgelina', 'Gadaa'],
              correct: 1,
              strategy: 'Equb is the rotating savings and credit system; Edir is the funeral/bereavement mutual aid society.',
              derivation: 'Equb is an indigenous financial mechanism that encourages disciplined regular saving and provides capital to members without commercial bank collateral.',
              trap: 'Confusing Equb (financial savings) with Edir (funeral mutual aid)!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u10',
      number: 'Unit 10',
      title: 'Active Community Participation',
      bigIdea: 'Understand civic engagement, the role of civil society organizations (CSOs), voluntary associations, community development, and grassroots participation.',
      subtopics: [
        {
          id: 'g7-cit-10.1',
          code: '10.1',
          title: 'Civic Engagement, NGOs & Community Action',
          survey: {
            blueprint: 'Civic engagement: active citizen participation in local community decision-making. Non-Governmental Organizations (NGOs) and Civil Society Organizations (CSOs). Voluntary associations (Red Cross, environmental youth clubs). Democratic local governance: Woreda and Kebele councils.',
            objectives: [
              'Explain the benefits of active community participation for local democracy.',
              'Describe the roles of CSOs and NGOs in healthcare, education, and human rights.',
              'Participate voluntarily in neighborhood environmental sanitation and literacy initiatives.'
            ],
            keyFormulas: 'Strong Democracy = Informed Citizens + Active Voluntary Participation + Public Accountability'
          },
          questions: [
            'Why does a democratic system weaken when citizens passively wait for government instead of actively participating in local affairs?',
            'What role do youth Red Cross clubs and environmental committees play in schools across Ethiopia?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-rose-400 flex items-center gap-2">
                  <span>🤝</span> 1. FORMS OF ACTIVE PARTICIPATION
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Democracy is not a spectator sport; it requires continuous active citizen involvement:<br>
                  • <strong>Political Participation:</strong> Voting in elections, attending Kebele and Woreda town halls, discussing community policies, running for local office.<br>
                  • <strong>Social & Voluntary Participation:</strong> Volunteering labor to construct rural feeder roads, cleaning local riverbanks, planting seedlings during the Green Legacy, supporting elderly neighbors, and tutoring children.<br>
                  • <strong>Economic Participation:</strong> Joining agricultural cooperatives, paying municipal taxes, and creating local micro-enterprises.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-cyan-400 flex items-center gap-2">
                  <span>🌐</span> 2. ROLES OF CIVIC SOCIETIES (CSOs & NGOs)
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Civil Society Organizations:</strong> Non-profit, non-governmental voluntary associations created by citizens to promote shared interests, human rights, and social welfare (e.g. Ethiopian Red Cross, professional associations, youth/women’s leagues).</p>
                  <p>• <strong>Key Contributions:</strong> Providing clean drinking water wells in remote villages, building schools and health posts, disaster emergency relief, advocating for disabled rights, and educating voters.</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Community Co-production of School Infrastructure',
            problem: 'A rural primary school lacks clean water and latrines. How can active community participation resolve this issue faster than waiting years for central government budget allocations?',
            steps: [
              {
                label: 'Step 1: Convene Kebele community meeting',
                text: 'Parents, teachers, and local elders meet at the school to identify priorities and organize an action committee.'
              },
              {
                label: 'Step 2: Pool local labor and materials',
                text: 'Community members donate local stone, sand, and voluntary labor, while local traders contribute cement bags.'
              },
              {
                label: 'Step 3: Partner with a water NGO',
                text: 'A clean water NGO provides piping and pump fittings. Within two months, clean water flows to the school, improving student attendance and health through self-reliant community action!'
              }
            ],
            proTip: 'When communities invest their own labor in a project, they take pride in it and maintain it for decades!'
          },
          reciteFlashcards: [
            { q: 'What is a Non-Governmental Organization (NGO)?', a: 'A non-profit, voluntary group organized on a local, national, or international level to address social needs.' },
            { q: 'Name two forms of community participation at the Kebele level.', a: 'Attending public consultation meetings and volunteering labor for community infrastructure.' },
            { q: 'Why is passive citizenship dangerous to democracy?', a: 'It allows corrupt officials to abuse power without scrutiny or accountability.' }
          ],
          amtQuiz: [
            {
              q: 'Citizens who actively volunteer their weekends to clear clogged drainage channels and plant indigenous trees in their neighborhood are demonstrating:',
              options: ['Rule of Man', 'Active civic participation', 'Chauvinism', 'Dependency syndrome'],
              correct: 1,
              strategy: 'Voluntary work for community betterment is active civic participation.',
              derivation: 'Active community participation involves donating time, labor, and skills for public welfare and environmental protection.',
              trap: 'Assuming public work is only the government’s responsibility!'
            }
          ]
        }
      ]
    },
    {
      id: 'g7-cit-u11',
      number: 'Unit 11',
      title: 'The Pursuit of Wisdom',
      bigIdea: 'Understand the power of scientific knowledge, information literacy, critical thinking, fighting superstition, and eliminating backward cultural dogmas.',
      subtopics: [
        {
          id: 'g7-cit-11.1',
          code: '11.1',
          title: 'Scientific Outlook, Critical Thinking & Eliminating Superstition',
          survey: {
            blueprint: 'Scientific knowledge vs superstition and myth. Critical thinking and evaluating sources of information (checking facts, avoiding fake news and propaganda). Combating harmful backward sayings and boastful myths that hinder economic and social development.',
            objectives: [
              'Explain the value of empirical scientific inquiry over unverified superstition.',
              'Evaluate sources of information critically in the digital and media age.',
              'Identify backward sayings and defeatist proverbs that discourage innovation and savings.'
            ],
            keyFormulas: 'Wisdom = Empirical Knowledge + Critical Thinking + Ethical Application'
          },
          questions: [
            'How does a scientific outlook protect communities from falling victim to fraudulent witchcraft and disease superstitions?',
            'How can students discern between factual, verified information and malicious fake news online?'
          ],
          coreNotes: `
            <div class="space-y-5 text-slate-200">
              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-indigo-400 flex items-center gap-2">
                  <span>🔬</span> 1. THE POWER OF SCIENTIFIC KNOWLEDGE
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  • <strong>Scientific Knowledge:</strong> Systematic knowledge based on empirical observation, experimentation, logical verification, and reproducible evidence.<br>
                  • <strong>Eradicating Superstition:</strong> For centuries, epidemics (like malaria, cholera, epilepsy) were falsely attributed to evil spirits, curses, or witchcraft, leading people to seek fake remedies while patients died. Science reveals that malaria is caused by the <em>Plasmodium</em> parasite transmitted by female Anopheles mosquitoes, treatable with modern medicine.<br>
                  • <strong>Technological Modernization:</strong> Scientific understanding powers agriculture (hybrid seeds, fertilizers), healthcare (vaccines, antibiotics), and engineering.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <h4 class="text-sm font-black text-amber-400 flex items-center gap-2">
                  <span>🧠</span> 2. CRITICAL THINKING & REJECTING BACKWARD SAYINGS
                </h4>
                <div class="space-y-2 text-xs sm:text-sm text-slate-300">
                  <p>• <strong>Critical Thinking:</strong> The ability to analyze facts objectively, question unproven claims, assess biases, and demand solid evidence before accepting assertions as truth.</p>
                  <p>• <strong>Overcoming Fatalistic Proverbs:</strong> Some backward traditional sayings encourage defeatism, such as <em>"Why work hard today when tomorrow is uncertain?"</em> or sayings that mock savings and hard work. Wisdom requires replacing fatalistic myths with proverbs that celebrate diligence, learning, and forward planning!</p>
                </div>
              </div>
            </div>
          `,
          example: {
            title: 'Worked Example: Fact-Checking Viral Social Media Rumors',
            problem: 'A viral Telegram message claims that drinking boiled eucalyptus leaf water instantly cures tuberculosis and that patients should immediately throw away their prescribed hospital antibiotic pills. How does a student with a scientific outlook evaluate this claim?',
            steps: [
              {
                label: 'Step 1: Scrutinize the source',
                text: 'Is this information published by verified medical authorities (Ministry of Health, WHO) or by an anonymous forward?'
              },
              {
                label: 'Step 2: Understand the pathology',
                text: 'Tuberculosis is a bacterial lung infection caused by <em>Mycobacterium tuberculosis</em> that requires a strict 6-month course of verified antibiotics (Rifampicin, Isoniazid).'
              },
              {
                label: 'Step 3: Reject the lethal falsehood',
                text: 'Stopping prescribed antibiotics will cause drug-resistant TB and death. The student warns their family and community against believing unverified dangerous health myths online.'
              }
            ],
            proTip: 'In the information age, critical thinking and media literacy are matters of life and death!'
          },
          reciteFlashcards: [
            { q: 'What is empirical scientific knowledge?', a: 'Knowledge based on verifiable observation, experimentation, and logical proof.' },
            { q: 'What is critical thinking?', a: 'The objective analysis and evaluation of information and claims before accepting them as truth.' },
            { q: 'Why is stopping hospital medicine to seek supernatural witchcraft dangerous?', a: 'It allows preventable bacterial and viral infections to advance to fatal stages while wasting time.' }
          ],
          amtQuiz: [
            {
              q: 'A community confronted by a seasonal outbreak of malaria decides to drain stagnant puddles around their homes, sleep under insecticide-treated bed nets, and seek clinic diagnosis rather than blaming curses. This reflects:',
              options: [
                'Superstitious fatalism',
                'A scientific and rational problem-solving outlook',
                'Dependency syndrome',
                'Chauvinism'
              ],
              correct: 1,
              strategy: 'Addressing the biological transmission of malaria reflects scientific inquiry.',
              derivation: 'Applying biological knowledge about mosquito breeding to prevent malaria embodies a modern, empirical scientific outlook.',
              trap: 'Assuming traditional myths are superior to medical science!'
            }
          ]
        }
      ]
    }
  ]
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g7_citizenship.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g7Citizenship, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote complete g7_citizenship.js with all 11 units from the 96-page Civics textbook!');
