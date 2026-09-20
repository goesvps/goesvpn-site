# GoesVPN — Site institucional

Landing page da GoesVPN: apresenta a **loja.goesvpn.com.br** (marketplace de produtos digitais) e os serviços de **Criação de Sites, SEO, GEO, AEO e Automação**.

## Stack

Site estático (HTML + CSS + JS vanilla), sem build step. A página usa um pequeno framework de componentes próprio (`support.js`, tags `x-dc`/`x-import`) e um design system exportado em `_ds/` (tokens de cor, tipografia, espaçamento e efeitos, mais um bundle de componentes de UI).

```
.
├── index.html          # página única (hero, sobre, serviços, como funciona, planos, FAQ, contato)
├── support.js           # runtime do framework de componentes usado pela página
├── assets/               # logo e favicon
├── _ds/                  # design system (tokens, componentes, guidelines)
├── robots.txt
├── sitemap.xml
└── llms.txt              # resumo do site para crawlers de IA (convenção llms.txt)
```

## Rodar localmente

Não há build. Basta servir a pasta como arquivos estáticos, por exemplo:

```bash
npx serve .
# ou
python -m http.server 8080
```

Abrir `index.html` diretamente no navegador (`file://`) também funciona, mas um servidor local evita eventuais bloqueios de cache/CORS do navegador.

## SEO / GEO / AEO

O `<head>` de `index.html` inclui, em HTML puro (fora do `<helmet>` do framework, para ficar visível a crawlers que não executam JavaScript):

- `<title>`, meta description, canonical, Open Graph e Twitter Card;
- dados estruturados (`schema.org`) via JSON-LD: `Organization`, `WebSite`, `Service` (um por serviço oferecido) e `FAQPage`;
- `robots.txt` e `sitemap.xml` na raiz;
- `llms.txt` na raiz, resumindo empresa, serviços e produto para agentes de IA (GPTBot, ClaudeBot, PerplexityBot etc.).

Ao editar as perguntas do FAQ (array `FAQS` no `<script type="text/x-dc">` ao final de `index.html`), atualize também o bloco `FAQPage` no JSON-LD do `<head>` para que o texto continue idêntico nos dois lugares.

## Deploy

Antes de publicar, ajuste os textos que ainda dependem do domínio final (`https://goesvpn.com.br/`) em: `index.html` (canonical, Open Graph, JSON-LD), `robots.txt`, `sitemap.xml` e `llms.txt`.
