import { useEffect, useState } from 'react';
import "./ItemQuantitySelectorComponente.css";

const ItemQuantitySelector = ({ min, max, onQuantityChange }) => {
  const [cantidad, setCantidad] = useState(min); // Inicializamos con el valor mínimo

  useEffect(() => {
    onQuantityChange(cantidad); // Llamamos al callback cuando la cantidad cambia
  }, [cantidad]); // Solo depende de 'cantidad'

  const handleClickSumar = () => {
    if (cantidad < max) {
      setCantidad(cantidad + 1); // Incrementa la cantidad
    }
  };

  const handleClickRestar = () => {
    if (cantidad > min) {
      setCantidad(cantidad - 1); // Decrementa la cantidad
    }
  };

  return (
    <>
      <h3 className='h3Cantidad'>Cuánto quieres comprar</h3>
      <p className='numeroCantidad'>{cantidad}</p>
      <div className='btn-contenedor'>
        <button onClick={handleClickSumar} className='botonCantidad btn-sumar'>+</button>
        <button onClick={handleClickRestar} className='botonCantidad btn-restar'>-</button>
      </div>
    </>
  );
};

export default ItemQuantitySelector;
