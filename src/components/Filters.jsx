import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
    const [category, setCategory] = useState('');

    // Handler para el cambio de categoría
    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        onFilter({
            category: newCategory,
        });
    };
};

export default Filters;
