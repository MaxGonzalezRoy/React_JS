import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CategoryProducts from './components/CategoryProducts';
import { CartProvider } from './context/CartContext';

function App() {
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home onFilter={handleCategoryFilter} />}
        />
        <Route
          path="/category/:categoryName"
          element={<CategoryProducts />}
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
