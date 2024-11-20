import React from 'react';

const ProductsScreen: React.FC = () => {
    const products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80",
            name: "2023 Tesla Model S",
            price: "$89,990",
            specs: "670 HP • Dual Motor AWD"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1571127233265-74520f9c3cb3?auto=format&fit=crop&q=80",
            name: "2023 Audi R8",
            price: "$158,600",
            specs: "602 HP • 5.2L V10"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1519648023493-d82b5f8d7f1b?auto=format&fit=crop&q=80",
            name: "2023 Ford Mustang",
            price: "$55,300",
            specs: "450 HP • 5.0L V8"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1604503467503-ef6be80df898?auto=format&fit=crop&q=80",
            name: "2023 BMW X7",
            price: "$77,850",
            specs: "523 HP • 4.4L V8"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1584578348662-79a1d17b3c46?auto=format&fit=crop&q=80",
            name: "2023 Chevrolet Corvette",
            price: "$67,495",
            specs: "495 HP • 6.2L V8"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1576698487928-9c03c38bfa6a?auto=format&fit=crop&q=80",
            name: "2023 Porsche Taycan",
            price: "$82,700",
            specs: "402 HP • Electric AWD"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12">Our Cars</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-2">{product.specs}</p>
                                <p className="text-2xl font-bold text-blue-600">{product.price}</p>
                                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
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
