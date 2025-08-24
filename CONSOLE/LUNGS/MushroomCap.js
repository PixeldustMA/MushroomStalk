import Cap_AppData from "../NERVES/Cap_AppData.js";
import Cap_Archive from "../NERVES/Cap_Archive.js";
import Cap_Bundler from "../NERVES/Cap_Bundler.js";
import Cap_Element from "../NERVES/Cap_Element.js";
import Cap_Events from "../NERVES/Cap_Events.js";
import Cap_Explorer from "../NERVES/Cap_Explorer.js";
import Cap_Media from "../NERVES/Cap_Media.js";
import Cap_Names from "../NERVES/Cap_Names.js";
import Cap_Nova from "../NERVES/Cap_Nova.js";
import Cap_Paths from "../NERVES/Cap_Paths.js";
import Cap_Routes from "../NERVES/Cap_Routes.js";
import Cap_Settings from "../NERVES/Cap_Settings.js";
import Cap_Sunflower from "../NERVES/Cap_Sunflower.js";
import Cap_Templates from "../NERVES/Cap_Templates.js";
import Cap_Toolbox from "../NERVES/Cap_Toolbox.js";
import Cap_Tree from "../NERVES/Cap_Tree.js";
import Cap_Users from "../NERVES/Cap_Users.js";
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

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        this.INSTANCE_M_PATHS = new Cap_Paths();
        this.INSTANCE_M_ROUTES = new Cap_Routes();
        this.INSTANCE_M_TEMPLATES = new Cap_Templates();
        this.INSTANCE_M_LILYPAD = new Cap_Users();


        // ========== //
        // ## DATA ## //
        // ========== //

        this.SESSION = {
            PATHS: {},
            ROUTES: {},
            TEMPLATES: {},
            POCKETS: {},
            USERS: {},
            CHUNK: {},
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

    // ============= //
    // << LOADING >> //
    // ============= //

    /**
     * ## LOAD PATHS
     * -------------
     * 
     * Add all app paths to the session memory
     */
    async REQUEST_SESSION_PATHS(){
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE();
    };
    /**
     * ## LOAD ROUTES
     * -------------
     * 
     * Add all app routes to the session memory
     */
    async REQUEST_SESSION_ROUTES(){
        this.SESSION.ROUTES = await this.INSTANCE_M_ROUTES.INITIALISE();
    };
    /**
     * ## LOAD TEMPLATES
     * -------------
     * 
     * Add all app templates to the session memory
     */
    async REQUEST_SESSION_TEMPLATES(){
        this.SESSION.TEMPLATES = await this.INSTANCE_M_TEMPLATES.RUN_MEMORY_TEMPLATES();
    };
    /**
     * ## LOAD USERS
     * -------------
     * 
     * Add all app user data to the session memory
     */
    async REQUEST_SESSION_USERS(){
        await this.REQUEST_SESSION_PATHS();
        this.SESSION.USERS = await this.INSTANCE_M_LILYPAD.INITIALISE(
            this.SESSION.PATHS.CUPBOARD.USERS.RESIDENT,
            this.SESSION.PATHS.CUPBOARD.USERS.FROGS,
            this.SESSION.PATHS.CUPBOARD.USERS.LILYPAD,
            this.SESSION.PATHS.CUPBOARD.USERS.LIST
        );
    };
    async REQUEST_SESSION_SETTINGS() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        this.SESSION.SETTINGS = await new Cap_Settings({
            SETTINGS_CONFIG_PATH_ROOT: this.SESSION.PATHS.TOP.SETTINGS,
            SETTINGS_CONFIG_PATH_CHARACTER: this.SESSION.PATHS.SETTINGS.CHARACTER,
            SETTINGS_CONFIG_PATH_STATUS: this.SESSION.PATHS.SETTINGS.STATUS
        }).INITIALISE();
    };
    async REQUEST_SESSION_APP_SETTINGS() {
        await this.REQUEST_SESSION_PATHS();
        this.SESSION.SETTINGS.MUSHROOM = await new Cap_AppData({
            SETTINGS_CONFIG_PATH_ROOT: this.SESSION.PATHS.CUPBOARD.TOP.APP,
            SETTINGS_CONFIG_PATH_SETTINGS: this.SESSION.PATHS.CUPBOARD.APP.SETTINGS,
        }).INITIALISE();

    };

    // ============== //
    // << DATABASE >> //
    // ============== //

    async REQUEST_SESSION_EXPLORER() {

        console.log('LOADING EXPLORER SESSION');
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        this.SESSION.EXPLORER = await new Cap_Explorer({
            EXPLORER_CONFIG_PATH_ROOT: this.SESSION.PATHS.WAR.TOP.EXPLORER,
            EXPLORER_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.EXPLORER.CONSOLE,
            EXPLORER_CONFIG_PATH_SPACE: this.SESSION.PATHS.WAR.EXPLORER.SPACE,
            EXPLORER_CONFIG_PATH_SECTOR: this.SESSION.PATHS.WAR.EXPLORER.SECTOR,
            EXPLORER_CONFIG_PATH_SYSTEM: this.SESSION.PATHS.WAR.EXPLORER.SYSTEM,
            EXPLORER_CONFIG_PATH_PLANET: this.SESSION.PATHS.WAR.EXPLORER.PLANET
        }).INITIALISE();
    };
    async REQUEST_SESSION_ELEMENT() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        this.SESSION.ELEMENTS = await new Cap_Element({
            ELEMENT_CONFIG_PATH_ROOT: this.SESSION.PATHS.WAR.TOP.ELEMENTS,
            ELEMENT_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.ELEMENTS.CONSOLE,
            ELEMENT_CONFIG_PATH_ELEMENT: this.SESSION.PATHS.WAR.ELEMENTS.ELEMENTS,
            ELEMENT_CONFIG_PATH_CATEGORY: this.SESSION.PATHS.WAR.ELEMENTS.CATEGORIES,
        }).INITIALISE();
        console.log(this.SESSION)
    };
    async REQUEST_SESSION_ARCHIVE() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        this.SESSION.ARCHIVE = await new Cap_Archive({
            ARCHIVE_CONFIG_PATH_ROOT: this.SESSION.PATHS.WAR.TOP.ARCHIVE,
            ARCHIVE_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.ARCHIVE.CONSOLE,
            ARCHIVE_CONFIG_PATH_CODES: this.SESSION.PATHS.WAR.ARCHIVE.CHARACTERS
        }).INITIALISE();
    };
    async REQUEST_SESSION_EVENTS() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        console.log(this.SESSION);
        this.SESSION.EVENT = await new Cap_Events({
            EVENT_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.EVENT.CONSOLE,
            EVENT_CONFIG_PATH_ROOT: this.SESSION.PATHS.WAR.TOP.EVENTS,
            EVENT_CONFIG_PATH_EVENTS: this.SESSION.PATHS.WAR.EVENT.EVENTS,
            EVENT_CONFIG_PATH_YEARS: this.SESSION.PATHS.WAR.EVENT.YEARS
        }).INITIALISE();
    };
    async REQUEST_SESSION_NAMES() {
        console.log('LOADING NAME SESSION');
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        await this.REQUEST_SESSION_EXPLORER();

        this.SESSION.NAMES = await new Cap_Names({
            NAME_CONFIG_PATH_ROOT: this.SESSION.PATHS.WAR.TOP.NAMES,
            NAME_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.NAMES.CONSOLE,
            NAME_CONFIG_PATH_NAMES: this.SESSION.PATHS.WAR.NAMES.NAMES,
            NAME_CONFIG_PATH_CATEGORIES: this.SESSION.PATHS.WAR.NAMES.CATEGORY,
            NAME_CONFIG_PATH_SUBCATEGORIES: this.SESSION.PATHS.WAR.NAMES.SUBCATEGORY,
            NAME_CONFIG_PATH_LOCATIONS: this.SESSION.PATHS.WAR.NAMES.LOCATIONS,
            NAME_CONFIG_LIST_PLANETS: this.SESSION.EXPLORER.LISTS.PLANET
        }).INITIALISE();
        console.log(this.SESSION);
    };

    // =========== //
    // << TOOLS >> //
    // =========== //

    async REQUEST_SESSION_TOOLBOX() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        this.SESSION.TOOLBOX = await new Cap_Toolbox({
            TOOLBOX_CONFIG_PATH_ROOT: this.SESSION.PATHS.TOP.TOOLBOX,
            TOOLBOX_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.TOOLBOX.WASHI.CONSOLE,
            TOOLBOX_CONFIG_PATH_PARTS: this.SESSION.PATHS.TOOLBOX.WASHI.PARTS,
            TOOLBOX_CONFIG_PATH_GROUPS: this.SESSION.PATHS.TOOLBOX.WASHI.GROUPS,
            TOOLBOX_CONFIG_PATH_WASHI: this.SESSION.PATHS.TOOLBOX.WASHI.WASHI,
            TOOLBOX_CONFIG_PATH_GLOBAL: this.SESSION.PATHS.TOOLBOX.TRACKER.GLOBAL,
            TOOLBOX_CONFIG_PATH_MEAT: this.SESSION.PATHS.TOOLBOX.TRACKER.MEAT
        }).INITIALISE();
    };
    async REQUEST_SESSION_SUNFLOWER() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        console.log(this.SESSION)
        this.SESSION.SUNFLOWER = await new Cap_Sunflower({
            SUNFLOWER_CONFIG_PATH_ROOT: this.SESSION.PATHS.WAR.TOP.SUNFLOWER,
            SUNFLOWER_CONFIG_PATH_TIME: this.SESSION.PATHS.WAR.SUNFLOWER.TIME,
            SUNFLOWER_CONFIG_PATH_SPACE: this.SESSION.PATHS.WAR.SUNFLOWER.SPACE,
            SUNFLOWER_CONFIG_PATH_SECTOR: this.SESSION.PATHS.WAR.SUNFLOWER.SECTOR,
            SUNFLOWER_CONFIG_PATH_SYSTEM: this.SESSION.PATHS.WAR.SUNFLOWER.SYSTEM,
            SUNFLOWER_CONFIG_PATH_PLANET: this.SESSION.PATHS.WAR.SUNFLOWER.PLANET
        }).INITIALISE();
        console.log('SESSION')
        console.log(this.SESSION)
    };
    async REQUEST_SESSION_BUNDLER() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        console.log(this.SESSION);
        this.SESSION.BUNDLER = await new Cap_Bundler({
            BUNDLER_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.BUNDLER.CONSOLE,
            BUNDLER_CONFIG_PATH_ROOT: this.SESSION.PATHS.WAR.TOP.BUNDLER
        }).INITIALISE();
    };
    async REQUEST_SESSION_TREE() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        console.log(this.SESSION);
        this.SESSION.TREE = await new Cap_Tree({
            TREE_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.TREE.CONSOLE,
            TREE_CONFIG_PATH_ROOT: this.SESSION.PATHS.WAR.TOP.TREE,
            TREE_CONFIG_PATH_CHARACTER: this.SESSION.PATHS.WAR.TREE.CHARACTERS
        }).INITIALISE();
    };

    // ========== //
    // << NOVA >> //
    // ========== //

    async REQUEST_SESSION_NOVA() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        console.log(this.SESSION)
        this.SESSION.NOVA = await new Cap_Nova({
            NOVA_CONFIG_PATH_ROOT: this.SESSION.PATHS.TOP.NOVA,
            NOVA_CONFIG_PATH_JOURNAL: 'C:\\Stitchy\\THE ORB\\JOURNAL',
            NOVA_CONFIG_PATH_CONSOLE: `${this.SESSION.PATHS.NOVA.TOP.TASKS}/CONSOLE`,
            NOVA_CONFIG_PATH_CATEGORIES: `${this.SESSION.PATHS.NOVA.TOP.TASKS}/CATEGORIES`,
            NOVA_CONFIG_PATH_SUB: `${this.SESSION.PATHS.NOVA.TOP.TASKS}/SUB_CATEGORIES`,
            NOVA_CONFIG_PATH_BUCKET: `${this.SESSION.PATHS.NOVA.TOP.TASKS}/BUCKETS`,
            NOVA_CONFIG_PATH_TASKS: `${this.SESSION.PATHS.NOVA.TOP.TASKS}/TASKS`
            
        }).INITIALISE();
    };

    // =========== //
    // << MEDIA >> //
    // =========== //

    async REQUEST_SESSION_MEDIA() {
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        console.log(this.SESSION);
        this.SESSION.MEDIA = await new Cap_Media({
            MEDIA_CONFIG_PATH_BOOK_CONSOLE: this.SESSION.PATHS.MEDIA.BOOKS.CONSOLE,
            MEDIA_CONFIG_PATH_ROOT: this.SESSION.PATHS.TOP.MEDIA,
            MEDIA_CONFIG_PATH_BOOK_LIBRARY: this.SESSION.PATHS.MEDIA.BOOKS.LIBRARY,
            MEDIA_CONFIG_PATH_BOOK_GENRE: this.SESSION.PATHS.MEDIA.BOOKS.GENRES,
            MEDIA_CONFIG_PATH_BOOK_AUTHOR: this.SESSION.PATHS.MEDIA.BOOKS.AUTHORS
        }).INITIALISE();
    };

};
