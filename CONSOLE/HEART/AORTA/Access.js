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
        'send': [],
        'receive': [],
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

        ACCESS_WINDOW_Quit: () => ipcRenderer.invoke('handler_close'),
        ACCESS_WINDOW_Smallify: () => ipcRenderer.invoke('handler_small'),
        ACCESS_WINDOW_Bigify: () => ipcRenderer.invoke('handler_big'),
        ACCESS_WINDOW_Debug: (DATA_Category, DATA_Script) => ipcRenderer.invoke('handler_debugging', DATA_Category, DATA_Script),

        ACCESS_STALK_Save: (PATH_File, DATA_Details) => ipcRenderer.invoke('handler_saveNote', PATH_File, DATA_Details),
        ACCESS_STALK_Read: (PATH_File) => ipcRenderer.invoke('handler_readNote', PATH_File),
        ACCESS_STALK_CopyFile: (PATH_Origin, PATH_Destination) => ipcRenderer.invoke('handler_copyFile', PATH_Origin, PATH_Destination),
        ACCESS_STALK_RemoveFile: (PATH_File) => ipcRenderer.invoke('handler_removeFile', PATH_File),

        ACCESS_PATH_Route: (KEY_Tag) => ipcRenderer.invoke('handler_fetchRouteMemory', KEY_Tag),
        ACCESS_PATH_Retrieve: (PATH_Tag) => ipcRenderer.invoke('handler_getPath', PATH_Tag),
        ACCESS_PATH_Status: (PATH_File) => ipcRenderer.invoke('handler_readStatus', PATH_File),

        ACCESS_FOLDER_ReadFolder: (PATH_Folder) => ipcRenderer.invoke('handler_folderOperations', PATH_Folder),
        ACCESS_FOLDER_NewFolder: (PATH_Folder) => ipcRenderer.invoke('handler_folderCreation', PATH_Folder),
        ACCESS_FOLDER_DeleteFolder: (PATH_Folder) => ipcRenderer.invoke('handler_folderDeletion', PATH_Folder),
        ACCESS_FOLDER_CopyFolder: (PATH_Origin, PATH_Destination) => ipcRenderer.invoke('handler_folderCopy', PATH_Origin, PATH_Destination),
        ACCESS_FOLDER_SelectFolder: () => ipcRenderer.invoke('dialog:openDirectory'),

        ACCESS_Archive: (KEY_Mode, DATA ) => ipcRenderer.invoke('handler_accessArchive', KEY_Mode, DATA),

        ACCESS_LOAD: (DATA) => ipcRenderer.invoke('handler_loading', DATA)
    }
);
