import React from 'react';
import SEO from '../components/SEO';
import { MapPin, Phone, Clock } from 'lucide-react';

const Clinics = () => {
  const clinics = [
    {
      name: 'Main Clinic',
      address: 'Commune rural Ouled Zmam Fquih Ben Saleh',
      phone: '+212 6 22 726 903',
      hours: 'Mon-Fri: 8:00-20:00, Sat: 9:00-17:00',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=800',
    },
  
  ];

  return (
    <>
      <SEO
        title="Our Clinics"
        description="Find our veterinary clinics near you. Multiple locations with state-of-the-art facilities for your pet's care."
      />

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Clinics</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visitez l’un de nos établissements modernes équipés des dernières technologies pour les soins de votre animal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clinics.map((clinic, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="h-64 relative">
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{clinic.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{clinic.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{clinic.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{clinic.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clinics;