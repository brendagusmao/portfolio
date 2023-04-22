import React from 'react';
import '../styles/header.css'
import ToggleMenu from '../components/Togglemenu';
import NavBar from '../components/Nav';
import Redes from '../components/Redes';
import ScrollArrow from '../components/Scrolltop';

function Header() {
  return  ( 
     <header className="container-fluid backgroundHeader" id="home">
      <div className="overlay" />
      <ToggleMenu />
      <NavBar />
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