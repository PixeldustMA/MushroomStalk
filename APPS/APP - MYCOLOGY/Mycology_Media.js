import MYCOLOGY_Main from "./Mycology_Main.js";

/**
 * ## SETTINGS VALIDATION
 * ----------------------
 */
export default class MD_Mycology extends MYCOLOGY_Main{
    /**
     * ## MYCOLOGY MEDIA CONSTRUCTOR
     */
    constructor({
        MEDIA_CONFIG_PATHS = 0
    }){
        super();

        this.SESSION_PATH = MEDIA_CONFIG_PATHS;

        // =========== //
        // << PATHS >> //
        // =========== //

        this.PATH_BOOK_GENRE = 'UNSET';
        this.PATH_BOOK_AUTHOR = 'UNSET';
        this.PATH_BOOK_BOOKS = 'UNSET';
        this.PATH_TOP = 'UNSET';

        // ========== //
        // << BOOK >> //
        // ========== //

        this.PATH_FOLDER_BOOK = 'UNSET';
        this.PATH_FOLDER_BOOK_CONSOLE = 'UNSET';

        // ============ //
        // << ARTIST >> //
        // ============ //

        this.PATH_FOLDER_ARTIST = 'UNSET';
    };
    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE(){
        await this.#GET_SESSIONS();
        await this.#LOAD_PATHS();
    };
    /**
     * ## RUN CUPBOARD VALIDATION
     * --------------------------
     */
    async RUN() {

        console.log('INITIALISING MEDIA')
        await this.INITIALISE();

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //

        await this.EXISTANCE_CHECK(this.PATH_TOP);
        await this.#FOLDERS_BOOK();
        await this.#FOLDERS_SONGS();
        await this.#FOLDERS_AUTHOR();
        await this.#FOLDERS_ARTIST();
        await this.#FOLDERS_GENRE();
        await this.#FOLDERS_STYLE();
        await this.#FOLDERS_SERIES();

        // ================ //
        // << JSON FILES >> //
        // ================ //

        await this.#BOOK_LIST();
        await this.#SONG_LIST();
        await this.#AUTHOR_LIST();
        await this.#ARTIST_LIST()

        await this.#GENRE_LIST();
        await this.#STYLE_LIST();
        await this.#SERIES_LIST();
    };

    // ============= //
    // ## UTILITY ## //
    // ============= //

