// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { confirmPurchase } from '../firebase/db';
import '../styles/cart.css';

const CheckoutForm = () => {
    const { cart, getTotal } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        paymentMethod: 'creditCard',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        if (cart.length === 0) {
            setErrorMessage('El carrito está vacío. No se puede realizar la compra.');
            setIsLoading(false);
            return;
        }

        const totalAmount = getTotal();
        const userDetails = formData;

        try {
            const orderId = await confirmPurchase(cart, userDetails, totalAmount);
            setOrderId(orderId);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    return (
        <div className="checkout-form">
            <h2>Datos de Pago y Envío</h2>
            {cart.length === 0 ? (
                <div className="empty-cart-message">
                    <p>Tu carrito está vacío. Agrega productos antes de proceder.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre Completo:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Dirección:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="paymentMethod">Método de Pago:</label>
                        <select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="creditCard">Tarjeta de Crédito</option>
                            <option value="debitCard">Tarjeta de Débito</option>
                            <option value="paypal">PayPal</option>
                            <option value="cash">Pago en Efectivo</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">Confirmar Compra</button>
                </form>
            )}

            {isLoading && <div className="loader">Procesando tu compra...</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {orderId && (
                <div className="order-confirmation">
                    <h3>¡Compra realizada con éxito!</h3>
                    <p>Tu orden ha sido confirmada. El ID de tu compra es: {orderId}</p>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;