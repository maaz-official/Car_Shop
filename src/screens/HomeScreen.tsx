import React from 'react';
import { Star, Shield, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import products from '../data/products';

function HomeScreen() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div
                className="relative h-[600px] bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                        <div className="text-white">
                            <h1 className="text-5xl font-bold mb-4">Find Your Perfect Drive</h1>
                            <p className="text-xl mb-8">
                                Discover our premium selection of luxury and performance vehicles
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center">
                                    Browse Inventory
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search vehicles..."
                                    className="pl-10 pr-4 py-3 rounded-lg text-gray-900 w-64"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Cars */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Vehicles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.slice(0, 3).map((product) => ( // Only display the first 3 products
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-2">{product.description}</p>
                                    <p className="text-2xl font-bold text-blue-600">${product.price.toLocaleString()}</p>
                                    <Link to={`/products/${product.id}`}>
                                        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose AutoElite</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Star,
                                title: "Premium Selection",
                                description: "Carefully curated inventory of luxury and performance vehicles",
                            },
                            {
                                icon: Shield,
                                title: "Quality Guaranteed",
                                description: "Rigorous inspection and certification process for all vehicles",
                            },
                            {
                                icon: Clock,
                                title: "Expert Service",
                                description: "Professional maintenance and support available 24/7",
                            },
                        ].map((feature, index) => (
                            <div key={index} className="text-center">
                                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Phone className="h-6 w-6 mr-3" />
                                    <span>(555) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-6 w-6 mr-3" />
                                    <span>contact@autoelite.com</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-6 w-6 mr-3" />
                                    <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-2 rounded-lg text-gray-900"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 rounded-lg text-gray-900"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg text-gray-900"
                                ></textarea>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
