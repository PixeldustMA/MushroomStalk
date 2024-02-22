import { createRoute, customRoute, planetRoute, route } from "../GNOMES/Routes.js";;
import { Renderer } from "../PLATYPUS/Renderer.js";

/**
 * CONTROL MAIN APP FUNCTIONALITY
 */
class Stalk extends Renderer {

    constructor() {
        super()
    }

    /**
     * CREATE A NEW PATH
     * @param {string} tag 
     * @returns {Promise<string>} Path
     */
    async machete(tag) {
        return await route(tag);
    };
    /**
     * CREATE A PATH TO A GIF FILE
     * @param {string} tag 
     * @param {string} assetName 
     * @returns {Promise<string>}
     */
    async fetchAnimation(tag, assetName) {
        return await route(tag, assetName);
    };
    /**
     * CREATE A PATH TO AN IMAGE FILE
     * @param {string} assetName 
     * @returns {Promise<string>}
     */
    async fetchImage(assetName) {
        return await route('IMAGE', assetName);
    };
    /**
     * CREATE A PATH TO A SPECIFIC PLANET FILE
     * @param {string} tag 
     * @param {string} sector Optional 
     * @returns {Promise<string>}
     */
    async fetchPlanet(tag, sector = "None") {
        if (sector = "None") {
            return await planetRoute(tag);}
        return await planetRoute(tag, sector);
    }
    /**
     * CREATE A CUSTOM ROUTE
     * @param {string} path
     * @param {string} tag 
     * @returns {Promise<string>}
     */
    async formRoute(path, tag) {
        return await createRoute(path, tag)
    }
    /**
     * ACCESS ROUTES IN THE EXPLORER DATABASE
     * @param {string} tag 
     * @returns {Promise<string>}
     */
    async ExplorerRoutes(tag) {
        return await route("EXPLORERDATABASE", tag)
    }
    /**
     * LOAD A NEW PAGE
     * @param {string} tag 
     * @returns {Promise<string>} PATH TO HTML FILE
     */
    async load(tag) {
        this.path = await this.machete(tag);
        window.location.href = this.path
    }
    async checkLogin() {
        let stayLoggedIn = false;
        this.path = await this.machete("RESIDENT");
        const resident = await this.Read();

        if (resident !== "") {
            if (resident.STAYLOGGEDIN) {
                stayLoggedIn = true;
            };
        
        if (stayLoggedIn) {
            await this.load("TITLE");
        }
        else {
            this.load("WELCOME");
        }

        }
    }

    async createCustomPath(routeTag, tagArray) {
        return await customRoute(routeTag, tagArray)
    }
}

export { Stalk };