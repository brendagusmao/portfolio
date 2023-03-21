import React from 'react';
import Forms from './Forms';
import Redess from './Redes';
import '../styles/contact.css';
import {BsFillTelephoneFill} from 'react-icons/bs';

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
            <div className="totop">
            <Redess />
            </div>
          <Forms />
        </div>
    );
  }
}

export default Redes;