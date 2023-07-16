import { AlertType, JobInfo, TechnicalSkillData } from "../types/types";

export const jobs: JobInfo[] = [
  {
    jobTitle: "Full-stack Developer",
    jobDescriptions: [
      "Develop and provide support for an affordable airline carrier's internet booking engine (IBE)",
      "Leverage <b>Fastlane</b> and <b>CodePush</b> to facilitate the efficient release of the application on both <b>Google Play</b> and <b>App Store</b>",
      "Implement an automated continuous deployment workflow using <b>GitLab CI/CD</b>",
      "Design and develop a library of customizable and reusable frontend components that can be utilized across multiple applications",
      "Utilize <b>Typescript</b> and <b>JavaScript</b> within <b>React/React Native</b> platform to construct a robust and scalable frontend applications",
    ],
    companyName: "777 Partners",
    companyLogo: require("../img/777Partners_Original_Logo.png"),
    duration: {
      from: "11/01/2021",
      to: null,
    },
  },
  {
    jobTitle: "Software QA Engineer",
    jobDescriptions: [
      "Implemented a comprehensive set of test cases utilizing <b>JavaScript</b>, <b>Selenium WebDriver</b>, and <b>Cucumber</b> to enhance UI automation test coverage",
      "Simulated real-world traffic for API testing using <b>Node.js</b>, <b>Jest</b>, and <b>Cucumber</b>",
      "Engaged in all stages of the software development life cycle (<b>SDLC</b>)",
      "Utilized <b>Kanban</b> methodology to prioritize and manage requirements effectively",
      "Leveraged <b>Jira</b> as a robust project management tool to track and resolve bug tickets",
    ],
    companyName: "PriceSpider",
    companyLogo: require("../img/PriceSpider_Original_Size.png"),
    duration: {
      from: "08/31/2021",
      //   to: "10/29/2021",
      to: "11/01/2021",
    },
  },
  {
    jobTitle: "Software QA Analyst",
    jobDescriptions: [
      "Actively maintained and provided valuable support to an embedded team member",
      "Identified, developed, and executed test cases as per the requests and requirements of the embedded team member",
      "Updated and expanded an existing test cases for <b>Java</b> automation framework",
    ],
    companyName: "SQASquared",
    companyLogo: require("../img/SQASquare_Small_Size.png"),
    duration: {
      from: "03/16/2021",
      //   to: "10/29/2021",
      to: "11/01/2021",
    },
  },
  {
    jobTitle: "Web Developer",
    jobDescriptions: [
      "Utilized a <b>microservice</b> architecture approach to design both the Frontend and Backend applications",
      "Hosted and deployed the application to Heroku, a cloud platform as a service (<b>PaaS</b>) provider",
      "Continuously maintained and provided support for new feature updates and releases",
    ],
    companyName: "Bolsa Group",
    companyLogo: require("../img/BolsaGroup_Small_Size.png"),
    duration: {
      from: "11/01/2020",
      to: "03/12/2021",
    },
  },
];

export const websiteInProgressAlert: AlertType = {
  title: "Important Message",
  message:
    "Kindly be advised that my website is currently undergoing development and nearing its final stages. I would like to extend an exclusive preview, providing you with a glimpse of what's in store.",
  closeButton: true,
};

export const aboutMeDescription =
  "I have accumulated 2+ years of hands-on experience working with React and TypeScript. During my time at 777 Partners, I have developed and sharpened my skill to create customizable and reusable components/libraries. I have developed and provided support for an affordable airline carrier's internet booking engine (IBE). I am committed to using my skills to make a difference. Whether it's developing applications that promote sustainability, or designing software to enhance accessibility, I am driven by the desire to contribute to a better world through my coding abilities.";

export const technicalSkillData: TechnicalSkillData = {
  description:
    "I am currently seeking a company that can support the growth of my career as a software developer while providing me with the opportunity to make a significant impact through Software as a Service (SaaS)",
  frameworkAndSkill: [
    {
      sectionName: "Languages",
      img: "",
      listOfSkills: [
        "Typescript",
        "Javascript",
        "C++",
        "Python",
        "HTML",
        "CSS",
        "Bash",
      ],
    },
    {
      sectionName: "Frameworks and Libraries",
      img: "",
      listOfSkills: [
        "Reacts",
        "React Native",
        "Mobx",
        "Express,js",
        "Node.js",
        "Next.js",
        "Bootstrap",
        "Fastlane",
        "Codepush",
      ],
    },
    {
      sectionName: "Tools",
      img: "",
      listOfSkills: [
        "Jira",
        "GitLab CI/CD",
        "Android Studio",
        "Xcode",
        "App Store",
        "Next.js",
        "Google Play",
        "Heroku",
      ],
    },
  ],
};
