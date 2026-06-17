# Kairesa Website — GitHub Pages Package

A complete static website for **Kairesa**. No build process, database, package manager, or paid hosting is required.

## Upload to GitHub

1. Open the repository used for `kairesa.com`.
2. Remove or archive the old website files.
3. Upload **all files and folders from this package to the repository root**.
4. Keep the `CNAME` file in the repository root.
5. In GitHub: **Settings → Pages → Deploy from a branch → main / root**.
6. Wait for deployment, then hard-refresh the browser.

## Included pages

- Home
- Capabilities
- Work
- Methodology
- About
- Insights
- Five interactive case studies
- Five-step project inquiry
- Custom 404 page

## Contact form behavior

The inquiry is intentionally privacy-friendly and serverless. It generates a structured `mailto:` message to `hello@kairesa.com`; data is not stored by the website.

To use Formspree, Web3Forms, or another form backend later, replace the `submit()` function inside `assets/js/site.js`.

## Brand assets

The logo mark is stored as a square transparent mask and is rendered with CSS, preventing cropping and maintaining consistent mark-to-wordmark proportions across light/dark modes.

## Editing content

- Page content: edit the `.html` files.
- Capabilities, case summaries, terminology, interactions, and case-layer content: `assets/js/site.js`.
- Design system, golden-ratio spacing, responsive layout, and animation: `assets/css/styles.css`.

## Professional boundary

The site describes research, documentation, process, legal-operations, compliance-workflow, cost, and digital-system support. It does not claim legal representation, compliance certification, or regulated screening services.
