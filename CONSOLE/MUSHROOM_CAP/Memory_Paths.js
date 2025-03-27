import { Renderer } from "../LUNGS/Renderer.js";

export default class M_Paths extends Renderer{
    constructor(){

        super();

        this.MEMORY = {
            CUPBOARD: {},
            ARCHIVE: {},
            NOVA: {},
            EXPLORER: {},
            FONTS: {},
            SETTINGS: {},
        };

        // ====================== //
        // << AGGREGATED PATHS >> //
        // ====================== //

        this.AGGREGATION_CUPBOARD_PATHS = {FILES: {}};
        this.AGGREGATION_ARCHIVE_PATHS = {FILES: {}};
        this.AGGREGATION_NOVA_PATHS = {FILES: {}};
        this.AGGREGATION_EXPLORER_PATHS = {FILES: {}};
        this.AGGREGATION_FONTS_PATHS = {FILES: {}};
        this.AGGREGATION_SETTINGS_PATHS = {FILES: {}};
        this.AGGREGATION_TOADSTOOL_PATHS = {FILES: {}};
        this.AGGREGATION_LANGUAGE_PATHS = {FILES: {}};
        this.AGGREGATION_ROUTES_PATHS = {FILES: {}};

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
            ROUTES: 'UNSET'
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
    };

    // ======================== //
    // ## INITIALISE AND RUN ## //
    // ======================== //

