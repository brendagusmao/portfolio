import React from 'react';
import { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import { HiSun } from "react-icons/hi";
import { BsFillMoonStarsFill, BsFillGridFill, BsChevronContract } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import '../styles/header.css'
import Logo from '../components/Logo';
import Redes from '../components/Redes';
import ScrollArrow from '../components/Scrolltop';

function Header() {
   const { lightMode, setLightMode } = useContext(MyContext);
   const [menuState, setMenuState] = useState('closed');

   function toggleMenu() {
     setMenuState(menuState === 'closed' ? 'open' : 'closed');
   }
 
   useEffect(() => {
     const nav = document.querySelector('.toggle');
 
     if (menuState === 'open') {
       nav.style.display = 'flex';
     } else {
       nav.style.display = 'none';
     }
   }, [menuState]);

  const scrollto = () => {
    const nav = document.querySelector('.navegation');
          nav.classList.add('active');
          window.scrollTo({
            behavior: 'smooth'
          })
  }
  
  // onClick={scrollto}
  return  ( 
     <header className="container-fluid backgroundHeader" id="home">
      <div className="overlay" />
        <div onClick={toggleMenu} className="buttontoggle">
            {menuState === 'closed' ? <BsFillGridFill className='hamburger' /> : <BsChevronContract className='hamburger' />}
        </div>
          {/* Menu Moblie */}
          <div className="toggle">
            <ul>
            <li><SiAboutdotme className="icontoggle" /><a onClick={toggleMenu} href="#home">home</a></li>
            <li><SiAboutdotme className="icontoggle" /><a onClick={toggleMenu} href="#about">sobre</a></li>
            <li><RiPagesFill className="icontoggle" /><a onClick={toggleMenu} href="#projects">projetos</a></li>
            <li><MdPermContactCalendar className="icontoggle" /><a onClick={toggleMenu} href="#contact">contato</a></li>
            </ul>
          </div>
          {/* Menu Moblie */}
      <nav className="container-fluid">
      <h1 id="title"> <Logo /></h1>
       <div className="navegation">
       <li><a href="#home" onClick={scrollto} className="scrollto active"><span>home</span></a></li>
          <li><a href="#about" onClick={scrollto} className="scrollto"><span>About</span></a></li>
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
          <h1>Brenda Gusmão</h1>
          <h3>developer 
            <div className="animated-info">
               <span className="animated-item">Full Stack</span>
               <span className="animated-item">Web</span>
               <span className="animated-item"></span>
            </div>
          </h3>
          <Redes />
        </div>
      <ScrollArrow />
     </header>
  );
}
 
export default Header;