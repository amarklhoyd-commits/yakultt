MONTHSARY SURPRISE WEBSITE
==========================

PROJECT CONTENTS
- index.html       The six screens and page structure
- style.css        Colors, layout, responsive styling, and animations
- script.js        Name/date/photo validation and interactive behavior
- assets/images/   Optional folder for any extra images you want to add

1. CREATE THE PROJECT FOLDER
Create a folder named Monthsary_Website. Inside it, create index.html, style.css,
and script.js. Create an assets folder, then an images folder inside assets.
Copy each supplied file into its matching location.

2. PERSONALIZE THE WEBSITE
Open script.js and edit the settings at the very top:

const websiteTitle = "Our Little Love Story";
const girlfriendName = "HER FULL NAME";
const monthsaryMessage = `...`;
const finalMessage = `...`;
const lastSurpriseMessage = `...`;
const expectedMonthsaryDate = "";

Replace HER FULL NAME with her complete name exactly as you want her to type it.
Name matching ignores letter case but checks the spelling and spacing.
Write your own love letter and messages between the backticks. You can use
multiple paragraphs. Do not remove the backticks around message text.

For expectedMonthsaryDate, use YYYY-MM-DD (example: 2026-10-31) if you want
to pre-fill the date picker. Leave it as "" if you want her to choose the date.
The date she selects is shown on the final surprise.

3. RUN WITH VISUAL STUDIO CODE
- Open the Monthsary_Website folder in Visual Studio Code.
- Optional: install the "Live Server" extension.
- Right-click index.html and choose "Open with Live Server".
- Or simply double-click index.html to open it in a modern browser.
Internet access is only needed to load the optional Google Fonts. The site
otherwise runs locally with plain HTML, CSS, and JavaScript.

4. TEST ALL SIX SCREENS
1) Welcome: click "Open My Surprise".
2) Name verification: try an empty name, a wrong name, then the exact name.
3) Date: try continuing with no date, then choose a date and continue.
4) Photo: try continuing without a photo, then upload an image.
5) Letter: click the envelope and wait for the letter to slide out; then continue.
6) Final surprise: check the name, date, and photo; click "One Last Surprise".
Use "Relive our little surprise" to restart the flow.

5. PUBLISH ONLINE
GITHUB PAGES
- Create a GitHub repository (for example, monthsary-surprise).
- Upload index.html, style.css, script.js, README.txt, and the assets folder.
- In repository Settings > Pages, select Deploy from a branch.
- Choose the main branch and root folder, then Save.
- Wait for the published URL shown in the Pages settings.

VERCEL
- Sign in to Vercel and choose Add New > Project.
- Import the GitHub repository containing this folder, or deploy the project
  folder using Vercel's supported CLI workflow.
- No build command or framework preset is needed for this static website.
- Set the output directory to the project root (usually "./") and deploy.

PRIVACY AND NOTES
- The girlfriend name check is a playful client-side gate, not secure
  authentication. Anyone who can inspect the JavaScript can see the name.
- The selected photo is displayed locally in the visitor's browser. This
  website does not upload it to a server or save it after the page is closed.
- If you share the public website URL, anyone with the link can visit it.
- The page uses a temporary browser object URL for the selected photo. It is
  preserved while moving through the pages and released when restarting.
