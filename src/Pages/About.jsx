import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import "../styles/about.css";
import { RxReader } from "react-icons/rx";
import Me from '../image/me.jpg';
import Tags from '../components/Tags';

function About() {
    const { languageMode } = useContext(MyContext);
    const aboutpt = "Graduando em Engenharia de Produção (8º Período) na Faculdade de Engenharia de Minas Gerais e com certificação em Desenvolvimento Web Full Stack pela Trybe, integro conhecimentos de ambas as áreas para obter resultados eficientes e de alta qualidade na gestão e execução de projetos. Utilizando as boas práticas de gestão do PMBOK e ferramentas de qualidade em minhas experiências profissionais iniciais, tenho como objetivo buscar maior eficiência, redução de custos e garantir a satisfação dos clientes. Aberta a novos desafios, estou comprometida em agregar valor aos projetos e equipes com dedicação, proatividade e a busca constante por aprimoramento profissional.";
    const abouteng = "Undergraduate student in Production Engineering (8th semester) at the Minas Gerais School of Engineering, and certified in Full Stack Web Development by Trybe, I integrate knowledge from both fields to achieve efficient and high-quality results in project management and execution. By applying the good practices of PMBOK and quality tools in my early professional experiences, my objective is to pursue greater efficiency, cost reduction, and ensure customer satisfaction. Open to new challenges, I am committed to adding value to projects and teams with dedication, proactivity, and a constant pursuit of professional improvement.";
    return (
      <>
        <div className="container-fluid background" id="about">
          <section className="abouttitle">
            <span>
            {languageMode === 'EN' ? 'biography' : 'biografia'} 
              <RxReader className="margin" />
            </span>
            <h3> {languageMode === 'EN' ? 'About me' : 'Sobre mim'} </h3>
            <section className="bio">
              <img
                src={ Me }
                alt=""
              />
            </section>
            <section className="right text">
              <img
                src={ Me }
                alt=""
                className="icon-left"
              />
              <section>
              {languageMode === 'EN' ? abouteng : 
                aboutpt }
              </section>
              <div className="tags">
               <Tags />
              </div>
            </section>
          </section>
        </div>
      </>
    );
}

export default About;
