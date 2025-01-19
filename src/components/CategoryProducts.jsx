// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../firebase/db';
import ItemList from './ItemList';

const CategoryProducts = () => {
  const { category } = useParams(); // Obtenemos el parámetro 'category' de la URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        console.log(productsData);  // Verificar qué productos se obtienen

        // Filtramos los productos por categoría
        const filteredProducts = productsData.filter((product) => {
          // Verificar si 'category' existe en el producto antes de llamar a 'toLowerCase()'
          return product.category && product.category.toLowerCase() === category.toLowerCase();
        });
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, [category]); // Dependencia para que se ejecute cada vez que cambie la categoría

  return (
    <div>
      <h2>Productos en la categoría: {category}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default CategoryProducts;
