import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Menu_Books extends Stalk {

    constructor() {

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('MENU_Section-Title');
        this.SECTION_BOOK = document.getElementById('MENU_Section-Book');
        this.SECTION_AUTHOR= document.getElementById('MENU_Section-Author');
        this.SECTION_TBR = document.getElementById('MENU_Section-TBR');

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_BOOK = 'UNSET';
        this.WRAPPER_AUTHOR = 'UNSET';
        this.WRAPPER_TBR = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';
        this.HEADER_BOOK = 'UNSET';
        this.HEADER_AUTHOR = 'UNSET';
        this.HEADER_TBR = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_BOOK_NEW = 'UNSET';
        this.BUTTON_BOOK_SEARCH = 'UNSET';
        this.BUTTON_BOOK_UPDATE_AUTHOR = 'UNSET';
        this.BUTTON_AUTHOR_NEW = 'UNSET';
        this.BUTTON_AUTHOR_SEARCH = 'UNSET';
        this.BUTTON_AUTHOR_UPDATE = 'UNSET';
        this.BUTTON_TBR = 'UNSET';
    };

    DRAW(){
        this.SECTION_TITLE.append(this.PANEL_TITLE());
        this.SECTION_BOOK.append(this.PANEL_BUTTONS_BOOK());
        // this.SECTION_AUTHOR.append(this.PANEL_BUTTONS_AUTHOR());
        this.SECTION_TBR.append(this.PANEL_BUTTONS_TBR());
    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    PANEL_TITLE(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BACK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK
        ]);        
        return this.WRAPPER_TITLE;
    };
    PANEL_BUTTONS_BOOK(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BOOK = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_NEW_BOOK();
        this.ACTIVATE_SEARCH_BOOK();
        this.ACTIVATE_UPDATE_BOOK();
        this.ACTIVATE_STATS()

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BOOK.append(...[
            this.HEADER_BOOK,
            this.BUTTON_BOOK_NEW,
            this.BUTTON_BOOK_SEARCH,
            this.BUTTON_BOOK_STATS
        ]);        
        return this.WRAPPER_BOOK;
    };
    PANEL_BUTTONS_TBR(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TBR = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_TBR();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TBR.append(...[
            this.HEADER_TBR,
            this.BUTTON_TBR
        ]);        
        return this.WRAPPER_TBR;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('SHOPPING', 'MENU')
        });
    };

    // =========== //
    // << BOOKS >> //
    // =========== //

    ACTIVATE_NEW_BOOK() {
        this.BUTTON_BOOK_NEW.addEventListener('click', (event) => {
            this.LOAD('BOOK_NEW', 'MEDIA')
        });
    };
    ACTIVATE_UPDATE_BOOK() {
        this.BUTTON_BOOK_UPDATE_AUTHOR.addEventListener('click', (event) => {
            this.LOAD('BOOK_UPDATE_AUTHOR', 'MEDIA')
        });
    };
    ACTIVATE_SEARCH_BOOK() {
        this.BUTTON_BOOK_SEARCH.addEventListener('click', (event) => {
            this.LOAD('BOOK_SEARCH', 'MEDIA')
        });
    };
    ACTIVATE_STATS() {
        this.BUTTON_BOOK_STATS.addEventListener('click', (event) => {
            this.LOAD('MENU', 'BOOKS')
        });
    };

    // ============= //
    // << AUTHORS >> //
    // ============= //

    ACTIVATE_NEW_AUTHOR() {
        this.BUTTON_AUTHOR_NEW.addEventListener('click', (event) => {
            this.LOAD('BOOK_NEW_AUTHOR', 'MEDIA')
        });
    };
    ACTIVATE_UPDATE_AUTHOR() {
        this.BUTTON_AUTHOR_UPDATE.addEventListener('click', (event) => {
            this.LOAD('', '')
        });
    };
    ACTIVATE_SEARCH_AUTHOR() {
        this.BUTTON_AUTHOR_SEARCH.addEventListener('click', (event) => {
            this.LOAD('', '')
        });
    };

    // ========= //
    // << TBR >> //
    // ========= //

    ACTIVATE_TBR() {
        this.BUTTON_TBR.addEventListener('click', (event) => {
            this.LOAD('', '')
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.#HEADERS();
        await this.#BUTTON();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_MenuBooks-Title',
        }).INIT();
        this.HEADER_BOOK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_MenuBooks-Title',
        }).INIT();
        this.HEADER_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_MenuBooks-Title',
        }).INIT();
        this.HEADER_TBR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_MenuBooks-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'BOOK MENU';
        this.HEADER_BOOK.innerHTML = 'BOOKS';
        this.HEADER_AUTHOR.innerHTML = 'AUTHORS';
        this.HEADER_TBR.innerHTML = 'TBR';
    };
    async #BUTTON() {

        // ============= //
        // << UTILITY >> //
        // ============= //

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';

        // ========== //
        // << BOOK >> //
        // ========== //

        this.BUTTON_BOOK_NEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-BookNew',
        }).INIT();
        this.BUTTON_BOOK_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-BookSearch',
        }).INIT();
        this.BUTTON_BOOK_UPDATE_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-BookUpdate',
        }).INIT();
        this.BUTTON_BOOK_STATS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-BookUpdate',
        }).INIT();

        this.BUTTON_BOOK_NEW.innerHTML = 'NEW';
        this.BUTTON_BOOK_SEARCH.innerHTML = 'SEARCH';
        this.BUTTON_BOOK_UPDATE_AUTHOR.innerHTML = 'UPDATE AUTHOR';
        this.BUTTON_BOOK_STATS.innerHTML = 'STATS'

        // ============ //
        // << AUTHOR >> //
        // ============ //

        this.BUTTON_AUTHOR_NEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-AuthorNew',
        }).INIT();
        this.BUTTON_AUTHOR_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-AuthorSearch',
        }).INIT();
        this.BUTTON_AUTHOR_UPDATE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-AuthorUpdate',
        }).INIT();

        this.BUTTON_AUTHOR_NEW.innerHTML = 'NEW';
        this.BUTTON_AUTHOR_SEARCH.innerHTML = 'SEARCH';
        this.BUTTON_AUTHOR_UPDATE.innerHTML = 'UPDATE';

        // ========= //
        // << TBR >> //
        // ========= //

        this.BUTTON_TBR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MenuBooks-TBR',
        }).INIT();

        this.BUTTON_TBR.innerHTML = 'TBR';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Menu_Books = new Draw_Menu_Books();
await PAGE_Menu_Books.INITIALISE();
PAGE_Menu_Books.DRAW();