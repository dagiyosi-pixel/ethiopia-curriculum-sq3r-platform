const fs = require('fs');
const path = require('path');

const g7Cit = require('../src/curriculum/g7_citizenship.js');

// Unit 1: Democratic System
g7Cit.units[0].subtopics[0].amtQuiz = [
  {
    q: 'How does a representative (indirect) democracy differ from a direct democracy as practiced in ancient Athens?',
    options: [
      'In a representative democracy, citizens elect officials to debate and make laws on their behalf, whereas in a direct democracy citizens vote directly on every law',
      'In a direct democracy, only hereditary monarchs can make executive decisions',
      'Representative democracy does not have a constitution or courts',
      'Direct democracy requires computer voting algorithms'
    ],
    correct: 0,
    strategy: 'Direct = citizens vote directly; Representative = elected representatives vote.',
    derivation: 'In large modern nations, direct voting by millions of citizens on daily legislation is impractical. Citizens elect parliamentary representatives (such as the House of Peoples’ Representatives in Ethiopia) to enact policy.',
    trap: 'Confusing representative democracy with authoritarian rule.'
  },
  {
    q: 'Which of the following is an essential pillar of constitutional democracy in Ethiopia?',
    options: ['Holding periodic, free, and fair multi-party elections', 'Banning all private media organizations', 'Allowing leaders to serve for life without term limits', 'Abolishing the court system'],
    correct: 0,
    strategy: 'Periodic free elections are a cornerstone of democratic legitimacy.',
    derivation: 'Democratic constitutionalism requires regular elections allowing citizens to hold elected officials accountable and peacefully change leadership.',
    trap: 'Assuming lifetime appointments are democratic.'
  },
  {
    q: 'What is the supreme law of the Federal Democratic Republic of Ethiopia (FDRE) to which all other laws, customs, and acts must conform?',
    options: ['The Civil Procedure Code', 'The FDRE Constitution (1995)', 'The Regional Police Charter', 'Municipal Building Regulations'],
    correct: 1,
    strategy: 'Article 9 of the FDRE Constitution establishes constitutional supremacy.',
    derivation: 'Article 9(1) declares: The Constitution is the supreme law of the land. Any law, customary practice or decision of an organ of state which contravenes it shall be of no effect.',
    trap: 'Selecting subordinate civil codes or regional guidelines.'
  }
];

// Unit 2: The Rule of Law
g7Cit.units[1].subtopics[0].amtQuiz = [
  {
    q: 'What does the principle "Equality Before the Law" mean in a constitutional state?',
    options: [
      'Wealthy citizens receive discounts on court fees',
      'Every person, regardless of social status, wealth, or political power, is subject to the same laws and entitled to equal legal protection',
      'Government officials cannot be prosecuted for any criminal acts',
      'Laws only apply to citizens who voluntarily sign a contract'
    ],
    correct: 1,
    strategy: 'Equality before the law means no one is above the law.',
    derivation: 'The Rule of Law asserts that laws apply universally to governors and the governed alike. No citizen enjoys immunity from the law due to rank or wealth.',
    trap: 'Assuming political officials are exempt from criminal law.'
  },
  {
    q: 'Why must the judicial branch of government (the courts) remain completely independent of the executive and legislative branches?',
    options: [
      'To ensure that court rulings are free from political influence and based solely on the law and evidence',
      'So judges can pass whatever laws they want without parliamentary approval',
      'To allow the Prime Minister to select verdicts directly',
      'To keep courts open 24 hours a day'
    ],
    correct: 0,
    strategy: 'Judicial independence ensures impartial justice.',
    derivation: 'Judicial independence protects judges from retaliation or pressure by government officials, guaranteeing fair and impartial trials for all citizens.',
    trap: 'Confusing judicial interpretation with lawmaking (which belongs to parliament).'
  },
  {
    q: 'What dangerous condition results when state officials exercise power according to personal whims and moods rather than established statutory laws?',
    options: ['Constitutional Supremacy', 'Arbitrary Rule (Autocracy)', 'Procedural Justice', 'Democratic Oversight'],
    correct: 1,
    strategy: 'Arbitrary rule occurs when laws are ignored in favor of personal whim.',
    derivation: 'Arbitrary rule leads to corruption, abuse of power, human rights violations, and the collapse of the rule of law.',
    trap: 'Confusing arbitrary rule with procedural justice.'
  }
];

