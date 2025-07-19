
import ELEMENT_Manager from "../../../../../APPS/APP - ELEMENTS/Element_Manager.js";
import EL_SEARCH_Element from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/SEARCH_Element.js";
import EL_UPDATE_Description from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/UPDATE_Description.js";
import EL_UPDATE_Heritage from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/UPDATE_Heritage.js";
import EL_UPDATE_History from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/UPDATE_History.js";
import EL_UPDATE_Taxonomy from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/UPDATE_Taxonomy.js";
import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

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

        // ============= //
        // << BUTTONS >> //
        // ============= //

        // ============ //
        // << PANELS >> //
        // ============ //

        this.PANEL_SEARCH = new EL_SEARCH_Element();
        this.PANEL_TAXONOMY = new EL_UPDATE_Taxonomy();
        this.PANEL_HISTORY = new EL_UPDATE_History();
        this.PANEL_HERITAGE = new EL_UPDATE_Heritage();
        this.PANEL_DESCRIPTION = new EL_UPDATE_Description()

        // ================ //
        // << PROPERTIES >> //
        // ================ //

        this.PROPERTY_ACTIVE_ELEMENT = 'UNSET';
    };
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
            // this.DATA_HISTORY = this.DATA_ELEMENT.HISTORY;
            // this.DATA_HERITAGE = this.DATA_ELEMENT.HERITAGE;
            // this.DATA_DESCRIPTION = this.DATA_ELEMENT.DESCRIPTION;

            // ==================== //
            // << TAXONOMY PANEL >> //
            // ==================== //

            this.BLOCK_TAXONOMY.SET_ELEMENT(this.PROPERTY_ACTIVE_ELEMENT);
            this.BLOCK_TAXONOMY.SET_CATEGORY(this.DATA_TAXONOMY.CATEGORY);
            this.BLOCK_TAXONOMY.SET_TYPE(this.DATA_TAXONOMY.TYPE);
            // this.ORIGINAL_CATEGORY = this.DATA_TAXONOMY.CATEGORY;

            // =================== //
            // << HISTORY PANEL >> //
            // =================== //

            // this.PANEL_HISTORY.SET_AGE(this.DATA_HISTORY.AGE);
            // this.PANEL_HISTORY.SET_PLANET(this.DATA_HISTORY.SOURCE.PLANET);
            // this.PANEL_HISTORY.SET_SYSTEM(this.DATA_HISTORY.SOURCE.SYSTEM);
            // this.PANEL_HISTORY.SET_SECTOR(this.DATA_HISTORY.SOURCE.SECTOR);
            // this.PANEL_HISTORY.SET_SPACE(this.DATA_HISTORY.SOURCE.SPACE);
            // this.PANEL_HISTORY.SET_SISTER_ELEMENTS(this.DATA_HISTORY.SISTER_ELEMENTS)
            // this.PANEL_HISTORY.SISTER_ELEMENTS = this.DATA_HISTORY.SISTER_ELEMENTS

            // =================== //
            // << HERITAGE PANEL >> //
            // =================== //

            // this.PANEL_HERITAGE.SET_COLOUR(this.DATA_HERITAGE.COLOUR);
            // this.PANEL_HERITAGE.SET_SURNAME(this.DATA_HERITAGE.SURNAME);
            // this.PANEL_HERITAGE.SET_DRAGON(this.DATA_HERITAGE.DRAGONS);
            // this.PANEL_HERITAGE.DRAGONS = this.DATA_HERITAGE.DRAGONS
            // this.PANEL_HERITAGE.SET_ELDER(this.DATA_HERITAGE.ELDERS);
            // this.PANEL_HERITAGE.ELDERS = this.DATA_HERITAGE.ELDERS

            // ======================= //
            // << DESCRIPTION PANEL >> //
            // ======================= //

            // this.RENDERER_PATH = `${this.PATH_TEXT}/${this.DATA_DESCRIPTION}.txt`;
            // this.TEXT = this.READ().then((result) => {
            //     this.PANEL_DESCRIPTION.LABEL_DISPLAY_DESCRIPTION.innerHTML = result;
            //     return result});
        });
    }
    ACTIVATE_ELEMENT_CHOICE(){
        this.PANEL_ELEMENT.SELECT_ELEMENT.addEventListener('change', (event) => {

            this.TAXONOMY_TYPE = this.SESSION.ELEMENT.DATA[this.TAXONOMY_ELEMENT].TAXONOMY.TYPE;
            this.TAXONOMY_CATEGORY = this.SESSION.ELEMENT.DATA[this.TAXONOMY_ELEMENT].TAXONOMY.CATEGORY;
            this.TAXONOMY_ELEMENT = this.SESSION.ELEMENT.DATA[this.TAXONOMY_ELEMENT].TAXONOMY.NAME;
            this.UPDATE_TAXONOMY();
            this.ORIGINAL_CATEGORY = this.TAXONOMY_CATEGORY;
            console.log(this.ORIGINAL_CATEGORY);
        });
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
        // this.SECTION_Display.append(this.PANEL_DISPLAY());

    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_TITLE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BACK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK
        ]);
        return WRAPPER_Page;
    };
    PANEL_CHOOSE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Choose = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_LOAD_ELEMENT();
        this.ACTIVATE_UPDATE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Choose.append(...[
            this.PANEL_SEARCH.DRAW(),
            this.PANEL_TAXONOMY.DRAW(),
            this.PANEL_HISTORY.DRAW(),
            this.PANEL_HERITAGE.DRAW(),
            this.PANEL_DESCRIPTION.DRAW(),
            this.BUTTON_UPDATE_PAGE
        ]);
        return WRAPPER_Choose;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };
    /**
     * ## LOAD ELEMENT DATA
     * --------------------
     * 
     * Update the page with the current element data
     */
    ACTIVATE_LOAD_ELEMENT() {
        this.PANEL_SEARCH.SELECT_ELEMENT.addEventListener('change', (event) => {

            this.PROPERTY_ACTIVE_ELEMENT = this.PANEL_SEARCH.GET_ELEMENT();
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
            this.DATA_HISTORY = this.DATA_ELEMENT.HISTORY;
            this.DATA_HERITAGE = this.DATA_ELEMENT.HERITAGE;
            this.DATA_DESCRIPTION = this.DATA_ELEMENT.DESCRIPTION;

            // ==================== //
            // << TAXONOMY PANEL >> //
            // ==================== //

            this.PANEL_TAXONOMY.SET_ELEMENT(this.PROPERTY_ACTIVE_ELEMENT);
            this.PANEL_TAXONOMY.SET_CATEGORY(this.DATA_TAXONOMY.CATEGORY);
            this.PANEL_TAXONOMY.SET_TYPE(this.DATA_TAXONOMY.TYPE);
            this.ORIGINAL_CATEGORY = this.DATA_TAXONOMY.CATEGORY;

            // =================== //
            // << HISTORY PANEL >> //
            // =================== //

            this.PANEL_HISTORY.SET_AGE(this.DATA_HISTORY.AGE);
            this.PANEL_HISTORY.SET_PLANET(this.DATA_HISTORY.SOURCE.PLANET);
            this.PANEL_HISTORY.SET_SYSTEM(this.DATA_HISTORY.SOURCE.SYSTEM);
            this.PANEL_HISTORY.SET_SECTOR(this.DATA_HISTORY.SOURCE.SECTOR);
            this.PANEL_HISTORY.SET_SPACE(this.DATA_HISTORY.SOURCE.SPACE);
            this.PANEL_HISTORY.SET_SISTER_ELEMENTS(this.DATA_HISTORY.SISTER_ELEMENTS)
            this.PANEL_HISTORY.SISTER_ELEMENTS = this.DATA_HISTORY.SISTER_ELEMENTS

            // =================== //
            // << HERITAGE PANEL >> //
            // =================== //

            this.PANEL_HERITAGE.SET_COLOUR(this.DATA_HERITAGE.COLOUR);
            this.PANEL_HERITAGE.SET_SURNAME(this.DATA_HERITAGE.SURNAME);
            this.PANEL_HERITAGE.SET_DRAGON(this.DATA_HERITAGE.DRAGONS);
            this.PANEL_HERITAGE.DRAGONS = this.DATA_HERITAGE.DRAGONS
            this.PANEL_HERITAGE.SET_ELDER(this.DATA_HERITAGE.ELDERS);
            this.PANEL_HERITAGE.ELDERS = this.DATA_HERITAGE.ELDERS

            // ======================= //
            // << DESCRIPTION PANEL >> //
            // ======================= //

            this.RENDERER_PATH = `${this.PATH_TEXT}/${this.DATA_DESCRIPTION}.txt`;
            this.TEXT = this.READ().then((result) => {
                this.PANEL_DESCRIPTION.LABEL_DISPLAY_DESCRIPTION.innerHTML = result;
                return result});
        });
    }
    ACTIVATE_ELEMENT_CHOICE(){
        this.PANEL_ELEMENT.SELECT_ELEMENT.addEventListener('change', (event) => {

            this.TAXONOMY_TYPE = this.SESSION.ELEMENT.DATA[this.TAXONOMY_ELEMENT].TAXONOMY.TYPE;
            this.TAXONOMY_CATEGORY = this.SESSION.ELEMENT.DATA[this.TAXONOMY_ELEMENT].TAXONOMY.CATEGORY;
            this.TAXONOMY_ELEMENT = this.SESSION.ELEMENT.DATA[this.TAXONOMY_ELEMENT].TAXONOMY.NAME;
            this.UPDATE_TAXONOMY();
            this.ORIGINAL_CATEGORY = this.TAXONOMY_CATEGORY;
            console.log(this.ORIGINAL_CATEGORY);
        });
    };
    ACTIVATE_UPDATE() {

        this.BUTTON_UPDATE_PAGE.addEventListener('click', (event) => {

        // ============== //
            // << TAXONOMY >> //
            // ============== //

            this.ACTIVE_TAXONOMY_ELEMENT = this.PANEL_TAXONOMY.GET_ELEMENT();
            this.ACTIVE_TAXONOMY_CATEGORY = this.PANEL_TAXONOMY.GET_CATEGORY();
            this.ACTIVE_TAXONOMY_TYPE = this.SESSION.ELEMENTS.DATA.CATEGORY[this.ACTIVE_TAXONOMY_CATEGORY].TYPE;

        // // ============= //
        // // << HISTORY >> //
        // // ============= //

        // this.ACTIVE_HISTORY_AGE = this.PANEL_HISTORY.GET_AGE();
        // this.ACTIVE_HISTORY_SPACE = this.PANEL_HISTORY.GET_SPACE();
        // this.ACTIVE_HISTORY_SECTOR = this.PANEL_HISTORY.GET_SECTOR();
        // this.ACTIVE_HISTORY_SYSTEM = this.PANEL_HISTORY.GET_SYSTEM();
        // this.ACTIVE_HISTORY_PLANET = this.PANEL_HISTORY.GET_PLANET();
        // this.ACTIVE_HISTORY_SISTERS = this.PANEL_HISTORY.SISTER_ELEMENTS;

        // // ================= //
        // // << DESCRIPTION >> //
        // // ================= //

        // this.ACTIVE_DESCRIPTION = this.PANEL_DESCRIPTION.GET_DESCRIPTION();

        // // ============== //
        // // << HERITAGE >> //
        // // ============== //

        // this.ACTIVE_HERITAGE_SURNAME = this.PANEL_HERITAGE.GET_SURNAME();
        // this.ACTIVE_HERITAGE_COLOUR = this.PANEL_HERITAGE.GET_COLOUR();
        // this.ACTIVE_HERITAGE_DRAGONS = this.PANEL_HERITAGE.DRAGONS;
        // this.ACTIVE_HERITAGE_ELDERS = this.PANEL_HERITAGE.ELDERS;


        const MANAGER = new ELEMENT_Manager({
            ELEMENT_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.ELEMENTS.CONSOLE,
            ELEMENT_CONFIG_PATH_CATEGORY: this.SESSION.PATHS.WAR.ELEMENTS.CATEGORIES,
            ELEMENT_CONFIG_PATH_ELEMENT: this.SESSION.PATHS.WAR.ELEMENTS.ELEMENTS,
            ELEMENT_CONFIG_PATH_DESCRIPTION: this.SESSION.PATHS.WAR.ELEMENTS.DESCRIPTION,

            ELEMENT_CONFIG_PROPERTY_CATEGORY: this.ACTIVE_TAXONOMY_CATEGORY,
            ELEMENT_CONFIG_PROPERTY_TYPE: this.ACTIVE_TAXONOMY_TYPE,
            ELEMENT_CONFIG_PROPERTY_ELEMENT: this.ACTIVE_TAXONOMY_ELEMENT,

            ELEMENT_CONFIG_PROPERTY_DESCRIPTION: this.ACTIVE_DESCRIPTION,

            ELEMENT_CONFIG_PROPERTY_AGE: this.ACTIVE_HISTORY_AGE,
            ELEMENT_CONFIG_PROPERTY_SPACE: this.ACTIVE_HISTORY_SPACE,
            ELEMENT_CONFIG_PROPERTY_SECTOR: this.ACTIVE_HISTORY_SECTOR,
            ELEMENT_CONFIG_PROPERTY_SYSTEM: this.ACTIVE_HISTORY_SYSTEM,
            ELEMENT_CONFIG_PROPERTY_PLANET: this.ACTIVE_HISTORY_PLANET,
            ELEMENT_CONFIG_PROPERTY_SISTERS: this.ACTIVE_HISTORY_SISTERS,

            ELEMENT_CONFIG_PROPERTY_SURNAME: this.ACTIVE_HERITAGE_SURNAME,
            ELEMENT_CONFIG_PROPERTY_COLOUR: this.ACTIVE_HERITAGE_COLOUR,
            ELEMENT_CONFIG_PROPERTY_CODE: this.SESSION.ELEMENTS.DATA.ELEMENT[this.ACTIVE_TAXONOMY_ELEMENT].DESCRIPTION,
            ELEMENT_CONFIG_PROPERTY_DRAGONS: this.ACTIVE_HERITAGE_DRAGONS,
            ELEMENT_CONFIG_PROPERTY_ELDERS: this.ACTIVATE_LOAD_ELEMENT,

            ELEMENT_CONFIG_CATEGORY_LIST: this.SESSION.ELEMENTS.LIST.CATEGORY,
            ELEMENT_CONFIG_ELEMENT_LIST: this.SESSION.ELEMENTS.LIST.ELEMENT
            });
            MANAGER.PROPERTY_STYLE = 'UPDATE';
            MANAGER.PROPERTY_LIST_ORIGINAL_CATEGORY = this.ORIGINAL_CATEGORY;
            MANAGER.PROPERTY_SISTERS = this.ACTIVE_HISTORY_SISTERS;
            MANAGER.PROPERTY_DRAGONS = this.ACTIVE_HERITAGE_DRAGONS;
            MANAGER.PROPERTY_ELDERS = this.ACTIVE_HERITAGE_ELDERS;
            MANAGER.PROPERTY_PLANET = this.ACTIVE_HISTORY_PLANET;
            MANAGER.PROPERTY_SYSTEM = this.ACTIVE_HISTORY_SYSTEM;
            MANAGER.PROPERTY_SECTOR = this.ACTIVE_HISTORY_SECTOR;
            MANAGER.PROPERTY_SPACE = this.ACTIVE_HISTORY_SPACE;
        // MANAGER.STATUS_SISTER = false;
        //     console.log(this.SESSION)
        //     this.ORIGINAL_SISTER_ELEMENT = this.SESSION.ELEMENTS.DATA.ELEMENT[this.ACTIVE_TAXONOMY_ELEMENT].HISTORY.SISTER_ELEMENTS
        // for (let INDEX_SISTER = 0; INDEX_SISTER < this.ACTIVE_HISTORY_SISTERS.length; INDEX_SISTER++) {
        //     const TAG_ELEMENT = this.ACTIVE_HISTORY_SISTERS[INDEX_SISTER];
        //     if (!this.ORIGINAL_SISTER_ELEMENT.includes(TAG_ELEMENT)) {
        //         MANAGER.STATUS_SISTER = true;
        //     }
        // };
        // console.log(MANAGER.STATUS_SISTER);
        // console.log(this.ORIGINAL_SISTER_ELEMENT);
        // console.log(this.ACTIVE_HISTORY_SISTERS);
        MANAGER.INSERT_ELEMENT().then((RESULT) => {
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

        await this.#TEXT();
        await this.#BUTTON();
        await this.#PANELS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

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
        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_UPDATE_PAGE.innerHTML = 'UPDATE ELEMENT DATA';
    };
    async #PANELS() {
        await this.PANEL_SEARCH.INITIALISE();
        await this.PANEL_TAXONOMY.INITIALISE();
        await this.PANEL_HISTORY.INITIALISE();
        await this.PANEL_HERITAGE.INITIALISE();
        await this.PANEL_DESCRIPTION.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Element = new Draw_View();
await PAGE_Element.INITIALISE();
await PAGE_Element.DRAW();
