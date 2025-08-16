import React from 'react';
import { Section } from '../components/Section';

export const Localizacao: React.FC = () => {
  const address = {
    street: 'Rua São Francisco, 228',
    neighborhood: 'Bairro Coité',
    city: 'Eusébio',
    state: 'CE',
    zipCode: '61760-000',
    phone: '(85) 98878-8674'
  };
  
  const fullAddress = `${address.street}, ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipCode}`;
  const mapsUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(fullAddress)}`;
  
  return (
    <Section id="localizacao" background="white">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Nossa Localização
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Localizado no coração de Eusébio, fácil acesso e estacionamento disponível
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Address Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📍 Endereço Completo
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 text-primary-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço:</h4>
                    <p className="text-gray-700">{address.street}</p>
                    <p className="text-gray-700">{address.neighborhood}</p>
                    <p className="text-gray-700">{address.city} - {address.state}</p>
                    <p className="text-gray-700">CEP: {address.zipCode}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 text-primary-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone:</h4>
                    <a 
                      href="tel:+5585988788674" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {address.phone}
                    </a>
                  </div>
                </div>
                

              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="grid gap-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <span>🗺️</span>
                <span>Abrir no Google Maps</span>
              </a>
              
              <a
                href="https://wa.me/5585988788674?text=Olá! Gostaria de saber como chegar ao Espaço Ataliba."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <span>💬</span>
                <span>Pedir Direções no WhatsApp</span>
              </a>
            </div>
            
            {/* Additional Info */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">ℹ️ Informações Úteis</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Estacionamento disponível no local</p>
                <p>• Fácil acesso para veículos de grande porte</p>
                <p>• Localização central em Eusébio</p>
                <p>• Próximo a pontos de referência conhecidos</p>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
              {/* Placeholder for Google Maps - Replace with actual iframe */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                <div className="text-center text-gray-700">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-bold">Mapa Interativo</h3>
                  <p className="text-sm mt-2 opacity-75 px-4">
                    {fullAddress}
                  </p>
                  <div className="mt-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <span>Ver no Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* In production, replace above div with this iframe:
              <iframe
                src={mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Espaço Ataliba"
              ></iframe>
              */}
            </div>
            
            <p className="text-sm text-gray-600 text-center">
              Clique no mapa para ver a localização detalhada e traçar rota
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
