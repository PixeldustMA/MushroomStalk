export default class PATHS_Author {

    constructor({
        PATH_CONFIG_MAIN = 0
    }) {

        // ========== //
        // ## MAIN ## //
        // ========== //

        this.PATH_MAIN = PATH_CONFIG_MAIN;

        // ============= //
        // ## FOLDERS ## //
        // ============= //

        this.PATH_FOLDER_AUTHORS = 'UNSET';
        this.PATH_FOLDER_CONSOLE = 'UNSET';

        // =========== //
        // ## FILES ## //
        // =========== //

        // ========== //
        // ## LIST ## //
        // ========== //

        this.PATH_LIST_AUTHORS = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_PATHS() {

        this.GENERATE_FOLDER_AUTHORS();
        this.GENERATE_LIST_AUTHORS();

        return {
                FOLDERS: {
                    AUTHORS: this.PATH_FOLDER_AUTHORS,
                    CONSOLE: this.PATH_FOLDER_CONSOLE
                },
                FILES: {},
                LISTS: {
                    AUTHORS: this.PATH_LIST_AUTHORS
                }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    GENERATE_FOLDER_AUTHORS() {
        this.PATH_FOLDER_AUTHORS = `${this.PATH_MAIN}/AUTHORS`;
        this.PATH_FOLDER_CONSOLE = `${this.PATH_MAIN}/CONSOLE`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    // =========== //
    // ## LISTS ## //
    // =========== //

    GENERATE_LIST_AUTHORS() {
        this.PATH_LIST_AUTHORS = `${this.PATH_MAIN}/CONSOLE/AuthorList.json`;
    };
}