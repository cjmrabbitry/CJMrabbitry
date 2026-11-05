# CJM Legacy Rabbitry website

Static site for cjmrabbitry.com, made to be hosted on GitHub Pages. There's no build step: upload the files and they go live.

## Where things live

| To change… | Edit this file |
|---|---|
| A rabbit's status, details, or adding a new rabbit | **Your Google Sheet** (not a file here) |
| The top menu, the footer, or the "Peer Review" block | `js/layout.js` |
| Colors, fonts, or header/footer styling | `css/site.css` |
| Homepage-only styling | `css/home.css` |
| A single page's words or layout | that page's `.html` file |

## Updating a rabbit (phone or iPad)

1. Open your rabbit list in the Google Sheets app.
2. Change the `status` column to `Available`, `Reserved`, or `Not for Sale`, or add a new row.
3. That's all. The site picks up the change within about 5 minutes (that's how often Google refreshes a published sheet).

Keep the column headers as they are: `name, slug, breed, variety, color, sex, age, sire, dam, status, has_photo, photo_credit, photo_credit_url`

- `slug` is the rabbit's photo file name (for example, `hlh-abu` means the photo is `hlh-abu.webp`). Use lowercase letters and dashes only.
- `has_photo` is `yes` or `no`.
- Row order doesn't matter. The page always shows Available first, then Reserved, then Holland Lops, then Dwarf Hotots.
- `data/rabbits.csv` is a backup the page uses only if Google can't be reached. Every so often, download the sheet as CSV (File → Download → .csv) and replace that file so the backup stays current.
- The sheet's link is set near the bottom of `our-rabbits.html` (`SHEET_CSV_URL`).

## Page addresses

GitHub Pages serves `our-rabbits.html` at `/our-rabbits`, so the old Webflow links keep working.

## Adding the Peer Review block to a page

Put `<div data-peer-review></div>` where it should appear, just before the footer.
