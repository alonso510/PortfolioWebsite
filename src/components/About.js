import React from 'react';
import { motion } from 'framer-motion';
import TechStack from './TechStack';

const About = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/path-to-your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'YourName-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/api/placeholder/500/500"
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate developer with a deep love for creating beautiful and functional web applications. With experience in both frontend and backend development, I bring ideas to life through clean, efficient code and intuitive user experiences.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
            <motion.button
              onClick={handleDownloadResume}
              className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-serif"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Technical Expertise</h2>
          <TechStack />
        </motion.div>
      </div>
    </section>
  );
};

export default About;