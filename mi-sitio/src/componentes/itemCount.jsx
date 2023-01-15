
import React, { useState, } from "react";
import { ButtonChild } from "./button";

function itemCount(props){
    const [count, setCount] = useState(1);

    function handleSubstract(){
        if(count>1){
            setCount(count -1 )
        }
    }
    function handleAdd(){
        if(count<props.cant)
        setCount(count +1 )
    }
    return(

            <div className="datoContador">
            <h3>Agrega la cantidad deseada al carrito</h3>
            <div className="contador">
                <ButtonChild onClick={handleSubstract}>-</ButtonChild>
                <h2>{count}</h2>
                <ButtonChild onClick={handleAdd}>+</ButtonChild>
            </div>
            <div className="contenedorBoton">
                <ButtonChild onClick={()=>alert("agregado")}>agrregar al carrito</ButtonChild>
            </div>
            
            </div>
            
    )
}
export default itemCount