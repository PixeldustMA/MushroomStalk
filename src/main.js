require('update-electron-app')({
	repo: 'PixeldustMA/MushroomStalk',
	updateInterval: '1 hour',
  })
const { app, BrowserWindow, ipcMain } = require('electron')
const  path  = require('path');
const fs = require('fs');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
		}
    
  });

  win.loadFile('./POCKETS/STARTSCREEN/FrameworkStartScreen.html')
	win.webContents.openDevTools();
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

// == HANDLERS == // 
ipcMain.handle('saveNote', WriteMessageToFile);
    function WriteMessageToFile(event, path, details) {
      const newdetails = JSON.stringify(details);
        console.log("MAIN ACCESSED...");
        console.log("MESSAGE WRITING FUNCTION ACTIVATED...");
        console.log("MESSAGE STATUS...");
      fs.writeFileSync(path, newdetails, 'utf8', err => {
        if (err) 
          console.error(err);
        else 
          console.log('Message Successfully Written to File');
      });
    }
ipcMain.handle('folderOperations', FolderProcessing)
    function FolderProcessing(event, folderPath) {
        console.log("MAIN ACCESSED...");
        console.log("FOLDER READING FUNCTION ACTIVATED...");
        console.log("FOLDER PATH ACCESSED IS...");
        console.log(folderPath)
      return fs.readdirSync(folderPath);
    }
ipcMain.handle('getPath', getFormattedPath);
    function getFormattedPath(event, relative) {
      let relativeArray = relative.split("/");
      let bucket = [__dirname];
      for (let index = 0; index < relativeArray.length; index++) {
          bucket.push(relativeArray[index])
      }
      let result = path.join(...bucket);
      return result;
    }
ipcMain.handle('readMessages', ReadNote);
    function ReadNote(event, MessagePath) {
      const Messages = 
        fs.readFileSync(MessagePath, 'utf8', function(err, data){
          let formattedData = JSON.parse(data)
          return formattedData;
      })
      return Messages;
    };
