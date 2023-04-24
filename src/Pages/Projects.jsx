import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import ProjectCard from '../components/ProjectCard';
import Project from '../data/projects';
import '../styles/Projects.css';
import { RiPagesFill } from "react-icons/ri";

function Projects() {
  const { languageMode } = useContext(MyContext);
    return (
      <>
        <div className="container-fluid text-center" id="projects">
          <section className="main">
            <span>
              portfolio
              <RiPagesFill className="margin" />
            </span>
            <h3> {languageMode === 'EN' ? 'Projects' : 'Projetos'} </h3>
          </section>
          <div className="grid-container container container-fluid">
          {Project.map((element) => (
              <ProjectCard
                key={ element.name }
                name={ element.name }
                image={ element.image }
                tec={ element.tec }
                url={ element.url }
                page={ element.page }
                description={ element.description }
                descriptioneng={ element.descriptioneng }
              />
            )) }
          </div>
        </div>
      </>
    );
  }

export default Projects;