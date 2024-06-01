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

        Quit: () => ipcRenderer.invoke('close'),
        Smallify: () => ipcRenderer.invoke('small'),
        Bigify: () => ipcRenderer.invoke('big'),

        SaveData: (path, details) => ipcRenderer.invoke('saveNote', path, details),
        Route: (tag) => ipcRenderer.invoke('fetchRouteMemory', tag),
        ReadMessage: (messagePath) => ipcRenderer.invoke('readNote', messagePath),
        ReadText: (textPath) => ipcRenderer.invoke('readText', textPath),
        CopyFile: (origin, destination) => ipcRenderer.invoke('copyFile', origin, destination),
        SelectFolder: () => ipcRenderer.invoke('dialog:openDirectory'),
        NewFolder: (path) => ipcRenderer.invoke('folderCreation', path),
        ReadFolder: (folderPath) => ipcRenderer.invoke('folderOperations', folderPath),
        DeleteFolder: (folderPath) => ipcRenderer.invoke('folderDeletion', folderPath),
        CopyFolder: (sourcePath, destinationPath) => ipcRenderer.invoke('folderCopy', sourcePath, destinationPath),
        RetrievePath: (pathName) => ipcRenderer.invoke('getPath', pathName),
        RemoveFile: (path) => ipcRenderer.invoke('removeFile', path),

        Archive: (mode, data ) => ipcRenderer.invoke('accessArchive', mode, data),
        Export: (path) => ipcRenderer.invoke('exportArchive', path)
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