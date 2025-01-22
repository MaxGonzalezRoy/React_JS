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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        console.log('Productos obtenidos:', productsData);

        const filteredByCategory = categoryFilter
          ? productsData.filter(product => product.category === categoryFilter)
          : productsData;

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
  }, [categoryFilter]);

  useEffect(() => {
    const storedCategory = sessionStorage.getItem('categoryFilter');
    const storedPriceRange = JSON.parse(sessionStorage.getItem('priceRange'));
    const storedBrand = sessionStorage.getItem('selectedBrand');

    if (storedCategory) {
      setAppliedPriceRange(storedPriceRange || { min: 0, max: 10000 });
      setSelectedBrand(storedBrand || '');
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('categoryFilter', categoryFilter);
    sessionStorage.setItem('priceRange', JSON.stringify(appliedPriceRange));
    sessionStorage.setItem('selectedBrand', selectedBrand);
  }, [categoryFilter, appliedPriceRange, selectedBrand]);

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

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: parseFloat(value),
    }));
  };

  const handlePredefinedRangeSelect = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setPriceRange({ min, max });
    setAppliedPriceRange({ min, max });
  };

  const handleBrandSelect = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <div>
      <h1>Productos en la categoría: {categoryFilter || 'Todas las categorías'}</h1>

      <div className="filters-container">
        <div className="brand-filter">
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

        <div className="price-filter">
          <label>Selecciona un rango de precio:</label>
          <select onChange={handlePredefinedRangeSelect} value={`${appliedPriceRange.min}-${appliedPriceRange.max}`}>
            <option value="0-1000">0 - 1000</option>
            <option value="1000-5000">1000 - 5000</option>
            <option value="5000-10000">5000 - 10000</option>
          </select>
        </div>
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
