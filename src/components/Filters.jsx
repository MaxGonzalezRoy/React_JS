import { useState } from 'react';
import PropTypes from 'prop-types';


const Filters = ({ onFilter }) => {
    const [category, setCategory] = useState('');

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setCategory(newCategory);
        onFilter({
            category: newCategory,
        });
    };

    return (
        <div>
            <label htmlFor="category">Category:</label>
            <select id="category" value={category} onChange={handleCategoryChange}>
            </select>
        </div>
    );
};

Filters.propTypes = {
    onFilter: PropTypes.func.isRequired,
};

export default Filters;
