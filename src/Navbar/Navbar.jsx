import { React } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
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