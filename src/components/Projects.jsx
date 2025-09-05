import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import { BiLink} from "react-icons/bi";

const Projects = () => {
   const projects = [
      {
         id: 1,
         img: Project1,
         title: "LEARNIFINITY",
         subtitle:
            "Digital Education Hub",
         preview: "https://learnfinity.netlify.app/",
         tech: "HTML, CSS, Javascript, React",
      },
      {
         id: 2,
         img: Project2,
         title: "Biryani Bliss",
         subtitle:
            "Savor the Spice, Delight in Tradition: Your Gateway to Biryani Bliss.",
         preview: "https://sumanthvennela.github.io/BiryaniBliss/",
         tech: "HTML, CSS, Javascript",
      },
      {
         id: 3,
         img: Project3,
         title: "Github Profile Viewer",
         subtitle:
            "GitHub Insight: Navigate Your Code Universe",
         preview: "https://githubviewer9.netlify.app/",
         tech: "Javascript, HTML, CSS",
      },
      {
         id: 4,
         img: Project4,
         title: "Currency Converter",
         subtitle:
            "Seamlessly Convert Across Borders: Your Ultimate Currency Companion",
         preview: "https://sumanthvennela.github.io/convertCurrency/",
         tech: "Javascript, HTML, CSS",
      },
   ];
   return (
      <div id="projects" className="max-w-[1200px] m-auto md:pl-20 p-4 py-16">
         <h1 className="text-4xl font-bold text-center text-white">
            Projects
         </h1>
         <p className="text-center py-8 text-lg text-white">
            Here are a few past design projects I've Coded. Want to discuss any?{" "}
            <a
               href="sumanthvennela09@gmail.com"
               className="text-white font-semibold underline"
            >
               Email me.
            </a>
         </p>
         <div className="grid sm:grid-cols-2 gap-12">
            {projects.map(project => (
               <div
                  key={project.id}
                  className="relative flex items-center justify-center h-[250px] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-b from-gray-500 to-[#041776]"
               >
                  <img
                     className="rounded-xl group-hover:opacity-10 h-[250px] object-cover w-full object-top"
                     loading="lazy"
                     src={project.img}
                     alt={project.title}
                  />
                  <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in-out duration-300">
                     <h3 className=" text-xl md:text-2xl font-bold text-white tracking-wider text-center">
                        {project.title}
                     </h3>
                     <p className=" text-sm md:text-lg text-white pb-4 pt-2 w-[300px]">
                        {project.subtitle}
                     </p>
                     <p className="text-white text-sm pb-4">{project.tech}</p>
                     <a href={project.preview}>
                        <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold inline-flex items-center justify-center gap-1 hover:bg-gray-300 hover:text-black">
                           <BiLink /> Vist Website
                        </p>
                     </a>
                  </div>
               </div>
            ))}
            <p className="text-center py-8 text-lg text-white">
                  <strong>Want to see more? Visit: </strong>
        <a
           href="https://github.com/sumanthvennela"
           className="text-white font-semibold underline"
           target="_blank"
           rel="noopener noreferrer"
        >
         <span className="mr-2">GitHub</span>
         
    </a>
          </p>
         </div>
      </div>
   );
};

export default Projects;

