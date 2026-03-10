# Backend – MORSLUM

Este diretório contém o **backend da plataforma MORSLUM**, responsável pelo processamento das frases, geração das análises linguísticas e fornecimento dos dados consumidos pela interface web.

O backend foi desenvolvido em **Python utilizando Flask**, e integra técnicas de **Processamento de Linguagem Natural (PLN)** por meio da biblioteca spaCy. A aplicação disponibiliza uma API responsável por realizar análises morfossintáticas de frases em português e por gerar questões interativas utilizadas no quiz da plataforma.

A organização do código segue uma **separação clara de responsabilidades**, com módulos dedicados à API, processamento linguístico, serviços de negócio e utilidades auxiliares.

---

# Estrutura do Projeto

```
back-end/
├── src/
│   ├── api/
│   ├── data/
│   ├── nlp/
│   ├── services/
│   └── utils/
│
├── app.py
├── requirements.txt
├── Dockerfile
└── README.md
```

Cada diretório possui uma função específica dentro da arquitetura da aplicação.

---

# Organização dos Módulos

## API (`/src/api`)

Camada responsável pela **exposição dos endpoints da API**.

```
src/api/
├── __init__.py
└── routes.py
```

* **routes.py**
  Define as rotas da API utilizando **Flask Blueprint**.
  Nesta camada são recebidas as requisições do frontend e encaminhadas para os serviços responsáveis pelo processamento.

Os principais endpoints disponibilizados são:

* `GET /api/quiz` – gera uma nova questão para o quiz
* `POST /api/resposta` – verifica a resposta enviada pelo usuário
* `POST /api/analisador` – analisa sintaticamente uma frase

---

## Dados (`/src/data`)

Contém **arquivos de dados utilizados pela aplicação**.

```
src/data/
├── conjunto_frases.csv
└── glossario_tags.csv
```

* **conjunto_frases.csv**
  Base de frases utilizadas para geração das questões do quiz.

* **glossario_tags.csv**
  Arquivo responsável por mapear as **tags gramaticais do spaCy (POS)** do inglês para seus equivalentes em português.

---

## Processamento de Linguagem Natural (`/src/nlp`)

Este módulo concentra a **lógica principal de análise linguística** da aplicação.

```
src/nlp/
├── analisador.py
├── classificarFrase.py
└── gerarArvoreDep.py
```

* **gerarArvoreDep.py**
  Gera a representação visual da **árvore de dependência sintática** em formato SVG utilizando o `displacy` do spaCy.

* **classificarFrase.py**
  Realiza a **classificação morfológica (POS tagging)** dos tokens da frase.

* **analisador.py**
  Atua como **orquestrador do processo de análise**, combinando a geração da árvore sintática e a classificação das tags gramaticais.

---

## Services (`/src/services`)

Camada responsável pelas **regras de negócio da aplicação**.

```
src/services/
├── carregarFrase.py
├── gerarAlternativas.py
├── pipeline.py
└── verificarResposta.py
```

* **carregarFrase.py**
  Carrega frases da base de dados para serem utilizadas nas questões.

* **gerarAlternativas.py**
  Gera as alternativas de resposta apresentadas no quiz.

* **pipeline.py**
  Coordena o fluxo completo de geração de uma questão, desde a seleção da frase até a criação das alternativas.

* **verificarResposta.py**
  Responsável por validar a resposta enviada pelo usuário.

---

## Utils (`/src/utils`)

Módulo com **funções auxiliares reutilizáveis**.

```
src/utils/
└── tradutor_tags.py
```

* **tradutor_tags.py**
  Traduz as **tags morfossintáticas do spaCy** para termos equivalentes em português utilizando o glossário definido em `glossario_tags.csv`.

---

# Arquivos Principais

## `app.py`

Arquivo que atua como **ponto de entrada da aplicação Flask**, responsável por inicializar o servidor e registrar as rotas da API.

---

## `requirements.txt`

Lista das **dependências Python necessárias** para execução do backend.

Inclui bibliotecas utilizadas para:

* processamento de linguagem natural
* construção da API
* manipulação de dados

---

## `Dockerfile`

Arquivo de configuração utilizado para **containerização da aplicação**, permitindo executar o backend em ambientes isolados utilizando Docker.

---

# Papel do Backend na Plataforma

Dentro da arquitetura do MORSLUM, o backend é responsável por:

* processar frases utilizando técnicas de **Processamento de Linguagem Natural**
* gerar **árvores de dependência sintática**
* realizar **classificação morfossintática**
* fornecer dados para os **exercícios interativos do quiz**
* disponibilizar essas funcionalidades por meio de uma **API REST**


