import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class Panel_Select_Author extends Stalk{

    constructor(){

        super();

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_AUTHOR = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_AUTHOR = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_AUTHOR = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_AUTHOR = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_AUTHOR = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_AUTHOR = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_AUTHOR.append(...[
            this.HEADER_AUTHOR,
            this.LABEL_AUTHOR,
            this.SELECT_AUTHOR
        ]);        
        return this.WRAPPER_AUTHOR;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.REQUEST_SESSION_MEDIA();

        await this.#OPTIONS();
        await this.#SELECT();
        await this.#HEADERS();
        await this.#LABELS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        this.HEADER_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h4',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_UpdateAuthor-Author',
        }).INIT();

        this.HEADER_AUTHOR.innerHTML = 'AUTHOR SEARCH';
    };
    async #LABELS(){

        this.LABEL_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_UpdateAuthor-Author',
        }).INIT();

        this.LABEL_AUTHOR.innerHTML = 'Choose an author from the list';
    };
    async #SELECT() {
        this.SELECT_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_UpdateAuthor-Author',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_AUTHOR
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_AUTHOR = this.SESSION.MEDIA.AUTHORS.LIST;
        this.OPTIONS_AUTHOR.unshift('CHOOSE AN AUTHOR');
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //
    
    GET_AUTHOR(){
        return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_AUTHOR);
    };
}