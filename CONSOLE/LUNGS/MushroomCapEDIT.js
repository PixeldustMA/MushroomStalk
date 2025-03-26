import M_Chunk from "../MUSHROOM_CAP/Memory_Chunk.js";
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


        this.INSTANCE_M_POCKETS = new M_Pockets();

        this.INSTANCE_M_CHUNK = '';

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
    async REMEMBER(PARAMETER_SESSION_TYPE) {

        // << READ SESSION STYLE >> //
        // << IF LOAD - GENERATE A WHOLE NEW PRELOAD SESSION >> //
        if (PARAMETER_SESSION_TYPE === 'PRELOAD') {
            await this.GENERATE_TEMPORARY_SESSION();
        }
        // << IF PROFILE SESSION --
        else if (PARAMETER_SESSION_TYPE === 'PROFILE') {
            // << LOAD SESSION FILE PATH >> //
            await this.SET_SESSION_PATH();
            // << IDENTIFY IF THERE IS ALREADY DATA IN THE PATH >> //
            try {
                this.DATA_LOADED = JSON.parse(await this.#LOAD_SESSION());

                // << IF NO DATA -> GENERATE NEW FULL SESSION >> //
                if (Object.keys(this.DATA_LOADED).length <= 2) {
                    await this.#GENERATE_SESSION();
                }
                // << IF DATA -> READ SESSION >> //
                else {
                        this.SESSION = this.DATA_LOADED
                        this.INSTANCE_M_CHUNK = new M_Chunk({
                            CHUNK_CONFIG_PARTY_PATH: this.SESSION.PATHS.NOVA.FILES.POKEMON_PARTY,
                            CHUNK_CONFIG_DATABASE_PATH: this.SESSION.PATHS.NOVA.FILES.POKEMON_DATABASE
                        });
                        await this.INSTANCE_M_CHUNK.INITIALISE_SESSION()
                    }
            } 
            catch (error) {
                await this.#GENERATE_SESSION();
            };
        };
    };

    // =================== //
    // ## SESSION STYLE ## // 
    // =================== //

    /**
     * ## GENERATE A TEMPORARY SESSION
     * -------------------------------
     */
    async GENERATE_TEMPORARY_SESSION() {
        this.SESSION = {
            PATHS: {},
            ROUTES: {},
            TEMPLATES: {},
            POCKETS: {},
            USERS: {},
            CHUNK: {}
        };
        console.log('TEMPORARY SESSION')
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE();
        this.SESSION.ROUTES = await this.INSTANCE_M_ROUTES.INITIALISE();

        this.SESSION.POCKETS = this.INSTANCE_M_POCKETS.INITIALISE().WELCOME;
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

        this.SESSION.TEMPLATES = await this.INSTANCE_M_TEMPLATES.RUN_MEMORY_TEMPLATES();
        this.SESSION.POCKETS = this.INSTANCE_M_POCKETS.INITIALISE().WELCOME;

        this.INSTANCE_M_CHUNK = new M_Chunk({
            CHUNK_CONFIG_PARTY_PATH: this.SESSION.PATHS.NOVA.FILES.POKEMON_PARTY,
            CHUNK_CONFIG_DATABASE_PATH: this.SESSION.PATHS.NOVA.FILES.POKEMON_DATABASE,
            CHUNK_CONFIG_ELEMENTS_PATH: this.SESSION.PATHS.NOVA.FILES.POKEMON_ELEMENTS
        });
        this.SESSION.CHUNK = await this.INSTANCE_M_CHUNK.INITIALISE_SESSION();
        await this.SAVE_SESSION();
    };
    /**
     * ## GENERATE A NEW CHUNK
     * ------------------------
     */
    async GENERATE_CHUNK({PARAMETER_VALUE_NAME, PARAMETER_PEN}) {
        this.INSTANCE_M_CHUNK.SET_VALUE(PARAMETER_VALUE_NAME, PARAMETER_PEN);
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
        this.RENDERER_PATH = ;
        this.PATH_SESSION = await this.FETCH_PATH();
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