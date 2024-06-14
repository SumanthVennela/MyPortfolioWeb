import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
   return (
      <div id="main" style={{ height: "100vh" }}>
         <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start">
               <h1 className="sm:text-6xl text-4xl font-bold text-white" >
                  Sumanth Vennela
               </h1>
               <h2 className="flex sm:text-3xl text-2xl pt-4" style={{ color: "#FFFF00" }}>
                  I'm a
                  <TypeAnimation
                     sequence={[
                        "Software Engineer.",
                        2000,
                        "Web Developer.",
                        2000,
                        "Software Developer.",
                        2000,
                     ]}
                     wrapper="div"
                     cursor={true}
                     repeat={Infinity}
                     style={{
                        fontSize: "1em",
                        paddingLeft: "5px",
                        fontWeight: 500,
                        color: "#faf5f5",
                     }}
                  />
               </h2>
               <a
                  href="#contact"
                  className="mt-6 py-2 px-4 bg-[#8f8951] text-gray-100 cursor-pointer hover:scale-105 ease-in-out duration-300"
               >
                  Hire me
               </a>
               <div className="flex pt-6">
                  <a
                     href="https://github.com/SumanthVennela"
                     className="hover:scale-105 ease-in-out duration-300"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FaGithub
                        className="cursor-pointer"
                        size={25}
                        color="#f5f2dc"
                     />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/sumanthvennela/"
                     className="hover:scale-105 ease-in-out duration-300 ml-4"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FaLinkedinIn
                        className="cursor-pointer"
                        size={25}
                        color="#f5f2dc"
                     />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Main;




