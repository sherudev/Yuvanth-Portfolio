"use client";
import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "React", level: 82, icon: "⚛️" },
  { name: "Next.js", level: 82, icon: "▲" },
  { name: "JavaScript", level: 88, icon: "JS" },
  { name: "Tailwind CSS", level: 85, icon: "🌊" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "PostgreSQL", level: 75, icon: "🐘" },
  { name: "Python", level: 70, icon: "🐍" },
  { name: "Git", level: 85, icon: "📜" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#181818] border border-[#33353F] p-6 rounded-xl hover:border-primary-500 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              {skill.name}
            </h3>
            <div className="w-full bg-[#2a2a2a] h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
              />
            </div>
            <span className="text-[#ADB7BE] text-sm mt-2 block">
              {skill.level}% Proficiency
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
