import '../index.css';
import './Home.css'
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Projects from './Projects';

function Home() {
  useEffect(() =>{
    Aos.init({ duration: 750 });
  } , []);

  return (
    <>
      <Helmet>
        <title className="">Owen Watt</title>
      </Helmet>

      <div className = "explore bg-slate-900 text-white">
        <div className='w-3/6 h-5/6 flex justify-center flex-col gap-5'>
          <div className = "text-7xl font-mono" data-aos="fade-down" data-aos-duration="1750">Hi, I'm Owen Watt.</div>
          <div className='text-xl my-7 text-slate-300/90 font-sans w-3/6'>
            I'm a 22 year old software engineer currently in my fourth, and final year studying Computer Science. 
          </div>
          {/* <div className = "home-links">
            <a href="https://github.com/Owen-Watt" className = "socials-btn shadow-xl border text-white font-semibold hover:bg-slate-500" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/owen-watt-b9334a227" className = "socials-btn border shadow-xl font-semibold hover:bg-slate-500" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div> */}
        <Link to="projects-home" spy={true} smooth={true} offset={-70} duration={10} 
          className="text-orange-500 border-orange-500 border font-semibold py-4 px-8 rounded-lg hover:bg-slate-500 shadow-xl hover:cursor-pointer w-fit"
          >View Projects</Link>  
        </div>
      </div>

      <Projects/>
    </>
  );
}

export default Home;