// Unit 3: Equality
g7Cit.units[2].subtopics[0].amtQuiz = [
  {
    q: 'What is the purpose of Affirmative Action in Ethiopian higher education and public sector employment?',
    options: [
      'To grant permanent legal immunity to specific individuals',
      'To provide temporary remedial support to historically disadvantaged groups (such as women and developing regions) to achieve genuine equality',
      'To prevent certain groups from attending university',
      'To eliminate all entrance exams across the country'
    ],
    correct: 1,
    strategy: 'Affirmative action corrects historical inequalities.',
    derivation: 'Under Article 35(3) of the FDRE Constitution, affirmative action addresses historical inequalities and marginalization suffered by women and underserved communities.',
    trap: 'Viewing affirmative action as reverse discrimination rather than remedial equity.'
  },
  {
    q: 'Under the Ethiopian Constitution, how are the languages and cultural heritages of all Ethiopian nations, nationalities, and peoples treated?',
    options: [
      'Only one historical dialect is allowed to be spoken in schools',
      'All Ethiopian languages and cultural expressions enjoy equal state recognition and legal protection',
      'Lowland cultural traditions are barred from national broadcasting',
      'Languages must be replaced by international languages'
    ],
    correct: 1,
    strategy: 'Article 5 grants equal state recognition to all Ethiopian languages.',
    derivation: 'Article 5(1) establishes: All Ethiopian languages shall enjoy equal state recognition. This reflects the foundational principle of cultural and linguistic equality.',
    trap: 'Assuming only the federal working language is legally recognized.'
  },
  {
    q: 'Gender equality guarantees that men and women enjoy equal rights in:',
    options: [
      'Only ceremonial social festivals',
      'Marriage, property ownership, education, employment, and political participation',
      'Only the right to inherit household clothing',
      'Physical sports competitions only'
    ],
    correct: 1,
    strategy: 'Article 35 guarantees women equal rights across all sectors.',
    derivation: 'The Ethiopian Constitution grants women equal rights with men in all economic, social, political, and family affairs, including property title ownership and land administration.',
    trap: 'Restricting equality to narrow domestic matters.'
  }
];

// Unit 4: Justice
g7Cit.units[3].subtopics[0].amtQuiz = [
  {
    q: 'Which dimension of justice focuses on the fair, equitable, and transparent distribution of a society’s wealth, public services, and infrastructure benefits?',
    options: ['Corrective Justice', 'Distributive Justice', 'Procedural Justice', 'Retributive Justice'],
    correct: 1,
    strategy: 'Distributive = fair distribution of social goods and services.',
    derivation: 'Distributive justice ensures that public benefits (schools, hospitals, clean water, roads, electricity) and burdens (taxes) are allocated equitably across all regions and social groups.',
    trap: 'Confusing distributive justice with corrective justice (which remedies civil wrongs or crimes).'
  },
  {
    q: 'What is the primary objective of "Corrective Justice" in the legal system?',
    options: [
      'Building new irrigation canals across farmland',
      'Restoring balance and providing remedy or compensation to a victim who has suffered harm or property loss',
      'Drafting new commercial trade treaties with neighboring nations',
      'Administering national census questionnaires'
    ],
    correct: 1,
    strategy: 'Corrective = rectifying wrongs and restoring fairness.',
    derivation: 'Corrective justice seeks to undo a wrong by holding the wrongdoer liable to repair damage or pay restitution to the victim.',
    trap: 'Confusing corrective justice with national infrastructure.'
  },
  {
    q: 'Procedural justice requires that judicial and administrative decisions must be:',
    options: [
      'Decided in total secrecy without informing the defendant',
      'Conducted through transparent, fair, unbiased, and lawful due process',
      'Determined strictly by the highest bidder in auction',
      'Delayed indefinitely for many years'
    ],
    correct: 1,
    strategy: 'Procedural justice is about fair and unbiased process (due process).',
    derivation: 'Procedural justice ensures fair hearings, the right to legal counsel, prompt trials, and an impartial judge.',
    trap: 'Selecting secret trials or arbitrary delays.'
  }
];

