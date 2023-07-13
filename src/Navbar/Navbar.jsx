import { useEffect, React, useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

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
              <Link to="/" className= "navBar-title-mobile">&lt;/&gt; Owen</Link>
              <button className={showMenu ? 'icon open' : 'icon'} onClick={() => setShowMenu(!showMenu)}>
                <div className="menu-burger"></div>
              </button>  
          </div>
          <ul className={showMenu ? 'link-container links-open' : 'link-container links-closed'}>
            <li className={showMenu ? 'link' : 'link link-hidden'}><Link to="/" onClick={() => setShowMenu(!showMenu)}>Home</Link></li>
            <li className={showMenu ? 'link' : 'link link-hidden'} ><Link to="/about"onClick={() => setShowMenu(!showMenu)}>About</Link></li>
{/*             <li className={showMenu ? 'link' : 'link link-hidden'} ><a href="/assets/Owen_Watt_CV.pdf" onClick={() => setShowMenu(!showMenu)}>Resume</a></li> */}
            <li className={showMenu ? 'link' : 'link link-hidden'} ><Link to="/contact"onClick={() => setShowMenu(!showMenu)}>Contact</Link></li>
          </ul>
      </div>

      <div className = "navBar" style={desktop}>
          <div className="navBar-container">
              <Link to="/" className="navBar-title">&lt;/&gt; Owen Watt</Link>
              <ul>
                  <li><Link to="/" id = "navBar-links" >Home</Link></li>
                  <li><Link to="/about" id = "navBar-links">About</Link></li>
{/*                   <li><a href="/assets/Owen_Watt_CV.pdf" id = "navBar-links" >Resume</a></li> */}
                  <li><Link to="/contact" id = "navBar-links">Contact</Link></li>
              </ul>
          </div>
      </div>
    </>
  );
}

export default Navbar