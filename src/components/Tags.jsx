import React from "react";
import "../styles/about.css";

class Tags extends React.Component {
  render() {
    const tags = {
      url1: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      url2: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      url3: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
      url4: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      url5: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
      url6: "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white",
      url7: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
      url8: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    };
    return (
      <>
        <img src={tags.url1} alt="" />
        <img src={tags.url2} alt="" />
        <img src={tags.url3} alt="" />
        <img src={tags.url4} alt="" />
        <img src={tags.url5} alt="" />
        <img src={tags.url6} alt="" />
        <img src={tags.url7} alt="" />
        <img src={tags.url8} alt="" />
      </>
    );
  }
}

export default Tags;
