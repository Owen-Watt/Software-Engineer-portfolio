import { useEffect, React, useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 10) {
              setShowShadow(true);
          } else {
              setShowShadow(false);
          }
      };

      // Add event listener
      window.addEventListener('scroll', handleScroll);

      // Clean up
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
      <div className="navMenu">
          <div className={showMenu ? 'mobile-container navbar-open' : 'mobile-container navbar-closed'}  >
              <Link to="/" className= "navBar-title-mobile">Owen</Link>
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

      <div className = "navBar" >
          <div className={`${showShadow ? 'shadow-md' : 'bg-[rgba(242,242,242,1)]'} navBar-container inset-0 border border-white bg-white bg-opacity-90 rounded-lg backdrop-blur-md p-2 transition duration-300`}>
              <Link to="/" className="navBar-title border-r pr-10">Owen Watt.</Link>
              <ul >
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