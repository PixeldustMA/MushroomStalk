import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Books extends Renderer{

    constructor({
        BOOK_CONFIG_CONSOLE = 0,
        BOOK_CONFIG_BOOKS = 0
    }) {

        super();

        this.PATH_CONSOLE = BOOK_CONFIG_CONSOLE;
        this.PATH_BOOKS = BOOK_CONFIG_BOOKS; 

        this.DATA_BOOK = {}
    };


    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#GENERATE_LIST_BOOK();
        await this.#GENERATE_DATA_BOOKS();

        return {
                DATA: this.DATA_BOOK,
                LIST: this.LIST_BOOK
        }
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #GENERATE_LIST_BOOK() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/BookList.json`;
        this.LIST_BOOK = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #GENERATE_DATA_BOOKS() {
        for (let INDEX_BOOKS = 0; INDEX_BOOKS < this.LIST_BOOK.length; INDEX_BOOKS++) {
            const BOOK = this.LIST_BOOK[INDEX_BOOKS];
            this.RENDERER_PATH = `${this.PATH_BOOKS}/${BOOK}.json`;
            this.DATA_BOOK[BOOK] = JSON.parse(await this.READ())
        };
    };
}