import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Description {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_DESCRIPTION = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_DESCRIPTION = 'UNSET';

        // =============== //
        // ## PARAGRAPH ## //
        // =============== //

        this.PARAGRAPH_DISPLAY_DESCRIPTION = 'UNSET';

    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DESCRIPTION = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DESCRIPTION.append(...[
            this.HEADER_DESCRIPTION,
            this.PARAGRAPH_DISPLAY_DESCRIPTION
        ]);
        return this.WRAPPER_DESCRIPTION;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#HEADERS();
        await this.#PARAGRAPHS();
        await this.#SETTINGS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Category-Description'
        }).INIT();

        this.HEADER_DESCRIPTION.innerHTML = 'DESCRIPTION';
    };
    async #PARAGRAPHS() {
        this.PARAGRAPH_DISPLAY_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'p',
            CREATE_CONFIG_PERSONALITY_ID: 'PARAGRAPH_Category-Description'
        }).INIT();

        this.PARAGRAPH_DISPLAY_DESCRIPTION.innerHTML = 'Not Set';
    };
    async #SETTINGS() {
        this.PARAGRAPH_DISPLAY_DESCRIPTION.contentEditable = true;
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << GET >> //
    // ========= //

    GET_DESCRIPTION() {return this.PARAGRAPH_DISPLAY_DESCRIPTION.innerHTML};

    // ========= //
    // << SET >> //
    // ========= //
    
    SET_DESCRIPTION(PARAMETER_VALUE) {this.PARAGRAPH_DISPLAY_DESCRIPTION.innerHTML = PARAMETER_VALUE;}

};