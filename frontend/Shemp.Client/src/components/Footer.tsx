
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12 mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-500 rounded-lg"></div>
            <span className="text-2xl font-bold">Shemp</span>
          </div>
          <p className="text-gray-400 max-w-md">Create copyright-safe, fully customizable web interfaces for your film productions—from social media to hacking terminals. Professional tools for modern filmmakers.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Shemp. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
