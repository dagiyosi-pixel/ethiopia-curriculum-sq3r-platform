module.exports = {
  "id": "citizenship",
  "name": "Citizenship Education",
  "icon": "⚖️",
  "units": [
    {
      "id": "g7-cit-u1",
      "number": "Unit 1",
      "title": "Democratic System",
      "bigIdea": "Understand democratic principles, direct versus representative democracy, constitutional supremacy, citizen participation, and government separation of powers.",
      "subtopics": [
        {
          "id": "g7-cit-1.1",
          "code": "1.1",
          "title": "Principles of Democracy & Constitutional Supremacy",
          "survey": {
            "blueprint": "Core pillars: Rule of Law, popular sovereignty, majority rule with minority rights, transparency, accountability, and periodic free elections. Constitutional Supremacy (Article 9 of FDRE Constitution). Separation of Powers: Legislature (HPR), Executive (PM & Ministries), Judiciary (Courts).",
            "objectives": [
              "Define democracy and explain direct vs representative democracy.",
              "Explain what makes the Constitution the supreme law of the land.",
              "Distinguish the roles of the Legislature, Executive, and Judiciary."
            ],
            "keyFormulas": "Separation of Powers = Legislative (enacts laws) + Executive (enforces laws) + Judicial (interprets laws)"
          },
          "questions": [
            "Why does constitutional supremacy mean that no ordinary law or government proclamation can contradict the constitution?",
            "How do checks and balances prevent abuse of power or tyranny in a constitutional democracy?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>🏛️</span> 1. DEMOCRATIC PRINCIPLES & GOVERNANCE\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Democracy:</strong> Derived from Greek <em>demos</em> (people) and <em>kratos</em> (rule) = rule by the people.<br>\n                  • <strong>Direct Democracy:</strong> Citizens directly deliberate and vote on every law (practiced in Ancient Athens and modern Swiss cantons).<br>\n                  • <strong>Representative (Indirect) Democracy:</strong> Citizens elect representatives through periodic secret ballot elections to make decisions on their behalf (practiced in Ethiopia and modern republics).<br>\n                  • <strong>Core Pillars:</strong> Popular sovereignty, universal adult suffrage, majority rule with fundamental minority protection, institutional transparency, and regular competitive elections.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>📜</span> 2. CONSTITUTIONAL SUPREMACY & SEPARATION OF POWERS\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Constitutional Supremacy (Article 9 of FDRE Constitution):</strong> The Constitution is the supreme law of the land. Any law, customary practice, or decision of an organ of state or public official that contravenes this Constitution is <strong>null and void</strong> with zero legal effect.</p>\n                  <p>• <strong>Separation of Powers:</strong> Formulated by Montesquieu to prevent dictatorship by dividing authority among three co-equal branches:<br>\n                  - <em>Legislative:</em> House of Peoples’ Representatives (makes and enacts proclamations).<br>\n                  - <em>Executive:</em> Prime Minister and Council of Ministers (implements and administers policy).<br>\n                  - <em>Judiciary:</em> Independent court system (Federal Supreme Court, High Court, First Instance Court) that interprets laws and protects rights.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Application of Constitutional Supremacy",
            "problem": "A regional state council passes a regulation prohibiting women from owning rural agricultural land. Does this regulation have legal force in Ethiopia?",
            "steps": [
              {
                "label": "Step 1: Check constitutional provisions",
                "text": "Article 35(7) of the FDRE Constitution explicitly guarantees: \"Women have the right to acquire, administer, control, use and transfer property; in particular, they have equal rights with men in respect of use, transfer, administration and control of land.\""
              },
              {
                "label": "Step 2: Apply Article 9 Supremacy clause",
                "text": "Article 9 states that any proclamation, regulation, or customary practice that contradicts the Constitution has no legal effect."
              },
              {
                "label": "Step 3: Legal conclusion",
                "text": "The regional regulation is completely <strong>unconstitutional, null, and void</strong>. Courts and citizens are bound strictly to uphold constitutional supremacy!"
              }
            ],
            "proTip": "Constitutional supremacy is the ultimate shield protecting fundamental human rights against arbitrary government decrees!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the supreme law of the land in Ethiopia?",
              "a": "The Constitution of the Federal Democratic Republic of Ethiopia (FDRE)."
            },
            {
              "q": "Which organ of state is responsible for interpreting laws and adjudicating disputes?",
              "a": "The Judiciary (Courts)."
            },
            {
              "q": "What does \"null and void\" mean regarding laws that violate the Constitution?",
              "a": "They have zero legal validity and cannot be enforced."
            }
          ],
          "amtQuiz": [
            {
              "q": "How does a representative (indirect) democracy differ from a direct democracy as practiced in ancient Athens?",
              "options": [
                "In a representative democracy, citizens elect officials to debate and make laws on their behalf, whereas in a direct democracy citizens vote directly on every law",
                "In a direct democracy, only hereditary monarchs can make executive decisions",
                "Representative democracy does not have a constitution or courts",
                "Direct democracy requires computer voting algorithms"
              ],
              "correct": 0,
              "strategy": "Direct = citizens vote directly; Representative = elected representatives vote.",
              "derivation": "In large modern nations, direct voting by millions of citizens on daily legislation is impractical. Citizens elect parliamentary representatives (such as the House of Peoples’ Representatives in Ethiopia) to enact policy.",
              "trap": "Confusing representative democracy with authoritarian rule."
            },
            {
              "q": "Which of the following is an essential pillar of constitutional democracy in Ethiopia?",
              "options": [
                "Holding periodic, free, and fair multi-party elections",
                "Banning all private media organizations",
                "Allowing leaders to serve for life without term limits",
                "Abolishing the court system"
              ],
              "correct": 0,
              "strategy": "Periodic free elections are a cornerstone of democratic legitimacy.",
              "derivation": "Democratic constitutionalism requires regular elections allowing citizens to hold elected officials accountable and peacefully change leadership.",
              "trap": "Assuming lifetime appointments are democratic."
            },
            {
              "q": "What is the supreme law of the Federal Democratic Republic of Ethiopia (FDRE) to which all other laws, customs, and acts must conform?",
              "options": [
                "The Civil Procedure Code",
                "The FDRE Constitution (1995)",
                "The Regional Police Charter",
                "Municipal Building Regulations"
              ],
              "correct": 1,
              "strategy": "Article 9 of the FDRE Constitution establishes constitutional supremacy.",
              "derivation": "Article 9(1) declares: The Constitution is the supreme law of the land. Any law, customary practice or decision of an organ of state which contravenes it shall be of no effect.",
              "trap": "Selecting subordinate civil codes or regional guidelines."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u2",
      "number": "Unit 2",
      "title": "The Rule of Law",
      "bigIdea": "Understand the concept of the Rule of Law, equality before the law, limits on government power, due process, and the dangers of corruption and arbitrary rule.",
      "subtopics": [
        {
          "id": "g7-cit-2.1",
          "code": "2.1",
          "title": "Rule of Law vs Rule of Man & Due Process",
          "survey": {
            "blueprint": "Rule of Law: all individuals, institutions, and leaders are accountable to publicly promulgated laws. Contrast with \"Rule of Man\" (arbitrary tyranny). Key components: legal equality, presumption of innocence, fair trial, independent judiciary, prevention of abuse of authority and corruption.",
            "objectives": [
              "Differentiate between the Rule of Law and Rule of Man / arbitrary authority.",
              "Explain the fundamental principle of \"Presumption of Innocence\".",
              "Analyze how the Rule of Law protects citizens from official corruption and rights abuses."
            ],
            "keyFormulas": "Rule of Law = Equality Before Law + Independent Courts + Limitation of State Power"
          },
          "questions": [
            "What is the fundamental danger to ordinary citizens when a country operates under the \"Rule of Man\" instead of the Rule of Law?",
            "Why does the law insist that an accused person is \"presumed innocent until proven guilty by a court of law\"?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>⚖️</span> 1. THE ESSENCE OF THE RULE OF LAW\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Rule of Law:</strong> A foundational principle where laws apply equally to all people, including government officials, prime ministers, judges, and ordinary citizens. No individual is above the law.<br>\n                  • <strong>Rule of Man:</strong> When society is governed by the arbitrary whims, personal preferences, and decrees of a single ruler or ruling elite without legal restraint. Leads inevitably to tyranny, nepotism, and injustice.<br>\n                  • <strong>Core Pillars:</strong> Pre-established clear laws, public promulgation, equal enforcement, and independent adjudication by impartial courts.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🛡️</span> 2. DUE PROCESS & PRESUMPTION OF INNOCENCE\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Presumption of Innocence (Article 20 of FDRE Constitution):</strong> Every person accused of an offense has the absolute right to be presumed innocent until proven guilty according to law by an impartial court.</p>\n                  <p>• <strong>Due Process Rights:</strong><br>\n                  - Right to be informed promptly of charges in a language they understand.<br>\n                  - Right to full legal representation (counsel).<br>\n                  - Right to a public trial without unreasonable delay.<br>\n                  - Protection against arbitrary arrest, unlawful search, and self-incrimination.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Due Process in Criminal Procedure",
            "problem": "A police officer arrests a suspect on suspicion of burglary and detains him in a cell for 8 days without bringing him before a court or formally filing charges. Is this action lawful under the Ethiopian legal system?",
            "steps": [
              {
                "label": "Step 1: Check constitutional detention limits",
                "text": "Article 19(3) of the FDRE Constitution mandates that all arrested persons have the right to be brought before a court of law within <strong>48 hours</strong> of their arrest (excluding travel time)."
              },
              {
                "label": "Step 2: Legal violation identified",
                "text": "Detaining the suspect for 8 days without judicial review violates habeas corpus and procedural due process."
              },
              {
                "label": "Step 3: Remedy",
                "text": "The court will order the immediate release or review of the detention, and the police officer can be held legally accountable for unlawful detention under the Rule of Law."
              }
            ],
            "proTip": "The 48-hour rule prevents police forces from holding citizens indefinitely without judicial supervision!"
          },
          "reciteFlashcards": [
            {
              "q": "What is the maximum time an arrested person can be held before being brought before a court in Ethiopia?",
              "a": "48 hours (excluding reasonable travel time)."
            },
            {
              "q": "What does the Presumption of Innocence state?",
              "a": "Every accused person is considered innocent until proven guilty by a court of law."
            },
            {
              "q": "What is the opposite of the Rule of Law?",
              "a": "The Rule of Man (arbitrary, lawless governance)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What does the principle \"Equality Before the Law\" mean in a constitutional state?",
              "options": [
                "Wealthy citizens receive discounts on court fees",
                "Every person, regardless of social status, wealth, or political power, is subject to the same laws and entitled to equal legal protection",
                "Government officials cannot be prosecuted for any criminal acts",
                "Laws only apply to citizens who voluntarily sign a contract"
              ],
              "correct": 1,
              "strategy": "Equality before the law means no one is above the law.",
              "derivation": "The Rule of Law asserts that laws apply universally to governors and the governed alike. No citizen enjoys immunity from the law due to rank or wealth.",
              "trap": "Assuming political officials are exempt from criminal law."
            },
            {
              "q": "Why must the judicial branch of government (the courts) remain completely independent of the executive and legislative branches?",
              "options": [
                "To ensure that court rulings are free from political influence and based solely on the law and evidence",
                "So judges can pass whatever laws they want without parliamentary approval",
                "To allow the Prime Minister to select verdicts directly",
                "To keep courts open 24 hours a day"
              ],
              "correct": 0,
              "strategy": "Judicial independence ensures impartial justice.",
              "derivation": "Judicial independence protects judges from retaliation or pressure by government officials, guaranteeing fair and impartial trials for all citizens.",
              "trap": "Confusing judicial interpretation with lawmaking (which belongs to parliament)."
            },
            {
              "q": "What dangerous condition results when state officials exercise power according to personal whims and moods rather than established statutory laws?",
              "options": [
                "Constitutional Supremacy",
                "Arbitrary Rule (Autocracy)",
                "Procedural Justice",
                "Democratic Oversight"
              ],
              "correct": 1,
              "strategy": "Arbitrary rule occurs when laws are ignored in favor of personal whim.",
              "derivation": "Arbitrary rule leads to corruption, abuse of power, human rights violations, and the collapse of the rule of law.",
              "trap": "Confusing arbitrary rule with procedural justice."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u3",
      "number": "Unit 3",
      "title": "Equality",
      "bigIdea": "Understand human equality, gender equity, affirmative action, rights of children, and rights of nations, nationalities and peoples.",
      "subtopics": [
        {
          "id": "g7-cit-3.1",
          "code": "3.1",
          "title": "Gender Equity, Non-Discrimination & Affirmative Action",
          "survey": {
            "blueprint": "Equality before the law (Article 25). Gender equality: combating harmful traditional practices (child marriage, FGM). Affirmative action: corrective measures to bridge historical disparities. Rights of children and rights of persons with disabilities.",
            "objectives": [
              "Explain equality before the law without discrimination based on race, gender, religion, or language.",
              "Analyze the rationale for Affirmative Action in education and civil service.",
              "Identify harmful traditional practices (HTPs) that violate the constitutional rights of women and children."
            ],
            "keyFormulas": "Equality Before Law = Non-Discrimination + Equal Opportunity + Affirmative Redress"
          },
          "questions": [
            "Why does true equality sometimes require \"Affirmative Action\" rather than treating historically disadvantaged groups identically?",
            "What legal and societal measures are required in Ethiopia to eradicate harmful traditional practices like early childhood marriage?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>⚖️</span> 1. CONSTITUTIONAL EQUALITY & NON-DISCRIMINATION\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Article 25 (Right to Equality):</strong> All persons are equal before the law and are entitled without any discrimination to the equal protection of the law. The law guarantees effective protection without discrimination on grounds of race, nation, nationality, color, sex, language, religion, political opinion, or social origin.<br>\n                  • <strong>Gender Equity:</strong> Ensuring women have equal access to land ownership, education, equal pay for equal work, inheritance, and reproductive healthcare.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>📈</span> 2. AFFIRMATIVE ACTION AS CORRECTIVE JUSTICE\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Definition:</strong> Special positive remedial measures designed to eliminate the ongoing effects of historical discrimination, prejudice, and structural inequality against marginalized groups (such as women and historically underserved pastoralist communities).</p>\n                  <p>• <strong>Article 35(3):</strong> Mandates that <em>\"historical legacy of inequality and discrimination suffered by women in Ethiopia shall be redressed through affirmative action measures\"</em> in university entrance cutoffs, vocational hiring, and leadership appointments.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Rationale of University Affirmative Action",
            "problem": "Explain why the Ethiopian Ministry of Education sets slightly lower cutoff scores for female applicants and pastoralist students entering higher education universities.",
            "steps": [
              {
                "label": "Step 1: Recognize historical structural disparities",
                "text": "Due to unequal domestic labor burdens, harmful cultural traditions, and remote geographical infrastructure, female and pastoralist students face severe obstacles outside their academic control."
              },
              {
                "label": "Step 2: Corrective equal playing field",
                "text": "Affirmative action does not lower competence standards; it corrects systemic unfair hurdles to ensure all citizens have genuine equal access to university education and national development."
              }
            ],
            "proTip": "Affirmative action is temporary and targeted: once equality of opportunity and demographic parity are achieved, special measures can be phased out!"
          },
          "reciteFlashcards": [
            {
              "q": "Which article of the FDRE Constitution guarantees the right to equality before the law?",
              "a": "Article 25."
            },
            {
              "q": "What is affirmative action?",
              "a": "Special positive remedial measures to correct historical discrimination and inequality."
            },
            {
              "q": "What harmful traditional practice involves forcing young underage girls into marriage?",
              "a": "Child marriage (early marriage)."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the purpose of Affirmative Action in Ethiopian higher education and public sector employment?",
              "options": [
                "To grant permanent legal immunity to specific individuals",
                "To provide temporary remedial support to historically disadvantaged groups (such as women and developing regions) to achieve genuine equality",
                "To prevent certain groups from attending university",
                "To eliminate all entrance exams across the country"
              ],
              "correct": 1,
              "strategy": "Affirmative action corrects historical inequalities.",
              "derivation": "Under Article 35(3) of the FDRE Constitution, affirmative action addresses historical inequalities and marginalization suffered by women and underserved communities.",
              "trap": "Viewing affirmative action as reverse discrimination rather than remedial equity."
            },
            {
              "q": "Under the Ethiopian Constitution, how are the languages and cultural heritages of all Ethiopian nations, nationalities, and peoples treated?",
              "options": [
                "Only one historical dialect is allowed to be spoken in schools",
                "All Ethiopian languages and cultural expressions enjoy equal state recognition and legal protection",
                "Lowland cultural traditions are barred from national broadcasting",
                "Languages must be replaced by international languages"
              ],
              "correct": 1,
              "strategy": "Article 5 grants equal state recognition to all Ethiopian languages.",
              "derivation": "Article 5(1) establishes: All Ethiopian languages shall enjoy equal state recognition. This reflects the foundational principle of cultural and linguistic equality.",
              "trap": "Assuming only the federal working language is legally recognized."
            },
            {
              "q": "Gender equality guarantees that men and women enjoy equal rights in:",
              "options": [
                "Only ceremonial social festivals",
                "Marriage, property ownership, education, employment, and political participation",
                "Only the right to inherit household clothing",
                "Physical sports competitions only"
              ],
              "correct": 1,
              "strategy": "Article 35 guarantees women equal rights across all sectors.",
              "derivation": "The Ethiopian Constitution grants women equal rights with men in all economic, social, political, and family affairs, including property title ownership and land administration.",
              "trap": "Restricting equality to narrow domestic matters."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u4",
      "number": "Unit 4",
      "title": "Justice",
      "bigIdea": "Understand the three dimensions of justice (distributive, corrective, procedural), fair trial rights, and the role of an independent judicial system.",
      "subtopics": [
        {
          "id": "g7-cit-4.1",
          "code": "4.1",
          "title": "Distributive, Corrective & Procedural Justice",
          "survey": {
            "blueprint": "Three forms of justice: (1) Distributive justice: fair allocation of national benefits and burdens, (2) Corrective justice: restoring balance after a wrong or injury through compensation and restitution, (3) Procedural justice: fair, transparent, and impartial decision-making rules.",
            "objectives": [
              "Differentiate between distributive, corrective, and procedural justice.",
              "Explain the role of courts and customary dispute mechanisms (Shimgelina).",
              "Analyze how taxation and public infrastructure represent distributive justice."
            ],
            "keyFormulas": "Justice = Fairness in Allocation (Distributive) + Fairness in Remedy (Corrective) + Fairness in Process (Procedural)"
          },
          "questions": [
            "How does progressive taxation and public school funding embody distributive justice in Ethiopia?",
            "What is the difference between formal courtroom litigation and traditional Ethiopian elders’ mediation (Shimgelina)?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>⚖️</span> 1. THE THREE FORMS OF JUSTICE\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>1. Distributive Justice:</strong> Concerns the fair distribution of society’s benefits (education, clean water, healthcare, land, roads) and burdens (taxes, civic duties, military service). Ensures that resources are not monopolized by a privileged elite.</p>\n                  <p>• <strong>2. Corrective Justice:</strong> Concerns correcting wrongs and restoring equilibrium when someone’s rights, property, or bodily integrity have been violated. The wrongdoer must make restitution or pay compensation to the victim, accompanied by proportionate legal punishment.</p>\n                  <p>• <strong>3. Procedural Justice:</strong> Concerns the fairness of the procedures used to make decisions. Decisions must be transparent, evidence-based, free of bias or conflict of interest, and allow all parties an equal opportunity to be heard (the legal principle <em>\"Audi alteram partem\"</em> — hear the other side!).</p>\n                </div>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🤝</span> 2. TRADITIONAL MEDIATION: SHIMGELINA\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Alongside formal courts, Ethiopia possesses deeply rooted indigenous justice mechanisms:<br>\n                  • <strong>Shimgelina (Council of Elders):</strong> Respected community elders mediate interpersonal, clan, and property conflicts.<br>\n                  • <em>Advantage:</em> Focuses on <strong>restorative reconciliation</strong>, social harmony, and mutual forgiveness rather than purely punitive win-lose outcomes.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Classifying Real-World Justice Scenarios",
            "problem": "Classify each scenario as Distributive, Corrective, or Procedural Justice: (a) A court orders a reckless driver to pay for hospital treatment of an injured pedestrian; (b) The government builds rural health clinics in remote Afar woredas using national budget funds; (c) A referee allows both soccer teams equal time and reviews video replay impartially.",
            "steps": [
              {
                "label": "Scenario A: Restitution for injury",
                "text": "Paying hospital damages restores the victim to their prior state: <strong>Corrective Justice</strong>."
              },
              {
                "label": "Scenario B: Allocation of national public services",
                "text": "Distributing healthcare facilities fairly across regions: <strong>Distributive Justice</strong>."
              },
              {
                "label": "Scenario C: Impartial fair rules of process",
                "text": "Following fair, unbiased rules and hearing both sides: <strong>Procedural Justice</strong>."
              }
            ],
            "proTip": "Remember: Benefits/Burdens = Distributive; Fixing a Wrong = Corrective; Fair Process = Procedural!"
          },
          "reciteFlashcards": [
            {
              "q": "What form of justice deals with the fair allocation of resources and taxes in a country?",
              "a": "Distributive Justice."
            },
            {
              "q": "What form of justice requires a wrongdoer to compensate a victim for damages caused?",
              "a": "Corrective Justice."
            },
            {
              "q": "What is the traditional Ethiopian elders’ dispute resolution institution called?",
              "a": "Shimgelina."
            }
          ],
          "amtQuiz": [
            {
              "q": "Which dimension of justice focuses on the fair, equitable, and transparent distribution of a society’s wealth, public services, and infrastructure benefits?",
              "options": [
                "Corrective Justice",
                "Distributive Justice",
                "Procedural Justice",
                "Retributive Justice"
              ],
              "correct": 1,
              "strategy": "Distributive = fair distribution of social goods and services.",
              "derivation": "Distributive justice ensures that public benefits (schools, hospitals, clean water, roads, electricity) and burdens (taxes) are allocated equitably across all regions and social groups.",
              "trap": "Confusing distributive justice with corrective justice (which remedies civil wrongs or crimes)."
            },
            {
              "q": "What is the primary objective of \"Corrective Justice\" in the legal system?",
              "options": [
                "Building new irrigation canals across farmland",
                "Restoring balance and providing remedy or compensation to a victim who has suffered harm or property loss",
                "Drafting new commercial trade treaties with neighboring nations",
                "Administering national census questionnaires"
              ],
              "correct": 1,
              "strategy": "Corrective = rectifying wrongs and restoring fairness.",
              "derivation": "Corrective justice seeks to undo a wrong by holding the wrongdoer liable to repair damage or pay restitution to the victim.",
              "trap": "Confusing corrective justice with national infrastructure."
            },
            {
              "q": "Procedural justice requires that judicial and administrative decisions must be:",
              "options": [
                "Decided in total secrecy without informing the defendant",
                "Conducted through transparent, fair, unbiased, and lawful due process",
                "Determined strictly by the highest bidder in auction",
                "Delayed indefinitely for many years"
              ],
              "correct": 1,
              "strategy": "Procedural justice is about fair and unbiased process (due process).",
              "derivation": "Procedural justice ensures fair hearings, the right to legal counsel, prompt trials, and an impartial judge.",
              "trap": "Selecting secret trials or arbitrary delays."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u5",
      "number": "Unit 5",
      "title": "Patriotism",
      "bigIdea": "Understand true patriotism: love of homeland, defense of sovereignty, honoring national symbols (flag, anthem, coat of arms), protecting cultural heritage, and combating chauvinism.",
      "subtopics": [
        {
          "id": "g7-cit-5.1",
          "code": "5.1",
          "title": "Patriotism, National Symbols & Heritage Preservation",
          "survey": {
            "blueprint": "True patriotism vs Chauvinism / Blind loyalty. National symbols of Ethiopia: The National Flag (Green, Yellow, Red tricolor with circular emblem), National Anthem, Coat of Arms. Defending national sovereignty and unity in diversity. Protecting historical, cultural, and natural heritage.",
            "objectives": [
              "Differentiate between healthy patriotism (constructive love for country and people) and destructive chauvinism.",
              "Explain the symbolism of the Ethiopian National Flag and Anthem.",
              "Describe citizen responsibilities in safeguarding historical monuments (Aksum, Lalibela, Gondar)."
            ],
            "keyFormulas": "National Flag: Green (fertility & labor) + Yellow (hope & religious freedom) + Red (sacrifice & bravery)"
          },
          "questions": [
            "How does true civic patriotism differ from blind nationalism or aggressive chauvinism?",
            "What do the three horizontal colors (Green, Yellow, Red) and the central star emblem on the Ethiopian national flag represent?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>🇪🇹</span> 1. TRUE PATRIOTISM VS. CHAUVINISM\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>True Patriotism:</strong> A genuine, devoted love for one's country expressed through constructive citizenship: obeying laws, paying taxes, promoting national development, protecting public resources, standing against injustice, and honoring fellow citizens.<br>\n                  • <strong>Chauvinism (Blind Nationalism):</strong> An uncritical, aggressive belief in the superiority of one's own group, nation, or gender combined with hostility toward others. Chauvinism breeds war, bigotry, and ethnic conflict. True patriots critique national shortcomings to help their country improve!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>🚩</span> 2. ETHIOPIA’S NATIONAL SYMBOLS\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>The National Flag (Article 3 of FDRE Constitution):</strong> Three equal horizontal stripes:<br>\n                  - <strong>Green (Top):</strong> Represents fertility of the soil, labor, agricultural abundance, and development.<br>\n                  - <strong>Yellow (Middle):</strong> Represents hope, justice, peace, and religious equality.<br>\n                  - <strong>Red (Bottom):</strong> Represents sacrifice, heroism, and bravery in defense of national sovereignty and freedom.<br>\n                  - <strong>Central Blue Emblem with Yellow Star:</strong> Radiating rays signify the bright future and equality of all Nations, Nationalities, and Peoples of Ethiopia united in brotherhood.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Acts of Daily Civic Patriotism",
            "problem": "Which of the following actions best demonstrates true patriotism: (A) Boasting that one’s nation has never made historical mistakes, or (B) Cleaning municipal drainage ditches and planting trees in a neighborhood volunteer project?",
            "steps": [
              {
                "label": "Step 1: Evaluate Action A",
                "text": "Blind boasting ignores real problems and reflects chauvinistic complacency rather than constructive action."
              },
              {
                "label": "Step 2: Evaluate Action B",
                "text": "Volunteering to protect the environment and municipal infrastructure directly improves the lives of fellow citizens, demonstrating genuine civic patriotism through service."
              }
            ],
            "proTip": "Patriotism is not just waving a flag during national holidays; it is demonstrated daily through integrity, paying taxes honestly, and public service!"
          },
          "reciteFlashcards": [
            {
              "q": "What does the green color on the Ethiopian national flag symbolize?",
              "a": "Fertility, agriculture, and national development."
            },
            {
              "q": "What is the blue circular emblem with a golden star at the center of the flag?",
              "a": "The equality, unity, and bright future of all Nations, Nationalities, and Peoples of Ethiopia."
            },
            {
              "q": "What is chauvinism?",
              "a": "Blind, aggressive nationalism that treats other nations or groups with contempt."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the core distinction between genuine constitutional patriotism and destructive chauvinism?",
              "options": [
                "Constitutional patriotism is love of one’s country combined with respect for human rights, diversity, and other nations, whereas chauvinism is aggressive superiority and hatred of others",
                "Patriotism means refusing to pay taxes to the government",
                "Chauvinism means preserving historical museums and national parks",
                "There is no difference between patriotism and chauvinism"
              ],
              "correct": 0,
              "strategy": "Patriotism respects diversity and human rights; chauvinism is narrow and hateful.",
              "derivation": "True patriotism is rooted in defending common constitutional values, national sovereignty, and social welfare while celebrating ethnic diversity and cooperating internationally.",
              "trap": "Equating narrow aggressive chauvinism with true patriotism."
            },
            {
              "q": "Which of the following is an active, practical expression of patriotism by a Grade 7 student in Ethiopia?",
              "options": [
                "Spreading unverified rumors that cause ethnic hatred on social media",
                "Studying diligently, protecting public school property, and participating in environmental tree planting",
                "Refusing to sing the national anthem at morning school assemblies",
                "Defacing historical monuments with graffiti"
              ],
              "correct": 1,
              "strategy": "Civic diligence, caring for public property, and environmental stewardship are patriotic duties.",
              "derivation": "Patriotism is demonstrated in daily life by pursuing educational excellence, respecting the national flag, protecting public infrastructure, and serving the community.",
              "trap": "Assuming patriotism is only military combat."
            },
            {
              "q": "In the national flag of Ethiopia, what do the three horizontal colors (Green, Yellow, Red) and the central emblem traditionally symbolize?",
              "options": [
                "Green represents agriculture, fertility, and hope; Yellow represents peace, justice, and natural wealth; Red represents sacrifice, valor, and freedom",
                "Green represents ice; Yellow represents gold mining only; Red represents fire",
                "The colors have no symbolic meaning and were chosen randomly",
                "They represent foreign colonial trading companies"
              ],
              "correct": 0,
              "strategy": "Green = labor/fertility; Yellow = hope/justice/peace; Red = sacrifice for freedom.",
              "derivation": "The Ethiopian national tricolor has deep historical symbolism: Green for the fertile land and harvest; Yellow for hope, peace, and religious freedom; Red for the blood shed by ancestors defending national sovereignty. The central star emblem symbolizes the unity and equality of all nations, nationalities, and peoples.",
              "trap": "Confusing traditional Ethiopian flag symbolism with foreign symbols."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u6",
      "number": "Unit 6",
      "title": "Responsibility",
      "bigIdea": "Understand personal, social, and civic responsibilities, fulfillment of promises, preservation of historical heritage, and combating the spread of HIV/AIDS.",
      "subtopics": [
        {
          "id": "g7-cit-6.1",
          "code": "6.1",
          "title": "Civic Responsibilities, Heritage & Health Protection",
          "survey": {
            "blueprint": "Responsibilities: personal, social, and civic duties. Keeping promises and contractual integrity. Protection of natural resources and cultural heritage (preventing looting of antiquities). Preventing HIV/AIDS through abstinence, fidelity, and elimination of stigma.",
            "objectives": [
              "Distinguish between personal, moral, and civic responsibilities.",
              "Explain the consequences of failing to fulfill promises in social and economic life.",
              "Describe methods of conserving Ethiopia’s historical heritage and stopping illegal artifact trafficking."
            ],
            "keyFormulas": "Responsibility = Accountability for Actions + Fulfilling Commitments + Public Good Stewardship"
          },
          "questions": [
            "Why is keeping a promise considered both an ethical moral duty and an economic cornerstone of contracts?",
            "What civic responsibility do local communities have in protecting ancient archaeological sites from illegal excavation and foreign smuggling?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>📋</span> 1. PERSONAL, MORAL & CIVIC RESPONSIBILITIES\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  A responsibility is a duty or obligation to act or perform certain tasks, or to accept accountability for one’s actions:<br>\n                  • <strong>Personal Responsibilities:</strong> Taking care of one’s health, education, hygiene, and ethical character.<br>\n                  • <strong>Social / Moral Responsibilities:</strong> Supporting family members, keeping promises, respecting elders, and helping neighbors in times of grief (e.g. Edir).<br>\n                  • <strong>Civic Responsibilities:</strong> Obeying constitutional laws, paying taxes, voting in elections, participating in community development, and reporting crimes.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🏛️</span> 2. SAFEGUARDING ETHIOPIA’S HISTORICAL HERITAGE\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Ethiopia possesses centuries of ancient manuscripts, parchment Bibles and Qurans, rock-hewn churches, and archaeological ruins. Citizens have a civic duty to:<br>\n                  • Refuse to sell ancient family manuscripts or church/mosque treasures to tourists or antique smugglers.<br>\n                  • Prevent vandalism, graffiti, and illegal looting of archaeological sites.<br>\n                  • Notify authorities when ancient artifacts or fossils are uncovered during construction or plowing.\n                </p>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Resolving a Conflict of Responsibilities",
            "problem": "A student discovers that a fellow classmate has stolen exam papers from the staff room. The classmate asks the student to promise to keep it a secret. What is the ethically responsible course of action?",
            "steps": [
              {
                "label": "Step 1: Weigh moral duties",
                "text": "A promise to keep a secret must not be used to shield an illegal or dishonest crime that harms academic integrity and the rights of all other students."
              },
              {
                "label": "Step 2: Act in favor of the greater public good",
                "text": "The student’s civic responsibility to honesty, fairness, and institutional integrity supersedes a private request to conceal a theft. The student must report the breach to the school administration."
              }
            ],
            "proTip": "A promise made to facilitate a crime or cover up an injustice is ethically void and invalid!"
          },
          "reciteFlashcards": [
            {
              "q": "What is civic responsibility?",
              "a": "Obligations of citizens toward their society and state, including obeying laws and voting."
            },
            {
              "q": "Why is illegal trafficking of ancient Ethiopian manuscripts harmful to the country?",
              "a": "It destroys our irreplaceable national history, cultural heritage, and identity for private greed."
            },
            {
              "q": "What are the ABC rules of HIV/AIDS prevention?",
              "a": "Abstinence, Be faithful to one partner, and Correct condom use."
            }
          ],
          "amtQuiz": [
            {
              "q": "Why is the timely and honest payment of taxes considered one of the highest civic responsibilities of every citizen?",
              "options": [
                "Taxes fund essential public services: public schools, referral hospitals, roads, electrical grids, and national security",
                "Taxes are used solely for the private entertainment of civil servants",
                "Tax payment is completely optional and has no impact on society",
                "Taxes are paid to foreign multinational corporations"
              ],
              "correct": 0,
              "strategy": "Taxes finance public goods and infrastructure that benefit all citizens.",
              "derivation": "Without tax revenues, the state cannot maintain hospitals, pave highways, build dams (GERD), fund universities, or pay teachers and defense forces.",
              "trap": "Believing tax evasion does not harm national development."
            },
            {
              "q": "What is a citizen’s civic responsibility when they witness an act of public property vandalism or corruption in their neighborhood?",
              "options": [
                "Join in the vandalism to avoid being noticed",
                "Report the unlawful act promptly to appropriate community leaders or law enforcement authorities",
                "Ignore it because public property belongs to nobody",
                "Post false claims on the internet to mislead the police"
              ],
              "correct": 1,
              "strategy": "Civic responsibility entails protecting public property and reporting crime.",
              "derivation": "Public property is funded by taxpayers for the common good. Citizens have a constitutional and moral duty to protect public infrastructure from vandalism and waste.",
              "trap": "Thinking \"public property\" means nobody owns or cares for it."
            },
            {
              "q": "Which of the following is a direct individual responsibility for environmental preservation?",
              "options": [
                "Dumping plastic bags into urban drainage ditches",
                "Practicing water conservation, planting trees, and disposing of household waste properly",
                "Cutting down highland indigenous forests for quick charcoal profit",
                "Burning toxic rubber tires near residential homes"
              ],
              "correct": 1,
              "strategy": "Environmental responsibility involves conservation, proper disposal, and tree planting.",
              "derivation": "Individual environmental responsibility directly prevents flooding, topsoil loss, and air/water pollution.",
              "trap": "Assuming environmental protection is only the job of government agencies."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u7",
      "number": "Unit 7",
      "title": "Industriousness",
      "bigIdea": "Develop a culture of hard work, eradicate idleness, respect all legitimate forms of labor, and uphold professional ethics in public service.",
      "subtopics": [
        {
          "id": "g7-cit-7.1",
          "code": "7.1",
          "title": "Work Ethic, Idleness & Professional Standards",
          "survey": {
            "blueprint": "Industriousness: working diligently, smartly, and persistently. Economic and psychological dangers of idleness. Dignity of labor: respecting manual labor (pottery, tanning, blacksmithing, farming). Professional ethics: punctuality, competence, honesty, and anti-corruption.",
            "objectives": [
              "Explain the role of hard work (industriousness) in national poverty eradication.",
              "Deconstruct and reject backward societal taboos against artisanal and manual crafts.",
              "Identify core professional ethics: punctuality, integrity, confidentiality, and impartiality."
            ],
            "keyFormulas": "National Prosperity = Diligent Labor + Vocational Skill + Integrity"
          },
          "questions": [
            "Why have backward societal prejudices against manual artisans (blacksmiths, potters, tanners) historically held back technological progress in Ethiopia?",
            "What constitutes a breach of professional ethics for a healthcare doctor or public civil servant?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>🔨</span> 1. THE DIGNITY OF LABOR & REJECTING TABOOS\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Industriousness:</strong> Dedication to focused, disciplined work that creates tangible economic and intellectual value.<br>\n                  • <strong>Dignity of Labor:</strong> Every honest, legal job that contributes to society is noble and worthy of dignity. No job is \"dirty\" or \"inferior\" if it produces honest bread.<br>\n                  • <strong>Overcoming Artisanal Prejudice:</strong> Historically, Ethiopian artisans (blacksmiths who made plows and swords; weavers who crafted traditional cloth; potters; tanners) faced unjust social discrimination and were stigmatized as outcast groups. This backward mindset suppressed domestic technological innovation. Modern Ethiopia celebrates artisans as the foundational engine of technical industry and manufacturing!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>⏱️</span> 2. PROFESSIONAL ETHICS IN THE WORKPLACE\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Punctuality:</strong> Arriving on time and respecting work hours. Wasting official work hours is a form of corruption that robs the public.</p>\n                  <p>• <strong>Competence:</strong> Continually updating professional skills to deliver high-quality public service.</p>\n                  <p>• <strong>Integrity & Impartiality:</strong> Treating all citizens equally without demanding bribes, favors, or giving unfair preferential treatment to relatives (nepotism).</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Overcoming Idleness in Youth Communities",
            "problem": "A group of school graduates spend their days chewing khat and complaining about unemployment while agricultural land and vocational repair shops in their town remain abandoned. How can a culture of industriousness transform their livelihood?",
            "steps": [
              {
                "label": "Step 1: Recognize idleness as a trap",
                "text": "Idleness leads to economic dependency, substance addiction, despair, and crime."
              },
              {
                "label": "Step 2: Form vocational enterprise",
                "text": "By organizing a micro-enterprise cooperative (e.g. poultry farming, cobblestone paving, metal fabrication, carpentry), youth can pool resources and access government seed capital."
              },
              {
                "label": "Step 3: Economic transformation",
                "text": "Productive labor generates self-reliance, income, and community respect, turning job-seekers into job-creators!"
              }
            ],
            "proTip": "Work is the only authentic engine that creates wealth; no country ever developed through idle complaining or wishful thinking!"
          },
          "reciteFlashcards": [
            {
              "q": "What is industriousness?",
              "a": "The habit of working diligently, consistently, and purposefully."
            },
            {
              "q": "Why is discrimination against manual artisans harmful to a nation?",
              "a": "It devalues essential vocational skills and suppresses technological and manufacturing innovation."
            },
            {
              "q": "What is nepotism in professional ethics?",
              "a": "Unfairly giving jobs or favors to relatives rather than qualified applicants on merit."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is meant by the ethical principle \"Dignity of Labor\"?",
              "options": [
                "Only high-paying office jobs in air-conditioned buildings are honorable",
                "All legitimate, productive work—whether manual farming, street sweeping, carpentry, or engineering—deserves equal respect and honor",
                "Laborers should work without any wages or rest",
                "Physical labor is disgraceful and should be avoided by educated people"
              ],
              "correct": 1,
              "strategy": "Dignity of labor honors all honest, lawful work.",
              "derivation": "The textbook emphasizes that every lawful profession contributes to national development. Belittling manual labor or farming harms national productivity.",
              "trap": "Looking down upon manual agricultural or sanitation work."
            },
            {
              "q": "How does effective time management enhance a student’s industriousness and academic success?",
              "options": [
                "By prioritizing important study tasks, eliminating procrastination, and allocating balanced time for rest and revision",
                "By studying 24 hours continuously without sleeping",
                "By leaving all homework assignments until the final minute before class",
                "By avoiding textbooks until the day of national exams"
              ],
              "correct": 0,
              "strategy": "Time management avoids procrastination and structures balanced study habits.",
              "derivation": "Industriousness is not just working hard, but working smart through organized scheduling, punctuality, and self-discipline.",
              "trap": "Confusing industriousness with unhealthy sleep deprivation."
            },
            {
              "q": "What is the primary socio-economic consequence of widespread laziness, dependency syndrome, and avoidance of productive work in a society?",
              "options": [
                "Rapid technological innovation and high national savings",
                "Persistent poverty, low agricultural yields, economic backwardness, and national vulnerability",
                "Immediate eradication of all foreign debt",
                "Doubling of national industrial manufacturing"
              ],
              "correct": 1,
              "strategy": "Laziness and dependency perpetuate poverty and underdevelopment.",
              "derivation": "National wealth is generated through collective human labor. Dependency on handouts cripples self-reliance and traps communities in poverty.",
              "trap": "Assuming a nation can develop without hard work."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u8",
      "number": "Unit 8",
      "title": "Self-Reliance",
      "bigIdea": "Cultivate self-reliance, overcome the dependency syndrome, develop genuine self-confidence, and recognize outstanding individual achievement.",
      "subtopics": [
        {
          "id": "g7-cit-8.1",
          "code": "8.1",
          "title": "Independence, Self-Confidence & Overcoming Dependency",
          "survey": {
            "blueprint": "Self-reliance: relying on one’s own intellectual, material, and moral capabilities without perpetual dependency on external charity. Dangers of Dependency Syndrome. Self-confidence: realistic self-assessment without arrogance. Honoring heroes and achievers.",
            "objectives": [
              "Define self-reliance at the personal, community, and national level.",
              "Explain how dependency syndrome weakens initiative, self-respect, and national sovereignty.",
              "Distinguish between genuine self-confidence and boastful arrogance."
            ],
            "keyFormulas": "Self-Reliance = Initiative + Resourcefulness + Confidence in Own Ability"
          },
          "questions": [
            "How does perpetual reliance on foreign food aid undermine a nation’s long-term agricultural self-reliance and dignity?",
            "What is the difference between genuine self-confidence and hollow arrogance?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>🧗</span> 1. THE PRINCIPLE OF SELF-RELIANCE\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Self-Reliance:</strong> The capacity of individuals, communities, and nations to fulfill their needs, solve their problems, and shape their destiny using their own internal resources, labor, and knowledge.<br>\n                  • <strong>Levels of Self-Reliance:</strong><br>\n                  - <em>Individual:</em> Earning one's own livelihood, studying independently, taking responsibility for choices.<br>\n                  - <em>National:</em> Food security, domestic manufacturing, and financing development projects (e.g. self-funding the GERD) through domestic bonds and taxes rather than perpetual foreign debt!\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🛑</span> 2. ERADICATING THE DEPENDENCY SYNDROME\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Dependency Syndrome:</strong> A psychological and economic condition where a person or nation becomes permanently dependent on external handouts, charity, or aid, losing all motivation to work, innovate, or produce.</p>\n                  <p>• <strong>Self-Confidence vs Arrogance:</strong><br>\n                  - <em>Self-Confidence:</em> A realistic faith in one's own talents, willingness to learn from mistakes, and respect for others.<br>\n                  - <em>Arrogance:</em> An exaggerated, boastful ego that looks down on others and refuses to accept constructive advice.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Self-Funding the Grand Renaissance Dam (GERD)",
            "problem": "Explain why the Ethiopian government and public decided to finance the multi-billion dollar GERD through domestic bond sales and public contributions rather than foreign donor loans.",
            "steps": [
              {
                "label": "Step 1: Geopolitical resistance to loans",
                "text": "International banks and foreign powers refused to finance dam construction on the Blue Nile due to downstream geopolitical pressures."
              },
              {
                "label": "Step 2: Mobilizing national self-reliance",
                "text": "By rallying every Ethiopian citizen at home and in the diaspora to purchase GERD bonds and donate monthly salaries, Ethiopia proved national self-reliance and safeguarded water sovereignty."
              }
            ],
            "proTip": "The GERD is the ultimate living monument of African national self-reliance!"
          },
          "reciteFlashcards": [
            {
              "q": "What is dependency syndrome?",
              "a": "A psychological attitude of passively expecting external charity and handouts rather than working."
            },
            {
              "q": "How did Ethiopia finance the construction of the Grand Ethiopian Renaissance Dam (GERD)?",
              "a": "Through national self-reliance, public bond purchases, and domestic taxes without foreign loans."
            },
            {
              "q": "What distinguishes self-confidence from arrogance?",
              "a": "Self-confidence is a humble, realistic belief in one’s abilities; arrogance is boastful disrespect for others."
            }
          ],
          "amtQuiz": [
            {
              "q": "Why is the construction of the Grand Ethiopian Renaissance Dam (GERD) considered a monument of national self-reliance in modern Ethiopian history?",
              "options": [
                "It was financed entirely by the contributions and bonds of Ethiopian citizens at home and abroad rather than conditional foreign loans",
                "It was built in secret without notifying the public",
                "It produces zero electricity and functions only as a museum",
                "It was planned and designed exclusively by foreign colonial powers"
              ],
              "correct": 0,
              "strategy": "GERD is self-financed by the Ethiopian people.",
              "derivation": "When foreign international financiers refused loans, the people and government of Ethiopia mobilized domestic bonds, monthly salary contributions, and diaspora support to self-finance this mega-hydroelectric dam.",
              "trap": "Assuming GERD was funded by foreign aid agencies."
            },
            {
              "q": "What is the psychological relationship between self-confidence and personal self-reliance?",
              "options": [
                "Self-reliance requires citizens to rely on lucky charms and superstition",
                "Self-confidence enables an individual to trust their abilities, solve daily challenges independently, and avoid harmful dependency on others",
                "Self-reliance means cutting off all communication with family and friends",
                "Self-confidence makes cooperation and teamwork impossible"
              ],
              "correct": 1,
              "strategy": "Self-confidence empowers independent action and problem solving.",
              "derivation": "Self-reliance is built on personal self-efficacy: believing in your capacity to work, learn, and overcome obstacles without becoming an unnecessary burden on society.",
              "trap": "Confusing self-reliance with anti-social isolation."
            },
            {
              "q": "At the community level, how does self-reliance strengthen local development in rural kebeles?",
              "options": [
                "Communities organize their own labor and resources to build feeder roads, clinics, and potable water points rather than waiting passively for outside aid",
                "Communities refuse to use modern agricultural tools or fertilizers",
                "Villagers sell off all farmland to foreign speculative corporations",
                "Kebeles eliminate all primary schools to save money"
              ],
              "correct": 0,
              "strategy": "Community self-reliance mobilizes local resources for communal infrastructure.",
              "derivation": "Self-reliant communities actively identify needs, mobilize voluntary labor (Debo / Wenfel), and construct local amenities without passive dependency.",
              "trap": "Assuming self-reliance rejects modern technology."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u9",
      "number": "Unit 9",
      "title": "Saving",
      "bigIdea": "Understand the habit of saving, avoiding extravagance, budget planning, traditional saving institutions (Equb and Edir), and formal financial banking systems.",
      "subtopics": [
        {
          "id": "g7-cit-9.1",
          "code": "9.1",
          "title": "Financial Planning, Equb, Edir & Institutional Banking",
          "survey": {
            "blueprint": "Saving: reserving a portion of current income for future investment, emergency, or long-term growth. Extravagance vs Thrift. Traditional saving institutions in Ethiopia: Equb (rotating credit) and Edir (social security insurance). Formal financial institutions: commercial banks, microfinance, credit unions.",
            "objectives": [
              "Explain the economic importance of saving for individuals and national capital formation.",
              "Compare traditional Ethiopian institutions: Equb (rotating savings) vs Edir (mutual aid and funeral insurance).",
              "Construct a personal or household monthly balanced budget."
            ],
            "keyFormulas": "Income = Consumption + Savings &nbsp;|&nbsp; Balanced Budget: Total Income ≥ Total Expenditures"
          },
          "questions": [
            "How does the traditional Ethiopian Equb function as an ingenious indigenous microfinance rotating credit association?",
            "What is the difference between wasteful extravagance and prudent, productive expenditure?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-emerald-400 flex items-center gap-2\">\n                  <span>💰</span> 1. THE ECONOMIC IMPERATIVE OF SAVING\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Saving:</strong> Setting aside a portion of income earned today to meet unforeseen emergencies, finance future education, or invest in productive capital (machinery, cattle, businesses).<br>\n                  • <strong>Formula of Prosperity:</strong> <strong>Income = Consumption (expenses) + Savings</strong>.<br>\n                  • <strong>Extravagance (Wastage):</strong> Spending excessively on lavish feasts, costly luxury apparel, and showing off. In Ethiopia, lavish multi-day weddings and memorial banquets often plunge rural families into deep debt.<br>\n                  • <strong>Thrift:</strong> Wise, disciplined spending that prioritizes necessities over temporary luxury.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🤝</span> 2. TRADITIONAL VS. FORMAL SAVINGS IN ETHIOPIA\n                </h4>\n                <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300\">\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-amber-400\">1. Equb (Rotating Credit Association):</strong><br>\n                    • Members contribute a fixed amount of money weekly or monthly.<br>\n                    • The pooled sum is awarded to one member by lottery or priority.<br>\n                    • Provides instant interest-free capital to start businesses, buy plows, or build homes without bank collateral.\n                  </div>\n                  <div class=\"p-3 bg-space-950 rounded-xl border border-slate-850 space-y-1\">\n                    <strong class=\"text-cyan-400\">2. Edir (Mutual Insurance):</strong><br>\n                    • Community association providing financial assistance, labor, and emotional support during bereavement and funerals.<br>\n                    • Acts as an indigenous social security safety net.\n                  </div>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Managing an Equb Payout for Capital Investment",
            "problem": "A trader in Hawassa joins a 10-person weekly Equb where each member pays 2,000 Birr per week. On week 4, she wins the pool. Calculate the lump sum payout and design a productive reinvestment strategy.",
            "steps": [
              {
                "label": "Step 1: Calculate total pool amount",
                "text": "Total Pool = 10 members × 2,000 Birr = <strong>20,000 Birr</strong>."
              },
              {
                "label": "Step 2: Productive vs Extravagant use",
                "text": "Extravagant use: Throwing a lavish party or buying luxury clothes (money gone instantly).<br>Productive investment: Buying wholesale bags of coffee and grain to sell at weekly market markup, generating recurrent profit while continuing to pay the remaining weekly contributions."
              }
            ],
            "proTip": "Equb turns small, scattered weekly savings into a powerful lump sum for business investment!"
          },
          "reciteFlashcards": [
            {
              "q": "What is an Equb in Ethiopian culture?",
              "a": "A traditional rotating savings and credit association where members pool money and take turns receiving the lump sum."
            },
            {
              "q": "What is an Edir?",
              "a": "A traditional mutual insurance association that assists families during bereavement and funeral expenses."
            },
            {
              "q": "What is the danger of extravagance?",
              "a": "It wastes current capital, forces families into debt, and leaves zero reserves for emergencies."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the traditional Ethiopian rotating savings and credit association called, where members contribute fixed sums periodically and pool funds for one member at a time?",
              "options": [
                "Edir",
                "Equb",
                "Debo",
                "Gadaa"
              ],
              "correct": 1,
              "strategy": "Equb is the traditional rotating savings system; Edir is the burial/emergency mutual aid system.",
              "derivation": "Equb is an indigenous rotating financial association that fosters personal saving, capital accumulation for small business, and community trust. Edir is a mutual welfare association for funerals and grief support.",
              "trap": "Confusing Equb (savings/credit) with Edir (funeral/mutual aid insurance)."
            },
            {
              "q": "Why is keeping personal savings in a formal bank account far superior to storing cash hidden under a mattress at home?",
              "options": [
                "Bank savings earn interest, are secure against fire and theft, and circulate into national economic investment loans",
                "Cash hidden under a mattress automatically multiplies its value during inflation",
                "Banks charge 90% of the money as a storage fee each month",
                "There is no difference between a bank and a mattress"
              ],
              "correct": 0,
              "strategy": "Banks provide security, interest, and credit mobilization.",
              "derivation": "Banking deposits are protected from burglary and house fires, earn compound interest, and allow financial institutions to lend capital to farmers and entrepreneurs.",
              "trap": "Fearing formal banking institutions without cause."
            },
            {
              "q": "What is the danger of extravagant expenditure (spending excessively on lavish feasts and social rivalries) on family welfare?",
              "options": [
                "It immediately elevates family income permanently",
                "It depletes savings, plunges households into high-interest debt, and prevents investments in children’s education and health",
                "It guarantees national food security during drought years",
                "It reduces inflation across the country"
              ],
              "correct": 1,
              "strategy": "Extravagance drains household capital and causes debt.",
              "derivation": "Extravagant spending on weddings, memorial feasts, or prestige purchases leaves families vulnerable to medical emergencies, school fee deficits, and poverty.",
              "trap": "Confusing wasteful spending with cultural generosity."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u10",
      "number": "Unit 10",
      "title": "Active Community Participation",
      "bigIdea": "Understand civic engagement, the role of civil society organizations (CSOs), voluntary associations, community development, and grassroots participation.",
      "subtopics": [
        {
          "id": "g7-cit-10.1",
          "code": "10.1",
          "title": "Civic Engagement, NGOs & Community Action",
          "survey": {
            "blueprint": "Civic engagement: active citizen participation in local community decision-making. Non-Governmental Organizations (NGOs) and Civil Society Organizations (CSOs). Voluntary associations (Red Cross, environmental youth clubs). Democratic local governance: Woreda and Kebele councils.",
            "objectives": [
              "Explain the benefits of active community participation for local democracy.",
              "Describe the roles of CSOs and NGOs in healthcare, education, and human rights.",
              "Participate voluntarily in neighborhood environmental sanitation and literacy initiatives."
            ],
            "keyFormulas": "Strong Democracy = Informed Citizens + Active Voluntary Participation + Public Accountability"
          },
          "questions": [
            "Why does a democratic system weaken when citizens passively wait for government instead of actively participating in local affairs?",
            "What role do youth Red Cross clubs and environmental committees play in schools across Ethiopia?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-rose-400 flex items-center gap-2\">\n                  <span>🤝</span> 1. FORMS OF ACTIVE PARTICIPATION\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  Democracy is not a spectator sport; it requires continuous active citizen involvement:<br>\n                  • <strong>Political Participation:</strong> Voting in elections, attending Kebele and Woreda town halls, discussing community policies, running for local office.<br>\n                  • <strong>Social & Voluntary Participation:</strong> Volunteering labor to construct rural feeder roads, cleaning local riverbanks, planting seedlings during the Green Legacy, supporting elderly neighbors, and tutoring children.<br>\n                  • <strong>Economic Participation:</strong> Joining agricultural cooperatives, paying municipal taxes, and creating local micro-enterprises.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-cyan-400 flex items-center gap-2\">\n                  <span>🌐</span> 2. ROLES OF CIVIC SOCIETIES (CSOs & NGOs)\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Civil Society Organizations:</strong> Non-profit, non-governmental voluntary associations created by citizens to promote shared interests, human rights, and social welfare (e.g. Ethiopian Red Cross, professional associations, youth/women’s leagues).</p>\n                  <p>• <strong>Key Contributions:</strong> Providing clean drinking water wells in remote villages, building schools and health posts, disaster emergency relief, advocating for disabled rights, and educating voters.</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Community Co-production of School Infrastructure",
            "problem": "A rural primary school lacks clean water and latrines. How can active community participation resolve this issue faster than waiting years for central government budget allocations?",
            "steps": [
              {
                "label": "Step 1: Convene Kebele community meeting",
                "text": "Parents, teachers, and local elders meet at the school to identify priorities and organize an action committee."
              },
              {
                "label": "Step 2: Pool local labor and materials",
                "text": "Community members donate local stone, sand, and voluntary labor, while local traders contribute cement bags."
              },
              {
                "label": "Step 3: Partner with a water NGO",
                "text": "A clean water NGO provides piping and pump fittings. Within two months, clean water flows to the school, improving student attendance and health through self-reliant community action!"
              }
            ],
            "proTip": "When communities invest their own labor in a project, they take pride in it and maintain it for decades!"
          },
          "reciteFlashcards": [
            {
              "q": "What is a Non-Governmental Organization (NGO)?",
              "a": "A non-profit, voluntary group organized on a local, national, or international level to address social needs."
            },
            {
              "q": "Name two forms of community participation at the Kebele level.",
              "a": "Attending public consultation meetings and volunteering labor for community infrastructure."
            },
            {
              "q": "Why is passive citizenship dangerous to democracy?",
              "a": "It allows corrupt officials to abuse power without scrutiny or accountability."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the traditional Ethiopian community mutual aid institution that provides social, psychological, and financial support to families during bereavement and funerals?",
              "options": [
                "Equb",
                "Edir",
                "Senbete",
                "Mahber"
              ],
              "correct": 1,
              "strategy": "Edir is the customary mutual assistance association for mourning and burials.",
              "derivation": "Edir is an indigenous non-governmental mutual assistance association whose members support one another during funerals, illnesses, and crises with burial labor, tents, and funds.",
              "trap": "Confusing Edir with Equb (which is for financial savings)."
            },
            {
              "q": "How does voluntary community service (such as tutoring younger children or cleaning public spaces) benefit youth in their personal growth?",
              "options": [
                "It wastes study time that could be spent playing video games",
                "It fosters civic leadership skills, empathy, social solidarity, and practical problem-solving capabilities",
                "It guarantees immediate political office at age 14",
                "It replaces the need to attend formal secondary school"
              ],
              "correct": 1,
              "strategy": "Voluntary civic participation builds leadership, empathy, and social cohesion.",
              "derivation": "Community participation connects youth to their society, instills civic responsibility, and trains future ethical leaders.",
              "trap": "Viewing volunteerism as useless unpaid labor."
            },
            {
              "q": "When citizens actively participate in local kebele meetings and development committees, what happens to local governance?",
              "options": [
                "Public decisions become more transparent, corruption decreases, and public projects reflect the true needs of the community",
                "The government ceases to exist",
                "Taxes immediately increase tenfold without explanation",
                "Only foreign tourists are allowed to speak"
              ],
              "correct": 0,
              "strategy": "Citizen participation increases transparency and accountability.",
              "derivation": "Participatory democracy ensures that local administrators remain accountable to the community, reducing bribery and improving project delivery.",
              "trap": "Thinking ordinary citizens have no role in local administration."
            }
          ]
        }
      ]
    },
    {
      "id": "g7-cit-u11",
      "number": "Unit 11",
      "title": "The Pursuit of Wisdom",
      "bigIdea": "Understand the power of scientific knowledge, information literacy, critical thinking, fighting superstition, and eliminating backward cultural dogmas.",
      "subtopics": [
        {
          "id": "g7-cit-11.1",
          "code": "11.1",
          "title": "Scientific Outlook, Critical Thinking & Eliminating Superstition",
          "survey": {
            "blueprint": "Scientific knowledge vs superstition and myth. Critical thinking and evaluating sources of information (checking facts, avoiding fake news and propaganda). Combating harmful backward sayings and boastful myths that hinder economic and social development.",
            "objectives": [
              "Explain the value of empirical scientific inquiry over unverified superstition.",
              "Evaluate sources of information critically in the digital and media age.",
              "Identify backward sayings and defeatist proverbs that discourage innovation and savings."
            ],
            "keyFormulas": "Wisdom = Empirical Knowledge + Critical Thinking + Ethical Application"
          },
          "questions": [
            "How does a scientific outlook protect communities from falling victim to fraudulent witchcraft and disease superstitions?",
            "How can students discern between factual, verified information and malicious fake news online?"
          ],
          "coreNotes": "\n            <div class=\"space-y-5 text-slate-200\">\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-indigo-400 flex items-center gap-2\">\n                  <span>🔬</span> 1. THE POWER OF SCIENTIFIC KNOWLEDGE\n                </h4>\n                <p class=\"text-xs sm:text-sm text-slate-300 leading-relaxed\">\n                  • <strong>Scientific Knowledge:</strong> Systematic knowledge based on empirical observation, experimentation, logical verification, and reproducible evidence.<br>\n                  • <strong>Eradicating Superstition:</strong> For centuries, epidemics (like malaria, cholera, epilepsy) were falsely attributed to evil spirits, curses, or witchcraft, leading people to seek fake remedies while patients died. Science reveals that malaria is caused by the <em>Plasmodium</em> parasite transmitted by female Anopheles mosquitoes, treatable with modern medicine.<br>\n                  • <strong>Technological Modernization:</strong> Scientific understanding powers agriculture (hybrid seeds, fertilizers), healthcare (vaccines, antibiotics), and engineering.\n                </p>\n              </div>\n\n              <div class=\"p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2\">\n                <h4 class=\"text-sm font-black text-amber-400 flex items-center gap-2\">\n                  <span>🧠</span> 2. CRITICAL THINKING & REJECTING BACKWARD SAYINGS\n                </h4>\n                <div class=\"space-y-2 text-xs sm:text-sm text-slate-300\">\n                  <p>• <strong>Critical Thinking:</strong> The ability to analyze facts objectively, question unproven claims, assess biases, and demand solid evidence before accepting assertions as truth.</p>\n                  <p>• <strong>Overcoming Fatalistic Proverbs:</strong> Some backward traditional sayings encourage defeatism, such as <em>\"Why work hard today when tomorrow is uncertain?\"</em> or sayings that mock savings and hard work. Wisdom requires replacing fatalistic myths with proverbs that celebrate diligence, learning, and forward planning!</p>\n                </div>\n              </div>\n            </div>\n          ",
          "example": {
            "title": "Worked Example: Fact-Checking Viral Social Media Rumors",
            "problem": "A viral Telegram message claims that drinking boiled eucalyptus leaf water instantly cures tuberculosis and that patients should immediately throw away their prescribed hospital antibiotic pills. How does a student with a scientific outlook evaluate this claim?",
            "steps": [
              {
                "label": "Step 1: Scrutinize the source",
                "text": "Is this information published by verified medical authorities (Ministry of Health, WHO) or by an anonymous forward?"
              },
              {
                "label": "Step 2: Understand the pathology",
                "text": "Tuberculosis is a bacterial lung infection caused by <em>Mycobacterium tuberculosis</em> that requires a strict 6-month course of verified antibiotics (Rifampicin, Isoniazid)."
              },
              {
                "label": "Step 3: Reject the lethal falsehood",
                "text": "Stopping prescribed antibiotics will cause drug-resistant TB and death. The student warns their family and community against believing unverified dangerous health myths online."
              }
            ],
            "proTip": "In the information age, critical thinking and media literacy are matters of life and death!"
          },
          "reciteFlashcards": [
            {
              "q": "What is empirical scientific knowledge?",
              "a": "Knowledge based on verifiable observation, experimentation, and logical proof."
            },
            {
              "q": "What is critical thinking?",
              "a": "The objective analysis and evaluation of information and claims before accepting them as truth."
            },
            {
              "q": "Why is stopping hospital medicine to seek supernatural witchcraft dangerous?",
              "a": "It allows preventable bacterial and viral infections to advance to fatal stages while wasting time."
            }
          ],
          "amtQuiz": [
            {
              "q": "What is the fundamental intellectual difference between raw \"Information\" and genuine \"Wisdom\"?",
              "options": [
                "Information is an unorganized collection of facts and data, whereas wisdom is the deep ability to critically evaluate knowledge and apply it ethically in real life",
                "Information is only found in libraries, while wisdom is bought at the market",
                "Wisdom is simply memorizing long dictionaries without understanding",
                "There is no difference; information and wisdom are identical synonyms"
              ],
              "correct": 0,
              "strategy": "Information is raw data; Wisdom is knowledge applied with ethical discernment.",
              "derivation": "Anyone can memorize facts (information). Wisdom requires critical thinking, moral judgment, empathy, and the ability to make righteous, constructive choices.",
              "trap": "Confusing rote memorization with wisdom."
            },
            {
              "q": "How does developing a consistent daily reading culture empower a student throughout their lifetime?",
              "options": [
                "It exposes them to diverse perspectives, expands vocabulary, sharpens analytical reasoning, and fuels scientific curiosity",
                "It causes their vision to permanently degrade within a few weeks",
                "It guarantees they will never need to listen to teachers again",
                "It prevents them from learning any practical life skills"
              ],
              "correct": 0,
              "strategy": "Reading cultivates critical reasoning and knowledge breadth.",
              "derivation": "Reading is the foundational gateway to lifelong learning. It builds cognitive depth, analytical rigor, and creative problem-solving.",
              "trap": "Believing that reading books is obsolete in the digital era."
            },
            {
              "q": "Why is scientific inquiry and critical thinking essential for rejecting superstition, harmful traditional practices, and digital misinformation?",
              "options": [
                "Critical thinking demands empirical evidence, logical consistency, and fact-checking before accepting claims as true",
                "Scientific inquiry requires believing every message posted on social media platforms",
                "Critical thinking teaches students to reject all ancestral wisdom without consideration",
                "Science relies solely on emotional intuition"
              ],
              "correct": 0,
              "strategy": "Critical thinking verifies claims using evidence and logic.",
              "derivation": "Wisdom demands questioning claims, verifying sources, and relying on verified science rather than blind prejudice or online rumors.",
              "trap": "Accepting online rumors as factual truth."
            }
          ]
        }
      ]
    }
  ]
};
