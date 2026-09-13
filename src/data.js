/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Anaya",
  last: "Jain",
  fullName: "Anaya Jain",
  tagline: "Applying ML to real-world science — not just to classify, but to measure.",
  location: "",
  email: "",
  photo: "",
  aboutPhoto: "",
  bio: [
    "I'm a Grade 12 student working at the intersection of machine learning, physics, and real-world measurement. My research applies computer vision to agricultural disease monitoring — extending a disease-classification model into an image-analysis framework that produces quantitative severity estimates, not just category labels.",
    "Beyond research, I build things that make learning and information more accessible: a tutoring platform connecting underprivileged students with volunteers, a real-time chord classifier for beginner guitarists, and a hyperlocal air quality network that surfaces pollution data conventional stations miss.",
    "I founded HERizon to bring more girls into STEM through mentorship and community, and I tutor on Schoolhouse.world. What connects all of it is a belief that technology matters most when it helps people make better decisions.",
  ],
  socials: {
    github: "",     // ← add if you have one; the Contact card is hidden while empty
    scholar: "",
    linkedin: "",   // ← add if you have one; the Contact card is hidden while empty
    twitter: "",
  },
  cv: "/Anaya_Jain_CV.pdf",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {  label: "Research",
    children: [
      { label: "Severity Analysis", to: "/research/rice-leaf-severity" },
      { label: "URTC Poster", to: "/research/urtc-rice-leaf-detection" },
    ], },
  {
    label: "Experience",
    children: [
      { label: "Programmes", to: "/work" },
      { label: "Projects", to: "/projects" },
    ],
  },
  { label: "Awards", to: "/awards" },
  { label: "Leadership", to: "/volunteering" },
  { label: "Contact", to: "/contact" },
];

/* ==================================================================
   RESEARCH — two distinct studies, presented separately.

   Wording note: severity here is an image-derived estimate obtained by
   thresholding Grad-CAM activation. It is deliberately NOT described as
   a percentage of affected leaf area, and Grad-CAM is NOT described as
   delineating lesion boundaries — activation can extend beyond
   symptomatic tissue.
   ================================================================== */

export const RESEARCH = [
  {
    slug: "rice-leaf-severity",
    title: "Comparing Image-Derived Disease Severity Across Rice Leaf Diseases Using Deep Learning",
    subtitle: "Grad-CAM–Derived Severity Analysis",
    org: "Vizuara AI High School Research Programme",
    dates: "2025 – 26",
    status: "PAPER SUBMITTED",
    lead: "I trained a DenseNet-121 model to classify ten rice leaf classes, then used Grad-CAM activation maps to derive a quantitative, image-based severity estimate — extending a disease-classification model into an image-analysis framework.",
    sections: [
      {
        heading: "Motivation",
        body: "Farmers lose crops to plant disease, and manual inspection is slow and costly. Image-based severity analysis can support scalable, drone-assisted monitoring that reduces effort, cost, and time while enabling earlier intervention.",
      },
      {
        heading: "Hypothesis",
        body: "Different rice leaf disease classes would exhibit different image-derived severity estimates, because the diseases differ in their visible symptom patterns and in the extent of tissue damage they produce.",
      },
      {
        heading: "Dataset and model",
        body: "The study used 10,407 images spanning 10 rice leaf classes, split into 8,323 training images and 2,084 held-out validation images. A DenseNet-121 model was trained for disease classification, and Grad-CAM was used to visualise the image regions contributing to each prediction.",
      },
      {
        heading: "How severity was measured",
        body: "High-activation regions of the Grad-CAM maps were thresholded and used to derive an image-based severity estimate for each image. The measure comes from model activation rather than from manually delineated lesions.",
      },
      {
        heading: "Finding",
        body: "Image-derived severity estimates differed across disease classes, consistent with the hypothesis that diseases differ in visible symptom pattern and in the extent of tissue damage.",
      },
      {
        heading: "Interpretation and limits",
        body: "Grad-CAM activation can extend beyond symptomatic tissue, so the result should be read as an image-derived severity estimate rather than an exact measurement of lesion extent. The comparison between classes is the meaningful output, not the absolute value for any single image.",
      },
      {
        heading: "Why it matters",
        body: "Faster, cheaper disease monitoring means earlier intervention, and less crop loss for farmers.",
      },
    ],
    outcomes: [
      "Research paper draft submitted to the Journal of Emerging Investigators (JEI)",
    ],
    pipeline: [
      "Image preprocessing across 10 rice leaf classes — 10,407 images, split 8,323 training and 2,084 held-out validation",
      "DenseNet-121 training for disease classification",
      "Grad-CAM to visualise the image regions contributing to each prediction",
      "Thresholding of high-activation regions to derive an image-based severity estimate",
      "Statistical comparison of severity estimates across disease classes",
    ],
    tags: ["Python", "Deep Learning", "DenseNet-121", "Grad-CAM", "Image-Derived Severity", "Precision Agriculture"],
    link: "",
    featured: true,
  },

  /* ------------------------------------------------------------------
     IEEE MIT URTC 2025 poster — separate study, different methodology
     and findings from the JEI paper above.

     TODO: the fields below are drawn from the resume summary only.
     Replace the sections, pipeline, and tags with the poster's actual
     methodology and results once you share it.
     ------------------------------------------------------------------ */
  {
    slug: "urtc-rice-leaf-detection",
    title: "Rice Leaf Disease Detection Using Deep Learning",
    subtitle: "Poster Presentation",
    org: "IEEE MIT Undergraduate Research Technology Conference (URTC) 2025",
    dates: "October 2025",
    status: "POSTER PRESENTED",
    lead: "A poster on applying deep learning to rice leaf disease detection, focused on image-based classification accuracy and on how such a system could be integrated into drone-based precision agriculture.",
    sections: [
      {
        heading: "Focus",
        body: "Applying convolutional and DenseNet architectures to the detection of rice leaf disease from leaf images, with attention to classification accuracy and to the practical constraints of field deployment.",
      },
      {
        heading: "Toward field deployment",
        body: "Explored how an image-based detection system could be integrated into drone-based precision agriculture workflows, where imagery is captured at scale and inspected automatically rather than by hand.",
      },
      /* TODO: add the poster's dataset, architecture comparison, and
         accuracy results as their own headings. */
    ],
    outcomes: [
      "Poster selected for presentation at the IEEE MIT Undergraduate Research Technology Conference (URTC) 2025, virtual",
    ],
    pipeline: null, /* TODO: add from the poster if it has a method figure */
    tags: ["Python", "Deep Learning", "DenseNet", "Image Classification", "Precision Agriculture"],
    link: "",
    featured: false, /* set true to also surface this on the home page */
  },
];

