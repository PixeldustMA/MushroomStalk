import Connector_Beetle from "../../CONSOLE/ARTERIES/Connector_Beetle.js";
import MYCOLOGY_Main from "./Mycology_Main.js";

/**
 * ## CUPBOARD VALIDATION
 * ----------------------
 */
export default class Myco_Explorer extends MYCOLOGY_Main{

    constructor({
        EXPLORER_CONFIG_FOLDERS = 0,
        EXPLORER_CONFIG_TOP = 0,
        EXPLORER_CONFIG_FILES = 0,
        EXPLORER_CONFIG_TEMPLATES = 0
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

        this.INSTANCE_BEETLE.DAISY_TEXT = 'RUN EXPLORER VALIDATION';
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

        // ================ //
        // << TEXT FILES >> //
        // ================ //

    };
    /**
     * ## VALIDATE CUPBOARD FOLDERS
     * ----------------------------
     */
    async #FOLDERS() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING EXPLORER FOLDERS';
        await this.INSTANCE_BEETLE.READ_MODE();

        for (let INDEX_Folders = 0; INDEX_Folders < this.PATH_FOLDERS.length; INDEX_Folders++) {
            const PATH_Folder = this.PATH_FOLDERS[INDEX_Folders];
            await this.EXISTANCE_CHECK(PATH_Folder);
        };
    };

    // ============================= //
    // ## CUPBOARD SPECIFIC FILES ## //
    // ============================= //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE

    //? LOAD A BASIC SETTINGS FILE
}
