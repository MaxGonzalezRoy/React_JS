// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CategoryProducts from './components/CategoryProducts';
import About from './components/About';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const storedFilter = localStorage.getItem('categoryFilter');
    if (storedFilter) {
      setCategoryFilter(storedFilter);
    }
  }, []);

  useEffect(() => {
    if (categoryFilter) {
      localStorage.setItem('categoryFilter', categoryFilter);
    }
  }, [categoryFilter]);

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
          element={<CategoryProducts categoryFilter={categoryFilter} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
