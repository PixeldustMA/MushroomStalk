import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";

export default class Draw_Menu extends Stalk{

    /**
     * ## ELEMENT CONSTRUCTOR
     */
    constructor(){
        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_Menu-Title');
        this.SECTION_Buttons = document.getElementById('SECTION_Menu-Buttons');

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // << BUTTONS >> //
        // ============= //

        this.BUTTON_NEW = 'UNSET';
        this.BUTTON_UPDATE = 'UNSET';
        this.BUTTON_CATEGORY = 'UNSET';
        this.BUTTON_UPDATE_CATEGORY = 'UNSET';
        this.BUTTON_SEARCH_CATEGORY = 'UNSET';
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
        this.SECTION_Buttons.append(this.PANEL_BUTTONS());
    };

    PANEL_TITLE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PAGE
        ]);
        return WRAPPER_Page;
    };
    PANEL_BUTTONS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        this.ACTIVATE_NEW();
        this.ACTIVATE_BACK();
        this.ACTIVATE_CATEGORY();
        this.ACTIVATE_UPDATE();
        this.ACTIVATE_UPDATE_CATEGORY();
        this.ACTIVATE_SEARCH_CATEGORY();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.BUTTON_NEW,
            this.BUTTON_UPDATE,
            this.BUTTON_CATEGORY,
            this.BUTTON_UPDATE_CATEGORY,
            this.BUTTON_SEARCH_CATEGORY,
            this.BUTTON_BACK
        ]);
        return WRAPPER_Page;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_NEW() {
        this.BUTTON_NEW.addEventListener('click', (event) => {
            this.LOAD('NEW', 'ELEMENTS');
        });
    };
    ACTIVATE_UPDATE() {
        this.BUTTON_UPDATE.addEventListener('click', (event) => {
            this.LOAD('UPDATE', 'ELEMENTS');
        });
    };
    ACTIVATE_CATEGORY() {
        this.BUTTON_CATEGORY.addEventListener('click', (event) => {
            this.LOAD('CATEGORY', 'ELEMENTS');
        });
    };
    ACTIVATE_UPDATE_CATEGORY() {
        this.BUTTON_UPDATE_CATEGORY.addEventListener('click', (event) => {
            this.LOAD('CATEGORY_UPDATE', 'ELEMENTS');
        });
    };
    ACTIVATE_SEARCH_CATEGORY() {
        this.BUTTON_SEARCH_CATEGORY.addEventListener('click', (event) => {
            this.LOAD('CATEGORY_SEARCH', 'ELEMENTS');
        });
    };
    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('DATABASE', 'WAR')
        });
    }

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.#TEXT();
        await this.#BUTTONS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Menu-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'ELEMENTS';
    };
    async #BUTTONS() {

        this.BUTTON_NEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Menu-New'
        }).INIT();
        this.BUTTON_UPDATE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Menu-Update'
        }).INIT();
        this.BUTTON_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Menu-CATEGORY'
        }).INIT();
        this.BUTTON_UPDATE_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Menu-CATEGORY'
        }).INIT();
        this.BUTTON_SEARCH_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Menu-SEARCH'
        }).INIT();
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Menu-Back'
        }).INIT();

        this.BUTTON_NEW.innerHTML = 'ADD ELEMENT';
        this.BUTTON_UPDATE.innerHTML = 'UPDATE ELEMENT';
        this.BUTTON_CATEGORY.innerHTML = 'ADD CATEGORY';
        this.BUTTON_UPDATE_CATEGORY.innerHTML = 'UPDATE CATEGORY';
        this.BUTTON_SEARCH_CATEGORY.innerHTML = 'SEARCH CATEGORY';
        this.BUTTON_BACK.innerHTML = '<<';
    }
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Menu = new Draw_Menu();
await PAGE_Menu.INITIALISE();
PAGE_Menu.DRAW();
