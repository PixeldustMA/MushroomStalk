import Connector_Beetle from "../../CONSOLE/ARTERIES/Connector_Beetle.js";
import MYCOLOGY_Main from "./Mycology_Main.js";

/**
 * ## CUPBOARD VALIDATION
 * ----------------------
 */
export default class Myco_Nova extends MYCOLOGY_Main{

    constructor({
        NOVA_CONFIG_FOLDERS = 0,
        NOVA_CONFIG_TOP = 0,
        NOVA_CONFIG_FILES = 0,
        NOVA_CONFIG_TEMPLATES = 0
    }){

        super();

        // =========== //
        // << PATHS >> //
        // =========== //
        this.PATH_TOP = CUPBOARD_CONFIG_TOP;
        this.PATH_FOLDERS = CUPBOARD_CONFIG_FOLDERS;
        this.PATH_FILES = CUPBOARD_CONFIG_FILES;

        // =============== //
        // << INSTANCES >> //
        // =============== //

        this.INSTANCE_BEETLE = new Connector_Beetle({

        });

        // ========== //
        // << DATA >> //
        // ========== //

        this.DATA_TEMPLATES = NOVA_CONFIG_TEMPLATES;
    };

    /**
     * ## RUN CUPBOARD VALIDATION
     * --------------------------
     */
    async RUN() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'RUN NOVA VALIDATION';
        await this.INSTANCE_BEETLE.READ_MODE();

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //
        await this.EXISTANCE_CHECK(this.PATH_TOP);

        // ================= //
        // << SUB FOLDERS >> //
        // ================= //
        await this.EXISTANCE_CHECK(this.PATH_TOP);
        await this.#FOLDERS();

        // ================ //
        // << JSON FILES >> //
        // ================ //

        // ================ //
        // << TEXT FILES >> //
        // ================ //

    };
    /**
     * ## VALIDATE NOVA FOLDERS
     * ----------------------------
     */
    async #FOLDERS() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'VALIDATING NOVA FOLDERS';
        await this.INSTANCE_BEETLE.READ_MODE();

        for (let INDEX_Folders = 0; INDEX_Folders < this.PATH_FOLDERS.length; INDEX_Folders++) {
            const PATH_Folder = this.PATH_FOLDERS[INDEX_Folders];
            await this.EXISTANCE_CHECK(PATH_Folder);
        };
    };

    // ============================= //
    // ## NOVA SPECIFIC FILES ## //
    // ============================= //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE

    // << POKEMON FILES >> //

    //? FULL LIST OF POKEMON
    async POKEMON_DATABASE() {};
    //? LIST OF POKEMON ELEMENTS
    async POKEMON_ELEMENTS() {};
    //? ACTIVE PARTY
    async POKEMON_PARTY(){};

    // << DISNEY >> //
    //? CURRENT WEEK TRACKER FOR DDV
    async DISNEY_WEEK(){};

    // << MEDIA RELATED FILES >> //
    //? ACTIVE BOOK
    async BOOKMARK(){};
    //? DATABASE OF BOOKS
    async BOOK_DATABASE(){};
    //? DATABASE OF FILMS
    async FILM_DATABASE(){};
    //? DATABASE OF TV PROGRAMS
    async TV_DATABASE(){};
    //? ACTIVE TELEVISION PROGRAMS
    async TV_NOW(){};

    // << SYSTEM >> //
    //? PRESETS FOR TRACKERS LIKE DAYS OR PANIC MODE SETS OR W/E
    async NOVA_STAR_PRESETS(){};
    //? INFORMATION AND FACT SHEETS ON EACH NOVA STAR
    async STAR_DATABASE(){};
    //? CHANGELOG FILES FOR THE CURRENT WEEK
    async STAR_CHANGELOG(){};

}
