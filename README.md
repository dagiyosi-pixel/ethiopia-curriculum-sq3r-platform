# ⚡ SQ3R Master Platform • Grade 7 & 8 Ethiopian Curriculum

> **An interactive, highly motivating, step-by-step learning platform built for Ethiopian middle school students (Grade 7 & Grade 8).**  
> Powered by the evidence-based **SQ3R Study Method** (Survey, Question, Read, Recite, Review), packed with exhaustive worked examples, gamified rewards, active recall flashcards, and offline-first PWA architecture.

---

<div align="center">

![Grade 7 & 8 Curriculum](https://img.shields.io/badge/Curriculum-Ethiopia_Grade_7_%26_8-4338CA?style=for-the-badge&logo=book&logoColor=white)
![SQ3R Method](https://img.shields.io/badge/Methodology-SQ3R_Active_Recall-F59E0B?style=for-the-badge&logo=sparkles&logoColor=black)
![PWA Ready](https://img.shields.io/badge/Platform-PWA_%26_Offline_Ready-10B981?style=for-the-badge&logo=pwa&logoColor=white)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero_External_Audio-6366F1?style=for-the-badge&logo=javascript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-0EA5E9?style=for-the-badge)

</div>

---

## 🌟 Key Highlights

- **Dual Grade Switcher:** Instant, seamless toggle between **Grade 7** and **Grade 8** full national curriculum syllabi.
- **Complete Subject Coverage:**
  - 📐 **Mathematics:** Sets, Integers, Linear Equations & Inequalities, Ratios & Percentages, Rational Numbers, Square Roots & the Pythagorean Theorem.
  - 🔬 **General Science:** Cell biology & organelles, human body systems, chemical classification (Acids, Bases, Salts, pH scale), forces & energy.
  - 📚 **English:** Traffic safety, modal auxiliaries (*Must, Should, Have to*), active-to-passive voice transformation, conditional clauses.
  - 🌍 **Social Studies:** Physical geography of Ethiopia, the Great East African Rift Valley, agro-climatic zones (*Dega, Weyna Dega, Kolla*), African continental drainage basins.
  - ⚖️ **Citizenship Education:** Principles of democracy, the Rule of Law, restorative conflict resolution, and the 3 branches of government (*Separation of Powers*).
  - 💻 **Information Technology (IT):** Hardware & the IPOS cycle, storage memory conversions (GB to MB), spreadsheet formulas (`=SUM`, `=AVERAGE`), and cyber ethics.
- **The SQ3R Guided Studio:**
  1. 🔭 **Survey (S):** 2-minute countdown timer, heading roadmap, diagram scout, and big-idea summary bullet points.
  2. ❓ **Question (Q):** Converts chapter headings into inquiry questions with prediction inputs and custom curiosity journals.
  3. 📖 **Read (R1):** Chunked concept notes + **Multi-step Verified Working Examples** (Problem, conceptual strategy, step-by-step arithmetic, checks, and common traps).
  4. 🗣️ **Recite (R2):** 3D interactive flip flashcards for active recall (`✔ I Knew This!`) + Feynman Explanation challenge notepad.
  5. ⭐ **Review (R3):** Self-grading mastery mini-quizzes with real-time feedback, detailed explanation breakdowns, and trophy claims.
- **Gamification & Motivation Engine:**
  - 🔥 **Study Streaks:** Animated flame counter with XP multipliers.
  - 💎 **Knowledge Gems & Trophy Room:** Earn gems through quiz mastery and unlock avatar skins (*Ethiopian Lion Scholar, Wisdom Owl, Cosmic Polymath*) and prestigious titles.
  - 🎖️ **20 Unlockable Badges:** Milestones for streaks, equation solving, organelle mastery, and quiz perfection.
  - ⏳ **Pomodoro Focus Timer:** Built-in 25-minute focus session with audible chimes.
  - 🔊 **Zero-Dependency Synthesized Audio:** Web Audio API sound effects for clicks, flips, successes, and level-ups.
  - 🎊 **Confetti Engine:** Celebratory canvas particle physics upon completing study stages.

---

## 📂 Project Structure

```text
ethiopia-curriculum-sq3r-platform/
├── index.html            # Standalone single-page master web application
├── manifest.json         # PWA Manifest for mobile & desktop installation
├── sw.js                 # Service Worker for offline network caching
├── package.json          # Node scripts for hosting & packaging
├── .gitignore            # Git ignore rules
├── README.md             # Comprehensive documentation
└── public/
    └── icons/
        ├── icon-192.png  # 192x192 PWA App Icon
        └── icon-512.png  # 512x512 PWA Splash Icon
```

---

## 🚀 Quick Start

### Option 1: Open Directly in Browser
Simply double-click `index.html` in your file explorer. No server or build setup is required.

### Option 2: Run with Local Server (PWA Mode)
```bash
# Clone the repository
git clone https://github.com/dagiyosi-pixel/ethiopia-curriculum-sq3r-platform.git
cd ethiopia-curriculum-sq3r-platform

# Start local server
npm start
# Opens at http://localhost:3000
```

---

## 📱 Mobile App Packaging (.APK & iOS)

Because this platform is designed as an offline-first Progressive Web App, converting it to a native mobile app is seamless:

```bash
# 1. Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Initialize Capacitor
npx cap init "SQ3R Academy" "com.dagiyosi.sq3r" --web-dir "."

# 3. Add Android platform
npx cap add android

# 4. Open in Android Studio to build APK
npx cap open android
```

---

## 💻 Desktop Packaging (.EXE)

To bundle into a standalone Windows `.exe` application:
```bash
npx nativefier --name "SQ3R Master Platform" "http://localhost:3000" --icon "public/icons/icon-512.png"
```

---

## 👤 Author

**Dagiyosi**  
- GitHub: [@dagiyosi-pixel](https://github.com/dagiyosi-pixel)  
- Email: [dagiyosi5321@gmail.com](mailto:dagiyosi5321@gmail.com)

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
