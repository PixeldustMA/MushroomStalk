export default class PATHS_Elements {

    constructor({
        ELEMENT_CONFIG_MAIN = 0
    }) {

        this.PATH_MAIN = ELEMENT_CONFIG_MAIN;

        // ============= //
        // ## FOLDERS ## //
        // ============= //

        this.PATH_FOLDER_ELEMENT_ROOT = 'UNSET';
        this.PATH_FOLDER_ELEMENT_CONSOLE = 'UNSET';
        this.PATH_FOLDER_CATEGORY = 'UNSET';

        // =========== //
        // ## FILES ## //
        // =========== //

        this.PATH_FILE_ELEMENT_LIST = 'UNSET';
        this.PATH_FILE_CATEGORY_LIST = 'UNSET';
        this.PATH_FILE_RADIENS_LIST = 'UNSET'
        this.PATH_FILE_FRAGMENT_LIST = 'UNSET'
        this.PATH_FILE_MALRADI_LIST = 'UNSET'
    };

    GENERATE_ELEMENT_PATHS() {


        this.#ELEMENT_FOLDERS();
        this.#CATEGORY_FOLDERS();

        this.#ELEMENT_FILES();
        this.#CATEGORY_FILES();

        return {
            ELEMENT: {
                FOLDERS: {
                    ROOT: this.PATH_FOLDER_ELEMENT_ROOT,
                    CONSOLE: this.PATH_FOLDER_ELEMENT_CONSOLE
                },
                FILES: {},
                LIST: this.PATH_FILE_ELEMENT_LIST
            },
            CATEGORY: {
                FOLDERS: {
                    ROOT: this.PATH_FOLDER_ELEMENT_ROOT,
                    CONSOLE: this.PATH_FOLDER_ELEMENT_CONSOLE,
                    CATEGORY: this.PATH_FOLDER_CATEGORY
                },
                FILES: {},
                LIST: {
                    CATEGORY: this.PATH_FILE_CATEGORY_LIST,
                    RADIENS: this.PATH_FILE_RADIENS_LIST,
                    FRAGMENT: this.PATH_FILE_FRAGMENT_LIST,
                    MALRADI: this.PATH_FILE_MALRADI_LIST
                }
            }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    #ELEMENT_FOLDERS() {
        this.PATH_FOLDER_ELEMENT_ROOT = `${this.PATH_MAIN}/ELEMENTS`;
        this.PATH_FOLDER_ELEMENT_CONSOLE = `${this.PATH_MAIN}/ELEMENTS/CONSOLE`;
    };
    #CATEGORY_FOLDERS() {
        this.PATH_FOLDER_CATEGORY = `${this.PATH_MAIN}/ELEMENTS/CATEGORY`;
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    #ELEMENT_FILES() {
        this.PATH_FILE_ELEMENT_LIST = `${this.PATH_MAIN}/ELEMENTS/CONSOLE/ElementList.json`;
    };
    #CATEGORY_FILES() {
        this.PATH_FILE_CATEGORY_LIST = `${this.PATH_MAIN}/ELEMENTS/CONSOLE/CategoryList.json`;
        this.PATH_FILE_RADIENS_LIST = `${this.PATH_MAIN}/ELEMENTS/CONSOLE/RadiensList.json`;
        this.PATH_FILE_FRAGMENT_LIST = `${this.PATH_MAIN}/ELEMENTS/CONSOLE/FragmentList.json`;
        this.PATH_FILE_MALRADI_LIST = `${this.PATH_MAIN}/ELEMENTS/CONSOLE/MalradiList.json`;
    };
};