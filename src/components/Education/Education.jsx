import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          My education journey has shaped my skills and perspective. Here’s a detailed look at my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full"></div>

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative w-full flex flex-col md:flex-row items-center mb-24"
          >
            {/* Left card */}
            {index % 2 === 0 && (
              <div className="md:w-1/2 md:pr-12 mt-12 md:mt-0">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(128,0,128,0.5)" }}
                  className="bg-gray-900 backdrop-blur-md border border-white rounded-2xl p-6 shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-md md:text-lg text-gray-300">{edu.school}</h4>
                  <p className="text-sm md:text-md text-purple-500 mt-1 font-semibold">{edu.date}</p>
                  <p className="mt-4 text-gray-400 font-medium">Grade: <span className="text-white">{edu.grade}</span></p>
                  <p className="mt-2 text-gray-400">{edu.desc}</p>
                </motion.div>
              </div>
            )}

            {/* Timeline Circle / Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 border-4 border-white w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-xl">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>

            {/* Right card */}
            {index % 2 !== 0 && (
              <div className="md:w-1/2 md:pl-12 mt-12 md:mt-0 md:ml-auto">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(128,0,128,0.5)" }}
                  className="bg-gray-900 backdrop-blur-md border border-white rounded-2xl p-6 shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-md md:text-lg text-gray-300">{edu.school}</h4>
                  <p className="text-sm md:text-md text-purple-500 mt-1 font-semibold">{edu.date}</p>
                  <p className="mt-4 text-gray-400 font-medium">Grade: <span className="text-white">{edu.grade}</span></p>
                  <p className="mt-2 text-gray-400">{edu.desc}</p>
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
