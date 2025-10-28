import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Menu_Settings extends Stalk {

    constructor() {

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('MENU_Section-Title');

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_TITLE = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_SWITCH = 'UNSET';
    };

    DRAW(){
        this.SECTION_TITLE.append(this.PANEL_TITLE());

    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    PANEL_TITLE(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BACK();
        this.ACTIVATE_SWITCH();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK,
            this.BUTTON_SWITCH
        ]);        
        return this.WRAPPER_TITLE;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('TITLE', 'WELCOME')
        });
    };
    ACTIVATE_SWITCH() {

        this.BUTTON_SWITCH.addEventListener('click', (event) => {
            this.LOAD('SWITCH', 'PROFILE')
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.#HEADERS();
        await this.#BUTTON();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_MenuBooks-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'SETTINGS';

    };
    async #BUTTON() {

        // ============= //
        // << UTILITY >> //
        // ============= //

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuSettings-Back',
        }).INIT();
        this.BUTTON_SWITCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuSettings-Switch',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SWITCH.innerHTML = 'SWITCH USER';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Menu_Settings = new Draw_Menu_Settings();
await PAGE_Menu_Settings.INITIALISE();
PAGE_Menu_Settings.DRAW();