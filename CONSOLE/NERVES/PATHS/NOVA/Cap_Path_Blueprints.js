export default class PATHS_Bluprints {

    constructor({
        BLUEPRINT_CONFIG_ROOT = 0
    }) {

        // ========== //
        // ## MAIN ## //
        // ========== //

        this.PATH_MAIN = BLUEPRINT_CONFIG_ROOT;

        // =========== //
        // ## PATHS ## //
        // =========== // 

        this.PATH_FOLDER_ROOT = 'UNSET';
        this.PATH_FOLDER_CONSOLE = 'UNSET';
        this.PATH_FOLDER_BLUEPRINTS = 'UNSET';
        this.PATH_FILE_LIST = 'UNSET';
    };

    GENERATE_BLUEPRINT_PATHS() {

        this.#BLUEPRINT_FOLDERS();
        this.#BLUEPRINT_FILES();

        return {
            FOLDERS: {
                ROOT: this.PATH_FOLDER_ROOT,
                CONSOLE: this.PATH_FOLDER_CONSOLE,
                BLUEPRINTS: this.PATH_FOLDER_BLUEPRINTS
            },
            FILES: {},
            LIST: this.PATH_FILE_LIST
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    #BLUEPRINT_FOLDERS() {
        this.PATH_FOLDER_ROOT = `${this.PATH_MAIN}`;
        this.PATH_FOLDER_CONSOLE = `${this.PATH_MAIN}/CONSOLE`;
        this.PATH_FOLDER_BLUEPRINTS = `${this.PATH_MAIN}/BLUEPRINTS`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    #BLUEPRINT_FILES() {
        this.PATH_FILE_LIST = `${this.PATH_FOLDER_CONSOLE}/BlueprintList.json`;
    };
}