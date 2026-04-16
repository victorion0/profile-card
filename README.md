# Profile Card

A fully accessible, responsive, and testable Profile Card built with plain HTML, CSS, and vanilla JavaScript.

## Live Demo
**Vercel:** https://profile-card-yourusername.vercel.app  
*(Replace with your actual Vercel URL)*

## GitHub Repository
https://github.com/YOUR-USERNAME/profile-card

## Features

- All required `data-testid` attributes implemented exactly as specified
- Semantic HTML (`<article>`, `<figure>`, `<nav>`, `<section>`, etc.)
- Live epoch time in milliseconds using `Date.now()` (updates every 600ms)
- Fully responsive (mobile-first + desktop grid layout)
- Accessible (meaningful alt text, aria-live, keyboard navigation, good contrast)
- Social links open in new tabs with proper security attributes
- Playwright E2E tests included (all tests passing)

## How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/profile-card.git
   cd profile-card

   Open index.html:Use VS Code Live Server extension (recommended)
Or open the file directly in your browser

TestingRun automated tests:bash

npx playwright test

All acceptance criteria verified:Root card, name, bio, time, avatar, social links, hobbies, dislikes
Live updating time
Avatar has meaningful alt text

Tech StackHTML5 (Semantic)
CSS3 (Grid + Flexbox)
Vanilla JavaScript
Playwright (E2E Testing)

Built following senior frontend best practices.

**Important**: Replace:
- `YOUR-USERNAME` with your actual GitHub username
- The Vercel URL with your real live link

Then save and push:

```bash
git add README.md
git commit -m "Update README with live URL and test instructions"
git push
