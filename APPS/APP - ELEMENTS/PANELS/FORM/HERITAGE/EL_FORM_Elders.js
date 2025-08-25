import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Elders {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_ELDERS = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_ELDERS = 'UNSET';

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.ELDERS = [];
    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ELDERS = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ELDERS.append(...[
            this.HEADER_ELDERS,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_ELDERS;
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
        this.HEADER_ELDERS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Category-Name'
        }).INIT();

        this.HEADER_ELDERS.innerHTML = 'ELDERS';
    };
    async #LABELS() {
        this.LABEL_DISPLAY_ELDERS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
        }).INIT();

        this.LABEL_DISPLAY_ELDERS.innerHTML = 'Not Set';
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << GET >> //
    // ========= //

    GET_USES() {return this.ELDERS};

    // ========= //
    // << SET >> //
    // ========= //

    async SET_ELDER(PARAMETER_VALUE_ARRAY) {
        for (let INDEX_ELDER = 0; INDEX_ELDER < PARAMETER_VALUE_ARRAY.length; INDEX_ELDER++) {
            const TEXT = PARAMETER_VALUE_ARRAY[INDEX_ELDER];
            let LABEL = await new Create({
                CREATE_CONFIG_ELEMENT_TAG: 'label',
                CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
            }).INIT();
            LABEL.innerHTML = TEXT;
            this.WRAPPER_DISPLAY.append(LABEL);
            this.ELDERS.push(TEXT);
        };
    };

}