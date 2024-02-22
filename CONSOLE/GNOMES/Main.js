// require('update-electron-app')({
// 	repo: 'PixeldustMA/MushroomStalk',
// 	updateInterval: '1 hour',
// })

const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path  = require('path');
const fs = require('fs');

const sqlite3 = require('sqlite3');
const XLSX = require('xlsx');
var { PythonShell } = require('python-shell');

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//         ENTRY POINT               //
// ================================= //

// == APP VARIABLES == //
let mainWindow;
const DatabasePath = './DATABASE/ARCHIVE/Archive.sqlite';
const PreloadPath = 'Access.js';
const SplashScreenPath = './POCKETS/SPLASH/FrameworkSplash.html'
const QueriesPath = "/QueryCodes.json";
const spreadSheetPath = 'Python/Spreadsheets.py'
const RouteMemoryPath = "../../REMEMBER/MEMORY/RouteMemory.json"

// == PYTHON SHELL VARIABLES == //
let PythonShellOptions = {
	mode: 'text',
	pythonOptions: ['-u'],
	args: [] 
};

// == CREATE DATABASE == //
const ArchiveDatabase = new sqlite3.Database(DatabasePath);
const QUERYFile = fs.readFileSync(path.join(__dirname + QueriesPath));
const QUERY = JSON.parse(QUERYFile);

// == STRUCTURAL FUNCTIONS == //
/**
 * CREATE MAIN BROWSER WINDOW
 */
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        preload: path.join(__dirname, PreloadPath)
        }
    });
    win.loadFile(SplashScreenPath);
    win.setIcon("./ASSETS/ICON/MushroomStalk.ico")
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

ipcMain.handle('saveNote', WriteMessageToFile);
ipcMain.handle('createNewFile', createFile);
ipcMain.handle('folderOperations', FolderProcessing);
ipcMain.handle('readNote', ReadMessageFromFile);
ipcMain.handle('resetFile', deleteAppFile);
ipcMain.handle('getPath', getFormattedPath);
ipcMain.handle('fetchRouteMemory', RouteMemory)
ipcMain.handle('dialog:openDirectory',  async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory']
    })
    if (canceled) {
        return
    } else {
        return filePaths[0]
    }
});
ipcMain.on('draw', drawSquare);
ipcMain.handle('characterKeys', insertCharacterKeys);
ipcMain.handle('insertData', ArchiveInsert);
ipcMain.handle('selectAll', SelectTable);
ipcMain.handle('selectData', searchTable);
ipcMain.handle('updateData', updateDatabaseEntry)
ipcMain.handle('readSpreadsheet', ReadLibra);
ipcMain.handle('rattle', RunRacoon);

// == WRITE == //
/**
 * WRITE TO FILE
 */
function WriteMessageToFile(event, path, details) {

    console.log("MESSAGE WRITING FUNCTION ACTIVATED...");
    console.log("PATH ACCESSED IS...");
    console.log(path);

    const newdetails = JSON.stringify(details, null, 4);
    fs.writeFileSync(path, newdetails, 'utf8', err => {
        if (err) 
            console.error(err);
        else 
            console.log('Message Successfully Written to File');
    });
};
/**
* CREATE A NEW FILE AND WRITE TO IT
*/
async function createFile(event, path, details) {

    console.log("FILE CREATION FUNCTION ACTIVATED...");
    console.log("PATH ACCESSED IS...");
    console.log(path);

    const newdetails = JSON.stringify(details, null, 4);
    fs.writeFile(path, newdetails, function (err) {
        if (err) throw err;
            console.log('Saved!');
    }); 
};

// == READ == //
/**
 * VIEW CONTENTS OF A FOLDER
 */
function FolderProcessing(event, folderPath) {
    console.log("FOLDER READING FUNCTION ACTIVATED...");
    console.log("FOLDER PATH ACCESSED IS...");
    console.log(folderPath)
    return fs.readdirSync(folderPath);
    }
/**
* READ FROM FILE
*/
function ReadMessageFromFile(event, MessagePath) {

    console.log("READING FUNCTION ACTIVATED...");
    console.log("PATH ACCESSED IS...");
    console.log(MessagePath)

    const Messages = fs.readFileSync(MessagePath, 'utf8', function(err, data){
        let formattedData = JSON.parse(data);
        return formattedData;
    })
    return Messages;
};

