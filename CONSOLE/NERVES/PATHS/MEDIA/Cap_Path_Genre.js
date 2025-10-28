export default class PATHS_Genre {

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

        this.PATH_FOLDER_GENRE = 'UNSET';
        this.PATH_FOLDER_CONSOLE = 'UNSET';
        this.PATH_FOLDER_SUBGENRE = 'UNSET';

        // =========== //
        // ## FILES ## //
        // =========== //

        // ========== //
        // ## LIST ## //
        // ========== //

        this.PATH_LIST_GENRE = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_PATHS() {

        this.GENERATE_FOLDER_GENRE();
        this.GENERATE_LIST_GENRE();

        return {
                FOLDERS: {
                    GENRE: this.PATH_FOLDER_GENRE,
                    SUBGENRE: this.PATH_FOLDER_SUBGENRE,
                    CONSOLE: this.PATH_FOLDER_CONSOLE
                },
                FILES: {},
                LISTS: {
                    GENRE: this.PATH_LIST_GENRE
                }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    GENERATE_FOLDER_GENRE() {
        this.PATH_FOLDER_GENRE = `${this.PATH_MAIN}/GENRE`;
        this.PATH_FOLDER_CONSOLE = `${this.PATH_MAIN}/CONSOLE`;
        this.PATH_FOLDER_SUBGENRE = `${this.PATH_MAIN}/SUBGENRE`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    // =========== //
    // ## LISTS ## //
    // =========== //

    GENERATE_LIST_GENRE() {
        this.PATH_LIST_GENRE = `${this.PATH_MAIN}/CONSOLE/GenreList.json`;
    };
}