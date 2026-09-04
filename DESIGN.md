---
name: Mohammed Jamal Portfolio
description: An editorial portfolio that reads like a printed broadsheet feature
colors:
  ink: "#0B0B0C"
  ink-raised: "#101012"
  ink-surface: "#131315"
  paper: "#FBFAF7"
  paper-raised: "#F4F2ED"
  paper-surface: "#FFFFFF"
  bone: "#EFEDE8"
  bone-muted: "#A29F98"
  bone-faint: "#7B7770"
  graphite: "#16150F"
  graphite-muted: "#63605A"
  graphite-faint: "#78746C"
  signal-vermilion: "#E8734A"
  signal-vermilion-deep: "#B4451F"
  nutridash-green: "#34D399"
  docvault-blue: "#60A5FA"
  fuelbuddy-orange: "#FB923C"
typography:
  display:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2rem, 5.3vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.6vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Newsreader, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.8vw, 2.15rem)"
    fontWeight: 500
    lineHeight: 1.32
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1rem, 1.35vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  none: "0"
  hairline: "2px"
  pill: "100px"
  circle: "50%"
spacing:
  gutter: "28px"
  column: "88px"
  indent: "116px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.signal-vermilion}"
    textColor: "{colors.paper-surface}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.hairline}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-secondary-hover:
    textColor: "{colors.signal-vermilion}"
  chip-pill:
    backgroundColor: "transparent"
    textColor: "{colors.bone-muted}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.bone-muted}"
    padding: "4px 0"
---

# Design System: Mohammed Jamal Portfolio

## Overview

**Creative North Star: "The Printed Broadsheet"**

This system behaves like a serious newspaper feature rather than a web app. Content is
set in numbered chapters with standfirsts and pull-quotes; structure is drawn with
hairline rules rather than boxes; a serif carries every headline while a neutral sans
carries every word meant to be read at length. The reader is assumed to be literate
and in a hurry, which is the broadsheet's own assumption.

The density is generous and the palette is nearly monochrome. Depth is achieved by
ruling and tonal shift, not by lifting things off the page, because paper has no
z-axis. One warm accent appears rarely enough that its appearance is information.
Both themes are real rather than an inversion: near-black ink and warm off-white
paper, each with its own accent value tuned for contrast on that ground.

The confirmed anti-reference is the system this replaced: purple-to-blue gradients,
rounded card grids, drop shadows on every surface, and a display face whose hairline
strokes read as decorative rather than typeset.

**Key Characteristics:**
- Serif display over sans body, never mixed within a role
- Hairline rules instead of cards, borders instead of shadows
- Near-zero corner radius; roundness reserved for pills and avatars
- One accent, used sparingly, restated per project on case study pages
- Numbered chapters as the primary organising device
- Motion is triggered by the reader, never ambient

## Colors

A near-monochrome ground in two temperatures, interrupted by a single warm accent.

### Primary
- **Signal Vermilion** (`#E8734A` on ink, `#B4451F` on paper): the only accent in the
  system. It marks chapter numbers, the italic emphasis phrase inside a headline, the
  active nav state, link hover, and the primary button's hover fill. It is never a
  resting surface fill and never decorates.

### Secondary
Per-project accents, scoped to one case study each and never used site-wide. They
override the accent token inside that page only, so the page reads in the project's
colour while site chrome stays constant.
- **NutriDash Green** (`#34D399`)
- **DocVault Blue** (`#60A5FA`)
- **Fuel Buddy Orange** (`#FB923C`)

### Neutral
- **Ink** (`#0B0B0C`): dark-theme page ground.
- **Ink Raised** (`#101012`): alternating section bands that separate chapters.
- **Ink Surface** (`#131315`): the rare filled card.
- **Paper** (`#FBFAF7`): light-theme ground, warm rather than white.
- **Paper Raised** (`#F4F2ED`) and **Paper Surface** (`#FFFFFF`): light equivalents.
- **Bone** (`#EFEDE8`) and **Graphite** (`#16150F`): primary text on each ground.
- **Bone Muted** (`#A29F98`) and **Graphite Muted** (`#63605A`): body copy.
- **Bone Faint** (`#7B7770`) and **Graphite Faint** (`#78746C`): dates, meta, captions.
- **Rule** (`rgba(bone,.10)` on ink, `rgba(graphite,.11)` on paper): the hairline that
  does nearly all structural work, with **Rule Strong** at `.22` and `.26` for edges
  that must assert themselves.

