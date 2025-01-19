// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { getProducts } from './firebase/db';
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import CategoryProducts from './components/CategoryProducts';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setAllProducts(productsData);
        setFilteredProducts(productsData); // Inicialmente mostrar todos los productos
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  // Lógica para filtrar productos
  const handleFilter = (filters) => {
    let filtered = allProducts;

    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }
    if (filters.brand) {
      filtered = filtered.filter((product) => product.brand === filters.brand);
    }
    if (filters.price) {
      filtered = filtered.filter((product) => {
        if (filters.price === '0-100') return product.price <= 100;
        if (filters.price === '100-500') return product.price > 100 && product.price <= 500;
        if (filters.price === '500-1000') return product.price > 500 && product.price <= 1000;
        if (filters.price === '1000+') return product.price > 1000;
        return true;
      });
    }
    if (filters.stock) {
      filtered = filtered.filter((product) => (filters.stock === 'in-stock' ? product.stock > 0 : product.stock === 0));
    }

    setFilteredProducts(filtered);
  };

  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home onFilter={handleFilter} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
