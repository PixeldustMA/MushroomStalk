import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Songs extends Renderer{

    constructor({
        SONG_CONFIG_CONSOLE = 0,
        SONG_CONFIG_SONGS = 0
    }) {

        super();

        this.PATH_CONSOLE = SONG_CONFIG_CONSOLE;
        this.PATH_SONGS = SONG_CONFIG_SONGS; 

        this.DATA_SONG = {}
    };


    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#GENERATE_LIST_SONG();
        await this.#GENERATE_DATA_SONGS();

        return {
                DATA: this.DATA_SONG,
                LIST: this.LIST_SONG
        }
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #GENERATE_LIST_SONG() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/SongList.json`;
        this.LIST_SONG = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #GENERATE_DATA_SONGS() {
        for (let INDEX_SONGS = 0; INDEX_SONGS < this.LIST_SONG.length; INDEX_SONGS++) {
            const SONG = this.LIST_SONG[INDEX_SONGS];
            this.RENDERER_PATH = `${this.PATH_SONGS}/${SONG}.json`;
            console.log(this.RENDERER_PATH)
            this.DATA_SONG[SONG] = JSON.parse(await this.READ())
        };
    };
}