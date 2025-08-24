import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create";
import Lilypad from "../../../APPS/APP - LILYPAD/Lilypad";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish";
import Stalk from "../../../CONSOLE/LUNGS/Stalk";

export default class DRAW_Update extends Stalk {

    constructor() {
        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_DISPLAY = document.getElementById('SECTION_Update-Display');
        this.SECTION_BUTTON = document.getElementById('SECTION_Update-Buttons');
        this.SECTION_CHANGE = document.getElementById('SECTION_Update-Change');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_DISPLAY = 'UNSET';
        this.WRAPPER_BUTTONS = 'UNSET';
        this.WRAPPER_CHANGE = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_DISPLAY = 'UNSET';
        this.HEADER_OBSIDIAN = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_OBSIDIAN = 'UNSET';
        this.LABEL_SELECT = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_UPDATE = 'UNSET';
        this.BUTTON_BACK = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_PROFILE = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_USERS = [];

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.LIST_USERS = [];

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        this.INSTANCE_CREATE = new Create({});
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    DRAW(){
        this.SECTION_CHANGE.append(this.PANEL_CHANGE());
        this.SECTION_DISPLAY.append(this.PANEL_DISPLAY());
        this.SECTION_BUTTON.append(this.PANEL_BUTTONS());
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_DISPLAY(){

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // ## LISTENERS ## //
        // =============== //

        this.#ACTIVATE_DISPLAY();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_DISPLAY.append(...[
            this.HEADER_DISPLAY,
            this.HEADER_OBSIDIAN,
            this.LABEL_OBSIDIAN
        ]);	
        return this.WRAPPER_DISPLAY;
    };
    PANEL_BUTTONS(){

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_BUTTONS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // ## LISTENERS ## //
        // =============== //

        this.#ACTIVATE_BACK();
        this.#ACTIVATE_SAVE();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_BUTTONS.append(...[
            this.BUTTON_UPDATE,
            this.BUTTON_BACK
        ]);	
        return this.WRAPPER_BUTTONS;
    };
    PANEL_CHANGE(){

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_CHANGE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // ## LISTENERS ## //
        // =============== //

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_CHANGE.append(...[
            this.LABEL_SELECT,
            this.SELECT_PROFILE
        ]);	
        return this.WRAPPER_CHANGE;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_SAVE(){
        this.BUTTON_UPDATE.addEventListener('click', (event) => {
            let INSTANCE_LILYPAD = new Lilypad({
                LILYPAD_CONFIG_USERNAME: this.GET_USERNAME(),
                LILYPAD_CONFIG_PASSWORD: this.GET_PASSWORD(),
                // LILYPAD_CONFIG_LOGIN = false,
                LILYPAD_CONFIG_PATH_OBSIDIAN: this.GET_OBSIDIAN(),
                LILYPAD_CONFIG_LIST_USERS: this.SESSION.USERS.USERLIST,
                LILYPAD_CONFIG_DATA_COUNT: this.SESSION.SETTINGS.MUSHROOM.USER_COUNT,
                LILYPAD_CONFIG_DATA_LILYPAD: this.SESSION.USERS.LILYPAD 
            });
            INSTANCE_LILYPAD.RUN_LILYPAD('UPDATE').then((RESULT) => {});
        });
    };
    #ACTIVATE_BACK(){
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('TITLE', 'WELCOME');
        });
    };
    #ACTIVATE_DISPLAY(){
        this.SELECT_PROFILE.addEventListener('change', (event) => {
            let TAG_USER = this.INSTANCE_CREATE.READ_OPTION_TEXT(this.SELECT_PROFILE);
            let DATA_USER = this.SESSION.USERS.DATA[TAG_USER];

            this.SET_OBSIDIAN(DATA_USER.OBSIDIAN);
            this.SET_USERNAME(DATA_USER.USERNAME);
            this.SET_PASSWORD(DATA_USER.PASSWORD);

        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.REQUEST_SESSION_USERS();
        this.LIST_USERS = this.SESSION.USERS.USERLIST;

        await this.#OPTIONS();
        await this.#HEADERS();
        await this.#LABELS();
        await this.#BUTTONS();
        await this.#SELECT();

    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        // ============== //
        // << GENERATE >> //
        // ============== //

        this.HEADER_DISPLAY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Update-Display',
        }).INIT();
        this.HEADER_OBSIDIAN = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Update-Obsidian',
        }).INIT();
        this.HEADER_PASSWORD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Update-Password',
        }).INIT();
        this.HEADER_USERNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Update-Username',
        }).INIT();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_DISPLAY.innerHTML = 'ACTIVE PROFILE';
        this.HEADER_OBSIDIAN.innerHTML = 'VAULT PATH:';
        this.HEADER_PASSWORD.innerHTML = 'PASSWORD:';
        this.HEADER_USERNAME.innerHTML = 'USERNAME:';

    };
    async #LABELS(){

        // ============== //
        // << GENERATE >> //
        // ============== //

        this.LABEL_OBSIDIAN = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Update-Obsidian',
        }).INIT();
        this.LABEL_SELECT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Update-Profile',
        }).INIT();
        this.LABEL_USERNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Update-Username',
        }).INIT();
        this.LABEL_PASSWORD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Update-Password',
        }).INIT();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.LABEL_OBSIDIAN.innerHTML = 'UNSET';
        this.LABEL_SELECT.innerHTML = 'Select a profile';
        this.LABEL_USERNAME.innerHTML = 'UNSET';
        this.LABEL_PASSWORD.innerHTML = 'UNSET';
    };
    async #BUTTONS(){

        // ============== //
        // << GENERATE >> //
        // ============== //

        this.BUTTON_UPDATE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Save',
        }).INIT();
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.BUTTON_UPDATE.innerHTML = 'UPDATE';
        this.BUTTON_BACK.innerHTML = '<<';
    };
    async #SELECT(){
        this.SELECT_PROFILE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Update-User',
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_USERS = this.LIST_USERS;
        this.OPTIONS_USERS.unshift('CHOOSE A USER');
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_OBSIDIAN(PARAMETER_VALUE) {this.LABEL_OBSIDIAN.innerHTML = PARAMETER_VALUE};
    SET_USERNAME(PARAMETER_VALUE) {this.LABEL_USERNAME.innerHTML = PARAMETER_VALUE};
    SET_PASSWORD(PARAMETER_VALUE) {this.LABEL_PASSWORD.innerHTML = PARAMETER_VALUE};

    GET_OBSIDIAN(){return this.LABEL_OBSIDIAN.innerHTML};
    GET_USERNAME(){return this.LABEL_USERNAME.innerHTML};
    GET_PASSWORD(){return this.LABEL_PASSWORD.innerHTML};
};

// ========= //
// ## RUN ## //
// ========= //

const PAGE_Update = new DRAW_Update();
await PAGE_Update.INITIALISE();
PAGE_Update.DRAW();