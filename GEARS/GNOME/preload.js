// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Access Main                //
// ================================= //

const contextBridge = require('electron').contextBridge;
const ipcRenderer = require('electron').ipcRenderer;

// White-listed channels.
const ipc = {
	'render': {
        // From render to main.
        'send': [],
        // From main to render.
        'receive': [],
        // From render to main and back again.
        'sendReceive': [
            'dialog:openSnooper'
        ]
    }
}

// Exposed protected methods in the render process.
contextBridge.exposeInMainWorld(

	'ipcRender', {
		// From render to main.
        send: (channel, args) => {
            let validChannels = ipc.render.send;
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, args);
            }
        },

		// From main to render.
        receive: (channel, listener) => {
            let validChannels = ipc.render.receive;
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`.
                ipcRenderer.on(channel, (event, ...args) => listener(...args));
            }
        },

		// From render to main and back again.
        invoke: (channel, args) => {
            let validChannels = ipc.render.sendReceive;
            if (validChannels.includes(channel)) {
                return ipcRenderer.invoke(channel, args);
            }
        },
        // MY CHANNELS
        SaveData: (path, details) => ipcRenderer.invoke('saveNote', path, details),
        ReadFolder: (folderPath) => ipcRenderer.invoke('folderOperations', folderPath),
        RetrievePath: (pathName) => ipcRenderer.invoke('getPath', pathName),
        ReadMessage: (messagePath) => ipcRenderer.invoke('readMessages', messagePath),
        DatabaseToolbox: (ToolboxQuery) => ipcRenderer.invoke('Toolbox', ToolboxQuery),
        DrawWindow:(path) => ipcRenderer.send('draw', path),
        Libra: (path) => ipcRenderer.invoke('ReadSpreadsheet', path),
        SaveToNewFile: (path, details) => ipcRenderer.invoke('createNewFile', path, details),
        selectFolder: () => ipcRenderer.invoke('dialog:openDirectory'),

        CreateDatabase: () =>  ipcRenderer.invoke('dbBuild'),
        insertNewCharacter: (characterCodes) => ipcRenderer.invoke('newCharacter', characterCodes),
        AskDuck: (query) => ipcRenderer.invoke('AskDatabaseDuck', query),
        DuckSelect: (query) => ipcRenderer.invoke('SelectData', query),
        DuckInsert: (query, params) => ipcRenderer.invoke('InsertData', query, params),
        Rattle: (obje) => ipcRenderer.invoke('rattle', obje)
    });

// == EXPLAIN THE THINGS == //
/**
 * Render --> Main
 * ---------------
 * Render:  window.ipcRender.send('channel', data); // Data is optional.
 * Main:    electronIpcMain.on('channel', (event, data) => { methodName(data); })
 *
 * Main --> Render
 * ---------------
 * Main:    windowName.webContents.send('channel', data); // Data is optional.
 * Render:  window.ipcRender.receive('channel', (data) => { methodName(data); });
 *
 * Render --> Main (Value) --> Render
 * ----------------------------------
 * Render:  window.ipcRender.invoke('channel', data).then((result) => { methodName(result); });
 * Main:    electronIpcMain.handle('channel', (event, data) => { return someMethod(data); });
 *
 * Render --> Main (Promise) --> Render
 * ------------------------------------
 * Render:  window.ipcRender.invoke('channel', data).then((result) => { methodName(result); });
 * Main:    electronIpcMain.handle('channel', async (event, data) => {
 *              return await promiseName(data)
 *                  .then(() => { return result; })
 *          });
 */

