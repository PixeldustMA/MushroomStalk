import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../APP - JELLYFISH/CREATE/Create.js";
import Draw_Alphabet from "../../APP - JELLYFISH/ELEMENTS/ALPHABET/Draw_Alphabet.js";
import Panel_Select_Author from "./AUTHORS/Panel_Select_Author.js";
import Panel_Select_Genre from "./GENRE/Panel_Search_Genre.js";

export default class Panel_Search_Book extends Stalk{

    constructor(){

        super();

        this.BUTTON_FILTER_LETTER = 'UNSET';
        this.BUTTON_FILTER_AUTHOR = 'UNSET';
        this.BUTTON_FILTER_GENRE = 'UNSET';

        this.SELECT_LETTER = 'UNSET';
        this.SELECT_AUTHOR = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_ALPHABET = new Draw_Alphabet();
        this.BLOCK_AUTHOR = new Panel_Select_Author();
        this.BLOCK_GENRE = new Panel_Select_Genre();
        this.BLOCK_CREATE = new Create({});
    };

    // ========== //
    // ## LOAD ## //
    // ========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SEARCH = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_FILTER_AUTHOR();
        this.ACTIVATE_FILTER_GENRE();
        this.ACTIVATE_FILTER_LETTER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SEARCH.append(...[
            this.HEADER_SEARCH,
            this.LABEL_SEARCH,
            this.BUTTON_FILTER_AUTHOR,
            this.BUTTON_FILTER_GENRE,
            this.BUTTON_FILTER_LETTER,
            this.WRAPPER_DISPLAY
        ]);        
        return this.WRAPPER_SEARCH;
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_DISPLAY_ALPHABET() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ALPHABET = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_CHOICE_LETTER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ALPHABET.append(...[
            this.BLOCK_ALPHABET.DRAW(),
            this.BUTTON_CHOICE_ALPHABET,
            this.PANEL_DISPLAY_CHOICE()
        ]);        
        return this.WRAPPER_ALPHABET;
    };
    PANEL_DISPLAY_AUTHOR(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_AUTHOR = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_CHOICE_AUTHOR();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_AUTHOR.append(...[
            this.BLOCK_AUTHOR.DRAW(),
            this.BUTTON_CHOICE_AUTHOR,
            this.PANEL_DISPLAY_CHOICE()
        ]);        
        return this.WRAPPER_AUTHOR;
    };
    PANEL_DISPLAY_GENRE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_GENRE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_CHOICE_GENRE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_GENRE.append(...[
            this.BLOCK_GENRE.DRAW(),
            this.BUTTON_CHOICE_GENRE
        ]);        
        return this.WRAPPER_GENRE;
    };
    PANEL_DISPLAY_CHOICE(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_CHOICE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CHOICE.append(...[

        ]);        
        return this.WRAPPER_CHOICE;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_FILTER_LETTER(){
        this.BUTTON_FILTER_LETTER.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_DISPLAY_ALPHABET());
            this.ACTIVE_STYLE = 'LETTER';
        });
    };
    ACTIVATE_FILTER_AUTHOR(){
        this.BUTTON_FILTER_AUTHOR.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_DISPLAY_AUTHOR());
            this.ACTIVE_STYLE = 'AUTHOR';
        });
    };
    ACTIVATE_FILTER_GENRE(){
        this.BUTTON_FILTER_GENRE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_DISPLAY_GENRE());
            this.ACTIVE_STYLE = 'GENRE';
        });
    };
    ACTIVATE_CHOICE_LETTER(){
        this.BUTTON_CHOICE_ALPHABET.addEventListener('click', (event) => {
            let LIST = this.SESSION.MEDIA.BOOKS.LISTS.BOOK;
            for (let index = 0; index < LIST.length; index++) {
                const BOOK = LIST[index];
                if (BOOK[0] === this.BLOCK_ALPHABET.GET_LETTER()) {
                    this.ACTIVATE_GENERATE_BUTTON(BOOK).then((result) => {return result});
                };
            };
        });
    };
    ACTIVATE_CHOICE_AUTHOR(){
        this.BUTTON_CHOICE_AUTHOR.addEventListener('click', (event) => {
            let LIST = this.SESSION.MEDIA.AUTHORS.DATA[this.BLOCK_AUTHOR.GET_AUTHOR()].WORK.BOOKS;
            for (let index = 0; index < LIST.length; index++) {
                const BOOK = LIST[index];
                this.ACTIVATE_GENERATE_BUTTON(BOOK).then((result) => {return result});
            };
        });
    };
    ACTIVATE_CHOICE_GENRE(){
        this.BUTTON_CHOICE_GENRE.addEventListener('click', (event) => {
            if (this.BLOCK_GENRE.ACTIVE_STYLE === 'MAIN') {
                let LIST = this.SESSION.MEDIA.GENRE.DATA[this.BLOCK_GENRE.GET_GENRE()].BOOKS;
                for (let index = 0; index < LIST.length; index++) {
                    const BOOK = LIST[index];
                    this.ACTIVATE_GENERATE_BUTTON(BOOK).then((result) => {return result});
                };
            }
            else if (this.BLOCK_GENRE.ACTIVE_STYLE === 'SUB'){
                let LIST = this.SESSION.MEDIA.GENRE.DATA[this.BLOCK_GENRE.GET_GENRE()][this.BLOCK_GENRE.GET_SUBGENRE()].BOOKS;
                for (let index = 0; index < LIST.length; index++) {
                    const BOOK = LIST[index];
                    this.ACTIVATE_GENERATE_BUTTON(BOOK).then((result) => {return result});
                };
            }
        });
    };
    async ACTIVATE_GENERATE_BUTTON(PARAMETER_BUTTON_NAME){
        let BUTTON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();
        BUTTON.innerHTML = PARAMETER_BUTTON_NAME
        this.WRAPPER_CHOICE.append(BUTTON);
        BUTTON.addEventListener('click', (event) => {
            this.ACTIVE_BOOK = PARAMETER_BUTTON_NAME
        })
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============== //
        // << SESSIONS >> //
        // ============== //

        await this.REQUEST_SESSION_MEDIA();

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#BLOCKS();
        await this.#BUTTONS();
        await this.#HEADERS();
        await this.#LABELS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #BLOCKS() {
        await this.BLOCK_ALPHABET.INITIALISE();
        await this.BLOCK_AUTHOR.INITIALISE();
        await this.BLOCK_GENRE.INITIALISE();
    };
    async #BUTTONS() {

        this.BUTTON_FILTER_LETTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();
        this.BUTTON_FILTER_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();
        this.BUTTON_FILTER_GENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();
        this.BUTTON_CHOICE_ALPHABET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();
        this.BUTTON_CHOICE_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();
        this.BUTTON_CHOICE_GENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();

        this.BUTTON_CHOICE_ALPHABET.innerHTML = 'ALPHABET';
        this.BUTTON_CHOICE_AUTHOR.innerHTML = 'AUTHOR';
        this.BUTTON_CHOICE_GENRE.innerHTML = 'GENRE';
        this.BUTTON_FILTER_LETTER.innerHTML = 'ALPHABET';
        this.BUTTON_FILTER_AUTHOR.innerHTML = 'AUTHOR';
        this.BUTTON_FILTER_GENRE.innerHTML = 'GENRE';
    };
    async #HEADERS() {
        this.HEADER_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();
        this.HEADER_SEARCH.innerHTML = 'SEARCH BOOKS'
    };
    async #LABELS() {
        this.LABEL_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();
        this.LABEL_SEARCH.innerHTML = 'Choose how to search'
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_BOOK() {
        return this.ACTIVE_BOOK;
    }
};