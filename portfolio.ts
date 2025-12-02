import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,

  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Manan Patel",
  title: "Hi all, I'm Manan",
  description:
    "I'm a full-stack web developer who creates professional websites and custom applications using Python, Node.js, React.js, MongoDB, and PHP. Whether you need a business site, portfolio, or full web solution, I help turn your ideas into reality with modern technology. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/file/d/1yVFlRWeh2wrpJjurMzpvhj6CXFfcOVtE/view?usp=sharing",
};

export const openSource = {
  githubUserName: "manan2425",
  githubBio: "Full Stack Developer | Python | Node.js | React.js - Crafting Seamless Tech Solutions for Businesses",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:mananpatel448@gmail.com",
  linkedin: "https://www.linkedin.com/in/manan2425/",
  github: "https://github.com/manan2425",
  instagram: "https://www.instagram.com/manan_2425",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Professional websites for companies, startups, and service providers."),
        emoji("⚡ Full-featured stores with product management, payments, cart, and admin panel."),
        emoji("⚡ Tailor-made apps like dashboards, booking systems, CRMs, and management tools."),
        emoji("⚡ High-converting landing pages for promotions, campaigns, and startups."),
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          iconifyTag: "logos:html-5",
        },
        {
          skillName: "CSS",
          iconifyTag: "logos:css-3",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb-icon",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "95", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Birla Vishvakarma Mahavidhaylaya Engineering College",
    subHeader: "Bachelor of Technology in Computer Engineering",
    duration: "September 2022 - May 2026",
    desc: "",
    //grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Project Intern",
    company: "Helius Wellness",
    companyLogo: "/img/icons/common/helius-wellness.jpeg",
    date: "July 2025 - December 2025",
    desc: "The AI-Powered Community Health Manager supports cardiovascular patients with symptom tracking, AI-based risk analysis, and real-time alerts. Patients access dashboards for vitals and medication, while doctors monitor progress through a dedicated module. Community resources, secure data handling, and a modern tech stack enable better disease management and timely interventions.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  }, {
    role: "AI - ML Summer Intern",
    company: "Ural Federal University, Russia",
    companyLogo: "/img/icons/common/urfu.png",
    date: "July 2025 - Aug 2025",
    desc: "During my internship at Ural Federal University, I worked on research and development tasks that strengthened my technical and analytical skills. I collaborated with international peers, applied modern technologies to real-world problems, wrote clean code, and presented results effectively. This experience improved my teamwork, problem-solving, and global perspective as a developer.",
  },
  {
    role: "Summer Intern",
    company: "Tech Elecon Pvt. Ltd.",
    companyLogo: "/img/icons/common/tech_elecon.png",
    date: "May 2025 - June 2025",
    desc: "During my internship at Tech Elecon Pvt. Ltd., I developed an analytical dashboard to visualize key business data and performance metrics. I worked on data processing, API integration, and building interactive charts. This project improved decision-making, enhanced reporting efficiency, and strengthened my skills in frontend development, dashboards, and data visualization.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Web Developer Intern",
    company: "Ultron Technologies",
    companyLogo: "/img/icons/common/ultron.png",
    date: "Aug 2022 - Jun 2023",
    desc: "During my internship at Tech Elecon Pvt. Ltd., I developed an analytical dashboard to visualize key business data and performance metrics. I worked on data processing, API integration, and building interactive charts. This project improved decision-making, enhanced reporting efficiency, and strengthened my skills in frontend development, dashboards, and data visualization.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Personal-Portfolio",
    desc: "Full-stack web developer who loves turning ideas into functional products. I create fast, secure, and visually appealing websites and applications.",
    github: "https://github.com/manan2425/personal_portfolio",
    link: "#",
  },
  {
    name: "TSA BVM SB",
    desc: "I developed the official TSA BVM SB website, creating a modern, responsive, and user-friendly platform that showcases events, updates, and student activities.",
    link: "https://www.bvmengineering.ac.in/TSA/index.html",
  },
  {
    name: "BYTE Club Website",
    desc: "I developed the official BYTE Club website, creating a clean, responsive platform to showcase the club’s activities, events, and student initiatives.",
    link: "https://bytebvm31.github.io/ByteClub/index.html",
  },
  {
    name: "Online Food Ordering System",
    desc: "I built an Online Food Ordering System with easy menu browsing, quick ordering, and order tracking, along with an admin panel for managing items and orders.",
    github: "https://github.com/manan2425/Online-Food-Ordering-System",
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Manan Patel",
  description: greetings.description,
  author: "Manan Patel",
  image: "https://personal-portfolio-j1z9.vercel.app/img/Manan.jpg",
  url: "https://personal-portfolio-j1z9.vercel.app/",
  keywords: [
    "Manan",
    "Manan Patel",
    "Portfolio",
    "Manan Portfolio ",
    "Manan Patel Portfolio",
  ],
};
