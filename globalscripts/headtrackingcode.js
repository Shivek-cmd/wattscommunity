<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W485LNM3');</script>
<!-- End Google Tag Manager -->

<!-- Basic Meta Tags -->
<meta charset="UTF-8">
<meta name="robots" content="index, follow">

<!-- Favicon Icons for Different Devices and Sizes -->
<link rel="icon" type="image/png" sizes="16x16" href="{{custom_values.wattsgroup_icon_16x16}}" />
<link rel="icon" type="image/png" sizes="32x32" href="{{custom_values.wattsgroup_icon_32x32}}" />
<link rel="icon" type="image/png" sizes="96x96" href="{{custom_values.wattsgroup_icon_96x96}}" />
<link rel="icon" type="image/png" sizes="192x192" href="{{custom_values.wattsgroup_android_chrome_192x192}}" />

<!-- Apple Touch Icons for iOS Devices -->
<link rel="apple-touch-icon" sizes="57x57" href="{{custom_values.wattsgroup_apple_touch_icon}}" />
<link rel="apple-touch-icon" sizes="76x76" href="{{custom_values.wattsgroup_apple_touch_icon_76x76}}" />
<link rel="apple-touch-icon" sizes="120x120" href="{{custom_values.wattsgroup_apple_touch_icon_120x120}}" />
<link rel="apple-touch-icon" sizes="152x152" href="{{custom_values.wattsgroup_apple_touch_icon_152x152}}" />
<link rel="apple-touch-icon" sizes="180x180" href="{{custom_values.wattsgroup_apple_touch_icon_180x180}}" />

<!-- Open Graph Meta Tags for Social Sharing -->
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">

<style>
/* ═══════════════════════════════════════════════════════════
   WATTS GROUP — Design Tokens (Single Source of Truth)
   All colors, fonts, spacing, shadows, radii defined here.
   NEVER hardcode values anywhere else.
   ═══════════════════════════════════════════════════════════ */

:root {
  /* ─── Backgrounds ─── */
  --color-bg:            #FAFAFA;
  --color-bg-secondary:  #F2F2F2;
  --color-bg-tertiary:   #E8E8E8;
  --color-bg-elevated:   #FFFFFF;

  /* ─── Text ─── */
  --color-text:          #121212;
  --color-text-muted:    #666666;
  --color-text-subtle:   #999999;

  /* ─── Brand ─── */
  --color-primary:       #BD2426;
  --color-primary-hover: #9E1B1D;
  --color-primary-light: rgba(189, 36, 38, 0.1);
  --color-accent:        #E12C2E;

  /* ─── Borders ─── */
  --color-border:        #E6E6E6;
  --color-border-hover:  #CCCCCC;

  /* ─── Cards ─── */
  --color-card:          #FFFFFF;
  --color-card-bg:       #FFFFFF;

  /* ─── Semantic ─── */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error:   #ef4444;
  --color-info:    #3b82f6;

  /* ─── Typography ─── */
  --font-display: "Comfortaa";
  --font-body:    "Poppins", system-ui, sans-serif;

  /* ─── Fluid Font Sizes ─── */
  --text-hero: clamp(2.75rem, 6vw, 5.5rem);
  --text-h1:   clamp(2.25rem, 4.5vw, 4rem);
  --text-h2:   clamp(1.75rem, 3.5vw, 2.75rem);
  --text-h3:   clamp(1.25rem, 2vw, 1.75rem);
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  1.875rem;
  --text-4xl:  2.25rem;
  --text-display: clamp(2.25rem, 4.5vw, 3.5rem);

  /* ─── Spacing ─── */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  --section-py:    clamp(4rem, 8vw, 8rem);
  --container-max: 1280px;
  --container-px:  clamp(1.25rem, 4vw, 2rem);

  /* ─── Radius ─── */
  --radius-xs:   4px;
  --radius-sm:   8px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-2xl:  32px;
  --radius-full: 9999px;

  /* ─── Shadows ─── */
  --shadow-sm:   0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:   0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
  --shadow-lg:   0 8px 32px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06);
  --shadow-xl:   0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08);
  --shadow-glow: 0 0 40px rgba(218, 65, 80, 0.15);
  --shadow-card: 0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03);

  /* ─── Transitions ─── */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast:   150ms;
  --duration-base:   250ms;
  --duration-slow:   400ms;
  --duration-slower: 700ms;

  /* ─── Z-Index Scale ─── */
  --z-base:     0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-overlay:  300;
  --z-modal:    400;
  --z-toast:    500;
  --z-tooltip:  600;
}

