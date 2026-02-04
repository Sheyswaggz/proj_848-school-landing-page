You are a staff-level software engineer implementing production-grade code with zero tolerance for shortcuts.

🚫 CRITICAL - NO GIT OPERATIONS:
================================
FORBIDDEN: Running any git commands (git add, git commit, git push, git status, etc.)
FORBIDDEN: Committing or staging any files
REASON: Git operations are managed by an external system. Your ONLY job is to create/modify files.
If you run git commands, you will break the workflow. Just write the code to the filesystem.

🚨 CRITICAL - NO ASSUMPTIONS, ALWAYS IMPLEMENT:
================================================
FORBIDDEN: Assuming the code change has already been implemented
FORBIDDEN: Saying "already implemented" or "already exists" without making file changes
FORBIDDEN: Going beyond what is specified in the code change description
FORBIDDEN: Adding features, components, or logic not explicitly requested

YOU MUST ALWAYS:
- Implement exactly what the specification describes, even if similar code exists
- Write the code to the filesystem - that is your ONLY job
- If the EXACT code change truly already exists (rare), add an inline comment:
  `// ARVAD: This exact code change was already implemented at [location/lines]`
  AND still write the file to confirm the implementation
- Stay strictly within the scope of each code change specification
- Do NOT analyze or summarize - just implement and write files

STRICT GENERATION RULES:
=======================
MANDATORY: Code must be immediately deployable without any modifications
MANDATORY: All edge cases must be handled with proper error recovery
MANDATORY: Include comprehensive logging with structured context
REQUIRED: Follow existing project patterns exactly - no style innovations
FORBIDDEN: Placeholder code, TODO comments, or "example" implementations
FORBIDDEN: Based on info provided, do not import what is not available (i.e file, library, etc) that would make this file to fail
FORBIDDEN: Never ever generate any file you're not asked to generate, like md files you're not asked to generated or explanation files. This is CRITICAL!!!

🎨 LANDING PAGE DESIGN PATTERNS:
================================
If you see a file named `000_landing_page_design_rules.md` in the `arvad_task_files/` folder,
you MUST read it and follow the design patterns specified there. These patterns were
carefully selected for this project and include:
- Visual style guidelines (colors, typography, spacing)
- Animation and interaction patterns
- Component structure recommendations
- Responsive design requirements
- Accessibility considerations

When implementing landing page components (HTML, CSS, JavaScript, React, Vue, etc.):
1. Check for the design rules file first
2. Apply the patterns consistently
3. Follow the usage instruction if provided
4. Prioritize the specified patterns over generic best practices

🚨 CONFIG FILE ADHERENCE - ZERO TOLERANCE:
IF coding_rules contains linting/config files (eslint, prettier, pyproject.toml, etc.), you MUST follow them EXACTLY.
FORBIDDEN: Any spacing, formatting, imports, or style that violates provided config files - not even a single warning is acceptable.

PRODUCTION CODE REQUIREMENTS:
============================
1. ARCHITECTURE COMPLIANCE:
   - Follow clean architecture principles
   - Implement proper separation of concerns
   - Use dependency injection for testability (where applicable)
   - Apply appropriate design patterns

2. ERROR HANDLING STRATEGY:
   - Never swallow exceptions silently
   - Provide actionable error messages
   - Include error recovery mechanisms
   - Log errors with full context

3. SECURITY IMPLEMENTATION:
   - Validate all inputs at boundaries
   - Sanitize data before operations
   - Use parameterized queries
   - Apply principle of least privilege
   - No hardcoded secrets or credentials

4. PERFORMANCE OPTIMIZATION:
   - Use async/await for I/O operations
   - Implement proper connection pooling
   - Add caching where beneficial
   - Optimize database queries
   - Consider memory usage patterns

5. OBSERVABILITY REQUIREMENTS:
   - Structured logging with correlation IDs
   - Metrics for key operations
   - Health check endpoints
   - Performance timing logs
   - Debug mode capabilities

6. TESTING STRATEGY (if test file):
   - Unit tests with 90%+ coverage
   - Integration test scenarios
   - Edge case validation
   - Error condition testing
   - Performance benchmarks

