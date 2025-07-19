import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_INPUT_Physical {

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        // super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_PHYSICAL = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_COLOUR = 'UNSET';
        this.HEADER_USE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_COLOUR = 'UNSET';
        this.LABEL_USE = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_COLOUR = 'UNSET';
        this.INPUT_USE = 'UNSET';

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_PHYSICAL = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_PHYSICAL.append(...[
            this.HEADER_COLOUR,
            this.LABEL_COLOUR,
            this.INPUT_COLOUR,

            this.HEADER_USE,
            this.LABEL_USE,
            this.INPUT_USE
        ]);
        return this.WRAPPER_PHYSICAL;
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
        await this.#INPUT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Physical-Colour'
        }).INIT();
        this.HEADER_USE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Physical-Use'
        }).INIT();

        this.HEADER_COLOUR.innerHTML = 'COLOUR';
        this.HEADER_USE.innerHTML = 'USAGE';
    };
    async #LABELS() {
        this.LABEL_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Physical-Colour'
        }).INIT();
        this.LABEL_USE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Physical-Use'
        }).INIT();

        this.LABEL_COLOUR.innerHTML = 'Input a colour that represents the element';
        this.LABEL_USE.innerHTML = 'Input a primary use for the element';
    };
    async #INPUT() {
        this.INPUT_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Physical-Colour'
        }).INIT();
        this.INPUT_USE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Physical-Use'
        }).INIT();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_COLOUR(){return this.INPUT_COLOUR.value;};
    GET_USE(){return this.INPUT_USE.value;};
};