// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../firebase/db";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                console.log("Productos obtenidos desde Firebase:", productsData);
                setProducts(productsData);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div>
            <h1>Productos</h1>
            {products.length > 0 ? (
                <ItemList items={products} />
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
};

export default Products;
