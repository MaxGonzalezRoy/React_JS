import React, { useEffect, useState } from 'react';
import { getProducts } from '../firebase/db';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');

    // Obtener productos de Firebase
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
                setFilteredProducts(productsData);  // Al principio muestra todos los productos
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        fetchProducts();
    }, []);

    // Filtrar productos por categoría
    useEffect(() => {
        if (categoryFilter) {
            setFilteredProducts(products.filter(product => product.category === categoryFilter));
        } else {
            setFilteredProducts(products);  // Si no hay filtro, muestra todos los productos
        }
    }, [categoryFilter, products]);

    // Manejar el cambio de categoría
    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    return (
        <div>
            <h2>Lista de Productos</h2>

            {/* Filtro de categorías */}
            <div className="filter-container">
                <label htmlFor="categoryFilter">Filtrar por Categoría:</label>
                <select id="categoryFilter" onChange={handleCategoryChange}>
                    <option value="">Todas</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Televisores">Televisores</option>
                    <option value="Smartwatches">Smartwatches</option>
                    <option value="Auriculares">Auriculares</option>
                    <option value="Smartphones">Smartphones</option>
                </select>
            </div>

            {/* Mostrar productos filtrados */}
            <div className="row">
                {filteredProducts.map((product) => (
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
