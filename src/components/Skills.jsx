import React from 'react'
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiFirebase, SiPostgresql, SiGit, SiDocker,
  SiRedis, SiExpress
} from 'react-icons/si'
import { Cloud} from "lucide-react";

const skills = [
  { name: 'React', icon: <SiReact /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML/CSS', icon: <SiHtml5 /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Git & GitHub', icon: <SiGit /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'AWS', icon: <Cloud/> },
  { name: 'Redis', icon: <SiRedis /> },
]

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="section-title text-center">
          <h2 className="text-3xl font-bold mb-2">
            My <span className="text-primary-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-white dark:bg-dark-700 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-4xl text-primary-500 mb-2">
                {skill.icon}
              </div>
              <span className="text-base font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
