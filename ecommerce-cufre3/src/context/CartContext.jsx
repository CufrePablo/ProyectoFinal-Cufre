// CartContext.js

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarProducto = (producto, cantidadSeleccionada) => {
    const productoEnCarrito = cart.find(item => item.id === producto.id);

    if (productoEnCarrito) {
      // Si el producto ya está en el carrito, actualizamos su cantidad
      setCart(cart.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidadSeleccionada }
          : item
      ));
    } else {
      // Si el producto no está en el carrito, lo agregamos con la cantidad seleccionada
      setCart([...cart, { ...producto, cantidad: cantidadSeleccionada }]);
    }
  };

  const quitarProducto = (id) => {
    setCart(cart.filter(producto => producto.id !== id));
  };

  const limpiarCarro = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, agregarProducto, quitarProducto, limpiarCarro }}>
      {children}
    </CartContext.Provider>
  );
};
