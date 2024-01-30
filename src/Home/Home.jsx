import '../index.css';
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

function Home() {
  useEffect(() =>{
    Aos.init({ duration: 750 });
  } , []);

  return (
    <>
      <div className="h-[55em] min-h-screen  w-full flex items-center flex-col justify-center bg-slate-900 text-white p-6">
        <div className='w-full md:w-3/6 h-5/6 flex justify-center flex-col gap-5'>
          <div className="text-3xl md:text-7xl font-mono md:min-w-[450px]" data-aos="fade-down" data-aos-duration="1750">Hi, I'm Owen Watt.</div>
          <div className='text-md md:text-xl my-4 md:my-7 text-slate-300/90 font-sans w-full md:min-w-[500px]'>
          I'm a 22 year old software engineer currently in my fourth, and final year studying Computer Science. 
          </div>
          <Link to="projects" spy={true} smooth={true} offset={-120} duration={10} 
            className="text-orange-500 border-orange-500 border font-semibold py-2 md:py-4 px-4 md:px-8 rounded-lg hover:bg-slate-500 transition duration-200 hover:cursor-pointer w-fit"
            >View Projects</Link>  
        </div>
      </div>

      {/* <div className = "h-[55em] min-h-[100vh] w-full flex items-center flex-col justify-center bg-slate-900 text-white">
        <div className='w-3/6 h-5/6 flex justify-center flex-col gap-5'>
          <div className = "text-7xl font-mono" data-aos="fade-down" data-aos-duration="1750">Hi, I'm Owen Watt.</div>
          <div className='text-xl my-7 text-slate-300/90 font-sans w-3/6'>
            I'm a 22 year old software engineer currently in my fourth, and final year studying Computer Science. 
          </div>
        <Link to="projects" spy={true} smooth={true} offset={-120} duration={10} 
          className="text-orange-500 border-orange-500 border font-semibold py-4 px-8 rounded-lg hover:bg-slate-500 transition duration-200 hover:cursor-pointer w-fit transition duration-200"
          >View Projects</Link>  
        </div>
      </div> */}

      <Projects/>
      <Experience/>
      <Contact/>
    </>
  );
}

export default Home;
