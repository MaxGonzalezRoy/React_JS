import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <Item key={item.name} product={item} />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
