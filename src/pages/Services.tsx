import React from 'react';
import SEO from '../components/SEO';
import { Stethoscope, Syringe, Heart, Microscope, Camera, Truck, Pill as Pills, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Consultation générale',
      description: 'Bilans de santé complets et soins préventifs pour vos animaux.',
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      title: 'Chirurgies',
      description: 'Procédures chirurgicales avancées effectuées par des vétérinaires expérimentés.',
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Analyses en laboratoire',
      description: 'Analyses pour des diagnostics rapides et précis.',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Imagerie Médicale',
      description: 'Imagerie de pointe, y compris les rayons X et les ultrasons.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Hospitalisation',
      description: 'Soins et surveillance 24h/7j pour les animaux nécessitant des soins médicaux prolongés.',
    },

    {
      icon: <Pills className="w-8 h-8" />,
      title: 'Délivrance des médicaments',
      description: 'Pharmacie à service complet pour tous les besoins en prescription de vos animaux',
    },
    {
      icon: <Pills className="w-8 h-8" />,
      title: 'Visite à domicile',
      description: 'Des Soins Pratiques et Personnalisés pour Vos Animaux à la Maison',
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Teleconsultation',
      description: 'Consultations virtuelles pour des conseils médicaux des urgents mineurs.',
    },
  ];

  return (
    <>
      <SEO
        title="Nos Services"
        description="Comprehensive veterinary services including consultations, surgeries, lab work, and emergency care."
      />

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous offrons une gamme complète de services vétérinaires pour garder vos animaux de compagnie en bonne santé et heureux.            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;