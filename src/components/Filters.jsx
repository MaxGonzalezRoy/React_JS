import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const handleFilterChange = () => {
        onFilter({
            category,
            brand,
            price,
            stock,
        });
    };

    return (
        <div className="filters">
            <h3>Filtros</h3>

            {/* Filtro por categoría */}
            <div className="filter-item">
                <label>Categoría</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Seleccionar categoría</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Televisores">Televisores</option>
                    <option value="Smartwatches">Smartwatches</option>
                    <option value="Auriculares">Auriculares</option>
                    <option value="Smartphones">Smartphones</option>
                </select>
            </div>

            {/* Filtro por marca */}
            <div className="filter-item">
                <label>Marca</label>
                <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option value="">Seleccionar marca</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Sony">Sony</option>
                    <option value="Xiaomi">Xiaomi</option>
                    {/* Agrega más marcas según tu base de datos */}
                </select>
            </div>

            {/* Filtro por precio */}
            <div className="filter-item">
                <label>Rango de precio</label>
                <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                >
                    <option value="">Seleccionar rango</option>
                    <option value="0-100">0 - 100</option>
                    <option value="100-500">100 - 500</option>
                    <option value="500-1000">500 - 1000</option>
                    <option value="1000+">Más de 1000</option>
                </select>
            </div>

            {/* Filtro por stock */}
            <div className="filter-item">
                <label>Stock</label>
                <select
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                >
                    <option value="">Seleccionar stock</option>
                    <option value="in-stock">En stock</option>
                    <option value="out-of-stock">Fuera de stock</option>
                </select>
            </div>

            <button onClick={handleFilterChange} className="btn-primary">
                Aplicar filtros
            </button>
        </div>
    );
};

export default Filters;
