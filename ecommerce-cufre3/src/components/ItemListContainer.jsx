import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoria, getProductos } from '../firebase/firebase'; // Asegúrate de que estas funciones estén bien configuradas
import ProductCard from './ProductCard';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const { categoria } = useParams(); // Captura la categoría desde la URL
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true);
            setError(null);

            try {
                // Si hay una categoría en la URL, obtenemos los productos filtrados por categoría
                const data = categoria ? await getCategoria(categoria) : await getProductos();
                setProductos(data);
            } catch (error) {
                console.error("Error al cargar productos:", error);
                setError("Error al cargar productos. Intenta de nuevo más tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, [categoria]); // Re-ejecuta el efecto cuando cambia la categoría

    if (loading) {
        return <p>Cargando productos...</p>; // Indicador de carga
    }

    if (error) {
        return <p>{error}</p>; // Mostrar mensaje de error
    }

    return (
        <div>
            <h2>{categoria ? `Productos de ${categoria}` : 'Todos los Productos'}</h2>
            <section className="product-list">
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <ProductCard key={producto.id} producto={producto} />
                    ))
                ) : (
                    <p>No se encontraron productos.</p> // Mensaje si no hay productos
                )}
            </section>
        </div>
    );
};

export default ItemListContainer;
