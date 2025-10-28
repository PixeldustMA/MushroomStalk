import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default  class Manager_Media extends Stalk {

    constructor(){
        super();

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        // ============== //
        // ## ORIGINAL ## //
        // ============== //

        // =========== //
        // ## PATHS ## //
        // =========== //

        // =========== //
        // << ITEMS >> //
        // =========== //

        // ================= //
        // << COLLECTIONS >> //
        // ================= //

        // ============== //
        // << CREATORS >> //
        // ============== //

        this.PATH_LIST_AUTHOR = 'UNSET';
        this.PATH_FOLDER_AUTHOR = 'UNSET';
        this.PATH_FOLDER_ARTIST = 'UNSET';
        this.PATH_LIST_ARTIST = 'UNSET';
        this.PATH_FOLDER_BOOK = 'UNSET';
        this.PATH_LIST_BOOK = 'UNSET';

        // =========== //
        // ## LISTS ## //
        // =========== //

        this.LIST_AUTHOR = 'UNSET';
        this.LIST_ARTIST = 'UNSET';
        this.LIST_BOOK = 'UNSET';
    };

    async LOAD_SESSIONS() {
        await this.REQUEST_SESSION_USERS(); 
        await this.REQUEST_SESSION_MEDIA();
    };
    async LOAD_PATHS() {
        await this.LOAD_AUTHOR_PATHS();
        await this.LOAD_ARTIST_PATHS();
        await this.LOAD_BOOK_PATHS();
        await this.LOAD_GENRE_PATHS();
    };
    async LOAD_LISTS() {
        this.LIST_AUTHOR = this.SESSION.MEDIA.AUTHORS.LIST;
        this.LIST_ARTIST = this.SESSION.MEDIA.ARTISTS.LIST;
        this.LIST_BOOK = this.SESSION.MEDIA.BOOKS.LIST;
        this.LIST_GENRE = this.SESSION.MEDIA.GENRE.LIST;
    };

    // =========== //
    // ## PATHS ## //
    // =========== //

    async LOAD_AUTHOR_PATHS() {
        this.PATH_FOLDER_AUTHOR = this.SESSION.PATHS.MEDIA.AUTHORS.FOLDERS.AUTHORS;
        this.PATH_LIST_AUTHOR = `${this.SESSION.PATHS.MEDIA.AUTHORS.FOLDERS.CONSOLE}/AuthorList.json`;
    };
    async LOAD_ARTIST_PATHS() {
        this.PATH_FOLDER_ARTIST = this.SESSION.PATHS.MEDIA.ARTISTS.FOLDERS.ARTISTS;
        this.PATH_LIST_ARTIST = `${this.SESSION.PATHS.MEDIA.ARTISTS.FOLDERS.CONSOLE}/ArtistList.json`;
    };
    async LOAD_BOOK_PATHS() {
        this.PATH_FOLDER_BOOK = this.SESSION.PATHS.MEDIA.BOOKS.FOLDERS.BOOKS;
        this.PATH_LIST_BOOK = `${this.SESSION.PATHS.MEDIA.BOOKS.FOLDERS.CONSOLE}/BookList.json`;
    };
    async LOAD_GENRE_PATHS() {
        this.PATH_FOLDER_GENRE = this.SESSION.PATHS.MEDIA.GENRE.FOLDERS.GENRE;
        this.PATH_LIST_GENRE = `${this.SESSION.PATHS.MEDIA.GENRE.FOLDERS.CONSOLE}/GenreList.json`;
        this.PATH_FOLDER_SUBGENRE = this.SESSION.PATHS.MEDIA.GENRE.FOLDERS.SUBGENRE;
    };
};