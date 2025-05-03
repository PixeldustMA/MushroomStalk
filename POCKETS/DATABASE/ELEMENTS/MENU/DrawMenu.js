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
        this.BUTTON_VIEW = 'UNSET';
        this.BUTTON_VIEW = 'UNSET';
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
            this.HEADER_PAGE,
        ]);
        return WRAPPER_Page;
    };
    PANEL_BUTTONS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        this.ACTIVATE_NEW();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.BUTTON_NEW,
            this.BUTTON_UPDATE,
            this.BUTTON_VIEW
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
    ACTIVATE_VIEW() {
        this.BUTTON_VIEW.addEventListener('click', (event) => {
            this.LOAD('VIEW', 'ELEMENTS');
        });
    };

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
        this.BUTTON_VIEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Menu-View'
        }).INIT();

        this.BUTTON_NEW.innerHTML = 'NEW';
        this.BUTTON_UPDATE.innerHTML = 'UPDATE';
        this.BUTTON_VIEW.innerHTML = 'VIEW';
    }
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Menu = new Draw_Menu();
await PAGE_Menu.INITIALISE();
PAGE_Menu.DRAW();
