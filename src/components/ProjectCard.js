import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiPostgresql } from 'react-icons/si';

const ProjectCard = ({ project }) => {
  const getTechIcon = (tech) => {
    const iconProps = { className: "w-6 h-6", title: tech };
    switch (tech.toLowerCase()) {
      case 'react': return <SiReact {...iconProps} />;
      case 'tailwind': return <SiTailwindcss {...iconProps} />;
      case 'node': return <SiNodedotjs {...iconProps} />;
      case 'mongodb': return <SiMongodb {...iconProps} />;
      case 'express': return <SiExpress {...iconProps} />;
      case 'postgresql': return <SiPostgresql {...iconProps} />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.techStack.map((tech, index) => (
            <div key={index} className="text-blue-400">
              {getTechIcon(tech)}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaGithub /> Code
          </a>
          <a
            href={project.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaYoutube /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;