import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_UPDATE_History {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_HISTORY = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_HERITAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_AGE = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_AGE = 'UNSET';

        // ============== //
        // ##  OPTIONS ## //
        // ============== //

        this.OPTIONS_AGE = [];

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_HISTORY = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SELECT_AGE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_HISTORY.append(...[
            this.HEADER_HISTORY,
            this.BUTTON_AGE,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_HISTORY;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_SELECT_AGE(){
        this.BUTTON_AGE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(...[
                this.LABEL_AGE,
                this.SELECT_AGE
            ]);
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============== //
        // << SESSIONS >> //
        // ============== //

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#HEADERS();
        await this.#BUTTON();
        await this.#OPTIONS();
        await this.#SELECT();
        await this.#LABEL();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        this.HEADER_HISTORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Taxonomy-Taxonomy',
        }).INIT();

        this.HEADER_HISTORY.innerHTML = 'UPDATE HISTORY';
    };
    async #BUTTON() {
        this.BUTTON_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Taxonomy-Category',
        }).INIT();

        this.BUTTON_AGE.innerHTML = 'UPDATE AGE';
    };
    async #SELECT() {
        this.SELECT_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_History-Age',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_AGE
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_AGE = [
            'CHOOSE AN ERA',
            'ORIGINAL',
            'PRE-EXODUS',
            'POST-EXODUS',
            'FINAL TIMELINE'
        ]
    };
    async #LABEL() {
        this.LABEL_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_History-Age',
        }).INIT();

        this.LABEL_AGE.innerHTML = 'Select an alternative age for the origin of this element'
    };

    GET_AGE() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_AGE)};
};