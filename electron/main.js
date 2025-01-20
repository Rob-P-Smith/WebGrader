import { app, BrowserWindow } from 'electron'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import process from 'node:process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Development mode detection
const isDevelopment = !app.isPackaged

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  if (isDevelopment) {
    // Local dev server URL - Vite runs on port 5173 by default
    const devServerUrl = 'http://localhost:5173'
    win.loadURL(devServerUrl);
    win.webContents.openDevTools();
  } else {
    // In production, load from the dist folder
    win.loadFile(join(__dirname, "../dist/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
