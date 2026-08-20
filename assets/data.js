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
    note: "Preparing K–12 students with future-ready digital skills — companion courseware for this unit.",
    logo: "https://www.learning.com/wp-content/uploads/2021/02/Learning_Logo_Tag.png",
    color: "#1B6FA8"
  },
   swatProgram: {
    title: "SWAT Program Requirements (SB 466)",
    subtitle: "Safety While Accessing Technology Education Program",
    citation: "West Virginia Code §18-2-44",
      link: {
      text: "SB 466 Text",
      url: "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=sb466%20sub1.htm&yr=2024&sesstype=RS&i=466"
    },
    sections: [
      {
        heading: "Purpose of the Law",
        items: [
          "Requires schools to provide annual instruction to help students safely and responsibly use technology and understand online risks."
        ]
      },
      {
        heading: "Who Must Be Served",
        items: [
          "All students in Grades 3–12",
          "Applies to all public schools in the district"
        ]
      },
      {
        heading: "Instruction Requirements",
        items: [
          "Must be provided at least once each school year",
          "Must be age-appropriate",
          "Must cover all required topics",
          "Must be designed using peer-to-peer modeling and observational learning (Bandura)"
        ]
      },
      {
        heading: "Required Instructional Topics",
        items: [
          "Safe and responsible use of social media, messaging, and online tools",
          "Risks of sharing personal information and importance of privacy",
          "Copyright laws for digital content",
          "Importance of communication with trusted adults",
          "Recognizing, avoiding, and reporting online predators, scams, and cyberbullying",
          "Awareness of support resources including the CyberTipline",
          "Risks of sharing sexually suggestive or explicit content, including legal, social, emotional, and long-term impacts"
        ]
      },
      {
        heading: "County (District) Responsibilities",
        items: [
          "Adopt policy requiring SWAT instruction in all schools",
          "Ensure annual instruction for all students in Grades 3–12",
          "Ensure materials are age-appropriate and meet required topics"
        ]
      },
      {
        heading: "Parent Rights Requirements",
        items: [
          "Provide process for parents to review instructional materials",
          "Provide option for parents to opt their child out"
        ]
      },
      {
        heading: "Implementation Timeline",
        items: [
          "Program must be implemented beginning with the 2025–2026 school year"
        ]
      },
      {
        heading: "Key Compliance Expectations",
        items: [
          "Annual instruction is completed",
          "All required topics are addressed",
          "Instruction is age-appropriate",
          "Parent access to materials is provided",
          "Opt-out process is available",
          "Instruction includes peer modeling and discussion"
        ]
      }
    ]
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
        { title: "The New Game Pop-Up", tags: "<strong>Scenario:</strong><br>A student is playing a game on the class tablet. A pop-up message appears that says, 'You Won! Click here to claim your prize!' The student is not sure what to do." },
        { title: "The Unkind Message", tags: "<strong>Scenario:</strong><br>A student receives a message from a classmate that says something mean about how they look. The student feels sad and does not know what to do next." },
        { title: "Whose Password Is It?", tags: "<strong>Scenario:</strong><br>A student's friend asks to borrow their tablet password so they can play a game together at recess. The student is not sure if that is okay." },
        { title: "Ask-First Roleplay", tags: "<strong>Scenario:</strong><br>A student finds a fun new app on the family tablet and wants to download it right away, without asking first." }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, printables", href: "downloads/CyberSWAT_Grade3_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "downloads/CyberSWAT_Grade3_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade3_Sub_Plan.docx" }
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
        { title: "The Shared Tablet", tags: "<strong>Scenario:</strong><br>Two students share a classroom tablet. One student is still logged into their account when the other student sits down to use it next." },
        { title: "The Chain Message", tags: "<strong>Scenario:</strong><br>A student gets a message that says, 'Send this to 10 friends or something bad will happen!' The student is scared and wants to forward it right away." },
        { title: "The Too-Good-To-Be-True Prize", tags: "<strong>Scenario:</strong><br>An ad pops up saying, 'You are the 100th visitor! Enter your name and address to win a new bike!'" },
        { title: "The Group Project Chat", tags: "<strong>Scenario:</strong><br>In a group chat for a class project, one student keeps sending jokes and off-topic messages instead of working." }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, printables", href: "downloads/CyberSWAT_Grade4_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "downloads/CyberSWAT_Grade4_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade4_Sub_Plan.docx" }
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
        { title: "The New Online Friend", tags: "<strong>Scenario:</strong><br>While playing an online game, a student starts chatting with someone they've never met. The stranger asks the student's real name, school, and what they look like." },
        { title: "The Embarrassing Photo", tags: "<strong>Scenario:</strong><br>A student takes a funny but embarrassing photo of a friend and is about to post it in the class group chat without asking." },
        { title: "The Screen-Time Negotiation", tags: "<strong>Scenario:</strong><br>A student wants to use screens for two more hours after already hitting the family's daily limit and is deciding whether to ask or just keep going." },
        { title: "The Copy-Paste Report", tags: "<strong>Scenario:</strong><br>While researching for a report, a student finds a paragraph online that says exactly what they want to say and considers copying it directly." }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, printables", href: "downloads/CyberSWAT_Grade5_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "downloads/CyberSWAT_Grade5_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade5_Sub_Plan.docx" }
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
        { title: "The Unknown Gamer", tags: "<strong>Scenario:</strong><br> A student is playing an online game. Another player says they're the same age and asks what school the student attends. Then the player asks for the student's real name and picture." },
        { title: "The Group Chat Problem", tags: "<strong>Scenario:</strong><br> A group chat includes jokes about a student. Someone shares a screenshot from that student’s private message. Several students add comments. One student knows it’s wrong but worries others will be mad if they speak up." },
        { title: "The Copied Project", tags: "<strong>Scenario:</strong><br> A student is making a slideshow for class and copies images, music, and paragraphs from websites without giving credit. Another student says, 'It’s online, so it’s free to use.'" },
        { title: "The Risky Message", tags: "<strong>Scenario:</strong><br> A student receives repeated messages from someone pressuring them to send something private and threatening to embarrass them if they don’t respond. The student feels uncomfortable and unsure what to do." }
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
        { title: "The Private Screenshot", tags: "<strong>Scenario:</strong><br>A student shares a screenshot from a private conversation in a group chat. The screenshot makes another student look bad, and several students begin reacting and commenting." },
        { title: "The Suspicious Link", tags: "<strong>Scenario:</strong><br>A student receives a message that says, 'Your school account will be deleted unless you click this link and confirm your password.'" },
        { title: "The Pressure Message", tags: "<strong>Scenario:</strong><br>A student receives repeated messages from someone who says, 'If you really trust me, send something private.' The student feels uncomfortable and doesn’t know what to do." },
        { title: "The Copied Media Project", tags: "<strong>Scenario:</strong><br>A student creates a video project using copied music, images from websites, and paragraphs from an article without giving credit. The student says, 'It’s fine because it was online.'" }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "downloads/CyberSWAT_Grade7_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "downloads/CyberSWAT_Grade7_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade7_Sub_Plan.docx" }
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
        { title: "Group Chat Escalation", tags: "<strong>Scenario:</strong><br>A group chat begins with jokes but turns into harmful comments about a student. Some students start saving and resharing screenshots." },
        { title: "The Account Takeover Warning", tags: "<strong>Scenario:</strong><br>A student receives account alerts and then a message asking for a password to 'fix the problem.' The student worries the account may be compromised." },
        { title: "The Private Content Threat", tags: "<strong>Scenario:</strong><br>A student says someone online is threatening to embarrass them unless they send or do something private. The student is afraid to tell an adult." },
        { title: "The High School Reputation Check", tags: "<strong>Scenario:</strong><br>A student is about to enter high school and finds old posts, comments, and shared content that may affect how others view them." }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "downloads/CyberSWAT_Grade8_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "downloads/CyberSWAT_Grade8_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade8_Sub_Plan.docx" }
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
        { title: "The Scholarship Surprise", tags: "<strong>Scenario:</strong><br>A student is applying for a scholarship and a spot on a team. While filling out the form, they realize old posts and tagged photos from years ago might still come up in a search." },
        { title: "The Sophisticated Phishing Attack", tags: "<strong>Scenario:</strong><br>A student gets repeated 'approve your login' notifications they didn’t start, then a message from 'school IT' asking them to approve one and share the code to 'fix a problem.'" },
        { title: "The Deepfake Impersonation", tags: "<strong>Scenario:</strong><br>An AI-generated image and a fake account impersonating a student start spreading. The student is upset and classmates are unsure whether it’s real." },
        { title: "The Serious Coercion Threat", tags: "<strong>Scenario:</strong><br>A student says someone online is threatening to share or expose something private unless they send money or more content. The student is scared and thinking about paying or handling it alone." }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "downloads/CyberSWAT_Grade9_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "downloads/CyberSWAT_Grade9_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade9_Sub_Plan.docx" }
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
        { title: "The Viral Claim", tags: "<strong>Scenario:</strong><br>A shocking post, with a dramatic image and a big statistic, is spreading fast through a group chat. People are resharing it and demanding everyone react. One student isn’t sure it’s real." },
        { title: "The Algorithm Rabbit Hole", tags: "<strong>Scenario:</strong><br>A student notices their feed keeps pushing more extreme and comparison-heavy content the longer they watch, and they’re feeling worse and staying up late. A friend asks for help managing it." },
        { title: "The Free App Data Trade", tags: "<strong>Scenario:</strong><br>A fun new quiz app (or AI photo tool) is everywhere. It’s free, but it asks for contacts, photos, and rights to anything you upload, buried in a long agreement no one reads." },
        { title: "The Creator's Dilemma", tags: "<strong>Scenario:</strong><br>A student creator can get a lot of attention by reposting someone else’s work as their own, using an AI-generated image without disclosing it, or posting something edgy about a classmate for clout." }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "downloads/CyberSWAT_Grade10_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "downloads/CyberSWAT_Grade10_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade10_Sub_Plan.docx" }
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
        { title: "The Background Check", tags: "<strong>Scenario:</strong><br>A student is a finalist for a competitive internship. The employer says they’ll ‘look them up.’ The student has an unprofessional email, a mixed personal-and-professional feed, and no visible proof of their skills." },
        { title: "The Too-Good Job Offer", tags: "<strong>Scenario:</strong><br>A student gets a ‘remote job’ offer with easy money. The ‘employer’ sends a check to buy equipment, asks them to deposit it and send back the difference, and wants their SSN and bank login to ‘set up payroll.’" },
        { title: "The Data Breach Notice", tags: "<strong>Scenario:</strong><br>A student gets a notice that a service they use was breached and their email, password, and some personal info may be exposed. They reused that password on other accounts." },
        { title: "The Rights & Responsibility Case", tags: "<strong>Scenario:</strong><br>A near-adult student faces a choice: agree to a service’s terms without reading, reshare something that may be defamatory or harassing, or use copyrighted or AI-generated work without permission or disclosure, each with real legal weight now." }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "downloads/CyberSWAT_Grade11_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "downloads/CyberSWAT_Grade11_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade11_Sub_Plan.docx" }
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
        { title: "The Mentor Moment", tags: "<strong>Scenario:</strong><br>A younger student the senior knows is being pressured in a group chat and is scared to tell anyone. They come to the senior for help instead of an adult." },
        { title: "The AI Integrity Dilemma", tags: "<strong>Scenario:</strong><br>A senior is short on time for a college essay or a job task. They could have AI write most of it and submit it as their own, with no disclosure, and no one would likely know." },
        { title: "The Manipulation in the Public Square", tags: "<strong>Scenario:</strong><br>Right before an election or a big community decision, a realistic AI deepfake and a wave of coordinated posts spread a false claim designed to change how people vote or react." },
        { title: "The Independence Launch", tags: "<strong>Scenario:</strong><br>A senior is setting up life on their own, new accounts, a first solo device and Wi-Fi, banking, and no school IT to call if something breaks. They want to be ready before they need it." }
      ],
      downloads: [
        { type: "DOCX", label: "Teacher Guide", desc: "Full unit: scripted lessons, tabletops, assessment, printables", href: "downloads/CyberSWAT_Grade12_Unit.docx" },
        { type: "PPTX", label: "Slide Deck", desc: "Project during class — one section per lesson", href: "downloads/CyberSWAT_Grade12_Slides.pptx" },
        { type: "DOCX", label: "Substitute Plan", desc: "One page, no prep — any sub can run it", href: "downloads/CyberSWAT_Grade12_Sub_Plan.docx" }
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
          { title: "NetSmartz (NCMEC)", url: "https://www.missingkids.org/netsmartz", note: "Age-graded online-safety resources from the National Center for Missing & Exploited Children" },
          { title: "The TAKE IT DOWN Act", url: "https://www.congress.gov/crs-product/LSB11314", note: "Congress.gov summary of the federal law prohibiting nonconsensual publication of intimate images" }
        ]
      },
      {
        name: "CIPA Resources & Resources for Students",
        links: [
          { title: "Teachers' Essential Guide to Digital Citizenship for CIPA and E-Rate", url: "https://www.commonsense.org/education/articles/essential-guide-to-digital-citizenship-for-cipa-and-e-rate#How%20do%20I%20get%20started%20with%20meeting%20CIPA%20requirements?", note: "What is E-rate?" },
          { title: "Digital Citizenship for CIPA and E-Rate", url: "https://www.commonsense.org/sites/default/files/pdf/2020-09/document-digital-citizenship-for-cipa-and-e-rate_2.pdf", note: "PDF from Common Sense Media with Links" },
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
        links: [
          { title: "Common Sense Media", url: "https://www.commonsensemedia.org", note: "Age-based reviews and ratings for apps, games, and shows, plus family tech agreements" },
          { title: "ConnectSafely", url: "https://www.connectsafely.org/", note: "Parent guides on social media, gaming, and online safety" },
          { title: "Family Online Safety Institute (FOSI)", url: "https://www.fosi.org/", note: "Research and resources for raising kids in a connected world" },
          { title: "National Cybersecurity Alliance — Stay Safe Online", url: "https://staysafeonline.org/", note: "Family-friendly cybersecurity basics and online safety tips" },
          { title: "HealthyChildren.org (AAP)", url: "https://www.healthychildren.org/English/family-life/Media/Pages/default.aspx", note: "Pediatrician-backed guidance on screen time and healthy media habits" }
        ]
      }
    ]
  }

};

