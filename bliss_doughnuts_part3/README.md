# Bliss Doughnuts — Part 3

## Project overview
A responsive multi-page website for the fictional/sample Bliss Doughnuts business. It includes on-page SEO, responsive navigation, product search and sorting, a lightbox image gallery, and validated contact, enquiry and order-request forms.

## Files
- `index.html` — home page
- `about.html` — business story, vision and mission
- `menu.html` — product catalogue with search, sorting and lightbox
- `enquiry.html` — product/service enquiry form
- `contact.html` — general contact form and business details
- `order.html` — order request form
- `style.css` — shared responsive styles
- `script.js` — JavaScript interactions and client-side form validation
- `robots.txt` and `sitemap.xml` — basic crawler guidance and site structure

## Setup
1. Keep all HTML files, `style.css`, `script.js`, `robots.txt` and `sitemap.xml` in the same project root.
2. Create an `images` folder and place the image files listed below inside it, using the exact filenames.
3. Open `index.html` in a browser to test the site locally.
4. Before publishing, replace `https://example.com` in canonical links, `robots.txt` and `sitemap.xml` with the real deployed website URL.
5. Test all links, images, forms and mobile layouts after deployment.

## Required image assets
The original submission referenced images stored on a personal Windows drive, which will not work on a deployed website. Add your actual images to `images/` with these filenames:
- `magnific_doughnuts_rggCAjTxtc.jpg`
- `magnific_doughnuts_s77FYgTl8e.png`
- `magnific_picture-of-2-black-ladies_1lSfRLIr4r.png`
- `spider-man-themed-doughnuts.jpg`
- `magnific_birthdays-and-parties-doughnuts.jpg`
- `magnific_power-puff-girls-doughnut.jpg`
- `formal-wedding-doughnuts.jpg`
- `fun-wedding-doughnuts.jpg`
- `roses-and-gold-doughnuts.jpg`
- `message-doughnuts.jpg`
- `summit-2026-doughnuts.jpg`
- `matric-dance-doughnuts.jpg`

If an image is unavailable, replace the filename in the relevant HTML with an image you own or are permitted to use. Do not use images from a local `C:\Users\...` path on a published website.

## Form behaviour and limitations
The forms use JavaScript and HTML constraint validation, then prepare an email using `mailto:`. The visitor must review and send the email in their own email application. This static website does not store submissions on a server, send email automatically, process card payments, or confirm stock/delivery. For a live production site, configure a trusted form backend and secure payment provider if needed.

## SEO and publishing checklist
- Use descriptive page titles, meta descriptions, meaningful headings and alt text.
- Use clean relative links and keep navigation consistent.
- Replace example canonical and sitemap URLs with the deployed domain.
- Ensure every image exists and is compressed for fast loading.
- Test keyboard access, responsive layouts, search/sort, lightbox, and invalid/valid form submissions.
- Deploy using GitHub Pages or Netlify and submit the public repository and deployment links as required by the assessment.
- Build genuine, relevant backlinks and share the site on appropriate social media; these off-page activities cannot be created by HTML alone.

## Changelog
### Part 3 — corrections and enhancements
- Corrected invalid HTML document structure, including duplicate/misplaced `<body>` elements and malformed closing tags.
- Standardised navigation across all pages and added the missing enquiry page required by the brief.
- Corrected spelling, grammar, headings, link destinations and descriptive image alternative text.
- Replaced local Windows image paths with relative paths under `images/` for deployment.
- Added responsive shared styling and keyboard-focus indicators.
- Added JavaScript navigation toggle, product search and sorting, image lightbox, order-product prefill, form validation and email-draft preparation.
- Added page-specific SEO titles, descriptions, keyword metadata, canonical placeholders, `robots.txt` and `sitemap.xml`.
- Added this README with setup notes, limitations, image requirements and publishing checklist.

## References
- MDN Web Docs, HTML forms: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms
- MDN Web Docs, Constraint validation: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- MDN Web Docs, DOM scripting: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Sitemap Protocol: https://www.sitemaps.org/protocol.html

Update this README to reflect the exact feedback received for Part 2, the actual Git commits, and the real deployed URL before submission.
