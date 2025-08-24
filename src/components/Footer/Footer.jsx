import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-[#0d081f] to-[#150f2b] text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Logo / Name */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Saharsh Kumar
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" }, // Match your section ID
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative group text-sm md:text-base font-medium hover:text-purple-500 transition-all"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-8">
          {[
            { icon: <FaTwitter />, link: "https://www.x.com/saharsh_4518" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/saharsh-kumar-629a7124b/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/saharsh_kumar45/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl transition-transform transform hover:scale-125 hover:text-pink-500 hover:rotate-6"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright */}
        <p className="text-sm md:text-base text-gray-400 mt-4">
          © 2025 Saharsh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
