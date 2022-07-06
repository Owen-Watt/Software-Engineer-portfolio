import { useEffect, React, useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  if(showMenu){
    menu =
    <ul className="link-container">
      <li className="link home"><Link to="/" onClick={() => setShowMenu(!showMenu)}>Home</Link></li>
      <li className="link about" ><Link to="/about"onClick={() => setShowMenu(!showMenu)}>About</Link></li>
      <li className="link resume" ><Link to="/resume"onClick={() => setShowMenu(!showMenu)}>Resume</Link></li>
      <li className="link contact" ><Link to="/contact"onClick={() => setShowMenu(!showMenu)}>Contact</Link></li>
    </ul>
  }

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
          <div className={showMenu ? 'mobile-container navbar-open' : 'mobile-container'} id="mobileNavbar">
              <Link to="/" className= "navBar-title-mobile">&lt;/&gt; Owen</Link>
              <button className={showMenu ? 'icon open' : 'icon'} onClick={() => setShowMenu(!showMenu)}>
                <div className="menu-burger"></div>
              </button>  
          </div>
          { menu }
      </div>

      <div className = "navBar" id = "navBar">
          <div className="navBar-container">
              <Link to="/" className="navBar-title">&lt;/&gt; Owen Watt</Link>
              <ul>
                  <li><Link to="/" id = "navBar-links" >Home</Link></li>
                  <li><Link to="/about" id = "navBar-links">About</Link></li>
                  <li><Link to="/resume" id = "navBar-links">Resume</Link></li>
                  <li><Link to="/contact" id = "navBar-links">Contact</Link></li>
              </ul>
          </div>
      </div>
    </>
  );
}

export default Navbar