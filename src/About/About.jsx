import './About.css';
import { Helmet } from "react-helmet";
import Skill from "./Skill/Skill"

function About() {

  return (
    <>
      <Helmet>
        <title>About | Owen Watt</title>
      </Helmet>

      <div className="about-contentBack bg-[rgba(232,232,232,1)]">
        <div className="about-container">
          <div className="title">About</div>
          <div className="description">
          I am a 22-year-old in my final year studying computer science at Maynooth University, Ireland. 
          <br></br>
          I have 6 months experience as a Software Development Intern at Amazon Web Services (AWS).
          </div>
        </div>
        <div className='mt-10 w-[400px] h-[100px] rounded-lg p-2 flex items-center justify-between'>
            <div className='w-[50%] h-full  rounded-md flex flex-col justify-between px-7'>
              <span className='text-xs uppercase'>Projects</span>
              <div className='flex justify-between items-end flex-grow gap-3'>
                <span className='text-6xl font-light'>4</span>
                <span className='text-xl uppercase'>Projects</span>
              </div>
            </div>
            <div  className='w-[50%] h-full rounded-md flex flex-col justify-between px-7'>
              <span className='text-xs uppercase'>Intern Experience</span>
              <div className='flex justify-between items-end flex-grow gap-3'>
                <span className='text-6xl font-light'>6</span>
                <span className='text-xl uppercase'>Months</span>
              </div>
            </div>
          </div>
        <div className="about-container">
          <div className="title">Skills</div>
          <div className="skills-wrapper shadow-xl rounded-3xl">
            <Skill name="HTML"></Skill>
            <Skill name="CSS"></Skill>
            <Skill name="Javascript"></Skill>
            <Skill name="Java"></Skill>
            <Skill name="React"></Skill>
          </div>
          <div className="skills-wrapper shadow-xl rounded-3xl">
            <Skill name="PostgreSQL"></Skill>
            <Skill name="mongoDB"></Skill>
            <Skill name="Heroku"></Skill>
            <Skill name="Node"></Skill>
          </div>    
        </div>
      </div>
    </>
  );
}

export default About;