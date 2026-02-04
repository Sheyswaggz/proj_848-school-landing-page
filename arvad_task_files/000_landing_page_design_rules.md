# Landing Page Design Rules

> **Milestone:** Complete School Landing Page Implementation
> **Selected Patterns:** scroll_triggered_reveals, minimalist_typography, social_proof_heavy, morphing_button_interactions, skeleton_loading

These design patterns were specifically selected for this project during planning.
**You MUST follow these patterns when generating landing page code.**

## Usage Instruction

### Selected Design Patterns

The following design patterns were selected for this landing page:

- `scroll_triggered_reveals`
- `minimalist_typography`
- `social_proof_heavy`
- `morphing_button_interactions`
- `skeleton_loading`

### Implementation Guidance

Apply scroll_triggered_reveals for section animations as users scroll through About, Programs, News, and Contact sections with 100-150ms stagger timing. Use minimalist_typography with clean font hierarchy (large headings, readable body text, ample whitespace) to convey professionalism and educational authority. Integrate social_proof_heavy by including testimonials from parents/students, achievement statistics, and accreditation badges near the Programs section and footer. Implement morphing_button_interactions for all CTAs (enrollment buttons, contact form submit) with hover effects, loading states, and success feedback. Use skeleton_loading for the News/Announcements section if content loads asynchronously, or for image placeholders while Unsplash images load, ensuring perceived performance remains high.

## Design Pattern Rules

Below are the detailed rules for each selected pattern:

# Rules from: landing_page_design_rules
================================================================================

## 00-INDEX.md - Landing Page - Pattern Index Overview

# Landing Page Design Patterns Index

> This index describes 24 landing page design patterns. Use this to select appropriate patterns for the project. Selected patterns will be loaded as detailed implementation rules during task generation.

---

## ⚠️ IMPORTANT DISCLAIMER

**This is a GUIDE, not a rulebook.** These patterns exist to spark creativity and provide proven foundations — NOT to constrain your design thinking.

### Key Principles:

1. **Creativity First** — Your ability to craft unique, modern UIs is your greatest strength. Don't let these patterns make every landing page look the same. Mix, match, modify, and invent new approaches.

2. **Patterns Are Starting Points** — Use them for inspiration and proven conversion psychology, but feel free to break the rules when you have a compelling creative vision.

3. **Avoid Repetition** — If a pattern feels stale or overused, innovate. The best designs often come from combining unexpected elements or reimagining established patterns.

4. **Framework-Free is possible when not using framework** — Many of these patterns can be achieved with **plain HTML, CSS, and JavaScript/TypeScript** without heavy libraries:
   - Scroll reveals → Intersection Observer API + CSS transitions
   - Parallax effects → CSS `transform` on scroll events
   - Morphing buttons → CSS `:hover`, `:active`, `:focus` states + transitions
   - Skeleton loading → CSS animations on placeholder divs
   - Kinetic typography → CSS `@keyframes` or simple JS text manipulation
   
   **When not using React/Next.js:** Plan your file structure thoughtfully, for example (note, just example):
   ```
   /landing/
   ├── index.html          # Semantic HTML structure
   ├── styles/
   │   ├── base.css        # Reset, typography, variables
   │   ├── components.css  # Reusable component styles
   │   └── animations.css  # All animation keyframes
   └── scripts/
       ├── main.js         # Core functionality
       ├── animations.js   # Scroll triggers, reveals
       └── interactions.js # Button states, forms
   ```

5. **Simple Often Wins** — A beautifully executed simple design beats a poorly executed complex one. Don't add patterns just because they exist.

---

## Pattern IDs Reference

When selecting patterns, use these exact IDs:

```
full_screen_video_hero, split_screen_hero, 3d_webgl_hero,
parallax_scrolling, scroll_triggered_reveals, sticky_pinned_sections, horizontal_scroll,
minimalist_typography, dark_mode_premium, gradient_color_rich, flat_illustration, photography_centric, isometric_technical,
scrollytelling_narrative, social_proof_heavy, long_form_sales_letter, interactive_gamified, pricing_comparison, product_showcase,
morphing_button_interactions, 3d_card_parallax_tilt, before_after_slider,
kinetic_typography, skeleton_loading
```

---

## Quick Pattern Lookup

### Universal Patterns (Include in Most Projects)
- `scroll_triggered_reveals` — Low complexity, high impact, mobile safe
- `social_proof_heavy` — Low complexity, very high impact, mobile safe
- `morphing_button_interactions` — Medium complexity, mobile safe

### Recommended High-Impact Patterns
- `social_proof_heavy` — Very high impact, low complexity
- `scrollytelling_narrative` — Very high impact, very high complexity
- `interactive_gamified` — Very high impact, high complexity
- `long_form_sales_letter` — Very high impact, medium complexity
- `full_screen_video_hero` — High impact (NOT mobile safe)
- `3d_webgl_hero` — Very high impact (NOT mobile safe)

### Mobile-Safe Patterns
✅ `scroll_triggered_reveals`, `social_proof_heavy`, `minimalist_typography`, `dark_mode_premium`, `gradient_color_rich`, `flat_illustration`, `photography_centric`, `pricing_comparison`, `product_showcase`, `morphing_button_interactions`, `skeleton_loading`, `kinetic_typography`, `long_form_sales_letter`, `interactive_gamified`, `isometric_technical`, `before_after_slider`

### NOT Mobile-Safe (Desktop Only)
❌ `parallax_scrolling`, `sticky_pinned_sections`, `horizontal_scroll`, `3d_webgl_hero`, `full_screen_video_hero`, `3d_card_parallax_tilt`, `scrollytelling_narrative`

### Low Complexity Patterns (Quick Development)
`scroll_triggered_reveals`, `social_proof_heavy`, `minimalist_typography`, `gradient_color_rich`, `skeleton_loading`

### Performance-Optimized Patterns
`minimalist_typography`, `scroll_triggered_reveals`, `skeleton_loading`, `social_proof_heavy`, `gradient_color_rich`

---

## Category 1: Hero Section Patterns

The hero is the first thing users see. These patterns define the above-the-fold experience.

### `full_screen_video_hero`
**Full-Screen Video Hero** — Cinematic looping video dominates the viewport.

- **Impact:** High | **Complexity:** Medium | **Mobile Safe:** ❌ | **Performance Cost:** High
- **Best for:** Product launches, brand storytelling, lifestyle products, premium positioning, emotional products, luxury, entertainment
- **Avoid for:** Mobile-first projects, low-bandwidth audiences, accessibility-critical sites
- **Conversion impact:** 80% higher conversions than static images, 88% more time on page
- **Required assets:** Video file (WebM <5MB, MP4 <10MB), poster image fallback
- **Technical notes:** Autoplay with muted, must respect `prefers-reduced-motion`
- **Libraries:** None required (native HTML5 video)

### `split_screen_hero`
**Split-Screen Hero** — Screen divided into two distinct halves (content + visual or content + form).

- **Impact:** Medium | **Complexity:** Low | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** Lead generation with forms, dual messaging, product comparison, SaaS, B2B
- **Avoid for:** Single-focus message landing pages
- **Conversion impact:** Keeps form visible while showing value proposition
- **Required assets:** Hero image
- **Technical notes:** CSS Grid or Flexbox, responsive stacking on mobile
- **Variations:** 50/50 split, 60/40 split, asymmetric diagonal split
- **Libraries:** `framer-motion` (optional)

### `3d_webgl_hero`
**3D/WebGL Hero** — Interactive 3D scene as the hero background.

- **Impact:** Very High | **Complexity:** High | **Mobile Safe:** ❌ | **Performance Cost:** Very High
- **Best for:** Tech products, creative tools, premium positioning, gaming, "wow factor" requirements
- **Avoid for:** Mobile-first products, low-bandwidth audiences, older devices, quick-load-required pages
- **Conversion impact:** High engagement, memorable first impression
- **Required assets:** 3D model file
- **Technical notes:** Requires Three.js, React Three Fiber, or Spline. Heavy performance cost.
- **Accessibility:** Must provide 2D fallback, respect reduced motion
- **Libraries:** `three`, `@react-three/fiber`, `@react-three/drei`

