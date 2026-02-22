
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    
    {/* Hero Section */}
    <section className="relative bg-linear-to-br from-purple-50 via-blue-50 to-pink-50 pt-20 pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-600 via-blue-600 to-blue-500 bg-clip-text text-transparent leading-tight">
            Fake Screens.<br />Real Production Value.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Find the perfect on-screen prop. Your content, shoot-ready in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform">
              Shop Templates
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Any Interface, Any Story</h2>
          <p className="text-xl text-gray-600">Customize authentic-looking digital interfaces for any scene</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">�</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Social Media Apps</h3>
            <p className="text-gray-600">Instagram, Twitter, TikTok-style interfaces with custom posts, profiles, and interactions.</p>
          </div>
          
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">💻</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Hacking Terminals</h3>
            <p className="text-gray-600">Command-line interfaces, code editors, and system dashboards for tech thriller scenes.</p>
          </div>
          
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">🗄️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Database Systems</h3>
            <p className="text-gray-600">Government databases, corporate records, security systems, and classified file browsers.</p>
          </div>
          
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">📰</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">News and Web Apps</h3>
            <p className="text-gray-600">News websites, streaming platforms, messaging apps and more.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section id="about" className="py-20 px-6 bg-linear-to-r from-blue-600 to-blue-500">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Shoot Your Next Scene?</h2>
        <p className="text-xl mb-8 opacity-90">Join filmmakers who trust Shemp for interactive, on-screen props.</p>
        <button className="px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition transform">
          Get Started for Free
        </button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
