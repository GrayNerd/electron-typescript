// const {app, BrowserWindow, ipcMain} = require('electron');
import { app, BrowserWindow, ipcMain } from 'electron';

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: false,
  });

  const __dirname = import.meta.dirname;
  win.loadURL(`file:///home/ken/src/electron-typescript/build/index.html`);
  win.webContents.openDevTools();

  win.on('closed', () => {
    win.destroy();
  });

  win.on('ready-to-show', () => {
    win.show();
    win.webContents.send('new-main-message', 'This is a message from the main process');
  });
});

ipcMain.on('new-renderer-message', (event: any, message: string) => {
  console.log(message);
  event.reply('replying-main-message', 'This is a reply to the message from the renderer process');
});