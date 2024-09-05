"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the email to your backend or newsletter service
    console.log("Submitted email:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Garanta ofertas exclusivas da nossa L-oja
            </h2>
            <p className="mt-3 max-w-3xl text-lg">
              Cadastre-se em nossa newsletter e seja o primeiro a saber sobre
              novidades, promoções especiais e descontos exclusivos.
            </p>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#subscribe"
                  className="inline-flex items-center justify-center px-5 py-3 mt-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-300"
                >
                  Saiba mais
                  <ArrowRight
                    className="ml-2 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <form onSubmit={handleSubmit} className="sm:flex" id="subscribe">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md text-gray-900"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white transition duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  Inscreva-se
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-blue-200">
              Nos preocupamos com seus dados. Leia nossa{" "}
              <a href="#" className="text-white font-medium underline">
                Política de privacidade
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
