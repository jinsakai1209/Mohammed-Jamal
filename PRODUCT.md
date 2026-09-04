# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers, design leads and recruiters evaluating Mohammed Jamal
for a **full-time UI/UX design role**, in India — Chennai and other metros.

They arrive from a job application, a LinkedIn profile or a referral, usually
mid-shortlist with several candidates open. Two distinct reading modes have to
work: a 60-second skim to decide whether he is worth a longer look, and a
deep read of one case study to judge how he actually thinks. Success is an
interview, not a contract.

Secondary and welcome, but not what the site leads with: prospective freelance
or contract clients.

## Product Purpose

A personal portfolio that gets Mohammed Jamal shortlisted for enterprise-leaning
product design roles.

Its job is to make a specific and unusual body of work legible: four years of
internal enterprise software — intranets, dashboards, document systems — which
is work most portfolios omit because it is unglamorous and often
NDA-constrained. The site has to convert that into evidence of judgement.

Success = the visitor requests an interview. Failure = the visitor cannot tell
what he is good at inside a minute.

## Positioning

Enterprise intranets at volume. Four years and 50+ delivered intranet portals
at SharePoint Designs — a domain most product designers have never worked in
and cannot claim.

The stated thesis is **"From complex, to clear."** The argument the site makes
is that enterprise software is usually not badly designed but *undesigned* —
built feature by feature until nobody remembers what it was for — and that the
remedy is rarely a new feature. A neighbouring portfolio cannot truthfully copy
the volume or the domain.

## Operating Context

Works inside SharePoint's platform constraints rather than on a blank canvas:
what the platform permits governs what can be designed. Day-to-day work runs
between stakeholders who want everything on the homepage, developers who have
to build it, and employees who need to find one document.

Delivery is collaborative — product managers, developers, stakeholders — with
design intent surviving from first workshop to last build. Design handoff is
treated as an ongoing relationship, not a file.

## Capabilities and Constraints

- Static site: hand-authored HTML, CSS and vanilla JS. **No build step, no
  framework, no package manager.**
- Deployed via **GitHub Pages** from `main` at
  `github.com/jinsakai1209/Mohammed-Jamal`. Live at
  `jinsakai1209.github.io/Mohammed-Jamal/`. No custom domain configured.
- Four pages: `index.html` plus three case studies (`nutridash.html`,
  `fuel-buddy.html`, `docvault.html`).
- Shared `css/styles.css` and `css/case-study.css`; single shared `js/script.js`
  guarded so each page uses only what it has.
- Dark and light themes, persisted in `localStorage`.
- Constraint that follows from the above: anything shipped must work as plain
  static files served from a subpath. No server, no root-absolute asset paths.

Undecided / not established: custom domain, analytics, contact form (contact is
a `mailto:` link only), CMS or any content pipeline.

## Brand Commitments

- Name and mark: **Mohammed Jamal**, "MJ." wordmark.
- Contact: `jamaluiux04@gmail.com`; LinkedIn
  `linkedin.com/in/mohammed-jamal-217b0b106`.
- Employer named on the site: SharePoint Designs (Nov 2022 – present).
- Voice, as established in the current copy: plain, specific, unshowy;
  willing to name the unglamorous ("the software nobody puts on a portfolio").
  Avoids agency superlatives and em dashes.
- Each case study carries its own accent colour — NutriDash green, DocVault
  blue, Fuel Buddy orange — while the site's own accent stays constant.

## Evidence on Hand

Real and verified in-repo:

- **DocVault AI** — relates to actual SharePoint Designs work. Two real
  dashboard screenshots (`assets/docvault/`), one full-page capture in the UI
  Screens section.
- **NutriDash** — self-initiated concept. Survey of 30 respondents, 6 usability
  tests; phone screens and testing photos in `assets/nutridash/`.
- **Fuel Buddy** — self-initiated concept. Screens in `assets/fuel-buddy/`.
- Three published articles on `sharepointdesigns.com` (2023, 2024, 2026).
- `assets/MohammedJamal_Resume.pdf`, `assets/profile.jpg`.
- Stated figures the site relies on: 4+ years, 50+ intranet portals.

**Must not be fabricated.** NutriDash and Fuel Buddy are concept projects and
the pages label them so ("Concept Project", "Solo Designer"); nothing may imply
they were shipped for clients. There are no testimonials, named clients,
employer logos, business metrics or press. Five DocVault UI screens
(Landing Page Hero, Landing Page Features, Document Repository, Audit Trail,
Workflow Builder) are described in the case study but not yet exported — the
placeholders were removed rather than filled with invented UI.

## Product Principles

1. **Legibility in sixty seconds, depth on demand.** A shortlisting reader must
   get the thesis, the domain and the proof without scrolling far; the case
   studies carry the reasoning for whoever wants it.
2. **Claim only what can be shown.** Concept work is labelled as concept.
   Absent evidence stays absent rather than being filled in.
3. **The unglamorous domain is the advantage.** Enterprise intranet work is the
   differentiator, not something to dress up as consumer product design.
4. **Judgement over artefacts.** The value on offer is decisions — what was cut,
   what was reframed — not screen count.
5. **Static and self-contained.** No dependency that cannot be served as a flat
   file from a GitHub Pages subpath.

## Accessibility & Inclusion

No client or employer standard has been established. Practices the current build
already holds and future work should preserve: `prefers-reduced-motion` honoured
on every animation, real text kept selectable and screen-reader readable when
split for animation, and both themes checked for text contrast.
