import React, { useState } from 'react';
import { Button } from './Button';
import { generateSimpleWhatsAppURL } from '../lib/whatsapp';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <header className="bg-warm-50/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">EA</span>
            </div>
            <span className="ml-3 text-xl font-bold text-neutral-900">
              Espaço Ataliba
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('infraestrutura')}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Infraestrutura
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('localizacao')}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Localização
            </button>

          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="whatsapp"
              href={generateSimpleWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left text-neutral-700 hover:text-primary-600 transition-colors py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('infraestrutura')}
                className="text-left text-neutral-700 hover:text-primary-600 transition-colors py-2"
              >
                Infraestrutura
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="text-left text-neutral-700 hover:text-primary-600 transition-colors py-2"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('localizacao')}
                className="text-left text-neutral-700 hover:text-primary-600 transition-colors py-2"
              >
                Localização
              </button>

              <div className="pt-2">
                <Button
                  variant="whatsapp"
                  href={generateSimpleWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  💬 WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
