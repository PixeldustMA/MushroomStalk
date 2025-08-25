import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_FORM_Age from "./HISTORY/EL_FORM_Age.js";

export default class EL_FORM_History {

    constructor() {

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_HISTORY = 'UNSET';

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PAGE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_AGE = new EL_FORM_Age();
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_HISTORY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_HISTORY.append(...[
            this.HEADER_PAGE,
            this.BLOCK_AGE.DRAW()
        ]);
        return this.WRAPPER_HISTORY;
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

        this.HEADER_PAGE.innerHTML = 'HISTORY';
    };
    async #BLOCKS() {
        await this.BLOCK_AGE.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << SET >> //
    // ========= //

    SET_AGE(PARAMETER_VALUE) {this.BLOCK_AGE.SET_AGE(PARAMETER_VALUE)};

    // ========= //
    // << GET >> //
    // ========= //

    GET_AGE() {return this.BLOCK_AGE.GET_AGE()};
};