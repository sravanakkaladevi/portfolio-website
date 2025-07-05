import {
  c,
  cpp,
  python,
  java,
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, covering cloud infrastructure, services, and deployment.",
      "Gained a strong base in Machine Learning, learning algorithms, data handling, and building predictive models.",
    ],
  },
  {
    title: "MathWorks AI Virtual Intern",
    company_name: "MathWorks | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Worked with MATLAB for data analysis and image/signal processing.",
      "Implemented clustering, classification, and regression models.",
      "Explored deep learning techniques for image recognition.",
    ],
  },
  {
    title: "AI Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Built a Mental Health Fitness Tracker ML model using Python and scikit-learn.",
      "Improved accuracy to 98.5% using ensemble learning techniques.",
      "Applied 12+ regression algorithms for mental fitness prediction across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web app that fetches and displays real-time weather info using API, with a responsive UI.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "Weather API", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/sravanakkaladevi/WeatherPedia",
  },
  {
    name: "Terminal Portfolio",
    description:
      "A portfolio website designed like a terminal, allowing interactive commands as input.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/sravanakkaladevi/terminal-portfolio",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "Machine Learning model predicting mental health scores using global data and regression models.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Jupyter Notebook", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/sravanakkaladevi/Mental_Health_Fitness_Tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "CLI tool to automate payload generation using Metasploit for security testing.",
    tags: [
      { name: "Shell Script", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/sravanakkaladevi/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Web IDE-like tool allowing users to run and compile code snippets online.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/sravanakkaladevi/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Python project that converts input images to pencil sketch using OpenCV & Matplotlib.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: sketcher,
    source_code_link:
      "https://github.com/sravanakkaladevi/Image_to_Pencil_Sketch_App",
  },
];