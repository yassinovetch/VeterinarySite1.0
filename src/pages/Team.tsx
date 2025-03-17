import React from 'react';
import SEO from '../components/SEO';
import { Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Veterinarian',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
      description: 'Specializing in small animal medicine with over 15 years of experience.',
      specialties: ['General Medicine', 'Surgery', 'Preventive Care'],
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Veterinary Surgeon',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
      description: 'Expert in advanced surgical procedures and emergency care.',
      specialties: ['Orthopedic Surgery', 'Soft Tissue Surgery', 'Emergency Care'],
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Veterinarian',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
      description: 'Passionate about preventive care and animal behavior.',
      specialties: ['Preventive Medicine', 'Animal Behavior', 'Dental Care'],
    },

  ];

  return (
    <>
      <SEO
        title="Our Team"
        description="Meet our experienced team of veterinarians and specialists dedicated to providing the best care for your pets."
      />

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced veterinarians are committed to providing the highest quality care for your beloved pets.
            </p>
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