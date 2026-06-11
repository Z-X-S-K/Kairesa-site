# Kairesa Website

Static modular company website for GitHub Pages.

## Upload

Upload every file in this folder to the root of your GitHub repository. Do not upload the ZIP itself and do not place these files inside another folder.

Correct structure:

```text
index.html
services.html
about.html
insights.html
contact.html
404.html
CNAME
robots.txt
sitemap.xml
assets/
  css/styles.css
  js/config.js
  js/data.js
  js/main.js
  img/logo.svg
  img/favicon.svg
  img/og-image.svg
```

## Quick edits

### Company info

Edit:

```text
assets/js/config.js
```

You can change:

- company name
- domain
- email
- navigation
- Formspree endpoint

### Website content

Edit:

```text
assets/js/data.js
```

You can add or remove:

- services
- packages
- homepage metrics
- operating lens rows
- modules
- use cases
- values
- proof points
- insights
- FAQs

This keeps the website modular. You can add new content without editing every HTML page.

## Email form

By default, the contact form opens a pre-filled email to `hello@kairesa.com`.

To let the form submit directly from the webpage:

1. Create a free Formspree form.
2. Copy the endpoint URL.
3. Paste it in `assets/js/config.js`:

```js
formEndpoint: "https://formspree.io/f/your-id"
```

## GitHub Pages

In GitHub:

```text
Settings → Pages → Deploy from a branch → main → / root → Save
```

The `CNAME` file is already set to:

```text
kairesa.com
```

If you use a different domain, update both `CNAME` and `assets/js/config.js`.

## Notes

- This is a static website; it has no backend and no database.
- There are no passwords or private keys in the files.
- The wording avoids presenting Kairesa as a law firm or legal representative.
- The updated CSS uses responsive grids and safer typography to reduce text overlap or misalignment on iPad and phone screens.
