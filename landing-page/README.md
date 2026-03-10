# Landing Page – MORSLUM

Este diretório contém a **landing page oficial do projeto MORSLUM**.

A aplicação foi desenvolvida utilizando React e Vite, com o objetivo de apresentar o projeto, explicar sua arquitetura e fornecer informações sobre as tecnologias utilizadas.

Diferentemente da aplicação principal, esta interface possui um caráter **institucional e informativo**, funcionando como um ponto de entrada para o projeto e para a documentação pública.

---

# Estrutura do Projeto

```
landing-page/
├── public/
├── src/
│   ├── components/
│   └── pages/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

A organização do projeto segue uma separação clara entre **componentes reutilizáveis, páginas e recursos estáticos**.

---

# Organização dos Diretórios

## public/

Contém **arquivos públicos estáticos**, que são servidos diretamente pelo servidor sem passar pelo processo de bundling.

Exemplos:

* `icon.ico` — favicon utilizado pelo site
* imagens ou outros arquivos públicos

---

## src/

Diretório que contém **todo o código fonte da aplicação**.

### assets/

Armazena **recursos utilizados diretamente no código**, como:

* imagens
* fontes
* ícones
* outros arquivos importados pelos componentes React

---

### components/

Contém **componentes reutilizáveis da interface**.

```
components/
├── icons/
└── menu/
```

#### icons/

Inclui **ícones SVG personalizados** utilizados na interface para representar tecnologias e recursos do projeto.

Exemplo:

* `SpaCyIcon.jsx` — ícone representando a biblioteca spaCy
* `ElectronIcon.jsx` — ícone representando o ambiente Electron

Esses componentes permitem incorporar ícones como **componentes React reutilizáveis**.

---

#### menu/

Componente responsável pela **barra de navegação da aplicação**.

Arquivos:

* `menu.jsx` — lógica e estrutura do menu
* `menu.css` — estilos específicos do componente

---

### pages/

Diretório que contém **as páginas principais da landing page**.

```
pages/
├── home/
└── sobre/
```

#### home/

Contém o componente responsável pela **página inicial do site**.

Essa página apresenta:

* visão geral do projeto
* descrição das funcionalidades
* tecnologias utilizadas

---

#### sobre/

Página dedicada à **explicação detalhada do projeto**, incluindo seus objetivos, arquitetura e contexto acadêmico.

---

# Arquivos Principais

## App.jsx

Componente principal da aplicação.

Responsável por:

* organizar o layout geral da aplicação
* configurar o sistema de rotas entre páginas
* integrar os componentes principais da interface

---

## main.jsx

Ponto de entrada da aplicação React.

Este arquivo inicializa o React e renderiza o componente `App` na página HTML principal.

---

## index.css

Arquivo responsável pelos **estilos globais da aplicação**, aplicados a todos os componentes.

---

## index.html

Template HTML base utilizado pelo Vite.

Ele define o ponto onde a aplicação React será montada.

---

## vite.config.js

Arquivo de configuração do Vite.

Define opções relacionadas ao processo de build, bundling e otimização da aplicação.

---

## vercel.json

Arquivo utilizado para configurar o **deploy automático da aplicação na plataforma Vercel**.

Ele define regras de roteamento e comportamento do servidor durante a hospedagem.

---

# Papel da Landing Page no Projeto

A landing page tem como objetivo **apresentar publicamente o projeto MORSLUM**, funcionando como um portal informativo sobre a aplicação.

Entre suas funções estão:

* explicar o propósito da plataforma
* apresentar as tecnologias utilizadas
* fornecer uma visão geral da arquitetura do sistema
* servir como ponto de acesso à documentação e ao repositório do projeto
