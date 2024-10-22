import { Link } from 'react-router-dom';
import "./TituloComponente.css";

const TituloComponente = () => {
    return (
        <h1 className="titulo">
            <Link to="/">
                Cortinas4Ever
            </Link>
        </h1>
    );
};

export default TituloComponente;