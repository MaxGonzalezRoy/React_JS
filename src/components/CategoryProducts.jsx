import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import { getProducts } from '../firebase/db';

const CategoryProducts = ({ categoryFilter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [appliedPriceRange, setAppliedPriceRange] = useState(priceRange); // Rango de precio aplicado

  // Obtención de productos desde Firebase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        console.log('Productos obtenidos:', productsData);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtrado de productos por categoría y precio
  const filteredProducts = products
    .filter((product) => {
      const isInCategory = categoryFilter ? product.category === categoryFilter : true;
      const isPriceInRange = product.price >= appliedPriceRange.min && product.price <= appliedPriceRange.max;
      return isInCategory && isPriceInRange;
    })
    .map((product) => product);

  console.log('Productos filtrados:', filteredProducts);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  // Función para manejar el cambio del rango de precio
  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: parseFloat(value), // Asegurarse de convertir el valor a número
    }));
  };

  // Función para aplicar el filtro de rango de precio
  const applyPriceFilter = () => {
    setAppliedPriceRange(priceRange); // Aplica el filtro con el rango actual
  };

  // Función para seleccionar un filtro predefinido desde la lista desplegable
  const handlePredefinedRangeSelect = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setPriceRange({ min, max });
    setAppliedPriceRange({ min, max }); // Aplica el filtro automáticamente
  };

  return (
    <div>
      <h1>Productos en la categoría: {categoryFilter || 'Todas las categorías'}</h1>

      {/* Lista desplegable para filtros predefinidos */}
      <div>
        <label>Selecciona un rango de precio:</label>
        <select onChange={handlePredefinedRangeSelect} defaultValue="">
          <option value="">Selecciona un rango...</option>
          <option value="0-1000">0 - 1000</option>
          <option value="1000-5000">1000 - 5000</option>
          <option value="5000-10000">5000 - 10000</option>
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <ItemList items={filteredProducts} />
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

CategoryProducts.propTypes = {
  categoryFilter: PropTypes.string.isRequired,
};

export default CategoryProducts;
