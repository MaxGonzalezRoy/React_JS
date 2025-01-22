// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ItemCount from './ItemCount';
import '../styles/item.css';

const ItemDetail = ({ item }) => {
    return (
        <div>
            <h2>{item?.title}</h2>
            <img src={item?.thumbnail} alt={item?.title} style={{ width: '300px' }} />
            <p>Descripción: {item?.description}</p>
            <p>Precio: ${item?.price}</p>
            <ItemCount
                stock={item?.stock}
                initial={1}
                onAdd={(quantity) => console.log(`Agregaste ${quantity} unidades al carrito`)}
            />
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
};

export default ItemDetail;
