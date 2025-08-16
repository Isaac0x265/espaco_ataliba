// Validação customizada sem Zod - usando HTML5 + funções utilitárias

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export const validateBrazilianPhone = (phone: string): ValidationResult => {
  // Remove todos os caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Verifica se tem 11 dígitos (DDD + 9 dígitos)
  if (cleanPhone.length !== 11) {
    return {
      isValid: false,
      message: 'Telefone deve ter 11 dígitos (DDD + número)'
    };
  }
  
  // Verifica se começa com DDD válido (11-99)
  const ddd = parseInt(cleanPhone.substring(0, 2));
  if (ddd < 11 || ddd > 99) {
    return {
      isValid: false,
      message: 'DDD inválido'
    };
  }
  
  // Verifica se é um celular (terceiro dígito deve ser 9)
  if (cleanPhone.charAt(2) !== '9') {
    return {
      isValid: false,
      message: 'Número deve ser um celular (iniciar com 9)'
    };
  }
  
  return { isValid: true };
};

export const validateFutureDate = (dateStr: string): ValidationResult => {
  const inputDate = new Date(dateStr);
  const today = new Date();
  
  // Remove horário para comparar apenas datas
  today.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);
  
  if (inputDate <= today) {
    return {
      isValid: false,
      message: 'Data do evento deve ser futura'
    };
  }
  
  return { isValid: true };
};

export const validateCapacity = (capacity: string): ValidationResult => {
  const num = parseInt(capacity);
  
  if (isNaN(num) || num < 1) {
    return {
      isValid: false,
      message: 'Número de pessoas deve ser pelo menos 1'
    };
  }
  
  if (num > 500) {
    return {
      isValid: false,
      message: 'Capacidade máxima é de 500 pessoas'
    };
  }
  
  return { isValid: true };
};

export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  if (!value || value.trim().length === 0) {
    return {
      isValid: false,
      message: `${fieldName} é obrigatório`
    };
  }
  
  return { isValid: true };
};

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: 'Email inválido'
    };
  }
  
  return { isValid: true };
};
