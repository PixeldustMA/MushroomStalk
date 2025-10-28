import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Shopping extends Stalk{

    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_TITLE = document.getElementById('Shopping_Section-Title');
        this.SECTION_ITEMS = document.getElementById('Shopping_Section-Items');
        this.SECTION_CREATORS = document.getElementById('Shopping_Section-Creators');
        this.SECTION_STYLES = document.getElementById('Shopping_Section-Styles');

        // ============ //
        // << TEXT >> //
        // ============ //

        this.HEADER_PAGE = 'UNSET';

        // =========== //
        // << ITEMS >> //
        // =========== //

        this.BUTTON_MENU_GAMES = 'UNSET';
        this.BUTTON_MENU_BOOKS = 'UNSET';
        this.BUTTON_MENU_FILMS = 'UNSET';
        this.BUTTON_MENU_MUSIC = 'UNSET';

        // ============== //
        // << CREATORS >> //
        // ============== //

        this.BUTTON_MENU_AUTHOR = 'UNSET';
        this.BUTTON_MENU_ARTIST = 'UNSET';
        this.BUTTON_MENU_DIRECTOR = 'UNSET';

        // ============ //
        // << STYLES >> //
        // ============ //

        this.BUTTON_MENU_GENRE = 'UNSET';
        this.BUTTON_MENU_STYLE = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    /**
     * ## DRAW THE PAGE
     * 
     * -------------------
     * 
     * #### *CLASS MUST BE INITIALISED FIRST*
     * 
     * Run all functions associated with drawing the crystallarium menu page
     * 
     * Attach all relevant wrappers to their appropriate sections
     * 
     * Run this function to run the class
     */
    async DRAW(){

        this.SECTION_TITLE.append(await this.PANEL_TITLE());	
        this.SECTION_ITEMS.append(await this.PANEL_ITEMS());	
        this.SECTION_CREATORS.append(await this.PANEL_CREATORS());	
        this.SECTION_STYLES.append(await this.PANEL_STYLES());	

    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    /**
     * ## DRAW THE LAVA LAMITEMS PANEL
* 
     * -------------------
     
     * - Panel for page title
     * - Attaches to title section of page

this.BUTTON_MENU_MUSIC = 'UNSET';

* 
// ============== //
    // << CREATORS >
    // // ============== //
    // 
    this.BUTTON_MENU_AUTHOR = 'UNSET';
    this.BUTTON_MENU_ARTIST = 'UNSET';
    this.BUTTON_MENU_DIRECTOR = 'UNSET';
    
    // ============ //
    // << STYLES >> //
    // // ============ //
    // 
    this.BUTTON_MENU_GENRE = 'UNSET';
    this.BUTTON_MENU_STYLE = 'UNSET';> //     * -------------------
     * #### --> RETURNS WRAPPER
     */
    PANEL_TITLE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        this.ACTIVATE_BACK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK
        ]);
        return WRAPPER_Page;
    };
    /**
     * ## DRAW THE CRYSTALLARIUM BUTTON PANEL
     * 
     * -------------------
     * 
     * - Panel for page title
     * - Attaches to title section of page
     * 
     * -------------------
     * #### --> RETURNS WRAPPER
     */
    PANEL_ITEMS(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Button = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_BOOKS();
        this.ACTIVATE_BUTTON_PLAYLIST();
        this.ACTIVATE_BUTTON_ALBUM();
        this.ACTIVATE_BUTTON_SONG();
        this.ACTIVATE_BUTTON_TV();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Button.append(...[
            this.BUTTON_MENU_BOOKS,
            // this.BUTTON_MENU_GAMES,
            this.BUTTON_MENU_FILMS,
            this.BUTTON_MENU_GENRE,
            this.BUTTON_MENU_MUSIC,
            this.BUTTON_MENU_PLAYLIST,
            this.BUTTON_MENU_ALBUM,
            this.BUTTON_MENU_TV
        ]);
        return WRAPPER_Button;
    };
    PANEL_CREATORS(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Button = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_ARTISTS();
        this.ACTIVATE_BUTTON_AUTHORS();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Button.append(...[
            this.BUTTON_MENU_ARTIST,
            this.BUTTON_MENU_AUTHOR
        ]);
        return WRAPPER_Button;
    };
    PANEL_STYLES(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Button = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON_MENU_GENRE();
        this.ACTIVATE_BUTTON_STYLE();
        this.ACTIVATE_BUTTON_SERIES();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Button.append(...[
            this.BUTTON_MENU_GENRE,
            this.BUTTON_MENU_STYLE,
            this.BUTTON_MENU_SERIES
        ]);
        return WRAPPER_Button;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    // ============= //
    // << UTILITY >> //
    // ============= //

    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MAP', 'WELCOME')
        });
    };

    // ============== //
    // << SEGMENTS >> //
    // ============== //

    ACTIVATE_BUTTON_BOOKS() {

        this.BUTTON_MENU_BOOKS.addEventListener('click', (event) => {			
            this.LOAD('MENU_BOOK', 'MEDIA')
        });
    };
    ACTIVATE_BUTTON_PLAYLIST() {

        this.BUTTON_MENU_PLAYLIST.addEventListener('click', (event) => {
            this.LOAD('PLAYLIST', 'SHOPPING')
        });
    };
    ACTIVATE_BUTTON_ALBUM() {

        this.BUTTON_MENU_ALBUM.addEventListener('click', (event) => {
            this.LOAD('ALBUM', 'SHOPPING')
        });
    };
    ACTIVATE_BUTTON_SONG() {

        this.BUTTON_MENU_MUSIC.addEventListener('click', (event) => {
            this.LOAD('SONG', 'SHOPPING')
        });
    };
    ACTIVATE_BUTTON_TV() {

        this.BUTTON_MENU_TV.addEventListener('click', (event) => {
            this.LOAD('TV', 'SHOPPING')
        });
    };

    // ============ //
    // << GENRES >> //
    // ============ //

    ACTIVATE_BUTTON_MENU_GENRE() {

        this.BUTTON_MENU_GENRE.addEventListener('click', (event) => {
            this.LOAD('GENRE', 'SHOPPING')
        });
    };
    ACTIVATE_BUTTON_STYLE() {
        this.BUTTON_MENU_STYLE.addEventListener('click', (event) => {
            this.LOAD('STYLE', 'SHOPPING')
        });
    };
    ACTIVATE_BUTTON_SERIES() {
        this.BUTTON_MENU_SERIES.addEventListener('click', (event) => {
            this.LOAD('SERIES', 'SHOPPING')
        });
    };

    // ============== //
    // << CREATORS >> //
    // ============== //

    ACTIVATE_BUTTON_AUTHORS() {
        this.BUTTON_MENU_AUTHOR.addEventListener('click', (event) => {
            this.LOAD('AUTHORS', 'SHOPPING')
        });
    };
    ACTIVATE_BUTTON_ARTISTS() {
        this.BUTTON_MENU_ARTIST.addEventListener('click', (event) => {
            this.LOAD('ARTISTS', 'SHOPPING')
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.#TEXT();
        await this.#BUTTON();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Shopping-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'THE SHOPPING DISTRICT';
    };
    async #BUTTON(){

        // ==============//
        // << UTILITY >> //
        // ============= //

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';

        // =========== //
        // << ITEMS >> //
        // =========== //

        this.BUTTON_MENU_BOOKS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Bookshop',
        }).INIT();
        this.BUTTON_MENU_FILMS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Theatre',
        }).INIT();
        this.BUTTON_MENU_GAMES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Arcade',
        }).INIT();
        this.BUTTON_MENU_MUSIC = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Back',
        }).INIT();
        this.BUTTON_MENU_PLAYLIST = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Playlist',
        }).INIT();
        this.BUTTON_MENU_ALBUM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Playlist',
        }).INIT();
        this.BUTTON_MENU_TV = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Playlist',
        }).INIT();

        this.BUTTON_MENU_BOOKS.innerHTML = 'BOOKS';
        this.BUTTON_MENU_FILMS.innerHTML = 'FILMS';
        this.BUTTON_MENU_GAMES.innerHTML = 'TV';
        this.BUTTON_MENU_MUSIC.innerHTML = 'SONG';
        this.BUTTON_MENU_PLAYLIST.innerHTML = 'PLAYLIST';
        this.BUTTON_MENU_ALBUM.innerHTML = 'ALBUM';
        this.BUTTON_MENU_TV.innerHTML = 'TV'

        // ============ //
        // << GENRES >> //
        // ============ //

        this.BUTTON_MENU_GENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Back',
        }).INIT();
        this.BUTTON_MENU_STYLE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Back',
        }).INIT();
        this.BUTTON_MENU_SERIES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Back',
        }).INIT();

        this.BUTTON_MENU_GENRE.innerHTML = 'GENRE';
        this.BUTTON_MENU_STYLE.innerHTML = 'STYLE';
        this.BUTTON_MENU_SERIES.innerHTML = 'SERIES';

        // ============== //
        // << CREATORS >> //
        // ============== //
        
        this.BUTTON_MENU_ARTIST = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Back',
        }).INIT();
        this.BUTTON_MENU_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Back',
        }).INIT();
        this.BUTTON_MENU_DIRECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Shopping-Back',
        }).INIT();

        this.BUTTON_MENU_ARTIST.innerHTML = 'ARTIST';
        this.BUTTON_MENU_AUTHOR.innerHTML = 'AUTHOR';
        this.BUTTON_MENU_DIRECTOR.innerHTML = 'DIRECTOR';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Shopping = new Draw_Shopping();
await PAGE_Shopping.INITIALISE();
PAGE_Shopping.DRAW();
