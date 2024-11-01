import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
    this.incrementarContador = this.incrementarContador.bind(this);
  }

  incrementarContador() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}
export default Contador;
