# MORSLUM Desktop

Este diretório contém a **aplicação desktop do projeto MORSLUM**, construída com Electron.

A aplicação empacota todo o ecossistema do sistema em um único executável, incluindo:

* o **backend** desenvolvido em Flask
* o **frontend** compilado da aplicação web
* uma **distribuição portátil do Python**

Essa abordagem permite que o sistema seja executado de forma **totalmente autônoma**, sem exigir que o usuário instale dependências adicionais.

O Electron atua como **camada de integração**, responsável por iniciar o backend, carregar a interface e gerenciar o ciclo de vida da aplicação desktop.

---

# Estrutura do Projeto

```
electron/
├── main.js
├── preload.js
├── package.json
├── README.md
└── icon.ico
```

---

# Recursos Empacotados

Durante o processo de build, a aplicação inclui recursos externos utilizando a configuração `extraResources`.

Esses recursos compõem o ambiente necessário para execução da aplicação:

```
extraResources/
├── back-end/           # Código do servidor Flask
│   ├── src/
│   ├── app.py
│   └── requirements.txt
│
├── python-embed/       # Distribuição portátil do Python
│   ├── python.exe
│   ├── Lib/
│   └── Scripts/
│
└── front-end/          # Frontend compilado da aplicação
    ├── index.html
    └── assets/
```

Essa estratégia permite que o sistema funcione **sem depender de instalações externas de Python ou servidores adicionais**.

---

# Componentes Principais

## main.js — Processo Principal

Arquivo responsável por **orquestrar toda a aplicação Electron**.

Entre suas principais funções estão:

* criar e gerenciar a janela principal da aplicação
* iniciar o servidor backend em um subprocesso
* localizar a distribuição Python embutida
* configurar eventos do sistema e ciclo de vida da aplicação
* gerenciar comunicação entre processos

### Localização do Python embutido

```javascript
function getPythonPath() {
    if (app.isPackaged) {
        return path.join(process.resourcesPath, 'python-embed', 'python.exe');
    }

    return path.join(__dirname, '..', 'python-embed', 'python.exe');
}
```

---

### Inicialização do backend

O backend Flask é executado como um subprocesso dentro da aplicação.

```javascript
backendProcess = spawn(python, [backend], {
    cwd: backendDir,
    env: { ...process.env, APP_MODE: "desktop" },
    stdio: "pipe"
});
```

Dessa forma, o servidor é iniciado automaticamente quando a aplicação desktop é aberta.

---

## preload.js — Ponte de Segurança

O arquivo `preload.js` atua como **camada intermediária entre o processo principal e o processo de renderização**.

Ele permite expor APIs controladas para o frontend utilizando `contextBridge`, evitando que o código da interface tenha acesso direto às APIs completas do Node.js.

No momento, o arquivo está preparado para futuras implementações de comunicação segura via **IPC (Inter-Process Communication)**.

---

## package.json — Configuração e Build

O `package.json` define as dependências da aplicação e as configurações utilizadas pelo processo de empacotamento.

Um ponto importante é a definição da propriedade `extraResources`, responsável por incluir os componentes necessários para execução do sistema.

```json
{
  "build": {
    "extraResources": [
      {
        "from": "../back-end",
        "to": "back-end"
      },
      {
        "from": "../python-embed",
        "to": "python-embed",
        "filter": ["**/*", "!**/*.pdb"]
      },
      {
        "from": "../front-end/dist",
        "to": "front-end"
      }
    ]
  }
}
```

---

# Papel do Electron no MORSLUM

No contexto da arquitetura do MORSLUM, o Electron tem como objetivo **transformar a aplicação web em um software desktop distribuível**.

Isso permite que a plataforma seja executada localmente de forma simples, sem exigir configuração manual de ambiente ou instalação de dependências.

O resultado é uma versão **autônoma da aplicação**, capaz de executar:

* a interface do sistema
* o backend de análise linguística
* o ambiente Python necessário para o processamento

tudo dentro de um único instalador.

