import Branches from "../../../CONSOLE/LUNGS/Branches.js";

export default class Frog_List extends Branches{

    /**
     * ## FROG LIST CONSTRUCTOR
     */
    constructor() {
        super();

        // ============ //
        // ## CONFIG ## //
        // ============ //

        this.TAG_MODE = '';

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_FROG_LIST = '';

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_FROG_LIST = '';
        this.TEMPLATE_FILE = '';
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## LOAD FROG LIST
     * -----------------
     * 
     * Load the data contained in the Frog List file
     * 
     * This will contain the list of usernames and matching passwords
     */
    async INITIALISE_FROG_LIST() {

        // << LOAD FROG LIST PATH >> //
        this.RENDERER_PATH = this.PATH_FROG_LIST;

        // << READ THE MODE AND FILTER THE REQUEST // >>
        switch (this.TAG_MODE) {
            case 'RESET':
                return await this.#CLEAR_FROG_LIST();
            case 'REMOVE':
                return await this.#REMOVE_FROG_ITEM();
            case 'ADD':
                return await this.#ADD_FROG_ITEM();
            default:
                break;
        }
    };

    // =================== //
    // ## FUNCTIONALITY ## //
    // =================== //

    /**
     * ## RESET THE LIST
     * -----------------
     * 
     * Empty out the frog list and reset it back to it's original format
     */
    async #CLEAR_FROG_LIST() {

        // << RESET THE FILE TO THE BASIC VERSION OF THE DATA >> //
        this.DATA_FROG_LIST = this.TEMPLATE_FILE;

        // << SAVE THE FROG LIST FILE >> //
        return await this.SAVE();
    };
    /**
     * ## REMOVE A USER PROFILE
     * ------------------------
     * 
     * Remove a specific user from the list
     * 
     * Only removes one user at a time
     */
    async #REMOVE_FROG_ITEM() {

        // << IDENTIFY A SPECIFIC USER AND FIND THEM >> //
        this.COUNTER_FROGS = Object.keys(this.DATA_FROG_LIST).length;
        for (let INDEX_List = 0; INDEX_List < this.COUNTER_FROGS; INDEX_List++) {
            const BLOCK_User = this.DATA_FROG_List[INDEX_List];
            
            // << IF USERNAME FOUND, REMOVE THAT KEY AND OBJECT PAIR >> //
            if (BLOCK_User.USERNAME === this.PATH_TAG) {
                delete this.DATA_FROG_LIST[INDEX_List];
            };
        };

        // << SAVE THE FROG LIST >> //
        await this.#SAVE_FROG_LIST();
    };
    /**
     * ## ADD A USER PROFILE
     * ---------------------
     * 
     * Add a new user to the list
     * 
     * Only adds one user at a time
     */
    async #ADD_FROG_ITEM() {
        this.COUNTER_FROGS = Object.keys(this.DATA_FROG_LIST).length;
        this.DATA_FROG_LIST[this.COUNTER_FROGS.length + 1] = {
            USERNAME: this.NEW_FROG.USERNAME,
            PASSWORD: this.NEW_FROG.USERNAME
        };

        // << SAVE >> //
        await this.#SAVE_FROG_LIST();
    };
    /**
     * ## SAVE THE FILE
     * 
     * ----------------
     * 
     * Saves the most current version of the data
     */
    async #SAVE_FROG_LIST() {

        // << AQUIRE CURRENT VERSION OF FROG LIST >> //
        this.RENDERER_DATA = this.DATA_FROG_LIST;
        this.RENDERER_PATH = this.PATH_FROG_LIST;

        // << WRITE CURRENT DATA TO PATH >> //
        await this.SAVE();
    };

}