// Unit 5: Patriotism
g7Cit.units[4].subtopics[0].amtQuiz = [
  {
    q: 'What is the core distinction between genuine constitutional patriotism and destructive chauvinism?',
    options: [
      'Constitutional patriotism is love of one’s country combined with respect for human rights, diversity, and other nations, whereas chauvinism is aggressive superiority and hatred of others',
      'Patriotism means refusing to pay taxes to the government',
      'Chauvinism means preserving historical museums and national parks',
      'There is no difference between patriotism and chauvinism'
    ],
    correct: 0,
    strategy: 'Patriotism respects diversity and human rights; chauvinism is narrow and hateful.',
    derivation: 'True patriotism is rooted in defending common constitutional values, national sovereignty, and social welfare while celebrating ethnic diversity and cooperating internationally.',
    trap: 'Equating narrow aggressive chauvinism with true patriotism.'
  },
  {
    q: 'Which of the following is an active, practical expression of patriotism by a Grade 7 student in Ethiopia?',
    options: [
      'Spreading unverified rumors that cause ethnic hatred on social media',
      'Studying diligently, protecting public school property, and participating in environmental tree planting',
      'Refusing to sing the national anthem at morning school assemblies',
      'Defacing historical monuments with graffiti'
    ],
    correct: 1,
    strategy: 'Civic diligence, caring for public property, and environmental stewardship are patriotic duties.',
    derivation: 'Patriotism is demonstrated in daily life by pursuing educational excellence, respecting the national flag, protecting public infrastructure, and serving the community.',
    trap: 'Assuming patriotism is only military combat.'
  },
  {
    q: 'In the national flag of Ethiopia, what do the three horizontal colors (Green, Yellow, Red) and the central emblem traditionally symbolize?',
    options: [
      'Green represents agriculture, fertility, and hope; Yellow represents peace, justice, and natural wealth; Red represents sacrifice, valor, and freedom',
      'Green represents ice; Yellow represents gold mining only; Red represents fire',
      'The colors have no symbolic meaning and were chosen randomly',
      'They represent foreign colonial trading companies'
    ],
    correct: 0,
    strategy: 'Green = labor/fertility; Yellow = hope/justice/peace; Red = sacrifice for freedom.',
    derivation: 'The Ethiopian national tricolor has deep historical symbolism: Green for the fertile land and harvest; Yellow for hope, peace, and religious freedom; Red for the blood shed by ancestors defending national sovereignty. The central star emblem symbolizes the unity and equality of all nations, nationalities, and peoples.',
    trap: 'Confusing traditional Ethiopian flag symbolism with foreign symbols.'
  }
];

