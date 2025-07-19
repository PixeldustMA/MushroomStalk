import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Category {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_CATEGORY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_CATEGORY = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_DISPLAY_CATEGORY = 'UNSET';

    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_CATEGORY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CATEGORY.append(...[
            this.HEADER_CATEGORY,
            this.LABEL_DISPLAY_CATEGORY
        ]);
        return this.WRAPPER_CATEGORY;
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
        this.HEADER_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Category-Name'
        }).INIT();

        this.HEADER_CATEGORY.innerHTML = 'CATEGORY::';
    };
    async #LABELS() {
        this.LABEL_DISPLAY_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
        }).INIT();

        this.LABEL_DISPLAY_CATEGORY.innerHTML = 'Not Set';
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << GET >> //
    // ========= //

    GET_CATEGORY() {return this.LABEL_DISPLAY_CATEGORY.innerHTML};

    // ========= //
    // << SET >> //
    // ========= //
    
    SET_CATEGORY(PARAMETER_VALUE) {this.LABEL_DISPLAY_CATEGORY.innerHTML = PARAMETER_VALUE;}

}