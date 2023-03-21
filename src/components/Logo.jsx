import React from 'react';
import { Maquina } from './maquinadeescrever';

class Logo extends React.Component {
  render() {
    return (
        <>
          <div className="logo">
          <Maquina text="brenda.dev" delay={1600} />
          </div>
        </>
    );
  }
}

export default Logo;