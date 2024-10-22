import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CarWidgetComponente.css'; 

const CartWidgetComponente = ({ itemCount }) => { // Acepta itemCount como prop
  return (
    <Link to="/cart" className="cart-widget"> {/* Enlaza a /cart */}
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      {itemCount > 0 && ( // Muestra el conteo solo si hay artículos
        <div className="notification">
          {itemCount}
        </div>
      )}
    </Link>
  );
};

export default CartWidgetComponente;
