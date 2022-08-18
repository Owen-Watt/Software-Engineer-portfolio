import '../index.css';
import './Project.css'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faFile, faGlobe, faFlag } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import Project from './Project'

function Home() {

  return (
    <>
      <Helmet>
        <title>Home | Owen Watt</title>
      </Helmet>

      <div className = "explore">
        <div className = "name">Hi, I'm Owen Watt.</div>
          <div className = "home-links">
              <a href="https://github.com/Owen-Watt" className = "socials-btn"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="/#" className = "socials-btn"><FontAwesomeIcon icon={faFile} /></a>
              <a href="https://www.linkedin.com/in/owen-watt-b9334a227" className = "socials-btn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
    
          <Link to="projects-home" spy={true} smooth={true} offset={-10} duration={10} className = "view-work-button">View Projects</Link>  
      </div>
    
      <div className = "title-projects" id="projects-home">Projects</div>
      
      <div className = "projects-wrapper">
          <Project
            icon={faDiscord}
            title="Discord Bot"
            description="A Discord bot with custom commands that utilises a database to keep track of settings & statistics."
            software={["Javascript", "Node.js", "MongoDB"]}
            github='https://github.com/Owen-Watt/discord-bot'
            fade="fade-right"
            margin="mr-50"
          />

          <div className = "mobile-horizontal-line"></div>

          <Project
            icon={faGlobe}
            title="Portfolio Website"
            description="Portfolio website made from scratch with React.js to display my portfolio."
            software={["HTML", "CSS", "React"]}
            github='https://github.com/Owen-Watt/Portfolio-website'
            fade="fade-left"
            margin="ml-50"
          />

          <div className = "mobile-horizontal-line"></div>

          <Project
            icon={faFlag}
            title="Title"
            description="Description"
            software={["software", "software", "software"]}
            github='https://github.com/Owen-Watt/'
            fade="fade-right"
            margin="mr-50"
          />

          <div className = "mobile-horizontal-line"></div>

          <Project
            icon={faFlag}
            title="Title"
            description="Description"
            software={["software", "software", "software"]}
            github='https://github.com/Owen-Watt/'
            fade="fade-left"
            margin="ml-50"
          />
      </div>
      <footer>© 2022 Owen Watt</footer>
    </>
  );
}

export default Home;
