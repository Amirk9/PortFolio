import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/1.jpg";

const About = () => {
  const FaHandPointLeft = () => {
    window.open("https://www.linkedin.com/in/mohammad-amir-khan", "_blank");
    
  };
  const skills = [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "SQL", level: 90 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "ReactJS", level: 80 },
    { name: "ExpressJS", level: 70 },
    { name: "NodeJS", level: 70 },
    { name: "Tailwind CSS", level: 80 },
    { name: "MongoBD", level: 80 },
    
  ];

  return (
    <section id="about" className="bg-black text-white px-6 md:px-20  flex flex-col md:flex-row gap-10 py-10">
      {/* Left Side */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex gap-20 items-center">
          <img
            src={profileImage}
            alt="Mohammad Amir Khan"
            className="w-32 h-32 rounded-full border-4 border-yellow-500"
          />
          <div className="mt-4 space-y-4 text-gray-400">
            <p>Name: Mohammad Amir Khan</p>
            <p>Job Role: Software Developer</p>
            <p>Experience: Fresher</p>
            <p>Address: Bengaluru, India</p>
          </div>
        </div>

        {/* Skill Bars */}
        <div>
          <h2 className="font-semibold mb-2">Skills</h2>
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4 text-gray-400">
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded">
                <div
                  className="h-2 bg-yellow-500 rounded"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-gray-400">
          I am Mohammad Amir Khan, a passionate Computer Science and
          Engineering student with a flair for building web applications and
          designing user interfaces. I enjoy solving complex problems and
          turning ideas into reality through clean, efficient code.
        </p>

        {/* Summary Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
          <p><strong className="text-gray-200">Profile:</strong><span className="text-gray-400"> Software Developer</span></p>
          <p><strong className="text-gray-200">Domain:</strong><span className="text-gray-400"> Frontend Developer, Fullstack Developer</span></p>
          <p><strong className="text-gray-200">Education:</strong><span className="text-gray-400"> Bachelor of Engineering</span></p>
          <p><strong className="text-gray-200">Language:</strong><span className="text-gray-400"> English, Hindi </span></p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-4 mt-6">
          <p className="text-yellow-500 font-bold text-lg">
          </p>
          <button onClick={FaHandPointLeft} className="bg-yellow-500 text-black px-5 py-2 rounded-full hover:bg-yellow-400">
            LinkedIn
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
