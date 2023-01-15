
import {getSingleItem} from "../service/mockAsyncService";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./itemCount";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    //1obtenemos el valor de la url con useParams
    let {itemid} =useParams()
  useEffect(() => {
    //pasamos el parametro
    getSingleItem(itemid).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [itemid]);

  console.log(product)
  return (
    <div>
      <div className="detalles producto">
        <div className="datos">
          <h1>{product.title}</h1>
        <img alt="sa" src={product.image}/>
        </div>
        <ItemCount cant={product.stock}/>
      </div>
        
    </div>
  );
}

export default ItemDetailContainer;
