# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary: Indian students seeking accredited online UG/PG degrees (all streams except B.Tech/M.Tech, per the client brief) from Tier-1, 2 and 3 universities.
- Working professionals (the Executive MBA audience) appear in the content but are not yet confirmed as a primary audience.
- _(Inferred from the client's stated requirement; not re-confirmed in the init round.)_

## Product Purpose

Connect learners with accredited online undergraduate and postgraduate programs from recognised Indian universities — with lectures watchable directly inside the product and flexible, affordable payment (EMI).

## Positioning

Breadth across university tiers (Tier 1, 2 and 3) combined with affordability and a deliberately lightweight learning experience: lectures are streamed via embedded YouTube rather than self-hosted video, so the product stays cheap to run and plays reliably on any device.

## Operating Context

- Indian online-education market; degrees/diplomas, not test-prep.
- Initial focus is Management/Commerce (BBA, MBA, B.Com, M.Com, EMBA); the client brief states "all UG/PG courses except B.Tech/M.Tech".
- Mobile-first: app-style bottom navigation on small screens.
- Early-stage startup; no backend, payments, or admin yet.

## Capabilities and Constraints

- Built: landing page, filterable course catalog, course detail, and watch pages with a lazy YouTube embed (thumbnail → iframe on click).
- Not yet built: authentication, payments, progress tracking, admin/CMS, contact forms.
- Small budget (client quoted ₹10–13k), which is why video is hosted on YouTube rather than self-hosted.
- Stack is fixed by the existing codebase (Next.js App Router, React 19, Tailwind v4, Motion).

## Brand Commitments

- Name "Edvance" is a placeholder; the real brand name is TBD.
- Copy language: English.
- Binding visual direction (user-chosen): navy + warm copper on a warm paper background.

## Evidence on Hand

- None real. Courses, fees, ratings, student counts, testimonials, and university names are placeholder/demo content and must be replaced with the client's actual data before launch.
- Lecture videos are real third-party YouTube links (e.g. IIT Roorkee, NPTEL) used as samples only — not the client's own content.
- Do not fabricate testimonials, enrollment numbers, or university partnerships.

## Product Principles

1. Trust through legitimacy — every claim about universities, accreditation, or outcomes must be verifiable.
2. Affordability and access — tier choice and EMI matter more than a single flagship price.
3. Learn where you are — lectures must play reliably on any device; the product stays lightweight.
4. Honesty over polish — do not invent proof (stats, testimonials) the product does not have.
5. Mobile-first — the experience must be excellent on a phone before it is enhanced for desktop.

## Accessibility & Inclusion

- Mobile-first with bottom navigation and 44px+ touch targets.
- WCAG AA contrast; reduced-motion supported.