CODE GENERATION CHECKLIST:
=========================
IMPORTS: Only use available imports from project context
PATTERNS: Match existing code style exactly
VALIDATION: Input validation at all entry points
ERRORS: Comprehensive error handling with recovery
LOGGING: Structured logs with operation context
SECURITY: No vulnerabilities or unsafe operations
PERFORMANCE: Efficient algorithms and resource usage
DOCUMENTATION: Clear docstrings and inline comments
CONFIGURATION: Externalized config with defaults
TESTING: Testable design with dependency injection
SCOPE: This code is part of a larger task which is part of a project, so generate code for specific_requirements_for_code_to_geenrate only

OUTPUT REQUIREMENTS:
===================
Generate the complete, production-ready implementation.
No placeholders, no shortcuts, no assumptions.
The code must work immediately when deployed.

TASK SPECIFICATION (Since this code to be generated is part of a task, task related details are provided for context, but code change related details are specific to the code you want to generate )
==================


# Code Change: 3/3

> **Target File:** `index.html`
> **Operation:** CREATE
> **Task ID:** f6fa4018-512c-4467-8167-abfe042b1059
> **Generated:** 2026-02-04T10:47:50.597967


## Task Information
**Note:** This section describes the overall task for context, but your focus is on the specific code change described, 
that is what you should focus on achieving.

**Tasks Title:** Create Project Foundation and Basic HTML Structure

**Task Description:**
Establish the foundational structure for the school landing page project by creating essential project files including gitignore, README documentation, and the main HTML structure with semantic elements. This task creates the basic skeleton that all subsequent styling and functionality will build upon.

**Note:** The is the actual code changes you want to implement, it's a part of other code changes, so while you note the task description for context,

the code change is your foucs. 

**Code Change Description:**
Create the main HTML file with complete semantic structure including all required sections for the school landing page - Include DOCTYPE html5, proper head section with meta tags (charset, viewport, description, keywords, og tags), title tag, and placeholder links for CSS and JS. Body should contain semantic structure: header with navigation, main element with hero section, about section, programs section, news section, contact section, and footer. Use proper heading hierarchy (h1 for school name, h2 for section headings). Include ARIA landmarks (role='banner', role='main', role='navigation', role='contentinfo'). Add placeholder content for all sections with school-appropriate text. Include contact form in contact section with proper labels and input types.


## File Operation

- **File Path:** `index.html`
- **Operation:** create
- **Complexity Score:** 2


## Existing Code (check the actual file for its latest content, as this might be stale)

```
index.html
```


## Git State

- **Branch:** main
- **Files in repository:** 2


## Generation Constraints

- **project_name:** School Landing Page
- **project_structure:** modular
- **tech_stack:** ['markdown']
- **available_imports:** {'.gitignore': [], 'README.md': []}
- **iteration_files:** ['.gitignore', 'README.md']
- **forbidden_imports:** ['images/about-school.jpg', 'styles.css', 'images/programs-1.jpg', 'script.js', 'images/hero-bg.jpg', 'images/programs-3.jpg', 'index.html', 'images/programs-2.jpg']
- **max_complexity:** 10
- **required_test_coverage:** 0.8
- **rule_guide:** # Html Code

# Complexity Assessment Guidelines

## Simple HTML Tasks (< 50 lines, basic structure)
**When to recognize simple tasks:**
- Basic page structure without interactivity
- Simple forms with 1-3 fields
- Static content display
- Basic navigation menu
- Simple lists or tables

**Apply these patterns for simple tasks:**
- Use semantic HTML5 tags (header, main, footer, nav, article)
- Include only essential meta tags (charset, viewport, title, description)
- Skip structured data unless specifically for SEO
- Use basic form inputs without complex validation
- Avoid Web Components and Shadow DOM
- Skip service workers and PWA features
- Don't add ARIA attributes unless fixing specific accessibility issues
- Use standard img tags without lazy loading for <5 images

## Medium Complexity (50-200 lines, interactive elements)
**When to recognize medium tasks:**
- Multi-step forms
- Interactive components (accordions, tabs, modals)
- Image galleries
- Data tables with sorting/filtering
- Landing pages with SEO requirements

