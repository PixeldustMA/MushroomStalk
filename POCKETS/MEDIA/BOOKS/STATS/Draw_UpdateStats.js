import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Markdown_Media from "../../../../APPS/APP - MEDIA/CONSOLE/Markdown_Media.js";
import Panel_Search_Book from "../../../../APPS/APP - MEDIA/PANELS/Panel_Search_Book.js";
import Manager_Settings from "../../../../APPS/APP - SETTINGS/Manager_Settings.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Update_Stats extends Stalk{

    constructor(){

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('STATS_Section-Title');
        this.SECTION_SETTINGS = document.getElementById('STATS_Section-Settings');
        this.SECTION_DISPLAY = document.getElementById('STATS_Section-Display');
        this.SECTION_SELECT = document.getElementById('STATS_Section-Select');
        this.SECTION_STATS = document.getElementById('STATS_Section-Stats');

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_SETTINGS = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';
        this.WRAPPER_ACTIVE = 'UNSET';
        this.WRAPPER_STATS = 'UNSET';
        this.WRAPPER_ADD_BOOK = 'UNSET';
        this.WRAPPER_SETTINGS_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';
        this.HEADER_SETTINGS = 'UNSET';
        this.HEADER_ACTIVE = 'UNSET';
        this.HEADER_STATS = 'UNSET';
        this.HEADER_ADD_BOOK = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_ADD_BOOK = 'UNSET';
        this.BUTTON_REMOVE_BOOK = 'UNSET';
        this.BUTTON_SET_BOOK = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_BOOK = new Panel_Search_Book();
        this.BLOCK_CREATE = new Create({});

    };

    // ========== //
    // ## LOAD ## //
    // ========== //

    DRAW(){
        this.SECTION_TITLE.append(this.PANEL_TITLE());
        this.SECTION_SETTINGS.append(this.PANEL_SETTINGS());
        this.SECTION_DISPLAY.append(this.PANEL_SET_DISPLAY());
        this.SECTION_SELECT.append(this.PANEL_CHOOSE_ACTIVE());
        this.SECTION_STATS.append(this.PANEL_UPDATE_STATS());
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

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
    PANEL_SETTINGS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SETTINGS = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_SETTINGS_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_ADD_BOOK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SETTINGS.append(...[
            this.HEADER_SETTINGS,
            this.BUTTON_ADD_BOOK,
            // this.BUTTON_REMOVE_BOOK,
            this.WRAPPER_SETTINGS_DISPLAY
        ]);        
        return this.WRAPPER_SETTINGS;
    };
    PANEL_SET_DISPLAY() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.DIS().then((xx) => {return xx})
        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DISPLAY.append(...[

        ]);        
        return this.WRAPPER_DISPLAY;
    };
    PANEL_CHOOSE_ACTIVE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ACTIVE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ACTIVE.append(...[
            this.HEADER_ACTIVE,
            this.SELECT_ACTIVE_BOOK
        ]);        
        return this.WRAPPER_ACTIVE;
    };
    PANEL_UPDATE_STATS(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_STATS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_DATA();
        this.ADD_ONE_PAGE();
        this.REMOVE_ONE_PAGE();
        this.ADD_TEN_PAGE();
        this.REMOVE_TEN_PAGE();
        this.ACTIVATE_REMOVE_BOOK();
        this.ADD_CHAPTER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_STATS.append(...[
            this.HEADER_STATS,
            this.HEADER_CURRENT_PAGE,
            this.LABEL_ACTIVE_PAGE,
            this.HEADER_CURRENT_CHAPTER,
            this.LABEL_ACTIVE_CHAPTER,
            this.BUTTON_ADD_CHAPTER,
            this.BUTTON_MINUS_CHAPTER,
            this.BUTTON_ADD_PAGE,
            this.BUTTON_REMOVE_PAGE,
            this.BUTTON_ADD_TEN_PAGES,
            this.BUTTON_REMOVE_TEN_PAGES,
            this.BUTTON_COMPLETE
        ]);        
        return this.WRAPPER_STATS;
    };
    PANEL_ADD_BOOK() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ADD_BOOK = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SET_BOOK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ADD_BOOK.append(...[
            this.HEADER_ADD_BOOK,
            this.BLOCK_BOOK.DRAW(),
            this.BUTTON_SET_BOOK
        ]);        
        return this.WRAPPER_ADD_BOOK;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    // ============= //
    // << UTILITY >> //
    // ============= //

    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU_BOOK', 'MEDIA')
        });
    };

    // ============ //
    // << PANELS >> //
    // ============ //

    ACTIVATE_ADD_BOOK() {
        this.BUTTON_ADD_BOOK.addEventListener('click', (event) => {
            this.WRAPPER_SETTINGS_DISPLAY.append(this.PANEL_ADD_BOOK());
        });
    };
    ACTIVATE_REMOVE_BOOK() {
        this.BUTTON_COMPLETE.addEventListener('click', (event) => {
            let DATA = this.SESSION.SETTINGS.DATA.MEDIA
            let BOOKS_ACTIVE_ORIGINAL = DATA.BOOKS;
            let BOOKS_ACTIVE_UPDATED = [];
            for (let index = 0; index < BOOKS_ACTIVE_ORIGINAL.length; index++) {
                const element = BOOKS_ACTIVE_ORIGINAL[index];
                if (element !== this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ACTIVE_BOOK)) {
                    console.log('FILTERING')
                    BOOKS_ACTIVE_UPDATED.push(element);
                };
            }
            DATA.BOOKS = BOOKS_ACTIVE_UPDATED
            this.RENDERER_PATH = this.SESSION.PATHS.SETTINGS.MEDIA;
            this.RENDERER_DATA = DATA;
            this.SAVE().then((RESULT) => {
                window.location.reload()
                return RESULT});

            // update manager page count
        });
    };

    // ========== //
    // << DATA >> //
    // ========== //

    ACTIVATE_SET_BOOK() {
        this.BUTTON_SET_BOOK.addEventListener('click', (event) => {
            let INSTANCE = new Manager_Settings({
                SETTINGS_CONFIG_BOOK: this.BLOCK_BOOK.GET_BOOK()
            }).UPDATE_ACTIVE_BOOK_LIST().then((RES) => {
                window.location.reload()
                return RES})
        });
    };
    ACTIVATE_DATA(){
        this.SELECT_ACTIVE_BOOK.addEventListener('change', (event) => {
            let TAG_BOOK = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ACTIVE_BOOK);
            let DATA = this.SESSION.MEDIA.BOOKS.DATA.BOOK[TAG_BOOK];
            this.HEADER_STATS.innerHTML = TAG_BOOK;
            this.LABEL_ACTIVE_CHAPTER.innerHTML = `${DATA.STATS.CHAPTER}`;
            this.LABEL_ACTIVE_PAGE.innerHTML = `${DATA.STATS.PAGE}/${DATA.STRUCTURE.PAGE_COUNT}`;
        });
    };

    // ================= //
    // << ALTER PAGES >> //
    // ================= //

    ADD_ONE_PAGE(){
        this.BUTTON_ADD_PAGE.addEventListener('click', (event) => {

            let TAG_BOOK = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ACTIVE_BOOK);
            let DATA = this.SESSION.MEDIA.BOOKS.DATA.BOOK[TAG_BOOK];

            let PAGE_ORIGINAL = parseInt(this.LABEL_ACTIVE_PAGE.innerHTML.split('/')[0]);
            let PAGE_UPDATED = PAGE_ORIGINAL + 1;
            this.LABEL_ACTIVE_PAGE.innerHTML = `${PAGE_UPDATED}/${DATA.STRUCTURE.PAGE_COUNT}`;
            DATA.STATS.PAGE = PAGE_UPDATED;
            this.RENDERER_PATH = `${this.SESSION.PATHS.MEDIA.BOOKS.LIBRARY}/${TAG_BOOK}.json`;
            this.RENDERER_DATA = DATA;
            this.SAVE().then((RESULT) => {
                let MD = new Markdown_Media({
                    MARKDOWN_CONFIG_PATH: `${this.SESSION.USERS.DATA.RESIDENT.OBSIDIAN}/SHELF - MEDIA/BOOKS`,
                    MARKDOWN_CONFIG_PROPERTY_NAME: TAG_BOOK,
                    MARKDOWN_CONFIG_PROPERTY_PAGE: PAGE_UPDATED
                }).UPDATE_PAGE_CURRENT().then((MD) => {return MD});
                return RESULT})
        });
    };
    ADD_TEN_PAGE(){
        this.BUTTON_ADD_TEN_PAGES.addEventListener('click', (event) => {

            let TAG_BOOK = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ACTIVE_BOOK);
            let DATA = this.SESSION.MEDIA.BOOKS.DATA.BOOK[TAG_BOOK];

            let PAGE_ORIGINAL = parseInt(this.LABEL_ACTIVE_PAGE.innerHTML.split('/')[0]);
            let PAGE_UPDATED = PAGE_ORIGINAL + 10;
            this.LABEL_ACTIVE_PAGE.innerHTML = `${PAGE_UPDATED}/${DATA.STRUCTURE.PAGE_COUNT}`;
            DATA.STATS.PAGE = PAGE_UPDATED;
            this.RENDERER_PATH = `${this.SESSION.PATHS.MEDIA.BOOKS.LIBRARY}/${TAG_BOOK}.json`;
            this.RENDERER_DATA = DATA;
            this.SAVE().then((RESULT) => {
                let MD = new Markdown_Media({
                    MARKDOWN_CONFIG_PATH: `${this.SESSION.USERS.DATA.RESIDENT.OBSIDIAN}/SHELF - MEDIA/BOOKS`,
                    MARKDOWN_CONFIG_PROPERTY_NAME: TAG_BOOK,
                    MARKDOWN_CONFIG_PROPERTY_PAGE: PAGE_UPDATED
                }).UPDATE_PAGE_CURRENT().then((MD) => {return MD});
                return RESULT})
        });
    };
    REMOVE_ONE_PAGE(){
        this.BUTTON_REMOVE_PAGE.addEventListener('click', (event) => {

            let TAG_BOOK = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ACTIVE_BOOK);
            let DATA = this.SESSION.MEDIA.BOOKS.DATA.BOOK[TAG_BOOK];

            let PAGE_ORIGINAL = parseInt(this.LABEL_ACTIVE_PAGE.innerHTML.split('/')[0]);
            let PAGE_UPDATED = PAGE_ORIGINAL - 1;
            this.LABEL_ACTIVE_PAGE.innerHTML = `${PAGE_UPDATED}/${DATA.STRUCTURE.PAGE_COUNT}`;
            DATA.STATS.PAGE = PAGE_UPDATED;
            this.RENDERER_PATH = `${this.SESSION.PATHS.MEDIA.BOOKS.LIBRARY}/${TAG_BOOK}.json`;
            this.RENDERER_DATA = DATA;
            this.SAVE().then((RESULT) => {
                let MD = new Markdown_Media({
                    MARKDOWN_CONFIG_PATH: `${this.SESSION.USERS.DATA.RESIDENT.OBSIDIAN}/SHELF - MEDIA/BOOKS`,
                    MARKDOWN_CONFIG_PROPERTY_NAME: TAG_BOOK,
                    MARKDOWN_CONFIG_PROPERTY_PAGE: PAGE_UPDATED
                }).UPDATE_PAGE_CURRENT().then((MD) => {return MD});
                return RESULT})
        });
    };
    REMOVE_TEN_PAGE(){
        this.BUTTON_REMOVE_TEN_PAGES.addEventListener('click', (event) => {

            let TAG_BOOK = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ACTIVE_BOOK);
            let DATA = this.SESSION.MEDIA.BOOKS.DATA.BOOK[TAG_BOOK];

            let PAGE_ORIGINAL = parseInt(this.LABEL_ACTIVE_PAGE.innerHTML.split('/')[0]);
            let PAGE_UPDATED = PAGE_ORIGINAL - 10;
            this.LABEL_ACTIVE_PAGE.innerHTML = `${PAGE_UPDATED}/${DATA.STRUCTURE.PAGE_COUNT}`;
            DATA.STATS.PAGE = PAGE_UPDATED;
            this.RENDERER_PATH = `${this.SESSION.PATHS.MEDIA.BOOKS.LIBRARY}/${TAG_BOOK}.json`;
            this.RENDERER_DATA = DATA;
            this.SAVE().then((RESULT) => {
                let MD = new Markdown_Media({
                    MARKDOWN_CONFIG_PATH: `${this.SESSION.USERS.DATA.RESIDENT.OBSIDIAN}/SHELF - MEDIA/BOOKS`,
                    MARKDOWN_CONFIG_PROPERTY_NAME: TAG_BOOK,
                    MARKDOWN_CONFIG_PROPERTY_PAGE: PAGE_UPDATED
                }).UPDATE_PAGE_CURRENT().then((MD) => {return MD});
                return RESULT})
        });
    };
    ADD_CHAPTER(){
        this.BUTTON_ADD_CHAPTER.addEventListener('click', (event) => {

            let TAG_BOOK = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ACTIVE_BOOK);
            let DATA = this.SESSION.MEDIA.BOOKS.DATA.BOOK[TAG_BOOK];

            let CHAPTER_ORIGINAL = parseInt(this.LABEL_ACTIVE_CHAPTER.innerHTML);
            let CHAPTER_UPDATED = CHAPTER_ORIGINAL + 1;
            this.LABEL_ACTIVE_CHAPTER.innerHTML = `${CHAPTER_UPDATED}`;
            DATA.STATS.CHAPTER = CHAPTER_UPDATED;
            this.RENDERER_PATH = `${this.SESSION.PATHS.MEDIA.BOOKS.LIBRARY}/${TAG_BOOK}.json`;
            this.RENDERER_DATA = DATA;
            console.log(DATA)
            this.SAVE().then((RESULT) => {
                let MD = new Markdown_Media({
                    MARKDOWN_CONFIG_PATH: `${this.SESSION.USERS.DATA.RESIDENT.OBSIDIAN}/SHELF - MEDIA/BOOKS`,
                    MARKDOWN_CONFIG_PROPERTY_NAME: TAG_BOOK,
                    MARKDOWN_CONFIG_PROPERTY_CHAPTER: CHAPTER_UPDATED
                }).UPDATE_CHAPTER().then((MD) => {return MD});
                return RESULT})
        });
    };

    // ============ //
    // << SET UP >> //
    // ============ //

    async INITIALISE() {

        await this.REQUEST_SESSION_USERS();
        await this.REQUEST_SESSION_MEDIA()
        await this.REQUEST_SESSION_SETTINGS_USER();

        console.log(this.SESSION)
        await this.#OPTIONS();
        await this.#HEADERS();
        await this.#BUTTONS();
        await this.#BLOCKS();
        await this.#SELECT();
        await this.#LABELS();

    };
    async DIS() {
        let ACTIVE_BOOKS = this.SESSION.SETTINGS.MEDIA.BOOKS;
        for (let index = 0; index < ACTIVE_BOOKS.length; index++) {
            const element = ACTIVE_BOOKS[index];
            await this.#BOOK_BLOCK(element);
        };
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        this.HEADER_SETTINGS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        this.HEADER_STATS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        this.HEADER_ACTIVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        this.HEADER_ADD_BOOK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        this.HEADER_CURRENT_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        this.HEADER_CURRENT_CHAPTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h4',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'BOOK STATS';
        this.HEADER_SETTINGS.innerHTML = 'CHANGE ACTIVE BOOKS';
        this.HEADER_STATS.innerHTML = 'ACTIVE BOOK';
        this.HEADER_ACTIVE.innerHTML = 'CHOOSE ACTIVE BOOK';
        this.HEADER_ADD_BOOK.innerHTML = 'ADD A NEW BOOK';
        this.HEADER_CURRENT_PAGE.innerHTML = 'CURRENT PAGE:';
        this.HEADER_CURRENT_CHAPTER.innerHTML = 'CURRENT CHAPTER:';
    };
    async #LABELS() {
        this.LABEL_ACTIVE_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        this.LABEL_ACTIVE_CHAPTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();

        this.LABEL_ACTIVE_PAGE.innerHTML = '';
        this.LABEL_ACTIVE_CHAPTER.innerHTML = '';
    };
    async #BUTTONS()  {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_UpdateAuthor-Back',
        }).INIT();
        this.BUTTON_ADD_CHAPTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_BookStats-Chapter',
        }).INIT();
        this.BUTTON_MINUS_CHAPTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_BookStats-Chapter',
        }).INIT();
        this.BUTTON_ADD_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_BookStats-Page',
        }).INIT();
        this.BUTTON_REMOVE_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_BookStats-Page',
        }).INIT();
        this.BUTTON_ADD_TEN_PAGES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_BookStats-PageTen',
        }).INIT();
        this.BUTTON_REMOVE_TEN_PAGES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_BookStats-PageTen',
        }).INIT();
        this.BUTTON_ADD_BOOK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_BookStats-PageTen',
        }).INIT();
        this.BUTTON_COMPLETE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_BookStats-PageTen',
        }).INIT();
        this.BUTTON_SET_BOOK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_BookStats-PageTen',
        }).INIT();

        this.BUTTON_ADD_CHAPTER.innerHTML = 'ADD CHAPTER';
        this.BUTTON_MINUS_CHAPTER.innerHTML = 'MINUS CHAPTER';
        this.BUTTON_ADD_PAGE.innerHTML = 'ADD PAGE';
        this.BUTTON_ADD_TEN_PAGES.innerHTML = 'ADD TEN PAGES';
        this.BUTTON_REMOVE_PAGE.innerHTML = 'REMOVE PAGE';
        this.BUTTON_REMOVE_TEN_PAGES.innerHTML = 'REMOVE TEN PAGES';
        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_ADD_BOOK.innerHTML = 'ADD A BOOK'
        this.BUTTON_COMPLETE.innerHTML = 'MARK AS COMPLETE';
        this.BUTTON_SET_BOOK.innerHTML = 'SET BOOK AS ACTIVE';
    };
    async #SELECT() {
        this.SELECT_ACTIVE_BOOK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_BookStats-Active',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_ACTIVE
        }).INIT();
    }
    async #BOOK_BLOCK(PARAMETER_BOOKNAME) {
        let HEADER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();
        HEADER.innerHTML = PARAMETER_BOOKNAME;
        if (PARAMETER_BOOKNAME !== 'CHOOSE A BOOK') {
        this.WRAPPER_DISPLAY.append(HEADER);    
        }

    };
    async #BLOCKS() {
        await this.BLOCK_BOOK.INITIALISE();
    };
    async #OPTIONS() {
        this.OPTIONS_ACTIVE = this.SESSION.SETTINGS.MEDIA.BOOKS;
        this.OPTIONS_ACTIVE.unshift('CHOOSE A BOOK');
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Update_Author = new Draw_Update_Stats();
await PAGE_Update_Author.INITIALISE();
PAGE_Update_Author.DRAW();