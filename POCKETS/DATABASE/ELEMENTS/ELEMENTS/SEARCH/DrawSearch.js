import EL_SEARCH_Age from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Age.js";
import EL_SEARCH_Category from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Category.js";
import EL_SEARCH_Colour from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Colour.js";
import EL_SEARCH_Connex from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Connex.js";
import EL_SEARCH_Surname from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Surname.js";
import EL_SEARCH_Type from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Type.js";
import EL_SEARCH_Use from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Use.js";
import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import MANAGER_Settings_Database from "../../../../../APPS/APP - SETTINGS/Manager_Settings_Database.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_Search_Element extends Stalk{
    constructor(){

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_Search-Title');
        this.SECTION_Choose = document.getElementById('SECTION_Search-Choose');
        this.SECTION_Display = document.getElementById('SECTION_Search-Display');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';
        this.WRAPPER_DISPLAY_LIST = 'UNSET';
        this.WRAPPER_DISPLAY_SEARCH = 'UNSET';
        this.WRAPPER_OPTIONS = 'UNSET';

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PAGE = 'UNSET';
        this.HEADER_OPTIONS = 'UNSET';
        this.HEADER_DISPLAY = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_TYPE_SEARCH = 'UNSET';
        this.BUTTON_CATEGORY_SEARCH = 'UNSET';
        this.BUTTON_TYPE = 'UNSET';
        this.BUTTON_CATEGORY = 'UNSET';
        this.BUTTON_CONNEX_SEARCH = 'UNSET';
        this.BUTTON_CONNEX = 'UNSET'

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_TYPE = new EL_SEARCH_Type();
        this.BLOCK_CATEGORY = new EL_SEARCH_Category();
        this.BLOCK_CONNEX = new EL_SEARCH_Connex();
        this.BLOCK_SETTINGS_MANAGER = new MANAGER_Settings_Database();
        this.BLOCK_COLOUR = new EL_SEARCH_Colour();
        this.BLOCK_USE = new EL_SEARCH_Use();
        this.BLOCK_SURNAME = new EL_SEARCH_Surname();
        this.BLOCK_AGE = new EL_SEARCH_Age();
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Choose.append(this.PANEL_OPTIONS());
        this.SECTION_Display.append(this.PANEL_DISPLAY_LIST());
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_TITLE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_BACK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK
        ]);
        return this.WRAPPER_TITLE;
    };
    PANEL_OPTIONS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_OPTIONS = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY_SEARCH = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_TYPE_SEARCH();
        this.#ACTIVATE_CATEGORY_SEARCH();
        this.#ACTIVATE_CONNEX_SEARCH();
        this.#ACTIVATE_COLOUR_SEARCH();
        this.#ACTIVATE_USE_SEARCH();
        this.#ACTIVATE_SURNAME_SEARCH();
        this.#ACTIVATE_AGE_SEARCH();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_OPTIONS.append(...[
            this.HEADER_OPTIONS,
            this.BUTTON_TYPE,
            this.BUTTON_CATEGORY,
            this.BUTTON_CONNEX,
            this.BUTTON_COLOUR,
            this.BUTTON_USE,
            this.BUTTON_SURNAME,
            this.BUTTON_AGE,
            this.WRAPPER_DISPLAY_SEARCH
        ]);
        return this.WRAPPER_OPTIONS;

    };
    PANEL_DISPLAY_LIST() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY_LIST = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DISPLAY.append(...[
            this.HEADER_DISPLAY,
            this.WRAPPER_DISPLAY_LIST
        ]);
        return this.WRAPPER_DISPLAY;
    };
    async PANEL_DISPLAY_ITEM(PARAMETER_NAME) {
        let WRAPPER = new Connector_Jellyfish().INITIALISE_WRAPPER();
        let BUTTON_LIST_ITEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search'
        }).INIT();
        BUTTON_LIST_ITEM.innerHTML = PARAMETER_NAME;
        this.ACTIVATE_LIST_ITEM(BUTTON_LIST_ITEM);
        WRAPPER.append(...[BUTTON_LIST_ITEM]);
        return WRAPPER;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    // ============= //
    // << UTILITY >> //
    // ============= //

    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };
    ACTIVATE_LIST_ITEM(PARAMETER_BUTTON){
        PARAMETER_BUTTON.addEventListener('click', (event) => {
            this.BLOCK_SETTINGS_MANAGER.SET_ACTIVE_ELEMENT_ELEMENT(PARAMETER_BUTTON.innerHTML).then((result) => {
                this.LOAD('VIEW', 'ELEMENTS').then((R) => {return R})
                return result});
        });
    };

    // ============= //
    // << SEARCH >> //
    // ============= //

    #ACTIVATE_TYPE_SEARCH(){
        this.BUTTON_TYPE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(...[
                this.BLOCK_TYPE.DRAW(),
                this.BUTTON_TYPE_SEARCH
            ]);
            this.#ACTIVATE_LOAD_TYPE_LIST();
        });
    };
    #ACTIVATE_CATEGORY_SEARCH(){
        this.BUTTON_CATEGORY.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(...[
                this.BLOCK_CATEGORY.DRAW(),
                this.BUTTON_CATEGORY_SEARCH
            ]);
            this.#ACTIVATE_LOAD_CATEGORY_LIST(this.BLOCK_CATEGORY.GET_CATEGORY());
        });
    };
    #ACTIVATE_CONNEX_SEARCH(){
        this.BUTTON_CONNEX.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(...[
                this.BLOCK_CONNEX.DRAW(),
                this.BUTTON_CONNEX_SEARCH
            ]);
            this.#ACTIVATE_LOAD_CONNEX_LIST();
        });
    };
    #ACTIVATE_COLOUR_SEARCH() {
        this.BUTTON_COLOUR.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(...[
                this.BLOCK_COLOUR.DRAW(),
                this.BUTTON_COLOUR_SEARCH
            ]);
            this.#ACTIVATE_LOAD_COLOUR_LIST();
        });
    };
    #ACTIVATE_USE_SEARCH() {
        this.BUTTON_USE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(...[
                this.BLOCK_USE.DRAW(),
                this.BUTTON_USE_SEARCH
            ]);
            // this.#ACTIVATE_LOAD_USE_LIST();
        });
    };
    #ACTIVATE_SURNAME_SEARCH() {
        this.BUTTON_SURNAME.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(...[
                this.BLOCK_SURNAME.DRAW(),
                this.BUTTON_SURNAME_SEARCH
            ]);
            this.#ACTIVATE_LOAD_SURNAME_LIST();
        });
    };
    #ACTIVATE_AGE_SEARCH() {
        this.BUTTON_AGE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(...[
                this.BLOCK_AGE.DRAW(),
                this.BUTTON_AGE_SEARCH
            ]);
            this.#ACTIVATE_LOAD_AGE_LIST();
        });
    };

    // ========== //
    // << LOAD >> //
    // ========== //

    #ACTIVATE_LOAD_TYPE_LIST(){
        this.BUTTON_TYPE_SEARCH.addEventListener('click', (event) => {
            let LIST = this.SESSION.ELEMENTS.LIST[this.BLOCK_TYPE.GET_TYPE()];
            for (let INDEX_LIST = 0; INDEX_LIST < LIST.length; INDEX_LIST++) {
                const CATEGORY = LIST[INDEX_LIST];
                let CATEGORIES = this.SESSION.ELEMENTS.DATA.CATEGORY[CATEGORY].ELEMENTS;
                for (let INDEX_CATEGORY = 0; INDEX_CATEGORY < CATEGORIES.length; INDEX_CATEGORY++) {
                    const ELEMENT = LIST[INDEX_CATEGORY];
                    if (ELEMENT !== undefined) {
                        this.PANEL_DISPLAY_ITEM(ELEMENT).then((RESULT) => {
                            this.WRAPPER_DISPLAY_LIST.append(RESULT);
                            return RESULT;
                        });
                    };
                };
            };
        });
    };
    #ACTIVATE_LOAD_CATEGORY_LIST(){
        this.BUTTON_CATEGORY_SEARCH.addEventListener('click', (event) => {
            let LIST = this.SESSION.ELEMENTS.DATA.CATEGORY[this.BLOCK_CATEGORY.GET_CATEGORY()].ELEMENTS;
            for (let INDEX_LIST = 0; INDEX_LIST < LIST.length; INDEX_LIST++) {
                const ELEMENT = LIST[INDEX_LIST];
                this.PANEL_DISPLAY_ITEM(ELEMENT).then((RESULT) => {
                    this.WRAPPER_DISPLAY_LIST.append(RESULT);
                    return RESULT;
                })
            }
        });
    };
    #ACTIVATE_LOAD_CONNEX_LIST(){
        this.BUTTON_CONNEX_SEARCH.addEventListener('click', (event) => {
            let LIST = this.BLOCK_CONNEX.DATA_CONNEX;
            for (let INDEX_LIST = 0; INDEX_LIST < LIST.length; INDEX_LIST++) {
                const ELEMENT = LIST[INDEX_LIST];
                this.PANEL_DISPLAY_ITEM(ELEMENT).then((RESULT) => {
                    this.WRAPPER_DISPLAY_LIST.append(RESULT);
                    return RESULT;
                })
            }
        });
    };
    #ACTIVATE_LOAD_COLOUR_LIST() {
        this.BUTTON_COLOUR_SEARCH.addEventListener('click', (event) => {
            let LIST = this.BLOCK_COLOUR.DATA_COLOURS[this.BLOCK_COLOUR.GET_COLOUR()];
            for (let INDEX_LIST = 0; INDEX_LIST < LIST.length; INDEX_LIST++) {
                const ELEMENT = LIST[INDEX_LIST];
                this.PANEL_DISPLAY_ITEM(ELEMENT).then((RESULT) => {
                    this.WRAPPER_DISPLAY_LIST.append(RESULT);
                    return RESULT;
                })
            }
        });
    };
    #ACTIVATE_LOAD_SURNAME_LIST() {
        this.BUTTON_SURNAME_SEARCH.addEventListener('click', (event) => {
            let LIST = this.BLOCK_SURNAME.DATA_SURNAMES[this.BLOCK_SURNAME.GET_SURNAME()];
            for (let INDEX_LIST = 0; INDEX_LIST < LIST.length; INDEX_LIST++) {
                const ELEMENT = LIST[INDEX_LIST];
                this.PANEL_DISPLAY_ITEM(ELEMENT).then((RESULT) => {
                    this.WRAPPER_DISPLAY_LIST.append(RESULT);
                    return RESULT;
                })
            }
        });
    };
    #ACTIVATE_LOAD_AGE_LIST() {
        this.BUTTON_AGE_SEARCH.addEventListener('click', (event) => {
            let LIST = this.BLOCK_AGE.DATA_AGES[this.BLOCK_AGE.GET_AGE()];
            for (let INDEX_LIST = 0; INDEX_LIST < LIST.length; INDEX_LIST++) {
                const ELEMENT = LIST[INDEX_LIST];
                this.PANEL_DISPLAY_ITEM(ELEMENT).then((RESULT) => {
                    this.WRAPPER_DISPLAY_LIST.append(RESULT);
                    return RESULT;
                })
            }
        });
    };
    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.REQUEST_SESSION_ELEMENT();
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Title',
        }).INIT();
        this.HEADER_OPTIONS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Options',
        }).INIT();
        this.HEADER_DISPLAY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Display',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'SEARCH FOR A CATEGORY';
        this.HEADER_OPTIONS.innerHTML = 'CHOOSE HOW TO SEARCH';
        this.HEADER_DISPLAY.innerHTML = 'SEARCH RESULTS';
    };
    async #BUTTON() {
        
        // ============= //
        // << UTILITY >> //
        // ============= //

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';

        // ============ //
        // << SEARCH >> //
        // ============ //

        this.BUTTON_TYPE_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();
        this.BUTTON_CATEGORY_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();
        this.BUTTON_CONNEX_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search-Connex',
        }).INIT();
        this.BUTTON_COLOUR_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search-Connex',
        }).INIT();
        this.BUTTON_SURNAME_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search-Surname',
        }).INIT();
        this.BUTTON_AGE_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search-Surname',
        }).INIT();


        this.BUTTON_TYPE_SEARCH.innerHTML = 'DISPLAY SEARCH';
        this.BUTTON_CATEGORY_SEARCH.innerHTML = 'DISPLAY SEARCH';    
        this.BUTTON_CONNEX_SEARCH.innerHTML = 'DISPLAY SEARCH';
        this.BUTTON_COLOUR_SEARCH.innerHTML = 'DISPLAY SEARCH';
        this.BUTTON_SURNAME_SEARCH.innerHTML = 'DISPLAY SEARCH';
        this.BUTTON_AGE_SEARCH.innerHTML = 'DISPLAY SEARCH';

        // ============= //
        // << FILTERS >> //
        // ============= //

        this.BUTTON_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Type',
        }).INIT();
        this.BUTTON_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Category',
        }).INIT();
        this.BUTTON_CONNEX = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Category',
        }).INIT();
        this.BUTTON_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Category',
        }).INIT();
        this.BUTTON_USE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Category',
        }).INIT();
        this.BUTTON_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Category',
        }).INIT();
        this.BUTTON_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Category',
        }).INIT();

        this.BUTTON_TYPE.innerHTML = 'TYPE';
        this.BUTTON_CATEGORY.innerHTML = 'CATEGORY';
        this.BUTTON_CONNEX.innerHTML = 'CONNEX';
        this.BUTTON_COLOUR.innerHTML = 'COLOUR';
        this.BUTTON_USE.innerHTML = 'USE';
        this.BUTTON_SURNAME.innerHTML = 'SURNAME';
        this.BUTTON_AGE.innerHTML = 'AGE';
    };
    async #BLOCKS() {
        await this.BLOCK_TYPE.INITIALISE();
        await this.BLOCK_CATEGORY.INITIALISE();
        await this.BLOCK_CONNEX.INITIALISE();
        await this.BLOCK_COLOUR.INITIALISE();
        await this.BLOCK_SURNAME.INITIALISE();
        await this.BLOCK_AGE.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Update = new DRAW_Search_Element();
await PAGE_Update.INITIALISE();
await PAGE_Update.DRAW();
