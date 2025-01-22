// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import televisor from '../assets/images/televisor.avif';
import reloj from '../assets/images/reloj.jpg';
import auricular from '../assets/images/auricular.png';
import celular from '../assets/images/celular.jpg';
import laptop from '../assets/images/laptop.webp';
import { useNavigate } from 'react-router-dom';

const Home = ({ onFilter }) => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Televisores', image: televisor, description: 'Encuentra los mejores televisores para tu hogar.' },
    { name: 'Relojes', image: reloj, description: 'Los relojes más modernos y elegantes.' },
    { name: 'Auriculares', image: auricular, description: 'Disfruta de un sonido de alta calidad.' },
    { name: 'Celulares', image: celular, description: 'Últimos modelos de teléfonos móviles.' },
    { name: 'Laptops', image: laptop, description: 'Las mejores laptops para trabajo y entretenimiento.' },
  ];

  const handleCategoryClick = (categoryName) => {
    onFilter(categoryName); // Pasar el nombre de la categoría al filtro
    navigate(`/category/${categoryName.toLowerCase()}`); // Redirigir a la página de productos filtrados
  };

  return (
    <div className="home">
      <h1>Nuestros productos</h1>
      <p>Explora nuestra variedad de productos por categoría.</p>
      <div className="category-list-container"> {/* Contenedor para las tarjetas */}
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

Home.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Home;
