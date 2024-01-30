import { React, useState } from 'react';
import { Link } from "react-scroll";
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
      <div className="fixed z-1 height-[5rem] block w-full bg-slate-900">
          <div className={showMenu ? ' navbar-open' : ' navbar-closed' + " shadow-xl w-full h-[5rem] flex justify-between items-center text-white text-xl"}  >
              <Link to="/" className= "h-fit px-8 flex items-center">Owen Watt</Link>
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

      <div className = "navBar bg-slate-900 shadow-xl" >
          <div className={`navBar-container w-full  text-gray-800 inset-0  rounded-lg backdrop-blur-md p-2 transition duration-300`}>
              <HashLink smooth to="/#" className="navBar-title px-10 font-semibold text-white">Owen Watt.</HashLink>
              <ul className='text-white gap-4'>
                  <li><HashLink smooth to="/#" className='text-[1.1em] transition duration-300 py-2 px-5 border border-transparent rounded-md hover:text-orange-500 hover:border-orange-500 hover:cu' >Home</HashLink></li>
                  <li><HashLink smooth to="/#projects" scroll={el => scrollWidthOffset(el)} className = "text-[1.1em] transition duration-300 py-2 px-5 border border-transparent rounded-md hover:text-orange-500 hover:border-orange-500">Projects</HashLink></li>
                  <li><HashLink smooth to="/#experience" scroll={el => scrollWidthOffset(el)}className = "text-[1.1em] transition duration-300 py-2 px-5 border border-transparent rounded-md hover:text-orange-500 hover:border-orange-500">Experience</HashLink></li>
                  <li><HashLink smooth to="/#contact" scroll={el => scrollWidthOffset(el)} className = "text-[1.1em] transition duration-300 py-2 px-5 border border-transparent rounded-md hover:text-orange-500 hover:border-orange-500">Contact</HashLink></li>
                  
              </ul>
          </div>
      </div>
    </> //  
  );
}

export default Navbar