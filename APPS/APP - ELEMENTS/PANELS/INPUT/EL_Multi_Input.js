import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_Multi_Input {

    constructor(){

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_INPUT = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.ACTIVE_INPUTS = [];

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_INPUT = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_GENERATE = 'UNSET';

        // ================== //
        // ## INSTRUCTIONS ## //
        // ================== //

        this.INSTRUCTIONS_NUMBER = 'UNSET';

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

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_INPUT = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_ADD_INPUT();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_INPUT.append(...[
            this.HEADER_INPUT,
            this.INSTRUCTIONS_NUMBER,
            this.LABEL_NUMBER,
            this.SELECT_NUMBER,
            this.BUTTON_GENERATE,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_INPUT;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_ADD_INPUT() {
        this.BUTTON_GENERATE.addEventListener('click', (event) => {
            console.log('GENERATING')
            let NUMBER = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_NUMBER);
            for (let index = 0; index < NUMBER; index++) {
                let INPUT = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'input',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_MultiInput-Number',
                }).INIT().then((RESULT) => {
                    this.WRAPPER_DISPLAY.append(RESULT);
                    this.ACTIVE_INPUTS.push(RESULT);
                    return RESULT
                })
                console.log(this.ACTIVE_INPUTS)
            };
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============== //
        // << SESSIONS >> //
        // ============== //

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#OPTIONS();
        await this.#HEADERS();
        await this.#INSTRUCTIONS();
        await this.#LABELS();
        await this.#SELECT();
        await this.#BUTTONS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){
        this.HEADER_INPUT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_MultiInput-Title',
        }).INIT();

        this.HEADER_INPUT.innerHTML = 'UNSET';
    };
    async #INSTRUCTIONS(){
        this.INSTRUCTIONS_NUMBER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'INSTRUCTIONS_MultiInput-Number',
        }).INIT();

        this.INSTRUCTIONS_NUMBER.innerHTML = 'Choose the number of entries you want to add';
    };
    async #LABELS(){
        this.LABEL_NUMBER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_MultiInput-Number',
        }).INIT();

        this.LABEL_NUMBER.innerHTML = 'Choose a number';
    };
    async #SELECT(){
        this.SELECT_NUMBER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_MultiInput-Number',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_NUMBER
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_NUMBER = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ];
    };
    async #BUTTONS() {
        this.BUTTON_GENERATE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_MultiInput-Generate',
        }).INIT();

        this.BUTTON_GENERATE.innerHTML = 'CREATE';
    };

    // ============== //
    // ## SETTINGS ## //
    // ============== //

    SET_HEADER(PARAMETER_VALUE) {this.HEADER_INPUT.innerHTML = `INPUT ${PARAMETER_VALUE}`};
    GET_INPUT_VALUES() {
        let VALUES = [];
        for (let index = 0; index < this.ACTIVE_INPUTS.length; index++) {
            const INPUT = this.ACTIVE_INPUTS[index].value;
            VALUES.push(INPUT)
        };
        return VALUES
    };
}