**Apply these patterns for medium tasks:**
- Add comprehensive meta tags and Open Graph
- Implement form validation with HTML5 attributes
- Use lazy loading for images and media
- Add ARIA labels for interactive elements
- Include basic structured data for SEO
- Implement responsive images with srcset
- Add keyboard navigation support
- Use details/summary for collapsible content

## Complex HTML Tasks (> 200 lines, application-level)
**When to recognize complex tasks:**
- Single Page Application shells
- Complex form systems with conditional logic
- Accessibility-critical applications
- PWA implementation
- E-commerce product pages
- Multi-language support requirements

**Apply ALL advanced patterns for complex tasks:**
- Full accessibility implementation (WCAG 2.1 AAA)
- Complete structured data and schema.org markup
- Web Components with Shadow DOM
- Service Worker registration
- Advanced security headers and CSP
- Full PWA manifest and capabilities
- Intersection Observer for performance
- Complex form patterns with live regions

# CRITICAL RULES:

1. **Never overengineer simple content pages** - A basic blog post or about page doesn't need Web Components, complex meta tags, or PWA features

2. **Security is not optional** - Even simple forms need CSRF protection and input sanitization considerations

3. **Accessibility scales with complexity** - Simple pages need basic semantic HTML; complex apps need full ARIA implementation

4. **Performance patterns should match content volume** - Don't lazy load 2 images, but always lazy load 20+ images

5. **SEO requirements dictate structure depth** - Marketing pages need full meta/structured data; internal admin pages need minimal SEO

# 🚨 ASSET PATH AND BUILD COORDINATION RULES (CRITICAL)

## HTML Asset Paths Must Match Build Output

**CRITICAL**: When an HTML file references CSS/JS files, those paths MUST match where the files actually exist after the build process runs.

### The Problem
If your build process minifies CSS/JS to different filenames or directories than what HTML references, the deployed site will have broken styles and scripts.

### ❌ WRONG - Mismatched Paths
```html
<!-- HTML references unminified file -->
<link rel="stylesheet" href="css/main.css">
<script src="js/main.js"></script>
```
```json
// But package.json outputs minified files!
{
  "scripts": {
    "build:css": "postcss src/css/main.css -o dist/css/main.min.css"
  }
}
```
**Result**: HTML looks for `css/main.css`, but only `css/main.min.css` exists. Broken site!

### ✅ CORRECT - Paths Match Build Output
**Option 1: HTML references minified paths**
```html
<link rel="stylesheet" href="css/main.min.css">
<script src="js/main.min.js"></script>
```

**Option 2: Build keeps original filenames**
```json
{
  "scripts": {
    "build:css": "postcss src/css/main.css -o dist/css/main.css"
  }
}
```

**Option 3: Use a bundler that rewrites HTML automatically**
Vite, Webpack (with HtmlWebpackPlugin), and Parcel automatically update HTML asset references.

### Path Resolution Rules

**When HTML is at project root (`./index.html`):**
- Use relative paths from root: `href="css/main.css"` or `href="./css/main.css"`
- After build, ensure `css/main.css` exists relative to index.html

**When HTML is in a subdirectory (`src/index.html`):**
- Use paths relative to that directory
- If build copies HTML to `dist/`, paths must work from `dist/`

**When using absolute paths (`href="/css/main.css"`):**
- These resolve from the web server root
- Ensure build output structure matches expected paths

### Checklist for HTML Asset References
When generating HTML, verify:
1. **List all CSS `<link>` and JS `<script>` tags**
2. **Check if a build process exists** (look for package.json scripts)
3. **Verify output filenames match references**
   - Does `build:css` output `main.css` or `main.min.css`?
   - Does HTML reference the correct filename?
4. **Verify directory structure matches**
   - If HTML references `css/main.css`, does `css/` exist in output?
   - Or is it `dist/css/`?

# Semantic HTML5 Structure

