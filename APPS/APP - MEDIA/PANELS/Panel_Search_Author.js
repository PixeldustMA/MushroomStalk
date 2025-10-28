import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../APP - JELLYFISH/CREATE/Create.js";
import Panel_Select_Author from "./Panel_Select_Author.js";

export default class Panel_Search_Author extends Stalk{

    constructor(){

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_AUTHOR = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_SEARCH = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_SEARCH = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_BOOK = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_BOOKS = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
        this.BLOCK_AUTHOR = new Panel_Select_Author();
    };

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_AUTHOR = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BOOK_LIST();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_AUTHOR.append(...[
            this.HEADER_SEARCH,
            this.BLOCK_AUTHOR.DRAW(),
            this.LABEL_SEARCH,
            this.SELECT_BOOK
        ]);        
        return this.WRAPPER_AUTHOR;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //
    
    ACTIVATE_BOOK_LIST() {
        this.BLOCK_AUTHOR.SELECT_AUTHOR.addEventListener('change', (event) => {
            let LIST = this.SESSION.MEDIA.BOOKS.DATA.AUTHOR[this.BLOCK_AUTHOR.GET_AUTHOR()].BOOKS;
            LIST.unshift('CHOOSE A BOOK');
            this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_BOOK, LIST);
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.REQUEST_SESSION_MEDIA();
        await this.#BLOCKS();
        await this.#OPTIONS();
        await this.#HEADERS();
        await this.#LABELS();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #BLOCKS(){
        await this.BLOCK_AUTHOR.INITIALISE();
    };
    async #HEADERS() {
        this.HEADER_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();
        this.HEADER_SEARCH.innerHTML = 'SEARCH AUTHORS'
    };
    async #LABELS() {
        this.LABEL_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_UpdateAuthor-Author',
        }).INIT();
        this.LABEL_SEARCH.innerHTML = 'Choose a book'
    };
    async #SELECT() {
        this.SELECT_BOOK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_UpdateAuthor-Author',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_BOOKS
        }).INIT();
        this.SELECT_BOOK.innerHTML = 'Choose a book'
    };
    async #OPTIONS(){
        this.OPTIONS_BOOKS = ['X-X-X-X-X-X-X-X-X'];
    };
};