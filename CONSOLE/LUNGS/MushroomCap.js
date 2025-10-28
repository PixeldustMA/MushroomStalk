
import Cap_Database from "../NERVES/COLLECTIONS/Cap_Database.js";
import Cap_Lavalamps from "../NERVES/COLLECTIONS/Cap_Lavalamp.js";
import Cap_Media from "../NERVES/COLLECTIONS/Cap_Media.js";
import Cap_Nova from "../NERVES/COLLECTIONS/Cap_Nova.js";
import Cap_Paths from "../NERVES/COLLECTIONS/Cap_Paths.js";
import Cap_Profiles from "../NERVES/MAIN/Cap_Profiles.js";
import Cap_Routes from "../NERVES/MAIN/Cap_Routes.js";
import Cap_Settings from "../NERVES/MAIN/Cap_Settings.js";
import { Renderer } from "./Renderer.js";

// ================================================ //
// ================================================ //
// ==                                            == //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                MEMORY                      == //
// ##                MAIN                        ## //
// << ------------------------------------------ >> //
// ==       Main memory and session functions    == //
// ==                                            == //
// ================================================ //
// ================================================ //

export default class Mushroom_Cap extends Renderer{

    /**
     * ## MUSHROOM CAP CONSTRUCTOR
     */
    constructor(){

        super();

        // ========== //
        // ## DATA ## //
        // ========== //

        this.SESSION = {
            PATHS: {},
            SETTINGS: {}
        };
    };

    // ================== //
    // ## SESSION FILE ## //
    // ================== // 

