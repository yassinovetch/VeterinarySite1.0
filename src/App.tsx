import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Clinics from './pages/Clinics';
import Teleconsultation from './pages/Teleconsultation';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="clinics" element={<Clinics />} />
        <Route path="teleconsultation" element={<Teleconsultation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="legal" element={<Legal />} />
      </Route>
    </Routes>
  );
}

export default App;