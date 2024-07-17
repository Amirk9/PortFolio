import React from "react";
import cv from "../assets/Amir_cv1.pdf"
import pic from "../../public/logo.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-green-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-lg md:text-md text-justify">
              I'm 3rd year BE. Student @ VTU and a highly motivated,  detail-oriented, Frontend Web Developer, 
              Specialising in Java & DSA, Html,CSS, JavaScript,ReactJS.
             
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex  space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61559832195187" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer rounded-full  text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mohammad-amir-khan/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer 
                      rounded-full text-blue-600 " />
                    </a>
                  </li>
                  {/*<li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-[24px]  rounded-md cursor-pointer bg-white text-red-700" />
                    </a>
  </li>*/}
                  <li>
                    <a href="https://www.instagram.com/md.amirkhan_/" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer rounded-full text-red-600" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-green-600" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer bg-black text-white font-semibold " />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer bg-black text-white font-semibold" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer bg-green-600 text-white" />
                </div>
              </div>
            </div>
            <div className="text-2xl ">
              <h1 className="font-semibold mt-10">Download My Resume</h1>
             <button className=" rounded-lg text-black bg-green-600 px-2 py-1 mt-6 ml-6 hover:scale-110 text-lg"><a href={cv} download>Dounload</a></button>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-15 mt-2 ml-10  order-1">
            <img
              src={pic}
              className="rounded-full  h-[300px] w-[300px] object-cover md:w-[400px] md:h-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
