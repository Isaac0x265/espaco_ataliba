// Utilitários para integração com WhatsApp

export const generateSimpleWhatsAppURL = (customMessage?: string): string => {
  const phoneNumber = '5585988788674'; // (85) 9 8878-8674
  const defaultMessage = 'Olá! Gostaria de saber mais sobre o Espaço Ataliba para eventos.';
  const message = customMessage || defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
