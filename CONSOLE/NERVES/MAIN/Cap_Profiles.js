import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Profiles extends Renderer{

    constructor({
        PROFILE_CONFIG_ROOT = 0,
        PROFILE_CONFIG_PATHS = 0
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_ROOT = PROFILE_CONFIG_ROOT;
        this.PATH_RESIDENT = 'UNSET';
        this.PATH_FOLDER_USERS = 'UNSET';
        this.PATH_LIST_USERS = 'UNSET';

        // ========== //
        // ## LIST ## //
        // ========== //

        this.LIST_USERS = 'UNSET';

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_PATHS = PROFILE_CONFIG_PATHS;
        this.DATA_RESIDENT = {};
        this.DATA_USERS = {};
        this.DATA_FROG = {};
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#LOAD_PATHS();
        await this.#READ_LISTS();
        await this.#READ_FILES();

        return {
            USERS: {
                DATA: {
                    USERS: this.DATA_USERS,
                    FROGS: this.DATA_FROG,
                    RESIDENT: this.DATA_RESIDENT
                },
                LIST: {
                    USERS: this.LIST_USERS
                }
            }
        }
    };

    // ============= //
    // ## LOADING ## //
    // ============= //

    async #LOAD_PATHS() {
        this.PATH_RESIDENT = this.DATA_PATHS.FILES.RESIDENT;
        this.PATH_FOLDER_USERS = this.DATA_PATHS.FOLDERS.LILYPAD;
        this.PATH_LIST_USERS = this.DATA_PATHS.LISTS.USER;
        this.PATH_FROG = this.DATA_PATHS.FILES.FROG;
    };
    async #READ_FILES() {
        await this.#READ_USER_DATA();
        await this.#READ_RESIDENT_DATA();
        await this.#READ_FROG_DATA();
    };
    async #READ_LISTS() {
        await this.#READ_USER_LIST();
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #READ_USER_LIST() {
        this.RENDERER_PATH = this.PATH_LIST_USERS;
        this.LIST_USERS = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #READ_USER_DATA() {
        for (let INDEX_USER = 0; INDEX_USER < this.LIST_USERS.length; INDEX_USER++) {
            const USER = this.LIST_USERS[INDEX_USER];
            this.RENDERER_PATH = `${this.PATH_FOLDER_USERS}/${USER}.json`;
            this.DATA_USERS[USER] = JSON.parse(await this.READ())
        }
    };
    async #READ_RESIDENT_DATA() {
        this.RENDERER_PATH = this.PATH_RESIDENT;
        try {
            this.DATA_RESIDENT = JSON.parse(await this.READ());            
        } catch (error) {
            this.DATA_RESIDENT = {};
        };
    };
    async #READ_FROG_DATA() {
        this.RENDERER_PATH = this.PATH_FROG;
        this.DATA_FROG = JSON.parse(await this.READ());
    };
}