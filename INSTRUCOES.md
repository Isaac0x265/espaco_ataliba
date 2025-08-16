# 📋 Instruções de Execução - Espaço Ataliba

## 🚀 Como Executar o Projeto

### 1. Instalação das Dependências

```bash
npm install
```

### 2. Executar em Modo Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em: `http://localhost:3000`

### 3. Build para Produção

```bash
npm run build
```

### 4. Preview do Build

```bash
npm run preview
```

## 🎨 Cores e Fontes Utilizadas

### Paleta de Cores

**Primary (Verde - tema campo/natureza):**
- Verde 50: `#f0f9f4`
- Verde 500: `#379759` (principal)
- Verde 600: `#2a7b45`
- Verde 700: `#226238`

**Secondary (Azul - tema piscina/água):**
- Azul 50: `#eff9ff`
- Azul 500: `#36a7fa`
- Azul 600: `#218aef`
- Azul 700: `#1a70dc`

**Neutros (Grays):**
- Gray 50: `#f8fafc`
- Gray 100: `#f1f5f9`
- Gray 500: `#64748b`
- Gray 700: `#334155`
- Gray 900: `#0f172a`

**Cores Especiais:**
- WhatsApp Green: `#25d366`
- Success: `#10b981`
- Error: `#ef4444`

### Fontes

**Fonte Principal:** Inter
- Carregada via Google Fonts
- Pesos: 400, 500, 600, 700
- Fallback: system-ui, sans-serif

## 📱 Funcionalidades Implementadas

### ✅ Formulário de Contato
- Validação sem Zod (HTML5 + funções customizadas)
- Máscara de telefone brasileiro
- Integração com WhatsApp
- Consentimento LGPD

### ✅ Componentes Base
- Button (variants: primary, outline, whatsapp)
- Input, Textarea, Select com validação
- Section wrapper semântico
- FAQItem com accordion acessível
- Header com navegação sticky
- Footer completo

### ✅ Seções da Landing Page
1. **Hero** - Título, CTAs, badges
2. **Sobre** - Descrição do espaço
3. **Infraestrutura** - Cards com facilidades
4. **Tipos de Eventos** - Categorias suportadas
5. **Galeria** - Carrossel de fotos (placeholders)
6. **Localização** - Endereço e mapa (placeholder)
7. **FAQ** - 8 perguntas com accordion
8. **Contato** - Formulário + contatos diretos
9. **CTA Final** - Reforço de conversão

### ✅ Integração WhatsApp
- Função `generateWhatsAppURL()` para formulário
- Função `generateSimpleWhatsAppURL()` para CTAs
- Mensagens pré-formatadas
- Links em múltiplos pontos

### ✅ SEO e Acessibilidade
- Meta tags Open Graph e Twitter Cards
- JSON-LD LocalBusiness no `<head>`
- HTML semântico
- Skip links
- ARIA labels e controles
- Contraste AA
- Navegação por teclado

## 🔧 Configurações Técnicas

### Scripts NPM
```json
{
  "dev": "vite",
  "build": "tsc && vite build", 
  "lint": "eslint . --ext ts,tsx",
  "preview": "vite preview"
}
```

### Dependências Principais
- `react` e `react-dom` (v18.2.0)
- `react-hook-form` (v7.48.2)
- `react-input-mask` (v2.0.4)
- `vite` (v5.0.8)
- `tailwindcss` (v3.3.6)
- `typescript` (v5.2.2)

### Configuração Tailwind
- Classes customizadas no globals.css
- Cores estendidas no tailwind.config.ts
- Componentes utilitários (btn-primary, card, etc.)

## 📊 Performance e Métricas

### Lighthouse Esperado
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Otimizações Implementadas
- Lazy loading de imagens
- CSS crítico inline
- Fontes com preload
- Compressão de assets

## 🎯 Pontos de Conversão

### CTAs Estratégicos
1. Header: WhatsApp button
2. Hero: 2 CTAs (WhatsApp + Formulário)
3. Infraestrutura: Agendar visita
4. Galeria: Fazer reserva
5. Contato: Formulário completo
6. CTA Final: 2 CTAs + confiança
7. Footer: Links rápidos

### Múltiplos Canais
- WhatsApp: +5585988788674
- Telefone: (85) 98878-8674
- Instagram: @espaco_ataliba
- Formulário web

## 🔮 Próximos Passos (TODOs)

### Implementações Futuras
- [ ] Google Analytics 4
- [ ] Meta Pixel
- [ ] Galeria com imagens reais
- [ ] Google Maps interativo
- [ ] Sistema de reservas online
- [ ] Chat widget
- [ ] Depoimentos de clientes

### Melhorias de Conteúdo
- [ ] Fotografias profissionais
- [ ] Vídeos do espaço
- [ ] Casos de sucesso
- [ ] Tabela de preços
- [ ] FAQ expandido

## 💡 Dicas de Manutenção

### Atualizar Conteúdo
- Textos: editar arquivos em `src/sections/`
- Cores: modificar `tailwind.config.ts`
- WhatsApp: ajustar `src/lib/whatsapp.ts`

### Deploy
- Build otimizado com `npm run build`
- Pasta `dist/` contém arquivos prontos
- Compatível com Vercel, Netlify, etc.

### Analytics
- Placeholder para GA4 no `index.html`
- Preparado para Meta Pixel
- Eventos de conversão configuráveis

---

**Landing page completa e otimizada para conversão! 🚀**
