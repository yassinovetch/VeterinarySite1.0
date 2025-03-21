import React from 'react';
import SEO from '../components/SEO';
import { Mail } from 'lucide-react';
const Sty1={
  height:'460px'
  }
const Team = () => {
  const team = [
    {
      name: 'Dr. DOURHOU NOUREDDINE',
      role: 'Vétérinaire mixte ',
      image: '/Images/VetDoctor.png?auto=format&fit=crop&q=80&w=800',
      description: 'Expert en médecine rurale et canine avec plus de 15 ans d’expérience.',
      specialties: ['Médecine générale', 'Chirurgie', 'Soins préventifs','Soins urgence'],
    },
    {
      name: 'Dr. ABID SAIDA',
      role: 'Vétérinaire auxiliaire',
      image: '/Images/assistante.png?auto=format&fit=crop&q=80&w=800',
      description: 'spécialisée en médicine générale et soins de premier niveau.',
      specialties: ['Médecine générale', 'Soins préventifs'],
    },

  ];

  return (
    <>
      <SEO
        title="Notre équipe Team"
        description="Rencontrez notre équipe expérimentée de vétérinaires et de spécialistes qui se consacrent à fournir les meilleurs soins à vos animaux."
      />

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Rencontrez notre équipe</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nos vétérinaires expérimentés s’engagent à fournir des soins de la plus haute qualité à vos animaux  bien-aimés. </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    style={Sty1}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 transition">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;