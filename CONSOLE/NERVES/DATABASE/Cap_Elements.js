import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Elements extends Renderer{

    constructor({
        ELEMENT_CONFIG_CONSOLE = 0,
        ELEMENT_CONFIG_ELEMENTS = 0
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_CONSOLE = ELEMENT_CONFIG_CONSOLE;
        this.PATH_ELEMENT = ELEMENT_CONFIG_ELEMENTS; 

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_ELEMENT = {};
        this.DATA_CATEGORY = {};

        // ========== //
        // ## LIST ## //
        // ========== //

        this.LIST_ELEMENT = [];
        this.LIST_CATEGORY = [];
        this.LIST_RADIENS = [];
        this.LIST_FRAGMENT = [];
        this.LIST_MALRADI = [];
    };


    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#GENERATE_LIST_ELEMENT();
        await this.#GENERATE_LIST_CATEGORY();
        await this.#GENERATE_LIST_RADIENS();
        await this.#GENERATE_LIST_FRAGMENT();
        await this.#GENERATE_LIST_MALRADI();

        await this.#GENERATE_DATA_ELEMENTS();
        await this.#GENERATE_DATA_CATEGORYS();

        return {
                ELEMENT: {
                    DATA: this.DATA_ELEMENT,
                    LIST: this.LIST_ELEMENT
                },
                CATEGORY: {
                    DATA: this.DATA_CATEGORY,
                    LIST: {
                        CATEGORY: this.LIST_CATEGORY,
                        RADIENS: this.LIST_RADIENS,
                        FRAGMENT: this.LIST_FRAGMENT,
                        MALRADI: this.LIST_MALRADI
                    }
                }
        }
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #GENERATE_LIST_ELEMENT() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/ElementList.json`;
        this.LIST_ELEMENT = JSON.parse(await this.READ());
    };
    async #GENERATE_LIST_CATEGORY() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/CategoryList.json`;
        this.LIST_CATEGORY = JSON.parse(await this.READ());
    };
    async #GENERATE_LIST_RADIENS() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/RadiensList.json`;
        this.LIST_RADIENS = JSON.parse(await this.READ());
    };
    async #GENERATE_LIST_FRAGMENT() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/FragmentList.json`;
        this.LIST_FRAGMENT = JSON.parse(await this.READ());
    };
    async #GENERATE_LIST_MALRADI() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/MalradiList.json`;
        this.LIST_MALRADI = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #GENERATE_DATA_ELEMENTS() {
        for (let INDEX_ELEMENTS = 0; INDEX_ELEMENTS < this.LIST_ELEMENT.length; INDEX_ELEMENTS++) {
            const ELEMENT = this.LIST_ELEMENT[INDEX_ELEMENTS];
            this.RENDERER_PATH = `${this.PATH_ELEMENT}/ELEMENTS/${ELEMENT}.json`;
            this.DATA_ELEMENT[ELEMENT] = JSON.parse(await this.READ())
        };
    };
    async #GENERATE_DATA_CATEGORYS() {
        for (let INDEX_CATEGORYS = 0; INDEX_CATEGORYS < this.LIST_CATEGORY.length; INDEX_CATEGORYS++) {
            const CATEGORY = this.LIST_CATEGORY[INDEX_CATEGORYS];
            this.RENDERER_PATH = `${this.PATH_ELEMENT}/CATEGORY/${CATEGORY}.json`;
            this.DATA_CATEGORY[CATEGORY] = JSON.parse(await this.READ())
        };
    };

}