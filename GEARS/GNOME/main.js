require('update-electron-app')({
	repo: 'PixeldustMA/MushroomStalk',
	updateInterval: '1 hour',
  })
const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path  = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3');
const XLSX = require('xlsx');
var { PythonShell } = require('python-shell');

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         ENTRY POINT               //
// ================================= //
let options = {
	mode: 'text',
	pythonOptions: ['-u'], // get print results in real-time
	args: [] //An argument which can be accessed in the script using sys.argv[1]
};
const db = new sqlite3.Database('./GEARS/DATABASE/Archive.sqlite');
let mainWindow;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
		}
  });
  win.loadFile('./POCKETS/WELCOME/FrameworkWelcome.html')
  win.webContents.openDevTools();
  mainWindow = win;
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
      const newdetails = JSON.stringify(details, null, 4);
        console.log("MAIN ACCESSED...");
        console.log("MESSAGE WRITING FUNCTION ACTIVATED...");
        console.log("MESSAGE STATUS...");
      fs.writeFileSync(path, newdetails, 'utf8', err => {
        if (err) 
          console.error(err);
        else 
          console.log('Message Successfully Written to File');
      });
    };
ipcMain.handle('createNewFile', createAndWrite);
    function createAndWrite(event, path, details) {
      const newdetails = JSON.stringify(details, null, 4);
      fs.writeFile(path, newdetails, function (err) {
        if (err) throw err;
        console.log('Saved!');
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
ipcMain.on('draw', drawSquare);
    function drawSquare(event, path) {
      childWindow = new BrowserWindow({
        width: 1000,
        height: 1000,

        parent: mainWindow, // Make sure to add parent window here
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
ipcMain.handle('dialog:openDirectory',  async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  })
  if (canceled) {
    return
  } else {
    return filePaths[0]
  }})

// == DATABASE == // 

ipcMain.handle('dbBuild', setUpDatabase);
    function setUpDatabase(){ 
      // var constructedQuery = dbTestOne();
      var addTestCodes =  `
        INSERT INTO Beings(MushroomCode, PersonalCode, LocationCode, EducationCode, UniversityCode, ActivityCode, OrganisationCode, PetCode, EmploymentCode, HalexCode) VALUES 
          ("A1AD2372KSAM", "PCA01", "LCA01", "EDA01", "UCA01", "ACA01", "OGA01", "PTA01", "EMA01", "HXA01"),
          ("A2AM6702SRLX", "PCA02", "LCA02", "EDA02", "UCA02", "ACA02", "OGA02", "PTA02", "EMA02", "HXA02"),
          ("A3AN2840AAAX", "PCA03", "LCA03", "EDA03", "UCA03", "ACA03", "OGA03", "PTA03", "EMA03", "HXA03"),
          ("C1CA001ACSA", "PCC01", "LCC01", "EDC01", "UCC01", "ACC01", "OGC01", "PTC01", "EMC01", "HXC01"),
          ("C2CM6709SRLX", "PCC02", "LCC02", "EDC02", "UCC02", "ACC02", "OGC02", "PTC02", "EMC02", "HXC02")
      `
      db.serialize(() => {});

    };
ipcMain.handle('newCharacter', insertNewCharacter);
async function insertNewCharacter(event, request, tag) {
    db.serialize(() => {
      var params = [];
      params.push(request.Mushroom, request.Personal, request.Location, request.Education, request.University, request.Activity, request.Organisation, request.Pet, request.Employment, request.Halex);
      console.log(params);
      var sql = `INSERT INTO Beings ( MushroomCode , PersonalCode , LocationCode , EducationCode , UniversityCode , ActivityCode , OrganisationCode , PetCode , EmploymentCode , HalexCode) VALUES ((?) , (?) , (?) , (?) , (?) , (?) , (?) , (?) , (?) , (?)) `;

      db.serialize(() => {
        var stmt = db.prepare(sql);
        stmt.run(params);
        stmt.finalize();
        })
      });
};
ipcMain.handle('InsertData', DuckInsert);
async function DuckInsert(event, query, params) {
    db.serialize(() => {
      var statement = db.prepare(query);
          statement.run(params);
          statement.finalize();
    });
  }

ipcMain.handle('Toolbox', DatabaseToolbox);
function DatabaseToolbox(event, ToolboxQuery) {
  db.serialize(() => {
    db.run(ToolboxQuery);
  });
};
ipcMain.handle('AskDatabaseDuck', DuckQuestion);
function DuckQuestion(event, query) {
  console.log(query + " Recieved")
  db.serialize(() => {
    db.run(query);
    console.log("Query fulfilled")
  })
};
ipcMain.handle('SelectData', DuckChoice);
async function DuckChoice(event, query) {
  console.log(query + " Recieved")
  const save_user = await new Promise(resolve => {
    db.all(query, [], (err, row) => {
      console.log(row)
      if (err) {
        resolve({ error : 'error message' });
      }
      resolve({ message : row });
    }); 
  })
  return save_user
}

// == SPREADSHEETS == // 
ipcMain.handle('ReadSpreadsheet', ReadLibra);
function ReadLibra(event, path) {
  htmlVersion = ConvertLibraToHTML(path);
  jsonVersion = ConvertLibraToJson(path);
  spreadsheetData = {
    HTML: htmlVersion,
    JSON: jsonVersion
  }
  return spreadsheetData;
};

function ConvertLibraToHTML(path) {
  let workbook = XLSX.readFile(path);
  let sheet = workbook.Sheets["RECORD"];
    var sheet_to_html = XLSX.utils.sheet_to_html(sheet)
  return sheet_to_html;
};
function ConvertLibraToJson(path) {
  var workbook = XLSX.readFile(path);
  var sheet = workbook.Sheets["RECORD"];
  var proccessed = XLSX.utils.sheet_to_json(sheet, {header: 1});
  let last_year = 0;
  proccessed.forEach(r => last_year = r[0] = (r[0] != null ? r[0] : last_year));
  return proccessed;
}

ipcMain.handle('WriteSpreadsheet', WriteLibra);
function WriteLibra(event, path, data) {
  
}

let Result = "bb";
ipcMain.handle('rattle', passtopython);
  function passtopython(event, details) {
    console.log(details)
    const newdetails = JSON.stringify(details, null, 4);
    var pyshell = new PythonShell('Python/Spreadsheets.py');
    pyshell.send(newdetails);
    pyshell.on('message', function (message) {
      let gds = JSON.parse(message);
      console.log(gds)
      if (gds === "DUPLICATE CHAPTER FOUND") {
        console.log("Check works!!!")
        Result = "Check works!!!"
        return "Check works!!!"
      }
      });

    pyshell.end(function (err, code, signal) {
        console.log("Ended Ended")
        if (err) throw err;
        console.log(code + ' ' + signal);
    });
    return Result;
  };


