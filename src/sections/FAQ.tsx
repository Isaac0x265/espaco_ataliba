import React from 'react';
import { Section } from '../components/Section';
import { FAQItem } from '../components/FAQItem';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'Quais são os horários de funcionamento?',
      answer: 'Funcionamos todos os dias da semana, das 8h às 22h. Para eventos que se estendam além desse horário, consulte-nos previamente para verificar disponibilidade e condições especiais.'
    },
    {
      question: 'Qual a capacidade máxima do espaço?',
      answer: 'Nosso espaço comporta até 500 pessoas confortavelmente, distribuídas entre o campo, área social, piscina e áreas cobertas. A capacidade pode variar dependendo do tipo de evento e configuração desejada.'
    },
    {
      question: 'E se chover durante meu evento?',
      answer: 'Temos área interna climatizada que serve como alternativa em caso de chuva. Para eventos no campo, oferecemos tendas e cobertura parcial. Recomendamos sempre ter um plano B, que discutimos durante o agendamento.'
    },
    {
      question: 'Posso levar meu próprio sistema de som?',
      answer: 'Sim! Você pode trazer seu próprio equipamento de som. Temos pontos de energia disponíveis e nossa equipe pode auxiliar na instalação. Também oferecemos sistema de som básico incluso na locação.'
    },
    {
      question: 'Há estacionamento disponível?',
      answer: 'Sim, temos estacionamento gratuito no local com vagas suficientes para eventos de médio e grande porte. O acesso é fácil para carros, motos e até veículos maiores como vans e micro-ônibus.'
    },
    {
      question: 'Como funciona a reserva e o pagamento?',
      answer: 'Para reservar, entre em contato conosco pelo WhatsApp ou telefone. Solicitamos 30% de sinal para confirmar a data e o restante pode ser pago até o dia do evento. Aceitamos PIX, cartão e dinheiro.'
    },
    {
      question: 'Posso cancelar ou remarcar meu evento?',
      answer: 'Sim, aceitamos cancelamentos e remarcações com até 7 dias de antecedência sem cobrança adicional. Cancelamentos com menos de 7 dias estão sujeitos a retenção parcial do sinal, conforme nossa política.'
    },
    {
      question: 'Vocês oferecem serviço de buffet?',
      answer: 'Não oferecemos buffet próprio, mas nossa cozinha está equipada para receber fornecedores externos. Temos uma lista de buffets parceiros que conhecem bem nosso espaço e podem atender seu evento.'
    }
  ];
  
  return (
    <Section id="faq" background="gray">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esclareça suas principais dúvidas sobre nosso espaço e serviços
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === 0} // First item open by default
            />
          ))}
        </div>
        
        {/* Still have questions? */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="text-4xl">🤔</div>
            <h3 className="text-2xl font-bold text-gray-900">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600">
              Nossa equipe está pronta para esclarecer qualquer questão e ajudar você a planejar o evento perfeito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5585988788674?text=Olá! Tenho algumas dúvidas sobre o Espaço Ataliba que não encontrei no site."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center"
              >
                💬 Falar no WhatsApp
              </a>
              <a
                href="tel:+5585988788674"
                className="btn-outline inline-flex items-center justify-center"
              >
                📞 Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