    async LOAD_BASIC_PATH() {
        this.RENDERER_PATH = '£££-UserMemory'
        this.MAIN_PATHS.MUSHROOM = await this.FETCH_PATH();
        return this.MAIN_PATHS;
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
        await this.TOP_LEVEL();

        // =================== //
        // << SEGMENT PATHS >> //
        // =================== //

        await this.INITIALISE_CUPBOARD(this.#CUPBOARD_TEMPLATE());
        await this.INITIALISE_ARCHIVE(this.#ARCHIVE_TEMPLATE());
        await this.INITIALISE_NOVA(this.#NOVA_TEMPLATE());
        await this.INITIALISE_EXPLORER(this.#EXPLORER_TEMPLATE());
        await this.INITIALISE_FONTS(this.#FONT_TEMPLATE());
        await this.INITIALISE_SETTINGS(this.#SETTINGS_TEMPLATE());
        await this.INITIALISE_TOADSTOOL(this.#LANGUAGE_ROOT_TEMPLATE());
        await this.INITIALISE_LANGUAGE(this.#LANGUAGE_USER_TEMPLATE());
        await this.INITIALISE_ROUTES(this.#ROUTES_TEMPLATE());

        return {
            TOP: this.MAIN_PATHS,
            CUPBOARD: this.CUPBOARD,
            ARCHIVE: this.ARCHIVE,
            NOVA: this.NOVA,
            FONTS: this.FONTS,
            SETTINGS: this.SETTINGS,
            TOADSTOOL: this.TOADSTOOL,
            LANGUAGES: this.LANGUAGES,
            ROUTES: this.ROUTES
        };
    };

    // ======================= //
    // ## FOLDERS AND FILES ## //
    // ======================= //

    async TOP_LEVEL() {
        this.MAIN_PATHS.CUPBOARD = `${this.MAIN_PATHS.MUSHROOM}/CUPBOARD`;
        this.MAIN_PATHS.ARCHIVE = `${this.MAIN_PATHS.MUSHROOM}/Username/ARCHIVE`;
        this.MAIN_PATHS.NOVA = `${this.MAIN_PATHS.MUSHROOM}/Username/NOVA`;
        this.MAIN_PATHS.EXPLORER = `${this.MAIN_PATHS.MUSHROOM}/Username/EXPLORER`;
        this.MAIN_PATHS.FONTS = `${this.MAIN_PATHS.MUSHROOM}/Username/FONTS`;
        this.MAIN_PATHS.SETTINGS = `${this.MAIN_PATHS.MUSHROOM}/Username/SETTINGS`;
        this.MAIN_PATHS.TOADSTOOL = `${this.MAIN_PATHS.MUSHROOM}/TOADSTOOL`;
        this.MAIN_PATHS.LANGUAGES = `${this.MAIN_PATHS.MUSHROOM}/Username/LANGUAGES`;
        this.MAIN_PATHS.ROUTES = `${this.MAIN_PATHS.MUSHROOM}/Username/ROUTES`;
    };
    async LEVEL_ONE(FOLDER_DATA, AGGREGATOR, PATH) {
        for (let index = 0; index < FOLDER_DATA.length; index++) {
            const element = FOLDER_DATA[index];
            AGGREGATOR[element] = `${PATH}/${element}`;
        };
    };
    async FILES(FILE_DATA, AGGREGATOR, PATH) {
        const ARRAY_FILES = Object.keys(FILE_DATA);
        for (let index = 0; index < ARRAY_FILES.length; index++) {
            const FILENAME = ARRAY_FILES[index];
            const FOLDER_PARENT = FILE_DATA[FILENAME];

            AGGREGATOR[FILENAME.replace('.json', '').toUpperCase()] = `${PATH}/${FOLDER_PARENT}/${FILENAME}`;
        };
    };
    async SUB_FOLDERS(DATA, AGGREGATOR, PATH) {
        const SUB_FOLDER_TAGS = Object.keys(DATA);
        for (let index = 0; index < SUB_FOLDER_TAGS.length; index++) {
            const TAG = SUB_FOLDER_TAGS[index];
            if (TAG !== 'FOLDERS' && TAG !== 'FILES') {
                let FOLDER_ARRAY = DATA[TAG];
                for (let INDEX_SUBFOLDER = 0; INDEX_SUBFOLDER < FOLDER_ARRAY.length; INDEX_SUBFOLDER++) {
                    const SUBFOLDERS = FOLDER_ARRAY[INDEX_SUBFOLDER];
                    AGGREGATOR[SUBFOLDERS] = `${PATH}/${TAG}/${SUBFOLDERS}`;
                }
            };
        }
    };

    // ========== //
    // ## LOOP ## //
    // ========== //

    async CATEGORY_LOOP(TEXT_DATA) {
        const KEYS_Category = Object.keys(TEXT_DATA);
        LOOP_Category: for (let INDEX_CATEGORY = 0; INDEX_CATEGORY < KEYS_Category.length; INDEX_CATEGORY++) {
            const OBJECT_Category = TEXT_DATA[KEYS_Category[INDEX_CATEGORY]];
            await this.STYLE_LOOP(OBJECT_Category, KEYS_Category[INDEX_CATEGORY]);
        };
    };
    async STYLE_LOOP(CATEGORY_DATA, CATEGORY_NAME) {
        const KEYS_Style = Object.keys(CATEGORY_DATA);
        for (let INDEX_STYLE = 0; INDEX_STYLE < KEYS_Style.length; INDEX_STYLE++) {
            const ARRAY_Style = CATEGORY_DATA[KEYS_Style[INDEX_STYLE]];
            await this.PATH_LOOP(CATEGORY_NAME, KEYS_Style[INDEX_STYLE], ARRAY_Style);
        }
    };
    async PATH_LOOP(CATEGORY_NAME, STYLE_NAME, STYLE_DATA) {
        for (let INDEX_FILE = 0; INDEX_FILE < STYLE_DATA.length; INDEX_FILE++) {
            const NAME_File = STYLE_DATA[INDEX_FILE];
            this.TEXT_PATHS[NAME_File] = `${this.PATH_CUPBOARD}/TEXT/${CATEGORY_NAME}/${CATEGORY_NAME}_${STYLE_NAME}_${NAME_File}.json`;
        }
    };

    // ============== //
    // ## SECTIONS ## //
    // ============== //

    /**
     * ## INITIALISE PATHS FOR THE CUPBOARD
     */
    async INITIALISE_CUPBOARD(DATA) {
        await this.LEVEL_ONE(DATA.FOLDERS, this.AGGREGATION_CUPBOARD_PATHS, this.MAIN_PATHS.CUPBOARD);
        await this.FILES(DATA.FILES, this.AGGREGATION_CUPBOARD_PATHS.FILES, this.MAIN_PATHS.CUPBOARD);
        await this.SUB_FOLDERS(DATA, this.AGGREGATION_CUPBOARD_PATHS, this.MAIN_PATHS.CUPBOARD);
        this.CUPBOARD = this.AGGREGATION_CUPBOARD_PATHS;
    };
    /**
     * ## INITIALISE PATHS FOR NOVA
     */
    async INITIALISE_NOVA(DATA) {
        await this.LEVEL_ONE(DATA.FOLDERS, this.AGGREGATION_NOVA_PATHS, this.MAIN_PATHS.NOVA);
        await this.FILES(DATA.FILES, this.AGGREGATION_NOVA_PATHS.FILES, this.MAIN_PATHS.NOVA);
        await this.SUB_FOLDERS(DATA, this.AGGREGATION_NOVA_PATHS, this.MAIN_PATHS.NOVA);
        this.NOVA = this.AGGREGATION_NOVA_PATHS;
    };
    /**
     * ## INITIALISE PATHS FOR THE ARCHIVE
     */
    async INITIALISE_ARCHIVE(DATA) {
        await this.LEVEL_ONE(DATA.FOLDERS, this.AGGREGATION_ARCHIVE_PATHS, this.MAIN_PATHS.ARCHIVE);
        await this.FILES(DATA.FILES, this.AGGREGATION_ARCHIVE_PATHS.FILES, this.MAIN_PATHS.ARCHIVE);
        await this.SUB_FOLDERS(DATA, this.AGGREGATION_ARCHIVE_PATHS, this.MAIN_PATHS.ARCHIVE);
        this.ARCHIVE = this.AGGREGATION_ARCHIVE_PATHS;
    };
    /**
     * ## INITIALISE PATHS FOR THE EXPLORER
     */
    async INITIALISE_EXPLORER(DATA) {
        await this.LEVEL_ONE(DATA.FOLDERS, this.AGGREGATION_EXPLORER_PATHS, this.MAIN_PATHS.EXPLORER);
        await this.FILES(DATA.FILES, this.AGGREGATION_EXPLORER_PATHS.FILES, this.MAIN_PATHS.EXPLORER);
        await this.SUB_FOLDERS(DATA, this.AGGREGATION_EXPLORER_PATHS, this.MAIN_PATHS.EXPLORER);
        this.EXPLORER = this.AGGREGATION_EXPLORER_PATHS;
    };
    /**
     * ## INITIALISE PATHS FOR FONTS
     */
    async INITIALISE_FONTS(DATA) {

    };
    /**
     * ## INITIALISE PATHS FOR THE SETTINGS FOLDER
     */
    async INITIALISE_SETTINGS(DATA) {
        await this.FILES(DATA.FILES, this.AGGREGATION_SETTINGS_PATHS.FILES, this.MAIN_PATHS.SETTINGS);
        this.SETTINGS = this.AGGREGATION_SETTINGS_PATHS;
    };
    /**
     * ## LOAD LANGUAGE ROOT (TOADSTOOL) PATHS
     */
    async INITIALISE_TOADSTOOL(DATA) {
        await this.LEVEL_ONE(DATA.FOLDERS, this.AGGREGATION_TOADSTOOL_PATHS, this.MAIN_PATHS.TOADSTOOL);
        await this.FILES(DATA.FILES, this.AGGREGATION_TOADSTOOL_PATHS.FILES, this.MAIN_PATHS.TOADSTOOL);
        await this.SUB_FOLDERS(DATA, this.AGGREGATION_TOADSTOOL_PATHS, this.MAIN_PATHS.TOADSTOOL);
        this.TOADSTOOL = this.AGGREGATION_TOADSTOOL_PATHS;
    };
    /**
     * ## INITIALISE PATHS FOR THE USER LANGUAGE FOLDER
     */
    async INITIALISE_LANGUAGE(DATA) {
        await this.LEVEL_ONE(DATA.FOLDERS, this.AGGREGATION_LANGUAGE_PATHS, this.MAIN_PATHS.LANGUAGES);
        this.LANGUAGES = this.AGGREGATION_LANGUAGE_PATHS;
    };
    /**
     * ## INITIALISE PATHS FOR THE ROUTES FOLDER
     */
    async INITIALISE_ROUTES(DATA) {
        await this.FILES(DATA.FILES, this.AGGREGATION_ROUTES_PATHS.FILES, this.MAIN_PATHS.ROUTES);
        this.ROUTES = this.AGGREGATION_ROUTES_PATHS;
    };

    // ========== //
    // ## FILE ## //
    // ========== //

    /**
     * ## CUPBOARD TEMPLATE
     */
    #CUPBOARD_TEMPLATE() {
        return {
            "FOLDERS": ["USERS", "ROUTES", "MEMORY", "TEXT", "PANTRY"],
            "USERS": ["LILYPAD"],
            "TEXT": ["WELCOME"],
            "FILES": {
                "Frogs.json": "USERS",
                "ResidentFrog.json": "USERS",
                "User.json": "ROUTES",
                "Files.json": "PANTRY",
                "Session.json": "PANTRY",
                "Tree.json": "PANTRY",
                "SessionMemory.json": "MEMORY"
            },
            "TEXT_FILES": {
                "WELCOME": {
                    "BUTTON": ["ANALYSE", "NEW"],
                    "INPUT": ["NAME", "PASSWORD"]
                }
            }
        }
    };
    /**
     * ## ARCHIVE TEMPLATE
     */
    #ARCHIVE_TEMPLATE() {
        return {
            "FOLDERS": ["MEMORY", "SQLITE"],
            "FILES": {},
            "TEXT_FILES": {}
        }
    };
    /**
     * ## NOVA TEMPLATE
     */
    #NOVA_TEMPLATE() {
        return {
            "FOLDERS": ["GAMES"],
            "GAMES": ["POKEMON"],
            "FILES": {
                "Pokemon_Party.json": "GAMES/POKEMON",
                "Pokemon_Database.json": "GAMES/POKEMON",
                "Pokemon_Elements.json": "GAMES/POKEMON"
            },
            "TEXT_FILES": {}
        }
    };
    /**
     * ## EXPLORER TEMPLATE
     */
    #EXPLORER_TEMPLATE(){
        return {
            "FOLDERS": ["DATABASE", "MEMORY"],
            "DATABASE": ["KESSIKAYA"],
            "FILES": {

            },
            "TEXT_FILES": {}
        }
    };
    /**
     * ## FONT TEMPLATES
     */
    #FONT_TEMPLATE() {

    };
    /**
     * ## LANGUAGE ROOT TEMPLATE
     */
    #LANGUAGE_ROOT_TEMPLATE() {
        return {
            "FOLDERS": ["ENGLISH", "GRAMMAR", "MEMORY", "OPTIONS"],
            "ENGLISH": ["STRUCTURE", "VOCAB"],
            "FILES": {
                "English_Adjex.js": "ENGLISH/STRUCTURE",
                "English_Adverb.js": "ENGLISH/STRUCTURE",
                "English_Nouns.js": "ENGLISH/STRUCTURE",
                "English_Sentence.js": "ENGLISH/STRUCTURE",
                "English_Verbs.js": "ENGLISH/STRUCTURE",
                "Vocab_Adjex.json": "ENGLISH/VOCAB",
                "Vocab_Adverb.json": "ENGLISH/VOCAB",
                "Vocab_Nouns.json": "ENGLISH/VOCAB",
                "Vocab_Pronouns.json": "ENGLISH/VOCAB",
                "Vocab_Verbs.json": "ENGLISH/VOCAB",
                "English.js": "GRAMMAR",
                "Fragments.json": "MEMORY",
                "Phrases.json": "MEMORY",
                "LANGUAGES.json": "OPTIONS",
                "MOOD.json": "OPTIONS",
                "TENSE.json": "OPTIONS"
            },
            "TEXT_FILES": {}
        }
    };
    /**
     * ## LANGUAGE USER TEMPLATE
     */
    #LANGUAGE_USER_TEMPLATE(){
        return {
            "FOLDERS": ["GRAMMAR", "MEMORY", "OPTIONS"],
            "FILES": {},
            "TEXT_FILES": {}
        }
    };
    /**
     * ## ROUTE TEMPLATE
     */
    #ROUTES_TEMPLATE(){
        return {
            "FOLDERS": [],
            "FILES": {
                "Explorer.json": "",
                "Fonts.json": "",
                "Languages": ""
            },
            "TEXT_FILES": {}
        };
    };
    /**
     * ## SETTNGS TEMPLATE
     */
    #SETTINGS_TEMPLATE(){
        return {
            "FOLDERS": [],
            "FILES": {
                "Mushroom_Settings.json": ""
            },
            "TEXT_FILES": {}
        }
    };
};

