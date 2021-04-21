// const { app, BrowserWindow } = require('electron')
// const path = require('path')

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// c++ binding

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
    //   preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html').then(() => {
      win.webContents.openDevTools(); // for opening dev tools (inspect ones)
      win.maximize();
  })
}

app.whenReady().then(createWindow)


// mac ke liye hai aage ka 

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
})