import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import "./CartComponente.css";
import Checkout from './Checkout';

const Cart = () => {
  const { cart, quitarProducto, limpiarCarro } = useContext(CartContext);

  const calcularTotalCarrito = () => {
    return cart.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  };

  return (
    <section className='cart'>
      <h2 className='titulo-carrito'>Carrito</h2>
      {cart.length === 0 ? (
        <p className='parrafo-carrito'>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio} x {producto.cantidad} = ${producto.precio * producto.cantidad}
                <button className='boton-eliminar-carro' onClick={() => quitarProducto(producto.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3 className='total-carrito'>Total del carrito: ${calcularTotalCarrito()}</h3>
          <button className='boton-vaciar-carro' onClick={limpiarCarro}>Limpiar Carrito</button>
          <h4 className='h4Carrito'>Complete los datos para realizar la compra</h4>
          <Checkout></Checkout>
        </>
      )}
    </section>
  );
};

export default Cart;
