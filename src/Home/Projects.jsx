import '../index.css';
import './Home.css'
import {  faDiscord, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faCloud } from '@fortawesome/free-solid-svg-icons'
import Project from './Project/Project'


function Projects() {


  return (
    <>
      <div className = "flex flex-col bg-slate-900 items-center justify-center" id="projects-home">
          <Project
            icon={faDiscord}
            title="Discord Bot"
            description="A Discord bot with custom commands that utilises a database to keep track of settings & statistics."
            software={["Discord.js", "Node.js", "MongoDB", "Heroku"]}
/*             github='https://github.com/Owen-Watt/discord-bot' */
            fade="fade-right"
            margin="mr-50"
            demo="https://tokyobot.xyz"
            demoType="Website"
            stats="340+ Servers"
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

export default Projects;
