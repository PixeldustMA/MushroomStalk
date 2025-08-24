const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');
const DEBUG = require('../VALVES/MAIN_Memory_Debug');
const DISPLAY = require('../VALVES/MAIN_Note');
const WINDOW = require('../VALVES/MAIN_Window');
const STALK = require('../VALVES/MAIN_Stalk');
const PATHWAYS = require('../VALVES/MAIN_Pathways');
// const MAIN_Archive = require('../VALVES/MAIN_Archive');
// const MAIN_Load = require('../VALVES/MAIN_Load');
const path = require('path');

// =================================================== //
// =================================================== //
// ##              THE MUSHROOM STALK               ## //
// =================================================== //
// ==                                               == //
// ==                      MAIN                     == //
// ##                      MAIN                     ## //
// ==               The Main Process                == //
// ==                                               == //
// =================================================== //
// =================================================== //

// =================== //
// ## APP VARIABLES ## //
// =================== //

let mainWindow;

// =============== //
// ## INSTANCES ## //
// =============== //

let DEBUG_SETTINGS = new DEBUG();
let NOTE = new DISPLAY();
let VIEW = new WINDOW();
let MUSHROOM_STALK = new STALK();

// let ARCHIVE = new MAIN_Archive();
// let LOAD = new MAIN_Load();

// ============= //
// ## TESTING ## //
// ============= //

const STATUS_TESTING = true;
if (STATUS_TESTING) { NOTE.ANNOUNCEMENT('         MUSHROOM STALK IS IN DEVELOPMENT MODE')};

// =============== //
// ## OVERRIDES ## //
// =============== //

dialog.showErrorBox = function(title, content) {
    console.log(`${title}\n${content}`);
};

// =========== //
// ## PATHS ## //
// =========== //

// ============ //
// << SET UP >> //
// ============ //

const PATH_Preload = 'Access.js';
const PATH_AppMemory = app.getPath('userData');
let DIR = __dirname;
DIR = DIR.replace('\\CONSOLE', '');
DIR = DIR.replace('\\AORTA', '');
DIR = DIR.replace('\\HEART', '');
console.log(DIR)

// =========== //
// << PAGES >> //
// =========== //

const PATH_Splash = './POCKETS/WELCOME/SPLASH/FrameworkSplash.html';

// ========================== //
// ## STRUCTURAL FUNCTIONS ## //
// ========================== //
/**
 * ## CREATE MAIN BROWSER WINDOW
 * 
 * -----------------------------
 */
const CREATE_WINDOW = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 820,
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        preload: path.join(__dirname, PATH_Preload)
        }
    });
    win.setBounds({
        x: 0,
        y: 0
    });
    win.loadFile(PATH_Splash);
    win.setIcon("./ASSETS/ICONS/MushroomStalk.ico")
    win.webContents.openDevTools();
    mainWindow = win;
};

// ============= //
// ## RUN APP ## //
// ============= //

app.whenReady().then(() => {
    CREATE_WINDOW()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            CREATE_WINDOW()
        }
    })
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// ============== //
// ## HANDLERS ## //
// ============== // 

// =============== //
// << MACHINERY >> //
// =============== //

ipcMain.handle('handler_close', MAIN_WINDOW_QUIT);
ipcMain.handle('handler_small', MAIN_WINDOW_MINIMISE);
ipcMain.handle('handler_big', MAIN_WINDOW_MAXIMISE);
ipcMain.handle('handler_debugging', MAIN_DEBUG_MODE);
ipcMain.handle('handler_newwindow', MAIN_WINDOW_NEW);

// =========== //
// << FILES >> //
// =========== //

ipcMain.handle('handler_saveNote', MAIN_STALK_SAVE);
ipcMain.handle('handler_saveMarkdown', MAIN_STALK_MARKDOWN);
ipcMain.handle('handler_readNote', MAIN_STALK_READ);
ipcMain.handle('handler_copyFile', MAIN_STALK_COPY);
ipcMain.handle('handler_removeFile', MAIN_STALK_DELETE);

