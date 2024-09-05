
import b from "../assets/boo.jpeg"
import c from "../assets/calc.jpeg"
import ch from "../assets/chang.jpeg"
import e from "../assets/ecom.jpeg"
import g from "../assets/getc.png"
import m from "../assets/mart.jpeg"
import r from "../assets/roc.jpeg"
import t from "../assets/tic.png"
import n from "../assets/net.jpeg"

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: b,
      name: "Calculator App",
      title:"Get Html/CSS/JavaScript Code",
    },
    {
      id: 2,
      logo: c,
      name: "NetFlix Clone",
      title:"Get Html/CSS/JavaScript Code",

    },
    {
      id: 3,
      logo: ch,
      name: "Ecommerce App",
      title:"Get ReactJS progect",

    },
    {
      id: 4,
      logo: e,
      name: "WiewMart App",
      title:"Get ReactJS progect",

    },
    {
      id: 5,
      logo: g,
      name: "Tic Tac Toe App",
      title:"Get Html/CSS/JavaScript Code",

    },
    {
      id: 6,
      logo: m,
      name: "Rock Paper App",
      title:"Get Html/CSS/JavaScript Code",

    },
    {
      id: 7,
      logo: n,
      name: "Currency Converter App",
      title:"Get Html/CSS/JavaScript Code",

    },
   
    {
      id: 8,
      logo:r,
      name: "GetCode App",
      title:"Get ReactJS progect",

    },
    {
      id:9 ,
      logo: t,
      name: "PortFolio",
      title:"Get ReactJS progect",

    },
  ];
  return (
    <div
      name="Portfolio"
      className="md:px-20 pr-6 pt-4 pl-6 pb-9  mt-6  bg-[rgb(30,30,30)] text-gray-300">
      <div>
        <h1 className="text-2xl text-red-700 font-bold mb-9 underline">Projects</h1>

        <div className="flex   flex-wrap justify-evenly items-center  gap-9">
          {cardItem.map(({ id, logo, name,title }) => (
            <div
              className=" flex-none w-[300px] md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-black"
              key={id}>
              <img
                src={logo}
                className="w-[450px] h-[150px] object-contain"
                alt=""
              />
              <div>
                <div className="px-2  text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-500">
                  {title}
                </p>
              </div>
              <div className=" px-4 py-4 space-x-3 justify-around">
                <a href="https://github.com/Amirk9" className="bg-green-700  hover:bg-red-700 text-white  px-4 py-2 rounded">
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
