import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import EX_SEARCH_Planet from "../../../APP - EXPLORER/PANELS/PLANET/EX_Search_Planet.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_INPUT_History {

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        // super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_HISTORY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_AGE = 'UNSET';
        this.HEADER_SOURCE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_AGE = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_AGE = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_AGE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
        this.BLOCK_PLANET = new EX_SEARCH_Planet();
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_HISTORY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_HISTORY.append(...[

            this.HEADER_AGE,
            this.LABEL_AGE,
            this.SELECT_AGE,

            this.HEADER_SOURCE,
            this.BLOCK_PLANET.DRAW()
        ]);
        return this.WRAPPER_HISTORY;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

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

        await this.#OPTIONS();
        await this.#HEADERS();
        await this.#LABELS();
        await this.#SELECT();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {

        this.HEADER_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_History-Age'
        }).INIT();
        this.HEADER_SOURCE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_History-Source'
        }).INIT();

        this.HEADER_AGE.innerHTML = 'ORIGIN AGE';
        this.HEADER_SOURCE.innerHTML = 'SOURCE PLANET';
    };
    async #LABELS() {

        this.LABEL_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_History-Age'
        }).INIT();

        this.LABEL_AGE.innerHTML = 'Choose element origin era';
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
    async #BLOCKS() {
        await this.BLOCK_PLANET.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_AGE(){return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_AGE)};
    GET_SPACE() {return this.BLOCK_PLANET.GET_SPACE()};
    GET_SECTOR(){return this.BLOCK_PLANET.GET_SECTOR()};
    GET_SYSTEM() {return this.BLOCK_PLANET.GET_SYSTEM()};
    GET_PLANET() {return this.BLOCK_PLANET.GET_PLANET()};
}