/* ==================================================================
   PROGRAMMES — academic programmes, placements, and field visits
   ================================================================== */

export const EXPERIENCE = [
  {
    slug: "lodha-genius-programme",
    role: "Scholar — Pure Mathematics",
    org: "Lodha Genius Programme, Ashoka University",
    logo: "",
    location: "Ashoka University, India",
    dates: "May – Dec 2025",
    meta: "2025 · Ashoka University ·",
    badge: "~2% acceptance",
    desc: "Selected as a scholar for a fully-funded, intensive Pure Mathematics track, completed as a Grade 11 student.",
    bullets: [
      "Coursework in group theory, linear algebra, number theory, and advanced geometry",
      "Served as Student Ambassador, guiding new participants and supporting coordination of programme activities",
      "Attended lectures by faculty and Nobel laureates",
      "Interdisciplinary workshops in astrophotography, design thinking, and rocket-building",
      "Sharpened discipline and confidence working with above-grade-level content",
    ],
    tags: ["Pure Mathematics", "Group Theory", "Number Theory"],
    featured: true,
  },
  {
    slug: "cern-masterclass",
    role: "Participant",
    org: "CERN International Masterclass",
    logo: "",
    /* TODO: confirm — the resume describes analysing real particle
       physics data and studying ALICE, CMS, and Antimatter, but does not
       mention travelling to Geneva. If this was not an on-site visit,
       change location to "Remote" and adjust the bullets below. */
    location: "Geneva, Switzerland",
    dates: "December 2025",
    meta: "December 2025 · Geneva ·",
    badge: "Fully funded",
    desc: "Selected through the Lodha Genius Programme to analyse real particle physics data and study CERN's experiments.",
    bullets: [
      "Analysed real particle physics data as part of the Masterclass programme",
      "Studied the ALICE and CMS experiments and the Antimatter Factory",
      "Spoke with Dr. Archana Sharma, Principal Staff Scientist at CERN",
      "Gained insight into research careers and leadership in science",
    ],
    tags: ["Particle Physics", "Research"],
    featured: true,
  },
  {
    slug: "ncra-tifr-gmrt",
    role: "Field Visit Participant",
    org: "NCRA–TIFR & GMRT",
    logo: "",
    location: "Khodad, India",
    dates: "January 2026",
    meta: "January 2026 · Khodad ·",
    badge: "Selected",
    desc: "Selected for a field visit to the Giant Metrewave Radio Telescope as part of Lodha's continued-learning course, Physics of Stars.",
    bullets: [
      "Studied the telescope array, instrumentation, and supercomputing workflows",
      "Engaged directly with astrophysics and radio astronomy researchers",
      "Reinforced interest in research-driven, cross-disciplinary environments",
    ],
    tags: ["Radio Astronomy", "Astrophysics"],
    featured: true,
  },
  {
    slug: "ucsc-shadow-the-scientists",
    role: "Participant",
    org: "UCSC Shadow the Scientists Programme",
    logo: "",
    location: "Remote",
    dates: "Aug – Oct 2025",
    meta: "Aug – Oct 2025 · Remote ·",
    badge: "Programme",
    desc: "Learned observational astronomy directly from working astronomers, covering modern instrumentation and real objects of research.",
    bullets: [
      "Studied the Canada–France–Hawaii Telescope and modern instrumentation",
      "Examined real objects of research, including Comet 3I/ATLAS",
      "Gained insight into how observational data is collected and analyzed",
    ],
    tags: ["Observational Astronomy", "Data Analysis"],
    featured: false,
  },
  {
    slug: "girls-who-code-pathways",
    role: "Participant",
    org: "Girls Who Code — Pathways",
    logo: "",
    location: "Remote",
    dates: "2026",
    meta: "2026 · Remote ·",
    badge: "Programme",
    desc: "Hands-on introduction to data science and artificial intelligence, applying data-driven approaches to real-world problems.",
    bullets: [
      "Applied data-driven approaches to real-world problems",
      "Strengthened analytical and programming skills",
      "Connected with a community of young women in STEM",
    ],
    tags: ["Data Science", "Artificial Intelligence"],
    featured: false,
  },
  {
    slug: "kode-with-klossy",
    role: "Participant",
    org: "Kode With Klossy — Summer Camp",
    logo: "",
    location: "Remote",
    dates: "2026",
    meta: "2026 · Remote ·",
    badge: "Programme",
    desc: "Built interactive, responsive websites in a project-based setting focused on user-centered design.",
    bullets: [
      "Built interactive, responsive websites in a project-based setting",
      "Focused on user-centered design and creative problem-solving",
      "Practical experience turning ideas into working web applications",
    ],
    tags: ["Web Development", "UX Design"],
    featured: false,
  },
  {
    slug: "leaf-ai-ethics",
    role: "Independent Study",
    org: "LEAF — Dangers and Dilemmas of AI & Mathematics of Morality",
    logo: "",
    location: "Remote",
    dates: "2026",
    meta: "2026 · Remote ·",
    badge: "Independent",
    desc: "Independent study on the ethics and mathematics of artificial intelligence.",
    bullets: [
      "Explored algorithmic bias, fairness, and moral decision-making",
      "Built a framework for evaluating AI that is transparent and human-centered",
    ],
    tags: ["AI Ethics", "Mathematics"],
    featured: false,
  },
];

