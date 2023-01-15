import ItemList from "./itemList";
import getItem from "../service/mockAsyncService";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ElementoDeLista() {
  const [products, setProducts] = useState([]);
  console.log(useParams())
  const {idCategory} =useParams()

  useEffect(() => {
    getItem(idCategory).then((respuesta) => {
      console.log(respuesta);
      setProducts(respuesta);
    });
  }, [idCategory]);
  
  let titulo;
  if(idCategory===undefined){
    titulo = "productos"
  }
  else{
    titulo=idCategory
  }
  return (
    <div>
      <div className="productos">
        <h1 className="titulo_index">{titulo}</h1>
        <ItemList products={products}/>
      </div>
    </div>
  );
}

export default ElementoDeLista;
