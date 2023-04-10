import React from 'react';
import '../styles/footer.css';

class Footer extends React.Component {
  render() {
    const d = new Date();
    return (
      <>
        <footer className="container-fluid text-center" id="credit">
         Portfólio desenvolvido por <div className="cor">Brenda Pereira Gusmão.</div>
         Feito com React e muitas horas de dedicação.
         <span>Version 1.0 / © {d.getFullYear()} Brenda Gusmão. </span>
        </footer>
      </>
    );
  }
}

export default Footer;