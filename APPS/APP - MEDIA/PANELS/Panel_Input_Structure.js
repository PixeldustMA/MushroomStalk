import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../APP - JELLYFISH/CREATE/Create.js";

export default class Panel_Input_Structure extends Stalk{

    constructor(){

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_REVIEW = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_BASICS = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_PAGE_COUNT = 'UNSET';
        this.LABEL_LANGUAGE = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_PAGE_COUNT = 'UNSET';
        this.INPUT_LANGUAGE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
    };

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_REVIEW = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_REVIEW.append(...[
            this.HEADER_BASICS,
            this.LABEL_PAGE_COUNT,
            this.INPUT_PAGE_COUNT,
            this.LABEL_LANGUAGE,
            this.INPUT_LANGUAGE
        ]);        
        return this.WRAPPER_REVIEW;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.REQUEST_SESSION_MEDIA();

        await this.#HEADERS();
        await this.#LABELS();
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
        this.HEADER_BASICS.innerHTML = 'STRUCTURE';
    };
    async #LABELS() {
        this.LABEL_PAGE_COUNT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.LABEL_LANGUAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();

        this.LABEL_PAGE_COUNT.innerHTML = 'Input the total page count of the book';
        this.LABEL_LANGUAGE.innerHTML = 'Input language';
    };
    async #INPUT(){
        this.INPUT_PAGE_COUNT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_COFIG_PERSONALITY_ID: 'INPUT_Bookshop-Title',
        }).INIT();
        this.INPUT_LANGUAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_COFIG_PERSONALITY_ID: 'INPUT_Bookshop-Title',
        }).INIT();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_PAGE_COUNT() {return this.INPUT_PAGE_COUNT.value};
    GET_LANGUAGE() {return this.INPUT_LANGUAGE.value};
};