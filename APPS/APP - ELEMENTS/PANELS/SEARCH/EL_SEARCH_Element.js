import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_SEARCH_Category from "./EL_SEARCH_Category.js";

export default class EL_SEARCH_Element extends Stalk{

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

        this.BLOCK_CATEGORY = new EL_SEARCH_Category();
        this.BLOCK_CREATE = new Create({});

        // ================ //
        // ## PROPERTIES ## // 
        // ================ //

        this.TAG_CATEGORY = 'UNLOADED';
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

        this.ACTIVATE_OPTIONS_ELEMENTS();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ELEMENT.append(...[
            this.HEADER_PANEL,
            this.BLOCK_CATEGORY.DRAW(),
            this.LABEL_ELEMENT,
            this.SELECT_ELEMENT
        ]);
        return this.WRAPPER_ELEMENT;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    ACTIVATE_OPTIONS_ELEMENTS() {
        this.BLOCK_CATEGORY.SELECT_ELEMENT_CATEGORY.addEventListener('change', (event) => {
            this.TAG_CATEGORY = this.GET_CATEGORY();
            this.OPTIONS_ELEMENT = this.SESSION.ELEMENTS.DATA.CATEGORY[this.TAG_CATEGORY].ELEMENTS;
            this.OPTIONS_ELEMENT.unshift('CHOOSE AN ELEMENT');
            this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_ELEMENT, this.OPTIONS_ELEMENT);
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

        this.HEADER_PANEL.innerHTML = 'SEARCH FOR AN ELEMENT';
    }
    async #LABELS() {
        this.LABEL_ELEMENT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-Element'
        }).INIT();

        this.LABEL_ELEMENT.innerHTML = 'Choose an element';
    };
    async #SELECT() {
        this.SELECT_ELEMENT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Element-Element',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_ELEMENT
        }).INIT();
    };
    async #BLOCKS() {
        await this.BLOCK_CATEGORY.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_TYPE() {return this.BLOCK_CATEGORY.GET_TYPE()};
    GET_CATEGORY() {return this.BLOCK_CATEGORY.GET_CATEGORY()};
    GET_ELEMENT() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ELEMENT)};
}