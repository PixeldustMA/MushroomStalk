import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Manager_Segment from "../../../APPS/APP - NOVA/CONSOLE/SegmentManager.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";

export default class DrawHeader {

    constructor(){

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_Headers-Title');
        this.SECTION_Buttons = document.getElementById('SECTION_Headers-Buttons');
        this.SECTION_Display = document.getElementById('SECTION_Headers-Display');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_BUTTONS = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_INPUT_HEADER = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_ADD = 'UNSET';
        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_EDIT = 'UNSET';
        this.BUTTON_REMOVE = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_HEADER = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    async DRAW() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Buttons.append(this.PANEL_BUTTONS());
        this.SECTION_Display.append(this.PANEL_DISPLAY());
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

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE
        ]);
        return this.WRAPPER_TITLE;
    };
    PANEL_BUTTONS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BUTTONS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_BACK();
        this.#ACTIVATE_ADD();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BUTTONS.append(...[
            this.BUTTON_BACK,
            this.BUTTON_ADD,
            this.BUTTON_VIEW,
            this.BUTTON_EDIT,
            this.BUTTON_REMOVE
        ]);
        return this.WRAPPER_BUTTONS;
    };
    PANEL_DISPLAY() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DISPLAY.append(...[]);
        return this.WRAPPER_DISPLAY;
    };
    PANEL_ADD() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ADD = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_SAVE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ADD.append(...[
            this.HEADER_ADD,
            this.LABEL_INPUT_HEADER,
            this.INPUT_HEADER,
            this.BUTTON_SAVE
        ]);
        return this.WRAPPER_ADD;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };
    #ACTIVATE_ADD() {
        this.BUTTON_ADD.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_ADD());
        });
    };
    #ACTIVATE_SAVE() {
        this.BUTTON_SAVE.addEventListener('click', (event) => {
            let INSTANCE_SEGMENT = new Manager_Segment({
                SEGMENT_CONFIG_ACTIVE_VALUE: this.INPUT_HEADER.value
            }).INSERT_HEADER().then((RESULT) => {return RESULT;});
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {
        await this.#HEADERS();
        await this.#LABELS();
        await this.#BUTTONS();
        await this.#INPUT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Header-Title',
        }).INIT();
        this.HEADER_ADD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Header-Add',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'EDIT HEADERS';
        this.HEADER_ADD.innerHTML = 'ADD HEADER';
    };
    async #LABELS() {
        this.LABEL_INPUT_HEADER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Header-Input',
        }).INIT();

        this.LABEL_INPUT_HEADER.innerHTML = 'Add a new header';
    };
    async #BUTTONS() {

        // ============= //
        // << UTILITY >> //
        // ============= //

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Header-Back',
        }).INIT();
        this.BUTTON_SAVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Header-Save',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SAVE.innerHTML = 'SAVE';

        // ============ //
        // << FILTER >> //
        // ============ //

        this.BUTTON_ADD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Header-Add',
        }).INIT();
        this.BUTTON_EDIT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Header-Edit',
        }).INIT();
        this.BUTTON_REMOVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Header-Remove',
        }).INIT();
        this.BUTTON_VIEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Header-View',
        }).INIT();


        this.BUTTON_ADD.innerHTML = 'ADD HEADER';
        this.BUTTON_EDIT.innerHTML = 'EDIT HEADER';
        this.BUTTON_REMOVE.innerHTML = 'REMOVE HEADER';
        this.BUTTON_VIEW.innerHTML = 'VIEW EXISTING HEADERS'
    };
    async #INPUT() {
        this.INPUT_HEADER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Header-Name',
        }).INIT();
    };
}
// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Header = new DrawHeader();
await PAGE_Header.INITIALISE();
await PAGE_Header.DRAW();
