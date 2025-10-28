import { Renderer } from "../../LUNGS/Renderer.js";
import PATHS_Root_Cupboard from "../PATHS/MAIN/Cap_Path_Root_Cupboard.js";
import PATHS_Profiles from "../PATHS/MAIN/Cap_Path_Profile.js";
import PATHS_Root from "../PATHS/MAIN/Cap_Path_Root.js";
import PATHS_Routes from "../PATHS/MAIN/Cap_Path_Routes.js";
import PATHS_Settings from "../PATHS/MAIN/Cap_Path_Settings.js";
import PATHS_Books from "../PATHS/MEDIA/Cap_Path_Books.js";
import PATHS_Songs from "../PATHS/MEDIA/Cap_Path_Song.js";
import PATHS_Author from "../PATHS/MEDIA/Cap_Path_Author.js";
import PATHS_Artist from "../PATHS/MEDIA/Cap_Path_Artist.js";
import PATHS_Genre from "../PATHS/MEDIA/Cap_Path_Genre.js";
import PATHS_Style from "../PATHS/MEDIA/Cap_Path_Style.js";
import PATHS_Pokemon from "../PATHS/LAVALAMPS/Cap_Path_Pokemon.js";
import PATHS_Bluprints from "../PATHS/NOVA/Cap_Path_Blueprints.js";
import PATHS_Elements from "../PATHS/WAR/Cap_Paths_Elements.js";
import PATHS_Series from "../PATHS/MEDIA/Cap_Path_Series.js";

export default class Cap_Paths extends Renderer{

