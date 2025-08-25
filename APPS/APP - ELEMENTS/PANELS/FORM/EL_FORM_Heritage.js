import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_FORM_Dragons from "./HERITAGE/EL_FORM_Dragons.js";
import EL_FORM_Elders from "./HERITAGE/EL_FORM_Elders.js";
import EL_FORM_Surname from "./HERITAGE/EL_FORM_Surname.js";

export default class EL_FORM_Heritage {

    constructor() {

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_HERITAGE = 'UNSET';

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PAGE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_SURNAME = new EL_FORM_Surname();
        this.BLOCK_DRAGON = new EL_FORM_Dragons();
        this.BLOCK_ELDER = new EL_FORM_Elders();
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_HERITAGE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_HERITAGE.append(...[
            this.HEADER_PAGE,
            this.BLOCK_SURNAME.DRAW(),
            this.BLOCK_DRAGON.DRAW(),
            this.BLOCK_ELDER.DRAW()
        ]);
        return this.WRAPPER_HERITAGE;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#HEADERS();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Taxonomy-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'HERITAGE';
    };
    async #BLOCKS() {
        await this.BLOCK_SURNAME.INITIALISE();
        await this.BLOCK_DRAGON.INITIALISE();
        await this.BLOCK_ELDER.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << SET >> //
    // ========= //

    SET_SURNAME(PARAMETER_VALUE) {this.BLOCK_SURNAME.SET_SURNAME(PARAMETER_VALUE)};
    async SET_DRAGONS(PARAMETER_VALUE) {await this.BLOCK_DRAGON.SET_DRAGON(PARAMETER_VALUE)};
    async SET_ELDERS(PARAMETER_VALUE) {await this.BLOCK_ELDER.SET_ELDER(PARAMETER_VALUE)};

    // ========= //
    // << GET >> //
    // ========= //

    GET_SURNAME() {return this.BLOCK_SURNAME.GET_SURNAME()};
    GET_DRAGONS() {return this.BLOCK_DRAGON.GET_DRAGONS()};
    GET_ELDERS() {return this.BLOCK_ELDER.GET_ELDERS()}
};