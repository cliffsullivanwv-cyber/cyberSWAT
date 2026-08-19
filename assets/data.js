/* ============================================================
   CyberSWAT — SITE CONTENT
   ============================================================
   This is the ONLY file you need to edit to update the site.

   - To add resource links: scroll to RESOURCES.categories and add
     a new { title, url, note } object inside the right category
     (or add a whole new category).
   - To add/replace a grade's downloadable files: find that grade
     in GRADES below and fill in the "downloads" href fields with
     the path to your file (drop files in /downloads and point to
     "downloads/yourfile.docx"), or a full https:// link.
   - To edit lessons, frameworks, or tabletop exercises: edit the
     grade's object directly. Nothing else in the site needs to
     change — every page reads from this file automatically.
   ============================================================ */

const SITE = {

  brand: "CyberSWAT",
  tagline: "Grades 3–12 · Digital Citizenship & Online Safety",
  standardsLine: "Aligned to WV Senate Bill 466 (SWAT) and WV College- and Career-Readiness Standards for Technology & ELA.",
gradePagePartner: {
    title: "Learning.com",
    url: "https://www.learning.com/",
    note: "Preparing K–12 students with future-ready digital skills — companion courseware for this unit."
  },
  bands: [
    { id: "elementary", label: "Grades 3–5",  name: "Foundations",   color: "var(--amber)" },
    { id: "middle",     label: "Grades 6–8",  name: "Responsibility",color: "var(--teal)"  },
    { id: "high",       label: "Grades 9–12", name: "Independence",  color: "var(--rust)"  }
  ],

  stats: [
    { value: "10", label: "grade-level units" },
    { value: "30", label: "scripted lessons" },
    { value: "40", label: "tabletop exercises" },
    { value: "100%", label: "print-ready resources" }
  ],

  /* ---------------------------------------------------------
     GRADES — one object per grade level, 3 through 12.
     downloads[].href: leave "" until you have a real file/link.
     --------------------------------------------------------- */
  grades: [

    {
      number: 3,
      band: "elementary",
      title: "Being Safe & Kind Online",
      summary: "What's private, being kind in every message, and always asking a trusted adult first.",
      essentialQuestion: "How can 3rd grade students use technology safely, kindly, and responsibly?",
      frameworks: ["Ask First, Click Second", "Kind Words Only", "Tell a Trusted Adult"],
      lessons: [
        { title: "What's Private, What's Not", duration: "30–35 min",
          model: "That's private. I'm not sharing that, and I'm telling my teacher." },
        { title: "Being Kind Online", duration: "30–35 min",
          model: "I don't send unkind messages, and I tell an adult if I see one." },
        { title: "Screens, Games & Asking First", duration: "30–35 min",
          model: "I'll ask a grown-up before I download or click on that." }
      ],
      tabletops: [
        { title: "The New Game Pop-Up", tags: "Unexpected prompts, asking first" },
        { title: "The Unkind Message", tags: "Kindness, telling a trusted adult" },
        { title: "Whose Password Is It?", tags: "Privacy basics, keeping info safe" },
        { title: "Ask-First Roleplay", tags: "Practicing the ask-first habit" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, printables", href: "" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "" }
      ]
    },

    {
      number: 4,
      band: "elementary",
      title: "Good Digital Citizens",
      summary: "Strong passwords, digital manners, and telling trustworthy information from fakes.",
      essentialQuestion: "How can 4th grade students make good choices as members of an online community?",
      frameworks: ["Think Before You Type", "Password Power-Up", "Trusted vs. Untrusted"],
      lessons: [
        { title: "Building Strong Passwords", duration: "35–40 min",
          model: "I keep my password secret, even from friends." },
        { title: "Digital Manners & Netiquette", duration: "35–40 min",
          model: "I write online the way I'd want someone to write to me." },
        { title: "Spotting Trustworthy Information", duration: "35–40 min",
          model: "I'll check with an adult before I believe or share this." }
      ],
      tabletops: [
        { title: "The Shared Tablet", tags: "Account privacy, shared devices" },
        { title: "The Chain Message", tags: "Forwarding, verifying before sharing" },
        { title: "The Too-Good-To-Be-True Prize", tags: "Early scam awareness" },
        { title: "The Group Project Chat", tags: "Digital manners, staying on-topic" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, printables", href: "" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "" }
      ]
    },

    {
      number: 5,
      band: "elementary",
      title: "Ready for Middle School Tech",
      summary: "A first look at digital footprints, online friendships, and balancing screen time.",
      essentialQuestion: "How can 5th grade students take more responsibility for their digital footprint before middle school?",
      frameworks: ["Footprint First Steps", "Pause · Check · Decide", "Friend or Stranger?"],
      lessons: [
        { title: "My First Digital Footprint", duration: "40 min",
          model: "I think about who could see this before I post or send it." },
        { title: "Online Friendships & Strangers", duration: "40 min",
          model: "I don't share personal details with someone I only know online." },
        { title: "Balancing Screen Time & Responsibility", duration: "40 min",
          model: "I follow my family's tech rules and take breaks on my own." }
      ],
      tabletops: [
        { title: "The New Online Friend", tags: "Stranger contact, personal info" },
        { title: "The Embarrassing Photo", tags: "Digital footprint, thinking ahead" },
        { title: "The Screen-Time Negotiation", tags: "Self-regulation, family rules" },
        { title: "The Copy-Paste Report", tags: "Citing sources, academic honesty" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, printables", href: "" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "" }
      ]
    },

    {
      number: 6,
      band: "middle",
      title: "Foundations of Online Safety",
      summary: "Digital footprint, safe communication, and spotting scams.",
      essentialQuestion: "How can 6th grade students make safe, responsible, legal, and respectful choices when using technology and communicating online?",
      frameworks: ["Share or Protect?", "Stop · Save · Tell", "STOP · THINK · VERIFY"],
      lessons: [
        { title: "My Digital Footprint & Online Privacy", duration: "45–50 min",
          model: "I don't share personal information online. I'm leaving this chat and telling a trusted adult." },
        { title: "Respectful, Safe & Legal Online Communication", duration: "45–50 min",
          model: "This is not okay. I'm not participating. Do not forward this." },
        { title: "Think Before You Click: Scams & Misinformation", duration: "45–50 min",
          model: "I will not enter my password. I'll show the message to a trusted adult to verify it." }
      ],
      tabletops: [
        { title: "The Unknown Gamer", tags: "Privacy, suspicious contact, trusted adults" },
        { title: "The Group Chat Problem", tags: "Cyberbullying, bystander/upstander, reporting" },
        { title: "The Copied Project", tags: "Copyright, citation, fair-use basics" },
        { title: "The Risky Message", tags: "Pressure, unsafe requests, reporting" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "34-page unit: scripted lessons, tabletops, assessment, printables", href: "downloads/CyberSWAT_Grade6_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "22-slide deck — one section per lesson", href: "downloads/CyberSWAT_Grade6_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade6_Sub_Plan.docx" }
      ]
    },

    {
      number: 7,
      band: "middle",
      title: "Reputation & Responsibility",
      summary: "Digital reputation, upstander responses, and responsible sharing.",
      essentialQuestion: "How can 7th grade students protect their reputation and respond responsibly when they see others mistreated online?",
      frameworks: ["Post, Pause, or Protect", "Reputation-Repair: Own · Stop · Tell", "Upstander Escalation Ladder"],
      lessons: [
        { title: "Building & Protecting a Digital Reputation", duration: "45–50 min",
          model: "I pause before I post, and I own it if I made a mistake." },
        { title: "From Bystander to Upstander", duration: "45–50 min",
          model: "I'm not going to laugh at this. I'm telling someone." },
        { title: "Sharing Responsibly: Rumors & Screenshots", duration: "45–50 min",
          model: "I won't forward this. I don't know if it's true or if it's okay to share." }
      ],
      tabletops: [
        { title: "The Screenshot That Spread", tags: "Consent, forwarding, rumor control" },
        { title: "The Public Callout", tags: "Reputation repair, taking ownership" },
        { title: "The Silent Bystander", tags: "Upstander responses, escalation" },
        { title: "The Impersonation Account", tags: "Identity theft basics, reporting" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "" }
      ]
    },

    {
      number: 8,
      band: "middle",
      title: "Leadership & High-School Readiness",
      summary: "Digital leadership, data security, and clear reporting pathways.",
      essentialQuestion: "How can 8th grade students lead by example online and know exactly where to turn when something goes wrong?",
      frameworks: ["Ethical Decision Matrix (5 checks)", "Response Protocol: Pause · Say · Step Back · Report", "Reporting Pathway Map"],
      lessons: [
        { title: "Thinking Like a Digital Leader", duration: "45–50 min",
          model: "Before I act, I check: is it true, kind, legal, and mine to share?" },
        { title: "Protecting Your Data & Accounts", duration: "45–50 min",
          model: "I'm updating this password and turning on extra account protection." },
        { title: "Knowing Your Reporting Pathway", duration: "45–50 min",
          model: "I'm not handling this alone — I'm reporting it to [trusted adult]." }
      ],
      tabletops: [
        { title: "The Data Breach Rumor", tags: "Account security, verifying before acting" },
        { title: "The Peer Pressure DM", tags: "Refusal scripts, stepping back" },
        { title: "The Anonymous App", tags: "Anonymity risks, ethical decision-making" },
        { title: "The Reporting Maze", tags: "Building a personal reporting pathway" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "" }
      ]
    },

    {
      number: 9,
      band: "high",
      title: "Digital Footprint, Advanced Threats & Personal Security",
      summary: "Manage a real-world footprint, shut down advanced threats, and respond to serious harm.",
      essentialQuestion: "How can 9th grade students manage a footprint colleges and employers can see, and shut down advanced threats before they escalate?",
      frameworks: ["Footprint Impact Analysis", "Verify-Before-You-Act", "Layered Reporting Pathway"],
      lessons: [
        { title: "Your Footprint, Colleges & Employers", duration: "50 min",
          model: "I'm cleaning this up now, before someone else finds it later." },
        { title: "Recognizing Advanced Threats: Phishing & Sextortion", duration: "50 min",
          model: "I'm not responding, I'm not paying, and I'm reporting this immediately." },
        { title: "When Harm Escalates: Getting Serious Help", duration: "50 min",
          model: "This is beyond what I can handle alone. I'm going to [counselor/law enforcement contact] now." }
      ],
      tabletops: [
        { title: "The Old Post Resurfaces", tags: "Footprint cleanup, impact analysis" },
        { title: "The Fake Scholarship Email", tags: "Phishing recognition, verification" },
        { title: "The Extortion Attempt", tags: "Serious harm response, layered reporting" },
        { title: "The Compromised Account", tags: "Account recovery, next steps" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "" }
      ]
    },

    {
      number: 10,
      band: "high",
      title: "Information Integrity, Digital Influence & Ethical Citizenship",
      summary: "Judge what's true, understand algorithms and influence, and create ethically.",
      essentialQuestion: "How can 10th grade students judge what's true in an AI-saturated feed and create content ethically?",
      frameworks: ["SIFT & Lateral Reading", "Attention-Economy Awareness", "Ethical Creator Code"],
      lessons: [
        { title: "SIFT: Judging What's True", duration: "50 min",
          model: "I'm stopping and checking the source before I believe or share this." },
        { title: "How Algorithms Shape What You See", duration: "50 min",
          model: "I notice this is designed to keep me scrolling — I'm choosing to step away." },
        { title: "Creating & Sharing Content Ethically", duration: "50 min",
          model: "I'm crediting the source and thinking about who this content could affect." }
      ],
      tabletops: [
        { title: "The Viral Claim", tags: "Lateral reading, source verification" },
        { title: "The Endless Scroll", tags: "Attention economy, self-awareness" },
        { title: "The AI-Generated Image", tags: "Synthetic media, disclosure" },
        { title: "The Uncredited Repost", tags: "Ethical creation, attribution" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "" }
      ]
    },

    {
      number: 11,
      band: "high",
      title: "Digital Identity, Financial Safety & Cyber Readiness",
      summary: "Build a professional identity, protect your money and data, and think like a defender.",
      essentialQuestion: "How can 11th grade students prepare for the money, identity, and legal realities of adulthood?",
      frameworks: ["Public vs. Private Presence", "Verify-and-Refuse", "Personal Incident-Response Plan"],
      lessons: [
        { title: "Building a Professional Online Presence", duration: "50 min",
          model: "I'm separating what's public and professional from what's personal." },
        { title: "Protecting Money & Identity", duration: "50 min",
          model: "I'm verifying this request through a separate, trusted channel before I act." },
        { title: "Thinking Like a Defender", duration: "50 min",
          model: "If this happened to me, here's my plan: contain it, report it, recover." }
      ],
      tabletops: [
        { title: "The Job Offer Scam", tags: "Financial fraud, verify-and-refuse" },
        { title: "The Identity Theft Alert", tags: "Credit/identity basics, response steps" },
        { title: "The LinkedIn Request", tags: "Professional presence, public vs. private" },
        { title: "The Ransomware Scenario", tags: "Incident response, staying calm" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "" }
      ]
    },

    {
      number: 12,
      band: "high",
      title: "Digital Leadership, AI & Lifelong Cyber Citizenship",
      summary: "Lead others, use AI wisely, and own your security and citizenship for life.",
      essentialQuestion: "How can 12th grade students step into leadership, use AI wisely, and own their security and citizenship for life?",
      frameworks: ["Model · Mentor · Protect", "Responsible AI Use", "Launch Readiness Plan"],
      lessons: [
        { title: "Leading & Mentoring Younger Students", duration: "50 min",
          model: "I'm modeling the habits I want younger students to pick up from me." },
        { title: "Using AI Tools Responsibly", duration: "50 min",
          model: "I'm disclosing that I used AI here, and I've checked the output myself." },
        { title: "Owning Your Security for Life", duration: "50 min",
          model: "This is now my responsibility — here's my plan going forward." }
      ],
      tabletops: [
        { title: "The Underclassman's Question", tags: "Mentoring, modeling safe habits" },
        { title: "The AI Homework Shortcut", tags: "Academic honesty, responsible AI use" },
        { title: "The Post-Graduation Checklist", tags: "Independence, lifelong habits" },
        { title: "The Workplace Phishing Test", tags: "Career readiness, staying alert" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "" }
      ]
    }

  ],

  /* ---------------------------------------------------------
     RESOURCES — organized by category. Add as many links as
     you want inside any category's "links" array, or add a
     brand new category by copying the {name, links: []} shape.
     --------------------------------------------------------- */
  resources: {
    categories: [
      {
        name: "Digital Safety & Privacy",
        links: [
          { title: "Common Sense Education", url: "https://www.commonsense.org/education", note: "Free K–12 digital citizenship curriculum & lesson library" },
          { title: "Cyber Safe Schools", url: "https://www.cybersafeschools-nw3c.org/", note: "Free K–12 digital citizenship curriculum & lesson library" },
           { title: "Classroom Internet Safety Curriculum", url: "https://csnp.org/resources/parents/classroom-internet-safety-curriculum/", note: "Free K–12 digital citizenship curriculum & lesson library" },
          { title: "FTC — OnGuardOnline / Consumer Security", url: "https://consumer.ftc.gov/online-security", note: "Federal guidance on scams, privacy, and online security" },
          { title: "Educator Resources - iKeepSafe", url: "https://ikeepsafe.org/resources/educator/", note: "Privacy Compliance for Education Technology" }  
        ]
      },
      {
        name: "Cyberbullying & Reporting",
        links: [
          { title: "StopBullying.gov", url: "https://www.stopbullying.gov", note: "Federal cyberbullying prevention and reporting guidance" },
          { title: "NetSmartz (NCMEC)", url: "https://www.missingkids.org/netsmartz", note: "Age-graded online-safety resources from the National Center for Missing & Exploited Children" }
        ]
      },
      {
        name: "CIPA Resources & Resources for Students",
        links: [
          { title: "Teachers' Essential Guide to Digital Citizenship for CIPA and E-Rate", url: "https://www.commonsense.org/education/articles/essential-guide-to-digital-citizenship-for-cipa-and-e-rate#How%20do%20I%20get%20started%20with%20meeting%20CIPA%20requirements?", note: "What is E-rate?" },
          { title: "Digital Citizenship for CIPA and E-Rate", url: "extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.commonsense.org/sites/default/files/pdf/2020-09/document-digital-citizenship-for-cipa-and-e-rate_2.pdf", note: "PDF from Common Sense Media with Links" }, 
          { title: "30 Great Lesson Plans for Internet Safety", url: "https://www.commonsense.org/education/articles/30-great-lesson-plans-for-internet-safety", note: "Help kids practice smart internet habits and stay safe online" }, 
          { title: "Learning.Com", url: "https://www.learning.com/", note: "Empower West Virginia Students with Essential Digital Literacy Skills" }, 
          { title: "Khan Academy", url: "https://www.khanacademy.org/college-careers-more/internet-safety", note: "Internet Safety" }, 
          { title: "Be Internet Awesome", url: "https://beinternetawesome.withgoogle.com/en_us/", note: "Empowering kids to be safe, confident explorers of the online world." }, 
          { title: "Technological Literacy", url: "https://wv.pbslearningmedia.org/subjects/engineering--technology/technological-literacy/digital-citizenship/?rank_by=recency", note: "PBS Learning Media for Teachers" }
        ]
      },
       {
        name: "AI & Media Literacy",
        links: [
          { title: "ISTE — AI in Education", url: "https://iste.org/ai", note: "Standards and guidance on AI use in K–12 classrooms" },
          { title: "Media Smarts", url: "https://mediasmarts.ca/digital-media-literacy", note: "Digital Media Literacy Resources" } 
        ]
      },
      {
        name: "Cybersecurity Awareness",
        links: [
          { title: "CISA — Cybersecurity Awareness", url: "https://www.cisa.gov/topics/cybersecurity-best-practices", note: "Federal cybersecurity best-practices hub" }
        ]
      },
      {
        name: "West Virginia Standards & Policy",
        links: [
          { title: "WV Department of Education", url: "https://wvde.us", note: "State standards, policy, and curriculum resources" }
        ]
      },
      {
        name: "Parent & Family Resources",
        links: []
      }
    ]
  }

};
