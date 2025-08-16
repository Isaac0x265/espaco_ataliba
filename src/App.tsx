
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './sections/Hero';
import { Sobre } from './sections/Sobre';
import { Infraestrutura } from './sections/Infraestrutura';
import { TiposEventos } from './sections/TiposEventos';
import { Galeria } from './sections/Galeria';
import { Localizacao } from './sections/Localizacao';
import { FAQ } from './sections/FAQ';
import { Contato } from './sections/Contato';
import { CTAFinal } from './sections/CTAFinal';
import { useAppLoading } from './hooks/useAppLoading';

function App() {
  const { isLoading, isReady, handleLoadComplete } = useAppLoading();

  // Show loading screen until everything is ready
  if (isLoading || !isReady) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      
      <main id="main-content">
        <Hero />
        <Sobre />
        <Galeria />
        <Infraestrutura />
        <TiposEventos />
        <Localizacao />
        <FAQ />
        <Contato />
        <CTAFinal />
      </main>
      
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
