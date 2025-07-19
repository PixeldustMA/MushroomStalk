import EL_Manager from "../../../../../APPS/APP - ELEMENTS/CONNECTORS/EL_Manager.js";
import EL_CAT_FORM_Display from "../../../../../APPS/APP - ELEMENTS/PANELS/FORM/EL_CAT_FORM_Display.js";
import EL_SEARCH_Category from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Category.js";
import EL_CAT_UPDATE_Taxonomy from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/EL_CAT_UPDATE_Taxonomy.js";
import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_Update_Category extends Stalk{

    constructor(){

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_Update-Title');
        this.SECTION_Details = document.getElementById('SECTION_Update-Details');
        this.SECTION_Form = document.getElementById('SECTION_Update-Form');
        this.SECTION_Choose = document.getElementById('SECTION_Update-Choose');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_DETAILS  = 'UNSET';
        this.WRAPPER_FORM = 'UNSET';
        this.WRAPPER_CHOOSE = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_SAVE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_FORM = new EL_CAT_FORM_Display();
        this.BLOCK_SEARCH = new EL_SEARCH_Category();
        this.BLOCK_TAXONOMY = new EL_CAT_UPDATE_Taxonomy();
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Choose.append(this.PANEL_CHOOSE());
        this.SECTION_Form.append(this.PANEL_FORM());
        // this.SECTION_Details.append(this.PANEL_DRAW_BASIC_DATA());
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_TITLE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_BACK();
        this.ACTIVATE_SAVE_DATA();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK,
            this.BUTTON_SAVE
        ]);
        return this.WRAPPER_TITLE;
    };
    PANEL_CHOOSE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_CHOOSE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_POPULATE_DATA();
        this.ACTIVATE_UPDATE_TYPE()

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CHOOSE.append(...[
            this.BLOCK_SEARCH.DRAW(),
            this.BLOCK_TAXONOMY.DRAW(),
            this.BUTTON_TYPE
        ]);
        return this.WRAPPER_CHOOSE;
    };
    PANEL_CHANGE_DATA() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_UPDATE = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_UPDATE_TYPE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_UPDATE.append(...[
            this.BUTTON_TYPE,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_UPDATE;
    }
    PANEL_FORM() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_FORM = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //


        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_FORM.append(...[
            this.BLOCK_FORM.DRAW()
        ]);
        return this.WRAPPER_FORM;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    // ======================= //
    // << PAGE MANIPULATION >> //
    // ======================= //

    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };

    // ======================= //
    // << DATA MANIPULATION >> //
    // ======================= //

    #ACTIVATE_POPULATE_DATA() {
        
        this.BLOCK_SEARCH.SELECT_ELEMENT_CATEGORY.addEventListener('change', (event) => {

            this.PROPERTY_ACTIVE_CATEGORY = this.BLOCK_SEARCH.GET_CATEGORY();
            console.log(`ACTIVE CATEGORY IS SET AS:: ${this.PROPERTY_ACTIVE_CATEGORY}`);

            // ========== //
            // << DATA >> //
            // ========== //

            this.DATA_CATEGORY = this.SESSION.ELEMENTS.DATA.CATEGORY[this.PROPERTY_ACTIVE_CATEGORY];
            this.DATA_TAXONOMY = this.DATA_CATEGORY.TAXONOMY;

            // ==================== //
            // << TAXONOMY PANEL >> //
            // ==================== //

            this.BLOCK_FORM.SET_CATEGORY(this.DATA_TAXONOMY.NAME);
            this.BLOCK_FORM.SET_TYPE(this.DATA_TAXONOMY.TYPE);

            // ======================= //
            // << DESCRIPTION PANEL >> //
            // ======================= //

            this.PROPERTY_ACTIVE_CODE = this.DATA_CATEGORY.DESCRIPTION;
            this.RENDERER_PATH = `${this.SESSION.PATHS.WAR.ELEMENTS.DESCRIPTION}/${this.DATA_TAXONOMY.TYPE[0]}A-${this.PROPERTY_ACTIVE_CODE}.txt`;
            this.READ().then((RESULT) => {
                this.BLOCK_FORM.SET_DESCRIPTION(RESULT);
                return RESULT;
            });
        });
    };
    ACTIVATE_UPDATE_TYPE() {
        this.BUTTON_TYPE.addEventListener('click', (event) => {
            this.BLOCK_FORM.SET_TYPE(this.BLOCK_TAXONOMY.BLOCK_SEARCH_TYPE.GET_TYPE());
            this.BLOCK_TAXONOMY.WRAPPER_DISPLAY.remove();
        });
    };
    ACTIVATE_SAVE_DATA() {
        this.BUTTON_SAVE.addEventListener('click', (event) => {

            // ============== //
            // << TAXONOMY >> //
            // ============== //

            this.ACTIVE_TAXONOMY_TYPE = this.BLOCK_FORM.GET_TYPE();
            this.ACTIVE_TAXONOMY_CATEGORY = this.BLOCK_FORM.GET_CATEGORY();

            // ================= //
            // << DESCRIPTION >> //
            // ================= //

            this.ACTIVE_DESCRIPTION = this.BLOCK_FORM.GET_DESCRIPTION();

            const MANAGER = new EL_Manager({
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_CATEGORY: this.ACTIVE_TAXONOMY_CATEGORY,
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_TYPE: this.ACTIVE_TAXONOMY_TYPE,
                ELEMENT_CONFIG_DATA_OLD: this.SESSION.ELEMENTS.DATA.CATEGORY[this.ACTIVE_TAXONOMY_CATEGORY],
                ELEMENT_CONFIG_PROPERTY_DESCRIPTION_TEXT: this.ACTIVE_DESCRIPTION,
                ELEMENT_CONFIG_PROPERTY_DESCRIPTION_CODE: this.PROPERTY_ACTIVE_CODE
            });

        MANAGER.UPDATE_CATEGORY().then((RESULT) => {
            // window.location.reload()
            return RESULT});
        }); 
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============== //
        // << SESSIONS >> //
        // ============== //

        await this.REQUEST_SESSION_ELEMENT();

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#HEADERS();
        await this.#BUTTON();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Update-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'UPDATE CATEGORY';
    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();
        this.BUTTON_SAVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Save',
        }).INIT();
        this.BUTTON_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Type',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SAVE.innerHTML = 'SAVE CATEGORY';
        this.BUTTON_TYPE.innerHTML = 'UPDATE TYPE';
    };
    async #BLOCKS() {
        await this.BLOCK_FORM.INITIALISE();
        await this.BLOCK_SEARCH.INITIALISE();
        await this.BLOCK_TAXONOMY.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Update = new DRAW_Update_Category();
await PAGE_Update.INITIALISE();
await PAGE_Update.DRAW();
