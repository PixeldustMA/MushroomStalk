import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Genre extends Renderer{

    constructor({
        GENRE_CONFIG_CONSOLE = 0,
        GENRE_CONFIG_GENRE = 0,
        GENRE_CONFIG_SUBGENRE = 0
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_CONSOLE = GENRE_CONFIG_CONSOLE;
        this.PATH_GENRE = GENRE_CONFIG_GENRE; 
        this.PATH_SUBGENRE = GENRE_CONFIG_SUBGENRE

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_GENRE = {};
        this.LIST_GENRE = [];
    };


    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#GENERATE_LIST_GENRE();
        await this.#GENERATE_DATA_GENRE();

        return {
            DATA: this.DATA_GENRE,
            LIST: this.LIST_GENRE
        }
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #GENERATE_LIST_GENRE() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/GenreList.json`;
        this.LIST_GENRE = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #GENERATE_DATA_GENRE() {
        for (let INDEX_GENRE = 0; INDEX_GENRE < this.LIST_GENRE.length; INDEX_GENRE++) {
            const GENRE = this.LIST_GENRE[INDEX_GENRE];
            this.RENDERER_PATH = `${this.PATH_GENRE}/${GENRE}.json`;
            this.DATA_GENRE[GENRE] = JSON.parse(await this.READ())
        };
    };
}