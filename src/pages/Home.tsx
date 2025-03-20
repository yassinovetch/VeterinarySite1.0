import React from 'react';
import logoo from './assets/Principale.png';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Phone, MapPin, Heart, Syringe, Stethoscope, ChevronRight, Star,Pill as Pills } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Soins vétérinaires professionnels"
        description="VetCare fournit des services vétérinaires exceptionnels avec compassion et expertise. Prenez rendez-vous dès aujourd’hui pour des soins professionnels pour animaux de compagnie."
      />
      
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            /*src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=60&w=2070" */
            src="/Images/Principale.png?auto=format&fit=crop&q=60&w=2070"
            alt="Veterinary Care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Des soins professionnels pour vos animaux bien-aimés</h1>
            <p className="text-xl mb-8">Fournir des services vétérinaires exceptionnels avec compassion et expertise depuis plus de 10 ans.</p>
            <Link
              to="/teleconsultation"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              Teleconsultation
            </Link>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir VetCare?</h2>
              <p className="text-gray-600 mb-8">
              Notre équipe de vétérinaires et de personnel expérimentés s’engage à fournir des soins de la plus haute qualité à vos animaux de compagnie.
Grâce à des installations à la fine pointe de la technologie et à une approche compatissante, nous veillons à ce que vos animaux de compagnie reçoivent le meilleur traitement possible.
</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Clock className="w-6 h-6" />, title: 'Service urgence 24/7 ', text: 'Soins durgence' },
                  { icon: <Stethoscope className="w-6 h-6" />, title: 'Equipe Exprimenté', text: 'Professionnels vétérinaires expérimentés' },
                  { icon: <Heart className="w-6 h-6" />, title: 'Soins de compassion', text: 'Traiter les animaux de compagnie comme des membres de la famille' },
                  { icon: <Pills className="w-6 h-6" />, title: 'Soins à domicile ', text: 'Déplacement pour furnir ds soins à votre domicile' },

                ].map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-blue-600 mb-2">{feature.icon}</div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px]">
              <img 
                /*src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068" */
                src="../assets/pictures/interieur.png?auto=format&fit=crop&q=80&w=2068"
                alt="Veterinary Team" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


     
    </>
  );
};

export default Home;