export default class PATHS_Routes {

    constructor({
        PATH_CONFIG_CUPBOARD = 0,
        PATH_CONFIG_USERNAME = 0
    }) {

        // ========== //
        // ## MAIN ## //
        // ========== //

        this.PATH_CUPBOARD = PATH_CONFIG_CUPBOARD;
        this.PATH_USERNAME = PATH_CONFIG_USERNAME;

        // ============= //
        // ## FOLDERS ## //
        // ============= //

        // =========== //
        // ## FILES ## //
        // =========== //

        this.PATH_FILE_USERS = 'UNSET';

        // ========== //
        // ## LIST ## //
        // ========== //

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_ROUTE_PATHS() {

        this.GENERATE_FILE_USERS();

        return {

                FOLDERS: {},
                FILES: {
                    USERS: this.PATH_FILE_USERS,
                },
                LISTS: {}
        }
    };
    GENERATE_ROUTE_USERNAME_PATHS() {

        this.GENERATE_FILE_USERS();

        return {
                FOLDERS: {},
                FILES: {
                    USERS: this.PATH_FILE_USERS,
                },
                LISTS: {}
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    // =========== //
    // ## FILES ## //
    // =========== //

    GENERATE_FILE_USERS() {
        this.PATH_FILE_USERS = `${this.PATH_CUPBOARD}/User.json`;
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

}