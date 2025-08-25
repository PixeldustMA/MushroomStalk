import EL_Manager from "../../../../../APPS/APP - ELEMENTS/CONNECTORS/EL_Manager.js";
import EL_CAT_INPUT_Description from "../../../../../APPS/APP - ELEMENTS/PANELS/INPUT/EL_CAT_INPUT_Description.js";
import EL_CAT_INPUT_Taxonomy from "../../../../../APPS/APP - ELEMENTS/PANELS/INPUT/EL_CAT_INPUT_Taxonomy.js";
import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_Category_New extends Stalk{

    constructor(){

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('SECTION_Category-Title');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_TAXONOMY = new EL_CAT_INPUT_Taxonomy();
        this.BLOCK_DESCRIPTION = new EL_CAT_INPUT_Description();
    };

    DRAW() {
        this.SECTION_TITLE.append(this.DRAW_TITLE())
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW_TITLE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BACK();
        this.ACTIVATE_SAVE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK,
            this.BUTTON_SAVE,
            this.BLOCK_TAXONOMY.DRAW(),
            this.BLOCK_DESCRIPTION.DRAW()
        ]);
        return this.WRAPPER_TITLE;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };
    ACTIVATE_SAVE() {

        this.BUTTON_SAVE.addEventListener('click', (event) => {

            // ============== //
            // << TAXONOMY >> //
            // ============== //

            this.PROPERTY_NAME = this.BLOCK_TAXONOMY.GET_NAME();
            this.PROPERTY_TYPE = this.BLOCK_TAXONOMY.GET_TYPE();

            // ================= //
            // << DESCRIPTION >> //
            // ================= //

            this.PROPERTY_DESCRIPTION_TEXT = this.BLOCK_DESCRIPTION.GET_DESCRIPTION();
            this.PROPERTY_DESCRIPTION_CODE = this.BLOCK_DESCRIPTION.GET_CODE();

            let BLOCK_MANAGER = new EL_Manager({
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_CATEGORY: this.PROPERTY_NAME,
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_TYPE: this.PROPERTY_TYPE,
                ELEMENT_CONFIG_PROPERTY_DESCRIPTION_TEXT: this.PROPERTY_DESCRIPTION_TEXT,
                ELEMENT_CONFIG_PROPERTY_DESCRIPTION_CODE: this.PROPERTY_DESCRIPTION_CODE
            }).INSERT_CATEGORY().then((RESULT) => {
                window.location.reload();
                return RESULT});
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

        await this.#BUTTON();
        await this.#HEADER();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Category-Back'
        }).INIT();
        this.BUTTON_SAVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Category-Save'
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SAVE.innerHTML = 'SAVE';
    };
    async #HEADER() {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Category-Page'
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'CREATE A NEW CATEGORY';
    };
    async #BLOCKS() {
        await this.BLOCK_TAXONOMY.INITIALISE();
        await this.BLOCK_DESCRIPTION.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Category = new DRAW_Category_New();
await PAGE_Category.INITIALISE();
PAGE_Category.DRAW();
