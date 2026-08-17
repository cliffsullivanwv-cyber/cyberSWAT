CYBERSWAT — GRADES 3–12 WEBSITE
================================

WHAT THIS IS
------------
A 12-page static website: a homepage, one page per grade (3–12), and a
Resources & Downloads page. It works by loading a single content file —
assets/data.js — so you can add lesson plans, slide decks, and resource
links without ever touching HTML or CSS.

FILES
-----
index.html              Homepage
grade-3.html ... grade-12.html   One page per grade
resources.html          Categorized resource links + a table of every file
assets/data.js          <-- THE FILE YOU EDIT. All content lives here.
assets/style.css        Design/theme (colors, fonts, layout)
assets/app.js           Renders every page from data.js — no need to touch this
downloads/              Put your actual .docx / .pptx files here

HOW TO ADD YOUR OWN LESSON PLANS, SLIDES, AND DOCUMENTS
---------------------------------------------------------
1. Drop the file into the /downloads folder, e.g.
   downloads/CyberSWAT_Grade3_Unit.docx

2. Open assets/data.js in any text editor. Find the grade (search for
   "number: 3" for Grade 3). Inside that grade's "downloads" array,
   set the matching href, e.g.:

     { type: "DOCX", label: "Teacher Guide", desc: "...",
       href: "downloads/CyberSWAT_Grade3_Unit.docx" }

   Leave href as "" (empty) and the site will show that card as
   "Not uploaded yet" instead of a broken link.

3. You can also point href at a full web link instead of a local file,
   e.g. a Google Drive share link: href: "https://drive.google.com/..."

HOW TO ADD RESOURCE LINKS
--------------------------
In assets/data.js, scroll to the RESOURCES section near the bottom.
Each category looks like this:

  {
    name: "Digital Safety & Privacy",
    links: [
      { title: "Common Sense Education",
        url: "https://www.commonsense.org/education",
        note: "Free K–12 digital citizenship curriculum & lesson library" }
    ]
  }

- To add a link, copy one { title, url, note } line inside the right
  category's "links" array and edit it.
- To add a whole new category, copy an entire { name, links: [...] }
  block and edit the name.
- There's no limit on how many links you add.

HOW TO EDIT LESSONS, FRAMEWORKS, OR TABLETOP EXERCISES
---------------------------------------------------------
Each grade in assets/data.js has:
- essentialQuestion — the big question shown at the top of the grade page
- frameworks — the short named strategies shown as pill badges
- lessons — each has a title, duration, and the "model response" quote
- tabletops — the short rehearsal-exercise cards

Grades 3–5 are placeholder content — swap in your real curriculum
whenever it's ready by editing those fields directly.

HOW TO PREVIEW THE SITE ON YOUR OWN COMPUTER
-----------------------------------------------
Because the pages load assets/data.js via JavaScript, you generally
need to view them through a local server rather than double-clicking
the HTML file (some browsers block local script loading otherwise).
Easiest option if you have Python installed:

  1. Open a terminal in this folder
  2. Run: python3 -m http.server 8000
  3. Open http://localhost:8000 in your browser

HOW TO PUT IT ONLINE
---------------------
This is a plain static site, so it works with any of these (all have
free tiers):
- Vercel (drag-and-drop the whole folder, or connect a GitHub repo)
- Netlify (same — drag-and-drop deploy)
- GitHub Pages
- Your district's existing web hosting, if it allows static file uploads

No build step, database, or server-side code is required.

NEED TO CHANGE COLORS OR FONTS?
---------------------------------
Open assets/style.css and edit the :root section at the top — it lists
every color, font, and spacing value the whole site uses in one place.
