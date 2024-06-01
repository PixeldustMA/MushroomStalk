// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Access Renderer            //
// ================================= //

class Renderer{

    constructor ( path = "", data = {}) 
    {
        this.path = path;
        this.data = data;
    }

    /**
     * SAVE DATA TO GIVEN FILE
     * @returns ACTION COMPLETE
     */
    async SAVE() {
        return await window.ipcRender.SaveData(this.path, this.data);
    }
    /**
     * READ A GIVEN FILE
     * @returns FILE DETAILS
     */
    async READ() {
        const file = await window.ipcRender.ReadMessage(this.path);
        return JSON.parse(file)
    };
    async READ_TEXT() {
        return await window.ipcRender.ReadText(this.path);
    }
    async COPY(origin, destination) {
        return window.ipcRender.CopyFile(origin, destination);
    }
    /**
     * FORMAT A PATH
     * @returns PATH
     */
    async FETCH_PATH() {
        return await window.ipcRender.RetrievePath(this.path);
    }
    /**
     * GET ALL THE AVAILABLE ROUTES FOR THE APPLICATION
     * @returns OBJECT
     */
    async AVAILABLE_ROUTES(tag) {
        return await window.ipcRender.Route(tag);
    };
    async FOLDER_SELECT() {
        return await window.ipcRender.SelectFolder();
    };
    async READ_FOLDERS() {
        return await window.ipcRender.ReadFolder(this.path);
    };
    async CREATE_FOLDER() {
        return await window.ipcRender.NewFolder(this.path);
    };
    async DELETE_FOLDER() {
        return await window.ipcRender.DeleteFolder(this.path);
    };
    async COPY_FOLDER(destinationPath) {
        console.log(destinationPath);
        console.log(this.path)
        return await window.ipcRender.CopyFolder(this.path, destinationPath)
    };
    async CLOSE() {
        return await window.ipcRender.Quit();
    };
    async SMALL() {
        return await window.ipcRender.Smallify();
    };
    async BIG() {
        return await window.ipcRender.Bigify();
    }
    async REMOVE() {
        return await window.ipcRender.RemoveFile(this.path);
    }
    async READ_BACKUP_FILE(requestedPath) {
        this.path = requestedPath;
        return await this.READ();
    };
    async EXPORT_ARCHIVE_TO_CSV(requestedPath) {
        return await window.ipcRender.Export(requestedPath);
    };
}

export { Renderer }