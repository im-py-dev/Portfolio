import React from "react";
import { FaReact } from "react-icons/fa";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import UpworkIcon from "@/components/UpworkIcon";

import SaaSAIPlatform from "@/public/SaaS AI Platform.png";
import DjangoRESTAPI from "@/public/Django REST API.png";
import FlaskTasksManager from "@/public/FlaskTasksManager.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "freeCodeCamp Certificate",
    location: "freeCodeCamp · Remote",
    description:
      "I earned a certificate in Python and Programming Algorithms, where I acquired valuable skills in building and optimizing algorithms. I delved into Python programming, honing my abilities in problem-solving and algorithmic thinking. The certification covered topics such as data structures, algorithm design, and efficient coding practices, providing a solid foundation for tackling complex programming challenges.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Django Developer · Internship · SourceMogul",
    location: "England, United Kingdom · Remote",
    description:
      "I gained hands-on experience as a Django Developer, focusing on building robust data models, working with databases, and implementing advanced RESTful APIs using Django REST Framework. Additionally, I mastered various skills, including Django authentication, background tasks, and API design and deployment, showcasing proficiency in debugging and Python programming.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - Mar 2022 · 3 mos",
  },

  {
    title: "Python/Django Developer",
    location: "SaveToNotion · Syria",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "UpWork · Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes Python Django Docker React Next.js and more. I'm open to full-time opportunities.",
    icon: React.createElement(UpworkIcon),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
	title: "BreanerAI (SaaS Platform)",
	description:
	  "A state-of-the-art AI SaaS Platform with five AI tools. Powered by the Next.js 13 App Router, our platform will not only be efficient but also user-centric.",
	tags: ["Tailwind", "React.js", "Next.js", "Prisma", "MySQL"],
	imageUrl: SaaSAIPlatform,
	githubUrl: "https://github.com/im-py-dev/BrainerAI",
	previewUrl: "https://brainerai.vercel.app",
  },

  {
	title: "Django Store API",
	description:
	  "Demonstrating proficiency in Python, Docker, Django, MySQL, DRF, signals, Celery, Locust, and Celery Beat, I showcase my ability to craft efficient and scalable RESTful APIs.",
	tags: ["python", "docker", "django", "mysql", "GRF", "signals", "celery", "locust", "celerybeat"],
	imageUrl: DjangoRESTAPI,
	githubUrl: "https://github.com/im-py-dev/Django-Store-api",
	previewUrl: "http://127.0.0.1:8001/store/",
  },
  
  {
	title: "Flask Tasks Manager",
	description:
	  "A simple Flask application showcasing my skills in web development and full-stack technologies. This project includes user authentication, notes management, and follows high code structure practices.",
	tags: ["Python", "Flask", "Flask Blueprint", "Flask Login", "SQLAlchemy", "Bcrypt"],
	imageUrl: FlaskTasksManager,
	githubUrl: "https://github.com/im-py-dev/flask-task-manager",
	previewUrl: "http://23.128.64.21:8000",
  },

] as const;

export const skillsData = [
  "Python",
  "Django",
  "Flask",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Prisma",
  "Express",
  "Framer Motion",
] as const;
