import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { Ollama } from '@lobehub/icons';
import AgentSyncImg from "@/public/AgentSync.png";
import FattahArcImg from "@/public/fattah_architecture.png";
import backgroundRemvImg from "@/public/background_remover.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Machine Learning Engineer",
    location: "Devolved AI - Uttara,Dhaka-BD",
    description:
      "Front-end development for a variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain. Developed high quality landing pages and front end features using HTML, CSS, SCSS, JavaScript and Liquid.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - Current",
  },
  {
    title: "Software Engineer",
    location: "Cloud-Coder Ltd. - Gulshan-2,Dhaka,BD",
    description:
      "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for mechants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2022 - February 2024",
  },
 
] as const;

export const projectsData = [
  {
    title: "AgentSync",
    description:
    "AgentSync is a production-ready AI agent framework designed to manage and automate complex tasks efficiently. With its Supervisor Agent module, it acts like an AI-powered manager—orchestrating multiple agents, handling workflows, and integrating with various tools like Gmail, Google Sheets, and web search utilities.",
    tags: ["Python", "LangGraph", "Large Language Modle", "AI Agents"],
    icons: [
      "logos:python",
      "logos:LangGraph",
      "logos:llm",
    ],
    imageUrl: AgentSyncImg,
    githubLink: "https://github.com/sazzad1779/AgentSync",
    // demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "Fattah SLM: A Bengali Small Language Model.",
    description:
    "This is a custom Transformers architecture designed specifically as a compact Bengali language model. For this project, I developed a custom tokenizer optimized exclusively for processing Bengali text, ensuring efficient and accurate representation of the language.",
    tags: ["Python", "Transformers"],
    icons: [
      "logos:transformer",
      "logos:python",
    ],
    imageUrl: FattahArcImg,
    githubLink: "https://github.com/sazzad1779/Fattah_SLM",
  },
  {
    title: "Fattah SLM: A Bengali Small Language Model.",
    description:
    "This is a custom Transformers architecture designed specifically as a compact Bengali language model. For this project, I developed a custom tokenizer optimized exclusively for processing Bengali text, ensuring efficient and accurate representation of the language.",
    tags: ["Python", "Transformers"],
    icons: [
      "logos:transformer",
      "logos:python",
    ],
    imageUrl: FattahArcImg,
    githubLink: "https://github.com/sazzad1779/Fattah_SLM",
  },
  {
    title: "Background Remover Module Using U2Net.",
    description:
    "This repository is an easy example of background removal. I'm using U2Net model for creating musk and add some custom background. The main repo of this code is https://github.com/axinc-ai/ailia-models-tflite.",
    tags: ["Python", "Transformers"],
    icons: [
      "logos:transformer",
      "logos:python",
    ],
    imageUrl: backgroundRemvImg,
    githubLink: "https://github.com/sazzad1779/Background_remover_using_u2net_",
  },
] as const;

export const skillsData = [
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "C++",
    icon: "/icons/cpp.png",
  },
  {
    name: "Pytorch",
    icon: "logos:pytorch-icon",
  },
  {
    name: "Pandas",
    icon: "logos:pandas-icon",
  },,
  {
    name: "Transformers",
    icon:"/icons/huggingface-color.svg",
  },
  {
    name: "Dask",
    icon: "/icons/dask_icon.webp",
  },
  {
    name: "SciPy",
    icon: "devicon:scipy",
  },
  {
    name: "Ollama",
    icon: "/icons/ollama.svg",
  },
  {
    name: "Chroma DB",
    icon: "/icons/chroma-seeklogo.png",
  },
  {
    name: "DeepEval",
    icon: "/icons/deepeval.png",
  },
  {
    name: "Uptrain",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Jenkins",
    icon: "devicon:jenkins",
  },
  {
    name: "Shopify",
    icon: "logos:shopify",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
] as const;
