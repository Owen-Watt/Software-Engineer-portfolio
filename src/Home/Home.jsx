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

      <div className = "explore bg-slate-900 text-white">
       <div className = "name " data-aos="fade-down" data-aos-duration="1750">Hi, I'm Owen Watt.</div>
       <div className='text-xl mb-5'>Software Developer</div>
          <div className = "home-links">
              <a href="https://github.com/Owen-Watt" className = "socials-btn shadow-xl border text-white font-semibold hover:bg-slate-500" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/owen-watt-b9334a227" className = "socials-btn border shadow-xl font-semibold hover:bg-slate-500" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <Link to="projects-home" spy={true} smooth={true} offset={-70} duration={10} 
            className="view-work-button text-white border-white border font-semibold py-3 px-4 rounded-lg hover:bg-slate-500 shadow-xl"
            >View Projects</Link>  
      </div>
    
      
      <div className = "projects-wrapper bg-slate-900" id="projects-home">
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
            description="Displays a users Top Spotify tracks & artists. Allows users to create playlists with their top tracks."
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
