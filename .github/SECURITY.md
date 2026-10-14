# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.0.x   | :white_check_mark: |

## Security Architecture & Fortification Measures

The **Ethiopian National Curriculum Platform • Grade 7 & 8 Examination Mastery (SQ3R)** is engineered with strict client-side zero-trust security principles:

1. **Strict Content Security Policy (CSP):**
   - Enforces origin lockdown: Only trusted Google Fonts and Tailwind CSS CDNs are permitted.
   - Blocks unauthorized third-party scripts, unvetted stylesheets, tracking beacons, and unauthorized WebSocket endpoints.
2. **Device Permission Hardening (Permissions Policy):**
   - Camera, microphone, geolocation, payment, and USB device APIs are explicitly revoked (`camera=(), microphone=(), geolocation=(), payment=(), usb=()`).
3. **Cross-Site Scripting (XSS) Sanitization:**
   - All dynamic text inputs (student certificate names, institution affiliations, and search queries) undergo input sanitization, character escaping, and length truncation before rendering or drawing to Canvas.
4. **Prototype Pollution & Storage Defense:**
   - LocalStorage readers sanitize parsed JSON objects, explicitly removing `__proto__`, `constructor`, and `prototype` keys to prevent prototype poisoning.
5. **Reverse Tabnabbing & Pop-up Sandboxing:**
   - Print generation pop-up windows immediately sever `window.opener = null` to neutralize reverse-tabnabbing vulnerabilities.
6. **Audio Context Concurrency Rate-Limiting:**
   - Tone synthesis includes concurrency throttling to prevent browser tab locking or audio hardware buffer overflow DOS attacks.
7. **Offline-First Zero-Data Dependency:**
   - Complete pedagogical database (all 577 AMT questions, flashcards, derivations, and summaries) is embedded client-side, eliminating server-side authentication leakages and data interception.

## Reporting a Vulnerability

If you discover a security issue or vulnerability, please report it privately:

- **Email:** `dagiyosi5321@gmail.com`
- **Subject:** `[SECURITY] Ethiopia SQ3R Platform - Vulnerability Report`

We will review reports within 24 to 48 hours and release patches promptly.
