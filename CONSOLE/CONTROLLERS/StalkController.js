import { Renderer } from "../PLATYPUS/Renderer.js";
import { pathways } from "../ROUTES/Routes.js";

/**
 * CONTROL MAIN APP FUNCTIONALITY
 */
class Stalk extends Renderer {

    constructor() {
        super()
    }
    /**
     * LOAD A NEW PAGE
     * @param {Array} tag ROUTE INITIATION TAGS
     * @returns {Promise<string>} PATH TO HTML FILE
     */
    async LOAD(tag) {
        this.path = await this.INIT_ROUTE({TAG: tag[0], SECTION: tag[1], SUBSECTION: tag[2]});
        window.location.href = this.path;
    };
    async CHECK_LOGIN() {
        let stayLoggedIn = false;
        this.path = await this.INIT_ROUTE({TAG: 'RESIDENT', SECTION: 'MEMORY', SUBSECTION:'USERS'});
        const resident = await this.READ();
        if (Object.keys(resident).length >= 1) {
            if (resident.STAYLOGGEDIN) {
                stayLoggedIn = true;
            };
            if (stayLoggedIn) {
                await this.LOAD(["TITLE", 'MAINPAGES', 'WELCOME']);
            }
            else {
                console.log("NOT STAY LOGGED IN")
                this.LOAD(["WELCOME", 'MAINPAGES', 'WELCOME']);
            };
        }
        else {
            this.LOAD(['WIZARD', 'MAINPAGES', 'WELCOME']);
        };
    };
    async INIT_ROUTE({ TAG, SECTION = "", SUBSECTION = 0, CUSTOM = 0, PLANET = 0, ASSET = 0, USER = 0}) {
        const pathway = new pathways({TAG, SECTION, SUBSECTION, CUSTOM, PLANET, ASSET, USER });
        await pathway.SETUP();
        return await pathway.ROUTE();
    };
    async CHANGE_SETTINGS(tag, newValue) {
        this.path = await this.INIT_ROUTE({
            TAG: 'SETTINGS',
            SECTION: 'MEMORY',
            SUBSECTION: 'SETTINGS'
        });
        const settings = await this.READ();
        settings[tag] = newValue;
        this.data = settings;
        await this.SAVE();
    };
    async READ_SETTINGS() {
        this.path = await this.INIT_ROUTE({
            TAG: 'SETTINGS',
            SECTION: 'MEMORY',
            SUBSECTION: 'SETTINGS'
        });
        return await this.READ();
    };
}

export { Stalk };