import M_Lilypad from "../MUSHROOM_CAP/Memory_Lilypad.js";
import M_Paths from "../MUSHROOM_CAP/Memory_Paths.js";
import M_Pockets from "../MUSHROOM_CAP/Memory_Pockets.js";
import M_Routes from "../MUSHROOM_CAP/Memory_Routes.js";
import M_Templates from "../MUSHROOM_CAP/Memory_Templates.js";
import { Renderer } from "./Renderer.js";

export default class Mushroom_Cap extends Renderer{

    /**
     * ## MUSHROOM MEMORY
     */
    constructor(
        CAP_CONFIG_USERNAME = false
    ){

        super();

        // ============ //
        // << MEMORY >> //
        // ============ //

        this.DATA_LOADED = 'UNSET';
        this.SESSION = 'UNSET';

        // ============ //
        // << PATHS  >> //
        // ============ //

        this.PATH_SESSION = 'UNSET';
        this.PATH_POCKETS = 'UNSET';

        // =============== //
        // << INSTANCES >> //
        // =============== //

        this.INSTANCE_M_PATHS = new M_Paths();
        this.INSTANCE_M_ROUTES = new M_Routes();
        this.INSTANCE_M_TEMPLATES = new M_Templates();
        this.INSTANCE_M_POCKETS = new M_Pockets();
        this.INSTANCE_M_LILYPAD = new M_Lilypad();

        // =========== //
        // << FLAGS >> //
        // =========== //

        this.FLAG_USERNAME = CAP_CONFIG_USERNAME;
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## FETCH APP MEMORY
     * 
     * -------------------
     */
    async REMEMBER() {

        await this.SET_SESSION_PATH();
        try {
            this.DATA_LOADED = JSON.parse(await this.#LOAD_SESSION());
            console.log(this.DATA_LOADED)
            if (Object.keys(this.DATA_LOADED).length <= 2) {
                console.log('EMPTY SESSION FILE FOUND')
                await this.#GENERATE_SESSION();
            }
            else {this.SESSION = this.DATA_LOADED}
        } catch (error) {
            await this.#GENERATE_SESSION();
        };
        console.log('ACTIVE SESSION IS...');
        console.log(this.SESSION)
    };
    /**
     * ## GENERATING NEW SESSION
     * 
     * -------------------------
     * 
     * Creating a new populated session file
     * 
     */
    async #GENERATE_SESSION() {
        this.SESSION = {
            PATHS: {},
            ROUTES: {},
            TEMPLATES: {},
            POCKETS: {},
            USERS: {}
        };
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE();
        this.SESSION.ROUTES = await this.INSTANCE_M_ROUTES.INITIALISE();
        this.SESSION.TEMPLATES = await this.INSTANCE_M_TEMPLATES.RUN_MEMORY_TEMPLATES();
        this.SESSION.POCKETS = this.INSTANCE_M_POCKETS.INITIALISE().WELCOME;
        this.SESSION.USERS = await this.INSTANCE_M_LILYPAD.INITIALISE(
            this.SESSION.PATHS.CUPBOARD.FILES.RESIDENTFROG,
            this.SESSION.PATHS.CUPBOARD.FILES.FROGS,
            this.SESSION.PATHS.CUPBOARD.LILYPAD
        );
        await this.SAVE_SESSION();
    };

    // ===================== //
    // ## SESSION UTILITY ## //
    // ===================== //

    /**
     * ## SAVE SESSION
     * 
     * -----------------
     * 
     * Write the current session data to a holding file
     * 
     */
    async SAVE_SESSION() {
        this.RENDERER_PATH = this.PATH_SESSION;
        this.RENDERER_DATA = this.SESSION;
        return await this.SAVE();
    };
    /**
     * ## CLEAR THE SESSION FILE
     * 
     * ------------------------
     * 
     * Reset the session settings file to be blank
     * 
     * This will erase everything that has previously been saved
     * 
     * It is intended to be used as the app is being closed
     * 
     */
    async RESET_SESSION() {
        this.RENDERER_PATH = this.PATH_SESSION;
        this.RENDERER_DATA = {};
        return await this.SAVE();
    };
    async SET_SESSION_PATH() {
        this.RENDERER_PATH = '£££-UserMemory/CUPBOARD/MEMORY/SessionMemory.json';
        this.PATH_SESSION = await this.FETCH_PATH();
    };

    // ================== //
    // ## SESSION FILE ## //
    // ================== //

    /**
     * ## LOAD THE APP SESSION FILE
     * 
     * --------------------------
     * 
     * Read previously saved data in the session file
     * 
     * File may be empty if no data has been saved to memory
     */
    async #LOAD_SESSION() {
        this.RENDERER_PATH = this.PATH_SESSION;
        return await this.READ();
    };

    // ===================== //
    // ## MEMORY SEGMENTS ## //
    // ===================== //

    /**
     * ## LOAD ROUTE FILES
     * 
     * ------------------
     * 
     * Read the base route files and load them into the session
     */
    async SESSION_ROUTES() {
        return {
            MEMORY: await this.AVAILABLE_ROUTES('MEMORY'),
            ASSETS: await this.AVAILABLE_ROUTES('ASSETS'),
            PLANETS: await this.AVAILABLE_ROUTES('PLANETS'),
            FONTS: await this.AVAILABLE_ROUTES('FONTS')
        };
    };

   // ============== //
    // ## UTILITY ## //
    // ============= //

    /**
     * ## CREATE A NEW PATH
     */
    async CREATE_PATH(PARAMETER_PATH) {
        this.RENDERER_PATH = PARAMETER_PATH;
        return await this.FETCH_PATH();
    };
    /**
     * ## READ A DATA FILE
     */
    async READ_DATA(PARAMETER_PATH) {
        this.RENDERER_PATH = PARAMETER_PATH;
        return JSON.parse(await this.READ());
    };

};