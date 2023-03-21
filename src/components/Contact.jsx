import React from 'react';
import Forms from './Forms';
import '../styles/contact.css';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { FaGithubSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';

class Redes extends React.Component {
  render() {
    return (
        <div className="container-fluid" id="contact"> 
          <section className="main">
            <span>
              Contact
              <BsFillTelephoneFill className="margin" />
            </span>
            <h3> Me </h3>
          </section>
          <div className="red">
          <a href="{url}" target="_blank" rel="noreferrer" > <ImLinkedin /></a>
          <a href="{url}" target="_blank" rel="noreferrer" > <FaGithubSquare /></a>
          <a href="{url}" target="_blank" rel="noreferrer" > <GrInstagram /></a>
          <br />
          <span>
          <i> <MdEmail /></i> brendapgusmao@gmail.com
          </span>
        </div>
          <Forms />
        </div>
    );
  }
}

export default Redes;