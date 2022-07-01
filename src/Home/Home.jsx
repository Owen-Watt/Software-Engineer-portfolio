import '../index.css';
import './Projects.css'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faFile, faGlobe, faFlag } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = "Home | Owen Watt"
  }, []);

  return (
    <>
      <div className = "explore">
        <div className = "name">Hi, I'm Owen Watt.</div>
          <div className = "home-links">
              <a href="https://github.com/Owen-Watt" className = "socials-btn"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="/#" className = "socials-btn"><FontAwesomeIcon icon={faFile} /></a>
              <a href="https://www.linkedin.com/in/owen-watt-b9334a227" className = "socials-btn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
    
          <button className = "view-work-button" onClick={homeToProjectScroll}>View Projects</button>  
      </div>
    
      <div className = "title-projects" id="projects-home">Projects</div>
      
      <div className="contentBack">
        <div className = "projects-container">
            <div className = "projects" id="discord">   
                <div className = "project-image-container">
                    <div className = "project-image">
                        <FontAwesomeIcon icon={faDiscord} />
                    </div> 
                </div>
                <div className = "project-title">Discord Bot</div>
                
                <div className = "project-text-container">
                    <div className = "project-text">A Discord bot with custom commands that utilises a database to keep track of statistics.</div>
                    <div className = "project-software-container">
                        <div className = "project-software" id="javascript">JavaScript</div>
                        <div className = "project-software" id="node">Node.js</div>
                        <div className = "project-software" id="mongo">MongoDB</div>
                    </div>
                    <div className = "project-buttons-container">
                        <a className = "project-buttons" href='https://github.com/Owen-Watt/discord-bot'>GitHub</a>
                    </div>
                </div>
            </div>
            <div className = "mobile-horizontal-line"></div>
            <div className = "projects" id="website">   
                <div className = "project-image-container">
                  <div className = "project-image">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                </div>
                <div className = "project-title">Portfolio Website</div>
                <div className = "project-text-container">
                    <div className = "project-text">Portfolio website made from scratch with React.js to display my portfolio.</div>
                    <div className = "project-software-container">
                        <div className = "project-software "id="html">HTML</div>
                        <div className = "project-software "id="css">CSS</div>
                        <div className = "project-software "id="react">React.js</div>
                </div>
                <div className = "project-buttons-container">
                  <a className = "project-buttons "href='https://github.com/Owen-Watt/Portfolio-website'>GitHub</a>
                </div>
              </div>
            </div>
            <div className = "mobile-horizontal-line"></div>
          </div>
          
          <div className = "projects-container">
            <div className = "projects" id="discord" style={{margin: "50px"}}>   
                <div className = "project-image-container">
                    <div className = "project-image">
                        <FontAwesomeIcon icon={faFlag} />
                    </div> 
                </div>
                <div className = "project-title">Title</div>
                
                <div className = "project-text-container">
                    <div className = "project-text">Description</div>
                    <div className = "project-software-container">
                        <div className ="project-software">software</div>
                        <div className ="project-software">software</div>
                        <div className ="project-software">software</div>
                    </div>
                    <div className = "project-buttons-container">
                        <a className = "project-buttons "href='https://github.com/Owen-Watt/'>GitHub</a>
                    </div>
                </div>
            </div>

            <div className = "mobile-horizontal-line"></div>

            <div className = "projects" id="discord">   
                <div className = "project-image-container">
                    <div className = "project-image">
                        <FontAwesomeIcon icon={faFlag} />
                    </div> 
                </div>
                <div className = "project-title">Title</div>
                
                <div className = "project-text-container">
                    <div className = "project-text">Description</div>
                    <div className = "project-software-container">
                        <div className ="project-software">software</div>
                        <div className ="project-software">software</div>
                        <div className ="project-software">software</div>
                    </div>
                    <div className = "project-buttons-container">
                        <a className = "project-buttons" href='https://github.com/Owen-Watt/'>GitHub<i className="fas-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
      <footer>© 2022 Owen Watt</footer>
    </>
  );
}

// scrolling found to projects with offset to finish scroll in better place
function homeToProjectScroll(){
  const yOffset = -50; 
  const element = document.getElementById('projects-home');
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}

export default Home;
