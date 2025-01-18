import React, { useEffect, useState } from 'react';
import { getProducts } from '../firebase/db';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        fetchProducts();
    }, []); // El arreglo vacío [] asegura que solo se ejecute una vez cuando el componente se monta

    return (
        <div>
            <h2>Lista de Productos</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
