import React, { useEffect, useState } from 'react';
import { getProducts } from '../firebase/db';

const ItemList = ({ categoryFilter }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Obtener productos de Firebase
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
  }, []); // Este useEffect solo corre una vez cuando el componente se monta

  // Filtrar productos solo por categoría
  useEffect(() => {
    if (categoryFilter) {
      // Asegurarnos de que la categoría coincida sin importar mayúsculas/minúsculas y espacios extra
      const filtered = products.filter(product =>
        product.category.trim().toLowerCase() === categoryFilter.trim().toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); // Si no hay categoría seleccionada, limpiamos los productos
    }
  }, [categoryFilter, products]); // Este useEffect depende de `categoryFilter` y `products`

  // Función para obtener el color de stock según la cantidad
  const getStockColor = (stock) => {
    return stock < 5 ? 'red' : 'green';
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      {filteredProducts.length === 0 ? (
        <p>No se encontraron productos en esta categoría.</p> // Mensaje cuando no hay productos en la categoría
      ) : (
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
                  <p className="card-text">Precio: ${product.price}</p>
                  <p
                    className="card-text"
                    style={{ color: getStockColor(product.stock) }}
                  >
                    Stock: {product.stock}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
