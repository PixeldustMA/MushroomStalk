const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path  = require('path');
const fs = require('fs');

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//         ENTRY POINT               //
// ================================= //

// == APP VARIABLES == //

let mainWindow;
const PreloadPath = 'Access.js';
const SplashScreenPath = './POCKETS/WELCOME/SPLASH/FrameworkSplash.html'
const routePath_Base = "../../CONSOLE/ROUTES/Memory.json";
const routePath_Planets = "../../CONSOLE/ROUTES/Explorer.json";
const routePath_Users = "../../CONSOLE/ROUTES/Users.json";
const routePath_Assets = "../../CONSOLE/ROUTES/Assets.json"

// == STRUCTURAL FUNCTIONS == //
/**
 * CREATE MAIN BROWSER WINDOW
 */
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 820,
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        preload: path.join(__dirname, PreloadPath)
        }
    });
    win.setBounds({
        x: 0,
        y: 0
    });
    win.loadFile(SplashScreenPath);
    win.setIcon("./ASSETS/ICONS/MushroomStalk.ico")
    win.webContents.openDevTools();
    mainWindow = win;
}

// == RUN APP == //
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// == HANDLERS == // 
ipcMain.handle('close', QuitApplication);
ipcMain.handle('small', MinimiseApplication);
ipcMain.handle('big', MaximiseApplication);
ipcMain.handle('saveNote', WriteDataToFile);
ipcMain.handle('readNote', ReadDataFromFile);
ipcMain.handle('getPath', getFormattedPath);
ipcMain.handle('fetchRouteMemory', RouteMemory);
ipcMain.handle('removeFile', DeleteFile);
ipcMain.handle('folderOperations', FolderProcessing);
ipcMain.handle('dialog:openDirectory',  async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory']
    })
    if (canceled) {
        return
    } else {
        return filePaths[0]
    };
});

// == WINDOWS == //
function QuitApplication(event) {
    let windowActive = BrowserWindow.getFocusedWindow();
    windowActive.close();
};
function MaximiseApplication(event) {
    let windowActive = BrowserWindow.getFocusedWindow();
    windowActive.isMaximized() ? windowActive.unmaximize() : windowActive.maximize()
};
function MinimiseApplication(event) {
    let windowActive = BrowserWindow.getFocusedWindow();
    windowActive.minimize();
};

// == WRITE == //
/**
 * WRITE TO FILE
 */
function WriteDataToFile(event, path, details) {

    console.log("MESSAGE WRITING FUNCTION ACTIVATED...");
    console.log("PATH ACCESSED IS...");
    console.log(path);

    const newdetails = JSON.stringify(details, null, 4);
    fs.writeFileSync(path, newdetails, 'utf8', err => {
        if (err) 
            console.error(err);
        else 
            console.log('Data Successfully Written to File');
    });
};

// == READ == //
/**
* READ FROM FILE
*/
function ReadDataFromFile(event, filePath) {

    console.log("READING FUNCTION ACTIVATED...");
    console.log("PATH ACCESSED IS...");
    console.log(filePath)

    const Messages = fs.readFileSync(filePath, 'utf8', function(err, data){
        let formattedData = JSON.parse(data);
        return formattedData;
    })
    return Messages;
};

// == FOLDERS == //
function FolderProcessing(event, folderPath) {
    console.log("FOLDER READING FUNCTION ACTIVATED...");
    console.log("FOLDER PATH ACCESSED IS...");
    console.log(folderPath)
    return fs.readdirSync(folderPath);
};

// == FILE MANIPULATION == //
// == PATHS == //
/**
 * CREATE A FORMATTED PATH FROM A STRING
 * @param {*} event 
 * @param {*string} relative 
 * @returns PATH STRING
 */
function getFormattedPath(event, relative) {

    console.log("CREATING A PATH...");
    console.log(relative);

    let relativeArray = relative.split("/");
    let bucket = [__dirname];
    pathloop: for (let index = 0; index < relativeArray.length; index++) {
                bucket.push(relativeArray[index])
            }
    let pathResult = path.join(...bucket);

    console.log("PATH IS...");
    console.log(pathResult);

    return pathResult;
};
function RouteMemory(event, tag) {

    console.log('ACCESSING ROUTE MEMORY...');
    console.log('TYPE REQUESTED IS...');
    console.log(tag);

    let rootPath = "";
    switch (tag) {
        case "BASE":
            rootPath = getFormattedPath(event, routePath_Base);
            break;
        case "PLANETS":
            rootPath = getFormattedPath(event, routePath_Planets);
            break;
        case "USERS":
            rootPath = getFormattedPath(event, routePath_Users);
            break;
        case "ASSETS":
            rootPath = getFormattedPath(event, routePath_Assets);
            break;
        default:
            break;
    };

    const RouteObject = fs.readFileSync(rootPath, 'utf8', function(err, data) {
        let formattedData = JSON.parse(data);
        return formattedData;
    });
    return RouteObject;
};
function DeleteFile(event, path) {
    console.log(path)
    console.log("DELETING")
        fs.stat(path, function (err, stats) {
            if (err) {return console.error(err);}
            fs.unlink(path, function(err){
                if(err) return console.log(err);
                console.log('file deleted successfully');
            });  
        });
};