// Unit 6: Responsibility
g7Cit.units[5].subtopics[0].amtQuiz = [
  {
    q: 'Why is the timely and honest payment of taxes considered one of the highest civic responsibilities of every citizen?',
    options: [
      'Taxes fund essential public services: public schools, referral hospitals, roads, electrical grids, and national security',
      'Taxes are used solely for the private entertainment of civil servants',
      'Tax payment is completely optional and has no impact on society',
      'Taxes are paid to foreign multinational corporations'
    ],
    correct: 0,
    strategy: 'Taxes finance public goods and infrastructure that benefit all citizens.',
    derivation: 'Without tax revenues, the state cannot maintain hospitals, pave highways, build dams (GERD), fund universities, or pay teachers and defense forces.',
    trap: 'Believing tax evasion does not harm national development.'
  },
  {
    q: 'What is a citizen’s civic responsibility when they witness an act of public property vandalism or corruption in their neighborhood?',
    options: [
      'Join in the vandalism to avoid being noticed',
      'Report the unlawful act promptly to appropriate community leaders or law enforcement authorities',
      'Ignore it because public property belongs to nobody',
      'Post false claims on the internet to mislead the police'
    ],
    correct: 1,
    strategy: 'Civic responsibility entails protecting public property and reporting crime.',
    derivation: 'Public property is funded by taxpayers for the common good. Citizens have a constitutional and moral duty to protect public infrastructure from vandalism and waste.',
    trap: 'Thinking "public property" means nobody owns or cares for it.'
  },
  {
    q: 'Which of the following is a direct individual responsibility for environmental preservation?',
    options: [
      'Dumping plastic bags into urban drainage ditches',
      'Practicing water conservation, planting trees, and disposing of household waste properly',
      'Cutting down highland indigenous forests for quick charcoal profit',
      'Burning toxic rubber tires near residential homes'
    ],
    correct: 1,
    strategy: 'Environmental responsibility involves conservation, proper disposal, and tree planting.',
    derivation: 'Individual environmental responsibility directly prevents flooding, topsoil loss, and air/water pollution.',
    trap: 'Assuming environmental protection is only the job of government agencies.'
  }
];

// Unit 7: Industriousness
g7Cit.units[6].subtopics[0].amtQuiz = [
  {
    q: 'What is meant by the ethical principle "Dignity of Labor"?',
    options: [
      'Only high-paying office jobs in air-conditioned buildings are honorable',
      'All legitimate, productive work—whether manual farming, street sweeping, carpentry, or engineering—deserves equal respect and honor',
      'Laborers should work without any wages or rest',
      'Physical labor is disgraceful and should be avoided by educated people'
    ],
    correct: 1,
    strategy: 'Dignity of labor honors all honest, lawful work.',
    derivation: 'The textbook emphasizes that every lawful profession contributes to national development. Belittling manual labor or farming harms national productivity.',
    trap: 'Looking down upon manual agricultural or sanitation work.'
  },
  {
    q: 'How does effective time management enhance a student’s industriousness and academic success?',
    options: [
      'By prioritizing important study tasks, eliminating procrastination, and allocating balanced time for rest and revision',
      'By studying 24 hours continuously without sleeping',
      'By leaving all homework assignments until the final minute before class',
      'By avoiding textbooks until the day of national exams'
    ],
    correct: 0,
    strategy: 'Time management avoids procrastination and structures balanced study habits.',
    derivation: 'Industriousness is not just working hard, but working smart through organized scheduling, punctuality, and self-discipline.',
    trap: 'Confusing industriousness with unhealthy sleep deprivation.'
  },
  {
    q: 'What is the primary socio-economic consequence of widespread laziness, dependency syndrome, and avoidance of productive work in a society?',
    options: [
      'Rapid technological innovation and high national savings',
      'Persistent poverty, low agricultural yields, economic backwardness, and national vulnerability',
      'Immediate eradication of all foreign debt',
      'Doubling of national industrial manufacturing'
    ],
    correct: 1,
    strategy: 'Laziness and dependency perpetuate poverty and underdevelopment.',
    derivation: 'National wealth is generated through collective human labor. Dependency on handouts cripples self-reliance and traps communities in poverty.',
    trap: 'Assuming a nation can develop without hard work.'
  }
];

