import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import MANAGER_Author from "../../../../APPS/APP - MEDIA/CONSOLE/Author_Manager.js";
import Manager_Book from "../../../../APPS/APP - MEDIA/CONSOLE/Book_Manager.js";
import MANAGER_Genre from "../../../../APPS/APP - MEDIA/CONSOLE/Genre_Manager.js";
import Manager_Media from "../../../../APPS/APP - MEDIA/CONSOLE/Manager_Media.js";
import Manager_Series from "../../../../APPS/APP - MEDIA/CONSOLE/Series_Manager.js";
import Panel_Input_Basics from "../../../../APPS/APP - MEDIA/PANELS/Panel_Input_Basics.js";
import Panel_Input_Series from "../../../../APPS/APP - MEDIA/PANELS/Panel_Input_Series.js";
import Panel_Input_Storage from "../../../../APPS/APP - MEDIA/PANELS/Panel_Input_Storage.js";
import Panel_Input_Structure from "../../../../APPS/APP - MEDIA/PANELS/Panel_Input_Structure.js";
import Panel_Search_Series from "../../../../APPS/APP - MEDIA/PANELS/SERIES/Panel_Search_Series.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_Bookshop extends Stalk{

    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_Bookshop-Title');
        this.SECTION_NewBook = document.getElementById('SECTION_Bookshop-NewBook');
        this.SECTION_SERIES = document.getElementById('SECTION_Bookshop-Series');
        this.SECTION_DETAILS = document.getElementById('SECTION_Bookshop-Details');
        this.SECTION_BUTTON = document.getElementById('SECTION_Bookshop-Button');

        // ============== // 
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_BASICS = 'UNSET';

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PAGE = 'UNSET';
        this.LABEL_NAME = 'UNSET';
        this.LABEL_NEW_AUTHOR = 'UNSET';
        this.LABEL_NEW_GENRE = 'UNSET';
        this.LABEL_SELECT_BOOK = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_BOOK_NAME = 'UNSET';
        this.INPUT_AUTHOR = 'UNSET';
        this.INPUT_GENRE = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_GENRE = 'UNSET';
        this.SELECT_AUTHOR = 'UNSET';
        this.SELECT_BOOK = 'UNSET';

        // ============ //
        // ## BUTTON ## //
        // ============ //

        this.BUTTON_ACTIVE = 'UNSET';
        this.BUTTON_SAVE_NEW_BOOK = 'UNSET';
        this.BUTTON_SAVE_NEW_AUTHOR = 'UNSET';
        this.BUTTON_SAVE_NEW_GENRE = 'UNSET';
        this.BUTTON_COMPLETED = 'UNSET';

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        this.INSTANCE_CREATE = new Create({});
        this.BLOCK_BASICS = new Panel_Input_Basics();
        this.BLOCK_SERIES = new Panel_Search_Series();
        this.BLOCK_LOCATION = new Panel_Input_Storage();
        this.BLOCK_STRUCTURE = new Panel_Input_Structure();
    };

    DRAW(){
        this.SECTION_Title.append(...[this.PANEL_TITLE()]);
        this.SECTION_NewBook.append(...[this.PANEL_NEW_BOOK()]);
        this.SECTION_SERIES.append(...[this.PANEL_SERIES()]);
        this.SECTION_DETAILS.append(...[this.PANEL_OTHER_DETAILS()]);
        this.SECTION_BUTTON.append(...[this.PANEL_BUTTON()]);
    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    PANEL_TITLE() {

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
    PANEL_NEW_BOOK() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BASICS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        this.ACTIVATE_SAVE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BASICS.append(...[
            this.BLOCK_BASICS.DRAW(),
        ]);        
        return this.WRAPPER_BASICS;

    };
    PANEL_SERIES() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SERIES = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_SERIES_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        this.ACTIVATE_SERIES();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SERIES.append(...[
            this.LABEL_SERIES_QUESTION,
            this.SELECT_SERIES_QUESTION,
            this.WRAPPER_SERIES_DISPLAY
        ]);        
        return this.WRAPPER_SERIES;
    };
    PANEL_OTHER_DETAILS(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DETAILS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DETAILS.append(...[
            this.BLOCK_LOCATION.DRAW(),
            this.BLOCK_STRUCTURE.DRAW(),
            this.SELECT_TBR,
        ]);        
        return this.WRAPPER_DETAILS;
    };
    PANEL_BUTTON(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BUTTON = new Connector_Jellyfish().INITIALISE_WRAPPER();

        this.ACTIVATE_SAVE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BUTTON.append(...[
            this.BUTTON_SAVE_NEW_BOOK
        ]);        
        return this.WRAPPER_BUTTON;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU_BOOK', 'MEDIA')
        });
    };
    ACTIVATE_SAVE() {
        this.BUTTON_SAVE_NEW_BOOK.addEventListener('click', (event => {

            // ================ //
            // << BASIC DATA >> //
            // ================ //

            let PROPERTY_BASICS_NAME = this.BLOCK_BASICS.GET_BOOK();
            let PROPERTY_BASICS_AUTHOR = this.BLOCK_BASICS.GET_AUTHOR();
            let PROPERTY_GENRE_MAIN = this.BLOCK_BASICS.GET_GENRE();
            let PROPERTY_GENRE_SUB = this.BLOCK_BASICS.GET_SUBGENRE();

            // ============== //
            // << STRCTIRE >> //
            // ============== //

            let PROPERTY_STATS_PAGE_COUNT = this.BLOCK_STRUCTURE.GET_PAGE_COUNT();
            let PROPERTY_STATS_LANGUAGE = this.BLOCK_STRUCTURE.GET_LANGUAGE();

            // ============ //
            // << SERIES >> //
            // ============ //

            let PROPERTY_SERIES_STATUS = this.INSTANCE_CREATE.READ_OPTION_TEXT(this.SELECT_SERIES_QUESTION);
            let PROPERTY_SERIES_POSITION = this.BLOCK_SERIES.GET_SERIES_POSITION();
            let PROPERTY_SERIES_NAME = this.BLOCK_SERIES.GET_SERIES_NAME();

            // ============= //
            // << STORAGE >> //
            // ============= //

            let PROPERTY_STORAGE_LOCATION = this.BLOCK_LOCATION.GET_LOCATION();

            // ========= //
            // << RUN >> //
            // ========= //

            let INSTANCE_MEDIA = new Manager_Book({

                BOOK_CONFIG_BOOK: PROPERTY_BASICS_NAME,
                BOOK_CONFIG_AUTHOR: PROPERTY_BASICS_AUTHOR,
                BOOK_CONFIG_GENRE: PROPERTY_GENRE_MAIN,
                BOOK_CONFIG_SUBGENRE: PROPERTY_GENRE_SUB,
                BOOK_CONFIG_TBR: this.INSTANCE_CREATE.READ_OPTION_TEXT(this.SELECT_TBR),
                BOOK_CONFIG_LOCATION: PROPERTY_STORAGE_LOCATION,
                BOOK_CONFIG_PAGECOUNT: PROPERTY_STATS_PAGE_COUNT,
                BOOK_CONFIG_LANGUAGE: PROPERTY_STATS_LANGUAGE,
                BOOK_CONFIG_SERIES_STATUS: PROPERTY_SERIES_STATUS,
                BOOK_CONFIG_SERIES_NUMBER: PROPERTY_SERIES_POSITION,
                BOOK_CONFIG_SERIES_NAME: PROPERTY_SERIES_NAME
            }).INSERT().then((RESULT) => {

                let INSTANCE_AUTHOR = new MANAGER_Author({
                    AUTHOR_CONFIG_AUTHOR: PROPERTY_BASICS_AUTHOR,
                    AUTHOR_CONFIG_BOOK: PROPERTY_BASICS_NAME,
                }).UPDATE_PROPERTY('BOOK').then((RES) => {
                    let INSTANCE_AUTHOR_GENRE = new MANAGER_Author({
                        AUTHOR_CONFIG_AUTHOR: PROPERTY_BASICS_AUTHOR,
                        AUTHOR_CONFIG_BOOK: PROPERTY_BASICS_NAME,
                        AUTHOR_CONFIG_GENRE: PROPERTY_GENRE_MAIN
                    }).UPDATE_PROPERTY('GENRE').then((GENRE_RESULT) => {
                        let INSTANCE_GENRE = new MANAGER_Genre({
                            GENRE_CONFIG_GENRE: PROPERTY_GENRE_MAIN,
                            GENRE_CONFIG_BOOK: PROPERTY_BASICS_NAME,
                            GENRE_CONFIG_SUBGENRE: PROPERTY_GENRE_SUB
                        }).UPDATE_GENRE_PROPERTY('BOOK').then((RESULT_G) => {
                            let INSTANCE_SERIES = new Manager_Series({
                                SERIES_CONFIG_NAME: PROPERTY_SERIES_NAME,
                                SERIES_CONFIG_PARTS: PROPERTY_SERIES_POSITION,
                                SERIES_CONFIG_BOOK: PROPERTY_BASICS_NAME
                            }).UPDATE('BOOK').then((RESULT_SERIES) => {
                                window.location.reload();
                                return RESULT_SERIES;
                            })
                            return RESULT_G;})
                        return GENRE_RESULT}) 
                    return RES}) 
                    return RESULT})
        }));
    };
    ACTIVATE_SERIES() {
        this.SELECT_SERIES_QUESTION.addEventListener('change', (event) => {
            this.BLOCK_SERIES.INITIALISE(this.BLOCK_BASICS.GET_AUTHOR()).then((RES) => {
                if (this.INSTANCE_CREATE.READ_OPTION_TEXT(this.SELECT_SERIES_QUESTION) === 'YES') {
                    this.WRAPPER_SERIES_DISPLAY.append(this.BLOCK_SERIES.DRAW())
                }
            });

        })
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.REQUEST_SESSION_MEDIA();

        await this.#HEADERS();
        await this.#BUTTON();
        await this.#SELECT()
        await this.#BLOCKS();
        await this.#LABELS();
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bookshop-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'THE BOOKSHOP';

    };
    async #LABELS(){

        this.LABEL_SERIES_QUESTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Question',
        }).INIT();

        this.LABEL_SERIES_QUESTION.innerHTML = 'Is this book part of a series?';

    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Bookshop-Back',
        }).INIT();
        this.BUTTON_SAVE_NEW_BOOK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Bookshop-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SAVE_NEW_BOOK.innerHTML = 'SAVE'
    };
    async #SELECT() {
        this.SELECT_TBR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Bookshop-Back',
            CREATE_CONFIG_ELEMENT_OPTIONS: [
                'TBR?',
                'YES',
                'NO'
            ]
        }).INIT();
        this.SELECT_SERIES_QUESTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Bookshop-Back',
            CREATE_CONFIG_ELEMENT_OPTIONS: [
                'SERIES?',
                'YES',
                'NO'
            ]
        }).INIT();
    };
    async #BLOCKS() {   
        await this.BLOCK_BASICS.INITIALISE();

        await this.BLOCK_LOCATION.INITIALISE();
        await this.BLOCK_STRUCTURE.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const Page_Bookshop = new DRAW_Bookshop();
await Page_Bookshop.INITIALISE();
Page_Bookshop.DRAW();