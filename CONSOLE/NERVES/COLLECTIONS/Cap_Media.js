import { Renderer } from "../../LUNGS/Renderer.js";
import Cap_Artists from "../MEDIA/Cap_Artists.js";
import Cap_Authors from "../MEDIA/Cap_Authors.js";
import Cap_Books from "../MEDIA/Cap_Books.js";
import Cap_Genre from "../MEDIA/Cap_Genre.js";
import Cap_Series from "../MEDIA/Cap_Series.js";
import Cap_Songs from "../MEDIA/Cap_Songs.js";

export default class Cap_Media extends Renderer{

    constructor({
        MEDIA_CONFIG_PATHS = 0
    }) {

        super();

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_BOOKS = {};
        this.DATA_SONGS = {};

        this.DATA_AUTHORS = {};
        this.DATA_ARTISTS = {};

        this.DATA_GENRE = {};
        this.DATA_STYLE = {};
        this.DATA_SERIES = {};

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.DATA_PATHS = MEDIA_CONFIG_PATHS
    };

    async GENERATE_SESSION_MEDIA() {

        await this.#BOOKS();
        await this.#SONGS();

        await this.#AUTHORS();
        await this.#ARTISTS();

        await this.#GENRE();
        await this.#STYLE();
        await this.#SERIES();

        return {
            BOOKS: this.DATA_BOOKS,
            SONGS: this.DATA_SONGS,
            AUTHORS: this.DATA_AUTHORS,
            ARTISTS: this.DATA_ARTISTS,
            GENRE: this.DATA_GENRE,
            STYLE: this.DATA_STYLE,
            SERIES: this.DATA_SERIES
        }
    };

    // =========== //
    // << ITEMS >> //
    // =========== //

    async #BOOKS() {
        this.DATA_BOOKS = await new Cap_Books({
            BOOK_CONFIG_CONSOLE: this.DATA_PATHS.BOOKS.FOLDERS.CONSOLE,
            BOOK_CONFIG_BOOKS: this.DATA_PATHS.BOOKS.FOLDERS.BOOKS
        }).INITIALISE_SESSION();
    };
    async #SONGS () {
        this.DATA_SONGS = await new Cap_Songs({
            SONG_CONFIG_CONSOLE: this.DATA_PATHS.SONGS.FOLDERS.CONSOLE,
            SONG_CONFIG_SONGS: this.DATA_PATHS.SONGS.FOLDERS.SONGS
        }).INITIALISE_SESSION();
    };

    // ============== //
    // << CREATORS >> //
    // ============== //

    async #AUTHORS() {
        this.DATA_AUTHORS = await new Cap_Authors({
            AUTHOR_CONFIG_CONSOLE: this.DATA_PATHS.AUTHORS.FOLDERS.CONSOLE,
            AUTHOR_CONFIG_AUTHORS: this.DATA_PATHS.AUTHORS.FOLDERS.AUTHORS
        }).INITIALISE_SESSION();
    };
    async #ARTISTS() {
        this.DATA_ARTISTS = await new Cap_Artists({
            ARTIST_CONFIG_CONSOLE: this.DATA_PATHS.ARTISTS.FOLDERS.CONSOLE,
            ARTIST_CONFIG_ARTISTS: this.DATA_PATHS.ARTISTS.FOLDERS.ARTISTS
        }).INITIALISE_SESSION();
    };

    // ================= //
    // << COLLECTIONS >> //
    // ================= //

    async #GENRE() {
        this.DATA_GENRE = await new Cap_Genre({
            GENRE_CONFIG_CONSOLE: this.DATA_PATHS.GENRE.FOLDERS.CONSOLE,
            GENRE_CONFIG_GENRE: this.DATA_PATHS.GENRE.FOLDERS.GENRE,
            GENRE_CONFIG_SUBGENRE: this.DATA_PATHS.GENRE.FOLDERS.SUBGENRE
        }).INITIALISE_SESSION();
    };
    async #STYLE() {

    };
    async #SERIES() {
        this.DATA_SERIES = await new Cap_Series({
            SERIES_CONFIG_CONSOLE: this.DATA_PATHS.SERIES.FOLDERS.CONSOLE,
            SERIES_CONFIG_SERIES: this.DATA_PATHS.SERIES.FOLDERS.SERIES
        }).INITIALISE_SESSION();
    };
}