const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

let backendProcess;
let mainWindow;

function getPythonPath() {
    if (app.isPackaged) {
        const possiblePaths = [
            path.join(process.resourcesPath, 'python-embed', 'python.exe'),
            path.join(path.dirname(process.execPath), 'resources', 'python-embed', 'python.exe')
        ];
        for (const p of possiblePaths) {
            if (fs.existsSync(p)) return p;
        }
    }
    return path.join(__dirname, '..', 'python-embed', 'python.exe');
}

function getBackendPath() {
    if (app.isPackaged) {
        return path.join(process.resourcesPath, 'back-end', 'app.py');
    }
    return path.join(__dirname, '..', 'back-end', 'app.py');
}

function getFrontendPath() {
    // Prioridade: primeiro tenta resources, depois local
    const possiblePaths = [
        path.join(process.resourcesPath, 'front-end', 'index.html'),
        path.join(path.dirname(process.execPath), 'resources', 'front-end', 'index.html'),
        path.join(__dirname, '..', 'front-end', 'dist', 'index.html')
    ];
    
    for (const p of possiblePaths) {
        if (fs.existsSync(p)) {
            console.log('✅ Frontend encontrado em:', p);
            return p;
        }
    }
    
    console.error('❌ Frontend não encontrado!');
    return null;
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        title: "MORSLUM",
        show: false, // Começa escondida
        backgroundColor: '#ffffff', // Fundo branco para debug
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            devTools: true,
            webSecurity: false // Apenas para debug
        },
    });

    const frontendPath = getFrontendPath();
    
    if (!frontendPath) {
        mainWindow.loadURL(`data:text/html;charset=utf-8,
            <h1 style="color:red">ERRO: Frontend não encontrado</h1>
            <p>Caminhos buscados:</p>
            <ul>
                <li>${path.join(process.resourcesPath, 'front-end', 'index.html')}</li>
                <li>${path.join(__dirname, '..', 'front-end', 'dist', 'index.html')}</li>
            </ul>
        `);
        mainWindow.show();
        mainWindow.webContents.openDevTools();
        return;
    }

    // Tenta carregar o arquivo
    mainWindow.loadFile(frontendPath)
        .then(() => {
            console.log('✅ Frontend carregado com sucesso!');
            mainWindow.show();
            mainWindow.focus();
            
            // Abre DevTools automaticamente se estiver em desenvolvimento
            if (!app.isPackaged) {
                mainWindow.webContents.openDevTools();
            }
        })
        .catch((err) => {
            console.error('❌ Erro ao carregar frontend:', err);
            
            // Mostra erro na tela
            mainWindow.loadURL(`data:text/html;charset=utf-8,
                <h1 style="color:red">Erro ao carregar frontend</h1>
                <p>${err.message}</p>
                <p>Caminho tentado: ${frontendPath}</p>
                <p>Arquivo existe? ${fs.existsSync(frontendPath)}</p>
            `);
            mainWindow.show();
            mainWindow.webContents.openDevTools();
        });

    // Evento para quando a página terminar de carregar
    mainWindow.webContents.on('did-finish-load', () => {
        console.log('📄 Página terminou de carregar');
        mainWindow.show();
    });

    // Evento para erros de renderização
    mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
        console.error('❌ Falha no carregamento:', errorCode, errorDescription);
    });

    // Evento para console do renderer
    mainWindow.webContents.on('console-message', (event, level, message, line, sourceId) => {
        console.log(`[renderer] ${message}`);
    });
}

app.whenReady().then(() => {
    console.log('🚀 Electron pronto, iniciando backend...');
    
    const python = getPythonPath();
    const backend = getBackendPath();
    const backendDir = path.dirname(backend);

    if (fs.existsSync(python) && fs.existsSync(backend)) {
        console.log('✅ Python encontrado em:', python);
        console.log('✅ Backend encontrado em:', backend);
        
        const env = {
            ...process.env,
            APP_MODE: "desktop",
            PYTHONPATH: backendDir,
            PYTHONUNBUFFERED: "1"
        };

        backendProcess = spawn(python, [backend], {
            cwd: backendDir,
            env: env,
            stdio: 'pipe'
        });

        backendProcess.stdout.on('data', (data) => {
            console.log(`[backend] ${data}`);
        });

        backendProcess.stderr.on('data', (data) => {
            console.error(`[backend erro] ${data}`);
        });

        backendProcess.on('error', (err) => {
            console.error('❌ Erro no processo backend:', err);
        });

        // Pequeno delay para garantir que o backend iniciou
        setTimeout(createWindow, 2000);
    } else {
        console.error('❌ Backend ou Python não encontrado');
        createWindow(); // Tenta mesmo assim
    }
});

app.on('window-all-closed', () => {
    if (backendProcess) backendProcess.kill();
    if (process.platform !== "darwin") app.quit();
});