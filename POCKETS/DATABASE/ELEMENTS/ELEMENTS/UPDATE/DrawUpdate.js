
import EL_Manager from "../../../../../APPS/APP - ELEMENTS/CONNECTORS/EL_Manager.js";
import EL_FORM_Display from "../../../../../APPS/APP - ELEMENTS/PANELS/FORM/EL_FORM_Display.js";
import EL_SEARCH_Element from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Element.js";
import EL_UPDATE_Taxonomy from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/EL_UPDATE_Taxonomy.js";
// import EL_UPDATE_Description from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/UPDATE_Description.js";
// import EL_UPDATE_Heritage from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/UPDATE_Heritage.js";
// import EL_UPDATE_History from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/UPDATE_History.js";
import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_View extends Stalk{

    constructor(){
        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('ELEMENT_Section-Title');
        this.SECTION_Choose = document.getElementById('ELEMENT_Section-Choose');
        this.SECTION_Form = document.getElementById('ELEMENT_Section-Form');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_CHOOSE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_FORM = new EL_FORM_Display();
        this.BLOCK_SEARCH = new EL_SEARCH_Element();
        this.BLOCK_TAXONOMY = new EL_UPDATE_Taxonomy();

        // ================ //
        // << PROPERTIES >> //
        // ================ //

        this.PROPERTY_ACTIVE_ELEMENT = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    /**
     * ## DRAW THE PAGE
     * 
     * -------------------
     * 
     * #### *CLASS MUST BE INITIALISED FIRST*
     * 
     * Run all functions associated with drawing the Topaz menu page
     * 
     * Attach all relevant wrappers to their appropriate sections
     * 
     * Run this function to run the class
     */
    async DRAW(){
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Choose.append(this.PANEL_CHOOSE());
        this.SECTION_Form.append(this.PANEL_FORM());
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

        this.ACTIVATE_BACK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK,
            this.BUTTON_UPDATE_PAGE
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

        this.ACTIVATE_LOAD_ELEMENT();
        this.ACTIVATE_UPDATE();
        this.ACTIVATE_CATEGORY();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CHOOSE.append(...[
            this.BLOCK_SEARCH.DRAW(),
            this.BLOCK_TAXONOMY.DRAW(),
            this.BUTTON_CATEGORY
        ]);
        return this.WRAPPER_CHOOSE;
    };
    PANEL_FORM(){

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
            this.BLOCK_FORM.DRAW(),
        ]);
        return this.WRAPPER_FORM;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    // ============= //
    // << UTILITY >> //
    // ============= //

    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };

    // =============== //
    // << LOAD PAGE >> //
    // =============== //

    /**
     * ## LOAD ELEMENT DATA
     * --------------------
     * 
     * Update the page with the current element data
     */
    ACTIVATE_LOAD_ELEMENT() {
        this.BLOCK_SEARCH.SELECT_ELEMENT.addEventListener('change', (event) => {

            this.PROPERTY_ACTIVE_ELEMENT = this.BLOCK_SEARCH.GET_ELEMENT();
            console.log(`ACTIVE ELEMENT IS SET AS:: ${this.PROPERTY_ACTIVE_ELEMENT}`);

            // =========== //
            // << PATHS >> //
            // =========== //

            this.PATH_TEXT = this.SESSION.PATHS.WAR.ELEMENTS.DESCRIPTION;

            // ========== //
            // << DATA >> //
            // ========== //

            this.DATA_ELEMENT = this.SESSION.ELEMENTS.DATA.ELEMENT[this.PROPERTY_ACTIVE_ELEMENT];
            this.DATA_TAXONOMY = this.DATA_ELEMENT.TAXONOMY;

            // ==================== //
            // << TAXONOMY PANEL >> //
            // ==================== //

            this.BLOCK_FORM.SET_ELEMENT(this.PROPERTY_ACTIVE_ELEMENT);
            this.BLOCK_FORM.SET_CATEGORY(this.DATA_TAXONOMY.CATEGORY);
            this.BLOCK_FORM.SET_TYPE(this.DATA_TAXONOMY.TYPE);

        });
    };

    // ============ //
    // << UPDATE >> //
    // ============ //

    ACTIVATE_UPDATE() {

        this.BUTTON_UPDATE_PAGE.addEventListener('click', (event) => {

            // ============== //
            // << TAXONOMY >> //
            // ============== //

            this.ACTIVE_TAXONOMY_ELEMENT = this.BLOCK_FORM.GET_ELEMENT();
            this.ACTIVE_TAXONOMY_CATEGORY = this.BLOCK_FORM.GET_CATEGORY();
            console.log(this.SESSION.ELEMENTS.DATA.CATEGORY);
            console.log(this.ACTIVE_TAXONOMY_CATEGORY)
            this.ACTIVE_TAXONOMY_TYPE = this.SESSION.ELEMENTS.DATA.CATEGORY[this.ACTIVE_TAXONOMY_CATEGORY].TYPE;

            const MANAGER = new EL_Manager({
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_CATEGORY: this.ACTIVE_TAXONOMY_CATEGORY,
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_TYPE: this.ACTIVE_TAXONOMY_TYPE,
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_ELEMENT: this.ACTIVE_TAXONOMY_ELEMENT, 
                ELEMENT_CONFIG_DATA_OLD: this.SESSION.ELEMENTS.DATA.ELEMENT[this.ACTIVE_TAXONOMY_ELEMENT]
            });

        MANAGER.UPDATE_ELEMENT().then((RESULT) => {
            // window.location.reload()
            return RESULT});
        }); 
    };
    ACTIVATE_CATEGORY() {
        this.BUTTON_CATEGORY.addEventListener('click', (event) => {
            this.BLOCK_FORM.SET_CATEGORY(this.BLOCK_TAXONOMY.BLOCK_SEARCH_CATEGORY.GET_CATEGORY());
            this.BLOCK_TAXONOMY.WRAPPER_DISPLAY.remove();
            this.BLOCK_FORM.SET_TYPE(this.BLOCK_TAXONOMY.BLOCK_SEARCH_CATEGORY.GET_TYPE());
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
        await this.#PANELS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Update-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'UPDATE ELEMENT';
    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();
        this.BUTTON_UPDATE_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Page',
        }).INIT();
        this.BUTTON_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Category',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_UPDATE_PAGE.innerHTML = 'UPDATE ELEMENT DATA';
        this.BUTTON_CATEGORY.innerHTML = 'UPDATE CATEGORY';
    };
    async #PANELS() {
        await this.BLOCK_SEARCH.INITIALISE();
        await this.BLOCK_FORM.INITIALISE();
        await this.BLOCK_TAXONOMY.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Element = new Draw_View();
await PAGE_Element.INITIALISE();
await PAGE_Element.DRAW();
