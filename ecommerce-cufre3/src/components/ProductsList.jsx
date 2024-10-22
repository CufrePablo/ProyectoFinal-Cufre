import { useEffect, useState } from 'react';
import { getProductos } from '../firebaseConfig'; // Asegúrate de que la función `getProductos` esté bien configurada
import "./ProductsList.css";
import { Link } from 'react-router-dom';

export default function ProductsList() {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para mostrar un spinner o indicador de carga
  const [error, setError] = useState(null); 

  // Llamar a Firestore para obtener los productos
  useEffect(() => {
    getProductos()
      .then((productos) => {
        setProducts(productos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setError("Error al cargar productos");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>; // Indicador de carga
  }

  if (error) {
    return <p>{error}</p>; // Mostrar mensaje de error si falla la carga
  }

  return (
    <section className='products-list'>
      {productos.map(producto => (
        <div className="product-card" key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} className="product-image" /> {/* Mostrar imagen del producto */}
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <Link to={`/producto/${producto.id}`} className="details-link">Ver Detalles</Link>
        </div>
      ))}
    </section>
  );
}
