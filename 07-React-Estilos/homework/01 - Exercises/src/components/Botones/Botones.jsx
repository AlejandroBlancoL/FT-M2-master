import React from 'react';
import styled from 'styled-components'


const DivButtons = styled.div`
  display: "flex";
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Buttons = styled.div`
  border-radius: 5px;
  color: beige;
`;

export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <div>
        <button onClick={() => window.alert(alerts.m1)}>Módulo 1</button>
        <button onClick={() => window.alert(alerts.m2)}>Módulo 2</button>
      </div>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }
