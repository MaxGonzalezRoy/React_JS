import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../firebase/db";
import '../styles/item.css'


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchProducts = async () => {
            try {
                let products;
                if (id) {
                    console.log(`Buscando productos de la categoría: ${id}`);
                    products = await getProductsByCategory(id);
                } else {
                    console.log("Buscando todos los productos...");
                    products = await getProducts();
                }

                console.log("Productos obtenidos:", products);
                setItems(products);
            } catch (err) {
                console.error("Error al obtener productos:", err);
                setError("Ocurrió un error al cargar los productos.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [id]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (items.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }

    return <ItemList items={items} />;
};

export default ItemListContainer;
