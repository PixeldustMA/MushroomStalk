import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../APP - JELLYFISH/CREATE/Create.js";

export default class Panel_Input_Series extends Stalk{

    constructor(){

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_SERIES = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_SERIES = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_SERIES = 'UNSET';
        this.LABEL_SERIES_NAME = 'UNSET';
        this.LABEL_SERIES_POSITION = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_SERIES = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_SERIES = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
    };

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SERIES = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SERIES.append(...[
            this.HEADER_SERIES,
            this.LABEL_SERIES,
            this.SELECT_SERIES,
            this.LABEL_SERIES_NAME,
            this.INPUT_SERISE_NAME,
            this.LABEL_SERIES_POSITION,
            this.INPUT_SERIES_POSITION
        ]);        
        return this.WRAPPER_SERIES;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_NEW_SERIES() {
        this.BUTTON_NEW.addEventListener('click', (EVENT_NEW) => {
            // PANEL THAT INPUTS DETAILS FOR NEW SERIES
        });
    };
    #ACTIVATE_EXISTING_SERIES() {};

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
        this.HEADER_SERIES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.HEADER_SERIES.innerHTML = 'SERIES DATA';
    };
    async #LABELS() {
        this.LABEL_SERIES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.LABEL_SERIES_POSITION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();
        this.LABEL_SERIES_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bookshop-Author',
        }).INIT();

        this.LABEL_SERIES_POSITION.innerHTML = 'Where is this book in the series?';
        this.LABEL_SERIES_NAME.innerHTML = 'Give name of series';
        this.LABEL_SERIES.innerHTML = 'Is this book part of a series?';
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
        this.SELECT_SERIES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Bookshop-Genre',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SERIES
        }).INIT();
    };
    async #OPTIONS(){
        this.OPTIONS_SERIES = [
            'IS THIS A SERIES?',
            'YES',
            'NO'
        ];
    };
    async #BUTTON() {
        this.BUTTON_NEW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Bookshop-Genre'
        }).INIT();
        this.BUTTON_EXISTING = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Bookshop-Genre'
        }).INIT();

        this.BUTTON_NEW.innerHTML = 'NEW SERIES';
        this.BUTTON_EXISTING.innerHTML = 'EXISTING';
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_STATUS() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_SERIES)};
    GET_NAME() {return this.INPUT_SERISE_NAME.value};
    GET_POSITION() {return this.INPUT_SERIES_POSITION.value};
};