import '../index.css';
import {  faDiscord, faSpotify, faWebflow } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faCloud } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from './ProjectCard'


function Projects() {


  return (
    <>
      <div className = "flex flex-col bg-slate-900 items-center justify-center pb-20" id="projects">
        <div className="text-white w-4/6 px-2 pb-4 text-4xl font-medium border-b font-mono">Projects</div>
          <ProjectCard
            icon={faDiscord}
            title="Discord Bot"
            description="A Discord bot with custom commands that utilises a database to keep track of settings & statistics."
            software={["Discord.js", "Node.js", "MongoDB", "Heroku"]}
            github='https://github.com/Owen-Watt/discord-bot'
            fade="fade-right"
            margin="mr-50"
            demo="https://tokyobot.xyz"
            demoType="Website"
            stats="340+ Servers"
          />

          <div className = "mobile-horizontal-line"></div>

          <ProjectCard
            icon={faCloud}
            title="Software Engineer Portfolio Website"
            description="Portfolio website made from scratch with React.js to display my portfolio."
            software={["HTML", "Tailwind CSS", "React.js"]}
            github='https://github.com/Owen-Watt/Portfolio-website'
            fade="fade-left"
            margin="ml-50"
            demo="https://owenwatt.dev"
            demoType="Website"
          />
          <div className = "mobile-horizontal-line"></div>

          <ProjectCard
            icon={faSpotify}
            title="Spotify Statistics"
            description="Displays a users Top Spotify tracks & artists. Allows users to create playlists with their top tracks."
            software={["Spotify API", "Tailwind CSS", "React.js"]}
            github='https://github.com/Owen-Watt/Portfolio-website'
            fade="fade-left"
            margin="ml-50"
            demo="https://toptracklist.com"
            demoType="Website"
          />

      </div>
    </>
  );
}

export default Projects;
