import React,{Component} from "react";

 function EstadoHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}

export default class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador :0
        }

        setInterval(()=>{
            this.setState({
                contador:this.state.contador + 1
            })
        },1000)
    }

    render(){
        return(
            <div>
                <h5>Probando Estado</h5>
                <p>{this.state.contador}</p>
                <EstadoHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}