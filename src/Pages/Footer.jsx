import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import '../styles/footer.css';

function Footer() {
    const d = new Date();
    const { languageMode } = useContext(MyContext);
    return (
      <>
        <footer className="container-fluid text-center" id="credit">
        {languageMode === 'EN' ? 'Portfolio developed by.' : 'Portfólio desenvolvido por'}<div className="cor">Brenda Pereira Gusmão.</div>
        {languageMode === 'EN' ? 'Made with React and many hours of dedication.' : 'Feito com React e muitas horas de dedicação.'}
         <span>Version 1.0 / © {d.getFullYear()} Brenda Gusmão. </span>
        </footer>
      </>
    );
  }

export default Footer;