import './NavBar.css'; 
import { Link } from 'react-router-dom';
import TituloComponente from "./TituloComponente.jsx"
import CartWidgetComponente from "./CartWidgetComponente.jsx"
import BotonComponente from "./BotonComponente.jsx"


const NavBar = ()=>{
    return(

        <nav className="nav">
             <TituloComponente>
                {<Link to="/">Mi Marca</Link> }
            </TituloComponente>
            <BotonComponente texto={"Tela"} className="boton">
                <Link to="/categoria/Tela">Tela</Link> 
            </BotonComponente>
            <BotonComponente texto={"Opaca"} className="boton">
                <Link to="/categoria/Opaca">Opaca</Link> 
            </BotonComponente>
            <BotonComponente texto={"Voile"} className="boton">
                <Link to="/categoria/Voile">Voile</Link> 
            </BotonComponente>
            <CartWidgetComponente>
               
            </CartWidgetComponente>
            
        </nav>
    )

    
}

export default NavBar