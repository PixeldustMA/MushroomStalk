export default class PATHS_Books {

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

        this.PATH_FOLDER_BOOKS = 'UNSET';
        this.PATH_FOLDER_CONSOLE = 'UNSET';

        // =========== //
        // ## FILES ## //
        // =========== //

        // ========== //
        // ## LIST ## //
        // ========== //

        this.PATH_LIST_BOOKS = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_PATHS() {

        this.GENERATE_FOLDER_BOOKS();
        this.GENERATE_LIST_BOOKS();

        return {
                FOLDERS: {
                    BOOKS: this.PATH_FOLDER_BOOKS,
                    CONSOLE: this.PATH_FOLDER_CONSOLE
                },
                FILES: {},
                LISTS: {
                    BOOKS: this.PATH_LIST_BOOKS
                }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    GENERATE_FOLDER_BOOKS() {
        this.PATH_FOLDER_BOOKS = `${this.PATH_MAIN}/LIBRARY`;
        this.PATH_FOLDER_CONSOLE = `${this.PATH_MAIN}/CONSOLE`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    // =========== //
    // ## LISTS ## //
    // =========== //

    GENERATE_LIST_BOOKS() {
        this.PATH_LIST_BOOKS = `${this.PATH_MAIN}/CONSOLE/BookList.json`;
    };
}