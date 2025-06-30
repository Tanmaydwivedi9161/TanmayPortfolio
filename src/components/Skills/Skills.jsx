import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiDjango } from "react-icons/si";
import { SiBootstrap, SiTailwindcss } from "react-icons/si";

import "./index.css";
const frontendSkills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];


const backendSkills = [
  { icon: <FaNode />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaGithub />, name: "Git & GitHub" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiDjango />, name: "Django" },
];

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-cards-wrapper">
        <motion.div
          className="tech-card"
          whileHover={{ rotateY: 10, rotateX: 20 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <h3 className="card-title">Frontend Technologies</h3>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="tech-card"
          whileHover={{ rotateY: -10, rotateX: 20 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <h3 className="card-title">Backend Technologies</h3>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
