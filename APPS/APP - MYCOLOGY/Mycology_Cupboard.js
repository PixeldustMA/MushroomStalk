import Connector_Beetle from "../../CONSOLE/ARTERIES/Connector_Beetle.js";
import MYCOLOGY_Main from "./Mycology_Main.js";

/**
 * ## CUPBOARD VALIDATION
 * ----------------------
 */
export default class Myco_Cupboard extends MYCOLOGY_Main{

    constructor({
        CUPBOARD_CONFIG_FOLDERS = 0,
        CUPBOARD_CONFIG_TOP = 0,
        CUPBOARD_CONFIG_FILES = 0,
        CUPBOARD_CONFIG_TEMPLATES = 0
    }){

        super();

        // =========== //
        // << PATHS >> //
        // =========== //
        this.PATH_TOP = CUPBOARD_CONFIG_TOP;
        this.PATH_FOLDERS = CUPBOARD_CONFIG_FOLDERS;
        this.PATH_FILES = CUPBOARD_CONFIG_FILES;

        // =============== //
        // << INSTANCES >> //
        // =============== //

        this.INSTANCE_BEETLE = new Connector_Beetle({

        });

        // ========== //
        // << DATA >> //
        // ========== //

        this.DATA_TEMPLATES = CUPBOARD_CONFIG_TEMPLATES;
    };

    /**
     * ## RUN CUPBOARD VALIDATION
     * --------------------------
     */
    async RUN() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'RUN CUPBOARD VALIDATION';
        await this.INSTANCE_BEETLE.READ_MODE();

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //
        await this.EXISTANCE_CHECK(this.PATH_TOP);

        // ================= //
        // << SUB FOLDERS >> //
        // ================= //
        await this.EXISTANCE_CHECK(this.PATH_TOP);
        await this.#FOLDERS();

        // ================ //
        // << JSON FILES >> //
        // ================ //
        console.log(this.PATH_FILES)
        console.log(this.DATA_TEMPLATES)
        // await this.#FROGS();
        await this.#RESIDENT();
        await this.#USER();

        // ================ //
        // << TEXT FILES >> //
        // ================ //
        // await this.#BUTTON();
        // await this.#INPUT();
    };
    /**
     * ## VALIDATE CUPBOARD FOLDERS
     * ----------------------------
     */
    async #FOLDERS() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING CUPBOARD FOLDERS';
        await this.INSTANCE_BEETLE.READ_MODE();

        console.log(this.PATH_FOLDERS)
        for (let INDEX_Folders = 0; INDEX_Folders < this.PATH_FOLDERS.length; INDEX_Folders++) {
            const PATH_Folder = this.PATH_FOLDERS[INDEX_Folders];
            console.log(PATH_Folder)
            await this.EXISTANCE_CHECK(PATH_Folder);
        };
    };

    // ============================= //
    // ## CUPBOARD SPECIFIC FILES ## //
    // ============================= //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE
    /**
     * ## VALIDATE FROG FILE
     * ---------------------
     */
    async #FROGS() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING FROG JSON FILE';
        await this.INSTANCE_BEETLE.READ_MODE();


        await this.EXISTANCE_FILE(this.PATH_FILES.FROGS, this.DATA_TEMPLATES.FROGS);
    };
    /**
     * ## VALIDATE RESIDENT FILE
     * ---------------------
     */
    async #RESIDENT() {
        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING RESIDENT JSON FILE';
        await this.INSTANCE_BEETLE.READ_MODE();
        await this.EXISTANCE_FILE(this.PATH_FILES.RESIDENTFROG, this.DATA_TEMPLATES.USERS_RESIDENT);
    };
    /**
     * ## VALIDATE USER FILE
     * ---------------------
     */
    async #USER() {
        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING USER JSON FILE';
        await this.INSTANCE_BEETLE.READ_MODE();
        await this.EXISTANCE_FILE(this.PATH_FILES.USER, this.DATA_TEMPLATES.ROUTES_USER);
    };
    /**
     * ## VALIDATE WELCOME BUTTON TEXT FILE
     * ---------------------
     */
    async #BUTTON() {
        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING BUTTON TEXT FILE';
        await this.INSTANCE_BEETLE.READ_MODE();
        await this.EXISTANCE_FILE(this.PATH_FILES.WELCOME.BUTTON, {});
    };
    /**
     * ## VALIDATE WELCOME INPUT TEXT FILE
     * ---------------------
     */
    async #INPUT() {
        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING INPUT FILE';
        await this.INSTANCE_BEETLE.READ_MODE();
        await this.EXISTANCE_FILE(this.PATH_FILES.WELCOME.INPUT, {})
    }
};