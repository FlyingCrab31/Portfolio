export const METADATA = {
  author: "Rishabh Raj Pandey",
  title: "Portfolio | Rishabh Pandey",
  description:
    "Rishabh is a Software Developer from India, interested in crafting beautiful and functional applications and Softwares.",
  siteUrl: "",
  keywords: [
    "Rishabh Raj Pandey",
    "Software Developer",
    "Web Developer",
    "React Native Developer",
    "Frontend Developer",
    "Software Engineer",
    "Portfolio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Project Exp",
    ref: "Project Exp",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Rhapsodic Software and Web Developer",
  "I build things for a machine called Computer",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: rispandey510@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/rishabh-raj-pandey-32a03520b/",
  },
  {
    name: "github",
    url: "https://github.com/FlyingCrab31",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/rishabh_pandey25/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    //"typescript",
    //"sass",
     "cpp",
     "java",
     "python",
     "c",
     "linux",
     "canva",
    "nodejs",
    //"webpack",
    "vite",
    "firebase",
    // "moralis",
    // "stripe",
    "figma",
    //"tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    //"redux",
    "springboot",
    "bs2",
    "nextjs",
    "tailwindcss",
    //"styledcomponents",
  ],
  databases: ["mysql", "mongodb","Oracle"],
  other: ["git", ],
};

export const PROJECTS = [
  {
    name: "ParallelSort Utility Library",
    image: "/projects/ppsrt.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "The ParallelSort utility library provides parallel sorting algorithms in Java,\n offering efficient sorting of large datasets",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/FlyingCrab31/Parallel-Sorting-Algorithms",
    tech: [],
  },
  {
    name: "Medical Chatbot",
    image: "/projects/medico.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "A virtual medical assistant providing personalized healthcare guidance and information.",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/FlyingCrab31/Medical-Chatbot",
    tech: [],
  },
  /*{
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },*/
];

export const WORK = [
  {
    id: 1,
    company: "ParallelSort",
    title: "Software Developer",
    location: "Delhi",
    range: "Feb - Apr 2024",
    responsibilities: [
      "The ParallelSort utility library provides parallel sorting algorithms in Java,offering efficient sorting of large datasets",
      "It supports custom comparators for defining sorting logic and provides flexibility for various sorting needs.",
    ],
    url: "https://github.com/FlyingCrab31/Parallel-Sorting-Algorithms",
    video: "/work/ppsrt.mp4",
  },
  {
    id: 2,
    company: "Medical Chatbot",
    title: "Generative AI",
    range: "Jan - Apr 2024",
    responsibilities: [
      "A virtual medical assistant providing personalized healthcare guidance and information.",
      "An advanced medical chatbot powered by generative AI and natural language processing, offering tailored healthcare support and information.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://github.com/FlyingCrab31/Medical-Chatbot",
    video: "/work/mcb.mp4",
  },
  /*{
    id: 3,
    company: "Spacenos",
    title: "Web Developer Intern",
    location: "Bangalore, Karnataka",
    range: "September - December 2021",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },*/
];

export const GTAG = "G-5HCTL2TJ5W";
