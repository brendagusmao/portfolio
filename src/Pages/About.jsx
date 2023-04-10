import React from "react";
import "../styles/about.css";
import { RxReader } from "react-icons/rx";
import Me from '../image/me.jpg';
import Tags from '../components/Tags';

class About extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid background" id="about">
          <section className="abouttitle">
            <span>
              Biografia
              <RxReader className="margin" />
            </span>
            <h3> About me</h3>
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
                Olá, meu nome é Brenda Pereira Gusmão, tenho 24 anos e sou
                residente em Belo Horizonte, MG. Atualmente, estou cursando
                Engenharia de Produção na FEAMIG e também estudo Desenvolvimento
                Web na Trybe. Sou uma pessoa apaixonada por novos desafios e
                experiências, e não tenho medo de mudanças. Na verdade, essa é
                uma das coisas que mais me motiva, e por isso, estou sempre em
                busca de me superar e entregar o meu melhor. Entre as minhas
                principais habilidades, posso destacar a visão analítica, a
                capacidade de resolver problemas e o aprendizado rápido. Estou
                sempre buscando me desenvolver nessas áreas para me tornar uma
                profissional cada vez melhor.
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
}

export default About;
