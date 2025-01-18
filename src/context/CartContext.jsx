import { createContext, useContext, useState } from 'react';

// Crear el contexto de carrito
const CartContext = createContext();

// Hook personalizado para usar el carrito
export const useCart = () => {
    return useContext(CartContext);
};

// Proveedor del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

  // Lógica para manejar el carrito aquí
    const addToCart = (product) => {
    setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
    setCart([]);
    };

    return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children}
    </CartContext.Provider>
    );
};
