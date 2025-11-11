import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Cart from '../pages/Cart';
import { NotFound } from '../pages/NotFound';
import { ProductDetail } from '../pages/ProductDetail';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    );
};

export default AppRoutes;