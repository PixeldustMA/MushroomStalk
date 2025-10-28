import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Routes extends Renderer{

    constructor({
        ROUTES_CONFIG_ROOT = 0,
        ROUTES_CONFIG_PATHS = 0
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_ROOT = ROUTES_CONFIG_ROOT;
        this.PATH_USER = 'UNSET';

        // ========== //
        // ## LIST ## //
        // ========== //

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_PATHS = ROUTES_CONFIG_PATHS;
        this.DATA_USER = {};

    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION_BASIC() {

        // await this.#LOAD_PATHS_BASIC();
        // await this.#READ_FILES_BASIC();
        // await this.#READ_LISTS();    

        return {
            ASSETS: await this.#DATA_ASSETS(),
            MEMORY: await this.#DATA_MEMORY()
        }
    };

    // ============= //
    // ## LOADING ## //
    // ============= //

    async #LOAD_PATHS_BASIC() {
        this.PATH_USER = this.DATA_PATHS.FILES.USERS;
    }; 
    async #READ_FILES_BASIC() {
        await this.#DATA_USER();
    };
    async #READ_LISTS() {
        
    };

    // ========== //
    // ## LIST ## //
    // ========== //


    // ========== //
    // ## DATA ## //
    // ========== //

    async #DATA_USER() {
        this.RENDERER_PATH = this.PATH_USER;
        this.DATA_USER = JSON.parse(await this.READ());
    };
    async #DATA_ASSETS() {
        return await this.AVAILABLE_ROUTES('ASSETS');
    }
    async #DATA_MEMORY() {
        return await this.AVAILABLE_ROUTES('MEMORY');
    }
}