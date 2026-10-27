A responsive, multi-page website created for the Bliss Doughnuts website
project. The project uses HTML5, CSS and JavaScript and includes a
product menu, responsive navigation, an image lightbox, and client-side
form validation.


## Contents

-   [Project overview](#project-overview)
-   [Website screenshots](#website-screenshots)
-   [Photo gallery](#photo-gallery)
-   [Pages and features](#pages-and-features)
-   [Project structure](#project-structure)
-   [Run the website locally](#run-the-website-locally)
-   [Images and photo credits](#images-and-photo-credits)
-   [Testing checklist](#testing-checklist)
-   [Known limitations](#known-limitations)
-   [SEO and publishing](#seo-and-publishing)
-   [Changelog](#changelog)
-   [References](#references)

## Project overview

Bliss Doughnuts is presented as a doughnut business serving customers in
Johannesburg. The project aims to give visitors a clear way to learn
about the business, browse doughnuts, and make contact or send an order
request.

### Project goals

-   Present the business and its story.
-   Display doughnut products and themed options.
-   Make the website usable on desktop, tablet and mobile screens.
-   Provide contact, enquiry and order-request forms.
-   Use basic on-page SEO and a sitemap/robots file.

## Website screenshots

The screenshots below show the responsive layout on different screen
sizes. They are hosted as GitHub attachments in the original project
notes.

### Desktop

![Bliss Doughnuts website displayed on a Surface Pro
10](https://github.com/user-attachments/assets/fa074f3a-25ab-4bf6-9cdd-c0807cb97074)

### Tablet

![Bliss Doughnuts website displayed on an iPad Pro
13](https://github.com/user-attachments/assets/0d8b0b95-cfac-467b-ae89-08b611ad7ba9)

![Bliss Doughnuts website displayed on an iPad
mini](https://github.com/user-attachments/assets/74cdb99a-7e9b-4388-96b0-56b3f6c63101)

### Mobile

![Bliss Doughnuts website displayed on a Galaxy
A55](https://github.com/user-attachments/assets/09a6649a-a321-4035-b856-8f7fd8e49e3)

## Photo gallery

The website uses doughnut and business photographs to present its
products. The image paths below are examples based on the asset
filenames listed in the project notes. They will display only when the
corresponding files exist at those paths.

  ---------------------------------------------------------------------------------------------------------------------------
  Photo                               Preview
  ----------------------------------- ---------------------------------------------------------------------------------------
  Doughnut collection                 ![Doughnut collection](bliss_doughnuts_part3/images/magnific_doughnuts_rggCAjTxtc.jpg)

  Doughnut design                     ![Doughnut design](bliss_doughnuts_part3/images/magnific_doughnuts_s77FYgTl8e.png)

  Birthday and party doughnuts        ![Birthday and party
                                      doughnuts](bliss_doughnuts_part3/images/magnific_birthdays-and-parties-doughnuts.jpg)

  Wedding doughnuts                   ![Formal wedding doughnuts](bliss_doughnuts_part3/images/formal-wedding-doughnuts.jpg)

  Fun wedding doughnuts               ![Fun wedding doughnuts](bliss_doughnuts_part3/images/fun-wedding-doughnuts.jpg)

  Roses and gold doughnuts            ![Roses and gold doughnuts](bliss_doughnuts_part3/images/roses-and-gold-doughnuts.jpg)

  Message doughnuts                   ![Message doughnuts](bliss_doughnuts_part3/images/message-doughnuts.jpg)

  Matric dance doughnuts              ![Matric dance doughnuts](bliss_doughnuts_part3/images/matric-dance-doughnuts.jpg)
  ---------------------------------------------------------------------------------------------------------------------------

**Important:** Make sure each image file is actually uploaded to the
`bliss_doughnuts_part3/images/` folder and that its name and file
extension match exactly. If a preview is broken, upload the correct
photo or remove that gallery entry. Only use photographs you own or have
permission to use, and add credits where required.

## Pages and features

  -----------------------------------------------------------------------
  File                                Purpose
  ----------------------------------- -----------------------------------
  `index.html`                        Home page and introduction

  `about.html`                        Business story, vision and mission

  `menu.html`                         Product catalogue, search, sorting
                                      and lightbox gallery

  `enquiry.html`                      Product/service enquiry form

  `contact.html`                      Contact form and business details

  `order.html`                        Order-request form

  `style.css`                         Shared responsive styling

  `script.js`                         Navigation and JavaScript
                                      interactions, including client-side
                                      validation

  `robots.txt`                        Basic crawler guidance

  `sitemap.xml`                       Lists the website URLs for search
                                      engines

  `images/`                           Website photos and product images
  -----------------------------------------------------------------------

## Project structure

The repository currently contains a folder named
`bliss_doughnuts_part3`. The HTML pages and images are inside that
folder, while some supporting files may also exist at the repository
root. Keep your publishing structure consistent.

``` text
Bliss_Doughnuts_Part3_Corrected/
├── README.md
├── CHANGELOG
├── robots.txt
├── sitemap.xml
├── style.css
├── script.js
└── bliss_doughnuts_part3/
    ├── README.md
    ├── index.html
    ├── about.html
    ├── menu.html
    ├── enquiry.html
    ├── contact.html
    ├── order.html
    └── images/
        └── (add your website photos here)
```

If your actual files are arranged differently, update this diagram to
match the repository.

## Run the website locally

1.  Download or clone the repository.
2.  Open the project folder in Visual Studio Code.
3.  Check that the HTML files, `style.css`, `script.js`, and image files
    are in the locations expected by the HTML.
4.  Open `index.html` in a browser, or use the Live Server extension in
    VS Code.
5.  Test the navigation, menu search and sorting, gallery/lightbox, and
    forms.

## Images and photo credits

The project notes list these expected image filenames:

-   `magnific_doughnuts_rggCAjTxtc.jpg`
-   `magnific_doughnuts_s77FYgTl8e.png`
-   `magnific_picture-of-2-black-ladies_1lSfRLIr4r.png`
-   `spider-man-themed-doughnuts.jpg`
-   `magnific_birthdays-and-parties-doughnuts.jpg`
-   `magnific_power-puff-girls-doughnut.jpg`
-   `formal-wedding-doughnuts.jpg`
-   `fun-wedding-doughnuts.jpg`
-   `roses-and-gold-doughnuts.jpg`
-   `message-doughnuts.jpg`
-   `summit-2026-doughnuts.jpg`
-   `matric-dance-doughnuts.jpg`

Upload the photos you actually use to the `images/` folder. Update the
image paths in the HTML and in this README if your filenames differ. Do
not use local computer paths such as `C:\Users\...`, because those paths
will not work for visitors.

## Testing checklist

-   [ ] Every navigation link opens the correct page.
-   [ ] All photos load and have useful alternative text.
-   [ ] CSS styling works on each page.
-   [ ] The layout is usable on desktop, tablet and mobile.
-   [ ] Menu search and sorting work.
-   [ ] The image lightbox opens and can be closed with keyboard
    controls where supported.
-   [ ] Forms show validation for missing or invalid fields.
-   [ ] The repository's `sitemap.xml` contains only real, publicly
    accessible page URLs.
-   [ ] `robots.txt` points to the correct deployed sitemap.
-   [ ] The published site has been checked after deployment.

## Known limitations

-   Forms use HTML/JavaScript validation and prepare an email using
    `mailto:`. Visitors need an email application to send it.
-   The site does not currently store form submissions, send automatic
    email, process payments, or confirm stock, pickup, delivery or
    orders.
-   A real production ordering system would require a trusted form
    backend and, if payments are offered, a secure payment provider.
-   The GitHub repository must have a visibility and Pages configuration
    that allows the intended deployment. Confirm GitHub Pages is enabled
    before sharing a public website URL.

## SEO and publishing

Before publishing:

1.  Replace placeholder canonical URLs and sitemap URLs with the real
    deployed URL.
2.  Confirm all URLs use the correct GitHub Pages project path or custom
    domain.
3.  Ensure every page has a descriptive title, meta description, clear
    headings and useful image alt text.
4.  Check that `robots.txt` references the correct `sitemap.xml`.
5.  Test all pages and images on the published website.
6.  Add the final repository and deployed-site links to your submission,
    if required.

Do not claim the website is live until you have verified the published
URL in a browser.

## Changelog

### Part 3 --- corrections and enhancements

-   Corrected invalid HTML structure and malformed closing tags.
-   Standardised navigation across the pages and included the enquiry
    page.
-   Improved spelling, grammar, headings, link destinations and image
    alternative text.
-   Used relative image paths intended for deployment.
-   Added shared responsive styling and keyboard-focus indicators.
-   Added JavaScript navigation toggle, product search and sorting,
    image lightbox, order-product prefill, form validation and
    email-draft preparation.
-   Added page-specific SEO metadata, canonical URL placeholders,
    `robots.txt` and `sitemap.xml`.
-   Documented setup steps, image requirements, screenshots, limitations
    and the publishing checklist.

Update this changelog to match the changes actually committed to GitHub.

## References

-   MDN Web Docs --- HTML forms:
    https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms
-   MDN Web Docs --- Constraint validation:
    https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
-   MDN Web Docs --- Document Object Model:
    https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
-   Google Search Central --- SEO Starter Guide:
    https://developers.google.com/search/docs/fundamentals/seo-starter-guide
-   Sitemap Protocol: https://www.sitemaps.org/protocol.html
-   Afrihost --- Domains: https://www.afrihost.com/domains
-   Freepik: https://www.freepik.com
-   Bliss Doughnuts Instagram:
    https://www.instagram.com/bliss.donuts_official/

Business background and project requirements were based on the project
notes and the interview details recorded in the original README. Verify
names, dates, credits and costs against your final submission before
handing it in.