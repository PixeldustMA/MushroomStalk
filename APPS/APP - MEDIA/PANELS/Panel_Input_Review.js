import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../APP - JELLYFISH/CREATE/Create.js";

export default class Panel_Input_Review extends Stalk{

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

        this.LABEL_DESCRIPTION = 'UNSET';
        this.LABEL_CODE = 'UNSET';
        this.LABEL_STARS = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_STARS = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_CODE = 'UNSET';

        // =========== //
        // ## TEXTAREA ## //
        // =========== //

        this.WRITABLE_DESCRIPTION = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_STARS = 'UNSET';

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
            this.LABEL_STARS,
            this.SELECT_STARS,
            this.LABEL_CODE,
            this.INPUT_CODE,
            this.LABEL_DESCRIPTION,
            this.WRITABLE_DESCRIPTION
        ]);        
        return this.WRAPPER_REVIEW;
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
        this.HEADER_REVIEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.HEADER_REVIEW.innerHTML = 'REVIEW';
    };
    async #LABELS() {
        this.LABEL_CODE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.LABEL_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.LABEL_STARS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.LABEL_TBR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();

        this.LABEL_TBR.innerHTML = 'Add this to your TBR?';

        this.LABEL_CODE.innerHTML = 'Give the book a description code';
        this.LABEL_DESCRIPTION.innerHTML = 'Describe the book';
        this.LABEL_STARS.innerHTML = 'Give the book a star rating';
    };
    async #INPUT(){
        this.INPUT_SERIES_POSITION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_COFIG_PERSONALITY_ID: 'INPUT_Bookshop-Title',
        }).INIT();
        this.INPUT_SERISE_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_COFIG_PERSONALITY_ID: 'INPUT_Bookshop-Title',
        }).INIT();
    };
    async #SELECT() {
        this.SELECT_TBR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Bookshop-Genre',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_TBR
        }).INIT();
        this.SELECT_STARS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Bookshop-Genre',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_STARS
        }).INIT();
    };
    async #OPTIONS(){
        this.OPTIONS_STARS = [
            'CHOOSE A RATING',
            "1",
            "2",
            "3",
            "4",
            "5"
        ];
        this.OPTIONS_TBR = [
            'ADD THIS TO TBR?',
            'YES',
            'NO'
        ]
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_STATUS() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_SERIES)};
    GET_NAME() {return this.INPUT_SERISE_NAME.value};
    GET_POSITION() {return this.INPUT_SERIES_POSITION.value};
};