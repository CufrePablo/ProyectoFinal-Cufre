import "./ProductCard.css"
import { Link } from 'react-router-dom';

const ProductCard = ({ producto }) => {
    return (
      <article className="card">
        <h4>{producto.nombre}</h4>
        <img src={producto.imagen} alt={producto.nombre} />
        <p className="card-price">${producto.precio}</p>
        <button className="details-button">
          <Link to={`/producto/${producto.id}`}>Detalles</Link>
        </button>
      </article>
    );
  };

export default ProductCard