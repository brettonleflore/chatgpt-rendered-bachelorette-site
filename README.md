# NOLA Bachelorette Weekend

Responsive static watercolor New Orleans bachelorette guide.

## Deploy to Vercel
1. Upload this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Other**.
4. Leave Build Command blank.
5. Leave Output Directory blank / root.
6. Deploy.

There is no npm install or build step.

## Main files
- `index.html` — content, navigation, restaurant guide, stay guide and editorial sections
- `styles.css` — responsive visual system
- `script.js` — accessible mobile navigation
- `assets/` — watercolor artwork

## Included artwork placements
- `avoid-watercolor.jpg` — Things to Avoid / Bourbon Street
- `frenchmen-watercolor.jpg` — Frenchmen Street music guide
- `cafe-du-monde-watercolor.jpg` — Where to Eat lead art
- `eat-card.jpg`, `play-card.jpg`, `drink-card.jpg`, `plan-card.jpg` — cropped category artwork

## QA completed
- No duplicate HTML IDs
- All in-page navigation anchors resolve
- All local image/script/style paths resolve
- All images have alt text
- Homepage and key assets return HTTP 200 in a local static-server smoke test
- Mobile menu now maintains `aria-expanded` and closes with Escape
