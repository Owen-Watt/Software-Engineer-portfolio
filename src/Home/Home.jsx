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
        <title className="">Home | Owen Watt</title>
      </Helmet>

      <div className = "explore bg-gradient-to-b from-white via-blue-100 to-blue-200">
       <div className = "name" data-aos="fade-down" data-aos-duration="1750">Hi, I'm Owen Watt.</div>
          <div className = "home-links">
              <a href="https://github.com/Owen-Watt" className = "socials-btn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
{/*               <a href="/assets/Owen_Watt_CV.pdf" className = "socials-btn"><FontAwesomeIcon icon={faFile} /></a> */}
              <a href="https://www.linkedin.com/in/owen-watt-b9334a227" className = "socials-btn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
    
          <Link to="projects-home" spy={true} smooth={true} offset={-70} duration={10} 
            className="view-work-button shadow-lg shadow-blue-900/50 rounded-lg bg-white border"
            >View Projects</Link>  
      </div>
    
      
      <div className = "projects-wrapper bg-gradient-to-b from-blue-200 via-blue-100 to-white" id="projects-home">
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
