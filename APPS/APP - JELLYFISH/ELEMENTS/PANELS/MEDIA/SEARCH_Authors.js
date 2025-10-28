import Branches from "../../../../../CONSOLE/LUNGS/Branches.js";

export default class MD_SEARCH_Authors extends Branches{

    constructor(){
        super();

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PANEL = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_AUTHOR = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_AUTHOR = [];
    };

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SAVE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PANEL,
            this.SELECT_AUTHOR
        ]);
        return WRAPPER_Page;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_MEDIA();

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#OPTIONS();
        await this.#TEXT();
        await this.#SELECT();

    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Author-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'SELECT AN AUTHOR';
    };
    async #SELECT(){
        this.SELECT_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Author-Name'
        }).INIT();
    };
    async #OPTIONS(){
        this.OPTIONS_AUTHOR = this.SESSION.MEDIA.BOOKS.LISTS.AUTHORS;
        this.OPTIONS_AUTHOR.unshift('CHOOSE AN AUTHOR');
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_AUTHOR(){
        const HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_AUTHOR);
    };
}