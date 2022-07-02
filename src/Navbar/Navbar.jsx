import { useEffect, React } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  useEffect(() => {

    const onScroll = () => {
      var navBar = document.getElementById("navBar");
      var mobilenavbar = document.getElementById("mobileNavbar");

      /* change the height, font colour and shadow of navbar once scrolled */
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navBar.style.height = "4em";
        navBar.style.boxShadow = "0 2px 5px rgb(0 0 0 / 0.2)";
        mobilenavbar.style.height = "3em";
        mobilenavbar.style.boxShadow = "0 2px 5px rgb(0 0 0 / 0.2)";
      } else {
        navBar.style.height = "7em";
        navBar.style.boxShadow = "0 0px 0px rgb(0 0 0 / 0.0)";
        mobilenavbar.style.height = "4em";
        mobilenavbar.style.boxShadow = "0 0px 0px rgb(0 0 0 / 0.0)";
      }
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="navMenu">
          <div className="mobile-container" id="mobileNavbar">
              <Link to="/" className= "navBar-title-mobile">&lt;/&gt; Owen</Link>
              <button className="icon" onClick={burgerMenu}>
                <FontAwesomeIcon icon={faBars} />
              </button>  
          </div>
          <div id="myLinks">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/resume">Contact</Link>
              <Link to="/contact">Resume</Link>
          </div>
      </div>

      <div className = "navBar" id = "navBar">
          <div className="navBar-container">
              <Link to="/" className="navBar-title">&lt;/&gt; Owen Watt</Link>
              <ul>
                  <li><Link to="/" id = "navBar-links">Home</Link></li>
                  <li><Link to="/about" id = "navBar-links">About</Link></li>
                  <li><Link to="/resume" id = "navBar-links">Resume</Link></li>
                  <li><Link to="/contact" id = "navBar-links">Contact</Link></li>
              </ul>
          </div>
      </div>
    </>
  );
}

// function for dropdown menu on mobile
function burgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

export default Navbar