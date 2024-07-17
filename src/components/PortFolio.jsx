import React from "react";
import reactjs from "../../public/reactjs.png";
import JavaScript from "../../public/javascript.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: JavaScript,
      name: "Calculator App",
      title:"Get Html/CSS/JavaScript Code",
    },
    {
      id: 2,
      logo: JavaScript,
      name: "NetFlix Clone",
      title:"Get Html/CSS/JavaScript Code",

    },
    {
      id: 3,
      logo: reactjs,
      name: "Ecommerce App",
      title:"Get ReactJS progect",

    },
    {
      id: 4,
      logo: reactjs,
      name: "WiewMart App",
      title:"Get ReactJS progect",

    },
    {
      id: 5,
      logo: JavaScript,
      name: "Tic Tac Toe App",
      title:"Get Html/CSS/JavaScript Code",

    },
    {
      id: 6,
      logo: JavaScript,
      name: "Rock Paper App",
      title:"Get Html/CSS/JavaScript Code",

    },
    {
      id: 7,
      logo: JavaScript,
      name: "Currency Converter App",
      title:"Get Html/CSS/JavaScript Code",

    },
   
    {
      id: 8,
      logo: reactjs,
      name: "GetCode App",
      title:"Get ReactJS progect",

    },
    {
      id:9 ,
      logo: reactjs,
      name: "PortFolio",
      title:"Get ReactJS progect",

    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>

        <div className="flex  flex-wrap justify-center  gap-4">
          {cardItem.map(({ id, logo, name,title }) => (
            <div
              className=" flex-none w-[300px] md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}>
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {title}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href="https://github.com/Amirk9" className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
