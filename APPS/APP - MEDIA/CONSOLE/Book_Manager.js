import Markdown_Book from "./Book_Markdown.js";
import Manager_Media from "./Manager_Media.js";

export default class Manager_Book extends Manager_Media{

    constructor({
        BOOK_CONFIG_BOOK = 0,
        BOOK_CONFIG_AUTHOR = 0,
        BOOK_CONFIG_GENRE = 0,
        BOOK_CONFIG_SUBGENRE = 0,
        BOOK_CONFIG_DAY = 0,
        BOOK_CONFIG_MONTH = 0,
        BOOK_CONFIG_YEAR = 0,
        BOOK_CONFIG_PAGE = 0,
        BOOK_CONFIG_CHAPTER = 0,
        BOOK_CONFIG_TBR = 0,
        BOOK_CONFIG_LOCATION = 0,
        BOOK_CONFIG_PAGECOUNT = 0,
        BOOK_CONFIG_LANGUAGE = 0,
        BOOK_CONFIG_SERIES_STATUS = 0,
        BOOK_CONFIG_SERIES_NUMBER = 0,
        BOOK_CONFIG_SERIES_NAME = 0,
        BOOK_CONFIG_STARS = 0,
        BOOK_CONFIG_REVIEWCODE = 0,
        BOOK_CONFIG_ASSETCODE = 0
    }) {

        super();

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.PROPERTY_BOOK = BOOK_CONFIG_BOOK;
        this.PROPERTY_AUTHOR = BOOK_CONFIG_AUTHOR;
        this.PROPERTY_CATEGORY = BOOK_CONFIG_GENRE;
        this.PROPERTY_SUBCATEGORY = BOOK_CONFIG_SUBGENRE;
        this.PROPERTY_DATE_DAY = BOOK_CONFIG_DAY;
        this.PROPERTY_DATE_MONTH = BOOK_CONFIG_MONTH;
        this.PROPERTY_DATE_YEAR = BOOK_CONFIG_YEAR;
        this.PROPERTY_STATS_PAGE = BOOK_CONFIG_PAGE;
        this.PROPERTY_STATS_CHAPTER = BOOK_CONFIG_CHAPTER;
        this.PROPERTY_STATS_TBR = BOOK_CONFIG_TBR;
        this.PROPERTY_STORAGE_LOCATION = BOOK_CONFIG_LOCATION;
        this.PROPERTY_STATS_PAGECOUNT = BOOK_CONFIG_PAGECOUNT;
        this.PROPERTY_LANGUAGE = BOOK_CONFIG_LANGUAGE;
        this.PROPERTY_SERIES_STATUS = BOOK_CONFIG_SERIES_STATUS;
        this.PROPERTY_SERIES_POSITION = BOOK_CONFIG_SERIES_NUMBER;
        this.PROPERTY_SERIES_NAME = BOOK_CONFIG_SERIES_NAME;
        this.PROPERTY_REVIEW_STARS = BOOK_CONFIG_STARS;
        this.PROPERTY_REVIEW_CODE = BOOK_CONFIG_REVIEWCODE;
        this.ASSET_CODE = BOOK_CONFIG_ASSETCODE;
    };

    // ========== //
    // ## MAIN ## //
    // ========== //

    async INSERT() {

        await this.LOAD_SESSIONS();
        await this.LOAD_PATHS();
        await this.LOAD_LISTS();

        await this.#BASE_FILE();
        await this.#UPDATE_LIST();
        await this.#BOOK_MARKDOWN();
    };

    // ========== //
    // ## BASE ## //
    // ========== //

