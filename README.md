# 🌟 Landing Page - Psicóloga Anna Júlia Krueger

Uma landing page profissional, responsiva e otimizada para SEO — pronta para hospedagem gratuita em Vercel, Netlify ou similar.

---

## 📋 Índice

- [Estrutura do Projeto](#estrutura-do-projeto)
- [Arquivos](#arquivos)
- [Como Customizar](#como-customizar)
- [Deploy (Hospedagem Gratuita)](#deploy-hospedagem-gratuita)
- [SEO & Impulsionamento](#seo--impulsionamento)
- [Suporte](#suporte)

---

## 📁 Estrutura do Projeto

```
lp-anna/
├── index.html              # Arquivo principal HTML
├── perfil.jpg              # Foto de perfil (1200x1600px)
├── styles.css              # Estilos customizados (referência)
├── scripts.js              # JavaScript (referência)
├── README.md               # Este arquivo
└── sitemap.xml             # Mapa do site (para SEO)
```

### Arquivos Importantes

| Arquivo | Função | Editar? |
|---------|--------|---------|
| `index.html` | Estrutura + conteúdo principal | ✅ Sim |
| `perfil.jpg` | Foto de perfil | ✅ Sim (substitua a sua) |
| `styles.css` | Estilos customizados | ⚠️ Avançado |
| `scripts.js` | Animações e interatividade | ⚠️ Avançado |
| `README.md` | Documentação | 📖 Referência |

---

## ✏️ Como Customizar

### 1. **Trocar a Foto de Perfil**

Substitua `perfil.jpg` por sua foto. Recomendações:
- **Formato**: JPG ou PNG
- **Tamanho**: 1200×1600 px (já otimizado)
- **Qualidade**: Alta (profissional)

**Windows**: Renomeie sua imagem para `perfil.jpg` e coloque na pasta do projeto.

---

### 2. **Editar Textos Principais**

Abra `index.html` em um editor de texto (Notepad, VSCode, etc):

#### **Alterar Nome**
```html
<a href="/" class="font-semibold text-lg">Anna Júlia Krueger</a>
↓ Mude para seu nome
```

#### **Alterar CRP**
```html
<div class="text-xs text-gray-500">Psicóloga • CRP 06/225850</div>
↓ Mude para seu CRP
```

#### **Alterar Localização**
```html
Base em <strong>São Paulo (Jabaquara, Zona Sul)</strong>
↓ Mude para sua localização
```

#### **Alterar Especialidades**
```html
<strong>Psicodrama, Humanização e Afeto</strong>
↓ Mude para suas especialidades
```

#### **Alterar Link WhatsApp**
```html
href="https://api.whatsapp.com/send/?phone=5547999491211&text&type=phone_number&app_absent=0"
↓ Mude o número 5547999491211 para seu número (sem símbolos, com DDI)
```

#### **Alterar Links de Redes Sociais**

Instagram:
```html
href="https://www.instagram.com/psico.annaju"
↓ Mude para seu perfil do Instagram
```

TikTok:
```html
href="https://www.tiktok.com/@annajukrueger?_r=1&_t=ZS-925IviYYAwG"
↓ Mude para seu perfil do TikTok
```

---

### 3. **Editar Meta Tags (para SEO)**

As meta tags já estão configuradas, mas você pode melhorar:

#### **Title (título do navegador)**
```html
<title>Psicóloga Anna Júlia Krueger — Psicodrama | Atendimento online (São Paulo - Jabaquara)</title>
```
Dica: Inclua seu CRP e localização para mais relevância em buscas locais.

#### **Description (resumo nas buscas)**
```html
<meta name="description" content="Psicóloga Anna Júlia Krueger (CRP 06/225850). Psicodrama, Humanização e Afeto. Atendimento online — Agende sua sessão pelo WhatsApp." />
```
Dica: Mantenha com ~160 caracteres para exibir completo no Google.

---

### 4. **Adicionar Mais Seções**

Para adicionar uma nova seção (ex.: "Blog", "FAQ"):

```html
<!-- Copie e adapte uma seção existente -->

<section id="nova-secao" class="max-w-5xl mx-auto px-6 py-12">
  <h2 class="text-2xl font-bold text-center mb-8">Título da Seção</h2>
  <!-- Seu conteúdo aqui -->
</section>
```

Adicione o link na navegação:
```html
<a href="#nova-secao" class="hover:underline">Nova Seção</a>
```

---

## 🚀 Deploy (Hospedagem Gratuita)

### **Opção A: Vercel (Recomendado)**

1. **Crie uma conta GitHub** (grátis): https://github.com/signup

2. **Crie um repositório GitHub**:
   - Vá para https://github.com/new
   - Nome: `psicologia-anna`
   - Inicialize com README
   - Clique "Create repository"

3. **Suba seus arquivos**:
   - Clique "Add file" > "Upload files"
   - Arraste `index.html`, `perfil.jpg`, `README.md`
   - Clique "Commit changes"

4. **Deploy em Vercel**:
   - Vá para https://vercel.com
   - Clique "Sign Up" > "Continue with GitHub"
   - Conecte GitHub
   - Selecione repositório
   - Clique "Deploy"

5. **Seu site está live!**
   ```
   https://seu-projeto.vercel.app
   ```

---

### **Opção B: Netlify**

1. Suba arquivos no GitHub (mesmos passos acima)
2. Vá para https://netlify.com
3. Clique "New site from Git"
4. Conecte GitHub
5. Deploy automático!

---

### **Opção C: GitHub Pages (Grátis + Customizado)**

1. No repositório, vá para "Settings" > "Pages"
2. Source: Branch `main`
3. Seu site: `https://seu-usuario.github.io/seu-repo`

---

## 🔍 SEO & Impulsionamento

### **1. Google Business Profile** (Essencial)

- Vá para https://business.google.com
- Crie perfil como "Psicóloga"
- Localização: São Paulo, SP
- Adicione link do seu site
- Apareça em buscas locais ("psicóloga zona sul")

### **2. Google Search Console** (Monitorar)

- Vá para https://search.google.com/search-console
- Adicione seu site
- Envie seu `sitemap.xml`
- Monitore palavras-chave, cliques, posições

### **3. Palavras-chave para Focar**

```
- psicóloga zona sul sp
- psicodrama são paulo
- terapia online
- psicóloga jabaquara
- ansiedade zona sul
```

Use essas palavras em:
- Título (`<title>`)
- Descrição (`<meta name="description">`)
- Cabeçalhos (`<h1>`, `<h2>`)
- Conteúdo dos posts

### **4. Redes Sociais** (Traffic Direto)

- **Instagram**: Poste 3x/semana (dicas, reels, histórias)
- **TikTok**: Vídeos curtos sobre saúde mental
- **Use hashtags**: `#PsicólogaSP #TerapiaOnline #Psicodrama`

---

## 🎨 Customização Visual

### **Cores Principais**

- **Indigo (principal)**: `#4F46E5` — botões, destaques
- **Verde (WhatsApp)**: `#25D366` — botão flutuante
- **Cinza**: backgrounds, texto

Para mudar cores, edite `index.html` > Procure por:
```html
bg-indigo-600      <!-- Mude para bg-blue-600, bg-purple-600, etc. -->
hover:bg-indigo-700
text-indigo-600
```

[Referência Tailwind Colors](https://tailwindcss.com/docs/colors)

### **Fontes**

Font stack atual (seguro para todos os navegadores):
```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial
```

Para adicionar Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

Depois use:
```html
class="font-serif" <!-- ou a classe apropriada -->
```

---

## 📱 Testar Responsividade

O site é 100% responsivo (mobile, tablet, desktop).

**Teste em**:
- Chrome/Edge: Pressione `F12` > Responsive Design Mode
- Firefox: `Ctrl+Shift+M`
- Safari: `Cmd+Option+I` > Responsive Design

---

## 🛠️ Suporte e Troubleshooting

### **Problema: Imagem não aparece**

1. Verifique se `perfil.jpg` está na mesma pasta de `index.html`
2. Renomeie exatamente como `perfil.jpg` (case-sensitive em alguns servidores)

### **Problema: Links WhatsApp não funcionam**

1. Verifique o formato: `https://api.whatsapp.com/send/?phone=SEUNUMERO`
2. Número sem símbolos, com DDI: `5547999491211`

### **Problema: Site lento**

1. Comprima `perfil.jpg` (use https://tinypng.com)
2. Certifique-se de usar HTTPS (Vercel faz automaticamente)
3. Verifique cache no navegador (Ctrl+Shift+Delete)

### **Problema: Meta tags não aparecem no compartilhamento**

1. Valide em https://www.opengraph.xyz/
2. Aguarde 24h para Google/redes indexarem
3. Limpe cache de redes (Facebook Debugger, etc.)

---

## 📊 Checklist para Publicação

Antes de publicar:

- [ ] Nome correto em todos os lugares
- [ ] CRP atualizado
- [ ] Foto de perfil trocada
- [ ] Links WhatsApp/Instagram/TikTok funcionando
- [ ] Meta tags (title, description) customizadas
- [ ] Testado em mobile (Chrome DevTools)
- [ ] Testado em Safari, Firefox, Chrome
- [ ] Google Business Profile criado
- [ ] Search Console enviado
- [ ] Sitemap.xml enviado

---

## 📚 Recursos Úteis

| Recurso | Link | Função |
|---------|------|--------|
| **Tailwind CSS** | https://tailwindcss.com/docs | Classes CSS |
| **MDN Web Docs** | https://developer.mozilla.org | Referência HTML/CSS/JS |
| **Google PageSpeed** | https://pagespeed.web.dev | Teste performance |
| **Lighthouse** | https://chrome.google.com/webstore (extensão) | Audit de SEO/Performance |
| **Open Graph Preview** | https://www.opengraph.xyz/ | Teste meta tags |
| **W3C Validator** | https://validator.w3.org | Valide HTML |

---

## 💡 Dicas para Máximo Alcance

1. **Atualize redes sociais**: Poste 3x/semana no Instagram/TikTok
2. **Blog**: Crie 3-5 artigos com palavras-chave (SEO = tráfego orgânico)
3. **Google Ads**: Se tiver R$100/mês, faça anúncios locais
4. **Mobile First**: Sempre teste em celular (70% do tráfego é mobile)

---

## 🎯 Próximos Passos

1. Customize o `index.html` com seus dados
2. Deploy em Vercel/Netlify (5 min)
3. Crie Google Business Profile
4. Submeta sitemap no Google Search Console
5. Comece a postar no Instagram/TikTok

---

## 📞 Suporte

Se tiver dúvidas:

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Deploy Vercel**: https://vercel.com/docs
- **SEO**: https://developers.google.com/search
- **W3C HTML**: https://html.spec.whatwg.org/

---

## 📄 Licença

Este projeto é de uso livre. Personalize e compartilhe livremente!

---

**Última atualização**: 09/12/2025

Criado com ❤️ para Anna Júlia Krueger