// =========== //
// << PATHS >> //
// =========== //

ipcMain.handle('handler_getPath', MAIN_PATHWAYS_RETRIEVE_PATH);
ipcMain.handle('handler_fetchRouteMemory', MAIN_PATHWAYS_ROUTE);
ipcMain.handle('handler_readStatus', MAIN_PATHWAYS_STATUS);
ipcMain.handle('handler_pathPocket', MAIN_PATHWAYS_POCKETS);

// ============= //
// << FOLDERS >> //
// ============= //

ipcMain.handle('handler_folderOperations', MAIN_FOLDER_PROCESS);
ipcMain.handle('handler_folderCreation', MAIN_FOLDER_CREATE);
ipcMain.handle('handler_folderDeletion', MAIN_FOLDER_DELETE);
ipcMain.handle('handler_folderCopy', MAIN_FOLDER_COPY);
ipcMain.handle('dialog:openDirectory',  async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory', 'multiSelections']
    })
    if (canceled) {return}
    else {return filePaths;};
});

// =============== //
// ## FUNCTIONS ## //
/// ============== //

// ############# //
// == WINDOWS == //
// ############# //

/**
 * ## QUIT THE APP
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {} event {passed from renderer}
 * 
 *  Close the application
 * 
 * Closes the active window
 * 
 * If the active window is not the only window, the application will not close
 * 
 * --------------------------
 * ### RETURNS -->> {NONE} Closed windows
 */
async function MAIN_WINDOW_QUIT(event) {
    await NOTE.ALERT_FUNCTION('WINDOW', 'QUITTING APPLICATION');
    await VIEW.QUIT(BrowserWindow.getFocusedWindow());
};
/**
 * ## MAXIMISE THE WINDOW
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Passed from renderer}
 * 
 * ### DETAILS
 * 
 * Make the active window bigger
 * 
 * --------------------------
 * ### RETURNS -->> {NONE} Bigger windows
 */
async function MAIN_WINDOW_MAXIMISE(event) {
    await NOTE.ALERT_FUNCTION('WINDOW', 'MAXIMISING APPLICATION');
    await VIEW.MAXIMISE(mainWindow);
};
/**
 * ## MINIMISE THE WINDOW
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Passed from renderer}
 * 
 * ### DETAILS
 * 
 * Minimise the active window
 * 
 * --------------------------
 * ### RETURNS -->> {NONE} Smaller windows
 */
async function MAIN_WINDOW_MINIMISE(event) {
    await NOTE.ALERT_FUNCTION('WINDOW', 'MINIMISING APPLICATION');
    await VIEW.MINIMISE(mainWindow);
};
async function MAIN_WINDOW_NEW(event, PARAMETER_PATH) {
    const win = new BrowserWindow({
        width: 1200,
        height: 820,
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        preload: path.join(__dirname, PATH_Preload)
        }
    });
    win.loadFile(PARAMETER_PATH);
    win.webContents.openDevTools();
};


// ############### //
// == DEBUGGING == //
// ############### //

/**
 * ## CHECK DEBUG STATUS
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Passed from renderer}
 * @param {string} scriptCategory {Key for debug config to fetch object}
 * @param {string} scriptName {Key for debug config}
 * 
 * ### DETAILS
 * 
 * Read the status of the debug object
 * 
 * Check if testing is true
 * 
 * Check if the debug settings are active for this script
 * 
 * Return true or false to the debug console command creator
 * 
 * --------------------------
 * ### RETURNS -->> {BOOL} Debug status
 */
