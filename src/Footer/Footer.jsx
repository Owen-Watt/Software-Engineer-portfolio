import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <footer>
        <div className="socials">
            <a href="https://www.instagram.com/nestordiaz_/" className = "footer-socials" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a href="https://www.facebook.com/nestor.diaz.12" className = "footer-socials" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="https://www.linkedin.com/in/nestor-diaz-8757aa1a7" className = "footer-socials" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="footer-copyright">© Copyright 2023 Nestor Diaz</div>
      </footer>
    </>
  );
}

export default Footer;