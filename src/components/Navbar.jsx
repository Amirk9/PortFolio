import React, { useState } from "react";
import pic from "../../public/logo1.jpg";

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    
      <div className=" mx-6 pr-4  h-16 shadow-md z-50  bg-[#1e1e1e] text-white">
        <div className="flex    justify-between items-center h-16">
      
          <div className=" flex object-contain space-x-2">
            <img
              src={pic}
              className="h-10 w-10 ml-4  object-cover rounded-full"
              alt=""
            />
            <h1 className=" text-white text-xl cursor-pointer">
              Md. Amir <span className="text-red-700 text-xl">khan</span>
              <p className="text-xs">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 text-white cursor-pointer pr-4"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={ 0}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden ">
              {
              //menu?<IoCloseSharp size={24} />: 
              <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        <div className="bg-slate-400 h-[1] w-full">
        </div>
        {menu && (
          <div className="bg-black z-50  text-white fixed right-0 top-0  h-screen w-4/12 "><div onClick={() => setMenu(!menu)} className="md:hidden py-4 px-4">
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
            
            <ul className="md:hidden flex flex-col h-screen text-xl">
              
              <div className="flex flex-col justify-center items-center border-white mt-9 gap-2">
                <img
                  src={pic}
                  className="h-12 w-12  object-cover  rounded-full"
                  alt=""
                />
                <h2>Amir khan</h2>
                <div>
                  <ul className="flex  space-x-3">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61559832195187"
                        target="_blank"
                      >
                        <FaSquareFacebook className="text-xl cursor-pointer rounded-full  text-blue-300" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mohammad-amir-khan/"
                        target="_blank"
                      >
                        <FaLinkedin
                          className="text-xl cursor-pointer 
                      rounded-full text-blue-300 "
                        />
                      </a>
                    </li>
                    {/*<li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-[24px]  rounded-md cursor-pointer bg-white text-red-700" />
                    </a>
  </li>*/}
                    <li>
                      <a
                        href="https://www.instagram.com/md.amirkhan_/"
                        target="_blank"
                      >
                        <FaInstagram className="text-xl cursor-pointer rounded-full text-red-400" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white mt-4 mb-7 h-[1px] w-full"></div>
              {navItems.map(({ id, text }) => (
                <div className="mt-4">
                  <li
                    className="hover:scale-105 duration-200 text-sm text-slate-300 pl-5  cursor-pointer"
                    key={id}
                  >
                    <Link
                      onClick={() => setMenu(!menu)}
                      to={text}
                      smooth={true}
                      duration={ 0}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
  
  );
}

export default Navbar;