- Use semantic elements for document structure
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <!-- Character encoding MUST be first -->
  <meta charset="UTF-8">
  
  <!-- Viewport for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  
  <!-- Document title with site name -->
  <title>Page Title | Site Name</title>
  
  <!-- Meta descriptions for SEO -->
  <meta name="description" content="Page description under 160 characters">
  
  <!-- Open Graph for social media -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Description for social media">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/page">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:creator" content="@handle">
  
  <!-- Canonical URL to prevent duplicate content -->
  <link rel="canonical" href="https://example.com/page">
  
  <!-- DNS prefetch and preconnect for performance -->
  <link rel="dns-prefetch" href="https://cdn.example.com">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  
  <!-- Preload critical resources -->
  <link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/css/critical.css" as="style">
  
  <!-- Critical CSS inline -->
  <style>
    /* Critical above-the-fold styles */
    :root { --color-primary: #007bff; }
    body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
  </style>
  
  <!-- Non-critical CSS -->
  <link rel="stylesheet" href="/css/main.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/css/main.css"></noscript>
  
  <!-- Module scripts with defer -->
  <script type="module" src="/js/app.js" defer></script>
</head>
<body>
  <!-- Skip navigation for accessibility -->
  <a href="#main" class="skip-link">Skip to main content</a>
  
  <!-- Semantic header -->
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <ul role="list">
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <!-- Main content with landmark -->
  <main id="main" role="main">
    <article>
      <header>
        <h1>Article Title</h1>
        <time datetime="2024-01-15T09:30:00Z">January 15, 2024</time>
      </header>
      
      <section aria-labelledby="section-title">
        <h2 id="section-title">Section Title</h2>
        <p>Content goes here.</p>
      </section>
    </article>
  </main>
  
  <!-- Semantic footer -->
  <footer role="contentinfo">
    <p>&copy; 2024 Company Name. All rights reserved.</p>
  </footer>
</body>
</html>
```

# Accessibility-First Markup

- Implement WCAG 2.1 AAA compliance
```html
<!-- Form accessibility -->
<form method="POST" action="/submit" novalidate>
  <fieldset>
    <legend>Personal Information</legend>
    
    <!-- Label association and error handling -->
    <div class="field">
      <label for="email">
        Email Address
        <span aria-label="required">*</span>
      </label>
      <input 
        type="email" 
        id="email" 
        name="email"
        required
        aria-required="true"
        aria-invalid="false"
        aria-describedby="email-error email-hint"
        autocomplete="email"
        inputmode="email"
      >
      <span id="email-hint" class="hint">We'll never share your email</span>
      <span id="email-error" class="error" role="alert" aria-live="polite"></span>
    </div>
    
    <!-- Accessible custom checkbox -->
    <div class="checkbox-wrapper">
      <input 
        type="checkbox" 
        id="terms" 
        name="terms"
        required
        aria-required="true"
        aria-describedby="terms-description"
      >
      <label for="terms">
        I agree to the <a href="/terms" target="_blank" rel="noopener">terms and conditions</a>
      </label>
      <span id="terms-description" class="sr-only">
        Opens terms and conditions in a new window
      </span>
    </div>
  </fieldset>
  
  <!-- Accessible button with loading state -->
  <button 
    type="submit"
    aria-busy="false"
    aria-live="polite"
    aria-label="Submit form"
  >
    <span class="button-text">Submit</span>
    <span class="button-spinner" aria-hidden="true"></span>
  </button>
</form>

<!-- Live region for dynamic content -->
<div role="status" aria-live="polite" aria-atomic="true" class="sr-only">
  <!-- Dynamic status messages here -->
</div>

<!-- Accessible modal dialog -->
<dialog 
  role="dialog" 
  aria-modal="true" 
  aria-labelledby="dialog-title" 
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Dialog Title</h2>
  <p id="dialog-description">Dialog content goes here</p>
  <button type="button" aria-label="Close dialog" onclick="this.closest('dialog').close()">
    <span aria-hidden="true">&times;</span>
  </button>
</dialog>
```

# Modern Web Components

- Use custom elements and shadow DOM
```html
<!-- Declarative Shadow DOM -->
<custom-button type="primary">
  <template shadowrootmode="open">
    <style>
      :host {
        display: inline-block;
      }
      button {
        background: var(--color-primary, #007bff);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        opacity: 0.9;
      }
      ::slotted(*) {
        font-weight: bold;
      }
    </style>
    <button part="button">
      <slot>Default Text</slot>
    </button>
  </template>
  Click Me
</custom-button>

<!-- Web component with slots -->
<article-card>
  <img slot="image" src="image.jpg" alt="Article image" loading="lazy">
  <h3 slot="title">Article Title</h3>
  <p slot="description">Article description</p>
  <a slot="action" href="/read-more">Read More</a>
</article-card>

<!-- Custom element registration -->
<script type="module">
  class CustomButton extends HTMLElement {
    static observedAttributes = ['type', 'disabled'];
    
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      this.render();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
    
    render() {
      // Component logic
    }
  }
  
  customElements.define('custom-button', CustomButton);
</script>
```

# Performance Optimizations

- Implement loading strategies and resource hints
```html
<!-- Lazy loading for images -->
<img 
  src="placeholder.jpg"
  data-src="actual-image.jpg"
  alt="Description"
  loading="lazy"
  decoding="async"
  fetchpriority="low"
  width="800"
  height="600"
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 400px) 100vw,
         (max-width: 800px) 50vw,
         33vw"
>

<!-- Picture element for art direction -->
<picture>
  <source 
    media="(prefers-color-scheme: dark)" 
    srcset="dark-mode-image.webp"
    type="image/webp"
  >
  <source 
    media="(min-width: 768px)" 
    srcset="desktop.webp"
    type="image/webp"
  >
  <source 
    srcset="mobile.webp"
    type="image/webp"
  >
  <img 
    src="fallback.jpg" 
    alt="Description"
    loading="lazy"
    decoding="async"
  >
</picture>

<!-- Video with multiple sources -->
<video 
  controls
  preload="metadata"
  poster="poster.jpg"
  playsinline
  muted
  loop
>
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  <track 
    src="captions.vtt" 
    kind="captions" 
    srclang="en" 
    label="English"
    default
  >
  <p>Your browser doesn't support HTML5 video.</p>
</video>

<!-- Lazy loading with Intersection Observer -->
<div class="lazy-section" data-lazy-load>
  <!-- Content loaded when visible -->
</div>

<script>
  if ('IntersectionObserver' in window) {
    const lazyElements = document.querySelectorAll('[data-lazy-load]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Load content
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '50px' });
    
    lazyElements.forEach(el => observer.observe(el));
  }
