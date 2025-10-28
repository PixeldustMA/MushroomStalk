export default class PATHS_Style {

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

        this.PATH_FOLDER_STYLE = 'UNSET';
        this.PATH_FOLDER_CONSOLE = 'UNSET';

        // =========== //
        // ## FILES ## //
        // =========== //

        // ========== //
        // ## LIST ## //
        // ========== //

        this.PATH_LIST_STYLE = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_PATHS() {

        this.GENERATE_FOLDER_STYLE();
        this.GENERATE_LIST_STYLE();

        return {
                FOLDERS: {
                    STYLE: this.PATH_FOLDER_STYLE,
                    CONSOLE: this.PATH_FOLDER_CONSOLE
                },
                FILES: {},
                LISTS: {
                    STYLE: this.PATH_LIST_STYLE
                }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    GENERATE_FOLDER_STYLE() {
        this.PATH_FOLDER_STYLE = `${this.PATH_MAIN}/STYLE`;
        this.PATH_FOLDER_CONSOLE = `${this.PATH_MAIN}/CONSOLE`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    // =========== //
    // ## LISTS ## //
    // =========== //

    GENERATE_LIST_STYLE() {
        this.PATH_LIST_STYLE = `${this.PATH_MAIN}/CONSOLE/StyleList.json`;
    };
}