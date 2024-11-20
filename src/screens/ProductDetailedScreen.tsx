import { useParams } from 'react-router-dom';
import products from '../data/products';

function ProductDetailsScreen() {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === parseInt(id || "0"));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Product Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div>
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-96 object-cover rounded-lg mb-4"
                        />
                        <div className="flex space-x-4">
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Gallery ${index}`}
                                    className="w-24 h-24 object-cover rounded-lg border"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                        <p className="text-xl text-gray-600 mb-4">{product.description}</p>
                        <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toLocaleString()}</p>
                        <div className="mb-4">
                            <p>Category: {product.category}</p>
                            <p>Rating: {product.rating} ⭐</p>
                            <p>Stock: {product.stock > 0 ? `${product.stock} available` : "Out of Stock"}</p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsScreen;
