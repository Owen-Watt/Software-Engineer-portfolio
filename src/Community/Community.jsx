import './community.css'
import '../Home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Community({ description, title, demo, demoType, fade, image }) {
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
        <div className={`${isMobile ? "mobile-community" : `community`}`} data-aos={fade}>   
            <img src={image} className = "community-image"></img> 
            <div className = "community-title">{title}</div>
            <div className = "community-text-container">
                <div className = "community-text">{description}</div>
{/*                 <div className = "community-buttons-container">
                    <a className = "community-buttons" href={demo} target="_blank" rel="noreferrer">{demoType}</a>
                </div> */}
            </div>
        </div>
    </>
  );
}

export default Community;