import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import MANAGER_Genre from "../../../../APPS/APP - MEDIA/CONSOLE/Genre_Manager.js";
import Manager_Media from "../../../../APPS/APP - MEDIA/CONSOLE/Manager_Media.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class DrawGenre extends Stalk {

    constructor() {
        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_Genre-Title');
        this.SECTION_Category_Form = document.getElementById('SECTION_Category-Form');
        this.SECTION_Subcategory_Form = document.getElementById('SECTION_Genre-SubCategoryForm');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_CATEGORY_FORM = 'UNSET';
        this.WRAPPER_SUBCATEGORY_FORM = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';
        this.HEADER_CATEGORY = 'UNSET';
        this.HEADER_SUBCATEGORY = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_SAVE_CATEGORY = 'UNSET';
        this.BUTTON_SAVE_SUBCATEGORY = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_INPUT_CATEGORY = 'UNSET';
        this.LABEL_INPUT_SUBCATEGORY = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_CATEGORY = 'UNSET';
        this.INPUT_SUBCATEGORY = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_CATEGORY = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_CATEGORY = 'UNSET';

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        this.INSTANCE_CREATE = new Create({});
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    async DRAW() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Category_Form.append(this.PANEL_FORM_CATEGORY());
        this.SECTION_Subcategory_Form.append(this.PANEL_FORM_SUBCATEGORY());
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
    PANEL_FORM_CATEGORY() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_CATEGORY_FORM = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_SAVE_CATEGORY();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CATEGORY_FORM.append(...[
            this.LABEL_INPUT_CATEGORY,
            this.INPUT_CATEGORY,
            this.BUTTON_SAVE_CATEGORY
        ]);
        return this.WRAPPER_CATEGORY_FORM;
    };
    PANEL_FORM_SUBCATEGORY() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SUBCATEGORY_FORM = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_SAVE_SUBCATEGORY();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SUBCATEGORY_FORM.append(...[
            this.LABEL_INPUT_SUBCATEGORY,
            this.SELECT_CATEGORY,
            this.INPUT_SUBCATEGORY,
            this.BUTTON_SAVE_SUBCATEGORY
        ]);
        return this.WRAPPER_SUBCATEGORY_FORM;
    };
    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('GENRE', 'SHOPPING');
        });
    };
    #ACTIVATE_SAVE_CATEGORY() {
        this.BUTTON_SAVE_CATEGORY.addEventListener('click', (event) => {
            let INSTANCE_MEDIA = new MANAGER_Genre({
                GENRE_CONFIG_GENRE: this.INPUT_CATEGORY.value
            }).INSERT_GENRE().then((RESULT) => {
                window.location.reload();
                return RESULT});
        });
    };
    #ACTIVATE_SAVE_SUBCATEGORY() {
        this.BUTTON_SAVE_SUBCATEGORY.addEventListener('click', (event) => {

            let INSTANCE_MEDIA = new MANAGER_Genre({
                GENRE_CONFIG_GENRE: this.INSTANCE_CREATE.READ_OPTION_TEXT(this.SELECT_CATEGORY),
                GENRE_CONFIG_SUBGENRE: this.INPUT_SUBCATEGORY.value
            }).INSERT_SUBGENRE().then((RESULT) => {
                window.location.reload();
                return RESULT});
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {

        await this.REQUEST_SESSION_MEDIA();

        await this.#OPTIONS();
        await this.#HEADERS();
        await this.#LABELS();
        await this.#BUTTONS();
        await this.#INPUT();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Author-Title',
        }).INIT();
        this.HEADER_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Author-Title',
        }).INIT();
        this.HEADER_SUBCATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Author-Title',
        }).INIT();
        this.HEADER_PAGE.innerHTML = 'ADD GENRE';
        this.HEADER_CATEGORY.innerHTML = 'ADD CATEGORY';
        this.HEADER_SUBCATEGORY.innerHTML = 'ADD SUBCATEGORY';
    };
    async #LABELS() {
        this.LABEL_INPUT_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Author-Input',
        }).INIT();
        this.LABEL_INPUT_SUBCATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Author-Input',
        }).INIT();
        this.LABEL_INPUT_CATEGORY.innerHTML = 'Add a new Category';
        this.LABEL_INPUT_SUBCATEGORY.innerHTML = 'Add a new Subcategory';
    };
    async #BUTTONS() {

        // ============= //
        // << UTILITY >> //
        // ============= //

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Author-Back',
        }).INIT();
        this.BUTTON_SAVE_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Author-Save',
        }).INIT();
        this.BUTTON_SAVE_SUBCATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Author-Save',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SAVE_CATEGORY.innerHTML = 'SAVE';
        this.BUTTON_SAVE_SUBCATEGORY.innerHTML = 'SAVE';
    };
    async #INPUT() {
        this.INPUT_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Genre-Category',
        }).INIT();
        this.INPUT_SUBCATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Genre-Subcategory',
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_CATEGORY = this.SESSION.MEDIA.GENRE.LIST;
        this.OPTIONS_CATEGORY.unshift('CHOOSE A CATEGORY');
    };
    async #SELECT() {
        this.SELECT_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Genre-Category',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_CATEGORY
        }).INIT();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Author = new DrawGenre();
await PAGE_Author.INITIALISE();
await PAGE_Author.DRAW();
