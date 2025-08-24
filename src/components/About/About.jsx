import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../assets/1111.png";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative py-12 px-[5vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden"
    >
      {/* Blur Blob */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-400/30 rounded-full filter blur-3xl -z-10"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-700">
  Hi, I'm Saharsh
</h2>
          
          {/* Typewriter Titles */}
          <p className="text-lg md:text-xl text-purple-600 font-semibold mb-4">
            <Typewriter
              words={["Coder", "Backend Engineer", "Aspiring Software Developer"]}
              loop={0} // loop indefinitely: use 0 for once or Infinity for continuous
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          {/* Original Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            "I am passionate about coding and problem solving, with strong command over Data Structures and Algorithms. I enjoy applying my skills to develop efficient backend systems while continuously expanding my knowledge in software development. I aspire to grow as a versatile software developer by building impactful and scalable applications."
          </p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1q4BJq4Qcq_tFWaQ7W0ZjoQNCPXNfkiSK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #8245ec" }}
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition-transform duration-300"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
            }}
          >
            DOWNLOAD RESUME
          </motion.a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <img
              src={profileImage}
              alt="Saharsh"
              className="w-64 md:w-80 rounded-2xl shadow-xl"
            />
          </Tilt>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
