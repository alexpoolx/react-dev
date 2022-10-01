import React,{Component} from "react";

class ReactComponentsI extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <h1>{this.props.name}</h1>
    }
}

export default ReactComponentsI;