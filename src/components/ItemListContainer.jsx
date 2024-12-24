<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const urlBase = 'https://dummyjson.com/products';
        const urlByCategory = `https://dummyjson.com/products/category/${id}`;

        const fetchProducts = async () => {
            try {
                const response = await fetch(id ? urlByCategory : urlBase);
                const data = await response.json();
                setItems(data.products || []); // Asegúrate de manejar arrays vacíos
            } catch (error) {
                console.error('Error al cargar productos:', error);
            }
        };

        fetchProducts();
    }, [id]);

    if (!items || items.length === 0) {
        return <p>Cargando productos...</p>;
    }

    return <ItemList items={items} />;
=======
/* eslint-disable react/prop-types */
const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>{greeting}</h2>
        </div>
    );
>>>>>>> ac5c52b9098e684847bad0287260148a949ee02f
};

export default ItemListContainer;