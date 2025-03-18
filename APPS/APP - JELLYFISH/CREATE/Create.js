import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";

export default class Create{
    
    /**
     * ## CREATE CONSTRUCTOR
     */
    constructor({
        CREATE_CONFIG_NUMBERS = 0,
        CREATE_CONFIG_TEXT_STATUS = 0,
        CREATE_CONFIG_TEXT_REFERENCE = 0,
        CREATE_CONFIG_TEXT_TESTING = 0,
        CREATE_CONFIG_PERSONALITY_CLASSES = 0,
        CREATE_CONFIG_PERSONALITY_ID = 0,
        CREATE_CONFIG_PERSONALITY_SOURCE = 0,
        CREATE_CONFIG_ELEMENT_TYPE = 0,
        CREATE_CONFIG_ELEMENT_TAG = 0,
        CREATE_CONFIG_ELEMENT_OPTIONS = 0,
        CREATE_CONFIG_TAGGING_BOXNAME = 0,
        CREATE_CONFIG_TAGGING_LABELFOR = 0,
        CREATE_CONFIG_TAGGING_TITLE = 0
    }){
        // ============= //
        // << ELEMENT >> //
        // ============= //

        this.JELLYFISH_TYPE = CREATE_CONFIG_ELEMENT_TYPE;
        this.JELLYFISH_TAG = CREATE_CONFIG_ELEMENT_TAG;
        this.JELLYFISH_OPTIONS = CREATE_CONFIG_ELEMENT_OPTIONS;

        // ============= //
        // << NUMBERS >> //
        // ============= //

        this.NUMBER_BASE = CREATE_CONFIG_NUMBERS;
        this.NUMBER_MAX = 0;
        this.NUMBER_MIN = 0;
        this.NUMBER_STEP = 0;
        this.NUMBER_DEFAULT = 0;

        // ========== //
        // << TEXT >> //
        // ========== //

        this.TEXT_STATUS = CREATE_CONFIG_TEXT_STATUS;
        this.TEXT_REFERENCE = CREATE_CONFIG_TEXT_REFERENCE;
        this.TEXT_TESTING = CREATE_CONFIG_TEXT_TESTING;

        // ================= //
        // << PERSONALITY >> //
        // ================= //

        this.PERSONALITY_ID = CREATE_CONFIG_PERSONALITY_ID;
        this.PERSONALITY_CLASSES = CREATE_CONFIG_PERSONALITY_CLASSES;
        this.PERSONALITY_SOURCE = CREATE_CONFIG_PERSONALITY_SOURCE;

        // ============= //
        // << TAGGING >> //
        // ============= //

        this.TAG_BOX_NAME = CREATE_CONFIG_TAGGING_BOXNAME;
        this.TAG_LABEL = CREATE_CONFIG_TAGGING_LABELFOR;
        this.TAG_TITLE = CREATE_CONFIG_TAGGING_TITLE;

        // ============= //
        // ## ELEMENT ## //
        // ============= //

        this.JELLYFISH = '';

        // =============== //
        // ## DEBUGGING ## //
        // =============== //

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'CREATE',
            BEETLE_CONFIG_LOCATION: 'Create.js',
            BEETLE_CONFIG_SCRIPT: 'CREATE',
            BEETLE_CONFIG_TEXT: 'CREATING AN ELEMENT'
        });
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
	 * ## INITIALISE ELEMENT
	 * 
	 * ----------------------
	 * 
	 * Check for requested element attributes
	 * 
	 * Attach value to the element
	 * 
	 * -------------------------------
	 * ## RETURN -->> {HTML ELEMENT}
	 * @returns {HTMLElement}
	 */
    async INIT() {
        await this.#CREATE_DEBUG({PARAMETER_ORIGINAL_MESSAGE: true});

        await this.#INITIALISE_NUMBERS();
        await this.#INITIALISE_JELLYFISH();
        await this.#INITIALISE_PERSONALITY();
        await this.#INITIALISE_TAGGING();

        return this.JELLYFISH;
    };

    // ============= //
    // ## NUMBERS ## //
    // ============= //

    async #INITIALISE_NUMBERS() {
        await this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'INITIALISING ELEMENT NUMBERS'});

		if (this.NUMBER_BASE !== 0) {
			if (this.NUMBER_BASE.hasOwnProperty('MAX')) {
				this.NUMBER_MAX = this.NUMBER_BASE.MAX;
			};
			if (this.NUMBER_BASE.hasOwnProperty('MIN')) {
				this.NUMBER_MIN = this.NUMBER_BASE.MIN;
			};
			if (this.NUMBER_BASE.hasOwnProperty('STEP')) {
				this.NUMBER_STEP = this.NUMBER_BASE.STEP;
			};
			if (this.NUMBER_BASE.hasOwnProperty('DEFAULT')) {
				this.NUMBER_DEFAULT = this.NUMBER_BASE.DEFAULT;
			};
		};
    };

    // =============== //
    // ## JELLYFISH ## //
    // ===============//

    /**
     * ## RUN BASE SETTINGS
     * 
     * -----------------------
     * 
     * Run all settings on the element that are basic element settings
     */
    async #INITIALISE_JELLYFISH(){
        await this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'INITIALISING JELLYFISH ELEMENT'});

        if (this.JELLYFISH_TYPE === 'input') {this.#INITIALISE_INPUT();}
        else if (this.JELLYFISH_TYPE === 'SELECT') {this.#INITIALISE_SELECT();}
        else {this.JELLYFISH = document.createElement(this.JELLYFISH_TAG);};

        return this.JELLYFISH;
    };
    /**
     * ## LOAD INPUT
     * 
     * --------------
     * 
     * Create an input element with the relevant settings
     */
    async #INITIALISE_INPUT() {
        await this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'INITIALISING JELLYFISH INPUT'});

        this.JELLYFISH = document.createElement('input');
        this.JELLYFISH.type = this.JELLYFISH_TAG.toLowerCase();
        console.log(this.JELLYFISH_TAG)
        if(this.JELLYFISH_TAG === 'NUMBER') {
            this.JELLYFISH.max = this.NUMBER_MAX;
            this.JELLYFISH.min = this.NUMBER_MIN;
            this.JELLYFISH.step = this.NUMBER_STEP;
            this.JELLYFISH.value = this.NUMBER_DEFAULT;
        };

        return this.JELLYFISH;
    };
    /**
     * ## LOAD SELECT
     * 
     * --------------
     * 
     * Create a select element with the relevant settings
     */
    async #INITIALISE_SELECT() {
        await this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'INITIALISING JELLYFISH SELECT SETTINGS'});
        this.JELLYFISH = document.createElement('select');
        if(this.#CHECK_NULL(this.JELLYFISH_OPTIONS) && this.JELLYFISH_OPTIONS !== 'DELAYED') {
            this.#SET_OPTIONS();
        }
		else {this.GENERATE_ERROR()};
    };

    // ================= //
    // ## PERSONALITY ## //
    // ================= //

    /**
     * ## RUN PERSONALITY SETTINGS
     * 
     * -----------------------
     * 
     * Run all settings on the element that are basic personality settings
     */
    async #INITIALISE_PERSONALITY() {

        await this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'INITIALISING JELLYFISH PERSONALITY'});

		if (this.#CHECK_NULL(this.PERSONALITY_ID)) {this.#SET_ID();}
		else {this.GENERATE_ERROR();};
        if(this.#CHECK_NULL(this.PERSONALITY_CLASSES)) {this.#SET_CLASSES();};
		if (this.#CHECK_NULL(this.PERSONALITY_SOURCE)) {this.#SET_SOURCE();};

        return this.JELLYFISH;
    };
    /**
	 * ## SET IMAGE SOURCE
	 * 
	 * --------------------
	 * 
	 * << PRIVATE METHOD >>
	 * 
	 * If the element has an image this provides a path to the source
	 * 
	 * Source must be a full path not relative
	 * 
	 * -------------------------------
	 * ## RETURN -->> {HTML ELEMENT}
	 */
	#SET_SOURCE(){
        this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'SETTING JELLYFISH SOURCE'});
		this.JELLYFISH.src = this.PERSONALITY_SOURCE;
	};
    /**
	 * ## SET ELEMENT ID
	 * 
	 * --------------------
	 * 
	 * << PRIVATE METHOD >>
	 * Sets the unique identifier for the element
	 */
    #SET_ID(){
        this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'SETTING JELLYFISH ID'});
        console.log(this.PERSONALITY_ID)
        if (this.PERSONALITY_ID === 0) {return this.GENERATE_ERROR('MISSING', 'ID')}
        else {this.JELLYFISH.id = this.PERSONALITY_ID;}
    };
    /**
	 * ## SET ELEMENT CLASSES
	 * 
	 * --------------------
	 * 
	 * << PRIVATE METHOD >>
	 * Sets the element classes
	 */
    #SET_CLASSES() {
        this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'SETTING JELLYFISH CLASSES'});

		this.PERSONALITY_CLASSES.forEach(LOOPING_NAME_CLASS => {

            this.#CREATE_DEBUG({
                PARAMETER_DEBUG_TYPE: 'LOOP',
                PARAMETER_LOOP_TYPE: 'FOR',
                PARAMETER_DATA: LOOPING_NAME_CLASS
            });
            this.JELLYFISH.classList.add(LOOPING_NAME_CLASS);

		});
    };

    // =========== //
    // ## DEBUG ## //
    // =========== //

    /**
     * ## REQUEST DEBUG MESSAGE
     * 
     * --------------------------
     * 
     */
    async #CREATE_DEBUG({
        PARAMETER_MESSAGE = 0, 
        PARAMETER_ORIGINAL_MESSAGE = false, 
        PARAMETER_DEBUG_TYPE = 0, 
        PARAMETER_LOOP_TYPE = 0,
        PARAMETER_DATA = 0
    }){ 
        
        if (!PARAMETER_ORIGINAL_MESSAGE) {
            if (PARAMETER_DEBUG_TYPE === 0) {
                this.INSTANCE_BEETLE.DAISY_TEXT = PARAMETER_MESSAGE;
                await this.INSTANCE_BEETLE.READ_MODE()            
            }

            // else if (PARAMETER_DEBUG_TYPE === 'LOOP') {

            //     this.INSTANCE_BEETLE.DAISY_TEXT = PARAMETER_MESSAGE;
            //     this.INSTANCE_BEETLE.DAISY_DATA = PARAMETER_DATA;
            //     this.INSTANCE_BEETLE.DAISY_TYPE = PARAMETER_LOOP_TYPE;
            //     await this.INSTANCE_BEETLE.READ_MODE()

            // };
        };

    };
    /**
     * ## GENERATE A SPECFIC ERROR
     * @param {string} PARAMETER_ERROR_MODE 
     * @param {string} PARAMAETER_MISSING_MODE 
     */
    GENERATE_ERROR(PARAMETER_ERROR_MODE, PARAMAETER_MISSING_MODE) {
        new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'ERROR',
            BEETLE_CONFIG_ELEMENT: this.JELLYFISH_TAG,
            BEETLE_CONFIG_ERROR_MODE: PARAMETER_ERROR_MODE,
            BEETLE_CONFIG_MISSING_MODE: PARAMAETER_MISSING_MODE
        }).READ_MODE();
    };

    // ============= //
    // ## TAGGING ## //
    // ============= //

    #INITIALISE_TAGGING() {

        this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'INITIALISING ELEMENT TAGGING'});

        if(this.#CHECK_NULL(this.TAG_TITLE)) {this.#SET_TITLE();};
        if(this.#CHECK_NULL(this.TAG_BOX_NAME)) {this.#SET_BOX_NAME();};
        if(this.#CHECK_NULL(this.TAG_LABEL)) {this.#SET_LABEL_FOR();};

        return this.JELLYFISH;
    };
    /**
	 * ## SET ELEMENT TITLE
	 * 
	 * ---------------------
	 * 
	 * << PRIVATE METHOD >> 
	 * 
	 * Specifies extra information about an element
	 * 
	 * May be a tooltip thing
	 * 
	 * May be considered necessary later in development
	 * 
	 * -------------------------------
	 * ## RETURN -->> {HTML ELEMENT}
	 */
	#SET_TITLE() {
        this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'SETTING TITLE'});
		this.instance.title = this.TAG_TITLE;
	};
    /**
	 * ## SET BOX TAG FOR ELEMENT
	 * 
	 * ----------------------------
	 * 
	 * Sets name attribute
	 * 
	 * Can be used to tie elements together
	 * 
	 * If matching to a label the label must set LabelFor
	 * 
	 * -------------------------------
	 * ## RETURN -->> {HTML ELEMENT}
	 */
	#SET_BOX_NAME() {
        this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'SETTING BOX NAME'});
		this.JELLYFISH.name = this.NAME_BOX;
	};
	/**
	 * ## SET LABEL TAG FOR ELEMENT
	 * 
	 * ----------------------------
	 * 
	 * << PRIVATE METHOD >>
	 * 
	 * Sets HTMLFor attribute
	 * 
	 * Should match to a corresponding box name
	 * 
	 * -------------------------------
	 * ## RETURN -->> {HTML ELEMENT}
	 */
	#SET_LABEL_FOR() {
        this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'SETTING LABEL FOR ELEMENT'});
		this.JELLYFISH.htmlFor = this.NAME_LABEL_FOR;
	};

    // ============= //
    // ## UTILITY ## //
    // ============= //

    /**
	 * ## CHECK PROPERTY STATUS
	 * 
	 * -------------------------
	 * 
	 * << PRIVATE METHOD >>
	 * 
	 * ### PARAMAETERS
	 * @param {string} property {Checks if a property is active or not}
	 * 
	 * Determines if the property being checked is active or not
	 * 
	 * Returns true if the property is active
	 * 
	 * -------------------------------
	 * ## RETURN -->> {BOOL}
	 */
    #CHECK_NULL(PARAMATER_PROPERTY){

        // this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'CHECK IF THE GIVEN PARAMETER HAS A VALUE OR NOT'});
		if (PARAMATER_PROPERTY != 0) {
			return true;
		}return false;
    };

    // ============= //
	// ## OPTIONS ## //
	// ============= //

	/**
	 * ## SET ELEMENT OPTIONS
	 * 
	 * ------------------------
	 * 
	 * << PRIVATE METHOD >>
	 * 
	 * Set options for a select element
	 * 
	 * Add an option element for each string in the current array
	 * 
	 * this.options[0] will be the first option displayed, and should not be an
	 * option in the same way as other options
	 * 
	 * It should act as a descriptor / title
	 * 
	 * -------------------------------
	 * ## RETURN -->> {HTML ELEMENT}
	 * @returns {HTMLElement} {Gives back the element being built}
	 */
    #SET_OPTIONS(){

        this.#CREATE_DEBUG({PARAMETER_MESSAGE: 'SETTING OPTIONS'});
		let NUM_OPTIONS_LENGTH = this.JELLYFISH_OPTIONS.length;

		if (NUM_OPTIONS_LENGTH === 0) {

            let ELEMENT_Option = document.createElement('option');	
			ELEMENT_Option.value = 1;
			ELEMENT_Option.innerHTML = "NO OPTIONS AVAILABLE";
			this.JELLYFISH.appendChild(ELEMENT_Option);

        };

        if (NUM_OPTIONS_LENGTH === 1 && typeof(this.options === "string")) {

            let ELEMENT_Option = document.createElement('option');	
			ELEMENT_Option.value = 1;
			ELEMENT_Option.innerHTML = this.JELLYFISH_OPTIONS;
            this.JELLYFISH.appendChild(ELEMENT_Option);

        };

        this.#CREATE_DEBUG({
            PARAMETER_DEBUG_TYPE: 'LOOP',
            PARAMETER_LOOP_TYPE: 'START',
            PARAMETER_DATA: this.JELLYFISH_OPTIONS
        });

		for (let INDEX_OPTIONS = 1; INDEX_OPTIONS <= NUM_OPTIONS_LENGTH; INDEX_OPTIONS++) {

            this.#CREATE_DEBUG({
                PARAMETER_DEBUG_TYPE: 'LOOP',
                PARAMETER_LOOP_TYPE: 'LOOP',
                PARAMETER_DATA: this.JELLYFISH_OPTIONS[NUM_OPTIONS_LENGTH]
            });

			let ELEMENT_Option = document.createElement('option');		
			ELEMENT_Option.value = INDEX_OPTIONS;
			ELEMENT_Option.innerHTML = this.JELLYFISH_OPTIONS[INDEX_OPTIONS - 1];
			this.JELLYFISH.appendChild(ELEMENT_Option);
		};

		return this.JELLYFISH;
    };
	/**
	 * ## CHANGE OPTIONS
	 * 
	 * -----------------------
	 * 
	 * #### PARAMETERS
	 * @param {HTMLSelectElement} selectBox 
	 * @param {Array} optionsArray 
	 * 
	 * #### Change Available Options
	 * 
	 * Given a select box, update the options to match the new options array
	 * 
	 * This will replace all previously existing options
	 * 
	 * -------------------------------
	 * ## RETURN -->> {HTML ELEMENT}
	 */
	UPDATE_OPTIONS(PARAMETER_ELEMENT_SELECT, PARAMETER_ARRAY_OPTIONS) {

        this.#CREATE_DEBUG({
            PARAMETER_MESSAGE: 'CHANGING ELEMENT OPTIONS', 
            PARAMATER_PARAMS: {
            ONE: {TYPE: 'ELEMENT', DATA: PARAMETER_ELEMENT_SELECT},
            TWO: {TYPE: 'ARRAY', DATA:PARAMETER_ARRAY_OPTIONS}
            }
        });

		this.JELLYFISH = PARAMETER_ELEMENT_SELECT;
		this.JELLYFISH_OPTIONS = PARAMETER_ARRAY_OPTIONS;
		var INDEX_OPTIONS, NUM_OPTIONS_LENGTH = PARAMETER_ELEMENT_SELECT.options.length - 1;

        this.#CREATE_DEBUG({
            PARAMETER_LOOP_TYPE: 'START',
            PARAMETER_DEBUG_TYPE: 'LOOP',
            PARAMETER_DATA: PARAMETER_ARRAY_OPTIONS
        });
		LOOP_Options: for(INDEX_OPTIONS = NUM_OPTIONS_LENGTH; INDEX_OPTIONS >= 0; INDEX_OPTIONS--) {

            this.#CREATE_DEBUG({
                PARAMETER_LOOP_TYPE: 'LOOP',
                PARAMETER_DEBUG_TYPE: 'LOOP',
                PARAMETER_DATA: PARAMETER_ARRAY_OPTIONS[INDEX_OPTIONS]
            });
			PARAMETER_ELEMENT_SELECT.remove(INDEX_OPTIONS);
		};
		this.#SET_OPTIONS();
	};
	/**
	 * ## READ OPTIONS
	 * 
	 * --------------------
	 * 
	 * #### PARAMETERS
	 * @param {HTMLSelectElement} selectElement 
	 * 
	 * #### Read the active option
	 * Given a select element, read the text from the currently selected option
	 * 
	 * -------------------------------
	 * ## RETURN -->> {STRING} Option Text
	 */
	READ_OPTION_TEXT(PARAMETER_ELEMENT_SELECT) {
        this.#CREATE_DEBUG({
            PARAMETER_MESSAGE: 'READING ELEMENT OPTION', 
            PARAMATER_PARAMS: {
            ONE: {TYPE: 'ELEMENT', DATA: PARAMETER_ELEMENT_SELECT},
            TWO: {TYPE: 'ARRAY', DATA:PARAMETER_ARRAY_OPTIONS}
            }
        });
		return PARAMETER_ELEMENT_SELECT.options[PARAMETER_ELEMENT_SELECT.selectedIndex].text;
	};
}
