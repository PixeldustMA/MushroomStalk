import { Renderer } from "../LUNGS/Renderer.js";

export default class M_Chunk extends Renderer{

    /**
     * ## CHUNK MEMORY CONSTRUCTOR
     */
    constructor({
        CHUNK_CONFIG_PARTY_PATH = 0,
        CHUNK_CONFIG_DATABASE_PATH = 0,
        CHUNK_CONFIG_ELEMENTS_PATH
    }) {

        super();

        // ========== //
        // ## PATH ## //
        // ========== //

        this.PATH_POKEMON_PARTY = CHUNK_CONFIG_PARTY_PATH;
        this.PATH_POKEMON_DATABASE = CHUNK_CONFIG_DATABASE_PATH;
        this.PATH_POKEMON_ELEMENTS = CHUNK_CONFIG_ELEMENTS_PATH;

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_CHUNK = {
            PEN: 'UNSET',
            POKEMON: {
                PARTY: {
                    ONE: 'UNSET',
                    TWO: 'UNSET',
                    THREE: 'UNSET',
                    FOUR: 'UNSET',
                    FIVE: 'UNSET',
                    SIX: 'UNSET'
                },
                DATABASE: {},
                ELEMENTS: []
            }
        };
    };

    async INITIALISE_SESSION(){
        await this.LOAD_POKEMON_SESSION();
        return this.DATA_CHUNK;
    };
    SET_VALUE(PARAMETER_VALUE_NAME, PARAMETER_VALUE) {};
    #SET_PEN(PARAMETER_VALUE){this.DATA_CHUNK.PEN = PARAMETER_VALUE};
    async LOAD_POKEMON_SESSION() {

        this.RENDERER_PATH = this.PATH_POKEMON_PARTY;
        this.DATA_CHUNK.POKEMON.PARTY = JSON.parse(await this.READ());
        this.RENDERER_PATH = this.PATH_POKEMON_DATABASE;
        this.DATA_CHUNK.POKEMON.DATABASE = JSON.parse(await this.READ());
        this.RENDERER_PATH = this.PATH_POKEMON_ELEMENTS;
        this.DATA_CHUNK.POKEMON.ELEMENTS = JSON.parse(await this.READ());
        return this.DATA_CHUNK;
    };
    /**
     * ## ADD NEW POKEMON TO DATABASE
     */
    async NEW_POKEMON_DATABASE_ENTRY(PARAMETER_POKEMON_ENTRY, PARAMETER_POKEMON_NUMBER) {

        this.DATA_CHUNK.POKEMON.DATABASE[PARAMETER_POKEMON_NUMBER]= PARAMETER_POKEMON_ENTRY;
        this.RENDERER_DATA = this.DATA_CHUNK.POKEMON.DATABASE;
        this.RENDERER_PATH = this.PATH_POKEMON_DATABASE;
        await this.SAVE();
    };
    async SAVE_DATABASE(PARAMETER_NEW_DATABASE) {
        this.RENDERER_DATA = PARAMETER_NEW_DATABASE;
        this.RENDERER_PATH = this.PATH_POKEMON_DATABASE;
        await this.SAVE();
    };
}