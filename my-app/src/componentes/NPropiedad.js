import React from "react";

export default function NPropiedad(){
    const a = [1,3,54,56,6];
    return (
        <div>
            <ul>{a.map(function(element){
               return (
                    <li>{element  * 3}</li>
               )
            })}</ul>
        </div>
    );
}

NPropiedad.defaultProps = {
    propiedad : 'Npropiedad'
}