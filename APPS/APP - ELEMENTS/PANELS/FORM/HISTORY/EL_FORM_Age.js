import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Age {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_AGE = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_AGE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_DISPLAY_AGE = 'UNSET';

    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_AGE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_AGE.append(...[
            this.HEADER_AGE,
            this.LABEL_DISPLAY_AGE
        ]);
        return this.WRAPPER_AGE;
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
        this.HEADER_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Category-Name'
        }).INIT();

        this.HEADER_AGE.innerHTML = 'AGE::';
    };
    async #LABELS() {
        this.LABEL_DISPLAY_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
        }).INIT();

        this.LABEL_DISPLAY_AGE.innerHTML = 'Not Set';
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << GET >> //
    // ========= //

    GET_AGE() {return this.LABEL_DISPLAY_AGE.innerHTML};

    // ========= //
    // << SET >> //
    // ========= //
    
    SET_AGE(PARAMETER_VALUE) {this.LABEL_DISPLAY_AGE.innerHTML = PARAMETER_VALUE;}

};