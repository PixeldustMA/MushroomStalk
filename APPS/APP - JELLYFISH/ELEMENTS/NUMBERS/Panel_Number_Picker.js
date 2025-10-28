import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../CREATE/Create.js";

export default class Panel_Number_Picker {

    constructor() {

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_NUMBERS = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_NUMBER = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_NUMBER = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_NUMBER = [];

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_NUMBERS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_NUMBERS.append(...[
            this.LABEL_NUMBER,
            this.SELECT_NUMBER
        ]);        
        return this.WRAPPER_NUMBERS;

    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(PARAMETER_NUMBER) {

        this.SETTING_NUMBER = PARAMETER_NUMBER;
        await this.#OPTIONS();
        await this.#LABELS();
        await this.#SELECT();
        await this.#TEXT_SETTINGS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #LABELS() {
        this.LABEL_NUMBER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Number-Select',
        }).INIT();
    };
    async #SELECT() {
        this.SELECT_NUMBER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Number-Number',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_NUMBER
        }).INIT();
    };
    async #OPTIONS() {
        for (let index = 1; index < this.SETTING_NUMBER + 1; index++) {
            this.OPTIONS_NUMBER.push(index);
        };
        this.OPTIONS_NUMBER.unshift('CHOOSE A NUMBER');
    };
    async #TEXT_SETTINGS() {
        this.LABEL_NUMBER.innerHTML = 'Select A Number';
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_NUMBER() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_NUMBER)};
};