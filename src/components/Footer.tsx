import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EA</span>
                </div>
                <span className="text-xl font-bold">Espaço Ataliba</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Casa de festas e eventos esportivos no coração de Eusébio - CE. 
                Campo gramado, piscina e área social para seus melhores momentos.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>Rua São Francisco, 228 - Coité, Eusébio - CE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <a 
                    href="tel:+5585988788674"
                    className="hover:text-white transition-colors"
                  >
                    (85) 98878-8674
                  </a>
                </div>

              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links Rápidos</h3>
              <div className="space-y-2">
                <a 
                  href="https://wa.me/5585988788674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  💬 WhatsApp
                </a>

                <button 
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  📸 Galeria
                </button>
                <button 
                  onClick={() => document.getElementById('localizacao')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  📍 Localização
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Espaço Ataliba. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Desenvolvido por: @isaac.ataliba ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
