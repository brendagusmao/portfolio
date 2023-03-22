import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { FaGithubSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import '../styles/utils.css';

class Redes extends React.Component {
  render() {
    return (
        <div className="redes">
          <a href="https://www.linkedin.com/in/brendapereiragusmao/" target="_blank" rel="noreferrer" > <ImLinkedin /></a>
          <a href="https://github.com/brendagusmao" target="_blank" rel="noreferrer" > <FaGithubSquare /></a>
          <a href="https://www.instagram.com/brendapgusmao/" target="_blank" rel="noreferrer" > <GrInstagram /></a>
          <a href="mailto:brendapgusmao@gmail.com?subject=Olá, estou entrando em contato&body=Obrigada!" target="_blank" rel="noreferrer" > <MdEmail /></a>
        </div>
    );
  }
}

export default Redes;