import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  const projects = [
    {
      title: "Data Bridge",
      description: "Engineered an automated ETL pipeline using AWS Lambda, S3, and Redshift Serverless that dynamically processes multi-sheet Excel workbooks into a scalable data warehouse solution. The system features automated schema detection, intelligent error handling, and comprehensive logging, transforming complex Excel data structures into optimized database tables while maintaining data integrity throughout the entire pipeline.",
      image: "/DataBridge.JPG",
      techStack: ["AWS", "Python",  "Vite", "TailWind"],
      githubLink: "https://github.com/alonso510/DataBridgeAWS",
      youtubeLink: "https://youtube.com/watch?v=demo1"
    },
    {
      title: "Wrapped+",
      description: "Engineered a full-stack Spotify analytics dashboard leveraging React.js, Node.js, and OAuth 2.0 authentication to process and visualize complex user listening patterns through interactive data visualizations using Recharts and custom algorithms. Implemented advanced features including temporal analysis, genre diversity tracking, and music evolution patterns while utilizing modern web development practices such as custom React hooks, RESTful API integration with batch processing, and component-driven architecture with Tailwind CSS for a responsive, dynamic user interface.",
      image: "/Wrapped_Portfolio.JPG",
      techStack: ["React", "Tailwind", "Node", "PostgreSQL"],
      liveLink: "https://project2.com",
      githubLink: "https://github.com/alonso510/Wrapped-",
      youtubeLink: "https://www.youtube.com/watch?v=ueLAjEzzrIg"
    },
    {
      title: "Synthe Summary",
      description: "Developed a sophisticated Natural Language Processing (NLP) application that implements state-of-the-art transformer architecture for intelligent document summarization. The system leverages the BART-large-CNN model to perform extractive and abstractive summarization, achieving up to 70% text reduction while maintaining semantic integrity.Developed a full-stack web application that leverages AI to automatically generate concise summaries from text and PDF documents. Built with Python/Flask and modern web technologies, SyntheSummary helps users quickly extract key information from lengthy documents.",
      image: "/Synthe_Summary_Portfolio.png",
      techStack: ["Python", "HTML", "JavaScript", "Tailwind"],
      githubLink: "https://github.com/alonso510/capstone",
      youtubeLink: "https://www.youtube.com/watch?v=w9wNKYuoZUo"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              isExpanded={expandedCards[index] || false}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;