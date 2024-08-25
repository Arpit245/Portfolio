import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import boxOfficeImg from "@/public/boxOffice.png";
import DocChatImage from "@/public/DocChat.png"


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
    title: "Graduated Oriental College of Technology",
    location: "Bhopal, MP",
    description:
      "I completed my Bachelors in Computer Science Engineering. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Associate Sql Developer",
    location: "Celebal Technologies",
    description:
      "I worked as a Sql Developer for 3 months as an Intern. I upskilled myself in Database.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Senior Front End Developer",
    location: "Remote",
    description:
      "I'm now a front-end developer working at Accenture. My stack includes React Js, Next.js, Javascript, TypeScript, Jest, Neo4j, Tailwind and Node Js. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [

  {
    title: "DocChat",
    description:
      "This application allows users to upload PDF files and interact with them through a chat interface. Users can ask questions related to the content of the uploaded PDF, and the system will analyze the document to provide accurate and relevant answers.",
    tags: ["Prisma", "TypeScript", "Next.js","Tailwind", "Redux"],
    imageUrl: DocChatImage,
  },
 
  {
    title: "Box Office Buster",
    description:
      "A website that I created as final year project to get information related to movies.",
    tags: ["React", "Javascript", "SCSS"],
    imageUrl: boxOfficeImg,
  },
  {
    title: "DMDS-APP",
    description:
      "I am working as a front-end developer currenlty on this project. It is an application developed for data scientists to suport them in data product journey.",
    tags: ["React Js", "Neo4j", "Node Js", "Javascript" ,"Redux Saga"],
    imageUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React Js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Neo4j",
  "Redux Saga",
  "GraphQL",
  "Express",
  "Python",
  "CI/CD",
] as const;