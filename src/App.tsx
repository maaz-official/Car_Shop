import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages/components
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductsScreen from './screens/ProductsScreen';
import CategoryScreen from './screens/CategoryScreen';
import AboutScreen from './screens/AboutScreen';
import ProductDetailsScreen from './screens/ProductDetailedScreen';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            {/* Navbar should be outside Routes */}
            <Navbar />
            <Routes>
                {/* Define the routes for your app */}
                <Route path="/" element={<HomeScreen />} />
                <Route path="/products/:id" element={<ProductDetailsScreen />} />
                <Route path="/cars" element={<ProductsScreen />} />
                <Route path="/categories" element={<CategoryScreen />} />
                <Route path="/about-us" element={<AboutScreen />} />


                {/* Uncomment and add more routes as needed */}
                {/* <Route path="/about" element={<AboutScreen />} />
                <Route path="/product/:id" element={<ProductScreen />} />
                <Route path="*" element={<NotFoundScreen />} /> */}
            </Routes>
            {/* Footer should be outside Routes */}
            <Footer />
        </BrowserRouter>
    );
};

export default App;
