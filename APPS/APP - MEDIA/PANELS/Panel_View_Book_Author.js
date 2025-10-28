import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../APP - JELLYFISH/CREATE/Create.js";

export default class Panel_View_Book_Author {

    constructor() {

        // ============ //
        // ## BLOCKS ## //
        // ============ //

    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_PANEL = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_PANEL.append(...[
            this.HEADER_TITLE,
            this.HEADER_NAME,
            this.BUTTON_MORE
        ]);        
        return this.WRAPPER_PANEL;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {

        await this.#HEADERS();
        await this.#BUTTONS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_TITLE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        this.HEADER_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h4',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();

        this.HEADER_TITLE.innerHTML = 'AUTHOR:';
        this.HEADER_NAME.innerHTML = '';
    };
    async #BUTTONS() {
        this.BUTTON_MORE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        this.BUTTON_MORE.innerHTML = 'VIEW MORE';
    }

    SET_AUTHOR(PARAMETER_VALUE) {this.HEADER_NAME.innerHTML = PARAMETER_VALUE};
}