const fs = require('fs');
const path = require('path');

console.log('Generating Complete Grade 8 Citizenship Education with all 6 Units and 12 Subtopics...');

const units = [
  {
    num: 1, title: 'Democratic Culture & Constitutional Governance', bigIdea: 'Analyze democratic values, federalism, separation of powers, and checks and balances.',
    subs: [
      { code: '1.1', title: 'Principles of Democratic Culture, Pluralism & Federalism',
        bp: 'Democratic Culture: Deeply ingrained attitudes, values, and practices supporting democratic governance, tolerance of opposing views, consensus building, and peaceful transition of power. Pluralism: Recognition and affirmation of diversity in political, cultural, and religious spheres. Federalism in Ethiopia: Dual sovereignty between the Federal Government and Regional States (Articles 50-52).',
        objs: ['Define democratic culture and political pluralism.', 'Explain the constitutional division of powers between federal and regional governments in Ethiopia.'],
        kf: 'Federalism = Shared Rule (Federal Government for national defense, foreign affairs, currency) + Self Rule (Regional States for education, policing, agriculture)',
        q1: 'Why is tolerance of differing viewpoints the foundation of a stable democratic culture?', q2: 'What powers belong exclusively to the Federal Government under the FDRE Constitution?'
      },
      { code: '1.2', title: 'Separation of Powers & The System of Checks and Balances',
        bp: 'The Trias Politica (Montesquieu): 1) Legislative Branch (House of Peoples’ Representatives & House of Federation) makes laws. 2) Executive Branch (Prime Minister and Council of Ministers) enforces and administers laws. 3) Judicial Branch (Federal Supreme Court and lower courts) interprets laws and adjudicates disputes. Checks and balances prevent dictatorship and concentration of power.',
        objs: ['Identify the three branches of government and their distinct constitutional mandates.', 'Explain how the system of checks and balances prevents tyranny and abuse of authority.'],
        kf: 'Trias Politica: Legislative (Enacts Laws) | Executive (Enforces Laws) | Judicial (Interprets Laws & Protects Constitution)',
        q1: 'Why must no single branch of government hold unchecked authority?', q2: 'How does the House of Peoples’ Representatives check the executive branch?'
      }
    ]
  },
  {
    num: 2, title: 'The Rule of Law & Institutional Integrity', bigIdea: 'Examine constitutional supremacy, due process, institutional accountability, and anti-corruption frameworks.',
    subs: [
      { code: '2.1', title: 'Constitutional Supremacy, Due Process & Equal Protection',
        bp: 'Constitutional Supremacy: The constitution is the ultimate legal benchmark; no decree or custom can override it. Due Process of Law: Fair treatment through the normal judicial system, especially as a citizen’s entitlement (speedy public trial, legal defense, right against self-incrimination, protection from unlawful search and seizure).',
        objs: ['Explain the legal mechanics of constitutional supremacy.', 'Identify fundamental due process rights guaranteed to arrested persons in Ethiopia.'],
        kf: 'Due Process = Notice + Opportunity to be Heard + Impartial Tribunal + Burden of Proof on Prosecution',
        q1: 'Why does Article 19 of the FDRE Constitution require arrested persons to be brought before a court within 48 hours?', q2: 'What does the right against self-incrimination protect?'
      },
      { code: '2.2', title: 'Institutional Accountability, Transparency & Combating Abuse of Power',
        bp: 'Public Integrity: Transparency (openness of public operations) + Accountability (officials answering to citizens for their performance and use of public funds). Institutions of accountability: Ethiopian Human Rights Commission (EHRC), Institution of the Ombudsman, Federal Ethics and Anti-Corruption Commission (FEACC), Auditor General.',
        objs: ['Define public accountability and administrative transparency.', 'Describe the specific mandates of the Ethiopian Human Rights Commission and Ombudsman.'],
        kf: 'Accountability = Obligation to explain actions, submit to audits, and face sanctions for misconduct',
        q1: 'What is the role of the Institution of the Ombudsman in resolving citizen grievances against bureaucratic injustice?', q2: 'How does government transparency deter corruption?'
      }
    ]
  },
  {
    num: 3, title: 'Justice, Equity & Human Dignity', bigIdea: 'Examine social justice, human dignity, access to courts, and legal redress.',
    subs: [
      { code: '3.1', title: 'Social Justice, Human Dignity & Equal Economic Opportunity',
        bp: 'Social Justice: Fair distribution of opportunities, wealth, privileges, and social safety nets. Inviolable Human Dignity (Article 24): Every human being possesses intrinsic value that cannot be degraded. Equal economic opportunity: Non-discrimination in commerce, credit, employment, and land access.',
        objs: ['Define social justice and explain its relevance to reducing poverty.', 'Explain the constitutional concept of inviolable human dignity.'],
        kf: 'Social Justice = Equal Opportunity + Fair Resource Distribution + Protection of the Vulnerable',
        q1: 'Why is human dignity described as an inviolable inalienable right in Article 24?', q2: 'How does social justice combat extreme socioeconomic polarization?'
      },
      { code: '3.2', title: 'Judicial Independence, Fair Hearing & Legal Redress',
        bp: 'Access to Justice (Article 37): Every person has the right to bring a justifiable matter to a court of law. Judicial Independence: Courts free from political interference. Legal Redress: The right to obtain compensation, restoration, or correction when rights are violated. Public Defender system for indigent defendants.',
        objs: ['Explain Article 37 (Right of Access to Justice).', 'Explain why free legal aid is essential for low-income citizens accused of serious crimes.'],
        kf: 'Article 37 = Right of access to justice before an independent and impartial court',
        q1: 'Why is access to justice hollow if poor citizens cannot afford legal representation?', q2: 'What forms of legal redress can a court award to a victim of wrongful detention?'
      }
    ]
  },
  {
    num: 4, title: 'Patriotism, Civic Bravery & Sovereignty', bigIdea: 'Analyze national sovereignty, unity in diversity, the heritage of Adwa, and civic courage in defense of freedom.',
    subs: [
      { code: '4.1', title: 'Defending National Sovereignty & Unity in Diversity',
        bp: 'National Sovereignty: The supreme, independent authority of a state over its territory and domestic affairs free from external dictate. Unity in Diversity: Ethiopia’s strength derives from the peaceful coexistence, mutual respect, and shared destiny of its multi-ethnic, multi-lingual society. Rejecting ethnic division and foreign interference.',
        objs: ['Define state sovereignty and non-intervention in international law.', 'Explain how Ethiopia’s ethnic and cultural diversity serves as an asset rather than a liability.'],
        kf: 'Sovereignty = Territorial Integrity + Political Independence + Self-Determination',
        q1: 'Why is national sovereignty essential for an African country’s self-determined development?', q2: 'How does unity in diversity strengthen national resilience?'
      },
      { code: '4.2', title: 'Ethiopian Patriotism: Adwa Heritage, Civic Bravery & Service',
        bp: 'Historical Legacy of Patriotism: The Battle of Adwa (1896) as the defining symbol of Ethiopian unity, courage, and defiance against colonial subjugation. Civic Bravery: Standing up for justice, defending truth, protecting national assets, and sacrificing personal comfort for community welfare. Modern patriotism in science, athletics, education, and development.',
        objs: ['Explain the historical roots of Ethiopian patriotic resilience.', 'Distinguish military heroism from peacetime civic bravery (whistleblowing, public service, scientific innovation).'],
        kf: 'Modern Patriotism = Civic integrity + Scientific excellence + Hard work + Safeguarding sovereignty',
        q1: 'How do Ethiopian athletes like Abebe Bikila, Haile Gebrselassie, and Derartu Tulu embody modern patriotism?', q2: 'What is civic courage, and when is it required of citizens?'
      }
    ]
  },
  {
    num: 5, title: 'Digital Citizenship & Media Responsibility', bigIdea: 'Examine ethical internet behavior, digital safety, cyberbullying, media literacy, and countering misinformation.',
    subs: [
      { code: '5.1', title: 'Ethical Digital Citizenship & Combating Cyberbullying',
        bp: 'Digital Citizenship: The responsible, ethical, and safe use of technology, the internet, and social media. Digital Footprint: The permanent record of one’s online activities. Cyberbullying: Harassment, threats, or humiliation using digital platforms; psychological damage and legal penalties in Ethiopia. Protecting privacy and respecting intellectual property online.',
        objs: ['Define digital citizenship and explain the permanence of a digital footprint.', 'Identify forms and consequences of cyberbullying and online harassment.', 'Apply digital privacy best practices.'],
        kf: 'Golden Digital Rule: Never post or send anything online that you would not say proudly in public to your parents, teachers, and future employers',
        q1: 'Why does your digital footprint impact future university admissions and career opportunities?', q2: 'What legal actions should a student take if targeted by online cyber harassment?'
      },
      { code: '5.2', title: 'Media Literacy, Disinformation & Freedom of Expression',
        bp: 'Freedom of Expression (Article 29): Fundamental right to seek, receive, and impart information. Media Responsibility: Freedom of speech does NOT protect hate speech, incitement to violence, defamation, or fabricated disinformation (fake news). Verification techniques: Checking primary sources, identifying confirmation bias, resisting ethnic hate speech on social media.',
        objs: ['Distinguish freedom of expression from illegal hate speech and dangerous disinformation.', 'Apply verification methods to detect fake news and manipulated media online.'],
        kf: 'Media Literacy = Sift, Verify, Evaluate, Fact-check before sharing any online information',
        q1: 'Why is fabricated disinformation on social media capable of inciting real-world communal violence?', q2: 'What steps can a student take to verify whether an online news alert is authentic?'
      }
    ]
  },
  {
    num: 6, title: 'Work Ethics, Self-Reliance & National Development', bigIdea: 'Examine professional integrity, youth entrepreneurship, innovation, and national economic development.',
    subs: [
      { code: '6.1', title: 'Professional Work Ethics, Integrity & Combating Parasitism',
        bp: 'Work Ethics: Dedication, excellence, honesty, and accountability in any profession. Professional Integrity: Doing the right thing even when no one is watching. Economic Parasitism: Living off the labor of others without contributing; seeking unearned wealth through corruption, scams, or gambling. Dignity of productive labor.',
        objs: ['Define professional integrity and contrast it with opportunism and economic parasitism.', 'Explain how personal work ethics directly determine business competitiveness and national development.'],
        kf: 'Professional Integrity = Honesty + Accountability + High Quality Craftsmanship + Pride in Work',
        q1: 'Why does economic parasitism and corruption drain national capital and demoralize honest workers?', q2: 'What distinguishes an ethical professional from an opportunist?'
      },
      { code: '6.2', title: 'Youth Entrepreneurship, Innovation & National Economic Self-Reliance',
        bp: 'Entrepreneurship: Identifying societal problems and organizing resources to create innovative business solutions. Innovation: Developing new products, processes, or technologies. Micro and Small Enterprises (MSEs): The primary engine of job creation for Ethiopian youth. National Economic Self-Reliance: Building domestic industries (manufacturing, agro-processing, software) to reduce import dependence.',
        objs: ['Define entrepreneurship and explain the qualities of successful young entrepreneurs.', 'Describe the role of Micro and Small Enterprises in Ethiopian urban economic growth.', 'Explain how local manufacturing strengthens national economic self-reliance.'],
        kf: 'Entrepreneurship = Vision + Innovation + Calculated Risk-Taking + Problem Solving',
        q1: 'How do youth startups in agricultural technology and logistics accelerate Ethiopian economic growth?', q2: 'What is the relationship between domestic manufacturing and currency stability?'
      }
    ]
  }
];

