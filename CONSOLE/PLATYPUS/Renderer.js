import { DatabaseDuck } from "./DatabaseRenderer.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Access Renderer            //
// ================================= //

class Renderer extends DatabaseDuck{

    constructor(
        path = "", data = {}
        ) {
            super();
        this.path = path;
        this.data = data;
    }

    /**
     * SAVE DATA TO GIVEN FILE
     * @returns ACTION COMPLETE
     */
    async Save() {
        return await window.ipcRender.SaveData(this.path, this.data);
    }
    /**
     * CREATE A NEW FILE AND SAVE DATA
     * @returns ACTION COMPLETE
     */
    async NewFile() {
        return await window.ipcRender.SaveToNewFile(this.path, this.data);
    }
    /**
     * ACCESS CONTENTS OF A FOLDER
     * @param {string} folder 
     * @returns FOLDER DETAILS
     */
    async AccessFolder() {
        return await window.ipcRender.ReadFolder(this.path);
    }
    /**
     * READ A GIVEN FILE
     * @returns FILE DETAILS
     */
    async Read() {
        const file = await window.ipcRender.ReadMessage(this.path);
        return JSON.parse(file)
    }
    /**
     * FORMAT A PATH
     * @returns PATH
     */
    async fetchPath() {
        return await window.ipcRender.RetrievePath(this.path);
    }
    /**
     * CREATE A NEW WINDOW
     * @returns BROWSWER WINDOW
     */
    async drawWindow() {
        return await window.ipcRender.DrawWindow(this.path);
    }
    /**
     * GET ALL THE AVAILABLE ROUTES FOR THE APPLICATION
     * @returns OBJECT
     */
    async availableRoutes() {
        return await window.ipcRender.Route();
    }
    /**
     * DELETE FILE
     * @returns 
     */
    async removeFile() {
        return await window.ipcRender.RemoveFile(this.path);
    }
}

export { Renderer }