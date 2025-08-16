import React from 'react';
import { Section } from '../components/Section';

export const TiposEventos: React.FC = () => {
  const eventTypes = [
    {
      title: 'Eventos Esportivos',
      description: 'Peladas, torneios, campeonatos e confraternizações esportivas',
      icon: '⚽',
      examples: ['Peladas de fim de semana', 'Torneios entre amigos', 'Campeonatos de empresa', 'Treinos de equipes'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Aniversários',
      description: 'Festas de aniversário inesquecíveis para todas as idades',
      icon: '🎂',
      examples: ['Aniversários infantis', 'Festa de 15 anos', 'Aniversários adultos', 'Bodas e comemorações'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Confraternizações',
      description: 'Encontros familiares, de amigos e eventos corporativos',
      icon: '🎉',
      examples: ['Reuniões de família', 'Encontro de amigos', 'Confra de empresa', 'Formatura'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Eventos Corporativos',
      description: 'Team building, workshops e eventos empresariais informais',
      icon: '💼',
      examples: ['Team building', 'Workshops ao ar livre', 'Integração de equipes', 'Eventos de vendas'],
      color: 'from-blue-400 to-blue-600'
    }
  ];
  
  return (
    <Section id="tipos-eventos" background="white">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Tipos de Eventos
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Versatilidade para receber qualquer tipo de celebração ou encontro
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {eventTypes.map((eventType, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group">
              <div className={`absolute inset-0 bg-gradient-to-br ${eventType.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative p-8 bg-white border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{eventType.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {eventType.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {eventType.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Exemplos:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {eventType.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Capacidade */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Capacidade para até 500 pessoas
            </h3>
            <p className="text-gray-600">
              Nosso espaço comporta eventos de pequeno a grande porte, oferecendo flexibilidade para adequar o ambiente às suas necessidades específicas.
            </p>
            <div className="flex justify-center items-center space-x-8 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Eventos pequenos</div>
              </div>
              <div className="w-1 h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">200+</div>
                <div className="text-sm text-gray-600">Eventos médios</div>
              </div>
              <div className="w-1 h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Eventos grandes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
