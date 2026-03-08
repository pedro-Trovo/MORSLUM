const { app, BrowserWindow, Menu, globalShortcut } = require('electron'); 
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
    const possiblePaths = [
        path.join(process.resourcesPath, 'front-end', 'index.html'),
        path.join(path.dirname(process.execPath), 'resources', 'front-end', 'index.html'),
        path.join(__dirname, '..', 'front-end', 'dist', 'index.html')
    ];
    
    for (const p of possiblePaths) {
        if (fs.existsSync(p)) {
            console.log('Frontend encontrado em:', p);
            return p;
        }
    }
    
    console.error('❌ Frontend não encontrado!');
    return null;
}

function createWindow() {
   
    Menu.setApplicationMenu(null);

   
    globalShortcut.register('F5', () => {
        console.log('Recarregando com F5');
        mainWindow.reload();
    });

    globalShortcut.register('CommandOrControl+R', () => {
        console.log('Recarregando com Ctrl+R');
        mainWindow.reload();
    });

    globalShortcut.register('CommandOrControl+Shift+R', () => {
        console.log('Force reload com Ctrl+Shift+R');
        mainWindow.webContents.reloadIgnoringCache();
    });

    globalShortcut.register('F12', () => {
        console.log('Abrindo DevTools com F12');
        mainWindow.webContents.toggleDevTools();
    });

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        title: "MORSLUM",
        show: false,
        backgroundColor: '#ffffff',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            devTools: true,
            webSecurity: false
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

    mainWindow.loadFile(frontendPath)
        .then(() => {
            console.log('Frontend carregado com sucesso!');
            mainWindow.show();
            mainWindow.focus();
            
            if (!app.isPackaged) {
                mainWindow.webContents.openDevTools();
            }
        })
        .catch((err) => {
            console.error('Erro ao carregar frontend:', err);
            mainWindow.loadURL(`data:text/html;charset=utf-8,
                <h1 style="color:red">Erro ao carregar frontend</h1>
                <p>${err.message}</p>
                <p>Caminho tentado: ${frontendPath}</p>
                <p>Arquivo existe? ${fs.existsSync(frontendPath)}</p>
            `);
            mainWindow.show();
            mainWindow.webContents.openDevTools();
        });

    mainWindow.webContents.on('did-finish-load', () => {
        console.log('📄 Página terminou de carregar');
        mainWindow.show();
    });

    mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
        console.error('Falha no carregamento:', errorCode, errorDescription);
    });

    mainWindow.webContents.on('console-message', (event, level, message, line, sourceId) => {
        console.log(`[renderer] ${message}`);
    });
}

app.whenReady().then(() => {
    console.log('Electron pronto, iniciando backend...');
    
    const python = getPythonPath();
    const backend = getBackendPath();
    const backendDir = path.dirname(backend);

    if (fs.existsSync(python) && fs.existsSync(backend)) {
        console.log('Python encontrado em:', python);
        console.log('Backend encontrado em:', backend);
        
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
            console.error('Erro no processo backend:', err);
        });

        setTimeout(createWindow, 2000);
    } else {
        console.error('Backend ou Python não encontrado');
        createWindow();
    }
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
    if (backendProcess) backendProcess.kill();
    if (process.platform !== "darwin") app.quit();
});