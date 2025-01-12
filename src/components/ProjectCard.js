import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiPostgresql } from 'react-icons/si';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-3">{project.title}</h3>
        
        {/* Description */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={isExpanded ? 'expanded' : 'collapsed'}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-300">
                {isExpanded ? project.description : `${project.description.slice(0, 100)}...`}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Read More Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            {isExpanded ? (
              <>
                Show Less <FaChevronUp />
              </>
            ) : (
              <>
                Read More <FaChevronDown />
              </>
            )}
          </button>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 my-6">
          {project.techStack.map((tech, index) => (
            <motion.div 
              key={index} 
              className="text-blue-400"
              whileHover={{ scale: 1.1 }}
            >
              {getTechIcon(tech)}
            </motion.div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-gray-700">
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