import React,{Component} from "react";


function Login(){
    return (
        <div>
            <h6>Login</h6>
        </div>
    );
}

function Logout(){
    return (
        <div>
            <h6>Logout</h6>
        </div>
    );
}

export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session:true
        }
    }
    render(){
        return (
            <div>
                <h2>Renderizado Condicional</h2>
                <p>{this.state.session ? <Login/> : <Logout/>}</p>
            </div>
        );
    }

}