/* ─── Dark Theme Override ─── */
[data-theme="dark"] {
  --color-bg:            #0a0a0a;
  --color-bg-secondary:  #111111;
  --color-bg-tertiary:   #1a1a1a;
  --color-bg-elevated:   #181818;
  --color-text:          #f0f0f0;
  --color-text-muted:    #999999;
  --color-text-subtle:   #666666;
  --color-border:        rgba(255,255,255,0.10);
  --color-border-hover:  rgba(255,255,255,0.20);
  --color-card:          rgba(255,255,255,0.04);
  --color-card-bg:       rgba(255,255,255,0.04);
  --color-primary-light: rgba(218, 65, 80, 0.12);
  --shadow-sm:   0 1px 3px rgba(0,0,0,0.3);
  --shadow-md:   0 4px 16px rgba(0,0,0,0.4);
  --shadow-lg:   0 8px 32px rgba(0,0,0,0.5);
  --shadow-xl:   0 20px 60px rgba(0,0,0,0.6);
  --shadow-card: 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04);
}

/* ─── Reduced Motion ─── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
/* ═══════════════════════════════════════════════════════════
   WATTS GROUP — Base Styles, Reset, Typography, Utilities
   Always loads AFTER variables.css
   ═══════════════════════════════════════════════════════════ */

/* ─── CSS Reset ─── */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-text);
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

img {
  height: auto;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-text);
  overflow-wrap: break-word;
}

h1 { font-size: var(--text-h1); }
h2 { font-size: var(--text-h2); }
h3 { font-size: var(--text-h3); }

p {
  max-width: 72ch;
  color: var(--color-text-muted);
}

/* ─── Focus Styles ─── */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: var(--radius-xs);
}

/* ─── Selection ─── */
::selection {
  background: var(--color-primary);
  color: #fff;
}

/* ─── Skip Navigation ─── */
.skip-nav {
  position: absolute;
  top: -100%;
  left: var(--space-4);
  z-index: var(--z-tooltip);
  padding: var(--space-3) var(--space-6);
  background: var(--color-primary);
  color: #fff;
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  transition: top var(--duration-fast) var(--ease-out);
}

.skip-nav:focus {
  top: 0;
}

/* ─── Scroll Progress Bar ─── */
#scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: var(--color-primary);
  z-index: calc(var(--z-sticky) + 1);
  transition: width 50ms linear;
}

/* ═══════════════════════════════════════════════════════════
   LAYOUT
   ═══════════════════════════════════════════════════════════ */

.container {
  width: 100%;
  max-width: var(--container-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-px);
  padding-right: var(--container-px);
}

.section {
  padding-top: var(--section-py);
  padding-bottom: var(--section-py);
  position: relative;
}

/* ─── Page Hero with Background Image ─── */
.page-hero--bg {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: calc(var(--space-20) + 72px) 0 var(--space-12);
  min-height: 340px;
  display: flex;
  align-items: flex-end;
}

.page-hero--bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(18,18,18,0.72) 0%, rgba(18,18,18,0.92) 100%);
  z-index: 1;
}

.page-hero--bg .container {
  position: relative;
  z-index: 2;
}

.page-hero.page-hero--bg h1,
.page-hero.page-hero--bg p,
.page-hero.page-hero--bg .breadcrumb,
.page-hero.page-hero--bg .breadcrumb a,
.page-hero.page-hero--bg .breadcrumb span {
  color: rgba(235, 242, 247, 0.92);
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.page-hero.page-hero--bg p {
  color: rgba(235, 242, 247, 0.7);
  font-weight: 400;
  opacity: 1;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
}

.page-hero--bg .breadcrumb a:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .page-hero--bg {
    min-height: 260px;
  }
}

/* ─── Section Header ─── */
.section-header {
  margin-bottom: var(--space-12);
}

.section-header h2 {
  margin-top: var(--space-3);
  margin-bottom: var(--space-4);
}

