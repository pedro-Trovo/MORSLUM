# MORSLUM

**MORSLUM (MORphoSyntaxis LaboratoriUM)** é uma plataforma voltada à análise morfossintática da língua portuguesa, desenvolvida como Projeto de Pesquisa no Programa de Iniciação Científica da FATEC Ipiranga.

A aplicação utiliza técnicas de **Processamento de Linguagem Natural (PLN)** para analisar frases em português, identificar classes gramaticais e gerar **árvores de dependência sintática**.

O sistema também conta com um **aplicativo desktop** para análise linguística e uma **landing page** onde o software pode ser baixado.

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
      <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
    </td>
    <td>
      <img alt="Python" src="https://img.shields.io/badge/python-3776AB.svg?style=for-the-badge&logo=python&logoColor=white"/>
    </td>
    <td>
      <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
    </td>
    <td>
      <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
    </td>
  </tr>

  <tr>
    <th>Frameworks / Bibliotecas</th>
    <td>
      <img alt="React" src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black"/>
      <img alt="Vite" src="https://img.shields.io/badge/vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
      <img alt="PrimeReact" src="https://img.shields.io/badge/primereact-%23007ACC.svg?style=for-the-badge"/>
    </td>
    <td>
      <img alt="Flask" src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"/>
      <img alt="spaCy" src="https://img.shields.io/badge/spacy-09A3D5.svg?style=for-the-badge"/>
    </td>
    <td>
      <img alt="React" src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black"/>
      <img alt="Vite" src="https://img.shields.io/badge/vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
    </td>
    <td>
      <img alt="Electron" src="https://img.shields.io/badge/electron-%2347848F.svg?style=for-the-badge&logo=electron&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <th>DevOps / Infra</th>
    <td></td>
    <td>
      <img alt="Docker" src="https://img.shields.io/badge/docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white"/>
    </td>
    <td>
      <img alt="Vercel" src="https://img.shields.io/badge/vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>
    </td>
    <td></td>
  </tr>
  <tr>
    <th>Editor</th>
    <td>
      <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
    </td>
    <td>
      <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
    </td>
    <td>
      <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
    </td>
    <td>
      <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
    </td>
  </tr>

</table>

---

# Arquitetura do Projeto

O sistema é composto por três partes principais:

**Frontend**
- Interface web para interação com o sistema.

**Backend**
- API responsável pela análise linguística utilizando spaCy.

**Desktop Application**
- Aplicação empacotada com Electron para uso local.

**Landing Page**
- Página de apresentação do projeto com download do aplicativo.

---

# Cronograma de Desenvolvimento

| Etapa | Período |
|------|------|
Revisão teórica sobre gramática e PLN | Mês 1 |
Estudo de estruturas sintáticas e conjunções | Mês 2 |
Pesquisa sobre spaCy e métodos de análise | Mês 2 |
Coleta e organização de frases | Mês 3 |
Desenvolvimento do Backend | Mês 4–6 |
Desenvolvimento do Frontend | Mês 7–9 |
Empacotamento com Electron | Mês 10 |
Testes e validação | Mês 10–11 |
Elaboração do relatório final | Mês 10–11 |

---

# Download

O aplicativo desktop do **MORSLUM** pode ser baixado através da landing page oficial do projeto.

Nela estão disponíveis:

- Informações sobre o projeto
- Demonstrações das funcionalidades
- Download da versão mais recente do aplicativo desktop

🔗 **Landing Page**
https://morslum.vercel.app

Após o download, basta executar o instalador para utilizar o aplicativo localmente.

# Contexto Acadêmico

Este projeto foi desenvolvido como parte do **Programa de Iniciação Científica da FATEC Ipiranga**, com foco no estudo de técnicas de **Processamento de Linguagem Natural aplicadas à análise sintática da língua portuguesa**.

---

# Licença

Este projeto foi desenvolvido para fins acadêmicos.
