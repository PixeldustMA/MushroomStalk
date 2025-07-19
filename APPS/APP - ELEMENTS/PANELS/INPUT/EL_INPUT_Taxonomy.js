import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_SEARCH_Category from "../SEARCH/EL_SEARCH_Category.js";

export default class EL_INPUT_Taxonomy {

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        // super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TAXONOMY = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_ELEMENT = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_ELEMENT = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_SEARCH_CATEGORY = new EL_SEARCH_Category();
        this.BLOCK_CREATE = new Create({});
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TAXONOMY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TAXONOMY.append(...[
            this.BLOCK_SEARCH_CATEGORY.DRAW(),
            this.LABEL_ELEMENT,
            this.INPUT_ELEMENT
        ]);
        return this.WRAPPER_TAXONOMY;
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

        await this.#LABELS();
        await this.#INPUT();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #LABELS() {
        this.LABEL_ELEMENT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Taxonomy-Element'
        }).INIT();

        this.LABEL_ELEMENT.innerHTML = 'Input new element name';
    }
    async #INPUT() {
        this.INPUT_ELEMENT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Taxonomy-Name'
        }).INIT();
    };
    async #BLOCKS() {
        await this.BLOCK_SEARCH_CATEGORY.INITIALISE(); 
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_CATEGORY(){return this.BLOCK_SEARCH_CATEGORY.GET_CATEGORY()};
    GET_ELEMENT() {return this.INPUT_ELEMENT.value;};
    GET_TYPE(){return this.BLOCK_SEARCH_CATEGORY.GET_TYPE()};
}