import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, PawPrint as Paw, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
   /*{ name: 'Accueil', path: '/' },*/
    { name: 'Services', path: '/services' },
    { name: 'Notre équipe', path: '/team' },
    { name: 'Notre Clinique', path: '/clinics' },
    /*{ name: 'Teleconsultation', path: '/teleconsultation' },*/
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="py-2 border-b border-gray-100">
          <div className="flex justify-end items-center">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>Urgence: +212 6 22-726-903</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Paw className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">VetCare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 transition ${
                    isActive ? 'text-blue-600 font-semibold' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
           <Link
              to="/teleconsultation"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Teleconsultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-gray-700 hover:text-blue-600 transition ${
                      isActive ? 'text-blue-600 font-semibold' : ''
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/teleconsultation"
                className="block w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Online
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;