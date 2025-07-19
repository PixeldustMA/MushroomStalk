import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Name {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_NAME = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_NAME = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_DISPLAY_NAME = 'UNSET';
    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_NAME = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_NAME.append(...[
            this.HEADER_NAME,
            this.LABEL_DISPLAY_NAME
        ]);
        return this.WRAPPER_NAME;
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
        await this.#SETTINGS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Name-Name'
        }).INIT();

        this.HEADER_NAME.innerHTML = 'NAME::'
    };
    async #LABELS() {
        this.LABEL_DISPLAY_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Name-Name'
        }).INIT();

        this.LABEL_DISPLAY_NAME.innerHTML = 'Not Set';
    };
    async #SETTINGS() {
        this.LABEL_DISPLAY_NAME.contentEditable = true;
    };
}