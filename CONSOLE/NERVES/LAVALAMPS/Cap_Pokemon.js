import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Pokemon extends Renderer{

    constructor({
        POKEMON_CONFIG_BOX = 0,
        POKEMON_CONFIG_BOX_CONSOLE = 0,
        POKEMON_CONFIG_POKEDEX = 0,
        POKEMON_CONFIG_POKEDEX_CONSOLE = 0,
        POKEMON_CONFIG_PIXELDEX = 0,
        POKEMON_CONFIG_PIXELDEX_CONSOLE = 0
    }) {


        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_BOX = POKEMON_CONFIG_BOX;
        this.PATH_POKEDEX = POKEMON_CONFIG_POKEDEX;
        this.PATH_PIXELDEX = POKEMON_CONFIG_PIXELDEX;

        this.PATH_CONSOLE_BOX = POKEMON_CONFIG_BOX_CONSOLE;
        this.PATH_CONSOLE_POKEDEX = POKEMON_CONFIG_POKEDEX_CONSOLE;
        this.PATH_CONSOLE_PIXELDEX = POKEMON_CONFIG_PIXELDEX_CONSOLE

        // ========== //
        // ## LIST ## //
        // ========== //

        this.LIST_BOX_YELLOW = 'UNSET';
        this.LIST_POKEDEX_YELLOW = 'UNSET';

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_BOX = {
            YELLOW: {}
        };
        this.DATA_POKEDEX = {
            YELLOW: {}
        };
        this.DATA_PIXELDEX = {
            YELLOW: {}
        }
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        // ========= //
        // << BOX >> //
        // ========= //

        await this.READ_BOX_LIST();
        await this.READ_BOX_DATA();

        // ============== //
        // << PIXELDEX >> //
        // ============== //

        await this.READ_PIXELDEX_LIST();
        await this.READ_PIXELDEX_DATA();

        // ============= //
        // << POKEDEX >> //
        // ============= //

        await this.READ_POKEDEX_LIST();
        await this.READ_POKEDEX_DATA();

        return {
            BOX: {
                DATA: this.DATA_BOX,
                LIST: {
                    YELLOW: this.LIST_BOX_YELLOW
                }
            },
            POKEDEX: {
                DATA: this.DATA_POKEDEX,
                LIST: {
                    YELLOW: this.LIST_POKEDEX_YELLOW
                }
            },
            PIXELDEX: {
                DATA: this.DATA_PIXELDEX,
                LIST: {
                    YELLOW: this.LIST_PIXELDEX_YELLOW
                }
            }
        }
    };

    // ========= //
    // ## BOX ## //
    // ========= //

    async READ_BOX_DATA() {
        await this.READ_BOX_DATA_YELLOW();
    };
    async READ_BOX_LIST() {
        await this.READ_BOX_LIST_YELLOW();
    };

    // ============= //
    // ## POKEDEX ## // 
    // ============= //

    async READ_POKEDEX_DATA() {
        await this.READ_POKEDEX_DATA_YELLOW()
    };
    async READ_POKEDEX_LIST() {
        await this.READ_POKEDEX_LIST_YELLOW()
    }

    // ============== //
    // ## PIXELDEX ## //
    // ============== //

    async READ_PIXELDEX_DATA() {
        await this.READ_PIXELDEX_DATA_YELLOW()
    };
    async READ_PIXELDEX_LIST() {
        await this.READ_PIXELDEX_LIST_YELLOW()
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async READ_BOX_LIST_YELLOW() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE_BOX}/ListYellow.json`;
        this.LIST_BOX_YELLOW = JSON.parse(await this.READ());
    };
    async READ_POKEDEX_LIST_YELLOW() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE_POKEDEX}/KantoList.json`;
        this.LIST_POKEDEX_YELLOW = JSON.parse(await this.READ());
    };
    async READ_PIXELDEX_LIST_YELLOW() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE_PIXELDEX}/KantoList.json`;
        this.LIST_PIXELDEX_YELLOW = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async READ_BOX_DATA_YELLOW() {
        for (let INDEX_BOX = 0; INDEX_BOX < this.LIST_BOX_YELLOW.length; INDEX_BOX++) {
            const BOX = this.LIST_BOX_YELLOW[INDEX_BOX];
            this.RENDERER_PATH = `${this.PATH_BOX}/YELLOW/${BOX}.json`;
            this.DATA_BOX.YELLOW[BOX] = JSON.parse(await this.READ())
        }
    };
    async READ_POKEDEX_DATA_YELLOW() {
        for (let INDEX_POKEMON = 0; INDEX_POKEMON < this.LIST_POKEDEX_YELLOW.length; INDEX_POKEMON++) {
            const POKEMON = this.LIST_POKEDEX_YELLOW[INDEX_POKEMON];
            this.RENDERER_PATH = `${this.PATH_POKEDEX}/KANTO/${POKEMON}.json`;
            this.DATA_POKEDEX.YELLOW[POKEMON] = JSON.parse(await this.READ())
        }
    };
    async READ_PIXELDEX_DATA_YELLOW() {
        for (let INDEX_PIXELDEX = 0; INDEX_PIXELDEX < this.LIST_PIXELDEX_YELLOW.length; INDEX_PIXELDEX++) {
            const PIXELDEX = this.LIST_PIXELDEX_YELLOW[INDEX_PIXELDEX];
            this.RENDERER_PATH = `${this.PATH_PIXELDEX}/KANTO/${PIXELDEX}.json`;
            this.DATA_PIXELDEX.YELLOW[PIXELDEX] = JSON.parse(await this.READ())
        }
    };

}