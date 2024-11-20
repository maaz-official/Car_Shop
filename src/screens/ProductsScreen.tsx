import React from 'react';
import products from '../data/products';
import { useNavigate } from 'react-router-dom';

const ProductsScreen: React.FC = () => {

    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12">Our Cars</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Use the first image in the array */}
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                {/* Use product description */}
                                <p className="text-gray-600 mb-2">{product.description}</p>
                                <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg" onClick={() => navigate(`/products/${product.id}`)}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsScreen;
