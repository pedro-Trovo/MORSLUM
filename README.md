# MORSLUM

**MORSLUM (MORphoSyntaxis LaboratoriUM)** é uma plataforma voltada à análise morfossintática da língua portuguesa, desenvolvida como Projeto de Pesquisa no Programa de Iniciação Científica da FATEC Ipiranga.

A aplicação utiliza técnicas de **Processamento de Linguagem Natural (PLN)** para analisar frases em português, identificar classes gramaticais e gerar **árvores de dependência sintática**.

O sistema também conta com um **aplicativo desktop** para análise linguística e uma **landing page** onde o software pode ser baixado.

Este projeto foi desenvolvido como parte do **Programa de Iniciação Científica da FATEC Ipiranga**, com foco no estudo de técnicas de **Processamento de Linguagem Natural aplicadas à análise sintática da língua portuguesa**.

# Sumário

* [Como fazer o Download da aplicação](#como-fazer-o-download-da-aplicação)
* [Funcionalidades](#funcionalidades)

  * [Analisador Morfossintático](#analisador-morfossintático)
  * [Quiz Interativo](#quiz-interativo)
* [Tecnologias](#tecnologias)
* [Arquitetura Geral do Projeto](#arquitetura-geral-do-projeto)
* [Executando com Docker](#executando-com-docker)
* [Executando sem Docker](#executando-sem-docker)
* [Cronograma de Desenvolvimento](#cronograma-de-desenvolvimento)
* [Executando o Projeto em Modo Desenvolvedor](#executando-o-projeto-em-modo-desenvolvedor)
* [Licença](#licença)

# Como fazer o Download da aplicação

O aplicativo desktop do **MORSLUM** pode ser baixado através da landing page oficial do projeto.

Nela estão disponíveis:

- Informações sobre o projeto
- Demonstrações das funcionalidades
- Download da versão mais recente do aplicativo desktop

🔗 **Acesse a seguinte página para baixar a aplicação:**
https://morslum.vercel.app

Após o download, basta executar o instalador para utilizar o aplicativo localmente.

---

# Funcionalidades

## Analisador Morfossintático

Permite analisar frases em português e obter:

- Classificação gramatical de cada palavra
- Relações de dependência sintática
- Visualização da árvore sintática da frase

A análise é realizada utilizando modelos de **Processamento de Linguagem Natural (NLP)** da biblioteca **spaCy**.

---

## Quiz Interativo

A aplicação inclui um sistema de quiz para auxiliar no aprendizado de análise sintática.

Cada questão apresenta:

- Uma árvore de dependências
- Alternativas para a classificação da estrutura da frase

O objetivo é reforçar o aprendizado de conceitos gramaticais por meio da prática.

---

# Tecnologias

A plataforma foi desenvolvida utilizando diferentes tecnologias para cada parte do sistema.

O **frontend** foi construído com React para criar uma interface interativa.  
O **backend** utiliza Python e Flask para realizar o processamento linguístico com a biblioteca spaCy.  
Além disso, o projeto inclui um **aplicativo desktop empacotado com Electron** e uma **landing page para distribuição do software**.

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
    </td>
    <td>
      <a href="https://www.electronjs.org/">
        <img alt="Electron" src="https://img.shields.io/badge/electron-%2347848F.svg?style=for-the-badge&logo=electron&logoColor=white"/>
      </a>
    </td>
  </tr>

  <tr>
    <th>DevOps / Infra</th>
    <td></td>
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
---

# Arquitetura Geral do Projeto

O sistema é composto por três partes principais:

**Frontend**
- Interface web para interação com o sistema.
- Acesse para mais detalhes da arquiterura do frontend: [README](https://github.com/pedro-Trovo/MORSLUM-backend#readme)

**Backend**
- API responsável pela análise linguística utilizando spaCy.
- Acesse para mais detalhes da arquiterurado backend: [README](https://github.com/pedro-Trovo/MORSLUM-backend#readme)

**Electron**
- Aplicação empacotada com Electron para criação do executável.
- Acesse para mais detalhes da arquiterura do electron: [README](https://github.com/pedro-Trovo/MORSLUM-backend#readme)

**Landing Page**
- Página de apresentação do projeto com download do aplicativo.
- Acesse para mais detalhes da arquiterura da landing page: [README](https://github.com/pedro-Trovo/MORSLUM-backend#readme)

---


## Executando com Docker

### 1 — Clonar o repositório

```bash
git clone https://github.com/pedro-Trovo/MORSLUM
cd morslum
```

### 2 — Gerar o arquivo de configuração do backend

Antes de iniciar os containers é necessário gerar o arquivo `.env` do backend.

```bash
cd back-end
python setup_env.py
cd ..
```

Esse script irá gerar automaticamente um arquivo `.env` contendo:

- `SECRET_KEY`
- `APP_MODE`

### 3 — Iniciar os containers

```bash
docker compose up --build
```

Após a inicialização:

- **Frontend:** ```bash http://localhost:3000```
- **Backend API:** ```bash http://localhost:5000```

---

## Executando sem Docker

Caso prefira executar manualmente.

### 1 — Backend

Clone este repositório:

Acesse a pasta:

```bash
cd back-end
```

Rode o script `setup_env.py` para criar o arquivo `.env` já com as variáveis de ambiente:

```bash
python setup_env.py
```

Instale dependências:

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

Instale dependências:

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
<h1 align="center">Cronograma de Desenvolvimento</h1>

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

# Executando o Projeto em Modo Desenvolvedor

O projeto pode ser executado localmente utilizando **Docker** ou executando os serviços manualmente.

---


# Licença
Este projeto está licenciado sob a licença MIT.
Veja o arquivo LICENSE para mais detalhes.
