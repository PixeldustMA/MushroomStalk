import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Crystallarium extends Stalk{

    /**
	 * ## CRYSTALLARIUM CONSTRUCTOR
	 */
    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('Crystallarium_Section-Title');
        this.SECTION_Washi = document.getElementById('Crystallarium_Section-Button-Washi');
        this.SECTION_Nova = document.getElementById('Crystallarium_Section-Button-Nova');
        this.SECTION_Tracker = document.getElementById('Crystallarium_Section-Button-Tracker');
        this.SECTION_Bundlings = document.getElementById('Crystallarium_Section-Button-Bundlings');

        // ============ //
        // << TEXT >> //
        // ============ //

        this.HEADER_PAGE = 'UNSET';
        this.HEADER_BUNDLINGS = 'UNSET';
        this.HEADER_NOVA = 'UNSET';
        this.HEADER_TRACKABLES = 'UNSET';
        this.HEADER_WASHI = 'UNSET';

        // ============= //
        // << WRAPPER >> //
        // ============= //

        this.WRAPPER_BUNDLINGS = 'UNSET';
        this.WRAPPER_NOVA = 'UNSET';
        this.WRAPPER_TRACKABLES = 'UNSET';
        this.WRAPPER_WASHI = 'UNSET';
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
        this.SECTION_Washi.append(await this.PANEL_BUTTON_WASHI());	
        this.SECTION_Nova.append(await this.PANEL_BUTTONS_NOVA());	
        this.SECTION_Bundlings.append(await this.PANEL_BUTTONS_BUNDLINGS());	
        this.SECTION_Tracker.append(await this.PANEL_BUTTONS_TRACKERS());	
    };

    // ========== //
	// ## DRAW ## //
	// ========== //

	/**
	 * ## DRAW THE CRYSTALLARIUM TITLE PANEL
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
    PANEL_BUTTON_WASHI(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Button = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_AMETHYST();
        this.ACTIVATE_BUTTON_CITRINE();
        this.ACTIVATE_BUTTON_EMERALD();
        this.ACTIVATE_BUTTON_BACK();

        // ================= //
		// << ATTACHMENTS >> //
		// ================= //

		WRAPPER_Button.append(...[
            this.HEADER_WASHI,

            this.BUTTON_AMETHYST,
            this.BUTTON_CITRINE,
            this.BUTTON_EMERALD,
            this.BUTTON_BACK
		]);
		return WRAPPER_Button;
    };
    PANEL_BUTTONS_TRACKERS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TRACKABLES = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_TOPAZ();
        this.ACTIVATE_BUTTON_QUARTZ();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TRACKABLES.append(...[

            this.HEADER_TRACKABLES,

            this.BUTTON_TOPAZ,
            this.BUTTON_QUARTZ
        ]);
        return this.WRAPPER_TRACKABLES
    };
    PANEL_BUTTONS_NOVA() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_NOVA = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_TOPAZ();
        this.ACTIVATE_BUTTON_QUARTZ();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_NOVA.append(...[
            this.HEADER_NOVA,

            this.BUTTON_OBSIDIAN
        ]);
        return this.WRAPPER_NOVA
    };
    PANEL_BUTTONS_BUNDLINGS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BUNDLINGS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_TOPAZ();
        this.ACTIVATE_BUTTON_QUARTZ();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BUNDLINGS.append(...[

            this.HEADER_BUNDLINGS,

            this.BUTTON_LAPIS
        ]);
        return this.WRAPPER_BUNDLINGS
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    /**
     * ## ADDING ENTRY BUTTON LISTENER
     */
    ACTIVATE_BUTTON_TOPAZ() {

        this.BUTTON_TOPAZ.addEventListener('click', (event) => {			
            this.LOAD('TOPAZ', 'CRYSTALLARIUM')
		});
    };
    ACTIVATE_BUTTON_QUARTZ() {

        this.BUTTON_QUARTZ.addEventListener('click', (event) => {			
            this.LOAD('QUARTZ', 'CRYSTALLARIUM')
		});
    };

    // =========== //
    // << WASHI >> //
    // =========== //

    ACTIVATE_BUTTON_AMETHYST() {

        this.BUTTON_AMETHYST.addEventListener('click', (event) => {			
            this.LOAD('AMETHYST', 'CRYSTALLARIUM')
		});
    };
    ACTIVATE_BUTTON_CITRINE() {
        this.BUTTON_CITRINE.addEventListener('click', (event) => {			
            this.LOAD('CITRINE', 'CRYSTALLARIUM')
		});
    };
    ACTIVATE_BUTTON_EMERALD() {
        this.BUTTON_EMERALD.addEventListener('click', (event) => {			
            this.LOAD('EMERALD', 'CRYSTALLARIUM')
		});
    };

    ACTIVATE_BUTTON_OBSIDIAN() {

        this.BUTTON_OBSIDIAN.addEventListener('click', (event) => {			
            this.LOAD('OBSIDIAN', 'CRYSTALLARIUM')
		});
    };
    ACTIVATE_BUTTON_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {			
            this.LOAD('MAP', 'WELCOME')
		});
    };
    ACTIVATE_BUTTON_LAPIS() {

        this.BUTTON_LAPIS.addEventListener('click', (event) => {			
            this.LOAD('LAPIS', 'CRYSTALLARIUM')
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Crystallarium-Title',
        }).INIT();
        this.HEADER_WASHI = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Crystallarium-BookStructure',
        }).INIT();
        this.HEADER_NOVA = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Crystallarium-Nova',
        }).INIT();
        this.HEADER_BUNDLINGS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Crystallarium-Bundlings',
        }).INIT();
        this.HEADER_TRACKABLES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Crystallarium-Trackables',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'ENTER THE CRYSTALLARIUM';
        this.HEADER_WASHI.innerHTML = 'BOOK STRUCTURE';
        this.HEADER_NOVA.innerHTML = 'NOVA';
        this.HEADER_BUNDLINGS.innerHTML = 'BUNDLINGS';
        this.HEADER_TRACKABLES.innerHTML = 'TRACKER EDITING';

    };
    async #BUTTON(){

        // =========== //
        // << WASHI >> //
        // =========== //

        this.BUTTON_AMETHYST = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Crystallarium-Amethyst',
        }).INIT();
        this.BUTTON_CITRINE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Crystallarium-Citrine',
        }).INIT();
        this.BUTTON_EMERALD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Crystallarium-Emerald',
        }).INIT();

        this.BUTTON_AMETHYST.innerHTML = 'AMETHYST - NEW PART';
        this.BUTTON_CITRINE.innerHTML = 'CITRINE - NEW CATEGORY';
        this.BUTTON_EMERALD.innerHTML = 'EMERALD - NEW GROUP'

        // ============== //
        // << TRACKERS >> //
        // ============== //

        this.BUTTON_TOPAZ = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Crystallarium-Topaz',
        }).INIT();
        this.BUTTON_QUARTZ = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Crystallarium-Quartz',
        }).INIT();

        this.BUTTON_QUARTZ.innerHTML = 'QUARTZ - TRACKABLES';
        this.BUTTON_TOPAZ.innerHTML = 'TOPAZ - TRACKER';

        // ========== //
        // << NOVA >> //
        // ========== //

        this.BUTTON_OBSIDIAN = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Crystallarium-Obsidian',
        }).INIT();

        this.BUTTON_OBSIDIAN.innerHTML = 'OBSIDIAN - NOVA';

        // =============== //
        // << BUNDLINGS >> //
        // =============== //

        this.BUTTON_LAPIS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Crystallarium-Lapis',
        }).INIT();

        this.BUTTON_LAPIS.innerHTML = 'LAPIS - CHAPTER VIEWER'

        // ============= //
        // << UTILITY >> //
        // ============= //

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Crystallarium-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';

    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Crystallarium = new Draw_Crystallarium();
await PAGE_Crystallarium.INITIALISE();
PAGE_Crystallarium.DRAW();
