import React from 'react';
import televisor from '../assets/images/televisor.avif';
import smartwatch from '../assets/images/smartwatch.jpg';
import auricular from '../assets/images/auricular.png';
import celular from '../assets/images/celular.jpg';
import laptop from '../assets/images/laptop.webp';

const Home = ({ onFilter }) => {
  // Definimos las categorías con imágenes representativas
  const categories = [
    { name: 'Televisores', image: televisor, description: 'Encuentra los mejores televisores para tu hogar.' },
    { name: 'Relojes', image: smartwatch, description: 'Los relojes más modernos y elegantes.' },
    { name: 'Auriculares', image: auricular, description: 'Disfruta de un sonido de alta calidad.' },
    { name: 'Celulares', image: celular, description: 'Últimos modelos de teléfonos móviles.' },
    { name: 'Laptops', image: laptop, description: 'Las mejores laptops para trabajo y entretenimiento.' },
  ];

  const handleCategoryClick = (categoryName) => {
    onFilter({ category: categoryName }); // Filtrar productos por categoría
  };

  return (
    <div className="home">
      <h1>Nuestros productos</h1>
      <p>Explora nuestra variedad de productos por categoría.</p>
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.name}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <button>Ver productos</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
