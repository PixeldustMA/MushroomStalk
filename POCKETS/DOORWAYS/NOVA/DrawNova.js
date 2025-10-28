import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Nova extends Stalk{

    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('Nova_Section-Title');
        this.SECTION_Button = document.getElementById('Nova_Section-Button');
        this.SECTION_BLUEPRINTS = document.getElementById('Nova_Section-Blueprints');

        // ============ //
        // << TEXT >> //
        // ============ //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // << BUTTONS >> //
        // ============= //

        this.BUTTON_MENU_BLUEPRINTS = 'UNSET';
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
        this.SECTION_BLUEPRINTS.append(this.PANEL_BLUEPRINTS());
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

        // this.ACTIVATE_BUTTON_PLUSHIE();
        // this.ACTIVATE_BUTTON_PENPOTS();
        // this.ACTIVATE_BUTTON_HEADERS();
        // this.ACTIVATE_BUTTON_SUBTITLE();
        // this.ACTIVATE_BUTTON_CHART();
        // this.ACTIVATE_BUTTON_CHART_SETTINGS();
        this.ACTIVATE_BACK();
        this.ACTIVATE_BUTTON_SYSTEM();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Button.append(...[
            // this.BUTTON_PLUSHIE,
            // this.BUTTON_PENPOTS,
            // this.BUTTON_HEADERS,
            // this.BUTTON_SUBTITLE,
            // this.BUTTON_CHART,
            // this.BUTTON_CHART_SETTINGS,
            this.BUTTON_BACK,
            this.BUTTON_MENU_SYSTEM
        ]);
        return WRAPPER_Button;
    };
    PANEL_BLUEPRINTS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BLUEPRINTS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_BLURPRINTS();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BLUEPRINTS.append(...[
            this.BUTTON_MENU_BLUEPRINTS
        ]);
        return this.WRAPPER_BLUEPRINTS;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    // /**
    //  * ## ADDING ENTRY BUTTON LISTENER
    //  */
    // ACTIVATE_BUTTON_PLUSHIE() {

    //     this.BUTTON_PLUSHIE.addEventListener('click', (event) => {			
    //         this.LOAD('PLUSHIE', 'NOVA')
    //     });
    // };
    // ACTIVATE_BUTTON_PENPOTS() {

    //     this.BUTTON_PENPOTS.addEventListener('click', (event) => {			
    //         this.LOAD('PENPOT', 'NOVA')
    //     });
    // };
    // ACTIVATE_BUTTON_HEADERS() {

    //     this.BUTTON_HEADERS.addEventListener('click', (event) => {			
    //         this.LOAD('HEADERS', 'NOVA')
    //     });
    // };
    // ACTIVATE_BUTTON_SUBTITLE() {

    //     this.BUTTON_SUBTITLE.addEventListener('click', (event) => {			
    //         this.LOAD('SUBTITLE', 'NOVA')
    //     });
    // };
    // ACTIVATE_BUTTON_CHART() {

    //     this.BUTTON_CHART.addEventListener('click', (event) => {			
    //         this.LOAD('CHART', 'NOVA')
    //     });
    // };
    // ACTIVATE_BUTTON_CHART_SETTINGS() {

    //     this.BUTTON_CHART_SETTINGS.addEventListener('click', (event) => {			
    //         this.LOAD('CHART_SETTINGS', 'NOVA')
    //     });
    // };
    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MAP', 'WELCOME')
        });
    };
    ACTIVATE_BUTTON_BLURPRINTS() {
        this.BUTTON_MENU_BLUEPRINTS.addEventListener('click', (event) => {			
            this.LOAD('MENU', 'BLUEPRINTS')
        });
    };
    ACTIVATE_BUTTON_SYSTEM() {
        this.BUTTON_MENU_SYSTEM.addEventListener('click', (event) => {			
            this.LOAD('MENU', 'THE_SYSTEM')
        });
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Nova-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'NOVA';
    };
    async #BUTTON(){
        // this.BUTTON_PLUSHIE = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'button',
        //     CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Nova-Plushie',
        // }).INIT();
        // this.BUTTON_PENPOTS = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'button',
        //     CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Nova-PenPots',
        // }).INIT();
        // this.BUTTON_HEADERS = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'button',
        //     CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Nova-PenPots',
        // }).INIT();
        // this.BUTTON_SUBTITLE = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'button',
        //     CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Nova-PenPots',
        // }).INIT();
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Exercise-Back',
        }).INIT();
        // this.BUTTON_CHART = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'button',
        //     CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Exercise-Back',
        // }).INIT();
        // this.BUTTON_CHART_SETTINGS = await new Create({
        //     CREATE_CONFIG_ELEMENT_TAG: 'button',
        //     CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Exercise-Back',
        // }).INIT();
        this.BUTTON_MENU_BLUEPRINTS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Nova-Blueprints',
        }).INIT();
        this.BUTTON_MENU_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Nova-Blueprints',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_MENU_BLUEPRINTS.innerHTML = 'BLUEPRINTS';
        this.BUTTON_MENU_SYSTEM.innerHTML = 'SYSTEM'

        // this.BUTTON_PLUSHIE.innerHTML = 'PLUSHIE';
        // this.BUTTON_PENPOTS.innerHTML = 'PEN POTS';
        // this.BUTTON_HEADERS.innerHTML = 'HEADERS';
        // this.BUTTON_SUBTITLE.innerHTML = 'SUBTITLE';
        // this.BUTTON_CHART.innerHTML = 'CHART';
        // this.BUTTON_CHART_SETTINGS.innerHTML = 'CHART SETTINGS';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Nova = new Draw_Nova();
await PAGE_Nova.INITIALISE();
PAGE_Nova.DRAW();
