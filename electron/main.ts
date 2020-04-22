import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

let win: BrowserWindow

app.on('ready', createWindow)

// for macOS only
app.on('activate', () => {
  if (win === null) {
    createWindow()
    }
})

function createWindow() {
  win = new BrowserWindow({ width: 1280, height: 1024 })

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, '/../../dist/twitchbot/index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  // for macOS only
  win.on('closed', () => {
    win = null
  })
}
