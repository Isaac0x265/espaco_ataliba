import React, { useState } from 'react';
import { Section } from '../components/Section';

export const Galeria: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: '/images/campo-gramado.jpg',
      alt: 'Campo de futebol com grama natural e iluminação LED no Espaço Ataliba',
      title: 'Campo de Futebol',
      placeholder: '🏟️'
    },
    {
      src: '/images/piscina-area-social.jpg',
      alt: 'Piscina integrada à área social do Espaço Ataliba em Eusébio',
      title: 'Piscina e Área Social',
      placeholder: '🏊‍♂️'
    },
    {
      src: '/images/area-interna.jpg',
      alt: 'Área interna climatizada para eventos e refeições no Espaço Ataliba',
      title: 'Área Interna',
      placeholder: '🏠'
    },
    {
      src: '/images/churrasqueira.jpg.png',
      alt: 'Área externa com churrasqueira e espaço para confraternizações',
      title: 'Área da Churrasqueira',
      placeholder: '🔥'
    },
    {
      src: '/images/estacionamento.png',
      alt: 'Área de estacionamento ampla e segura do Espaço Ataliba',
      title: 'Estacionamento',
      placeholder: '🚗'
    },
    {
      src: '/images/vista-aerea.jpg.png',
      alt: 'Vista aérea completa do Espaço Ataliba mostrando toda a infraestrutura',
      title: 'Vista Aérea',
      placeholder: '🚁'
    },
    {
      src: '/images/festa-deck.png',
      alt: 'Festa no deck com vista para toda a área do Espaço Ataliba',
      title: 'Festa no Deck',
      placeholder: '🎉'
    },
    {
      src: '/images/festa-no-campo.png',
      alt: 'Evento esportivo e confraternização no campo do Espaço Ataliba',
      title: 'Festa no Campo',
      placeholder: '⚽'
    },
    {
      src: '/images/festa-salao.jpg.png',
      alt: 'Festa no salão interno climatizado do Espaço Ataliba',
      title: 'Festa no Salão',
      placeholder: '🎂'
    }
  ];
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const goToImage = (index: number) => {
    setCurrentImage(index);
  };
  
  return (
    <Section id="galeria" background="gray">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Galeria de Fotos
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossos espaços e veja como podem transformar seu evento
          </p>
        </div>
        
        {/* Main Image Display */}
        <div className="relative">
          <div className="aspect-[16/9] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              title={images[currentImage].title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Image overlay with title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-2xl font-bold">{images[currentImage].title}</h3>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Imagem anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Próxima imagem"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`aspect-square rounded-lg overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                index === currentImage 
                  ? 'ring-2 ring-primary-500 scale-105' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              aria-label={`Ver ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Gostou do que viu?
          </h3>
          <p className="text-gray-600 mb-6">
            Entre em contato e reserve já a data do seu evento
          </p>
          <a
            href="https://wa.me/5585988788674?text=Olá! Vi a galeria do Espaço Ataliba e gostaria de fazer uma reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            📞 Fazer Reserva
          </a>
        </div>
      </div>
    </Section>
  );
};
