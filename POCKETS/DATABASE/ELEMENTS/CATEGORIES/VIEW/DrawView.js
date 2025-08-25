import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_View_Category extends Stalk{
    
    constructor() {

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_View-Title');
        this.SECTION_Buttons = document.getElementById('SECTION_View-Buttons');
        this.SECTION_Display = document.getElementById('SECTION_View-Display');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_BUTTONS = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';
        this.WRAPPER_TAXONOMY = 'UNSET';
        this.WRAPPER_DESCRIPTION = 'UNSET';

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PAGE = 'UNSET';
        this.HEADER_BUTTONS = 'UNSET';
        this.HEADER_TAXONOMY = 'UNSET';
        this.HEADER_DESCRIPTION = 'UNSET';
        this.HEADER_TYPE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_TYPE = 'UNSET';

        // =============== //
        // ## PARAGRAPH ## //
        // =============== //

        this.TEXT_DESCRIPTION = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_TAXONOMY = 'UNSET';
        this.BUTTON_DESCRIPTION = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){
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
    PANEL_BUTTONS(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BUTTONS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BUTTONS.append(...[
            this.HEADER_BUTTONS,
            this.BUTTON_BACK,
            this.BUTTON_TAXONOMY,
            this.BUTTON_DESCRIPTION,
            this.BUTTON_ELEMENTS
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

        this.ACTIVATE_TAXONOMY();
        this.ACTIVATE_DESCRIPTION();
        this.ACTIVATE_ELEMENTS();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DISPLAY.append(...[

        ]);
        return this.WRAPPER_DISPLAY;
    };

    // ===================== //
    // << DATA CATEGORIES >> //
    // ===================== //

    PANEL_TAXONOMY() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TAXONOMY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TAXONOMY.append(...[
            this.HEADER_TAXONOMY,
            this.HEADER_TYPE,
            this.LABEL_TYPE
        ]);
        return this.WRAPPER_TAXONOMY;
    };
    PANEL_DESCRIPTION() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DESCRIPTION = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DESCRIPTION.append(...[
            this.HEADER_DESCRIPTION,
            this.TEXT_DESCRIPTION
        ]);
        return this.WRAPPER_DESCRIPTION;
    };
    PANEL_ELEMENTS() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ELEMENTS = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_LIST = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ELEMENTS.append(...[
            this.HEADER_ELEMENTS,
            this.WRAPPER_LIST
        ]);
        return this.WRAPPER_ELEMENTS;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };
    ACTIVATE_TAXONOMY() {
        this.BUTTON_TAXONOMY.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_TAXONOMY());
        });
    };
    ACTIVATE_DESCRIPTION() {
        this.BUTTON_DESCRIPTION.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_DESCRIPTION());
        });
    };
    ACTIVATE_ELEMENTS() {
        this.BUTTON_ELEMENTS.addEventListener('click', (event) => {

            this.WRAPPER_DISPLAY.append(this.PANEL_ELEMENTS())
            for (let INDEX_ELEMENTS = 0; INDEX_ELEMENTS < this.ACTIVE_DATA.ELEMENTS.length; INDEX_ELEMENTS++) {
                const ELEMENT = this.ACTIVE_DATA.ELEMENTS[INDEX_ELEMENTS];
                const WRAPPER = new Connector_Jellyfish().INITIALISE_WRAPPER()
                const LABEL = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'label',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
                }).INIT().then((LABEL_RESULT) => {
                    LABEL_RESULT.innerHTML = ELEMENT;
                    WRAPPER.append(LABEL_RESULT)
                    return LABEL_RESULT
                });
                this.WRAPPER_LIST.append(WRAPPER);
            }
            
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.REQUEST_SESSION_ELEMENT();
        await this.REQUEST_SESSION_SETTINGS();
        this.ACTIVE_CATEGORY = this.SESSION.SETTINGS.DATA.STATUS.ELEMENT_CATEGORY;
        this.ACTIVE_DATA = this.SESSION.ELEMENTS.DATA.CATEGORY[this.ACTIVE_CATEGORY];
        this.ACTIVE_DESCRIPTION = await this.GENERATE_DESCRIPTION();
        await this.#HEADERS();
        await this.#BUTTON();
        await this.#LABELS();
        await this.#TEXT();
    };
    async GENERATE_DESCRIPTION() {
        this.RENDERER_PATH = `${this.SESSION.PATHS.WAR.ELEMENTS.DESCRIPTION}/${this.ACTIVE_DATA.DESCRIPTION}.txt`;
        return await this.READ();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Title',
        }).INIT();
        this.HEADER_BUTTONS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Buttons',
        }).INIT();
        this.HEADER_TAXONOMY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Taxonomy',
        }).INIT();
        this.HEADER_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_ELEMENTS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();

        this.HEADER_PAGE.innerHTML =  this.ACTIVE_DATA.TAXONOMY.NAME;
        this.HEADER_BUTTONS.innerHTML = 'CHOOSE DATA TO DISPLAY';
        this.HEADER_TAXONOMY.innerHTML = 'TAXONOMY';
        this.HEADER_DESCRIPTION.innerHTML = 'DESCRIPTION';
        this.HEADER_TYPE.innerHTML = 'TYPE'
        this.HEADER_ELEMENTS.innerHTML = 'ELEMENTS'

    };
    async #LABELS() {
        this.LABEL_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.LABEL_TYPE.innerHTML = this.ACTIVE_DATA.TAXONOMY.TYPE
    };
    async #TEXT(){
        this.TEXT_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'p',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.TEXT_DESCRIPTION.innerHTML = this.ACTIVE_DESCRIPTION
    }
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Back'
        }).INIT();
        this.BUTTON_TAXONOMY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Taxonomy'
        }).INIT();
        this.BUTTON_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Description'
        }).INIT();
        this.BUTTON_ELEMENTS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Description'
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_TAXONOMY.innerHTML = 'TAXONOMY';
        this.BUTTON_DESCRIPTION.innerHTML = 'DESCRIPTION';
        this.BUTTON_ELEMENTS.innerHTML = 'ELEMENTS'
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_View = new DRAW_View_Category();
await PAGE_View.INITIALISE();
await PAGE_View.DRAW();