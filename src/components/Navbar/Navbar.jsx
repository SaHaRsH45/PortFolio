import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const codingProfiles = [
    { label: "LeetCode", url: "https://leetcode.com/u/saharsh_kumar45/" },
    { label: "HackerRank", url: "https://www.hackerrank.com/profile/saharshkumar45" },
    { label: "GFG", url: "https://www.geeksforgeeks.org/user/saharsh45/" },
    { label: "Coding Ninjas", url: "hhttps://www.naukri.com/code360/profile/Saharshkumar" },
    { label: "Codeforces", url: "https://codeforces.com/profile/Saharsh_kumar45" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">SaHaRsH</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">KuMaR</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 items-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}

          {/* Coding Profile Dropdown */}
          <li className="relative group cursor-pointer">
            <button className="hover:text-[#8245ec] flex items-center gap-1">
              Coding Profile <span className="text-sm">▼</span>
            </button>
            <ul className="absolute top-8 left-0 hidden group-hover:block bg-[#050414] text-gray-300 rounded-md shadow-lg py-2 w-44 z-50">
              {codingProfiles.map((profile) => (
                <li
                  key={profile.label}
                  className="px-4 py-2 hover:bg-[#8245ec] hover:text-white rounded-md"
                >
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/SaHaRsH45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/saharsh45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* Mobile Coding Profile Dropdown */}
            <li className="w-full text-center">
              <details className="group">
                <summary className="cursor-pointer hover:text-white">
                  Coding Profile
                </summary>
                <ul className="flex flex-col items-center bg-[#050414] w-full py-2">
                  {codingProfiles.map((profile) => (
                    <li
                      key={profile.label}
                      className="px-4 py-2 hover:bg-[#8245ec] hover:text-white w-full text-center rounded-md"
                    >
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {profile.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
