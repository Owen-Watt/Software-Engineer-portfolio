import './About.css';
import { Helmet } from "react-helmet";
import nestor from "../Nestor-Diaz.png"

function About() {  
  return (
    <>
      <Helmet>
        <title>About | Nestor Diaz</title>
      </Helmet>

      <div className="about-contentBack">
        <div className="about-container">
          <div className="title">About Me</div>
          <div className="description">
          Born in El Salvador and migrated to the U.S when I was only 7yrs old. I was taught to work hard for what you want in life. 
          At the age of 19 I purchased my first home and now at the age of 22 I will be purchasing my 2nd home. 
          I can help you achieve the American Dream just as I have. If you want a hard-working bilingual agent look no further.
          </div>
        </div>
        <img src={nestor} className="about-image rounded-xl" alt="Nestor Diaz" />
      </div>
    </>
  );
}

export default About;