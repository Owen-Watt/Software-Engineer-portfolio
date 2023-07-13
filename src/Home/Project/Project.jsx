import './Project.css'
import '../Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Projects({ icon, margin, description, title, software, github, demo, demoType, fade}) {
    useEffect(() =>{
        Aos.init({ duration: 750 });
    }, []);

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
        <div className={`${isMobile ? "mobile-projects" : `projects ${margin}`}`} data-aos={fade}>   
            <div className = "project-image-container">
                <div className = "project-image">
                    <FontAwesomeIcon icon={icon} />
                </div> 
            </div>
            <div className = "project-title">{title}</div>
            <div className = "project-text-container">
                <div className = "project-text">{description}</div>
                <div className = "project-software-container">
                    <div className = "project-software">{software[0]}</div>
                    <div className = "project-software">{software[1]}</div>
                    <div className = "project-software">{software[2]}</div>
                </div>
                <div className = "project-buttons-container">
                    {
                        github && 
                        <a className = "project-buttons" href={github}>
                            GitHub<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{marginLeft:"10px"}}/>
                        </a>
                    }
                    <a className = "project-buttons" href={demo} target="_blank" rel="noreferrer">{demoType} 
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{marginLeft:"10px"}}/>
                    </a>
                </div>
            </div>
        </div>
    </>
  );
}

export default Projects;