---

## Category 2: Scroll Animation Patterns

These patterns guide users through narrative with motion and reveal effects.

### `parallax_scrolling`
**Parallax Scrolling** — Background and foreground elements move at different speeds.

- **Impact:** Medium | **Complexity:** Medium | **Mobile Safe:** ❌ | **Performance Cost:** Medium
- **Best for:** Storytelling, portfolios, creative sites, marketing pages, creating depth and immersion
- **Avoid for:** iOS Safari primary audience (background-attachment:fixed broken), mobile-first, accessibility-critical, content-heavy pages
- **Critical note:** DISABLE on iOS Safari - background-attachment:fixed is broken
- **Conversion impact:** Increases scroll depth and engagement
- **Required assets:** Layered images
- **Technical notes:** GSAP ScrollTrigger or Framer Motion. Use transform only (not position).
- **Accessibility:** Disable on mobile, respect reduced motion
- **Libraries:** `gsap`

### `scroll_triggered_reveals`
**Scroll-Triggered Reveals** — Elements fade/slide in as they enter viewport.

- **Impact:** High | **Complexity:** Low | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** ANY landing page, content-heavy pages, feature sections (UNIVERSAL - recommended for all projects)
- **Avoid for:** None - this is an essential pattern
- **Conversion impact:** Creates rhythm, maintains attention, reduces cognitive load
- **Technical notes:** Intersection Observer, AOS library, or Framer Motion
- **Implementation:** Stagger timing (100-150ms between elements), subtle movements (20-40px)
- **Accessibility:** Respect reduced motion preference
- **Libraries:** `framer-motion` (recommended)

### `sticky_pinned_sections`
**Sticky/Pinned Sections** — Section stays fixed while content scrolls within it.

- **Impact:** High | **Complexity:** High | **Mobile Safe:** ❌ | **Performance Cost:** Medium
- **Best for:** Feature walkthroughs, product demos, step-by-step explanations, comparisons
- **Avoid for:** Mobile-primary audiences, short content pages
- **Conversion impact:** Forces users to consume content in sequence, high comprehension
- **Required assets:** Multiple content panels
- **Technical notes:** GSAP ScrollTrigger with pin. Complex to implement correctly.
- **Accessibility:** Ensure keyboard navigation works, provide skip option
- **Libraries:** `gsap`

### `horizontal_scroll`
**Horizontal Scroll** — Content scrolls horizontally instead of vertically.

- **Impact:** Medium | **Complexity:** High | **Mobile Safe:** ❌ | **Performance Cost:** Medium
- **Best for:** Portfolios, image galleries, timelines, case studies, unique navigation experiences
- **Avoid for:** Mobile-first sites, accessibility-critical sites, SEO-critical pages
- **Conversion impact:** Memorable, differentiating, high engagement
- **Required assets:** Sequential content
- **Technical notes:** GSAP ScrollTrigger, transform translateX on scroll
- **Accessibility:** Counter-intuitive for many users, provide navigation hints
- **Libraries:** `gsap`, `embla-carousel`

---

## Category 3: Visual Style Patterns

These patterns define the overall aesthetic and brand personality. **Choose ONE primary visual style per project.**

### `minimalist_typography`
**Minimalist Typography-Focused** — Large text, ample whitespace, minimal decoration.

- **Impact:** Medium | **Complexity:** Low | **Mobile Safe:** ✅ | **Performance Cost:** Very Low
- **Best for:** B2B SaaS, professional services, developer tools, luxury brands, writers, intellectual authority
- **Avoid for:** Visual products, e-commerce, entertainment sites
- **Key elements:** Strong font hierarchy, serif or modern sans-serif, 50%+ whitespace
- **Technical notes:** System fonts or premium web fonts (Inter, Söhne, GT America)
- **Color palette:** Limited (2-3 colors max), high contrast
- **Libraries:** None required

### `dark_mode_premium`
**Dark Mode Premium** — Black/gray backgrounds with strategic color accents.

- **Impact:** High | **Complexity:** Medium | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** Tech products, developer tools, creative software, gaming, premium positioning
- **Avoid for:** Healthcare, children's products, government sites, accessibility-critical
- **Key elements:** Subtle gradients, glow effects, one accent color
- **Color palette:** Background #000-#0a0a0a, Surface #18181b, Accent single vibrant
- **Libraries:** `tailwindcss` (recommended)

### `gradient_color_rich`
**Gradient & Color-Rich** — Vibrant gradients and bold color combinations.

- **Impact:** Medium | **Complexity:** Low | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** Consumer apps, creative tools, startups, youthful brands, young demographics
- **Avoid for:** Enterprise B2B, healthcare, finance, conservative industries
- **Key elements:** Mesh gradients, glassmorphism, colorful illustrations
- **Technical notes:** CSS gradients, blur effects for glass
- **Libraries:** None required

### `flat_illustration`
**Flat Illustration Style** — Custom vector illustrations with flat design aesthetic.

- **Impact:** Medium | **Complexity:** Medium | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** Abstract services, fintech, HR tech, insurtech, onboarding flows, explainer pages
- **Avoid for:** Luxury brands, technical audiences, photo-dependent industries
- **Required assets:** Custom illustrations or illustration library
- **Key elements:** Consistent illustration style, character scenes, icon systems
- **Technical notes:** SVG illustrations, consistent color palette
- **Sources:** undraw.co, humaaans.com, or custom illustrations
- **Libraries:** `lottie-react` (for animated illustrations)

### `photography_centric`
**Photography-Centric** — High-quality photos as primary visual element.

- **Impact:** High | **Complexity:** Medium | **Mobile Safe:** ✅ | **Performance Cost:** Medium
- **Best for:** E-commerce, lifestyle brands, real estate, travel, hospitality, food, fashion
- **Avoid for:** Abstract B2B services, developer tools, low-photo-quality situations
- **Required assets:** Professional photography
- **Key elements:** Hero images, product photography, lifestyle shots
- **Technical notes:** Image optimization critical (WebP, responsive images)
- **Libraries:** `next/image` (recommended for optimization)

### `isometric_technical`
**Isometric Technical** — Isometric 3D illustrations showing systems/architecture.

- **Impact:** Medium | **Complexity:** High | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** B2B tech, infrastructure, DevOps, cloud services, developer platforms, APIs
- **Avoid for:** Consumer products, emotional brands, budget-constrained projects
- **Required assets:** Isometric illustrations (custom or library)
- **Key elements:** Isometric graphics, system diagrams, technical credibility
- **Technical notes:** SVG isometric illustrations, animated connections
- **Libraries:** `framer-motion` (for animations)

---

## Category 4: Conversion Structure Patterns

These patterns optimize the path from visitor to customer.

### `scrollytelling_narrative`
**Scrollytelling Narrative** — Long-form storytelling through scroll-based reveals.

- **Impact:** Very High | **Complexity:** Very High | **Mobile Safe:** ❌ | **Performance Cost:** High
- **Best for:** Complex products, brand stories, annual reports, case studies, rich content
- **Avoid for:** Simple products, mobile-first sites, SEO-critical pages, quick-conversion goals
- **Conversion impact:** 400% higher engagement than standard layouts
- **Structure:** Setup → Problem → Solution → Proof → CTA
- **Required assets:** Rich content, multiple visuals
- **Technical notes:** Combines sticky sections, reveals, and parallax
- **Libraries:** `gsap`, `lenis` (for smooth scrolling)

### `social_proof_heavy`
**Social Proof Heavy** — Testimonials, logos, and numbers prominently featured.

