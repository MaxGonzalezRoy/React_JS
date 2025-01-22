// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import '../styles/item.css'


const ItemList = ({ items }) => {
    if (!Array.isArray(items) || items.length === 0) {
        return <p>No hay productos para mostrar.</p>;
    }

    return (
        <div className="item-list-container">
            {items.map((item) => (
                <div key={item.name} className="product-card">
                    <Item product={item} />
                </div>
            ))}
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ItemList;
