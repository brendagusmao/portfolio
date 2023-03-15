import React from 'react';
import { useContext } from 'react';
import MyContext from '../context/MyContext';
import { HiSun } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import '../styles/header.css'
import Logo from './Logo';
import { Maquina } from './maquinadeescrever';

function Header() {
   const { lightMode, setLightMode } = useContext(MyContext);

   const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }


  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  // onClick={scrollto}
  return  ( 
     <header className="container-fluid backgroundHeader">
      <nav className="container-fluid">
      <h1 id="title"> <Logo /></h1>
       <div className="navegation">
          <li><a href="#about" onClick={scrollto}><span>About</span></a></li>
          <li><a href="#skills"><span>Skills</span></a></li>
          <li><a href="#projects"><span>Projects</span></a></li>
          <li><a href="#contact"><span>Contact</span></a></li>
        </div>
        <div className="tgb" onClick={() => {setLightMode(!lightMode)}}>
            {
              lightMode ? <div className="tgg"><HiSun /></div>: 
              <div className="tgs"><BsFillMoonStarsFill /></div>
            }
        </div>
      </nav>
       <div className="gradient" />
        <div className="sidebar">
          <h2>
          Hello, World! i' am
          </h2>
          <h1><Maquina text="Brenda Gusmão" delay={1200} /></h1>
          <h3>developer 
          <div className="animated-info">
               <span className="animated-item">Full Stack</span>
               <span className="animated-item">Web</span>
               <span className="animated-item">software</span>
            </div>
             </h3>
          </div>
     </header>
  );
}
 
export default Header;