    /**
     * ## GENERATE A FILE FOR CURRENT SESSION
     * --------------------------------------
     * 
     * Create a file in the memory that will hold all current session information
     * 
     * The app should always start off with this being blank
     * 
     * Save to a specific named path using data in the constructor
     */
    async CREATE_SESSION_FILE(){

        this.RENDERER_PATH = '£££-UserMemory/CUPBOARD/MEMORY/SessionMemory.json';
        this.RENDERER_DATA = this.SESSION;
        await this.SAVE();
    };
    /**
     * ## LOAD SESSION FILE
     * --------------------
     * 
     * The session file must have already been created
     * 
     * Find the path for the session
     * 
     * Read any data held in the given file
     */
    async LOAD_SESSION(){
        this.RENDERER_PATH = await this.#FETCH_SESSION_PATH();
        return JSON.parse(await this.READ());
    };
    /**
     * ## SAVE SESSION
     * ---------------
     * 
     * Save the currently active session to the session file
     * 
     * Session file must already exist
     */
    async SAVE_SESSION(){
        this.RENDERER_PATH = await this.#FETCH_SESSION_PATH();
        this.RENDERER_DATA = this.SESSION;
        await this.SAVE();
    };
    /**
     * ## LOAD THE APP SESSION FILE
     * 
     * --------------------------
     * 
     * Read previously saved data in the session file
     * 
     * File may be empty if no data has been saved to memory
     */
    async #FETCH_SESSION_PATH(){
        this.RENDERER_PATH = '£££-UserMemory/CUPBOARD/MEMORY/SessionMemory.json';
        return await this.READ();
    };

    // ===================== //
    // ## REQUEST SESSION ## //
    // ===================== //

    // ========== //
    // << MAIN >> //
    // ========== //

    /**
     * ## LOAD PATHS
     * -------------
     * 
     * Add all app paths to the session memory
     */
    async REQUEST_SESSION_PATHS(){
        this.SESSION.PATHS = await new Cap_Paths().GENERATE_SESSION_BASIC();
    };
    async REQUEST_SESSION_PATHS_USERNAME() {
        await this.REQUEST_SESSION_PATHS();
        this.RENDERER_PATH = this.SESSION.PATHS.PROFILES.USERS.FILES.RESIDENT;
        let DATA = JSON.parse(await this.READ());
        this.SESSION.PATHS = await new Cap_Paths().GENERATE_SESSION_USER(DATA.USERNAME);
    };
    async REQUEST_SESSION_CUPBOARD() {
        this.SESSION.PATHS = await this.REQUEST_SESSION_PATHS();
    };
    async REQUEST_SESSION_ROUTES() {
        await this.REQUEST_SESSION_PATHS();
        this.SESSION.ROUTES = await new Cap_Routes({
            ROUTES_CONFIG_PATHS: this.SESSION.PATHS.ROUTES,
            ROUTES_CONFIG_ROOT: this.SESSION.PATHS.ROOT.CUPBOARD.ROUTES
        }).INITIALISE_SESSION_BASIC();
    };
    async REQUEST_SESSION_USERS() {
        await this.REQUEST_SESSION_PATHS_USERNAME();
        this.SESSION.USERS = await new Cap_Profiles({
            PROFILE_CONFIG_PATHS: this.SESSION.PATHS.PROFILES.USERS,
            PROFILE_CONFIG_ROOT: this.SESSION.PATHS.ROOT.CUPBOARD.USERS
        }).INITIALISE_SESSION();
    };
    async REQUEST_SESSION_SETTINGS() {
        await this.REQUEST_SESSION_PATHS();
        console.log(this.SESSION.PATHS.SETTINGS)
        this.SESSION.SETTINGS = await new Cap_Settings({
            SETTINGS_CONFIG_PATHS: this.SESSION.PATHS.SETTINGS.SETTINGS,
            SETTINGS_CONFIG_ROOT: this.SESSION.PATHS.ROOT.CUPBOARD.SETTINGS 
        }).INITIALISE_SESSION_BASIC();
    };
    async REQUEST_SESSION_SETTINGS_USER() {
        await this.REQUEST_SESSION_PATHS_USERNAME();
        console.log(this.SESSION)
        this.SESSION.SETTINGS = await new Cap_Settings({
            SETTINGS_CONFIG_PATHS: this.SESSION.PATHS.SETTINGS.SETTINGS,
            SETTINGS_CONFIG_ROOT: this.SESSION.PATHS.ROOT.CUPBOARD.SETTINGS 
        }).INITIALISE_SESSION_USERNAME();
    };

    // =========== //
    // << MEDIA >> //
    // =========== //

    async REQUEST_SESSION_MEDIA() {
        await this.REQUEST_SESSION_PATHS_USERNAME();
        this.SESSION.MEDIA = await new Cap_Media({
            MEDIA_CONFIG_PATHS: this.SESSION.PATHS.MEDIA
        }).GENERATE_SESSION_MEDIA();
    };

    // =============== //
    // << LAVALAMPS >> //
    // =============== //

    async REQUEST_SESSION_LAVALAMPS() {
        await this.REQUEST_SESSION_PATHS_USERNAME();
        this.SESSION.LAVA_LAMPS = await new Cap_Lavalamps({
            LAVALAMP_CONFIG_PATHS: this.SESSION.PATHS.LAVALAMPS
        }).INITIALISE_MEMORY_LAVALAMPS();
    };

    // ========== //
    // << NOVA >> //
    // ========== //

    async REQUEST_SESSION_NOVA() {
        await this.REQUEST_SESSION_PATHS_USERNAME();
        this.SESSION.NOVA = await new Cap_Nova({
            NOVA_CONFIG_PATHS: this.SESSION.PATHS.NOVA
        }).GENERATE_SESSION_NOVA();
    };

    // ============== //
    // << DATABASE >> //
    // ============== //

    async REQUEST_SESSION_DATABASE() {
        await this.REQUEST_SESSION_PATHS_USERNAME();
        this.SESSION.DATABASE = await new Cap_Database({
            DATABASE_CONFIG_PATHS: this.SESSION.PATHS.DATABASE
        }).INITIALISE_MEMORY_DATABASE();
    }
};
