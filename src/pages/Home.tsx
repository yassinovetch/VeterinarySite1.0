import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Phone, MapPin, Heart, Syringe, Stethoscope, ChevronRight, Star } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Professional Veterinary Care"
        description="VetCare provides exceptional veterinary services with compassion and expertise. Book your appointment today for professional pet care."
      />
      
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1628009368231-7bb7cf0a6283?auto=format&fit=crop&q=80&w=2070" 
            alt="Veterinary Care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Professional Care for Your Beloved Pets</h1>
            <p className="text-xl mb-8">Providing exceptional veterinary services with compassion and expertise for over 20 years.</p>
            <Link
              to="/teleconsultation"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Stethoscope className="w-8 h-8" />, title: 'General Checkups', desc: 'Regular health examinations and preventive care' },
              { icon: <Syringe className="w-8 h-8" />, title: 'Vaccinations', desc: 'Complete vaccination programs for all pets' },
              { icon: <Heart className="w-8 h-8" />, title: 'Surgery', desc: 'Advanced surgical procedures and treatments' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link
                  to="/services"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose VetCare?</h2>
              <p className="text-gray-600 mb-8">
                Our team of experienced veterinarians and staff are dedicated to providing the highest quality care for your pets. 
                With state-of-the-art facilities and a compassionate approach, we ensure your pets receive the best possible treatment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Clock className="w-6 h-6" />, title: '24/7 Emergency', text: 'Round-the-clock care for emergencies' },
                  { icon: <Stethoscope className="w-6 h-6" />, title: 'Expert Team', text: 'Experienced veterinary professionals' },
                  { icon: <Heart className="w-6 h-6" />, title: 'Compassionate Care', text: 'Treating pets like family' },
                  { icon: <MapPin className="w-6 h-6" />, title: 'Multiple Locations', text: 'Convenient clinic locations' },
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
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068" 
                alt="Veterinary Team" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', text: 'Exceptional care for my dog. The staff is incredibly professional and caring.' },
              { name: 'Mike Peters', text: 'Best veterinary clinic in the area. They truly care about your pets.' },
              { name: 'Emily Davis', text: 'Amazing experience! The doctors are knowledgeable and gentle with the animals.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether it's a routine checkup or an urgent concern, our team is here to help. Book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/teleconsultation"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Book Online
            </Link>
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;