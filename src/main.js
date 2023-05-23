require('update-electron-app')({
	repo: 'PixeldustMA/MushroomStalk',
	updateInterval: '1 hour',
  })
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadFile('./POCKETS/STARTSCREEN/FrameworkStartScreen.html')
}

app.whenReady().then(() => {
  
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})