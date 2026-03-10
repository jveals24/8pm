# Equipping Place Ministries — Eleventy starter

This is a mobile-first Eleventy site starter for Equipping Place Ministries.

## Included
- Reusable header and footer partials
- White-based modern design
- Event schedule listed through the end of 2026
- Learn page with Healing, Podcast and Bible Study, and Blog
- Just Got Saved top-level navigation item
- Netlify-ready forms for contact, daily confessions, and speaker requests
- Blog starter posts
- Uploaded logo converted to a transparent-background PNG

## Accessibility approach
This starter is built toward WCAG 2.2 AA best practices, including:
- semantic landmarks
- visible focus states
- skip link
- accessible forms and tables
- keyboard-friendly navigation
- mobile-first spacing and target sizes
- reduced-motion support

This is not a legal accessibility certification. Before launch, run an accessibility audit with Lighthouse, WAVE, and manual keyboard/screen-reader testing.

## Start locally
1. `npm install`
2. `npm run start`
3. Visit the local Eleventy server URL shown in the terminal

## Build for Netlify
- Build command: `npm run build`
- Publish directory: `_site`

## Where to swap in your own content
- Hero and ministry photos: `src/assets/images/`
- Header/footer content: `src/_includes/`
- Event rules: `src/_data/events.js`
- Blog posts: `src/blog/`
- Learn subpages: `src/learn/`
- Giving link: `src/give.njk`

## Photo-based header note
The hero currently uses a branded visual placeholder so the site looks complete without ministry photos. Replace that area with your own image when ready.
