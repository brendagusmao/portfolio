import React from 'react';
import '../styles/about.css'

class About extends React.Component {
  render() {
    return (
        <>
          <div className="container-fluid background" id="about">
          <section className="abouttitle">
            <span>
              Biografia
            </span>
            <h3> About me</h3>
            <section className="bio">
            <img src="https://i.pinimg.com/236x/c0/bc/7f/c0bc7f3b09d0a3deda69e5fc758d76d0.jpg" alt="" />
            </section>
            <section className="right text">
             Me definir é muito difícil. Às vezes pareço comum, às vezes singular. Sou bem assim: metamorfose ambulante. Adolescente em crise. Crises. De tudo o que você imaginar. O que mais valorizo no mundo? Amigos. O melhor sentimento? Felicidade. O melhor verbo? Amar. Conheço uma parte de uma frase, não sei o autor, mas ela define bem quem sou: viver é tentar ser feliz. É o que faço: vivo. E sim, me considero uma pessoa feliz, apesar de tudo. Depois de uma queda? Levanto e sigo em frente. Já desisti de contar os mil e um foras que dou. Vivo em busca de muitas coisas, mas já possuo a principal delas: a alegria. Uma companhia? Livros. Algo que te alegra? De novo os preciosíssimos amigos.
              <div className="tags">
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
              <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="" />
              <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="" />
              <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" />
              <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="" />
              <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt=""></img>
              <img src='https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white' alt="" />
              <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
              </div>
            </section>
            </section>
          </div>
        </>
    );
  }
}

export default About;