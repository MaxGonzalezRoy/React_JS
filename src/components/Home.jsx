// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import televisor from '../assets/images/televisor.avif';
import reloj from '../assets/images/reloj.jpg';
import auricular from '../assets/images/auricular.png';
import celular from '../assets/images/celular.jpg';
import laptop from '../assets/images/laptop.webp';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import { motion } from 'framer-motion';

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
    onFilter(categoryName);
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Nuestros productos</h1>
      <p>Explora nuestra variedad de productos por categoría.</p>
      <div className="category-list-container">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }}
              whileTap={{ scale: 0.9 }}
            >
              Ver productos
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

Home.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Home;