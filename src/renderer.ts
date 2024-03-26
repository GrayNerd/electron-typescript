const { ipcRenderer } = require('electron');

document.body.innerHTML += "<br>WooHoo, it works!";

ipcRenderer.on(
    "new-main-message",
    (event: any, message: string) => {
        document.body.innerHTML += `<br><br><br>${message}`;
        ipcRenderer.send("new-renderer-message", "This is a message from the renderer process");
    }
);

ipcRenderer.on(
    "replying-main-message",
    (event: any, message: string) => {
        document.body.innerHTML += `<br><br><br>${message}`;
    }
);
