// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';  // Importación correcta para React 18
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importa el CartProvider
import App from './App';
import './styles/about.css';
import './styles/base.css';
import './styles/cart.css';
import './styles/filters.css';
import './styles/home.css';
import './styles/item.css';

// Crear la raíz del React y renderizar la app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartProvider>  {/* Aquí envolvemos la app con CartProvider */}
      <App />
    </CartProvider>
  </BrowserRouter>
);
