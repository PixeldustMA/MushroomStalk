
import EL_Manager from "../../../APPS/APP - ELEMENTS/CONNECTORS/EL_Manager.js";
import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import RP_Manager from "../../../APPS/APP - REPLACER/CONNECTORS/RP_Manager.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Replacer extends Stalk{
    constructor(){

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('SECTION_Replacer-Title');
        this.SECTION_SEARCH = document.getElementById('SECTION_Replacer-Search');
        this.SECTION_BUTTON = document.getElementById('SECTION_Replacer-Button');
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    DRAW(){
        this.SECTION_TITLE.append(...[
            this.PANEL_PAGE_TITLE()
        ]);
        this.SECTION_SEARCH.append(...[
            this.PANEL_PAGE_SEARCH_CATEGORY(),
            this.PANEL_PAGE_SEARCH_TAG(),
            this.PANEL_PAGE_NEW()
        ]);
        this.SECTION_BUTTON.append(...[
            this.PANEL_PAGE_BUTTON()
        ]);
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    PANEL_PAGE_TITLE(){

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
    PANEL_PAGE_SEARCH_CATEGORY(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.LABELSELECT_ENTRY_TYPE,
            this.SELECT_ENTRY_TYPE,
            this.LABELSELECT_ENTRY_SUB_CATEGORY,
            this.SELECT_ENTRY_SUBCATEGORY
        ]);
        return WRAPPER_Page;
    };
    PANEL_PAGE_SEARCH_TAG(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SUBCATEGORY();
        this.ACTIVATE_TAG();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.LABELSELECT_ENTRY_TAG,
            this.SELECT_ENTRY_TAG
        ]);
        return WRAPPER_Page;
    };
    PANEL_PAGE_NEW(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.LABEL_NEW,
            this.INPUT_NEW
        ]);
        return WRAPPER_Page;
    };
    PANEL_PAGE_BUTTON(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_UPDATE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.BUTTON_UPDATE
        ]);
        return WRAPPER_Page;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK(){

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('DATABASE', 'WAR');
        })
    };
    ACTIVATE_UPDATE(){
        this.BUTTON_UPDATE.addEventListener('click', (event) => {
            let MANAGER = new Create({});
            this.ORIGINAL_TAG = MANAGER.READ_OPTION_TEXT(this.SELECT_ENTRY_TAG);
            this.NEW_TAG = this.INPUT_NEW.value;
            let DATABASE = new RP_Manager({});
            DATABASE.CATEGORY_NEW = this.NEW_TAG;
            DATABASE.CATEGORY_OLD = this.ORIGINAL_TAG;
            DATABASE.REPLACE_CATEGORY().then((RESULT) => {return RESULT});
        });
    };
    ACTIVATE_SUBCATEGORY() {
        this.SELECT_ENTRY_TYPE.addEventListener('change', (event) => {
            let MANAGER = new Create({});
            let TAG = MANAGER.READ_OPTION_TEXT(this.SELECT_ENTRY_TYPE);
            console.log(TAG)
            if (TAG === 'ELEMENTS') {
                this.OPTIONS_SUBCAT = [
                    'CHOOSE A SUB CATEGORY',
                    'ELEMENT',
                    'CATEGORY'
                ];
                MANAGER.UPDATE_OPTIONS(this.SELECT_ENTRY_SUBCATEGORY, this.OPTIONS_SUBCAT)
            }
        });
    };
    ACTIVATE_TAG() {
        this.SELECT_ENTRY_SUBCATEGORY.addEventListener('change', (event) => {
            let MANAGER = new Create({});
            let TAG = MANAGER.READ_OPTION_TEXT(this.SELECT_ENTRY_SUBCATEGORY);
            if (TAG === 'ELEMENT') {
                this.OPTIONS_TAG = this.SESSION.ELEMENTS.LIST.ELEMENT;
                this.OPTIONS_TAG.unshift('CHOOSE A TAG TO CHANGE');
                MANAGER.UPDATE_OPTIONS(this.SELECT_ENTRY_TAG, this.OPTIONS_TAG);
            }
            else if (TAG === 'CATEGORY') {
                this.OPTIONS_TAG = this.SESSION.ELEMENTS.LIST.CATEGORY;
                this.OPTIONS_TAG.unshift('CHOOSE A TAG TO CHANGE');
                MANAGER.UPDATE_OPTIONS(this.SELECT_ENTRY_TAG, this.OPTIONS_TAG);
            }
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.REQUEST_SESSION_ELEMENT();
        await this.#TEXT();
        await this.#OPTIONS();
        await this.#SELECT();
        await this.#INPUT();
        await this.#BUTTONS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Replacer-Page'
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'REPLACER';

        this.LABELSELECT_ENTRY_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Replacer-Type'
        }).INIT();
        this.LABELSELECT_ENTRY_TAG = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Replacer-Tag'
        }).INIT();
        this.LABEL_NEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Replacer-New'
        }).INIT();
        this.LABELSELECT_ENTRY_SUB_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Replacer-New'
        }).INIT();

        this.LABELSELECT_ENTRY_TYPE.innerHTML = 'Choose database entry type';
        this.LABELSELECT_ENTRY_TAG.innerHTML = 'Choose database entry tag';
        this.LABEL_NEW.innerHTML = 'Enter name to replace term with';
        this.LABELSELECT_ENTRY_SUB_CATEGORY.innerHTML = 'Choose a subcategory';
    };
    async #SELECT(){
        this.SELECT_ENTRY_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Replacer-Type',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_TYPE
        }).INIT();
        this.SELECT_ENTRY_SUBCATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Replacer-Type',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SUBCAT
        }).INIT();
        this.SELECT_ENTRY_TAG = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Replacer-Tag',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_TAG
        }).INIT();
    };
    async #OPTIONS(){
        this.OPTIONS_TYPE = [
            'CHOOSE A TYPE',
            'ELEMENTS'
        ];
        this.OPTIONS_TAG = ['X-X-X-X'];
        this.OPTIONS_SUBCAT = ['X-X-X-X'];
    };
    async #INPUT(){
        this.INPUT_NEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Replacer-New',
        }).INIT();
    };
    async #BUTTONS(){
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Replacer-Back',
        }).INIT();
        this.BUTTON_UPDATE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Replacer-Update',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_UPDATE.innerHTML = 'UPDATE';
    };
}

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Database = new Draw_Replacer();
await PAGE_Database.INITIALISE();
PAGE_Database.DRAW();
