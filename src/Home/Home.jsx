import '../index.css';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';

function Home() {

  return (
    <>
      <Helmet>
        <title>Home | Nestor Diaz</title>
      </Helmet>
      <Navbar></Navbar>
      <div className = "explore gap-10">
        <div className='text-center' /* data-aos="fade-down" data-aos-duration="1750" */>
          <div className = "name">Nestor Diaz</div>
          <div className = "name-subheader">Northern Virginia Real Estate Agent</div>
          <div className = "name-footer">Mo Wilson Properties, Inc.</div>
        </div>
          <div className = "home-links">
              <a href="https://www.instagram.com/nestordiaz_/" className = "socials-btn bg-neutral-100 bg-opacity-20 backdrop-blur" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.facebook.com/nestor.diaz.12" className = "socials-btn bg-neutral-100 bg-opacity-20 backdrop-blur" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://www.linkedin.com/in/nestor-diaz-8757aa1a7" className = "socials-btn bg-neutral-100 bg-opacity-20 backdrop-blur" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="mailto:diazna18@outlook.com" className = "socials-btn bg-neutral-100 bg-opacity-20 backdrop-blur" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
          {/* <img src={house} className=''></img> */}
          <div className='flex flex-row gap-10 pt-10 w-full items-center justify-center'>
            <div className='flex items-center justify-center'>
              <Link to="/communities" className="view-work-button bg-neutral-100 bg-opacity-20 backdrop-blur px-10">View Communities</Link>  
            </div>
            <div className='flex items-center justify-center'>
              <Link to="/about" className="view-work-button bg-neutral-100 bg-opacity-20 backdrop-blur px-10">View About Me</Link>  
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
