import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../APP - JELLYFISH/CREATE/Create.js";

export default class Panel_Input_Basics extends Stalk{

    constructor(){

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_BASICS = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_BASICS = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_AUTHOR = 'UNSET';
        this.LABEL_NAME = 'UNSET';
        this.LABEL_GENRE = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_AUTHOR = 'UNSET';
        this.SELECT_GENRE = 'UNSET';
        this.SELECT_SUBGENRE = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_BOOK_NAME = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_AUTHORS = 'UNSET';
        this.OPTIONS_GENRE = 'UNSET';
        this.OPTIONS_SUBGENRE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
    };

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BASICS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SUBGENRE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BASICS.append(...[
            this.HEADER_BASICS,

            this.LABEL_NAME,
            this.INPUT_BOOK_NAME,

            this.LABEL_AUTHOR,
            this.SELECT_AUTHOR,

            this.LABEL_GENRE,
            this.SELECT_GENRE,

            this.LABEL_SUBGENRE,
            this.SELECT_SUBGENRE,
        ]);        
        return this.WRAPPER_BASICS;
    };

    ACTIVATE_SUBGENRE() {
        this.SELECT_GENRE.addEventListener('change', (event) => {
            let TAG = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_GENRE);
            this.OPTIONS_SUBGENRE = this.SESSION.MEDIA.GENRE.DATA[TAG].SUBGENRE;
            this.OPTIONS_SUBGENRE.unshift('CHOOSE SUBGENRE');
            this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_SUBGENRE, this.OPTIONS_SUBGENRE)
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.REQUEST_SESSION_MEDIA();

        await this.#OPTIONS();
        await this.#HEADERS();
        await this.#LABELS();
        await this.#SELECT();
        await this.#INPUT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_BASICS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.HEADER_BASICS.innerHTML = 'BASICS';
    };
    async #LABELS() {
        this.LABEL_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.LABEL_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.LABEL_GENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.LABEL_SUBGENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();

        this.LABEL_NAME.innerHTML = 'Give the book a name';
        this.LABEL_AUTHOR.innerHTML = 'Choose an author';
        this.LABEL_GENRE.innerHTML = 'Choose a genre';
        this.LABEL_SUBGENRE.innerHTML = 'Choose a subgenre'
    };
    async #INPUT(){
        this.INPUT_BOOK_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_COFIG_PERSONALITY_ID: 'INPUT_Bookshop-Title',
        }).INIT();
    };
    async #SELECT() {
        this.SELECT_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Bookshop-Author',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_AUTHORS
        }).INIT();
        this.SELECT_GENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Bookshop-Genre',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_GENRE
        }).INIT();
        this.SELECT_SUBGENRE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Bookshop-Genre',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SUBGENRE
        }).INIT();
    };
    async #OPTIONS(){
        this.OPTIONS_AUTHORS = this.SESSION.MEDIA.AUTHORS.LIST;
        this.OPTIONS_AUTHORS.unshift('CHOOSE AN AUTHOR');

        this.OPTIONS_GENRE = this.SESSION.MEDIA.GENRE.LIST;
        this.OPTIONS_GENRE.unshift('CHOOSE A GENRE');

        this.OPTIONS_SUBGENRE = ['CHOOSE A SUBGENRE'];
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_BOOK() {return this.INPUT_BOOK_NAME.value};
    GET_AUTHOR() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_AUTHOR)};
    GET_GENRE() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_GENRE)};
    GET_SUBGENRE() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_SUBGENRE)}
};