export default class PATHS_Songs {

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

        this.PATH_FOLDER_SONGS = 'UNSET';
        this.PATH_FOLDER_CONSOLE = 'UNSET';

        // =========== //
        // ## FILES ## //
        // =========== //

        // ========== //
        // ## LIST ## //
        // ========== //

        this.PATH_LIST_SONGS = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_PATHS() {

        this.GENERATE_FOLDER_SONGS();
        this.GENERATE_LIST_SONGS();

        return {
                FOLDERS: {
                    SONGS: this.PATH_FOLDER_SONGS,
                    CONSOLE: this.PATH_FOLDER_CONSOLE
                },
                FILES: {},
                LISTS: {
                    SONGS: this.PATH_LIST_SONGS
                }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    GENERATE_FOLDER_SONGS() {
        this.PATH_FOLDER_SONGS = `${this.PATH_MAIN}/SONGS`;
        this.PATH_FOLDER_CONSOLE = `${this.PATH_MAIN}/CONSOLE`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    // =========== //
    // ## LISTS ## //
    // =========== //

    GENERATE_LIST_SONGS() {
        this.PATH_LIST_SONGS = `${this.PATH_MAIN}/CONSOLE/SongList.json`;
    };
}