- **Impact:** Very High | **Complexity:** Low | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** ANY landing page, SaaS, e-commerce, services (UNIVERSAL - recommended for all projects)
- **Avoid for:** Stealth-mode startups, companies with no customers yet
- **Required assets:** Testimonials, customer logos, reviews
- **Key elements:** Logo clouds, testimonial cards, statistics, trust badges
- **Placement:** Near CTAs, after claims, in hero section
- **Conversion impact:** Can increase conversions by 15-30%
- **Libraries:** None required

### `long_form_sales_letter`
**Long-Form Sales Letter** — Extensive copy following direct response principles.

- **Impact:** Very High | **Complexity:** Medium | **Mobile Safe:** ✅ | **Performance Cost:** Very Low
- **Best for:** High-ticket offers, info products, courses, coaching, complex solutions, affiliate marketing
- **Avoid for:** Simple products, impulse purchases, tech-savvy/design-conscious audiences
- **Required assets:** Compelling copy, testimonials
- **Structure:** Headline → Problem → Agitation → Solution → Proof → Offer → Guarantee → CTA
- **Key elements:** Subheadings, testimonials, bullets, urgency elements
- **Libraries:** None required

### `interactive_gamified`
**Interactive/Gamified** — Calculators, quizzes, or interactive tools.

- **Impact:** Very High | **Complexity:** High | **Mobile Safe:** ✅ | **Performance Cost:** Medium
- **Best for:** Lead generation, qualification, ROI demonstrations, personalized recommendations, customizable products
- **Avoid for:** Simple value propositions, privacy-sensitive audiences, quick-conversion goals
- **Required assets:** Calculator logic, quiz questions
- **Key elements:** Multi-step forms, progress indicators, personalized results
- **Conversion impact:** 2-3x higher engagement than static pages
- **Examples:** Pricing calculators, savings estimators, product finders
- **Libraries:** None required (custom implementation)

### `pricing_comparison`
**Pricing Comparison** — Clear pricing tiers with feature comparison.

- **Impact:** High | **Complexity:** Medium | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** SaaS, subscription products, tiered services, feature differentiation
- **Avoid for:** Single-price products, custom-pricing-only, early-stage products
- **Required assets:** Pricing tiers, feature list
- **Key elements:** 3 tiers (recommended highlighted), feature comparison table, annual/monthly toggle
- **Conversion tactics:** Anchor pricing, decoy tier, highlight "most popular"
- **Essential for:** Any product with multiple pricing options
- **Libraries:** None required

### `product_showcase`
**Product Showcase** — Visual product display with details and variations.

- **Impact:** High | **Complexity:** Medium | **Mobile Safe:** ✅ | **Performance Cost:** Medium
- **Best for:** E-commerce, physical products, digital products, software UI showcases
- **Avoid for:** Services, abstract products
- **Required assets:** Product images, gallery
- **Key elements:** Gallery, zoom, 360° view, color/size selectors
- **Technical notes:** Image lazy loading, skeleton states for loading
- **Conversion tactics:** Urgency (stock levels), social proof (reviews)
- **Libraries:** `next/image`, `embla-carousel`

---

## Category 5: Micro-Interaction Patterns

Small details that create premium impressions.

### `morphing_button_interactions`
**Morphing Button Interactions** — CTAs with state changes, loading states, and feedback.

- **Impact:** Medium | **Complexity:** Medium | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** All CTAs, form submissions, async actions (UNIVERSAL - recommended for all CTAs)
- **Avoid for:** Instant actions, destructive actions
- **Key elements:** Hover effects, loading spinners, success states, micro-animations
- **Conversion impact:** Reduces perceived wait time, increases click confidence
- **Technical notes:** CSS transitions or Framer Motion
- **Libraries:** `framer-motion` (recommended)

### `3d_card_parallax_tilt`
**3D Card Parallax Tilt** — Cards that tilt based on mouse position.

- **Impact:** Medium | **Complexity:** Medium | **Mobile Safe:** ❌ | **Performance Cost:** Low
- **Best for:** Feature cards, pricing cards, portfolio items
- **Avoid for:** Mobile-primary audiences, accessibility-critical sites
- **Key elements:** Mouse-following tilt, spotlight effect, depth layers
- **Technical notes:** preserve-3d CSS, mouse event tracking
- **Accessibility:** Disable on touch devices, respect reduced motion
- **Libraries:** `react-tilt` or `vanilla-tilt`

### `before_after_slider`
**Before/After Slider** — Draggable comparison between two states.

- **Impact:** High | **Complexity:** Medium | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** Transformations, photo editing, design changes, product comparisons, renovations
- **Avoid for:** Subtle differences, non-visual comparisons
- **Required assets:** Before image, after image
- **Conversion impact:** Up to 2x conversions for transformation-based products
- **Technical notes:** Drag handle, touch support, smooth transitions
- **Use cases:** Weight loss, home renovation, software updates
- **Libraries:** `react-compare-slider`

---

## Category 6: Typography & Loading Patterns

### `kinetic_typography`
**Kinetic Typography** — Animated text reveals and effects.

- **Impact:** High | **Complexity:** Medium | **Mobile Safe:** ✅ | **Performance Cost:** Low
- **Best for:** Hero headlines, brand names, key messages, attention capture
- **Avoid for:** Body text, accessibility-critical sites, long content
- **Key elements:** Letter-by-letter reveals, word scramble, typewriter effect
- **Technical notes:** GSAP SplitText or Framer Motion variants
- **Accessibility:** Provide static fallback for reduced motion
- **Libraries:** `framer-motion`, `gsap`

### `skeleton_loading`
**Skeleton Loading** — Placeholder shapes while content loads.

- **Impact:** Medium | **Complexity:** Low | **Mobile Safe:** ✅ | **Performance Cost:** Very Low
- **Best for:** Async content, dashboards, image galleries, data loading, feeds (RECOMMENDED for async content)
- **Avoid for:** Instant content, static pages
- **Conversion impact:** 30% faster perceived loading
- **Key elements:** Pulsing animation, content-shaped placeholders
- **Technical notes:** CSS or component library skeletons
- **Libraries:** None required (CSS implementation)

---

## Preset Combinations

Pre-configured pattern sets for common project types. Use these as starting points.

### SaaS Landing Page
**Required:** `scroll_triggered_reveals`, `social_proof_heavy`, `pricing_comparison`
**Recommended:** `dark_mode_premium`, `morphing_button_interactions`, `skeleton_loading`
**Optional:** `kinetic_typography`, `sticky_pinned_sections`
**Avoid:** `scrollytelling_narrative`, `horizontal_scroll`

### Developer Tool Landing
**Required:** `minimalist_typography`, `scroll_triggered_reveals`
**Recommended:** `dark_mode_premium`, `isometric_technical`, `morphing_button_interactions`
**Optional:** `3d_webgl_hero`, `pricing_comparison`
**Avoid:** `flat_illustration`, `gradient_color_rich`

### E-commerce Product Page
**Required:** `product_showcase`, `social_proof_heavy`
**Recommended:** `photography_centric`, `before_after_slider`, `scroll_triggered_reveals`
**Optional:** `morphing_button_interactions`
**Avoid:** `minimalist_typography`, `isometric_technical`

### Creative Agency Portfolio
**Required:** `scroll_triggered_reveals`
**Recommended:** `parallax_scrolling`, `horizontal_scroll`, `3d_webgl_hero`
**Optional:** `kinetic_typography`, `3d_card_parallax_tilt`
**Avoid:** `pricing_comparison`, `long_form_sales_letter`

### Startup Launch Page
**Required:** `scroll_triggered_reveals`, `social_proof_heavy`
**Recommended:** `gradient_color_rich`, `morphing_button_interactions`, `interactive_gamified`
**Optional:** `full_screen_video_hero`, `kinetic_typography`
**Avoid:** `scrollytelling_narrative`, `isometric_technical`