function deleteAppFile(event, path) {
        fs.stat(path, function (err, stats) {
            console.log(stats);
            if (err) {return console.error(err);}

            fs.unlink('path',function(err){
                if(err) return console.log(err);
                console.log('file deleted successfully');
            });  
        });
}
/**
 * GET THE POSSIBLE ROUTES
 * @returns ROUTE OBJECT
 */
function RouteMemory(event) {

    console.log("ACCESSING ROUTE MEMORY...");

    const path = getFormattedPath(event, RouteMemoryPath);
    const RouteObject = fs.readFileSync(path, 'utf8', function(err, data){
        let formattedData = JSON.parse(data);
        return formattedData;
    })
    return RouteObject;

}
// == PATHS == //
/**
 * CREATE A FORMATTED PATH FROM A STRING
 * @param {*} event 
 * @param {*string} relative 
 * @returns PATH STRING
 */
function getFormattedPath(event, relative) {

    console.log("CREATING A PATH...");

    let relativeArray = relative.split("/");
    let bucket = [__dirname];
    pathloop: for (let index = 0; index < relativeArray.length; index++) {
                bucket.push(relativeArray[index])
            }
    let pathResult = path.join(...bucket);

    console.log(pathResult)
    return pathResult;
};

// == WINDOWS == //
/**
 * DRAW A NEW WINDOW
 * @param {*} event 
 * @param {string} path 
 */
function drawSquare(event, path) {
    childWindow = new BrowserWindow({
        width: 1000,
        height: 1000,

        parent: mainWindow,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
    })
        childWindow.loadFile(path)
        childWindow.once("ready-to-show", () => {
            childWindow.show();
        });
}

// == DATABASE == //
/**
 * CREATE A NEW CHARACTER RECORD IN THE DATABASE
 * @param {*} event 
 * @param {*string} request 
 * @param {*string} tag 
 */
async function insertCharacterKeys(event, request, tag) {

    console.log("INSERTING NEW CHARACTER INTO ARCHIVE");

    ArchiveDatabase.serialize(() => {
        var dataArray = [];
        dataArray.push(
            request.MUSHROOM, 
            request.ACTIVITY, 
            request.ANCESTRY,
            request.EDUCATION, 
            request.EMPLOYMENT, 
            request.HALEX,
            request.ORGANISATION, 
            request.PERSONAL, 
            request.LOCATION, 
            request.PET, 
            request.RELATIONSHIP
        );

    var sqlString = QUERY.QUERIES.INSERT + QUERY.BITS.SPACE + QUERY.MUSHROOMCODES.NAME + QUERY.BITS.OPENPARENTHESES
                + QUERY.MUSHROOMCODES.MUSHROOM + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.ACTIVITY + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.ANCESTRY + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.EDUCATION + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.EMPLOYMENT + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.HALEX + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.ORGANISATION + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.PERSONAL + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.LOCATION + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.PET + QUERY.BITS.COMMA
                + QUERY.MUSHROOMCODES.RELATIONSHIP + QUERY.BITS.SPACE
                + QUERY.BITS.CLOSEPARENTHESES
                + QUERY.QUERIES.VALUES
                + QUERY.QUESTION.TEN

    console.log("THE QUERY BEING RUN IS:");
    console.log(sqlString);

    ArchiveDatabase.serialize(() => {
        var statement = ArchiveDatabase.prepare(sqlString);
        statement.run(dataArray);
        statement.finalize();
        });
    });
};
/**
 * INSERT DATA INTO THE DATABASE
 * @param {*} event 
 * @param {*Object} queryConfig 
 * @param {*array} params 
 */
async function ArchiveInsert(event, queryConfig, dataArray) {

    console.log("CONFIGURATION FOR THE CURRENT INSERT IS:")
    console.log(queryConfig); 
    console.log("DATA BEING INSERTED IS:")
    console.log(dataArray);

    const tableOptions = {
        Tag: "MUSHROOMTAGS",
        SectionCode: "MUSHROOMAREAS",
        Names: "PERSONALNAMES",
        Birth: "PERSONALBIRTH",
        ActivityMisc: "ACTIVITYMISC"
    };
    const tableName = tableOptions[queryConfig.Type];

    let colString = "";
    queryConfig.Columns.forEach(cols => {
        colString += QUERY[tableName][cols] + QUERY.BITS.COMMA;
    });
    let sqlColumns = colString.slice(0, -2);

    let sqlString =  QUERY.QUERIES.INSERT + QUERY.BITS.SPACE + QUERY[tableName]["NAME"] + QUERY.BITS.OPENPARENTHESES
                + sqlColumns + QUERY.BITS.CLOSEPARENTHESES
                + QUERY.QUERIES.VALUES
                + QUERY.QUESTION[QUERY[tableName]["NUMBER"]];

    console.log("QUERY STRING BEING USED IS:")
    console.log(sqlString);

    ArchiveDatabase.serialize(() => {
        var statement = ArchiveDatabase.prepare(sqlString);
            statement.run(dataArray);
            statement.finalize();
    });
};
/**
 * GET ALL THE DATA FROM A TABLE
 * @param {*} event 
 * @param {string} tableName 
 * @returns {Array} Table Contents
 */
