import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_CAT_INPUT_Description {

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        // super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_DESCRIPTION = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_DESCRIPTION = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_DESCRIPTION_TEXT = 'UNSET';
        this.LABEL_DESCRIPTION_CODE = 'UNSET';

        // ================== //
        // ## INSTRUCTIONS ## //
        // ================== //

        this.INSTRUCTIONS_CODE = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_CODE = 'UNSET';

        // ============== //
        // ## WRITABLE ## //
        // ============== //

        this.WRITABLE_DESCRIPTION = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DESCRIPTION = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DESCRIPTION.append(...[
            this.HEADER_DESCRIPTION,
            this.INSTRUCTIONS_CODE,
            this.LABEL_DESCRIPTION_CODE,
            this.INPUT_CODE,

            this.LABEL_DESCRIPTION_TEXT,
            this.WRITABLE_DESCRIPTION
        ]);
        return this.WRAPPER_DESCRIPTION;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#HEADERS();
        await this.#LABELS();
        await this.#INSTRUCTIONS();
        await this.#INPUT();
        await this.#WRITABLE();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Description-Title'
        }).INIT();

        this.HEADER_DESCRIPTION.innerHTML = 'DESCRIPTION';
    };
    async #LABELS() {
        this.LABEL_DESCRIPTION_CODE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Description-Code'
        }).INIT();
        this.LABEL_DESCRIPTION_TEXT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Description-Text'
        }).INIT();

        this.LABEL_DESCRIPTION_CODE.innerHTML = 'Input new element category description code';
        this.LABEL_DESCRIPTION_TEXT.innerHTML = 'Input new element category description';
    };
    async #INSTRUCTIONS() {
        this.INSTRUCTIONS_CODE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'INSTRUCTIONS_Description-Code'
        }).INIT();
        this.INSTRUCTIONS_CODE.innerHTML = 'Code should be 4 letters long';
    };
    async #INPUT() {
        this.INPUT_CODE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Description-Code'
        }).INIT();
    };
    async #WRITABLE() {
        this.WRITABLE_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'TEXTAREA',
            CREATE_CONFIG_PERSONALITY_ID: 'WRITABLE_Description-Text'
        }).INIT();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_CODE(){return this.INPUT_CODE.value;};
    GET_DESCRIPTION() {return this.WRITABLE_DESCRIPTION.value;};
};