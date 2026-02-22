import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TbCopyCheckFilled } from "react-icons/tb";
import { TbHandClick } from "react-icons/tb";
import { MdSafetyCheck } from "react-icons/md";
import { RiWifiOffLine } from "react-icons/ri";

const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    
    {/* Hero Section */}
    <section className="relative bg-linear-to-br from-purple-100 via-blue-100 to-pink-100 pt-20 pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-600 via-blue-600 to-blue-500 bg-clip-text text-transparent leading-tight">
            Fake Screens.<br />Real Production Value.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Find interactive on-screen props, load custom content, start shooting in minutes.
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
          <div className="bg-linear-to-br from-blue-100 to-blue-200 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl"><TbCopyCheckFilled className='text-white'/></div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Suite of Clone Apps</h3>
            <p className="text-gray-600">Social media clones with customizable posts, profiles, and interactions to fit your story.</p>
          </div>
          
          <div className="bg-linear-to-br from-blue-100 to-blue-200 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl"><TbHandClick className='text-white'/></div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Fully Interactive</h3>
            <p className="text-gray-600">Actors can engage with live web apps, creating a realistic and immersive scene.</p>
          </div>
          
          <div className="bg-linear-to-br from-blue-100 to-blue-200 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl"><MdSafetyCheck className='text-white'/></div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Lifetime Access</h3>
            <p className="text-gray-600">One-time purchases for single templates or subscribe for complete library access.</p>
          </div>
          
          <div className="bg-linear-to-br from-blue-100 to-blue-200 p-8 rounded-2xl hover:shadow-xl transition">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl"><RiWifiOffLine className='text-white'/></div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Offline Workflow</h3>
            <p className="text-gray-600">Shooting on location without internet connection is seamless with our offline-ready templates.</p>
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
