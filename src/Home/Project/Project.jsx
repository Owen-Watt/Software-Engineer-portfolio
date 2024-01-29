import './Project.css'
import '../Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Projects({ icon, margin, description, title, software, github, demo, demoType}) {


    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1100;
            // if not already in mobile mode, set it to mobile mode
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);
    
    return (
    <>
        <div className={`${isMobile ? "mobile-projects" : ``} transition duration-200 ease-in-out hover:bg-slate-800/70 hover:drop-shadow-lg  flex items-center justify-between flex-row p-12 w-4/6 text-white rounded-xl `}>   
            <div className = "project-image-container shadow-xl w-[160px]">
                <div className = "project-image">
                    <FontAwesomeIcon icon={icon} />
                </div> 
            </div>
            <div className = "flex items-left flex-col pl-12">
                <div className = "project-title">{title}</div>
                <div className = "min-h-[60px] text-left text-l text-slate-300 w-5/6">{description}</div>
                <div className = "flex  gap-3">
                    <div className = "flex items-center rounded-full px-3 py-1 text-m font-medium leading-5 text-orange-500 bg-orange-200/10">{software[0]}</div>
                    <div className = "flex items-center rounded-full px-3 py-1 text-m font-medium leading-5 text-orange-500 bg-orange-200/10">{software[1]}</div>
                    <div className = "flex items-center rounded-full px-3 py-1 text-m font-medium leading-5 text-orange-500 bg-orange-200/10">{software[2]}</div>
                </div>
            </div>
            <div className = "">
                    {
                        //github && 
                        <a className = "project-buttons" href={github}>
                            GitHub
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{marginLeft:"10px"}}/>
                        </a>
                    }
                    <a className = "project-buttons" href={demo} target="_blank" rel="noreferrer">
                        {demoType} 
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{marginLeft:"10px"}}/>
                    </a>
                </div>
        </div>
    </>
  );
}

export default Projects;