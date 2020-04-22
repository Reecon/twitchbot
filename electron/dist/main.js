"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
electron_1.app.on('ready', createWindow);
// for macOS only
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 1280, height: 1024 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/../../dist/twitchbot/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // for macOS only
    win.on('closed', function () {
        win = null;
    });
}
//# sourceMappingURL=main.js.map