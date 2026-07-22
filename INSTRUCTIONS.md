# Dialogue Café — How to Run the Site & the Demo

A 4-page static website (Home / About Us / Events / Contact Us) for **Dialogue Café**, a Deaf-led social enterprise café run by Dialogue Hub CIC at the Royal Docks Centre for Sustainability, UEL Docklands Campus.

> **This is a design concept / pitch demo, not the live site.** Every page carries a "CONCEPT" pill and disclaimers. Facts are sourced from public announcements and must be verified with Dialogue Hub before any real publishing.

There is **no build step and no framework** — just HTML, CSS, and vanilla JavaScript. You only need a way to serve the folder over `http://` (not by double-clicking the file, or the SVG icon sprite and fonts won't load correctly).

---

## 1. How to start the application

Open a terminal **inside this folder** (the one containing `index.html`) and run one of the following.

### Option A — Python (recommended, already installed here)

```bash
python -m http.server 5173 --bind 127.0.0.1
```

Then open: **http://127.0.0.1:5173/** (or `http://localhost:5173/`)

To stop the server, press `Ctrl + C` in the terminal.

### Option B — Node.js (if you prefer)

```bash
npx serve -l 5173
```

### Option C — VS Code

Install the **Live Server** extension, right-click `index.html`, and choose **"Open with Live Server."**

### Common problems

| Symptom | Fix |
|---|---|
| Icons/fonts missing, or a blank page | You opened the file directly (`file://`). Serve it over `http://` instead — use one of the options above. |
| `Address already in use` | Port 5173 is taken. Use another port, e.g. `python -m http.server 5500`, and open that port instead. |
| 404 on pages/CSS | The server was started in the wrong folder. Start it **inside** the folder that contains `index.html`. |

---

## 2. How to run / present the demo

Once the server is running, open **http://127.0.0.1:5173/** and walk through these interactive features — this is what makes it a live demo rather than static mockups:

1. **Sign of the day rotator** — the strip under the header cycles every ~4 seconds through a small BSL glossary (COFFEE → HELLO → THANK YOU → …), swapping both the hand-sign icon and its description. *(It pauses automatically if the visitor has "reduce motion" turned on in their OS.)*

2. **Scroll-reveal animations** — scroll down the Home page. Sections ("How it works," the glossary, recognition cards) fade/slide in as they enter the viewport.

3. **Responsive mobile nav drawer** — narrow the browser window (or open on a phone) until the top links collapse into a hamburger (☰) button. Tap it to slide out the full-screen menu; tap a link or the ✕ to close.

4. **Four-page navigation** — click through **Home → About Us → Events → Contact Us** from the header or footer to show the full site.

5. **Contact form (demo only)** — on the **Contact Us** page, filling in and submitting the form shows a confirmation message but does **not** send anything anywhere. It is a front-end demonstration only, not wired to a real inbox or booking system.

### Quick demo script (about 60 seconds)

1. Land on **Home** → point out the "Coffee, served in two languages" hero and the live *Sign of the day* ticker.
2. Scroll slowly → let the reveal animations play, land on the glossary and the recognition cards.
3. Narrow the window → open the mobile hamburger drawer, then close it.
4. Click **About Us** → the role-based team cards (baristas, interpreters) and the café's story.
5. Click **Events**, then **Contact Us** → submit the form to show the demo confirmation.
6. Close by pointing at the **CONCEPT** pill + footer disclaimer — reinforce this is a grounded concept awaiting sign-off.

---

## Project structure

```
dialogue-cafe/
├── index.html        Home
├── about.html        About Us
├── events.html       Events
├── contact.html      Contact Us (demo form)
├── css/style.css     All styles + design tokens (colors/fonts in the :root block)
├── js/main.js        Sign ticker, mobile nav drawer, scroll-reveal
└── assets/icons.svg  Custom hand-sign icon sprite (reused via <use>)
```
