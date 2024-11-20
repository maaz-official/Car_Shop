import { Product } from "./product";

const products: Product[] = [
  {
    id: 1,
    name: "Toyota Corolla",
    price: 20000,
    description: "A reliable and fuel-efficient compact sedan with advanced safety features.",
    category: "Sedan",
    images: [
      "https://example.com/images/toyota-corolla-1.jpg",
      "https://example.com/images/toyota-corolla-2.jpg",
      "https://example.com/images/toyota-corolla-3.jpg"
    ],
    stock: 12,
    rating: 4.5,
    reviews: 230,
    reactions: {
      likes: 150,
      favorites: 90
    },
    features: [
      "Fuel efficiency: 30 MPG city / 40 MPG highway",
      "Advanced safety features: Lane assist, collision prevention",
      "Spacious interior with modern design"
    ]
  },
  {
    id: 2,
    name: "Ford Mustang",
    price: 35000,
    description: "A powerful and iconic sports car with cutting-edge technology.",
    category: "Sports Car",
    images: [
      "https://example.com/images/ford-mustang-1.jpg",
      "https://example.com/images/ford-mustang-2.jpg",
      "https://example.com/images/ford-mustang-3.jpg"
    ],
    stock: 5,
    rating: 4.8,
    reviews: 320,
    reactions: {
      likes: 220,
      favorites: 140
    },
    features: [
      "Engine: 5.0L V8 with 450 HP",
      "Technology: Apple CarPlay, Android Auto",
      "Customizable driving modes"
    ]
  },
  {
    id: 3,
    name: "Tesla Model 3",
    price: 45000,
    description: "An all-electric sedan with autopilot capabilities and premium features.",
    category: "Electric",
    images: [
      "https://example.com/images/tesla-model-3-1.jpg",
      "https://example.com/images/tesla-model-3-2.jpg",
      "https://example.com/images/tesla-model-3-3.jpg"
    ],
    stock: 8,
    rating: 4.9,
    reviews: 410,
    reactions: {
      likes: 350,
      favorites: 270
    },
    features: [
      "Battery range: 358 miles",
      "Autopilot and full self-driving capability",
      "Premium interior with a 15-inch touchscreen"
    ]
  },
  {
    id: 4,
    name: "Honda CR-V",
    price: 28000,
    description: "A spacious and versatile SUV with excellent fuel efficiency.",
    category: "SUV",
    images: [
      "https://example.com/images/honda-crv-1.jpg",
      "https://example.com/images/honda-crv-2.jpg",
      "https://example.com/images/honda-crv-3.jpg"
    ],
    stock: 10,
    rating: 4.6,
    reviews: 295,
    reactions: {
      likes: 200,
      favorites: 100
    },
    features: [
      "Fuel efficiency: 28 MPG city / 34 MPG highway",
      "All-wheel drive for all terrains",
      "Spacious cargo area with foldable seats"
    ]
  },
  {
    id: 5,
    name: "Chevrolet Silverado",
    price: 40000,
    description: "A durable and high-performing pickup truck for tough jobs.",
    category: "Truck",
    images: [
      "https://example.com/images/chevrolet-silverado-1.jpg",
      "https://example.com/images/chevrolet-silverado-2.jpg",
      "https://example.com/images/chevrolet-silverado-3.jpg"
    ],
    stock: 7,
    rating: 4.4,
    reviews: 185,
    reactions: {
      likes: 120,
      favorites: 80
    },
    features: [
      "Engine: 6.2L V8 with 420 HP",
      "Towing capacity: 13,300 lbs",
      "High-strength steel frame for durability"
    ]
  },
  {
    id: 6,
    name: "BMW X5",
    price: 60000,
    description: "A luxury SUV with advanced technology and superior comfort.",
    category: "Luxury SUV",
    images: [
      "https://example.com/images/bmw-x5-1.jpg",
      "https://example.com/images/bmw-x5-2.jpg",
      "https://example.com/images/bmw-x5-3.jpg"
    ],
    stock: 4,
    rating: 4.7,
    reviews: 310,
    reactions: {
      likes: 250,
      favorites: 180
    },
    features: [
      "Interior: Panoramic sunroof and leather seating",
      "Technology: Gesture control, head-up display",
      "Performance: 523 HP with adaptive suspension"
    ]
  },
  {
    id: 7,
    name: "Audi A4",
    price: 42000,
    description: "A premium sedan with a sleek design and top-notch performance.",
    category: "Luxury Sedan",
    images: [
      "https://example.com/images/audi-a4-1.jpg",
      "https://example.com/images/audi-a4-2.jpg",
      "https://example.com/images/audi-a4-3.jpg"
    ],
    stock: 6,
    rating: 4.6,
    reviews: 260,
    reactions: {
      likes: 170,
      favorites: 110
    },
    features: [
      "Engine: 2.0L TFSI with 261 HP",
      "Interior: Virtual cockpit and premium sound",
      "Safety: Adaptive cruise control and lane assist"
    ]
  },
  {
    id: 8,
    name: "Jeep Wrangler",
    price: 35000,
    description: "A rugged off-road SUV with iconic styling and unmatched capability.",
    category: "Off-Road",
    images: [
      "https://example.com/images/jeep-wrangler-1.jpg",
      "https://example.com/images/jeep-wrangler-2.jpg",
      "https://example.com/images/jeep-wrangler-3.jpg"
    ],
    stock: 3,
    rating: 4.3,
    reviews: 145,
    reactions: {
      likes: 110,
      favorites: 60
    },
    features: [
      "Off-road capabilities: 4x4 system with high ground clearance",
      "Iconic design with removable roof and doors",
      "Durable interior with water-resistant features"
    ]
  }
];

export default products;
