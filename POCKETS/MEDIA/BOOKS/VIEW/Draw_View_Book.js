import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Panel_View_Book_Author from "../../../../APPS/APP - MEDIA/PANELS/Panel_View_Book_Author.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_View_Books extends Stalk{

    constructor() {

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('View_Section-Title');
        this.SECTION_BASICS = document.getElementById('View_Section-Basics');

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
        this.BLOCK_AUTHOR = new Panel_View_Book_Author();
    };

    // ========== //
    // ## LOAD ## //
    // ========== //

    DRAW(){
        this.SECTION_TITLE.append(this.PANEL_TITLE());
        this.SECTION_BASICS.append(this.PANEL_BASICS())
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
    PANEL_BASICS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BASICS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BASICS();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BASICS.append(...[
            this.BLOCK_AUTHOR.DRAW()
        ]);        
        return this.WRAPPER_BASICS;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU_BOOK', 'MEDIA')
        });
    };
    ACTIVATE_BASICS() {
        this.BLOCK_AUTHOR.SET_AUTHOR(this.ACTIVE_DATA.BASIC.AUTHOR);
    };
    async INITIALISE() {

        await this.REQUEST_SESSION_SETTINGS();
        await this.REQUEST_SESSION_MEDIA();

        let TAG = this.SESSION.SETTINGS.DATA.MEDIA.VIEW_BOOK;
        console.log(TAG)
        this.ACTIVE_DATA = this.SESSION.MEDIA.BOOKS.DATA.BOOK[TAG];
        await this.#HEADERS();
        await this.#BUTTONS();
        await this.#BLOCKS();
    };
    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();

        this.HEADER_PAGE.innerHTML = this.ACTIVE_DATA.BASIC.NAME;
    };
    async #BUTTONS()  {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_UpdateAuthor-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
    };
    async #BLOCKS() {
        await this.BLOCK_AUTHOR.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_View_Books = new Draw_View_Books();
await PAGE_View_Books.INITIALISE();
PAGE_View_Books.DRAW();