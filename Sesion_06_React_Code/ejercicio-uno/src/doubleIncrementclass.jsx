import React, { Component } from 'react';
 
class DoubleIncrementClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
 
  increment = () => {
    this.setState({ count: this.state.count + 2 });
  };
 
  render() {
    return (
      <div>
        <h2>Contador con Incremento Doble (Clase)</h2>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.increment}>Incrementar en 2</button>
      </div>
    );
  }
}
 
export default DoubleIncrementClass;

