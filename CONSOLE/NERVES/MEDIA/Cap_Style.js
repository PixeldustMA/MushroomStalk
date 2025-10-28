import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Style extends Renderer{

    constructor({
        STYLE_CONFIG_CONSOLE = 0,
        STYLE_CONFIG_STYLE = 0
    }) {

        super();

        this.PATH_CONSOLE = STYLE_CONFIG_CONSOLE;
        this.PATH_STYLE = STYLE_CONFIG_STYLE; 

        this.DATA_STYLE = {};
        this.LIST_STYLE = [];
    };


    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#GENERATE_LIST_STYLE();
        await this.#GENERATE_DATA_STYLE();

        return {
                DATA: this.DATA_STYLE,
                LIST: this.LIST_STYLE
        }
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #GENERATE_LIST_STYLE() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/StyleList.json`;
        this.LIST_STYLE = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #GENERATE_DATA_STYLE() {
        for (let INDEX_STYLE = 0; INDEX_STYLE < this.LIST_STYLE.length; INDEX_STYLE++) {
            const STYLE = this.LIST_STYLE[INDEX_STYLE];
            this.RENDERER_PATH = `${this.PATH_STYLE}/${STYLE}.json`;
            console.log(this.RENDERER_PATH)
            this.DATA_STYLE[STYLE] = JSON.parse(await this.READ())
        };
    };
}