### Enterprise B2B Landing
**Required:** `social_proof_heavy`, `scroll_triggered_reveals`
**Recommended:** `minimalist_typography`, `isometric_technical`, `pricing_comparison`
**Optional:** `long_form_sales_letter`, `interactive_gamified`
**Avoid:** `gradient_color_rich`, `3d_webgl_hero`

### High-Ticket Sales Page
**Required:** `long_form_sales_letter`, `social_proof_heavy`
**Recommended:** `scroll_triggered_reveals`, `morphing_button_interactions`
**Optional:** `interactive_gamified`, `before_after_slider`
**Avoid:** `minimalist_typography`, `horizontal_scroll`

---

## Selection Rules by Constraint

### Mobile-First Projects
**Exclude:** `parallax_scrolling`, `sticky_pinned_sections`, `horizontal_scroll`, `3d_webgl_hero`, `3d_card_parallax_tilt`
**Prefer:** `minimalist_typography`, `scroll_triggered_reveals`, `skeleton_loading`, `social_proof_heavy`

### Performance-Critical Projects
**Exclude:** `3d_webgl_hero`, `full_screen_video_hero`, `scrollytelling_narrative`, `parallax_scrolling`
**Prefer:** `minimalist_typography`, `skeleton_loading`, `scroll_triggered_reveals`, `social_proof_heavy`

### Accessibility-Critical Projects
**Exclude:** `parallax_scrolling`, `horizontal_scroll`, `kinetic_typography`, `3d_card_parallax_tilt`, `3d_webgl_hero`
**Prefer:** `minimalist_typography`, `scroll_triggered_reveals`, `skeleton_loading`, `social_proof_heavy`

### Quick Development (Time-Critical)
**Exclude:** `3d_webgl_hero`, `scrollytelling_narrative`, `sticky_pinned_sections`, `isometric_technical`
**Prefer:** `scroll_triggered_reveals`, `social_proof_heavy`, `morphing_button_interactions`, `gradient_color_rich`

---

## Essential Libraries Reference

### Animation Libraries
| Library | Install | Used By |
|---------|---------|---------|
| `gsap` | `npm i gsap` | parallax_scrolling, sticky_pinned_sections, horizontal_scroll, scrollytelling_narrative, kinetic_typography |
| `framer-motion` | `npm i framer-motion` | scroll_triggered_reveals, morphing_button_interactions, kinetic_typography, split_screen_hero, isometric_technical |
| `lenis` | `npm i lenis` | scrollytelling_narrative (smooth scrolling) |

### 3D Libraries
| Library | Install | Used By |
|---------|---------|---------|
| `three` + React Three Fiber | `npm i three @react-three/fiber @react-three/drei` | 3d_webgl_hero |
| `react-tilt` | `npm i react-tilt` | 3d_card_parallax_tilt |

### UI Component Libraries
| Library | Install | Used By |
|---------|---------|---------|
| `react-compare-slider` | `npm i react-compare-slider` | before_after_slider |
| `embla-carousel` | `npm i embla-carousel embla-carousel-react` | horizontal_scroll, product_showcase |
| `lottie-react` | `npm i lottie-react` | flat_illustration (animated) |
| `next/image` | Built into Next.js | photography_centric, product_showcase |

---

## Pattern Selection Guide

### By Primary Goal

| Goal | Recommended Patterns |
|------|---------------------|
| **Build trust fast** | `social_proof_heavy` + `scroll_triggered_reveals` |
| **Explain complex product** | `sticky_pinned_sections` + `scrollytelling_narrative` |
| **Premium positioning** | `dark_mode_premium` + `3d_webgl_hero` + `morphing_button_interactions` |
| **Drive immediate action** | `full_screen_video_hero` + `social_proof_heavy` + `pricing_comparison` |
| **Generate leads** | `interactive_gamified` + `split_screen_hero` + `scroll_triggered_reveals` |
| **E-commerce** | `product_showcase` + `before_after_slider` + `photography_centric` |
| **SaaS conversion** | `pricing_comparison` + `social_proof_heavy` + `sticky_pinned_sections` |

### By Industry

| Industry | Recommended Combination |
|----------|------------------------|
| **B2B SaaS** | `minimalist_typography` + `social_proof_heavy` + `pricing_comparison` + `sticky_pinned_sections` |
| **Developer Tools** | `dark_mode_premium` + `minimalist_typography` + `pricing_comparison` |
| **Consumer App** | `gradient_color_rich` + `flat_illustration` + `full_screen_video_hero` |
| **E-commerce** | `photography_centric` + `product_showcase` + `before_after_slider` |
| **Fintech** | `flat_illustration` + `social_proof_heavy` + `interactive_gamified` |
| **Creative Agency** | `3d_webgl_hero` + `horizontal_scroll` + `parallax_scrolling` |

### Essential Patterns (Recommended for Most Projects)

These patterns provide the highest ROI and should be considered for nearly every landing page:

1. **`scroll_triggered_reveals`** — Creates rhythm and maintains attention
2. **`social_proof_heavy`** — Builds trust near conversion points
3. **`morphing_button_interactions`** — Polishes CTA experience
4. **`skeleton_loading`** — Improves perceived performance

---

## Performance Guidelines

| Metric | Target |
|--------|--------|
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total page weight | < 3MB |
| Hero video size | < 5MB |

---

## Accessibility Requirements

All patterns must:

1. **Respect `prefers-reduced-motion`** — Disable/reduce animations
2. **Maintain color contrast** — 4.5:1 for body text, 3:1 for large text
3. **Support keyboard navigation** — All interactive elements focusable
4. **Provide touch targets** — Minimum 44×44px on mobile
5. **Include fallbacks** — Static alternatives for heavy animations/3D

---

## Mobile Considerations

- Disable complex parallax effects
- Stack horizontal layouts vertically
- Reduce animation durations by 20-30%
- Use swipe carousels instead of horizontal scroll
- Test on mid-tier devices, not just flagships

---

## Core Principles

### 1. Conversion-First Design
Every visual choice must serve a psychological purpose:
- Does this guide eyes toward the CTA?
- Does this build trust or confusion?
- Does this reduce friction or add it?

### 2. The 3-Second Rule
Users decide in 3 seconds. Hero must:
1. Communicate value proposition clearly
2. Show clear next action (CTA)
3. Look professional

### 3. Pattern Combination Strategy
- Start with UNIVERSAL patterns: `scroll_triggered_reveals`, `social_proof_heavy`
- Add ONE primary visual style (Category 3)
- Add conversion structures based on business model (Category 4)
- Layer micro-interactions for polish (Category 5)
- Filter by constraints (mobile, performance, accessibility)

**Remember:** Patterns are tools, not rules. Combine strategically based on audience, offer complexity, conversion goal, and brand. Test everything.


----------------------------------------

## 05-scroll-triggered-reveals.md - Landing Page - Scroll Triggered Reveals

# Scroll-Triggered Reveal Animations

> Elements appear with choreographed animations as users scroll. The most universally applicable pattern.

## When to Use
- **Every landing page** — foundational animation pattern
- Feature sections, testimonials, pricing, any below-fold content

## Conversion Stats
- Progressive disclosure reduces cognitive overload
- Each reveal draws sequential attention
- Engagement increases with active scrolling

## Specs
| Element | Value |
|---------|-------|
| Trigger point | 60-80% viewport height |
| Duration | 0.3-0.8 seconds |
| Distance | 20-60px movement |
| Stagger delay | 0.1-0.2s between elements |
| Easing | ease-out or spring |

## Libraries
```bash
npm i framer-motion react-intersection-observer  # React
npm i gsap                                        # Any framework
npm i aos                                         # Simplest
```

## Implementation: Framer Motion (Recommended)
```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ScrollReveal({ children, direction = 'up', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const directions = {
    up: { y: 30 }, down: { y: -30 }, left: { x: 30 }, right: { x: -30 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Usage with stagger
<div className="grid grid-cols-3 gap-8">
  {features.map((f, i) => (
    <ScrollReveal key={f.id} delay={i * 0.15}>
      <FeatureCard {...f} />
    </ScrollReveal>
  ))}
</div>
```

