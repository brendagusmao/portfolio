import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../styles/header.css'
import ToggleMenu from '../components/Togglemenu';
import NavBar from '../components/Nav';
import Redes from '../components/Redes';
import ScrollArrow from '../components/Scrolltop';

function Header() {
  const { languageMode } = useContext(MyContext);
  return  ( 
     <header className="container-fluid backgroundHeader" id="home">
      <div className="overlay" />
      <ToggleMenu />
      <NavBar />
       <div className="gradient" />
        <div className="sidebar">
          <h2>
          {languageMode === 'EN' ? 'Hello, World! i am' : 'Olá, Mundo! Eu sou a'} 
          </h2>
          <h1>Brenda Gusmão</h1>
          <h3>{languageMode === 'EN' ? 'developer' : 'desenvolvedora'} 
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