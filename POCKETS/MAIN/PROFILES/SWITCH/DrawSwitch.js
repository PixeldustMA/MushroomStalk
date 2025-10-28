import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Lilypad from "../../../../APPS/APP - LILYPAD/Lilypad.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class DrawSwitch extends Stalk{

    constructor() {

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('SECTION_Switch-Title');
        this.SECTION_USER = document.getElementById('SECTION_Switch-User');
        this.SECTION_BUTTON = document.getElementById('SECTION_Switch-Button');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_USER = 'UNSET';
        this.WRAPPER_BUTTON = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_TITLE = 'UNSET;';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_SWITCH = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_INPUT_USERNAME = 'UNSET';
        this.LABEL_INPUT_PASSWORD = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_USERNAME = 'UNSET';
        this.INPUT_PASSWORD = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {
        this.SECTION_TITLE.append(this.PANEL_TITLE());
        this.SECTION_USER.append(this.PANEL_USER());
        this.SECTION_BUTTON.append(this.PANEL_BUTTON());
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_TITLE() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // ## LISTENERS ## //
        // =============== //

        this.#ACTIVATE_BACK();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_TITLE,
            this.BUTTON_BACK
        ]);	
        return this.WRAPPER_TITLE;
    };
    PANEL_USER() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_USER = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // ## LISTENERS ## //
        // =============== //

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_USER.append(...[
            this.LABEL_INPUT_USERNAME,
            this.INPUT_USERNAME,
            this.LABEL_INPUT_PASSWORD,
            this.INPUT_PASSWORD
        ]);	
        return this.WRAPPER_USER;

    };
    PANEL_BUTTON() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_BUTTON = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // ## LISTENERS ## //
        // =============== //

        this.#ACTIVATE_SWITCH();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_BUTTON.append(...[
            this.BUTTON_SWITCH
        ]);	
        return this.WRAPPER_BUTTON;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'SETTINGS')
        });
    };
    #ACTIVATE_SWITCH() {
        this.BUTTON_SWITCH.addEventListener('click', (event) => {

            let INSTANCE = new Lilypad({
                LILYPAD_CONFIG_USERNAME: this.INPUT_USERNAME.value
            }).SWITCH_USER().then((RES) => {
                window.location.reload();
                return RES})

        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {

        await this.#HEADERS();
        await this.#BUTTONS();
        await this.#LABELS();
        await this.#INPUT();

    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {

        this.HEADER_TITLE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Switch-Title',
        }).INIT();

        this.HEADER_TITLE.innerHTML = 'SWITCH USER';
    };
    async #BUTTONS() {

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Switch-Back',
        }).INIT();
        this.BUTTON_SWITCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Switch-Switch',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SWITCH.innerHTML = 'SWITCH';
    };
    async #LABELS() {
        this.LABEL_INPUT_USERNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Switch-Username',
        }).INIT();
        this.LABEL_INPUT_PASSWORD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Switch-Password',
        }).INIT();

        this.LABEL_INPUT_USERNAME.innerHTML = 'INSERT USERNAME';
        this.LABEL_INPUT_PASSWORD.innerHTML = 'INSERT PASSWORD';
    };
    async #INPUT() {

        this.INPUT_USERNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Switch-Username',
        }).INIT();
        this.INPUT_PASSWORD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Switch-Password',
        }).INIT();
    };
};

// ========= //
// ## RUN ## //
// ========= //

const PAGE_Switch = new DrawSwitch();
await PAGE_Switch.INITIALISE();
PAGE_Switch.DRAW();