const {app, BrowserWindow} = require('electron');
console.log('Starting app');

app.on('ready', () => {
  console.log('App is ready');

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();
});
