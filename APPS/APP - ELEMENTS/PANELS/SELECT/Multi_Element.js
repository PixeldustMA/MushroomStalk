import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_SEARCH_Category from "../SEARCH/EL_SEARCH_Category.js";
import EL_SEARCH_Type from "../SEARCH/EL_SEARCH_Type.js";

export default class Multi_Element extends Stalk{

    constructor(){

        super()
        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_PANEL = 'UNSET';
        this.WRAPPER_FILTERS = 'UNSET';
        this.WRAPPER_DISPLAY_FILTER = 'UNSET';
        this.WRAPPER_ELEMENTS = 'UNSET';
        this.WRAPPER_DISPLAY_ELEMENT = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_FILTERS = 'UNSET';
        this.HEADER_ELEMENTS = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_FILTER_TYPE = 'UNSET';
        this.BUTTON_FILTER_CATEGORY = 'UNSET';
        this.BUTTON_FILTER_CLEAR = 'UNSET';
        this.BUTTON_FILTER_SEARCH = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_SEARCH_CATEGORY = new EL_SEARCH_Category();
        this.BLOCK_SEARCH_TYPE = new EL_SEARCH_Type();

        // ============== //
        // ## SETTINGS ## //
        // ============== //

        this.FILTER_STATUS = 'NONE';
        this.LIST_ELEMENT = [];
        this.CLICKED = 'NONE';
        this.STATUS_BUTTON = {};
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_PANEL = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_PANEL.append(...[
            this.PANEL_FILTERS(),
            this.PANEL_ELEMENTS()
        ]);
        return this.WRAPPER_PANEL;
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_FILTERS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_FILTERS = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY_FILTER = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_FILTER_CATEGORY();
        this.ACTIVATE_FILTER_TYPE();
        this.ACTIVATE_FILTER_CLEAR();
        this.ACTIVATE_FILTER_SEARCH();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_FILTERS.append(...[
            this.HEADER_FILTERS,
            this.BUTTON_FILTER_CATEGORY,
            this.BUTTON_FILTER_TYPE,
            this.BUTTON_FILTER_CLEAR,
            this.WRAPPER_DISPLAY_FILTER,
            this.BUTTON_FILTER_SEARCH
        ]);
        return this.WRAPPER_FILTERS;
    };
    PANEL_ELEMENTS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ELEMENTS = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY_ELEMENT = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ELEMENTS.append(...[
            this.HEADER_ELEMENTS,
            this.WRAPPER_DISPLAY_ELEMENT
        ]);
        return this.WRAPPER_ELEMENTS;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    // ============= //
    // << FILTERS >> //
    // ============= //

