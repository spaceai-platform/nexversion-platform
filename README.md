# Nexversion — Learning Platform

**ACTIVE REPOSITORY: `spaceai-platform/nexversion-platform`**

**Purpose:** Official source repository for the Nexversion 28-day AI skills *learning-platform programme*.

**Selected on:** 2026-11-22, at the owner's explicit request to replace the prior repository content.

**Do not confuse with:** `spaceai-platform/nexversion`, an older, separate AI app-builder codebase. That repository remains unchanged.

## Current contents

- `index.html`, `styles.css`, `app.js`: accessible, mobile-friendly course catalogue and plan selection preview.
- `course-outline.json`: all 28 original Nexversion lesson titles, learning objectives and example tools.
- `curriculum/28-day-curriculum-v2.md`: original full curriculum **draft**, including exercises, knowledge checks and deliverables.
- `curriculum/qa-register.csv`: instructional and production QA register. All initial statuses remain **NOT VERIFIED**.
- `scripts/verify.mjs`: automated structural validation.

## Deployment and payment state

This repository is **not the same source tree as the previously deployed ChatGPT Sites site** at `https://nexversion.affirmationukltd.chatgpt.site/`. This commit does **not** update that live site.

The preview can be hosted as a static site for evaluation. **There is no active Stripe checkout** in this repository and no server-side subscription entitlement implementation yet. Purchase buttons are deliberately disabled. Do not enable full lesson delivery, tutor API or certificates until a secure server establishes identity and a verified active Stripe subscription. A client-only paywall is insufficient.

**Pricing proposal (USD, excluding applicable tax):** weekly $4.64, 4-week $13.39, 12-week $26.79; subscriptions auto-renew at those amounts unless cancelled. Stripe Tax and live prices must be verified separately.

## Review and local test

```bash
node scripts/verify.mjs
python3 -m http.server 8080
```

Open `http://localhost:8080` to inspect the preview. Test keyboard navigation, mobile screens, semantic headings and reduced-motion behaviour. Course completion must not be inferred from 28 titles alone: content, quizzes, references and demonstrations need independent pedagogical review.

## Pre-launch requirements

1. Complete and review all 28 full lessons with real worked examples and source-backed assessments.
2. Add login, paid Stripe checkout and secure webhook reconciliation.
3. Verify subscription entitlement on every protected server endpoint, including AI tutor, lesson delivery and certificates.
4. Implement progress and artefact storage, accessible assessments, rubric-based completion and an honest non-accredited certificate.
5. Add tax registrations where legally applicable, privacy terms, support workflow, refund/cancellation policy, analytics and load tests.