async function MAIN_DEBUG_MODE(event, PARAMETER_CATEGORY, PARAMETER_SCRIPT_NAME) {
    // await NOTE.ALERT_FUNCTION('DEBUG', {PARAMETER_CATEGORY: PARAMETER_CATEGORY, TEXT_FUNCTION_NAME: PARAMETER_SCRIPT_NAME});
    if (STATUS_TESTING) {return await DEBUG_SETTINGS.TEST_MODE(PARAMETER_CATEGORY, PARAMETER_SCRIPT_NAME)};
    return false; 
};

// ########### //
// == FILES == //
// ########### //

/**
 * ## WRITE TO A FILE
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {string} path {Accurate and formatted path}
 * @param {*} details {A string or object to become file contents}
 * 
 * ### DETAILS
 * 
 * Write the given details to the file at the given path
 * 
 * If no file exists at the path, create and write to a new file
 * 
 * -------------------
 * ## RETURN -->> {UPDATED FILE}
 */
async function MAIN_STALK_SAVE(event, PARAMETER_PATH, PARAMETER_DETAILS) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('WRITE', {
        TEXT_FUNCTION_NAME: 'WRITING TO FILE',
        PARAMETER_PATH: PARAMETER_PATH,
        PARAMETER_DETAILS: PARAMETER_DETAILS 
        });
    };
    return await MUSHROOM_STALK.WRITE(PARAMETER_DETAILS, PARAMETER_PATH, STATUS_TESTING);
};
async function MAIN_STALK_MARKDOWN(event, PARAMETER_PATH, PARAMETER_DETAILS) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('WRITE', {
        TEXT_FUNCTION_NAME: 'WRITING TO FILE',
        PARAMETER_PATH: PARAMETER_PATH,
        PARAMETER_DETAILS: PARAMETER_DETAILS 
        });
    };
    return await MUSHROOM_STALK.MARKDOWN(PARAMETER_DETAILS, PARAMETER_PATH, STATUS_TESTING);
};
/**
 * ## COPY A FILE
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {string} originPath {Accurate and formatted path with a copyable file}
 * @param {string} destPath {Accurate and formatted path to be written to}
 * 
 * ### DETAILS
 * 
 * Copy a the the file at the origin path to the destination path
 * 
 * -------------------
 * ## RETURN -->> {NEW FILE}
 */
async function MAIN_STALK_COPY(event, PARAMETER_ORIGIN, PARAMETER_DESTINATION) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('COPY', {
        TEXT_FUNCTION_NAME: 'WRITING TO FILE',
        PARAMETER_PATH: [PARAMETER_ORIGIN, PARAMETER_DESTINATION]
        })
    };
    return await MUSHROOM_STALK.COPY();
};
/**
 * ## DELETE A FILE
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {*} path {Accurate and formatted path with a file}
 * 
 * ### DETAILS
 * 
 * Delete the file present at the path given
 * 
 * -------------------
 * ## RETURN -->> {DELETED FILE}
 */
async function MAIN_STALK_DELETE(event, PARAMETER_PATH) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('DELETE', {
        TEXT_FUNCTION_NAME: 'DELETING FILE',
        PARAMETER_PATH: PARAMETER_PATH
    })};
    return await MUSHROOM_STALK.DELETE(PARAMETER_PATH);
};
/**
 * ## READ A FILE
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {string} filePath {Accurate and formatted path}
 * 
 * ### DETAILS
 * Read a file
 * 
 * -------------------
 * ## RETURN -->> {FILE CONTENTS}
 */
async function MAIN_STALK_READ(event, PARAMETER_PATH, TEXT_FUNCTION_NAME) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('READ', {
        TEXT_FUNCTION_NAME: 'READING FILE',
        PARAMETER_PATH: PARAMETER_PATH
    })};
    const DATA_RESULT = await MUSHROOM_STALK.READ(PARAMETER_PATH);

    if (STATUS_TESTING){await NOTE.ALERT_RESULT(TEXT_FUNCTION_NAME, DATA_RESULT, PARAMETER_PATH);};
    return DATA_RESULT;
};

// ############# //
// == FOLDERS == //
// ############# //