// Unit 8: Self-Reliance
g7Cit.units[7].subtopics[0].amtQuiz = [
  {
    q: 'Why is the construction of the Grand Ethiopian Renaissance Dam (GERD) considered a monument of national self-reliance in modern Ethiopian history?',
    options: [
      'It was financed entirely by the contributions and bonds of Ethiopian citizens at home and abroad rather than conditional foreign loans',
      'It was built in secret without notifying the public',
      'It produces zero electricity and functions only as a museum',
      'It was planned and designed exclusively by foreign colonial powers'
    ],
    correct: 0,
    strategy: 'GERD is self-financed by the Ethiopian people.',
    derivation: 'When foreign international financiers refused loans, the people and government of Ethiopia mobilized domestic bonds, monthly salary contributions, and diaspora support to self-finance this mega-hydroelectric dam.',
    trap: 'Assuming GERD was funded by foreign aid agencies.'
  },
  {
    q: 'What is the psychological relationship between self-confidence and personal self-reliance?',
    options: [
      'Self-reliance requires citizens to rely on lucky charms and superstition',
      'Self-confidence enables an individual to trust their abilities, solve daily challenges independently, and avoid harmful dependency on others',
      'Self-reliance means cutting off all communication with family and friends',
      'Self-confidence makes cooperation and teamwork impossible'
    ],
    correct: 1,
    strategy: 'Self-confidence empowers independent action and problem solving.',
    derivation: 'Self-reliance is built on personal self-efficacy: believing in your capacity to work, learn, and overcome obstacles without becoming an unnecessary burden on society.',
    trap: 'Confusing self-reliance with anti-social isolation.'
  },
  {
    q: 'At the community level, how does self-reliance strengthen local development in rural kebeles?',
    options: [
      'Communities organize their own labor and resources to build feeder roads, clinics, and potable water points rather than waiting passively for outside aid',
      'Communities refuse to use modern agricultural tools or fertilizers',
      'Villagers sell off all farmland to foreign speculative corporations',
      'Kebeles eliminate all primary schools to save money'
    ],
    correct: 0,
    strategy: 'Community self-reliance mobilizes local resources for communal infrastructure.',
    derivation: 'Self-reliant communities actively identify needs, mobilize voluntary labor (Debo / Wenfel), and construct local amenities without passive dependency.',
    trap: 'Assuming self-reliance rejects modern technology.'
  }
];

// Unit 9: Saving
g7Cit.units[8].subtopics[0].amtQuiz = [
  {
    q: 'What is the traditional Ethiopian rotating savings and credit association called, where members contribute fixed sums periodically and pool funds for one member at a time?',
    options: ['Edir', 'Equb', 'Debo', 'Gadaa'],
    correct: 1,
    strategy: 'Equb is the traditional rotating savings system; Edir is the burial/emergency mutual aid system.',
    derivation: 'Equb is an indigenous rotating financial association that fosters personal saving, capital accumulation for small business, and community trust. Edir is a mutual welfare association for funerals and grief support.',
    trap: 'Confusing Equb (savings/credit) with Edir (funeral/mutual aid insurance).'
  },
  {
    q: 'Why is keeping personal savings in a formal bank account far superior to storing cash hidden under a mattress at home?',
    options: [
      'Bank savings earn interest, are secure against fire and theft, and circulate into national economic investment loans',
      'Cash hidden under a mattress automatically multiplies its value during inflation',
      'Banks charge 90% of the money as a storage fee each month',
      'There is no difference between a bank and a mattress'
    ],
    correct: 0,
    strategy: 'Banks provide security, interest, and credit mobilization.',
    derivation: 'Banking deposits are protected from burglary and house fires, earn compound interest, and allow financial institutions to lend capital to farmers and entrepreneurs.',
    trap: 'Fearing formal banking institutions without cause.'
  },
  {
    q: 'What is the danger of extravagant expenditure (spending excessively on lavish feasts and social rivalries) on family welfare?',
    options: [
      'It immediately elevates family income permanently',
      'It depletes savings, plunges households into high-interest debt, and prevents investments in children’s education and health',
      'It guarantees national food security during drought years',
      'It reduces inflation across the country'
    ],
    correct: 1,
    strategy: 'Extravagance drains household capital and causes debt.',
    derivation: 'Extravagant spending on weddings, memorial feasts, or prestige purchases leaves families vulnerable to medical emergencies, school fee deficits, and poverty.',
    trap: 'Confusing wasteful spending with cultural generosity.'
  }
];

