import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Artists extends Renderer{

    constructor({
        ARTIST_CONFIG_CONSOLE = 0,
        ARTIST_CONFIG_ARTISTS = 0
    }) {

        super();

        this.PATH_CONSOLE = ARTIST_CONFIG_CONSOLE;
        this.PATH_ARTIST = ARTIST_CONFIG_ARTISTS; 

        this.DATA_ARTIST = {}
    };


    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#GENERATE_LIST_ARTIST();
        await this.#GENERATE_DATA_ARTISTS();

        return {
                DATA: this.DATA_ARTIST,
                LIST: this.LIST_ARTIST
        }
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #GENERATE_LIST_ARTIST() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/ArtistList.json`;
        this.LIST_ARTIST = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #GENERATE_DATA_ARTISTS() {
        for (let INDEX_ARTISTS = 0; INDEX_ARTISTS < this.LIST_ARTIST.length; INDEX_ARTISTS++) {
            const ARTIST = this.LIST_ARTIST[INDEX_ARTISTS];
            this.RENDERER_PATH = `${this.PATH_ARTIST}/${ARTIST}.json`;
            this.DATA_ARTIST[ARTIST] = JSON.parse(await this.READ())
        };
    };
}