## Implementation: AOS (Simplest)
```tsx
// Initialize once in app
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({ duration: 600, once: true, offset: 100 });
}, []);

// Use on any element
<div data-aos="fade-up">Fades up on scroll</div>
<div data-aos="fade-up" data-aos-delay="100">With delay</div>
<div data-aos="fade-left" data-aos-duration="800">From left</div>
```

## Implementation: GSAP
```tsx
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.from(el, {
      opacity: 0, y: 30,
      duration: 0.5, delay: i * 0.1,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });
}, []);
```

## Magic UI Component
```tsx
import BlurFade from '@/components/magicui/blur-fade';

{items.map((item, i) => (
  <BlurFade key={item} delay={0.2 + i * 0.1} inView>
    <p>{item}</p>
  </BlurFade>
))}
```

## Reduced Motion
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
<ScrollReveal duration={prefersReducedMotion ? 0 : 0.5}>
```

## Rules
- Always use `triggerOnce: true`
- Duration under 0.8 seconds
- Stagger 0.1-0.2 seconds
- Only animate `transform` and `opacity`
- Content must be visible without JS


----------------------------------------

## 08-minimalist-typography.md - Landing Page - Minimalist Typography

# Minimalist Typography-Only

> Large headlines, strategic whitespace, and minimal decoration create sophistication through restraint.

## When to Use
- B2B SaaS, professional services, developer tools, luxury brands
- When copy strength must carry the page

## When NOT to Use
- Products requiring visual demonstration
- Consumer products needing emotional imagery
- When you don't have strong copywriting

## Conversion Stats
- Appeals to logical thinkers
- Reduces cognitive load
- Faster load times increase conversions

## Specs
| Element | Value |
|---------|-------|
| Colors | Maximum 2-3 |
| Headline size | 48-96px |
| Section padding | 120px+ |
| Font pairing | 1 serif + 1 sans OR 2 weights same family |

## Typography Scale
```css
:root {
  --step-0: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);      /* 16-20px body */
  --step-2: clamp(1.5rem, 1.1rem + 2vw, 2.5rem);       /* 24-40px subhead */
  --step-3: clamp(2rem, 1.3rem + 3.5vw, 4rem);         /* 32-64px headline */
  --step-4: clamp(2.5rem, 1.5rem + 5vw, 6rem);         /* 40-96px hero */
}
```

## Implementation
```tsx
export function TypographyHero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-8 py-24">
      <div className="max-w-4xl">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Developer Platform
        </span>
        
        <h1 className="mt-6 text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-8xl">
          Build faster.
          <br />
          <span className="text-gray-400">Ship smarter.</span>
        </h1>
        
        <p className="mt-8 max-w-xl text-xl text-gray-600">
          The autonomous development platform that transforms your ideas into 
          production-ready applications.
        </p>
        
        <button className="mt-12 border-b-2 border-gray-900 pb-1 text-lg font-medium text-gray-900 hover:border-gray-600">
          Get started →
        </button>
      </div>
    </section>
  );
}
```

## Feature Section
```tsx
export function TypographyFeatures() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="text-5xl font-bold">Why choose us</h2>
        
        <div className="mt-20 grid gap-16 md:grid-cols-3">
          {features.map((f, i) => (
            <div key={i}>
              <span className="text-6xl font-bold text-gray-200">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-semibold">{f.title}</h3>
              <p className="mt-4 text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Font Pairings
```css
/* Option 1: Serif headlines + sans body */
h1 { font-family: 'Playfair Display', serif; }
body { font-family: 'Inter', sans-serif; }

/* Option 2: Same family, different weights */
h1 { font-family: 'Inter', sans-serif; font-weight: 700; }
body { font-family: 'Inter', sans-serif; font-weight: 400; }
```

## Rules
- Maximum 2-3 colors
- Generous whitespace (120px+ section padding)
- No decorative images
- Strong copy is essential
- Headlines should be scannable


----------------------------------------

## 15-social-proof-heavy.md - Landing Page - Social Proof Heavy

# Social Proof Heavy Design

> Strategic placement of testimonials, client logos, user counts, reviews, and case studies throughout the page builds trust and credibility through third-party validation.

---

## When to Use

- **Every landing page** — social proof is universal
- SaaS and subscription products
- High-ticket purchases requiring trust
- New brands without recognition
- Competitive markets needing differentiation

## When NOT to Use

- When you genuinely have no customers yet
- Stealth mode products
- Internal tools with no external users
- When testimonials are clearly fake

---

## Conversion Psychology

| Principle | Impact |
|-----------|--------|
| Social validation | **91%** of millennials trust reviews as much as friends |
| Decision confidence | **5+ reviews** = 4x more likely to purchase |
| Trust transfer | Known logos transfer credibility |
| Specificity | Specific numbers more believable than vague claims |

**Why it converts:** Humans are hardwired to follow the crowd. Social proof reduces perceived risk by showing others have succeeded with your product.

---

## Types of Social Proof

| Type | Trust Level | Best Placement |
|------|-------------|----------------|
| Customer logos | Medium | Below hero, above fold |
| Testimonials with photos | High | Mid-page, near pricing |
| Star ratings/reviews | High | Near CTA buttons |
| User/customer count | Medium | Hero section |
| Case studies | Very High | Dedicated section |
| Press mentions | High | Footer or hero |
| Certifications/badges | Medium | Footer, checkout |

---

## Visual Specifications

| Element | Specification |
|---------|---------------|
| Logo cloud | 5-8 logos, grayscale, equal sizing |
| Testimonial cards | Photo (48-64px), name, title, company |
| Star ratings | 5-star system, yellow/gold color |
| Stats | Large number (48-72px), small label |
| Case study cards | Logo, metric, brief quote |

---

## Implementation

### Logo Cloud (Trust Bar)

```tsx
// components/LogoCloud.tsx
const logos = [
  { name: 'Google', src: '/logos/google.svg' },
  { name: 'Microsoft', src: '/logos/microsoft.svg' },
  { name: 'Stripe', src: '/logos/stripe.svg' },
  { name: 'Shopify', src: '/logos/shopify.svg' },
  { name: 'Airbnb', src: '/logos/airbnb.svg' },
  { name: 'Spotify', src: '/logos/spotify.svg' },
];

export function LogoCloud() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-medium text-gray-500">
          Trusted by teams at world-class companies
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-8 w-auto opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Animated Logo Marquee

```tsx
// components/LogoMarquee.tsx
import { motion } from 'framer-motion';

export function LogoMarquee({ logos }: { logos: { name: string; src: string }[] }) {
  // Duplicate for seamless loop
  const duplicated = [...logos, ...logos];

  return (
    <div className="overflow-hidden border-y border-gray-100 bg-gray-50 py-8">
      <motion.div
        className="flex gap-12"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicated.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.name}
            className="h-8 w-auto flex-shrink-0 opacity-50 grayscale"
          />
        ))}
      </motion.div>
    </div>
  );
}
```

---

### Testimonial Grid

```tsx
// components/TestimonialGrid.tsx
const testimonials = [
  {
    quote: "Arvad cut our development time by 60%. It's like having a senior engineer on demand.",
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'TechCorp',
    image: '/testimonials/sarah.webp',
    rating: 5,
  },
  {
    quote: "The best investment we've made this year. ROI was visible within the first month.",
    author: 'Michael Torres',
    role: 'Engineering Lead',
    company: 'StartupXYZ',
    image: '/testimonials/michael.webp',
    rating: 5,
  },
  {
    quote: 'Finally, a tool that actually delivers on its promises. Our team loves it.',
    author: 'Emily Johnson',
    role: 'VP Engineering',
    company: 'ScaleUp Inc',
    image: '/testimonials/emily.webp',
    rating: 5,
  },
];

