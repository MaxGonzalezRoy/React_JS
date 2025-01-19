import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../firebase/db';
import ItemList from './ItemList';

const CategoryProducts = () => {
  const { categoryName } = useParams(); // Obtener el nombre de la categoría desde la URL
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    if (categoryName) {
      setCategoryFilter(categoryName); // Establecer el filtro de categoría
    }
  }, [categoryName]);

  return (
    <div>
      <h2>Productos de {categoryFilter}</h2>
      <ItemList categoryFilter={categoryFilter} /> {/* Filtrar productos por categoría */}
    </div>
  );
};

export default CategoryProducts;