    /**
     * ## VALIDATE SETTING FOLDERS
     * ----------------------------
     * 
     * Check existance of individual folders
     */
    async #FOLDERS_BOOK() {
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_BOOK);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_BOOK_CONSOLE);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_BOOK_BOOKS);
    };
    async #FOLDERS_SONGS() {
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_SONG);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_SONG_CONSOLE);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_SONG_SONGS);
    };
    async #FOLDERS_ARTIST() {
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_ARTIST);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_CONSOLE_ARTIST);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_FILES_ARTIST);
    };
    async #FOLDERS_AUTHOR() {
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_AUTHOR);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_CONSOLE_AUTHOR);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_FILES_AUTHOR);
    };
    async #FOLDERS_GENRE() {
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_GENRE);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_GENRE_CONSOLE);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_GENRE_FILES);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_GENRE_SUBGENRE)
    };
    async #FOLDERS_STYLE() {
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_STYLE);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_STYLE_CONSOLE);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_STYLE_FILES);
    };
    async #FOLDERS_SERIES() {
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_SERIES);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_SERIES_FILES);
        await this.EXISTANCE_CHECK(this.PATH_FOLDER_SERIES_CONSOLE);
    };
    async #GET_SESSIONS() {
        // await this.REQUEST_SESSION_TEMPLATES();
        // await this.REQUEST_SESSION_MEDIA()
    };
    async #LOAD_PATHS() {

        await this.#LOAD_FOLDERS();

        // =========== //
        // << ITEMS >> //
        // =========== //

        await this.#LOAD_PATHS_FOLDER_BOOKS();
        await this.#LOAD_PATHS_FOLDER_SONGS();

        await this.#LOAD_PATHS_BOOKS_LISTS();
        await this.#LOAD_PATHS_SONGS_LISTS();

        // ============== //
        // << CREATORS >> //
        // ============== //

        await this.#LOAD_PATHS_FOLDER_AUTHOR();
        await this.#LOAD_PATHS_FOLDER_ARTIST();

        await this.#LOAD_PATHS_AUTHOR_LISTS();
        await this.#LOAD_PATHS_ARTIST_LISTS();

        // ================= //
        // << COLLECTIONS >> //
        // ================= //

        await this.#LOAD_PATHS_FOLDER_GENRE();
        await this.#LOAD_PATHS_FOLDER_STYLE();
        await this.#LOAD_PATHS_FOLDER_SERIES();

        await this.#LOAD_PATHS_GENRE_LISTS();
        await this.#LOAD_PATHS_STYLE_LISTS();
        await this.#LOAD_PATHS_SERIES_LISTS();

    };
    async #LOAD_FOLDERS() {
        this.PATH_TOP = this.SESSION_PATH.ROOT.MEDIA.MAIN;

        this.PATH_FOLDER_BOOK = this.SESSION_PATH.ROOT.MEDIA.BOOKS;
        this.PATH_FOLDER_SONG = this.SESSION_PATH.ROOT.MEDIA.SONGS;

        this.PATH_FOLDER_AUTHOR = this.SESSION_PATH.ROOT.MEDIA.AUTHORS;
        this.PATH_FOLDER_ARTIST = this.SESSION_PATH.ROOT.MEDIA.ARTIST;

        this.PATH_FOLDER_GENRE = this.SESSION_PATH.ROOT.MEDIA.GENRE;
        this.PATH_FOLDER_STYLE = this.SESSION_PATH.ROOT.MEDIA.STYLE;
        this.PATH_FOLDER_SERIES = this.SESSION_PATH.ROOT.MEDIA.SERIES;
    };

    // ============= //
    // << FOLDERS >> //
    // ============= //

    async #LOAD_PATHS_FOLDER_BOOKS() {
        this.PATH_FOLDER_BOOK_CONSOLE = this.SESSION_PATH.MEDIA.BOOKS.FOLDERS.CONSOLE;
        this.PATH_FOLDER_BOOK_BOOKS = this.SESSION_PATH.MEDIA.BOOKS.FOLDERS.BOOKS;
    };
    async #LOAD_PATHS_FOLDER_SONGS() {
        this.PATH_FOLDER_SONG_CONSOLE = this.SESSION_PATH.MEDIA.SONGS.FOLDERS.CONSOLE;
        this.PATH_FOLDER_SONG_SONGS = this.SESSION_PATH.MEDIA.SONGS.FOLDERS.SONGS;
    };

    async #LOAD_PATHS_FOLDER_ARTIST() {
        this.PATH_FOLDER_CONSOLE_ARTIST = this.SESSION_PATH.MEDIA.ARTISTS.FOLDERS.CONSOLE;
        this.PATH_FOLDER_FILES_ARTIST = this.SESSION_PATH.MEDIA.ARTISTS.FOLDERS.ARTISTS;
    };
    async #LOAD_PATHS_FOLDER_AUTHOR() {
        this.PATH_FOLDER_CONSOLE_AUTHOR = this.SESSION_PATH.MEDIA.AUTHORS.FOLDERS.CONSOLE;
        this.PATH_FOLDER_FILES_AUTHOR = this.SESSION_PATH.MEDIA.AUTHORS.FOLDERS.AUTHORS
    };

    async #LOAD_PATHS_FOLDER_GENRE() {
        this.PATH_FOLDER_GENRE_CONSOLE = this.SESSION_PATH.MEDIA.GENRE.FOLDERS.CONSOLE;
        this.PATH_FOLDER_GENRE_FILES = this.SESSION_PATH.MEDIA.GENRE.FOLDERS.GENRE;
        this.PATH_FOLDER_GENRE_SUBGENRE = this.SESSION_PATH.MEDIA.GENRE.FOLDERS.SUBGENRE;
    };
    async #LOAD_PATHS_FOLDER_STYLE() {
        this.PATH_FOLDER_STYLE_CONSOLE = this.SESSION_PATH.MEDIA.STYLE.FOLDERS.CONSOLE;
        this.PATH_FOLDER_STYLE_FILES = this.SESSION_PATH.MEDIA.STYLE.FOLDERS.STYLE;
    };
    async #LOAD_PATHS_FOLDER_SERIES() {
        this.PATH_FOLDER_SERIES_CONSOLE = this.SESSION_PATH.MEDIA.SERIES.FOLDERS.CONSOLE;
        this.PATH_FOLDER_SERIES_FILES = this.SESSION_PATH.MEDIA.SERIES.FOLDERS.SERIES;
    };


    // =========== //
    // << LISTS >> //
    // =========== //

    async #LOAD_PATHS_BOOKS_LISTS() {
        this.PATH_LIST_BOOK_BOOKS = `${this.PATH_FOLDER_BOOK_CONSOLE}/BookList.json`;
    };
    async #LOAD_PATHS_SONGS_LISTS() {
        this.PATH_LIST_SONGS = `${this.PATH_FOLDER_SONG_CONSOLE}/SongList.json`;
    };

    async #LOAD_PATHS_GENRE_LISTS() {
        this.PATH_LIST_GENRE = `${this.PATH_FOLDER_GENRE_CONSOLE}/GenreList.json`;
    };
    async #LOAD_PATHS_STYLE_LISTS() {
        this.PATH_LIST_STYLE = `${this.PATH_FOLDER_STYLE_CONSOLE}/StyleList.json`;
    };

    async #LOAD_PATHS_ARTIST_LISTS() {
        this.PATH_LIST_ARTIST = `${this.PATH_FOLDER_CONSOLE_ARTIST}/ArtistList.json`;
    };
    async #LOAD_PATHS_AUTHOR_LISTS() {
        this.PATH_LIST_AUTHOR = `${this.PATH_FOLDER_CONSOLE_AUTHOR}/AuthorList.json`;
    };
    async #LOAD_PATHS_SERIES_LISTS() {
        this.PATH_LIST_SERIES = `${this.PATH_FOLDER_SERIES_CONSOLE}/SeriesList.json`;
    };

    // ========================== //
    // ## MEDIA SPECIFIC FILES ## //
    // ========================== //

    //. UPDATE -- ADD NEW FILES HERE ALONG WITH ACCESS TO THEIR BASE TEMPLATE
    async #BOOK_LIST() {await this.EXISTANCE_FILE(this.PATH_LIST_BOOK_BOOKS, []);};
    async #SONG_LIST() {await this.EXISTANCE_FILE(this.PATH_LIST_SONGS, []);};

    async #ARTIST_LIST() {await this.EXISTANCE_FILE(this.PATH_LIST_ARTIST, [])};
    async #AUTHOR_LIST() {await this.EXISTANCE_FILE(this.PATH_LIST_AUTHOR, []);}

    async #GENRE_LIST() {await this.EXISTANCE_FILE(this.PATH_LIST_GENRE, []);};
    async #STYLE_LIST() {await this.EXISTANCE_FILE(this.PATH_LIST_STYLE, []);};

    async #SERIES_LIST() {await this.EXISTANCE_FILE(this.PATH_LIST_SERIES, []);};
}