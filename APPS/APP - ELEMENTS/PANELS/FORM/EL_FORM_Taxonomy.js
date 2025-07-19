import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_FORM_Category from "./TAXONOMY/EL_FORM_Category.js";
import EL_FORM_Name from "./TAXONOMY/EL_FORM_Name.js";
import EL_FORM_Type from "./TAXONOMY/EL_FORM_Type.js";

export default class EL_FORM_Taxonomy {

    constructor() {

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_TAXONOMY = 'UNSET';

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PAGE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_NAME = new EL_FORM_Name();
        this.BLOCK_CATEGORY = new EL_FORM_Category();
        this.BLOCK_TYPE = new EL_FORM_Type();
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TAXONOMY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TAXONOMY.append(...[
            this.HEADER_PAGE,
            this.BLOCK_NAME.DRAW(),
            this.BLOCK_CATEGORY.DRAW(),
            this.BLOCK_TYPE.DRAW()
        ]);
        return this.WRAPPER_TAXONOMY;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#HEADERS();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Taxonomy-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'UPDATE BASIC DETAILS';
    };
    async #BLOCKS() {
        await this.BLOCK_NAME.INITIALISE();
        await this.BLOCK_CATEGORY.INITIALISE();
        await this.BLOCK_TYPE.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_NAME(PARAMETER_VALUE) {this.BLOCK_NAME.LABEL_DISPLAY_NAME.innerHTML = PARAMETER_VALUE;};
    SET_CATEGORY(PARAMETER_VALUE) {this.BLOCK_CATEGORY.LABEL_DISPLAY_CATEGORY.innerHTML = PARAMETER_VALUE;};
    SET_TYPE(PARAMETER_VALUE) {this.BLOCK_TYPE.LABEL_DISPLAY_TYPE.innerHTML = PARAMETER_VALUE;};

    GET_ELEMENT() {return this.BLOCK_NAME.LABEL_DISPLAY_NAME.innerHTML};
    GET_CATEGORY() {return this.BLOCK_CATEGORY.LABEL_DISPLAY_CATEGORY.innerHTML};
    GET_TYPE() {return this.BLOCK_TYPE.LABEL_DISPLAY_TYPE.innerHTML};
};