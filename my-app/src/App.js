import logo from "./logo.svg";
import "./App.css";
import Componente from "./componentes/Components";
import Propiedades from "./componentes/Propiedades";
import Estado from "./componentes/Estado";
import RenderizadoCondicional from "./componentes/RenderizadoCondicional";
import RenderizadoElementos from "./componentes/RederizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "./componentes/Eventos";
import ComunicacionComponent from "./componentes/ComunicacionComponent";
import ReactComponentsI from "./componentes/course"; 
import NPropiedad from "./componentes/NPropiedad";
import State from "./componentes/State";
import {NEventosES7,MasEventos} from "./componentes/EventosES7";
import Comunicacion from "./componentes/Comunicacion";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Componente msg="Esto es un componente" />
      <hr></hr>
      <Propiedades
        cadena="Probando propiedades"
        numero={25}
        boolean={true}
        arreglo={[1, 2, 3]}
        objeto={{ nombre: "Alexander", correo: "alexpoolx@gmail.com" }}
        funcion={(num) => num * num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteReact={
          <Componente msg="Soy un componente pasado como props" />
        }
      />
      <hr></hr>
      <div>
        <State/>
      </div>
      <div>
        <RenderizadoCondicional />
      </div>
      <hr></hr>
      <div>
        <RenderizadoElementos />
      </div>
      <hr></hr>
      <EventosES6 />
      <hr></hr>
      <EventosES7 />
      <hr></hr>
      <MasSobreEventos/>
      <hr></hr>
      
      <div>
        <ReactComponentsI name="Paul Alexander"/>
        <h2>Propiedades Otra</h2>
        <NPropiedad/>
      </div>
      <hr></hr>
      <div>
        <NEventosES7/>
        <MasEventos/>
        <hr></hr>
        <Comunicacion/>
      </div>
    </div>
  );
}

export default App;
