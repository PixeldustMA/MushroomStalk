import Markdown_Genre from "./Genre_Markdown.js";
import Manager_Media from "./Manager_Media.js";

export default class MANAGER_Genre extends Manager_Media {

    constructor({
        GENRE_CONFIG_GENRE = 0,
        GENRE_CONFIG_SUBGENRE = 0,
        GENRE_CONFIG_BOOK = 0
    }) {

        super({});

        // =========== //
        // ## LISTS ## //
        // =========== //


        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.PROPERTY_GENRE = GENRE_CONFIG_GENRE;
        this.PROPERTY_SUBGENRE = GENRE_CONFIG_SUBGENRE; 
        this.PROPERTY_BOOK = GENRE_CONFIG_BOOK;
    };

    // ============ //
    // ## INSERT ## //
    // ============ //

    async INSERT_GENRE() {
        await this.LOAD_SESSIONS();
        await this.LOAD_PATHS();
        await this.LOAD_LISTS();

        await this.#BASE_FILE_GENRE();
        await this.#UPDATE_LIST();
        await this.#GENRE_MARKDOWN();
    };
    async INSERT_SUBGENRE() {
        await this.LOAD_SESSIONS();
        await this.LOAD_PATHS();
        await this.LOAD_LISTS();

        await this.#BASE_FILE_SUBGENRE();
        await this.#UPDATE_GENRE_PROPERTY_SUBGENRE();
        await this.#SUBGENRE_MARKDOWN();
    };

    // ============= //
    // ## UPDATES ## //
    // ============= //

    async UPDATE_GENRE_PROPERTY(PARAMETER_PARAMETER) {

        await this.LOAD_SESSIONS();
        await this.LOAD_PATHS();
        await this.LOAD_LISTS();
        switch (PARAMETER_PARAMETER) {
            case 'BOOK':
                await this.#UPDATE_GENRE_PROPERTY_BOOK();
                await this.#UPDATE_SUBGENRE_PROPERTY_BOOK()
                break;
            default:
                break;
        }
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    async #UPDATE_LIST() {
        this.LIST_GENRE.push(this.PROPERTY_GENRE);
        this.RENDERER_DATA = this.LIST_GENRE;
        this.RENDERER_PATH = this.PATH_LIST_GENRE;
        await this.SAVE();
    };

    // ================ //
    // ## BASE FILES ## //
    // ================ //

    async #BASE_FILE_GENRE() {
        this.RENDERER_DATA = await this.#GENRE_TEMPLATE();
        this.RENDERER_PATH = `${this.PATH_FOLDER_GENRE}/${this.PROPERTY_GENRE}.json`;
        await this.SAVE();
    };
    async #BASE_FILE_SUBGENRE() {
        this.RENDERER_DATA = await this.#SUBGENRE_TEMPLATE();
        this.RENDERER_PATH = `${this.PATH_FOLDER_SUBGENRE}/${this.PROPERTY_SUBGENRE}.json`;
        await this.SAVE();
    };

    // ============= //
    // ## UPDATES ## //
    // ============= //

    async #UPDATE_GENRE_PROPERTY_SUBGENRE() {
        let DATA_ACTIVE_GENRE = this.SESSION.MEDIA.GENRE.DATA[this.PROPERTY_GENRE];
        DATA_ACTIVE_GENRE.SUBGENRE.push(this.PROPERTY_SUBGENRE);
        this.RENDERER_DATA = DATA_ACTIVE_GENRE;
        this.RENDERER_PATH = `${this.PATH_FOLDER_GENRE}/${this.PROPERTY_GENRE}.json`;
        await this.SAVE();
    };
    async #UPDATE_GENRE_PROPERTY_BOOK() {
        let DATA_ACTIVE_GENRE = this.SESSION.MEDIA.GENRE.DATA[this.PROPERTY_GENRE];
        if (!DATA_ACTIVE_GENRE.BOOKS.includes(this.PROPERTY_BOOK)) {
            DATA_ACTIVE_GENRE.BOOKS.push(this.PROPERTY_BOOK);
            this.RENDERER_DATA = DATA_ACTIVE_GENRE;
            this.RENDERER_PATH = `${this.PATH_FOLDER_GENRE}/${this.PROPERTY_GENRE}.json`;
            await this.SAVE();
        };
    };
    async #UPDATE_SUBGENRE_PROPERTY_BOOK() {
        this.RENDERER_PATH  = `${this.PATH_FOLDER_SUBGENRE}/${this.PROPERTY_SUBGENRE}.json`;
        let DATA_ACTIVE_GENRE = JSON.parse(await this.READ());

        if (!DATA_ACTIVE_GENRE.BOOKS.includes(this.PROPERTY_BOOK)) {
            DATA_ACTIVE_GENRE.BOOKS.push(this.PROPERTY_BOOK);
            this.RENDERER_DATA = DATA_ACTIVE_GENRE;
            this.RENDERER_PATH = `${this.PATH_FOLDER_SUBGENRE}/${this.PROPERTY_SUBGENRE}.json`;
            await this.SAVE();
        };
    };

    // =============== //
    // ## TEMPLATES ## //
    // =============== //

    async #GENRE_TEMPLATE() {
        return {
            NAME: this.PROPERTY_GENRE,
            SUBGENRE: [],
            BOOKS: []
        };
    };
    async #SUBGENRE_TEMPLATE() {
        return {
            GENRE: this.PROPERTY_GENRE,
            BOOKS: []
        }
    };

    // ============== //
    // ## MARKDOWN ## //
    // ============== //

    async #GENRE_MARKDOWN() {
        await this.REQUEST_SESSION_USERS();

        let INSTANCE_MARKDOWN = new Markdown_Genre({
            GENRE_CONFIG_GENRE: this.PROPERTY_GENRE,
            GENRE_CONFIG_PATH: `${this.SESSION.USERS.USERS.DATA.RESIDENT.OBSIDIAN}/SHELF - MEDIA/GENRES`
        }).SAVE_GENRE()
    };
    async #SUBGENRE_MARKDOWN() {
        await this.REQUEST_SESSION_USERS();

        let INSTANCE_MARKDOWN = new Markdown_Genre({
            GENRE_CONFIG_GENRE: this.PROPERTY_GENRE,
            GENRE_CONFIG_SUBGENRE: this.PROPERTY_SUBGENRE,
            GENRE_CONFIG_PATH: `${this.SESSION.USERS.USERS.DATA.RESIDENT.OBSIDIAN}/SHELF - MEDIA/GENRES`
        }).SAVE_SUBGENRE()
    };
};
