import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambia esta importación
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Crear la raíz del React y renderizar la app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
