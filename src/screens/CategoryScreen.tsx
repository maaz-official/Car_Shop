import React from 'react';
import { Link } from 'react-router-dom';

const CategoryScreen: React.FC = () => {
    const categories = [
        {
            id: 1,
            name: "Luxury Cars",
            description: "Experience unparalleled comfort and performance.",
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80",
            link: "/products?category=luxury"
        },
        {
            id: 2,
            name: "Electric Cars",
            description: "Drive into the future with sustainable vehicles.",
            image: "https://images.unsplash.com/photo-1611154208400-118ae27c3b08?auto=format&fit=crop&q=80",
            link: "/products?category=electric"
        },
        {
            id: 3,
            name: "Sports Cars",
            description: "Unleash speed and power with high-performance cars.",
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9d?auto=format&fit=crop&q=80",
            link: "/products?category=sports"
        },
        {
            id: 4,
            name: "SUVs",
            description: "Spacious, versatile, and ready for every adventure.",
            image: "https://images.unsplash.com/photo-1613977257361-96ca166d5f1c?auto=format&fit=crop&q=80",
            link: "/products?category=suv"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12">Car Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link
                            to={category.link}
                            key={category.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                                <p className="text-gray-600">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryScreen;