const g8Citizenship = {
  id: 'citizenship',
  name: 'Citizenship Education',
  icon: '⚖️',
  units: units.map(u => ({
    id: `g8-cit-u${u.num}`,
    number: `Unit ${u.num}`,
    title: u.title,
    bigIdea: u.bigIdea,
    subtopics: u.subs.map(s => ({
      id: `g8-cit-${s.code}`,
      code: s.code,
      title: s.title,
      survey: {
        blueprint: s.bp,
        objectives: s.objs,
        keyFormulas: s.kf
      },
      questions: [s.q1, s.q2],
      coreNotes: `
        <div class="space-y-4 text-slate-200">
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-amber-400">⚖️ 1. Conceptual Framework: ${s.title}</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${s.bp}</p>
          </div>
          <div class="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <h4 class="text-sm font-bold text-cyan-400">📜 2. Constitutional & Civic Application</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In Ethiopia’s democratic federal framework, understanding ${s.title.toLowerCase()} provides every citizen with the civic competence to defend constitutional rights, resist abuse of authority, and contribute constructively to peace and economic prosperity.
            </p>
          </div>
        </div>
      `,
      example: {
        title: `Worked Example: Real-World Application of ${s.title}`,
        problem: `Analyze how an Ethiopian citizen or community practically applies the principles of ${s.title}.`,
        steps: [
          { label: 'Step 1: Constitutional foundation', text: `Ground action on constitutional principles and fundamental civic duties.` },
          { label: 'Step 2: Practical implementation', text: `Engage with local kebele, courts, community elders, or civic associations using peaceful, lawful methods.` },
          { label: 'Step 3: Outcome for society', text: `Strengthens the rule of law, institutional integrity, and societal harmony.` }
        ],
        proTip: 'Active citizenship transforms theoretical constitutional principles into living democratic reality!'
      },
      reciteFlashcards: [
        { q: `What is the core idea of ${s.title}?`, a: s.kf },
        { q: s.q1, a: 'It establishes accountability, transparency, and protects citizens from arbitrary injustice.' },
        { q: s.q2, a: 'It builds communal trust, protects national sovereignty, and fosters equitable economic progress.' }
      ],
      amtQuiz: [
        {
          q: `Which of the following statements most accurately captures the democratic significance of ${s.title}?`,
          options: [
            `It reinforces constitutional integrity, popular sovereignty, and equitable national development`,
            `It grants unrestricted authority to arbitrary executive decrees`,
            `It abolishes public accountability and court oversight`,
            `It isolates Ethiopia from international cooperation`
          ],
          correct: 0,
          strategy: 'Select the choice that aligns with constitutional democracy and civic responsibility.',
          derivation: `${s.title} is designed specifically to reinforce constitutional governance and civic empowerment.`,
          trap: 'Choosing options that imply autocratic authority or arbitrary power.'
        }
      ]
    }))
  }))
};

const targetPath = path.join(__dirname, '..', 'src', 'curriculum', 'g8_citizenship.js');
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(g8Citizenship, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote complete Grade 8 Citizenship Education with all 6 Units and 12 Subtopics!');