/* ==================================================================
   PROJECTS — the rice leaf work lives on the Research page
   ================================================================== */

export const PROJECTS = [
  {
    name: "Air Atlas — Hyperlocal Air Quality Mapping",
    org: "CERN Masterclass Capstone Project",
    meta: "2026",
    desc: "Air quality varies significantly across neighbourhoods, yet conventional monitoring stations are too sparse to capture it. Air Atlas is a network of low-cost hyperlocal stations collecting real-time environmental data to reveal patterns city-wide monitoring overlooks.",
    bullets: [
      "Built an IoT air quality station in Pune measuring PM1.0, PM2.5, PM10, carbon monoxide, AQI, temperature, humidity, and atmospheric pressure",
      "Cleaned, calibrated, and analyzed sensor data in Python to identify pollution trends, peak events, and diurnal patterns",
      "Contributed to an online platform making hyperlocal environmental data accessible and interpretable",
      "Demonstrated how low-cost sensor networks can complement traditional monitoring at neighbourhood scale",
    ],
    tags: ["Python", "ESP32", "ThingSpeak", "Pandas", "Matplotlib", "IoT", "Embedded Systems"],
    code: "",
    live: "",
    featured: true,
  },
  {
    name: "Learning Buddy",
    org: "Harvard CS50x — Final Project",
    meta: "2025",
    desc: "A full-stack platform matching underprivileged students with volunteer tutors across maths, science, English, and music. Students search by subject, volunteers sign up to mentor — a low-friction system built to lower the barrier to getting academic help.",
    bullets: [
      "Built end-to-end — frontend, backend, and database — as the final project for Harvard's CS50x",
      "Learned how a small design choice can be the difference between a platform people use and one they abandon",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Flask", "SQL"],
    code: "",
    live: "",
    featured: true,
  },
  {
    name: "AI Guitar Chord Classifier",
    org: "Kode With Klossy — CODE-A-BRATION",
    meta: "2026",
    desc: "Beginner guitarists need feedback, not just instructions. Most tutorials tell you where to place your fingers but can't tell you if you got it right. This tool watches your hand through a webcam and tells you in real time whether your chord shape matches.",
    bullets: [
      "Live webcam classifier built with Teachable Machine and the Webcam API",
      "First real-time computer vision project — a clear example of how a small ML model, applied well, turns a passive tutorial into hands-on learning",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Teachable Machine", "Webcam API"],
    code: "",
    live: "",
    featured: true,
  },
];

/* ==================================================================
   AWARDS — recognition only; research outcomes live on /research,
   and roles live on /volunteering
   ================================================================== */

export const AWARDS = [
  {
    icon: "✍️",
    title: "John Locke Institute Global Essay Prize",
    meta: "2026",
    detail: "Shortlisted in the Science and Technology category; invited to the black-tie Awards Dinner in London.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "Lodha Genius Programme Scholar",
    meta: "2025",
    detail: "Selected for a fully-funded, highly selective academic programme in Pure Mathematics at Ashoka University — roughly 2% acceptance.",
    link: "",
    featured: true,
  },
  {
    icon: "🌍",
    title: "Special Mention Award — VH Model United Nations",
    meta: "2023 – 24",
    detail: "Represented China at the final conference, recognised for research, participation, and diplomatic engagement.",
    link: "",
    featured: true,
  },
  {
    icon: "🎸",
    title: "Trinity College London — Acoustic Guitar",
    meta: "Graded exams",
    detail: "Initial, Grade 1, and Grade 3 completed with Distinction; currently preparing for Grade 5.",
    link: "",
    featured: false,
  },
];

/* ==================================================================
   LEADERSHIP & IMPACT
   ================================================================== */

export const VOLUNTEER = {
  stats: [
    { value: "100+", label: "HERizon Members" },
    { value: "100+", label: "Learners Tutored" },
    { value: "25+", label: "Countries Reached" },
  ],
  orgs: [
    {
      name: "HERizon",
      role: "Founder & Lead · Mar 2026 – Present",
      desc: "Founded a student-led initiative empowering girls in grades 8–10 in STEM through mentorship and community. Designs and publishes newsletters featuring global opportunities and resources, and collaborates with partner organisations and volunteers to expand outreach.",
    },
    {
      name: "Schoolhouse.world",
      role: "Volunteer Tutor · Jan 2026 – Present",
      desc: "SAT Math Bootcamp tutor and certified Pre-Algebra and Calculus tutor. Runs live small-group sessions for students across countries, focusing on test-taking strategy and peer-to-peer learning, and collaborates with a global tutor community to improve sessions.",
    },
    {
      name: "Dialogues Club, Schoolhouse.world",
      role: "President · Apr 2026 – Present",
      desc: "Facilitates discussions promoting respectful conversation and diverse perspectives. Plans and moderates dialogue sessions, fostering an inclusive environment for thoughtful, open exchange of ideas.",
    },
    {
      name: "Social Service Responsibility Cell, Vibgyor High",
      role: "Team Member · 2023 – 2024",
      desc: "Organised and led community outreach initiatives focused on education, raising over ₹7,000 to support underprivileged students. Participated in donation drives and awareness campaigns while mentoring junior members.",
    },
    {
      name: "Student Council, Vibgyor High",
      role: "Editor · 2023 – 2024",
      desc: "Elected Editor for the school magazine, The Vibgyor Voyageur. Led content planning, editing, and publishing; coordinated with writers, designers, teachers, and council members and managed deadlines through to final publication.",
    },
  ],
};

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Programmes", to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Awards", to: "/awards" },
  { label: "Leadership", to: "/volunteering" },
  { label: "About", to: "/about" },
];

export const FOOTER_PROFILES = [];