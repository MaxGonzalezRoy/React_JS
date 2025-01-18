import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import About from './components/About'; // Asegúrate de tener este componente
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                    <h1>Mi Tienda</h1>
                <Routes> {/* Usar Routes en vez de Switch para react-router-dom v6 */}
                    <Route path="/" element={<ItemList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} /> {/* Agregar ruta a About */}
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