### Named Rules
**The One Signal Rule.** The accent never exceeds roughly 10% of a viewport and never
fills a resting surface. If it appears twice in one screen region, one of them is
decoration and should be removed.

**The Borrowed Colour Rule.** A project accent belongs to its case study page and dies
at that page's edge. Site chrome, the logo mark and nav, always stays Signal
Vermilion, because the nav is the author's identity and not the project's.

## Typography

**Display Font:** Newsreader (with Iowan Old Style, Georgia, serif)
**Body Font:** Inter (with system-ui, -apple-system, sans-serif)

**Character:** Newsreader is a text-first newspaper serif with low stroke contrast and
sturdy letterforms. It reads as typeset rather than decorative and holds up at 68px
without becoming an ornament. Inter carries everything meant to be read in quantity.
The pairing is deliberately unremarkable in the body so the serif can carry all the
personality.

### Hierarchy
- **Display** (500, `clamp(2rem, 5.3vw, 4.25rem)`, 1.03): the hero thesis, one per
  page. The emphasis phrase inside it is serif italic in the accent.
- **Headline** (500, `clamp(1.9rem, 3.6vw, 3rem)`, 1.1): chapter and section titles.
- **Title** (500, `clamp(1.5rem, 2.8vw, 2.15rem)`, 1.32): pull-quotes and case study
  standfirsts. Serif because it is display type doing an argument's work.
- **Body** (400, `clamp(1rem, 1.35vw, 1.125rem)`, 1.75): all reading text, measured
  between 40ch and 68ch depending on context, never full-bleed.
- **Label** (600, `0.6875rem`, `0.18em`, uppercase): eyebrows, chapter numbers, meta,
  tags and button text.

### Named Rules
**The Two Voices Rule.** Serif for anything asserting, sans for anything explaining. A
heading never appears in Inter and running body text never appears in Newsreader. The
one sanctioned exception is the case study standfirst, an assertion wearing a
paragraph's shape.

**The Weight Floor Rule.** Display weight comes from `--fw-display` (500) and is never
hard-coded per rule. Newsreader's 400 is a text weight and reads anaemic above 3rem.

## Layout

A single centred column of `1100px` maximum with `28px` side padding. Chapters are
separated by `120px` of vertical rhythm, reduced to `88px` below 900px.

The signature spatial device is a two-column head: an `88px` gutter carrying the
chapter number, a `28px` gap, then the content column beginning at `116px`. Every
section title, body paragraph and content block on the case study pages aligns to that
same `116px` edge, which is what makes the pages feel set rather than stacked. Below
768px the gutter collapses and the label stacks above its title at the text edge.

Breakpoints: `900px` narrows the gutter to 56px and drops four-up grids to two-up;
`768px` goes single column, collapses the nav to a burger and swaps hero media for a
still; `560px` and `480px` stack the stat and process rows fully.

Grids are ruled rather than gapped. Cards sit in a 1px-gap grid over a rule-coloured
parent, so the dividers read as drawn lines instead of empty space.

### Named Rules
**The Shared Edge Rule.** Everything within a chapter aligns to one left edge. A block
that needs to sit outside it goes full-bleed on purpose rather than indenting
differently.

## Elevation & Depth

**This system is flat, deliberately.** Nineteen rules set `border-radius: 0` and
component styles explicitly set `box-shadow: none`. Depth is conveyed by three means
only: hairline rules, tonal shift between the `bg` and `bg-2` bands, and a background
change on hover. Paper has no z-axis and neither does this.

The single sanctioned exception is physical objects: device mockups, the case study
lightbox, project screenshots. Those are pictures of things that really do cast
shadows, so they carry one.

