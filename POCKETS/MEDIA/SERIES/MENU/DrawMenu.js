import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Menu_Series extends Stalk {

    constructor() {

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('MENU_Section-Title');
        this.SECTION_NEW = document.getElementById('MENU_Section-New');

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_NEW = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_NEW = 'UNSET';
    };

    DRAW(){
        this.SECTION_TITLE.append(this.PANEL_TITLE());
        this.SECTION_NEW.append(this.PANEL_NEW());
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

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK
        ]);        
        return this.WRAPPER_TITLE;
    };
    PANEL_NEW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_NEW = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_NEW();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_NEW.append(...[
            this.BUTTON_NEW
        ]);        
        return this.WRAPPER_NEW;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('SHOPPING', 'MENU')
        });
    };

    // =========== //
    // << BOOKS >> //
    // =========== //

    ACTIVATE_BUTTON_NEW() {
        this.BUTTON_NEW.addEventListener('click', (event) => {
            this.LOAD('NEW', 'SERIES');
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

        this.HEADER_PAGE.innerHTML = 'SERIES';

    };
    async #BUTTON() {

        // ============= //
        // << UTILITY >> //
        // ============= //

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';

        // =============== //
        // << LOCATIONS >> //
        // =============== //

        this.BUTTON_NEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-BookNew',
        }).INIT();


        this.BUTTON_NEW.innerHTML = 'NEW';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Menu_Series = new Draw_Menu_Series();
await PAGE_Menu_Series.INITIALISE();
PAGE_Menu_Series.DRAW();