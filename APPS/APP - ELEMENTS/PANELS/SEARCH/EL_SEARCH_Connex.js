import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_SEARCH_Element from "./EL_SEARCH_Element.js";

export default class EL_SEARCH_Connex extends Stalk{

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_ELEMENT = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PANEL = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_ELEMENT = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_ELEMENT = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_ELEMENT = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
        this.BLOCK_SEARCH = new EL_SEARCH_Element();

        // ================ //
        // ## PROPERTIES ## // 
        // ================ //

        this.DATA_CONNEX = 'UNLOADED'
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ELEMENT = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_OPTIONS_ELEMENT();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ELEMENT.append(...[
            this.HEADER_PANEL,
            this.BLOCK_SEARCH.DRAW()
        ]);
        return this.WRAPPER_ELEMENT;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    ACTIVATE_OPTIONS_ELEMENT() {
        this.BLOCK_SEARCH.SELECT_ELEMENT.addEventListener('click', (event) => {
            let ACTIVE_ELEMENT = this.BLOCK_CREATE.READ_OPTION_TEXT(this.BLOCK_SEARCH.SELECT_ELEMENT);
            console.log(ACTIVE_ELEMENT);
            let DATA_ELEMENT = this.SESSION.ELEMENTS.DATA.ELEMENT[ACTIVE_ELEMENT];
            console.log(DATA_ELEMENT)
            this.DATA_CONNEX = DATA_ELEMENT.CONNEX.SISTER_ELEMENTS;
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_ELEMENT();

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

    async #OPTIONS() {
        this.OPTIONS_ELEMENT = ['X-X-X-X-X-X-X-X-X-X-X']
    };
    async #HEADERS() {
        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'SEARCH FOR CONNECTIONS';
    }
    async #LABELS() {
        // this.LABEL_ELEMENT = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'label',
        //     CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-Element'
        // }).INIT();

        // this.LABEL_ELEMENT.innerHTML = 'Choose an element';
    };
    async #SELECT() {
        // this.SELECT_ELEMENT = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'select',
        //     CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Element-Element',
        //     CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_ELEMENT
        // }).INIT();
    };

    async #BLOCKS() {
        await this.BLOCK_SEARCH.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

}