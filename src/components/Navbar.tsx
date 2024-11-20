import React from 'react';
import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Car className="h-8 w-8 text-blue-600" />
                        <span className="ml-2 text-xl font-bold text-gray-900">Maaz Cars</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-900 hover:text-blue-600">Home</Link>
                        <Link to="/cars" className="text-gray-900 hover:text-blue-600">Cars</Link>
                        <Link to="/categories" className="text-gray-900 hover:text-blue-600">Cars Category</Link>
                        <Link to="/about-us" className="text-gray-900 hover:text-blue-600">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
