import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class Panel_Select_Genre extends Stalk{

    constructor(){

        super();

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_SEARCH = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';
        this.WRAPPER_MAIN = 'UNSET';
        this.WRAPPER_SUB = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_GENRE = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_GENRE = 'UNSET';
        this.SELECT_SUBGENRE = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_GENRE = 'UNSET';
        this.OPTIONS_SUBGENRE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_GENRE = 'UNSET';
        this.LABEL_SUBGENRE = 'UNSET';

        // ============ //
        // ## BUTTON ## //
        // ============ //

        this.BUTTON_SEARCH_MAIN = 'UNSET';
        this.BUTTON_SEARCH_SUB = 'UNSET'

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});

        this.ACTIVE_STYLE = 'UNSET'
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SEARCH = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_GENRE_SEARCH();
        this.ACTIVATE_SUBGENRE_SEARCH();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SEARCH.append(...[
            this.HEADER_GENRE,
            this.BUTTON_SEARCH_MAIN,
            this.BUTTON_SEARCH_SUB,
            this.WRAPPER_DISPLAY
        ]);        
        return this.WRAPPER_SEARCH;
    };
    PANEL_MAIN_ONLY() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_MAIN = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_MAIN.append(...[
            this.LABEL_GENRE,
            this.SELECT_GENRE
        ]);        
        return this.WRAPPER_MAIN;
    };
    PANEL_SUB() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SUB = new Connector_Jellyfish().INITIALISE_WRAPPER();

        this.ACTIVATE_LOAD_SUBGENRE();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SUB.append(...[
            this.LABEL_GENRE,
            this.SELECT_GENRE,
            this.LABEL_SUBGENRE,
            this.SELECT_SUBGENRE
        ]);        
        return this.WRAPPER_SUB;
    };

    // ================ //
    //  ## LISTENERS ## //
    // ================ //

    ACTIVATE_GENRE_SEARCH() {
        this.BUTTON_SEARCH_MAIN.addEventListener('click', (event) => {

            if (this.WRAPPER_DISPLAY.hasChildNodes) {
                this.WRAPPER_DISPLAY.replaceChildren();
            }
            this.WRAPPER_DISPLAY.append(this.PANEL_MAIN_ONLY());
            this.ACTIVE_STYLE = 'MAIN';
        });
    };
    ACTIVATE_SUBGENRE_SEARCH() {
        this.BUTTON_SEARCH_SUB.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_SUB());
            this.ACTIVE_STYLE = 'SUB';
        });
    };
    ACTIVATE_LOAD_SUBGENRE() {
        this.SELECT_GENRE.addEventListener('change', (event) => {

            let ACTIVE_OPTIONS = this.SESSION.MEDIA.GENRE.DATA[this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_GENRE)].SUBGENRE;
            ACTIVE_OPTIONS.unshift('CHOOSE SUBGENRE')
            this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_SUBGENRE, ACTIVE_OPTIONS);
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.REQUEST_SESSION_MEDIA();
        console.log(this.SESSION)
        await this.#OPTIONS();
        await this.#SELECT();
        await this.#HEADERS();
        await this.#LABELS();
        await this.#BUTTONS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        this.HEADER_GENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h4',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();

        this.HEADER_GENRE.innerHTML = 'GENRE SEARCH';
    };
    async #LABELS(){

        this.LABEL_GENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_UpdateAuthor-Author',
        }).INIT();
        this.LABEL_SUBGENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_UpdateAuthor-Author',
        }).INIT();

        this.LABEL_GENRE.innerHTML = 'Choose a main genre';
        this.LABEL_SUBGENRE.innerHTML = 'Choose a sub genre';
    };
    async #BUTTONS() {
        this.BUTTON_SEARCH_MAIN = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_UpdateAuthor-Author',
        }).INIT();
        this.BUTTON_SEARCH_SUB = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_UpdateAuthor-Author',
        }).INIT();
        this.BUTTON_SEARCH_MAIN.innerHTML = 'MAIN';
        this.BUTTON_SEARCH_SUB.innerHTML = 'SUB';
    }
    async #SELECT() {
        this.SELECT_GENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_UpdateAuthor-Author',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_GENRE
        }).INIT();
        this.SELECT_SUBGENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_UpdateAuthor-Author',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SUBGENRE
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_GENRE = this.SESSION.MEDIA.GENRE.LIST;
        this.OPTIONS_GENRE.unshift('CHOOSE A GENRE');
        this.OPTIONS_SUBGENRE = ['CHOOSE A SUBGENRE'];
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //
    
    GET_GENRE(){
        return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_GENRE);
    };
    GET_SUBGENRE() {
        return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_SUBGENRE);
    };
}