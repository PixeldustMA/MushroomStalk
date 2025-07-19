import EL_SEARCH_Category from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Category.js";
import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import MANAGER_Settings_Database from "../../../../../APPS/APP - SETTINGS/Manager_Settings_Database.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_Search_Element extends Stalk{
    
    constructor() {

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
        this.BUTTON_SEARCH = 'UNSET';
        this.BUTTON_TYPE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_TYPE = new EL_SEARCH_Category();
        this.BLOCK_SETTINGS_MANAGER = new MANAGER_Settings_Database();
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

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_OPTIONS.append(...[
            this.HEADER_OPTIONS,
            this.BUTTON_TYPE,
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

    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };
    #ACTIVATE_TYPE_SEARCH(){
        this.BUTTON_TYPE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_SEARCH.append(...[
                this.BLOCK_TYPE.DRAW(),
                this.BUTTON_SEARCH
            ]);
            this.#ACTIVATE_LOAD_LIST();
        });
    };
    #ACTIVATE_LOAD_LIST(){
        this.BUTTON_SEARCH.addEventListener('click', (event) => {
            let LIST = this.SESSION.ELEMENTS.LIST[this.BLOCK_TYPE.GET_TYPE()];
            for (let INDEX_LIST = 0; INDEX_LIST < LIST.length; INDEX_LIST++) {
                const CATEGORY = LIST[INDEX_LIST];
                this.PANEL_DISPLAY_ITEM(CATEGORY).then((RESULT) => {
                    this.WRAPPER_DISPLAY_LIST.append(RESULT);
                    return RESULT;
                })
            }
        });
    };
    ACTIVATE_LIST_ITEM(PARAMETER_BUTTON){
        PARAMETER_BUTTON.addEventListener('click', (event) => {
            this.BLOCK_SETTINGS_MANAGER.SET_ACTIVE_ELEMENT_CATEGORY(PARAMETER_BUTTON.innerHTML).then((result) => {
                this.LOAD('CATEGORY_VIEW', 'ELEMENTS').then((R) => {return R})
                return result});
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
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();
        this.BUTTON_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();
        this.BUTTON_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_TYPE.innerHTML = 'SEARCH BY TYPE';
        this.BUTTON_SEARCH.innerHTML = 'DISPLAY SEARCH'
        
    };
    async #BLOCKS() {
        await this.BLOCK_TYPE.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Update = new DRAW_Search_Element();
await PAGE_Update.INITIALISE();
await PAGE_Update.DRAW();