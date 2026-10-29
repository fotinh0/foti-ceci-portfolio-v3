export const stack = ["React", "TypeScript", "Next.js", "Node.js", "Java", "Tailwind", "MongoDB", "IBM DB2", "Redux", "OpenAI", "Vercel"];

export const projects: { title: string; des: string; img: string; tags: string[]; link: string; github?: string }[] = [
  { title: "Foti Banking App", des: "A financial SaaS platform that connects multiple bank accounts, shows real-time transactions, and lets users transfer money to each other.", img: "/projects/foti-banking.png", tags: ["Next.js", "TypeScript", "Tailwind", "Plaid", "Dwolla", "Appwrite"], link: "https://foti-banking-app.vercel.app/sign-in", github: "https://github.com/fotinh0/foti-banking-app" },
  { title: "AI Image Generator", des: "An AI image generator built with the MERN stack and powered by OpenAI's DALL-E model.", img: "/projects/ai-generator-application.png", tags: ["React", "Node.js", "MongoDB", "OpenAI"], link: "https://ai-image-generator-app-nu.vercel.app/", github: "https://github.com/fotinh0/ai-image-generator-app" },
  { title: "AI Article Summarizer", des: "Summarize any article with a single click using an OpenAI model.", img: "/projects/ai-article-summarizer.png", tags: ["React", "Redux", "Tailwind", "RapidAPI"], link: "https://fcsumz.netlify.app/", github: "https://github.com/fotinh0/ai-article-summarizer-app" },
  { title: "IBM Training", des: "A platform for individuals and organizations to access a wide range of courses that build technology skills.", img: "/projects/IBMTraining.png", tags: ["React", "Node.js", "IBM DB2", "IBM Cloud"], link: "https://www.ibm.com/training/" },
  { title: "PCI Media Website", des: "Insights into PCI Media's initiatives, a platform for storytelling, and donations to support their cause.", img: "/projects/PCIMediaInc.png", tags: ["WordPress", "JavaScript", "HTML", "CSS"], link: "https://www.pcimedia.org/" },
  { title: "FA Euro Official Site", des: "Club news, merchandise shopping, and a hub for active players.", img: "/projects/FAEuroNY.png", tags: ["Wix", "JavaScript", "HTML", "CSS"], link: "https://www.faeuro.com/" },
];

export const experience = [
  { title: "Software Engineer", company: "Capitalize", duration: "Nov 2024 — Present", desc: "Collaborate with engineers, designers, and product managers to develop and maintain web apps that help people transfer retirement funds. Leveraging React, TypeScript, Java, Postgres, and AWS." },
  { title: "Software Developer", company: "IBM", duration: "Jan 2022 — Apr 2024", desc: "Developed, maintained, and tested external and internal web applications using React, Node.js, and IBM DB2." },
  { title: "Website Manager", company: "FA Euro", duration: "Jan 2021 — May 2022", desc: "Developed and maintained website UI/UX with JavaScript and Wix. Optimized performance and implemented online payments." },
  { title: "Multimedia & Information Management Intern", company: "PCI Media", duration: "Nov 2020 — Feb 2021", desc: "Helped develop the company website in WordPress and designed a company-wide email signature." },
];
