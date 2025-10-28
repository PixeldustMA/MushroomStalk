export default class PATHS_DB_Elements {

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

        this.PATH_FOLDER_CATEGORY = 'UNSET';
        this.PATH_FOLDER_ELEMENTS = 'UNSET';
        this.PATH_FOLDER_CONSOLE = 'UNSET';
        this.PATH_FOLDER_DESCRIPTION = 'UNSET';

        // =========== //
        // ## FILES ## //
        // =========== //

        // ========== //
        // ## LIST ## //
        // ========== //

        this.PATH_LIST_CATEGORY = 'UNSET';
        this.PATH_LIST_ELEMENT = 'UNSET';
        this.PATH_LIST_RADIENS = 'UNSET';
        this.PATH_LIST_FRAGMENT = 'UNSET';
        this.PATH_LIST_MALRADI = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_PATHS() {

        this.GENERATE_FOLDER_CATEGORIES();
        this.PATH_FOLDER_ELEMENTS();
        this.GENERATE_LIST_ELEMENT();
        this.GENERATE_LIST_CATEGORY();

        return {
            ELEMENTS: {
                FOLDERS: {
                    ELEMENT: this.PATH_FOLDER_ELEMENTS,
                    CONSOLE: this.PATH_FOLDER_CONSOLE,
                    DESCRIPTION: this.PATH_FOLDER_DESCRIPTION
                },
                FILES: {},
                LISTS: {
                    ELEMENT: this.PATH_LIST_ELEMENT
                }
            },
            ELEMENT_CATEGORIES: {
                FOLDERS: {
                    CATEGORY: this.PATH_FOLDER_CATEGORY
                },
                FILES: {},
                LISTS: {
                    CATEGORY: this.PATH_FOLDER_CATEGORY,
                    RADIENS: this.PATH_LIST_RADIENS,
                    FRAGMENT: this.PATH_LIST_FRAGMENT,
                    MALRADI: this.PATH_LIST_MALRADI
                }
            }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    GENERATE_FOLDER_CATEGORIES() {
        this.PATH_FOLDER_CATEGORY = `${this.PATH_MAIN}/CATEGORIES`;
    };
    GENERATE_FOLDER_ELEMENTS() {
        this.PATH_FOLDER_CONSOLE = `${this.PATH_MAIN}/CONSOLE`;
        this.PATH_FOLDER_DESCRIPTION = `${this.PATH_MAIN}/DESCRIPTION`;
        this.PATH_FOLDER_ELEMENTS = `${this.PATH_MAIN}/ELEMENTS`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    // =========== //
    // ## LISTS ## //
    // =========== //

    GENERATE_LIST_ELEMENT() {
        this.PATH_LIST_ELEMENT = `${this.PATH_MAIN}/CONSOLE/ElementList.json`;
    };
    GENERATE_LIST_CATEGORY() {
        this.PATH_LIST_CATEGORY = `${this.PATH_MAIN}/CONSOLE/CategoryList.json`;
        this.PATH_LIST_RADIENS = `${this.PATH_MAIN}/CONSOLE/RadiensList.json`;
        this.PATH_LIST_FRAGMENT = `${this.PATH_MAIN}/CONSOLE/FragmentList.json`;
        this.PATH_LIST_MALRADI = `${this.PATH_MAIN}/CONSOLE/MalradiList.json`;
    };
}