// Unit 10: Active Community Participation
g7Cit.units[9].subtopics[0].amtQuiz = [
  {
    q: 'What is the traditional Ethiopian community mutual aid institution that provides social, psychological, and financial support to families during bereavement and funerals?',
    options: ['Equb', 'Edir', 'Senbete', 'Mahber'],
    correct: 1,
    strategy: 'Edir is the customary mutual assistance association for mourning and burials.',
    derivation: 'Edir is an indigenous non-governmental mutual assistance association whose members support one another during funerals, illnesses, and crises with burial labor, tents, and funds.',
    trap: 'Confusing Edir with Equb (which is for financial savings).'
  },
  {
    q: 'How does voluntary community service (such as tutoring younger children or cleaning public spaces) benefit youth in their personal growth?',
    options: [
      'It wastes study time that could be spent playing video games',
      'It fosters civic leadership skills, empathy, social solidarity, and practical problem-solving capabilities',
      'It guarantees immediate political office at age 14',
      'It replaces the need to attend formal secondary school'
    ],
    correct: 1,
    strategy: 'Voluntary civic participation builds leadership, empathy, and social cohesion.',
    derivation: 'Community participation connects youth to their society, instills civic responsibility, and trains future ethical leaders.',
    trap: 'Viewing volunteerism as useless unpaid labor.'
  },
  {
    q: 'When citizens actively participate in local kebele meetings and development committees, what happens to local governance?',
    options: [
      'Public decisions become more transparent, corruption decreases, and public projects reflect the true needs of the community',
      'The government ceases to exist',
      'Taxes immediately increase tenfold without explanation',
      'Only foreign tourists are allowed to speak'
    ],
    correct: 0,
    strategy: 'Citizen participation increases transparency and accountability.',
    derivation: 'Participatory democracy ensures that local administrators remain accountable to the community, reducing bribery and improving project delivery.',
    trap: 'Thinking ordinary citizens have no role in local administration.'
  }
];

// Unit 11: The Pursuit of Wisdom
g7Cit.units[10].subtopics[0].amtQuiz = [
  {
    q: 'What is the fundamental intellectual difference between raw "Information" and genuine "Wisdom"?',
    options: [
      'Information is an unorganized collection of facts and data, whereas wisdom is the deep ability to critically evaluate knowledge and apply it ethically in real life',
      'Information is only found in libraries, while wisdom is bought at the market',
      'Wisdom is simply memorizing long dictionaries without understanding',
      'There is no difference; information and wisdom are identical synonyms'
    ],
    correct: 0,
    strategy: 'Information is raw data; Wisdom is knowledge applied with ethical discernment.',
    derivation: 'Anyone can memorize facts (information). Wisdom requires critical thinking, moral judgment, empathy, and the ability to make righteous, constructive choices.',
    trap: 'Confusing rote memorization with wisdom.'
  },
  {
    q: 'How does developing a consistent daily reading culture empower a student throughout their lifetime?',
    options: [
      'It exposes them to diverse perspectives, expands vocabulary, sharpens analytical reasoning, and fuels scientific curiosity',
      'It causes their vision to permanently degrade within a few weeks',
      'It guarantees they will never need to listen to teachers again',
      'It prevents them from learning any practical life skills'
    ],
    correct: 0,
    strategy: 'Reading cultivates critical reasoning and knowledge breadth.',
    derivation: 'Reading is the foundational gateway to lifelong learning. It builds cognitive depth, analytical rigor, and creative problem-solving.',
    trap: 'Believing that reading books is obsolete in the digital era.'
  },
  {
    q: 'Why is scientific inquiry and critical thinking essential for rejecting superstition, harmful traditional practices, and digital misinformation?',
    options: [
      'Critical thinking demands empirical evidence, logical consistency, and fact-checking before accepting claims as true',
      'Scientific inquiry requires believing every message posted on social media platforms',
      'Critical thinking teaches students to reject all ancestral wisdom without consideration',
      'Science relies solely on emotional intuition'
    ],
    correct: 0,
    strategy: 'Critical thinking verifies claims using evidence and logic.',
    derivation: 'Wisdom demands questioning claims, verifying sources, and relying on verified science rather than blind prejudice or online rumors.',
    trap: 'Accepting online rumors as factual truth.'
  }
];

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g7_citizenship.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g7Cit, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g7_citizenship.js with 3 questions per unit (total 33 questions)!');
