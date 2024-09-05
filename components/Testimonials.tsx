import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashionista",
    image: "https://i.pravatar.cc/150?img=16",
    content:
      "Estou absolutamente apaixonada pela qualidade dos cachorrinhos que recebi. A atenção aos detalhes e o ajuste são perfeitos!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Amante de tecnologia",
    image: "https://i.pravatar.cc/150?img=33",
    content:
      "Os bordados que comprei superaram minhas expectativas. Envio rápido e ótimo atendimento ao cliente também!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Veterinária",
    image: "https://i.pravatar.cc/150?img=22",
    content:
      "Os itens de decoração que comprei transformaram meu espaço. Excelente qualidade e designs exclusivos!",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Avaliações dos nossos clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
