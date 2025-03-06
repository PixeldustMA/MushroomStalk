import Branches from "../../CONSOLE/LUNGS/Branches.js";
import Frog from "./MEMORY/Frog.js";
import Frog_List from "./MEMORY/Frog_List.js";
import Resident_Frog from "./MEMORY/Resident_Frog.js";

export default class Lilypad extends Branches{
    /**
     * ## LILYPAD CONSTRUCTOR
     */
    constructor({
        LILYPAD_CONFIG_USERNAME = 0,
        LILYPAD_CONFIG_PASSWORD = 0,
        LILYPAD_CONFIG_LOGIN = false,
        LILYPAD_CONFIG_PATH_NEWS = 0
    }){

        // =============== //
        // ## USER DATA ## //
        // =============== //

        this.USERNAME = LILYPAD_CONFIG_USERNAME;
        this.PASSWORD = LILYPAD_CONFIG_PASSWORD;
        this.STAUS_LOGIN = LILYPAD_CONFIG_LOGIN;
        this.PATH_USER_NEWS = LILYPAD_CONFIG_PATH_NEWS;

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        this.INSTANCE_FROG = 'UNSET';
        this.INSTANCE_FROG_LIST = 'UNSET';
        this.INSTANCE_RESIDENT = 'UNSET';
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async RUN_LILYPAD(PARAMETER_MODE) {

        await this.REMEMBER();
        switch (PARAMETER_MODE) {
            case 'NEW':
                return this.#ADD_NEW_FROG();
            case 'UPDATE':
                return this.#ADD_NEW_FROG();
            default:
                break;
        }
    };

    // ================ //
    // ## OPERATIONS ## //
    // ================//

    /**
     * ## CREATE A NEW USER 
     * 
     * -------------------------
     * 
     * ### DETAILS
     * 
     * Add a new profile
     * 
     * ----------------------------------
     * 
     * ### RETUEN -->> {NEW FILE} NEW USER
     */
    async #ADD_NEW_FROG(){

        // << SET USER AS RESIDENT >> //
        await this.LOAD_RESIDENT();
        await this.INSTANCE_RESIDENT.INITIALISE_RESIDENT('ADD');

        // << CREATE A NEW USER FILE FROM THE OBJECT >> //
        await this.LOAD_FROG();
        await this.INSTANCE_FROG.INITIALISE_FROG('UPDATE');

        // << ADD USER TO THE LIST >> //
        await this.LOAD_FROG_LIST();
        await this.INSTANCE_FROG_LIST.INITIALISE_FROG_LIST('ADD');

    };
    async #UPDATE_USER(){

        // << SET USER AS RESIDENT >> //
        await this.LOAD_RESIDENT();
        await this.INSTANCE_RESIDENT.INITIALISE_RESIDENT('UPDATE');

        // << CREATE A NEW USER FILE FROM THE OBJECT >> //
        await this.LOAD_FROG();
        await this.INSTANCE_FROG.INITIALISE_FROG('UPDATE');

        // << ADD USER TO THE LIST >> //
        await this.LOAD_FROG_LIST();
        await this.INSTANCE_FROG_LIST.INITIALISE_FROG_LIST('UPDATE');

    };

    // =================== //
    // ## MEMORY ACCESS ## //
    // =================== //

    async LOAD_RESIDENT() {

        // << CREATE UPDATE OBJECT >> //
        let DATA_UPDATE = {
            USERNAME: this.USERNAME,
            PASSWORD: this.PASSWORD
        }

        // << GENERATE PROPERTIES >> //
        if (this.PATH_USER_NEWS !== 0) {
            DATA_UPDATE.NEWS = this.PATH_USER_NEWS;
        };

        // << LOAD MEMORY INSTANCE >> //
        this.INSTANCE_RESIDENT = new Resident_Frog({
            RESIDENT_CONFIG_DATA: this.SESSION.LILYPAD.RESIDENTFROG,
            RESIDENT_CONFIG_PATH: this.SESSION.PATHS.CUPBOARD.FILES.RESIDENTFROG,
            RESIDENT_CONFIG_UPDATES: DATA_UPDATE
        });

        // << RETURN >> //
        return this.INSTANCE_RESIDENT;
    };
    async LOAD_FROG() {

        // << CREATE UPDATE OBJECT >> //
        let DATA_UPDATE = {
            USERNAME: this.USERNAME,
            PASSWORD: this.PASSWORD
        }

        // << GENERATE PROPERTIES >> //
        if (this.PATH_USER_NEWS !== 0) {
            DATA_UPDATE.NEWS = this.PATH_USER_NEWS;
        };

        // << LOAD MEMORY INSTANCE >> //
        this.INSTANCE_FROG = new Frog({
            FROG_CONFIG_DATA: this.SESSION.LILYPAD.FROG,
            FROG_CONFIG_FILE_TAG: this.USERNAME,
            FROG_CONFIG_PATH: this.SESSION.PATHS.CUPBOARD.FILES.FROG,
            FROG_CONFIG_UPDATES: DATA_UPDATE
        });

        // << RETURN >> //
        return this.INSTANCE_FROG;
    };
    async LOAD_FROG_LIST(){
        this.INSTANCE_FROG_LIST = new Frog_List({

        });
        return this.INSTANCE_FROG_LIST;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    /**
     * ## SET DATA FOR CURRENT RESIDENT
     * -------------------------------
     * 
     * File data should contain all the specific user paths for various file types
     * within the app, which do not necessarily have to go into the app memory in user files
     */
    async SET_RESIDENT(){
        this.RENDERER_PATH = this.SESSION.PATH.RESIDENTFROG;
        this.RENDERER_DATA = this.DATA_ACTIVE_RESIDENT;
        return await this.SAVE();
    };
    /**
     * ## SET DATA FOR USER PROFILES
     * ----------------------------
     * 
     * Holds all data related to a specific user profile
     */
    async SET_FROG(){
        this.RENDERER_PATH = this.SESSION.PATH.FROG;
        this.RENDERER_DATA = '';

        return await this.SAVE();
    };
    /**
     * ## SET QUICK ACCESS USER DATA
     * -----------------------------
     * 
     * Write data to the storage file for usernames and passwords
     */
    async SET_USER_LIST(){
        this.RENDERER_PATH = this.SESSION.PATH.USERS;
        this.RENDERER_DATA = '';

        return await this.SAVE();
    };
}