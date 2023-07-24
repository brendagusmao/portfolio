import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import '../styles/header.css'
import ToggleMenu from '../components/Togglemenu';
import NavBar from '../components/Nav';
import Redes from '../components/Redes';
import ScrollArrow from '../components/Scrolltop';

function Header() {
  const { languageMode } = useContext(MyContext);
  const [showEngenheira, setShowEngenheira] = useState(false);
  return  ( 
     <header className="container-fluid backgroundHeader" id="home">
      <div className="overlay" />
      <ToggleMenu />
      <NavBar />
       <div className="gradient" />
        <div className="sidebar">
          <h2>
          {languageMode === 'EN' ? 'Welcome to my portfólio' : 'Bem vindo(a) ao meu portfólio'} 
          </h2>
          <h1>Brenda Gusmão</h1>
          <h3>{/* {languageMode === 'EN' ? 'Developer' : showEngenheira ? 'Engenheira' : 'Desenvolvedora'} */}
            <div className="animated-info">
               <span className="animated-item">{languageMode === 'EN' ? 'Developer Full Stack' : 'Desenvolvedora Full Stack'}</span>
               <span className="animated-item">{languageMode === 'EN' ? 'Production Engineer' : 'Engenheira de Produção'}</span>
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