import React from "react";

function About() {
  return (
    <div
      name="About"
      className=" md:px-10 mt-6 pr-6 mx-6 bg-[#1e1e1e] text-white"
    >
      <div className="ml-6 pt-3 pb-2" >
        <h1 className="text-2xl font-bold text-red-700 mb-5 underline">About</h1>
        <p className="text-base text-gray-300 text-justify ">
          Hello, I'm Mohammad Amir khan, a passionate web developer with a keen
          eye for MERN Stack. with a background in IT, I strive to create
          impactful and visually stunning software solutions that leave a
          lasting impression.
        </p>
        <br />

        <h1 className="text-red-700 font-semibold text-xl underline">
          Skills & Expertise
        </h1>
        <div>
            <h4 className=" mt-2 text-gray-300 underline">Programing Languages:</h4>
            <ul className="px-6 text-gray-200 pt-3 flex flex-col gap-3  list-disc">
            <li className="text-lg">C/Java & DSA</li>
            <li className="text-lg">HTML/CSS</li>
            <li className="text-lg">JavaScript</li>  
            <li className="text-lg">ReactJs</li>
            </ul>     
        </div>
<br />
        <h1 className="text-red-700 font-semibold text-xl underline">Education</h1>
        <span className="text-base  ">
          <ul><h1 className="  mt-2 text-gray-300 underline"> BE In Computer Scirnce </h1>
            <div className="text-lg list-disc text-gray-200 flex gap-12  mt-3 pl-5 ">
              <li className="underline text-sm">CGPA</li>
              <p className="text-sm">7.91</p>
              <p className="text-wrap text-xs">Up to 5th Semester</p>
            </div>
          
            </ul>
          <ul><h1 className=" text-lg mt-4 text-gray-300 underline"> PUC</h1>
            <div className=" list-disc flex gap-20  mt-3 pl-5 ">
              <li className=" text-gray-200 underline text-sm">Percentage</li>
              <p className="text-gray-200">63%</p>
              
            </div>
          
            </ul>
          
        </span>
        <br />
      
       
       
        {/*<h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span>
        <br />
          <br />*/}
       {/* <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p className="text-base text-slate-700">
          My mission is to leverage my skills and creativity to deliver
          innovative software solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>*/}
      </div>
    </div>
  );
}

export default About;