    ACTIVATE_FILTER_CATEGORY() {
        this.BUTTON_FILTER_CATEGORY.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_FILTER.append(this.BLOCK_SEARCH_CATEGORY.DRAW());
            this.FILTER_STATUS = 'CATEGORY';
        });
    };
    ACTIVATE_FILTER_TYPE() {
        this.BUTTON_FILTER_TYPE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_FILTER.append(this.BLOCK_SEARCH_TYPE.DRAW());
            this.FILTER_STATUS = 'TYPE';
        });
    };
    ACTIVATE_FILTER_CLEAR() {
        this.BUTTON_FILTER_CLEAR.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_FILTER.replaceChildren() 
            this.FILTER_STATUS = 'NONE';
        });
    };
    ACTIVATE_FILTER_SEARCH() {
        this.BUTTON_FILTER_SEARCH.addEventListener('click', (event) => {
            this.ACTIVATE_GENERATE_ELEMENTS().then((RESULT) => {return RESULT});
        });
    };

    // ============ //
    // << BUTTON >> //
    // ============ //

    async ACTIVATE_GENERATE_ELEMENTS() {

        if (this.FILTER_STATUS === 'NONE') {this.LIST_ELEMENT = this.SESSION.ELEMENTS.LIST.ELEMENT;}
        else if (this.FILTER_STATUS === 'CATEGORY') {
            this.LIST_ELEMENT = this.SESSION.ELEMENTS.DATA.CATEGORY[this.BLOCK_SEARCH_CATEGORY.GET_CATEGORY()].ELEMENTS;
        }
        else if (this.FILTER_STATUS === 'TYPE') {
            let CATEGORIES = this.SESSION.ELEMENTS.LIST[this.BLOCK_SEARCH_TYPE.GET_TYPE()];
            for (let INDEX_CATEGORY = 0; INDEX_CATEGORY < CATEGORIES.length; INDEX_CATEGORY++) {
                const CATEGORY = CATEGORIES[INDEX_CATEGORY];
                let ARRAY_CATEGORY = this.SESSION.ELEMENTS.DATA.CATEGORY[CATEGORY].ELEMENTS
                for (let INDEX_ELEMENT = 0; INDEX_ELEMENT < ARRAY_CATEGORY.length; INDEX_ELEMENT++) {
                    const ELEMENT = ARRAY_CATEGORY[INDEX_ELEMENT];
                    this.LIST_ELEMENT.push(ELEMENT);
                };
            };
        };
        for (let INDEX_BUTTON = 0; INDEX_BUTTON < this.LIST_ELEMENT.length; INDEX_BUTTON++) {
            const BUTTON_NAME = this.LIST_ELEMENT[INDEX_BUTTON];
            this.WRAPPER_DISPLAY_ELEMENT.append(await this.ACTIVATE_GENERATE_BUTTON(BUTTON_NAME));
        }
    };
    async ACTIVATE_GENERATE_BUTTON(PARAMETER_BUTTON_NAME) {
        let BUTTON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Multi-Category',
        }).INIT();
        BUTTON.innerHTML = PARAMETER_BUTTON_NAME;
        BUTTON.style.backgroundColor = 'Red';
        this.ACTIVATE_SET_CLICKED(BUTTON);
        return BUTTON;
    };
    ACTIVATE_SET_CLICKED(PARAMETER_BUTTON) {
        PARAMETER_BUTTON.addEventListener('click', (event) => {
            this.CLICKED = PARAMETER_BUTTON.innerHTML;
            let STATUS = this.STATUS_BUTTON[PARAMETER_BUTTON.innerHTML]
            if (STATUS) {
                this.STATUS_BUTTON[PARAMETER_BUTTON.innerHTML] = false
                PARAMETER_BUTTON.style.backgroundColor = 'Red';
            }
            else {
                this.STATUS_BUTTON[PARAMETER_BUTTON.innerHTML] = true
                PARAMETER_BUTTON.style.backgroundColor = 'Green';
            }
            console.log(this.STATUS_BUTTON)
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {

        await this.REQUEST_SESSION_ELEMENT();

        await this.#HEADERS();
        await this.#BUTTONS();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_FILTERS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Multi-Filters',
        }).INIT();
        this.HEADER_ELEMENTS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Multi-Filters',
        }).INIT();

        this.HEADER_FILTERS.innerHTML = 'CHOOSE FILTERS';
        this.HEADER_ELEMENTS.innerHTML = 'ELEMENTS';
    };
    async #BUTTONS() {
        this.BUTTON_FILTER_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Multi-Category',
        }).INIT();
        this.BUTTON_FILTER_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Multi-Type',
        }).INIT();
        this.BUTTON_FILTER_CLEAR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Multi-Clear',
        }).INIT();
        this.BUTTON_FILTER_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Multi-Search',
        }).INIT();

        this.BUTTON_FILTER_CATEGORY.innerHTML = 'CATEGORY';
        this.BUTTON_FILTER_TYPE.innerHTML = 'TYPE';
        this.BUTTON_FILTER_CLEAR.innerHTML = 'CLEAR';
        this.BUTTON_FILTER_SEARCH.innerHTML = 'SEARCH';
    };
    async #BLOCKS() {
        await this.BLOCK_SEARCH_CATEGORY.INITIALISE();
        await this.BLOCK_SEARCH_TYPE.INITIALISE();
    };

    // ============== //
    // ## SETTINGS ## //
    // ============== //

    GET_LAST_BUTTON_CLICKED() {return this.CLICKED};
    GET_ALL_BUTTON_CLICKED() {return this.STATUS_BUTTON};
};