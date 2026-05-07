"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sensai – AI Career Coach",
    description:
      "AI-powered career guidance platform using Gemini API with personalized recommendations and dynamic dashboards.",
    image: "/images/projects/sensai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Yuvanthv29102003/sensai",
    previewUrl: "https://sensai-olive-six.vercel.app/",
  },
  {
    id: 2,
    title: "Welth – AI Budget Tracker",
    description:
      "AI-based expense tracker that categorizes transactions automatically with Prisma and PostgreSQL integration.",
    image: "/images/projects/welth.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Yuvanthv29102003/Welth",
    previewUrl: "https://welth-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "Apple 3D Product Showcase",
    description:
      "Interactive 3D product showcase built using Three.js and GSAP with optimized animations.",
    image: "/images/projects/apple.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Yuvanthv29102003/Apple_Website",
    previewUrl: "https://iphone-website-six.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
