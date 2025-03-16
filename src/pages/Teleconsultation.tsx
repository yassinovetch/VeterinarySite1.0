import React from 'react';
import SEO from '../components/SEO';
import { Video, CheckCircle } from 'lucide-react';

const Teleconsultation = () => {
  return (
    <>
      <SEO
        title="Teleconsultation"
        description="Book an online consultation with our veterinarians. Get expert advice from the comfort of your home."
      />

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Online Veterinary Consultation</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get professional veterinary advice from the comfort of your home through our secure video consultation platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 mb-6">
                  <Video className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <ul className="space-y-4">
                  {[
                    'Book an appointment through our online system',
                    'Receive confirmation with video call link',
                    'Connect with our vet at scheduled time',
                    'Get professional advice and follow-up care',
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
              <h3 className="text-xl font-semibold mb-6">Book Your Consultation</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
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
                  Schedule Consultation
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