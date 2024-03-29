import '../index.css';
import {  faDiscord } from '@fortawesome/free-brands-svg-icons'
import ProjectCard from './ProjectCard'


function Projects() {


  return (
    <>
      <div className = "flex flex-col bg-white dark:bg-slate-900 items-center justify-center pb-20" id="projects">
        <div className="dark:text-white w-5/6 lg:w-4/6 px-2 pb-4 mb-12 text-4xl font-medium border-b font-mono">Projects</div>
          <ProjectCard
              imageName = "fyp.png"
              title="Project Allocation System - Final Year Project"
              description="A full-stack web application that optimizes the project allocation system for students by using a modified Gale-Shapley algorithm, based on users top five preferences.
              It combines Java SpringBoot for secure backend processes and React.js for a responsive user interface."
              software={["Java", "SpringBoot", "React.js", "JWT", "MongoDB", "Gale-Shapley algorithm"]}
            />
          <ProjectCard
            imageName = "discordbot.png"
            title="Discord Bot"
            description="A Discord bot with custom commands that utilises a database to keep track of settings & statistics. Users can set custom messages to send on events such as new members joining or leaving. "
            software={["Discord.js", "Node.js", "MongoDB", "Heroku"]}
            github='https://github.com/Owen-Watt/Discord-Bot'
            demo="https://tokyobot.xyz"
            demoType="Website"
            stats="370+ Servers"
            icon={faDiscord}
          />

          <ProjectCard
            imageName = "home.PNG"
            title="Software Engineer Portfolio Website"
            description="Portfolio website made from scratch with React.js and Tailwind CSS to display everything about me as a portfolio. "
            software={["HTML", "Tailwind CSS", "React.js", "Netlify"]}
            github='https://github.com/Owen-Watt/Software-Engineer-portfolio'
            demo="https://owenwatt.dev"
            demoType="Website"
          />

          <ProjectCard
            imageName = "toptracklist.png"
            title="Spotify Statistics"
            description="A web application that displays a users top tracks and artists on Spotify in the selected time frame. 
            Can create create playlists for the users with their most listened to tracks in the click of a button. 
            Currently emails need to be whitelisted to use this though."
            software={["Spotify API", "Tailwind CSS", "React.js", "Netlify"]}
            /* github='https://github.com/Owen-Watt/' */
            demo="https://toptracklist.com"
            demoType="Website"
          />

      </div>
    </>
  );
}

export default Projects;
