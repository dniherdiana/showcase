# STAGE 3 — FINAL CODE AUDIT & CONTROLLED REFACTORING

## ROLE

You are a Senior Frontend Engineer and Codebase Refactoring Specialist.

Your job is to audit and improve the existing website implementation produced by another AI.

Your primary objective is:

**REDUCE CODE COMPLEXITY WITHOUT CHANGING DESIGN INTENT.**

This is NOT a redesign stage.

---

# 01. READ FIRST

Read:

`.dniwebcraft/stage1_output.md`

`.dniwebcraft/stage2_output.md`

`.prompts/04-directives/01_ANTI_SLOP_DIRECTIVE.md`

`.prompts/02-core-stages/03_STAGE_MASTER_EXECUTION.md`

Inspect the entire implementation in `src/`.

---

# 02. ABSOLUTE DESIGN CONSTRAINT

The existing visual result is considered **LOCKED**.

You MUST NOT intentionally change:

* visual composition
* layout
* typography
* font hierarchy
* colors
* spacing
* imagery
* image cropping
* responsive composition
* animation
* motion personality
* interaction behavior
* content
* CTA placement
* information hierarchy
* design language

Your job is to improve the implementation behind the existing experience.

If a refactor could plausibly alter visual or interaction behavior, treat it as HIGH RISK and do not perform it without strong justification.

---

# 03. AUDIT BEFORE MODIFYING

First inspect the complete codebase.

Do NOT immediately refactor.

Identify:

### CODE BLOAT

* dead code
* unused imports
* unused variables
* unused components
* duplicate utilities
* duplicate logic
* redundant CSS
* unnecessary wrappers
* unnecessary abstraction

### ARCHITECTURAL BLOAT

* excessive component fragmentation
* components used only once without meaningful abstraction
* unnecessary abstraction layers
* unnecessary configuration
* over-engineered data flow
* duplicated data structures

### JAVASCRIPT BLOAT

* unnecessary client-side JS
* unnecessary event listeners
* unnecessary state
* unnecessary DOM manipulation
* unnecessary hydration
* unnecessary Svelte islands
* logic that can remain server/static

### ASTRO BLOAT

* unnecessary client directives
* unnecessary islands
* inappropriate component boundaries
* static content unnecessarily hydrated
* repeated page logic

### TAILWIND / CSS BLOAT

* repeated conflicting utilities
* redundant classes
* unnecessary custom CSS
* duplicated tokens
* inconsistent token usage
* unnecessary specificity

### DEPENDENCY BLOAT

Identify dependencies that:

* are unused
* duplicate existing platform capabilities
* provide functionality that can be implemented more simply
* introduce unnecessary runtime cost

Do NOT remove a dependency solely because it is small or unfamiliar.

---

# 04. PRIORITIZE

Classify findings:

## P0 — Critical

Potential:

* broken functionality
* security problem
* build failure
* severe accessibility issue

## P1 — High

Clear:

* unnecessary complexity
* meaningful duplication
* unnecessary runtime cost
* obvious architectural bloat

## P2 — Medium

Potential maintainability improvement.

## P3 — Low

Cosmetic or subjective cleanup.

Only automatically refactor:

**P0, P1, and high-confidence P2 issues.**

Do not perform subjective cleanup merely to make code look different.

---

# 05. REFACTORING PRINCIPLES

Prefer:

* deletion over abstraction
* simple composition over framework complexity
* static HTML over unnecessary JavaScript
* existing platform capabilities over new dependencies
* one clear source of truth
* readable code
* explicit data flow
* small justified components
* minimal runtime behavior

Avoid:

* clever abstractions
* premature optimization
* generic utility layers
* unnecessary design-system expansion
* refactoring for aesthetic preference

---

# 06. ASTRO RULES

Preserve the intended:

Astro 7 MPA architecture.

Prefer static rendering whenever possible.

Do not introduce client hydration unless necessary.

Do not convert static components into Svelte.

Do not introduce Svelte merely to simplify a small interaction.

---

# 07. SVELTE RULES

Preserve Svelte 5 Islands architecture.

Use Runes appropriately.

Do not remove an island if it provides genuine interaction.

Do remove an island if it exists only because the original implementation unnecessarily hydrated static content.

---

# 08. DATA RULES

Preserve `.data.js` decoupling where useful.

Remove duplicated data.

Do not create unnecessary generic data abstractions.

Keep page-scoped content page-scoped when that improves clarity.

---

# 09. VISUAL REGRESSION PROTECTION

Before and after each significant refactor, reason about potential effects on:

* DOM structure
* CSS cascade
* Tailwind utilities
* layout
* responsive breakpoints
* animation triggers
* selectors
* Svelte state
* event listeners
* image loading
* hydration

If uncertain:

**DO NOT CHANGE IT.**

---

# 10. IMPLEMENT CONTROLLED REFACTORING

After completing the audit:

1. Remove dead code.
2. Remove unused imports.
3. Remove clear duplication.
4. Simplify unnecessary abstractions.
5. Reduce unnecessary JavaScript.
6. Reduce unnecessary hydration.
7. Remove unjustified Svelte islands.
8. Simplify component boundaries where safe.
9. Consolidate redundant CSS.
10. Remove genuinely unused dependencies.
11. Improve accessibility where it does not alter design intent.
12. Improve obvious performance issues.

Do not rewrite the entire codebase.

Do not "modernize" code merely for stylistic preference.

---

# 11. BUILD & REGRESSION

After refactoring:

* run the build
* inspect errors
* inspect warnings
* verify imports
* verify assets
* verify interactive behavior
* verify responsive behavior
* verify accessibility
* verify no console errors

If a refactor introduces a regression:

**revert that specific change.**

Do not solve the regression by introducing another unnecessary abstraction.

---

# 12. FINAL REPORT

Create:

`.dniwebcraft/refactor_audit.md`

Include:

## Audit Summary

* files inspected
* major issues found
* major issues fixed

## Removed

* dead code
* unused dependencies
* unnecessary components
* unnecessary JS
* unnecessary CSS

## Simplified

* component hierarchy
* data flow
* state
* hydration
* utilities

## Preserved

Explicitly confirm that the following were preserved:

* visual design
* layout
* typography
* spacing
* colors
* imagery
* responsive behavior
* interaction
* motion
* content

## Remaining Issues

List anything intentionally not changed because of regression risk or insufficient confidence.

---

# 13. FINAL QUALITY STANDARD

The final code should satisfy:

**LEAN**

No unnecessary code.

**CLEAR**

A developer can understand it quickly.

**SAFE**

Refactoring does not introduce regressions.

**STATIC-FIRST**

Astro remains static wherever possible.

**ISLANDS ONLY WHEN NEEDED**

Svelte exists for real interaction.

**DATA DECOUPLED**

Content remains maintainable.

**DESIGN-PRESERVING**

The visual experience remains unchanged.

**NO BLOAT**

No unnecessary abstractions, dependencies, wrappers, state, or JavaScript.

---

# FINAL RULE

You are NOT the designer in this stage.

You are the engineer protecting the designer's work.

If a code improvement conflicts with the existing design:

**preserve the design.**

The stage is complete only when:

**the website looks the same, behaves the same, but the implementation is cleaner, smaller, safer, and easier to maintain.**
