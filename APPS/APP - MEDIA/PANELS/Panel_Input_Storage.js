import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../APP - JELLYFISH/CREATE/Create.js";

export default class Panel_Input_Storage extends Stalk{

    constructor(){

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_REVIEW = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_REVIEW = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_LOCATION = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_LOCATION = 'UNSET';

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
            this.HEADER_REVIEW,
            this.LABEL_LOCATION,
            this.INPUT_LOCATION
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
        this.HEADER_REVIEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.HEADER_REVIEW.innerHTML = 'REVIEW';
    };
    async #LABELS() {
        this.LABEL_LOCATION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();

        this.LABEL_LOCATION.innerHTML = 'Where was this book last seen?';
    };
    async #INPUT(){
        this.INPUT_LOCATION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_COFIG_PERSONALITY_ID: 'INPUT_Bookshop-Title',
        }).INIT();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_LOCATION() {return this.INPUT_LOCATION.value};
};