export function TestimonialGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">
          Loved by developers worldwide
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100"
            >
              {/* Star rating */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-gray-700">"{t.quote}"</p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Stats Section

```tsx
// components/StatsSection.tsx
const stats = [
  { value: '10,000+', label: 'Developers' },
  { value: '500K+', label: 'Projects created' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9/5', label: 'Average rating' },
];

export function StatsSection() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-white md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-indigo-200">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### Animated Counter Stats

```tsx
// components/AnimatedStats.tsx
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function AnimatedNumber({
  end,
  duration = 2000,
  suffix = '',
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function AnimatedStats() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-900">
            <AnimatedNumber end={10000} suffix="+" />
          </p>
          <p className="mt-2 text-gray-600">Developers</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-900">
            <AnimatedNumber end={500} suffix="K+" />
          </p>
          <p className="mt-2 text-gray-600">Projects</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-900">
            <AnimatedNumber end={99} suffix="%" />
          </p>
          <p className="mt-2 text-gray-600">Satisfaction</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-900">
            4.9<span className="text-2xl">/5</span>
          </p>
          <p className="mt-2 text-gray-600">Rating</p>
        </div>
      </div>
    </section>
  );
}
```

---

### Featured Testimonial (Large)

```tsx
// components/FeaturedTestimonial.tsx
export function FeaturedTestimonial() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Company logo */}
        <img
          src="/logos/featured-company.svg"
          alt="Company"
          className="mx-auto h-8"
        />

        {/* Large quote */}
        <blockquote className="mt-8 text-2xl font-medium leading-relaxed text-white md:text-3xl">
          "Arvad AI transformed how we build software. What used to take weeks
          now takes days. It's not just faster—it's better code."
        </blockquote>

        {/* Author */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <img
            src="/testimonials/ceo.webp"
            alt="John Smith"
            className="h-16 w-16 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-white">John Smith</p>
            <p className="text-gray-400">CEO, Featured Company</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### Case Study Cards

```tsx
// components/CaseStudyCards.tsx
const caseStudies = [
  {
    company: 'TechCorp',
    logo: '/logos/techcorp.svg',
    metric: '60%',
    metricLabel: 'faster development',
    quote: 'Reduced time-to-market significantly',
  },
  {
    company: 'StartupXYZ',
    logo: '/logos/startupxyz.svg',
    metric: '3x',
    metricLabel: 'team productivity',
    quote: 'Our small team now ships like a large one',
  },
  {
    company: 'Enterprise Inc',
    logo: '/logos/enterprise.svg',
    metric: '$2M',
    metricLabel: 'saved annually',
    quote: 'Dramatic reduction in development costs',
  },
];

export function CaseStudyCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">
          Real results from real companies
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {caseStudies.map((study) => (
            <a
              key={study.company}
              href={`/case-studies/${study.company.toLowerCase()}`}
              className="group rounded-2xl border border-gray-200 p-8 transition-all hover:border-indigo-200 hover:shadow-lg"
            >
              {/* Logo */}
              <img
                src={study.logo}
                alt={study.company}
                className="h-8"
              />

              {/* Metric */}
              <p className="mt-6 text-4xl font-bold text-indigo-600">
                {study.metric}
              </p>
              <p className="text-gray-600">{study.metricLabel}</p>

              {/* Quote */}
              <p className="mt-4 text-gray-700">"{study.quote}"</p>

              {/* Link */}
              <p className="mt-4 font-medium text-indigo-600 group-hover:underline">
                Read case study →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Review Aggregate Badge

```tsx
// components/ReviewBadge.tsx
export function ReviewBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-md ring-1 ring-gray-100">
      {/* Stars */}
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Rating */}
      <span className="font-semibold">4.9</span>

      {/* Count */}
      <span className="text-gray-500">from 2,847 reviews</span>

      {/* Source */}
      <img src="/logos/g2.svg" alt="G2" className="h-5" />
    </div>
  );
}
```

---

## Placement Strategy

```
┌──────────────────────────────────────┐
│  Hero Section                        │
│  └── User count or review badge      │
├──────────────────────────────────────┤
│  Logo Cloud (immediately after hero) │
├──────────────────────────────────────┤
│  Features Section                    │
├──────────────────────────────────────┤
│  Testimonial Grid                    │
├──────────────────────────────────────┤
│  Stats Section                       │
├──────────────────────────────────────┤
│  Pricing (with reviews nearby)       │
├──────────────────────────────────────┤
│  Featured Testimonial                │
├──────────────────────────────────────┤
│  Final CTA (with trust badges)       │
└──────────────────────────────────────┘
```

---

## Common Mistakes to Avoid

| Mistake | Problem | Solution |
|---------|---------|----------|
| Fake testimonials | Destroys trust if discovered | Only use real customers |
| No photos | Less believable | Always include headshots |
| Generic quotes | Not convincing | Get specific results/metrics |
| Too many logos | Overwhelming | Limit to 5-8 |
| Hidden testimonials | Wasted social proof | Place near CTAs |
| Outdated reviews | Seems abandoned | Keep recent (within 1 year) |

---

## Authenticity Checklist

- [ ] All testimonials from real customers
- [ ] Photos are actual people (not stock)
- [ ] Specific metrics and results mentioned
- [ ] Company names and roles verifiable
- [ ] Reviews link to original source
- [ ] Case studies have detailed stories
- [ ] Permission obtained for all usage

---

## Example Sites Using This Pattern

- Slack (logo cloud + testimonials)
- Notion (user count + testimonials)
- Linear (case studies + logos)
- Vercel (metrics + testimonials)
- Stripe (extensive case studies)


----------------------------------------

## 20-morphing-button-interactions.md - Landing Page - Morphing Button Interactions

# Morphing Button Micro-Interactions

> CTAs that respond dynamically to user interaction through state changes, loading animations, and success/error feedback. Transforms simple clicks into satisfying experiences.

---

## When to Use

- **All CTAs** — buttons should always have feedback
- Form submissions
- Add to cart actions
- Newsletter signups
- Any async operation

## When NOT to Use

- Navigation links (keep simple)
- When response is instant (<100ms)
- Destructive actions (need confirmation instead)

---

## Conversion Psychology

| Principle | Impact |
|-----------|--------|
| Feedback satisfaction | **20-30% higher** CTR with micro-interactions |
| Perceived performance | Loading states reduce abandonment |
| Completion confidence | Success states confirm action worked |
| Error recovery | Clear error states reduce frustration |

**Why it converts:** Micro-interactions provide immediate feedback, reducing uncertainty. Users feel confident their action worked, building trust in your product.

---

## Button States

| State | Visual Treatment | Duration |
|-------|------------------|----------|
| Default | Base styling | - |
| Hover | Subtle lift/glow | Instant (150ms) |
| Active/Pressed | Scale down slightly | Instant (100ms) |
| Loading | Spinner, morphed shape | Variable |
| Success | Checkmark, green | 1.5-2s then reset |
| Error | Shake, red | 1.5-2s then reset |
| Disabled | Reduced opacity | - |

---

## Required Libraries

```bash
# Framer Motion (recommended)
npm i framer-motion

