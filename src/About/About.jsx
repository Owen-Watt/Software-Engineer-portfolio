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
            I am a 20 year old college student in my 3rd year studying 
            Computer Science & Software engineering at Maynooth University, Ireland.<br></br>

            <br></br>
            I am looking for an internship from late January to August (6 months).
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