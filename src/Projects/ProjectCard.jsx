import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ icon, description, title, software, github, demo, demoType, stats}) {


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
        <div className={`${isMobile ? "mobile-projects" : ``} flex items-center justify-between w-4/6 p-10 text-white hover:bg-slate-800/70 rounded-xl transition duration-200 ease-in-out hover:drop-shadow-lg`}>   
            {/* Project Image */}
            <div className="project-image-container shadow-xl w-[160px]">
                <div className="project-image">
                    <FontAwesomeIcon icon={icon} />
                </div> 
            </div>

            {/* Project Details */}
            <div className="flex-1 flex items-start justify-start flex-col gap-2 ml-4">
                <div className="font-medium text-xl">{title}</div>
                <div className="text-left text-lg text-slate-300/80">{description}</div>
                {/* Additional stats */}
                {stats &&
                    <div className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={icon} />
                        {stats}
                    </div>
                }
                {/* Software tags */}
                <div className="flex gap-3 mt-3">
                    {software.map((s) => {
                        return <div key={s} className="flex items-center rounded-full px-3 py-1 text-orange-500 bg-orange-200/10">{s}</div>
                    })}
                </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5">
                <a href={github} className='hover:cursor-pointer'>
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>
                <a href={demo} className='hover:cursor-pointer' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLink} size="xl" />
                </a>
            </div>
        </div>
    </>
  );
}

export default ProjectCard;