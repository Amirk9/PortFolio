import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#020617]  text-gray-400 py-8 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base opacity-70 font-normal">
        Copyright  &copy; {new Date().getFullYear()} All rights reserved by Amir khan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
