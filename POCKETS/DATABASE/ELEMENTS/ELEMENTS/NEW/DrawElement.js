import EL_Manager from "../../../../../APPS/APP - ELEMENTS/CONNECTORS/EL_Manager.js";
import EL_INPUT_Description from "../../../../../APPS/APP - ELEMENTS/PANELS/INPUT/EL_INPUT_Description.js";
import EL_INPUT_Heritage from "../../../../../APPS/APP - ELEMENTS/PANELS/INPUT/EL_INPUT_Heritage.js";
import EL_INPUT_History from "../../../../../APPS/APP - ELEMENTS/PANELS/INPUT/EL_INPUT_History.js";
import EL_INPUT_Physical from "../../../../../APPS/APP - ELEMENTS/PANELS/INPUT/EL_INPUT_Physical.js";
import EL_INPUT_Taxonomy from "../../../../../APPS/APP - ELEMENTS/PANELS/INPUT/EL_INPUT_Taxonomy.js";
import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Element extends Stalk{

    /**
     * ## ELEMENT CONSTRUCTOR
     */
    constructor(){
        super();

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_TAXONOMY = 'UNSET';
        this.WRAPPER_DESCRIPTION = 'UNSET';
        this.WRAPPER_HISTORY = 'UNSET';
        this.WRAPPER_HERITAGE = 'UNSET';
        this.WRAPPER_PHYSICAL = 'UNSET';

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('ELEMENT_Section-Title');
        this.SECTION_Taxonomy = document.getElementById('ELEMENT_Section-Taxonomy');
        this.SECTION_Description = document.getElementById('ELEMENT_Section-Description');
        this.SECTION_History = document.getElementById('ELEMENT_Section-History');
        this.SECTION_Heritage = document.getElementById('ELEMENT_Section-Heritage');
        this.SECTION_Physical = document.getElementById('ELEMENT_Section-Physical');

        // ============ //
        // << HEADER >> //
        // ============ //

        this.HEADER_TITLE = 'UNSET';
        this.HEADER_TAXONOMY = 'UNSET';
        this.HEADER_HISTORY = 'UNSET';
        this.HEADER_HERITAGE = 'UNSET';
        this.HEADER_PHYSICAL = 'UNSET';

        // ============= //
        // << BUTTONS >> //
        // ============= //

        this.BUTTON_BACK = 'UNSET';

        // ============ //
        // << PANELS >> //
        // ============ //

        this.BLOCK_TAXONOMY = new EL_INPUT_Taxonomy();
        this.BLOCK_DESCRIPTION = new EL_INPUT_Description();
        this.BLOCK_HISTORY = new EL_INPUT_History();
        this.BLOCK_HERITAGE = new EL_INPUT_Heritage();
        this.BLOCK_PHYSICAL = new EL_INPUT_Physical();
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

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.SECTION_Title.append(...[this.PANEL_TITLE()]);
        this.SECTION_Taxonomy.append(...[this.PANEL_TAXONOMY()]);	
        this.SECTION_Description.append(...[this.PANEL_DESCRIPTION()]);	
        this.SECTION_History.append(...[this.PANEL_HISTORY()]);
        this.SECTION_Heritage.append(...[this.PANEL_HERITAGE()]);
        this.SECTION_Physical.append(...[this.PANEL_PHYSICAL()]);
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

        this.ACTIVATE_BACK();
        this.ACTIVATE_SAVE();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_TITLE,
            this.BUTTON_BACK,
            this.BUTTON_SAVE
        ]);	
        return this.WRAPPER_TITLE;
    };
    PANEL_TAXONOMY() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TAXONOMY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_TAXONOMY.append(...[
            this.HEADER_TAXONOMY,
            this.BLOCK_TAXONOMY.DRAW()
        ]);	
        return this.WRAPPER_TAXONOMY;
    };
    PANEL_DESCRIPTION() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_DESCRIPTION = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_DESCRIPTION.append(...[
            this.BLOCK_DESCRIPTION.DRAW()
        ]);	
        return this.WRAPPER_DESCRIPTION;
    };
    PANEL_HISTORY() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_HISTORY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_HISTORY.append(...[
            this.HEADER_HISTORY,
            this.BLOCK_HISTORY.DRAW()
        ]);	
        return this.WRAPPER_HISTORY;
    };
    PANEL_HERITAGE() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_HERITAGE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_HERITAGE.append(...[
            this.HEADER_HERITAGE,
            this.BLOCK_HERITAGE.DRAW()
        ]);	
        return this.WRAPPER_HERITAGE;
    };
    PANEL_PHYSICAL() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_PHYSICAL = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_PHYSICAL.append(...[
            this.HEADER_PHYSICAL,
            this.BLOCK_PHYSICAL.DRAW()
        ]);	
        return this.WRAPPER_PHYSICAL;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };
    ACTIVATE_SAVE() {

        this.BUTTON_SAVE.addEventListener('click', (event) => {

            // ============== //
            // << TAXONOMY >> //
            // ============== //

            const TAG_NAME = this.BLOCK_TAXONOMY.GET_ELEMENT();
            const TAG_CATEGORY = this.BLOCK_TAXONOMY.GET_CATEGORY();
            const TAG_TYPE = this.BLOCK_TAXONOMY.GET_TYPE();

            // ================= //
            // << DESCRIPTION >> //
            // ================= //

            const TAG_DESCRIPTION_TEXT = this.BLOCK_DESCRIPTION.GET_DESCRIPTION();
            const TAG_DESCRIPTION_CODE = this.BLOCK_DESCRIPTION.GET_CODE();

            // ============= //
            // << HISTORY >> //
            // ============= //

            const TAG_AGE = this.BLOCK_HISTORY.GET_AGE();
            const TAG_SPACE = this.BLOCK_HISTORY.GET_SPACE();
            const TAG_SECTOR = this.BLOCK_HISTORY.GET_SECTOR();
            const TAG_SYSTEM = this.BLOCK_HISTORY.GET_SYSTEM();
            const TAG_PLANET = this.BLOCK_HISTORY.GET_PLANET();

            // ============== //
            // << HERITAGE >> //
            // ============== //

            const TAG_SURNAME = this.BLOCK_HERITAGE.GET_SURNAME();

            // ============== //
            // << PHYSICAL >> //
            // ============== //

            const TAG_COLOUR = this.BLOCK_PHYSICAL.GET_COLOUR();
            const TAG_USE = this.BLOCK_PHYSICAL.GET_USE();

            // ? ADD SAVE BUTTON TO PANELS
            // ? FINISH CONNECTING TO MANAGER
            // ? SECTION AT A TIME, FEED DUMMY DATA FOR THE NON USED ONES

            const MANAGER = new EL_Manager({
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_CATEGORY: TAG_CATEGORY,
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_TYPE: TAG_TYPE,
                ELEMENT_CONFIG_PROPERTY_TAXONOMY_ELEMENT: TAG_NAME 
            });
            MANAGER.INSERT_ELEMENT().then((RESULT) => {
                // window.location.reload();
                return RESULT;
            });
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_ELEMENT();

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#HEADER();
        await this.#BUTTON();
        await this.#BLOCKS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADER(){

        this.HEADER_TITLE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_New-Title',
        }).INIT();
        this.HEADER_TAXONOMY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_New-Taxonomy',
        }).INIT();
        this.HEADER_HISTORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_New-History',
        }).INIT();
        this.HEADER_HERITAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_New-Heritage',
        }).INIT();
        this.HEADER_PHYSICAL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_New-Physical',
        }).INIT();

        this.HEADER_TITLE.innerHTML = 'ELEMENTS';
        this.HEADER_TAXONOMY.innerHTML = 'TAXONOMY';
        this.HEADER_HISTORY.innerHTML = 'HISTORY';
        this.HEADER_HERITAGE.innerHTML = 'HERITAGE';
        this.HEADER_PHYSICAL.innerHTML = 'PHYSICAL';
    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_New-Title',
        }).INIT();
        this.BUTTON_SAVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_New-Save',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SAVE.innerHTML = 'SAVE';
    };
    async #BLOCKS(){
        await this.BLOCK_TAXONOMY.INITIALISE();
        await this.BLOCK_DESCRIPTION.INITIALISE();
        await this.BLOCK_HISTORY.INITIALISE();
        await this.BLOCK_HERITAGE.INITIALISE();
        await this.BLOCK_PHYSICAL.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Element = new Draw_Element();
await PAGE_Element.INITIALISE();
PAGE_Element.DRAW();