/**
 * ## READ CONTENTS OF A FOLDER
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {*} folderPath {Accurate and formatted path}
 * 
 * ### DETAILS
 * Read the contents of the folder at the given path
 * 
 * -------------------
 * ## RETURN -->> {FOLDER CONTENTS}
 */
async function MAIN_FOLDER_PROCESS(event, PARAMETER_PATH) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('FOLDERS', {
        TEXT_FUNCTION_NAME: 'READING FOLDER',
        PARAMETER_PATH: PARAMETER_PATH
    })};
    return await MUSHROOM_STALK.FOLDER(PARAMETER_PATH);
};
/**
 * ## CREATE A FOLDER
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {*} folderPath {Accurate and formatted path}
 * 
 * ### DETAILS
 * Create a new folder at the given path 
 * 
 * -------------------
 * ## RETURN -->> {NEW FOLDER}
 */
async function MAIN_FOLDER_CREATE(event, PARAMETER_PATH) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('FOLDERS', {
        TEXT_FUNCTION_NAME: 'GENERATING A NEW FOLDER',
        PARAMETER_PATH: PARAMETER_PATH
    })};
    return await MUSHROOM_STALK.GENERATE_FOLDER(PARAMETER_PATH);
};
/**
 * ## DELETE A FOLDER
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {*} folderPath {Accurate and formatted path}
 * 
 * ### DETAILS
 * Remove a folder
 * 
 * -------------------
 * ## RETURN -->> {FOLDER DELETED}
 */
async function MAIN_FOLDER_DELETE(event, PARAMETER_PATH) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('FOLDERS', {
        TEXT_FUNCTION_NAME: 'DELETING A FOLDER',
        PARAMETER_PATH: PARAMETER_PATH
    })};
    await MUSHROOM_STALK.DELETE_FOLDER(PARAMETER_PATH);

    if (STATUS_TESTING){await NOTE.ALERT_RESULT('FOLDER DELETION', 'NONE', PARAMETER_PATH);};
};
/**
 * ## COPY A FOLDER
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {*} sourcePath {Accurate and formatted path}
 * @param {*} destinationPath {Accurate and formatted path}
 * 
 * ### DETAILS
 * Copy a folder from the source path to the destination path
 * 
 * -------------------
 * ## RETURN -->> {NEW FOLDER}
 */
async function MAIN_FOLDER_COPY(event, PARAMETER_ORIGIN, PATH_DESTINATION) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('FOLDERS', {
        TEXT_FUNCTION_NAME: 'COPYING A FOLDER',
        PARAMETER_PATH: [PARAMETER_ORIGIN, PATH_DESTINATION]
    })};
    return await MUSHROOM_STALK.COPY_FOLDER(PARAMETER_ORIGIN, PATH_DESTINATION);
};

// ########### //
// == PATHS == //
// ########### //

/**
 * ## FORMAT PATH FROM STRING
 * 
 * --------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {string} relative {Relative Path}
 * 
 * ### DETAILS
 * 
 * Generate a full path from a given relative path
 * 
 * -------------------
 * ## RETURNS -->> {STRING} Formatted Path
 */
async function MAIN_PATHWAYS_RETRIEVE_PATH(event, PARAMETER_PATH, PARAMETER_USERNAME) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('PATHS', {
        TEXT_FUNCTION_NAME: 'CREATING A PATH...',
        PARAMETER_PATH: PARAMETER_PATH
    })};
    let PATHS = new PATHWAYS({PATHWAY_CONFIG_USER: PARAMETER_USERNAME});
    return await PATHS.GENERATE_PATH(PARAMETER_PATH, STATUS_TESTING, PATH_AppMemory);
};
/**
 * ## GENERATE ROUTE FILE
 * 
 * -----------------------------------
 * 
 * ### PARAMETERS
 * @param {*} event {Recieved from Access File}
 * @param {*} tag {Memory Type}
 * 
 * ### DETAILS
 * 
 * Get the route file associated with the given tag
 * 
 * Return the full contents of the file
 * 
 * --------------
 * ## RETURNS -->> {OBJECT} Route File
 */
