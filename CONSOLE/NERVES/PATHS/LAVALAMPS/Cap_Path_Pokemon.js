export default class PATHS_Pokemon {

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

        // =========== //
        // << BOXES >> //
        // =========== //

        this.PATH_FOLDER_BOXES = 'UNSET';
        this.PATH_FOLDER_BOX_YELLOW = 'UNSET';

        // ========= //
        // << DEX >> //
        // ========= //

        this.PATH_FOLDER_POKEDEX = 'UNSET';
        this.PATH_FOLDER_PIXELDEX = 'UNSET';
        this.PATH_FOLDER_POKEDEX_KANTO = 'UNSET';
        this.PATH_FOLDER_PIXELDEX_KANTO = 'UNSET';

        // ============= //
        // << CONSOLE >> //
        // ============= //

        this.PATH_FOLDER_CONSOLE_BOX = 'UNSET';
        this.PATH_FOLDER_POKEDEX_CONSOLE = 'UNSET';
        this.PATH_FOLDER_PIXELDEX_CONSOLE = 'UNSET';

        // ========== //
        // ## LIST ## //
        // ========== //

        this.PATH_LIST_YELLOW = 'UNSET';
        this.PATH_LIST_POKEDEX_KANTO = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_PATHS() {

        this.GENERATE_PATHS_FOLDER_BOXES();
        this.GENERATE_PATHS_FOLDER_POKEDEX();
        this.GENERATE_PATHS_FOLDER_PIXELDEX();

        this.GENERATE_PATHS_LIST();

        return {
            BOX: {
                LIST: {
                    YELLOW: this.PATH_LIST_YELLOW
                },
                FOLDER: {
                    ROOT: this.PATH_FOLDER_BOXES,
                    CONSOLE: this.PATH_FOLDER_CONSOLE_BOX,
                    YELLOW: this.PATH_FOLDER_BOX_YELLOW
                }
            },
            POKEDEX: {
                FOLDER: {
                    ROOT: this.PATH_FOLDER_POKEDEX,
                    KANTO: this.PATH_FOLDER_POKEDEX_KANTO,
                    CONSOLE: this.PATH_FOLDER_POKEDEX_CONSOLE
                },
                LIST: {
                    KANTO: this.PATH_LIST_POKEDEX_KANTO
                }
            },
            PIXELDEX: {
                FOLDER: {
                    ROOT: this.PATH_FOLDER_PIXELDEX,
                    KANTO: this.PATH_FOLDER_PIXELDEX_KANTO,
                    CONSOLE: this.PATH_FOLDER_PIXELDEX_CONSOLE
                },
                LIST: {
                    KANTO: this.PATH_LIST_PIXELDEX_KANTO
                }
            }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    GENERATE_PATHS_FOLDER_BOXES() {
        this.PATH_FOLDER_BOXES = `${this.PATH_MAIN}/BOXES`;
        this.PATH_FOLDER_CONSOLE_BOX = `${this.PATH_MAIN}/BOXES/CONSOLE`;
        this.PATH_FOLDER_BOX_YELLOW = `${this.PATH_MAIN}/BOXES/YELLOW`;
    };
    GENERATE_PATHS_FOLDER_POKEDEX() {
        this.PATH_FOLDER_POKEDEX = `${this.PATH_MAIN}/POKEDEX`;
        this.PATH_FOLDER_POKEDEX_KANTO = `${this.PATH_MAIN}/POKEDEX/KANTO`;
        this.PATH_FOLDER_POKEDEX_CONSOLE = `${this.PATH_MAIN}/POKEDEX/CONSOLE`;
    };
    GENERATE_PATHS_FOLDER_PIXELDEX() {
        this.PATH_FOLDER_PIXELDEX = `${this.PATH_MAIN}/PIXELDEX`;
        this.PATH_FOLDER_PIXELDEX_KANTO = `${this.PATH_MAIN}/PIXELDEX/KANTO`;
        this.PATH_FOLDER_PIXELDEX_CONSOLE = `${this.PATH_MAIN}/PIXELDEX/CONSOLE`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //


    // =========== //
    // ## LISTS ## //
    // =========== //

    GENERATE_PATHS_LIST() {
        this.PATH_LIST_YELLOW = `${this.PATH_MAIN}/BOXES/CONSOLE/ListYellow.json`;
        this.PATH_LIST_POKEDEX_KANTO = `${this.PATH_MAIN}/POKEDEX/CONSOLE/KantoList.json`;
        this.PATH_LIST_PIXELDEX_KANTO = `${this.PATH_MAIN}/PIXELDEX/CONSOLE/KantoList.json`;
    };

};