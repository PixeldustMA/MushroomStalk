import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Surname {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_SURNAME = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_SURNAME = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_DISPLAY_SURNAME = 'UNSET';

    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SURNAME = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SURNAME.append(...[
            this.HEADER_SURNAME,
            this.LABEL_DISPLAY_SURNAME
        ]);
        return this.WRAPPER_SURNAME;
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
        this.HEADER_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Category-Name'
        }).INIT();

        this.HEADER_SURNAME.innerHTML = 'SURNAME::';
    };
    async #LABELS() {
        this.LABEL_DISPLAY_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
        }).INIT();

        this.LABEL_DISPLAY_SURNAME.innerHTML = 'Not Set';
        this.LABEL_DISPLAY_SURNAME.contentEditable = true;
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << GET >> //
    // ========= //

    GET_SURNAME() {return this.LABEL_DISPLAY_SURNAME.innerHTML};

    // ========= //
    // << SET >> //
    // ========= //
    
    SET_SURNAME(PARAMETER_VALUE) {this.LABEL_DISPLAY_SURNAME.innerHTML = PARAMETER_VALUE;}

};