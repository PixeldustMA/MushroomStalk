import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Uses {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_USES = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_USES = 'UNSET';

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.USES = [];
    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_USES = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_USES.append(...[
            this.HEADER_USES,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_USES;
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
        this.HEADER_USES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Category-Name'
        }).INIT();

        this.HEADER_USES.innerHTML = 'USES';
    };
    async #LABELS() {
        this.LABEL_DISPLAY_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
        }).INIT();

        this.LABEL_DISPLAY_COLOUR.innerHTML = 'Not Set';
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << GET >> //
    // ========= //

    GET_USES() {return this.USES};

    // ========= //
    // << SET >> //
    // ========= //

    async SET_USE(PARAMETER_VALUE_ARRAY) {
        for (let INDEX_USE = 0; INDEX_USE < PARAMETER_VALUE_ARRAY.length; INDEX_USE++) {
            const TEXT = PARAMETER_VALUE_ARRAY[INDEX_USE];
            let LABEL = await new Create({
                CREATE_CONFIG_ELEMENT_TAG: 'label',
                CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
            }).INIT();
            LABEL.innerHTML = TEXT;
            this.WRAPPER_DISPLAY.append(LABEL);
            this.USES.push(TEXT);
        };
    };

}