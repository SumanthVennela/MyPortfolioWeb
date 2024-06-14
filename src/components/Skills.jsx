import React from "react";
import {
   SiHtml5,
   SiCss3,
   SiJavascript,
   SiPython,
   SiPostgresql,
   SiReact,
   SiNodedotjs,
   SiExpress,
   SiGithub,
   SiMicrosoftexcel,
   SiVisualstudiocode,
   SiBootstrap,
} from "react-icons/si";

const Skills = () => {
   const skillsData = [
      { id: "1", name: "HTML", icon: <SiHtml5 size={20} /> },
      { id: "2", name: "CSS", icon: <SiCss3 size={20} /> },
      { id: "3", name: "JavaScript", icon: <SiJavascript size={20} /> },
      { id: "4", name: "Python", icon: <SiPython size={20} /> },
      { id: "5", name: "SQL", icon: <SiPostgresql size={20} /> },
      { id: "6", name: "React", icon: <SiReact size={20} /> },
      { id: "7", name: "Node.js", icon: <SiNodedotjs size={20} /> },
      { id: "8", name: "Express.js", icon: <SiExpress size={20} /> },
      { id: "9", name: "Git/Github", icon: <SiGithub size={20} /> },
      { id: "10", name: "MS Excel", icon: <SiMicrosoftexcel size={20} /> },
      { id: "11", name: "VSCode", icon: <SiVisualstudiocode size={20} /> },
      { id: "12", name: "Bootstrap", icon: <SiBootstrap size={20} /> },
   ];

   return (
      <div id="skills" className="flex-1 pt-12 md:pt-0">
         <h2 className="text-3xl pt-4 mb-8 text-white">
            Skills
         </h2>
         <div className="">
            {skillsData.map(skill => (
               <div
                  key={skill.id}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg inline-block mr-4 mb-5 shadow-lg shadow-gray-200 hover:scale-105 ease-in-out duration-300"
               >
                  <span className="flex gap-2 items-center font-medium">
                     {skill.icon}
                     {skill.name}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Skills;




