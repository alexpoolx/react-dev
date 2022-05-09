import logo from "./logo.svg";
import "./App.css";
import Componente from "./componentes/Components";
import Propiedades from "./componentes/Propiedades";
import Estado from "./componentes/Estado";
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
        <Estado/>
      </div>
    </div>
  );
}

export default App;
