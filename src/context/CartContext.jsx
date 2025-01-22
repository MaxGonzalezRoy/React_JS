// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Recuperamos el carrito desde el localStorage cuando el componente se monta
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart)); // Recuperamos los productos del localStorage
        }
    }, []);

    // Guardamos el carrito en el localStorage cada vez que cambie
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart)); // Guardamos el carrito en el localStorage
        }
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                // Si el producto ya está en el carrito, sumamos la cantidad existente
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                        : item
                );
            }
            // Si el producto no está en el carrito, lo agregamos con la cantidad proporcionada (por defecto 1)
            return [...prevCart, { ...product, quantity: product.quantity || 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guardamos el carrito actualizado en el localStorage
            return updatedCart;
        });
    };

    const getTotal = () => {
        // Calculamos el precio total sumando el precio de cada producto por su cantidad
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

// Validación de los props
CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validamos que 'children' sea un nodo React obligatorio
};

// Hook para usar el contexto del carrito
export const useCart = () => useContext(CartContext);
