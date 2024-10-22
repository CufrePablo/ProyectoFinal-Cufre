import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../firebase/firebase'; // Importa la función desde donde la tengas
import "./ItemDetailContainer.css";
// import ItemQuantitySelector from './ItemQuantitySelectorComponente';
import AddItemButton from './AddItemButtonComponente';

export default function ItemDetailContainer() {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(); 

  useEffect(() => {
    const fetchProducto = async () => {
      setLoading(true); // Muestra el indicador de carga
      try {
        const productoObtenido = await getProducto(id); // Obtiene el producto desde Firestore
        if (productoObtenido) {
          setProducto(productoObtenido);
        } else {
          setError('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setError('Error al obtener el producto.');
      } finally {
        setLoading(false); // Termina el indicador de carga
      }
    };

    fetchProducto();
  }, [id]); // Dependencia de useEffect

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {producto ? (
        <article style={{ border: '1px solid white', padding: 40 }}>
          <h2 className='titulo-card'>Detalles del producto</h2>
          <h4 className='producto-titulo'>
            {producto.nombre} - {producto.categoria}
          </h4>
          <img className='producto-imagen-detalle' src={producto.imagen} alt={producto.nombre} />
          <p className='producto-descripcion'>Descripción: {producto.Descripcion}</p>
          <p className='producto-precio'>$ {producto.precio}</p>
          {/* <ItemQuantitySelector min={0} max={3} /> */}
          <AddItemButton producto={producto}/>
       </article>
      ) : (
        <p>No se pudo cargar el producto.</p>
      )}
    </>
  );
}
