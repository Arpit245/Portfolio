"use client"
import React, {useEffect} from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
 

export default function About() {

 const {ref} = useSectionInView("About")

 
    return (
        <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning a degree in{" "}
        <span className="font-medium">Computer Science</span>, I dove deep into full-stack development
        during my studies, which led me me to join an MNC as a full-stack developer.{" "}

        <span className="italic">My passion for programming</span>  is driven by the thrill of solving complex problems, 
        and I find immense satisfaction in crafting solutions that work.
         I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React Js, Next.js, Node.js, Neo4j and Javascript
        </span>
        . I am also familiar with TypeScript and Python. I am always looking to
        learn new technologies. I am open for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
         watching movies, cycling, and hanging out with my friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">AWS fundamentals</span>.
      </p>
    </motion.section>
    )
}