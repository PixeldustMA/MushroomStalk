// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//        Access Main                //
// ================================= //

const contextBridge = require('electron').contextBridge;
const ipcRenderer = require('electron').ipcRenderer;

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

contextBridge.exposeInMainWorld(

	'ipcRender', {
        send: (channel, args) => {
            let validChannels = ipc.render.send;
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, args);
            }
        },
        receive: (channel, listener) => {
            let validChannels = ipc.render.receive;
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`.
                ipcRenderer.on(channel, (event, ...args) => listener(...args));
            }
        },
        invoke: (channel, args) => {
            let validChannels = ipc.render.sendReceive;
            if (validChannels.includes(channel)) {
                return ipcRenderer.invoke(channel, args);
            }
        },

        SaveData: (path, details) => ipcRenderer.invoke('saveNote', path, details),
        SaveToNewFile: (path, details) => ipcRenderer.invoke('createNewFile', path, details),
        ReadFolder: (folderPath) => ipcRenderer.invoke('folderOperations', folderPath),
        ReadMessage: (messagePath) => ipcRenderer.invoke('readNote', messagePath),
        RetrievePath: (pathName) => ipcRenderer.invoke('getPath', pathName),
        SelectFolder: () => ipcRenderer.invoke('dialog:openDirectory'),
        RemoveFile: (path) => ipcRenderer.invoke('resetFile'),
        DrawWindow:(path) => ipcRenderer.send('draw', path),
        Route: () => ipcRenderer.invoke('fetchRouteMemory'),
        InsertCharacterKeys: (characterCodes) => ipcRenderer.invoke('characterKeys', characterCodes),
        Insert: (query, params) => ipcRenderer.invoke('insertData', query, params),
        SelectAll: (table) => ipcRenderer.invoke('selectAll', table),
        Select: (tableName, col, dataRequest, val) => ipcRenderer.invoke('selectData', tableName, col, dataRequest, val),
        UpdateDatabase: (data, column, table, conditionColumn, conditionValue) => ipcRenderer.invoke('updateData', data, column, table, conditionColumn, conditionValue),

        Libra: (path) => ipcRenderer.invoke('readSpreadsheet', path),
        Rattle: (dataObject) => ipcRenderer.invoke('rattle', dataObject)
    }
);

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