import React from "react";
import "../styles/about.css";
import { RxReader } from "react-icons/rx";
import Me from '../image/me.jpg';

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
                <img
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  alt=""
                />
                <img
                  src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                  alt=""
                />
                <img
                  src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                  alt=""
                />
                <img
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                  alt=""
                />
                <img
                  src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                  alt=""
                />
                <img
                  src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"
                  alt=""
                ></img>
                <img
                  src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
                  alt=""
                />
                <img
                  src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                  alt=""
                />
              </div>
            </section>
          </section>
        </div>
      </>
    );
  }
}

export default About;
