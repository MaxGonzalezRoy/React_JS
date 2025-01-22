// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import { getProducts } from '../firebase/db';

const CategoryProducts = ({ categoryFilter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [appliedPriceRange, setAppliedPriceRange] = useState(priceRange);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brands, setBrands] = useState([]);

  // Obtención de productos desde Firebase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        console.log('Productos obtenidos:', productsData);

        // Filtrar los productos por la categoría seleccionada
        const filteredByCategory = categoryFilter
          ? productsData.filter(product => product.category === categoryFilter)
          : productsData;

        // Extraer marcas únicas de los productos filtrados por categoría
        const uniqueBrands = [
          ...new Set(filteredByCategory.map(product => product.brand)),
        ];

        setBrands(uniqueBrands);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryFilter]); // Volver a ejecutar cuando cambia la categoría

  // Recuperar los valores almacenados de sessionStorage cuando se recarga la página
  useEffect(() => {
    const storedCategory = sessionStorage.getItem('categoryFilter');
    const storedPriceRange = JSON.parse(sessionStorage.getItem('priceRange'));
    const storedBrand = sessionStorage.getItem('selectedBrand');

    if (storedCategory) {
      setAppliedPriceRange(storedPriceRange || { min: 0, max: 10000 });  // Restablecer el rango de precios
      setSelectedBrand(storedBrand || '');  // Restablecer la marca
    }
  }, []);

  // Guardar los valores en sessionStorage cuando cambian
  useEffect(() => {
    sessionStorage.setItem('categoryFilter', categoryFilter);
    sessionStorage.setItem('priceRange', JSON.stringify(appliedPriceRange));
    sessionStorage.setItem('selectedBrand', selectedBrand);
  }, [categoryFilter, appliedPriceRange, selectedBrand]);

  // Filtrado de productos por categoría, precio y marca
  const filteredProducts = products
    .filter((product) => {
      const isInCategory = categoryFilter ? product.category === categoryFilter : true;
      const isPriceInRange = product.price >= appliedPriceRange.min && product.price <= appliedPriceRange.max;
      const isInBrand = selectedBrand ? product.brand === selectedBrand : true;
      return isInCategory && isPriceInRange && isInBrand;
    });

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  // Función para manejar el cambio del rango de precio
  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: parseFloat(value),
    }));
  };

  // Función para seleccionar un filtro predefinido de precio
  const handlePredefinedRangeSelect = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setPriceRange({ min, max });
    setAppliedPriceRange({ min, max });
  };

  // Función para manejar la selección de marca
  const handleBrandSelect = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <div>
      <h1>Productos en la categoría: {categoryFilter || 'Todas las categorías'}</h1>

      {/* Filtro por marca */}
      <div>
        <label>Selecciona una marca:</label>
        <select onChange={handleBrandSelect} value={selectedBrand || ''}>
          <option value="">Selecciona una marca...</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Lista desplegable para filtros predefinidos de precio */}
      <div>
        <label>Selecciona un rango de precio:</label>
        <select onChange={handlePredefinedRangeSelect} value={`${appliedPriceRange.min}-${appliedPriceRange.max}`}>
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
