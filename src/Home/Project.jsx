import '../index.css';
import './Project.css'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Projects(props) {
    useEffect(() =>{
        Aos.init({ duration: 750 });
    }, []);

    return (
    <>
        <div className = "projects" data-aos={props.fade}>   
            <div className = "project-image-container">
                <div className = "project-image">
                    <FontAwesomeIcon icon={props.icon} />
                </div> 
            </div>
            <div className = "project-title">{props.title}</div>
            <div className = "project-text-container">
                <div className = "project-text">{props.description}</div>
                <div className = "project-software-container">
                    <div className = "project-software">{props.software[0]}</div>
                    <div className = "project-software">{props.software[1]}</div>
                    <div className = "project-software">{props.software[2]}</div>
                </div>
                <div className = "project-buttons-container">
                    <button className = "project-buttons" href={props.github}>GitHub<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{marginLeft:"10px"}}/></button>
                </div>
            </div>
        </div>
    </>
  );
}

export default Projects;