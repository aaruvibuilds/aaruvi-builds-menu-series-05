# ⚡ AARUVI BUILDS

### 🧲 Magnetic Menu — Series 05

**A menu button that doesn't wait for you to click.**
**Move closer. Feel the interaction pull back.**

<p align="center">
  <a href="https://aaruvibuilds.github.io/aaruvi-builds-menu-series-05/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-7B5CFF?style=for-the-badge&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/aaruvibuilds/aaruvi-builds-menu-series-05">
    <img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-17151B?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

---

## 🧲 The Build

A circular menu button responds to the user's cursor before it is even clicked.

Move the pointer toward the button and the control subtly follows the cursor.

Click it and the interaction transforms completely:

```text
MAGNETIC BUTTON
      ↓
   CLICK
      ↓
NAVIGATION CARD
```

The result is a menu interaction that combines **cursor physics, motion, transformation, and spatial composition.**

---

## 🎬 The Experience

### Closed State

The interface begins with a minimal circular button positioned at the center of the screen.

The button contains:

* `MENU` label
* Hamburger icon
* Circular interaction surface
* Subtle purple magnetic ring
* Atmospheric background glow

The interface stays intentionally minimal.

---

### Magnetic State

Move the cursor close to the button.

Once the pointer enters the magnetic radius, the button begins responding to the cursor position.

The interaction is calculated using:

```text
Distance → Force → Position Offset
```

The closer the cursor gets, the stronger the pull becomes.

---

### Open State

Clicking the magnetic button triggers the menu transformation.

The circular trigger becomes smaller and changes from dark to cream.

At the same time, a large navigation card scales into view.

The interaction transforms:

```text
MENU
  ↓
CLOSE
```

and:

```text
BUTTON
  ↓
NAVIGATION CARD
```

---

## ✨ Interaction System

### 01 — Magnetic Pull

The button uses a configurable magnetic radius:

```text
180px
```

Inside that radius, the cursor generates an attraction force.

The force increases as the pointer moves closer to the button.

---

### 02 — Smooth Follow

The button does not instantly jump toward the pointer.

Instead, the current position gradually approaches the target position.

This creates a smooth magnetic feeling rather than a rigid cursor-following effect.

---

### 03 — Magnetic Feedback

When the magnetic interaction becomes active, an additional circular ring appears around the button.

This gives the user a subtle visual indication that the control is responding.

---

### 04 — Transformation

When opened, the button changes:

```text
104px → 66px
```

The hamburger icon disappears and the close icon rotates into position.

The navigation card simultaneously expands from the center.

---

## 🧠 State System

The interaction is controlled through a simple open/closed state:

```text
CLOSED
   │
   ├── Magnetic interaction
   │
   ↓
 CLICK
   │
   ↓
OPEN
   │
   ├── Navigation
   │
   ├── Close
   │
   └── Escape
   ↓
CLOSED
```

The JavaScript synchronizes:

* Menu visibility
* Button transformation
* ARIA state
* Navigation card visibility
* Magnetic movement
* Outside-click behavior
* Keyboard interaction

---

## 🎨 Navigation Card

The expanded navigation surface uses a warm cream interface against the dark environment.

### Header

```text
NAVIGATION                         01 — 04
```

### Navigation

```text
01    Home
02    Work
03    About
04    Contact
```

Each navigation item receives its own interactive hover state.

---

## ⚡ Hover Interaction

Navigation links respond with multiple subtle changes.

On hover:

* Background expands
* Left padding increases
* Title shifts horizontally
* Interface gains directional movement

The motion remains intentionally restrained.

The goal is to make the navigation feel **responsive rather than decorative.**

---

## 🌌 Visual Direction

The build follows the Aaruvi Builds visual language:

**Dark cinematic environment**

*

**Warm editorial navigation surface**

*

**Purple atmospheric lighting**

*

**Minimal typography**

*

**Physical-feeling interaction**

---

## 🎨 Color System

### Background

```text
#08070A
```

### Navigation Surface

```text
#F3F0EA
```

### Primary Ink

```text
#111015
```

### Accent

```text
#A855F7
```

### Typography

**DM Sans**

Primary interface typography.

**Space Grotesk**

Used for:

* Brand
* Menu label
* Navigation metadata
* Navigation titles

---

## 🌀 Atmospheric Effects

The background contains two blurred purple glow elements.

When the menu opens, the ambient lighting increases slightly.

This creates a subtle environmental response without overwhelming the navigation.

The interface therefore feels like one connected visual system rather than a button sitting on top of a static background.

---

## 📱 Responsive

The menu adapts to smaller screens.

### Desktop

* 104px magnetic button
* Large navigation card
* Spacious navigation rows
* Full atmospheric presentation

### Mobile

* 92px trigger
* Full-width navigation card with side margins
* Reduced card padding
* Smaller navigation rows
* Touch-friendly interaction

---

## 📲 Touch Interaction

The magnetic effect is primarily pointer-driven.

On touch devices, the button receives a small press response:

```text
Normal
  ↓
Scale .94
  ↓
Release
  ↓
Normal
```

This provides tactile feedback without requiring cursor movement.

---

## ♿ Accessibility

The interaction includes:

* Semantic `<button>`
* Semantic `<nav>`
* `aria-expanded`
* Dynamic `aria-label`
* `aria-hidden` for the navigation card
* Escape-to-close
* Keyboard-compatible button activation

The menu remains functional without relying exclusively on pointer movement.

---

## ♿ Reduced Motion

The build respects:

```css
@media (prefers-reduced-motion: reduce)
```

Transitions are reduced when the user requests reduced motion.

The interaction remains usable while minimizing unnecessary animation.

---

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript
* CSS Transitions
* CSS Transforms
* Web Animations API
* `requestAnimationFrame`
* Responsive Design
* Accessibility APIs

No frameworks.

No external animation libraries.

The magnetic interaction is implemented directly with JavaScript.

---

## 📂 Project Structure

```text
aaruvi-builds-menu-series-05/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/aaruvibuilds/aaruvi-builds-menu-series-05.git
```

Open:

```text
index.html
```

Or launch the project with any local development server.

---

## 🌐 Live Demo

**Coming soon**

The project can be deployed directly using GitHub Pages.

---

## 💻 Source Code

The complete source code for the interaction is contained in this repository.

---

## 🎯 The Idea

A menu button is usually something users simply click.

This build explores what happens when the interface starts responding **before the click.**

The interaction turns proximity into feedback.

Instead of:

```text
SEE → CLICK
```

the experience becomes:

```text
APPROACH → FEEL → INTERACT
```

The goal was to make the smallest part of the interface feel physical.

---

# ⚡ AARUVI BUILDS

**Frontend • UI • Motion**

Instagram: **@aaruvi_builds**
YouTube: **@AaruviBuilds**
GitHub: **@aaruvibuilds**

### BUILD. EXPERIMENT. CREATE.

*Series 05 / Magnetic Menu*
