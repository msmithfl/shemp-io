
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
            Copyright-Safe Social Media for Your Films
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Create fully customizable, interactive social media clones for your scenes.<br/>No copyright issues, complete creative control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform">
              Start Creating Free
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Everything You Need On Set</h2>
          <p className="text-xl text-gray-600">Professional tools designed for modern film production</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">📸</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Upload Your Content</h3>
            <p className="text-gray-600">Load custom images and videos to create authentic-looking posts for your scenes.</p>
          </div>
          
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">👤</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Fake Profiles</h3>
            <p className="text-gray-600">Create believable character profiles with custom names, bios, and follower counts.</p>
          </div>
          
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">🎨</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Branding</h3>
            <p className="text-gray-600">Brand the app with your own logo, colors, and name to fit your story.</p>
          </div>
          
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Fully Interactive</h3>
            <p className="text-gray-600">Real working app that actors can actually interact with during filming.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section id="about" className="py-20 px-6 bg-linear-to-r from-blue-600 to-blue-500">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Shoot Your Next Scene?</h2>
        <p className="text-xl mb-8 opacity-90">Join filmmakers who trust Shemp for copyright-safe social media scenes.</p>
        <button className="px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition transform">
          Get Started for Free
        </button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
