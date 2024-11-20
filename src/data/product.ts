export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    images: string[];
    stock: number;
    rating: number;
    reviews: number;
    reactions: {
      likes: number;
      favorites: number;
    };
    features: string[];
  }
  