import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import './AddItemButton.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ItemQuantitySelector from './ItemQuantitySelectorComponente'; // Importa el ItemQuantitySelector

const AddItemButton = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1); // Cantidad inicial

  const handleQuantityChange = (cantidadSeleccionada) => {
    setCantidad(cantidadSeleccionada); // Actualiza la cantidad seleccionada
  };

  const handleClick = () => {
    if (cantidad > 0) {
      agregarProducto(producto, cantidad); // Añade la cantidad seleccionada del producto
      toast("¡Agregado al carrito!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: "#3498db",
          color: "#fff",
        },
      });
    } else {
      toast.error("Selecciona una cantidad válida", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <ItemQuantitySelector min={1} max={10} onQuantityChange={handleQuantityChange} /> {/* Asegúrate de pasar la función onQuantityChange */}
      <button className="add-to-cart" onClick={handleClick}>
        <FontAwesomeIcon icon={faShoppingCart} /> {/* Ícono del carrito */}
        Añadir al Carrito
      </button>
      <ToastContainer /> {/* Contenedor de Toasts, necesario para mostrar notificaciones */}
    </>
  );
};

export default AddItemButton;
