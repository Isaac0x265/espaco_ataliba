import React from 'react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { generateSimpleWhatsAppURL } from '../lib/whatsapp';

export const Hero: React.FC = () => {
  
  return (
    <Section className="bg-gradient-to-br from-primary-50 to-secondary-50" padding={false}>
      <div className="py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-warm-100/80 backdrop-blur-sm rounded-full shadow-sm border border-warm-200">
              <div className="flex items-center space-x-3 text-sm">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-neutral-700">Campo iluminado</span>
                </span>
                <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-neutral-700">Piscina</span>
                </span>
                <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-neutral-700">Área para festas</span>
                </span>
              </div>
            </div>
            
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Seu evento no{' '}
                <span className="text-primary-600">coração</span>{' '}
                de Eusébio
              </h1>
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed">
                Campo gramado com iluminação, piscina e área social versátil para esportes, festas e confraternizações.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex justify-center sm:justify-start">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateSimpleWhatsAppURL('Olá! Gostaria de conhecer mais sobre o Espaço Ataliba para eventos.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Falar no WhatsApp
              </Button>
            </div>
            
            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-neutral-600">Pessoas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24h</div>
                <div className="text-sm text-neutral-600">Disponível</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">5+</div>
                <div className="text-sm text-neutral-600">Anos</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/festa-salao.jpg.png"
                alt="Festa no salão interno climatizado do Espaço Ataliba"
                className="w-full h-full object-cover"
                loading="eager"
              />
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Logo overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-bold drop-shadow-lg">
                  Espaço Ataliba
                </p>
                <p className="text-sm opacity-90 drop-shadow-lg">
                  Campo • Piscina • Área Social
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-warm-100/90 backdrop-blur-sm rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-neutral-700">Disponível agora</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-warm-100/90 backdrop-blur-sm rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="text-center">
                <div className="text-lg font-bold text-primary-600">Eusébio - CE</div>
                <div className="text-xs text-neutral-600">Coité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
