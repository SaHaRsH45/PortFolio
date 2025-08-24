import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const profiles = [
  { name: "LeetCode", link: "https://leetcode.com/u/saharsh_kumar45/", icon: <FaCode /> },
  { name: "HackerRank", link: "https://www.hackerrank.com/profile/saharshkumar45", icon: <FaLaptopCode /> },
  { name: "GeeksForGeeks", link: "https://www.geeksforgeeks.org/user/saharsh45/", icon: <FaCode /> },
  { name: "Coding Ninjas", link: "https://www.naukri.com/code360/profile/Saharshkumar", icon: <FaLaptopCode /> },
  { name: "Codeforces", link: "https://codeforces.com/profile/Saharsh_kumar45", icon: <FaCode /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
  hover: {
    scale: 1.1,
    rotate: 3,
    boxShadow: "0 12px 25px rgba(128, 90, 255, 0.5)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Coding = () => {
  return (
    <section id="coding-profile" className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-12">Coding Profiles</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center">
        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg cursor-pointer"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            variants={cardVariants}
          >
            <motion.div
              className="text-4xl mb-2"
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.6 } }}
            >
              {profile.icon}
            </motion.div>
            <span className="font-medium text-center">{profile.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Coding;
