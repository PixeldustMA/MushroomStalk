import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";

export default class Draw_Database extends Stalk{

    /**
     * ## ELEMENT CONSTRUCTOR
     */
    constructor(){
        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('DATABASE_Section-Title');
        this.SECTION_Buttons = document.getElementById('DATABASE_Section-Buttons');

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // << BUTTONS >> //
        // ============= //

        this.BUTTON_ARCHIVE = 'UNSET';
        this.BUTTON_ELEMENTS = 'UNSET';
        this.BUTTON_OBSERVATORY = 'UNSET';
        this.BUTTON_TOMES = 'UNSET';
        this.BUTTON_NAMES = 'UNSET';
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

        this.ACTIVATE_ARCHIVE();
        this.ACTIVATE_ELEMENTS();
        this.ACTIVATE_EXPLORER();
        this.ACTIVATE_TOMES();
        this.ACTIVATE_REPLACER();
        this.ACTIVATE_NAMES();
        this.ACTIVATE_BACK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.BUTTON_ARCHIVE,
            this.BUTTON_ELEMENTS,
            this.BUTTON_OBSERVATORY,
            this.BUTTON_TOMES,
            this.BUTTON_NAMES,
            this.BUTTON_REPLACER,
            this.BUTTON_BACK
        ]);
        return WRAPPER_Page;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_ARCHIVE() {
        this.BUTTON_ARCHIVE.addEventListener('click', (event) => {
            if (this.SESSION.SETTINGS.DATA.STATUS.ARCHIVE === 'ACTIVE') {
                this.LOAD('LANDING_ACTIVE', 'ARCHIVE');
            }
            else {this.LOAD('LANDING_INACTIVE', 'ARCHIVE');}
        });
    };
    ACTIVATE_ELEMENTS() {
        this.BUTTON_ELEMENTS.addEventListener('click', (event) => {
            this.LOAD('MAIN_MENU', 'ELEMENTS');
        });
    };
    ACTIVATE_EXPLORER() {
        this.BUTTON_OBSERVATORY.addEventListener('click', (event) => {
            this.LOAD('MENU', 'EXPLORER');
        });
    };
    ACTIVATE_TOMES() {
        this.BUTTON_TOMES.addEventListener('click', (event) => {
            this.LOAD('MENU', 'TOMES');
        });
    };
    ACTIVATE_NAMES() {
        this.BUTTON_NAMES.addEventListener('click', (event) => {
            this.LOAD('MENU', 'NAMES');
        });
    };
    ACTIVATE_REPLACER() {
        this.BUTTON_REPLACER.addEventListener('click', (event) => {
            this.LOAD('REPLACER', 'WAR');
        });
    };
    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MAP', 'WELCOME')
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.REQUEST_SESSION_SETTINGS();
        await this.#TEXT();
        await this.#BUTTONS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //
    async #TEXT(){

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Database-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'DATABASE';
    };
    async #BUTTONS() {

        this.BUTTON_ARCHIVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Database-Archive'
        }).INIT();
        this.BUTTON_ELEMENTS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Database-Elements'
        }).INIT();
        this.BUTTON_TOMES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Database-Tomes'
        }).INIT();
        this.BUTTON_OBSERVATORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Database-Observatory'
        }).INIT();
        this.BUTTON_NAMES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Database-Names'
        }).INIT();
        this.BUTTON_REPLACER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Database-Observatory'
        }).INIT();
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Database-Observatory'
        }).INIT();

        this.BUTTON_ARCHIVE.innerHTML = 'ARCHIVE';
        this.BUTTON_ELEMENTS.innerHTML = 'ELEMENTS';
        this.BUTTON_TOMES.innerHTML = 'TOMES';
        this.BUTTON_OBSERVATORY.innerHTML = 'OBSERVATORY';
        this.BUTTON_NAMES.innerHTML = 'NAMES';
        this.BUTTON_REPLACER.innerHTML = 'REPLACER';
        this.BUTTON_BACK.innerHTML = '<<'
    }
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Database = new Draw_Database();
await PAGE_Database.INITIALISE();
PAGE_Database.DRAW();
