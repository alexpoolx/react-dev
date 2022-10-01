import React, { Component } from "react";

export  class NEventosES7 extends Component{
    state = {
        contador : 0
    }

    //Arrow function
    sumar = (e)=>{
        this.setState({
            contador:this.state.contador + 1
        })
    }

    restar = (e)=>{
        this.setState({
            contador:this.state.contador - 1
        })

        if(this.state.contador==0){
            this.setState({
                contador:0
            })
        }
    }

    render(){
        return (
            <div>
                <h1>Sumar 1 al contador</h1>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

const Boton = ({myOnClick}) =>{
    return <button onClick={myOnClick}>Boton hecho Componente</button>
}

export class MasEventos extends Component{

    handleClick = (e,mensaje)=>{
        console.log(mensaje)

    }

    render(){
        return(
            <div>
                <h2>Mas Eventos</h2>
                <button onClick={this.handleClick}>handleClick</button>
                {/*Eventos personalizados*/}
                <Boton myOnClick={(e)=>this.handleClick(e,"Hola Pasando un parametro desde myOnClick")}/>
                <button onClick={(e)=>this.handleClick(e,"Saludos desde button")}>Saludo</button>
            </div>
        )
    }
}