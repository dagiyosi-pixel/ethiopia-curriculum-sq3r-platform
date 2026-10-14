const fs = require('fs');
const path = require('path');

const g8Cit = require('../src/curriculum/g8_citizenship.js');

// Unit 1: Democratic Culture & Constitutional Governance (3 questions)
g8Cit.units[0].subtopics[0].amtQuiz = [
  {
    q: 'Under the Ethiopian constitutional framework, who exercises the highest executive authority of the federal government?',
    options: ['The Prime Minister', 'The President of the Republic', 'The Speaker of the House', 'The Chief Justice of the Supreme Court'],
    correct: 0,
    strategy: 'Ethiopia is a parliamentary republic where the head of government is the Prime Minister.',
    derivation: 'Under Articles 72 and 73 of the FDRE Constitution, the Prime Minister is the Chief Executive and Commander-in-Chief of the armed forces.',
    trap: 'The President is the ceremonial Head of State, while executive power resides with the Prime Minister!'
  },
  {
    q: 'In Ethiopia’s bicameral parliament, which specific constitutional body has the final power of constitutional interpretation and resolution of inter-regional disputes?',
    options: ['The Federal Supreme Court', 'The House of Federation (HoF)', 'The Council of Ministers', 'The Federal Police Commission'],
    correct: 1,
    strategy: 'Article 62 grants constitutional interpretation to the House of Federation.',
    derivation: 'Unlike the United States where the Supreme Court interprets the constitution, in Ethiopia, Article 62 grants this authority to the House of Federation (assisted by the Council of Constitutional Inquiry).',
    trap: 'Assuming the Supreme Court interprets the Constitution in Ethiopia.'
  },
  {
    q: 'What is the primary function of constitutional "Checks and Balances" between state branches?',
    options: [
      'To enable one branch to eliminate the other two branches completely',
      'To prevent any single branch from accumulating unchecked dictatorial power by giving each branch oversight authority over the others',
      'To double the salaries of all parliamentarians every month',
      'To speed up trials by skipping evidence hearings'
    ],
    correct: 1,
    strategy: 'Checks and balances prevent tyranny and abuse of power.',
    derivation: 'Checks and balances (Montesquieu doctrine) ensure that the Legislature, Executive, and Judiciary have mutual oversight, preventing autocracy.',
    trap: 'Confusing checks and balances with judicial elimination of parliament.'
  }
];

// Unit 2: The Rule of Law & Institutional Integrity (3 questions)
g8Cit.units[1].subtopics[0].amtQuiz = [
  {
    q: 'What does the constitutional concept "Supremacy of Law" imply regarding government power?',
    options: [
      'The government can suspend all human rights whenever officials desire',
      'State power must be exercised strictly within the boundaries of statutory law and the Constitution, and no government agency is above the law',
      'Police officers make their own personal laws on the street',
      'Judges must obey the commands of political party officials'
    ],
    correct: 1,
    strategy: 'Supremacy of law subordinates all state organs to the law.',
    derivation: 'The Rule of Law requires that government authority is legally constrained, predictable, and transparent, shielding citizens from arbitrary state coercion.',
    trap: 'Assuming governments are immune to legal restrictions.'
  },
  {
    q: 'Why is the institutional independence of the Ethiopian Human Rights Commission (EHRC) vital for democratic integrity?',
    options: [
      'It investigates human rights abuses and holds state institutions accountable without political interference',
      'It acts as the commercial banking regulator for foreign currency exchange',
      'It commands the federal defense forces during wartime',
      'It collects municipal property taxes from urban residents'
    ],
    correct: 0,
    strategy: 'Human rights oversight requires independent monitoring of government conduct.',
    derivation: 'Independent national human rights institutions monitor prisons, investigate allegations of arbitrary arrests or torture, and publish public reports to uphold constitutional rights.',
    trap: 'Confusing the Human Rights Commission with banking or tax agencies.'
  },
  {
    q: 'What legal principle guarantees that an accused person must be treated as innocent until proven guilty in a lawful court of law?',
    options: ['Presumption of Innocence', 'Habeas Corpus Exception', 'Double Jeopardy', 'Ex Post Facto Law'],
    correct: 0,
    strategy: 'Presumption of innocence is a fundamental constitutional fair trial right.',
    derivation: 'Under Article 20(3) of the FDRE Constitution, all persons charged with an offense have the right to be presumed innocent until proven guilty according to law.',
    trap: 'Assuming an arrested person is automatically guilty.'
  }
];

