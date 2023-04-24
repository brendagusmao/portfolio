import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import "../styles/about.css";
import { RxReader } from "react-icons/rx";
import Me from '../image/me.jpg';
import Tags from '../components/Tags';

function About() {
    const { languageMode } = useContext(MyContext);
    const aboutpt = 'Olá, meu nome é Brenda Pereira Gusmão, tenho 24 anos e sou residente em Belo Horizonte, MG. Atualmente, estou cursando Engenharia de Produção na FEAMIG e também estudo Desenvolvimento Web na Trybe. Sou uma pessoa apaixonada por novos desafios e experiências, e não tenho medo de mudanças. Na verdade, essa é uma das coisas que mais me motiva, e por isso, estou sempre em busca de me superar e entregar o meu melhor. Entre as minhas principais habilidades, posso destacar a visão analítica, acapacidade de resolver problemas e o aprendizado rápido. Estou sempre buscando me desenvolver nessas áreas para me tornar uma profissional cada vez melhor.';
    const abouteng = "Hello, my name is Brenda Pereira Gusmão, I'm 24 years old and I'm a resident of Belo Horizonte, MG. Currently, I'm studying Production Engineering at FEAMIG and also studying Web Development at Trybe. I'm a person passionate about new challenges and experiences, and I'm not afraid of changes. In fact, this is one of the things that motivates me the most, and that's why I'm always looking to push myself and deliver my best. Among my main skills, I can highlight analytical thinking, problem-solving, and fast learning. I'm always looking to develop myself in these areas to become a better professional.";
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
