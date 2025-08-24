import { Renderer } from "../LUNGS/Renderer.js";

// ================================================ //
// ================================================ //
// ==                                            == //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                MEMORY                      == //
// ##                USERS                       ## //
// << ------------------------------------------ >> //
// ==       Generate the Session Users           == //
// ==                                            == //
// ================================================ //
// ================================================ //

export default class Cap_Users extends Renderer{
    /**
     * ## MEMORY CONSTRUCTOR -- USERS
     */
    constructor(){

        super();

        // =========== //
        // ## PATHS ## //
        // =========== // 

        this.PATH_DATA_RESIDENT = '';
        this.PATH_DATA_LILYPAD = '';
        this.PATH_DATA_USERS = '';
        this.PATH_LIST_USERS = '';

        // ========== //
        // ## DATA ## //
        // ========== //

        this.RESULT = {
            DATA: {
                RESIDENT: {},
                USERS: {},
                LILYPAD: {}
            },
            LIST: {
                USERLIST: []
            }
        };
    };

    // ======================== //
    // ## INITIALISE AND RUN ## //
    // ======================== //

    async INITIALISE(PARAMETER_PATH_RESIDENT, PARAMETER_DATA_LILYPAD, PARAMETER_DATA_USERS, PARAMETER_LIST_USERS){

        // ========== //
        // << LOAD >> //
        // ========== //

        this.PATH_DATA_RESIDENT = PARAMETER_PATH_RESIDENT;
        this.PATH_DATA_LILYPAD = PARAMETER_DATA_LILYPAD;
        this.PATH_FOLDER_FROG = PARAMETER_DATA_USERS;
        this.PATH_LIST_USERS = PARAMETER_LIST_USERS;

        // ========= //
        // << RUN >> //
        // ========= //

        await this.#LOAD_DATA_RESIDENT();
        await this.#LOAD_DATA_USERS();
        await this.#LOAD_DATA_LILYPAD();
        await this.#LOAD_LIST_USERLIST();

        // ============ //
        // << RESULT >> //
        // ============ //

        return this.RESULT;
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #LOAD_DATA_RESIDENT(){
        this.RENDERER_PATH = this.PATH_DATA_RESIDENT;
        try {
            let DATA_RESIDENT =  JSON.parse(await this.READ());
            this.RESULT.DATA.RESIDENT = DATA_RESIDENT;            
        } catch (error) {
            this.RESULT.DATA.RESIDENT = {};
        };
    };
    async #LOAD_DATA_USERS() {
        this.RENDERER_PATH = this.PATH_FOLDER_FROG;
        console.log(this.RENDERER_PATH)
        try {
            this.RENDERER_PATH = this.PATH_FOLDER_FROG;
            const TAGS_FROG_FILES = await this.READ_FOLDERS(); 
            console.log(TAGS_FROG_FILES)
            for (let INDEX_Frog = 0; INDEX_Frog < TAGS_FROG_FILES.length; INDEX_Frog++) {
                const PATH_Frog = TAGS_FROG_FILES[INDEX_Frog];
                this.RENDERER_PATH = `${this.PATH_FOLDER_FROG}/${PATH_Frog}`;
                this.RESULT.DATA.USERS[PATH_Frog] = JSON.parse(await this.READ());
            }   
        } catch (error) {
            this.RESULT.DATA.USERS = {};
        };
    };
    async #LOAD_DATA_LILYPAD() {
        try {
            this.RENDERER_PATH = this.PATH_FOLDER_FROG;
            this.RESULT.DATA.LILYPAD = JSON.parse(await this.READ());         
        } catch (error) {
            this.RESULT.DATA.LILYPAD = {};
        };
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    async #LOAD_LIST_USERLIST() {
        try {
            this.RENDERER_PATH = this.PATH_LIST_USERS;
            this.RESULT.LIST.USERLIST = JSON.parse(await this.READ());         
        } catch (error) {
            this.RESULT.LIST.USERLIST = {};
        };
    };
};
