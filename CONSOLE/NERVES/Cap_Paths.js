import { Renderer } from "../LUNGS/Renderer.js";

// ================================================ //
// ================================================ //
// ==                                            == //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                MEMORY                      == //
// ##                PATHS                       ## //
// << ------------------------------------------ >> //
// ==       Generate the Session Paths           == //
// ==                                            == //
// ================================================ //
// ================================================ //

export default class Cap_Paths extends Renderer{
    /**
     * ## MEMORY CONSTRUCTOR -- PATHS
     */
    constructor(){

        super();

        // ===================== //
        // << TOP LEVEL PATHS >> //
        // ===================== //

        this.MAIN_PATHS = {
            MUSHROOM: 'UNSET',
            CUPBOARD: 'UNSET',
            ARCHIVE: 'UNSET',
            NOVA: 'UNSET',
            EXPLORER: 'UNSET',
            FONTS: 'UNSET',
            SETTINGS: 'UNSET',
            TOADSTOOL: 'UNSET',
            LANGUAGES: 'UNSET',
            ROUTES: 'UNSET',
            TOOLBOX: 'UNSET',
        };

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MEMORY_SETTINGS = {
            USERNAME: 'UNSET'
        };

        // ============ //
        // << MEMORY >> //
        // ============ //

        this.CUPBOARD = {};
        this.ARCHIVE = {};
        this.NOVA = {};
        this.EXPLORER = {};
        this.FONTS = {};
        this.SETTINGS = {};
        this.TOADSTOOL = {};
        this.LANGUAGES = {};
        this.ROUTES = {};
        this.TOOLBOX = {};
    };

    // ======================== //
    // ## INITIALISE AND RUN ## //
    // ======================== //

    /**
     * ## LOAD MUSHROOM PATH
     * ---------------------
     * 
     * Load the first part of the path, which gives access to the Mushroom User folder
     */
    async LOAD_BASIC_PATH() {

        this.RENDERER_PATH = '£££-UserMemory'
        this.MAIN_PATHS.MUSHROOM = await this.FETCH_PATH();
        return this.MAIN_PATHS;
    };
    async LOAD_USER_PATH(PARAMETER_USERNAME) {
        this.RENDERER_PATH = '£££-UserMemory/USERNAME/';
        this.RENDERER_USERNAME = PARAMETER_USERNAME;
        this.MAIN_PATHS.USERNAME = await this.FETCH_PATH();
    };
    /**
     * ## INITIALISE MEMORY PATHWAYS
     * 
     * #### === ASYNC FUNCTION ==
     * Initialise mmemory pathways used for building the app memory folders and files.
     * 
     * #### --> RETURNS PROMISE
     */
    async INITIALISE() {

        // =================== //
        // << MUSHROOM PATHS >> //
        // =================== //

        await this.LOAD_BASIC_PATH();
    
        // =================== //
        // << SEGMENT PATHS >> //
        // =================== //

        this.#CUPBOARD_PATHS();

        return {
            TOP: this.MAIN_PATHS,
            CUPBOARD: this.CUPBOARD_PATHS
        };
    };
    async INITIALISE_USERNAME(PARAMETER_USERNAME) {

        // =================== //
        // << MUSHROOM PATHS >> //
        // =================== //

        await this.LOAD_BASIC_PATH();
        await this.LOAD_USER_PATH(PARAMETER_USERNAME);

        // =================== //
        // << SEGMENT PATHS >> //
        // =================== //

        this.#WAR_PATHS();
        this.#MEDIA_PATHS();
        this.#NOVA_PATHS();
        this.#CUPBOARD_PATHS();
        this.#TOOLBOX_PATHS();
        this.#SETTING_PATHS();

        return {
            TOP: this.MAIN_PATHS,
            CUPBOARD: this.CUPBOARD_PATHS,
            WAR: this.WAR_PATHS,
            MEDIA: this.MEDIA_PATHS,
            NOVA: this.NOVA_PATHS,
            TOOLBOX: this.TOOLBOX_PATHS,
            SETTINGS: this.SETTING_PATHS
        };
    };

    // ================ //
    // ## TOP LEVELS ## //
    // ================ //

