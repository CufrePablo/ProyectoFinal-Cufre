import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import TituloComponente from './components/TituloComponente';
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidgetComponente from "./components/CartWidgetComponente";
import CartComponente from "./components/CartComponente"; // Asegúrate de usar el nombre correcto
import { CartProvider } from './context/CartContext'; // Importa el CartProvider
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <TituloComponente />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartComponente/>} /> {/* Cambia CartWidgetComponente por CartComponente */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
