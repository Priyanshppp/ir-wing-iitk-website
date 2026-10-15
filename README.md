# IR Wing IITK Website

Website for the International Relations Wing at IIT Kanpur. The site will help students find international opportunities, understand programme requirements, and learn from previous participants.

## Pages in the starter

- `/` — Homepage
- `/opportunities` — International opportunities
- `/roadmaps` — Application steps and guides
- `/policies` — Institute and programme policies (add verified official sources before publication)
- `/blogs` and `/blogs/first-steps` — Blog listing and sample article
- `/sessions` — Past sessions archive
- `/team` — Team information

## Local setup

Install a current Node.js LTS release, then from the repository root run:

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Stop the local server with `Ctrl+C`.

The first contributor who runs `npm install` should commit the generated `package-lock.json`; after that, everyone should use `npm ci` to install the locked dependencies.

## Team workflow

1. Pick or create a GitHub issue before starting a page or feature.
2. Create a branch from the latest `main`, for example `feat/opportunities-page` or `docs/exchange-roadmap`.
3. Keep each pull request focused on one issue. Include screenshots for visual changes.
4. Ask another teammate to review the pull request before merging.
5. Keep institute policy claims linked to an official source and record when the source was checked.

Do not put passwords, API keys, private student information, or unapproved personal photos in this repository.

## Project structure

```text
src/app/          Routes and page-level styles
src/components/   Shared site components
public/           Images and other static assets
```

The visual direction uses the FEP site's navy, cyan, and blue palette, with the BSW Career Portal's strong typography and guided-path ideas in selected sections. The interactive elements are kept light so the site stays easy for the team to update.
