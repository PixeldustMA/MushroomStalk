import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Manager_Segment extends Stalk{

    constructor({
        SEGMENT_CONFIG_ACTIVE_VALUE = 0
    }){

        // =========== //
        // ## PATHS ## //
        // =========== //

        // =========== //
        // << FILES >> //
        // =========== //

        this.PATH_FILE_HEADER = 'UNSET';
        this.PATH_LIST_HEADERS = 'UNSET';

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.ACTIVE_SEGMENT = SEGMENT_CONFIG_ACTIVE_VALUE;

        // =========== //
        // ## LISTS ## //
        // =========== //

        this.LIST_HEADERS = [];
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async #INITIALISE() {
        await this.#LOAD_SESSION();
        await this.#LOAD_PATHS();
        await this.#LOAD_LISTS();
    };

    // ========== //
    // ## LOAD ## //
    // ========== //

    async #LOAD_SESSION(){
        await this.REQUEST_SESSION_NOVA();
    };
    async #LOAD_PATHS() {
        this.PATH_FILE_HEADER = `${this.SESSION.PATHS.NOVA.HEADER}/${this.ACTIVE_SEGMENT}.json`;
        this.PATH_LIST_HEADERS = this.SESSION.PATHS.NOVA.LISTS.HEADERS;
    };
    async #LOAD_LISTS() {
        this.LIST_HEADERS = this.SESSION.NOVA.LISTS.HEADERS;
    };

    // ============ //
    // ## INSERT ## //
    // ============ //

    async INSERT_HEADER(){
        await this.#INITIALISE();
        await this.#HEADER_BASE_FILE();
        await this.#HEADER_LIST();
    };

    // ================ //
    // ## BASE FILES ## //
    // ================ //

    async #HEADER_BASE_FILE() {
        this.RENDERER_PATH = this.PATH_FILE_HEADER;
        this.RENDERER_DATA = this.#TEMPLATE_HEADER();
        await this.SAVE();
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #HEADER_LIST(){
        this.RENDERER_PATH = this.PATH_LIST_HEADERS;
        this.LIST_HEADERS.push(this.ACTIVE_SEGMENT);
        this.RENDERER_DATA = this.LIST_HEADERS;
        await this.SAVE();
    };

    // =============== //
    // ## TEMPLATES ## //
    // =============== //

    #TEMPLATE_HEADER(){
        return {
            DESCRIPTION_CODE: '',
            SUBTITLES: []
        };
    };
}