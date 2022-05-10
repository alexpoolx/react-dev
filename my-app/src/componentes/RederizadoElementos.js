import React,{Component} from "react";
import data from '../helpers/data.json'

function ElementoLista(props){
    return (
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    );
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            session:["Primavera","Verano","Oto;o","Invierno"]
        }
    }
    render(){
        return (
            <div>
                <h2>Renderizado Condicional</h2>
                <h3>Estaciones del A;o</h3>
                <ol>
                    {this.state.session.map((el,index)=>(
                        <li key={index}>{el}</li>
                    ))}
                </ol>
                <hr></hr>
                <ul>
                    {data.frameworks.map((el,index)=>(
                        <ElementoLista key={index} el={el}/>
                    ))}
                </ul>
            </div>
        );
    }

}