import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";
import Branches from "../../../CONSOLE/LUNGS/Branches.js";

export default class Frog extends Branches{

    /**
     * ## FROG CONSTRUCTOR
     */
    constructor({
        FROG_CONFIG_PATH = 0,
        FROG_CONFIG_DATA = 0,
        FROG_CONFIG_UPDATES = 0,
        FROG_CONFIG_FILE_TAG = 0,
        FROG_CONFIG_LIST_DATA = 0,
        FROG_CONFIG_LIST_PATH = 0
    }){

        super();

        // =============== //
        // ## DEBUGGING ## //
        // =============== //

        this.INSTANCE_BEETLE = new Connector_Beetle({});

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_FROG = FROG_CONFIG_PATH;
        this.PATH_FROG_FILE = FROG_CONFIG_PATH
        this.PATH_TAG = FROG_CONFIG_FILE_TAG;
        this.PATH_FROG_LIST = FROG_CONFIG_LIST_PATH;

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_FROG = FROG_CONFIG_DATA;
        this.DATA_UPDATES = FROG_CONFIG_UPDATES;
        this.DATA_FROG_LIST = FROG_CONFIG_LIST_DATA
        this.NEW_FROG = {};
        this.TEMPLATE_FILE = {};
    }

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## ACCESS FROG FUNCTIONS
     * 
     * ---------------------------------
     * 
     * Enter a function name and activate it
     * 
     * Options are:
     * 
     * - ADD
     * - UPDATE
     * - REMOVE
     * - RESET
     * - READ
     * - SAVE
     * 
     */
    async INITIALISE_FROG(PARAMETER_MODE){

        // << JELLYBUG >> //
        if (this.PATH_FROG === 0) {return };

        // << SET UP >> //
        this.RENDERER_PATH = this.PATH_FROG;
        this.TEMPLATE_FILE = 'UNSET';

        switch (PARAMETER_MODE) {
            case 'ADD':
                return await this.#ADD_FROG();
            case 'UPDATE':
                return await this.#UPDATE_FROG();
            case 'REMOVE':
                return await this.#REMOVE_FROG();
            case 'RESET':
                return await this.#RESET_FROG();
            case 'READ':
                return await this.#READ_FROG();
            case 'SAVE':
                return await this.#SAVE_FROG();
            default:
                break;
        };
    };

    // =============== //
    // ## FUNCTIONS ## //
    // =============== //

    async #ADD_FROG(){

        // << GENERATE A NEW TEMPLATE >> //
        this.NEW_FROG = {
            USERNAME: this.DATA_UPDATES.USERNAME,
            PASSWORD: this.DATA_UPDATES.PASSWORD
        };

        // << FILL IN THE DETAILS >> //
        let origin = await this.#READ_FROG();
        console.log(origin)
        let numbers = Object.keys(origin);
        let newkey = numbers += 1;
        origin[newkey.toString()] = this.NEW_FROG
        console.log(this.NEW_FROG)
        this.DATA_FROG = origin;
        // << SAVE FROG >> // 
        await this.#SAVE_FROG();

        // << UPDATE THE FROG LIST >> //

    };
    /**
     * ## UPDATE FROG
     * 
     * -----------------------
     * 
     * Update data in the frog file
     */
    async #UPDATE_FROG(){

        // << READ THE FROG FILE >> //
        await this.#READ_FROG();

        // << CHANGE THE PROPERTIES IN THE FROG FILE >> //
        await this.#UPDATE_FROG_PROPERTY('USERNAME');

        // << SAVE THE FROG FILE >> //
        await this.#SAVE_FROG();

    };
    async #REMOVE_FROG(){

        // << DELETE THE FROG FILE >> //
        // TODO MISSING FILE DELETE??

        // << REMOVE FILE FROM FROG LIST >> //
        // << LOOP OBJECT >> //

    };
    /**
     * ## RESET FROG
     * 
     * ----------------------
     * 
     * Reset the frog file to the base version of the file
     */
    async #RESET_FROG(){

        // << SET AS CURRENT ACTIVE DATA >> //
        this.DATA_FROG = this.TEMPLATE_FILE;

        // << SAVE FROG FILE >> //
        await this.#SAVE_FROG();
    };
    /**
     * ## READ FROG
     * 
     * ---------------------
     * 
     * Read the Frog file
     */
    async #READ_FROG(){

        // << READ DATA AT PATH >> //
        this.RENDERER_PATH = this.PATH_FROG_FILE;
        this.DATA_FROG = JSON.parse(await this.READ());
        console.log(this.DATA_FROG);
        console.log('DATA FROG')
        return this.DATA_FROG
    };
    /**
     * ## SAVE FROG
     * 
     * ---------------------
     * 
     * Save the Frog File
     */
    async #SAVE_FROG(){

        // << AQUIRE CURRENT VERSION OF FROG >> //
        this.RENDERER_DATA = this.DATA_FROG;
        this.RENDERER_PATH = this.PATH_FROG_FILE;

        // << WRITE CURRENT DATA TO PATH >> //
        await this.SAVE();
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
    async #UPDATE_FROG_PROPERTY(PARAMETER_PROPERTY){
        if (this.NEW_FROG.hasOwnProperty(PARAMETER_PROPERTY)) {
            this.DATA_FROG[PARAMETER_PROPERTY] = this.NEW_FROG[PARAMETER_PROPERTY];
        };
    };
}