// Grade 8 Citizenship Education - Complete Ethiopian Curriculum Syllabus (Units 1 to 6)
module.exports = {
  id: 'citizenship',
  name: 'Citizenship Education',
  icon: '⚖️',
  units: [
    {
      id: 'g8-cit-u1',
      number: 'Unit 1',
      title: 'Democratic Culture & Constitutional Governance',
      bigIdea: 'Examine constitutional democracy, separation of powers, checks and balances, and institutional oversight in democratic societies.',
      subtopics: [
        {
          id: 'g8-cit-1.1',
          code: '1.1',
          title: 'Separation of Powers & Constitutional Checks',
          survey: {
            blueprint: 'Trias Politica (Montesquieu): Legislative (HPR & HoF in Ethiopia), Executive (Prime Minister & Council of Ministers), Judicial (Federal Courts). Mutual checks prevent tyranny.',
            objectives: [
              'Explain the doctrine of Separation of Powers and its role in preventing autocracy.',
              'Describe the unique bicameral parliamentary system of Ethiopia (House of Peoples’ Representatives and House of Federation).',
              'Illustrate mechanisms of checks and balances between state organs.'
            ],
            keyFormulas: 'Checks & Balances: Parliament confirms executive ministers; Judiciary reviews legal fairness; Executive enforces laws'
          },
          questions: [
            'How does the House of Federation (HoF) differ from the House of Peoples’ Representatives (HPR) in the Ethiopian federal parliament?',
            'Why is an independent judiciary crucial to constitutional democracy?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Institutional Governance & Federal Constitutionalism</h4>
              <p>• <strong>Separation of Powers:</strong> Dividing state authority into three distinct branches so that no single body accumulates absolute power.<br>
              • <strong>Bicameral Structure in Ethiopia:</strong><br>
                - <em>House of Peoples\' Representatives (HPR):</em> The highest legislative authority elected by popular vote; enacts laws, approves budgets, and appoints the Prime Minister.<br>
                - <em>House of Federation (HoF):</em> Composed of representatives of each nation, nationality, and people; interprets the constitution and resolves regional border and subsidy issues.<br>
              • <strong>Checks and Balances:</strong> Each branch has constitutional power to check the others (e.g., parliament calls ministers for questioning; courts protect citizens against illegal executive acts).</p>
            </div>
          `,
          example: {
            title: 'Constitutional Role of the House of Federation',
            problem: 'A dispute arises over whether a newly enacted regional tax proclamation conflicts with the federal constitution. Which constitutional body has the final authority to interpret the Constitution in Ethiopia?',
            steps: [
              { label: 'Step 1: Consult Article 62 of FDRE Constitution', text: 'Article 62 grants the power of constitutional interpretation.' },
              { label: 'Step 2: Identify designated body', text: 'Unlike the US where the Supreme Court interprets the constitution, in Ethiopia this power belongs to the <strong>House of Federation</strong> assisted by the Council of Constitutional Inquiry.' }
            ],
            proTip: 'In Ethiopia, the House of Federation interprets the Constitution, not the Supreme Court!'
          },
          reciteFlashcards: [
            { q: 'Which house of the Ethiopian parliament is responsible for interpreting the Constitution?', a: 'The House of Federation (HoF).' },
            { q: 'What is the primary function of the House of Peoples\' Representatives?', a: 'Enacting federal legislation and approving government policy.' }
          ],
          amtQuiz: [
            {
              q: 'In the Ethiopian constitutional framework, who exercises the highest executive authority of the federal government?',
              options: ['The Prime Minister', 'The President of the Republic', 'The Speaker of the House', 'The Chief Justice of the Supreme Court'],
              correct: 0,
              strategy: 'Ethiopia is a parliamentary republic where the head of government is the Prime Minister.',
              derivation: 'Under Article 72 and 73 of the FDRE Constitution, the Prime Minister is the Chief Executive and Commander-in-Chief of the armed forces.',
              trap: 'The President is the ceremonial Head of State, while executive power resides with the Prime Minister!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-cit-u2',
      number: 'Unit 2',
      title: 'The Rule of Law & Institutional Integrity',
      bigIdea: 'Study the supremacy of the constitution, judicial independence, procedural fairness, and preventing arbitrary governance.',
      subtopics: [
        {
          id: 'g8-cit-2.1',
          code: '2.1',
          title: 'Supremacy of Law & Judicial Independence',
          survey: {
            blueprint: 'Rule of Law: Laws must be clear, publicly promulgated, stable, and administered fairly by an independent judiciary free from political interference.',
            objectives: [
              'Explain what guarantees judicial independence (security of tenure, independent judicial administration council).',
              'Explain the principle of "Nulla poena sine lege" (no punishment without pre-existing law).',
              'Analyze how institutional integrity prevents abuse of administrative power.'
            ],
            keyFormulas: 'Rule of Law = Universal Application + Judicial Independence + Predictable Legal Due Process'
          },
          questions: [
            'Why must judges be shielded from political dismissal by the executive branch?',
            'What is the difference between arbitrary rule by decree and constitutional rule of law?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Judicial Impartiality & Legal Certainty</h4>
              <p>• <strong>Judicial Independence:</strong> Judges must decide cases based solely on the law and evidence presented, without fear of retaliation, political pressure, or bribery.<br>
              • <strong>Constitutional Safeguards:</strong> Under Article 79 of the FDRE Constitution, the judiciary is independent of any government organ. Judges can only be removed for proven gross incompetence or misconduct approved by the Judicial Administration Council.<br>
              • <strong>Due Process Rights:</strong> Presumption of innocence until proven guilty, right to be informed of charges within 48 hours of arrest, right to legal representation, and freedom from self-incrimination.</p>
            </div>
          `,
          example: {
            title: 'Evaluating Judicial Independence in Court Decisions',
            problem: 'A high-ranking cabinet minister orders a trial judge to convict an investigative journalist without evidence. The judge refuses and acquits the journalist due to lack of proof. Which principle was upheld?',
            steps: [
              { label: 'Step 1: Identify pressure', text: 'Executive branch attempted to dictate a judicial decision.' },
              { label: 'Step 2: Identify response', text: 'The judge ruled solely on legal evidence despite political pressure.' },
              { label: 'Step 3: Conclude', text: 'The judge upheld <strong>Judicial Independence</strong> and the <strong>Rule of Law</strong>.' }
            ],
            proTip: 'When courts are independent, all citizens can trust that justice is blind and impartial!'
          },
          reciteFlashcards: [
            { q: 'What is the constitutional timeframe within which an arrested person must be brought before a court of law in Ethiopia?', a: 'Within 48 hours of arrest (Article 19).' },
            { q: 'What does the presumption of innocence mean?', a: 'An accused person is considered innocent until proven guilty by a court of law.' }
          ],
          amtQuiz: [
            {
              q: 'Which constitutional body is tasked with the appointment, disciplinary oversight, and protection of judges in Ethiopia to preserve judicial independence?',
              options: [
                'The Federal Judicial Administration Council',
                'The Ministry of Trade',
                'The National Electoral Board',
                'The City Police Commission'
              ],
              correct: 0,
              strategy: 'Recall the constitutional council that manages the affairs of judges.',
              derivation: 'The Judicial Administration Council oversees judicial nominations and disciplines judges independently from political ministries.',
              trap: 'The Ministry of Justice does not appoint judges, as that would compromise separation of powers!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-cit-u3',
      number: 'Unit 3',
      title: 'Justice, Equity & Human Dignity',
      bigIdea: 'Explore philosophical foundations of justice: social justice, affirmative action, rights of vulnerable groups, and human dignity.',
      subtopics: [
        {
          id: 'g8-cit-3.1',
          code: '3.1',
          title: 'Distributive Justice & Social Equity',
          survey: {
            blueprint: 'Social Justice: Equitable distribution of public resources, bridging economic inequalities, protecting rights of women, children, the elderly, and disabled.',
            objectives: [
              'Explain the philosophy of distributive justice and progressive taxation.',
              'Analyze how access to clean water, education, and electricity promotes human dignity.',
              'Identify barriers facing vulnerable demographic groups and mechanisms to remove them.'
            ],
            keyFormulas: 'Social Justice = Fair Economic Distribution + Equal Social Opportunity + Inviolable Human Dignity'
          },
          questions: [
            'Why does unequal distribution of national resources often trigger social unrest and conflict?',
            'How does a progressive income tax system promote distributive justice?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Social Equity & Human Dignity Foundations</h4>
              <p>• <strong>Distributive Justice:</strong> Ensuring all citizens share equitably in national prosperity. It means no community is neglected in infrastructure investment (roads, schools, clinics, irrigation).<br>
              • <strong>Human Dignity:</strong> An intrinsic worth possessed by every human being that must be honored and protected under all circumstances. Article 24 of the FDRE Constitution affirms that everyone has the right to respect for their human dignity.<br>
              • <strong>Social Safety Nets:</strong> Programs like the Productive Safety Net Program (PSNP) protect vulnerable households against drought and starvation, preserving family dignity.</p>
            </div>
          `,
          example: {
            title: 'Analyzing Rural Electrification as Distributive Justice',
            problem: 'The federal government directs budget funds to electrify remote rural farming villages before upgrading luxury city avenues. Explain the distributive justice rationale.',
            steps: [
              { label: 'Step 1: Identify baseline needs', text: 'Rural students study with dangerous kerosene lamps while urban avenues already have adequate lighting.' },
              { label: 'Step 2: Apply equity principle', text: 'Basic access to light, vaccine refrigeration, and digital connectivity is a fundamental developmental right.' },
              { label: 'Step 3: Outcome', text: 'Prioritizing neglected rural communities balances systemic inequities and upholds human dignity.' }
            ],
            proTip: 'Distributive justice prioritizes basic human survival and development needs over luxury wants!'
          },
          reciteFlashcards: [
            { q: 'What is human dignity?', a: 'The inherent, inalienable moral worth that belongs to every human being.' },
            { q: 'How does progressive taxation support distributive justice?', a: 'Higher earners contribute higher tax percentages, funding public welfare and schools for all.' }
          ],
          amtQuiz: [
            {
              q: 'Which government program best embodies distributive justice in public healthcare?',
              options: [
                'Community-based health insurance providing subsidized medical treatment to low-income families',
                'Tax exemptions for luxury car imports',
                'Restricting new hospital construction strictly to capital cities',
                'Privatizing all public clinics'
              ],
              correct: 0,
              strategy: 'Distributive justice ensures healthcare resources are accessible to all citizens regardless of wealth.',
              derivation: 'Subsidized community health insurance ensures low-income households receive essential medical care, balancing healthcare access.',
              trap: 'Privatizing clinics without safety nets restricts healthcare only to wealthy individuals!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-cit-u4',
      number: 'Unit 4',
      title: 'Patriotism, Civic Bravery & Sovereignty',
      bigIdea: 'Explore patriotism in modern democratic nations, civic bravery, whistleblowing, protecting public property, and defending sovereignty.',
      subtopics: [
        {
          id: 'g8-cit-4.1',
          code: '4.1',
          title: 'Civic Courage, Whistleblowing & National Interest',
          survey: {
            blueprint: 'Civic Bravery: Standing up for justice against corruption or illegality even at personal risk. Whistleblowing. Protecting national sovereignty and public property.',
            objectives: [
              'Define civic courage and contrast it with passive complicity.',
              'Explain the role of whistleblowers in uncovering corruption and safeguarding public funds.',
              'Discuss duties of citizens to preserve public property (trains, electricity poles, pipelines).'
            ],
            keyFormulas: 'National Interest = Collective Security + Sovereign Independence + Economic Prosperity of All Citizens'
          },
          questions: [
            'Why does exposing corruption inside a government ministry make a person a true patriot rather than a traitor?',
            'What constitutes vandalism against public infrastructure and how does it harm community development?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Civic Courage & Protection of the Common Good</h4>
              <p>• <strong>Civic Courage:</strong> The moral courage to speak truth to power, defend the vulnerable, and report abuses of law even when facing social pressure or threats.<br>
              • <strong>Whistleblowing:</strong> An employee or citizen exposing illegal, corrupt, or dangerous activity taking place within an organization to authorities or the public.<br>
              • <strong>Protecting Public Assets:</strong> Railways, electrical transformers, telecommunication cables, and school classrooms are built with citizen taxes. Sabotaging or stealing copper wiring harms hospitals and paralyzes the entire national economy.</p>
            </div>
          `,
          example: {
            title: 'Evaluating Whistleblowing as an Act of Patriotism',
            problem: 'An accountant in a regional water bureau discovers that funds allocated for a community water well were diverted to an official\'s private account. She reports the fraud to the anti-corruption commission. Analyze her civic action.',
            steps: [
              { label: 'Step 1: Evaluate risk', text: 'She risked her job and faced potential retaliation.' },
              { label: 'Step 2: Assess public benefit', text: 'Her report saved millions of Birr, allowing clean drinking water to reach 10,000 rural citizens.' },
              { label: 'Step 3: Characterize action', text: 'This is an exemplary demonstration of <strong>civic courage and genuine patriotism</strong>.' }
            ],
            proTip: 'Whistleblower protection laws shield honest citizens who expose corruption from illegal retaliation!'
          },
          reciteFlashcards: [
            { q: 'What is a whistleblower in civic ethics?', a: 'A person who reports illicit, corrupt, or hazardous conduct within an institution.' },
            { q: 'Why is stealing public infrastructure cables considered an anti-patriotic crime?', a: 'It destroys public tax investments and cuts essential electricity/telecom to schools and hospitals.' }
          ],
          amtQuiz: [
            {
              q: 'A citizen witnesses government equipment being secretly diverted to a private commercial contractor and reports this to the Ethics and Anti-Corruption Commission. This citizen is demonstrating:',
              options: ['Civic courage and democratic patriotism', 'Treason against the state', 'Unethical workplace gossip', 'Passive bystander behavior'],
              correct: 0,
              strategy: 'Protecting public property and upholding law represents civic bravery.',
              derivation: 'Reporting theft of public assets demonstrates civic courage and loyalty to the public interest and the nation.',
              trap: 'Reporting crimes is an ethical duty, not gossip!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-cit-u5',
      number: 'Unit 5',
      title: 'Digital Citizenship & Media Responsibility',
      bigIdea: 'Navigate ethics in the digital information age: combating cyberbullying, hate speech, fake news, data privacy, and online etiquette.',
      subtopics: [
        {
          id: 'g8-cit-5.1',
          code: '5.1',
          title: 'Combating Disinformation & Digital Netiquette',
          survey: {
            blueprint: 'Digital Citizenship: Using digital technology responsibly, safely, and ethically. Verification before sharing (CRAAP test: Currency, Relevance, Authority, Accuracy, Purpose).',
            objectives: [
              'Differentiate misinformation (unintentional errors) from disinformation (deliberate false propaganda).',
              'Apply critical fact-checking tools before reposting sensational news on social media.',
              'Explain the legal and psychological harms of cyberbullying and online harassment.'
            ],
            keyFormulas: 'Digital Verification: Stop ➔ Investigate Source ➔ Find Better Coverage ➔ Trace Claims to Original Context (SIFT Method)'
          },
          questions: [
            'How can unverified fake news circulated on social media spark real-world intercommunal violence?',
            'What is the ethical responsibility of an internet user before clicking the "Share" or "Retweet" button?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Digital Ethics & Social Media Responsibility</h4>
              <p>• <strong>Misinformation vs Disinformation:</strong><br>
                - <em>Misinformation:</em> False or inaccurate information shared without malicious intent (a mistake).<br>
                - <em>Disinformation:</em> Deliberately fabricated rumors, deceptive photos, or propaganda spread with the intent to deceive, polarize communities, or incite hatred.<br>
              • <strong>Hate Speech:</strong> Communication attacking individuals or groups based on ethnicity, religion, or gender. Prohibited by Ethiopian computer crime proclamations.<br>
              • <strong>Digital Etiquette (Netiquette):</strong> Treat online users with dignity, respect personal privacy, do not post photos of others without consent, and never engage in online mobbing or defamation.</p>
            </div>
          `,
          example: {
            title: 'Applying Fact-Checking to a Viral Social Media Claim',
            problem: 'A sensational TikTok post shows a dramatic fire video with a caption claiming an ancient monastery was destroyed 10 minutes ago. What must a responsible digital citizen do?',
            steps: [
              { label: 'Step 1: Pause and verify', text: 'Do NOT hit "Share". Sensational claims often use old recycled footage to trigger emotional outrage.' },
              { label: 'Step 2: Reverse image/video search', text: 'Check if the video is from an unrelated factory fire in another country years ago.' },
              { label: 'Step 3: Consult verified news outlets', text: 'Check credible national news agencies (ENA, FBC) or monastery representatives to confirm reality.' }
            ],
            proTip: 'If you are not 100% sure a news post is genuine, do not amplify it by sharing!'
          },
          reciteFlashcards: [
            { q: 'What is the definition of disinformation?', a: 'Deliberately false information spread with the intention to deceive.' },
            { q: 'Why is cyberbullying harmful?', a: 'It causes severe mental distress, anxiety, depression, and violates human dignity.' }
          ],
          amtQuiz: [
            {
              q: 'A social media user intentionally edits a picture to falsely claim a clash took place between two ethnic groups in order to cause public panic. This action is an example of:',
              options: ['Disinformation and hate speech', 'Constructive citizen journalism', 'Protected freedom of artistic expression', 'Harmless satire'],
              correct: 0,
              strategy: 'Fabricated material intended to cause harm and intercommunal strife is disinformation.',
              derivation: 'Deliberately publishing fabricated inflammatory material to spark conflict violates digital ethics and law.',
              trap: 'Intentional fabrication to deceive cannot be defended as citizen journalism!'
            }
          ]
        }
      ]
    },
    {
      id: 'g8-cit-u6',
      number: 'Unit 6',
      title: 'Work Ethics, Self-Reliance & Development',
      bigIdea: 'Explore the dignity of labor, professionalism, punctuality, financial prudence, saving culture, and overcoming dependency syndrome.',
      subtopics: [
        {
          id: 'g8-cit-6.1',
          code: '6.1',
          title: 'Dignity of Labor & The Culture of Saving',
          survey: {
            blueprint: 'Work Ethics: Discipline, integrity, diligence, punctuality. Dignity of labor: all lawful work (manual or intellectual) is honorable. Overcoming dependency syndrome through self-reliance.',
            objectives: [
              'Define work ethics and explain the value of punctuality and dedication in personal and national productivity.',
              'Reject prejudices against manual and vocational professions (craftsmen, street cleaners, farmers).',
              'Develop personal financial saving habits and explore youth entrepreneurship.'
            ],
            keyFormulas: 'National Prosperity = Diligent Work Ethic + High Savings Rate + Technological Innovation'
          },
          questions: [
            'Why does looking down upon manual crafts or vocational jobs hinder national industrialization?',
            'What is "dependency syndrome" and how does it trap individuals and nations in poverty?'
          ],
          coreNotes: `
            <div class="space-y-3 p-4 bg-space-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <h4 class="font-bold text-rose-400">Professionalism, Work Ethic & Self-Reliance</h4>
              <p>• <strong>Dignity of Labor:</strong> Every form of honest, lawful work is noble and worthy of respect. A master carpenter, plumber, or farmer is just as vital to society as a physician or lawyer.<br>
              • <strong>Core Professional Work Values:</strong><br>
                - <em>Punctuality:</em> Respecting time and deadlines.<br>
                - <em>Integrity:</em> Delivering high-quality honest work even when unsupervised.<br>
                - <em>Diligence:</em> Continuous improvement and persistent effort.<br>
              • <strong>Culture of Saving & Self-Reliance:</strong> Saving a percentage of earnings into financial institutions (banks, Equb) creates capital for investments, secures independence, and avoids debilitating debt.</p>
            </div>
          `,
          example: {
            title: 'Analyzing Economic Self-Reliance vs Dependency',
            problem: 'Two young graduates are offered vocational mechanic training. Person A rejects it, saying manual work is "beneath them", and waits for family handouts for 5 years. Person B embraces the training, opens a workshop, and employs 4 people. Analyze their outcomes.',
            steps: [
              { label: 'Step 1: Person A analysis', text: 'Suffers from prejudice against manual work and dependency syndrome, remaining unproductive and impoverished.' },
              { label: 'Step 2: Person B analysis', text: 'Upholds dignity of labor and self-reliance, generating wealth, self-respect, and community jobs.' }
            ],
            proTip: 'Skills and hard work create wealth; false pride and dependency create poverty!'
          },
          reciteFlashcards: [
            { q: 'What does "dignity of labor" mean?', a: 'The philosophy that all honest, lawful work is noble and deserving of respect.' },
            { q: 'What is dependency syndrome?', a: 'A debilitating mindset of relying continuously on charity or handouts from others instead of working.' }
          ],
          amtQuiz: [
            {
              q: 'Which attitude best reflects a modern culture of self-reliance and positive work ethic?',
              options: [
                'Believing that any honest vocational skill is valuable and saving money regularly to fund enterprise',
                'Refusing manual jobs while waiting indefinitely for government desk employment',
                'Depending permanently on financial handouts from relatives',
                'Spending all daily earnings immediately on entertainment without saving'
              ],
              correct: 0,
              strategy: 'Self-reliance is rooted in personal initiative, skill development, and financial discipline.',
              derivation: 'Valuing diverse vocational skills and maintaining disciplined savings habits are the cornerstones of self-reliance and wealth generation.',
              trap: 'Waiting for handouts is the definition of dependency syndrome!'
            }
          ]
        }
      ]
    }
  ]
};
