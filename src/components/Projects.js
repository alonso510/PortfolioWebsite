import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Data Bridge",
      description: "Engineered an automated ETL pipeline using AWS Lambda, S3, and Redshift Serverless that dynamically processes multi-sheet Excel workbooks into a scalable data warehouse solution. The system features automated schema detection, intelligent error handling, and comprehensive logging, transforming complex Excel data structures into optimized database tables while maintaining data integrity throughout the entire pipeline.",
      image: "/DataBridge.JPG",
      techStack: ["AWS", "Python",  "Vite"],
      githubLink: "https://github.com/alonso510/DataBridgeAWS",
      youtubeLink: "https://youtube.com/watch?v=demo1"
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with data visualization and reporting features.",
      image: "/api/placeholder/800/600",
      techStack: ["React", "Tailwind", "Node", "PostgreSQL"],
      liveLink: "https://project2.com",
      githubLink: "https://github.com/yourusername/project2",
      youtubeLink: "https://youtube.com/watch?v=demo2"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/800/600",
      techStack: ["React", "Node", "MongoDB", "Express"],
      liveLink: "https://project3.com",
      githubLink: "https://github.com/yourusername/project3",
      youtubeLink: "https://youtube.com/watch?v=demo3"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">My Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;