import '../index.css';
import './Project.css'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projects(props) {
  return (
    <>
        <div className = "projects">   
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
                    <a className = "project-buttons" href={props.github}>GitHub</a>
                </div>
            </div>
        </div>
    </>
  );
}

export default Projects;