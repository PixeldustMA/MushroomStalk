import Branches from "../../../CONSOLE/LUNGS/Branches.js";

export default class DB_Load extends Branches{

    constructor() {

        super();

        // ============== //
        // ## SETTINGS ## //
        // ============== //

        this.SETTINGS_PATHS = {
            ELEMENT: {
                ELEMENT: 'UNLOADED',
                CATEGORY: 'UNLOADED',
                CONSOLE: 'UNLOADED',
                DESCRIPTION: 'UNLOADED'
            }
        };
        this.SETTINGS_LISTS = {
            ELEMENT: {
                ELEMENT: 'UNLOADED'
            }
        };
        this.PATHS = 'UNLOADED';
    };

    // ================ //
    // ## INITIALISE ## //
    // ================ //

    async LOAD() {
        await this.#SESSIONS();
        await this.#PATHS();
        await this.#LISTS();
        return {
            PATHS: this.SETTINGS_PATHS,
            LISTS: this.SETTINGS_LISTS
        }
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #SESSIONS() {
        await this.REQUEST_SESSION_ELEMENT();
    };
    async #PATHS() {
        this.PATHS = this.SESSION.PATHS.WAR;
        await this.#LOAD_ELEMENT_PATHS();
    };
    async #LISTS() {
        await this.#LOAD_ELEMENT_LISTS();
    };

    // =========== //
    // ## PATHS ## //
    // =========== //

    async #LOAD_ELEMENT_PATHS() {
        this.SETTINGS_PATHS.ELEMENT.ELEMENT = this.PATHS.ELEMENTS.ELEMENTS;
        this.SETTINGS_PATHS.ELEMENT.CATEGORY = this.PATHS.ELEMENTS.CATEGORIES;
        this.SETTINGS_PATHS.ELEMENT.CONSOLE = this.PATHS.ELEMENTS.CONSOLE;
        this.SETTINGS_PATHS.ELEMENT.DESCRIPTION = this.PATHS.ELEMENTS.DESCRIPTION;
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    async #LOAD_ELEMENT_LISTS() {
        this.SETTINGS_LISTS.ELEMENT.ELEMENT = this.SESSION.ELEMENTS.LIST.ELEMENT;
        this.SETTINGS_LISTS.ELEMENT.RADIENS = this.SESSION.ELEMENTS.LIST.RADIENS;
        this.SETTINGS_LISTS.ELEMENT.MALRADI = this.SESSION.ELEMENTS.LIST.MALRADI;
        this.SETTINGS_LISTS.ELEMENT.FRAGMENT = this.SESSION.ELEMENTS.LIST.FRAGMENT;
        this.SETTINGS_LISTS.ELEMENT.CATEGORY = this.SESSION.ELEMENTS.LIST.CATEGORY;
    };
}