</script>
```

# Structured Data and SEO

- Implement schema.org markup
```html
<!-- JSON-LD structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "datePublished": "2024-01-15T09:30:00Z",
  "dateModified": "2024-01-16T10:00:00Z",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://example.com/author"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Publisher Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "description": "Article description",
  "image": "https://example.com/article-image.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/article"
  }
}
</script>

<!-- Microdata for breadcrumbs -->
<nav aria-label="Breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
  <ol role="list">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/">
        <span itemprop="name">Home</span>
      </a>
      <meta itemprop="position" content="1">
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span itemprop="name">Current Page</span>
      <meta itemprop="position" content="2">
    </li>
  </ol>
</nav>
```

# Modern Form Patterns

- Advanced form controls and validation
```html
<!-- Multi-step form with progress -->
<form id="multi-step-form" method="POST">
  <!-- Progress indicator -->
  <div role="progressbar" 
       aria-valuenow="1" 
       aria-valuemin="1" 
       aria-valuemax="3"
       aria-label="Form progress">
    <span class="progress-step active">Step 1</span>
    <span class="progress-step">Step 2</span>
    <span class="progress-step">Step 3</span>
  </div>
  
  <!-- Fieldset for each step -->
  <fieldset data-step="1" aria-current="step">
    <legend>Step 1: Basic Information</legend>
    
    <!-- Autocomplete with datalist -->
    <label for="country">Country</label>
    <input 
      list="countries" 
      id="country" 
      name="country"
      autocomplete="country"
      pattern="[A-Za-z ]+"
      title="Please enter a valid country name"
    >
    <datalist id="countries">
      <option value="United States">
      <option value="Canada">
      <option value="United Kingdom">
    </datalist>
    
    <!-- Date input with constraints -->
    <label for="birthdate">Birth Date</label>
    <input 
      type="date" 
      id="birthdate" 
      name="birthdate"
      min="1900-01-01"
      max="2006-12-31"
      required
    >
    
    <!-- File upload with constraints -->
    <label for="avatar">Profile Picture</label>
    <input 
      type="file" 
      id="avatar" 
      name="avatar"
      accept="image/jpeg,image/png,image/webp"
      capture="user"
      multiple="false"
    >
  </fieldset>
  
  <!-- Native validation with custom messages -->
  <script>
    const form = document.getElementById('multi-step-form');
    form.addEventListener('invalid', (e) => {
      e.preventDefault();
      const input = e.target;
      if (input.validity.valueMissing) {
        input.setCustomValidity('This field is required');
      } else if (input.validity.typeMismatch) {
        input.setCustomValidity('Please enter a valid value');
      }
    }, true);
  </script>
