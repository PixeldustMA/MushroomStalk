import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import PANEL_Countries from "../../../../APPS/APP - JELLYFISH/ELEMENTS/COUNTRIES/Panel_Countries.js";
import MANAGER_Author from "../../../../APPS/APP - MEDIA/CONSOLE/Author_Manager.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class DrawAuthor extends Stalk {

    constructor() {
        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_Author-Title');
        this.SECTION_Form = document.getElementById('SECTION_Author-Form');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_FORM = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_SAVE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_INPUT_NAME = 'UNSET';
        this.LABEL_INPUT_YEAR = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_AUTHOR = 'UNSET';
        this.INPUT_YEAR = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_COUNTRY = new PANEL_Countries();
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    async DRAW() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Form.append(this.PANEL_FORM());
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
    PANEL_FORM() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_FORM = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_SAVE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_FORM.append(...[
            this.LABEL_INPUT_NAME,
            this.INPUT_AUTHOR,
            this.LABEL_INPUT_YEAR,
            this.INPUT_YEAR,
            this.BLOCK_COUNTRY.DRAW(),
            this.BUTTON_SAVE
        ]);
        return this.WRAPPER_FORM;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'AUTHORS');
        });
    };
    #ACTIVATE_SAVE() {
        this.BUTTON_SAVE.addEventListener('click', (event) => {
            let INSTANCE_MEDIA = new MANAGER_Author({
                AUTHOR_CONFIG_AUTHOR: this.INPUT_AUTHOR.value,
                AUTHOR_CONFIG_COUNTRY: this.BLOCK_COUNTRY.GET_COUNTRY(),
                AUTHOR_CONFIG_YEAR: this.INPUT_YEAR.value
            }).INSERT_AUTHOR().then((RESULT) => {
                window.location.reload()
                return RESULT});
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
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Author-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'ADD AUTHOR';
    };
    async #LABELS() {
        this.LABEL_INPUT_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Author-Name',
        }).INIT();
        this.LABEL_INPUT_YEAR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Author-Year',
        }).INIT();

        this.LABEL_INPUT_NAME.innerHTML = 'Add a new Author';
        this.LABEL_INPUT_YEAR.innerHTML = 'Add their birth year'
    };
    async #BUTTONS() {

        // ============= //
        // << UTILITY >> //
        // ============= //

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Author-Back',
        }).INIT();
        this.BUTTON_SAVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Author-Save',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SAVE.innerHTML = 'SAVE';

    };
    async #INPUT() {
        this.INPUT_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Author-Name',
        }).INIT();
        this.INPUT_YEAR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Author-Year',
        }).INIT();
    };
    async #BLOCKS() {
        await this.BLOCK_COUNTRY.INITIALISE(); 
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Author = new DrawAuthor();
await PAGE_Author.INITIALISE();
await PAGE_Author.DRAW();
