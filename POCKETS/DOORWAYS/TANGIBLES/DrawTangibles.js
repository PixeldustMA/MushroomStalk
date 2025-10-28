import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Tangibles extends Stalk{

    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('Tangibles_Section-Title');
        this.SECTION_Button = document.getElementById('Tangibles_Section-Button');

        // ============ //
        // << TEXT >> //
        // ============ //

        this.HEADER_PAGE = 'UNSET';
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
     * Run all functions associated with drawing the crystallarium menu page
     * 
     * Attach all relevant wrappers to their appropriate sections
     * 
     * Run this function to run the class
     */
    async DRAW(){


        this.SECTION_Title.append(await this.PANEL_Title());	
        this.SECTION_Button.append(await this.PANEL_Button());	

    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    /**
     * ## DRAW THE LAVA LAMP TITLE PANEL
     * 
     * -------------------
     * 
     * - Panel for page title
     * - Attaches to title section of page
     * 
     * -------------------
     * #### --> RETURNS WRAPPER
     */
    PANEL_Title(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PAGE
        ]);
        return WRAPPER_Page;
    };
    /**
     * ## DRAW THE CRYSTALLARIUM BUTTON PANEL
     * 
     * -------------------
     * 
     * - Panel for page title
     * - Attaches to title section of page
     * 
     * -------------------
     * #### --> RETURNS WRAPPER
     */
    PANEL_Button(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Button = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_BUDGET();
        this.ACTIVATE_BUTTON_EXERCISE();
        this.ACTIVATE_BUTTON_BACK();
        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Button.append(...[
            this.BUTTON_BACK,
            this.BUTTON_BUDGET,
            this.BUTTON_EXERCISE
        ]);
        return WRAPPER_Button;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    /**
     * ## ADDING ENTRY BUTTON LISTENER
     */
    ACTIVATE_BUTTON_BUDGET() {

        this.BUTTON_BUDGET.addEventListener('click', (event) => {			
            this.LOAD('BUDGET', 'TANGIBLES')
        });
    };
    ACTIVATE_BUTTON_EXERCISE() {

        this.BUTTON_EXERCISE.addEventListener('click', (event) => {			
            this.LOAD('EXERCISE', 'TANGIBLES')
        });
    };
    ACTIVATE_BUTTON_BACK(){
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MAP', 'WELCOME')
        })
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.#TEXT();
        await this.#BUTTON();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Tangibles-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'THE TANGIBLES';
    };
    async #BUTTON(){
        this.BUTTON_BUDGET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Tangibles-Budget',
        }).INIT();
        this.BUTTON_EXERCISE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Tangibles-Exercise',
        }).INIT();
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Tangibles-Back',
        }).INIT();

        this.BUTTON_BUDGET.innerHTML = 'BUDGET';
        this.BUTTON_EXERCISE.innerHTML = 'EXERCISE';
        this.BUTTON_BACK.innerHTML = '<<';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Tangibles = new Draw_Tangibles();
await PAGE_Tangibles.INITIALISE();
PAGE_Tangibles.DRAW();