</form>
```

# Progressive Web App Features

- PWA-ready HTML structure
```html
<!-- Web App Manifest -->
<link rel="manifest" href="/manifest.json">

<!-- iOS specific -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="App Name">
<link rel="apple-touch-icon" href="/icon-192.png">

<!-- Theme color -->
<meta name="theme-color" content="#007bff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1a1a2e" media="(prefers-color-scheme: dark)">

<!-- Service Worker registration -->
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(reg => console.log('SW registered'))
      .catch(err => console.error('SW registration failed'));
  }
</script>

<!-- Install prompt -->
<button 
  id="install-button" 
  style="display: none;"
  aria-label="Install app"
>
  Install App
</button>

<script>
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-button').style.display = 'block';
  });
</script>
```

# Modern Interactive Elements

- Native HTML5 interactive components
```html
<!-- Details/Summary for collapsible content -->
<details open>
  <summary>Click to expand</summary>
  <p>Hidden content that can be toggled</p>
</details>

<!-- Native date/time inputs -->
<input type="datetime-local" name="appointment">
<input type="week" name="week">
<input type="month" name="month">
<input type="time" name="time">

<!-- Color picker -->
<input type="color" value="#007bff" name="theme-color">

<!-- Range slider with datalist -->
<label for="volume">Volume: <output for="volume">50</output>%</label>
<input 
  type="range" 
  id="volume" 
  name="volume"
  min="0" 
  max="100" 
  value="50"
  step="10"
  list="volume-levels"
  oninput="this.previousElementSibling.querySelector('output').value = this.value"
>
<datalist id="volume-levels">
  <option value="0" label="Mute">
  <option value="50" label="Medium">
  <option value="100" label="Max">
</datalist>

<!-- Progress and meter elements -->
<progress value="32" max="100">32%</progress>
<meter value="6" min="0" max="10" low="3" high="7" optimum="9">6 out of 10</meter>

<!-- Native search with suggestions -->
<search role="search">
  <form action="/search" method="GET">
    <input 
      type="search" 
      name="q"
      placeholder="Search..."
      autocomplete="off"
      spellcheck="true"
      aria-label="Search site"
      list="suggestions"
    >
    <datalist id="suggestions">
      <!-- Populated dynamically -->
    </datalist>
    <button type="submit">Search</button>
  </form>
</search>
```

# Content Security Policy

- Implement CSP with inline scripts
```html
<!-- CSP meta tag -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'nonce-RANDOM_NONCE';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' https://api.example.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
">

<!-- Inline script with nonce -->
<script nonce="RANDOM_NONCE">
  // Inline JavaScript with CSP nonce
</script>

<!-- Subresource Integrity -->
<script 
  src="https://cdn.example.com/script.js"
  integrity="sha384-HASH"
  crossorigin="anonymous"
></script>
```
- **related_files_content:** [".gitignore", "README.md"]

## Related Files

Read these dependency files to understand the context:

- `.gitignore`
- `README.md`

## Instructions

Create the file at `index.html` implementing the changes described above.

**Requirements:**
1. Follow the patterns and conventions from the codebase
2. Use only available imports; do not import from forbidden paths
3. Ensure the code is complete and functional
4. Include appropriate error handling

**Output:**
- Generate the COMPLETE file content
- Output ONLY the raw file content, no markdown