async function MAIN_PATHWAYS_ROUTE(event, PARAMETER_ROUTE_TAG) {
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('PATHS', {
        TEXT_FUNCTION_NAME: 'ACCESSING ROUTE MEMORY...',
        PARAMETER_PATH: `AT ROUTE TYPE: ${PARAMETER_ROUTE_TAG}`
    })};
    let PATHS = new PATHWAYS({PATHWAY_CONFIG_USER: 'UNSET'});
    let y = await PATHS.ROUTE(STATUS_TESTING, PATH_AppMemory, PARAMETER_ROUTE_TAG);
    return y
};
/**
 * ## DETERMINE PATH TYPE
 * 
 * ------------------------
 * 
 * ### PARAETERS
 * @param {*} event 
 * @param {string} path
 * 
 * ### DETAILS
 * 
 * Fetch the type of item at the end of the path given
 */
async function MAIN_PATHWAYS_STATUS(event, PARAMETER_PATH) {
    console.log(PARAMETER_PATH);
    console.log('hellohellohello')
    if (STATUS_TESTING){await NOTE.ALERT_FUNCTION('PATHS', {
        TEXT_FUNCTION_NAME: 'READING PATH STATUS...',
        PARAMETER_PATH: PARAMETER_PATH
    })};
    let PATHS = new PATHWAYS({});
    return await PATHS.STATUS(PARAMETER_PATH);
};
async function MAIN_PATHWAYS_POCKETS(event, PARAMETER_PATH) {
    return DIR + PARAMETER_PATH;
};

// // ############## //
// // == DATABASE == //
// // ############## //

// /**
//  * ## ACCESS ARCHIVE FUNCTIONS
//  * 
//  * -----------------------------------
//  * 
//  * ### PARAMETERS
//  * @param {*} event {Recieved from Access File}
//  * @param {string} mode {Type of action to be taken on archive} 
//  * @param {object} queryConfig {Settings for subsequent query}
//  * 
//  * ### DETAILS
//  * 
//  * Access archive queries based on mode
//  * 
//  * ### OPTIONS
//  * 
//  * INSERT --- Add data to archive
//  * SELECT --- Fetch data from archive
//  * DELETE --- Remove data from archive
//  * UPDATE --- Alter data in archive
//  * IMPORT --- Add outside data to the archive
//  * -------------------------
//  * ### RETURN -->> {ARCHIVE DATA ||| NONE}
//  */
// async function MAIN_ARCHIVE_MODE(event, PARAMETER_MODE, PARAMETER_CONFIG) {

//     NOTE.ALERT_FUNCTION('ARCHIVE', {TEXT_FUNCTION_NAME: 'ACCESSING THE ARCHIVE', PARAMETER_DETAILS: PARAMETER_CONFIG})
//     let QUERY_DATA = MAIN_STALK_READ(event, PATH_Queries, 'ARCHIVE');
//     let TABLE_DATA = MAIN_STALK_READ(event, PATH_Table, 'ARCHIVE');

//     //TODO ADD PATH KEY
//     return await ARCHIVE.INITIALISE({
//         KEY_TABLE: PARAMETER_CONFIG.TABLE_NAME,
//         ARRAY_COLUMNS: PARAMETER_CONFIG.COLUMNS,
//         STATUS_RANGE: PARAMETER_CONFIG.RANGE,
//         SEARCH_CONSTRAINTS: PARAMETER_CONFIG.SEARCH_CONSTRAINTS,
//         SEARCH_VALUES: PARAMETER_CONFIG.SEARCH_VALUES,
//         MODE: PARAMETER_MODE,
//         QUERY_DATA: QUERY_DATA,
//         TABLE_DATA: TABLE_DATA
//     });
// };



