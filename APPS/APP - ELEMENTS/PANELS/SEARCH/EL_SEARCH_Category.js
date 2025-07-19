import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_SEARCH_Type from "./EL_SEARCH_Type.js";

export default class EL_SEARCH_Category extends Stalk{

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_CATEGORY = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_SELECT_CATEGORY = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_ELEMENT_CATEGORY = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_CATEGORY = [];

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
        this.BLOCK_TYPE = new EL_SEARCH_Type();

        // ================ //
        // ## PROPERTIES ## // 
        // ================ //

        this.PROPERTY_TYPE = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_CATEGORY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_OPTIONS_CATEGORY();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CATEGORY.append(...[
            this.BLOCK_TYPE.DRAW(),
            this.LABEL_SELECT_CATEGORY,
            this.SELECT_ELEMENT_CATEGORY
        ]);
        return this.WRAPPER_CATEGORY;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    ACTIVATE_OPTIONS_CATEGORY() {
        this.BLOCK_TYPE.SELECT_ELEMENT_TYPE.addEventListener('click', (event) => {
            this.PROPERTY_TYPE = this.BLOCK_TYPE.GET_TYPE();
            this.OPTIONS_CATEGORY = this.SESSION.ELEMENTS.LIST[this.PROPERTY_TYPE];
            this.OPTIONS_CATEGORY.unshift('CHOOSE A CATEGORY')
            this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_ELEMENT_CATEGORY, this.OPTIONS_CATEGORY)
        }); 
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_ELEMENT()

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#OPTIONS();
        await this.#LABELS();
        await this.#SELECT();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #OPTIONS() {
        this.OPTIONS_CATEGORY = ['X-X-X-X-X-X-X-X-X-X'];
    };
    async #LABELS() {
        this.LABEL_SELECT_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Taxonomy-Category'
        }).INIT();

        this.LABEL_SELECT_CATEGORY.innerHTML = 'Select the category';
    }
    async #SELECT() {
        this.SELECT_ELEMENT_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Taxonomy-Category',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_CATEGORY
        }).INIT();
    };
    async #BLOCKS() {
        await this.BLOCK_TYPE.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_CATEGORY(){return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ELEMENT_CATEGORY);};
    GET_TYPE() {return this.BLOCK_TYPE.GET_TYPE();};
}