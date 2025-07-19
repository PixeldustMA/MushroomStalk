import Mycology from "../../APP - MYCOLOGY/Mycology.js";

export default class EL_Mycology extends Mycology{

    constructor({
        MYCOLOGY_CONFIG_PATH_CONSOLE = 0,
        MYCOLOGY_CONFIG_PATH_CATEGORY = 0,
        MYCOLOGY_CONFIG_PATH_ELEMENT = 0,
        MYCOLOGY_CONFIG_PATH_DESCRIPTION = 0
    }){
        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_CONSOLE = MYCOLOGY_CONFIG_PATH_CONSOLE;
        this.PATH_CATEGORY = MYCOLOGY_CONFIG_PATH_CATEGORY;
        this.PATH_ELEMENT = MYCOLOGY_CONFIG_PATH_ELEMENT;
        this.PATH_DESCRIPTION = MYCOLOGY_CONFIG_PATH_DESCRIPTION;
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_ELEMENT() {

        await this.#ELEMENT_FOLDERS();
        await this.#ELEMENT_FILES();
    };

    // =============== //
    // ## TOP LEVEL ## //
    // =============== //

    async #ELEMENT_FOLDERS() {
        await this.#ELEMENT_CONSOLE();
        await this.#ELEMENT_CATEGORY();
        await this.#ELEMENT_ELEMENT();
        await this.#ELEMENT_DESCRIPTION();
    };
    async #ELEMENT_FILES() {
        await this.#ELEMENT_CATEGORY_LIST();
        await this.#ELEMENT_RADIENS_LIST();
        await this.#ELEMENT_ELEMENT_LIST();
        await this.#ELEMENT_FRAGMENT_LIST();
        await this.#ELEMENT_MALRADI_LIST();
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    async #ELEMENT_CONSOLE() {
        this.PATH_ACTIVE = this.PATH_CONSOLE;
        await this.MYCOLOGY_BUILD_FOLDER();
    };
    async #ELEMENT_CATEGORY() {
        this.PATH_ACTIVE = this.PATH_CATEGORY;
        await this.MYCOLOGY_BUILD_FOLDER();
    };
    async #ELEMENT_ELEMENT() {
        this.PATH_ACTIVE = this.PATH_ELEMENT;
        await this.MYCOLOGY_BUILD_FOLDER();
    };
    async #ELEMENT_DESCRIPTION() {
        this.PATH_ACTIVE = this.PATH_DESCRIPTION;
        await this.MYCOLOGY_BUILD_FOLDER();
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    async #ELEMENT_CATEGORY_LIST() {
        this.PATH_ACTIVE = `${this.PATH_CONSOLE}/CategoryList.json`;
        this.DATA_ACTIVE = [];
        await this.MYCOLOGY_BUILD_FILE();
    };
    async #ELEMENT_ELEMENT_LIST() {
        this.PATH_ACTIVE = `${this.PATH_CONSOLE}/ElementList.json`;
        this.DATA_ACTIVE = [];
        await this.MYCOLOGY_BUILD_FILE();
    };
    async #ELEMENT_RADIENS_LIST() {
        this.PATH_ACTIVE = `${this.PATH_CONSOLE}/RadiensList.json`;
        this.DATA_ACTIVE = [];
        await this.MYCOLOGY_BUILD_FILE();
    };
    async #ELEMENT_FRAGMENT_LIST() {
        this.PATH_ACTIVE = `${this.PATH_CONSOLE}/FragmentList.json`;
        this.DATA_ACTIVE = [];
        await this.MYCOLOGY_BUILD_FILE();
    };
    async #ELEMENT_MALRADI_LIST() {
        this.PATH_ACTIVE = `${this.PATH_CONSOLE}/MalradiList.json`;
        this.DATA_ACTIVE = [];
        await this.MYCOLOGY_BUILD_FILE();
    };
}