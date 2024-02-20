import '../index.css';
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  return (
    <>
      <div className="h-[55em] min-h-screen w-full flex items-center flex-col justify-center p-6 bg-white dark:bg-slate-900">
        <div className='w-full md:w-3/6 h-5/6 flex justify-center flex-col'>
          <div className="text-4xl font-mono font-bold tracking-tight dark:text-slate-200 sm:text-5xl" data-aos="fade-down" data-aos-duration="1750">Hi, I'm Owen Watt.</div>
          <div className='mt-3 text-lg font-medium tracking-tight dark:text-slate-200 sm:text-xl'>Computer Science Student</div>
          <div className='text-md md:text-xl my-4 md:my-6 dark:text-slate-300/90 font-sans w-5/6 md:w-[500px]'>
            I'm a 22 year old software engineer currently in my fourth, and final year studying Computer Science.
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Owen-Watt" className="dark:text-gray-300 dark:hover:text-white transition duration-200" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/owen-watt" className="dark:text-gray-300 dark:hover:text-white transition duration-200" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <Link to="projects" spy={true} smooth={true} offset={-120} duration={10}
            className="my-4 md:my-6 dark:text-orange-500 text-blue-600 dark:border-orange-500 border-blue-600 border font-semibold py-2 md:py-4 px-4 md:px-8 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500 transition duration-200 hover:cursor-pointer w-fit"
          >View Projects</Link>
        </div>
      </div>

      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;
