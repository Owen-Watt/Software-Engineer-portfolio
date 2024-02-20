import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons for dark and light mode

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const navLinkStyle = "text-[1.1em] transition duration-300 py-2 px-5 border border-transparent rounded-md dark:hover:text-orange-500 dark:hover:border-orange-500 hover:text-blue-500 hover:border-blue-500"

  return (
    <>
      <div className="m-0 p-0 z-1 fixed w-full h-[6em] flex items-center justify-center bg-white dark:bg-slate-900 dark:shadow-xl shadow-lg z-50">
        <div className="height-7/10 flex items-center justify-between pr-[50px] w-full text-gray-800 inset-0 rounded-lg backdrop-blur-md p-2 transition duration-300">
          <HashLink smooth to="/#" className="text-[1.4em] select-none px-10 font-semibold text-black dark:text-white">Owen Watt.</HashLink>
          <ul className='justify-between items-center text-black dark:text-white gap-4 hidden md:flex'>
            <li><HashLink smooth to="/#" className={navLinkStyle} >Home</HashLink></li>
            <li><HashLink smooth to="/#projects" scroll={el => scrollWidthOffset(el)} className={navLinkStyle}>Projects</HashLink></li>
            <li><HashLink smooth to="/#experience" scroll={el => scrollWidthOffset(el)} className={navLinkStyle}>Experience</HashLink></li>
            <li><HashLink smooth to="/#contact" scroll={el => scrollWidthOffset(el)} className={navLinkStyle}>Contact</HashLink></li>
            <li>
              <button onClick={toggleDarkMode} className="text-[1.1em] py-2 px-5 transition duration-300">
                {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon />}
              </button>
            </li>
          </ul>
          <button onClick={toggleDarkMode} className="text-[1.3em] py-2 px-5 transition duration-300 md:hidden flex">
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon />}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

