import Branches from "../../CONSOLE/LUNGS/Branches.js";

export default class Lilypad extends Branches{

    /**
     * ## LILYPAD CONSTRUCTOR
     */
    constructor({
        LILYPAD_CONFIG_USERNAME = 0,
        LILYPAD_CONFIG_PASSWORD = 0,
        LILYPAD_CONFIG_LOGIN = false,
        LILYPAD_CONFIG_PATH_OBSIDIAN = 0,
        LILYPAD_CONFIG_LIST_USERS = 0,
        LILYPAD_CONFIG_DATA_COUNT = 0,
        LILYPAD_CONFIG_DATA_LILYPAD = 0
    }){

        super()
        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.PROPERTY_PROFILE_USERNAME = LILYPAD_CONFIG_USERNAME;
        this.PROPERTY_PROFILE_PASSWORD = LILYPAD_CONFIG_PASSWORD;
        this.PROPERTY_PATH_OBSIDIAN = LILYPAD_CONFIG_PATH_OBSIDIAN;

        // ========== //
        // ## DATA ## //
        // ========== //

        this.NUMBER_COUNT = LILYPAD_CONFIG_DATA_COUNT;
        this.DATA_LILYPAD = LILYPAD_CONFIG_DATA_LILYPAD;

        // ========== //
        // ## LIST ## //
        // ========== //

        this.LIST_USERS = LILYPAD_CONFIG_LIST_USERS;

    }

    // ========= //
    // ## RUN ## //
    // ========= //

    async RUN_LILYPAD(PARAMETER_REQUEST) {
        await this.REQUEST_SESSION_PATHS();
        await this.REQUEST_SESSION_SETTINGS();

        switch (PARAMETER_REQUEST) {
            case 'NEW':
                return await this.#NEW_FROG();
            case 'RESIDENT':
                return await this.#SET_RESIDENT();
            case 'UPDATE':
                return await this.#UPDATE_FROG();
            default:
                break;
        }
    }

    // =========== //
    // ## INPUT ## //
    // =========== //

    async #NEW_FROG() {

        await this.#GENERATE_NEW_FROG_FILE();
        await this.#UPDATE_USERNAME_LIST();
        await this.#UPDATE_LILYPAD();
        await this.#UPDATE_COUNT();
        await this.#SET_RESIDENT();
    };

    // ============ //
    // ## UPDATE ## //
    // ============ //

    async SWITCH_USER() {

        await this.REQUEST_SESSION_USERS();
        console.log(this.SESSION)
        let ACTIVE_USER = this.SESSION.USERS.USERS.DATA.USERS[this.PROPERTY_PROFILE_USERNAME];

        console.log(ACTIVE_USER);

        this.RENDERER_DATA = ACTIVE_USER;
        this.RENDERER_PATH = this.SESSION.PATHS.PROFILES.USERS.FILES.RESIDENT;
        await this.SAVE();
    };
    async #SET_RESIDENT() {
        this.RENDERER_DATA = {
            MESSAGEPATH: "BUNDLE",
            BUNDLEPATH: "BUNDLE",
            NEWSPATH: "NEWS",
            SQUIRRELPATH: "SQUIRRELS",
            SPIRITPATH: "SPIRITS",
            DOODLEPATH: "DOODLES",
            OBSIDIAN: this.PROPERTY_PATH_OBSIDIAN,
            NAME: this.PROPERTY_PROFILE_USERNAME,
            PASSWORD: this.PROPERTY_PROFILE_PASSWORD,
            LOGGED: false
        };
        this.RENDERER_PATH = this.SESSION.PATHS.PROFILES.USERS.FILES.RESIDENT;
        await this.SAVE();
    };
    async #UPDATE_FROG() {

    };
    async #UPDATE_USERNAME_LIST() {
        this.LIST_USERS.push(this.PROPERTY_PROFILE_USERNAME);
        this.RENDERER_DATA = this.LIST_USERS;
        this.RENDERER_PATH = this.SESSION.PATHS.PROFILES.USERS.LISTS.USER;
        await this.SAVE();
    };
    async #UPDATE_LILYPAD() {
        const KEY = this.NUMBER_COUNT + 1;
        this.DATA_LILYPAD[KEY] = {
            USERNAME: this.PROPERTY_PROFILE_USERNAME,
            PASSWORD: this.PROPERTY_PROFILE_PASSWORD
        };
        this.RENDERER_DATA = this.DATA_LILYPAD;
        this.RENDERER_PATH = this.SESSION.PATHS.PROFILES.USERS.FILES.FROG;
        await this.SAVE();
    };
    async #UPDATE_COUNT() {
        console.log('COUNT SETTINGS');
        console.log(this.SESSION)
        this.DATA_SETTINGS = this.SESSION.SETTINGS.MUSHROOM;
        this.NUMBER_COUNT += 1;
        this.DATA_SETTINGS.USER_COUNT = this.NUMBER_COUNT;
        this.RENDERER_DATA = this.DATA_SETTINGS;
        this.RENDERER_PATH = this.SESSION.PATHS.SETTINGS.SETTINGS.FILES.MUSHROOM;
        await this.SAVE();
    };

    // ========== //
    // ## LOAD ## //
    // ========== //


    // ================ //
    // ## BASE FILES ## //
    // ================ //

    async #GENERATE_NEW_FROG_FILE() {

        this.RENDERER_DATA = this.GENERATE_FROG();
        this.RENDERER_PATH = `${this.SESSION.PATHS.PROFILES.USERS.FOLDERS.LILYPAD}/${this.PROPERTY_PROFILE_USERNAME}.json`;
                console.log(this.RENDERER_PATH)
        await this.SAVE();
    };

    // =============== //
    // ## TEMPLATES ## //
    // =============== //

    GENERATE_FROG() {
        return {
            USERNAME: this.PROPERTY_PROFILE_USERNAME,
            PASSWORD: this.PROPERTY_PROFILE_PASSWORD,
            OBSIDIAN: this.PROPERTY_PATH_OBSIDIAN
        }
    };
}