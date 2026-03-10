# Frontend – MORSLUM

Este diretório contém o **frontend da aplicação MORSLUM**, responsável pela interface de interação com o usuário.

A aplicação foi desenvolvida utilizando **React** e **Vite**, oferecendo uma interface interativa para exploração de estruturas morfossintáticas da língua portuguesa.

O frontend se comunica com o backend da aplicação por meio de uma **API REST**, responsável por realizar o processamento linguístico e retornar os resultados da análise sintática.

Entre as funcionalidades disponíveis na interface estão:

* análise sintática de frases
* visualização da árvore de dependência
* quiz interativo sobre classificação morfossintática
* páginas informativas sobre o projeto

---

# Estrutura do Projeto

```
front-end/
├── src/
│   ├── components/
│   ├── pages/
│   └── service/
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── Dockerfile
└── README.md
```

A organização segue uma arquitetura baseada em **componentes reutilizáveis, páginas e serviços de comunicação com a API**.

---

# Organização dos Diretórios

## src/

Diretório que contém **todo o código fonte da aplicação**.

---

## components/

Contém **componentes reutilizáveis da interface**.

```
components/
├── homeCard/
├── icons/
├── menu/
└── quiz/
```

### homeCard/

Componente utilizado na **página inicial**, responsável por exibir cartões informativos sobre as funcionalidades do sistema.

---

### icons/

Inclui **ícones personalizados em SVG** utilizados na interface.

Esses ícones podem representar:

* tecnologias utilizadas no projeto
* elementos visuais da interface
* indicadores de funcionalidades

---

### menu/

Componente responsável pelo **menu de navegação da aplicação**, permitindo acessar as diferentes páginas do sistema.

---

### quiz/

Conjunto de componentes específicos da **interface do quiz interativo**, responsáveis por:

* exibir perguntas
* apresentar alternativas
* mostrar feedback das respostas

---

# Páginas da Aplicação

O diretório `pages` contém os **componentes responsáveis pelas telas principais do sistema**.

```
pages/
├── analisador/
├── home/
├── quiz/
└── sobre/
```

---

## analisador/

Página responsável pela **análise sintática de frases**.

Nesta interface o usuário pode:

* inserir uma frase em português
* visualizar a árvore de dependência sintática
* observar a classificação morfossintática de cada palavra

Os dados são obtidos a partir da API do backend.

---

## home/

Página inicial da aplicação.

Apresenta uma visão geral das funcionalidades disponíveis e permite navegar para as principais ferramentas do sistema.

---

## quiz/

Página dedicada ao **quiz interativo de classificação gramatical**.

A interface apresenta perguntas baseadas em frases e permite ao usuário selecionar a alternativa correta.

As perguntas são geradas dinamicamente pelo backend.

---

## sobre/

Página informativa que apresenta:

* objetivo do projeto
* tecnologias utilizadas
* contexto de desenvolvimento

---

# Camada de Serviços

O diretório `service` concentra a **comunicação com a API do backend**.

```
service/
├── api.js
├── analisadorService.js
└── quizService.js
```

---

## api.js

Arquivo responsável por configurar a **instância base de comunicação com a API**, incluindo URL base e configurações de requisição.

---

## analisadorService.js

Contém funções responsáveis por enviar frases para o backend e receber os resultados da análise linguística.

---

## quizService.js

Responsável por interagir com os endpoints relacionados ao quiz, incluindo:

* geração de novas questões
* verificação das respostas enviadas pelo usuário

---

# Arquivos Principais

## index.html

Template HTML base utilizado pelo Vite.

Define o ponto onde a aplicação React será renderizada.

---

## package.json

Arquivo responsável por gerenciar:

* dependências da aplicação
* scripts de execução
* ferramentas de build

---

## vite.config.js

Arquivo de configuração do Vite, responsável por definir o comportamento do processo de build e desenvolvimento.

---

## Dockerfile

Arquivo utilizado para **containerizar o frontend da aplicação**, permitindo sua execução em ambientes isolados utilizando Docker.

---

# Papel do Frontend no MORSLUM

Dentro da arquitetura do MORSLUM, o frontend atua como a **camada de interação com o usuário**, responsável por apresentar os resultados das análises linguísticas realizadas pelo backend.

Ele fornece uma interface visual para:

* explorar estruturas sintáticas da língua portuguesa
* realizar exercícios interativos
* visualizar representações gráficas das análises geradas pelo sistema
