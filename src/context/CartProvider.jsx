// eslint-disable-next-line no-unused-vars
import React from 'react';
import { CartProvider } from './CartContext';
import PropTypes from 'prop-types';

const AppWithCartProvider = ({ children }) => {
    return <CartProvider>{children}</CartProvider>;
};

AppWithCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppWithCartProvider;
