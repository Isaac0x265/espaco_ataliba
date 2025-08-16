import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Section } from '../components/Section';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { Select } from '../components/Select';
import { Button } from '../components/Button';
import { generateWhatsAppURL, type ContactFormData } from '../lib/whatsapp';
import { 
  validateRequired, 
  validateBrazilianPhone, 
  validateFutureDate, 
  validateCapacity 
} from '../lib/validation';
import { formatPhoneNumber, unformatPhoneNumber } from '../lib/phoneMask';

export const Contato: React.FC = () => {
  const [phoneDisplay, setPhoneDisplay] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors: formErrors }, reset, setValue, watch } = useForm<ContactFormData>();
  
  const eventTypeOptions = [
    { value: 'esportivo', label: 'Evento Esportivo (Pelada/Torneio)' },
    { value: 'aniversario', label: 'Aniversário' },
    { value: 'confraternizacao', label: 'Confraternização' },
    { value: 'corporativo', label: 'Evento Corporativo' },
    { value: 'outros', label: 'Outros' }
  ];
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneDisplay(formatted);
    setValue('phone', unformatPhoneNumber(formatted));
  };
  
  const validateForm = (data: ContactFormData): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    const nameValidation = validateRequired(data.name, 'Nome');
    if (!nameValidation.isValid) {
      newErrors.name = nameValidation.message!;
    }
    
    // Phone validation
    const phoneValidation = validateBrazilianPhone(data.phone);
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.message!;
    }
    
    // Event date validation
    const dateValidation = validateFutureDate(data.eventDate);
    if (!dateValidation.isValid) {
      newErrors.eventDate = dateValidation.message!;
    }
    
    // Guest count validation
    const capacityValidation = validateCapacity(data.guestCount);
    if (!capacityValidation.isValid) {
      newErrors.guestCount = capacityValidation.message!;
    }
    
    // Event type validation
    const typeValidation = validateRequired(data.eventType, 'Tipo de evento');
    if (!typeValidation.isValid) {
      newErrors.eventType = typeValidation.message!;
    }
    
    return newErrors;
  };
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrors({});
    
    // Validate form
    const validationErrors = validateForm(data);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Generate WhatsApp URL with form data
      const whatsappUrl = generateWhatsAppURL(data);
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      reset();
      setPhoneDisplay('');
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setErrors({ general: 'Erro ao enviar mensagem. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <Section id="contato" background="white">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Solicite seu Orçamento
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba uma proposta personalizada via WhatsApp
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📞 Entre em Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <a 
                      href="https://wa.me/5585988788674"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      (85) 98878-8674
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <a 
                      href="tel:+5585988788674"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      (85) 98878-8674
                    </a>
                  </div>
                </div>
                

              </div>
            </div>
            
            {/* Quick WhatsApp */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">🚀 Resposta Rápida</h4>
              <p className="text-gray-600 text-sm mb-4">
                Prefere uma conversa direta? Clique aqui para falar conosco agora mesmo!
              </p>
              <a
                href="https://wa.me/5585988788674?text=Olá! Gostaria de saber mais sobre disponibilidade e preços para eventos no Espaço Ataliba."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full inline-flex items-center justify-center"
              >
                💬 Falar Agora no WhatsApp
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            {showSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <p className="text-green-800 font-medium">
                    Mensagem enviada com sucesso! Em breve entraremos em contato.
                  </p>
                </div>
              </div>
            )}
            
            {errors.general && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">{errors.general}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Nome completo"
                name="name"
                value={watch('name') || ''}
                onChange={(e) => setValue('name', e.target.value)}
                placeholder="Digite seu nome completo"
                required
                error={errors.name}
              />
              
              <div className="space-y-1">
                <label 
                  htmlFor="phone-input"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefone <span className="text-red-500 ml-1" aria-label="obrigatório">*</span>
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  value={phoneDisplay}
                  onChange={handlePhoneChange}
                  placeholder="(85) 99999-9999"
                  required
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p 
                    id="phone-error"
                    className="text-sm text-red-600"
                    role="alert"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>
              
              <Input
                label="Data do evento"
                type="date"
                name="eventDate"
                value={watch('eventDate') || ''}
                onChange={(e) => setValue('eventDate', e.target.value)}
                min={today}
                required
                error={errors.eventDate}
              />
              
              <Input
                label="Número de pessoas"
                type="number"
                name="guestCount"
                value={watch('guestCount') || ''}
                onChange={(e) => setValue('guestCount', e.target.value)}
                placeholder="Ex: 50"
                min="1"
                max="500"
                required
                error={errors.guestCount}
              />
              
              <Select
                label="Tipo de evento"
                name="eventType"
                value={watch('eventType') || ''}
                onChange={(e) => setValue('eventType', e.target.value)}
                options={eventTypeOptions}
                placeholder="Selecione o tipo de evento"
                required
                error={errors.eventType}
              />
              
              <Textarea
                label="Mensagem adicional"
                name="message"
                value={watch('message') || ''}
                onChange={(e) => setValue('message', e.target.value)}
                placeholder="Conte-nos mais detalhes sobre seu evento, preferências de horário, necessidades especiais, etc."
                rows={4}
                maxLength={500}
              />
              
              {/* LGPD Consent */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="lgpd-consent"
                  required
                  className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="lgpd-consent" className="text-sm text-gray-600">
                  Li e aceito que meus dados sejam utilizados para entrar em contato comigo sobre este orçamento, conforme nossa política de privacidade. *
                </label>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? '⏳ Enviando...' : '📤 Enviar Solicitação'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};
