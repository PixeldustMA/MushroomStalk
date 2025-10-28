export default class PATHS_Profiles {

    constructor({
        PROFILE_CONFIG_MAIN = 0
    }) {

        // ========== //
        // ## MAIN ## //
        // ========== //

        this.PATH_MAIN = PROFILE_CONFIG_MAIN;

        // ============= //
        // ## FOLDERS ## //
        // ============= //

        this.PATH_FOLDER_LILYPAD = 'UNSET';

        // =========== //
        // ## FILES ## //
        // =========== //

        this.PATH_FILE_FROG = 'UNSET';
        this.PATH_FILE_RESIDENT = 'UNSET';

        // ========== //
        // ## LIST ## //
        // ========== //

        this.PATH_LIST_USERS = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_PROFILE_PATHS() {

        this.#GENERATE_FOLDER_LILYPAD();
        this.#GENERATE_FILE_USERS();
        this.#GENERATE_LIST_USERS();

        return {
            USERS: {
                FOLDERS: {
                    LILYPAD: this.PATH_FOLDER_LILYPAD
                },
                FILES: {
                    FROG: this.PATH_FILE_FROG,
                    RESIDENT: this.PATH_FILE_RESIDENT
                },
                LISTS: {
                    USER: this.PATH_LIST_USERS
                }
            }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    #GENERATE_FOLDER_LILYPAD() {
        this.PATH_FOLDER_LILYPAD = `${this.PATH_MAIN}/LILYPAD`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    #GENERATE_FILE_USERS() {
        this.PATH_FILE_FROG = `${this.PATH_MAIN}/Frogs.json`;
        this.PATH_FILE_RESIDENT = `${this.PATH_MAIN}/ResidentFrog.json`;
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    #GENERATE_LIST_USERS() {
        this.PATH_LIST_USERS = `${this.PATH_MAIN}/UserList.json`;
    };
}