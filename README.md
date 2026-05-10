# MORSLUM

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18932789.svg)](https://doi.org/10.5281/zenodo.18932789)

# Sobre o MORSLUM

**MORSLUM (MORphoSyntaxis LaboratoriUM)** é uma plataforma voltada à análise morfossintática da língua portuguesa, desenvolvida como Projeto de Pesquisa no Programa de Iniciação Científica da FATEC Ipiranga.

A aplicação utiliza técnicas de **Processamento de Linguagem Natural (PLN)** para analisar frases em português, identificar classes gramaticais e gerar **árvores de dependência sintática**.

O sistema também conta com um **aplicativo desktop** para análise linguística e uma **landing page** onde o software pode ser baixado.

Este projeto foi desenvolvido como parte do **Programa de Iniciação Científica da FATEC Ipiranga**, com foco no estudo de técnicas de **Processamento de Linguagem Natural aplicadas à análise sintática da língua portuguesa**.

# Sumário

* [Como fazer o Download da aplicação](#como-fazer-o-download-da-aplicação)
* [Funcionalidades](#funcionalidades)
  * [Analisador Morfossintático](#analisador-morfossintático)
  * [Quiz](#quiz)
* [Tecnologias](#tecnologias)
* [Arquitetura Geral do Projeto](#arquitetura-geral-do-projeto)
* [Python Embedded (python-embed)](#python-embedded-python-embed)
* [Executando o Projeto em Modo Desenvolvedor](#executando-o-projeto-em-modo-desenvolvedor)
  * [Executando com Docker](#executando-com-docker)
  * [Executando sem Docker](#executando-sem-docker)
* [Cronograma de Desenvolvimento](#cronograma-de-desenvolvimento)
* [License](#license)

# Como fazer o Download da aplicação

O aplicativo desktop do **MORSLUM** pode ser baixado através da landing page oficial do projeto.

Nela estão disponíveis:

- Informações sobre o projeto
- Download da versão mais recente do aplicativo desktop

🔗 **Acesse a seguinte página para baixar a aplicação:**
https://morslum.vercel.app

Após o download, basta executar o instalador para utilizar o aplicativo localmente.

# Funcionalidades

Existem duas funcionalidades disponíveis na aplicação,  **Analisador Morfossintático** e **Quiz**.

## Analisador Morfossintático

Permite analisar frases em português e obter:

- Classificação gramatical de cada palavra
- Relações de dependência sintática
- Visualização da árvore sintática da frase

A análise é realizada utilizando modelos de **Processamento de Linguagem Natural (NLP)** da biblioteca **spaCy**.

## Quiz

A aplicação inclui um sistema de quiz para auxiliar no aprendizado de análise sintática.

Cada questão apresenta:

- Uma árvore de dependências
- Alternativas para a classificação da estrutura da frase

O objetivo é reforçar o aprendizado de conceitos morfossintáticos por meio da prática.

# Tecnologias

A plataforma foi desenvolvida utilizando diferentes tecnologias para cada parte do sistema.

O **frontend** foi construído com React e Vite.  
O **backend** foi desenvolvido em **Python com Flask**, expondo uma API responsável por processar as frases enviadas pelo frontend e realizar a análise linguística utilizando a biblioteca **spaCy**, que identifica classes gramaticais e relações de dependência sintática entre as palavras. Além disso, o backend também gerencia a lógica do **Quiz**, fornecendo questões e verificando as respostas enviadas pela aplicação.
Além disso, o projeto inclui um **aplicativo desktop empacotado com Electron** e uma **landing page para distribuição do software** que foi construída com React e Vite.

<table align="center">
  <tr>
    <th></th>
    <th>Frontend</th>
    <th>Backend</th>
    <th>Landing Page</th>
    <th>Desktop App</th>
  </tr>

  <tr>
    <th>Linguagens</th>
    <td>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
      </a>
    </td>
    <td>
      <a href="https://www.python.org/">
        <img alt="Python" src="https://img.shields.io/badge/python-3776AB.svg?style=for-the-badge&logo=python&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
      </a>
    </td>
    <td>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
      </a>
    </td>
  </tr>

  <tr>
    <th>Frameworks / Bibliotecas</th>
    <td>
      <a href="https://react.dev/">
        <img alt="React" src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black"/>
      </a>
      <a href="https://vitejs.dev/">
        <img alt="Vite" src="https://img.shields.io/badge/vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
      </a>
      <a href="https://primereact.org/">
        <img alt="PrimeReact" src="https://img.shields.io/badge/primereact-%23007ACC.svg?style=for-the-badge"/>
      </a>
    </td>
    <td>
      <a href="https://flask.palletsprojects.com/">
        <img alt="Flask" src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"/>
      </a>
      <a href="https://spacy.io/">
        <img alt="spaCy" src="https://img.shields.io/badge/spacy-09A3D5.svg?style=for-the-badge"/>
      </a>
    </td>
    <td>
      <a href="https://react.dev/">
        <img alt="React" src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black"/>
      </a>
      <a href="https://vitejs.dev/">
        <img alt="Vite" src="https://img.shields.io/badge/vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
      </a>
     <a href="https://primereact.org/">
        <img alt="PrimeReact" src="https://img.shields.io/badge/primereact-%23007ACC.svg?style=for-the-badge"/>
      </a>
    </td>
    <td>
      <a href="https://www.electronjs.org/">
        <img alt="Electron" src="https://img.shields.io/badge/electron-%2347848F.svg?style=for-the-badge&logo=electron&logoColor=white"/>
      </a>
    </td>
  </tr>

  <tr>
    <th>DevOps / Infra</th>
    <td> <a href="https://www.docker.com/">
        <img alt="Docker" src="https://img.shields.io/badge/docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://www.docker.com/">
        <img alt="Docker" src="https://img.shields.io/badge/docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://vercel.com/">
        <img alt="Vercel" src="https://img.shields.io/badge/vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>
      </a>
    </td>
    <td></td>
  </tr>
  <tr>
    <th>IDE / Editor</th>
    <td>
      <a href="https://code.visualstudio.com/">
        <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://www.jetbrains.com/pycharm/">
        <img alt="PyCharm" src="https://img.shields.io/badge/pycharm-000000.svg?style=for-the-badge&logo=pycharm&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://code.visualstudio.com/">
        <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
      </a>
    </td>
    <td>
      <a href="https://code.visualstudio.com/">
        <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
      </a>
    </td>
  </tr>

</table>


# Arquitetura Geral do Projeto

O Projeto é composto por quatro repositórios:

**Frontend**
- Interface da aplicação.
- Acesse para mais detalhes da arquiterura do frontend: [README-FRONTEND](https://github.com/pedro-Trovo/MORSLUM/blob/main/front-end/README.md)

**Backend**
- API responsável pela análise linguística utilizando spaCy e pelo dornecimento das questões do quiz.
- Acesse para mais detalhes da arquiterurado backend: [README-BACKEND](https://github.com/pedro-Trovo/MORSLUM/blob/main/back-end/README.md)

**Electron**
- Responsável por empacotar aplicação gerando o executável com Electron.
- Acesse para mais detalhes da arquiterura do electron: [README-ELECTRON](https://github.com/pedro-Trovo/MORSLUM/blob/main/electron/README.md)

**Landing Page**
- Página de apresentação do projeto com download do aplicativo.
- Acesse para mais detalhes da arquiterura da landing page: [README-LANDING-PAGE](https://github.com/pedro-Trovo/MORSLUM/blob/main/landing-page/README.md)

# Python Embedded (python-embed)

Diretório que contém o **runtime Python portátil** e todas as dependências
necessárias para executar o backend no aplicativo desktop empacotado com Electron.

## O que contém

- **Python embedable** — runtime portátil (python.exe, DLLs, bibliotecas padrão)
- **Dependências do backend** — Flask, flask-cors, python-dotenv, spacy, etc.
- **Modelo spaCy** — `pt_core_news_sm` (modelo de língua portuguesa)

> [!NOTE]
> O `python-embed` é ignorado pelo Git (`.gitignore`) devido ao seu tamanho.
> Para builds do Electron, ele deve estar presente no diretório raiz do projeto.

## Como criar

1. Baixe o **Python embedable** compatível no site oficial:
   https://www.python.org/downloads/windows/
   (versão utilizada no projeto: 3.12.0)

2. Extraia o conteúdo para a pasta `python-embed/` na raiz do projeto.

3. Instale o **pip** no embedded Python:
   ```bash
   python-embed\python.exe -m ensurepip
   ```

4. Instale as dependências do backend:
   ```bash
   python-embed\python.exe -m pip install -r back-end\requirements.txt
   ```

5. Baixe o modelo spaCy:
   ```bash
   python-embed\python.exe -m spacy download pt_core_news_sm
   ```

6. (Opcional) Compacte para distribuição:
   ```bash
   Compress-Archive -Path python-embed\* -DestinationPath python-embed.zip
   ```

# Executando o Projeto em Modo Desenvolvedor

O projeto pode ser executado localmente utilizando **Docker** ou executando os serviços manualmente.

## Executando com Docker

### 1 — Clonar o repositório

```bash
git clone https://github.com/pedro-Trovo/MORSLUM
```

### 2 — Gerar o arquivo de configuração do backend
Dentro do projeto `/MORSLUM` acesse `/back-end` e rode o seguinte comando:

```bash
python setup_env.py
```

Esse script irá gerar automaticamente um arquivo `.env` contendo:

- `SECRET_KEY`
- `APP_MODE`
> [!WARNING] 
> Certifique-se de que a variável `APP_MODE` esteja definida com o valor `dev` no arquivo `.env`.

### 3 — Iniciar os containers

Volte a raíz do projeto `/MORSLUM` e execute o comando:
```bash
docker compose up --build
```

Após a inicialização:

- Frontend disponível em:
  ```bash
  http://localhost:3000
  ```
- Backend disponível em:
  ```bash
  http://localhost:5000
  ```

## Executando sem Docker

### 1 — Backend

Clone este repositório:

```bash
git clone https://github.com/pedro-Trovo/MORSLUM
```

Gerar o arquivo de configuração do backend, dentro do projeto `/MORSLUM` acesse `/back-end` e execute o comando:

```bash
python setup_env.py
```

Esse script irá gerar automaticamente um arquivo `.env` contendo:

- `SECRET_KEY`
- `APP_MODE`
> [!WARNING]   
> Certifique-se de que a variável `APP_MODE` esteja definida com o valor `dev` no arquivo `.env`.

Instale as dependências:

```bash
pip install -r requirements.txt
```

Execute o servidor:

```bash
python app.py
```
Backend disponível em:
```bash
http://localhost:5000
```
### 2 — Frontend

Acesse a pasta:

```bash
cd front-end
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

Frontend disponível em:
```bash
http://localhost:5173
```
# Cronograma de Desenvolvimento

<table align="center">
  <tr>
    <th>Etapa</th>
    <th>Período</th>
  </tr>

  <tr>
    <td>Revisão teórica sobre gramática e PLN</td>
    <td>Mês 1</td>
  </tr>

  <tr>
    <td>Estudo de estruturas sintáticas e conjunções</td>
    <td>Mês 2</td>
  </tr>

  <tr>
    <td>Pesquisa sobre spaCy e métodos de análise</td>
    <td>Mês 2</td>
  </tr>

  <tr>
    <td>Coleta e organização de frases</td>
    <td>Mês 3</td>
  </tr>

  <tr>
    <td>Desenvolvimento do Backend</td>
    <td>Mês 4–6</td>
  </tr>

  <tr>
    <td>Desenvolvimento do Frontend</td>
    <td>Mês 7–9</td>
  </tr>

  <tr>
    <td>Empacotamento com Electron</td>
    <td>Mês 10</td>
  </tr>

  <tr>
    <td>Testes e validação</td>
    <td>Mês 10–11</td>
  </tr>

  <tr>
    <td>Elaboração do relatório final</td>
    <td>Mês 10–11</td>
  </tr>

</table>

# License

MIT License

Copyright (c) 2026 Pedro D. O. R. Trovo - MORSLUM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

