# ⚡ SQ3R Master Platform • Grade 7 & 8 Ethiopian National Curriculum

> **An expansive, galactic-level web platform & offline-ready app covering the complete Grade 7 & Grade 8 Ethiopian National Curriculum across all subjects.**  
> Built strictly on the evidence-based **SQ3R Study Methodology** (Survey, Question, Read, Recite, Review), featuring **AMT Exam-style hidden derivations**, a **Strict 80% Mastery Gate**, an **Interactive Expedition Roadmap**, and **Zero-Dependency Web Audio & Confetti physics**.

---

<div align="center">

[![Live Web App](https://img.shields.io/badge/Live_App-GitHub_Pages-6366F1?style=for-the-badge&logo=githubpages&logoColor=white)](https://dagiyosi-pixel.github.io/ethiopia-curriculum-sq3r-platform/)
![Curriculum Scope](https://img.shields.io/badge/Scope-76_Units_•_85_Subtopics-10B981?style=for-the-badge&logo=book&logoColor=white)
![Mastery Gate](https://img.shields.io/badge/Progression-Strict_80%25_Mastery_Gate-F59E0B?style=for-the-badge&logo=security&logoColor=black)
![Offline PWA](https://img.shields.io/badge/PWA-100%25_Offline_Ready-06B6D4?style=for-the-badge&logo=pwa&logoColor=white)
![Zero Dependencies](https://img.shields.io/badge/Audio-Synthesized_Web_Audio_API-8B5CF6?style=for-the-badge)

</div>

---

## 🌟 Key Highlights & Engineering Features

### 1. 🌌 100% Exhaustive National Curriculum (Grade 7 & Grade 8)
- **76 Units & 85 Subtopics** covering the official Ethiopian Ministry of Education curriculum without leaving a single topic or subtopic behind:
  - 📐 **Mathematics:** Rational Numbers, Linear Equations & Inequalities, Ratios & Percentages, Data Handling, 2D/3D Geometry, Square/Cube Roots, Sets & Venn Diagrams, Coordinate Slopes, Similar Figures, Circle Theorems, and Probability.
  - 🔬 **General Science:** Scientific Inquiry & SI Units, Cell Theory & Organelles, Human Digestive & Circulatory Systems, Floral Reproduction, Kinetic States of Matter, Chemical Formulas, Earth Tectonics & Rift Systems, Precision & Error Analysis, Atomic Structure & Isotopes, Periodic Trends & Chemical Bonds, Newton's Laws of Motion, Work/Energy/Power, Endocrine & Renal Coordination, and Trophic Energy Pyramids.
  - 📚 **English:** Rural vs Urban Adjectives, Past Simple vs Past Continuous narrative grammar, Countable/Uncountable nutrition nouns, Present Perfect climate structures, Passive Voice craft technology, Road Safety imperatives, First & Second Conditionals, Relative Clauses, Modal Deductions, and Subject-Verb Agreement.
  - 🌍 **Social Studies:** Physical geography of Africa, Nile River basin & African drainage, Continental demography & population pyramids, East Africa as the Cradle of Humankind (Lucy / Dinkenesh), the Kingdom of Axum, the Zagwe Dynasty & Lalibela Rock-Hewn Churches, African Continental Free Trade Area (AfCFTA), Soil Conservation, Global Wind Systems, Industrial Revolution, and the Historic Victory of Adwa (1896).
  - ⚖️ **Citizenship Education:** Principles of Democracy & Constitutional Supremacy, Universal Human & Child Rights, Gender Equality & Affirmative Action, Distributive & Procedural Justice, Democratic Patriotism & National Symbols, Good Governance & Combating Corruption, Separation of Powers, Judicial Independence, Digital Netiquette & Combating Disinformation, and the Dignity of Labor.
  - 💻 **Information Technology:** Foundations of ICT & IPOS Cycle, CPU Architecture & RAM vs ROM memory hierarchy, Operating Systems & File Organization, Word Processing & Table layout, Internet Protocols & Cyber Hygiene, Absolute Cell Referencing ($) & Spreadsheet Functions, Slide Master design, Star/Bus/Ring Network Topologies, Algorithms & Flowchart logic, and Malware Defense (Viruses, Worms, Ransomware, 2FA).

### 2. 🔒 Strict 80% Mastery Gate & Level-Up Progression
- Students **cannot skip ahead** or browse locked topics freely.
- Each level ends with an **AMT-Style Diagnostic Mastery Test**.
- **Score < 80%:** The mastery gate remains locked (`🔒`). The student is guided to study the hidden derivations, review errors, and retry the test.
- **Score ≥ 80%:** Triggers victory fanfare, confetti explosion, awards XP and Diamond Gems, stamps the level as `⭐ Mastered`, and unlocks the next mission along the sequential expedition roadmap!
- Includes an optional **Free-Roam Mode toggle** for teachers and parents to review all content without prerequisites.

### 3. 🎯 AMT Exam-Style Hidden Step-by-Step Derivations
- Options A, B, C, D are presented with derivations strictly hidden until attempted.
- Upon answering, an interactive breakdown expands revealing:
  - 🧠 **Way to Do It (Strategy):** The conceptual problem-solving blueprint.
  - 📐 **Mathematical / Conceptual Derivation:** Rigorous step-by-step working.
  - ⚠️ **Common Trap & Pitfall:** The exact misconceptions and distractor tricks students must avoid in national exams.

### 4. 🛰️ Cosmic Holo-Scanner "S" Stage (Survey)
- High-tech tactical HUD with animated radar sweeps.
- **2-Minute Tactical Scout Countdown Timer** with Start, Pause, and Reset controls.
- Interactive **Mission Scouting Checklist** requiring verification of all 3 learning objectives before advancing to the Question phase.

### 5. 🗺️ Visual Galactic Expedition Roadmap
- Renders an interactive node path showing student progress across all subtopics in real time:
  - ⭐ **Gold Star:** Level Mastered (with score %)
  - 🚀 **Neon Rocket:** Active Mission
  - 🔓 **Unlocked:** Ready to begin
  - 🔒 **Locked Padlock:** Prerequisite test required

### 6. 📱 100% Offline-Ready Progressive Web App (PWA)
- Fully installable on Android, iOS, Windows, and macOS.
- Zero external audio files: all sound effects (clicks, flips, fanfare, errors) are synthesized dynamically via the **Web Audio API**.
- Offline caching powered by `sw.js` service worker.

---

## 🚀 Live App & Local Setup

### 🌐 Live Deployment
The platform is live on GitHub Pages:  
👉 **[https://dagiyosi-pixel.github.io/ethiopia-curriculum-sq3r-platform/](https://dagiyosi-pixel.github.io/ethiopia-curriculum-sq3r-platform/)**

### 💻 Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/dagiyosi-pixel/ethiopia-curriculum-sq3r-platform.git
   cd ethiopia-curriculum-sq3r-platform
   ```
2. Open `index.html` directly in any web browser, or launch with any local HTTP server:
   ```bash
   npx serve .
   ```

---

## 🛠️ Data Compilation & Build Commands

```bash
# Verify and compile all 12 curriculum subject modules into master_curriculum.json:
node compile_master_platform.js

# Build the complete standalone web app and sync to Desktop:
node build_final_master_app.js
```

---

## 📄 License
MIT License • Developed with passion for Ethiopian education and students.
