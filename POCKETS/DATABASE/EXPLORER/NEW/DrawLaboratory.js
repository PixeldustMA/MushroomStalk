import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import PANEL_Input_Planet from "../../../../APPS/APP - JELLYFISH/ELEMENTS/INPUT/PANEL_Input_Planet.js";
import PANEL_Input_Sector from "../../../../APPS/APP - JELLYFISH/ELEMENTS/INPUT/PANEL_Input_Sector.js";
import PANEL_Input_Space from "../../../../APPS/APP - JELLYFISH/ELEMENTS/INPUT/PANEL_Input_Space.js";
import PANEL_Input_System from "../../../../APPS/APP - JELLYFISH/ELEMENTS/INPUT/PANEL_Input_System.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Laboratory extends Stalk{

    /**
     * ## LABORATORY CONSTRUCTOR
     */
    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('Laboratory_Section-Title');

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
     * Run all functions associated with drawing the laboratory menu page
     * 
     * Attach all relevant wrappers to their appropriate sections
     * 
     * Run this function to run the class
     */
    async DRAW(){

        this.SECTION_Title.append(await this.PANEL_Title());	

    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    /**
     * ## DRAW THE OBSERVATORY TITLE PANEL
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
        const WRAPPER_Display = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SPACE_PANEL(WRAPPER_Display);
        this.ACTIVATE_SECTOR_PANEL(WRAPPER_Display);
        this.ACTIVATE_SYSTEM_PANEL(WRAPPER_Display);
        this.ACTIVATE_PLANET_PANEL(WRAPPER_Display);
        this.ACTIVATE_BACK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK,
            this.BUTTON_SPACE,
            this.BUTTON_SECTOR,
            this.BUTTON_SYSTEM,
            this.BUTTON_PLANET,
            WRAPPER_Display
        ]);
        return WRAPPER_Page;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    ACTIVATE_SPACE_PANEL(PARAMETER_WRAPPER) {
        this.BUTTON_SPACE.addEventListener('click', (event) => {
            const INSTANCE_Space = new PANEL_Input_Space();
            INSTANCE_Space.INITIALISE().then((RESULT) => {
                PARAMETER_WRAPPER.append(...[INSTANCE_Space.DRAW()]);                
                return RESULT});
        });
    };
    ACTIVATE_SECTOR_PANEL(PARAMETER_WRAPPER) {
        this.BUTTON_SECTOR.addEventListener('click', (event) => {
            const INSTANCE_Sector = new PANEL_Input_Sector();
            INSTANCE_Sector.INITIALISE().then((RESULT) => {
                PARAMETER_WRAPPER.append(...[INSTANCE_Sector.DRAW()]);
                return RESULT});
            
        });
    };
    ACTIVATE_SYSTEM_PANEL(PARAMETER_WRAPPER) {
        this.BUTTON_SYSTEM.addEventListener('click', (event) => {
            const INSTANCE_System = new PANEL_Input_System();
            INSTANCE_System.INITIALISE().then((RESULT) => {
                PARAMETER_WRAPPER.append(...[INSTANCE_System.DRAW()]);
                return RESULT});
            
        });
    };
    ACTIVATE_PLANET_PANEL(PARAMETER_WRAPPER) {
        this.BUTTON_PLANET.addEventListener('click', (event) => {
            const INSTANCE_Planet = new PANEL_Input_Planet();
            INSTANCE_Planet.INITIALISE().then((RESULT) => {
                PARAMETER_WRAPPER.append(...[INSTANCE_Planet.DRAW()]);
                return RESULT});
            
        });
    };
    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'EXPLORER')
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Laboratory-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'THE LABORATORY';
    };
    async #BUTTON(){

        this.BUTTON_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Laboratory-Space',
        }).INIT();
        this.BUTTON_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Laboratory-Sector',
        }).INIT();
        this.BUTTON_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Laboratory-System',
        }).INIT();
        this.BUTTON_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Laboratory-Planet',
        }).INIT();
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Laboratory-Planet',
        }).INIT();

        this.BUTTON_SPACE.innerHTML = 'SPACE';
        this.BUTTON_SECTOR.innerHTML = 'SECTOR';
        this.BUTTON_SYSTEM.innerHTML = 'SYSTEM';
        this.BUTTON_PLANET.innerHTML = 'PLANET';
        this.BUTTON_BACK.innerHTML = '<<';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Laboratory = new Draw_Laboratory();
await PAGE_Laboratory.INITIALISE();
PAGE_Laboratory.DRAW();
