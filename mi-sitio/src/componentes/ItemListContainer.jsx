import data from '../assets/productos.json'
console.log(data)
function ElementoDeLista ({image,price,id,title}){
    return(
        <>
        
            <div className="producto">
			<div className="image__container">
			    <img src={image} alt="sds"/>
		    </div>
          <div className="producto__footer">
            <h3 className="titulo">${title}</h3>
            <div className="price">$ {price}</div>
          </div>
          <div className="bottom">
            <div className="btn__group">
              <button className="btn addToCart" data-id={id}>Añadir carrito</button>

            </div>
          </div>
        </div>
        
        </>
    )

}
function lista() {
    return (
        <div >
        <div className='productos'>
        <h1 className="titulo_index">Pc armadas</h1>
        <div className="productos__center">
            {
                data.items.map((el)=><ElementoDeLista  key={el.id} {...el}/>)
            }
            </div>
        </div>
        </div>
    );
  }
  
  export default lista;
  