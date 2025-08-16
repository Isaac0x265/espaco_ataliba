// Utilitários para integração com WhatsApp

export interface ContactFormData {
  name: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  eventType: string;
  message: string;
}

export const generateWhatsAppURL = (data: ContactFormData): string => {
  const phoneNumber = '5585988788674'; // Número do Espaço Ataliba
  
  const message = `Olá! Gostaria de solicitar um orçamento para o Espaço Ataliba.

*Dados do evento:*
• Nome: ${data.name}
• Telefone: ${data.phone}
• Data do evento: ${new Date(data.eventDate).toLocaleDateString('pt-BR')}
• Número de pessoas: ${data.guestCount}
• Tipo de evento: ${data.eventType}

*Mensagem adicional:*
${data.message || 'Nenhuma observação adicional.'}

Aguardo retorno com disponibilidade e valores!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const generateSimpleWhatsAppURL = (customMessage?: string): string => {
  const phoneNumber = '5585988788674'; // (85) 9 8878-8674
  const defaultMessage = 'Olá! Gostaria de saber mais sobre o Espaço Ataliba para eventos.';
  const message = customMessage || defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
