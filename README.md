# 🏟️ Espaço Ataliba - Landing Page

Landing page moderna e responsiva para o Espaço Ataliba, casa de festas e eventos esportivos localizada em Eusébio - CE.

## 🚀 Tecnologias Utilizadas

- **React 18** com **TypeScript**
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **React Hook Form** para gerenciamento de formulários
- **React Input Mask** para máscara de telefone brasileiro
- Validação customizada sem Zod (HTML5 + funções utilitárias)

## 📋 Funcionalidades

### ✨ Interface
- Design responsivo e moderno
- Animações suaves e microinterações
- Paleta de cores personalizada (verdes, azuis e neutros)
- Header sticky com navegação suave
- Carrossel de galeria acessível
- FAQ com accordion

### 📞 Integração WhatsApp
- Botões CTA estratégicos
- Formulário que gera mensagem pré-formatada
- Links diretos para WhatsApp em toda a página

### 📝 Formulário de Contato
- Validação em tempo real
- Máscara de telefone brasileiro
- Validação de data futura
- Checkbox de consentimento LGPD
- Envio via WhatsApp com dados estruturados

### 🔍 SEO & Acessibilidade
- Meta tags completas (Open Graph, Twitter Cards)
- JSON-LD para LocalBusiness
- HTML semântico
- Skip links e aria-labels
- Contraste AA
- Navegação por teclado

## 🎨 Paleta de Cores

### Primary (Verde)
- 50: #f0f9f4
- 500: #379759 (principal)
- 600: #2a7b45

### Secondary (Azul)
- 50: #eff9ff
- 500: #36a7fa
- 600: #218aef

### Gray (Neutros)
- 50: #f8fafc
- 500: #64748b
- 900: #0f172a

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Textarea.tsx
│   ├── Select.tsx
│   ├── Section.tsx
│   ├── FAQItem.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/           # Seções da landing page
│   ├── Hero.tsx
│   ├── Sobre.tsx
│   ├── Infraestrutura.tsx
│   ├── TiposEventos.tsx
│   ├── Galeria.tsx
│   ├── Localizacao.tsx
│   ├── FAQ.tsx
│   ├── Contato.tsx
│   └── CTAFinal.tsx
├── lib/               # Utilitários e helpers
│   ├── validation.ts  # Validações customizadas
│   ├── phoneMask.ts   # Máscara de telefone
│   └── whatsapp.ts    # Integração WhatsApp
├── styles/
│   └── globals.css    # Estilos globais Tailwind
├── App.tsx
└── main.tsx
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Comandos

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 📱 Seções da Landing Page

1. **Hero** - Título principal, CTAs e badges de destaque
2. **Sobre** - Descrição do espaço e valores
3. **Infraestrutura** - Cards com as facilidades disponíveis
4. **Tipos de Eventos** - Categorias de eventos suportados
5. **Galeria** - Carrossel de fotos do espaço
6. **Localização** - Mapa e informações de contato
7. **FAQ** - Perguntas frequentes com accordion
8. **Contato** - Formulário de orçamento e contatos diretos
9. **CTA Final** - Reforço de valor e chamada para ação

## 📞 Informações de Contato

- **Telefone/WhatsApp:** (85) 98878-8674
- **Instagram:** @espaco_ataliba
- **Endereço:** Rua São Francisco, 228 - Coité, Eusébio - CE
- **CEP:** 61760-000

## 🎯 Critérios de Conversão

- CTAs estratégicos em todas as seções
- Múltiplos pontos de contato (WhatsApp, formulário, telefone)
- Informações claras sobre capacidade e infraestrutura
- Social proof e trust indicators
- Resposta mobile-first

## 📈 Performance e SEO

- Lighthouse Score: 90+ (mobile/desktop)
- Imagens otimizadas com lazy loading
- CSS crítico inline
- Meta tags completas
- JSON-LD structured data
- Sitemap e robots.txt ready

## 🔧 Customização

### Cores
Edite `tailwind.config.ts` para alterar a paleta de cores.

### Conteúdo
O conteúdo está centralizado nos componentes de seção em `src/sections/`.

### WhatsApp
Configure os números e mensagens em `src/lib/whatsapp.ts`.

### Validações
Customize as regras de validação em `src/lib/validation.ts`.

## 📝 TODO - Melhorias Futuras

- [ ] Adicionar Google Analytics 4
- [ ] Integrar Meta Pixel
- [ ] Implementar galeria com imagens reais
- [ ] Adicionar mapa interativo do Google Maps
- [ ] Sistema de agendamento online
- [ ] Integração com CRM
- [ ] A/B testing nos CTAs
- [ ] Chat widget
- [ ] Blog/depoimentos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade do Espaço Ataliba. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para eventos especiais em Eusébio - CE**
