import Branches from "../../CONSOLE/LUNGS/Branches.js";

export default class ELEMENT_Manager extends Branches{

    constructor({
        ELEMENT_CONFIG_PATH_CONSOLE = 0,
        ELEMENT_CONFIG_PATH_CATEGORY = 0,
        ELEMENT_CONFIG_PATH_ELEMENT = 0,
        ELEMENT_CONFIG_CATEGORY_NAME = 0,
        ELEMENT_CONFIG_ELEMENT_NAME = 0,
        ELEMENT_CONFIG_CATEGORY_LIST = 0,
        ELEMENT_CONFIG_CATEGORY_DATA = 0,
        ELEMENT_CONFIG_ELEMENT_LOCATION = 0,
        ELEMENT_CONFIG_ELEMENT_ELDERS = [0,0]
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_CONSOLE = ELEMENT_CONFIG_PATH_CONSOLE;
        this.PATH_CATEGORY = ELEMENT_CONFIG_PATH_CATEGORY;
        this.PATH_ELEMENT = ELEMENT_CONFIG_PATH_ELEMENT;
 
        // =================== //
        // ## CATEGORY DATA ## //
        // =================== //

        this.TAG_CATEGORY = ELEMENT_CONFIG_CATEGORY_NAME;
        this.DATA_CATEGORY = ELEMENT_CONFIG_CATEGORY_DATA;

        // ================== //
        // ## ELEMENT DATA ## //
        // ================== //

        this.TAG_ELEMENT = ELEMENT_CONFIG_ELEMENT_NAME;
        this.LOCATION_DRAGON = ELEMENT_CONFIG_ELEMENT_LOCATION;
        this.CHARACTER_ELDERS = ELEMENT_CONFIG_ELEMENT_ELDERS;

        // =============== //
        // ## TEMPLATES ## //
        // =============== //

        this.ELEMENT_CATEGORY = {
            NAME: ''
        };
        this.ELEMENT = {
            NAME: 'ELEMENT NAME',
            CATEGORY: 'CATEGORY NAME',
            LOCATIONS: {
                DRAGON: 'PLANET NAME'
            },
            ELDER: {
                ONE: 'ELDER NAME',
                TWO: 'ELDER NAME'
            }
        }
        // =========== //
        // ## LISTS ## //
        // =========== //

        this.LIST_CATEGORY = ELEMENT_CONFIG_CATEGORY_LIST;
    };

    // ================= //
    // ## INSERTABLES ## //
    // ================= //

    async INSERT_CATEGORY() {

        // =========== //
        // << FILES >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_CATEGORY}/${this.TAG_CATEGORY}.json`;
        this.RENDERER_DATA = this.#GENERATE_CATEGORY_TEMPLATE();
        await this.SAVE();

        // =========== //
        // << LISTS >> //
        // =========== //

        await this.#UPDATE_LIST();
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/CategoryList.json`;
        this.RENDERER_DATA = this.LIST_CATEGORY;
        await this.SAVE();
    };
    async INSERT_ELEMENT() {

        // =========== //
        // << FILES >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_ELEMENT}/${this.TAG_ELEMENT}.json`;
        this.RENDERER_DATA = this.#GENERATE_ELEMENT_TEMPLATE();
        await this.SAVE();

        // ================ //
        // << CATEGORIES >> //
        // ================ //

        this.DATA_CATEGORY.ELEMENTS.push(this.TAG_ELEMENT);
        this.RENDERER_PATH = `${this.PATH_CATEGORY}/${this.TAG_CATEGORY}.json`;
        this.RENDERER_DATA = this.DATA_CATEGORY;
        await this.SAVE();
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    async #UPDATE_LIST() {
        this.LIST_CATEGORY.push(this.TAG_CATEGORY);
    };

    // =============== //
    // ## TEMPLATES ## //
    // =============== //

    #GENERATE_CATEGORY_TEMPLATE(){
        this.#SET_CATEGORY_NAME();
        this.ELEMENT_CATEGORY.ELEMENTS = [];
        return this.ELEMENT_CATEGORY;
    };
    #GENERATE_ELEMENT_TEMPLATE(){
        this.#SET_ELEMENT_NAME();
        this.#SET_ELEMENT_CATEGORY();
        this.#SET_ELEMENT_ELDERS();
        this.#SET_ELEMENT_PLANET();
        return this.ELEMENT;
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    #SET_CATEGORY_NAME() {
        this.ELEMENT_CATEGORY.NAME = this.TAG_CATEGORY;
    };
    #SET_ELEMENT_NAME() {
        this.ELEMENT.NAME = this.TAG_ELEMENT;
    };
    #SET_ELEMENT_CATEGORY() {
        this.ELEMENT.CATEGORY = this.TAG_CATEGORY;
    };
    #SET_ELEMENT_ELDERS() {
        this.ELEMENT.ELDER.ONE = this.CHARACTER_ELDERS[0];
        this.ELEMENT.ELDER.TWO = this.CHARACTER_ELDERS[1];
    };
    #SET_ELEMENT_PLANET() {
        this.ELEMENT.LOCATIONS.DRAGON = this.LOCATION_DRAGON;
    };
};