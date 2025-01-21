import React from "react";
import { motion } from "framer-motion";
import TechStack from "./TechStack";

const About = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = "";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "YourName-Resume.pdf";
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
                src="Portfo_Pic.jpg"
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
              Hey there! I'm a Data Engineer & Developer with a passion for turning complex data challenges into elegant solutions. Born and raised in Richmond, Bay Area, as a first-generation tech enthusiast, I've carried my innovative spirit from California's tech hub to the dynamic scene of Nashville, where I earned my Bachelor's of Applied Sciences in Data Science from Middle Tennessee State University.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              What drives me? I'm deeply passionate about Data Analysis and Data Engineering, finding joy in transforming raw data into actionable insights. My goal is simple yet ambitious: to harness the power of data to create tangible solutions that make a real difference in people's lives. When I'm not diving into datasets or crafting efficient pipelines, you'll find me on the soccer field - whether playing or cheering from the sidelines. It's this balance of analytical thinking and dynamic teamwork that defines both my professional and personal life.
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
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Technical Expertise
          </h2>
          <TechStack />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
