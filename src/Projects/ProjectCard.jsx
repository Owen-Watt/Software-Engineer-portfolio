import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "aos/dist/aos.css";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ imageName, description, title, software, github, demo, demoType, stats, icon }) {

    return (
        <>
            <div className="flex flex-col md:flex-row items-start w-full lg:w-4/6 py-10 px-5 lg:p-10 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-slate-800/70 rounded-md transition duration-200 hover:drop-shadow-lg">
                {/* Project Image */}
                <div className="rounded border-2 max-w-[175px] border-slate-200/10 transition sm:col-span-2 sm:translate-y-1 sm-1 hidden lg:block">
                    <img alt="display of the project" src={`/images/${imageName}`} />
                </div>

                {/* Project Details */}
                <div className="flex-1 flex items-start justify-start flex-col gap-2 ml-4">
                    <div className="font-medium text-xl">{title}</div>
                    <div className="text-left text-lg dark:text-slate-300/80 w-full md:w-11/12 ">{description}</div>
                    {/* Additional stats */}
                    {stats &&
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={icon} />
                            {stats}
                        </div>
                    }
                    {/* Software tags */}
                    <div className="flex gap-3 mt-3 flex-wrap">
                        {software.map((s) => {
                            return <div key={s} className="flex items-center rounded-full px-3 py-1 text-blue-800 bg-blue-100 dark:text-orange-500  dark:bg-orange-200/10">{s}</div>
                        })}
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-row md:flex-col pt-6 md:p-0 w-full md:w-fit justify-center gap-5 md:h-[140px]">
                    {
                        github &&
                        <a href={github} className='hover:cursor-pointer'>
                            <FontAwesomeIcon icon={faGithub} size="2xl" />
                        </a>
                    }
                    <a href={demo} className='hover:cursor-pointer' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLink} size="xl" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;