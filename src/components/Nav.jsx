import React, { useContext,useState, useEffect } from 'react';
import MyContext from '../context/MyContext';
import { HiSun } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import '../styles/header.css'
import Logo from '../components/Logo';
import Brazil from '../image/favicons/brazil-svgrepo-com (2).svg';
import Eua from '../image/favicons/United-states_flag_icon_round.svg';

function Navbar() {
  const { lightMode, setLightMode } = useContext(MyContext);
  const { languageMode, setLanguageMode } = useContext(MyContext);
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
      {languageMode === 'EN' ? 
       <><li><a href="#home" onClick={(evt) => { scrollto({ target: evt.target }); } } className="scrollto active">home</a></li><a href="#about" onClick={(evt) => { scrollto({ target: evt.target }); } } className="scrollto">About</a><li><a href="#projects" onClick={(evt) => { scrollto({ target: evt.target }); } } className="scrollto">Projects</a></li><li><a href="#contact" onClick={(evt) => { scrollto({ target: evt.target }); } } className="scrollto">Contact</a></li></>
       : 
       <><li><a href="#home" onClick={(evt) => { scrollto({ target: evt.target }); } } className="scrollto active">inicio</a></li><a href="#about" onClick={(evt) => { scrollto({ target: evt.target }); } } className="scrollto">sobre</a><li><a href="#projects" onClick={(evt) => { scrollto({ target: evt.target }); } } className="scrollto">Projetos</a></li><li><a href="#contact" onClick={(evt) => { scrollto({ target: evt.target }); } } className="scrollto">Contato</a></li></>}
    </div>
    <div className="tgb" onClick={() => {setLightMode(!lightMode)}}>
            {
              lightMode ? <div className="tgg"><HiSun /></div>: 
              <div className="tgs"><BsFillMoonStarsFill /></div>
            }
        </div>
        <div className="box" onClick={() => {setLanguageMode(languageMode === 'EN' ? 'PT' : 'EN')}}>
            { languageMode === 'EN' ? <><div className="icon"><img src={Eua} alt="" /></div><div className="textlang">en</div></> : <><div className="icon"><img src={Brazil} alt="" /></div><div className="textlang">pt</div></> }
        </div>
    </nav>
  );
}

export default Navbar;