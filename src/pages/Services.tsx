import React from 'react';
import SEO from '../components/SEO';
import { Stethoscope, Syringe, Heart, Microscope, Camera, Truck, Pill as Pills, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'General Consultations',
      description: 'Comprehensive health check-ups and preventive care for your pets.',
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      title: 'Surgeries',
      description: 'Advanced surgical procedures performed by experienced veterinarians.',
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Laboratory Analyses',
      description: 'In-house testing facilities for quick and accurate diagnoses.',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Medical Imaging',
      description: 'State-of-the-art imaging including X-rays and ultrasound.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Hospitalization',
      description: '24/7 care and monitoring for pets requiring extended medical attention.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Home Visits',
      description: 'Veterinary care in the comfort of your home for special cases.',
    },
    {
      icon: <Pills className="w-8 h-8" />,
      title: 'Medication Dispensing',
      description: 'Full-service pharmacy for all your pets\' prescription needs.',
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Teleconsultation',
      description: 'Virtual consultations for non-emergency medical advice.',
    },
  ];

  return (
    <>
      <SEO
        title="Our Services"
        description="Comprehensive veterinary services including consultations, surgeries, lab work, and emergency care."
      />

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of veterinary services to keep your pets healthy and happy.
            </p>
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