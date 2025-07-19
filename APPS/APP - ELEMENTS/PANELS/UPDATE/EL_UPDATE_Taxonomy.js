import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_SEARCH_Category from "../SEARCH/EL_SEARCH_Category.js";

export default class EL_UPDATE_Taxonomy {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TAXONOMY = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_TAXONOMY = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_CATEGORY = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_SEARCH_CATEGORY = new EL_SEARCH_Category();

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TAXONOMY = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_CHOOSE_CATEGORY();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TAXONOMY.append(...[
            this.HEADER_TAXONOMY,
            this.BUTTON_CATEGORY,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_TAXONOMY;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_CHOOSE_CATEGORY(){

        this.BUTTON_CATEGORY.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.BLOCK_SEARCH_CATEGORY.DRAW());
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

        this.HEADER_TAXONOMY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Taxonomy-Taxonomy',
        }).INIT();

        this.HEADER_TAXONOMY.innerHTML = 'UPDATE TAXONOMY';
    };
    async #BUTTON() {
        this.BUTTON_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Taxonomy-Category',
        }).INIT();

        this.BUTTON_CATEGORY.innerHTML = 'UPDATE CATEGORY';
    };
    async #BLOCK() {
        await this.BLOCK_SEARCH_CATEGORY.INITIALISE();
    };
};