import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../firebase/db';

const CategoryProducts = ({ categoryFilter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  // Obtención de productos desde Firebase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        console.log('Productos obtenidos:', productsData); // Verifica los productos obtenidos
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
      console.log('Producto antes del filtro:', product); // Ver productos antes del filtro
      const isInCategory = product.category === categoryFilter;
      const isPriceInRange = product.price >= priceRange.min && product.price <= priceRange.max;
      console.log('Categoría coincidente:', isInCategory);
      console.log('¿Precio dentro del rango?', isPriceInRange);
      return isInCategory && isPriceInRange; // Solo productos que coinciden con la categoría y el rango de precio
    })
    .map((product) => {
      console.log('Producto filtrado:', product); // Ver productos después del filtro
      return product;
    });

  console.log('Productos filtrados:', filteredProducts); // Ver productos filtrados

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>Productos en la categoría: {categoryFilter}</h1>
      {filteredProducts.length > 0 ? (
        <ItemList items={filteredProducts} />
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default CategoryProducts;
