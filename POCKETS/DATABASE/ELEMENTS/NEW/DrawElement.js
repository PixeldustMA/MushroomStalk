import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import PANEL_Input_Element from "../../../../APPS/APP - JELLYFISH/ELEMENTS/INPUT/PANEL_Input_Element.js";
import PANEL_Input_Element_Category from "../../../../APPS/APP - JELLYFISH/ELEMENTS/INPUT/PANEL_Input_Element_Category.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Element extends Stalk{

    /**
     * ## ELEMENT CONSTRUCTOR
     */
    constructor(){
        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('ELEMENT_Section-Title');

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // << BUTTONS >> //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
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

        // =============== //
        // ## LISTENERS ## //
        // =============== //

        this.ACTIVATE_BACK();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.SECTION_Title.append(...[
            this.HEADER_PAGE,
            this.PANEL_CATEGORIES,
            this.PANEL_ELEMENTS,
            this.BUTTON_BACK
        ]);	
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.REQUEST_SESSION_ELEMENT();
        await this.#TEXT();
        await this.#BUTTON();

        const INSTANCE_CATEGORY = new PANEL_Input_Element_Category();
        const INSTANCE_ELEMENT = new PANEL_Input_Element();

        await INSTANCE_CATEGORY.INITIALISE();
        await INSTANCE_ELEMENT.INITIALISE();

        this.PANEL_CATEGORIES =  INSTANCE_CATEGORY.DRAW();
        this.PANEL_ELEMENTS = INSTANCE_ELEMENT.DRAW();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_New-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'ELEMENTS';
    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_New-Title',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Element = new Draw_Element();
await PAGE_Element.INITIALISE();
PAGE_Element.DRAW();
