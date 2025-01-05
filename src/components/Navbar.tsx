import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import FeedbackModal from './feedback/FeedbackModal';
import { scrollToSection } from '../utils/scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-navy-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo className="h-14 w-14" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a 
                  href="#features" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('features');
                  }}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </a>
                <a 
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('download');
                  }}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Download
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
                <button 
                  onClick={() => setIsFeedbackOpen(true)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Feedback
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a 
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('features');
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </a>
            <a 
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('download');
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Download
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <button 
              onClick={() => setIsFeedbackOpen(true)}
              className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Feedback
            </button>
          </div>
        </div>
      )}

      <FeedbackModal 
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </nav>
  );
}