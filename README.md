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



<h2 align="center">Sumário</h2>

<p align="center">


* [Sobre o MORSLUM](#sobre-o-morslum)
* [Funcionalidades](#funcionalidades)
  * [Analisador Morfossintático](#analisador-morfossintático)
  * [Quiz](#quiz)
* [Imagens do Projeto](#imagens-do-projeto)
* [Tecnologias](#tecnologias)
* [Limitações do Modelo](#limitações-do-modelo)
* [Arquitetura Geral do Projeto](#arquitetura-geral-do-projeto)
* [Python Embedded (python-embed)](#python-embedded-python-embed)
* [Executando o Projeto em Modo Desenvolvedor](#executando-o-projeto-em-modo-desenvolvedor)
  * [Executando com Docker](#executando-com-docker)
  * [Executando sem Docker](#executando-sem-docker)
* [Cronograma de Desenvolvimento](#cronograma-de-desenvolvimento)
* [License](#license)

</p>



<h2 align="center">Funcionalidades</h2>

A aplicação possui duas funcionalidades principais:

- **Analisador Morfossintático**
- **Quiz**



<h2 align="center">Analisador Morfossintático</h2>


Permite analisar frases em português e obter:

- Classificação gramatical de cada palavra
- Relações de dependência sintática
- Visualização da árvore sintática da frase

A análise é realizada utilizando modelos de **Processamento de Linguagem Natural (NLP)** da biblioteca **spaCy**.



<h2 align="center">Quiz</h2>

A aplicação inclui um sistema de **quiz educacional** para auxiliar no aprendizado de análise sintática.

Cada questão apresenta:

- uma **árvore de dependências**
- **alternativas para classificação da estrutura da frase**

O objetivo é reforçar o aprendizado de conceitos **morfossintáticos por meio da prática**.

<h2 align="center">Imagens do Projeto</h2>

<h3 align="center">Interface inicial da plataforma MORSLUM</h3>
<p align="center">
  <img src="assets/1_Interface%20inicial%20da%20plataforma%20MORSLUM.png" alt="Interface inicial">
</p>

<h3 align="center">Interface do quiz morfossintático</h3>
<p align="center">
  <img src="assets/2_Interface%20do%20quiz%20morfossint%C3%A1tico.png" alt="Quiz">
</p>

<h3 align="center">Interface do quiz morfossintático ao responder corretamente uma questão</h3>
<p align="center">
  <img src="assets/3_Interface%20do%20quiz%20morfossint%C3%A1tico%20ao%20responder%20corretamente%20uma%20quest%C3%A3o.png" alt="Quiz correto">
</p>

<h3 align="center">Interface do quiz morfossintático ao responder erradamente uma questão</h3>
<p align="center">
  <img src="assets/4_Interface%20do%20quiz%20morfossint%C3%A1tico%20ao%20responder%20erradamente%20uma%20quest%C3%A3o.png" alt="Quiz errado">
</p>

<h3 align="center">Exemplo de análise morfossintática gerada pela plataforma</h3>
<p align="center">
  <img src="assets/5_%20Exemplo%20de%20an%C3%A1lise%20morfossint%C3%A1tica%20gerada%20pela%20plataforma.png" alt="Análise">
</p>

<h3 align="center">Árvore de dependências sintáticas gerada pelo analisador</h3>
<p align="center">
  <img src="assets/6_%C3%81rvore%20de%20depend%C3%AAncias%20sint%C3%A1ticas%20gerada%20pelo%20analisador.png" alt="Árvore">
</p>

<h3 align="center">Estatísticas detalhadas da análise</h3>
<p align="center">
  <img src="assets/7_Estat%C3%ADsticas%20detalhadas%20da%20an%C3%A1lise.png" alt="Estatísticas">
</p>

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

<h2 align="center">Limitações do Modelo</h2>

O modelo de Processamento de Linguagem Natural utilizado (spaCy) apresenta algumas limitações inerentes ao seu treinamento para a língua portuguesa:

- **Preposições + Artigos:** Palavras como "da" (de + a), "do" (de + o), "dos" (de + os) são classificadas apenas como preposições, ignorando o artigo contraído.

- **Adjetivos vs. Particípios:** Adjetivos como "lindo", "ensolarado", "encontrado" e "comprado" podem ser confundidos com verbos no particípio passado.

Estas limitações são do modelo do spaCy e não erros de implementação do MORSLUM.

<h2 align="center">Arquitetura Geral do Projeto</h2>

O projeto é composto por **quatro componentes principais**.

### Frontend

Interface da aplicação.

🔗 Mais detalhes da arquitetura:  
https://github.com/pedro-Trovo/MORSLUM/blob/main/front-end/README.md


### Backend

API responsável pela análise linguística utilizando **spaCy** e pelo fornecimento das questões do **Quiz**.

🔗 Mais detalhes da arquitetura:  
https://github.com/pedro-Trovo/MORSLUM/blob/main/back-end/README.md



### Electron

Responsável por empacotar a aplicação e gerar o **executável desktop**.

🔗 Mais detalhes da arquitetura:  
https://github.com/pedro-Trovo/MORSLUM/blob/main/electron/README.md


### Landing Page

Página de apresentação do projeto com **download do aplicativo**.

🔗 Mais detalhes da arquitetura:  
https://github.com/pedro-Trovo/MORSLUM/blob/main/landing-page/README.md



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


<h2 align="center">Executando o Projeto em Modo Desenvolvedor</h2>

O projeto pode ser executado localmente de duas formas:

- **Com Docker**
- **Sem Docker**


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



<h2 align="center">License</h2>

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