    constructor() {

        super();

        this.DATA_PATHS = {
            ROOT: {
                MUSHROOM: 'UNSET',
                USERNAME: 'UNSET',
                CUPBOARD: 'UNSET'
            },
            PROFILES: {},
            SETTINGS: {},
            ROUTES: {},
            DATABASE: {
                ELEMENTS: {}
            },
            MEDIA: {
                BOOKS: {},
                SONGS: {},
                ARTISTS: {},
                AUTHORS: {},
                STYLE: {},
                GENRE: {},
                SERIES: {}
            },
            LAVALAMPS: {
                POKEMON: {}
            },
            NOVA: {

            }
        }
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async GENERATE_SESSION_USER(PARAMETER_USERNAME) {
        await this.GENERATE_BASIC_MEMORY();
        await this.GENERATE_USER_PATH(PARAMETER_USERNAME);

        // << MAIN >> //
        await this.#ROOT();
        await this.#ROUTES();
        await this.#SETTINGS();
        await this.#PROFILES();

        // << MEDIA >> //
        await this.#BOOKS();
        await this.#SONGS();
        await this.#ARTISTS();
        await this.#AUTHORS();
        await this.#GENRE();
        await this.#STYLE();
        await this.#SERIES();

        // << LAVALAMPS >> //
        await this.#POKEMON()

        // << NOVA >> //
        await this.#BLUEPRINTS();

        // << WAR >> //

        await this.#ELEMENTS();

        return this.DATA_PATHS
    };
    async GENERATE_SESSION_BASIC() {
        await this.GENERATE_BASIC_MEMORY();
        await this.GENERATE_USER_PATH();
        await this.#CUPBOARD_ROOT();
        await this.#PROFILES();
        this.DATA_PATHS.ROUTES = new PATHS_Routes({
            PATH_CONFIG_CUPBOARD: this.DATA_PATHS.ROOT.CUPBOARD.ROUTES
        }).GENERATE_ROUTE_PATHS();
        this.DATA_PATHS.SETTINGS = new PATHS_Settings({
            PATH_CONFIG_CUPBOARD: this.DATA_PATHS.ROOT.CUPBOARD.SETTINGS
        }).GENERATE_SETTINGS_BASIC();
        return this.DATA_PATHS
    }; 

    // ================ //
    // ## LOAD PATHS ## //
    // ================ //

    async GENERATE_BASIC_MEMORY() {
        this.RENDERER_PATH = '£££-UserMemory';
        this.DATA_PATHS.ROOT.MUSHROOM = await this.FETCH_PATH();
        return this.MAIN_PATHS;
    };
    async GENERATE_USER_PATH(PARAMETER_USERNAME) {
        this.RENDERER_PATH = '£££-UserMemory/USERNAME/';
        this.RENDERER_USERNAME = PARAMETER_USERNAME;
        this.DATA_PATHS.ROOT.USERNAME = await this.FETCH_PATH();
    };

    // ============== //
    // ## SEGMENTS ## //
    // ============== //

    // ========== //
    // << MAIN >> //
    // ========== //

    async #ROOT() {
        this.DATA_PATHS.ROOT = new PATHS_Root({
            ROOT_CONFIG_USERNAME: this.DATA_PATHS.ROOT.USERNAME,
            ROOT_CONFIG_MUSHROOM: this.DATA_PATHS.ROOT.MUSHROOM
        }).GENERATE_ROOT_PATHS();
        await this.#CUPBOARD_ROOT();
    };
    async #CUPBOARD_ROOT() {
        this.DATA_PATHS.ROOT.CUPBOARD = new PATHS_Root_Cupboard({
            ROOT_CONFIG_FOLDER: this.DATA_PATHS.ROOT.MUSHROOM
        }).GENERATE_ROOT_PATHS();
    };
    async #PROFILES() {
        this.DATA_PATHS.PROFILES = new PATHS_Profiles({
            PROFILE_CONFIG_MAIN: this.DATA_PATHS.ROOT.CUPBOARD.USERS
        }).GENERATE_PROFILE_PATHS();
    };
    async #ROUTES() {
        this.DATA_PATHS.ROUTES = new PATHS_Routes({
            PATH_CONFIG_CUPBOARD: this.DATA_PATHS.ROOT.CUPBOARD.ROUTES,
            PATH_CONFIG_USERNAME: this.DATA_PATHS.ROOT.ROUTES
        }).GENERATE_ROUTE_USERNAME_PATHS();
    };
    async #SETTINGS() {
        this.DATA_PATHS.SETTINGS = new PATHS_Settings({
            PATH_CONFIG_CUPBOARD: this.DATA_PATHS.ROOT.CUPBOARD.SETTINGS,
            PATH_CONFIG_USERNAME: this.DATA_PATHS.ROOT.SETTINGS.MAIN
        }).GENERATE_SETTINGS_USERNAME();
    };

    // =========== //
    // << MEDIA >> //
    // =========== //

    async #BOOKS() {
        this.DATA_PATHS.MEDIA.BOOKS = await new PATHS_Books({
            PATH_CONFIG_MAIN: this.DATA_PATHS.ROOT.MEDIA.BOOKS
        }).GENERATE_PATHS();
    };
    async #SONGS() {
        this.DATA_PATHS.MEDIA.SONGS = await new PATHS_Songs({
            PATH_CONFIG_MAIN: this.DATA_PATHS.ROOT.MEDIA.SONGS
        }).GENERATE_PATHS();
    };
    async #AUTHORS() {
        this.DATA_PATHS.MEDIA.AUTHORS = await new PATHS_Author({
            PATH_CONFIG_MAIN: this.DATA_PATHS.ROOT.MEDIA.AUTHORS
        }).GENERATE_PATHS();
    };
    async #ARTISTS() {
        this.DATA_PATHS.MEDIA.ARTISTS = await new PATHS_Artist({
            PATH_CONFIG_MAIN: this.DATA_PATHS.ROOT.MEDIA.ARTIST
        }).GENERATE_PATHS();
    };
    async #GENRE() {
        this.DATA_PATHS.MEDIA.GENRE = await new PATHS_Genre({
            PATH_CONFIG_MAIN: this.DATA_PATHS.ROOT.MEDIA.GENRE
        }).GENERATE_PATHS();
    };
    async #STYLE() {
        this.DATA_PATHS.MEDIA.STYLE = await new PATHS_Style({
            PATH_CONFIG_MAIN: this.DATA_PATHS.ROOT.MEDIA.STYLE
        }).GENERATE_PATHS();
    };
    async #SERIES() {
        this.DATA_PATHS.MEDIA.SERIES = await new PATHS_Series({
            PATH_CONFIG_MAIN: this.DATA_PATHS.ROOT.MEDIA.SERIES
        }).GENERATE_PATHS();
    };

    // =============== //
    // << LAVALAMPS >> //
    // =============== //

    async #POKEMON(){
        this.DATA_PATHS.LAVALAMPS.POKEMON = await new PATHS_Pokemon({
            PATH_CONFIG_MAIN: this.DATA_PATHS.ROOT.LAVALAMPS.POKEMON
        }).GENERATE_PATHS();
    };

    // ========== //
    // << NOVA >> //
    // ========== //

    async #SYSTEM() {

    };
    async #BLUEPRINTS() {
        this.DATA_PATHS.NOVA.BLUEPRINTS = await new PATHS_Bluprints({
            BLUEPRINT_CONFIG_ROOT: this.DATA_PATHS.ROOT.NOVA.BLUEPRINTS
        }).GENERATE_BLUEPRINT_PATHS()
    };

    // ========= //
    // << WAR >> //
    // ========= //
    
    async #ELEMENTS() {
        this.DATA_PATHS.DATABASE.ELEMENTS = await new PATHS_Elements({
            ELEMENT_CONFIG_MAIN: this.DATA_PATHS.ROOT.DATABASE.MAIN
        }).GENERATE_ELEMENT_PATHS();
    }
};