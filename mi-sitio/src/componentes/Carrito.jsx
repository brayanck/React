import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
function Carrito() {
    return (
        <div className="carrito__icon">
        <FontAwesomeIcon className="icono_carro" icon={faCartShopping}/>
          <span className="item__total">0</span>
        </div>
    );
  }
  
  export default Carrito;
  