    async #BASE_FILE() {
        this.RENDERER_DATA = await this.#TEMPLATE();
        this.RENDERER_PATH = `${this.PATH_FOLDER_BOOK}/${this.PROPERTY_BOOK}.json`;
        await this.SAVE();
    };
    async #TEMPLATE() {
        return {            
            BASIC: {
                NAME: this.PROPERTY_BOOK,
                AUTHOR: this.PROPERTY_AUTHOR,
            },
            GENRE: {
                MAIN: this.PROPERTY_CATEGORY,
                SUB_GENRE: this.PROPERTY_SUBCATEGORY,
            },
            STATS: {
                LAST_READ: {
                    DAY: this.PROPERTY_DATE_DAY,
                    MONTH: this.PROPERTY_DATE_MONTH,
                    YEAR: this.PROPERTY_DATE_YEAR
                },
                PAGE: this.PROPERTY_STATS_PAGE,
                CHAPTER: this.PROPERTY_STATS_CHAPTER,
                TBR: this.PROPERTY_STATS_TBR,
                LOCATION: this.PROPERTY_STORAGE_LOCATION
            },
            STRUCTURE: {
                PAGE_COUNT: this.PROPERTY_STATS_PAGECOUNT,
                LANGUAGE: this.PROPERTY_LANGUAGE
            },
            SERIES: {
                STATUS: this.PROPERTY_SERIES_STATUS,
                POSITION: this.PROPERTY_SERIES_POSITION,
                NAME: this.PROPERTY_SERIES_NAME
            },
            REVIEW: {
                STARS: this.PROPERTY_REVIEW_STARS,
                DESCRIPTION: this.PROPERTY_REVIEW_CODE
            },
            ART: {
                FRONT: this.ASSET_CODE
            }};
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    async #UPDATE_LIST() {
        this.LIST_BOOK.push(this.PROPERTY_BOOK);
        this.RENDERER_DATA = this.LIST_BOOK;
        this.RENDERER_PATH = this.PATH_LIST_BOOK;
        await this.SAVE();
    };

    // ============== //
    // ## MARKDOWN ## //
    // ============== //

    async #BOOK_MARKDOWN() {
        await this.REQUEST_SESSION_USERS();

        let INSTANCE_MARKDOWN = new Markdown_Book({
            MARKDOWN_CONFIG_PROPERTY_NAME: this.PROPERTY_BOOK,
            MARKDOWN_CONFIG_PROPERTY_AUTHOR: this.PROPERTY_AUTHOR,
            MARKDOWN_CONFIG_PROPERTY_GENRE: this.PROPERTY_CATEGORY,
            MARKDOWN_CONFIG_PROPERTY_SUBGENRE: this.PROPERTY_SUBCATEGORY,
            MARKDOWN_CONFIG_PROPERTY_LASTREAD_DAY: this.PROPERTY_DATE_DAY,
            MARKDOWN_CONFIG_PROPERTY_LASTREAD_MONTH: this.PROPERTY_DATE_MONTH,
            MARKDOWN_CONFIG_PROPERTY_LASTREAD_YEAR: this.PROPERTY_DATE_YEAR,
            MARKDOWN_CONFIG_PROPERTY_PAGECOUNT: this.PROPERTY_STATS_PAGECOUNT,
            MARKDOWN_CONFIG_PROPERTY_PAGE: this.PROPERTY_STATS_PAGE,
            MARKDOWN_CONFIG_PROPERTY_CHAPTER: this.PROPERTY_STATS_CHAPTER,
            MARKDOWN_CONFIG_PROPERTY_SERIESNAME: this.PROPERTY_SERIES_NAME,
            MARKDOWN_CONFIG_PROPERTY_POSITION: this.PROPERTY_SERIES_POSITION,
            MARKDOWN_CONFIG_PROPERTY_STARS: this.PROPERTY_REVIEW_STARS,
            MARKDOWN_CONFIG_PATH: `${this.SESSION.USERS.USERS.DATA.RESIDENT.OBSIDIAN}/SHELF - MEDIA/BOOKS`,
            MARKDOWN_CONFIG_LANGUAGE: this.PROPERTY_LANGUAGE,
            MARKDOWN_CONFIG_LOCATION: this.PROPERTY_STORAGE_LOCATION,
            MARKDOWN_CONFIG_TBR: this.PROPERTY_STATS_TBR
        }).SAVE_BOOK().then((MD) => {return MD})
    };
}