    #SETTING_PATHS() {
        this.MAIN_PATHS.SETTINGS = `${this.MAIN_PATHS.USERNAME}/SETTINGS`;
        this.SETTING_PATHS = {
            CHARACTER: `${this.MAIN_PATHS.SETTINGS}/Character_Active.json`,
            STATUS: `${this.MAIN_PATHS.SETTINGS}/Status_Settings.json`
        };
    };
    #WAR_PATHS() {
        this.MAIN_PATHS.WAR = `${this.MAIN_PATHS.USERNAME}/WAR`;
        this.WAR_PATHS = {
            TOP: {},
            EXPLORER: {},
            ARCHIVE: {
                CODES: {}
            },
            ELEMENTS: {},
            EVENT: {},
            SUNFLOWER: {},
            BUNDLER: {},
            NAMES: {},
            TREE: {}
        };

        this.#EXPLORER_PATHS();
        this.#ARCHIVE_PATHS();
        this.#ELEMENT_PATHS();
        this.#EVENT_PATHS();
        this.#SUNFLOWER_PATHS();
        this.#BUNDLER_PATHS();
        this.#NAME_PATHS();
        this.#TREE_PATHS();
    };
    #MEDIA_PATHS(){
        this.MAIN_PATHS.MEDIA = `${this.MAIN_PATHS.USERNAME}/MEDIA`;
        this.MEDIA_PATHS = {
            TOP: {},
            BOOKS: {},
            FILMS: {},
            TELEVISION: {}
        }
        this.MEDIA_PATHS.TOP.BOOKS = `${this.MAIN_PATHS.MEDIA}/BOOKS`;
        this.MEDIA_PATHS.TOP.FILMS = `${this.MAIN_PATHS.MEDIA}/FILMS`;
        this.MEDIA_PATHS.TOP.TELEVISION = `${this.MAIN_PATHS.MEDIA}/TELEVISION`;

        this.#BOOK_PATHS();
        this.#FILM_PATHS();
        this.#TELEVISION_PATHS();
    };
    #CUPBOARD_PATHS() {
        this.MAIN_PATHS.CUPBOARD = `${this.MAIN_PATHS.MUSHROOM}/CUPBOARD`;

        this.CUPBOARD_PATHS = {
            TOP: {},
            USERS: {},
            ROUTES: {},
            MEMORY: {},
            TEXT: {},
            PANTRY: {},
            SETTINGS: {}
        }
        this.CUPBOARD_PATHS.TOP.USERS = `${this.MAIN_PATHS.CUPBOARD}/USERS`;
        this.CUPBOARD_PATHS.TOP.ROUTES = `${this.MAIN_PATHS.CUPBOARD}/ROUTES`;
        this.CUPBOARD_PATHS.TOP.MEMORY = `${this.MAIN_PATHS.CUPBOARD}/MEMORY`;
        this.CUPBOARD_PATHS.TOP.TEXT = `${this.MAIN_PATHS.CUPBOARD}/TEXT`;
        this.CUPBOARD_PATHS.TOP.PANTRY = `${this.MAIN_PATHS.CUPBOARD}/PANTRY`;
        this.CUPBOARD_PATHS.TOP.APP = `${this.MAIN_PATHS.CUPBOARD}/SETTINGS`;

        this.#USER_PATHS();
        this.#ROUTE_PATHS();
        this.#MEMORY_PATHS();
        this.#TEXT_PATHS();
        this.#PANTRY_PATHS();
        this.#APP_PATHS();
    };
    #TOOLBOX_PATHS(){
        this.MAIN_PATHS.TOOLBOX = `${this.MAIN_PATHS.USERNAME}/WAR/TOOLBOX`;
        this.TOOLBOX_PATHS = {
            TOP: {},
            WASHI: {},
            TRACKER: {}
        };

        this.TOOLBOX_PATHS.TOP.WASHI = `${this.MAIN_PATHS.TOOLBOX}/WASHI`;
        this.TOOLBOX_PATHS.TOP.TRACKER = `${this.MAIN_PATHS.TOOLBOX}/TRACKER`;
        this.#WASHI_PATHS();
        this.#TRACKER_PATHS();

    };

    // ============== //
    // ## CUPBOARD ## //
    // ============== //

    #USER_PATHS(){
        this.CUPBOARD_PATHS.USERS.LILYPAD = `${this.CUPBOARD_PATHS.TOP.USERS}/LILYPAD`;
        this.CUPBOARD_PATHS.USERS.FROGS = `${this.CUPBOARD_PATHS.TOP.USERS}/Frogs.json`;
        this.CUPBOARD_PATHS.USERS.RESIDENT = `${this.CUPBOARD_PATHS.TOP.USERS}/ResidentFrog.json`;
        this.CUPBOARD_PATHS.USERS.LIST = `${this.CUPBOARD_PATHS.TOP.USERS}/UserList.json`;
    };
    #ROUTE_PATHS(){
        this.CUPBOARD_PATHS.ROUTES.USER = `${this.CUPBOARD_PATHS.TOP.ROUTES}/User.json`;
    };
    #MEMORY_PATHS() {
        this.CUPBOARD_PATHS.MEMORY.SESSION = `${this.CUPBOARD_PATHS.TOP.MEMORY}/SessionMemory.json`;
    };
    #TEXT_PATHS() {
        this.CUPBOARD_PATHS.TEXT.WELCOME = `${this.CUPBOARD_PATHS.TOP.TEXT}/WELCOME`;
        this.CUPBOARD_PATHS.TEXT.BUTTON = ["ANALYSE", "NEW"];
        this.CUPBOARD_PATHS.TEXT.INPUT = ["NAME", "PASSWORD"];
    };
    #PANTRY_PATHS() {
        this.CUPBOARD_PATHS.PANTRY.FILES = `${this.CUPBOARD_PATHS.TOP.PANTRY}/Files.json`;
        this.CUPBOARD_PATHS.PANTRY.SESSION = `${this.CUPBOARD_PATHS.TOP.PANTRY}/Session.json"`;
        this.CUPBOARD_PATHS.PANTRY.TREE = `${this.CUPBOARD_PATHS.TOP.PANTRY}/Tree.json`;
    };
    #APP_PATHS() {
        this.CUPBOARD_PATHS.APP = {};
        this.CUPBOARD_PATHS.APP.SETTINGS = `${this.CUPBOARD_PATHS.TOP.APP}/MushroomData.json`;
    };

    // ========= //
    // ## WAR ## //
    // ========= //

    #EXPLORER_PATHS() {

        this.WAR_PATHS.TOP.EXPLORER = `${this.MAIN_PATHS.WAR}/EXPLORER`;

        this.WAR_PATHS.EXPLORER.CONSOLE = `${this.WAR_PATHS.TOP.EXPLORER}/CONSOLE`;
        this.WAR_PATHS.EXPLORER.SPACE = `${this.WAR_PATHS.TOP.EXPLORER}/SPACE`;
        this.WAR_PATHS.EXPLORER.SECTOR = `${this.WAR_PATHS.TOP.EXPLORER}/SECTOR`;
        this.WAR_PATHS.EXPLORER.SYSTEM = `${this.WAR_PATHS.TOP.EXPLORER}/SYSTEM`;
        this.WAR_PATHS.EXPLORER.PLANET = `${this.WAR_PATHS.TOP.EXPLORER}/PLANET`;
        this.WAR_PATHS.EXPLORER.GEOLOGICAL = `${this.WAR_PATHS.TOP.EXPLORER}/GEOLOGICAL`;
        this.WAR_PATHS.EXPLORER.DESCRIPTION = `${this.WAR_PATHS.TOP.EXPLORER}/DESCRIPTION`;
    };
    #ARCHIVE_PATHS() {

        this.WAR_PATHS.TOP.ARCHIVE = `${this.MAIN_PATHS.WAR}/ARCHIVE`;

        this.WAR_PATHS.ARCHIVE.CONSOLE = `${this.WAR_PATHS.TOP.ARCHIVE}/CONSOLE`;
        this.WAR_PATHS.ARCHIVE.CHARACTERS = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS`;
        this.WAR_PATHS.ARCHIVE.CODES.A = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/A`;
        this.WAR_PATHS.ARCHIVE.CODES.B = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/B`;
        this.WAR_PATHS.ARCHIVE.CODES.C = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/C`;
        this.WAR_PATHS.ARCHIVE.CODES.D = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/D`;
        this.WAR_PATHS.ARCHIVE.CODES.E = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/E`;
        this.WAR_PATHS.ARCHIVE.CODES.F = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/F`;
        this.WAR_PATHS.ARCHIVE.CODES.G = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/G`;
        this.WAR_PATHS.ARCHIVE.CODES.H = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/H`;
        this.WAR_PATHS.ARCHIVE.CODES.I = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/I`;
        this.WAR_PATHS.ARCHIVE.CODES.J = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/J`;
        this.WAR_PATHS.ARCHIVE.CODES.K = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/K`;
        this.WAR_PATHS.ARCHIVE.CODES.L = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/L`;
        this.WAR_PATHS.ARCHIVE.CODES.M = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/M`;
        this.WAR_PATHS.ARCHIVE.CODES.N = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/N`;
        this.WAR_PATHS.ARCHIVE.CODES.O = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/O`;
        this.WAR_PATHS.ARCHIVE.CODES.P = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/P`;
        this.WAR_PATHS.ARCHIVE.CODES.Q = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/Q`;
        this.WAR_PATHS.ARCHIVE.CODES.R = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/R`;
        this.WAR_PATHS.ARCHIVE.CODES.S = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/S`;
        this.WAR_PATHS.ARCHIVE.CODES.T = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/T`;
        this.WAR_PATHS.ARCHIVE.CODES.U = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/U`;
        this.WAR_PATHS.ARCHIVE.CODES.V = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/V`;
        this.WAR_PATHS.ARCHIVE.CODES.W = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/W`;
        this.WAR_PATHS.ARCHIVE.CODES.X = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/X`;
        this.WAR_PATHS.ARCHIVE.CODES.Y = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/Y`;
        this.WAR_PATHS.ARCHIVE.CODES.Z = `${this.WAR_PATHS.TOP.ARCHIVE}/CHARACTERS/Z`;
    };
    #ELEMENT_PATHS(){
        this.WAR_PATHS.TOP.ELEMENTS = `${this.MAIN_PATHS.WAR}/ELEMENTS`;
        this.WAR_PATHS.ELEMENTS.CONSOLE = `${this.WAR_PATHS.TOP.ELEMENTS}/CONSOLE`;
        this.WAR_PATHS.ELEMENTS.CATEGORIES = `${this.WAR_PATHS.TOP.ELEMENTS}/CATEGORIES`;
        this.WAR_PATHS.ELEMENTS.ELEMENTS = `${this.WAR_PATHS.TOP.ELEMENTS}/ELEMENTS`;
        this.WAR_PATHS.ELEMENTS.DESCRIPTION = `${this.WAR_PATHS.TOP.ELEMENTS}/DESCRIPTION`;
    };
    #EVENT_PATHS(){
        this.WAR_PATHS.TOP.EVENTS = `${this.MAIN_PATHS.WAR}/EVENTS`;
        this.WAR_PATHS.EVENT.CONSOLE = `${this.WAR_PATHS.TOP.EVENTS}/CONSOLE`;
        this.WAR_PATHS.EVENT.YEARS = `${this.WAR_PATHS.TOP.EVENTS}/INDEX`;
        this.WAR_PATHS.EVENT.EVENTS = `${this.WAR_PATHS.TOP.EVENTS}/EVENTS`;
        this.WAR_PATHS.EVENT.TEXT = `${this.WAR_PATHS.TOP.EVENTS}/TEXT`;
    };
    #SUNFLOWER_PATHS(){
        this.WAR_PATHS.TOP.SUNFLOWER = `${this.MAIN_PATHS.WAR}/SUNFLOWER`;
        this.WAR_PATHS.SUNFLOWER.TIME = `${this.WAR_PATHS.TOP.SUNFLOWER}/TIME`;
        this.WAR_PATHS.SUNFLOWER.SPACE = `${this.WAR_PATHS.SUNFLOWER.TIME}/SpaceList.json`;
        this.WAR_PATHS.SUNFLOWER.SECTOR = `${this.WAR_PATHS.SUNFLOWER.TIME}/SectorList.json`;
        this.WAR_PATHS.SUNFLOWER.SYSTEM = `${this.WAR_PATHS.SUNFLOWER.TIME}/SystemList.json`;
        this.WAR_PATHS.SUNFLOWER.PLANET = `${this.WAR_PATHS.SUNFLOWER.TIME}/PlanetList.json`;
        
    };
    #BUNDLER_PATHS(){
        this.WAR_PATHS.TOP.BUNDLER = `${this.MAIN_PATHS.WAR}/BUNDLERS`;
        this.WAR_PATHS.BUNDLER.CONSOLE = `${this.WAR_PATHS.TOP.BUNDLER}/CONSOLE`;
    };
    #NAME_PATHS() {
        this.WAR_PATHS.TOP.NAMES = `${this.MAIN_PATHS.WAR}/NAMES`;
        this.WAR_PATHS.NAMES.CONSOLE = `${this.WAR_PATHS.TOP.NAMES}/CONSOLE`;
        this.WAR_PATHS.NAMES.CATEGORY = `${this.WAR_PATHS.TOP.NAMES}/CATEGORIES`;
        this.WAR_PATHS.NAMES.LOCATIONS = `${this.WAR_PATHS.TOP.NAMES}/LOCATIONS`;
        this.WAR_PATHS.NAMES.NAMES = `${this.WAR_PATHS.TOP.NAMES}/NAMES`;
        this.WAR_PATHS.NAMES.SUBCATEGORY = `${this.WAR_PATHS.TOP.NAMES}/SUBCATEGORIES`;
    };
    #TREE_PATHS() {
        this.WAR_PATHS.TOP.TREE = `${this.MAIN_PATHS.WAR}/TREE`;
        this.WAR_PATHS.TREE.CONSOLE = `${this.WAR_PATHS.TOP.TREE}/CONSOLE`;
        this.WAR_PATHS.TREE.CHARACTERS = `${this.WAR_PATHS.TOP.TREE}/CHARACTERS`;
    };

    // =========== //
    // ## MEDIA ## //
    // =========== //

    #BOOK_PATHS() {
        this.MEDIA_PATHS.BOOKS.LIBRARY = `${this.MEDIA_PATHS.TOP.BOOKS}/LIBRARY`;
        this.MEDIA_PATHS.BOOKS.AUTHORS = `${this.MEDIA_PATHS.TOP.BOOKS}/AUTHOR`;
        this.MEDIA_PATHS.BOOKS.GENRES = `${this.MEDIA_PATHS.TOP.BOOKS}/GENRE`;
        this.MEDIA_PATHS.BOOKS.CONSOLE = `${this.MEDIA_PATHS.TOP.BOOKS}/CONSOLE`;
    };
    #FILM_PATHS() {
        this.MEDIA_PATHS.FILMS.FILMS = `${this.MEDIA_PATHS.TOP.FILMS}/FILMS`;
        this.MEDIA_PATHS.FILMS.DIRECTORS = `${this.MEDIA_PATHS.TOP.FILMS}/DIRECTORS`;
        this.MEDIA_PATHS.FILMS.GENRES = `${this.MEDIA_PATHS.TOP.FILMS}/GENRES`;
        this.MEDIA_PATHS.FILMS.ACTORS = `${this.MEDIA_PATHS.TOP.FILMS}/ACTORS`;
    };
    #TELEVISION_PATHS() {
        this.MEDIA_PATHS.TELEVISION.GUIDE = `${this.MEDIA_PATHS.TOP.GUIDE}/GUIDE`;
        this.MEDIA_PATHS.TELEVISION.GENRES = `${this.MEDIA_PATHS.TOP.TELEVISION}/GENRES`;
    };

    // ========== //
    // ## NOVA ## //
    // ========== //

    #NOVA_PATHS(){
        this.MAIN_PATHS.NOVA = `${this.MAIN_PATHS.USERNAME}/NOVA`;
        this.NOVA_PATHS = {
            TOP: {}
        }
        this.NOVA_PATHS.TOP.SETTINGS = `${this.MAIN_PATHS.NOVA}/SETTINGS`;
        this.NOVA_PATHS.TOP.TASKS = `${this.MAIN_PATHS.NOVA}/TASKS`;
    };

    // ============= //
    // ## TOOLBOX ## //
    // ============= //

    #WASHI_PATHS() {
        this.TOOLBOX_PATHS.WASHI.PARTS = `${this.TOOLBOX_PATHS.TOP.WASHI}/PARTS`;
        this.TOOLBOX_PATHS.WASHI.GROUPS = `${this.TOOLBOX_PATHS.TOP.WASHI}/GROUPS`;
        this.TOOLBOX_PATHS.WASHI.CONSOLE = `${this.TOOLBOX_PATHS.TOP.WASHI}/CONSOLE`;
        this.TOOLBOX_PATHS.WASHI.WASHI = `${this.TOOLBOX_PATHS.TOP.WASHI}/CATEGORY`;
    };
    #TRACKER_PATHS() {
        this.TOOLBOX_PATHS.TRACKER.GLOBAL = `${this.TOOLBOX_PATHS.TOP.TRACKER}/GLOBAL`;
        this.TOOLBOX_PATHS.TRACKER.MEAT = `${this.TOOLBOX_PATHS.TOP.TRACKER}/MEAT`;
        
    };
};
