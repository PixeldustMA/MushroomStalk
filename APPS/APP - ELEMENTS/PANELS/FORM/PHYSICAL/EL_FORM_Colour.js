import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Colour {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_COLOUR = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_COLOUR = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_DISPLAY_COLOUR = 'UNSET';

    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_COLOUR = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_COLOUR.append(...[
            this.HEADER_COLOUR,
            this.LABEL_DISPLAY_COLOUR
        ]);
        return this.WRAPPER_COLOUR;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#HEADERS();
        await this.#LABELS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Category-Name'
        }).INIT();

        this.HEADER_COLOUR.innerHTML = 'COLOUR::';
    };
    async #LABELS() {
        this.LABEL_DISPLAY_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
        }).INIT();

        this.LABEL_DISPLAY_COLOUR.innerHTML = 'Not Set';
        this.LABEL_DISPLAY_COLOUR.contentEditable = true;
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << GET >> //
    // ========= //

    GET_COLOUR() {return this.LABEL_DISPLAY_COLOUR.innerHTML};

    // ========= //
    // << SET >> //
    // ========= //
    
    SET_COLOUR(PARAMETER_VALUE) {this.LABEL_DISPLAY_COLOUR.innerHTML = PARAMETER_VALUE;}

}