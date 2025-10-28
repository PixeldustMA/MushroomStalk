
import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Panel_Search_Author from "../../../../APPS/APP - MEDIA/PANELS/Panel_Search_Author.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Draw_Search_Books extends Stalk{

    constructor() {


        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('SEARCH_Section-Title');
        this.SECTION_BUTTONS = document.getElementById('SEARCH_Section-Buttons');
        this.SECTION_LOAD = document.getElementById('SEARCH_Section-Load');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //
        
        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_DISPLAY_BUTTONS = 'UNSET';
        this.WRAPPER_BUTTONS = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_AUTHOR = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
        this.BLOCK_AUTHOR = new Panel_Search_Author();
    };

    // ========== //
    // ## LOAD ## //
    // ========== //

    DRAW(){
        this.SECTION_TITLE.append(this.PANEL_TITLE());
        this.SECTION_BUTTONS.append(this.PANEL_BUTTONS());
        this.SECTION_LOAD.append(this.PANEL_LOAD());
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
    PANEL_BUTTONS(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BUTTONS = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY_BUTTONS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SEARCH_AUTHOR();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BUTTONS.append(...[
            this.BUTTON_AUTHOR,
            this.WRAPPER_DISPLAY_BUTTONS
        ]);        
        return this.WRAPPER_BUTTONS;
    };
    PANEL_LOAD(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_LOAD = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_VIEW();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_LOAD.append(...[
            this.BUTTON_LOAD
        ]);        
        return this.WRAPPER_LOAD;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU_BOOK', 'MEDIA')
        });
    };
    ACTIVATE_VIEW(){
        this.BUTTON_LOAD.addEventListener('click', (event) => {
            this.VIEW_BOOK().then((RESULT) => {
                this.LOAD('BOOK_VIEW', 'MEDIA')
            });
        });
    };

    // ==================== //
    // << SEARCH BUTTONS >> //
    // ==================== //

    ACTIVATE_SEARCH_AUTHOR() {
        this.BUTTON_AUTHOR.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY_BUTTONS.append(this.BLOCK_AUTHOR.DRAW());
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {

        await this.REQUEST_SESSION_MEDIA()

        await this.#HEADERS();
        await this.#BUTTONS();
        await this.#BLOCKS();
    };
    async VIEW_BOOK() {
        this.RENDERER_PATH = this.SESSION.PATHS.SETTINGS.MEDIA;
        let DATA = JSON.parse(await this.READ());
        DATA.VIEW_BOOK = this.BLOCK_CREATE.READ_OPTION_TEXT(this.BLOCK_AUTHOR.SELECT_BOOK);
        this.RENDERER_DATA = DATA;
        await this.SAVE();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Stats-Page',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'SEARCH LIBRARY';
    };
    async #BUTTONS()  {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_UpdateAuthor-Back',
        }).INIT();
        this.BUTTON_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_UpdateAuthor-Back',
        }).INIT();
        this.BUTTON_LOAD = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_UpdateAuthor-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_AUTHOR.innerHTML = 'AUTHOR';
        this.BUTTON_LOAD.innerHTML = 'LOAD';
    };
    async #BLOCKS() {
        await this.BLOCK_AUTHOR.INITIALISE();
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Search_Books = new Draw_Search_Books();
await PAGE_Search_Books.INITIALISE();
PAGE_Search_Books.DRAW();