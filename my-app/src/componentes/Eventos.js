import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//Property Initializers
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

/*function Boton(props) {
  return <button onClick={props.myOnClick}>Boton hecho componente</button>;
}*/

const Boton = ({myOnClick}) => {
    return <button onClick={myOnClick}>Boton hecho componente</button>;
}
export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <nav>
          {/**Evento personalizado */}
          <Boton myOnClick={(e) =>
              this.handleClick(
                e,
                "Hola pasando parametro desde MasSobreEventos"
              )
            }/>
          <button
            onClick={(e) =>
              this.handleClick(
                e,
                "Hola pasando parametro desde MasSobreEventos"
              )
            }
          >
            Saludar
          </button>
        </nav>
      </div>
    );
  }
}
