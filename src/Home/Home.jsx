import '../index.css';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faDiscord, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faCloud } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import Project from './Project/Project'

function Home() {

  return (
    <>
      <Helmet>
        <title>Home | Owen Watt</title>
      </Helmet>

      <div className = "explore">
      <svg className="svg-wave" style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 90" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="#212529" offset="0%"></stop><stop stopColor="#212529" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,33L30,33C60,33,120,33,180,29.3C240,26,300,18,360,18.3C420,18,480,26,540,38.5C600,51,660,70,720,69.7C780,70,840,51,900,47.7C960,44,1020,55,1080,56.8C1140,59,1200,51,1260,44C1320,37,1380,29,1440,22C1500,15,1560,7,1620,11C1680,15,1740,29,1800,38.5C1860,48,1920,51,1980,53.2C2040,55,2100,55,2160,51.3C2220,48,2280,40,2340,40.3C2400,40,2460,48,2520,51.3C2580,55,2640,55,2700,49.5C2760,44,2820,33,2880,40.3C2940,48,3000,73,3060,73.3C3120,73,3180,48,3240,45.8C3300,44,3360,66,3420,77C3480,88,3540,88,3600,88C3660,88,3720,88,3780,84.3C3840,81,3900,73,3960,69.7C4020,66,4080,66,4140,66C4200,66,4260,66,4290,66L4320,66L4320,110L4290,110C4260,110,4200,110,4140,110C4080,110,4020,110,3960,110C3900,110,3840,110,3780,110C3720,110,3660,110,3600,110C3540,110,3480,110,3420,110C3360,110,3300,110,3240,110C3180,110,3120,110,3060,110C3000,110,2940,110,2880,110C2820,110,2760,110,2700,110C2640,110,2580,110,2520,110C2460,110,2400,110,2340,110C2280,110,2220,110,2160,110C2100,110,2040,110,1980,110C1920,110,1860,110,1800,110C1740,110,1680,110,1620,110C1560,110,1500,110,1440,110C1380,110,1320,110,1260,110C1200,110,1140,110,1080,110C1020,110,960,110,900,110C840,110,780,110,720,110C660,110,600,110,540,110C480,110,420,110,360,110C300,110,240,110,180,110C120,110,60,110,30,110L0,110Z"></path></svg>
        <div className = "name" data-aos="fade-down" data-aos-duration="1750">Hi, I'm Owen Watt.</div>
          <div className = "home-links">
              <a href="https://github.com/Owen-Watt" className = "socials-btn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
{/*               <a href="/assets/Owen_Watt_CV.pdf" className = "socials-btn"><FontAwesomeIcon icon={faFile} /></a> */}
              <a href="https://www.linkedin.com/in/owen-watt-b9334a227" className = "socials-btn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
    
          <Link to="projects-home" spy={true} smooth={true} offset={-70} duration={10} className="view-work-button">View Projects</Link>  
      </div>
    
      <div className = "title-projects" id="projects-home"><strong>PROJECTS</strong></div>
      
      <div className = "projects-wrapper">
          <Project
            icon={faDiscord}
            title="Discord Bot"
            description="A Discord bot with custom commands that utilises a database to keep track of settings & statistics."
            software={["Discord.js", "Node.js", "MongoDB"]}
/*             github='https://github.com/Owen-Watt/discord-bot' */
            fade="fade-right"
            margin="mr-50"
            demo="https://tokyobot.xyz"
            demoType="Website"
          />

          <div className = "mobile-horizontal-line"></div>

          <Project
            icon={faSpotify}
            title="Spotify Statistics"
            description="Displays a users Top Spotify tracks & artists. Allows users to create playlists with their top tracks. Currently need to be whitelisted to use."
            software={["Spotify API", "Tailwind CSS", "React.js"]}
/*             github='https://github.com/Owen-Watt/Portfolio-website' */
            fade="fade-left"
            margin="ml-50"
            demo="https://toptracklist.com"
            demoType="Website"
          />

          <div className = "mobile-horizontal-line"></div>

          <Project
            icon={faCloud}
            title="Discord Bot Website"
            description="Displays useful information about the bot & display data from an API."
            software={["HTML", "CSS", "React.js"]}
/*             github='https://github.com/Owen-Watt/Discord-bot-website' */
            fade="fade-right"
            margin="mr-50"
            demo="https://tokyobot.xyz"
            demoType="Website"
          />

          <div className = "mobile-horizontal-line"></div>

          <Project
            icon={faHouse}
            title="Portfolio Website"
            description="Portfolio website made from scratch with React.js to display my portfolio."
            software={["HTML", "CSS", "React.js"]}
/*             github='https://github.com/Owen-Watt/Portfolio-website' */
            fade="fade-left"
            margin="ml-50"
            demo="https://owenwatt.dev"
            demoType="Website"
          />
      </div>
    </>
  );
}

export default Home;
