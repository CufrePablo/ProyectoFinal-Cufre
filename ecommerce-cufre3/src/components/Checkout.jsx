import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importa tu contexto del carrito
import { guardarOrden } from '../firebase/firebase'; // Importa la función para guardar la orden

import './Checkout.css'; // Estilos para el componente

const Checkout = () => {
  const { cart, limpiarCarro } = useContext(CartContext); // Obtiene el carrito y la función para limpiarlo
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Estructura de la orden
    const orden = {
      items: cart.map(producto => ({
        id: producto.id,
        nombre: producto.nombre,
        cantidad: producto.cantidad,
        precio: producto.precio
      })),
      fecha: new Date().toISOString(),
      estado: 'generada',
      cliente: {
        nombre,
        apellido,
        telefono,
        email,
      },
    };

    try {
      // Guardar la orden en Firebase
      const orderId = await guardarOrden(orden);

      // Limpiar el carrito después de la compra exitosa
      limpiarCarro();
      
      // Opcional: Puedes redirigir al usuario o mostrar más información aquí si lo deseas
    } catch (error) {
      console.error('Error al generar la orden', error);
      // El manejo de errores ya está cubierto con SweetAlert en la función `guardarOrden`
    }
  };

  const validateForm = () => {
    if (nombre && apellido && telefono && email && email === confirmarEmail) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  React.useEffect(() => {
    validateForm();
  }, [nombre, apellido, telefono, email, confirmarEmail]);

  return (
    <div className="checkout">
      <h2 className='h2Checkout'>Completa tus datos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Confirmar Email"
          value={confirmarEmail}
          onChange={(e) => setConfirmarEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={!isFormValid} className='buttonForm'>
          Realizar Compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