// Unit 3: Justice, Equity & Human Dignity (3 questions)
g8Cit.units[2].subtopics[0].amtQuiz = [
  {
    q: 'How does equity differ from simple equality in social justice policy?',
    options: [
      'Equality gives everyone the exact same resource regardless of need, while equity provides resources based on specific needs to achieve genuinely fair outcomes',
      'Equity means taking away all resources from everyone',
      'Equality only applies to businesses, while equity applies to sports',
      'There is no difference; equity and equality are identical terms'
    ],
    correct: 0,
    strategy: 'Equality = same treatment; Equity = fair treatment tailored to needs.',
    derivation: 'Giving every school the same textbook budget is equality. Giving additional funding and resources to historically disadvantaged pastoralist schools to bridge historical gaps is equity.',
    trap: 'Thinking equity means giving everyone identical treatment regardless of disadvantage.'
  },
  {
    q: 'Under international human rights law and the Ethiopian Constitution, human dignity is classified as:',
    options: [
      'An earned privilege granted only to wealthy property owners',
      'An inherent, inalienable right possessed by every human being simply by virtue of being human',
      'A temporary right that expires at age 65',
      'A certificate awarded only upon university graduation'
    ],
    correct: 1,
    strategy: 'Human dignity is inherent and inalienable.',
    derivation: 'Article 24 of the FDRE Constitution asserts: Everyone has the right to respect for their human dignity and reputation. It cannot be revoked by government.',
    trap: 'Viewing dignity as an earned privilege rather than an innate birthright.'
  },
  {
    q: 'What is the role of legal aid centers in promoting procedural justice for indigent (poor) citizens in Ethiopia?',
    options: [
      'They provide free legal defense representation so poverty does not deprive citizens of fair court hearings',
      'They issue business trade licenses for import companies',
      'They determine agricultural fertilizer market prices',
      'They collect court fines on behalf of traffic police'
    ],
    correct: 0,
    strategy: 'Legal aid ensures access to justice regardless of income.',
    derivation: 'Article 20 guarantees the right to legal representation. University legal aid clinics and public defenders ensure that low-income citizens receive legal counsel in criminal cases.',
    trap: 'Assuming legal aid is a commercial loan service.'
  }
];

// Unit 4: Patriotism, Civic Bravery & Sovereignty (3 questions)
g8Cit.units[3].subtopics[0].amtQuiz = [
  {
    q: 'What is "Civic Courage" and how does it strengthen a democratic society?',
    options: [
      'Physical aggression against political opponents during debates',
      'The moral bravery to speak truth to power, oppose corruption, and defend constitutional rights even when facing social pressure or personal risk',
      'Blind obedience to any order given by superior officials',
      'Refusing to participate in any community gatherings'
    ],
    correct: 1,
    strategy: 'Civic courage is moral fortitude in defending justice and truth.',
    derivation: 'Civic courage involves standing up for victims of injustice, whistleblowing against embezzlement of public funds, and peacefully defending democratic norms.',
    trap: 'Confusing civic courage with violent intimidation.'
  },
  {
    q: 'Why is whistleblowing (reporting secret corruption or public safety hazards within an institution) a vital patriotic duty?',
    options: [
      'It sabotages the economy to help foreign competitors',
      'It exposes illicit financial theft and protects public funds, ensuring that state resources serve the public interest',
      'It guarantees immediate financial wealth for the whistleblower',
      'It slows down public administration unnecessarily'
    ],
    correct: 1,
    strategy: 'Whistleblowing protects public resources from illicit theft.',
    derivation: 'Whistleblowers protect taxpayers by revealing bribery, fraud, and environmental contamination that would otherwise remain concealed.',
    trap: 'Viewing whistleblowers as traitors rather than protectors of public integrity.'
  },
  {
    q: 'How do historical Ethiopian national symbols (such as patriotic monuments and the national anthem) foster unity across diverse ethnic groups?',
    options: [
      'By reminding all citizens of their shared historical sacrifices for independence and common destiny under the Constitution',
      'By promoting the cultural dominance of one specific dialect',
      'By preventing international scientific exchange',
      'By eliminating regional state borders'
    ],
    correct: 0,
    strategy: 'National symbols reflect shared anti-colonial resilience and common destiny.',
    derivation: 'Symbols like the Victory of Adwa and the national anthem unite all Ethiopians around shared values of sovereignty, anti-colonial courage, and mutual respect.',
    trap: 'Assuming national symbols negate regional diversity.'
  }
];

