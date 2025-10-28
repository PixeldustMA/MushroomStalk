import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Authors extends Renderer{

    constructor({
        AUTHOR_CONFIG_CONSOLE = 0,
        AUTHOR_CONFIG_AUTHORS = 0
    }) {

        super();

        this.PATH_CONSOLE = AUTHOR_CONFIG_CONSOLE;
        this.PATH_LIBRARY = AUTHOR_CONFIG_AUTHORS; 

        this.DATA_AUTHOR = {}
    };


    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#GENERATE_LIST_AUTHOR();
        await this.#GENERATE_DATA_AUTHORS();

        return {
                DATA: this.DATA_AUTHOR,
                LIST: this.LIST_AUTHOR
        }
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #GENERATE_LIST_AUTHOR() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/AuthorList.json`;
        this.LIST_AUTHOR = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #GENERATE_DATA_AUTHORS() {
        for (let INDEX_AUTHORS = 0; INDEX_AUTHORS < this.LIST_AUTHOR.length; INDEX_AUTHORS++) {
            const AUTHOR = this.LIST_AUTHOR[INDEX_AUTHORS];
            this.RENDERER_PATH = `${this.PATH_LIBRARY}/${AUTHOR}.json`;
            this.DATA_AUTHOR[AUTHOR] = JSON.parse(await this.READ())
        };
    };
}