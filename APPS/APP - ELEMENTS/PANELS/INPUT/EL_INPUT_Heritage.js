import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_INPUT_Heritage {

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        // super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_HERITAGE = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_SURNAME = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_SURNAME = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_SURNAME = 'UNSET';

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_HERITAGE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_HERITAGE.append(...[
            this.HEADER_SURNAME,
            this.LABEL_SURNAME,
            this.INPUT_SURNAME
        ]);
        return this.WRAPPER_HERITAGE;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#HEADERS();
        await this.#LABELS();
        await this.#INPUT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Heritage-Surname'
        }).INIT();

        this.HEADER_SURNAME.innerHTML = 'SURNAME';
    };
    async #LABELS() {
        this.LABEL_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Heritage-Surname'
        }).INIT();

        this.LABEL_SURNAME.innerHTML = 'Input a surname for the main family attached to the element';
    };
    async #INPUT() {
        this.INPUT_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Heritage-Surname'
        }).INIT();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_SURNAME(){return this.INPUT_SURNAME.value;};
};