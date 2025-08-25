import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_FORM_Colour from "./PHYSICAL/EL_FORM_Colour.js";
import EL_FORM_Uses from "./PHYSICAL/EL_FORM_Uses.js";

export default class EL_FORM_Physical {

    constructor() {

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_PHYSICAL = 'UNSET';

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PAGE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_COLOURS = new EL_FORM_Colour();
        this.BLOCK_USES = new EL_FORM_Uses();
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_PHYSICAL = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_PHYSICAL.append(...[
            this.HEADER_PAGE,
            this.BLOCK_COLOURS.DRAW(),
            this.BLOCK_USES.DRAW()
        ]);
        return this.WRAPPER_PHYSICAL;
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

        this.HEADER_PAGE.innerHTML = 'PHYSICAL';
    };
    async #BLOCKS() {
        await this.BLOCK_COLOURS.INITIALISE();
        await this.BLOCK_USES.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << SET >> //
    // ========= //

    SET_COLOUR(PARAMETER_VALUE) {this.BLOCK_COLOURS.SET_COLOUR(PARAMETER_VALUE)};
    async SET_USES(PARAMETER_VALUE) {await this.BLOCK_USES.SET_USE(PARAMETER_VALUE)};

    // ========= //
    // << GET >> //
    // ========= //

    GET_COLOUR() {return this.BLOCK_COLOURS.GET_COLOUR()};
    GET_USES() {return this.BLOCK_USES.GET_USES()};

};