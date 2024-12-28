import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { fetchData } from './api';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                setLoading(true);
                const data = await fetchData(`/products/${id}`);
                setItem(data);
            } catch (error) {
                console.error('Error al cargar los detalles del producto:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItemDetails();
    }, [id]);

    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (!item) {
        return <p>No se encontró el producto.</p>;
    }

    return (
        <div>
            <h2>Detalles del Producto</h2>
            <ItemDetail {...item} /> {}
        </div>
    );
};

export default ItemDetailContainer;