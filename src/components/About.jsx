import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-base text-slate-700">
          Hello, I'm Mohammad Amir khan, a passionate Web developer with a keen
          eye for MERN Stack . With a background in IT, I strive to create
          impactful and visually stunning Software solutions that leave a
          lasting impression.
        </p>
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <div>
            <h4 className="text-lg mt-2 text-slate-700">Programing Languages:</h4>
            <ul className="px-6 pt-3 flex flex-col gap-3  list-disc">
            <li className="text-lg">C/Java & DSA</li>
            <li className="text-lg">HTML/CSS</li>
            <li className="text-lg">JavaScript</li>  
            <li className="text-lg">ReactJs</li>
            </ul>     
        </div>
<br />
        <h1 className="text-green-600 font-semibold text-xl">Education</h1>
        <span className="text-base text-slate-700">
          <ul><h1 className=" text-lg mt-2"> BE In Computer Scirnce </h1>
            <div className="text-lg list-disc flex gap-20 text-black mt-3 pl-5 ">
              <li className="">CGPA</li>
              <p>7.91</p>
              <p>Up to 5th Semester</p>
            </div>
          
            </ul>
          <ul><h1 className=" text-lg mt-4"> 12th</h1>
            <div className=" list-disc flex gap-20 text-black mt-3 pl-5 ">
              <li className="text-lg">Percentage</li>
              <p>63%</p>
              
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
