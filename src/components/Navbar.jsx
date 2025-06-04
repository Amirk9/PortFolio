import React from "react";
import { Link } from "react-scroll";

const navLinks = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 md:px-20 py-4 flex justify-between items-center fixed w-full top-0 z-50">
      <h1 className="text-xl font-bold">Amir Khan</h1>
      <ul className="hidden md:flex space-x-6 text-sm uppercase font-medium tracking-wider">
        {navLinks.map((link) => (
          <li key={link}>
            <Link
              to={link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70} // offset for fixed navbar height
              activeClass="text-yellow-500 border-b-2 border-yellow-500"
              className="cursor-pointer hover:text-yellow-400 transition-all capitalize"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
