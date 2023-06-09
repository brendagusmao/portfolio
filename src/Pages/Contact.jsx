import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Forms from '../components/Forms';
import '../styles/contact.css';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { FaGithubSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';

function Redes() {
    const { languageMode } = useContext(MyContext);
    return (
        <div className="container-fluid" id="contact"> 
          <section className="main">
            <span>
            {languageMode === 'EN' ? 'contact' : 'contato'}
              <BsFillTelephoneFill className="margin" />
            </span>
            <h3> Brenda. </h3>
          </section>
          <div className="red">
          <a href="https://www.linkedin.com/in/brendapereiragusmao/" target="_blank" rel="noreferrer" > <ImLinkedin /></a>
          <a href="https://github.com/brendagusmao" target="_blank" rel="noreferrer" > <FaGithubSquare /></a>
          <a href="https://www.instagram.com/brendapgusmao/" target="_blank" rel="noreferrer" > <GrInstagram /></a>
          <br />
          <span>
          <i> <MdEmail /></i> brendapgusmao@gmail.com
          </span>
        </div>
          <Forms />
        </div>
    );
  }

export default Redes;