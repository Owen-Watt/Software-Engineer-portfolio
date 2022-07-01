import '../index.css';
import './About.css';
import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "About | Owen Watt"
  }, []);
  
  return (
    <>
    <div className = "about-contentBack">

    </div>
    
    </>
  );
}

export default About;