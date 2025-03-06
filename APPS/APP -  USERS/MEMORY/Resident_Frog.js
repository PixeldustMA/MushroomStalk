import Branches from "../../../CONSOLE/LUNGS/Branches.js";

export default class Resident_Frog extends Branches{

    /**
     * ## RESIDENT FROG CONSTRUCTOR
     */
    constructor({
        RESIDENT_CONFIG_PATH = 0,
        RESIDENT_CONFIG_DATA = 0,
        RESIDENT_CONFIG_UPDATES = 0
    }){

        // =============== //
        // ## DEBUGGING ## //
        // =============== //

        this.INSTANCE_BEETLE = new 

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_RESIDENT_FROG = RESIDENT_CONFIG_PATH;

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_RESIDENT_FROG = RESIDENT_CONFIG_DATA;
        this.DATA_UPDATES = RESIDENT_CONFIG_UPDATES;
        this.TEMPLATE_FILE = {};
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## ACCESS RESIDENT FROG FUNCTIONS
     * 
     * ---------------------------------
     * 
     * Enter a function name and activate it
     * 
     * Options are:
     * 
     * - RESET
     * - UPDATE
     * - READ
     * - SAVE
     * 
     */
    async INITIALISE_RESIDENT_FROG(PARAMETER_MODE) {

        // << JELLYBUG >> //
        if (this.PATH_RESIDENT_FROG === 0) {return };

        // << SET UP >> //
        this.RENDERER_PATH = this.PATH_RESIDENT_FROG;
        this.TEMPLATE_FILE = 'UNSET';

        switch (PARAMETER_MODE) {
            case 'RESET':
                return await this.#RESET_RESIDENT_FROG();
            case 'UPDATE':
                return await this.#UPDATE_RESIDENT_FROG();
            case 'READ':
                return await this.#READ_RESIDENT_FROG();
            case 'SAVE':
                return await this.#SAVE_RESIDENT_FROG();
            default:
                break;
        };
    };

    // =============== //
    // ## FUNCTIONS ## //
    // =============== //

    /**
     * ## RESET RESIDENT FROG
     * 
     * ----------------------
     * 
     * Reset the resident frog file to the base version of the file
     */
    async #RESET_RESIDENT_FROG(){

        // << ACQUIRE TEMPLATE FILE >> //
        this.DATA_RESIDENT_FROG = this.TEMPLATE_FILE;

        // << SAVE TEMPLATE TO THE GIVEN PATH >> //
        return await this.SAVE();

    };
    /**
     * ## UPDATE RESIDENT FROG
     * 
     * -----------------------
     * 
     * Update data in the resident frog file
     */
    async #UPDATE_RESIDENT_FROG(){

        // << READ THE CURRENT RESIDENT DATA >> //
        this.DATA_RESIDENT_FROG = await this.READ();

        // << UPDATE THE EXISTING RESIDENT DATA >> //
        //. RFU1
        await this.#UPDATE_PROPERTY('USERNAME');

        // << SAVE UPDATED DATA TO THE GIVEN PATH >> //
        return await this.#SAVE_RESIDENT_FROG();
    };
    /**
     * ## READ RESIDENT FROG
     * 
     * ---------------------
     * 
     * Read the Resident Frog file
     */
    async #READ_RESIDENT_FROG(){

        // << READ DATA AT PATH >> //
        this.DATA_RESIDENT_FROG = await this.READ();

    };
    /**
     * ## SAVE RESIDENT FROG
     * 
     * ---------------------
     * 
     * Save the Resident Frog File
     */
    async #SAVE_RESIDENT_FROG(){

        // << AQUIRE PATH TO RESIDENT FROG FILE >> //

        // << AQUIRE CURRENT VERSION OF RESIDENT FROG >> //

        // << WRITE CURRENT DATA TO PATH >> //

    };

    // ============= //
    // ## UTILITY ## //
    // ============= //

    /**
     * ## UPDATE FILE PROPERTY
     * -----------------------
     * 
     * ### PARAMETERS
     * 
     * ---------------
     * 
     * @param {string} PARAMETER_PROPERTY {NAME OF A PROPERTY TO SEARCH FOR AND UPDATE}
     * 
     * ### DETAILS
     * 
     * -----------
     * 
     * Update a file property in the Resident Frog where the file property matches up against 
     * a file property in the update object 
     */
    async #UPDATE_PROPERTY(PARAMETER_PROPERTY){
        if (this.DATA_UPDATES.hasOwnProperty(PARAMETER_PROPERTY)) {
            this.DATA_RESIDENT_FROG[PARAMETER_PROPERTY] = this.DATA_UPDATES[PARAMETER_PROPERTY];
        };
    };

};