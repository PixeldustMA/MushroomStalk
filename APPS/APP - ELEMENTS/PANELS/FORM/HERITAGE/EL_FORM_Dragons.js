import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Dragons {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_DRAGONS = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_DRAGONS = 'UNSET';

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.DRAGONS = [];
    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DRAGONS = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DRAGONS.append(...[
            this.HEADER_DRAGONS,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_DRAGONS;
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
        this.HEADER_DRAGONS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Category-Name'
        }).INIT();

        this.HEADER_DRAGONS.innerHTML = 'DRAGONS';
    };
    async #LABELS() {
        this.LABEL_DISPLAY_DRAGONS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
        }).INIT();

        this.LABEL_DISPLAY_DRAGONS.innerHTML = 'Not Set';
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << GET >> //
    // ========= //

    GET_USES() {return this.DRAGONS};

    // ========= //
    // << SET >> //
    // ========= //

    async SET_DRAGON(PARAMETER_VALUE_ARRAY) {
        for (let INDEX_DRAGON = 0; INDEX_DRAGON < PARAMETER_VALUE_ARRAY.length; INDEX_DRAGON++) {
            const TEXT = PARAMETER_VALUE_ARRAY[INDEX_DRAGON];
            let LABEL = await new Create({
                CREATE_CONFIG_ELEMENT_TAG: 'label',
                CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Category-Name'
            }).INIT();
            LABEL.innerHTML = TEXT;
            this.WRAPPER_DISPLAY.append(LABEL);
            this.DRAGONS.push(TEXT);
        };
    };

}