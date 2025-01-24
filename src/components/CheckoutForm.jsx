// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/cart.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    paymentMethod: 'creditCard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos, como guardarlos en una base de datos o enviarlos a un servidor
    console.log('Datos del formulario:', formData);
    alert('Compra realizada con éxito. Gracias por tu pedido.');
  };

  return (
    <div className="checkout-form">
      <h2>Datos de Pago y Envío</h2>
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
    </div>
  );
};

export default CheckoutForm;