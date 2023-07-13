import { useEffect, React, useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { faHomeLgAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [desktop, setDesktop] = useState({});
  const [mobile, setMobile] = useState({});

   useEffect(() => {
    const onScroll = () => {
      // adding the shadow below the navbar if we scroll
      if (window.scrollY > 10) {
        setDesktop({
          height: "4em",
          boxShadow: "0 2px 5px rgb(0 0 0 / 0.2)"
        })
        setMobile({
          height: "3em",
          boxShadow: "0 2px 5px rgb(0 0 0 / 0.2)"
        })
      } else {
        setDesktop({
          height: "6em",
          boxShadow: "0 0px 0px rgb(0 0 0 / 0.0)"
        })
        setMobile({
          height: "4em",
          boxShadow: "0 0px 0px rgb(0 0 0 / 0.0)"
        })
      }
    };
    // cleanup code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []); 

  return (
    <>
      <div className="navMenu">
          <div className={showMenu ? 'mobile-container navbar-open' : 'mobile-container navbar-closed'}  style={mobile}>
              <Link to="/" className= "navBar-title-mobile">Nestor Diaz</Link>
              <button className={showMenu ? 'icon open' : 'icon'} onClick={() => setShowMenu(!showMenu)}>
                <div className="menu-burger"></div>
              </button>  
          </div>
          <ul className={showMenu ? 'link-container links-open' : 'link-container links-closed'}>
            <li className={showMenu ? 'link' : 'link link-hidden'}><Link to="/" onClick={() => setShowMenu(!showMenu)}>Home</Link></li>
            <li className={showMenu ? 'link' : 'link link-hidden'} ><Link to="/communities" onClick={() => setShowMenu(!showMenu)}>Communities</Link></li>
            <li className={showMenu ? 'link' : 'link link-hidden'} ><Link to="/about" onClick={() => setShowMenu(!showMenu)}>About Me</Link></li>
          </ul>
      </div>

      <div className = "navBar bg-neutral-100 bg-opacity-20 backdrop-blur" style={desktop}>
          <div className="navBar-container">
              <Link to="/" className="navBar-title"><FontAwesomeIcon icon={faHomeLgAlt} />Nestor Diaz</Link>
              <ul>
                  <li><Link to="/" id = "navBar-links">Home</Link></li>
                  <li><Link to="/communities" id = "navBar-links">Communities</Link></li>
                  <li><Link to="/about" id = "navBar-links">About Me</Link></li>
              </ul>
          </div>
      </div>
    </>
  );
}

export default Navbar