import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { fetchData } from './api';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null); // Estado para el producto
    const [loading, setLoading] = useState(true); // Estado para la carga
    const { id } = useParams(); // Obtén el ID del producto desde la URL

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                setLoading(true); // Indica que está cargando
                const data = await fetchData(`/products/${id}`); // Llama a la API
                setItem(data); // Actualiza el estado con los detalles del producto
            } catch (error) {
                console.error('Error al cargar los detalles del producto:', error);
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchItemDetails();
    }, [id]);

    // Renderizado condicional para los diferentes estados
    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (!item) {
        return <p>No se encontró el producto.</p>;
    }

    return (
        <div>
            <h2>Detalles del Producto</h2>
            <ItemDetail {...item} /> {/* Renderiza el componente de detalles */}
        </div>
    );
};

export default ItemDetailContainer;