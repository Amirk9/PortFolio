import React from "react";
import cv from "../assets/Amir_cv1.pdf";
import pic from "../../public/logo.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

import b from "../assets/boo.jpeg"
import c from "../assets/calc.jpeg"
import ch from "../assets/chang.jpeg"
import e from "../assets/ecom.jpeg"
import g from "../assets/getc.png"
import m from "../assets/mart.jpeg"
import r from "../assets/roc.jpeg"
import t from "../assets/tic.png"
import n from "../assets/net.jpeg"

function Home() {
  
    
  return (
    <div className="mt-4 mx-6 pr-6 bg-[#1e1e1e] text-white">
      <div name="Home" className="">
        <div className="flex md:px-10 flex-col md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24  space-y-2 order-2 md:order-1 ml-6 pt-3 pb-6">
            <div className="flex py-2 text-nowrap   space-x-1 text-xl md:text-4xl">
              <h1>Hello,I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-gray-300  md:text-md text-base text-start text-wrap   ">
              I'm 3rd year BE. student @ VTU and a highly motivated,detail-oriented frontend web developer,specialising in Java, DSA, Html, CSS, JavaScript, ReactJS.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className=" text-gray-300 text-center ">Available on</h1>
                <ul className="flex  space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61559832195187"
                      target="_blank"
                    >
                      <FaSquareFacebook className="text-2xl cursor-pointer rounded-full  text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mohammad-amir-khan/"
                      target="_blank"
                    >
                      <FaLinkedin
                        className="text-2xl cursor-pointer 
                      rounded-full text-blue-600 "
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
                      <FaInstagram className="text-2xl cursor-pointer rounded-full text-red-600" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="text-gray-300 text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-green-600" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer bg-black text-white font-semibold " />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer bg-black text-white font-semibold" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer bg-green-600 text-white" />
                </div>
              </div>
            </div>
            <div className="text-xl flex flex-col items-center md: justify-center ">
              <h1 className="text-gray-300 mt-10">Download My Resume</h1>
              <button className="rounded-lg text-black  bg-green-600 px-2 py-1 mt-6  hover:scale-110 text-lg">
                <a href={cv} download>
                  Dounload
                </a>
              </button>
            </div>
          </div>
          <div className="md:w-1/2  md:ml-41 md:mt-22 mt-6   ml-6  order-1">
            <div className="hidden md:block pl-56 pt-4">
              <img
                src={pic}
                className="rounded-full    h-[240px] w-[240px] object-cover md:w-[400px] md:h-[400px] "
                alt=""
              />
            </div>

            <div className="block  md:hidden   ">
              <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                  <img
                    src={n}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div id="item2" className="carousel-item w-full">
                  <img
                    src={t}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div id="item3" className="carousel-item w-full">
                  <img
                    src={r}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div id="item4" className="carousel-item w-full">
                  <img
                    src={m}
                    className="w-full h-44 object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full rounded-xl items-center justify-center text-center ">
              <div className="flex gap-1 py-2 items-center justify-center rounded-xl  w-32">
                <a href="#item1" className="btn btn-xs   border-hidden  bg-[#1e1e1e] text-black ">
                  1
                </a>
                <a href="#item2" className="btn btn-xs  bg-[#1e1e1e] border-hidden text-black">
                  2
                </a>
                <a href="#item3" className="btn btn-xs  border-hidden  bg-[#1e1e1e] text-black ">
                  3
                </a>
                <a href="#item4" className="btn btn-xs  border-hidden   bg-[#1e1e1e] text-black ">
                  4
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
