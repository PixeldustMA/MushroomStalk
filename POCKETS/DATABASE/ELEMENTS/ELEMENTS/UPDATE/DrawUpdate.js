
import EL_Manager from "../../../../../APPS/APP - ELEMENTS/CONNECTORS/EL_Manager.js";
import EL_FORM_Display from "../../../../../APPS/APP - ELEMENTS/PANELS/FORM/EL_FORM_Display.js";
import EL_SEARCH_Element from "../../../../../APPS/APP - ELEMENTS/PANELS/SEARCH/EL_SEARCH_Element.js";
import EL_UPDATE_Connex from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/EL_UPDATE_Connex.js";
import EL_UPDATE_History from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/EL_UPDATE_History.js";
import EL_UPDATE_Physical from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/EL_UPDATE_Physical.js";
import EL_UPDATE_Taxonomy from "../../../../../APPS/APP - ELEMENTS/PANELS/UPDATE/EL_UPDATE_Taxonomy.js";
import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_View extends Stalk{

    constructor(){
        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('ELEMENT_Section-Title');
        this.SECTION_Choose = document.getElementById('ELEMENT_Section-Choose');
        this.SECTION_Form = document.getElementById('ELEMENT_Section-Form');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_CHOOSE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_FORM = new EL_FORM_Display();
        this.BLOCK_SEARCH = new EL_SEARCH_Element();
        this.BLOCK_TAXONOMY = new EL_UPDATE_Taxonomy();
        this.BLOCK_CONNEX = new EL_UPDATE_Connex();
        this.BLOCK_PHYSICAL = new EL_UPDATE_Physical();
        this.BLOCK_HISTORY = new EL_UPDATE_History();

        // ================ //
        // << PROPERTIES >> //
        // ================ //

        this.PROPERTY_ACTIVE_ELEMENT = 'UNSET';
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
        this.SECTION_Choose.append(this.PANEL_CHOOSE());
        this.SECTION_Form.append(this.PANEL_FORM());
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

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
            this.BUTTON_BACK,
            this.BUTTON_UPDATE_PAGE
        ]);
        return this.WRAPPER_TITLE;
    };
    PANEL_CHOOSE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_CHOOSE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_LOAD_ELEMENT();
        this.ACTIVATE_UPDATE();
        this.ACTIVATE_CATEGORY();
        this.ACTIVATE_SISTER_ELEMENTS();
        this.ACTIVATE_PHYSICAL();
        this.ACTIVATE_HISTORY();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CHOOSE.append(...[
            this.BLOCK_SEARCH.DRAW(),
            this.BLOCK_TAXONOMY.DRAW(),
            this.BUTTON_CATEGORY,
            this.BLOCK_CONNEX.DRAW(),
            this.BUTTON_SISTERS,
            this.BLOCK_PHYSICAL.DRAW(),
            this.BUTTON_PHYSICAL,
            this.BLOCK_HISTORY.DRAW(),
            this.BUTTON_HISTORY
            // this.BUTTON_HERITAGE
        ]);
        return this.WRAPPER_CHOOSE;
    };
    PANEL_FORM(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_FORM = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_FORM.append(...[
            this.BLOCK_FORM.DRAW(),
        ]);
        return this.WRAPPER_FORM;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    // ============= //
    // << UTILITY >> //
    // ============= //

    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };

    // =============== //
    // << LOAD PAGE >> //
    // =============== //

    /**
     * ## LOAD ELEMENT DATA
     * --------------------
     * 
     * Update the page with the current element data
     */
    ACTIVATE_LOAD_ELEMENT() {
        this.BLOCK_SEARCH.SELECT_ELEMENT.addEventListener('change', (event) => {

            this.PROPERTY_ACTIVE_ELEMENT = this.BLOCK_SEARCH.GET_ELEMENT();
            console.log(`ACTIVE ELEMENT IS SET AS:: ${this.PROPERTY_ACTIVE_ELEMENT}`);

            // =========== //
            // << PATHS >> //
            // =========== //

            this.PATH_TEXT = this.SESSION.PATHS.WAR.ELEMENTS.DESCRIPTION;

            // ========== //
            // << DATA >> //
            // ========== //

            this.DATA_ELEMENT = this.SESSION.ELEMENTS.DATA.ELEMENT[this.PROPERTY_ACTIVE_ELEMENT];
            this.DATA_TAXONOMY = this.DATA_ELEMENT.TAXONOMY;

            // ==================== //
            // << TAXONOMY PANEL >> //
            // ==================== //

            this.BLOCK_FORM.SET_ELEMENT(this.PROPERTY_ACTIVE_ELEMENT);
            this.BLOCK_FORM.SET_CATEGORY(this.DATA_TAXONOMY.CATEGORY);
            this.BLOCK_FORM.SET_TYPE(this.DATA_TAXONOMY.TYPE);

            // ================= //
            // << CONNECTIONS >> //
            // ================= //

            this.BLOCK_FORM.SET_CONNEX(this.DATA_ELEMENT.CONNEX.SISTER_ELEMENTS);

            // ============== //
            // << PHYSICAL >> //
            // ============== //

            console.log(this.DATA_ELEMENT)
            this.BLOCK_FORM.SET_COLOUR(this.DATA_ELEMENT.PHYSICAL.COLOUR);
            this.BLOCK_FORM.SET_USES(this.DATA_ELEMENT.PHYSICAL.USES).then((RESULT) => {return RESULT});

            // ============== //
            // << HERITAGE >> //
            // ============== //

            this.BLOCK_FORM.SET_SURNAME(this.DATA_ELEMENT.HERITAGE.SURNAME);

            // ============= //
            // << HISTORY >> //
            // ============= //

            this.BLOCK_FORM.SET_AGE(this.DATA_ELEMENT.HISTORY.AGE);

            // ======================= //
            // << DESCRIPTION PANEL >> //
            // ======================= //

            this.PROPERTY_ACTIVE_CODE = this.DATA_ELEMENT.DESCRIPTION;
            this.RENDERER_PATH = `${this.SESSION.PATHS.WAR.ELEMENTS.DESCRIPTION}/${this.PROPERTY_ACTIVE_CODE}.txt`;
            this.READ().then((RESULT) => {
                this.BLOCK_FORM.SET_DESCRIPTION(RESULT);
                return RESULT;
            });
        });
    };

    // ============ //
    // << UPDATE >> //
    // ============ //

    ACTIVATE_UPDATE() {

        this.BUTTON_UPDATE_PAGE.addEventListener('click', (event) => {

            // ============== //
            // << TAXONOMY >> //
            // ============== //

            this.ACTIVE_TAXONOMY_ELEMENT = this.BLOCK_FORM.GET_ELEMENT();
            this.ACTIVE_TAXONOMY_CATEGORY = this.BLOCK_FORM.GET_CATEGORY();
            this.ACTIVE_TAXONOMY_TYPE = this.BLOCK_FORM.GET_TYPE();

            // ================= //
            // << DESCRIPTION >> //
            // ================= //

            this.ACTIVE_DESCRIPTION = this.BLOCK_FORM.GET_DESCRIPTION();

            // ============ //
            // << CONNEX >> //
            // ============ //

            this.ACTIVE_SISTERS = this.BLOCK_FORM.GET_CONNEX();

            // ============== //
            // << PHYSICAL >> //
            // ============== //

            this.ACTIVE_COLOUR = this.BLOCK_FORM.GET_COLOUR();
            this.ACTIVE_USES = this.BLOCK_FORM.GET_USES();

            // ============== //
            // << HERITAGE >> //
            // ============== //

            this.ACTIVE_SURNAME = this.BLOCK_FORM.GET_SURNAME();

            // ============= //
            // << HISTORY >> //
            // ============= //

            this.ACTIVE_AGE = this.BLOCK_FORM.GET_AGE();

            // ============= //
            // << PROCESS >> //
            // ============= //

            const MANAGER = new EL_Manager({
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_CATEGORY: this.ACTIVE_TAXONOMY_CATEGORY,
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_TYPE: this.ACTIVE_TAXONOMY_TYPE,
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_ELEMENT: this.ACTIVE_TAXONOMY_ELEMENT, 
                ELEMENT_CONFIG_DATA_OLD: this.SESSION.ELEMENTS.DATA.ELEMENT[this.ACTIVE_TAXONOMY_ELEMENT],
                ELEMENT_CONFIG_PROPERTY_DESCRIPTION_TEXT: this.ACTIVE_DESCRIPTION,
                ELEMENT_CONFIG_PROPERTY_DESCRIPTION_CODE: this.SESSION.ELEMENTS.DATA.ELEMENT[this.ACTIVE_TAXONOMY_ELEMENT].DESCRIPTION,
                ELEMENT_CONFIG_PROPERTY_CONNEX_SISTERS: this.ACTIVE_SISTERS,
                ELEMENT_CONFIG_PROPERTY_PHYSICAL_COLOUR: this.ACTIVE_COLOUR,
                ELEMENT_CONFIG_PROPERTY_PHYSICAL_USES: this.ACTIVE_USES,
                ELEMENT_CONFIG_PROPERTY_HERITAGE_SURNAME: this.ACTIVE_SURNAME,
                ELEMENT_CONFIG_PROPERTY_HISTORY_AGE: this.ACTIVE_AGE
            });

        MANAGER.UPDATE_ELEMENT().then((RESULT) => {
            // window.location.reload()
            return RESULT});
        }); 
    };
    ACTIVATE_CATEGORY() {
        this.BUTTON_CATEGORY.addEventListener('click', (event) => {
            this.BLOCK_FORM.SET_CATEGORY(this.BLOCK_TAXONOMY.BLOCK_SEARCH_CATEGORY.GET_CATEGORY());
            this.BLOCK_TAXONOMY.WRAPPER_DISPLAY.remove();
            this.BLOCK_FORM.SET_TYPE(this.BLOCK_TAXONOMY.BLOCK_SEARCH_CATEGORY.GET_TYPE());
        });
    };
    ACTIVATE_SISTER_ELEMENTS() {
        this.BUTTON_SISTERS.addEventListener('click', (event) => {
            let OBJECT_ELEMENTS = this.BLOCK_CONNEX.BLOCK_SET_SISTER.GET_ALL_BUTTON_CLICKED();
            let ELEMENTS = Object.keys(OBJECT_ELEMENTS);
            console.log(ELEMENTS);
            this.GENERATE_LABEL(ELEMENTS).then((RESULT) => {
                this.BLOCK_FORM.SET_LIST(ELEMENTS)
                return RESULT});
        });
    };
    async GENERATE_LABEL(LABEL_NAME) {
        // let LABEL = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'label',
        //     CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Update-Title',
        // }).INIT();
        // LABEL.innerHTML = LABEL_NAME;
        let ARRAY = this.BLOCK_FORM.GET_CONNEX();
        console.log(ARRAY);
        for (let index = 0; index < LABEL_NAME.length; index++) {
            const element = LABEL_NAME[index];
            if (!ARRAY.includes(element)) {ARRAY.push(element)}
        }
        await this.BLOCK_FORM.SET_CONNEX(ARRAY);
    };
    ACTIVATE_PHYSICAL() {
        this.BUTTON_PHYSICAL.addEventListener('click', (event) => {
            let INPUTS = this.BLOCK_PHYSICAL.BLOCK_INPUT_USE.GET_INPUT_VALUES();
            this.BLOCK_FORM.SET_USES(INPUTS).then((RES) => {return RES})
        })
    };
    ACTIVATE_HISTORY() {

        this.BUTTON_HISTORY.addEventListener('click', (event) => {

            console.log(this.BLOCK_HISTORY.GET_AGE())
            this.BLOCK_FORM.SET_AGE(this.BLOCK_HISTORY.GET_AGE());
            this.BLOCK_HISTORY.WRAPPER_DISPLAY.remove();
        });
    }

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============== //
        // << SESSIONS >> //
        // ============== //

        await this.REQUEST_SESSION_ELEMENT();

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#HEADERS();
        await this.#BUTTON();
        await this.#PANELS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Update-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'UPDATE ELEMENT';
    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Back',
        }).INIT();
        this.BUTTON_UPDATE_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Page',
        }).INIT();
        this.BUTTON_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Update-Category',
        }).INIT();
        this.BUTTON_SISTERS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Connex-Save',
        }).INIT();
        this.BUTTON_PHYSICAL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Physical-Panel',
        }).INIT();
        this.BUTTON_HISTORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Physical-Panel',
        }).INIT();
        // this.BUTTON_HERITAGE = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'button',
        //     CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Physical-Panel',
        // }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_UPDATE_PAGE.innerHTML = 'UPDATE ELEMENT DATA';
        this.BUTTON_CATEGORY.innerHTML = 'UPDATE CATEGORY';
        this.BUTTON_SISTERS.innerHTML = 'UPDATE SISTERS';
        this.BUTTON_PHYSICAL.innerHTML = 'UPDATE PHYSICAL';
        this.BUTTON_HISTORY.innerHTML = 'UPDATE HISTORY';
        // this.BUTTON_HERITAGE.innerHTML = 'UPDATE HERITAGE'
    };
    async #PANELS() {
        await this.BLOCK_SEARCH.INITIALISE();
        await this.BLOCK_FORM.INITIALISE();
        await this.BLOCK_TAXONOMY.INITIALISE();
        await this.BLOCK_CONNEX.INITIALISE();
        await this.BLOCK_PHYSICAL.INITIALISE();
        // await this.BLOCK_HERITAGE.INITIALISE();
        await this.BLOCK_HISTORY.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Element = new Draw_View();
await PAGE_Element.INITIALISE();
await PAGE_Element.DRAW();
