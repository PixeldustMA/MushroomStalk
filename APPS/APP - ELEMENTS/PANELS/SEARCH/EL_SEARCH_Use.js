import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_SEARCH_Use extends Stalk{

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_USE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_SELECT_USE = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_ELEMENT_USE = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_USE = [];

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_USE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_USE.append(...[
            this.LABEL_SELECT_USE,
            this.SELECT_ELEMENT_USE
        ]);
        return this.WRAPPER_USE;
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
        await this.#LABELS();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #OPTIONS() {
        this.OPTIONS_USE = [];
    };
    async #LABELS() {
        this.LABEL_SELECT_USE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Taxonomy-Type'
        }).INIT();

        this.LABEL_SELECT_USE.innerHTML = '';
    };
    async #SELECT() {
        this.SELECT_ELEMENT_USE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Taxonomy-Type',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_USE
        }).INIT();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_TYPE(){return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ELEMENT_TYPE);};
};