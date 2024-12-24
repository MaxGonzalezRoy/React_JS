import React from 'react';
import Item from './Item'; // Importa correctamente el componente Item

const ItemList = ({ items }) => {
    if (!items || items.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }

    return (
        <div className="row">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;