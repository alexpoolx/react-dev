import React, { Component } from "react";


export default function Propiedades(props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(",")}</li>
                <li>{props.objeto.nombre +" - "+props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(",")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
            <section></section>
        </div>
    );
}



Propiedades.defaultProps = {
    porDefecto : "Propiedades"
}


/*class Propiedades extends Component {
  render() {
    let props = "Propiedades";
    return (
      <div>
        <h2>{props}</h2>
        <ul>
          <li>{this.props.cadena}</li>
          <li>{this.props.numero}</li>
          <li>{this.props.boolean ? "Verdadero" : "Falso"}</li>
        </ul>
      </div>
    );
  }
}

export default Propiedades;*/

/*class Propiedades extends Component {
  render() {
    let props = "Propiedades";
    return (
      <div>
        <h2>{props}</h2>
        <ul>
          <li>{this.props.cadena}</li>
          <li>{this.props.numero}</li>
          <li>{this.props.boolean ? "Verdadero" : "Falso"}</li>
        </ul>
      </div>
    );
  }
}

export default Propiedades;*/
