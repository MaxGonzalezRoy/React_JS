import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
    return (
        <Router>
        <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/product/:productId" element={<ItemDetailContainer />} />
                <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
            </Routes>
        </Router>
    );
};

export default App;