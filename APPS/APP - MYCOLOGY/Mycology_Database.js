import MYCOLOGY_Main from "./Mycology_Main.js";

export default class DB_Mycology extends MYCOLOGY_Main{

    constructor({
        DATABASE_CONFIG_PATHS = 0
    }){
        super();

        this.SESSION_PATH = DATABASE_CONFIG_PATHS;

        // =========== //
        // << PATHS >> //
        // =========== //

        this.PATH_TOP = 'UNSET';
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE(){
        await this.#LOAD_PATHS();
    };

    async RUN() {

        await this.INITIALISE();

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //

        await this.EXISTANCE_CHECK(this.PATH_TOP);
        await this.EXISTANCE_CHECK(this.PATH_ELEMENT_MAIN)
        await this.EXISTANCE_CHECK(this.PATH_ELEMENT)
        await this.EXISTANCE_CHECK(this.PATH_CATEGORY)
        await this.EXISTANCE_CHECK(this.PATH_ELEMENT_CONSOLE)
        await this.EXISTANCE_CHECK(this.PATH_ELEMENT_DESCRIPTION)

        // ================ //
        // << JSON FILES >> //
        // ================ //

        await this.EXISTANCE_FILE(this.PATH_ELEMENT_LIST, [])
        await this.EXISTANCE_FILE(this.PATH_CATEGORY_LIST, [])
        await this.EXISTANCE_FILE(this.PATH_MALRADI_LIST, [])
        await this.EXISTANCE_FILE(this.PATH_RADIENS_LIST, [])
        await this.EXISTANCE_FILE(this.PATH_FRAGMENT_LIST, [])
    };
    async #LOAD_PATHS() {

        await this.#LOAD_FOLDERS();
        await this.#LOAD_FILES();

    };
    async #LOAD_FOLDERS() {
        this.PATH_TOP = this.SESSION_PATH.ROOT.DATABASE.MAIN;
        this.PATH_ELEMENT_MAIN = this.SESSION_PATH.ROOT.DATABASE.ELEMENTS;
        this.PATH_ELEMENT = `${this.SESSION_PATH.DATABASE.ELEMENTS.ELEMENT.FOLDERS.ROOT}/ELEMENTS`;
        console.log(this.PATH_ELEMENT)
        this.PATH_CATEGORY = this.SESSION_PATH.DATABASE.ELEMENTS.CATEGORY.FOLDERS.CATEGORY;
        this.PATH_ELEMENT_CONSOLE = this.SESSION_PATH.DATABASE.ELEMENTS.ELEMENT.FOLDERS.CONSOLE;
        this.PATH_ELEMENT_DESCRIPTION = `${this.SESSION_PATH.ROOT.DATABASE.ELEMENTS}/DESCRIPTION`;
    };
    async #LOAD_FILES() {
        this.PATH_ELEMENT_LIST = `${this.SESSION_PATH.DATABASE.ELEMENTS.ELEMENT.FOLDERS.CONSOLE}/ElementList.json`;
        this.PATH_CATEGORY_LIST = `${this.SESSION_PATH.DATABASE.ELEMENTS.ELEMENT.FOLDERS.CONSOLE}/CategoryList.json`;
        this.PATH_RADIENS_LIST = `${this.SESSION_PATH.DATABASE.ELEMENTS.ELEMENT.FOLDERS.CONSOLE}/RadiensList.json`;
        this.PATH_FRAGMENT_LIST = `${this.SESSION_PATH.DATABASE.ELEMENTS.ELEMENT.FOLDERS.CONSOLE}/FragmentList.json`;
        this.PATH_MALRADI_LIST = `${this.SESSION_PATH.DATABASE.ELEMENTS.ELEMENT.FOLDERS.CONSOLE}/MalradiList.json`;
    }

};