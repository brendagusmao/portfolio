import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Project from '../data/projects';
import '../styles/Projects.css';
import { RiPagesFill } from "react-icons/ri";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid text-center" id="projects">
          <section className="main">
            <span>
              portfolio
              <RiPagesFill className="margin" />
            </span>
            <h3> Projetos </h3>
          </section>
          <div className="grid-container container container-fluid">
          {Project.map((element) => (
              <ProjectCard
                key={ element.name }
                name={ element.name }
                image={ element.image }
                tec={ element.tec }
                tec2={ element.tec2 }
                url={ element.url }
                page={ element.page }
                description={ element.description }
              />
            )) }
          </div>
        </div>
      </>
    );
  }
}

export default Projects;