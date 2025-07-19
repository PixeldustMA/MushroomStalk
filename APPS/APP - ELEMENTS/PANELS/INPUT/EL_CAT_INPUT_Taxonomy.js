import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_SEARCH_Type from "../SEARCH/EL_SEARCH_Type.js";

export default class EL_CAT_INPUT_Taxonomy {

    constructor(){

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_TAXONOMY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_TAXONOMY = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_INPUT_NAME= 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_NAME = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_TYPE = new EL_SEARCH_Type();
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
            this.HEADER_TAXONOMY,
            this.BLOCK_TYPE.DRAW(),
            this.LABEL_INPUT_NAME,
            this.INPUT_NAME
        ]);
        return this.WRAPPER_TAXONOMY;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {
        await this.#HEADERS();
        await this.#LABELS();
        await this.#INPUT();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_TAXONOMY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Taxonomy-Panel'
        }).INIT();

        this.HEADER_TAXONOMY.innerHTML = 'TAXONOMY';
    };
    async #LABELS() {
        this.LABEL_INPUT_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Taxonomy-Name'
        }).INIT();

        this.LABEL_INPUT_NAME.innerHTML = 'Input a name for the cateogry';
    };
    async #INPUT(){
        this.INPUT_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Taxonomy_Name'
        }).INIT();
    };
    async #BLOCKS() {
        await this.BLOCK_TYPE.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_TYPE() {return this.BLOCK_TYPE.GET_TYPE()};
    GET_NAME() {return this.INPUT_NAME.value};
}