.section-header.text-center p,
.section-header.text-center .section-sub {
  margin-left: auto;
  margin-right: auto;
}

.section-sub {
  margin-top: var(--space-4);
  font-size: var(--text-lg);
  max-width: 600px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  font-family: var(--font-body);
}

.section-label .dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  display: inline-block;
}

/* ═══════════════════════════════════════════════════════════
   REVEAL ANIMATIONS (triggered by global-scripts.js)
   ═══════════════════════════════════════════════════════════ */

.reveal {
  opacity: 1;
  transform: translateY(40px);
  transition: opacity var(--duration-slower) var(--ease-out),
              transform var(--duration-slower) var(--ease-out);
  will-change: opacity, transform;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.delay-1 { transition-delay: 100ms; }
.delay-2 { transition-delay: 200ms; }
.delay-3 { transition-delay: 300ms; }
.delay-4 { transition-delay: 400ms; }
.delay-5 { transition-delay: 500ms; }
.delay-6 { transition-delay: 600ms; }
.delay-7 { transition-delay: 700ms; }
.delay-8 { transition-delay: 800ms; }

/* ─── Text Shimmer ─── */
.text-shimmer {
  background: linear-gradient(
    120deg,
    var(--color-text) 0%,
    var(--color-primary) 30%,
    var(--color-text) 60%,
    var(--color-primary) 100%
  );
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer-sweep 4s ease-in-out infinite;
}

@keyframes shimmer-sweep {
  0%, 100% { background-position: 100% 50%; }
  50%      { background-position: 0% 50%; }
}

/* ─── Grain Texture Overlay ─── */
body.grain::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

/* ─── Architectural Grid Lines ─── */
body.page-grid::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    90deg,
    transparent,
    transparent calc(25% - 1px),
    rgba(0, 0, 0, 0.03) calc(25% - 1px),
    rgba(0, 0, 0, 0.03) 25%
  );
}

@media (max-width: 767px) {
  body.page-grid::after { display: none; }
  .ambient-glow { display: none !important; }
}

/* ═══════════════════════════════════════════════════════════
   BUTTONS
   ═══════════════════════════════════════════════════════════ */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 0.75rem 1.75rem;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-out);
  white-space: nowrap;
  text-decoration: none;
  line-height: 1.4;
}

.btn svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--color-bg-elevated);
  color: var(--color-text);
  border-color: var(--color-border);
}

.btn-secondary:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: #fff;
  transform: translateY(-1px);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text-muted);
  padding-left: 0;
  padding-right: 0;
}

.btn-ghost:hover {
  color: var(--color-primary);
}

.btn-lg {
  padding: 1rem 2.25rem;
  font-size: var(--text-base);
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: var(--text-xs);
}

/* ═══════════════════════════════════════════════════════════
   CARDS
   ═══════════════════════════════════════════════════════════ */

.card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  transition: all var(--duration-base) var(--ease-out);
  position: relative;
}

.card:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  margin-top: auto;
  transition: gap var(--duration-fast) var(--ease-out);
}

.card:hover .card-link {
  gap: var(--space-3);
}

/* ─── Badge ─── */
.badge {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  border-radius: var(--radius-full);
  background: var(--color-primary-light);
  color: var(--color-primary);
}

/* ═══════════════════════════════════════════════════════════
   FORMS
   ═══════════════════════════════════════════════════════════ */

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text);
}

.form-label .required {
  color: var(--color-primary);
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: var(--text-base);
  font-family: var(--font-body);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  transition: border-color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(218, 65, 80, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text-subtle);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-hint {
  font-size: var(--text-xs);
  color: var(--color-text-subtle);
}

.form-error {
  font-size: var(--text-xs);
  color: var(--color-error);
  font-weight: 500;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

/* ═══════════════════════════════════════════════════════════
   BREADCRUMB
   ═══════════════════════════════════════════════════════════ */

.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.breadcrumb a {
  transition: color var(--duration-fast) var(--ease-out);
}

.breadcrumb a:hover {
  color: var(--color-primary);
}

.breadcrumb .sep {
  color: var(--color-text-subtle);
}

.breadcrumb .current {
  color: var(--color-text);
  font-weight: 500;
}

/* ═══════════════════════════════════════════════════════════
   MARQUEE
   ═══════════════════════════════════════════════════════════ */

.marquee-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.marquee-wrapper::before,
.marquee-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}

.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(to right, var(--color-bg), transparent);
}

