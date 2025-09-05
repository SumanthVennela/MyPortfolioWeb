import React from "react";
import Skills from "./Skills";
import { BsEmojiSmile } from "react-icons/bs";

const About = () => {
   return (
      <div id="about" className="py-16 max-w-[1200px] m-auto md:pl-20 p-4">
         <h1 className="text-4xl font-bold text-center text-white mb-12">
            About me
         </h1>
         <div className="lg:flex gap-6">
            <div className="flex-1">
               <h2 className="text-3xl pt-4 text-white font-bold">
                  Professional Summary
               </h2>
               <p className="text-lg pt-4 text-white">
               Recent Master of Computer Applications (MCA) graduate from Osmania University 
               with a CGPA of 8.5, and a Bachelor of Science in Computer Science from
                Satavahana University with a CGPA of 8.0. Possesses a solid foundation
                 in computer science principles and hands-on experience through academic 
                 projects and internships. Adept at problem-solving, with a keen interest 
                 in developing clean, scalable solutions. Eager to contribute to team success in 
                 a dynamic and growth-oriented environment.
               </p>
               <p className="text-lg pt-4 text-white">
               Throughout my academic journey, I have actively engaged in various projects that have honed my 
               technical skills. My coursework and hands-on projects have provided me with a strong grasp of
                software development and database management.
               </p>
               <p className="text-lg pt-4 text-white">
                  Now, you have two things to do... Check out some of my{" "}
                  <a
                     href="#projects"
                     className="font-semibold px-2 py-1 bg-gray-200 text-gray-700 rounded-lg"
                  >
                     Projects
                  </a>{" "}
                  or view{" "}
                  <a
                     href="/Resume.pdf"
                     className="font-semibold px-2 py-1 bg-gray-200 text-gray-700 rounded-lg"
                     target="_blank"
                  >
                     My Resume
                  </a>
               </p>
               <p className="text-lg pt-4 flex gap-2 items-center">
                  You choose! <BsEmojiSmile size={20} />
               </p>
            </div>
            <Skills />
         </div>
      </div>
   );
};

export default About;
