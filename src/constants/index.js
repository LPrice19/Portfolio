import project1 from "../assets/projects/DSEEEE.png";
import project2 from "../assets/projects/NCC.png";
import project3 from "../assets/projects/TV.png";
import project4 from "../assets/projects/TB.png";

export const HERO_CONTENT = `H ey 👋, I'm a Computer Science graduate from the United Kingdom, passionate about Software Development.Proficient in MySQL | JavaScript | Python`;

export const ABOUT_TEXT = `I am a dedicated individual who prioritises self development and continous growth. So far in my career, I have gained valuable personal and technical skills, that have led me to my passion of technology and areas of innovation. My career started as an Engineer, where I developed significant problem solving skills. However, due to my interests in technology, I made the leap to further learning by taking on a Computer Science degree. The past few years at university has allowed me to blend my creative abilities with problem solving and analytical thinking, allowing me to gain a passion for software development and data analytics. My part time roles of owning a small e-commerce business and team lead at Notts County have added to my personal skills that have been transferred into my development in the tech world. As a fresh graduate, I have dedicated the summer to sharpening my skills while seeking out the right opportunity.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2024",
    role: "Event Team Lead",
    company: "Notts County Football Club",
    description: `Led a team on Match Days, dealing with customers, and setting the systems up to ensure a smooth process.`,
    technologies: ["Leadership", "Communication", "Teamwork", "Accountability"],
  },
  {
    year: "2020 - 2022",
    role: "Founder",
    company: "Midlands Vintage",
    description: `E-Commerce store specialising in B2C and the occasional B2B. My job was to build valuable relationships with suppliers. Grew an online presence of 22k followers in two years.`,
    technologies: ["Communication", "Sales", "Lean", "Decision Making"],
  },

  {
    year: "2017 - 2020",
    role: "Engineer",
    company: "JCB",
    description: `Completed a rotation apprenticeship in all facets of engineering in agriculture. Programme resulted in a contract at JCB, where I was tasked to carry out manufacturing tasks on a day to day basis.`,
    technologies: ["Problem Solving", "Analytical Thinking", "Adaptability", "Technical"],
  },
];

export const PROJECTS = [
  {
    title: "Traderverse: An Emotional Regulation Tool using Sentiment Analysis",
    image: project3,
    description:
      "SaaS platform offering traders psychological support, via an NLP model, APIs and Chat Bots to replicate the effect of a performance trading coach.",
    technologies: ["Project Management", "Academic Research", "JavaScript", "CSS", "Figma"],
    link: "https://drive.google.com/drive/folders/1brrE6e4H64PVkV1VTDLYlBKpxjP4XndN?usp=drive_link"
  },

  {
    title: "DSE Trading Strategy: London Open Killzone Historical Data Analysis",
    image: project1,
    description:
      "Depicting key findings from 15 months of trading executions in line with the 'DSE' trade strategy. Summarising statistics to confirm model profitability.",
    technologies: ["Python", "SQL", "Kaggle", "FXReplay", "Notion"],
    link: "https://docs.google.com/document/d/1r5AgC523eZJVfDYdZCSYiFKjxl1NdqDR/edit?usp=drive_link&ouid=116866617293782372053&rtpof=true&sd=true"
  },

  {
    title: "Machine Learning New Coders Data Analysis",
    image: project2,
    description:
      "Analysing data from 18,000 new coders, understanding different categories these individuals fit into. Carried out using the CRISP-DM methodology",
    technologies: ["Python", "Kaggle", "Word"],
    link: "https://docs.google.com/document/d/1RH4UHl3ft6xYasG01hYXEJQUidR6iJ0n/edit?usp=drive_link&ouid=116866617293782372053&rtpof=true&sd=true"
  },

  {
    title: "Travel Buddy",
    image: project4,
    description:
      "Cloud Based web application using REST API, allowing travel enthusiasts to find like-minded individuals to plan trips with.",
    technologies: ["HTML", "CSS", "Express.js", "JSON"],
    link: "https://drive.google.com/drive/folders/1fwEZtFSGBR4pWkVvHI0aViN8TR8kgDyK?usp=drive_link"
  },
];


export const CONTACT = {
  resume: "https://drive.google.com/file/d/1k2lvp6u35-iEFgfaAXTnzdEmA0zUNEwG/view?usp=drive_link",
  address: "United Kingdom",
  phoneNo: "+44 7534 399764",
  email: "leonprice19@icloud.com",
};
