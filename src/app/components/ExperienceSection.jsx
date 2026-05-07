"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Aigetai",
    role: "MERN Developer Intern",
    period: "Aug 2025 - March 2026",
    description:
      "During my 6-month internship as a MERN Stack Developer, I worked on building responsive frontend applications using React.js and modern UI practices. I integrated real-time APIs, including music and sticker services, to enhance user interaction and dynamic content delivery. I also worked with REST APIs to ensure smooth communication between the frontend and backend. As part of a collaborative team environment, I used Git for version control, actively contributing through push and pull workflows, and participated in regular team meetings to discuss progress, features, and improvements. Additionally, I focused on debugging and optimizing components to improve overall performance and user experience.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 text-white">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Work Experience
      </h2>
      <div className="relative border-l-2 border-[#33353F] ml-4 md:ml-20 mr-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-8 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-primary-500 rounded-full border-4 border-[#121212] z-10" />

            <div className="bg-[#181818] p-6 rounded-2xl border border-[#33353F] hover:border-secondary-500 transition-all duration-300 shadow-xl group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-[#ADB7BE]">
                    {exp.company}
                  </h4>
                </div>
                <span className="text-sm font-semibold text-secondary-500 bg-secondary-500/10 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#ADB7BE] leading-relaxed text-base">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
