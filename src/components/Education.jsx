import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      year: "2021–2025",
      degree: "Bachelor of Engineering",
      institution: "Visvesvaraya Technological University",
      grade: "First class distinction.",
    },
    {
      year: "2018–2020",
      degree: "Higher Secondary School",
      institution: "Shree Ram Pramhunsh Balika Inter College, Uttar Pradesh",
      grade: "First class distinction.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-6">Education</h2>
      <div className="h-1 w-24 mx-auto mb-10 bg-gradient-to-r from-yellow-500 to-transparent" />

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-zinc-800 p-6 rounded-md shadow-md hover:shadow-yellow-600 hover:scale-[1.03] transition-transform duration-300"
          >
            <p className="text-yellow-500 text-xl font-bold mb-1">
              {item.year}
            </p>
            <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
            <p className="text-gray-400 uppercase tracking-wider mb-2">
              {item.institution}
            </p>
            <p className="text-sm text-gray-300">Grade: {item.grade}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional Download Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/cv.pdf" // public folder makes it accessible at root
          download
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download my CV"
          className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Education;
