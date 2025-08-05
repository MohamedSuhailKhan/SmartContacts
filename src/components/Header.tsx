import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, MenuIcon, XIcon, SearchIcon, UserIcon } from 'lucide-react';
import { Button } from './Button';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-blue-600 text-xl font-bold">
                Smart Contacts
              </Link>
            </div>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Shop
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Brands
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Prescription
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <SearchIcon className="h-5 w-5" />
            </button>
            <Link to="/admin" className="text-gray-500 hover:text-gray-700">
              <UserIcon className="h-5 w-5" />
            </Link>
            <button className="text-gray-500 hover:text-gray-700 relative">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Shop
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Brands
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Prescription
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <SearchIcon className="h-5 w-5" />
              </button>
              <Link to="/admin" className="text-gray-500 hover:text-gray-700">
                <UserIcon className="h-5 w-5" />
              </Link>
              <button className="text-gray-500 hover:text-gray-700 relative">
                <ShoppingCartIcon className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>}
    </header>;
};