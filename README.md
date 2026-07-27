# GoBritz Immigration Consultancy Website

A modern, responsive, high-converting, accessible, and SEO-optimized static website for **GoBritz Immigration Consultancy** (UK Immigration Guidance & Overseas Career Consultancy).

The project is fully self-contained and ready to run immediately by opening `index.html` in any web browser without needing any build tools, node packages, or server frameworks.

---

## 🌟 Key Features

- **Zero Build Step Required**: Clean static HTML5, CSS3, ES6 JavaScript, Bootstrap 5 (CDN), Font Awesome 6 (CDN), and Google Fonts.
- **11 Full Pages**:
  - `index.html` - Homepage with Hero, About preview, Services overview, Visa categories, Why Choose Us, 5-step process timeline, Animated stats counter, Client testimonials, FAQ preview, and Contact section.
  - `about.html` - Mission, Vision, Core Values, Methodology, and Professional Commitment.
  - `services.html` - 12 distinct guidance service cards with benefit lists and CTAs.
  - `visa-categories.html` - Detailed guides for Visitor, Student, Skilled Worker, Health & Care Worker, Graduate, Family, Business, and ILR Settlement pathways.
  - `process.html` - Interactive 5-step guidance timeline.
  - `faq.html` - 15 interactive accordion FAQs with live instant search filter.
  - `contact.html` - Validated contact form, action buttons (WhatsApp, Call, Email), and Google Maps placeholder.
  - `privacy-policy.html` - GDPR & Data Protection policy.
  - `terms.html` - Terms & Conditions of service.
  - `disclaimer.html` - Full stand-alone legal & regulatory disclaimer.
  - `404.html` - Custom error page.
- **Mandatory Legal Disclaimer**: Included on all pages and footer:
  > *"GoBritz Immigration Consultancy provides immigration guidance, documentation support, and application assistance. We are not a law firm and do not provide legal advice. Visa approval decisions are made solely by the relevant government authorities."*
- **Interactive JS Logic**:
  - Glassmorphism sticky navbar on scroll with active page indicator.
  - Top scroll reading progress bar.
  - Animated stats counter triggered on scroll.
  - Instant live search for FAQs.
  - Client-side contact form validation with real-time feedback.
  - Floating WhatsApp chat widget & Back to Top button.
  - IntersectionObserver scroll reveal animations.
- **SEO & Accessibility**:
  - Open Graph and Twitter Card tags across all pages.
  - JSON-LD `EducationalOrganization` Schema markup on `index.html`.
  - `robots.txt`, `sitemap.xml`, `site.webmanifest`, and `favicon.svg`.
  - WCAG 2.1 AA compliant semantic HTML, high color contrast, and keyboard navigation.

---

## 📁 Directory & File Structure

```text
gobritz-immigration-website/
├── index.html                # Home Page
├── about.html                # About Us
├── services.html             # 12 Detailed Services
├── visa-categories.html      # 8 UK Visa Routes & Pathways
├── process.html              # 5-Step Process Timeline
├── faq.html                  # 15 Interactive FAQs with Live Search
├── contact.html              # Contact Form & Office Details
├── privacy-policy.html       # Privacy & Data Policy
├── terms.html                # Terms & Conditions
├── disclaimer.html           # Full Legal Disclaimer
├── 404.html                  # Custom 404 Error Page
├── robots.txt                # Search Engine Directives
├── sitemap.xml               # XML Sitemap
├── site.webmanifest          # PWA Web App Manifest
├── favicon.svg               # SVG Favicon
├── css/
│   ├── style.css             # Theme Tokens, Cards, Typography, Utilities
│   └── responsive.css        # Breakpoints & Mobile Optimization
├── js/
│   └── script.js             # Sticky Nav, Counters, FAQ Filter, Validation
└── README.md                 # Documentation
```

---

## 🚀 How to Run Locally

1. Simply double-click `index.html` or open it directly in any modern browser (Chrome, Firefox, Edge, Safari).
2. Alternatively, serve via VS Code Live Server or python HTTP server:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000`.

---

## ☁️ Deployment Instructions

### GitHub Pages
1. Push this repository to GitHub.
2. Navigate to **Settings** > **Pages**.
3. Select `main` branch and `/` root folder, then click **Save**.

### Netlify
1. Log into Netlify and click **Add new site** > **Import an existing project**.
2. Select your repository.
3. Leave Build Command blank and set Publish directory to `.`.

### Vercel
1. Import repository on Vercel.
2. Framework Preset: **Other**.
3. Output Directory: `.`. Click **Deploy**.
