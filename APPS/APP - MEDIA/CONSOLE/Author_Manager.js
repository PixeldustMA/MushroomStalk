import Markdown_Author from "./Author_Markdown.js";
import Manager_Media from "./Manager_Media.js";

export default class MANAGER_Author extends Manager_Media {

    constructor({
        AUTHOR_CONFIG_AUTHOR = 0,
        AUTHOR_CONFIG_YEAR = 0,
        AUTHOR_CONFIG_COUNTRY = 0,
        AUTHOR_CONFIG_BOOK = 0,
        AUTHOR_CONFIG_GENRE = 0,
        AUTHOR_CONFIG_SERIES = 0
    }) {

        super({});

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.PROPERTY_AUTHOR = AUTHOR_CONFIG_AUTHOR;
        this.PROPERTY_BIRTH_YEAR = AUTHOR_CONFIG_YEAR;
        this.PROPERTY_COUNTRY = AUTHOR_CONFIG_COUNTRY;
        this.PROPERTY_BOOK = AUTHOR_CONFIG_BOOK;
        this.PROPERTY_GENRE = AUTHOR_CONFIG_GENRE;
        this.PROPERTY_SERIES = AUTHOR_CONFIG_SERIES;
    };

    // ================ //
    // ## OPERATIONS ## //
    // ================ //

    async INSERT_AUTHOR() {
        await this.LOAD_SESSIONS();
        await this.LOAD_PATHS();
        await this.LOAD_LISTS();

        await this.#BASE_FILE();
        await this.#UPDATE_LIST();
        await this.#AUTHOR_MARKDOWN()
    };
    async UPDATE_PROPERTY(PARAMETER_PROPERTY) {

        await this.LOAD_SESSIONS();
        await this.LOAD_PATHS();
        await this.LOAD_LISTS();
        switch (PARAMETER_PROPERTY) {
            case 'BOOK':
                await this.#UPDATE_PROPERTY_BOOK();
                break;
            case 'GENRE':
                await this.#UPDATE_PROPERTY_GENRE();
                break;
            case 'SERIES':
                await this.#UPDATE_PROPERTY_SERIES();
                break;
            default:
                break;
        }
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    async #UPDATE_LIST() {
        this.LIST_AUTHOR.push(this.PROPERTY_AUTHOR);
        this.RENDERER_DATA = this.LIST_AUTHOR;
        this.RENDERER_PATH = this.PATH_LIST_AUTHOR;
        await this.SAVE();
    };

    // ========== //
    // ## BASE ## //
    // ========== //

    async #BASE_FILE() {
        this.RENDERER_DATA = await this.#TEMPLATE();
        this.RENDERER_PATH = `${this.PATH_FOLDER_AUTHOR}/${this.PROPERTY_AUTHOR}.json`;
        await this.SAVE();
    };
    async #TEMPLATE() {
        return {
            BIOGRAPHICAL: {
                NAME: this.PROPERTY_AUTHOR,
                BIRTH_YEAR: this.PROPERTY_BIRTH_YEAR,
                COUNTRY: this.PROPERTY_COUNTRY
            },
            WORK: {
                BOOKS: [],
                GENRE: [],
                REVIEW: 0,
                SERIES: []
            }
        };
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    async #UPDATE_PROPERTY_BOOK() {
        let DATA_ACTIVE = this.SESSION.MEDIA.AUTHORS.DATA[this.PROPERTY_AUTHOR];
        if (!DATA_ACTIVE.WORK.BOOKS.includes(this.PROPERTY_BOOK)) {
            DATA_ACTIVE.WORK.BOOKS.push(this.PROPERTY_BOOK);
            this.RENDERER_DATA = DATA_ACTIVE;
            this.RENDERER_PATH = `${this.PATH_FOLDER_AUTHOR}/${this.PROPERTY_AUTHOR}.json`;
            await this.SAVE();
        };
    };
    async #UPDATE_PROPERTY_GENRE() {
        let DATA_ACTIVE = this.SESSION.MEDIA.AUTHORS.DATA[this.PROPERTY_AUTHOR];
        if (!DATA_ACTIVE.WORK.GENRE.includes(this.PROPERTY_GENRE)) {
            DATA_ACTIVE.WORK.GENRE.push(this.PROPERTY_GENRE);
            this.RENDERER_DATA = DATA_ACTIVE;
            this.RENDERER_PATH = `${this.PATH_FOLDER_AUTHOR}/${this.PROPERTY_AUTHOR}.json`;
            await this.SAVE();
        }
    };
    async #UPDATE_PROPERTY_SERIES() {
        let DATA_ACTIVE = this.SESSION.MEDIA.AUTHORS.DATA[this.PROPERTY_AUTHOR];
        if (!DATA_ACTIVE.WORK.SERIES.includes(this.PROPERTY_SERIES)) {
            DATA_ACTIVE.WORK.SERIES.push(this.PROPERTY_SERIES);
            this.RENDERER_DATA = DATA_ACTIVE;
            this.RENDERER_PATH = `${this.PATH_FOLDER_AUTHOR}/${this.PROPERTY_AUTHOR}.json`;
            await this.SAVE();
        }
    };

    // ============== //
    // ## MARKDOWN ## //
    // ============== //

    async #AUTHOR_MARKDOWN() {
        await this.REQUEST_SESSION_USERS();

        let INSTANCE_MARKDOWN = new Markdown_Author({
            AUTHOR_CONFIG_AUTHOR: this.PROPERTY_AUTHOR,
            AUTHOR_CONFIG_PATH: `${this.SESSION.USERS.USERS.DATA.RESIDENT.OBSIDIAN}/SHELF - MEDIA/AUTHORS`
        }).SAVE_AUTHOR()
    };
};
