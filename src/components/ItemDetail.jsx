import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
    <div>
        <h2>{item?.title}</h2>
        <img src={item?.thumbnail} alt={item?.title} style={{ width: '300px' }} />
        <p>Descripción: {item?.description}</p>
        <p>Precio: ${item?.price}</p>
      {}
        <ItemCount stock={item?.stock} initial={1} onAdd={(quantity) => console.log(`Agregaste ${quantity} unidades al carrito`)} />
    </div>
    );
};

export default ItemDetail;
