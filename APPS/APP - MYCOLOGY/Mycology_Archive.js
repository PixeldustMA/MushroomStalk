import MYCOLOGY_Main from "./Mycology_Main.js";

export default class Myco_Archive extends MYCOLOGY_Main {

    constructor({
        ARCHIVE_CONFIG_FOLDERS = 0,
        ARCHIVE_CONFIG_TOP = 0,
        ARCHIVE_CONFIG_FILES = 0,
        ARCHIVE_CONFIG_TEMPLATES = 0,
        ARCHIVE_CONFIG_USERNAME = 0
    }){

        super();

        // =========== //
        // << PATHS >> //
        // =========== //

        this.PATH_TOP = ARCHIVE_CONFIG_TOP;
        this.PATH_FOLDERS = ARCHIVE_CONFIG_FOLDERS;
        this.PATH_FILES = ARCHIVE_CONFIG_FILES;
        this.ARCHIVE_PATH_DESTINATION = ARCHIVE_CONFIG_FILES.ARCHIVE_DESTINATION;
        this.ARCHIVE_PATH_ORIGIN = ARCHIVE_CONFIG_FILES.ARCHIVE_ORIGIN;

        // =============== //
        // << INSTANCES >> //
        // =============== //

        this.INSTANCE_BEETLE = new Connector_Beetle({

        });

        // ========== //
        // << DATA >> //
        // ========== //

        this.DATA_TEMPLATES = ARCHIVE_CONFIG_TEMPLATES;
        this.DATA_USERNAME = ARCHIVE_CONFIG_USERNAME;
    };

        /**
     * ## RUN CUPBOARD VALIDATION
     * --------------------------
     */
        async RUN() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'RUN ARCHIVE VALIDATION';
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

        // ==================== //
        // << DATABASE FILES >> //
        // ==================== //
        await this.#ARCHIVE_FILE();

    };
    /**
     * ## VALIDATE ARCHIVE FOLDERS
     * ----------------------------
     */
    async #FOLDERS() {
    
        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING ARCHIVE FOLDERS';
        await this.INSTANCE_BEETLE.READ_MODE();

        for (let INDEX_Folders = 0; INDEX_Folders < this.PATH_FOLDERS.length; INDEX_Folders++) {
            const PATH_Folder = this.PATH_FOLDERS[INDEX_Folders];
            await this.EXISTANCE_CHECK(PATH_Folder);
        };
    };

    // ============================ //
    // ## ARCHIVE SPECIFIC FILES ## //
    // ============================ //

    /**
     * ## VALIDATE FROG FILE
     * ---------------------
     */
    async #ARCHIVE_FILE() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING ARCHIVE FILE';
        await this.INSTANCE_BEETLE.READ_MODE();

        await this.EXISTANCE_ARCHIVE(this.ARCHIVE_PATH_DESTINATION, this.ARCHIVE_PATH_ORIGIN);
    };
}