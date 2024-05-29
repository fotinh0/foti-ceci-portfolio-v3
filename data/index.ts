export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Experienced working with global teams",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-52",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I am always learning new skills",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Extensive frontend and full stack experience",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a Soccer Live Score Tracker",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Article Summarizer",
    des: "This application enables you to summarize articles with just one click using the OpenAI model.",
    img: "/projects/ai-article-summarizer.png",
    iconList: [
      {
        id: 1,
        name: "React",
        image: "/icons/re.svg",
      },
      {
        id: 2,
        name: "Redux",
        image: "/icons/redux.svg",
      },
      {
        id: 3,
        name: "Tailwind",
        image: "/icons/tail.svg",
      },
      {
        id: 4,
        name: "RapidAPI",
        image: "/icons/rapid.png",
      },
      {
        id: 5,
        name: "Netlify",
        image: "/icons/netlify.svg",
      },
    ],
    link: "https://fcsumz.netlify.app/",
    github: "https://github.com/fotinh0/ai-article-summarizer-app",
  },
  {
    id: 2,
    title: "AI Image Generator App",
    des: "An AI image generator application built with the MERN stack and powered by OpenAI's DALL-E model.",
    img: "/projects/ai-generator-application.png",
    iconList: [
      {
        id: 1,
        name: "React",
        image: "/icons/re.svg",
      },
      {
        id: 2,
        name: "NodeJS",
        image: "/icons/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        image: "/icons/mongo.svg",
      },
      {
        id: 4,
        name: "Tailwind",
        image: "/icons/tail.svg",
      },
      {
        id: 5,
        name: "OpenAI",
        image: "/icons/openai.svg",
      },
      {
        id: 6,
        name: "Vercel",
        image: "/icons/vercel.svg",
      },
      {
        id: 7,
        name: "Render",
        image: "/icons/render.png",
      },
    ],
    link: "https://ai-image-generator-app-nu.vercel.app/",
    github: "https://github.com/fotinh0/ai-image-generator-app",
  },
  {
    id: 3,
    title: "IBM Training",
    des: "This application serves as a comprehensive platform for individuals and organizations to access a diverse range of courses and resources aimed at enhancing technological skills.",
    img: "/projects/IBMTraining.png",
    iconList: [
      {
        id: 1,
        name: "React",
        image: "/icons/re.svg",
      },
      {
        id: 2,
        name: "NodeJS",
        image: "/icons/nodejs.svg",
      },
      {
        id: 3,
        name: "IBM DB2",
        image: "/icons/db2.png",
      },
      {
        id: 4,
        name: "IBM Cloud",
        image: "/icons/ibmcloud.svg",
      },
    ],
    link: "https://www.ibm.com/training/",
  },
  {
    id: 4,
    title: "Foti Banking App",
    des: "A financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manage their finances altogether.",
    img: "/projects/foti-banking.png",
    iconList: [
      {
        id: 1,
        name: "NextJS",
        image: "/icons/next.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        image: "/icons/ts.svg",
      },
      {
        id: 3,
        name: "Tailwind",
        image: "/icons/tail.svg",
      },
      {
        id: 4,
        name: "Plaid",
        image: "/icons/plaid.png",
      },
      {
        id: 5,
        name: "Dwolla",
        image: "/icons/dwolla.png",
      },
      {
        id: 6,
        name: "Appwrite",
        image: "/icons/app.svg",
      },
      {
        id: 7,
        name: "Vercel",
        image: "/icons/vercel.svg",
      },
    ],
    link: "https://foti-banking-app.vercel.app/sign-in",
    github: "https://github.com/fotinh0/foti-banking-app",
  },
  {
    id: 5,
    title: "PCI Media Website",
    des: "A comprehensive website offering insights into PCI Media's initiatives, providing a platform for storytelling, and facilitating donations to support their cause.",
    img: "/projects/PCIMediaInc.png",
    iconList: [
      {
        id: 1,
        name: "WordPress",
        image: "/icons/wordpress.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        image: "/icons/javascript.svg",
      },
      {
        id: 3,
        name: "HTML",
        image: "/icons/html.svg",
      },
      {
        id: 4,
        name: "CSS",
        image: "/icons/css.svg",
      },
    ],
    link: "https://www.pcimedia.org/",
  },
  {
    id: 6,
    title: "FA Euro Official Site",
    des: "This platform offers the latest news on the club, seamless purchasing of club merchandise, and a hub for active players.",
    img: "/projects/FAEuroNY.png",
    iconList: [
      {
        id: 1,
        name: "Wix",
        image: "/icons/wix.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        image: "/icons/javascript.svg",
      },
      {
        id: 3,
        name: "HTML",
        image: "/icons/html.svg",
      },
      {
        id: 4,
        name: "CSS",
        image: "/icons/css.svg",
      },
    ],
    link: "https://www.faeuro.com/",
  },
];

export const experience = [
  {
    id: 1,
    title: "Software Developer",
    company: "IBM",
    duration: "Jan 2022 - Apr 2024",
    desc: "Collaborated closely with engineers, designers, and product owners to develop, maintain, and test external and internal web applications utilizing React, NodeJS, and IBM DB2.",
    thumbnail: "/experience/ibm.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "FA Euro",
    duration: "May 2022 - Jan 2021",
    desc: "Developed and maintained website UI/UX using JavaScript and Wix. Optimized website performance and implemented online payment processing.",
    thumbnail: "/experience/faeuro.png",
  },
  {
    id: 3,
    title: "Multimedia and Information Managament Intern",
    company: "PCI Media",
    duration: "Nov 2020 - Feb 2021",
    desc: "Assisted in the development of the company website using WordPress. Designed and implemented company wide email signature.",

    thumbnail: "/experience/pcimedia.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    url: "https://github.com/fotinh0",
    img: "/git.svg",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/foti-ceci/",
    img: "/link.svg",
  },
];