# Alternative: Pure CSS animations
# No library needed
```

---

## Implementation

### Basic Hover & Press States (CSS)

```tsx
// components/Button.tsx
export function Button({
  children,
  variant = 'primary',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyles = `
    relative overflow-hidden rounded-lg px-6 py-3 font-semibold
    transition-all duration-150 ease-out
    active:scale-[0.98]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-indigo-600 text-white
      hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25
      hover:-translate-y-0.5
    `,
    secondary: `
      bg-white text-gray-900 border border-gray-300
      hover:bg-gray-50 hover:border-gray-400
    `,
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
```

---

### Loading State Button

```tsx
// components/LoadingButton.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ButtonState = 'idle' | 'loading' | 'success' | 'error';

interface LoadingButtonProps {
  children: React.ReactNode;
  onClick: () => Promise<void>;
}

export function LoadingButton({ children, onClick }: LoadingButtonProps) {
  const [state, setState] = useState<ButtonState>('idle');

  const handleClick = async () => {
    if (state !== 'idle') return;

    setState('loading');

    try {
      await onClick();
      setState('success');
      setTimeout(() => setState('idle'), 2000);
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 2000);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={state === 'loading'}
      className="relative overflow-hidden rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        backgroundColor:
          state === 'success'
            ? '#10b981'
            : state === 'error'
            ? '#ef4444'
            : '#4f46e5',
      }}
    >
      <AnimatePresence mode="wait">
        {state === 'idle' && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {children}
          </motion.span>
        )}

        {state === 'loading' && (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2"
          >
            <Spinner />
            Loading...
          </motion.span>
        )}

        {state === 'success' && (
          <motion.span
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="flex items-center justify-center gap-2"
          >
            <CheckIcon />
            Done!
          </motion.span>
        )}

        {state === 'error' && (
          <motion.span
            key="error"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="flex items-center justify-center gap-2"
          >
            <XIcon />
            Try again
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function Spinner() {
  return (
    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
```

---

### Morphing Shape Button

Button transforms from rectangle to circle during loading:

```tsx
// components/MorphingButton.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export function MorphingButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsLoading(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 2000);
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={isLoading}
      className="relative flex items-center justify-center overflow-hidden bg-indigo-600 font-semibold text-white"
      animate={{
        width: isLoading ? 56 : 200,
        height: 56,
        borderRadius: isLoading ? 28 : 12,
        backgroundColor: isSuccess ? '#10b981' : '#4f46e5',
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    >
      <AnimatePresence mode="wait">
        {!isLoading && !isSuccess && (
          <motion.span
            key="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Get Started
          </motion.span>
        )}

        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ rotate: { repeat: Infinity, duration: 1, ease: 'linear' } }}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray="60"
                strokeDashoffset="20"
              />
            </svg>
          </motion.div>
        )}

        {isSuccess && (
          <motion.svg
            key="success"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
```

---

### Shimmer Button (Magic UI Style)

```tsx
// components/ShimmerButton.tsx
export function ShimmerButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25">
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full" 
           style={{ transitionDuration: '1s' }} />

      {/* Content */}
      <span className="relative">{children}</span>
    </button>
  );
}
```

---

### Pulse Border Button

```tsx
// components/PulseBorderButton.tsx
export function PulseBorderButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="group relative rounded-lg bg-white px-8 py-4 font-semibold text-gray-900">
      {/* Animated border */}
      <span className="absolute inset-0 rounded-lg border-2 border-indigo-500 opacity-0 transition-opacity group-hover:animate-pulse group-hover:opacity-100" />

      {/* Static border */}
      <span className="absolute inset-0 rounded-lg border-2 border-gray-200 transition-colors group-hover:border-indigo-200" />

      {/* Content */}
      <span className="relative">{children}</span>
    </button>
  );
}
```

---

### Error Shake Animation

```tsx
// components/ShakeButton.tsx
import { motion, useAnimation } from 'framer-motion';

export function ShakeButton({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();

  const triggerShake = () => {
    controls.start({
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    });
  };

  return (
    <motion.button
      animate={controls}
      onClick={triggerShake}
      className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white"
    >
      {children}
    </motion.button>
  );
}
```

---

### Ripple Effect (Material Design)

```tsx
// components/RippleButton.tsx
import { useState, useRef } from 'react';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function RippleButton({ children }: { children: React.ReactNode }) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white"
    >
      {/* Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute animate-ripple rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Content */}
      <span className="relative">{children}</span>
    </button>
  );
}
```

```css
/* globals.css */
@keyframes ripple {
  from {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  to {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

.animate-ripple {
  animation: ripple 0.6s ease-out forwards;
}
```

---

### Add to Cart Button

```tsx
// components/AddToCartButton.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AddToCartButton() {
  const [state, setState] = useState<'idle' | 'adding' | 'added'>('idle');

  const handleClick = async () => {
    setState('adding');
    await new Promise((r) => setTimeout(r, 1000));
    setState('added');
    setTimeout(() => setState('idle'), 2000);
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={state === 'adding'}
      className="relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-gray-900 px-6 font-semibold text-white"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence mode="wait">
        {state === 'idle' && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </motion.span>
        )}

        {state === 'adding' && (
          <motion.span
            key="adding"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <motion.svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="60" strokeDashoffset="20" />
            </motion.svg>
            Adding...
          </motion.span>
        )}

        {state === 'added' && (
          <motion.span
            key="added"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="flex items-center gap-2 text-green-400"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Added!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
```

---

## Timing Guidelines

| State Transition | Duration |
|-----------------|----------|
| Hover | 150-200ms |
| Press/Active | 100ms |
| Loading start | 200ms |
| Success/Error | 300ms appear |
| Reset to idle | After 1.5-2s |
| Total interaction | < 500ms feel |

---

## Common Mistakes to Avoid

| Mistake | Problem | Solution |
|---------|---------|----------|
| No loading state | Users click multiple times | Always show loading |
| No feedback | Users unsure if action worked | Success/error states |
| Too slow animation | Feels sluggish | Keep under 300ms |
| Jarring transitions | Unpolished feel | Use easing functions |
| Blocking interaction | Frustrating | Enable after completion |
| No disabled state | Double submissions | Disable during loading |

---

## Accessibility

```tsx
// 1. Announce state changes
<button
  aria-busy={isLoading}
  aria-disabled={isLoading}
>
  {isLoading ? 'Loading...' : 'Submit'}
</button>

// 2. Visible focus states
<button className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

// 3. Respect reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.button
  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
>
```

---

## Example Sites Using This Pattern

- Stripe (loading buttons)
- Linear (success states)
- Vercel (deployment buttons)
- Notion (action buttons)
- Figma (export buttons)


----------------------------------------

## 24-skeleton-loading.md - Landing Page - Skeleton Loading

# Skeleton Loading Screens

> Gray placeholder shapes that mimic the final layout structure, with pulsating shimmer effects, creating perceived performance improvements while content loads.

---

## When to Use

- Async content loading (API calls)
- Image-heavy sections
- User-generated content feeds
- Dashboard data loading
- Any content that takes >200ms to load

## When NOT to Use

- Instant/cached content
- Small inline loaders
- When content structure is unpredictable
- Error states (show error, not skeleton)

---

## Conversion Psychology

| Principle | Impact |
|-----------|--------|
| Perceived performance | Users perceive **20-30% faster** loading |
| Reduced abandonment | Progress indication keeps users engaged |
| Layout stability | Prevents jarring content jumps (CLS) |
| Expectation setting | Shows what's coming, reducing anxiety |

**Why it converts:** Skeleton screens make your app feel faster than it is. Users are less likely to abandon when they see progress, even if actual load time is unchanged.

---

## Visual Specifications

| Element | Specification |
|---------|---------------|
| Background color | #e5e7eb (gray-200) or similar |
| Shimmer gradient | white/transparent sweep |
| Animation duration | 1.5-2 seconds per sweep |
| Border radius | Match final content (4-8px typically) |
| Opacity | 100% (not transparent) |

### Sizing Rules

| Content Type | Skeleton Size |
|--------------|---------------|
| Headline | Height of text, 60-80% width |
| Body text | Height of line, 100% first, 80% last |
| Avatar | Exact size, rounded |
| Image | Exact aspect ratio |
| Button | Exact size |

---

## Implementation

### Basic Skeleton Component

```tsx
// components/Skeleton.tsx
interface SkeletonProps {
  className?: string;
  animate?: boolean;
}

export function Skeleton({ className = '', animate = true }: SkeletonProps) {
  return (
    <div
      className={`
        rounded bg-gray-200
        ${animate ? 'animate-pulse' : ''}
        ${className}
      `}
    />
  );
}

// Usage
<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-5/6" />
```

---

### Shimmer Skeleton (Better Visual)

```tsx
// components/ShimmerSkeleton.tsx
export function ShimmerSkeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded bg-gray-200
        before:absolute before:inset-0
        before:-translate-x-full
        before:animate-shimmer
        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/60
        before:to-transparent
        ${className}
      `}
    />
  );
}
```

```css
/* globals.css */
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 1.5s infinite;
}
```

---

### Card Skeleton

```tsx
// components/CardSkeleton.tsx
export function CardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      {/* Image placeholder */}
      <Skeleton className="aspect-video w-full rounded-lg" />

      {/* Title */}
      <Skeleton className="mt-4 h-6 w-3/4" />

      {/* Description lines */}
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />

      {/* Meta */}
      <div className="mt-4 flex items-center gap-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
}
```

---

### Content Skeleton Examples

```tsx
// components/skeletons/ArticleSkeleton.tsx
export function ArticleSkeleton() {
  return (
    <article className="mx-auto max-w-2xl">
      {/* Title */}
      <Skeleton className="h-10 w-4/5" />
      
      {/* Meta */}
      <div className="mt-4 flex items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div>
          <Skeleton className="h-4 w-32" />
          <Skeleton className="mt-1 h-3 w-24" />
        </div>
      </div>

      {/* Featured image */}
      <Skeleton className="mt-8 aspect-video w-full rounded-xl" />

      {/* Content paragraphs */}
      <div className="mt-8 space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <div className="mt-6 space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </article>
  );
}

// components/skeletons/ProfileSkeleton.tsx
export function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-16 w-16 rounded-full" />
      <div>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="mt-2 h-4 w-32" />
      </div>
    </div>
  );
}

// components/skeletons/TableRowSkeleton.tsx
export function TableRowSkeleton() {
  return (
    <tr>
      <td className="py-4 pr-4">
        <Skeleton className="h-4 w-24" />
      </td>
      <td className="py-4 pr-4">
        <Skeleton className="h-4 w-32" />
      </td>
      <td className="py-4 pr-4">
        <Skeleton className="h-4 w-20" />
      </td>
      <td className="py-4">
        <Skeleton className="h-8 w-16 rounded" />
      </td>
    </tr>
  );
}

// components/skeletons/StatsSkeleton.tsx
export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="rounded-xl border border-gray-200 p-6">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="mt-2 h-8 w-24" />
        </div>
      ))}
    </div>
  );
}
```

---

### Feed/List Skeleton

```tsx
// components/FeedSkeleton.tsx
export function FeedSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-6">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="flex gap-4">
          {/* Avatar */}
          <Skeleton className="h-12 w-12 flex-shrink-0 rounded-full" />

          {/* Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-16" />
            </div>

            {/* Body */}
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-1 h-4 w-4/5" />

            {/* Actions */}
            <div className="mt-3 flex gap-4">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### Dashboard Grid Skeleton

```tsx
// components/DashboardSkeleton.tsx
export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Stats row */}
      <div className="grid gap-6 md:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-2 h-8 w-20" />
            <Skeleton className="mt-4 h-2 w-full rounded-full" />
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-4 h-64 w-full rounded-lg" />
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-4 h-64 w-full rounded-lg" />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <Skeleton className="h-6 w-48" />
        <div className="mt-6 space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

### Conditional Loading Pattern

```tsx
// hooks/useAsync.ts
export function useAsync<T>(asyncFn: () => Promise<T>) {
  const [state, setState] = useState<{
    loading: boolean;
    error: Error | null;
    data: T | null;
  }>({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    asyncFn()
      .then((data) => setState({ loading: false, error: null, data }))
      .catch((error) => setState({ loading: false, error, data: null }));
  }, []);

  return state;
}

// Usage
function UserProfile({ userId }: { userId: string }) {
  const { loading, error, data } = useAsync(() => fetchUser(userId));

  if (loading) return <ProfileSkeleton />;
  if (error) return <ErrorState error={error} />;
  return <Profile user={data} />;
}
```

---

### Staggered Skeleton Appearance

```tsx
// components/StaggeredSkeleton.tsx
import { motion } from 'framer-motion';

export function StaggeredSkeleton() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
      className="space-y-4"
    >
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Skeleton className="h-20 w-full rounded-xl" />
        </motion.div>
      ))}
    </motion.div>
  );
}
```

---

### Skeleton with Tailwind Plugin

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
};
```

```tsx
// components/Skeleton.tsx
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-md bg-gray-200
        before:absolute before:inset-0
        before:-translate-x-full before:animate-shimmer
        before:bg-gradient-to-r before:from-transparent
        before:via-gray-100 before:to-transparent
        ${className}
      `}
    />
  );
}
```

---

## Dark Mode Skeletons

```tsx
// components/DarkSkeleton.tsx
export function DarkSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-md bg-gray-800
        before:absolute before:inset-0
        before:-translate-x-full before:animate-shimmer
        before:bg-gradient-to-r before:from-transparent
        before:via-gray-700 before:to-transparent
        ${className}
      `}
    />
  );
}
```

---

## Best Practices

### Match Final Layout Exactly

```tsx
// ❌ BAD - Generic skeleton
<div className="space-y-4">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
</div>