// Unit 5: Digital Citizenship & Media Responsibility (3 questions)
g8Cit.units[4].subtopics[0].amtQuiz = [
  {
    q: 'What is the critical distinction between "Misinformation" and "Disinformation" on social media platforms?',
    options: [
      'Misinformation is false information shared without harmful intent, whereas disinformation is deliberately fabricated falsehood spread intentionally to deceive, manipulate, or incite conflict',
      'Misinformation only spreads through television, while disinformation only spreads through newspapers',
      'Disinformation is always legally true, while misinformation is always scientific',
      'There is no distinction; they are identical terms'
    ],
    correct: 0,
    strategy: 'Intent to deceive defines disinformation.',
    derivation: 'Misinformation is erroneous information shared mistakenly (e.g. sharing an outdated photo). Disinformation is weaponized propaganda created maliciously to deceive or incite panic.',
    trap: 'Failing to recognize malicious intent in disinformation.'
  },
  {
    q: 'What practical digital hygiene habit should every student practice before resharing provocative breaking news on messaging apps (Telegram, Facebook)?',
    options: [
      'Immediately forward it to 50 group chats to be first with the news',
      'Check credible news sources, verify image authenticity via reverse image search, and evaluate whether the post aims to provoke emotional outrage',
      'Believe all posts that have dramatic exclamation marks and fire emojis',
      'Assume that all internet posts are verified by international courts'
    ],
    correct: 1,
    strategy: 'Verify sources and fact-check before amplifying viral claims.',
    derivation: 'Responsible digital citizenship requires fact-checking claims, examining reputable journalistic outlets, and refusing to amplify viral emotional bait.',
    trap: 'Sharing unverified claims based on emotional shock.'
  },
  {
    q: 'What constitutes "Cyberbullying" and why is it legally prohibited?',
    options: [
      'Playing educational online math quizzes with classmates',
      'Using digital platforms (messaging, social media) to harass, humiliate, threaten, or defame individuals, causing severe psychological harm',
      'Sending email attachments containing class lecture slides',
      'Updating a computer operating system with security patches'
    ],
    correct: 1,
    strategy: 'Cyberbullying is digital harassment and defamation.',
    derivation: 'Cyberbullying violates personal dignity, privacy, and psychological well-being, and is criminalized under computer crime proclamations.',
    trap: 'Dismissing cyberbullying as harmless online jokes.'
  }
];

// Unit 6: Work Ethics, Self-Reliance & Development (3 questions)
g8Cit.units[5].subtopics[0].amtQuiz = [
  {
    q: 'What are the core characteristics of professional work ethics in modern public and private service?',
    options: [
      'Arriving late, demanding bribes for services, and skipping appointments',
      'Punctuality, honesty, accountability, dedication to quality, and fair treatment of all clients without discrimination',
      'Taking state property home for private business use',
      'Working only when supervisors are physically watching'
    ],
    correct: 1,
    strategy: 'Integrity, punctuality, and client dedication define professional ethics.',
    derivation: 'Work ethics ensure high economic productivity, trust in public services, and eradication of corrupt rent-seeking behaviors.',
    trap: 'Confusing work ethics with mere presence at the office.'
  },
  {
    q: 'How does personal financial saving contribute directly to national macroeconomic capital development?',
    options: [
      'Money deposited into bank savings is mobilized by banks to fund loans for factories, farming machinery, and public infrastructure',
      'Saving money slows down the entire national economy to a complete stop',
      'Banks hide all savings in underground vaults without circulating capital',
      'Saving money causes national currency to lose all value'
    ],
    correct: 0,
    strategy: 'Savings mobilize domestic investment capital.',
    derivation: 'Individual savings create banking liquidity. Banks lend these pooled domestic deposits to entrepreneurs and industries, building national wealth without foreign debt.',
    trap: 'Thinking savings are idle funds.'
  },
  {
    q: 'What does "National Self-Reliance" mean for a developing country like Ethiopia in the global economy?',
    options: [
      'Cutting off all international trade, air travel, and diplomatic relations',
      'Maximizing domestic production of food, energy, and manufactured goods to ensure national independence while engaging in balanced international partnerships',
      'Relying entirely on unconditional foreign food aid donations forever',
      'Refusing to export agricultural coffee or minerals'
    ],
    correct: 1,
    strategy: 'Self-reliance is domestic capacity and independence, not autarkic isolation.',
    derivation: 'Self-reliance means building internal agricultural sovereignty, energy independence (hydro/geothermal), and skilled human capital so the nation can negotiate as an equal on the global stage.',
    trap: 'Confusing self-reliance with extreme isolationism (autarky).'
  }
];

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_citizenship.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8Cit, null, 2) + ';\n', 'utf8');
console.log('Successfully enriched g8_citizenship.js with 3 questions per unit (total 18 questions)!');
