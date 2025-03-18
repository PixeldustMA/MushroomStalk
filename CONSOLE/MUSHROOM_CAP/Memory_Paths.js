import { Renderer } from "../LUNGS/Renderer.js";

export default class M_Paths extends Renderer{
    constructor(){

        super();

        this.MEMORY = {
            CUPBOARD: {}
        };

        // ====================== //
        // << AGGREGATED PATHS >> //
        // ====================== //

        this.AGGREGATION_CUPBOARD_PATHS = {FILES: {}};
        this.AGGREGATION_NOVA_PATHS = {FILES: {}};

        // ===================== //
        // << TOP LEVEL PATHS >> //
        // ===================== //
        this.MAIN_PATHS = {
            MUSHROOM: 'UNSET',
            CUPBOARD: 'UNSET',
            NOVA: 'UNSET'
        };

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SETTINGS = {
            USERNAME: 'UNSET'
        };

        // ============ //
        // << MEMORY >> //
        // ============ //

        this.CUPBOARD = {};
        this.NOVA = {};
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
        await this.INITIALISE_NOVA(this.#NOVA_TEMPLATE());

        return {
            TOP: this.MAIN_PATHS,
            CUPBOARD: this.CUPBOARD,
            NOVA: this.NOVA
        };
    };

    // ======================= //
    // ## FOLDERS AND FILES ## //
    // ======================= //

    async TOP_LEVEL() {
        this.MAIN_PATHS.CUPBOARD = `${this.MAIN_PATHS.MUSHROOM}/CUPBOARD`;
        this.MAIN_PATHS.NOVA = `${this.MAIN_PATHS.MUSHROOM}/NOVA`;
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
    // ## SEKTIONS ## //
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
     * ## NOVA TEMPLATE
     */
    #NOVA_TEMPLATE() {
        return {
            "FOLDERS": ["GAMES"],
            "GAMES": ["POKEMON"],
            "FILES": {
                "Pokemon_Party.json": "GAMES",
                "Pokemon_Database.json": "GAMES",
                "Pokemon_Elements.json": "GAMES"
            },
            "TEXT_FILES": {}
        }
    };
};