// ✅ GOOD - Matches actual content structure
<div className="space-y-4">
  <Skeleton className="h-6 w-3/4" /> {/* Title is larger, shorter */}
  <Skeleton className="h-4 w-full" /> {/* Full line */}
  <Skeleton className="h-4 w-5/6" />  {/* Last line shorter */}
</div>
```

### Progressive Loading

```tsx
// Load critical content first, show skeletons for rest
function Page() {
  const { data: user, loading: userLoading } = useUser();
  const { data: posts, loading: postsLoading } = usePosts();

  return (
    <div>
      {/* Critical - show immediately or skeleton */}
      {userLoading ? <ProfileSkeleton /> : <Profile user={user} />}

      {/* Secondary - can stay skeleton longer */}
      {postsLoading ? <FeedSkeleton count={10} /> : <Feed posts={posts} />}
    </div>
  );
}
```

---

## Common Mistakes to Avoid

| Mistake | Problem | Solution |
|---------|---------|----------|
| Size mismatch | Layout shift when content loads | Match dimensions exactly |
| Too many bones | Overwhelming, slow | Simplify, show key elements |
| No animation | Looks broken | Add pulse or shimmer |
| Wrong duration | Too fast/slow | 1.5-2s is optimal |
| Spinner + skeleton | Confusing | Use one or the other |
| Skeleton for errors | Confusing | Show error state instead |

---

## Performance Impact

```tsx
// Skeleton reduces perceived load time
// Actual: 2000ms
// Perceived with spinner: ~2000ms
// Perceived with skeleton: ~1400ms (30% improvement)

// CLS (Cumulative Layout Shift) improvement
// Without skeleton: CLS varies
// With skeleton: CLS = 0 (no shift)
```

---

## Accessibility

```tsx
// 1. Announce loading state
<div role="status" aria-label="Loading content">
  <CardSkeleton />
  <span className="sr-only">Loading...</span>
</div>

// 2. Don't animate for reduced motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<Skeleton animate={!prefersReducedMotion} />

// 3. Provide loading progress if known
<div role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
  <Skeleton />
</div>
```

---

## Example Sites Using This Pattern

- Facebook (feed loading)
- LinkedIn (posts, profiles)
- YouTube (video cards)
- Slack (messages)
- Notion (page content)
- Linear (issues, projects)


----------------------------------------



## Important Reminders

1. These patterns were carefully selected for this specific project
2. Apply the patterns consistently across all landing page components
3. Prioritize the patterns listed in the usage instruction
4. When patterns conflict, the usage instruction takes precedence
5. Implement patterns using the project's technology stack (check other task files)
