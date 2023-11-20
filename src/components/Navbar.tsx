import React, { useState } from 'react';
import logo from '../assets/images/bagel_cafe_logo.png';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:justify-center md:space-x-10">

          {/* Left links for desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-20" />
          </div>

          {/* Right links for desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">Menu</a>
            <a href="#" className="hover:text-gray-300">Gallery</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block px-3 py-2 hover:bg-gray-700">Home</a>
          <a href="#" className="block px-3 py-2 hover:bg-gray-700">About</a>
          <a href="#" className="block px-3 py-2 hover:bg-gray-700">Menu</a>
          <a href="#" className="block px-3 py-2 hover:bg-gray-700">Gallery</a>
          <a href="#" className="block px-3 py-2 hover:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;