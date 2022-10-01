import React,{ Component } from "react";

export default class Comunicacion extends Component{
    constructor(props){
        super(props);
        this.clock = {
            time :0
        }

        setInterval(()=>{
            this.setState({
                time:this.clock.time + 1
            });
        },1000);
    };

    state = {
        contador : 0
    }
    incrementarContador = (e) => {
        this.setState({
            contador : this.state.contador + 1
        })
    }

    decrementarContador = (e) =>{
        this.setState({
            contador:this.state.contador - 1
        })
    }

    render(){
        return (
            <div>
                <h2>Comuncicacion entre componentes</h2>
                <b>{this.state.contador}</b>
                <Hijo1 incrementarContador={this.incrementarContador}  mensaje="mensaje para el hijo 2"/>
                <Hijo2 decrementarContador={this.decrementarContador} mensaje="Componente Hijo 1"/>  
                <Hijo3 theClock={this.clock.time} mensaje="Reloj del Hijo 3"/>  
            </div>
        )
    }
}

function Hijo1(props){
    return (
        <div>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </div>
    )
}

function Hijo2(props){
    return (
        <div>
            <h3>{props.mensaje}</h3>
            <button onClick={props.decrementarContador}>-</button>
        </div>
    )
}

function Hijo3(props){
    return(
        <div>
            <h1>{props.mensaje}</h1>
            <h5>Aqui : {props.theClock}</h5>
        </div>
    )
}