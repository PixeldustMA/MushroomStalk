import Connector_Beetle from "../../CONSOLE/ARTERIES/Connector_Beetle.js";
import Branches from "../../CONSOLE/LUNGS/Branches.js";

export default class PixelScript extends Branches{

    constructor(){

        // =============== //
        // << DEBUGGING >> //
        // =============== //

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'BUBBLEGUM',
            BEETLE_CONFIG_LOCATION: 'PixelScript.js',
            BEETLE_CONFIG_SCRIPT: 'PIXELSCRIPT',
            BEETLE_CONFIG_TEXT: 'MANIPULATING PIXEL SCRIPT'
        });
        
        // ============ //
        // << SCRIPT >> //
        // ============ //

        // ================= //
        // ## IDENTIFIERS ## //
        // ================= //

        this.TITLE_TAG = '::';
        this.INSERTABLE_OPEN = '[';
        this.INSERTABLE_CLOSE = ']'
        this.SEPERATOR = '---';
        this.MEMORY_OPEN = '{';
        this.MEMORY_CLOSE = '}'
        this.CATEGORY = '<>';
        this.GROUP = '##';
        this.FOLDER = '===';
        this.FILE = '|||';
    };

    // ============== //
    // ## SNAPPING ## //
    // ============== //

    /**
     * ## BREAK PIXEL SCRIPT INTO CATEGORIES
     * 
     * ----------------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMETER_STRING_DATA {A pixel script string}
     * 
     * ### DETAILS
     * 
     * Seperate a Pixel Script bubble where a category is found
     * 
     * Return an array of Pixel Script Fragments
     * ----------------------------
     * ### RETURNS -->> {ARRAY} Pixel Script Array
     * @returns {Array}
     */
    DOT_SNAP(PARAMETER_STRING_DATA) {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'BREAKING STRING AT CATEGORIES'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        let DATA_Split = PARAMETER_STRING_DATA.split('::');
        let TAGS_Category = {};

        LOOP_BrokenString: for (let INDEX_String = 0; INDEX_String < DATA_Split.length; INDEX_String++) {

            const STRING_Segment = DATA_Split[INDEX_String];

            if (!this.SIMPLE_STRING(STRING_Segment) && STRING_Segment !== '') {
                    TAGS_Category[STRING_Segment] = DATA_Split[INDEX_String + 1];
            };                
        };
        return TAGS_Category;
    };
    /**
     * ## BREAK PIXEL SCRIPT ON SEPERATORS
     * 
     * ----------------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMETER_DATA_STRING {An unseperated pixel script string}
     * 
     * ### DETAILS
     * 
     * Seperate a Pixel Script bubble where a seperator is found
     * 
     * Return an array of Pixel Script Fragments
     * ----------------------------
     * ### RETURNS -->> {ARRAY} Pixel Script Array
     * @returns {Array}
     */
    SNAP(PARAMETER_DATA_STRING) {

            this.INSTANCE_BEETLE.DAISY_TEXT = 'BREAKING STRING ON SEPERATORS'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        return PARAMETER_DATA_STRING.split(this.SEPERATOR);
    };

    // ====================== //
    // ## READ PIXELSCRIPT ## //
    // ====================== //
    /**
     * ## CHECK FOR CATEGORY MARKERS
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMETER_DATA {A string to be tested}
     * 
     * ### DETAILS
     * 
     * Search string for ::
     * 
     * ----------------------------
     * ### RETURNS -->> {BOOL} True if category marker found
     * @returns {boolean} 
     */
    SQUARES(PARAMETER_DATA) {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CHECKING FOR CATEGORY MARKERS'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        return PARAMETER_DATA.includes('::');
    };
    /**
     * ## CHECK FOR [
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMATER_DATA {A string to be tested}
     * 
     * ----------------------------
     * ### DETAILS
     * 
     * Search string for [
     * 
     * ----------------------------
     * ### RETURNS -->> {BOOL} True if open insertable marker found
     * @returns {boolean} 
     */
    OPEN_INSERTABLE(PARAMATER_DATA) {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CHECKING FOR OPEN INSERTABLE MARKERS'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        return PARAMATER_DATA.includes('[');
    };
    /**
     * ## CHECK FOR ]
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMETER_DATA {A string to be tested}
     * 
     * ### DETAILS
     * 
     * Search string for ]
     * 
     * ----------------------------
     * ### RETURNS -->> {BOOL} True if close insertable marker found
     * @returns {boolean} 
     */
    CLOSE_INSERTABLE(PARAMETER_DATA) {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CHECKING FOR CLOSED INSERTABLE MARKERS'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        return PARAMETER_DATA.includes(']');
    };
    /**
     * ## CHECK FOR {{
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMETER_DATA {A string to be tested}
     * 
     * ### DETAILS
     * 
     * Search string for {{
     * 
     * ----------------------------
     * ### RETURNS -->> {BOOL} True if open memory marker found
     * @returns {boolean} 
     */
    OPEN_MEMORY(PARAMETER_DATA) {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CHECKING FOR OPEN MEMORY MARKERS'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        return PARAMETER_DATA.includes('{{');
    };
    /**
     * ## CHECK FOR }}
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMATER_DATA {A string to be tested}
     * 
     * ### DETAILS
     * 
     * Search string for }}
     * 
     * ----------------------------
     * ### RETURNS -->> {BOOL} True if close memory marker found
     * @returns {boolean} 
     */
    CLOSE_MEMORY(PARAMATER_DATA) {
        this.INSTANCE_BEETLE.DAISY_TEXT = 'CHECKING FOR CLOSED MEMORY MARKERS'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        return PARAMATER_DATA.includes('}}');
    };

    // =================== //
    // ## STRIP MARKERS ## //
    // =================== //
    /**
     * ## REMOVE CATEGORY MARKERS
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMETER_DATA {A string containing a category marker}
     * 
     * ### DETAILS
     * 
     * Remove all category markers from a string
     * 
     * Category markers refers to double colons
     *  
     * ----------------------------
     * ### RETURNS -->> {STRING} Adjusted String
     * @returns {string} Adjusted String
     */
    STRIP_CATEGORY(PARAMETER_DATA) {

            this.INSTANCE_BEETLE.DAISY_TEXT = 'REMOVING CATEGORY MARKERS';
            this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});
        return PARAMETER_DATA.replace('::', ''  );
    };
    /**
     * ## REMOVE INSERTABLE MARKERS
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMATER_DATA {A string containing an insertable marker}
     * 
     * ### DETAILS
     * 
     * Remove all insertable markers from a string
     * 
     * Insertable markers refers to open and closed square brackets
     *  
     * ----------------------------
     * ### RETURNS -->> {STRING} Adjusted String
     * @returns {string} Adjusted String
     */
    STRIP_INSERTABLE(PARAMATER_DATA) {

            this.INSTANCE_BEETLE.DAISY_TEXT = 'REMOVING INSERTABLE MARKERS'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        if (PARAMATER_DATA.includes('[') && !PARAMATER_DATA.includes(']')) {
            return PARAMATER_DATA.replace('[', '');
        };
        if (PARAMATER_DATA.includes(']') && !PARAMATER_DATA.includes('[')) {
            return PARAMATER_DATA.replace(']', '');
        }
        if (PARAMATER_DATA.includes('[') && PARAMATER_DATA.includes(']')) {
            return PARAMATER_DATA.replace('[', '').replace(']', '');
        }
    };
    /**
     * ## REMOVE MEMORY MARKERS
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMATER_DATA {A string containing a memory marker}
     * 
     * ### DETAILS
     * 
     * Remove all memory markers from a string
     * 
     * Memory markers refers to open and closed Curly brackets
     *  
     * ----------------------------
     * ### RETURNS -->> {STRING} Adjusted String
     * @returns {string} Adjusted String-->>
     * @returns 
     */
    STRIP_MEMORY(PARAMATER_DATA) {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'REMOVING MEMORY MARKERS'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        return PARAMATER_DATA.replace('{{', '{').replace('}}', '}');
    };
    /**
     * ## REMOVE SLASHES
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMATER_DATA {A string containing slashes}
     * 
     * ### DETAILS
     * 
     * Remove all slashes from a string
     *  
     * ----------------------------
     * ### RETURNS -->> {STRING} Adjusted String
     * @returns {string} Adjusted String
     */
    STRIP_SLASHES(PARAMATER_DATA) {

            this.INSTANCE_BEETLE.DAISY_TEXT = 'REMOVING SLASHES'
        this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

        return PARAMATER_DATA.replaceAll('\\', '\\\\');
    };

    // ================= //
    // ## GENERATIONS ## //
    // ================= //

    GENERATE_INSERTABLE(PARAMETER_INSERT) {return `${this.INSERTABLE_OPEN}${PARAMETER_INSERT}${this.INSERTABLE_CLOSE}`};
    GENERATE_MEMORY(PARAMETER_MEMORY) {return `${this.MEMORY_OPEN}${PARAMETER_MEMORY}${this.MEMORY_CLOSE}`};
    GENERATE_TITLE(PARAMETER_TITLE) {return `${this.TITLE_TAG}${PARAMETER_TITLE}${this.TITLE_TAG}`};
    GENERATE_CATEGORY(PARAMETER_CATEGORY) {return `${this.CATEGORY}${PARAMETER_CATEGORY}${this.CATEGORY}`}
    GENERATE_FOLDER(PARAMETER_FOLDER) {return `${this.FOLDER}${PARAMETER_FOLDER}${this.FOLDER}`}
    GENERATE_FILE(PARAMETER_FILE) {return `${this.FILE}${PARAMETER_FILE}${this.FILE}`}

}