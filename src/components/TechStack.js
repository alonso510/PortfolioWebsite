import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'Python', category: 'Language' },
    {name: 'R', category: 'Data Science'},
    {name: 'C++', category: 'Language'},
    { name: 'AWS', category: 'Cloud' },
    { name: 'SQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Docker', category: 'DevOps' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          variants={item}
          className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors"
        >
          <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
          <p className="text-sm text-gray-400">{tech.category}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;