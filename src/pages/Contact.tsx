import React from 'react';
import SEO from '../components/SEO';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contactez-Nous"
        description="Get in touch with our veterinary team. We're here to help with all your pet care needs."
      />

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions ? Nous sommes là pour vous aider. Contactez notre équipe pour toute question sur nos services.            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contactez-Nous</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Entrer votre nom "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Entrer votre email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Entrer sujet"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={4}
                      placeholder="Entrer votrer message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    Envoyer Message
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h2 className="text-2xl font-semibold mb-6"> Information de contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+212 6 23-210-441 / +212 6 22-726-903</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">dornor82@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-gray-600">Commune rurale Ouled Zmam Fqui Ben Saleh </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-gray-600">Lundi-Samedi: Matin 8:00-12:00  </p>
                      <p className="text-gray-600">     Après-midi 14:00 à 18:00 </p>

                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-2">Service d'urgence</h3>
                <p className="mb-4">
                Pour les urgences en dehors des heures d’ouverture, veuillez appeler 24/7 :
                </p>
                <p className="text-2xl font-bold">+212 6 22-726-903</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;