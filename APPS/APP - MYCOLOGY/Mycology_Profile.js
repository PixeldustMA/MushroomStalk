import Connector_Beetle from "../../CONSOLE/ARTERIES/Connector_Beetle.js";
import MYCOLOGY_Main from "./Mycology_Main.js";

/**
 * ## PROFILE VALIDATION
 * ----------------------
 */
export default class Myco_Profile extends MYCOLOGY_Main{

    constructor({
        PROFILE_CONFIG_USERNAME = 0
    }){

        super();

        // =========== //
        // << PATHS >> //
        // =========== //

        this.PATH_TOP = 'UNSET';

        // =============== //
        // << INSTANCES >> //
        // =============== //

        this.INSTANCE_BEETLE = new Connector_Beetle({

        });

        // ========== //
        // << DATA >> //
        // ========== //

        this.DATA_USERNAME = PROFILE_CONFIG_USERNAME;
    };

    /**
     * ## RUN PROFILE VALIDATION
     * --------------------------
     */
    async RUN() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'RUN PROFILE VALIDATION';
        await this.INSTANCE_BEETLE.READ_MODE();

        // =========== //
        // << PATHS >> //
        // =========== //

        // TODO SET THE TOP PATH

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //

        await this.EXISTANCE_CHECK(this.PATH_TOP);

        // ================= //
        // << SUB FOLDERS >> //
        // ================= //

        await this.#FOLDERS();

    };

    /**
     * ## VALIDATE PROFILE FOLDERS
     * ----------------------------
     */
    async #FOLDERS() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING PROFILE FOLDERS';
        await this.INSTANCE_BEETLE.READ_MODE();

        for (let INDEX_Folders = 0; INDEX_Folders < this.PATH_FOLDERS.length; INDEX_Folders++) {
            const PATH_Folder = this.PATH_FOLDERS[INDEX_Folders];
            await this.EXISTANCE_CHECK(PATH_Folder);
        };
    };

    // ============================= //
    // ## PROFILE SPECIFIC FILES ## //
    // ============================= //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE

};

