import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Settings extends Renderer{

    constructor({
        SETTINGS_CONFIG_ROOT = 0,
        SETTINGS_CONFIG_PATHS = 0
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_ROOT = SETTINGS_CONFIG_ROOT;
        this.DATA_MUSHROOM = 'UNSET';
        this.DATA_LAVALAMPS = 'UNSET';
        this.DATA_MEDIA = 'UNSET';

        // ========== //
        // ## LIST ## //
        // ========== //

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_PATHS = SETTINGS_CONFIG_PATHS;
        this.DATA_MUSHROOM = {};
        this.DATA_LAVALAMPS = {};
        this.DATA_MEDIA = {};
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION_BASIC() {

        await this.#LOAD_PATHS_BASIC();
        await this.#READ_FILES_BASIC();
        // await this.#READ_LISTS();

        return {
            MUSHROOM: this.DATA_MUSHROOM
        }
    };
    async INITIALISE_SESSION_USERNAME() {

        await this.#LOAD_PATHS_USERNAME();
        await this.#READ_FILES_USERNAME();

        return {
            MUSHROOM: this.DATA_MUSHROOM,
            LAVALAMPS: this.DATA_LAVALAMPS,
            MEDIA: this.DATA_MEDIA
        }
    };

    // ============= //
    // ## LOADING ## //
    // ============= //

    // =========== //
    // << PATHS >> //
    // =========== //

    async #LOAD_PATHS_BASIC() {
        this.PATH_MUSHROOM = this.DATA_PATHS.FILES.MUSHROOM;
    };
    async #LOAD_PATHS_USERNAME() {
        this.PATH_MUSHROOM = this.DATA_PATHS.FILES.MUSHROOM;
        this.PATH_LAVALAMPS = this.DATA_PATHS.FILES.LAVALAMPS;
        this.PATH_MEDIA = this.DATA_PATHS.FILES.MEDIA;
        console.log(this.PATH_MEDIA)
    };

    // =========== //
    // << FILES >> //
    // =========== //

    async #READ_FILES_BASIC() {
        await this.#DATA_MUSHROOM();
    };
    async #READ_FILES_USERNAME() {
        await this.#DATA_MUSHROOM();
        await this.#DATA_LAVALAMPS();
        await this.#DATA_MEDIA();
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #DATA_MUSHROOM() {
        this.RENDERER_PATH = this.PATH_MUSHROOM;
        this.DATA_MUSHROOM = JSON.parse(await this.READ())
    };
    async #DATA_LAVALAMPS() {
        this.RENDERER_PATH = this.PATH_LAVALAMPS;
        this.DATA_LAVALAMPS = JSON.parse(await this.READ())
    };
    async #DATA_MEDIA() {
        this.RENDERER_PATH = this.PATH_MEDIA;
        this.DATA_MEDIA = JSON.parse(await this.READ())
    };
}