<h1 align="center">MORSLUM</h1>

<p align="center">
<strong>MORphoSyntaxis LaboratoriUM</strong><br>
Plataforma para análise morfossintática da língua portuguesa utilizando técnicas de Processamento de Linguagem Natural.
</p>

<p align="center">
Projeto desenvolvido no <strong>Programa de Iniciação Científica da FATEC Ipiranga</strong>.
</p>

<p align="center">
<a href="https://doi.org/10.5281/zenodo.18944100">
<img src="https://zenodo.org/badge/DOI/10.5281/zenodo.18944100.svg" alt="DOI">
</a>
</p>

---

<h2 align="center">Sobre o MORSLUM</h2>

**MORSLUM (MORphoSyntaxis LaboratoriUM)** é uma plataforma voltada à **análise morfossintática da língua portuguesa**, desenvolvida como projeto de pesquisa no **Programa de Iniciação Científica da FATEC Ipiranga**.

A aplicação utiliza técnicas de **Processamento de Linguagem Natural (PLN)** para analisar frases em português, identificar **classes gramaticais** e gerar **árvores de dependência sintática**.

O sistema também conta com:

- um **aplicativo desktop** para análise linguística
- uma **landing page** para distribuição do software

Este projeto possui uma versão **arquivada e citável no Zenodo**, garantindo preservação e reprodutibilidade científica.

O aplicativo desktop do **MORSLUM** pode ser baixado através da landing page oficial do projeto.

<p align="center">
🔗 <strong>Download da aplicação</strong><br>
<a href="https://morslum.vercel.app">https://morslum.vercel.app</a>
</p>

Após o download, basta executar o instalador para utilizar o aplicativo localmente.

---

<h2 align="center">Sumário</h2>

<p align="center">


* [Sobre o MORSLUM](#sobre-o-morslum)
* [Funcionalidades](#funcionalidades)
  * [Analisador Morfossintático](#analisador-morfossintático)
  * [Quiz](#quiz)
* [Tecnologias](#tecnologias)
* [Arquitetura Geral do Projeto](#arquitetura-geral-do-projeto)
* [Executando o Projeto em Modo Desenvolvedor](#executando-o-projeto-em-modo-desenvolvedor)
  * [Executando com Docker](#executando-com-docker)
  * [Executando sem Docker](#executando-sem-docker)
* [Cronograma de Desenvolvimento](#cronograma-de-desenvolvimento)
* [License](#license)

</p>

---

<h2 align="center">Funcionalidades</h2>

A aplicação possui duas funcionalidades principais:

- **Analisador Morfossintático**
- **Quiz**

---

### Analisador Morfossintático

Permite analisar frases em português e obter:

- Classificação gramatical de cada palavra
- Relações de dependência sintática
- Visualização da árvore sintática da frase

A análise é realizada utilizando modelos de **Processamento de Linguagem Natural (NLP)** da biblioteca **spaCy**.

---

### Quiz

A aplicação inclui um sistema de **quiz educacional** para auxiliar no aprendizado de análise sintática.

Cada questão apresenta:

- uma **árvore de dependências**
- **alternativas para classificação da estrutura da frase**

O objetivo é reforçar o aprendizado de conceitos **morfossintáticos por meio da prática**.

---

<h2 align="center">Tecnologias</h2>

A plataforma foi desenvolvida utilizando diferentes tecnologias para cada parte do sistema.

O **frontend** foi construído com **React e Vite**.

O **backend** foi desenvolvido em **Python com Flask**, expondo uma API responsável por processar as frases enviadas pelo frontend e realizar a análise linguística utilizando a biblioteca **spaCy**, que identifica classes gramaticais e relações de dependência sintática entre as palavras.

Além disso, o backend também gerencia a lógica do **Quiz**, fornecendo questões e verificando as respostas enviadas pela aplicação.

O projeto inclui ainda:

- um **aplicativo desktop empacotado com Electron**
- uma **landing page para distribuição do software**

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
    <td><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></td>
    <td><img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"></td>
    <td><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></td>
    <td><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></td>
  </tr>

  <tr>
    <th>Frameworks / Bibliotecas</th>
    <td>
      <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
      <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
      <img src="https://img.shields.io/badge/primereact-007ACC?style=for-the-badge">
    </td>
    <td>
      <img src="https://img.shields.io/badge/flask-000000?style=for-the-badge&logo=flask&logoColor=white">
      <img src="https://img.shields.io/badge/spacy-09A3D5?style=for-the-badge">
    </td>
    <td>
      <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
      <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
      <img src="https://img.shields.io/badge/primereact-007ACC?style=for-the-badge">
    </td>
    <td>
      <img src="https://img.shields.io/badge/electron-47848F?style=for-the-badge&logo=electron&logoColor=white">
    </td>
  </tr>

</table>

---

<h2 align="center">Arquitetura Geral do Projeto</h2>

O projeto é composto por **quatro componentes principais**.

### Frontend

Interface da aplicação.

🔗 Mais detalhes da arquitetura:  
https://github.com/pedro-Trovo/MORSLUM/blob/main/front-end/README.md

---

### Backend

API responsável pela análise linguística utilizando **spaCy** e pelo fornecimento das questões do **Quiz**.

🔗 Mais detalhes da arquitetura:  
https://github.com/pedro-Trovo/MORSLUM/blob/main/back-end/README.md

---

### Electron

Responsável por empacotar a aplicação e gerar o **executável desktop**.

🔗 Mais detalhes da arquitetura:  
https://github.com/pedro-Trovo/MORSLUM/blob/main/electron/README.md

---

### Landing Page

Página de apresentação do projeto com **download do aplicativo**.

🔗 Mais detalhes da arquitetura:  
https://github.com/pedro-Trovo/MORSLUM/blob/main/landing-page/README.md

---

<h2 align="center">Executando o Projeto em Modo Desenvolvedor</h2>

O projeto pode ser executado localmente de duas formas:

- **Com Docker**
- **Sem Docker**

---

## Executando com Docker

### 1 — Clonar o repositório

```bash
git clone https://github.com/pedro-Trovo/MORSLUM
````

### 2 — Gerar o arquivo de configuração do backend

Dentro de `/MORSLUM/back-end` execute:

```bash
python setup_env.py
```

O script gera automaticamente um arquivo `.env` contendo:

* `SECRET_KEY`
* `APP_MODE`

⚠ Certifique-se de que:

```
APP_MODE=dev
```

---

### 3 — Iniciar os containers

Na raiz do projeto:

```bash
docker compose up --build
```

Após iniciar:

Frontend

```
http://localhost:3000
```

Backend

```
http://localhost:5000
```

---

## Executando sem Docker

### Backend

```bash
git clone https://github.com/pedro-Trovo/MORSLUM
```

Gerar `.env`:

```bash
python setup_env.py
```

Instalar dependências:

```bash
pip install -r requirements.txt
```

Executar servidor:

```bash
python app.py
```

Backend disponível em:

```
http://localhost:5000
```

---

### Frontend

```bash
cd front-end
```

Instalar dependências:

```bash
npm install
```

Executar:

```bash
npm run dev
```

Frontend disponível em:

```
http://localhost:5173
```

---

<h2 align="center">Cronograma de Desenvolvimento</h2>

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

---

<h2 align="center">License</h2>

MIT License

Copyright (c) 2026 **Pedro D. O. R. Trovo – MORSLUM**

```
