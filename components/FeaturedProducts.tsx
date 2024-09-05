import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Bordadinho",
    price: 199.99,
    image: "/bordado.jpg",
  },
  {
    id: 2,
    name: "Capivarinha",
    price: 200.99,
    image: "/capivara.jpg",
  },
  {
    id: 3,
    name: "Florzinha",
    price: 129.99,
    image: "/flor.jpg",
  },
  {
    id: 4,
    name: "Cachorrinho",
    price: 199.99,
    image: "/cachorro.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-blue-600 mb-4">
                  R${product.price.toFixed(2)}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