### Shadow Vocabulary
- **Object cast** (`box-shadow: 0 30px 70px -25px rgba(0,0,0,.65)`): device mockups
  and lightbox imagery only, never a UI surface.
- **Focus halo** (`box-shadow: 0 0 0 3px rgba(74,222,128,.15)`): the availability
  status dot, the only ring in the system.

### Named Rules
**The No-Lift Rule.** A UI surface never leaves the page. Hover changes background or
border, never elevation. If something must feel interactive, move it 2px or change
its rule colour.

## Shapes

Corners are square by default (`0`). Interactive rectangles take `2px`, enough to
avoid looking like an unstyled default and not enough to read as a rounded card. Pills
(`100px`) are reserved for taxonomy: skill tags, tool chips, project tags. Circles
(`50%`) are reserved for avatars, the status dot and the theme toggle.

Borders are always `1px`. There is no heavier weight in the system; emphasis comes
from the border's opacity, not its thickness.

### Named Rules
**The Radius Ladder Rule.** Four values exist: `0`, `2px`, `100px`, `50%`. Anything
else is either a mistake or an image's own corner.

## Components

### Buttons
- **Shape:** near-square (`2px`), never pill.
- **Primary:** the text colour becomes the fill, bone on ink or graphite on paper,
  with the ground colour as the label. Padding `14px 28px`, uppercase label at
  `0.04em`.
- **Hover:** fills Signal Vermilion, label goes white, lifts 2px. This is the one
  place the accent becomes a surface.
- **Secondary:** transparent with a `border-strong` hairline; hover moves border and
  label to the accent. No fill at any state.

### Chips
- **Style:** pill (`100px`), transparent, 1px hairline border, muted label text.
- **State:** hover raises the border to `accent-line` and the text to full contrast.
  Chips are labels rather than controls and have no selected state.

### Cards / Containers
- **Corner:** square. A card is a cell in a ruled grid, not a floating object.
- **Background:** the section's own ground. A card is distinguished by its rules,
  not by a fill.
- **Shadow:** none, per The No-Lift Rule.
- **Border:** produced by a 1px grid gap over a rule-coloured parent.
- **Internal padding:** `30px 26px` typical.

### Navigation
- Fixed, `72px` tall, translucent over a `20px` backdrop blur, collapsing to `56px`
  on scroll where it gains its bottom rule.
- Links are `0.8125rem` muted sans with an accent underline that wipes in from the
  left on hover and stays for the active section.
- Below 768px links collapse to a burger opening a full-screen overlay with serif
  entries at `2.25rem`.

### Work Index (signature component)
The homepage work list is the system's most characteristic object: a ruled row per
project carrying a serif number, a serif project title, a sans description, uppercase
tags and a thumbnail held at grayscale until hover. On hover the row's ground shifts,
the title turns accent, the thumbnail regains its colour and the arrow translates. It
is a table of contents that happens to be interactive.

## Do's and Don'ts

### Do:
- **Do** set every heading in Newsreader at weight 500 through `--fw-display`.
- **Do** structure a new section as a numbered chapter with an `88px` number gutter
  and content on the `116px` edge.
- **Do** build separation from 1px rules and the `bg` / `bg-2` tonal pair.
- **Do** keep the accent under roughly 10% of any viewport and let its rarity mean
  something.
- **Do** give every animation a `prefers-reduced-motion` path that lands on the
  finished state.
- **Do** cap reading measure between 40ch and 68ch.
- **Do** scope a project accent to its own case study page and leave site chrome alone.

### Don't:
- **Don't** put a drop shadow on a UI surface. Depth comes from rules and tone.
- **Don't** introduce a corner radius outside `0`, `2px`, `100px`, `50%`.
- **Don't** set body copy in the serif or a heading in Inter.
- **Don't** use a gradient as a surface fill. The one gradient in the system is the
  hero scrim and its job is legibility.
- **Don't** take a border above 1px; raise its opacity instead.
- **Don't** loop an animation in the reader's peripheral vision. Motion is triggered
  by scroll, hover or the cursor, and then it stops.
- **Don't** reintroduce em dashes into body copy; the voice uses colons, commas and
  full stops.