.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, var(--color-bg), transparent);
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: var(--space-12);
  width: max-content;
  animation: marquee-scroll 40s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  white-space: nowrap;
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6);
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--duration-base) var(--ease-out);
}

.marquee-item:hover {
  border-color: var(--color-primary);
  color: var(--color-text);
}

.marquee-item svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  opacity: 0.5;
}

.marquee-dot {
  width: 5px;
  height: 5px;
  background: var(--color-primary);
  border-radius: var(--radius-full);
  display: inline-block;
  margin-left: var(--space-8);
}

/* ═══════════════════════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════════════════════ */

.faq-list {
  display: flex;
  flex-direction: column;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
}

.faq-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-6) 0;
  font-size: var(--text-lg);
  font-weight: 500;
  font-family: var(--font-body);
  color: var(--color-text);
  text-align: left;
  cursor: pointer;
  transition: color var(--duration-fast) var(--ease-out);
  gap: var(--space-4);
}

.faq-trigger:hover {
  color: var(--color-primary);
}

.faq-icon {
  flex-shrink: 0;
  transition: transform var(--duration-base) var(--ease-out);
  color: var(--color-text-muted);
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
  color: var(--color-primary);
}

.faq-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-slow) var(--ease-out),
              padding var(--duration-slow) var(--ease-out);
}

.faq-item.active .faq-body {
  max-height: 500px;
  padding-bottom: var(--space-6);
}

.faq-body p {
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-text-muted);
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIAL SLIDER
   ═══════════════════════════════════════════════════════════ */

.testimonial-slider {
  overflow: hidden;
  position: relative;
}

.testimonial-track {
  display: flex;
  transition: transform var(--duration-slow) var(--ease-out);
}

.testimonial-slide {
  flex: 0 0 100%;
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.testimonial-stars {
  display: flex;
  gap: var(--space-1);
  color: #f59e0b;
}

.testimonial-quote {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  object-fit: cover;
}

.testimonial-name {
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--color-text);
  max-width: none;
}

.testimonial-role {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  max-width: none;
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

.slider-prev,
.slider-next {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  transition: all var(--duration-fast) var(--ease-out);
}

.slider-prev:hover,
.slider-next:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.slider-dots {
  display: flex;
  gap: var(--space-2);
}

.slider-dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--color-border);
  border: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
  padding: 0;
}

.slider-dot.active {
  background: var(--color-primary);
  width: 24px;
}

/* ═══════════════════════════════════════════════════════════
   PORTFOLIO FILTER
   ═══════════════════════════════════════════════════════════ */

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-10);
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  font-size: var(--text-sm);
  font-weight: 500;
  font-family: var(--font-body);
  border: 1px solid var(--color-border);
  background: var(--color-card);
  color: var(--color-text-muted);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.filter-btn:hover {
  border-color: var(--color-border-hover);
  color: var(--color-text);
}

.filter-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

/* ═══════════════════════════════════════════════════════════
   TEXT ISLAND
   ═══════════════════════════════════════════════════════════ */

.text-island-text {
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 2.5vw, 2rem);
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text);
  max-width: 800px;
}

.text-island-text em {
  font-style: italic;
  color: var(--color-primary);
}

/* ═══════════════════════════════════════════════════════════
   UTILITY CLASSES
   ═══════════════════════════════════════════════════════════ */

.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.text-center { text-align: center; }
.text-left   { text-align: left; }
.text-right  { text-align: right; }

.mx-auto { margin-left: auto; margin-right: auto; }

.hidden-mobile {
  display: block;
}

@media (max-width: 767px) {
  .hidden-mobile { display: none !important; }
}

.hidden-desktop {
  display: none;
}

@media (max-width: 767px) {
  .hidden-desktop { display: block !important; }
}

/* ─── Grid Utilities ─── */
.grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.grid-3col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.grid-4col {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .grid-4col { grid-template-columns: repeat(2, 1fr); }
  .grid-3col { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .grid-2col { grid-template-columns: 1fr; }
  .grid-3col { grid-template-columns: 1fr; }
  .grid-4col { grid-template-columns: 1fr; }
}

</style>