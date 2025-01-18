import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../firebase/db";

const ItemListContainer = () => {
    const [items, setItems] = useState([]); // Almacena los productos
    const [loading, setLoading] = useState(true); // Indica si los datos están cargando
    const [error, setError] = useState(null); // Almacena errores si ocurren
    const { id } = useParams(); // Obtiene la categoría de los parámetros de la URL

    useEffect(() => {
        setLoading(true); // Inicia el estado de carga al inicio de cada fetch
        setError(null); // Resetea los errores antes de un nuevo fetch

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

                console.log("Productos obtenidos:", products); // Muestra los productos obtenidos
                setItems(products); // Actualiza el estado con los productos
            } catch (err) {
                console.error("Error al obtener productos:", err);
                setError("Ocurrió un error al cargar los productos.");
            } finally {
                setLoading(false); // Finaliza el estado de carga
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
