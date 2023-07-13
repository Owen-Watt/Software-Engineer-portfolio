import './Project.css'
import '../Home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Projects({ page, icon, margin, description, title, software, github, demo, demoType, fade, image}) {
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
        <Link to={page} className={`${isMobile ? "mobile-projects" : `projects ${margin}`}`} data-aos={fade}>   
            <img src={image} className = "project-image-container"></img>
            <div className = "project-title">{title}</div>
        </Link>
    </>
  );
}

export default Projects;