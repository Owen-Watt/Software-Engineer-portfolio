import './About.css';
import { Helmet } from "react-helmet";
import Skill from "./Skill/Skill"

function About() {

  
  return (
    <>
      <Helmet>
        <title>About | Owen Watt</title>
      </Helmet>

      <div className="about-contentBack">
        <div className="about-container">
          <div className="title">About</div>
          <div className="description">
          I am a 21-year-old college student enrolled at Maynooth University 
          in Ireland where I am currently in my third year of computer science and software engineering.
          </div>
        </div>

        <div className="about-container">
          <div className="title">Skills</div>
          <div className="skills-wrapper">
            <Skill name="HTML"></Skill>
            <Skill name="CSS"></Skill>
            <Skill name="Javascript"></Skill>
            <Skill name="Java"></Skill>
            <Skill name="React"></Skill>
          </div>
          <div className="skills-wrapper">
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