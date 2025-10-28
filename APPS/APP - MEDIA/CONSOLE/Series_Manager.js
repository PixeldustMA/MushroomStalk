import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Manager_Series extends Stalk{

    constructor({
        SERIES_CONFIG_NAME = 0,
        SERIES_CONFIG_AUTHOR = 0,
        SERIES_CONFIG_PARTS = 0,
        SERIES_CONFIG_GENRE = 0,
        SERIES_CONFIG_SUBGENRE = 0,
        SERIES_CONFIG_COMPLETION = 0,
        SERIES_CONFIG_BOOK = 0
    }){

        super();

        // ================ //
        // ## PROPERTIES ## //
        // ================ //
        
        this.PROPERTY_NAME = SERIES_CONFIG_NAME;
        this.PROPERTY_AUTHOR = SERIES_CONFIG_AUTHOR;
        this.PROPERTY_PARTS = SERIES_CONFIG_PARTS;
        this.PROPERTY_GENRE = SERIES_CONFIG_GENRE;
        this.PROPERTY_SUBGENRE = SERIES_CONFIG_SUBGENRE;
        this.PROPERTY_COMPLETION = SERIES_CONFIG_COMPLETION;
        this.PROPERTY_BOOK = SERIES_CONFIG_BOOK;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async LOAD_PATH() {
        await this.REQUEST_SESSION_MEDIA();
        this.PATH_ACTIVE_SERIES = `${this.SESSION.PATHS.MEDIA.SERIES.FOLDERS.SERIES}/${this.PROPERTY_NAME}.json`;
        this.PATH_ACTIVE_LIST = `${this.SESSION.PATHS.MEDIA.SERIES.FOLDERS.CONSOLE}/SeriesList.json`;
        this.LIST_SERIES = this.SESSION.MEDIA.SERIES.LIST;
    };

    // ================ //
    // ## OPERATIONS ## //
    // ================ //

    async INSERT(){

        await this.LOAD_PATH();
        await this.BASE_FILE();
        await this.LIST_FILE();
    };
    async UPDATE(PARAMETER_PROPERTY) {
        await this.LOAD_PATH();
        switch (PARAMETER_PROPERTY) {
            case 'BOOK':
                await this.#UPDATE_PROPERTY_BOOK()
                break;
        
            default:
                break;
        }
    }

    // ========== //
    // ## BASE ## //
    // ========== //

    async BASE_FILE() {
        this.RENDERER_PATH = this.PATH_ACTIVE_SERIES;
        this.RENDERER_DATA = this.#TEMPLATE();
        await this.SAVE();
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async LIST_FILE() {
        this.LIST_SERIES.push(this.PROPERTY_NAME);
        this.RENDERER_PATH = this.PATH_ACTIVE_LIST;
        this.RENDERER_DATA = this.LIST_SERIES;
        await this.SAVE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    async #UPDATE_PROPERTY_BOOK() {
        let ACTIVE_SERIES = this.SESSION.MEDIA.SERIES.DATA[this.PROPERTY_NAME];
        ACTIVE_SERIES.BOOKS[this.PROPERTY_PARTS] = this.PROPERTY_BOOK;
        this.RENDERER_PATH = this.PATH_ACTIVE_SERIES;
        this.RENDERER_DATA = ACTIVE_SERIES;
        await this.SAVE();
    };

    // =============== //
    // ## TEMPLATES ## //
    // =============== //

    #TEMPLATE() {
        return {
            NAME: this.PROPERTY_NAME,
            AUTHOR: this.PROPERTY_AUTHOR,
            PARTS: this.PROPERTY_PARTS,
            GENRE:  this.PROPERTY_GENRE,
            SUBGENRE: this.PROPERTY_SUBGENRE,
            COMPLETION: this.PROPERTY_COMPLETION,
            BOOKS: this.#GENERATE_BOOKS()
        }
    };
    #GENERATE_BOOKS() {
        let obj = {}
        let AMOUNT = parseInt(this.PROPERTY_PARTS);
        for (let index = 0; index < AMOUNT; index++) {
            const num = index;
            obj[num + 1] = ''
        }
        return obj
    };
}