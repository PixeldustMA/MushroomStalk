import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import EL_SEARCH_Element from "../../../../APPS/APP - JELLYFISH/ELEMENTS/PANELS/ELEMENTS/SEARCH_Element.js";
import EL_VIEW_Element from "../../../../APPS/APP - JELLYFISH/ELEMENTS/PANELS/ELEMENTS/VIEW_Element.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_View extends Stalk{

    constructor(){
        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('ELEMENT_Section-Title');
        this.SECTION_Choose = document.getElementById('ELEMENT_Section-Choose');
        this.SECTION_Display = document.getElementById('ELEMENT_Section-Display');

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PAGE = 'UNSET';
        this.HEADER_CHOOSE = 'UNSET';
        this.HEADER_DISPLAY = 'UNSET';
        this.HEADER_DISPLAY_CATEGORY = 'UNSET';
        this.HEADER_TYPE = 'UNSET';
        this.HEADER_BIOLOGY = 'UNSET';

        this.LABEL_CATEGORY = 'UNSET';
        this.LABEL_ELEMENT = 'UNSET';
        this.LABEL_DISPLAY_CATEGORY = 'UNSET';
        this.LABEL_TYPE = 'UNSET';

        // ============= //
        // << BUTTONS >> //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_CHOOSE = 'UNSET';

        // ============= //
        // << OPTIONS >> //
        // ============= //

        this.OPTIONS_CATEGORY = [];
        this.OPTIONS_ELEMENT = [];

        // ============ //
        // << SELECT >> //
        // ============ //

        this.SELECT_CATEGORY = 'UNSET';
        this.SELECT_ELEMENT = 'UNSET';
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
    DRAW(){

        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Choose.append(this.PANEL_CHOOSE());
        this.SECTION_Display.append(this.PANEL_DISPLAY());

    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    // ==================== //
    // << PAGE STRUCTURE >> //
    // ==================== //

    PANEL_TITLE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
        ]);
        return this.WRAPPER_TITLE;
    };
    PANEL_SEARCH() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SEARCH = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY_SEARCH = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SEARCH.append(...[
            this.HEADER_SEARCH,
            this.BUTTON_SEARCH_NAME,
            this.BUTTON_SEARCH_CATEGORY,
            this.BUTTON_SEARCH_TYPE,
            this.WRAPPER_DISPLAY_SEARCH
        ]);
        return this.WRAPPER_SEARCH;

    };
    PANEL_IMAGE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_IMAGE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_IMAGE.append(...[

        ]);
        return this.WRAPPER_IMAGE;
    };
    PANEL_TAXONOMY(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TAXONOMY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TAXONOMY.append(...[

        ]);
        return this.WRAPPER_TAXONOMY;
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

    // ============ //
    // << SEARCH >> //
    // ============ //

    ACTIVATE_SEARCH_PANEL_NAME() {
        this.BUTTON_SEARCH_NAME.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(this.INSTANCE_SEARCH_NAME.DRAW());
        });
    };
    ACTIVATE_SEARCH_PANEL_CATEGORY() {
        this.BUTTON_SEARCH_CATEGORY.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(this.INSTANCE_SEARCH_CATEGORY.DRAW());
        });
    };
    ACTIVATE_SEARCH_PANEL_TYPE() {
        this.BUTTON_SEARCH_TYPE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(this.INSTANCE_SEARCH_TYPE.DRAW());
        });
    };

    // =============== //
    // << DATA LOAD >> //
    // =============== //

    ACTIVATE_CHOICE() {
        this.BUTTON_CHOOSE.addEventListener('click', (event) => {

            const TAG_CATEGORY = this.INSTANCE_SEARCH.GET_CATEGORY();
            const TAG_ELEMENT = this.INSTANCE_SEARCH.GET_ELEMENT();
            
            this.INSTANCE_VIEW.PANEL_TAXONOMY.SET_CATEGORY(TAG_CATEGORY);
            this.INSTANCE_VIEW.PANEL_TAXONOMY.SET_ELEMENT(TAG_ELEMENT);
            this.INSTANCE_VIEW.PANEL_TAXONOMY.SET_TYPE(this.SESSION.ELEMENTS.ELEMENTS[TAG_ELEMENT].TAXONOMY.TYPE);
            this.INSTANCE_VIEW.PANEL_HISTORY.SET_AGE(this.SESSION.ELEMENTS.ELEMENTS[TAG_ELEMENT].HISTORY.AGE);
            this.INSTANCE_VIEW.PANEL_HISTORY.SET_SURNAME(this.SESSION.ELEMENTS.ELEMENTS[TAG_ELEMENT].HISTORY.SURNAME);
            this.INSTANCE_VIEW.PANEL_PHYSICAL.SET_COLOUR(this.SESSION.ELEMENTS.ELEMENTS[TAG_ELEMENT].PHYSICAL.COLOUR);
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

        this.INSTANCE_VIEW = new EL_VIEW_Element();
        await this.INSTANCE_VIEW.INITIALISE();
        this.INSTANCE_SEARCH = new EL_SEARCH_Element();
        await this.INSTANCE_SEARCH.INITIALISE();

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#TEXT();
        await this.#OPTIONS();
        await this.#BUTTON();
        await this.#SELECT();


    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        // ============ //
        // << HEADER >> //
        // ============ //

        // ============= //
        // .. GENERAL .. //
        // ============= //

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_View-Title',
        }).INIT();
        this.HEADER_CHOOSE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_View-Choose'
        }).INIT();
        this.HEADER_DISPLAY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_View-Display',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'ELEMENTS';
        this.HEADER_CHOOSE.innerHTML = 'CHOOSE AN ELEMENT';
        this.HEADER_DISPLAY.innerHTML = 'ELEMENT';

    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Title',
        }).INIT();
        this.BUTTON_CHOOSE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Choose',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_CHOOSE.innerHTML = 'CHOOSE';
    };
    async #SELECT() {

        this.SELECT_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_View-Category',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_CATEGORY
        }).INIT();
        this.SELECT_ELEMENT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_View-Element',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_ELEMENT
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_CATEGORY = this.SESSION.ELEMENTS.CATEGORIES;
        this.OPTIONS_CATEGORY.unshift('CHOOSE A CATEGORY')
        this.OPTIONS_ELEMENT = ['-X-X-X-X-X-X-X'];
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Element = new Draw_View();
await PAGE_Element.INITIALISE();
PAGE_Element.DRAW();
