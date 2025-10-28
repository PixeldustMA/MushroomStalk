export default class PATHS_Settings {

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

        this.PATH_FILE_MUSHROOM = 'UNSET';
        this.PATH_FILE_LAVALAMPS = 'UNSET';
        this.PATH_FILE_MEDIA = 'UNSET';

        // ========== //
        // ## LIST ## //
        // ========== //

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    GENERATE_SETTINGS_BASIC() {

        this.#GENERATE_FILE_MUSHROOM();

        return {
            SETTINGS: {
                FOLDERS: {},
                FILES: {
                    MUSHROOM: this.PATH_FILE_MUSHROOM
                },
                LISTS: {}
            }
        }
    };
    GENERATE_SETTINGS_USERNAME() {

        this.#GENERATE_FILE_MUSHROOM();
        this.#GENERATE_LAVALAMPS_SETTINGS();
        this.#GENERATE_MEDIA_SETTINGS();

        return {
            SETTINGS: {
                FOLDERS: {},
                FILES: {
                    MUSHROOM: this.PATH_FILE_MUSHROOM,
                    LAVALAMPS: this.PATH_FILE_LAVALAMPS,
                    MEDIA: this.PATH_FILE_MEDIA
                },
                LISTS: {}
            }
        }
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    // =========== //
    // ## FILES ## //
    // =========== //

    #GENERATE_FILE_MUSHROOM() {
        this.PATH_FILE_MUSHROOM = `${this.PATH_CUPBOARD}/MushroomData.json`;
    };
    #GENERATE_LAVALAMPS_SETTINGS() {
        this.PATH_FILE_LAVALAMPS = `${this.PATH_USERNAME}/ActiveLavalamps.json`;
    };
    #GENERATE_MEDIA_SETTINGS() {
        this.PATH_FILE_MEDIA = `${this.PATH_USERNAME}/ActiveMedia.json`;
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

}