import React from 'react';
import { Section } from '../components/Section';

export const Sobre: React.FC = () => {
  return (
    <Section id="sobre" background="white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Sobre o Espaço Ataliba
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              O Espaço Ataliba é um local de eventos em Eusébio – CE, preparado para receber encontros esportivos e comemorações com conforto. Oferece campo de grama natural com iluminação e área social integrada, ideal para quem busca praticidade, segurança e um clima descontraído para reunir amigos, família ou a equipe.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏟️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Campo Natural</h3>
              <p className="text-gray-600">Grama natural bem cuidada com sistema de iluminação completo</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏊‍♂️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Piscina Integrada</h3>
              <p className="text-gray-600">Área de lazer aquática conectada ao espaço social</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Área Social</h3>
              <p className="text-gray-600">Espaço versátil para festas, confraternizações e eventos</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
