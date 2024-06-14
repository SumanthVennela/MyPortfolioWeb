import { useState } from "react";
import {
   AiOutlineHome,
   AiOutlineMenu,
   AiOutlineProject,
   AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import Logo from "../assets/Vs.jpeg"


const Sidenav = () => {
   const [nav, setNav] = useState(false);
   const handleNav = () => {
      setNav(!nav);
   };
   const links = [
      {
         id: "1",
         title: "Home",
         path: "#main",
         icon: <AiOutlineHome size={20} />,
      },
      {
         id: "2",
         title: "Professional Summary",
         path: "#about",
         icon: <BsPerson size={20} />,
      },
      {
         id: "3",
         title: "Skills",
         path: "#skills",
         icon: <GiSkills size={20} />,
      },
      {
         id: "4",
         title: "Projects",
         path: "#projects",
         icon: <AiOutlineProject size={20} />,
      },
      {
         id: "5",
         title: "Contact",
         path: "#contact",
         icon: <AiOutlineMail size={20} />,
      },
   ];
   return (
      <div>
          <div className=" fixed flex gap-12 items-center justify-between w-full z-10 md:px-0 px-4 bg-white shadow-2xl shadow-gray-300 md:bg-transparent md:shadow-none">
          <div className="">
               <img src={Logo} alt="logo" className="w-[80px] h-[70px] md:w-[100px] md:h-[80px] p-2 m-2 md:p-4 md:m-4" />
            </div>
           <AiOutlineMenu onClick={handleNav} className="md:hidden" />
         </div>
         {nav ? (
            <div
               className="fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center gap-4 z-20 md:hidden"
               onClick={handleNav}
            >
               {links.map(link => (
                  <a
                     href={link.path}
                     key={link.id}
                     onClick={handleNav}
                     className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-105 ease-in-out duration-300"
                  >
                     {link.icon}
                     <span className="pl-4 ">{link.title}</span>
                  </a>
               ))}
            </div>
         ) : (
            ""
         )}

         <div className="md:flex items-center hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
               {links.map(link => (
                  <a
                     href={link.path}
                     key={link.id}
                     className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-105 ease-in-out duration-300"
                  >
                     {link.icon}
                  </a>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Sidenav;