import React from "react";
import { Link } from "react-router-dom";
import { ButtonChild } from "./button";

function item({ image, price, id, title }) {
  const urlDetail=`/item/${id}`;
  return (
    <>
      <div className="producto">
        <div className="image__container">
          <img src={image} alt={title} ></img>
        </div>
        <div className="producto__footer">
          <h3 className="titulo">{title}</h3>
          <div className="price">$ {price}</div>
        </div>
        <div className="bottom">
         <Link to={urlDetail}>
          <div className="btn__group">
            <ButtonChild>ver producto</ButtonChild>
          </div>
         </Link>
        </div>
      </div>
    </>
  );
}

export default item;
