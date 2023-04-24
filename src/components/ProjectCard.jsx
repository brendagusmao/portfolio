import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import PropTypes from 'prop-types';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import '../styles/Projects.css';

function ProjectCard(props) {
    const { name, image, description, url, tec, descriptioneng, page } = props;
    const { languageMode } = useContext(MyContext);
    return (
      <table>
        <thead>
          <tr>
            <th className="item">
             <img src={ image } alt={ name } loading="lazy" />
              <div className="info">
                <AiFillEye className="eyes" />
              </div>
             <section className="titlebar">
             <h1>  { name } </h1>
              <section className="clickbar">
                <a href={url} target="_blank" rel="noreferrer" > <AiFillGithub /></a>
                <a href={page} target="_blank" rel="noreferrer" > <GoLinkExternal /></a>
              </section>
             </section>
             <section className="tec"> 
             <span>{tec}</span>
             </section>
             <section className="desc">  {languageMode === 'EN' ? descriptioneng : description }</section>
            </th>
          </tr>
        </thead>
      </table>
    );
  }

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tec: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptioneng: PropTypes.string.isRequired,
  };

export default ProjectCard;