import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import Multi_Element from "../SELECT/Multi_Element.js";

export default class EL_UPDATE_Connex {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_CONNEX = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_CONNEX = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_SISTER = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_SET_SISTER = new Multi_Element();

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_CONNEX = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_CHOOSE_ELEMENT();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CONNEX.append(...[
            this.HEADER_CONNEX,
            this.BUTTON_SISTER,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_CONNEX;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_CHOOSE_ELEMENT(){

        this.BUTTON_SISTER.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(...[
                this.BLOCK_SET_SISTER.DRAW(),
                this.BUTTON_SAVE
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
        await this.#BLOCK();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        this.HEADER_CONNEX = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Connex-Connex',
        }).INIT();

        // =========== //
        // << TITLE >> //
        // =========== //

        this.HEADER_CONNEX.innerHTML = 'UPDATE CONNECTIONS';
    };
    async #BUTTON() {

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        this.BUTTON_SISTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Connex-Elements',
        }).INIT();

        // =========== //
        // << TITLE >> //
        // =========== //

        this.BUTTON_SISTER.innerHTML = 'UPDATE SISTER ELEMENTS';

    };
    async #BLOCK() {
        await this.BLOCK_SET_SISTER.INITIALISE();
    };
};