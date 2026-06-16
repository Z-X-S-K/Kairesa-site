# Kairesa Website Redesign v2

A modular, responsive GitHub Pages website for Kairesa.

## What changed

- Corrected the logo-to-wordmark proportion by using the final SVG logo directly.
- Rebuilt the layout for desktop, iPad/tablet, and mobile rather than scaling a desktop poster.
- Replaced dense service grids with interactive capability tabs.
- Added filtered, paginated case studies with accessible detail modals.
- Added an interactive project approach stepper.
- Added a functional contact form that prepares an email without requiring a backend.
- Added light/dark themes, mobile navigation, keyboard support, and reduced-motion support.
- Sensitive case information is omitted or visually abstracted.

## Deploy to GitHub Pages

1. Upload all files and folders in this package to the root of the GitHub Pages repository.
2. Keep the `assets` folder in the same directory as `index.html`.
3. In repository Settings → Pages, publish from the main branch and root folder.
4. The included `CNAME` points to `kairesa.com`. Remove or edit it if the domain changes.

## Files commonly edited

- `index.html` — page structure and visible copy
- `styles.css` — all responsive design and themes
- `script.js` — capabilities, case studies, pagination, modal, and interactions
- `assets/` — logo and case preview files

## Contact form

The contact form opens the visitor's default email application and prepares an email to `hello@kairesa.com`. No server or paid form provider is required.