async function SelectTable(event, tableName) {

    console.log("SEARCHING FOR DATA FROM TABLE:")
    console.log(tableName); 

    let sql = `SELECT * FROM ${tableName}`
    return new Promise((resolve) => {
        ArchiveDatabase.all(

            sql,[], (err, rows) => {
                
                if (err) {
                    throw err;
                }
                resolve(rows);
            }
        )
    })
}
async function searchTable(event, tableName, col, dataRequest, val) {
    
    console.log("SEARCHING IN THE FOLLOWING TABLE: ");
    console.log(tableName);
    console.log("FOR THE FOLLOWING DATA: ")
    console.log(dataRequest);

    let sql = `SELECT ${col} 
                FROM ${tableName} 
                WHERE ${val} = ?`
    return new Promise((resolve) => {
        ArchiveDatabase.all(

            sql,[dataRequest], (err, rows) => {
                
                console.log(rows)
                if (err) {
                    throw err;
                }
                resolve(rows);
            }
        )
    })
}
async function updateDatabaseEntry(event, data, column, table, conditionColumn, conditionValue) {

    let sql = `UPDATE ${table}
                SET ${column} = ?
                WHERE ${conditionColumn} = ?`
    ArchiveDatabase.serialize(() => {
        var statement = ArchiveDatabase.prepare(sql);
        statement.run(data, conditionValue);
        statement.finalize();
    });

}
// == SPREADSHEETS == // 
/**
 * READ A SPREADSHEET
 * @param {*} event 
 * @param {*} path 
 * @returns SPREADSHEET OBJECT
 */
function ReadLibra(event, path) {

    console.log("READING A SPREADSHEET");
    console.log("PATH ACCESSED...");
    console.log(path);

    htmlVersion = ConvertLibraToHTML(path);
    jsonVersion = ConvertLibraToJson(path);

    spreadsheetData = {
        HTML: htmlVersion,
        JSON: jsonVersion
    };

    return spreadsheetData;
};
/**
 * CONVERT SPREADSHEET DATA TO USABLE HTML
 * @param {String} path 
 * @returns 
 */
function ConvertLibraToHTML(path) {

    let workbook = XLSX.readFile(path);
    let sheet = workbook.Sheets["RECORD"];
    var sheet_to_html = XLSX.utils.sheet_to_html(sheet)
    return sheet_to_html;

};
/**
 * CONVERT A SPREADSHEET OBJECT INTO A TIDY JSON OBJECT
 * @param {String} path 
 * @returns Object
 */
function ConvertLibraToJson(path) {

    var workbook = XLSX.readFile(path);
    var sheet = workbook.Sheets["RECORD"];
    var proccessed = XLSX.utils.sheet_to_json(sheet, {header: 1});
    let last_year = 0;

    proccessed.forEach(r => last_year = r[0] = (r[0] != null ? r[0] : last_year));
    return proccessed;

}
/**
 * ACCESS THE RACCOON APP TO WRITE CHAPTERS TO FILES
 * @param {*} event 
 * @param {*} details
 */
function RunRacoon(event, details) {

    console.log("RACCOON APP ACTIVATED...");
    console.log("PASSING THE FOOLLOWING DETAILS...");
    console.log(details)

    const newdetails = JSON.stringify(details, null, 4);
    var pyshell = new PythonShell(spreadSheetPath);

    pyshell.send(newdetails);
    pyshell.on('message', function (message) {
        let racoonMessage = JSON.parse(message);
        console.log("RACCOON APP SAYS");
        console.log(racoonMessage);

        if (racoonMessage === "DUPLICATE CHAPTER FOUND") {
            return "Check works!!!"
        };
    });

    pyshell.end(function (err, code, signal) {
        console.log("Connection to Raccoon App is Closed")
        if (err) throw err;
            console.log(code + ' ' + signal);
    });

};

