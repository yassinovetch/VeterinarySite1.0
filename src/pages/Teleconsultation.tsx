import React from 'react';
import SEO from '../components/SEO';
import { Video, CheckCircle } from 'lucide-react';

const Teleconsultation = () => {
  return (
    <>
      <SEO
        title="Teleconsultation"
        description="Réservez une consultation en ligne avec nos vétérinaires. Obtenez des conseils d’experts dans le confort de votre maison."
      />

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Consultation vétérinaire en ligne</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtenez des conseils vétérinaires professionnels dans le confort de votre foyer grâce à notre plateforme de consultation vidéo sécurisée.            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 mb-6">
                  <Video className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Comment ca marche</h2>
                <ul className="space-y-4">
                  {[
                  'Prendre rendez-vous via notre système en ligne',
                  'Recevoir une confirmation avec le lien de l’appel vidéo',
                  'Connectez-vous avec notre vétérinaire à l’heure prévue',
                  'Obtenez des conseils professionnels et des soins de suivi',
                  ].map((step, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Réservez votre consultation</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Entrer votre nom"
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
                    Téléphone mobile/fixe
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Entrer votre téléphone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date souhaitée
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                Planifier la consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teleconsultation;