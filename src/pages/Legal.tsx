import React from 'react';
import SEO from '../components/SEO';

const Legal = () => {
  return (
    <>
      <SEO
        title="Legal Notices"
        description="Legal information, privacy policy, and terms of service for VetCare veterinary services."
      />

      <div className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal Notices</h1>

          <div className="space-y-8">
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <div className="prose text-gray-600">
                <p className="mb-4">
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Pet health records and medical history</li>
                  <li>Appointment and consultation details</li>
                  <li>Payment information</li>
                </ul>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
              <div className="prose text-gray-600">
                <p className="mb-4">
                  By using our services, you agree to these terms. Please read them carefully.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Service Agreement</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Appointment scheduling and cancellation policies</li>
                  <li>Payment terms and conditions</li>
                  <li>Emergency service provisions</li>
                  <li>Medical records management</li>
                </ul>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
              <div className="prose text-gray-600">
                <p className="mb-4">
                  We use cookies to improve your experience on our website and provide personalized services.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Types of Cookies</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to improve our service</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legal;