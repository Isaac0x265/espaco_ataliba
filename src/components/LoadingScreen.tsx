import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Carregando...');

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: 'Preparando o ambiente...' },
      { progress: 40, text: 'Carregando imagens...' },
      { progress: 60, text: 'Configurando componentes...' },
      { progress: 80, text: 'Finalizando detalhes...' },
      { progress: 100, text: 'Pronto!' }
    ];

    let currentStep = 0;
    
    const progressTimer = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setProgress(step.progress);
        setLoadingText(step.text);
        currentStep++;
      } else {
        clearInterval(progressTimer);
        // Pequeno delay antes de completar
        setTimeout(() => {
          onLoadComplete();
        }, 500);
      }
    }, 400);

    // Cleanup
    return () => clearInterval(progressTimer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="text-center text-white relative z-10 max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-4xl font-bold text-white">EA</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Espaço Ataliba</h1>
          <p className="text-primary-100 text-lg">Casa de Festas e Eventos</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="mt-3 text-white/90 text-sm font-medium">
            {progress}% - {loadingText}
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-2xl mb-1">🏟️</div>
            <div className="text-xs text-primary-100">Campo</div>
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-2xl mb-1">🏊‍♂️</div>
            <div className="text-xs text-primary-100">Piscina</div>
          </div>
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-2xl mb-1">🎉</div>
            <div className="text-xs text-primary-100">Eventos</div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
