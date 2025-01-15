import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Changed import
import { motion } from 'framer-motion';


const Hero = () => {


  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      
      
      {/* Navigation */}
      <nav className="absolute top-8 left-8 z-40">
        <ul className="flex space-x-8">
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="text-lg font-serif hover:text-blue-400 cursor-pointer transition-colors"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="text-lg font-serif hover:text-blue-400 cursor-pointer transition-colors"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="text-lg font-serif hover:text-blue-400 cursor-pointer transition-colors"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-serif font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Alonso Nunez
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Web Developer & Designer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
      </div>
    </div>
  );
};

export default Hero;