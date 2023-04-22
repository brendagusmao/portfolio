import React, { useContext,useState, useEffect } from 'react';
import MyContext from '../context/MyContext';
import { HiSun } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import '../styles/header.css'
import Logo from '../components/Logo';
function Navbar() {
  const { lightMode, setLightMode } = useContext(MyContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // const navbar = document.getElementById('navegation');
      if (window.scrollY > 100 && !isScrolled) {
        setIsScrolled(true);
        // navbar.classList.add('scrolled');
      } else if (window.scrollY <= 100 && isScrolled) {
        setIsScrolled(false);
        // navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('load', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  function scrollto({target}) {
    const links = Array.from(document.getElementsByClassName('scrollto'));
    links.forEach((link) => link.classList.remove('Selected'));
    target.classList.add('Selected');
}
  return (
    <nav className={isScrolled ? 'container-fluid navcolor' : 'container-fluid'}>
      <h1 id="title"> <Logo /></h1>
    <div className="navegation">
       <li><a href="#home"  onClick={(evt) =>  {scrollto({target: evt.target})}} className="scrollto active">home</a></li>
       <a href="#about" onClick={(evt) =>  {scrollto({target: evt.target})}} className="scrollto">About</a>
          <li><a href="#projects" onClick={(evt) =>  {scrollto({target: evt.target})}} className="scrollto">Projects</a></li>
          <li><a href="#contact" onClick={(evt) =>  {scrollto({target: evt.target})}} className="scrollto">Contact</a></li>
    </div>
    <div className="tgb" onClick={() => {setLightMode(!lightMode)}}>
            {
              lightMode ? <div className="tgg"><HiSun /></div>: 
              <div className="tgs"><BsFillMoonStarsFill /></div>
            }
        </div>
    </nav>
  );
}

export default Navbar;