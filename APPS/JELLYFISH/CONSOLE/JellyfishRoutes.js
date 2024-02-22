// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//        Load User Settings         //
//          Create Paths             //
// ================================= //

import {jelly } from "../SETTINGS/Jellyfish.js";

class jellyRoute{

    constructor() {
        this.jellyInstance = new jelly();
    }

    async route(code) {
        await this.jellyInstance.InitMemory();
        switch (code.toUpperCase()) {
            case "HOLDCELLS":
                return await this.getPath(this.jellyInstance.routeObject.MEMORY.HOLDCELLS);
            case "BUTTONLIST":
                return await this.getPath(this.jellyInstance.routeObject.COMPONENTS.BUTTONLIST);
            case "BUTTONRECORD":
                return await this.getPath(this.jellyInstance.routeObject.COMPONENTS.BUTTONRECORD);
            case "TRACKERSET":
                return await this.getPath(this.jellyInstance.routeObject.STRUCTURE.TRACKERSET);
            case "CRUMBMEMORY":
                return await this.getPath(this.jellyInstance.routeObject.USER.CRUMBSAVE)
            default:
                break;
        }
    }
    /**
     * CREATE A USABLE PATH
     * @param {string} routepath 
     * @returns {Promise} Path
     */
    async getPath(routepath) {
        this.jellyInstance.path = routepath
        return await this.jellyInstance.formPath();
    }
}

export { jellyRoute }