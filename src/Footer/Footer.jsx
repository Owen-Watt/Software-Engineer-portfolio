import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <footer>
        <div className="socials">
            <a href="https://github.com/Owen-Watt" className = "footer-socials"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/owen-watt-b9334a227" className = "footer-socials"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="footer-copyright">© Copyright 2023 Owen Watt</div>
      </footer>
    </>
  );
}

export default Footer;