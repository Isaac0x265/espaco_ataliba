import React from 'react';
import { Section } from '../components/Section';

export const Infraestrutura: React.FC = () => {
  const features = [
    {
      title: 'Campo de Futebol',
      description: 'Grama natural bem cuidada com sistema de iluminação LED para jogos noturnos',
      icon: '⚽',
      highlights: ['Grama natural', 'Iluminação LED', 'Traves oficiais']
    },
    {
      title: 'Piscina',
      description: 'Área aquática integrada ao espaço social, perfeita para relaxar após os jogos',
      icon: '🏊‍♂️',
      highlights: ['Água tratada', 'Área rasa e funda', 'Deck ao redor']
    },
    {
      title: 'Área Interna',
      description: 'Espaço coberto climatizado para refeições, reuniões e proteção do clima',
      icon: '🏠',
      highlights: ['Climatizada', 'Mesas e cadeiras', 'Som ambiente']
    },
    {
      title: 'Área Externa',
      description: 'Amplo espaço ao ar livre com churrasqueira e área de convivência',
      icon: '🌳',
      highlights: ['Churrasqueira', 'Área sombreada', 'Vista para o campo']
    },
    {
      title: 'Vestiários',
      description: 'Vestiários masculino e feminino com chuveiros e armários',
      icon: '🚿',
      highlights: ['Chuveiros quentes', 'Armários', 'Separados por gênero']
    },
    {
      title: 'Alimentação',
      description: 'Apoio para buffet e serviços de alimentação sob consulta prévia',
      icon: '🍽️',
      highlights: ['Cozinha equipada', 'Apoio buffet', 'Sob consulta']
    }
  ];
  
  return (
    <Section id="infraestrutura" background="gray">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Nossa Infraestrutura
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo o que você precisa para seu evento em um só lugar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quer conhecer pessoalmente?
          </h3>
          <p className="text-gray-600 mb-6">
            Agende uma visita e veja toda nossa infraestrutura de perto
          </p>
          <a
            href="https://wa.me/5585988788674?text=Olá! Gostaria de agendar uma visita ao Espaço Ataliba."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center"
          >
            📅 Agendar Visita
          </a>
        </div>
      </div>
    </Section>
  );
};
