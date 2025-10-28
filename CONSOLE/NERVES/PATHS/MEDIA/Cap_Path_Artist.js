export default class PATHS_Artist {

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

        this.PATH_FOLDER_ARTISTS = 'UNSET';
        this.PATH_FOLDER_CONSOLE = 'UNSET';

        // =========== //
        // ## FILES ## //
        // =========== //

        // ========== //
        // ## LIST ## //
        // ========== //

        this.PATH_LIST_ARTISTS = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_PATHS() {

        this.GENERATE_FOLDER_ARTISTS();
        this.GENERATE_LIST_ARTISTS();

        return {
                FOLDERS: {
                    ARTISTS: this.PATH_FOLDER_ARTISTS,
                    CONSOLE: this.PATH_FOLDER_CONSOLE
                },
                FILES: {},
                LISTS: {
                    ARTISTS: this.PATH_LIST_ARTISTS
                }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    GENERATE_FOLDER_ARTISTS() {
        this.PATH_FOLDER_ARTISTS = `${this.PATH_MAIN}/ARTISTS`;
        this.PATH_FOLDER_CONSOLE = `${this.PATH_MAIN}/CONSOLE`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    // =========== //
    // ## LISTS ## //
    // =========== //

    GENERATE_LIST_ARTISTS() {
        this.PATH_LIST_ARTISTS = `${this.PATH_MAIN}/CONSOLE/ArtistList.json`;
    };
}