
import React from 'react';

const Header: React.FC = () => (
  <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
    <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-500 rounded-lg"></div>
        <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Shemp</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
        <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
        <button className="px-6 py-2 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition">Get Started</button>
      </div>
    </nav>
  </header>
);

export default Header;
