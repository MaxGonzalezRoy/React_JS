import React, { useEffect, useState } from 'react';
import { getProducts } from '../firebase/db';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState(''); // Nuevo filtro de precio

    // Obtener productos de Firebase
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
                setFilteredProducts(productsData); // Inicialmente mostrar todos los productos
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        fetchProducts();
    }, []);

    // Filtrar productos por categoría, marca y precio
    useEffect(() => {
        let filtered = products;

        if (categoryFilter) {
            filtered = filtered.filter(product => product.category === categoryFilter);
        }

        if (brandFilter) {
            filtered = filtered.filter(product => product.brand === brandFilter);
        }

        if (priceFilter) {
            filtered = filtered.filter(product => {
                if (priceFilter === '0-100') return product.price <= 100;
                if (priceFilter === '100-500') return product.price > 100 && product.price <= 500;
                if (priceFilter === '500-1000') return product.price > 500 && product.price <= 1000;
                if (priceFilter === '1000+') return product.price > 1000;
                return true;
            });
        }

        setFilteredProducts(filtered);
    }, [categoryFilter, brandFilter, priceFilter, products]);

    // Manejadores para los cambios de filtros
    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
        setBrandFilter(''); // Reinicia el filtro de marca al cambiar categoría
        setPriceFilter(''); // Reinicia el filtro de precio al cambiar categoría
    };

    const handleBrandChange = (e) => {
        setBrandFilter(e.target.value);
        setPriceFilter(''); // Reinicia el filtro de precio al cambiar marca
    };

    const handlePriceChange = (e) => {
        setPriceFilter(e.target.value);
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <div className="filter-container">
                {/* Filtro por categoría */}
                <label htmlFor="categoryFilter">Filtrar por Categoría:</label>
                <select id="categoryFilter" onChange={handleCategoryChange}>
                    <option value="">Todas</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Televisores">Televisores</option>
                    <option value="Smartwatches">Smartwatches</option>
                    <option value="Auriculares">Auriculares</option>
                    <option value="Smartphones">Smartphones</option>
                </select>

                {/* Filtro por marca */}
                <label htmlFor="brandFilter">Filtrar por Marca:</label>
                <select
                    id="brandFilter"
                    onChange={handleBrandChange}
                    disabled={!categoryFilter} // Solo habilitado si hay una categoría seleccionada
                >
                    <option value="">Todas</option>
                    {Array.from(
                        new Set(
                            products
                                .filter(product => !categoryFilter || product.category === categoryFilter)
                                .map(product => product.brand)
                        )
                    ).map((brand) => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>

                {/* Filtro por precio */}
                <label htmlFor="priceFilter">Filtrar por Precio:</label>
                <select
                    id="priceFilter"
                    onChange={handlePriceChange}
                    disabled={!categoryFilter && !brandFilter} // Solo habilitado si hay categoría o marca seleccionada
                >
                    <option value="">Todos</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-500">$100 - $500</option>
                    <option value="500-1000">$500 - $1000</option>
                    <option value="1000+">$1000+</option>
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
