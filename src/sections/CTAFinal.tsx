import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { generateSimpleWhatsAppURL } from '../lib/whatsapp';

export const CTAFinal: React.FC = () => {
  
  return (
    <Section background="primary" className="text-white">
      <div className="text-center space-y-8">
        {/* Main CTA Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pronto para realizar seu evento?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Não perca tempo! Reserve já sua data no Espaço Ataliba e garanta o local perfeito para sua celebração em Eusébio.
            </p>
          </div>
          
          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Resposta Rápida</h3>
              <p className="text-sm text-gray-900">
                Respondemos em até 2 horas durante horário comercial
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-lg font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-sm text-gray-900">
                Infraestrutura completa e bem mantida para seu evento
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Preço Justo</h3>
              <p className="text-sm text-gray-900">
                Valores competitivos com tudo incluso, sem pegadinhas
              </p>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-center">
          <Button
            variant="whatsapp"
            size="lg"
            href={generateSimpleWhatsAppURL('Olá! Quero reservar uma data no Espaço Ataliba. Podem me ajudar?')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600"
          >
            💬 Reservar via WhatsApp
          </Button>
        </div>
        
        {/* Contact Info */}
        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-1">📞 Contato Direto</h4>
              <a 
                href="tel:+5585988788674"
                className="text-gray-900 hover:text-white transition-colors font-medium"
              >
                (85) 98878-8674
              </a>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-1">📍 Localização</h4>
              <p className="text-gray-900">
                Eusébio - CE, Bairro Coité
              </p>
            </div>
            

          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="space-y-4">
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-900">
            <div className="flex items-center space-x-1">
              <span>✅</span>
              <span>5+ anos de experiência</span>
            </div>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <div className="flex items-center space-x-1">
              <span>✅</span>
              <span>Centenas de eventos realizados</span>
            </div>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <div className="flex items-center space-x-1">
              <span>✅</span>
              <span>100% de satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
