import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Lava_Lamps extends Stalk{

    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('Lava-Lamps_Section-Title');
        this.SECTION_Button = document.getElementById('Lava-Lamps_Section-Button');

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

        this.ACTIVATE_BACK();

        // ================= //
		// << ATTACHMENTS >> //
		// ================= //

		WRAPPER_Page.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK
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

        this.ACTIVATE_BUTTON_DISNEY();
        this.ACTIVATE_BUTTON_NIGHTINGALE();
        this.ACTIVATE_BUTTON_STORYBOOK();
        this.ACTIVATE_BUTTON_POKEMON();

        // ================= //
		// << ATTACHMENTS >> //
		// ================= //

		WRAPPER_Button.append(...[
            this.BUTTON_DISNEY,
            this.BUTTON_NIGHTINGALE,
            this.BUTTON_STORYBOOK,
            this.BUTTON_POKEMON
		]);
		return WRAPPER_Button;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    /**
     * ## ADDING ENTRY BUTTON LISTENER
     */
    ACTIVATE_BUTTON_STORYBOOK() {
        this.BUTTON_STORYBOOK.addEventListener('click', (event) => {			
            this.LOAD('STORYBOOK', 'LAVA_LAMPS')
		});
    };
    ACTIVATE_BUTTON_DISNEY() {
        this.BUTTON_DISNEY.addEventListener('click', (event) => {			
            this.LOAD('DISNEY', 'LAVA_LAMPS')
		});
    };
    ACTIVATE_BUTTON_NIGHTINGALE() {
        this.BUTTON_NIGHTINGALE.addEventListener('click', (event) => {			
            this.LOAD('NIGHTINGALE', 'LAVA_LAMPS')
		});
    };
    ACTIVATE_BUTTON_POKEMON() {
        this.BUTTON_POKEMON.addEventListener('click', (event) => {			
            this.LOAD('MENU', 'POKEMON')
		});
    };
    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MAP', 'WELCOME')
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Lava-Lamps-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'ENTER THE LAVA LAMPS';
    };
    async #BUTTON(){
        this.BUTTON_NIGHTINGALE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Lava-Lamps-Nighingale',
        }).INIT();
        this.BUTTON_STORYBOOK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Lava-Lamps-Storybook',
        }).INIT();
        this.BUTTON_DISNEY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Lava-Lamps-Disney',
        }).INIT();
        this.BUTTON_POKEMON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Lava-Lamps-Disney',
        }).INIT();
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Lava-Lamps-Disney',
        }).INIT();

        this.BUTTON_NIGHTINGALE.innerHTML = 'NIGHTINGALE';
        this.BUTTON_STORYBOOK.innerHTML = 'STORYBOOK';
        this.BUTTON_DISNEY.innerHTML = 'DISNEY';
        this.BUTTON_POKEMON.innerHTML = 'POKEMON';
        this.BUTTON_BACK.innerHTML = '<<';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Lava_Lamps = new Draw_Lava_Lamps();
await PAGE_Lava_Lamps.INITIALISE();
PAGE_Lava_Lamps.DRAW();
