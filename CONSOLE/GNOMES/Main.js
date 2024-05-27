const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path  = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3');
const { stringify } = require("csv-stringify");

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//         ENTRY POINT               //
// ================================= //

// == APP VARIABLES == //
let mainWindow;

// == PATHS == //
const PreloadPath = 'Access.js';
const appMemoryPath = app.getPath('userData');
const SplashScreenPath = './POCKETS/WELCOME/SPLASH/FrameworkSplash.html'
const routePath_Base = "../../CONSOLE/ROUTES/Memory.json";
const routePath_Planets = appMemoryPath + "/UserMemory/ROUTES/Explorer.json";
const routePath_Users = appMemoryPath + "/UserMemory/ROUTES/Users.json";
const routePath_Assets = "../../CONSOLE/ROUTES/Assets.json";
const tablePath = getFormattedPath(Event, "../MEMORY/SEQUAL/TABLES/TableNames.json");
const QueriesPath = getFormattedPath(Event, "../MEMORY/SEQUAL/TABLES/QueryCodes.json");

const DatabasePath = appMemoryPath +  "\\DATABASE\\Archive.sqlite";

// == DATABASE SET-UP == //
const ArchiveDatabase = new sqlite3.Database(DatabasePath);
const TABLE_DATA =  JSON.parse(fs.readFileSync(tablePath));
const QUERY = JSON.parse(fs.readFileSync(QueriesPath));

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
    // win.webContents.openDevTools();
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
ipcMain.handle('copyFile', CopyFile);
ipcMain.handle('getPath', getFormattedPath);
ipcMain.handle('fetchRouteMemory', RouteMemory);
ipcMain.handle('removeFile', DeleteFile);
ipcMain.handle('folderOperations', FolderProcessing);
ipcMain.handle('folderCreation', CreateFolder);
ipcMain.handle('folderDeletion', DeleteFolder);
ipcMain.handle('folderCopy', CopyFolder);
ipcMain.handle('exportArchive', ExportDBToCSV)
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
ipcMain.handle('accessArchive', Archive);

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
function CopyFile(event, originPath, destPath) {
    fs.copyFileSync(originPath, destPath, 2);
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
async function CreateFolder(event, folderPath) {
    console.log(folderPath);
    console.log("MAKING A FOLDER")
    await fs.promises.mkdir(folderPath, { recursive: true })
};
async function DeleteFolder(event, folderPath) {
    console.log('DELETING FOLDER');
    console.log(folderPath);

    fs.rm(folderPath, { recursive: true, force: true }, err => {
        if (err) {
        throw err;
        }
        console.log(`${folderPath} is deleted!`);
    });
}
async function CopyFolder(event, sourcePath, destinationPath) {
    fs.cp(sourcePath, destinationPath, { recursive: true }, (err) => {
        if (err) {
            console.error(err);
        }
});
}
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
    let bucket = []
    if(relative[0] === ('£')) {
        console.log("FOUND")
        bucket = [appMemoryPath];
        relative = relative.replace("£££-", "");
    }
    else{
        bucket = [__dirname];
    };
    let relativeArray = relative.split("/");
    pathloop: for (let index = 0; index < relativeArray.length; index++) {
        bucket.push(relativeArray[index])
    };
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
            rootPath = routePath_Planets
            break;
        case "USERS":
            rootPath = routePath_Users
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
function  CreateMemoryPath(event, path) {
    return appMemoryPath + path;
}
// == DATABASE == //
async function Archive(event, mode, queryConfig) {

    console.log('ACCESSING THE ARCHIVE');
    console.log('DATA REQUESTED IS...');
    console.log(queryConfig);

    switch (mode) {
        case "INSERT":
            await INSERT_INTO_ARCHIVE(queryConfig.TABLE, queryConfig.COLUMNS, queryConfig.DATA, QUERY[TABLE_DATA[queryConfig.TABLE]].NUMBER);
            break;
        case "SELECT":
            await SELECT_FROM_ARCHIVE(queryConfig.RANGE, queryConfig.TABLE, queryConfig.COLUMNS, queryConfig.SEARCHCONSTRAINTS, queryConfig.SEARCHVALUES);
            break;
        case "DELETE":
            await DELETE_ROW(queryConfig.TABLE, queryConfig.SEARCH_CONSTRAINTS, queryConfig.SEARCHVALUES);
            break;
        case "UPDATE":
            await UPDATE_ARCHIVE(queryConfig.TABLE, queryConfig.COLUMNS, queryConfig.SEARCH_CONSTRAINTS, queryConfig.SEARCH_DATA);
            break;  
        default:
            break;
    }
};
async function INSERT_INTO_ARCHIVE(TYPE, COLUMNS, DATA, NUM) {

    const _TABLENAME = TABLE_DATA[TYPE];
    let colString = "";

    COLUMNS.forEach(cols => {
        colString += QUERY[_TABLENAME][cols] + QUERY.BITS.COMMA;
    });
    let _COLUMNS = colString.slice(0, -2);

    let _SQL =  QUERY.QUERIES.INSERT + QUERY.BITS.SPACE + QUERY[_TABLENAME]["NAME"] + QUERY.BITS.OPENPARENTHESES
                + _COLUMNS + QUERY.BITS.CLOSEPARENTHESES
                + QUERY.QUERIES.VALUES + QUERY.BITS.SPACE
                + QUERY.QUESTION[NUM];

    console.log('THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...');         
    console.log(_SQL);

    ArchiveDatabase.serialize(() => {
        var statement = ArchiveDatabase.prepare(_SQL);
            statement.run(DATA);
            statement.finalize();
    });
};
async function SELECT_FROM_ARCHIVE(RANGE, TABLE, COLUMNS, SEARCH, SEARCH_DATA) {

    const _TABLENAME = TABLE_DATA[TABLE];
    let _SQL = "";

    if(RANGE === 'ALL') {
        let _SQL =  QUERY.QUERIES.SELECT + QUERY.BITS.SPACE + '*'
                    + QUERY.BITS.SPACE + QUERY.QUERIES.FROM
                    + QUERY.BITS.SPACE + _TABLENAME;

        return new Promise((resolve) => {
        ArchiveDatabase.all(
            _SQL, [], (err, rows) => {
                if (err) {
                    throw err;
                }
                resolve(rows);
                }
            )
        });
    };
    if(RANGE !== 'ALL') {

        let colString = "";
        let _COLUMNS = "";
        if (COLUMNS.length >1) {
            COLUMNS.forEach(cols => {
                colString += QUERY[_TABLENAME][cols] + QUERY.BITS.COMMA;
            });
            _COLUMNS = colString.slice(0, -2);
        }
        else {
            _COLUMNS = QUERY[_TABLENAME][COLUMNS[0]];
        }

        if (SEARCH.length != 0) {
            let _SEARCH_COLUMNS = "";
            SEARCH.forEach(search_col => {
                _SEARCH_COLUMNS += `${search_col} = ? AND `
            });
            _SEARCH_COLUMNS = _SEARCH_COLUMNS.slice(0, -5);

            _SQL =  QUERY.QUERIES.SELECT 
                        + QUERY.BITS.SPACE + _COLUMNS 
                        + QUERY.BITS.SPACE + QUERY.QUERIES.FROM + QUERY.BITS.SPACE + QUERY[_TABLENAME]["NAME"]
                        + QUERY.BITS.SPACE + QUERY.QUERIES.WHERE
                        + QUERY.BITS.SPACE + _SEARCH_COLUMNS;

            console.log('THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...');                            
            console.log(_SQL);

            return new Promise((resolve) => {
                let responseObj;
                let allRecords = []
                ArchiveDatabase.each(
                    _SQL, SEARCH_DATA, (err, rows) => {
                        if (err) {
                            console.error(err)
                            throw err;
                        }
                        responseObj = {
                            rows: rows
                        };
                        allRecords.push(rows);
                        console.log(allRecords)
                        resolve(allRecords);
                    })
            });
        }
        else {

            _SQL =  QUERY.QUERIES.SELECT 
            + QUERY.BITS.SPACE + _COLUMNS 
            + QUERY.BITS.SPACE + QUERY.QUERIES.FROM + QUERY.BITS.SPACE + QUERY[_TABLENAME]["NAME"];   

            console.log('THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...');                            
            console.log(_SQL);

            return new Promise((resolve) => {
                ArchiveDatabase.all(
                    _SQL, [], (err, rows) => {
                        if (err) {
                            throw err;
                        }
                        console.log(rows)
                        resolve(rows);
                        }
                    )
            });
        };
    };
};
async function UPDATE_ARCHIVE(TABLE, COLUMNS, SEARCH, SEARCH_DATA) {

    const _TABLENAME = TABLE_DATA[TABLE];
    let colString = "";
    COLUMNS.forEach(cols => {
        colString += QUERY[_TABLENAME][cols] + QUERY.BITS.COMMA;
    });
    let _COLUMNS = colString.slice(0, -2);    

    let _SEARCH_COLUMNS = "";
    SEARCH.forEach(search_col => {
        _SEARCH_COLUMNS += ` ${search_col} = ? AND`
    });
    _SEARCH_COLUMNS = _SEARCH_COLUMNS.slice(0, -4);

    let _SQL =  QUERY.QUERIES.UPDATE 
                + QUERY.BITS.SPACE + _TABLENAME
                + QUERY.BITS.SPACE + QUERY.QUERIES.SET 
                + QUERY.BITS.SPACE + _COLUMNS
                + QUERY.BITS.SPACE + QUERY.QUERIES.WHERE 
                + QUERY.BITS.SPACE + _SEARCH_COLUMNS;

    console.log('THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...'); 
    console.log(_SQL);

    return new Promise((resolve) => {
        ArchiveDatabase.all(
            _SQL, SEARCH_DATA, (err, rows) => {
                if (err) {
                    throw err;
                }
                console.log(rows)
                resolve(rows);
                }
            )
        });
};
async function DELETE_ROW(TABLE, SEARCH, SEARCH_DATA) {
    const _TABLENAME = TABLE_DATA[TABLE];
    let _SEARCH_COLUMNS = "";
    SEARCH.forEach(search_col => {
        _SEARCH_COLUMNS += ` ${search_col} = ? AND`
    });
    _SEARCH_COLUMNS = _SEARCH_COLUMNS.slice(0, -4);

    let _SQL = QUERY.QUERIES.REMOVE
            + QUERY.BITS.SPACE + _TABLENAME
            + QUERY.BITS.SPACE + QUERY.QUERIES.WHERE 
            + QUERY.BITS.SPACE + _SEARCH_COLUMNS

    console.log('THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...');                            
    console.log(_SQL);

    ArchiveDatabase.serialize(() => {
        var statement = ArchiveDatabase.prepare(_SQL);
            statement.run(SEARCH_DATA);
            statement.finalize();
    });
};

async function ExportDBToCSV(event, path) {

    let queryObject = QUERY.MUSHROOMCODES;
    let formattedFilePath = path + "/" + queryObject.NAME + '.csv';
    let writableStream = fs.createWriteStream(formattedFilePath);
    let codeColumns = CREATE_COLUMNS(queryObject);
    let stringifier = stringify({ header: true, columns: codeColumns });

    ArchiveDatabase.each(`select * from ${queryObject.NAME}`, (error, row) => {
        if (error) {
            return console.log(error.message);
        }
        stringifier.write(row);
    });
    stringifier.pipe(writableStream);
    console.log("Finished writing Code data");

    setTimeout(() => {
        queryObject = QUERY.MUSHROOMAREAS;
        formattedFilePath = path + "/" + queryObject.NAME + '.csv';
        writableStream = fs.createWriteStream(formattedFilePath);
        codeColumns = CREATE_COLUMNS(queryObject);
        stringifier = stringify({ header: true, columns: codeColumns });
    
        ArchiveDatabase.each(`select * from ${queryObject.NAME}`, (error, row) => {
            if (error) {
                return console.log(error.message);
            }
            stringifier.write(row);
        });
        stringifier.pipe(writableStream);
        console.log("Finished writing Section data");  
    }, 500);
    setTimeout(() => {
        queryObject = QUERY["PERSONAL_BIRTH"];
        formattedFilePath = path + "/" + queryObject.NAME + '.csv';
        writableStream = fs.createWriteStream(formattedFilePath);
        codeColumns = CREATE_COLUMNS(queryObject);
        stringifier = stringify({ header: true, columns: codeColumns });
    
        ArchiveDatabase.each(`select * from ${queryObject.NAME}`, (error, row) => {
            if (error) {
                return console.log(error.message);
            }
            stringifier.write(row);
        });
        stringifier.pipe(writableStream);
        console.log("Finished writing Birth data");
    }, 1000);
    setTimeout(() => {
        queryObject = QUERY["PERSONAL_NAMES"];
        formattedFilePath = path + "/" + queryObject.NAME + '.csv';
        writableStream = fs.createWriteStream(formattedFilePath);
        codeColumns = CREATE_COLUMNS(queryObject);
        stringifier = stringify({ header: true, columns: codeColumns });

        ArchiveDatabase.each(`select * from ${queryObject.NAME}`, (error, row) => {
            if (error) {
                return console.log(error.message);
            }
            stringifier.write(row);
        });
        stringifier.pipe(writableStream);
        console.log("Finished writing Name data");
    }, 1500);
    setTimeout(() => {
        queryObject = QUERY["PERSONAL_RACE"];
        formattedFilePath = path + "/" + queryObject.NAME + '.csv';
        writableStream = fs.createWriteStream(formattedFilePath);
        codeColumns = CREATE_COLUMNS(queryObject);
        stringifier = stringify({ header: true, columns: codeColumns });

        ArchiveDatabase.each(`select * from ${queryObject.NAME}`, (error, row) => {
            if (error) {
                return console.log(error.message);
            }
            stringifier.write(row);
        });
        stringifier.pipe(writableStream);
        console.log("Finished writing Race data");        
    }, 2000);

}
function CREATE_COLUMNS(queryObject) {
    const codeColumns = [];
    for (const columnKey in queryObject) {
        if (Object.hasOwnProperty.call(queryObject, columnKey)) {
            const columnName = queryObject[columnKey];
            if (columnKey !== "NUMBER" && columnKey !== "NAME") {
                let x = JSON.parse(columnName);
                codeColumns.push(x);
            };
        }
    };
    return codeColumns
}


